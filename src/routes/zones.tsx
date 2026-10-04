import { createFileRoute, Link } from "@tanstack/react-router"
import { communes } from "../data/communes"
import { MapPin, PhoneCall } from "lucide-react"
import { pageHead, ldScript, breadcrumbJsonLd } from "../lib/site"
import { PageHero } from "../components/PageHero"

export const Route = createFileRoute("/zones")({
  component: ZonesComponent,
  head: () => ({
    ...pageHead({
      title: "Zones d'intervention en Haute-Garonne (31) — Nino Plomberie",
      description: `Basé à Muret, Nino Plomberie intervient à Toulouse et dans ${communes.length} communes de Haute-Garonne : dépannage 24h/24, chauffe-eau, débouchage, salle de bain. Trouvez votre commune.`,
      path: "/zones",
    }),
    scripts: [
      ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Zones d'intervention", path: "/zones" }])),
    ],
  }),
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
      {/* ── Hero ── */}
      <PageHero
        kicker="Haute-Garonne (31)"
        title={<>Nos zones <em>d'intervention</em></>}
        lead="Basé à Muret, Nino Plomberie se déplace à Toulouse et dans toute la Haute-Garonne, 24h/24 et 7j/7 pour les urgences. Trouvez votre commune ci-dessous."
        image="/realisations/photo-06.jpg"
      />

      {/* ── Liste des communes ── */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="section-container">
          
          {/* Index alphabétique rapide (Sticky) */}
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "8px", 
            padding: "20px",
            background: "white",
            borderRadius: "var(--radius-sm)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
            border: "1px solid var(--gray-200)",
            justifyContent: "center",
            position: "sticky",
            top: "100px", // Just below the header
            zIndex: 100,
            marginBottom: "60px"
          }}>
            {letters.map(letter => (
              <a 
                key={letter} 
                href={`#lettre-${letter}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  background: "var(--sand-50)",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--ink-800)",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.background = "var(--brand-500)"; 
                  e.currentTarget.style.color = "white"; 
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(14, 165, 233, 0.3)";
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.background = "var(--sand-50)"; 
                  e.currentTarget.style.color = "var(--ink-800)"; 
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Grille alphabétique */}
          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            {letters.map((letter) => (
              <div key={letter} id={`lettre-${letter}`} style={{ scrollMarginTop: "200px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                  <h2 style={{ 
                    fontFamily: "var(--font-display)", 
                    fontSize: "3rem", 
                    color: "var(--ink-900)", 
                    fontWeight: 800,
                    lineHeight: 1
                  }}>
                    {letter}
                  </h2>
                  <div style={{ height: "2px", background: "var(--gray-200)", flexGrow: 1 }} />
                </div>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "20px"
                }}>
                  {groupedCommunes[letter].map(commune => (
                    <Link
                      key={commune.slug}
                      to="/intervention/$ville"
                      params={{ ville: commune.slug }}
                      style={{
                        padding: "16px 20px",
                        background: "white",
                        borderRadius: "var(--radius-sm)",
                        textDecoration: "none",
                        color: "var(--ink-800)",
                        fontWeight: 600,
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                        border: "1px solid var(--gray-100)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        overflow: "hidden"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--brand-300)"
                        e.currentTarget.style.boxShadow = "0 10px 30px rgba(14, 165, 233, 0.15)"
                        e.currentTarget.style.color = "var(--brand-700)"
                        e.currentTarget.style.transform = "translateY(-4px)"
                        const icon = e.currentTarget.querySelector('svg');
                        if (icon) icon.style.color = "var(--cta-500)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--gray-100)"
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)"
                        e.currentTarget.style.color = "var(--ink-800)"
                        e.currentTarget.style.transform = "translateY(0)"
                        const icon = e.currentTarget.querySelector('svg');
                        if (icon) icon.style.color = "var(--gray-400)";
                      }}
                    >
                      <MapPin size={18} style={{ color: "var(--gray-400)", transition: "color 0.3s ease" }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {commune.nom}
                        </span>
                        <span style={{ color: "var(--gray-500)", fontSize: "0.85rem", fontWeight: 500 }}>
                          {commune.codePostal}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Final */}
          <div style={{
            marginTop: "100px",
            background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)",
            borderRadius: "var(--radius-sm)",
            padding: "60px 40px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: "-50%", left: "-10%", width: "50%", height: "200%", background: "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.15) 0%, transparent 70%)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ color: "white", fontSize: "2rem", fontFamily: "var(--font-display)", fontWeight: 800, marginBottom: "16px" }}>
                Votre ville n'est pas dans la liste ?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto 32px" }}>
                Appelez-nous directement ! Nous intervenons parfois dans les communes limitrophes de la Haute-Garonne selon nos disponibilités.
              </p>
              <a 
                href="tel:0650579620" 
                className="btn-cta" 
                style={{ fontSize: "1.1rem", padding: "16px 32px", display: "inline-flex" }}
              >
                <PhoneCall size={20} />
                06 50 57 96 20
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

