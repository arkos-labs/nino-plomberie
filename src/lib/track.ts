// src/lib/track.ts — suivi des actions importantes côté navigateur (envoi vers /api/track + dataLayer GTM/GA4)

export type TrackEvent = "phone_click" | "urgence_call" | "rdv_confirmed"

type TrackPayload = {
  event: TrackEvent
  label?: string
  eventUri?: string
  inviteeUri?: string
}

/** Pousse un événement dans le dataLayer GTM (GA4 : conversions appel et devis) */
export function pushEvent(event: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, page_path: window.location.pathname, ...params })
}

/** Envoie l'événement sans bloquer la navigation (sendBeacon, sinon fetch keepalive) */
export function track(payload: TrackPayload) {
  if (typeof window === "undefined") return
  pushEvent(payload.event === "phone_click" ? "click_tel" : payload.event, { label: payload.label ?? "" })
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

/** Écoute tous les clics sur un lien tel: du site (en-tête, bouton flottant, pied de page, boutons des pages) et sur les liens vers le devis */
export function installPhoneClickTracking() {
  const onClick = (e: MouseEvent) => {
    const target = e.target as Element | null
    const link = target?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null
    if (link) {
      const label = (link.getAttribute("aria-label") || link.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80)
      const isUrgence = /urgence/i.test(label) || link.classList.contains("float-cta")
      track({ event: isUrgence ? "urgence_call" : "phone_click", label })
      return
    }
    const devis = target?.closest?.('a[href="/contact"], a[href="/rendez-vous"]') as HTMLAnchorElement | null
    if (devis) {
      const label = (devis.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80)
      pushEvent("click_devis", { label, destination: devis.getAttribute("href") ?? "" })
    }
  }
  document.addEventListener("click", onClick, { capture: true })
  return () => document.removeEventListener("click", onClick, { capture: true })
}
