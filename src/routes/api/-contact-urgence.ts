// src/routes/api/contact-urgence.ts
// Server Function : formulaire urgence (avec diagnostic IA) → email prioritaire

import { createAPIFileRoute } from "@tanstack/react-start/api"
import { z } from "zod"

const UrgenceContactSchema = z.object({
  nom: z.string().min(2).max(100),
  tel: z.string().min(8).max(20),
  adresse: z.string().max(200).optional(),
  diagnostic: z
    .object({
      piece: z.string(),
      urgence_score: z.number().int().min(1).max(5),
      diagnostic: z.string(),
      actions_immediates: z.array(z.string()),
      delai_recommande: z.string(),
    })
    .nullable()
    .optional(),
})

const scoreLabels: Record<number, string> = {
  1: "Non urgent",
  2: "Peu urgent",
  3: "À traiter rapidement",
  4: "🚨 URGENT",
  5: "🔴 TRÈS URGENT",
}

export const APIRoute = createAPIFileRoute("/api/contact-urgence")({
  POST: async ({ request }) => {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return new Response("JSON invalide", { status: 400 })
    }

    const result = UrgenceContactSchema.safeParse(body)
    if (!result.success) {
      return new Response(JSON.stringify({ errors: result.error.flatten() }), {
        status: 422,
        headers: { "Content-Type": "application/json" },
      })
    }
    const data = result.data
    const score = data.diagnostic?.urgence_score ?? 0
    const scoreLabel = scoreLabels[score] ?? ""

    const apiKey = process.env["RESEND_API_KEY"]
    const emailTo = process.env["EMAIL_TO"] ?? "contact@nino-plomberie31.fr"
    const emailFrom = process.env["EMAIL_FROM"] ?? "noreply@ninoplomberie31.fr"

    if (!apiKey) {
      console.log("[urgence-contact] RESEND_API_KEY missing — dev mode:", data)
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }

    const urgentBanner =
      score >= 4
        ? `<div style="background:#fee2e2;border:2px solid #f87171;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-family:sans-serif;font-weight:bold;color:#991b1b;font-size:16px">
          ⚠️ ${scoreLabel} — Répondre IMMÉDIATEMENT
        </div>`
        : ""

    const emailHtml = `
<h2 style="color:#7c2d12;font-family:sans-serif">Demande urgence photo IA — Nino Plomberie 31</h2>
${urgentBanner}
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
  <tr><td style="padding:8px;font-weight:bold;background:#fff7ed;width:160px">Nom</td><td style="padding:8px">${data.nom}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;background:#fff7ed">Téléphone</td><td style="padding:8px"><a href="tel:${data.tel}" style="color:#c2410c;font-weight:bold;font-size:16px">${data.tel}</a></td></tr>
  ${data.adresse ? `<tr><td style="padding:8px;font-weight:bold;background:#fff7ed">Adresse</td><td style="padding:8px">${data.adresse}</td></tr>` : ""}
</table>

${
  data.diagnostic
    ? `<h3 style="font-family:sans-serif;color:#1e3a5f;margin-top:24px">Diagnostic IA</h3>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
  <tr><td style="padding:8px;font-weight:bold;background:#f9fafb;width:160px">Élément concerné</td><td style="padding:8px">${data.diagnostic.piece}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Score urgence</td><td style="padding:8px"><strong>${score}/5 — ${scoreLabel}</strong></td></tr>
  <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Diagnostic</td><td style="padding:8px">${data.diagnostic.diagnostic}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Délai</td><td style="padding:8px">${data.diagnostic.delai_recommande}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Actions</td><td style="padding:8px">${data.diagnostic.actions_immediates.map((a) => `• ${a}`).join("<br/>")}</td></tr>
</table>`
    : ""
}

<p style="font-family:sans-serif;color:#6b7280;font-size:12px;margin-top:24px">Envoyé depuis ninoplomberie31.fr le ${new Date().toLocaleString("fr-FR")}</p>
`

    const subjectPrefix = score >= 4 ? `🚨 URGENT` : `📸 Diagnostic IA`

    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: [emailTo],
          subject: `[Nino Plomberie 31] ${subjectPrefix} — ${data.nom} — Score ${score}/5`,
          html: emailHtml,
        }),
      })

      if (!resendRes.ok) {
        console.error("[urgence-contact] Resend error:", await resendRes.text())
        return new Response("Erreur envoi email", { status: 502 })
      }
    } catch (err) {
      console.error("[urgence-contact] fetch failed:", err)
      return new Response("Erreur réseau", { status: 502 })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  },
})
