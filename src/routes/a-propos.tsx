// src/routes/a-propos.tsx — v2
import { createFileRoute, Link } from "@tanstack/react-router"
import { Shield, Award, Users, Clock, Phone, MapPin, Star, ArrowRight, ArrowUpRight, Calendar, Droplets, Wind, Flame, Thermometer, Wrench, Bath } from "lucide-react"
import { FaqSection } from "../components/FaqSection"
import { PageHero } from "../components/PageHero"
import { Gallery } from "../components/Gallery"
import { realisations } from "../data/realisations"
import { getCommuneBySlug } from "../data/communes"
import { SITE_URL, BUSINESS_ID, pageHead, ldScript, breadcrumbJsonLd, type Faq } from "../lib/site"

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    ...pageHead({
      title: "À propos — Nino Plomberie, artisan plombier à Muret depuis 20 ans",
      description:
        "Nino Plomberie est un artisan plombier-chauffagiste basé à Muret (31) avec plus de 20 ans d'expérience. Dépannage 24h/24, salles de bain, cuisines. Devis gratuit, garantie 2 ans.",
      path: "/a-propos",
    }),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        url: `${SITE_URL}/a-propos`,
        name: "À propos de Nino Plomberie",
        about: { "@id": BUSINESS_ID },
      }),
      ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "À propos", path: "/a-propos" }])),
    ],
  }),
  component: AProposPage,
})

const CHIFFRES = [
  { valeur: "20+",    label: "ans d'expérience"        },
  { valeur: "4,4/5",  label: "note Google (79 avis)"  },
  { valeur: "24/7",   label: "ouvert 24h/24"           },
  { valeur: "2 ans",  label: "garantie réparations"    },
]

// Photo de la section « Mon métier » : titre et ville lus dans data/realisations pour rester cohérents avec les galeries
const PHOTO_METIER = realisations.find((r) => r.src === "/realisations/photo-09.jpg")!
const PHOTO_METIER_VILLE = PHOTO_METIER.ville ? getCommuneBySlug(PHOTO_METIER.ville)?.nom : undefined

const METIERS = [
  { slug: "fuite-d-eau",                  icon: Droplets,    titre: "Recherche et réparation de fuites", desc: "Robinet, canalisation, joint, tuyau encastré, remise en état après sinistre." },
  { slug: "debouchage",                   icon: Wind,        titre: "Débouchage",                         desc: "WC, évier, douche, baignoire et canalisations." },
  { slug: "chauffe-eau",                  icon: Flame,       titre: "Chauffe-eau et cumulus",             desc: "Dépannage, remplacement et installation." },
  { slug: "chauffage-chaudiere",          icon: Thermometer, titre: "Chauffage et chaudière",             desc: "Dépannage de chaudières et circuits de chauffage." },
  { slug: "robinetterie-sanitaires",      icon: Wrench,      titre: "Robinetterie et sanitaires",         desc: "Mitigeurs, colonnes de douche, WC suspendus, vasques." },
  { slug: "renovation-salle-de-bain",     icon: Bath,        titre: "Salle de bain de A à Z",             desc: "Création ou rénovation complète, réalisée à deux artisans." },
]

const ABOUT_FAQ: Faq[] = [
  {
    q: "Qui est derrière Nino Plomberie ?",
    a: "Nino Plomberie est une entreprise artisanale de plomberie-chauffage dirigée par un artisan plombier qui intervient lui-même chez ses clients. Il a plus de 20 ans d'expérience dans le métier.",
  },
  {
    q: "Où est basé Nino Plomberie ?",
    a: "L'entreprise est installée au 11 Rue François Arago, 31600 Muret, en Haute-Garonne. Elle intervient à Muret, à Toulouse et dans les communes de l'agglomération toulousaine.",
  },
  {
    q: "Nino travaille-t-il seul ?",
    a: "Les dépannages et travaux de plomberie sont réalisés par Nino lui-même. Pour les créations et rénovations de salles de bain, il collabore avec un second professionnel afin de prendre en charge toutes les étapes (plomberie, cloisons, carrelage, finitions) dans les délais.",
  },
  {
    q: "Pourquoi choisir un artisan local plutôt qu'une plateforme de dépannage ?",
    a: "Avec un artisan local, vous avez un interlocuteur unique qui connaît le secteur, établit un devis gratuit avant les travaux et reste joignable après l'intervention, notamment pour la garantie de 2 ans sur les réparations.",
  },
  {
    q: "Que disent les clients de Nino Plomberie ?",
    a: "Nino Plomberie a une note de 4,4/5 sur Google avec 79 avis. Les clients citent souvent sa réactivité, sa disponibilité, y compris le week-end, et la qualité du travail.",
  },
]

// Infos issues de la fiche Google Business
const INFOS: Array<{ icon: typeof Phone; titre: string; desc: string; href?: string }> = [
  { icon: Phone,  titre: "Téléphone",   desc: "06 50 57 96 20",                     href: "tel:+33650579620" },
  { icon: Clock,  titre: "Horaires",    desc: "Ouvert 24h/24, 7j/7" },
  { icon: MapPin, titre: "Adresse",     desc: "11 Rue François Arago, 31600 Muret" },
  { icon: Star,   titre: "Avis Google", desc: "4,4/5 · 79 avis",       href: "https://maps.google.com/?cid=9239381501337303445" },
]

