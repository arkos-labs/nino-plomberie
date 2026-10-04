// src/routes/services.index.tsx — Listing services v2
import { createFileRoute, Link } from "@tanstack/react-router"
import { services } from "../data/services"
import { Droplets, Flame, Wind, Wrench, Bath, Building2, Thermometer, ArrowRight, ArrowUpRight, Phone, Calendar } from "lucide-react"
import { FaqSection } from "../components/FaqSection"
import { PageHero } from "../components/PageHero"
import { ProcessSteps } from "../components/ProcessSteps"
import { SITE_URL, pageHead, ldScript, breadcrumbJsonLd, type Faq } from "../lib/site"

export const Route = createFileRoute("/services/")({
  head: () => ({
    ...pageHead({
      title: "Services de plomberie à Muret et Toulouse — Nino Plomberie",
      description:
        "Fuite d'eau, débouchage, chauffe-eau, chauffage, robinetterie, salle de bain, plomberie neuve et pose de cuisine : tous les services de Nino Plomberie à Muret, Toulouse et en Haute-Garonne. Devis gratuit.",
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
    ],
  }),
  component: ServicesIndex,
})

const GUIDE = [
  { probleme: "De l'eau coule, une tache d'humidité apparaît, le compteur tourne", slug: "fuite-d-eau", service: "Fuite d'eau" },
  { probleme: "WC, évier, douche ou baignoire qui ne s'écoule plus", slug: "debouchage", service: "Débouchage" },
  { probleme: "Plus d'eau chaude, cumulus qui fuit, groupe de sécurité qui goutte", slug: "chauffe-eau", service: "Chauffe-eau & Cumulus" },
  { probleme: "Radiateurs froids, chaudière en panne, pression qui chute", slug: "chauffage-chaudiere", service: "Chauffage & Chaudière" },
  { probleme: "Robinet qui goutte, chasse d'eau qui coule, WC ou mitigeur à changer", slug: "robinetterie-sanitaires", service: "Robinetterie & Sanitaires" },
  { probleme: "Refaire ou créer une salle de bain, remplacer la baignoire par une douche", slug: "renovation-salle-de-bain", service: "Rénovation salle de bain" },
  { probleme: "Maison neuve, extension, installation à remettre aux normes", slug: "installation-plomberie-neuve", service: "Plomberie neuve" },
  { probleme: "Nouvelle cuisine à monter et à raccorder", slug: "pose-cuisine", service: "Pose de cuisine" },
]

const SERVICES_FAQ: Faq[] = [
  {
    q: "Quels services propose Nino Plomberie ?",
    a: "Nino Plomberie propose le dépannage de fuites d'eau, le débouchage, le dépannage et le remplacement de chauffe-eau, le dépannage de chauffage et de chaudière, la robinetterie et les sanitaires, la création et la rénovation de salles de bain, la plomberie neuve et la pose de cuisines.",
  },
  {
    q: "Quels services sont disponibles en urgence ?",
    a: "Les urgences (fuite d'eau, WC ou canalisation bouchés, panne de chauffage ou d'eau chaude) sont prises en charge 24h/24 et 7j/7 au 06 50 57 96 20.",
  },
  {
    q: "Combien coûte une intervention de plomberie ?",
    a: "Le prix dépend du problème et du matériel nécessaire. Nino Plomberie établit un devis gratuit et annonce le prix avant d'intervenir. Des tarifs indicatifs sont disponibles sur la page Tarifs.",
  },
  {
    q: "Dans quelle zone les services sont-ils proposés ?",
    a: "Tous les services sont proposés à Muret, Toulouse et dans les communes de la Haute-Garonne, notamment Portet-sur-Garonne, Cugnaux, Seysses, Frouzins, Tournefeuille, Colomiers et Blagnac.",
  },
]

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Droplets, Flame, Wind, Wrench, Bath, Building2, Thermometer,
}

function ServicesIndex() {
  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>

      <PageHero
        kicker="Plombier Muret · Toulouse · Haute-Garonne"
        title={<>Services de <em>plomberie</em> à Muret et Toulouse</>}
        lead="Du dépannage urgent à la salle de bain complète : un seul artisan, plus de 20 ans d'expérience, un devis gratuit avant chaque intervention."
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
        image="/realisations/photo-01.jpg"
      />

      {/* ── Grille ── */}
      <section style={{ padding: "72px 0 80px" }}>
        <div className="section-container" style={{ maxWidth: "1140px" }}>
          <div style={{ marginBottom: "32px" }}>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>Nos expertises</h2>
            <p className="section-subtitle">Toutes les prestations, en urgence comme sur rendez-vous.</p>
          </div>
          <div className="feature-grid">
            {services.map((s) => {
              const Icon = iconMap[s.icon] ?? Wrench
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="feature-card">
                  <div className="feature-card-top">
                    <span className="feature-card-icon"><Icon size={22} strokeWidth={1.8} /></span>
                    {s.urgence && <span className="feature-card-tag">Urgence 24h/7j</span>}
                  </div>
                  <h3>{s.titre}</h3>
                  <p>{s.description.slice(0, 105)}…</p>
                  <span className="feature-card-btn">En savoir plus <ArrowUpRight size={14} aria-hidden="true" /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Guide : quel service pour quel problème ── */}
      <section style={{ background: "white", padding: "72px 0" }} aria-labelledby="guide-title">
        <div className="section-container" style={{ maxWidth: "1000px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span className="badge-brand" style={{ marginBottom: "14px" }}>Guide</span>
            <h2 id="guide-title" className="section-title" style={{ marginBottom: "10px" }}>Quel service pour quel problème ?</h2>
            <p style={{ color: "var(--gray-500)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "620px", margin: "0 auto" }}>
              Vous ne savez pas comment décrire votre panne ? Trouvez votre situation ci-dessous, ou appelez simplement le 06 50 57 96 20.
            </p>
          </div>
          <div className="srv-guide" role="table" aria-label="Problème et service correspondant">
            <div className="srv-guide-row srv-guide-head" role="row">
              <span role="columnheader">Votre problème</span>
              <span role="columnheader">Le service</span>
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

      <ProcessSteps background="var(--sand-50)" />

      <FaqSection faqs={SERVICES_FAQ} title="Questions sur nos services" background="white" />

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "640px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Besoin d'un devis gratuit ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", marginBottom: "32px", lineHeight: 1.7 }}>
            Décrivez votre besoin, Nino vous recontacte.<br />Pour une urgence, appelez directement : la ligne est ouverte 24h/24.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0650579620" className="btn-cta">
              <Phone size={16} />
              Appeler maintenant
            </a>
            <Link to="/contact" className="btn-ghost">
              Formulaire de contact <ArrowRight size={14} />
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
