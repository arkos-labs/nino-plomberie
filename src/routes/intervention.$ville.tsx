// src/routes/intervention.$ville.tsx — SEO programmatique par commune
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { getCommuneBySlug, communes } from "../data/communes"
import { Phone, MapPin, Clock, CheckCircle2, ChevronRight } from "lucide-react"

export const Route = createFileRoute("/intervention/$ville")({
  head: ({ params }) => {
    const commune = getCommuneBySlug(params.ville)
    if (!commune) return { meta: [{ title: "Page introuvable" }] }
    return {
      meta: [
        { title: `Plombier ${commune.nom} (${commune.codePostal}) — Nino Plomberie 31 — Urgence 24h/7j` },
        {
          name: "description",
          content: `Plombier à ${commune.nom} (${commune.codePostal}). Nino Plomberie 31 intervient en urgence <1h : fuite d'eau, chauffe-eau, débouchage. Devis gratuit. ☎ 06 50 57 96 20`,
        },
        { name: "geo.region", content: "FR-31" },
        { name: "geo.placename", content: commune.nom },
        { name: "geo.position", content: `${commune.lat};${commune.lng}` },
      ],
      links: [
        { rel: "canonical", href: `https://ninoplomberie31.fr/intervention/${params.ville}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `Quel plombier intervient en urgence à ${commune.nom} ?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Nino Plomberie 31 est votre plombier à ${commune.nom} (${commune.codePostal}). Il intervient en urgence sous 1 heure pour les fuites d'eau, pannes de chauffe-eau et débouchages. Disponible 7j/7.`,
                },
              },
              {
                "@type": "Question",
                name: `Quel est le tarif d'un plombier à ${commune.nom} ?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Le déplacement est gratuit pour tout devis à ${commune.nom}. Le tarif horaire est communiqué avant intervention. Pour une fuite simple, comptez entre 80 € et 200 € selon la complexité.`,
                },
              },
              {
                "@type": "Question",
                name: `Nino Plomberie intervient-il le week-end à ${commune.nom} ?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Oui, Nino Plomberie 31 assure les urgences plomberie à ${commune.nom} 7j/7, y compris le samedi, dimanche et les jours fériés.`,
                },
              },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Nino Plomberie 31",
            areaServed: {
              "@type": "City",
              name: commune.nom,
              sameAs: `https://fr.wikipedia.org/wiki/${encodeURIComponent(commune.nom)}`,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: commune.lat,
              longitude: commune.lng,
            },
            telephone: "+336XXXXXXXX",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "07:00",
                closes: "20:00",
              },
            ],
          }),
        },
      ],
    }
  },
  loader: ({ params }) => {
    const commune = getCommuneBySlug(params.ville)
    if (!commune) throw notFound()
    // Nearby communes (just slice a few from the same list)
    const nearby = communes.filter((c) => c.slug !== params.ville).slice(0, 6)
    return { commune, nearby }
  },
  component: VillePage,
  notFoundComponent: () => (
    <div style={{ padding: "80px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Outfit", color: "#0f2040", marginBottom: "12px" }}>Commune introuvable</h1>
      <Link to="/contact" className="btn-primary" style={{ display: "inline-flex" }}>Voir notre zone d'intervention</Link>
    </div>
  ),
})

