// src/routes/tarifs.tsx — Page tarifs & prix plombier Toulouse
import { createFileRoute, Link } from "@tanstack/react-router"
import { Phone, CheckCircle, Clock, Shield, Calendar, Info, ChevronRight } from "lucide-react"
import { FaqSection } from "../components/FaqSection"
import { PageHero } from "../components/PageHero"
import { pageHead, ldScript, breadcrumbJsonLd, type Faq } from "../lib/site"

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    ...pageHead({
      title: "Tarifs plombier Muret & Toulouse — Devis gratuit | Nino Plomberie",
      description:
        "Prix indicatifs d'un plombier à Muret et Toulouse : fuite d'eau, débouchage, chauffe-eau, robinetterie, chauffage. Devis gratuit et prix validé avant intervention. ☎ 06 50 57 96 20",
      path: "/tarifs",
    }),
    scripts: [
      ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Tarifs", path: "/tarifs" }])),
    ],
  }),
  component: TarifsPage,
})

const grille = [
  {
    categorie: "Urgences & Dépannages",
    couleur: "#ef4444",
    bg: "rgba(239,68,68,0.06)",
    items: [
      { service: "Devis", prix: "Gratuit", detail: "Prix annoncé et validé avant intervention" },
      { service: "Fuite simple (robinet, joint)", prix: "80 – 150 €", detail: "Pièces en sus si nécessaire" },
      { service: "Fuite canalisation encastrée", prix: "150 – 350 €", detail: "Selon accessibilité et longueur" },
      { service: "WC / évier bouché (furet)", prix: "80 – 120 €", detail: "Intervention rapide, sans produit chimique" },
    ],
  },
  {
    categorie: "Chauffe-eau & Ballon",
    couleur: "#f97316",
    bg: "rgba(249,115,22,0.06)",
    items: [
      { service: "Remplacement résistance électrique", prix: "120 – 180 €", detail: "Pièce + main-d'œuvre" },
      { service: "Changement groupe de sécurité", prix: "80 – 130 €", detail: "Pièce + main-d'œuvre" },
      { service: "Pose chauffe-eau électrique 100 L", prix: "590 – 750 €", detail: "Fourniture + pose (entrée de gamme)" },
      { service: "Pose chauffe-eau thermodynamique", prix: "1 200 – 2 000 €", detail: "Fourniture + pose, hors aides" },
      { service: "Main-d'œuvre seule (apport client)", prix: "250 – 400 €", detail: "Dépose + repose + mise en service" },
    ],
  },
  {
    categorie: "Robinetterie & Sanitaires",
    couleur: "#3b82f6",
    bg: "rgba(59,130,246,0.06)",
    items: [
      { service: "Remplacement robinet mitigeur", prix: "80 – 160 €", detail: "Main-d'œuvre, fourniture en sus" },
      { service: "Changement mécanisme WC / flotteur", prix: "60 – 100 €", detail: "Pièce + pose" },
      { service: "Installation WC suspendu (bâti inclus)", prix: "600 – 1 000 €", detail: "Hors habillage" },
      { service: "Pose douche à l'italienne", prix: "400 – 800 €", detail: "Plomberie seule, hors carrelage" },
      { service: "Tarif horaire main-d'œuvre", prix: "60 – 80 €/h", detail: "Devis fourni avant intervention" },
    ],
  },
  {
    categorie: "Chauffage & Chaudière",
    couleur: "#8b5cf6",
    bg: "rgba(139,92,246,0.06)",
    items: [
      { service: "Entretien annuel chaudière gaz", prix: "120 – 180 €", detail: "Conforme décret 2009 (obligatoire)" },
      { service: "Dépannage panne de chauffage", prix: "80 – 200 €", detail: "Diagnostic + intervention selon panne" },
      { service: "Remplacement vase d'expansion", prix: "120 – 200 €", detail: "Pièce + pose" },
      { service: "Purge + rééquilibrage radiateurs", prix: "80 – 150 €", detail: "Circuit complet" },
      { service: "Pose radiateur acier (plomberie seule)", prix: "150 – 280 €", detail: "Raccordement sur circuit existant" },
    ],
  },
  {
    categorie: "Rénovation & Travaux",
    couleur: "#10b981",
    bg: "rgba(16,185,129,0.06)",
    items: [
      { service: "Rénovation salle de bain (plomberie)", prix: "Dès 2 500 €", detail: "Sur devis, selon ampleur" },
      { service: "Plomberie maison neuve / extension", prix: "Sur devis", detail: "Selon plans architecte" },
    ],
  },
]

const TARIFS_FAQ: Faq[] = [
  {
    q: "Combien coûte une intervention de plombier à Muret ou Toulouse ?",
    a: "Le prix dépend du problème, du temps nécessaire et des pièces à remplacer. Les montants affichés sur cette page sont des fourchettes indicatives : le prix exact vous est annoncé dans un devis gratuit, avant le début des travaux.",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui. Le devis est gratuit et sans engagement : vous validez le prix avant que Nino commence l'intervention.",
  },
  {
    q: "Comment est calculé le devis ?",
    a: "Le devis tient compte du temps d'intervention estimé, des pièces et du matériel nécessaires et de la complexité du chantier.",
  },
  {
    q: "Mon assurance peut-elle prendre en charge la réparation ?",
    a: "En cas de dégât des eaux, votre assurance habitation peut couvrir tout ou partie des dommages selon votre contrat. Conservez la facture de réparation et des photos des dégâts pour votre déclaration.",
  },
]

