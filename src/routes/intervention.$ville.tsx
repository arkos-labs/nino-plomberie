// src/routes/intervention.$ville.tsx — pages de zone : un contenu éditorial unique par commune (data/zone-content.ts)
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { getCommuneBySlug, communes } from "../data/communes"
import { getZoneContent, type ZoneCta, type ZoneSection, type ZonePhoto } from "../data/zone-content"
import { realisations } from "../data/realisations"
import { Phone, MapPin, Calendar, ArrowUpRight, Mail } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { richText } from "../components/RichText"
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
  return (
    <>
      <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-ghost" style={ctaStyle}>
        <Phone size={20} aria-hidden="true" />
        Appeler Nino · {BUSINESS.phone}
      </a>
      <Link to="/contact" className="btn-ghost" style={ctaStyle}>
        <Mail size={20} aria-hidden="true" />
        Demander un devis gratuit
      </Link>
      {kind === "rdv" && (
        <Link to="/rendez-vous" className="btn-ghost" style={ctaStyle}>
          <Calendar size={20} aria-hidden="true" />
          Prendre rendez-vous
        </Link>
      )}
    </>
  )
}

const textStyle = { color: "#475569", fontSize: "1.03rem", lineHeight: 1.8 } as const

function VillePage() {
  const { commune, content, nearby, km } = Route.useLoaderData()
  const hasStrictClosing = Boolean(
    content.strictSections &&
    content.sections.length > 0 &&
    content.sections[content.sections.length - 1].h2.startsWith("Une urgence")
  )
  const regularSections = hasStrictClosing ? content.sections.slice(0, -1) : content.sections
  const closingSection = hasStrictClosing ? content.sections[content.sections.length - 1] : undefined

  return (
    <div>
      <PageHero
        kicker={`${commune.codePostal} · Haute-Garonne (31)`}
        title={content.h1}
        lead={content.intro}
        actions={<>
          <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
            <Phone size={18} aria-hidden="true" />
            Appeler Nino · {BUSINESS.phone}
          </a>
          <Link to="/contact" className="btn-ghost">
            <Mail size={18} aria-hidden="true" />
            Demander un devis gratuit
          </Link>
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

      {!content.strictSections && (() => {
        // Photo réelle d'un chantier dont la commune a été confirmée par Nino (data/realisations.ts)
        const chantier = realisations.find((r) => r.ville === commune.slug)
        if (!chantier) return null
        return (
          <section style={{ background: "white", padding: "48px 0 8px" }} aria-label={`Chantier réalisé à ${commune.nom}`}>
            <div className="section-container" style={{ maxWidth: "860px" }}>
              <h2 className="section-title" style={{ marginBottom: "18px" }}>Un chantier réalisé à {commune.nom}</h2>
              <figure style={{ margin: 0 }}>
                <img
                  src={chantier.src}
                  alt={`${chantier.titre}, chantier réalisé à ${commune.nom} par Nino Plomberie`}
                  loading="lazy"
                  style={{ width: "100%", maxWidth: "720px", height: "auto", borderRadius: "12px", display: "block" }}
                />
                <figcaption style={{ ...textStyle, marginTop: "10px", fontSize: "0.95rem" }}>
                  {chantier.titre} — réalisation de Nino Plomberie à {commune.nom}.{" "}
                  <Link to="/realisations" style={{ fontWeight: 600 }}>Voir toutes nos réalisations</Link>
                </figcaption>
              </figure>
            </div>
          </section>
        )
      })()}

      {regularSections.map((section: ZoneSection, i: number) => {
        const List = section.numbered ? "ol" : "ul"
        return (
          <section key={section.h2} style={{ background: i % 2 === 0 ? "white" : "#f9fafb", padding: "56px 0" }}>
            <div className="section-container" style={{ maxWidth: "860px" }}>
              <h2 className="section-title" style={{ marginBottom: "18px" }}>{section.h2}</h2>
              {section.text && section.text.split("\n\n").map((para: string, idx: number) => (
                <p key={idx} style={{ ...textStyle, margin: "0 0 14px" }}>{richText(para)}</p>
              ))}
              {section.bullets && (
                <List style={{ ...textStyle, paddingLeft: "22px", margin: "0 0 14px" }}>
                  {section.bullets.map((b: string) => <li key={b} style={{ marginBottom: "6px" }}>{richText(b)}</li>)}
                </List>
              )}
              {section.afterText && section.afterText.split("\n\n").map((para: string, idx: number) => (
                <p key={idx} style={{ ...textStyle, margin: "0 0 14px" }}>{richText(para)}</p>
              ))}
              {section.photos && section.photos.length > 0 && (
                <div style={{
                  display: "grid",
                  gridTemplateColumns: section.photos.length > 1 ? "repeat(auto-fit, minmax(240px, 1fr))" : "1fr",
                  gap: "20px",
                  marginTop: "20px",
                }}>
                  {section.photos.map((photo: ZonePhoto) => (
                    <figure key={photo.src + photo.alt} style={{ margin: 0 }}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        style={{ width: "100%", maxWidth: section.photos!.length === 1 ? "680px" : "100%", height: section.photos!.length > 1 ? "220px" : "auto", objectFit: "cover", borderRadius: "12px", display: "block" }}
                      />
                      <figcaption style={{ ...textStyle, marginTop: "8px", fontSize: "0.92rem" }}>
                        {richText(photo.legende)}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
              {section.faq && section.faq.length > 0 && (
                <dl style={{ margin: 0 }}>
                  {section.faq.map(({ q, a }: { q: string; a: string }) => (
                    <div key={q} style={{ marginBottom: "16px" }}>
                      <dt style={{ fontWeight: 700, color: "var(--ink-950)" }}>{q}</dt>
                      <dd style={{ ...textStyle, margin: "4px 0 0" }}>{richText(a)}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </section>
        )
      })}

      {!content.strictSections && content.faq.length > 0 && (
        <section style={{ background: regularSections.length % 2 === 0 ? "white" : "#f9fafb", padding: "56px 0" }}>
          <div className="section-container" style={{ maxWidth: "860px" }}>
            <h2 className="section-title" style={{ marginBottom: "18px" }}>Questions fréquentes</h2>
            <dl style={{ margin: 0 }}>
              {content.faq.map(({ q, a }: { q: string; a: string }) => (
                <div key={q} style={{ marginBottom: "16px" }}>
                  <dt style={{ fontWeight: 700, color: "var(--ink-950)" }}>{q}</dt>
                  <dd style={{ ...textStyle, margin: "4px 0 0" }}>{richText(a)}</dd>
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
          {content.retour && <p style={{ color: "#475569", margin: "0 0 14px" }}>{richText(content.retour)}</p>}
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
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.65rem", color: "white", margin: "0 auto 14px", maxWidth: "640px" }}>
            {closingSection ? closingSection.h2 : `Une urgence à ${commune.nom} ?`}
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.94)", fontSize: "1.06rem", lineHeight: 1.75, margin: "0 auto 24px", maxWidth: "660px" }}>
            {richText(closingSection?.text ?? content.cta.label, "white")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <CtaButtons kind={content.cta.kind} />
          </div>
        </div>
      </section>
    </div>
  )
}
