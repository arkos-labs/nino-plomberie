// src/components/Header.tsx — v3
import { Link, useRouterState } from "@tanstack/react-router"
import { Phone, Menu, X, ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import { BUSINESS } from "../lib/site"

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
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
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (to: string) => (to === "/" ? currentPath === "/" : currentPath.startsWith(to))

  return (
    <>
      <header className={`hdr${scrolled ? " is-scrolled" : ""}`}>
        <div className="hdr-inner">
          {/* ── Logo ── */}
          <Link to="/" className="hdr-logo">
            <img src="/logo.png" alt="Nino Plomberie" />
          </Link>

          {/* ── Nav Desktop ── */}
          <nav className="hdr-nav hidden-mobile" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hdr-link${isActive(link.to) ? " is-active" : ""}`}
                aria-current={isActive(link.to) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA + Burger ── */}
          <div className="hdr-actions">
            <Link to="/contact" className="btn-secondary hidden-mobile hdr-btn hdr-devis">
              Devis gratuit <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta hdr-btn">
              <Phone size={15} aria-hidden="true" />
              <span className="hidden-mobile">{BUSINESS.phone}</span>
              <span className="show-mobile">Appeler</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile hdr-burger"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Menu Mobile ── */}
        {menuOpen && (
          <div className="hdr-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`hdr-link${isActive(link.to) ? " is-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn-secondary" style={{ marginTop: "10px", display: "flex" }}>
              Devis gratuit <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta" style={{ display: "flex" }}>
              <Phone size={18} />
              Urgence — {BUSINESS.phone}
            </a>
          </div>
        )}
      </header>

      {/* ── Floating CTA 24h/7j (Bottom Right) ── */}
      <a
        href={`tel:${BUSINESS.phoneIntl}`}
        className="float-cta"
        aria-label="Appel urgence plomberie 24h/7j"
      >
        <Phone size={18} />
        Urgence 24h/7j
      </a>

      <style>{`
        .hdr {
          position: sticky; top: 0; z-index: 1000;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .hdr.is-scrolled { border-bottom-color: rgba(0,0,0,0.08); box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        .hdr-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; height: 88px; padding: 0 32px; transition: height 0.3s ease; }
        .hdr.is-scrolled .hdr-inner { height: 68px; }
        .hdr-logo { display: flex; align-items: center; }
        .hdr-logo img { height: 80px; width: auto; object-fit: contain; transition: height 0.3s ease; }
        .hdr.is-scrolled .hdr-logo img { height: 60px; }

        .hdr-nav { display: flex; align-items: center; gap: 6px; }
        .hdr-link {
          display: flex; align-items: center;
          padding: 9px 16px; border-radius: var(--radius-sm);
          font-size: 1rem; font-weight: 500; color: var(--ink-700); white-space: nowrap;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .hdr-link:hover { background: var(--sand-100); color: var(--brand-600); }
        .hdr-link.is-active { background: var(--sand-100); color: var(--brand-600); font-weight: 700; }

        .hdr-actions { display: flex; align-items: center; gap: 12px; }
        .hdr-btn { padding: 8px 18px; font-size: 0.9rem; white-space: nowrap; }
        .hdr-burger {
          display: flex; align-items: center; justify-content: center;
          padding: 8px; background: none; cursor: pointer; color: var(--ink-800);
          border: 1px solid var(--gray-200); border-radius: var(--radius-sm);
        }

        .hdr-mobile { display: flex; flex-direction: column; gap: 4px; padding: 12px 16px 20px; background: var(--sand-50); border-top: 1px solid var(--gray-100); }
        .hdr-mobile .hdr-link { padding: 13px 16px; }

        @media (max-width: 1100px) {
          .hdr-devis { display: none !important; }
          .hdr-inner { padding: 0 20px; gap: 16px; }
          .hdr-link { padding: 9px 12px; }
        }
        @media (max-width: 768px) {
          .hdr-inner { padding: 0 16px; height: 76px; }
          .hdr-logo img { height: 64px; }
        }
      `}</style>
    </>
  )
}
