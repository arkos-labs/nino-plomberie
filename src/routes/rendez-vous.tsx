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
