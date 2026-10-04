// "Comment ça se passe" — étapes d'une intervention
import { Phone, Search, FileText, Wrench } from "lucide-react"

const DEFAULT_STEPS = [
  { icon: Phone,    titre: "Vous appelez",          desc: "Au 06 50 57 96 20, 24h/24 et 7j/7. Vous décrivez le problème, une photo peut aider." },
  { icon: Search,   titre: "Diagnostic sur place",  desc: "Nino se déplace, identifie l'origine de la panne et vous explique ce qu'il faut faire." },
  { icon: FileText, titre: "Devis gratuit",         desc: "Le prix est annoncé et validé avec vous avant le début des travaux. Pas de surprise." },
  { icon: Wrench,   titre: "Réparation garantie",   desc: "Intervention soignée, chantier laissé propre. Réparations garanties 2 ans pièces et main-d'œuvre." },
]

export function ProcessSteps({
  title = "Comment se passe une intervention ?",
  steps = DEFAULT_STEPS,
  background = "var(--white)",
}: {
  title?: string
  steps?: typeof DEFAULT_STEPS
  background?: string
}) {
  return (
    <section style={{ background, padding: "clamp(48px, 8vw, 88px) 0" }} aria-labelledby="process-title">
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="badge-brand" style={{ marginBottom: "14px" }}>Simple et transparent</span>
          <h2 id="process-title" className="section-title">{title}</h2>
        </div>
        <ol className="process-grid">
          {steps.map(({ icon: Icon, titre, desc }, i) => (
            <li key={titre} className="process-step">
              <div className="process-num" aria-hidden="true">
                <Icon size={20} />
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-500)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                Étape {i + 1}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: "var(--ink-950)", margin: "0 0 8px" }}>{titre}</h3>
              <p style={{ color: "var(--gray-600)", fontSize: "0.93rem", lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <style>{`
        .process-grid {
          list-style: none; padding: 0; margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .process-step {
          background: var(--sand-100);
          border-radius: var(--radius-sm);
          padding: 26px 22px;
        }
        .process-num {
          width: 50px; height: 50px;
          border-radius: 50%;
          background: var(--white);
          color: var(--brand-600);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
      `}</style>
    </section>
  )
}
