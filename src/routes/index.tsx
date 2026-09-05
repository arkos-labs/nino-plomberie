// src/routes/index.tsx — Homepage v2
import { createFileRoute, Link } from "@tanstack/react-router"
import { Phone, Shield, Clock, Star, MapPin, Droplets, Flame, Wind, Wrench, ArrowRight, CheckCircle, ChevronRight, Zap, Award, History, ShieldCheck, Calendar } from "lucide-react"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nino Plomberie 31 — Plombier Toulouse Urgence 24h/7j" },
      {
        name: "description",
        content:
          "Plombier à Toulouse et Haute-Garonne. Intervention urgence en moins d'1h : fuite d'eau, chauffe-eau, débouchage. Devis gratuit. ☎ 06 50 57 96 20",
      },
    ],
    links: [
      { rel: "canonical", href: "https://ninoplomberie31.fr/" },
    ],
  }),
  component: HomePage,
})

const avis = [
  {
    nom: "Marie-Claire D.",
    ville: "Colomiers",
    note: 5,
    texte: "Fuite sous évier réparée en moins de 45 min. Arrivée super rapide, très professionnel et propre. Prix honnête, je recommande sans hésiter.",
    date: "Il y a 2 semaines",
    service: "Fuite d'eau",
  },
  {
    nom: "Pierre-Antoine L.",
    ville: "Blagnac",
    note: 5,
    texte: "Chauffe-eau en panne le dimanche matin, appel à 8h, intervention à 10h. Travail impeccable. L'appli de suivi en temps réel c'est top.",
    date: "Il y a 1 mois",
    service: "Chauffe-eau",
  },
  {
    nom: "Sandrine R.",
    ville: "Toulouse",
    note: 5,
    texte: "Devis en ligne vraiment pratique avant le déplacement. Rénovation salle de bain terminée dans les délais. Parfait.",
    date: "Il y a 3 semaines",
    service: "Rénovation",
  },
  {
    nom: "Jacques M.",
    ville: "Muret",
    note: 4,
    texte: "WC bouché un samedi soir. Présent en 1h, débouchage efficace. Service rapide et propre, même le week-end.",
    date: "Il y a 5 jours",
    service: "Débouchage",
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
    desc: "WC, évier, douche, fosse septique — furet ou hydrocurage.",
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
  { val: "<1h", label: "Délai d'intervention", sub: "en urgence" },
  { val: "200+", label: "Avis Google", sub: "note 4.9/5" },
  { val: "31", label: "Haute-Garonne", sub: "couverte" },
  { val: "2 ans", label: "Garantie", sub: "pièces & MO" },
]

const garanties = [
  { icon: History, titre: "Réponse immédiate", desc: "Décroché en moins de 3 sonneries — 7j/7, 24h/24" },
  { icon: ShieldCheck, titre: "Garantie 2 ans", desc: "Sur toutes les réparations, pièces et main-d'œuvre" },
  { icon: Award, titre: "Artisan RGE certifié", desc: "Qualifié pour les aides d'État et MaPrimeRénov'" },
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
        paddingTop: "64px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Photo plein fond */}
        <div className="hero-bg-image" style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-nino-v2.jpg')",
          backgroundSize: "cover",
          zIndex: 0,
        }}>
          {/* Overlay dégradé gauche (sombre) vers droite (transparent) pour lisibilité */}
          <div className="hero-overlay" style={{
            position: "absolute",
            inset: 0,
          }} />
        </div>

        {/* Widget Avis Google — flottant complètement au bord droit de l'écran */}
        <div className="hidden-mobile animate-fade-up animate-fade-up-d3" style={{
          position: "absolute",
          right: "clamp(200px, 25vw, 450px)",
          top: "40%",
          transform: "translateY(-50%) scale(1.5)",
          transformOrigin: "center right",
          zIndex: 10,
          display: "inline-flex", alignItems: "center", gap: "14px",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "14px 22px",
          borderRadius: "18px",
          whiteSpace: "nowrap",
        }}>
          <div style={{ background: "white", borderRadius: "50%", padding: "4px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: "0.95rem" }}>Excellent</span>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />)}
              </div>
            </div>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>
              <strong style={{ color: "rgba(255,255,255,0.9)" }}>4,5/5</strong> · 75 avis Google
            </span>
          </div>
        </div>

        <div className="section-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%" }}>

          {/* Badge */}
          <div className="animate-fade-up" style={{ marginBottom: "24px" }}>
            <a
              href="tel:0650579620"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "var(--cta-500)", color: "#fff",
                borderRadius: "999px", padding: "5px 18px",
                fontSize: "0.82rem", fontWeight: 700,
                letterSpacing: "0.05em", textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "var(--shadow-cta)",
                transition: "transform 0.2s",
              }}
            >
              <Phone size={13} />
              Urgence ? Appelez directement
              <ArrowRight size={13} />
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
              marginBottom: "24px",
              maxWidth: "560px",
            }}
          >
            Plombier Toulouse —{" "}
            <span style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #FDE68A, #FB923C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Urgence & Dépannage 24h/7j
            </span>
          </h1>

          {/* Sous-titre et Widget */}
          <div style={{ position: "relative", display: "inline-block", maxWidth: "560px", marginBottom: "32px" }}>
            <p
              className="animate-fade-up animate-fade-up-d2"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: "460px",
                margin: "0 0 32px",
                fontWeight: 400,
              }}
            >
              Votre artisan plombier qualifié à Toulouse (31) intervient rapidement pour vos urgences, dépannages et devis d'installation. Disponible <strong style={{ color: "#fff" }}>sous 1h, 7j/7</strong>.
            </p>


          </div>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-d3" style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "flex-start", marginBottom: "64px" }}>
            <a href="tel:0650579620" className="btn-cta" style={{ padding: "14px 28px", fontSize: "1rem" }}>
              <Phone size={18} />
              Intervention urgente
            </a>
            <Link to="/rendez-vous" className="btn-ghost" style={{ padding: "14px 28px", fontSize: "1rem" }}>
              <Calendar size={18} />
              Prendre Rendez-vous
            </Link>
          </div>

          {/* Stats inline */}
          <div className="animate-fade-up animate-fade-up-d4" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "16px",
            overflow: "hidden",
            width: "100%",
            maxWidth: "720px",
          }}>
            {[
              { icon: Clock,  val: "< 1h",  label: "Délai urgence",     sub: "Prise en charge immédiate" },
              { icon: Star,   val: "75+",   label: "Avis Google",       sub: "Note 4,5/5 certifiée" },
              { icon: MapPin, val: "31",     label: "Haute-Garonne",     sub: "Rayon d'action dédié" },
              { icon: Shield, val: "2 ans",  label: "Garantie",          sub: "Pièces & main-d'œuvre" },
            ].map(({ icon: Icon, val, label, sub }) => (
              <div key={label} style={{ padding: "20px 12px", textAlign: "center", background: "rgba(255,255,255,0.04)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "white", lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.03em" }}>
                  {val}
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.8rem", color: "rgba(255,255,255,0.9)", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>{sub}</div>
              </div>
            ))}
          </div>

        </div>
        <style>{`
          @media (max-width: 640px) {
            .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          }
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
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 32px" }} className="grid-responsive-1col">
              {garanties.map(({ icon: Icon, titre, desc }) => (
                <div key={titre}>
                  <div style={{ marginBottom: "16px", color: "var(--brand-600)" }}>
                    {/* Simulation de l'effet gradient sur l'icône */}
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--ink-950)", marginBottom: "8px" }}>{titre}</h3>
                  <p style={{ color: "var(--gray-500)", fontSize: "1.05rem", lineHeight: 1.7 }}>{desc}</p>
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
             <Link to="/services" style={{ background: "var(--ink-800)", color: "white", padding: "12px 24px", borderRadius: "100px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "16px", boxShadow: "0 8px 24px rgba(10, 15, 24, 0.2)" }}>
               Voir tous les services <ArrowRight size={16} />
             </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", paddingTop: "60px" }}>
            {services.map(({ icon: Icon, titre, desc, href, imgUrl, couleur, bg, urgence }, index) => (
              <Link key={href} to={href as "/services"} style={{ textDecoration: "none" }}>
                <div 
                  style={{ 
                    position: "relative",
                    background: "#ffffff",
                    padding: "clamp(20px, 4vw, 40px) clamp(20px, 4vw, 32px)",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "clamp(16px, 3vw, 24px)",
                    border: index === 2 ? "2px solid var(--cta-400)" : "2px solid transparent",
                    boxShadow: index === 2 ? "0 16px 40px rgba(249, 115, 22, 0.15)" : "0 12px 32px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%"
                  }}
                  onMouseEnter={(e) => { 
                    if (index !== 2) {
                      e.currentTarget.style.border = "2px solid rgba(249, 115, 22, 0.3)";
                      e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)";
                    }
                    e.currentTarget.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => { 
                    if (index !== 2) {
                      e.currentTarget.style.border = "2px solid transparent";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                    }
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {imgUrl ? (
                    <div style={{ 
                      width: "clamp(160px, 50vw, 240px)",
                      height: "clamp(160px, 50vw, 240px)",
                      flexShrink: 0,
                      position: "relative", 
                      zIndex: 2,
                      marginBottom: "16px",
                      margin: "0 auto"
                    }}>
                      <img src={imgUrl} alt={`Service ${titre}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                  ) : (
                    <div style={{ 
                      color: couleur, 
                      background: bg,
                      width: "80px",
                      height: "80px",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0, 
                      position: "relative", 
                      zIndex: 2,
                      boxShadow: `0 8px 24px ${couleur}33`,
                      border: `1px solid ${couleur}22`,
                      margin: "0 auto 16px"
                    }}>
                      <Icon size={40} strokeWidth={2} />
                    </div>
                  )}
                  <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ minHeight: "28px", marginBottom: "clamp(8px, 2vw, 12px)" }}>
                      {urgence && (
                        <div style={{ display: "inline-block", background: "var(--cta-500)", color: "white", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", padding: "4px 12px", borderRadius: "100px" }}>
                          URGENCE 24/7
                        </div>
                      )}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.2rem, 4.5vw, 1.6rem)", color: "var(--ink-950)", marginBottom: "12px", letterSpacing: "-0.02em" }}>{titre}</h3>
                    <p style={{ color: "var(--gray-600)", fontSize: "clamp(1rem, 3.5vw, 1.1rem)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                Basé à Toulouse, j'interviens dans toute la{" "}
                <strong style={{ color: "var(--ink-900)" }}>Haute-Garonne (31)</strong> —
                Blagnac, Colomiers, Muret, Balma, Tournefeuille… à moins de 30 km.
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
                  "Moins d'1h en urgence, sans supplément km",
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
                background: "var(--sand-50)",
                border: "1px solid var(--gray-200)",
                borderRadius: "20px",
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
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Zap size={20} color="var(--cta-500)" />
                <span style={{ color: "var(--gray-600)", fontSize: "0.875rem", fontWeight: 500 }}>
                  Délai moyen d'arrivée :{" "}
                  <strong style={{ color: "var(--cta-600)" }}>38 minutes</strong>
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
              4.9/5 · 200+ avis Google vérifiés
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
                      <MapPin size={11} />
                      {a.ville}
                    </div>
                  </div>
                  <div style={{ color: "var(--gray-400)", fontSize: "0.75rem" }}>
                    {a.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "18px 40px",
                background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)",
                color: "var(--white)",
                borderRadius: "var(--radius-md)",
                fontWeight: 800,
                fontSize: "1.1rem",
                fontFamily: "var(--font-display)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)"
                e.currentTarget.style.boxShadow = "0 14px 40px rgba(0,0,0,0.35)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)"
              }}
            >
              <Phone size={22} />
              06 50 57 96 20
            </a>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "17px 32px",
                background: "rgba(255,255,255,0.15)",
                color: "var(--white)",
                borderRadius: "var(--radius-md)",
                fontWeight: 700,
                fontSize: "1rem",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s ease",
              }}
            >
              Contactez-nous →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
