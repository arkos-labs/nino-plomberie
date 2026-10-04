// src/routes/index.tsx — Homepage v2
import { createFileRoute, Link } from "@tanstack/react-router"
import { Fragment } from "react"
import { realisations } from "../data/realisations"
import { FaqSection } from "../components/FaqSection"
import { Gallery } from "../components/Gallery"
import { ProcessSteps } from "../components/ProcessSteps"
import { BUSINESS, pageHead, type Faq } from "../lib/site"
import { Phone, Shield, Clock, Star, MapPin, Droplets, Flame, Wind, Wrench, ArrowRight, ArrowUpRight, CheckCircle, ChevronRight, Zap, Award, History, ShieldCheck, Calendar } from "lucide-react"

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Plombier 31 Muret & Toulouse 24h/24 — Nino Plomberie",
      description:
        "Plombier chauffagiste à Muret (31) depuis plus de 20 ans. Dépannage 24h/24 à Toulouse : fuite d'eau, débouchage WC, chauffe-eau. Devis gratuit ☎ 06 50 57 96 20",
      path: "/",
    }),
  component: HomePage,
})

// Avis réels tirés de la fiche Google Business
const avis = [
  {
    nom: "Cynthia M.",
    note: 5,
    texte: "Je recommande Nino sans aucune hésitation. Venu réparer une fuite de l'évier et raccorder un lave-linge, Nino a été très gentil, rapide et efficace. Il s'adapte très rapidement face aux problèmes inattendus rencontrés. C'est un vrai expert dans son domaine.",
    service: "Fuite d'eau",
  },
  {
    nom: "Louis Q.",
    note: 5,
    texte: "Cumulus tombé en panne le samedi, j'ai téléphoné à Nino le dimanche matin à 9h, m'a répondu gentiment pour une visite en début d'après-midi, changement du cumulus aussitôt dit aussitôt fait car il en avait un en stock. Travail soigné.",
    service: "Chauffe-eau",
  },
  {
    nom: "Coralie L.",
    note: 5,
    texte: "Je recommande Nino sans hésiter, que j'ai contacté pour venir déboucher mon évier et réparer une fuite. Il est arrivé dans l'heure qui a suivi mon appel et a été très efficace.",
    service: "Débouchage",
  },
  {
    nom: "Nicolas N.",
    note: 5,
    texte: "Merci Nino pour votre réactivité et votre qualité de travail. Très disponible pour répondre à l'urgence de la situation. Je recommande vivement.",
    service: "Dépannage",
  },
]

const HOME_FAQ: Faq[] = [
  {
    q: "Quels travaux réalise Nino Plomberie ?",
    a: "Nino Plomberie assure le dépannage plomberie (fuite d'eau, débouchage de WC, évier ou canalisation, panne de chauffe-eau), le chauffage, la robinetterie et les sanitaires, la création et la rénovation complète de salles de bain, la plomberie neuve et la pose de cuisines.",
  },
  {
    q: "Intervenez-vous en urgence la nuit et le week-end ?",
    a: "Oui. Nino Plomberie est joignable 24h/24 et 7j/7, y compris le week-end et les jours fériés, au 06 50 57 96 20. Le délai dépend de votre commune et des interventions en cours : il vous est indiqué au téléphone.",
  },
  {
    q: "Dans quelles communes intervenez-vous ?",
    a: "L'entreprise est basée à Muret (31600) et intervient à Toulouse et dans toute la Haute-Garonne : Portet-sur-Garonne, Cugnaux, Seysses, Frouzins, Fonsorbes, Tournefeuille, Colomiers, Blagnac, Plaisance-du-Touch, Villeneuve-Tolosane, Balma, Ramonville-Saint-Agne, Castanet-Tolosan et les communes voisines.",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui. Le devis est gratuit et le prix est annoncé et validé avec vous avant le début des travaux. Vous pouvez aussi demander un devis en ligne via la page contact, en joignant une photo du problème.",
  },
  {
    q: "Les réparations sont-elles garanties ?",
    a: "Oui, les réparations sont garanties 2 ans, pièces et main-d'œuvre.",
  },
  {
    q: "Comment trouver un plombier fiable à Muret ou à Toulouse ?",
    a: "Privilégiez un artisan plombier local, avec une adresse réelle et des avis clients vérifiables. Nino Plomberie est installé au 11 Rue François Arago à Muret depuis plus de 20 ans, noté 4,4/5 sur Google (78 avis), et intervient à Toulouse et dans toute la Haute-Garonne. Le devis est gratuit et validé avec vous avant les travaux, et les réparations sont garanties 2 ans. Pour un dépannage plomberie urgent, la ligne est ouverte 24h/24 et 7j/7 au 06 50 57 96 20.",
  },
  {
    q: "Que faire en attendant le plombier en cas de fuite d'eau ?",
    a: "Coupez l'arrivée d'eau au robinet d'arrêt de la pièce ou au compteur général. Si l'eau approche des prises ou d'appareils électriques, coupez le disjoncteur. Épongez et protégez vos meubles, puis prenez des photos des dégâts pour votre assurance.",
  },
  {
    q: "Réalisez-vous des salles de bain complètes ?",
    a: "Oui. Nino Plomberie crée ou rénove des salles de bain de A à Z : plomberie, cloisons, placo, carrelage, douche à l'italienne ou receveur extra-plat, meubles vasque et finitions. Ces chantiers sont réalisés avec un second professionnel pour garantir le résultat et les délais.",
  },
]

