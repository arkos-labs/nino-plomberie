// src/routes/services.$slug.tsx — v4 (contenu SEO + GEO)
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { getServiceBySlug, services } from "../data/services"
import { realisations } from "../data/realisations"
import {
  Phone, CheckCircle2, ChevronRight, ChevronDown,
  Droplets, Flame, Wind, Wrench, Bath, Building2, Thermometer,
  ArrowRight, ArrowUpRight, Shield, Star, Clock, Calendar, MapPin,
} from "lucide-react"
import { ProcessSteps } from "../components/ProcessSteps"
import { PageHero } from "../components/PageHero"
import { Gallery } from "../components/Gallery"
import { SITE_URL, BUSINESS, BUSINESS_ID, ldScript, breadcrumbJsonLd, faqJsonLd } from "../lib/site"

const COMMUNES_PROCHES = [
  { slug: "muret", nom: "Muret" },
  { slug: "toulouse", nom: "Toulouse" },
  { slug: "portet-sur-garonne", nom: "Portet-sur-Garonne" },
  { slug: "cugnaux", nom: "Cugnaux" },
  { slug: "seysses", nom: "Seysses" },
  { slug: "frouzins", nom: "Frouzins" },
  { slug: "roques", nom: "Roques" },
  { slug: "pins-justaret", nom: "Pins-Justaret" },
  { slug: "labarthe-sur-leze", nom: "Labarthe-sur-Lèze" },
  { slug: "eaunes", nom: "Eaunes" },
  { slug: "villeneuve-tolosane", nom: "Villeneuve-Tolosane" },
  { slug: "fonsorbes", nom: "Fonsorbes" },
  { slug: "plaisance-du-touch", nom: "Plaisance-du-Touch" },
  { slug: "tournefeuille", nom: "Tournefeuille" },
  { slug: "colomiers", nom: "Colomiers" },
  { slug: "blagnac", nom: "Blagnac" },
]

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug)
    if (!service) return { meta: [{ title: "Service introuvable" }, { name: "robots", content: "noindex" }] }
    const url = `${SITE_URL}/services/${params.slug}`
    const title = service.metaTitle ?? `${service.titre} à Muret et Toulouse | Nino Plomberie`
    const description = service.metaDescription ?? service.enBref
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        ldScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.titre,
          serviceType: service.titre,
          description: service.enBref,
          url,
          provider: { "@id": BUSINESS_ID },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Haute-Garonne" },
            ...COMMUNES_PROCHES.slice(0, 8).map((c) => ({ "@type": "City", name: c.nom })),
          ],
          offers: { "@type": "Offer", description: service.prix, priceCurrency: "EUR" },
        }),
        ldScript(faqJsonLd(service.faq.map((f) => ({ q: f.question, a: f.reponse })))),
        ldScript(breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.titre, path: `/services/${params.slug}` },
        ])),
      ],
    }
  },
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug)
    if (!service) throw notFound()
    return { service }
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div style={{ padding: "80px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--ink-950)", marginBottom: "16px" }}>Service introuvable</h1>
      <Link to="/services" className="btn-secondary">
        ← Voir tous les services
      </Link>
    </div>
  ),
})

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Droplets, Flame, Wind, Wrench, Bath, Building2, Thermometer,
}

