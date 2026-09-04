// src/routes/contact.tsx
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react"

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nino Plomberie 31 Toulouse" },
      {
        name: "description",
        content:
          "Contactez Nino Plomberie 31 à Toulouse. Formulaire en ligne, téléphone, email. Devis gratuit sous 24h. Urgences 24h/7j.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://ninoplomberie31.fr/contact" },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [formData, setFormData] = useState({ 
    nom: "", email: "", tel: "", sujet: "Fuite d'eau", message: "", 
    photo: undefined as { filename: string; content: string } | undefined 
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [field]: e.target.value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setFormData(p => ({ ...p, photo: undefined }))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const content = result.split(",")[1]
      if (content) {
        setFormData(p => ({ ...p, photo: { filename: file.name, content } }))
      }
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Erreur serveur")
      setSent(true)
    } catch {
      setError("Impossible d'envoyer votre message. Appelez-nous directement.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      
      {/* ── Main Content Container ── */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Layout Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "64px", alignItems: "start" }}>
          
          {/* Left Column: Form */}
          <div>
            <h1 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "#111827", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
              Contactez-nous
            </h1>
            <p style={{ color: "#6b7280", fontSize: "1.1rem", margin: "0 0 48px 0" }}>
              Une urgence ou besoin d'un devis ? Nous sommes là pour vous.
            </p>

            {sent ? (
              <div style={{ padding: "40px 0", textAlign: "left" }}>
                <CheckCircle2 size={48} color="#15803d" style={{ marginBottom: "16px" }} />
                <h2 style={{ fontFamily: "Outfit", fontWeight: 700, color: "#111827", fontSize: "1.5rem", marginBottom: "12px" }}>
                  Message envoyé avec succès !
                </h2>
                <p style={{ color: "#4b5563", fontSize: "1.05rem" }}>Nino vous recontactera très rapidement. En cas d'extrême urgence, n'hésitez pas à nous appeler directement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                
                {error && (
                  <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: "8px", padding: "12px 16px", color: "#991b1b", fontSize: "0.9rem" }}>
                    ⚠️ {error}
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827" }}>
                      Votre Nom <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.nom} 
                      onChange={handleChange("nom")} 
                      placeholder="Ex : Jean Dupont" 
                      required 
                      style={{ padding: "14px 16px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1rem", outline: "none", transition: "border-color 0.2s" }}
                      onFocus={(e) => e.target.style.borderColor = "#2b3f4f"}
                      onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                    />
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827" }}>
                      Téléphone <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input 
                      type="tel" 
                      value={formData.tel} 
                      onChange={handleChange("tel")} 
                      placeholder="Ex : 06 12 34 56 78" 
                      required 
                      style={{ padding: "14px 16px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1rem", outline: "none", transition: "border-color 0.2s" }}
                      onFocus={(e) => e.target.style.borderColor = "#2b3f4f"}
                      onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827" }}>
                    Service souhaité <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select 
                    value={formData.sujet} 
                    onChange={handleChange("sujet")} 
                    required 
                    style={{ padding: "14px 16px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1rem", outline: "none", transition: "border-color 0.2s", background: "white" }}
                    onFocus={(e) => e.target.style.borderColor = "#2b3f4f"}
                    onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                  >
                    <option value="Fuite d'eau">Fuite d'eau</option>
                    <option value="Débouchage">Débouchage</option>
                    <option value="Chauffe-eau">Chauffe-eau</option>
                    <option value="Sanitaires & Robinetterie">Sanitaires & Robinetterie</option>
                    <option value="Rénovation / Autre">Rénovation / Autre</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827" }}>
                    Votre Message <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={handleChange("message")}
                    placeholder="Décrivez votre besoin ici..."
                    required
                    rows={6}
                    style={{ padding: "16px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1rem", outline: "none", transition: "border-color 0.2s", resize: "vertical" }}
                    onFocus={(e) => e.target.style.borderColor = "#2b3f4f"}
                    onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827" }}>
                    Joindre une photo (optionnel)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ 
                      padding: "12px 16px", 
                      borderRadius: "8px", 
                      border: "1px dashed #d1d5db", 
                      background: "#f9fafb",
                      fontSize: "0.95rem", 
                      outline: "none", 
                      cursor: "pointer",
                      color: "#4b5563"
                    }}
                  />
                  <p style={{ fontSize: "0.8rem", color: "#6b7280", margin: 0 }}>
                    Idéal pour montrer une fuite, l'état de la tuyauterie ou la pièce concernée.
                  </p>
                </div>

                <div style={{ marginTop: "8px" }}>
                  <button 
                    type="submit" 
                    disabled={loading} 
                    style={{ 
                      background: "#2b3f4f", 
                      color: "white", 
                      padding: "16px 32px", 
                      borderRadius: "999px", 
                      border: "none", 
                      fontSize: "1rem", 
                      fontWeight: 500, 
                      cursor: loading ? "not-allowed" : "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      transition: "background 0.2s, transform 0.1s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#1e2c38"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#2b3f4f"}
                    onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
                    onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
                  >
                    {loading ? <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> : null}
                    {loading ? "Envoi..." : "Envoyer le message"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Card */}
          <div style={{ 
            background: "#2b3f4f", 
            borderRadius: "24px", 
            padding: "48px 40px", 
            color: "white",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
          }}>
            
            {/* Address */}
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 500, margin: "0 0 16px 0" }}>Adresse</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", margin: 0, lineHeight: 1.6 }}>
                11 Rue François Arago<br/>
                31600 Muret<br/>
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>Intervention 30km aux alentours</span>
              </p>
            </div>

            {/* Contact */}
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 500, margin: "0 0 16px 0" }}>Contact</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "rgba(255,255,255,0.8)", fontSize: "1.05rem" }}>
                <div>
                  <span style={{ color: "white" }}>Téléphone :</span> <a href="tel:0650579620" style={{ color: "inherit", textDecoration: "none" }}>06 50 57 96 20</a>
                </div>
                <div>
                  <span style={{ color: "white" }}>Email :</span> <a href="mailto:contact@nino-plomberie31.fr" style={{ color: "inherit", textDecoration: "none" }}>contact@nino-plomberie31.fr</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

