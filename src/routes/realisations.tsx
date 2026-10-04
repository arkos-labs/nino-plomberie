// src/routes/realisations.tsx — toutes les réalisations, avec la commune de chaque chantier
import { createFileRoute, Link } from "@tanstack/react-router"
import { Phone, MapPin, ArrowRight } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { Gallery } from "../components/Gallery"
import { FaqSection } from "../components/FaqSection"
import { realisations, VILLES_CHANTIERS } from "../data/realisations"
import { getCommuneBySlug } from "../data/communes"
import { SITE_URL, BUSINESS, BUSINESS_ID, pageHead, ldScript, breadcrumbJsonLd, type Faq } from "../lib/site"

// Communes des chantiers : nombre de photos par commune quand la ville est renseignée photo par photo,
// sinon la liste des communes confirmée par Nino (sans nombre)
const COMPTES = realisations.reduce<Record<string, number>>((acc, r) => {
  if (r.ville && getCommuneBySlug(r.ville)) acc[r.ville] = (acc[r.ville] ?? 0) + 1
  return acc
}, {})
const VILLES = [...new Set([...VILLES_CHANTIERS, ...Object.keys(COMPTES)])]
  .filter((slug) => getCommuneBySlug(slug))
  .map((slug) => ({ slug, nom: getCommuneBySlug(slug)!.nom, count: COMPTES[slug] ?? 0 }))
  .sort((a, b) => b.count - a.count)

const listeVilles = (noms: string[]) =>
  noms.length > 1 ? `${noms.slice(0, -1).join(", ")} et ${noms[noms.length - 1]}` : noms.join("")

// Secteur d'intervention autour de Muret (zone desservie, pas le lieu des chantiers ci-dessus)
const SECTEUR = [
  "muret", "toulouse", "portet-sur-garonne", "cugnaux", "seysses", "frouzins",
  "roques", "pins-justaret", "labarthe-sur-leze", "eaunes", "villeneuve-tolosane", "fonsorbes",
]
  .map((slug) => getCommuneBySlug(slug))
  .filter((c) => c !== undefined)

const REALISATIONS_FAQ: Faq[] = [
  {
    q: "Les photos de cette page sont-elles de vrais chantiers ?",
    a: "Oui. Toutes les photos sont des chantiers réalisés par Nino Plomberie, publiés sur sa fiche Google. Aucune photo de banque d'images n'est utilisée sur cette page.",
  },
  {
    q: "Réalisez-vous des salles de bain complètes ?",
    a: "Oui. Nino Plomberie crée ou rénove des salles de bain de A à Z : plomberie, cloisons, placo, carrelage, douche à l'italienne ou receveur extra-plat, meubles vasque et finitions. Ces chantiers sont réalisés avec un second professionnel pour garantir le résultat et les délais.",
  },
  {
    q: "Comment obtenir un devis pour un projet similaire ?",
    a: "Envoyez une description de votre projet avec une photo depuis la page contact, ou appelez le 06 50 57 96 20. Le devis est gratuit et validé avec vous avant le début des travaux.",
  },
]

export const Route = createFileRoute("/realisations")({
  head: () => ({
    ...pageHead({
      title: "Réalisations plombier à Muret et Toulouse — Nino Plomberie",
      description:
        "Photos de chantiers réalisés par Nino Plomberie à Toulouse, Colomiers, Blagnac, Tournefeuille et Muret : rénovation de salle de bain, douche à l'italienne, robinetterie, chauffe-eau et pose de cuisine. Devis gratuit.",
      path: "/realisations",
    }),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        url: `${SITE_URL}/realisations`,
        name: "Réalisations de Nino Plomberie",
        about: { "@id": BUSINESS_ID },
        mainEntity: {
          "@type": "ImageGallery",
          associatedMedia: realisations.map((r) => {
            const ville = r.ville ? getCommuneBySlug(r.ville) : undefined
            return {
              "@type": "ImageObject",
              contentUrl: `${SITE_URL}${r.src}`,
              name: ville ? `${r.titre} à ${ville.nom}` : r.titre,
              creator: { "@id": BUSINESS_ID },
              ...(ville && {
                contentLocation: {
                  "@type": "Place",
                  name: ville.nom,
                  address: { "@type": "PostalAddress", addressLocality: ville.nom, postalCode: ville.codePostal, addressCountry: "FR" },
                },
              }),
            }
          }),
        },
      }),
      ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Réalisations", path: "/realisations" }])),
    ],
  }),
  component: RealisationsPage,
})

