import { createFileRoute } from "@tanstack/react-router"
import { Calendar, Clock, ShieldCheck, MapPin } from "lucide-react"

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Prendre Rendez-vous | Nino Plomberie" },
      { name: "description", content: "Réservez votre intervention de plomberie en quelques clics." },
    ],
  }),
  component: RendezVousPage,
})

function RendezVousPage() {
  return (
    <div className="page-wrapper" style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px", background: "var(--ink-950)" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ 
            fontFamily: "var(--font-display)", 
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
            fontWeight: 800, 
            color: "var(--white)", 
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "16px"
          }}>
            Prendre <span className="text-brand-gradient">Rendez-vous</span>
          </h1>
          <p style={{ color: "var(--gray-400)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Choisissez le créneau qui vous convient pour une intervention rapide ou un devis sur place. 
            <strong> En cas d'urgence immédiate, privilégiez l'appel téléphonique.</strong>
          </p>
        </div>

        {/* Info Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "24px", 
          marginBottom: "48px" 
        }}>
          {[
            { icon: Clock, title: "Intervention Rapide", desc: "Créneaux disponibles sous 24/48h pour vos projets." },
            { icon: ShieldCheck, title: "Devis Gratuit", desc: "Transparence totale avant toute intervention." },
            { icon: MapPin, title: "Zone Couverte", desc: "Toulouse et agglomération (30km)." }
          ].map((item, idx) => (
            <div key={idx} style={{ 
              background: "rgba(255,255,255,0.03)", 
              border: "1px solid rgba(255,255,255,0.08)", 
              borderRadius: "16px", 
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}>
              <div style={{ background: "rgba(59,130,246,0.1)", color: "var(--brand-400)", width: "48px", height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <item.icon size={24} />
              </div>
              <h3 style={{ color: "white", fontWeight: 600, marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: "var(--gray-400)", fontSize: "0.9rem", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Agenda / Calendly Placeholder */}
        <div style={{ 
          background: "white", 
          borderRadius: "24px", 
          padding: "40px", 
          minHeight: "600px", 
          boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}>
          <Calendar size={64} color="var(--brand-500)" style={{ marginBottom: "24px", opacity: 0.8 }} />
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--ink-950)", marginBottom: "16px" }}>
            Module d'Agenda
          </h2>
          <p style={{ color: "var(--gray-600)", fontSize: "1.1rem", maxWidth: "480px", marginBottom: "32px", lineHeight: 1.6 }}>
            C'est ici que s'affichera votre calendrier de prise de rendez-vous (ex: <strong>Calendly, Planity, ou Google Agenda</strong>).
          </p>
          <div style={{ padding: "16px 24px", background: "var(--gray-100)", borderRadius: "12px", border: "1px dashed var(--gray-300)" }}>
            <p style={{ color: "var(--gray-600)", fontSize: "0.9rem", margin: 0 }}>
              <em>En attente de votre lien d'intégration...</em>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