function ServiceDetailPage() {
  const { service } = Route.useLoaderData()

  const others = services.filter((s) => s.slug !== service.slug)
  const serviceRealisations = realisations.filter((r) => r.services.includes(service.slug))
  const accent = "var(--brand-400)"

  return (
    <div style={{ background: "var(--sand-50)" }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        breadcrumb={
          <nav aria-label="Fil d'Ariane">
            <ol className="page-hero-crumbs">
              <li><Link to="/">Accueil</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li><Link to="/services">Services</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li aria-current="page">{service.titre}</li>
            </ol>
          </nav>
        }
        kicker={service.urgence ? "Urgence 24h/24 · 7j/7" : "Muret · Toulouse · Haute-Garonne"}
        title={<><em>{service.titre}</em> à Muret et Toulouse</>}
        lead={service.description}
        actions={<>
          <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
            <Phone size={18} />
            Appeler Nino · {BUSINESS.phone}
          </a>
          <Link to="/contact" className="btn-ghost">
            <Calendar size={18} />
            Devis gratuit
          </Link>
        </>}
        image="/realisations/photo-02.jpg"
      />

      {/* ── Contenu principal ────────────────────────────────────────────── */}
      <section style={{ padding: "64px 0 72px" }}>
        <div className="section-container" style={{ maxWidth: "1140px" }}>
          <div className="svc-layout">

            {/* ── Colonne principale ── */}
            <div style={{ minWidth: 0 }}>

              {/* En bref */}
              <div className="svc-card svc-enbref">
                <div className="svc-kicker">En bref</div>
                <p style={{ margin: 0, color: "var(--ink-900)", fontSize: "1.08rem", lineHeight: 1.75 }}>{service.enBref}</p>
              </div>

              {/* Ce qui est inclus */}
              <div className="svc-card">
                <h2 className="svc-h2">
                  <span className="svc-bar" style={{ background: accent }} />
                  Ce que je prends en charge
                </h2>
                <ul className="svc-details">
                  {service.details.map((d) => (
                    <li key={d}>
                      <CheckCircle2 size={16} color={accent} style={{ flexShrink: 0, marginTop: "3px" }} aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contenu SEO */}
              {service.seoContent && service.seoContent.length > 0 && (
                <div className="svc-card">
                  <h2 className="svc-h2">
                    <span className="svc-bar" style={{ background: accent }} />
                    {service.titre} : ce qu'il faut savoir
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {service.seoContent.map((paragraphe, idx) => (
                      <p key={idx} style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, margin: 0 }}>
                        {paragraphe}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Réalisations */}
              {serviceRealisations.length > 0 && (
                <div className="svc-card">
                  <h2 className="svc-h2">
                    <span className="svc-bar" style={{ background: accent }} />
                    Mes réalisations
                  </h2>
                  <Gallery items={serviceRealisations} />
                </div>
              )}

              {/* FAQ */}
              {service.faq.length > 0 && (
                <div className="svc-card">
                  <h2 className="svc-h2">
                    <span className="svc-bar" style={{ background: accent }} />
                    Questions fréquentes : {service.titre.toLowerCase()}
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {service.faq.map((item) => (
                      <details key={item.question} className="svc-faq">
                        <summary>
                          <h3>{item.question}</h3>
                          <ChevronDown size={18} aria-hidden="true" className="svc-faq-chevron" />
                        </summary>
                        <p>{item.reponse}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Zone */}
              <div className="svc-card" style={{ marginBottom: 0 }}>
                <h2 className="svc-h2">
                  <span className="svc-bar" style={{ background: accent }} />
                  {service.titre} : communes desservies
                </h2>
                <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 16px" }}>
                  Basé à Muret, Nino Plomberie intervient pour ce service dans toute la Haute-Garonne, notamment :
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {COMMUNES_PROCHES.map((c) => (
                    <Link key={c.slug} to="/intervention/$ville" params={{ ville: c.slug }} className="svc-commune">
                      <MapPin size={12} aria-hidden="true" /> {c.nom}
                    </Link>
                  ))}
                  <Link to="/zones" className="svc-commune" style={{ fontWeight: 700, color: "var(--brand-600)" }}>
                    Toutes les communes →
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="svc-sidebar" aria-label="Contact et engagements">

              {/* Tarif */}
              <div style={{ background: "white", borderRadius: "var(--radius-sm)", padding: "28px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--brand-600)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                  Tarif
                </div>
                <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 20px" }}>{service.prix}</p>

                <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta"
                  style={{ display: "flex", width: "100%", marginBottom: "10px" }}
                >
                  <Phone size={16} /> {BUSINESS.phone}
                </a>
                <Link
                  to="/contact"
                  className="btn-secondary"
                  style={{ display: "flex", width: "100%", fontSize: "0.92rem" }}
                >
                  Demander un devis gratuit <ArrowRight size={14} />
                </Link>
                <Link
                  to="/tarifs"
                  style={{ display: "block", textAlign: "center", marginTop: "12px", fontSize: "0.85rem", color: "var(--brand-600)", fontWeight: 600 }}
                >
                  Voir les tarifs indicatifs
                </Link>
              </div>

              {/* Engagements */}
              <div style={{ background: "var(--brand-600)", borderRadius: "var(--radius-sm)", padding: "24px" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
                  Mes engagements
                </div>
                {[
                  { icon: Clock,        text: "Joignable 24h/24, 7j/7" },
                  { icon: Star,         text: "Devis gratuit avant les travaux" },
                  { icon: CheckCircle2, text: "Réparations garanties 2 ans" },
                  { icon: Shield,       text: "Plus de 20 ans d'expérience" },
                ].map(({ icon: I, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <I size={15} color="var(--cta-400)" style={{ flexShrink: 0 }} aria-hidden="true" />
                    <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.88rem" }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Note Google */}
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "white", borderRadius: "var(--radius-sm)", padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px", border: "1px solid #e2e8f0", textDecoration: "none" }}
              >
                <div style={{ display: "flex", gap: "2px" }} aria-hidden="true">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < 4 ? "#eab308" : "none"} color="#eab308" />)}
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1e293b" }}>4,4 / 5 sur Google</div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "1px" }}>78 avis clients</div>
                </div>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* ── Autres services ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand-50)", padding: "56px 0 64px", borderTop: "1px solid #f1f5f9" }}>
        <div className="section-container" style={{ maxWidth: "1140px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: "var(--ink-950)", marginBottom: "24px" }}>
            Autres prestations de Nino Plomberie
          </h2>
          <div className="feature-grid">
            {others.map((s) => {
              const RI = iconMap[s.icon] ?? Wrench
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="feature-card">
                  <div className="feature-card-top">
                    <span className="feature-card-icon"><RI size={22} strokeWidth={1.8} /></span>
                  </div>
                  <h3>{s.titre}</h3>
                  <p>{s.sousTitre}</p>
                  <span className="feature-card-btn">En savoir plus <ArrowUpRight size={14} aria-hidden="true" /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <style>{`
        .svc-layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; align-items: start; }
        .svc-sidebar { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 90px; }
        .svc-card { background: white; border-radius: var(--radius-sm); padding: 32px; margin-bottom: 20px; border: 1px solid #eef2f6; }
        .svc-enbref { border-left: 4px solid var(--cta-500); }
        .svc-kicker { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cta-600); margin-bottom: 10px; }
        .svc-h2 { font-family: var(--font-display); font-weight: 800; font-size: 1.25rem; color: var(--ink-950); margin: 0 0 18px; display: flex; align-items: center; gap: 10px; line-height: 1.3; }
        .svc-bar { display: inline-block; width: 4px; height: 20px; border-radius: 2px; flex-shrink: 0; }
        .svc-details { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; }
        .svc-details li { display: flex; gap: 10px; padding: 12px 14px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9; color: #334155; font-size: 0.94rem; line-height: 1.6; }
        .svc-faq { border: 1px solid #eef2f6; border-radius: var(--radius-sm); }
        .svc-faq[open] { border-color: var(--brand-200); }
        .svc-faq summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 16px 18px; min-height: 44px; }
        .svc-faq summary::-webkit-details-marker { display: none; }
        .svc-faq summary:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; border-radius: 12px; }
        .svc-faq h3 { margin: 0; font-size: 1rem; font-weight: 700; color: #1e293b; line-height: 1.45; }
        .svc-faq-chevron { flex-shrink: 0; color: var(--brand-500); transition: transform 0.2s ease; }
        .svc-faq[open] .svc-faq-chevron { transform: rotate(180deg); }
        .svc-faq p { margin: 0; padding: 0 18px 16px; color: #475569; font-size: 0.98rem; line-height: 1.75; }
        .svc-commune { display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; border-radius: 999px; background: #f8fafc; border: 1px solid #e2e8f0; color: #475569; font-size: 0.84rem; text-decoration: none; transition: border-color 0.15s ease; }
        .svc-commune:hover { border-color: var(--brand-300); color: var(--brand-600); }
        @media (max-width: 960px) {
          .svc-layout { grid-template-columns: 1fr; }
          .svc-sidebar { position: static; }
        }
        @media (max-width: 560px) { .svc-card { padding: 22px; } }
        @media (prefers-reduced-motion: reduce) { .svc-faq-chevron { transition: none; } }
      `}</style>
    </div>
  )
}
