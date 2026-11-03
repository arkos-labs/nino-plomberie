// src/components/QuickContactForm.tsx — formulaire court (nom, téléphone, type de panne) envoyé à /api/contact
import { useState } from "react"
import { Phone, Send, CheckCircle2 } from "lucide-react"
import { BUSINESS } from "../lib/site"
import { pushEvent } from "../lib/track"

const PANNES = ["Fuite d'eau", "Débouchage", "Chauffe-eau", "Chaudière / chauffage", "Salle de bain / rénovation", "Autre"]

export function QuickContactForm({
  ville,
  title = "Une fuite, un WC bouché, plus d'eau chaude ?",
}: {
  ville?: string
  title?: string
}) {
  const [data, setData] = useState({ nom: "", tel: "", sujet: PANNES[0] })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onChange = (field: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setData((p) => ({ ...p, [field]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, email: "", ville, message: "Demande rapide depuis le formulaire court de l'accueil." }),
      })
      if (!res.ok) throw new Error(String(res.status))
      pushEvent("devis_form_submit", { form: "accueil_court", sujet: data.sujet })
      setSent(true)
    } catch {
      setError(`L'envoi a échoué. Appelez-moi directement au ${BUSINESS.phone}.`)
    } finally {
      setLoading(false)
    }
  }

  const field = { padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #cbd5e1", fontSize: "1rem", width: "100%", background: "white", color: "var(--ink-950)" } as const
  const label = { fontSize: "0.78rem", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" } as const

  return (
    <section style={{ background: "white", padding: "32px 0", borderBottom: "1px solid #e2e8f0" }} aria-labelledby="quick-form-title">
      <div className="section-container" style={{ maxWidth: "920px" }}>
        <h2 id="quick-form-title" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.45rem", color: "var(--ink-950)", margin: "0 0 6px" }}>
          {title}
        </h2>
        <p style={{ color: "#475569", margin: "0 0 18px", fontSize: "0.98rem", lineHeight: 1.6 }}>
          Laissez votre numéro et le type de panne : je vous rappelle directement. Devis gratuit signé avant le premier coup de clé.
        </p>
        {sent ? (
          <p role="status" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#166534", fontWeight: 600, margin: 0 }}>
            <CheckCircle2 size={20} aria-hidden="true" /> Demande reçue. Je vous rappelle au plus vite. En cas d'urgence immédiate : {BUSINESS.phone}.
          </p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "12px", alignItems: "end" }}>
            <div>
              <label htmlFor="qf-nom" style={label}>Nom</label>
              <input id="qf-nom" required minLength={2} autoComplete="name" value={data.nom} onChange={onChange("nom")} style={field} />
            </div>
            <div>
              <label htmlFor="qf-tel" style={label}>Téléphone</label>
              <input id="qf-tel" required type="tel" minLength={8} autoComplete="tel" inputMode="tel" value={data.tel} onChange={onChange("tel")} style={field} />
            </div>
            <div>
              <label htmlFor="qf-sujet" style={label}>Type de panne</label>
              <select id="qf-sujet" value={data.sujet} onChange={onChange("sujet")} style={field}>
                {PANNES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <button type="submit" disabled={loading} className="btn-cta" style={{ justifyContent: "center", minHeight: "48px", cursor: "pointer" }}>
              <Send size={16} aria-hidden="true" /> {loading ? "Envoi…" : "Demander un devis gratuit"}
            </button>
          </form>
        )}
        {error && <p role="alert" style={{ color: "#b91c1c", margin: "12px 0 0" }}>{error}</p>}
        <p style={{ margin: "14px 0 0", fontSize: "0.88rem", color: "#64748b" }}>
          <Phone size={13} aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: "4px" }} />
          Urgence 24h/24 et 7j/7 : <a href={`tel:${BUSINESS.phoneIntl}`} style={{ fontWeight: 700 }}>Appeler Nino · {BUSINESS.phone}</a>.
        </p>
      </div>
    </section>
  )
}

