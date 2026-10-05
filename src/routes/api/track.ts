// src/routes/api/track.ts — reçoit les actions des visiteurs et les envoie à Nino sur Telegram
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { notifyTelegram, formatLines } from "../../lib/notify"
import { SITE_URL } from "../../lib/site"

const TrackSchema = z.object({
  event: z.enum(["phone_click", "urgence_call", "rdv_confirmed"]),
  label: z.string().max(100).optional(),
  page: z.string().max(200).optional(),
  referrer: z.string().max(100).optional(),
  eventUri: z.string().max(300).optional(),
  inviteeUri: z.string().max(300).optional(),
})

// Anti-spam simple (par instance serveur) : un même événement par IP au plus toutes les 45 s, 40 événements/heure
const lastSeen = new Map<string, number>()
const hourly = new Map<string, { count: number; reset: number }>()

function allowed(ip: string, event: string) {
  const now = Date.now()
  const key = `${ip}:${event}`
  if (now - (lastSeen.get(key) ?? 0) < 45_000) return false
  lastSeen.set(key, now)
  const h = hourly.get(ip)
  if (!h || now > h.reset) hourly.set(ip, { count: 1, reset: now + 3_600_000 })
  else if (++h.count > 40) return false
  if (lastSeen.size > 5000) lastSeen.clear()
  return true
}

function describeDevice(ua: string) {
  const mobile = /Mobi|Android|iPhone|iPad/i.test(ua)
  const os = /Android/i.test(ua) ? "Android" : /iPhone|iPad|iOS/i.test(ua) ? "iOS" : /Windows/i.test(ua) ? "Windows" : /Mac OS/i.test(ua) ? "Mac" : /Linux/i.test(ua) ? "Linux" : ""
  return `${mobile ? "📱 Téléphone" : "💻 Ordinateur"}${os ? ` (${os})` : ""}`
}

function describeSource(referrer?: string) {
  if (!referrer) return "Accès direct"
  if (/google\./i.test(referrer)) return "Google"
  if (/facebook|instagram/i.test(referrer)) return "Facebook / Instagram"
  if (/ninoplomberie\.fr/i.test(referrer)) return "Navigation interne"
  return referrer
}

const frDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleString("fr-FR", { timeZone: "Europe/Paris", dateStyle: "full", timeStyle: "short" }) : undefined

/** Détails du rendez-vous Calendly (facultatif : nécessite CALENDLY_TOKEN) */
async function calendlyDetails(eventUri?: string, inviteeUri?: string) {
  const token = process.env["CALENDLY_TOKEN"]
  const valid = (u?: string) => !!u && u.startsWith("https://api.calendly.com/scheduled_events/")
  if (!token || !valid(eventUri) || !valid(inviteeUri)) return null
  const headers = { Authorization: `Bearer ${token}` }
  try {
    const [ev, inv] = await Promise.all([
      fetch(eventUri!, { headers }).then((r) => (r.ok ? r.json() : null)),
      fetch(inviteeUri!, { headers }).then((r) => (r.ok ? r.json() : null)),
    ])
    const e = ev?.resource
    const i = inv?.resource
    const answers = (i?.questions_and_answers ?? [])
      .map((qa: { question: string; answer: string }) => `${qa.question} : ${qa.answer}`)
      .join(" | ")
    return {
      name: i?.name as string | undefined,
      email: i?.email as string | undefined,
      phone: i?.text_reminder_number as string | undefined,
      start: e?.start_time as string | undefined,
      answers: answers as string,
    }
  } catch {
    return null
  }
}

export const Route = createFileRoute("/api/track")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown
        try {
          body = await request.json()
        } catch {
          return new Response(null, { status: 400 })
        }
        const parsed = TrackSchema.safeParse(body)
        if (!parsed.success) return new Response(null, { status: 422 })
        const d = parsed.data

        const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
        if (!allowed(ip, d.event)) return new Response(null, { status: 204 })

        const ua = request.headers.get("user-agent") ?? ""
        if (/bot|crawl|spider|headless|lighthouse/i.test(ua)) return new Response(null, { status: 204 })

        const common: Array<[string, string | undefined]> = [
          ["Page", d.page ? `${SITE_URL}${d.page}` : undefined],
          ["Appareil", describeDevice(ua)],
          ["Provenance", describeSource(d.referrer)],
        ]

        let message: string
        if (d.event === "rdv_confirmed") {
          const c = await calendlyDetails(d.eventUri, d.inviteeUri)
          message = formatLines("📅 <b>RENDEZ-VOUS CONFIRMÉ</b>", [
            ["Nom", c?.name],
            ["Téléphone", c?.phone],
            ["E-mail", c?.email],
            ["Date et heure", frDate(c?.start)],
            ["Précisions", c?.answers],
            ["Détails", c ? undefined : "voir l'e-mail de confirmation Calendly"],
            ...common,
          ])
        } else if (d.event === "urgence_call") {
          message = formatLines("🚨 <b>CLIC « URGENCE »</b> : le visiteur appelle", [["Bouton", d.label], ...common])
        } else {
          message = formatLines("📞 <b>CLIC SUR LE NUMÉRO</b>", [["Bouton", d.label], ...common])
        }

        await notifyTelegram(message)
        return new Response(null, { status: 204 })
      },
    },
  },
})