function VillePage() {
  const { commune, nearby } = Route.useLoaderData()

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1e3a5f)", padding: "72px 0" }}>
        <div className="section-container">
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</Link>
            <ChevronRight size={13} />
            <span style={{ color: "white" }}>Plombier {commune.nom}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <MapPin size={22} color="#f97316" />
            <span style={{ color: "#f97316", fontWeight: 700, fontSize: "0.9rem" }}>{commune.codePostal} — Haute-Garonne</span>
          </div>

          <h1
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "white",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Plombier {commune.nom}<br />
            <span style={{ color: "#f97316" }}>Urgence &lt;1h — 7j/7</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", maxWidth: "600px", lineHeight: 1.75, marginBottom: "32px" }}>
            {commune.description} Nino Plomberie 31 intervient rapidement à <strong style={{ color: "white" }}>{commune.nom}</strong> pour toutes vos urgences et travaux de plomberie.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a href="tel:0650579620" className="btn-primary" style={{ fontSize: "1.05rem" }}>
              <Phone size={20} />
              Appeler Nino — 06 50 57 96 20
            </a>
            <Link to="/contact" className="btn-secondary">📅 Demander un devis →</Link>
          </div>
        </div>
      </section>

      {/* Services à [ville] */}
      <section style={{ background: "white", padding: "72px 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Nos services à {commune.nom}</h2>
            <p className="section-subtitle" style={{ margin: "12px auto 0" }}>
              Artisan plombier local, formé et qualifié, disponible sur {commune.nom} et les communes proches.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              { titre: "Fuite d'eau", desc: `Détection et réparation rapide de toute fuite à ${commune.nom}. Robinet, canalisation, joint — intervention <1h.`, href: "/services/fuite-d-eau", urgence: true },
              { titre: "Débouchage", desc: `WC, évier, douche bouchés à ${commune.nom} ? Furet électrique ou hydrocurage selon les cas.`, href: "/services/debouchage", urgence: true },
              { titre: "Chauffe-eau", desc: `Installation et dépannage de chauffe-eau à ${commune.nom}. Tous modèles, pose en journée.`, href: "/services/chauffe-eau", urgence: false },
              { titre: "Rénovation salle de bain", desc: `Conception et réalisation de votre rénovation salle de bain à ${commune.nom}. Devis gratuit.`, href: "/services/renovation-salle-de-bain", urgence: false },
            ].map(({ titre, desc, href, urgence }) => (
              <Link key={href} to={href as "/services"} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "28px", height: "100%", position: "relative" }}>
                  {urgence && (
                    <div style={{ position: "absolute", top: "16px", right: "16px", background: "#ffedd5", color: "#ea6f0b", fontSize: "0.7rem", fontWeight: 700, padding: "4px 10px", borderRadius: "999px" }}>
                      Urgence
                    </div>
                  )}
                  <h3 style={{ fontFamily: "Outfit", fontWeight: 700, color: "#0f2040", marginBottom: "10px" }}>{titre}</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "16px" }}>{desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#f97316", fontWeight: 600, fontSize: "0.85rem" }}>
                    En savoir plus <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f9fafb", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "760px" }}>
          <h2 className="section-title" style={{ marginBottom: "32px", textAlign: "center" }}>
            Questions fréquentes — Plombier {commune.nom}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                q: `Quel plombier intervient en urgence à ${commune.nom} ?`,
                a: `Nino Plomberie 31 est votre plombier d'urgence à ${commune.nom} (${commune.codePostal}). Disponible 7j/7, il intervient sous 1 heure pour les fuites d'eau, pannes de chauffe-eau et débouchages.`,
              },
              {
                q: `Quel est le tarif d'un plombier à ${commune.nom} ?`,
                a: `Le déplacement est gratuit pour tout devis à ${commune.nom}. Le tarif horaire est communiqué avant intervention, sans surprise. Pour une fuite simple, comptez entre 80 € et 200 € selon la complexité.`,
              },
              {
                q: `Nino Plomberie intervient-il le week-end à ${commune.nom} ?`,
                a: `Oui, Nino Plomberie 31 assure les urgences plomberie à ${commune.nom} 7j/7, y compris le samedi, dimanche et les jours fériés.`,
              },
              {
                q: `Est-il possible d'obtenir une garantie sur les travaux à ${commune.nom} ?`,
                a: `Oui, toutes les interventions réalisées à ${commune.nom} sont garanties 2 ans pièces et main-d'œuvre. Un bon d'intervention vous est remis à chaque fin de chantier.`,
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "white", borderRadius: "12px", padding: "20px 24px", border: "1px solid #e5e7eb" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} color="#f97316" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontWeight: 700, color: "#0f2040", marginBottom: "8px" }}>{q}</div>
                    <div style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.7 }}>{a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones proches */}
      <section style={{ background: "white", padding: "64px 0" }}>
        <div className="section-container">
          <h2 style={{ fontFamily: "Outfit", fontWeight: 800, color: "#0f2040", fontSize: "1.3rem", marginBottom: "20px", textAlign: "center" }}>
            Nous intervenons aussi dans les communes voisines
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            {nearby.map((c) => (
              <Link
                key={c.slug}
                to={`/intervention/${c.slug}` as "/intervention/$ville"}
                params={{ ville: c.slug }}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: "1.5px solid #dbeafe",
                  color: "#1e3a5f",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.2s",
                }}
              >
                📍 {c.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #c2410c, #ea6f0b)", padding: "64px 0", textAlign: "center" }}>
        <div className="section-container">
          <h2 style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "2rem", color: "white", marginBottom: "12px" }}>
            Besoin d'un plombier à {commune.nom} maintenant ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "28px" }}>
            Appelez Nino — il est disponible et prêt à intervenir.
          </p>
          <a href="tel:0650579620" className="btn-secondary" style={{ fontSize: "1.1rem", padding: "18px 36px", borderColor: "white" }}>
            <Phone size={22} />
            06 50 57 96 20 — Appeler maintenant
          </a>
        </div>
      </section>
    </div>
  )
}
