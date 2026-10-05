// src/lib/track.ts — suivi des actions importantes côté navigateur (envoi vers /api/track)

export type TrackEvent = "phone_click" | "urgence_call" | "rdv_confirmed"

type TrackPayload = {
  event: TrackEvent
  label?: string
  eventUri?: string
  inviteeUri?: string
}

/** Envoie l'événement sans bloquer la navigation (sendBeacon, sinon fetch keepalive) */
export function track(payload: TrackPayload) {
  if (typeof window === "undefined") return
  let referrer = ""
  try {
    referrer = document.referrer ? new URL(document.referrer).hostname : ""
  } catch {
    /* référent invalide : ignoré */
  }
  const body = JSON.stringify({ ...payload, page: window.location.pathname, referrer })
  try {
    const blob = new Blob([body], { type: "application/json" })
    if (navigator.sendBeacon?.("/api/track", blob)) return
  } catch {
    /* repli ci-dessous */
  }
  fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {})
}

/** Écoute tous les clics sur un lien tel: du site (en-tête, bouton flottant, pied de page, boutons des pages) */
export function installPhoneClickTracking() {
  const onClick = (e: MouseEvent) => {
    const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null
    if (!link) return
    const label = (link.getAttribute("aria-label") || link.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80)
    const isUrgence = /urgence/i.test(label) || link.classList.contains("float-cta")
    track({ event: isUrgence ? "urgence_call" : "phone_click", label })
  }
  document.addEventListener("click", onClick, { capture: true })
  return () => document.removeEventListener("click", onClick, { capture: true })
}
