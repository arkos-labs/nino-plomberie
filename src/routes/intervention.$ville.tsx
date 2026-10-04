// src/routes/intervention.$ville.tsx — SEO programmatique par commune
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { getCommuneBySlug, communes } from "../data/communes"
import { Phone, MapPin, Calendar, ArrowUpRight, Droplets, Wind, Flame, Bath } from "lucide-react"
import { FaqSection } from "../components/FaqSection"
import { PageHero } from "../components/PageHero"
import { SITE_URL, BUSINESS, BUSINESS_ID, pageHead, ldScript, breadcrumbJsonLd, type Faq } from "../lib/site"

type Commune = NonNullable<ReturnType<typeof getCommuneBySlug>>

/** Distance à vol d'oiseau (km) entre deux points */
function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

function distanceDepuisMuret(c: Commune) {
  return Math.round(distanceKm(BUSINESS.lat, BUSINESS.lng, c.lat, c.lng))
}

function villeFaq(c: Commune): Faq[] {
  const km = distanceDepuisMuret(c)
  const situation = c.slug === "muret"
    ? "L'entreprise est installée à Muret même, au 11 Rue François Arago."
    : `L'entreprise est basée à Muret, à environ ${km} km à vol d'oiseau de ${c.nom}.`
  return [
    {
      q: `Quel plombier intervient en urgence à ${c.nom} ?`,
      a: `Nino Plomberie, artisan plombier-chauffagiste avec plus de 20 ans d'expérience, intervient en urgence à ${c.nom} (${c.codePostal}) 24h/24 et 7j/7 pour les fuites d'eau, débouchages et pannes de chauffe-eau. ${situation}`,
    },
    {
      q: `Combien coûte un plombier à ${c.nom} ?`,
      a: `Le prix dépend du problème et des pièces nécessaires. Nino Plomberie établit un devis gratuit et annonce le prix avant d'intervenir à ${c.nom}. Des fourchettes indicatives sont disponibles sur la page Tarifs.`,
    },
    {
      q: `Nino Plomberie intervient-il le week-end à ${c.nom} ?`,
      a: `Oui, Nino Plomberie est joignable 24h/24 et 7j/7 au 06 50 57 96 20, y compris le samedi, le dimanche et les jours fériés.`,
    },
    {
      q: `Les travaux réalisés à ${c.nom} sont-ils garantis ?`,
      a: `Oui, les réparations réalisées à ${c.nom} sont garanties 2 ans, pièces et main-d'œuvre.`,
    },
    {
      q: `Quels travaux Nino Plomberie réalise-t-il à ${c.nom} ?`,
      a: `À ${c.nom}, Nino Plomberie assure les dépannages (fuite, débouchage, chauffe-eau, chauffage), la robinetterie et les sanitaires, la création et la rénovation de salles de bain, la plomberie neuve et la pose de cuisines.`,
    },
  ]
}

