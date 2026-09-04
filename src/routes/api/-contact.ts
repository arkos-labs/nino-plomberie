// src/routes/api/contact.ts
// Server Function : formulaire contact → envoi email via Resend

import { createAPIFileRoute } from "@tanstack/react-start/api"
import { z } from "zod"

const ContactSchema = z.object({
  nom: z.string().min(2).max(100),
  email: z.string().email().optional().or(z.literal("")),
  tel: z.string().min(8).max(20),
  ville: z.string().max(100).optional(),
  sujet: z.string().max(100),
  message: z.string().max(2000).optional(),
  photo: z.object({
    filename: z.string(),
    content: z.string(),
  }).optional(),
})

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    // ── 1. Parse body ─────────────────────────────────────────────────────
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return new Response("JSON invalide", { status: 400 })
    }

    // ── 2. Validate ───────────────────────────────────────────────────────
    const result = ContactSchema.safeParse(body)
    if (!result.success) {
      return new Response(JSON.stringify({ errors: result.error.flatten() }), {
        status: 422,
        headers: { "Content-Type": "application/json" },
      })
    }
    const data = result.data

    // ── 3. Send email via Resend ──────────────────────────────────────────
    const apiKey = process.env["RESEND_API_KEY"]
    const emailTo = process.env["EMAIL_TO"] ?? "contact@nino-plomberie31.fr"
    const emailFrom = process.env["EMAIL_FROM"] ?? "noreply@ninoplomberie31.fr"

    if (!apiKey) {
      // Dev fallback : log and return success
      console.log("[contact] RESEND_API_KEY missing — dev mode, logging only:", data)
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }

    const emailHtml = `
<h2 style="color:#1e3a5f;font-family:sans-serif">Nouvelle demande de contact — Nino Plomberie 31</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
  <tr><td style="padding:8px;font-weight:bold;background:#f9fafb;width:140px">Nom</td><td style="padding:8px">${data.nom}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Téléphone</td><td style="padding:8px"><a href="tel:${data.tel}">${data.tel}</a></td></tr>
  ${data.email ? `<tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Email</td><td style="padding:8px">${data.email}</td></tr>` : ""}
  ${data.ville ? `<tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Commune</td><td style="padding:8px">${data.ville}</td></tr>` : ""}
  <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Prestation</td><td style="padding:8px">${data.sujet}</td></tr>
  ${data.message ? `<tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Message</td><td style="padding:8px">${data.message}</td></tr>` : ""}
  ${data.photo ? `<tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Pièce jointe</td><td style="padding:8px">1 photo attachée (${data.photo.filename})</td></tr>` : ""}
</table>
<p style="font-family:sans-serif;color:#6b7280;font-size:12px;margin-top:24px">Envoyé depuis ninoplomberie31.fr le ${new Date().toLocaleString("fr-FR")}</p>
`

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
          reply_to: data.email || undefined,
          subject: `[Nino Plomberie 31] Demande de ${data.nom} — ${data.sujet}`,
          html: emailHtml,
          attachments: data.photo ? [data.photo] : undefined,
        }),
      })

      if (!resendRes.ok) {
        const errText = await resendRes.text()
        console.error("[contact] Resend error:", errText)
        return new Response("Erreur envoi email", { status: 502 })
      }
    } catch (err) {
      console.error("[contact] fetch Resend failed:", err)
      return new Response("Erreur réseau", { status: 502 })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  },
})
