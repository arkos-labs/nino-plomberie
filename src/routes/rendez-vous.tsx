import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { Clock, ShieldCheck, MapPin, Phone, Star, CheckCircle2, CalendarDays } from "lucide-react"
import { InlineWidget, useCalendlyEventListener } from "react-calendly"
import { motion } from "framer-motion"
import { pageHead } from "../lib/site"
import { PageHero } from "../components/PageHero"

export const Route = createFileRoute("/rendez-vous")({
  head: () =>
    pageHead({
      title: "Prendre rendez-vous avec un plombier à Muret — Nino Plomberie",
      description: "Réservez en ligne votre intervention de plomberie avec Nino Plomberie. Devis gratuit, intervention à Muret, Toulouse et en Haute-Garonne. Urgence : 06 50 57 96 20.",
      path: "/rendez-vous",
    }),
  component: RendezVousPage,
})

const guarantees = [
  { icon: Clock,        label: "24h/24 · 7j/7",        sub: "Urgences au 06 50 57 96 20" },
  { icon: ShieldCheck,  label: "Devis gratuit",         sub: "Prix validé avant intervention" },
  { icon: MapPin,       label: "Muret · Toulouse",      sub: "Toute la Haute-Garonne"  },
]

const trustItems = [
  "Plus de 20 ans d'expérience",
  "4,4/5 sur Google (78 avis)",
  "Réparations garanties 2 ans",
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
      <PageHero
        kicker="Diagnostic & devis gratuit"
        title={<>Réservez votre <em>intervention</em></>}
        lead="Choisissez votre créneau en ligne. Votre artisan plombier qualifié à Toulouse (31) intervient rapidement pour vos urgences, dépannages et devis d'installation."
        actions={
          <a href="tel:0650579620" className="btn-cta">
            <Phone size={18} aria-hidden="true" />
            Urgence ? Appelez directement
          </a>
        }
        image="/realisations/photo-05.jpg"
      />

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
                textColor: '111827',
                hideGdprBanner: true
              }}
            />
          </motion.div>
        </div>

      </section>
    </div>
  )
}
