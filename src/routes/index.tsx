// src/routes/index.tsx — Homepage v2
import { createFileRoute, Link } from "@tanstack/react-router"
import { Phone, Shield, Clock, Star, MapPin, Droplets, Flame, Wind, Wrench, ArrowRight, CheckCircle, ChevronRight, Zap, Award, History, ShieldCheck } from "lucide-react"

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
    href: "/services/remplacement-robinetterie",
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
          HERO — Premium Editorial
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--ink-950)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          paddingTop: "60px",
        }}
      >
        {/* Abstract shapes / lighting */}
        <div style={{ position: "absolute", top: "0%", right: "10%", width: "60vw", height: "60vw", background: "radial-gradient(circle, rgba(194,97,49,0.08) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(58,75,102,0.15) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
        
        {/* Background Image Element - Asymmetrical */}
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "68%",
          backgroundImage: "url('/hero-plombier.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
          opacity: 0.9,
          zIndex: 1
        }}>
          {/* Overlay gradient on image */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, var(--ink-950) 0%, rgba(10,15,24,0.4) 50%, rgba(10,15,24,0.1) 100%)"
          }}/>
        </div>

        <div style={{ position: "relative", zIndex: 2, width: "100%", paddingLeft: "clamp(24px, 8vw, 120px)", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: "600px" }}>
            <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div className="deco-line" style={{ width: "24px" }} />
              <span style={{ color: "var(--brand-400)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.8rem", fontWeight: 700 }}>
                Artisan Indépendant • Toulouse
              </span>
            </div>

            <h1
              className="animate-fade-up animate-fade-up-d1"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(3rem, 7vw, 4.8rem)",
                color: "var(--white)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                marginBottom: "20px",
              }}
            >
              Plombier Toulouse —<br />
              <span style={{ fontWeight: 800, color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.9)", backgroundImage: "linear-gradient(135deg, var(--white), rgba(255,255,255,0.7))", WebkitBackgroundClip: "text" }}>l'artisanat d'excellence.</span>
              <br/>
              <span className="text-brand-gradient" style={{ fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>En urgence.</span>
            </h1>

            <p
              className="animate-fade-up animate-fade-up-d2"
              style={{
                color: "var(--gray-400)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "32px",
                maxWidth: "480px",
                fontWeight: 300,
              }}
            >
              Plus qu'un simple dépannage : une véritable expertise technique 
              pour vos installations, avec un service d'urgence <strong>disponible sous 1h</strong> en région toulousaine.
            </p>

            <div
              className="animate-fade-up animate-fade-up-d3"
              style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}
            >
              <a
                href="tel:0650579620"
                className="btn-cta"
                style={{ padding: "14px 28px", fontSize: "1rem" }}
              >
                <Phone size={18} />
                Intervention urgente
              </a>
              <Link
                to="/contact"
                className="btn-secondary"
                style={{ padding: "14px 28px", fontSize: "1rem", color: "white", borderColor: "rgba(255,255,255,0.2)" }}
              >
                Demander un devis
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Integrated Directly in Hero */}
        <div style={{ 
          position: "relative", 
          zIndex: 10, 
          width: "100%", 
          padding: "0 24px 24px"
        }}>
          <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
            {/* Top row with 4 columns */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {/* Stat 1 */}
              <div style={{ padding: "16px", textAlign: "center", position: "relative" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <Clock size={16} color="white" />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: "white", lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.04em" }}>
                  &lt; 1h
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>
                  Délai d'intervention
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                  Prise en charge immédiate
                </div>
                <div className="stat-divider" style={{ position: "absolute", right: 0, top: "20%", bottom: "20%", width: "1px", background: "rgba(255,255,255,0.1)" }} />
              </div>

              {/* Stat 2 */}
              <div style={{ padding: "16px", textAlign: "center", position: "relative" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <Star size={16} color="white" />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: "white", lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.04em" }}>
                  200+
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>
                  Avis certifiés
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                  <Star size={10} color="#f59e0b" fill="#f59e0b" />
                  Note 4.9/5 · Google
                </div>
                <div className="stat-divider" style={{ position: "absolute", right: 0, top: "20%", bottom: "20%", width: "1px", background: "rgba(255,255,255,0.1)" }} />
              </div>

              {/* Stat 3 */}
              <div style={{ padding: "16px", textAlign: "center", position: "relative" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <MapPin size={16} color="white" />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: "white", lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.04em" }}>
                  31
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>
                  Haute-Garonne
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                  Rayon d'action dédié
                </div>
                <div className="stat-divider" style={{ position: "absolute", right: 0, top: "20%", bottom: "20%", width: "1px", background: "rgba(255,255,255,0.1)" }} />
              </div>

              {/* Stat 4 */}
              <div style={{ padding: "16px", textAlign: "center", position: "relative" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <Shield size={16} color="white" />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: "white", lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.04em" }}>
                  2 <span style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)" }}>ans</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>
                  Garantie intégrale
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                  Pièces & main-d'œuvre
                </div>
              </div>
            </div>

          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .stat-divider { display: none; }
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
                  <p style={{ color: "var(--gray-500)", fontSize: "1rem", lineHeight: 1.6 }}>{desc}</p>
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
            {services.map(({ icon: Icon, titre, desc, href, imgUrl, couleur, bg }, index) => (
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
                      width: "clamp(110px, 35vw, 180px)",
                      height: "clamp(110px, 35vw, 180px)",
                      flexShrink: 0,
                      position: "relative", 
                      zIndex: 2,
                      marginBottom: "16px"
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
                      border: `1px solid ${couleur}22`
                    }}>
                      <Icon size={40} strokeWidth={2} />
                    </div>
                  )}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ display: "inline-block", background: "var(--cta-500)", color: "white", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", padding: "4px 12px", borderRadius: "100px", marginBottom: "clamp(12px, 3vw, 16px)" }}>
                      URGENCE 24/7
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.2rem, 4.5vw, 1.6rem)", color: "var(--ink-950)", marginBottom: "12px", letterSpacing: "-0.02em" }}>{titre}</h3>
                    <p style={{ color: "var(--gray-600)", fontSize: "clamp(0.9rem, 3.5vw, 1.05rem)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
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
          background: "var(--ink-800)",
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
              <span className="badge-brand" style={{ marginBottom: "16px" }}>
                Zone de déplacement
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                  color: "var(--white)",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                Toulouse &<br />
                <span style={{ color: "var(--brand-100)" }}>Haute-Garonne</span>
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                  fontSize: "0.95rem",
                }}
              >
                Basé à Toulouse, j'interviens dans toute la{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Haute-Garonne (31)</strong> —
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
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <CheckCircle
                      size={18}
                      color="var(--brand-100)"
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
                background: "var(--ink-700)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "32px",
                minHeight: "340px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "rgba(40, 75, 122, 0.12)",
                    border: "1px solid rgba(40, 75, 122, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin size={20} color="var(--brand-100)" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--white)", fontSize: "1rem" }}>
                    Rayon d'intervention
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>
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
                      background: i === 11 ? "rgba(255, 255, 255, 0.15)" : "rgba(255,255,255,0.06)",
                      color: i === 11 ? "var(--white)" : "rgba(255,255,255,0.7)",
                      border: i === 11
                        ? "1px solid rgba(255, 255, 255, 0.3)"
                        : "1px solid rgba(255,255,255,0.08)",
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
                  background: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.18)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Zap size={20} color="var(--cta-400)" />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem" }}>
                  Délai moyen d'arrivée :{" "}
                  <strong style={{ color: "var(--cta-400)" }}>38 minutes</strong>
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
                    fontSize: "0.9rem",
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
        {/* Texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(0,0,0,0.04) 20px,
              rgba(0,0,0,0.04) 21px
            )`,
          }}
        />


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
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.05rem",
              marginBottom: "40px",
              maxWidth: "460px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
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
                background: "var(--ink-900)",
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
