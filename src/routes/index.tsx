// src/routes/index.tsx — Homepage SEO v3 (Brief section 6.1)
import { createFileRoute, Link } from "@tanstack/react-router"
import { Fragment } from "react"
import { realisations } from "../data/realisations"
import { Gallery } from "../components/Gallery"
import { ProcessSteps } from "../components/ProcessSteps"
import { QuickContactForm } from "../components/QuickContactForm"
import { avis } from "../data/avis"
import { BUSINESS, pageHead, ldScript, faqJsonLd, type Faq } from "../lib/site"
import {
  Phone, Star, MapPin, Droplets, Flame, Wind, Wrench,
  ArrowRight, ArrowUpRight, CheckCircle, Zap, Award, History, ShieldCheck, Calendar, ChevronDown,
} from "lucide-react"

const HOME_FAQ: Faq[] = [
  {
    q: "Quels travaux réalise Nino Plomberie ?",
    a: "J'assure le dépannage plomberie 24h/24 (fuite d'eau, débouchage de WC, évier ou canalisation, panne de chauffe-eau), l'entretien et le dépannage de chaudière, la robinetterie et les sanitaires, la création et la rénovation complète de salles de bain, la plomberie neuve et la pose de cuisines.",
  },
  {
    q: "Intervenez-vous en urgence la nuit et le week-end ?",
    a: "Oui. Je suis joignable 24h/24 et 7j/7, y compris le week-end et les jours fériés, au 06 50 57 96 20. Le délai dépend de votre commune et des interventions en cours : je vous l'indique dès votre appel.",
  },
  {
    q: "Dans quelles communes intervenez-vous ?",
    a: "Je suis installé au 11 rue François Arago à Muret (31600) et j'interviens dans tout le Muretain, à Toulouse et en Haute-Garonne : Portet-sur-Garonne, Cugnaux, Seysses, Frouzins, Eaunes, Carbonne, Saint-Lys, Tournefeuille, Colomiers, Blagnac et Balma.",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui. Le devis est gratuit et signé avec vous avant le premier coup de clé. Si le prix devait évoluer, c'est moi qui vous appelle avant de continuer.",
  },
  {
    q: "Les réparations sont-elles garanties ?",
    a: "Oui, toutes mes réparations sont garanties 2 ans pièces et main-d'œuvre : si la panne revient dans les deux ans, je reviens sans vous refacturer.",
  },
  {
    q: "Que faire en attendant le plombier en cas de fuite d'eau ?",
    a: "Fermez immédiatement le robinet d'arrêt de la pièce ou la vanne générale au compteur. Si l'eau approche d'une prise électrique, coupez le disjoncteur. Épongez, protégez vos meubles et prenez des photos pour votre assurance.",
  },
]

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "Plombier Muret & Toulouse 24h/24 - Dépannage | Nino",
      description:
        "Artisan plombier à Muret depuis 20 ans. Dépannage urgence 24h/24 7j/7 à Toulouse et en Haute-Garonne. Devis gratuit avant travaux, garantie 2 ans. 06 50 57 96 20.",
      path: "/",
    }),
    scripts: [ldScript(faqJsonLd(HOME_FAQ))],
  }),
  component: HomePage,
})

const services = [
  {
    icon: Droplets,
    titre: "Recherche et réparation de fuite",
    desc: "Détection sans casse et réparation immédiate sur robinet, raccord ou canalisation encastrée avant que l'humidité ne gagne les murs.",
    cta: "Voir le prix et le délai",
    href: "/services/fuite-d-eau",
    urgence: true,
  },
  {
    icon: Wind,
    titre: "Débouchage WC et canalisation",
    desc: "Débouchage mécanique au furet ou haute pression pour WC, évier, douche et colonne d'immeuble, sans produit chimique corrosif.",
    cta: "Débouchage canalisation à Toulouse",
    href: "/services/debouchage",
    urgence: true,
  },
  {
    icon: Flame,
    titre: "Chauffe-eau & Cumulus",
    desc: "Diagnostic de panne d'eau chaude, changement de groupe de sécurité ou de résistance et remplacement de ballon électrique 7j/7.",
    cta: "Dépannage chauffe-eau Toulouse & Muret",
    href: "/services/chauffe-eau",
    urgence: false,
  },
  {
    icon: Wrench,
    titre: "Chaudière, chauffage & sanitaires",
    desc: "Entretien annuel de chaudière gaz, dépannage de chauffage, pose de robinetterie, WC suspendu et rénovation complète de salle de bain.",
    cta: "Entretien et dépannage chaudière",
    href: "/services/chauffage-chaudiere",
    urgence: false,
  },
]

