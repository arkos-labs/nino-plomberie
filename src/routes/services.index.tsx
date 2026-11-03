// src/routes/services.index.tsx — Listing services SEO v3 (Brief section 6.4)
import { createFileRoute, Link } from "@tanstack/react-router"
import { services as allServices } from "../data/services"
import { Droplets, Flame, Wind, Wrench, Bath, Building2, Thermometer, ArrowRight, ArrowUpRight, Phone, Calendar, CheckCircle2 } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { SITE_URL, pageHead, ldScript, breadcrumbJsonLd, faqJsonLd, type Faq } from "../lib/site"

const services = allServices.filter((s) => s.listed !== false)

const CARD_COPY: Record<string, { desc: string; cta: string }> = {
  "urgence-plombier-toulouse": {
    desc: "Intervention 24h/24 et 7j/7 sur fuite importante, WC qui déborde ou coupure d'eau chaude, avec prix annoncé avant travaux.",
    cta: "Plombier urgence à Toulouse 24h/24",
  },
  "fuite-d-eau": {
    desc: "Détection sans casse et réparation immédiate de fuite visible ou encastrée pour stopper le dégât des eaux et protéger vos murs.",
    cta: "Recherche de fuite à Toulouse et Muret",
  },
  "debouchage": {
    desc: "Débouchage mécanique au furet ou haute pression pour WC, évier, douche et colonne d'immeuble, sans produit chimique corrosif.",
    cta: "Débouchage canalisation à Toulouse",
  },
  "chauffe-eau": {
    desc: "Dépannage d'eau chaude, changement de résistance ou groupe de sécurité et remplacement rapide de cumulus électrique ou thermodynamique.",
    cta: "Dépannage chauffe-eau Toulouse & Muret",
  },
  "chauffage-chaudiere": {
    desc: "Entretien annuel obligatoire avec attestation, dépannage de chaudière gaz en sécurité et purge complète de votre circuit de radiateurs.",
    cta: "Entretien et dépannage chaudière",
  },
  "robinetterie-sanitaires": {
    desc: "Remplacement de mitigeur, chasse d'eau qui coule, pose de WC suspendu et raccordement d'appareils avec garantie 2 ans.",
    cta: "Robinetterie et sanitaires à Muret",
  },
  "renovation-salle-de-bain": {
    desc: "Création et rénovation complète de salle de bain clé en main : douche à l'italienne, carrelage, placo et sanitaires.",
    cta: "Rénovation salle de bain Toulouse & Muret",
  },
  "installation-plomberie-neuve": {
    desc: "Création de réseau d'alimentation et d'évacuation en cuivre, PER ou multicouche pour maison neuve, extension ou rénovation lourde.",
    cta: "Installation plomberie neuve sur devis",
  },
  "pose-cuisine": {
    desc: "Montage des meubles, découpe du plan de travail et raccordement complet de l'évier, du lave-vaisselle et des arrivées d'eau.",
    cta: "Pose et raccordement de cuisine",
  },
  "plombier-chauffagiste-toulouse": {
    desc: "Un seul artisan basé à Muret pour gérer à la fois votre plomberie sanitaire et votre chauffage à Toulouse.",
    cta: "Plombier chauffagiste à Toulouse",
  },
}

const GUIDE = [
  { probleme: "De l'eau coule, une tache d'humidité apparaît, le compteur tourne", slug: "fuite-d-eau", service: "Recherche de fuite à Toulouse et Muret" },
  { probleme: "WC, évier, douche ou baignoire qui ne s'écoule plus", slug: "debouchage", service: "Débouchage canalisation à Toulouse" },
  { probleme: "Plus d'eau chaude, cumulus qui fuit, groupe de sécurité qui goutte", slug: "chauffe-eau", service: "Dépannage chauffe-eau Toulouse & Muret" },
  { probleme: "Radiateurs froids, chaudière en panne, pression qui chute", slug: "chauffage-chaudiere", service: "Entretien et dépannage chaudière" },
  { probleme: "Visite annuelle obligatoire de votre chaudière gaz avec attestation", slug: "entretien-chaudiere-toulouse", service: "Entretien chaudière à Toulouse" },
  { probleme: "Panne urgente la nuit, le dimanche ou un jour férié", slug: "depannage-plomberie-toulouse", service: "Dépannage plomberie à Toulouse 24h/24" },
  { probleme: "Robinet qui goutte, chasse d'eau qui coule, WC ou mitigeur à changer", slug: "robinetterie-sanitaires", service: "Robinetterie et sanitaires" },
  { probleme: "Refaire ou créer une salle de bain, remplacer la baignoire par une douche", slug: "renovation-salle-de-bain-toulouse", service: "Rénovation salle de bain à Toulouse" },
  { probleme: "Maison neuve, extension, installation à remettre aux normes", slug: "installation-plomberie-neuve", service: "Installation plomberie neuve" },
  { probleme: "Nouvelle cuisine à monter et à raccorder", slug: "pose-cuisine", service: "Pose et raccordement de cuisine" },
]