export const Route = createFileRoute("/intervention/$ville")({
  head: ({ params }) => {
    const commune = getCommuneBySlug(params.ville)
    if (!commune) return { meta: [{ title: "Page introuvable" }, { name: "robots", content: "noindex" }] }
    const path = `/intervention/${params.ville}`
    const head = pageHead({
      title: `Plombier ${commune.nom} (${commune.codePostal}) 24h/24 — Nino Plomberie`,
      description: `Plombier à ${commune.nom} (${commune.codePostal}) : Nino Plomberie, artisan basé à Muret, intervient 24h/24 et 7j/7 pour fuite d'eau, débouchage, chauffe-eau et salle de bain. Devis gratuit ☎ 06 50 57 96 20`,
      path,
    })
    return {
      ...head,
      meta: [
        ...head.meta,
        { name: "geo.region", content: "FR-31" },
        { name: "geo.placename", content: commune.nom },
      ],
      scripts: [
        ldScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Plombier à ${commune.nom}`,
          serviceType: "Plomberie",
          url: `${SITE_URL}${path}`,
          provider: { "@id": BUSINESS_ID },
          areaServed: { "@type": "City", name: commune.nom, postalCode: commune.codePostal },
        }),
        ldScript(breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Zones d'intervention", path: "/zones" },
          { name: commune.nom, path },
        ])),
      ],
    }
  },
  loader: ({ params }) => {
    const commune = getCommuneBySlug(params.ville)
    if (!commune) throw notFound()
    // Communes voisines : les plus proches géographiquement
    const nearby = communes
      .filter((c) => c.slug !== params.ville)
      .map((c) => ({ c, d: distanceKm(commune.lat, commune.lng, c.lat, c.lng) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 10)
      .map(({ c }) => c)
    return { commune, nearby }
  },
  component: VillePage,
  notFoundComponent: () => (
    <div style={{ padding: "80px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--ink-950)", marginBottom: "12px" }}>Commune introuvable</h1>
      <Link to="/contact" className="btn-cta" style={{ display: "inline-flex" }}>Voir notre zone d'intervention</Link>
    </div>
  ),
})

function VillePage() {
  const { commune, nearby } = Route.useLoaderData()

  return (
    <div>
      {/* Hero */}
      <PageHero
        kicker={`${commune.codePostal} · Haute-Garonne (31)`}
        title={<>Plombier <em>{commune.nom}</em></>}
        lead={<>{commune.description} Nino Plomberie intervient à <strong>{commune.nom}</strong> 24h/24 et 7j/7 pour vos urgences et travaux de plomberie.</>}
        actions={<>
          <a href="tel:0650579620" className="btn-cta">
            <Phone size={18} />
            Appeler Nino — 06 50 57 96 20
          </a>
          <Link to="/rendez-vous" className="btn-ghost">
            <Calendar size={18} />
            Prendre Rendez-vous
          </Link>
        </>}
        image="/realisations/photo-08.jpg"
      />

      {/* Services à [ville] */}
      <section style={{ background: "white", padding: "72px 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Nos services à {commune.nom}</h2>
            <p className="section-subtitle" style={{ margin: "12px auto 0" }}>
              Artisan plombier local, formé et qualifié, disponible sur {commune.nom} et les communes proches.
            </p>
          </div>

          <div className="feature-grid">
            {[
              { icon: Droplets, titre: "Fuite d'eau", desc: `Détection et réparation rapide de toute fuite à ${commune.nom}. Robinet, canalisation, joint — intervention rapide.`, href: "/services/fuite-d-eau", urgence: true },
              { icon: Wind,     titre: "Débouchage", desc: `WC, évier, douche ou baignoire bouchés à ${commune.nom} ? Débouchage avec des outils professionnels, sans produit agressif.`, href: "/services/debouchage", urgence: true },
              { icon: Flame,    titre: "Chauffe-eau", desc: `Dépannage, remplacement et installation de chauffe-eau et cumulus à ${commune.nom}, 7j/7.`, href: "/services/chauffe-eau", urgence: false },
              { icon: Bath,     titre: "Rénovation salle de bain", desc: `Création ou rénovation complète de votre salle de bain à ${commune.nom}, de la plomberie aux finitions.`, href: "/services/renovation-salle-de-bain", urgence: false },
            ].map(({ icon: Icon, titre, desc, href, urgence }) => (
              <Link key={href} to={href as "/services"} className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-card-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                  {urgence && <span className="feature-card-tag">Urgence</span>}
                </div>
                <h3>{titre}</h3>
                <p>{desc}</p>
                <span className="feature-card-btn">En savoir plus <ArrowUpRight size={14} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plombier à [ville] — contenu local */}
      <section style={{ background: "#f9fafb", padding: "64px 0" }} aria-labelledby="local-title">
        <div className="section-container" style={{ maxWidth: "860px" }}>
          <h2 id="local-title" className="section-title" style={{ marginBottom: "18px" }}>
            Votre plombier à {commune.nom} ({commune.codePostal})
          </h2>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 14px" }}>
            {commune.slug === "muret" ? (
              <>Nino Plomberie est installé à Muret, au 11 Rue François Arago. Pour les habitants de Muret, c'est l'assurance d'un artisan de proximité, joignable 24h/24 et 7j/7.</>
            ) : (
              <>Nino Plomberie est basé à Muret, à environ {distanceDepuisMuret(commune)} km à vol d'oiseau de {commune.nom}. L'artisan se déplace chez vous 24h/24 et 7j/7 pour les urgences, et sur rendez-vous pour les travaux.</>
            )}
          </p>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, margin: 0 }}>
            Fuite d'eau, WC bouché, chauffe-eau en panne, robinet à changer ou salle de bain à refaire : avec plus de 20 ans
            d'expérience, Nino établit un diagnostic clair et un devis gratuit avant chaque intervention. Les réparations
            sont garanties 2 ans, pièces et main-d'œuvre.
          </p>
        </div>
      </section>

      <FaqSection faqs={villeFaq(commune)} title={`Questions fréquentes : plombier à ${commune.nom}`} background="white" />

      {/* Zones proches */}
      <section style={{ background: "white", padding: "64px 0" }}>
        <div className="section-container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--ink-950)", fontSize: "1.3rem", marginBottom: "20px", textAlign: "center" }}>
            Nous intervenons aussi dans les communes voisines
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            {nearby.map((c) => (
              <Link
                key={c.slug}
                to="/intervention/$ville"
                params={{ ville: c.slug }}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: "1.5px solid #dbeafe",
                  color: "var(--ink-950)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.2s",
                }}
              >
                <MapPin size={12} aria-hidden="true" style={{ marginRight: "4px", verticalAlign: "-1px" }} />{c.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #c2410c, #ea6f0b)", padding: "64px 0", textAlign: "center" }}>
        <div className="section-container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "2rem", color: "white", marginBottom: "12px" }}>
            Besoin d'un plombier à {commune.nom} maintenant ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "28px" }}>
            Appelez Nino — il est disponible et prêt à intervenir.
          </p>
          <a href="tel:0650579620" className="btn-ghost" style={{ fontSize: "1.1rem", padding: "18px 36px", borderColor: "white" }}>
            <Phone size={22} />
            06 50 57 96 20 — Appeler maintenant
          </a>
        </div>
      </section>
    </div>
  )
}
