// src/routes/a-propos.tsx — v2
import { createFileRoute, Link } from "@tanstack/react-router"
import { Shield, Award, Users, Clock, CheckCircle2, Phone, MapPin, Wrench, Star } from "lucide-react"

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
    <div style={{ background: "#f8f7f5" }}>

      {/* ── Hero ── */}
      <section style={{ background: "#0d1f1f", padding: "80px 0 72px" }}>
        <div className="section-container" style={{ maxWidth: "1100px" }}>

          {/* Breadcrumb */}
          <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.38)", marginBottom: "36px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>À propos</span>
          </div>

          <div className="ap-hero" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "64px" }}>

            {/* Texte */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: "999px", padding: "4px 14px", fontSize: "0.72rem", fontWeight: 700, color: "#f97316", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "20px" }}>
                <Wrench size={11} />
                Artisan indépendant depuis 2018
              </div>

              <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.03em", marginBottom: "20px" }}>
                Nino Delacroix<br />
                <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.75em" }}>Plombier-chauffagiste, Toulouse</span>
              </h1>

              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto 36px auto" }}>
                Passionné du métier depuis plus de 12 ans, j'ai fondé <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Nino Plomberie 31</strong> pour offrir aux habitants de Toulouse une plomberie sérieuse, réactive et sans mauvaises surprises. Aujourd'hui une équipe de 3 compagnons qualifiés.
              </p>

              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>
                  <MapPin size={13} color="#f97316" />
                  Toulouse, Haute-Garonne (31)
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>
                  <Star size={13} fill="#eab308" color="#eab308" />
                  4.9/5 · 120 avis Google
                </div>
              </div>
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
                <div style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 800, fontSize: "1.9rem", color: "#0f1923", letterSpacing: "-0.03em", lineHeight: 1 }}>{valeur}</div>
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
              <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 700, fontSize: "1rem", color: "#0f1923", marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-block", width: "3px", height: "18px", background: "#f97316", borderRadius: "2px" }} />
                Parcours
              </h2>

              <div style={{ position: "relative" }}>
                {/* Ligne verticale */}
                <div style={{ position: "absolute", left: "19px", top: "8px", bottom: "8px", width: "1px", background: "#f1f5f9" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {TIMELINE.map(({ annee, titre, desc }, i) => (
                    <div key={annee} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      {/* Dot */}
                      <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: i === TIMELINE.length - 1 ? "#f97316" : "#f8fafc", border: `1px solid ${i === TIMELINE.length - 1 ? "#f97316" : "#e2e8f0"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                        <span style={{ fontSize: "0.65rem", fontWeight: 800, color: i === TIMELINE.length - 1 ? "white" : "#94a3b8", letterSpacing: "-0.02em" }}>{annee}</span>
                      </div>
                      <div style={{ paddingTop: "8px" }}>
                        <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1e293b", marginBottom: "4px" }}>{titre}</div>
                        <div style={{ fontSize: "0.78rem", color: "#94a3b8", lineHeight: 1.55 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Valeurs */}
            <div style={{ background: "white", borderRadius: "18px", padding: "36px" }}>
              <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 700, fontSize: "1rem", color: "#0f1923", marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ display: "inline-block", width: "3px", height: "18px", background: "#10b981", borderRadius: "2px" }} />
                Mes engagements
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {VALEURS.map(({ icon: Icon, titre, desc }) => (
                  <div key={titre} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(249,115,22,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} color="#f97316" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1e293b", marginBottom: "4px" }}>{titre}</div>
                      <div style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>{desc}</div>
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
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2rem)", color: "#0f1923", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Travaillons ensemble
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.65, marginBottom: "32px" }}>
            Devis gratuit, déplacement offert dans l'agglomération toulousaine.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0650579620"
              style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#f97316", color: "white", fontWeight: 700, fontSize: "0.92rem", padding: "13px 26px", borderRadius: "10px", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ea6f0b" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f97316" }}>
              <Phone size={16} /> 06 50 57 96 20
            </a>
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
