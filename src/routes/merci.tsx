import { createFileRoute, Link } from "@tanstack/react-router"
import { CheckCircle, ArrowLeft } from "lucide-react"

export const Route = createFileRoute("/merci")({
  component: MerciPage,
})

function MerciPage() {
  return (
    <div className="page-wrapper" style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px", background: "var(--ink-950)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container" style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        
        <div style={{ 
          background: "rgba(255,255,255,0.03)", 
          border: "1px solid rgba(255,255,255,0.08)", 
          borderRadius: "24px", 
          padding: "48px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 24px 48px rgba(0,0,0,0.2)"
        }}>
          
          <div style={{ 
            width: "80px", 
            height: "80px", 
            borderRadius: "50%", 
            background: "rgba(16, 185, 129, 0.1)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            marginBottom: "24px",
            color: "#10b981"
          }}>
            <CheckCircle size={40} />
          </div>

          <h1 style={{ 
            fontFamily: "var(--font-display)", 
            fontSize: "clamp(2rem, 4vw, 2.5rem)", 
            fontWeight: 800, 
            color: "var(--white)", 
            marginBottom: "16px",
            lineHeight: 1.2
          }}>
            Rendez-vous <span style={{ color: "#10b981" }}>Confirmé !</span>
          </h1>
          
          <p style={{ color: "var(--gray-400)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "32px" }}>
            Merci de votre confiance. Votre demande d'intervention a bien été enregistrée. 
            Vous recevrez un e-mail de confirmation d'ici quelques instants.
          </p>

          <Link
            to="/"
            className="btn-ghost"
            style={{ padding: "14px 28px", fontSize: "1rem" }}
          >
            <ArrowLeft size={18} />
            Retour à l'accueil
          </Link>
          
        </div>
      </div>
    </div>
  )
}