function TarifsPage() {
  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <PageHero
        kicker="Transparence totale"
        title={<>Tarifs plombier <em>Toulouse</em></>}
        lead="Des prix clairs, annoncés avant chaque intervention. Devis gratuit sur place, aucune surprise sur la facture."
        actions={<>
          <a href="tel:0650579620" className="btn-cta">
            <Phone size={18} />
            Devis gratuit — 06 50 57 96 20
          </a>
          <Link to="/rendez-vous" className="btn-ghost">
            <Calendar size={18} />
            Prendre Rendez-vous
          </Link>
        </>}
        image="/realisations/photo-07.jpg"
      />

      {/* ── Engagements tarif ── */}
      <section style={{ background: "var(--white)", padding: "48px 0" }}>
        <div className="section-container">
          <div className="feature-grid">
            {[
              { icon: CheckCircle, titre: "Devis gratuit", desc: "Le prix est annoncé et validé avec vous avant tout travail." },
              { icon: Clock, titre: "Tarif annoncé avant", desc: "Vous connaissez le prix exact avant que nous commencions l'intervention." },
              { icon: Shield, titre: "Garantie 2 ans", desc: "Toutes les réparations sont garanties 2 ans pièces et main-d'œuvre." },
              { icon: Info, titre: "Pas de surprise", desc: "Le devis détaille le temps de travail et les pièces avant que vous ne validiez." },
            ].map(({ icon: Icon, titre, desc }) => (
              <div key={titre} className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-card-icon"><Icon size={22} aria-hidden="true" /></span>
                </div>
                <h3>{titre}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grille de tarifs ── */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "12px",
            }}>
              Grille de prix indicatifs
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Ces tarifs sont fournis à titre indicatif. Le prix exact est toujours
              confirmé par devis avant intervention — pas de mauvaise surprise.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {grille.map(({ categorie, couleur, bg, items }) => (
              <div key={categorie} style={{
                background: "var(--white)",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid var(--gray-100)",
              }}>
                {/* Header catégorie */}
                <div style={{
                  background: bg,
                  borderBottom: `2px solid ${couleur}22`,
                  padding: "16px 24px",
                  display: "flex", alignItems: "center", gap: "10px",
                }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: couleur, flexShrink: 0,
                  }} />
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "1.05rem", color: "var(--ink-950)", margin: 0,
                  }}>{categorie}</h3>
                </div>

                {/* Lignes */}
                <div>
                  {items.map(({ service, prix, detail }, i) => (
                    <div key={service} style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "16px",
                      padding: "16px 24px",
                      borderTop: i > 0 ? "1px solid var(--gray-100)" : "none",
                      alignItems: "center",
                    }}>
                      <div>
                        <div style={{ fontWeight: 600, color: "var(--ink-900)", fontSize: "0.95rem", marginBottom: "2px" }}>{service}</div>
                        <div style={{ color: "var(--gray-400)", fontSize: "0.8rem" }}>{detail}</div>
                      </div>
                      <div style={{
                        fontFamily: "var(--font-display)", fontWeight: 800,
                        color: couleur, fontSize: "1rem", whiteSpace: "nowrap",
                        textAlign: "right",
                      }}>{prix}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{
            marginTop: "32px",
            padding: "20px 24px",
            background: "var(--white)",
            border: "1px solid var(--gray-200)",
            borderRadius: "var(--radius-sm)",
            display: "flex",
            gap: "14px",
            alignItems: "flex-start",
          }}>
            <Info size={20} color="var(--brand-500)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <p style={{ color: "var(--gray-600)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "var(--ink-900)" }}>Fourchettes indicatives, non contractuelles.</strong>{" "}
              Le tarif exact dépend de l'installation, de l'accessibilité et des pièces nécessaires.
              Un devis gratuit et détaillé est toujours établi et validé avec vous avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <FaqSection faqs={TARIFS_FAQ} title="Questions sur les tarifs" background="var(--white)" />

      {/* ── Services liés ── */}
      <section style={{ background: "var(--sand-50)", padding: "60px 0" }}>
        <div className="section-container">
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "1.4rem", color: "var(--ink-950)", marginBottom: "28px", textAlign: "center",
          }}>
            Tous nos services
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            {[
              { label: "Fuite d'eau", href: "/services/fuite-d-eau" },
              { label: "Débouchage", href: "/services/debouchage" },
              { label: "Chauffe-eau", href: "/services/chauffe-eau" },
              { label: "Chauffage & Chaudière", href: "/services/chauffage-chaudiere" },
              { label: "Robinetterie", href: "/services/robinetterie-sanitaires" },
              { label: "Rénovation salle de bain", href: "/services/renovation-salle-de-bain" },
              { label: "Installation neuve", href: "/services/installation-plomberie-neuve" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                to={href as "/services"}
                style={{
                  padding: "9px 20px",
                  borderRadius: "999px",
                  border: "1.5px solid var(--brand-200)",
                  color: "var(--brand-700)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "var(--white)",
                  transition: "all 0.2s",
                }}
              >
                {label} <ChevronRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ background: "var(--brand-500)", padding: "64px 0", textAlign: "center" }}>
        <div className="section-container">
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "white", letterSpacing: "-0.03em", marginBottom: "12px",
          }}>
            Obtenez votre devis gratuit
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: "28px", fontSize: "1.05rem" }}>
            Appelez maintenant — Nino évalue votre besoin et vous donne un prix en direct.
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