const services = [
  {
    icon: Droplets,
    titre: "Fuite d'eau",
    desc: "Détection et réparation rapide. Chaque minute compte.",
    href: "/services/fuite-d-eau",
    imgUrl: "/services/fuite-eau.png",
    urgence: true,
    couleur: "#3b82f6",
    bg: "rgba(3,105,161,0.08)",
  },
  {
    icon: Flame,
    titre: "Chauffe-eau & Ballon",
    desc: "Installation, remplacement et dépannage tous types.",
    href: "/services/chauffe-eau",
    imgUrl: "/services/chauffe-eau.png",
    urgence: false,
    couleur: "#f97316",
    bg: "rgba(194,65,12,0.08)",
  },
  {
    icon: Wind,
    titre: "Débouchage",
    desc: "WC, évier, douche, baignoire et canalisations, sans produit agressif.",
    href: "/services/debouchage",
    imgUrl: "/services/debouchage.png",
    urgence: true,
    couleur: "#60a5fa",
    bg: "rgba(4,120,87,0.08)",
  },
  {
    icon: Wrench,
    titre: "Robinetterie",
    desc: "Pose et remplacement robinets, WC, douche, baignoire.",
    href: "/services/robinetterie-sanitaires",
    imgUrl: "/services/robinetterie.png",
    urgence: false,
    couleur: "#3b82f6",
    bg: "rgba(109,40,217,0.08)",
  },
]

const stats = [
  { val: "24/7", label: "Disponibilité", sub: "ouvert 24h/24" },
  { val: "78", label: "Avis Google", sub: "note 4,4/5" },
  { val: "31", label: "Haute-Garonne", sub: "couverte" },
  { val: "2 ans", label: "Garantie", sub: "pièces & MO" },
]