const SERVICES_FAQ: Faq[] = [
  {
    q: "Quels services propose Nino Plomberie ?",
    a: "J'assure le dépannage plomberie 24h/24 (fuite d'eau, débouchage de WC et canalisation, panne de chauffe-eau), l'entretien et le dépannage de chaudière, la robinetterie, la rénovation complète de salle de bain, la plomberie neuve et la pose de cuisine.",
  },
  {
    q: "Quels services sont disponibles en urgence ?",
    a: "Les urgences (fuite d'eau, WC ou canalisation bouchés, panne de chauffage ou d'eau chaude) sont prises en charge 24h/24 et 7j/7 au 06 50 57 96 20.",
  },
  {
    q: "Combien coûte une intervention de plomberie ?",
    a: "Le devis est gratuit et signé avant le début des travaux. Consultez la page Tarifs pour connaître les ordres de prix indicatifs par prestation.",
  },
  {
    q: "Dans quelle zone les services sont-ils proposés ?",
    a: "J'interviens à Muret, dans tout le Muretain, à Toulouse et en Haute-Garonne (Colomiers, Blagnac, Balma, Tournefeuille, Cugnaux, Portet-sur-Garonne, Carbonne, Eaunes).",
  },
]

export const Route = createFileRoute("/services/")({
  head: () => ({
    ...pageHead({
      title: "Services plomberie & chauffage Muret, Toulouse | Nino",
      description:
        "Dépannage, débouchage, fuite, chauffe-eau, chaudière, salle de bain à Muret et Toulouse. Artisan depuis 20 ans, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
      path: "/services",
    }),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Services de Nino Plomberie",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.titre,
          url: `${SITE_URL}/services/${s.slug}`,
        })),
      }),
      ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Services", path: "/services" }])),
      ldScript(faqJsonLd(SERVICES_FAQ)),
    ],
  }),
  component: ServicesIndex,
})

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Droplets, Flame, Wind, Wrench, Bath, Building2, Thermometer,
}