function RealisationsPage() {
  return (
    <div style={{ background: "var(--sand-50)" }}>
      <PageHero
        kicker="Chantiers réalisés · Haute-Garonne"
        title={<>Nos <em>réalisations</em> à Muret et Toulouse</>}
        lead="Salles de bain, douches, robinetterie, chauffe-eau et cuisines : de vrais chantiers réalisés par Nino Plomberie, artisan plombier à Muret depuis plus de 20 ans."
        image="/realisations/photo-04.jpg"
        actions={<>
          <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
            <Phone size={18} />
            Appeler Nino
          </a>
          <Link to="/contact" className="btn-ghost">
            Demander un devis gratuit
          </Link>
        </>}
      />

      <section style={{ padding: "64px 0 72px" }} aria-labelledby="galerie-title">
        <div className="section-container">
          <div style={{ marginBottom: "28px", maxWidth: "720px" }}>
            <h2 id="galerie-title" className="section-title" style={{ marginBottom: "12px" }}>
              {realisations.length} chantiers en photos
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "none" }}>
              Basé à Muret, Nino Plomberie intervient à Toulouse et dans toute la Haute-Garonne. Filtrez par type de
              travaux et cliquez sur une photo pour l'agrandir.
            </p>
          </div>
          <Gallery items={realisations} filters />
        </div>
      </section>

      {VILLES.length > 0 && (
        <section style={{ background: "var(--white)", padding: "56px 0" }} aria-labelledby="villes-title">
          <div className="section-container">
            <h2 id="villes-title" className="section-title" style={{ marginBottom: "12px" }}>
              Nos chantiers à {listeVilles(VILLES.map((v) => v.nom))}
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "720px", marginBottom: "24px" }}>
              Salles de bain, douches, robinetterie, chauffe-eau et cuisines : Nino Plomberie a réalisé des chantiers
              dans ces communes de Haute-Garonne.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {VILLES.map((v) => (
                <Link key={v.slug} to="/intervention/$ville" params={{ ville: v.slug }} className="rea-ville">
                  <MapPin size={14} aria-hidden="true" />
                  Plombier à {v.nom}
                  {v.count > 0 && <span>{v.count} chantier{v.count > 1 ? "s" : ""}</span>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: VILLES.length > 0 ? "var(--sand-50)" : "var(--white)", padding: "56px 0" }} aria-labelledby="secteur-title">
        <div className="section-container">
          <h2 id="secteur-title" className="section-title" style={{ marginBottom: "12px" }}>
            Salle de bain, douche, cuisine : où intervient Nino ?
          </h2>
          <p className="section-subtitle" style={{ maxWidth: "720px", marginBottom: "24px" }}>
            Basé à Muret, Nino Plomberie réalise ce type de chantier dans tout le secteur sud-ouest toulousain et en
            Haute-Garonne. Choisissez votre commune :
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {SECTEUR.map((c) => (
              <Link key={c.slug} to="/intervention/$ville" params={{ ville: c.slug }} className="rea-ville">
                <MapPin size={14} aria-hidden="true" />
                Plombier à {c.nom}
              </Link>
            ))}
            <Link to="/zones" className="rea-ville">Toutes les communes <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={REALISATIONS_FAQ} title="Questions sur nos réalisations" background="var(--sand-50)" />

      {/* ── CTA ── */}
      <section style={{ background: "var(--brand-600)", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "680px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", marginBottom: "12px" }}>
            Un projet similaire ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "28px" }}>
            Décrivez votre besoin, Nino vous recontacte. Devis gratuit, validé avec vous avant les travaux.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-ghost">
              Formulaire de contact <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .rea-ville {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 16px; border-radius: var(--radius-sm);
          background: var(--sand-100); color: var(--ink-900); font-weight: 600; font-size: 0.95rem;
          transition: background .2s, color .2s;
        }
        .rea-ville svg { color: var(--cta-500); }
        .rea-ville span { font-weight: 400; font-size: 0.82rem; color: var(--ink-600); }
        .rea-ville:hover { background: var(--brand-600); color: #fff; }
        .rea-ville:hover span { color: rgba(255,255,255,0.75); }
      `}</style>
    </div>
  )
}
