// src/routes/intervention.$ville.tsx — pages de zone : un contenu éditorial unique par commune (data/zone-content.ts)
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { getCommuneBySlug, communes } from "../data/communes"
import { getZoneContent, type ZoneCta } from "../data/zone-content"
import { Phone, MapPin, Calendar, ArrowUpRight, Star, Mail } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { SITE_URL, BUSINESS, BUSINESS_ID, pageHead, ldScript, breadcrumbJsonLd, faqJsonLd } from "../lib/site"

/** Distance à vol d'oiseau (km) entre deux points */
function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

export const Route = createFileRoute("/intervention/$ville")({
  head: ({ params }) => {
    const commune = getCommuneBySlug(params.ville)
    const content = getZoneContent(params.ville)
    if (!commune || !content) return { meta: [{ title: "Page introuvable" }, { name: "robots", content: "noindex" }] }
    const path = `/intervention/${params.ville}`
    const head = pageHead({ title: content.title, description: content.description, path })
    const faqs = content.faq
    return {
      ...head,
      meta: [
        ...head.meta,
        { name: "geo.region", content: "FR-31" },
        { name: "geo.placename", content: commune.nom },
        { name: "geo.position", content: `${commune.lat};${commune.lng}` },
        { name: "ICBM", content: `${commune.lat}, ${commune.lng}` },
      ],
      scripts: [
        ldScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Plombier à ${commune.nom}`,
          serviceType: "Plomberie",
          url: `${SITE_URL}${path}`,
          provider: { "@id": BUSINESS_ID },
          description: content.description,
          areaServed: {
            "@type": "City",
            name: commune.nom,
            address: { "@type": "PostalAddress", postalCode: commune.codePostal, addressLocality: commune.nom, addressRegion: "Occitanie", addressCountry: "FR" },
            geo: { "@type": "GeoCoordinates", latitude: commune.lat, longitude: commune.lng },
          },
        }),
        ldScript(breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Zones d'intervention", path: "/zones" },
          { name: commune.nom, path },
        ])),
        ...(faqs.length ? [ldScript(faqJsonLd(faqs))] : []),
      ],
    }
  },
  loader: ({ params }) => {
    const commune = getCommuneBySlug(params.ville)
    const content = getZoneContent(params.ville)
    if (!commune || !content) throw notFound()
    const km = Math.round(distanceKm(BUSINESS.lat, BUSINESS.lng, commune.lat, commune.lng))
    // Communes voisines : les plus proches géographiquement
    const nearby = communes
      .filter((c) => c.slug !== params.ville)
      .map((c) => ({ c, d: distanceKm(commune.lat, commune.lng, c.lat, c.lng) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 6)
      .map(({ c }) => c)
    return { commune, content, nearby, km }
  },
  component: VillePage,
  notFoundComponent: () => (
    <div style={{ padding: "80px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--ink-950)", marginBottom: "12px" }}>Commune introuvable</h1>
      <Link to="/zones" className="btn-cta" style={{ display: "inline-flex" }}>Voir nos zones d'intervention</Link>
    </div>
  ),
})

const ctaStyle = { fontSize: "1.05rem", padding: "16px 32px", borderColor: "white" } as const

function CtaButtons({ kind }: { kind: ZoneCta }) {
  const tel = (
    <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-ghost" style={ctaStyle}>
      <Phone size={20} aria-hidden="true" />
      {BUSINESS.phone}
    </a>
  )
  if (kind === "tel") return tel
  return (
    <>
      {kind === "avis" && (
        <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={ctaStyle}>
          <Star size={20} aria-hidden="true" />
          Lire les avis Google
        </a>
      )}
      {kind === "form" && (
        <Link to="/contact" className="btn-ghost" style={ctaStyle}>
          <Mail size={20} aria-hidden="true" />
          Demander un devis gratuit
        </Link>
      )}
      {kind === "rdv" && (
        <Link to="/rendez-vous" className="btn-ghost" style={ctaStyle}>
          <Calendar size={20} aria-hidden="true" />
          Choisir un créneau
        </Link>
      )}
      {tel}
    </>
  )
}

const textStyle = { color: "#475569", fontSize: "1.03rem", lineHeight: 1.8 } as const

function VillePage() {
  const { commune, content, nearby, km } = Route.useLoaderData()

  return (
    <div>
      <PageHero
        kicker={`${commune.codePostal} · Haute-Garonne (31)`}
        title={content.h1}
        lead={content.intro}
        actions={<>
          <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
            <Phone size={18} aria-hidden="true" />
            Appeler Nino — {BUSINESS.phone}
          </a>
          <Link to="/rendez-vous" className="btn-ghost">
            <Calendar size={18} aria-hidden="true" />
            Prendre rendez-vous
          </Link>
        </>}
        image="/realisations/photo-08.jpg"
      />

      <section style={{ background: "#f1f5f9", padding: "28px 0" }} aria-label={`Informations pratiques pour ${commune.nom}`}>
        <div className="section-container" style={{ maxWidth: "860px" }}>
          <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "14px 24px", margin: 0 }}>
            {[
              ["Commune", `${commune.nom} (${commune.codePostal}), Haute-Garonne`],
              ["Basé à", commune.slug === "muret" ? "Muret, 11 rue François Arago" : `Muret, à environ ${km} km à vol d'oiseau`],
              ["Disponibilité", "Joignable 24h/24 et 7j/7"],
              ["Garantie", "2 ans, pièces et main-d'œuvre"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt style={{ fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", fontWeight: 600 }}>{k}</dt>
                <dd style={{ margin: "2px 0 0", color: "var(--ink-950)", fontWeight: 600 }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {content.sections.map((section, i) => {
        const List = section.numbered ? "ol" : "ul"
        return (
          <section key={section.h2} style={{ background: i % 2 === 0 ? "white" : "#f9fafb", padding: "56px 0" }}>
            <div className="section-container" style={{ maxWidth: "860px" }}>
              <h2 className="section-title" style={{ marginBottom: "18px" }}>{section.h2}</h2>
              {section.text && <p style={{ ...textStyle, margin: "0 0 14px" }}>{section.text}</p>}
              {section.bullets && (
                <List style={{ ...textStyle, paddingLeft: "22px", margin: "0 0 14px" }}>
                  {section.bullets.map((b) => <li key={b}>{b}</li>)}
                </List>
              )}
            </div>
          </section>
        )
      })}

      {content.faq.length > 0 && (
        <section style={{ background: content.sections.length % 2 === 0 ? "white" : "#f9fafb", padding: "56px 0" }}>
          <div className="section-container" style={{ maxWidth: "860px" }}>
            <h2 className="section-title" style={{ marginBottom: "18px" }}>Questions fréquentes à {commune.nom}</h2>
            <dl style={{ margin: 0 }}>
              {content.faq.map(({ q, a }) => (
                <div key={q} style={{ marginBottom: "16px" }}>
                  <dt style={{ fontWeight: 700, color: "var(--ink-950)" }}>{q}</dt>
                  <dd style={{ ...textStyle, margin: "4px 0 0" }}>{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section style={{ background: "white", padding: "40px 0" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <p style={{ color: "#475569", margin: "0 0 14px" }}>
            Dépannage, chauffe-eau, débouchage, chauffage, salle de bain : <Link to="/services" style={{ fontWeight: 600 }}>découvrez tous nos services</Link> ou consultez <Link to="/tarifs" style={{ fontWeight: 600 }}>nos tarifs</Link>.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {nearby.map((c) => (
              <Link
                key={c.slug}
                to="/intervention/$ville"
                params={{ ville: c.slug }}
                style={{ padding: "6px 16px", borderRadius: "999px", border: "1.5px solid #dbeafe", color: "var(--ink-950)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}
              >
                <MapPin size={12} aria-hidden="true" style={{ marginRight: "4px", verticalAlign: "-1px" }} />{c.nom}
              </Link>
            ))}
            <Link to="/zones" style={{ padding: "6px 16px", fontSize: "0.875rem", fontWeight: 600 }}>
              Toutes nos zones <ArrowUpRight size={12} aria-hidden="true" style={{ verticalAlign: "-1px" }} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #c2410c, #ea6f0b)", padding: "56px 0", textAlign: "center" }}>
        <div className="section-container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", color: "white", margin: "0 auto 24px", maxWidth: "640px" }}>
            {content.cta.label}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <CtaButtons kind={content.cta.kind} />
          </div>
        </div>
      </section>
    </div>
  )
}