const garanties = [
  { icon: History, titre: "Joignable en direct 24h/24", desc: "Pas de standard ni de plateforme : vous parlez directement à l'artisan qui se déplace chez vous, 7j/7." },
  { icon: ShieldCheck, titre: "Garantie 2 ans pièces et main-d'œuvre", desc: "Si la panne revient dans les deux ans sur une pièce réparée ou posée, je reviens sans vous refacturer." },
  { icon: Award, titre: "20 ans à Muret (31600)", desc: "Installé au 11 rue François Arago à Muret, je connais le bâti ancien comme les lotissements récents du 31." },
  { icon: CheckCircle, titre: "Devis signé avant travaux", desc: "Vous connaissez le montant exact avant le premier coup de clé. Aucune majoration surprise en fin de chantier." },
]

function StarRow({ n }: { n: number }) {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < n ? "#f59e0b" : "#e5e7eb"}
          color={i < n ? "#f59e0b" : "#e5e7eb"}
        />
      ))}
    </div>
  )
}

function HomePage() {
  return (
    <div style={{ background: "var(--sand-50)" }}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)",
        paddingTop: "36px",
        paddingBottom: "36px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}>
        <div className="hero-bg-image" style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/realisations/photo-09.jpg')",
          backgroundSize: "cover",
          zIndex: 0,
        }}>
          <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        </div>

        <div className="section-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%" }}>

          <div className="animate-fade-up" style={{ marginBottom: "14px" }}>
            <a href="tel:0650579620" className="page-hero-kicker" style={{ margin: 0 }}>
              Artisan à Muret · 24h/24 et 7j/7
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

          <h1
            className="animate-fade-up animate-fade-up-d1"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5.2vw, 3.7rem)",
              color: "#fff",
              lineHeight: 1.14,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
              maxWidth: "640px",
            }}
          >
            Plombier à Muret et Toulouse :{" "}
            <span style={{ color: "var(--cta-400)" }}>
              dépannage 24h/24
            </span>
          </h1>

          <div style={{ position: "relative", display: "inline-block", maxWidth: "620px", marginBottom: "22px" }}>
            <p
              className="animate-fade-up animate-fade-up-d2"
              style={{
                color: "rgba(255,255,255,0.94)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: "580px",
                margin: "0 0 12px",
                fontWeight: 400,
              }}
            >
              L'eau coule sous l'évier, le WC ne tire plus, la chaudière s'est arrêtée. Comme{" "}
              <strong style={{ color: "#fff" }}>plombier à Muret</strong> et à Toulouse, j'interviens dans toute la Haute-Garonne <strong style={{ color: "#fff" }}>24h/24 et 7j/7</strong>.
            </p>
            <p
              className="animate-fade-up animate-fade-up-d2"
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "1.02rem",
                lineHeight: 1.65,
                maxWidth: "580px",
                margin: 0,
              }}
            >
              Installé au 11 rue François Arago à Muret depuis plus de <strong style={{ color: "#fff" }}>20 ans</strong>, noté <strong style={{ color: "#fff" }}>4,4/5 sur 79 avis</strong> Google, j'annonce le prix dans un devis gratuit avant de commencer. Si la panne revient dans les <strong style={{ color: "#fff" }}>2 ans de garantie</strong>, je reviens sans vous refacturer.
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-d3" style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "flex-start", marginBottom: "24px" }}>
            <a href="tel:0650579620" className="btn-cta" style={{ padding: "14px 26px", fontSize: "1rem" }}>
              <Phone size={18} />
              Appeler Nino · 06 50 57 96 20
            </a>
            <Link to="/contact" className="btn-ghost" style={{ padding: "14px 26px", fontSize: "1rem" }}>
              <Calendar size={18} />
              Demander un devis gratuit
            </Link>
          </div>

          {/* Badge avis Google */}
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="g-badge animate-fade-up animate-fade-up-d3"
            aria-label="Note Google : 4,4 sur 5, 79 avis. Voir les avis"
          >
            <span className="g-word" aria-hidden="true">
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>
            <span className="g-sep" aria-hidden="true" />
            <span className="g-body" aria-hidden="true">
              <span className="g-row">
                <strong className="g-score">4,4</strong>
                <span className="g-stars">
                  <span className="g-stars-base">★★★★★</span>
                  <span className="g-stars-fill" style={{ width: `${(4.4 / 5) * 100}%` }}>★★★★★</span>
                </span>
              </span>
              <span className="g-note">79 avis clients · <span className="g-link">Voir les avis <ArrowUpRight size={13} /></span></span>
            </span>
          </a>
          <style>{`
            .g-badge {
              display: inline-flex; align-items: center; gap: 18px;
              margin-bottom: 28px;
              text-decoration: none; white-space: nowrap;
              text-shadow: 0 2px 12px rgba(0,0,0,0.45);
              transition: scale .2s ease;
            }
            .g-badge:hover { scale: 1.03; }
            @media (min-width: 1024px) {
              .g-badge {
                position: absolute; right: var(--space-6); top: 22%;
                margin-bottom: 0; flex-direction: column; gap: 12px;
              }
              .g-sep { width: 100%; height: 1px; align-self: auto; }
              .g-body { align-items: center; }
              .g-word { font-size: 2.6rem; }
            }
            .g-word { font-family: var(--font-display); font-weight: 600; font-size: 2.1rem; line-height: 1; letter-spacing: -0.02em; }
            .g-sep { width: 1px; align-self: stretch; background: rgba(255,255,255,0.3); }
            .g-body { display: flex; flex-direction: column; gap: 4px; }
            .g-row { display: flex; align-items: center; gap: 10px; }
            .g-score { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; line-height: 1; color: #fff; }
            .g-stars { position: relative; display: inline-block; font-size: 1.35rem; line-height: 1; letter-spacing: 2px; }
            .g-stars-base { color: rgba(255,255,255,0.3); }
            .g-stars-fill { position: absolute; inset: 0 auto 0 0; overflow: hidden; color: #FBBC05; }
            .g-note { font-size: 0.82rem; color: rgba(255,255,255,0.8); }
            .g-link { display: inline-flex; align-items: center; gap: 2px; color: var(--cta-400); font-weight: 700; }
            .g-badge:hover .g-link { text-decoration: underline; }
            @media (max-width: 480px) {
              .g-badge { gap: 12px; }
              .g-word { font-size: 1.55rem; }
              .g-score { font-size: 1.2rem; }
              .g-stars { font-size: 1.05rem; }
              .g-note { font-size: 0.74rem; }
            }
          `}</style>

          {/* Chiffres clés */}
          <div className="kf animate-fade-up animate-fade-up-d4">
            <div className="kf-line" aria-hidden="true" />
            {[
              { val: "24/7",  label: "Disponible",    sub: "Ouvert 24h/24",          c: "#F97316" },
              { val: "79",    label: "Avis Google",   sub: "Note 4,4/5",             c: "#F6B17A" },
              { val: "20 ans", label: "À Muret (31)", sub: "11 rue François Arago",  c: "#B9CCE3" },
              { val: "2 ans", label: "Garantie",      sub: "Pièces & main-d'œuvre",  c: "#7FAEE6" },
            ].map(({ val, label, sub, c }, i) => {
              const style = { "--c": c, gridColumn: i + 1 } as React.CSSProperties
              return (
                <Fragment key={label}>
                  <span className="kf-node" style={style} aria-hidden="true" />
                  <div className="kf-item is-bottom" style={style}>
                    <div className="kf-val">{val}</div>
                    <div className="kf-label">{label}</div>
                    <div className="kf-sub">{sub}</div>
                  </div>
                </Fragment>
              )
            })}
          </div>

        </div>
        <style>{`
          .kf {
            position: relative; width: 100%;
            display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: 0 22px auto;
          }
          .kf-line {
            grid-row: 2; grid-column: 1 / -1; align-self: center;
            height: 3px; margin: 0 -28px; border-radius: 2px;
            background: linear-gradient(90deg, #F97316 0%, #F6B17A 35%, #B9CCE3 65%, #7FAEE6 100%);
          }
          .kf-node {
            grid-row: 2; justify-self: center; position: relative; z-index: 1;
            width: 22px; height: 22px; border-radius: 50%;
            border: 3px solid var(--c); background: var(--brand-600);
          }
          .kf-item {
            justify-self: center; width: max-content; max-width: 100%;
            display: flex; flex-direction: column; align-items: center; text-align: center;
            position: relative;
          }
          .kf-item.is-bottom { grid-row: 3; align-self: start; padding-top: 20px; }
          .kf-item::after {
            content: ''; position: absolute; top: 0; width: 3px; height: 20px; background: var(--c);
          }
          .kf-val { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.3rem, 3vw, 2.2rem); color: #fff; line-height: 1; letter-spacing: -0.03em; }
          .kf-label { margin-top: 8px; font-weight: 700; font-size: 0.95rem; color: rgba(255,255,255,0.92); }
          .kf-sub { margin-top: 2px; font-size: 0.82rem; color: rgba(255,255,255,0.6); }
          @media (max-width: 560px) {
            .kf-line { margin: 0 -12px; }
            .kf-label { font-size: 0.7rem; margin-top: 6px; }
            .kf-val { font-size: 1.15rem; }
            .kf-sub { display: none; }
          }
        `}</style>
      </section>

      {/* H2 #1 — Formulaire court au-dessus de la ligne de flottaison mobile */}
      <QuickContactForm title="Une fuite, un WC bouché, plus d'eau chaude ?" />

      {/* H2 #2 — Ce que je fais, et ce que ça change pour vous */}
      <section style={{ background: "var(--sand-50)", padding: "clamp(56px, 8vw, 96px) 0", position: "relative" }}>
        <div className="section-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap", gap: "24px" }}>
            <div style={{ maxWidth: "680px" }}>
              <span className="badge-brand" style={{ marginBottom: "12px" }}>Dépannage & travaux</span>
              <h2 className="section-title" style={{ marginBottom: "14px" }}>
                Ce que je fais, et ce que ça change pour vous
              </h2>
              <p style={{ color: "var(--gray-600)", fontSize: "1.03rem", lineHeight: 1.75, margin: 0 }}>
                Que vous cherchiez un dépannage plomberie en pleine nuit ou un plombier chauffagiste à Toulouse et Muret pour vos travaux, vous traitez avec un seul artisan du diagnostic jusqu'à la remise en eau.
              </p>
            </div>
            <Link to="/services" className="btn-dark" style={{ marginTop: "8px" }}>
              Voir tous les services et tarifs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="feature-grid">
            {services.map(({ icon: Icon, titre, desc, cta, href, urgence }) => (
              <Link key={href} to={href as "/services"} className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-card-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                  {urgence && <span className="feature-card-tag">Urgence 24/7</span>}
                </div>
                <h3>{titre}</h3>
                <p>{desc}</p>
                <span className="feature-card-btn">{cta} <ArrowUpRight size={14} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>

          <p style={{ marginTop: "32px", textAlign: "center", color: "var(--gray-600)", fontSize: "1rem", lineHeight: 1.75 }}>
            Besoin d'une intervention ciblée ? Consultez mes pages dédiées :{" "}
            <Link to="/services/$slug" params={{ slug: "depannage-plomberie-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>dépannage plomberie à Toulouse</Link>,{" "}
            <Link to="/services/$slug" params={{ slug: "urgence-plombier-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier urgence à Toulouse 24h/24</Link>,{" "}
            <Link to="/services/$slug" params={{ slug: "plombier-chauffagiste-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier chauffagiste à Toulouse</Link>,{" "}
            <Link to="/services/$slug" params={{ slug: "entretien-chaudiere-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>entretien de chaudière à Toulouse</Link>{" "}
            et{" "}
            <Link to="/services/$slug" params={{ slug: "renovation-salle-de-bain-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>rénovation de salle de bain à Toulouse</Link>.
          </p>
        </div>
      </section>

      {/* H2 #3 — Comment se passe une intervention */}
      <ProcessSteps title="Comment se passe une intervention" />

      {/* H2 #4 — Mes chantiers récents à Muret et à Toulouse */}
      <section style={{ background: "var(--sand-50)", padding: "clamp(48px, 8vw, 88px) 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge-brand" style={{ marginBottom: "14px" }}>
              Réalisations vérifiables
            </span>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>
              Mes chantiers récents à Muret et à Toulouse
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "0.98rem", maxWidth: "640px", margin: "0 auto" }}>
              Salles de bain complètes, douches à l'italienne, WC suspendus, chauffe-eau et cuisines posés à Muret, Toulouse, Colomiers, Blagnac et Tournefeuille.
            </p>
          </div>

          <Gallery items={realisations.filter((r) => r.src !== "/realisations/photo-09.jpg")} filters />
        </div>
      </section>

      {/* H2 #5 — Combien coûte une intervention ? */}
      <section style={{ background: "var(--white)", padding: "clamp(48px, 8vw, 88px) 0" }} aria-labelledby="home-prix-title">
        <div className="section-container" style={{ maxWidth: "960px" }}>
          <span className="badge-brand" style={{ marginBottom: "14px" }}>Transparence tarifaire</span>
          <h2 id="home-prix-title" className="section-title" style={{ marginBottom: "14px" }}>
            Combien coûte une intervention ?
          </h2>
          <p style={{ color: "var(--gray-600)", fontSize: "1.05rem", lineHeight: 1.75, margin: "0 0 24px" }}>
            Vous connaissez le prix avant le premier coup de clé. Je me déplace, je diagnostique la panne et je rédige un devis gratuit écrit : vous décidez ensuite.
          </p>
          <ul style={{ color: "var(--ink-800)", fontSize: "1.02rem", lineHeight: 1.8, paddingLeft: "22px", margin: "0 0 24px" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Déplacement et diagnostic</strong> : devis gratuit sur place, montant annoncé avant toute intervention — <code>[À CONFIRMER PAR NINO : prix de déplacement]</code>.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Débouchage simple (WC, évier, douche au furet)</strong> : tarif annoncé avant intervention — <code>[À CONFIRMER PAR NINO : prix d'un débouchage simple]</code>.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Entretien annuel de chaudière gaz</strong> : visite complète avec remise de l'attestation d'entretien — <code>[À CONFIRMER PAR NINO : prix d'un entretien chaudière]</code>.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Réparation de fuite simple (joint, robinet, raccord)</strong> : chiffrage sur place avant réparation — <code>[À CONFIRMER PAR NINO : prix d'une réparation de fuite simple]</code>.
            </li>
          </ul>
          <p style={{ color: "var(--gray-600)", fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
            Consultez la grille complète sur la page{" "}
            <Link to="/tarifs" style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              tarifs plombier à Muret et Toulouse
            </Link>{" "}
            ou appelez-moi directement au <a href="tel:0650579620" style={{ color: "var(--brand-600)", fontWeight: 700 }}>06 50 57 96 20</a> pour une estimation immédiate.
          </p>
        </div>
      </section>

      {/* H2 #6 — Ce que disent les clients */}
      <section style={{ background: "var(--sand-50)", padding: "clamp(48px, 8vw, 88px) 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="badge-brand" style={{ marginBottom: "14px" }}>
              Témoignages vérifiés
            </span>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>
              Ce que disent les clients
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "var(--gray-500)",
                fontSize: "0.95rem",
              }}
            >
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <strong>4,4/5</strong> · 79 avis Google ·{" "}
              <Link to="/avis-clients" style={{ color: "var(--brand-600)", fontWeight: 700 }}>
                Lire les avis clients Nino Plomberie
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {avis.map((a) => (
              <div key={a.nom} className="card" style={{ padding: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "14px",
                  }}
                >
                  <StarRow n={a.note} />
                  <span
                    style={{
                      fontSize: "0.7rem",
                      background: "var(--gray-100)",
                      color: "var(--gray-500)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-pill)",
                      fontWeight: 500,
                    }}
                  >
                    {a.service}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--ink-700)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "18px",
                    fontStyle: "italic",
                  }}
                >
                  « {a.texte} »
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--gray-100)",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--ink-900)", fontSize: "0.875rem" }}>
                      {a.nom}
                    </div>
                    <div
                      style={{
                        color: "var(--gray-400)",
                        fontSize: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Star size={11} />
                      Avis Google
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 #7 — Pourquoi un artisan plutôt qu'une plateforme */}
      <section style={{ background: "var(--white)", padding: "clamp(56px, 8vw, 96px) 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "56px", alignItems: "center" }} className="grid-responsive-1col">
            <div>
              <span className="badge-brand" style={{ marginBottom: "14px" }}>Artisan indépendant</span>
              <h2 className="section-title" style={{ marginBottom: "20px" }}>
                Pourquoi un artisan plutôt qu'une plateforme
              </h2>
              <p style={{ color: "var(--gray-600)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "16px" }}>
                Les plateformes nationales de dépannage prennent votre appel dans un centre d'appels, annoncent un prix d'appel au téléphone et envoient un sous-traitant que vous ne reverrez jamais.
              </p>
              <p style={{ color: "var(--gray-600)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "16px" }}>
                Chez Nino Plomberie, je décroche moi-même au <strong>06 50 57 96 20</strong> et c'est moi qui viens chez vous. Le devis est signé avant le premier coup de clé : si le prix change, c'est moi qui vous appelle, pas l'inverse.
              </p>
              <p style={{ color: "var(--gray-600)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 0 }}>
                Avec plus de 20 ans à Muret (11 rue François Arago), je connais les canalisations en plomb ou en cuivre des maisons anciennes comme les réseaux PER et multicouche des lotissements récents.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="grid-responsive-1col">
              {garanties.map(({ icon: Icon, titre, desc }) => (
                <div key={titre} className="feature-card">
                  <div className="feature-card-top">
                    <span className="feature-card-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                  </div>
                  <h3>{titre}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2 #8 — Les communes où j'interviens */}
      <section style={{ background: "var(--sand-50)", padding: "clamp(48px, 8vw, 88px) 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "48px", alignItems: "start" }} className="grid-responsive-1col">
            <div>
              <span className="badge-brand" style={{ marginBottom: "14px" }}>Zone d'intervention 31</span>
              <h2 className="section-title" style={{ marginBottom: "16px" }}>
                Les communes où j'interviens
              </h2>
              <p style={{ color: "var(--gray-600)", fontSize: "1.03rem", lineHeight: 1.75, marginBottom: "16px" }}>
                Depuis mon atelier du 11 rue François Arago, j'interviens en priorité comme{" "}
                <Link to="/intervention/$ville" params={{ ville: "muret" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>plombier à Muret</Link>{" "}
                et dans toutes les communes du{" "}
                <Link to="/zones/muretain" style={{ color: "var(--brand-600)", fontWeight: 700 }}>Muretain</Link>{" "}
                (<Link to="/intervention/$ville" params={{ ville: "eaunes" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Eaunes</Link>,{" "}
                <Link to="/intervention/$ville" params={{ ville: "seysses" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Seysses</Link>,{" "}
                <Link to="/intervention/$ville" params={{ ville: "frouzins" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Frouzins</Link>,{" "}
                <Link to="/intervention/$ville" params={{ ville: "saint-lys" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Saint-Lys</Link>,{" "}
                <Link to="/intervention/$ville" params={{ ville: "carbonne" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Carbonne</Link>).
              </p>
              <p style={{ color: "var(--gray-600)", fontSize: "1.03rem", lineHeight: 1.75, marginBottom: "20px" }}>
                Par l'A64 et la rocade, je me déplace quotidiennement comme{" "}
                <Link to="/intervention/$ville" params={{ ville: "toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>plombier à Toulouse</Link>{" "}
                (Saint-Cyprien, les Minimes, le Capitole, Rangueil) ainsi qu'à{" "}
                <Link to="/intervention/$ville" params={{ ville: "colomiers" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>Colomiers</Link>,{" "}
                <Link to="/intervention/$ville" params={{ ville: "blagnac" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>Blagnac</Link>,{" "}
                <Link to="/intervention/$ville" params={{ ville: "balma" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>Balma</Link>,{" "}
                <Link to="/intervention/$ville" params={{ ville: "tournefeuille" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>Tournefeuille</Link>,{" "}
                <Link to="/intervention/$ville" params={{ ville: "cugnaux" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>Cugnaux</Link>{" "}
                et{" "}
                <Link to="/intervention/$ville" params={{ ville: "portet-sur-garonne" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>Portet-sur-Garonne</Link>.
              </p>

              {/* Questions fréquentes intégrées sous H3 pour respecter la hiérarchie H2 */}
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {HOME_FAQ.map((f) => (
                  <details key={f.q} style={{ background: "var(--white)", borderRadius: "10px", padding: "14px 18px", border: "1px solid var(--gray-200)" }}>
                    <summary style={{ cursor: "pointer", fontWeight: 700, color: "var(--ink-950)", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
                      <h3 style={{ fontSize: "0.98rem", fontWeight: 700, margin: 0 }}>{f.q}</h3>
                      <ChevronDown size={16} aria-hidden="true" />
                    </summary>
                    <p style={{ color: "var(--gray-600)", fontSize: "0.94rem", lineHeight: 1.7, margin: "10px 0 0" }}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-sm)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--gray-200)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "var(--brand-50)",
                    border: "1px solid var(--brand-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin size={20} color="var(--brand-500)" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--ink-950)", fontSize: "1rem" }}>
                    Muret, Muretain & Toulouse
                  </div>
                  <div style={{ color: "var(--gray-500)", fontSize: "0.85rem", fontWeight: 500 }}>
                    11 rue François Arago, 31600 Muret
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  { nom: "Muret", slug: "muret" },
                  { nom: "Toulouse", slug: "toulouse" },
                  { nom: "Colomiers", slug: "colomiers" },
                  { nom: "Blagnac", slug: "blagnac" },
                  { nom: "Balma", slug: "balma" },
                  { nom: "Carbonne", slug: "carbonne" },
                  { nom: "Eaunes", slug: "eaunes" },
                  { nom: "Tournefeuille", slug: "tournefeuille" },
                  { nom: "Portet-sur-Garonne", slug: "portet-sur-garonne" },
                  { nom: "Saint-Lys", slug: "saint-lys" },
                  { nom: "Seysses", slug: "seysses" },
                  { nom: "Frouzins", slug: "frouzins" },
                  { nom: "Cugnaux", slug: "cugnaux" },
                ].map((c) => (
                  <Link
                    key={c.slug}
                    to="/intervention/$ville"
                    params={{ ville: c.slug }}
                    style={{
                      padding: "6px 13px",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      background: "var(--sand-50)",
                      color: "var(--ink-800)",
                      border: "1px solid var(--gray-200)",
                      textDecoration: "none",
                    }}
                  >
                    Plombier {c.nom}
                  </Link>
                ))}
                <Link
                  to="/zones"
                  style={{
                    padding: "6px 13px",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    background: "var(--brand-50)",
                    color: "var(--brand-600)",
                    border: "1px solid var(--brand-200)",
                    textDecoration: "none",
                  }}
                >
                  Toutes les communes du 31 →
                </Link>
              </div>

              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "var(--sand-50)",
                  border: "1px solid var(--gray-200)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Zap size={20} color="var(--cta-500)" />
                <span style={{ color: "var(--gray-600)", fontSize: "0.875rem", fontWeight: 500 }}>
                  Dépannage d'urgence{" "}
                  <strong style={{ color: "var(--cta-600)" }}>24h/24 et 7j/7</strong> au 06 50 57 96 20
                </span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .grid-responsive-1col { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* H2 #9 — Une urgence maintenant ? */}
      <section
        style={{
          background: "var(--brand-500)",
          padding: "clamp(48px, 8vw, 80px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="section-container"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,0,0,0.12)",
              color: "rgba(255,255,255,0.9)",
              borderRadius: "var(--radius-pill)",
              padding: "6px 16px",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Disponible 24h/24 et 7j/7
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "var(--white)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Une urgence maintenant ?
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto 32px",
              fontWeight: 400,
            }}
          >
            Une fuite non traitée attaque les cloisons et le plancher, et la facture ne concerne plus la plomberie. Appelez-moi directement : devis gratuit avant travaux.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              justifyContent: "center",
            }}
          >
            <a
              href="tel:0650579620"
              className="btn-cta"
              style={{ padding: "16px 36px", fontSize: "1.1rem" }}
            >
              <Phone size={22} />
              Appeler Nino · 06 50 57 96 20
            </a>
            <Link
              to="/contact"
              className="btn-ghost"
              style={{ padding: "16px 32px" }}
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
