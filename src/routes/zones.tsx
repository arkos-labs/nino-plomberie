import { createFileRoute, Link } from "@tanstack/react-router"
import { communes } from "../data/communes"
import { MapPin } from "lucide-react"

export const Route = createFileRoute("/zones")({
  component: ZonesComponent,
  meta: () => [
    { title: "Nos zones d'intervention plomberie en Haute-Garonne (31) — Nino Plomberie 31" },
    {
      name: "description",
      content:
        "Découvrez toutes les communes de Haute-Garonne (31) couvertes par Nino Plomberie 31. Dépannage urgence, installation, chauffagiste disponible sur 205 communes.",
    },
  ],
})

function ZonesComponent() {
  // Grouper par lettre alphabétique
  const groupedCommunes = communes.reduce((acc, commune) => {
    const letter = commune.nom.charAt(0).toUpperCase()
    if (!acc[letter]) {
      acc[letter] = []
    }
    acc[letter].push(commune)
    return acc
  }, {} as Record<string, typeof communes>)

  const letters = Object.keys(groupedCommunes).sort()

  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>
      {/* ── En-tête de page ── */}
      <section
        style={{
          background: "var(--ink-950)",
          padding: "100px 0 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="texture-grain" />
        <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(40, 75, 122, 0.15)", borderRadius: "100px", padding: "6px 16px", color: "var(--brand-400)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "20px" }}>
            <MapPin size={14} />
            Haute-Garonne (31)
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            Nos zones d'intervention
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            Nino Plomberie 31 se déplace sur l'ensemble du département de la Haute-Garonne. Trouvez votre commune ci-dessous pour découvrir nos services dédiés à votre secteur.
          </p>
        </div>
      </section>

      {/* ── Liste des communes ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="section-container">
          
          {/* Index alphabétique rapide */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "60px", justifyContent: "center" }}>
            {letters.map(letter => (
              <a 
                key={letter} 
                href={`#lettre-${letter}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  background: "white",
                  borderRadius: "8px",
                  fontWeight: 700,
                  color: "var(--ink-900)",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s, background 0.2s, color 0.2s"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink-900)"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-2px)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "var(--ink-900)"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Grille alphabétique */}
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {letters.map((letter) => (
              <div key={letter} id={`lettre-${letter}`} style={{ scrollMarginTop: "100px" }}>
                <h2 style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "2rem", 
                  color: "var(--brand-600)", 
                  borderBottom: "2px solid rgba(249,115,22,0.2)", 
                  paddingBottom: "12px", 
                  marginBottom: "32px",
                  fontWeight: 800
                }}>
                  {letter}
                </h2>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "16px"
                }}>
                  {groupedCommunes[letter].map(commune => (
                    <Link
                      key={commune.slug}
                      to="/intervention/$ville"
                      params={{ ville: commune.slug }}
                      style={{
                        padding: "12px 16px",
                        background: "white",
                        borderRadius: "8px",
                        textDecoration: "none",
                        color: "var(--ink-700)",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                        border: "1px solid var(--gray-200)",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--brand-300)"
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(249,115,22,0.1)"
                        e.currentTarget.style.color = "var(--brand-600)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--gray-200)"
                        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.02)"
                        e.currentTarget.style.color = "var(--ink-700)"
                      }}
                    >
                      <MapPin size={14} style={{ opacity: 0.5 }} />
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {commune.nom} <span style={{ opacity: 0.5, fontSize: "0.8rem", marginLeft: "4px" }}>({commune.codePostal})</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
