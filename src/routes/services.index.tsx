// src/routes/services.index.tsx — Listing services v2
import { createFileRoute, Link } from "@tanstack/react-router"
import { services } from "../data/services"
import { Droplets, Flame, Wind, Wrench, Bath, Building2, ArrowRight, Zap, Clock, Phone } from "lucide-react"

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services Plomberie Toulouse — Nino Plomberie 31" },
      { name: "description", content: "Tous nos services de plomberie à Toulouse : fuite, chauffe-eau, débouchage, robinetterie, rénovation salle de bain. Devis gratuit, intervention rapide." },
    ],
    links: [
      { rel: "canonical", href: "https://ninoplomberie31.fr/services/" },
    ],
  }),
  component: ServicesIndex,
})

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Droplets, Flame, Wind, Wrench, Bath, Building2,
}

const accentMap: Record<string, string> = {
  "fuite-d-eau":                  "var(--brand-400)",
  "chauffe-eau":                  "var(--brand-400)",
  "debouchage":                   "var(--brand-400)",
  "remplacement-robinetterie":    "var(--brand-400)",
  "renovation-salle-de-bain":     "var(--brand-400)",
  "installation-plomberie-neuve": "var(--brand-400)",
}

function ServicesIndex() {
  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)",
        paddingTop: "64px",
        paddingBottom: "80px",
      }}>
        <div className="section-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--cta-500)", color: "#fff",
            borderRadius: "999px", padding: "5px 18px",
            fontSize: "0.82rem", fontWeight: 700,
            letterSpacing: "0.05em", textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            <Zap size={13} />
            Plombier Toulouse &amp; Métropole
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            color: "#fff",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>
            Tous nos{" "}
            <span style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #FDE68A, #FB923C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              services
            </span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 36px",
          }}>
            De l'urgence fuite au chantier de rénovation — devis gratuit, tarifs transparents, intervention rapide 7j/7.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: Clock,  value: "< 1h",  label: "délai urgence" },
              { icon: Zap,    value: "7j/7",  label: "disponible" },
              { icon: Wrench, value: "6",      label: "prestations" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color="rgba(255,255,255,0.8)" />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "3px" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grille ── */}
      <section style={{ padding: "72px 0 80px" }}>
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2px",
              background: "rgba(0,0,0,0.07)",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {services.map((s) => {
              const Icon   = iconMap[s.icon] ?? Wrench
              const accent = accentMap[s.slug] ?? "var(--brand-400)"
              return (
                <Link
                  key={s.slug}
                  to={"/services/$slug"}
                  params={{ slug: s.slug }}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    className="srv-card"
                    style={{ background: "white", padding: "36px 30px 28px", display: "flex", flexDirection: "column", height: "100%", transition: "background 0.18s", position: "relative" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#fafaf9" }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "white" }}
                  >
                    {/* Barre accent top */}
                    <div className="srv-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: accent, opacity: 0, transition: "opacity 0.18s" }} />

                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                      <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: `${accent}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={21} color={accent} strokeWidth={1.8} />
                      </div>
                      {s.urgence && (
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.63rem", fontWeight: 700, color: "#dc2626", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "999px", padding: "3px 9px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#dc2626" }} />
                          Urgence 24h/7j
                        </span>
                      )}
                    </div>

                    <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--ink-950)", marginBottom: "8px", lineHeight: 1.3 }}>
                      {s.titre}
                    </h2>
                    <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.7, flex: 1, marginBottom: "22px" }}>
                      {s.description.slice(0, 105)}…
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: "16px" }}>
                      <span style={{ fontSize: "0.73rem", color: "#94a3b8" }}>{s.prix.split("—")[0].trim()}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.78rem", fontWeight: 600, color: accent }}>
                        Voir la fiche <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "640px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Besoin d'un devis gratuit ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", marginBottom: "32px", lineHeight: 1.7 }}>
            Déplacement offert dans l'agglomération toulousaine.<br />Réponse sous 2h en semaine.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0650579620" className="btn-cta" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "13px 26px", borderRadius: "10px", textDecoration: "none" }}>
              <Phone size={16} />
              Appeler maintenant
            </a>
            <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "rgba(255,255,255,0.08)", color: "white", fontWeight: 600, fontSize: "0.92rem", padding: "13px 26px", borderRadius: "10px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.13)" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)" }}>
              Formulaire de contact <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .srv-card:hover .srv-bar { opacity: 1 !important; }
        @media (max-width: 640px) { .srv-card { padding: 26px 22px 22px !important; } }
      `}</style>
    </div>
  )
}
