// src/components/Header.tsx — v2 Premium
import { Link, useRouterState } from "@tanstack/react-router"
import { Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/a-propos", label: "À propos" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouterState()
  const currentPath = router.location.pathname

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.04)"
            : "none",
          transition: "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          className="section-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px", // Slightly taller for premium feel
          }}
        >
          {/* ── Logo ── */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="Nino Plomberie" style={{ height: "55px", width: "auto", objectFit: "contain" }} />
          </Link>

          {/* ── Nav Desktop ── */}
          <nav
            className="hidden-mobile"
            style={{ display: "flex", alignItems: "center", gap: "36px" }}
          >
            {navLinks.map((link) => {
              const isActive = currentPath === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontWeight: 500,
                    fontSize: "0.88rem",
                    color: isActive
                      ? "var(--brand-500)"
                      : "var(--ink-700)",
                    position: "relative",
                    paddingBottom: "2px",
                    transition: "color 0.25s ease",
                    textDecoration: "none",
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-3px",
                        left: 0,
                        width: "100%",
                        height: "2px",
                        background: "var(--brand-500)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* ── CTA + Burger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="tel:0650579620"
              className="btn-cta"
              style={{ padding: "10px 20px", fontSize: "0.875rem" }}
            >
              <Phone size={15} />
              <span className="hidden-mobile">06 50 57 96 20</span>
              <span className="show-mobile">Appeler</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{
                background: "none",
                border: "1px solid var(--gray-200)",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ink-800)",
                transition: "background 0.2s ease",
              }}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Menu Mobile ── */}
        {menuOpen && (
          <div
            style={{
              background: "var(--sand-50)",
              borderTop: "1px solid var(--gray-100)",
              padding: "12px 16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = currentPath === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: "13px 16px",
                    borderRadius: "var(--radius-sm)",
                    color: isActive ? "var(--brand-500)" : "var(--ink-700)",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "1rem",
                    background: isActive ? "var(--brand-50)" : "transparent",
                    transition: "background 0.15s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            {/* CTA urgence mobile */}
            <a
              href="tel:0650579620"
              style={{
                marginTop: "10px",
                padding: "14px 16px",
                background: "var(--cta-500)",
                color: "white",
                borderRadius: "var(--radius-md)",
                fontWeight: 700,
                fontSize: "1rem",
                fontFamily: "var(--font-display)",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "var(--shadow-fire)",
              }}
            >
              <Phone size={18} />
              Urgence — 06 50 57 96 20
            </a>
          </div>
        )}
      </header>

      {/* ── Floating CTA 24h/7j ── */}
      <a
        href="tel:0650579620"
        className="float-cta"
        aria-label="Appel urgence plomberie 24h/7j"
      >
        <Phone size={18} />
        Urgence 24h/7j
      </a>
    </>
  )
}
