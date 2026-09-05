// src/routes/live-tracking.$id.tsx
// Suivi GPS temps réel du plombier — Mapbox GL JS + SSE simulé (sans BDD)
// En prod : connecter à un vrai flux SSE backend avec position GPS réelle

import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"
import { Phone, Navigation, Clock, CheckCircle2 } from "lucide-react"

export const Route = createFileRoute("/live-tracking/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Suivi intervention #${params.id} — Nino Plomberie 31` },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LiveTrackingPage,
})

// Toulouse center
const TOULOUSE = { lat: 43.6047, lng: 1.4442 }

// Simulated route: plumber moving from north Toulouse towards a destination
function generateRoute(steps: number) {
  const startLat = TOULOUSE.lat + 0.05
  const startLng = TOULOUSE.lng - 0.02
  return Array.from({ length: steps }, (_, i) => ({
    lat: startLat - (i / steps) * 0.06 + Math.random() * 0.003,
    lng: startLng + (i / steps) * 0.04 + Math.random() * 0.003,
  }))
}

function LiveTrackingPage() {
  const { id } = Route.useParams()
  const mapContainerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markerRef = useRef<any>(null)
  const [position, setPosition] = useState({ lat: TOULOUSE.lat + 0.05, lng: TOULOUSE.lng - 0.02 })
  const [etaMinutes, setEtaMinutes] = useState(18)
  const [status, setStatus] = useState<"en_route" | "arrive">("en_route")
  const routeRef = useRef(generateRoute(20))
  const stepRef = useRef(0)

  // ── Init Mapbox GL ────────────────────────────────────────────────────────
  useEffect(() => {
    const token = import.meta.env["VITE_MAPBOX_TOKEN"] as string | undefined
    if (!token || !mapContainerRef.current) return

    // Lazy load mapbox-gl to avoid SSR issues
    import("mapbox-gl").then(({ default: mapboxgl }) => {
      mapboxgl.accessToken = token

      const map = new mapboxgl.Map({
        container: mapContainerRef.current!,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [position.lng, position.lat],
        zoom: 13,
      })

      // Custom plumber marker
      const el = document.createElement("div")
      el.style.cssText = `
        width: 48px; height: 48px; border-radius: 50%;
        background: linear-gradient(135deg, var(--cta-500), var(--cta-600));
        border: 3px solid white;
        box-shadow: 0 4px 16px rgba(249,115,22,0.5);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px; cursor: pointer;
      `
      el.textContent = "🚗"

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([position.lng, position.lat])
        .setPopup(new mapboxgl.Popup().setHTML("<strong>Nino</strong><br/>En route vers vous"))
        .addTo(map)

      // Destination marker
      const destEl = document.createElement("div")
      destEl.style.cssText = `
        width: 36px; height: 36px; border-radius: 50%;
        background: linear-gradient(135deg, #1e3a5f, #3b82c4);
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(30,58,95,0.4);
        display: flex; align-items: center; justify-content: center;
        font-size: 16px;
      `
      destEl.textContent = "📍"
      new mapboxgl.Marker({ element: destEl })
        .setLngLat([TOULOUSE.lng, TOULOUSE.lat])
        .setPopup(new mapboxgl.Popup().setHTML("<strong>Votre adresse</strong>"))
        .addTo(map)

      mapRef.current = map
      markerRef.current = marker
    })

    return () => {
      mapRef.current?.remove()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Simulate GPS movement every 3s ────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      const route = routeRef.current
      const step = stepRef.current

      if (step >= route.length - 1) {
        setStatus("arrive")
        setEtaMinutes(0)
        clearInterval(interval)
        return
      }

      const nextPos = route[step + 1]!
      stepRef.current = step + 1
      setPosition(nextPos)
      setEtaMinutes(Math.max(0, Math.round((route.length - step - 1) * 1.2)))

      // Update marker on map
      if (markerRef.current) {
        markerRef.current.setLngLat([nextPos.lng, nextPos.lat])
      }
      if (mapRef.current && step % 3 === 0) {
        mapRef.current.panTo([nextPos.lng, nextPos.lat], { duration: 1500 })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #0f2040, #1e3a5f)", padding: "40px 0" }}>
        <div className="section-container">
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.8rem", color: "white", marginBottom: "8px" }}>
            Suivi de votre intervention
          </h1>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem" }}>Intervention #{id}</div>
        </div>
      </section>

      <section style={{ background: "#f9fafb", padding: "32px 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "24px", alignItems: "start" }}>
            {/* Map */}
            <div>
              {import.meta.env["VITE_MAPBOX_TOKEN"] ? (
                <div
                  ref={mapContainerRef}
                  style={{ height: "480px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                />
              ) : (
                <div
                  style={{
                    height: "480px",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    border: "2px dashed #93c5fd",
                  }}
                >
                  <Navigation size={48} color="#3b82c4" />
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink-950)" }}>Carte Mapbox</div>
                  <div style={{ color: "#6b7280", fontSize: "0.875rem", textAlign: "center", maxWidth: "260px" }}>
                    Ajoutez VITE_MAPBOX_TOKEN dans .env.local pour activer la carte temps réel
                  </div>
                </div>
              )}
            </div>

            {/* Status Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* ETA */}
              <div
                style={{
                  background: status === "arrive" ? "#dcfce7" : "white",
                  borderRadius: "16px",
                  padding: "24px",
                  border: `2px solid ${status === "arrive" ? "#86efac" : "#dbeafe"}`,
                  textAlign: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                {status === "arrive" ? (
                  <>
                    <CheckCircle2 size={40} color="#15803d" style={{ margin: "0 auto 12px", display: "block" }} />
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", color: "#15803d" }}>Nino est arrivé !</div>
                  </>
                ) : (
                  <>
                    <Clock size={36} color="var(--cta-500)" style={{ margin: "0 auto 8px", display: "block" }} />
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "2.5rem", color: "var(--cta-500)", lineHeight: 1 }}>
                      {etaMinutes}
                    </div>
                    <div style={{ color: "#6b7280", fontWeight: 500 }}>minutes estimées</div>
                    <div style={{ marginTop: "8px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#22c55e",
                          display: "inline-block",
                          animation: "pulse 1.5s ease-in-out infinite",
                        }}
                      />
                      <span style={{ color: "#374151", fontSize: "0.875rem", fontWeight: 600 }}>En route vers vous</span>
                    </div>
                  </>
                )}
              </div>

              {/* Plumber info */}
              <div style={{ background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1e3a5f, #3b82c4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                    }}
                  >
                    👷
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: "var(--ink-950)" }}>Nino</div>
                    <div style={{ color: "#6b7280", fontSize: "0.8rem" }}>Artisan plombier RGE</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#6b7280" }}>Position actuelle</span>
                    <span style={{ fontWeight: 600, color: "#374151" }}>
                      {position.lat.toFixed(4)}, {position.lng.toFixed(4)}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#6b7280" }}>Statut</span>
                    <span style={{ fontWeight: 600, color: status === "arrive" ? "#15803d" : "var(--cta-500)" }}>
                      {status === "arrive" ? "Arrivé" : "En route"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Call button */}
              <a
                href="tel:0650579620"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", padding: "16px",
                  background: "var(--cta-500)",
                  color: "white", fontWeight: 700, fontSize: "1.05rem", borderRadius: "12px", textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(249,115,22,0.4)",
                }}
              >
                <Phone size={20} />
                Appeler Nino
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 360px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
