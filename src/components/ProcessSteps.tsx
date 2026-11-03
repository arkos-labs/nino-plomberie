// "Comment ça se passe" — étapes d'une intervention
import { Phone, Search, FileText, Wrench } from "lucide-react"

const DEFAULT_STEPS = [
  { icon: Phone,    titre: "Vous m'appelez en direct",      desc: "Au 06 50 57 96 20, 24h/24 et 7j/7. Pas de standard : vous me décrivez la panne et je vous donne mon délai d'arrivée." },
  { icon: Search,   titre: "Je diagnostique sur place",     desc: "Je me déplace chez vous, j'identifie l'origine exacte du problème et je vous explique quoi faire sans jargon." },
  { icon: FileText, titre: "Vous signez le devis gratuit",  desc: "Le prix est écrit et validé avec vous avant le premier coup de clé. Si rien n'est signé, rien n'est facturé." },
  { icon: Wrench,   titre: "Je répare avec 2 ans de garantie", desc: "Je réalise la réparation et je laisse la pièce propre. Si la panne revient dans les 2 ans, je reviens sans vous refacturer." },
]

export function ProcessSteps({
  title = "Comment se passe une intervention",
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
