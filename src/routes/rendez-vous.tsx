import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { Clock, ShieldCheck, MapPin, Phone, Star, CheckCircle2, ArrowRight, CalendarDays } from "lucide-react"
import { InlineWidget, useCalendlyEventListener } from "react-calendly"
import { motion } from "framer-motion"

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Prendre Rendez-vous | Nino Plomberie" },
      { name: "description", content: "Réservez votre intervention de plomberie en quelques clics. Devis gratuit, intervention sous 24/48h sur Toulouse et agglomération." },
    ],
  }),
  component: RendezVousPage,
})

const guarantees = [
  { icon: Clock,        label: "Sous 24/48h",    sub: "Créneaux disponibles rapidement" },
  { icon: ShieldCheck,  label: "Devis gratuit",   sub: "Transparence totale des tarifs"  },
  { icon: MapPin,       label: "Toulouse ±30km",  sub: "Toute l'agglomération couverte"  },
]

const trustItems = [
  "Artisan qualifié RGE",
  "Assurance décennale",
  "+200 interventions/an",
  "Garantie satisfaction",
]

function RendezVousPage() {
  const navigate = useNavigate()

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("Calendly loaded"),
    onEventScheduled: (e) => {
      navigate({ to: "/merci" })
    },
  })

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--sand-50)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ── HERO BAND ──────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)",
          paddingTop: "64px",
          paddingBottom: "80px",
        }}
      >
        <div className="section-container flex flex-col items-center w-full">
          {/* Badge urgence */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-6"
          >
            <a
              href="tel:0600000000"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                background: "var(--cta-500)",
                color: "#fff",
                boxShadow: "var(--shadow-cta)",
              }}
              aria-label="Urgence : appeler Nino Plomberie"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Urgence ? Appelez directement
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-center"
          >
            <h1
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Réservez votre{" "}
              <span
                style={{
                  display: "inline-block",
                  background: "linear-gradient(90deg, #FDE68A, #FB923C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                intervention
              </span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "1.125rem",
                lineHeight: "1.7",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Choisissez votre créneau en ligne. Votre artisan plombier qualifié à Toulouse (31) intervient rapidement pour vos urgences, dépannages et devis d'installation.
            </p>
          </motion.div>

          {/* Widget Avis Google — flottant à droite, centré verticalement */}
          <div className="hidden-mobile animate-fade-up animate-fade-up-d3" style={{
            position: "absolute",
            right: "clamp(24px, 6vw, 80px)",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            display: "inline-flex", alignItems: "center", gap: "14px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "14px 22px",
            borderRadius: "18px",
          }}>
            <div style={{ background: "white", borderRadius: "50%", padding: "4px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                <span style={{ color: "white", fontWeight: 800, fontSize: "0.95rem" }}>Excellent</span>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />)}
                </div>
              </div>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>4,5/5</strong> · 75 avis Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section style={{ padding: "56px 0 80px", width: "100%" }}>
        
        {/* Sous-titre section calendrier */}
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center text-center gap-3 mb-8 mx-auto"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--brand-50)", color: "var(--brand-500)" }}
              aria-hidden="true"
            >
              <CalendarDays className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <h2
                className="font-display font-bold text-xl leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink-900)" }}
              >
                Choisissez votre créneau
              </h2>
              <p className="text-sm mt-1" style={{ color: "var(--gray-500)" }}>
                Diagnostic &amp; devis — première visite gratuite
              </p>
            </div>
          </motion.div>
        </div>


        {/* Calendrier embed (Pleine largeur) */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full overflow-hidden"
            style={{
              width: "100%",
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid var(--gray-200)",
              boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
              minHeight: "900px",
            }}
          >
            <InlineWidget 
              url="https://calendly.com/cherkinicolas/diagnostic-devis" 
              styles={{ height: "900px", width: "100%" }} 
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '284b7a',
                textColor: '111827'
              }}
            />
          </motion.div>
        </div>

      </section>
    </div>
  )
}
