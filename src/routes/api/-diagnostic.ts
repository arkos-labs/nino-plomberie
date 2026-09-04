// src/routes/api/diagnostic.ts
// Server Function : upload photo → OpenAI Vision → diagnostic JSON
// Sans base de données — traitement stateless

import { createAPIFileRoute } from "@tanstack/react-start/api"
import OpenAI from "openai"
import { z } from "zod"

const DiagnosticSchema = z.object({
  piece: z.string(),
  urgence_score: z.number().int().min(1).max(5),
  diagnostic: z.string(),
  actions_immediates: z.array(z.string()),
  delai_recommande: z.string(),
})

export type DiagnosticResult = z.infer<typeof DiagnosticSchema>

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/heic", "image/gif"])
const MAX_SIZE_BYTES = 10 * 1024 * 1024 // 10 Mo

export const APIRoute = createAPIFileRoute("/api/diagnostic")({
  POST: async ({ request }) => {
    // ── 1. Parse multipart form ───────────────────────────────────────────
    let formData: FormData
    try {
      formData = await request.formData()
    } catch {
      return new Response("Requête invalide — multipart attendu", { status: 400 })
    }

    const photo = formData.get("photo")
    if (!(photo instanceof File)) {
      return new Response("Champ 'photo' manquant ou invalide", { status: 400 })
    }

    // ── 2. Validate file ──────────────────────────────────────────────────
    if (!ALLOWED_TYPES.has(photo.type)) {
      return new Response("Type de fichier non autorisé. Utilisez JPG, PNG, WebP ou HEIC.", { status: 415 })
    }
    if (photo.size > MAX_SIZE_BYTES) {
      return new Response("Fichier trop volumineux. Maximum 10 Mo.", { status: 413 })
    }

    // ── 3. Convert to base64 for OpenAI Vision ────────────────────────────
    const arrayBuffer = await photo.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString("base64")
    const dataUrl = `data:${photo.type};base64,${base64}`

    // ── 4. Call OpenAI Vision ─────────────────────────────────────────────
    const apiKey = process.env["OPENAI_API_KEY"]
    if (!apiKey) {
      return new Response("Configuration serveur manquante", { status: 500 })
    }

    const openai = new OpenAI({ apiKey })

    const systemPrompt = `Tu es un expert en plomberie résidentielle française.
Analyse cette image de problème de plomberie et réponds UNIQUEMENT en JSON valide, sans aucune explication avant ou après.

Format JSON attendu :
{
  "piece": "nom de la pièce ou élément concerné (ex: robinet, canalisation, chauffe-eau...)",
  "urgence_score": <entier de 1 à 5 — 1=non urgent, 5=très urgent risque dégâts>,
  "diagnostic": "description précise du problème détecté (2-3 phrases)",
  "actions_immediates": ["action 1", "action 2", "action 3"],
  "delai_recommande": "Intervention sous Xh / Xj selon l'urgence"
}

Critères urgence_score :
1 = Esthétique, peut attendre plusieurs semaines
2 = Gêne quotidienne, à traiter sous 1 semaine  
3 = Risque aggravation, à traiter sous 48h
4 = Fuite active ou panne — intervention dans la journée
5 = Fuite importante / risque dégâts / eau coupée — intervention immédiate`

    let raw: string
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        max_tokens: 600,
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: [
              { type: "image_url", image_url: { url: dataUrl, detail: "high" } },
              { type: "text", text: "Analyse cette image de plomberie et donne-moi le diagnostic JSON." },
            ],
          },
        ],
      })

      raw = completion.choices[0]?.message?.content ?? ""
    } catch (err) {
      console.error("[diagnostic] OpenAI error:", err)
      return new Response("Erreur lors de l'analyse IA. Réessayez ou appelez directement.", { status: 502 })
    }

    // ── 5. Parse and validate JSON response ───────────────────────────────
    let parsed: DiagnosticResult
    try {
      // Strip markdown code fences if model adds them
      const jsonStr = raw.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim()
      parsed = DiagnosticSchema.parse(JSON.parse(jsonStr))
    } catch {
      console.error("[diagnostic] Parse error. Raw:", raw)
      return new Response("Réponse IA invalide. Réessayez.", { status: 500 })
    }

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    })
  },
})
