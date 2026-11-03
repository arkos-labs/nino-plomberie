// src/components/Footer.tsx — Équilibré & Professionnel
import { Link } from "@tanstack/react-router"

export function Footer() {
  return (
    <footer style={{
      background: "var(--ink-900)",
      color: "rgba(255,255,255,0.65)",
      fontFamily: "var(--font-body, system-ui, sans-serif)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div className="footer-container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 32px 0" }}>
        
        {/* Grille principale : 4 colonnes équilibrées */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
          gap: "40px",
          paddingBottom: "32px",
        }}>

          {/* Colonne 1 : Marque & Contact */}
          <div className="footer-col-brand">
            <Link to="/" style={{ display: "inline-block", textDecoration: "none", marginBottom: "14px" }}>
              <img
                src="/logo.png"
                alt="Nino Plomberie — Artisan plombier à Muret et Toulouse"
                style={{
                  height: "48px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Link>

            <p style={{
              fontSize: "0.85rem",
              lineHeight: 1.55,
              margin: "0 0 12px",
              color: "rgba(255,255,255,0.72)",
            }}>
              <strong style={{ color: "white" }}>Nino Plomberie</strong> — Artisan plombier-chauffagiste depuis plus de 20 ans. Intervention 24h/24 et 7j/7 à Muret, Toulouse et dans le 31.
            </p>

            <div style={{
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.6,
              marginBottom: "14px",
            }}>
              <div>11 rue François Arago, 31600 Muret</div>
              <div>Garantie décennale & devis avant travaux</div>
            </div>

            <a
              href="tel:+33650579620"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "7px",
                background: "var(--brand-500, #2962ff)",
                color: "white",
                fontSize: "0.84rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              📞 06 50 57 96 20
            </a>
          </div>

          {/* Colonne 2 : Prestations principales */}
          <div className="footer-col">
            <div style={{
              fontSize: "0.74rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.92)",
              marginBottom: "14px",
            }}>
              Prestations
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {[
                { label: "Dépannage d'urgence 24h/24", to: "/services/$slug", params: { slug: "urgence-plombier-toulouse" } },
                { label: "Recherche de fuite d'eau",    to: "/services/$slug", params: { slug: "fuite-d-eau" } },
                { label: "Débouchage canalisation",     to: "/services/$slug", params: { slug: "debouchage" } },
                { label: "Chauffe-eau & Cumulus",        to: "/services/$slug", params: { slug: "chauffe-eau" } },
                { label: "Chauffage & Chaudière",        to: "/services/$slug", params: { slug: "chauffage-chaudiere" } },
                { label: "Rénovation salle de bain",    to: "/services/$slug", params: { slug: "renovation-salle-de-bain-toulouse" } },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to as any}
                    params={item.params as any}
                    style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Zones principales */}
          <div className="footer-col">
            <div style={{
              fontSize: "0.74rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.92)",
              marginBottom: "14px",
            }}>
              Zones d'intervention
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {[
                { label: "Muret (siège)",             to: "/intervention/$ville", params: { ville: "muret" } },
                { label: "Toulouse",                  to: "/intervention/$ville", params: { ville: "toulouse" } },
                { label: "Colomiers & Ouest",         to: "/intervention/$ville", params: { ville: "colomiers" } },
                { label: "Tournefeuille",             to: "/intervention/$ville", params: { ville: "tournefeuille" } },
                { label: "Secteur Muretain",          to: "/zones/muretain" },
                { label: "Toutes les zones (31) →",   to: "/zones" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to as any}
                    params={item.params as any}
                    style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Informations */}
          <div className="footer-col">
            <div style={{
              fontSize: "0.74rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.92)",
              marginBottom: "14px",
            }}>
              Informations
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {[
                { label: "Tarifs indicatifs",         to: "/tarifs" },
                { label: "Avis clients (4,4/5)",       to: "/avis-clients" },
                { label: "Nos réalisations",           to: "/realisations" },
                { label: "Prendre rendez-vous",        to: "/rendez-vous" },
                { label: "Demander un devis",          to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to as any}
                    style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Barre basse : Copyright & Mentions */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "0.78rem",
          color: "rgba(255,255,255,0.4)",
        }}>
          <div>
            © 2026 Nino Plomberie — 11 rue François Arago, 31600 Muret. Tous droits réservés.
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              { label: "Mentions légales",             to: "/mentions-legales" },
              { label: "Politique de confidentialité", to: "/politique-confidentialite" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to as any}
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-container { padding: 32px 20px 0 !important; }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
          .footer-col-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 560px) {
          .footer-container { padding: 28px 16px 0 !important; }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding-bottom: 24px !important;
          }
        }
      `}</style>
    </footer>
  )
}
