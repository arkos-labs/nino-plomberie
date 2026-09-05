// src/routes/a-propos.tsx — v2
import { createFileRoute, Link } from "@tanstack/react-router"
import { Shield, Award, Users, Clock, CheckCircle2, Phone, MapPin, Wrench, Star, ArrowRight } from "lucide-react"

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Nino Plomberie 31 — Artisan plombier Toulouse" },
      { name: "description", content: "Découvrez Nino, artisan plombier-chauffagiste basé à Toulouse depuis 2014. Certifié RGE, garantie décennale, 1 200+ interventions." },
    ],
    links: [
      { rel: "canonical", href: "https://ninoplomberie31.fr/a-propos" },
    ],
  }),
  component: AProposPage,
})

const CHIFFRES = [
  { valeur: "12",     label: "ans de métier"           },
  { valeur: "1 200+", label: "interventions réalisées" },
  { valeur: "4.9/5",  label: "note Google (120 avis)"  },
  { valeur: "35 km",  label: "rayon d'action"          },
]

const TIMELINE = [
  { annee: "2014", titre: "CAP Installateur sanitaire",   desc: "Formation au lycée professionnel Paul Sabatier, Toulouse. Mention assez bien." },
  { annee: "2016", titre: "BP Monteur installations sanitaires", desc: "Brevet professionnel obtenu avec mention bien — spécialisation thermique." },
  { annee: "2018", titre: "Création de Nino Plomberie 31", desc: "Lancement en indépendant sur Toulouse et la première couronne." },
  { annee: "2020", titre: "Certification RGE Qualibat",   desc: "Qualification 5131 — accès aux aides CEE et MaPrimeRénov' pour les clients." },
  { annee: "2023", titre: "Équipe de 3 compagnons",       desc: "Croissance de l'activité, recrutement de deux plombiers qualifiés." },
]

const VALEURS = [
  { icon: Clock,  titre: "Ponctualité",             desc: "Je respecte les créneaux annoncés. En cas de retard, vous êtes prévenu avant." },
  { icon: Shield, titre: "Transparence tarifaire",  desc: "Devis écrit avant toute intervention. Aucune ligne cachée sur la facture." },
  { icon: Users,  titre: "Respect du logement",     desc: "Protection des sols, nettoyage complet après travaux — je pars comme je suis arrivé." },
  { icon: Award,  titre: "Matériaux certifiés NF",  desc: "Pièces professionnelles uniquement, garanties 2 ans pièces et main-d'œuvre." },
]

const CERTIFS = [
  { label: "RGE Qualibat 5131",  desc: "Reconnu Garant de l'Environnement — CEE & MaPrimeRénov'"        },
  { label: "Qualifié PGN",       desc: "Installateur gaz naturel — pose et entretien chaudières gaz"    },
  { label: "Garantie Décennale", desc: "Assurance Allianz n° 104892-A — couvre 10 ans après réception"  },
  { label: "RC Pro",             desc: "Responsabilité civile professionnelle — tous dommages couverts"  },
]

function AProposPage() {
  return (
    <div style={{ background: "var(--sand-50)" }}>

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
            <CheckCircle2 size={13} />
            Artisan Indépendant · Toulouse
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
            À propos de{" "}
            <span style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #FDE68A, #FB923C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Nino Plomberie
            </span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 28px",
          }}>
            Passionné du métier depuis plus de 12 ans, j'ai fondé <strong style={{ color: "white" }}>Nino Plomberie 31</strong> pour offrir aux habitants de Toulouse une plomberie sérieuse, réactive et sans mauvaises surprises.
          </p>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
              <MapPin size={14} />
              Toulouse, Haute-Garonne (31)
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
              <Star size={14} fill="#FDE68A" color="#FDE68A" />
              4.9/5 · 120 avis Google
            </div>
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ── */}
      <div style={{ background: "white", borderBottom: "1px solid #f1f5f9" }}>
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          <div className="ap-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {CHIFFRES.map(({ valeur, label }, i) => (
              <div key={label} style={{ padding: "28px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.9rem", color: "var(--ink-950)", letterSpacing: "-0.03em", lineHeight: 1 }}>{valeur}</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "6px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Parcours + Valeurs ── */}
      <section style={{ padding: "72px 0" }}>
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          <div className="ap-content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>

            {/* Timeline */}
            <div style={{ background: "white", borderRadius: "18px", padding: "36px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--ink-950)", marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-block", width: "3px", height: "18px", background: "var(--brand-400)", borderRadius: "2px" }} />
                Parcours
              </h2>

              <div style={{ position: "relative" }}>
                {/* Ligne verticale */}
                <div style={{ position: "absolute", left: "19px", top: "8px", bottom: "8px", width: "1px", background: "#f1f5f9" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {TIMELINE.map(({ annee, titre, desc }, i) => (
                    <div key={annee} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      {/* Dot */}
                      <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: i === TIMELINE.length - 1 ? "var(--brand-500)" : "var(--white)", border: `1px solid ${i === TIMELINE.length - 1 ? "var(--brand-500)" : "var(--gray-200)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                        <span style={{ fontSize: "0.65rem", fontWeight: 800, color: i === TIMELINE.length - 1 ? "white" : "#94a3b8", letterSpacing: "-0.02em" }}>{annee}</span>
                      </div>
                      <div style={{ paddingTop: "8px" }}>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e293b", marginBottom: "4px" }}>{titre}</div>
                        <div style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.7 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Valeurs */}
            <div style={{ background: "white", borderRadius: "18px", padding: "36px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--ink-950)", marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-block", width: "3px", height: "18px", background: "#10b981", borderRadius: "2px" }} />
                Mes engagements
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {VALEURS.map(({ icon: Icon, titre, desc }) => (
                  <div key={titre} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(249,115,22,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} color="var(--brand-400)" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e293b", marginBottom: "4px" }}>{titre}</div>
                      <div style={{ fontSize: "0.92rem", color: "#64748b", lineHeight: 1.7 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section style={{ background: "white", padding: "64px 0", borderTop: "1px solid #f1f5f9" }}>
        <div className="section-container" style={{ maxWidth: "680px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2rem)", color: "var(--ink-950)", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Travaillons ensemble
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.65, marginBottom: "32px" }}>
            Devis gratuit, déplacement offert dans l'agglomération toulousaine.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn-cta"
              style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "13px 26px", borderRadius: "10px", textDecoration: "none" }}
            >
              Échanger sur votre projet <ArrowRight size={16} />
            </Link>
            <Link to="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#f8fafc", color: "#1e293b", fontWeight: 600, fontSize: "0.92rem", padding: "13px 26px", borderRadius: "10px", textDecoration: "none", border: "1px solid #e2e8f0" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f1f5f9" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#f8fafc" }}>
              Formulaire de contact →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .ap-hero    { grid-template-columns: 1fr !important; }
          .ap-hero > div:last-child { display: none; }
          .ap-content { grid-template-columns: 1fr !important; }
          .ap-stats   { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .ap-stats   { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
