// src/components/Footer.tsx — v7 (Clean Navigation Style)
import { Link } from "@tanstack/react-router"
import { Instagram, Facebook, Youtube, Send, Droplet } from "lucide-react"

const NAV = [
  {
    heading: "Prestations",
    links: [
      { label: "Fuite d'eau",           to: "/services/$slug", params: { slug: "fuite-d-eau" } },
      { label: "Chauffe-eau & Ballon",  to: "/services/$slug", params: { slug: "chauffe-eau" } },
      { label: "Débouchage",            to: "/services/$slug", params: { slug: "debouchage" } },
      { label: "Robinetterie",          to: "/services/$slug", params: { slug: "remplacement-robinetterie" } },
      { label: "Rénovation salle de bain", to: "/services/$slug", params: { slug: "renovation-salle-de-bain" } },
    ],
  },
  {
    heading: "Zones",
    links: [
      { label: "Toulouse",       to: "/intervention/$ville", params: { ville: "toulouse" } },
      { label: "Colomiers",      to: "/intervention/$ville", params: { ville: "colomiers" } },
      { label: "Blagnac",        to: "/intervention/$ville", params: { ville: "blagnac" } },
      { label: "Tournefeuille",  to: "/intervention/$ville", params: { ville: "tournefeuille" } },
      { label: "Muret",          to: "/intervention/$ville", params: { ville: "muret" } },
    ],
  },
  {
    heading: "Informations",
    links: [
      { label: "À propos",      to: "/a-propos" },
      { label: "Urgence 24h/7j", to: "/contact" },
      { label: "Devis gratuit", to: "/contact" },
      { label: "Nos tarifs",    to: "/contact" },
    ],
  },
]

const SOCIALS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,  href: "#", label: "Facebook"  },
  { icon: Youtube,   href: "#", label: "YouTube"   },
  { icon: Send,      href: "#", label: "Telegram"  },
]

export function Footer() {
  return (
    <footer style={{
      background: "var(--ink-900)",
      color: "rgba(255,255,255,0.55)",
      fontFamily: "var(--font-body, system-ui, sans-serif)",
    }}>
      <div className="footer-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 40px 0" }}>

        {/* ── Rangée principale ── */}
        <div className="footer-main" style={{
          display: "flex",
          gap: "80px",
          paddingBottom: "56px",
        }}>

          {/* Gauche — Marque */}
          <div className="footer-brand" style={{ flexShrink: 0, maxWidth: "260px" }}>
            {/* Logo */}
            <div className="footer-logo-wrap" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "9px",
                background: "var(--brand-500)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Droplet size={17} color="white" fill="white" />
              </div>
              <span style={{
                fontFamily: "var(--font-display, system-ui)",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: "white",
                letterSpacing: "-0.02em",
              }}>
                NinoPlomberie
              </span>
            </div>
            
            {/* Tagline */}
            <p className="footer-tagline" style={{
              fontSize: "0.875rem",
              lineHeight: 1.65,
              marginBottom: "28px",
              color: "rgba(255,255,255,0.5)",
            }}>
              Artisan plombier-chauffagiste à Toulouse. Intervention rapide, devis transparent, travail soigné — 7j/7.
            </p>

            {/* Réseaux sociaux */}
            <div className="footer-socials" style={{ display: "flex", gap: "14px" }}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    transition: "color 0.2s",
                    display: "flex",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  <Icon size={19} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* Droite — Colonnes de navigation */}
          <div className="footer-nav" style={{
            display: "flex",
            gap: "64px",
            flex: 1,
            justifyContent: "flex-end",
          }}>
            {NAV.map(({ heading, links }) => (
              <div key={heading} className={`nav-col nav-col-${heading.toLowerCase()}`}>
                <div style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: "20px",
                }}>
                  {heading}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "13px" }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={(link as any).to}
                        params={(link as any).params}
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          textDecoration: "none",
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── SEO Zones d'intervention (Compact) ── */}
        <div className="seo-container" style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 0",
          marginTop: "12px",
        }}>
          <p style={{
            fontSize: "0.65rem",
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.25)",
            margin: 0,
            textAlign: "justify",
          }}>
            <span className="seo-text">
              <strong style={{ fontWeight: 600, color: "rgba(255,255,255,0.35)" }}>Zones d'intervention (31) : </strong>
              Toulouse, Colomiers, Tournefeuille, Blagnac, Muret, Plaisance-du-Touch, Cugnaux, Balma, Ramonville-Saint-Agne, Castanet-Tolosan, Fonsorbes, L'Union, Aucamville, Saint-Orens-de-Gameville, Saint-Jean, Portet-sur-Garonne, Castelginest, Auterive, Villeneuve-Tolosane, Pibrac, Frouzins, Seysses, Launaguet, Saint-Lys, Cornebarrieu, Aussonne, Lespinasse, Mondonville, Roques, Quint-Fonsegrives, Escalquens...
            </span> 
            <Link to="/zones" style={{ color: "var(--brand-300)", textDecoration: "none", fontWeight: 600, display: "inline-block" }}>Voir nos 205 communes d'intervention →</Link>
          </p>
        </div>

        {/* ── Barre basse ── */}
        <div className="footer-bottom" style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            Copyright © 2026 NinoPlomberie. Tous droits réservés.
          </span>
          <div className="footer-bottom-links" style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            {[
              { label: "Mentions légales",             href: "/mentions-legales" },
              { label: "Politique de confidentialité", href: "/politique-confidentialite" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                to={href as "/"}
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-container { padding: 40px 24px 0 !important; }
          .footer-main { flex-direction: column !important; gap: 32px !important; padding-bottom: 32px !important; }
          .footer-nav  { justify-content: flex-start !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .footer-container { padding: 24px 16px 0 !important; }
          .footer-main { gap: 0 !important; padding-bottom: 16px !important; }
          .footer-nav  { display: none !important; }
          .footer-tagline { display: none !important; }
          .footer-brand { margin: 0 auto; align-items: center; text-align: center; display: flex; flex-direction: column; }
          .footer-logo-wrap { justify-content: center; margin-bottom: 12px !important; }
          .footer-socials { justify-content: center; }
          .seo-container { display: none !important; }
          .footer-bottom { padding: 16px 0 24px !important; gap: 8px !important; flex-direction: column; text-align: center; }
          .footer-bottom-links { justify-content: center; gap: 12px !important; }
        }
      `}</style>
    </footer>
  )
}