const VALEURS = [
  { icon: Clock,  kicker: "24h/24 · 7j/7", titre: "Réactivité",             desc: "Je décroche jour et nuit, week-ends compris, et je vous dis honnêtement quand je peux passer." },
  { icon: Shield, kicker: "Gratuit",       titre: "Devis transparent",      desc: "Diagnostic expliqué, prix annoncé et validé avec vous avant de commencer. Aucune surprise." },
  { icon: Users,  kicker: "Soin",          titre: "Respect du logement",    desc: "Protection des sols, travail propre et chantier rangé avant de partir." },
  { icon: Award,  kicker: "2 ans",         titre: "Réparations garanties",  desc: "Pièces et main-d'œuvre garanties 2 ans. Je reste joignable après l'intervention." },
]

function AProposPage() {
  return (
    <div style={{ background: "var(--sand-50)" }}>

      <PageHero
        kicker="Artisan indépendant · Muret (31)"
        title={<>À propos de <em>Nino Plomberie</em></>}
        lead={<>Artisan plombier basé à Muret avec plus de 20 ans d'expérience, j'ai fondé <strong>Nino Plomberie</strong> pour offrir aux habitants de Toulouse et de la Haute-Garonne une plomberie sérieuse, réactive et sans mauvaises surprises.</>}
        actions={<>
          <a href="tel:0650579620" className="btn-cta">
            <Phone size={18} />
            Appeler Nino
          </a>
          <Link to="/rendez-vous" className="btn-ghost">
            <Calendar size={18} />
            Prendre Rendez-vous
          </Link>
        </>}
        image="/realisations/photo-03.jpg"
      />

      {/* ── Chiffres clés ── */}
      <div style={{ background: "white", borderBottom: "1px solid #f1f5f9" }}>
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          <div className="ap-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {CHIFFRES.map(({ valeur, label }, i) => (
              <div key={label} style={{ padding: "28px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.9rem", color: "var(--ink-950)", letterSpacing: "-0.03em", lineHeight: 1 }}>{valeur}</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "6px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Carte d'identité + Engagements ── */}
      <section style={{ padding: "72px 0" }} aria-labelledby="engagements-title">
        <div className="section-container" style={{ maxWidth: "1140px" }}>
          <div className="ap-id-grid">

            {/* Carte d'identité */}
            <aside className="ap-id-card" aria-label="Coordonnées de Nino Plomberie">
              <div className="ap-id-badge">
                <Award size={14} aria-hidden="true" /> Artisan indépendant
              </div>
              <div className="ap-id-name">Nino Plomberie</div>
              <div className="ap-id-sub">Plombier-chauffagiste à Muret (31)</div>

              <ul className="ap-id-list">
                {INFOS.map(({ icon: Icon, titre, desc, href }) => (
                  <li key={titre}>
                    <span className="ap-id-icon"><Icon size={18} aria-hidden="true" /></span>
                    <span>
                      <span className="ap-id-label">{titre}</span>
                      {href ? (
                        <a href={href} className="ap-id-value" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{desc}</a>
                      ) : (
                        <span className="ap-id-value">{desc}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="tel:+33650579620" className="btn-cta ap-id-cta">
                <Phone size={18} aria-hidden="true" /> Appeler maintenant
              </a>
            </aside>

            {/* Engagements */}
            <div>
              <span className="badge-brand" style={{ marginBottom: "14px" }}>Mes engagements</span>
              <h2 id="engagements-title" className="section-title" style={{ marginBottom: "12px" }}>
                Ce que vous pouvez attendre de moi
              </h2>
              <p style={{ color: "#64748b", fontSize: "1.02rem", lineHeight: 1.7, margin: "0 0 28px", maxWidth: "560px" }}>
                Quatre principes que j'applique sur chaque intervention, du petit dépannage à la salle de bain complète.
              </p>
              <div className="ap-eng-grid">
                {VALEURS.map(({ icon: Icon, kicker, titre, desc }) => (
                  <div key={titre} className="feature-card">
                    <div className="feature-card-top">
                      <span className="feature-card-icon"><Icon size={22} strokeWidth={2} aria-hidden="true" /></span>
                      <span className="feature-card-kicker">{kicker}</span>
                    </div>
                    <h3>{titre}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── Mon métier ── */}
      <section style={{ background: "white", padding: "72px 0" }} aria-labelledby="metier-title">
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          <div className="ap-story">
            <div>
              <span className="badge-brand" style={{ marginBottom: "14px" }}>Mon métier</span>
              <h2 id="metier-title" className="section-title" style={{ marginBottom: "18px" }}>
                Un artisan local, pas une plateforme de dépannage
              </h2>
              <p className="ap-p">
                Depuis plus de 20 ans, je dépanne et j'installe des équipements de plomberie chez les particuliers
                de Muret, de Toulouse et de la Haute-Garonne. Quand vous appelez Nino Plomberie, c'est moi qui
                réponds, moi qui me déplace et moi qui réalise les travaux.
              </p>
              <p className="ap-p">
                Mon quotidien, ce sont les urgences (fuite d'eau, WC bouché, cumulus en panne un dimanche matin)
                mais aussi les chantiers plus longs : remplacement de chauffe-eau, pose de sanitaires, création
                de salles de bain et pose de cuisines. Pour les salles de bain, je travaille avec un second
                professionnel afin de tout prendre en charge, de la plomberie aux finitions.
              </p>
              <p className="ap-p" style={{ marginBottom: 0 }}>
                Ma règle est simple : un diagnostic clair, un devis gratuit validé avec vous avant de commencer,
                un travail soigné et un chantier laissé propre. Mes réparations sont garanties 2 ans, pièces et
                main-d'œuvre.
              </p>
            </div>
            <figure style={{ position: "relative", margin: 0, borderRadius: "14px", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
              <img
                src={PHOTO_METIER.src}
                alt={PHOTO_METIER_VILLE ? `${PHOTO_METIER.titre} à ${PHOTO_METIER_VILLE} — Nino Plomberie` : `${PHOTO_METIER.titre} — Nino Plomberie`}
                loading="lazy"
                style={{ width: "100%", aspectRatio: "3 / 4", objectFit: "cover", display: "block" }}
              />
              <figcaption className="gal-cap">
                <span className="gal-cap-text">
                  <strong>{PHOTO_METIER.titre}</strong>
                  <span>Salles de bain{PHOTO_METIER_VILLE ? ` · ${PHOTO_METIER_VILLE}` : ""}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Ce que je fais ── */}
      <section style={{ padding: "72px 0" }} aria-labelledby="services-title">
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          <h2 id="services-title" className="section-title" style={{ textAlign: "center", marginBottom: "36px" }}>
            Ce que je fais pour vous
          </h2>
          <div className="feature-grid">
            {METIERS.map(({ slug, icon: Icon, titre, desc }) => (
              <Link key={slug} to="/services/$slug" params={{ slug }} className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-card-icon"><Icon size={22} strokeWidth={2} aria-hidden="true" /></span>
                </div>
                <h3>{titre}</h3>
                <p>{desc}</p>
                <span className="feature-card-btn">En savoir plus <ArrowUpRight size={14} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem", color: "var(--ink-950)", margin: "56px 0 20px", textAlign: "center" }}>
            Quelques réalisations
          </h3>
          <Gallery items={realisations.slice(0, 6)} />
        </div>
      </section>

      <FaqSection faqs={ABOUT_FAQ} title="Questions sur Nino Plomberie" background="white" />

      {/* ── CTA ── */}
      <section style={{ background: "white", padding: "64px 0", borderTop: "1px solid #f1f5f9" }}>
        <div className="section-container" style={{ maxWidth: "680px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2rem)", color: "var(--ink-950)", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Travaillons ensemble
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.65, marginBottom: "32px" }}>
            Devis gratuit, intervention dans toute la Haute-Garonne.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn-cta">
              Échanger sur votre projet <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Formulaire de contact →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .ap-id-grid { display: grid; grid-template-columns: 380px 1fr; gap: 56px; align-items: center; }
        .ap-id-card {
          background: var(--brand-600);
          color: white; border-radius: var(--radius-sm); padding: 32px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);
        }
        .ap-id-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
          border-radius: var(--radius-sm); padding: 5px 12px; font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 18px;
        }
        .ap-id-name { font-family: var(--font-display); font-weight: 800; font-size: 1.6rem; letter-spacing: -0.02em; }
        .ap-id-sub { color: rgba(255,255,255,0.65); font-size: 0.92rem; margin: 4px 0 24px; }
        .ap-id-list { list-style: none; padding: 0; margin: 0 0 26px; display: grid; gap: 16px; }
        .ap-id-list li { display: flex; gap: 14px; align-items: center; }
        .ap-id-icon {
          width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
          background: var(--white); color: var(--brand-600);
          display: flex; align-items: center; justify-content: center;
        }
        .ap-id-label { display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.55); margin-bottom: 2px; }
        .ap-id-value { display: block; color: white; font-weight: 600; font-size: 0.98rem; text-decoration: none; }
        a.ap-id-value:hover { text-decoration: underline; }
        .ap-id-cta { width: 100%; justify-content: center; padding: 14px 20px; }
        .ap-eng-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 960px) { .ap-id-grid { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 560px) { .ap-eng-grid { grid-template-columns: 1fr; } .ap-id-card { padding: 24px; } }
        .ap-story { display: grid; grid-template-columns: 1.4fr 1fr; gap: 48px; align-items: center; }
        .ap-p { color: #475569; font-size: 1.02rem; line-height: 1.8; margin: 0 0 16px; }
        @media (max-width: 900px) {
          .ap-story { grid-template-columns: 1fr !important; }
          .ap-hero    { grid-template-columns: 1fr !important; }
          .ap-hero > div:last-child { display: none; }
          .ap-content { grid-template-columns: 1fr !important; }
          .ap-stats   { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .ap-stats   { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