const garanties = [
  { icon: History, titre: "Réponse immédiate", desc: "Joignable 7j/7, 24h/24" },
  { icon: ShieldCheck, titre: "Garantie 2 ans", desc: "Sur toutes les réparations, pièces et main-d'œuvre" },
  { icon: Award, titre: "Artisan local", desc: "Basé à Muret, plus de 20 ans d'expérience" },
  { icon: CheckCircle, titre: "Devis transparent", desc: "Tarif annoncé avant intervention, aucune surprise" },
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
        paddingTop: "40px",
        paddingBottom: "40px",
        position: "relative",
        overflow: "hidden",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center"
      }}>
        {/* Photo plein fond */}
        <div className="hero-bg-image" style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/realisations/photo-09.jpg')",
          backgroundSize: "cover",
          zIndex: 0,
        }}>
          {/* Overlay dégradé gauche (sombre) vers droite (transparent) pour lisibilité */}
          <div className="hero-overlay" style={{
            position: "absolute",
            inset: 0,
          }} />
        </div>

        <div className="section-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%" }}>

          {/* Badge */}
          <div className="animate-fade-up" style={{ marginBottom: "16px" }}>
            <a href="tel:0650579620" className="page-hero-kicker" style={{ margin: 0 }}>
              Urgence ? Appelez directement
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Titre */}
          <h1
            className="animate-fade-up animate-fade-up-d1"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#fff",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
              maxWidth: "560px",
            }}
          >
            Plombier Muret & Toulouse —{" "}
            <span style={{ color: "var(--cta-400)" }}>
              Urgence & Dépannage 24h/7j
            </span>
          </h1>

          {/* Sous-titre et Widget */}
          <div style={{ position: "relative", display: "inline-block", maxWidth: "560px", marginBottom: "24px" }}>
            <p
              className="animate-fade-up animate-fade-up-d2"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: "460px",
                margin: "0 0 24px",
                fontWeight: 400,
              }}
            >
              Artisan plombier basé à Muret depuis plus de 20 ans, j'interviens à Toulouse et dans toute la Haute-Garonne pour vos urgences, dépannages et travaux. Disponible <strong style={{ color: "#fff" }}>24h/24, 7j/7</strong>.
            </p>


          </div>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-d3" style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "flex-start", marginBottom: "24px" }}>
            <a href="tel:0650579620" className="btn-cta" style={{ padding: "14px 28px", fontSize: "1rem" }}>
              <Phone size={18} />
              Intervention urgente
            </a>
            <Link to="/rendez-vous" className="btn-ghost" style={{ padding: "14px 28px", fontSize: "1rem" }}>
              <Calendar size={18} />
              Prendre Rendez-vous
            </Link>
          </div>

          {/* Badge avis Google — étoiles à la note réelle, lien vers la fiche */}
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="g-badge animate-fade-up animate-fade-up-d3"
            aria-label="Note Google : 4,4 sur 5, 78 avis. Voir les avis"
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
              <span className="g-note">78 avis clients ·<span className="g-link">Voir les avis <ArrowUpRight size={13} /></span></span>
            </span>
          </a>
          <style>{`
            .g-badge {
              display: inline-flex; align-items: center; gap: 18px;
              margin-bottom: 32px;
              text-decoration: none; white-space: nowrap;
              text-shadow: 0 2px 12px rgba(0,0,0,0.45);
              transition: scale .2s ease;
            }
            .g-badge:hover { scale: 1.03; }
            /* Grand écran : à droite, centré verticalement dans le hero */
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

          {/* Chiffres clés — frise : ligne dégradée, nœuds, valeurs alignées sous la ligne */}
          <div className="kf animate-fade-up animate-fade-up-d4">
            <div className="kf-line" aria-hidden="true" />
            {[
              { val: "24/7",  label: "Disponible",    sub: "Ouvert 24h/24",          c: "#F97316" },
              { val: "78",    label: "Avis Google",   sub: "Note 4,4/5",             c: "#F6B17A" },
              { val: "31",    label: "Haute-Garonne", sub: "Rayon d'action dédié",   c: "#B9CCE3" },
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
          }
          .kf-item.is-top { grid-row: 1; align-self: end; padding-bottom: 20px; }
          .kf-item.is-bottom { grid-row: 3; align-self: start; padding-top: 20px; }
          .kf-item::after {
            content: ''; position: absolute; width: 3px; height: 20px; background: var(--c);
          }
          .kf-item { position: relative; }
          .kf-item.is-top::after { bottom: 0; }
          .kf-item.is-bottom::after { top: 0; }
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

      {/* ═══════════════════════════════════════════════════════════════════
          EN BREF — présentation factuelle (SEO / moteurs IA)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--sand-50)", padding: "clamp(48px, 8vw, 88px) 0" }} aria-labelledby="enbref-title">
        <div className="section-container">
          <div className="enbref-grid">
            <div>
              <span className="badge-brand" style={{ marginBottom: "14px" }}>Nino Plomberie en bref</span>
              <h2 id="enbref-title" className="section-title" style={{ marginBottom: "18px" }}>
                Votre plombier à Muret et Toulouse depuis plus de 20 ans
              </h2>
              <p className="enbref-p">
                <strong>Nino Plomberie est un artisan plombier-chauffagiste installé à Muret (31600), en Haute-Garonne.</strong>{" "}
                Avec plus de 20 ans d'expérience, il intervient 24h/24 et 7j/7 pour les dépannages urgents
                (fuite d'eau, WC ou canalisation bouchés, chauffe-eau en panne) et réalise des travaux plus
                importants : création de salle de bain, remplacement de cumulus, pose de sanitaires et de cuisines.
              </p>
              <p className="enbref-p">
                L'entreprise couvre Muret, Toulouse et l'agglomération toulousaine : Portet-sur-Garonne, Cugnaux,
                Seysses, Frouzins, Tournefeuille, Colomiers, Blagnac et toute la Haute-Garonne. Chaque intervention
                commence par un diagnostic et un devis gratuit, validé avec vous avant les travaux.
              </p>
              <p className="enbref-p" style={{ marginBottom: 0 }}>
                Pour les salles de bain, Nino travaille avec un second professionnel afin de tout prendre en charge
                de A à Z : plomberie, cloisons, placo, carrelage et finitions.
              </p>
            </div>

            <dl className="enbref-facts">
              {[
                ["Basé à", "Muret (31600)"],
                ["Disponibilité", "24h/24, 7j/7"],
                ["Expérience", "Plus de 20 ans"],
                ["Garantie", "2 ans pièces et main-d'œuvre"],
                ["Devis", "Gratuit, avant intervention"],
                ["Téléphone", "06 50 57 96 20"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <style>{`
          .enbref-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: start; }
          .enbref-p { color: var(--gray-600); font-size: 1.05rem; line-height: 1.8; margin: 0 0 16px; }
          .enbref-facts {
            margin: 0;
            background: var(--sand-100);
            border-radius: var(--radius-sm);
            padding: 8px 24px;
          }
          .enbref-facts > div {
            display: flex; justify-content: space-between; gap: 16px;
            padding: 14px 0;
            border-bottom: 1px solid var(--gray-200);
          }
          .enbref-facts > div:last-child { border-bottom: none; }
          .enbref-facts dt { color: var(--gray-500); font-size: 0.9rem; }
          .enbref-facts dd { margin: 0; color: var(--ink-950); font-weight: 700; font-size: 0.92rem; text-align: right; }
          @media (max-width: 860px) { .enbref-grid { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GARANTIES — Premium
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "center" }} className="grid-responsive-1col">
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.8rem)", color: "var(--ink-950)", lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.03em" }}>
                Mon engagement<br/>
                <span className="text-brand-gradient">artisan.</span>
              </h2>
              <p style={{ color: "var(--gray-600)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "32px", maxWidth: "480px" }}>
                L'artisanat, c'est avant tout la confiance. Je m'engage à fournir un travail soigné, durable, et au juste prix. Aucun compromis sur la qualité des matériaux ni sur la finition de mes chantiers.
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

      {/* ═══════════════════════════════════════════════════════════════════
          SERVICES — Asymétrique
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--sand-50)", padding: "clamp(60px, 10vw, 120px) 0", position: "relative" }}>
        <div className="section-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "60px", flexWrap: "wrap", gap: "24px" }}>
             <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--ink-950)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  Domaines<br/>d'intervention
                </h2>
             </div>
             <Link to="/services" className="btn-dark" style={{ marginTop: "16px" }}>
               Voir tous les services <ArrowRight size={16} />
             </Link>
          </div>

          <div className="feature-grid">
            {services.map(({ icon: Icon, titre, desc, href, urgence }) => (
              <Link key={href} to={href as "/services"} className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-card-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                  {urgence && <span className="feature-card-tag">Urgence 24/7</span>}
                </div>
                <h3>{titre}</h3>
                <p>{desc}</p>
                <span className="feature-card-btn">En savoir plus <ArrowUpRight size={14} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>

          <p style={{ marginTop: "36px", textAlign: "center", color: "var(--gray-600)", fontSize: "1rem", lineHeight: 1.7 }}>
            Également :{" "}
            <Link to="/services/$slug" params={{ slug: "renovation-salle-de-bain" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>création et rénovation de salle de bain</Link>,{" "}
            <Link to="/services/$slug" params={{ slug: "chauffage-chaudiere" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>chauffage et chaudière</Link>,{" "}
            <Link to="/services/$slug" params={{ slug: "installation-plomberie-neuve" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plomberie neuve</Link>{" "}
            et pose de cuisine.
          </p>
        </div>
      </section>

      <ProcessSteps />

      {/* ═══════════════════════════════════════════════════════════════════
          ZONE D'INTERVENTION — split layout
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--white)",
          padding: "clamp(48px, 8vw, 88px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="grid-responsive-1col"
          >
            {/* Texte */}
            <div>
              <span className="badge-dark" style={{ marginBottom: "16px", background: "var(--gray-100)", color: "var(--ink-700)", border: "none" }}>
                Zone de déplacement
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                  color: "var(--ink-950)",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                Toulouse &<br />
                <span style={{ color: "var(--brand-500)" }}>Haute-Garonne</span>
              </h2>

              <p
                style={{
                  color: "var(--gray-600)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  fontSize: "1.05rem",
                }}
              >
                Basé à Muret, j'interviens dans toute la{" "}
                <strong style={{ color: "var(--ink-900)" }}>Haute-Garonne (31)</strong> —
                Toulouse, Blagnac, Colomiers, Balma, Tournefeuille…
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "32px",
                }}
              >
                {[
                  "Intervention rapide en urgence",
                  "Disponible week-end et jours fériés",
                  "Devis gratuit et engagement de prix avant intervention",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "var(--ink-800)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    <CheckCircle
                      size={18}
                      color="var(--brand-500)"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Carte visuelle */}
            <div
              style={{
                background: "var(--sand-100)",
                borderRadius: "var(--radius-sm)",
                padding: "32px",
                minHeight: "340px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
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
                    Rayon d'intervention
                  </div>
                  <div style={{ color: "var(--gray-500)", fontSize: "0.85rem", fontWeight: 500 }}>
                    Agglomération Toulousaine
                  </div>
                </div>
              </div>

              {/* Communes pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  "Toulouse", "Blagnac", "Colomiers", "Muret",
                  "Balma", "Saint-Orens", "Tournefeuille", "Castanet",
                  "Ramonville", "Labège", "Portet", "Toute la Haute-Garonne",
                ].map((v, i) => (
                  <span
                    key={v}
                    style={{
                      padding: "5px 13px",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "0.8rem",
                      fontWeight: i === 11 ? 700 : 500,
                      background: i === 11 ? "var(--brand-50)" : "var(--white)",
                      color: i === 11 ? "var(--brand-600)" : "var(--gray-600)",
                      border: i === 11
                        ? "1px solid var(--brand-200)"
                        : "1px solid var(--gray-200)",
                    }}
                  >
                    {i !== 11 && <span style={{ marginRight: "4px", opacity: 0.5 }}>📍</span>}
                    {v}
                  </span>
                ))}
              </div>

              {/* Stat urgence */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "var(--white)",
                  border: "1px solid var(--gray-200)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Zap size={20} color="var(--cta-500)" />
                <span style={{ color: "var(--gray-600)", fontSize: "0.875rem", fontWeight: 500 }}>
                  Joignable{" "}
                  <strong style={{ color: "var(--cta-600)" }}>24h/24, 7j/7</strong>
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

      {/* ═══════════════════════════════════════════════════════════════════
          RÉALISATIONS
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--white)", padding: "clamp(48px, 8vw, 88px) 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge-brand" style={{ marginBottom: "14px" }}>
              Réalisations
            </span>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>
              Mes derniers chantiers
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "0.95rem" }}>
              Salles de bain, douches, robinetterie et cuisines réalisées par Nino Plomberie.
            </p>
          </div>

          {/* La double vasque est déjà en fond du hero : on ne la répète pas ici */}
          <Gallery items={realisations.filter((r) => r.src !== "/realisations/photo-09.jpg")} filters />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          AVIS CLIENTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--sand-50)", padding: "clamp(48px, 8vw, 88px) 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="badge-brand" style={{ marginBottom: "14px" }}>
              Témoignages
            </span>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>
              Ils m'ont fait confiance
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "var(--gray-500)",
                fontSize: "0.9rem",
              }}
            >
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              4,4/5 · 78 avis Google
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
              <div
                key={a.nom}
                className="card"
                style={{ padding: "28px" }}
              >
                {/* Header avis */}
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

                {/* Texte */}
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

                {/* Footer */}
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
                    <div
                      style={{
                        fontWeight: 700,
                        color: "var(--ink-900)",
                        fontSize: "0.875rem",
                      }}
                    >
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

      <FaqSection
        faqs={HOME_FAQ}
        title="Vos questions sur Nino Plomberie"
        intro="Les réponses aux questions les plus posées avant d'appeler un plombier à Muret ou Toulouse."
        background="var(--white)"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          CTA URGENCE — bande dramatique
      ═══════════════════════════════════════════════════════════════════ */}
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

            Disponible maintenant
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
            Une urgence plomberie ?
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 32px",
              fontWeight: 400,
            }}
          >
            Une fuite non traitée peut causer des milliers d'euros de dégâts
            en quelques heures. N'attendez pas.
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
              06 50 57 96 20
            </a>
            <Link
              to="/contact"
              className="btn-ghost"
              style={{ padding: "16px 32px" }}
            >
              Contactez-nous →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