function ServicesIndex() {
  const urgences = services.filter((s) => s.urgence)
  const planifies = services.filter((s) => !s.urgence)

  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>

      <PageHero
        kicker="Plombier Muret · Toulouse · Haute-Garonne"
        title={<>Services de plomberie et de chauffage à Muret et Toulouse</>}
        lead="Une fuite sous l'évier, un chauffe-eau à l'arrêt ou une salle de bain à rénover : voici quel service choisir et comment je travaille. Artisan installé à Muret depuis plus de 20 ans (4,4/5 sur 79 avis Google), j'interviens sur tous vos besoins de services plomberie à Toulouse et dans le 31, avec devis gratuit signé avant travaux et garantie 2 ans."
        actions={<>
          <a href="tel:0650579620" className="btn-cta">
            <Phone size={18} />
            Appeler Nino · 06 50 57 96 20
          </a>
          <Link to="/contact" className="btn-ghost">
            <Calendar size={18} />
            Demander un devis gratuit
          </Link>
        </>}
        image="/realisations/photo-01.jpg"
      />

      {/* H2 #1 — Quel service pour quel problème ? */}
      <section style={{ background: "white", padding: "64px 0" }} aria-labelledby="guide-title">
        <div className="section-container" style={{ maxWidth: "1000px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span className="badge-brand" style={{ marginBottom: "14px" }}>Orientation rapide</span>
            <h2 id="guide-title" className="section-title" style={{ marginBottom: "10px" }}>Quel service pour quel problème ?</h2>
            <p style={{ color: "var(--gray-500)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "640px", margin: "0 auto" }}>
              Repérez votre symptôme dans ce tableau pour accéder directement à la fiche correspondante, ou appelez-moi au 06 50 57 96 20.
            </p>
          </div>
          <div className="srv-guide" role="table" aria-label="Problème et service correspondant">
            <div className="srv-guide-row srv-guide-head" role="row">
              <span role="columnheader">Votre problème</span>
              <span role="columnheader">La page dédiée</span>
            </div>
            {GUIDE.map((g) => (
              <div key={g.slug} className="srv-guide-row" role="row">
                <span role="cell">{g.probleme}</span>
                <span role="cell">
                  <Link to="/services/$slug" params={{ slug: g.slug }}>{g.service} <ArrowRight size={13} aria-hidden="true" /></Link>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 #2 — Les interventions d'urgence, 24h/24 */}
      <section style={{ padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "1140px" }}>
          <div style={{ marginBottom: "32px" }}>
            <span className="badge-brand" style={{ marginBottom: "12px" }}>Joignable 24h/24 et 7j/7</span>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>Les interventions d'urgence, 24h/24</h2>
            <p className="section-subtitle">
              Quand l'eau déborde ou que la chaudière s'arrête en plein hiver, je décroche directement au 06 50 57 96 20 et je me déplace depuis Muret vers Toulouse et toute la Haute-Garonne.
            </p>
          </div>
          <div className="feature-grid">
            {urgences.map((s) => {
              const Icon = iconMap[s.icon] ?? Wrench
              const copy = CARD_COPY[s.slug] ?? { desc: s.description, cta: `Voir ${s.titre.toLowerCase()}` }
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="feature-card">
                  <div className="feature-card-top">
                    <span className="feature-card-icon"><Icon size={22} strokeWidth={1.8} /></span>
                    <span className="feature-card-tag">Urgence 24h/7j</span>
                  </div>
                  <h3>{s.titre}</h3>
                  <p>{copy.desc}</p>
                  <span className="feature-card-btn">{copy.cta} <ArrowUpRight size={14} aria-hidden="true" /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* H2 #3 — Les travaux planifiés */}
      <section style={{ background: "white", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "1140px" }}>
          <div style={{ marginBottom: "32px" }}>
            <span className="badge-brand" style={{ marginBottom: "12px" }}>Sur rendez-vous</span>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>Les travaux planifiés</h2>
            <p className="section-subtitle">
              Remplacement de chauffe-eau, entretien annuel de chaudière, rénovation de salle de bain ou pose de cuisine : je me déplace gratuitement pour chiffrer votre projet sur place.
            </p>
          </div>
          <div className="feature-grid">
            {planifies.map((s) => {
              const Icon = iconMap[s.icon] ?? Wrench
              const copy = CARD_COPY[s.slug] ?? { desc: s.description, cta: `Voir ${s.titre.toLowerCase()}` }
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="feature-card">
                  <div className="feature-card-top">
                    <span className="feature-card-icon"><Icon size={22} strokeWidth={1.8} /></span>
                  </div>
                  <h3>{s.titre}</h3>
                  <p>{copy.desc}</p>
                  <span className="feature-card-btn">{copy.cta} <ArrowUpRight size={14} aria-hidden="true" /></span>
                </Link>
              )
            })}
          </div>

          {/* 2 photos réelles avec alt descriptif et local */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "40px" }}>
            <figure style={{ margin: 0, background: "var(--sand-50)", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
              <img
                src="/realisations/photo-01.jpg"
                alt="Rénovation de salle de bain avec baignoire et robinetterie noire mat à Muret par Nino Plomberie"
                loading="lazy"
                style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
              />
              <figcaption style={{ padding: "12px 16px", fontSize: "0.9rem", color: "#475569" }}>
                <strong>Rénovation de salle de bain à Muret</strong> — pose de baignoire et robinetterie garantie 2 ans.
              </figcaption>
            </figure>
            <figure style={{ margin: 0, background: "var(--sand-50)", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
              <img
                src="/realisations/photo-07.jpg"
                alt="Installation de chauffe-eau électrique et raccordement de cuisine à Muret, rue François Arago"
                loading="lazy"
                style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
              />
              <figcaption style={{ padding: "12px 16px", fontSize: "0.9rem", color: "#475569" }}>
                <strong>Chauffe-eau et cuisine à Muret</strong> — raccordement complet eau chaude, eau froide et évacuation.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* H2 #4 — Ce que comprend toujours un devis Nino */}
      <section style={{ background: "var(--sand-50)", padding: "64px 0" }} aria-labelledby="devis-nino-title">
        <div className="section-container" style={{ maxWidth: "960px" }}>
          <span className="badge-brand" style={{ marginBottom: "12px" }}>Engagement écrit</span>
          <h2 id="devis-nino-title" className="section-title" style={{ marginBottom: "16px" }}>
            Ce que comprend toujours un devis Nino
          </h2>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.75, marginBottom: "24px" }}>
            Avant de sortir un outil, je vous remets un devis clair. Vous savez exactement ce qui est prévu et combien cela coûte :
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              {
                titre: "Le déplacement et le diagnostic",
                desc: "Je viens à Muret, Toulouse ou en Haute-Garonne identifier la cause réelle de la panne avant de chiffrer.",
              },
              {
                titre: "Le détail pièces et main-d'œuvre",
                desc: "Chaque fourniture et le temps d'intervention sont écrits noir sur blanc avant votre signature.",
              },
              {
                titre: "Un prix ferme avant travaux",
                desc: "Le montant signé est celui de la facture. Si un imprévu survient, je vous consulte avant de toucher à quoi que ce soit.",
              },
              {
                titre: "La garantie 2 ans incluse",
                desc: "Si la panne revient dans les deux ans sur la réparation effectuée, je reviens sans vous refacturer.",
              },
            ].map((item) => (
              <li key={item.titre} style={{ background: "white", padding: "22px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "var(--brand-600)", fontWeight: 700 }}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <strong style={{ color: "var(--ink-950)", fontSize: "1rem" }}>{item.titre}</strong>
                </div>
                <p style={{ margin: 0, color: "#475569", fontSize: "0.93rem", lineHeight: 1.65 }}>{item.desc}</p>
              </li>
            ))}
          </ul>
          <p style={{ margin: 0, color: "#475569", fontSize: "0.98rem" }}>
            Consultez mes fourchettes de prix sur la page{" "}
            <Link to="/tarifs" style={{ color: "var(--brand-600)", fontWeight: 700 }}>tarifs plombier à Muret et Toulouse</Link>, ou voyez mes interventions comme{" "}
            <Link to="/intervention/$ville" params={{ ville: "muret" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Muret</Link>{" "}
            et{" "}
            <Link to="/intervention/$ville" params={{ ville: "toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Toulouse</Link>.
          </p>
        </div>
      </section>

      {/* H2 #5 — Une urgence ou un devis ? */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "640px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Une urgence ou un devis ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", marginBottom: "32px", lineHeight: 1.7 }}>
            Appelez-moi directement au 06 50 57 96 20 (ligne ouverte 24h/24 et 7j/7) ou décrivez votre besoin pour recevoir un devis gratuit.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0650579620" className="btn-cta">
              <Phone size={16} />
              Appeler Nino · 06 50 57 96 20
            </a>
            <Link to="/contact" className="btn-ghost">
              Demander un devis gratuit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .srv-guide { border: 1px solid #e2e8f0; border-radius: var(--radius-sm); overflow: hidden; }
        .srv-guide-row { display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px; padding: 16px 22px; border-bottom: 1px solid #f1f5f9; align-items: center; font-size: 0.95rem; color: #334155; line-height: 1.55; }
        .srv-guide-row:last-child { border-bottom: none; }
        .srv-guide-row:nth-child(even) { background: #f8fafc; }
        .srv-guide-head { background: var(--ink-900) !important; color: white; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; }
        .srv-guide-row a { display: inline-flex; align-items: center; gap: 6px; color: var(--brand-600); font-weight: 700; text-decoration: none; }
        .srv-guide-row a:hover { text-decoration: underline; }
        @media (max-width: 640px) { .srv-guide-row { grid-template-columns: 1fr; gap: 6px; } .srv-guide-head { display: none; } }
      `}</style>
    </div>
  )
}
