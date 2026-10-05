// src/components/ClickTracker.tsx — active le suivi des clics sur les numéros de téléphone (sur tout le site)
import { useEffect } from "react"
import { installPhoneClickTracking } from "../lib/track"

export function ClickTracker() {
  useEffect(() => installPhoneClickTracking(), [])
  return null
}
