// src/routes/tarifs.tsx — Page tarifs & prix plombier Toulouse
import { createFileRoute, Link } from "@tanstack/react-router"
import { Phone, CheckCircle, Clock, Shield, Calendar, Info, ChevronRight } from "lucide-react"

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs Plombier Toulouse — Prix & Devis Gratuit — Nino Plomberie 31" },
      {
        name: "description",
        content:
          "Tarifs plombier Toulouse : prix indicatifs pour fuite d'eau, débouchage, chauffe-eau, robinetterie. Déplacement gratuit, devis transparent avant intervention. ☎ 06 50 57 96 20",
      },
    ],
    links: [{ rel: "canonical", href: "https://ninoplomberie31.fr/tarifs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          name: "Tarifs plombier Toulouse — Nino Plomberie 31",
          description: "Grille de prix indicatifs pour les services de plomberie à Toulouse et Haute-Garonne",
          priceCurrency: "EUR",
          eligibleRegion: { "@type": "AdministrativeArea", name: "Haute-Garonne" },
        }),
      },
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
      { service: "Déplacement + diagnostic", prix: "Gratuit", detail: "Devis sur place sans engagement" },
      { service: "Fuite simple (robinet, joint)", prix: "80 – 150 €", detail: "Pièces en sus si nécessaire" },
      { service: "Fuite canalisation encastrée", prix: "150 – 350 €", detail: "Selon accessibilité et longueur" },
      { service: "Détection fuite non-destructive", prix: "120 – 250 €", detail: "Caméra thermique ou gaz traceur" },
      { service: "WC / évier bouché (furet)", prix: "80 – 120 €", detail: "Intervention rapide, sans produit chimique" },
      { service: "Débouchage hydrocurage HP", prix: "150 – 300 €", detail: "Canalisations extérieures ou compactes" },
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
      { service: "Installation WC suspendu (bâti inclus)", prix: "600 – 1 000 €", detail: "Geberit, hors habillage" },
      { service: "Pose douche à l'italienne", prix: "400 – 800 €", detail: "Plomberie seule, hors carrelage" },
      { service: "Tarif horaire main-d'œuvre", prix: "60 – 80 €/h", detail: "Hors déplacement, devis fourni avant" },
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
      { service: "Passage caméra inspection", prix: "150 – 250 €", detail: "Rapport vidéo fourni" },
    ],
  },
]

function TarifsPage() {
  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)",
        paddingTop: "64px",
        paddingBottom: "80px",
      }}>
        <div className="section-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--cta-500)", color: "#fff",
            borderRadius: "999px", padding: "5px 18px",
            fontSize: "0.82rem", fontWeight: 700,
            letterSpacing: "0.05em", textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            Transparence totale
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            color: "#fff",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>
            Tarifs Plombier{" "}
            <span style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #FDE68A, #FB923C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Toulouse
            </span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 32px",
          }}>
            Des prix clairs, annoncés avant chaque intervention. Devis gratuit sur place,
            aucune surprise sur la facture.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a href="tel:0650579620" className="btn-cta" style={{ fontSize: "1rem" }}>
              <Phone size={18} />
              Devis gratuit — 06 50 57 96 20
            </a>
            <Link to="/rendez-vous" className="btn-ghost" style={{ fontSize: "1rem", padding: "14px 28px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <Calendar size={18} />
              Prendre Rendez-vous
            </Link>
          </div>
        </div>
      </section>

      {/* ── Engagements tarif ── */}
      <section style={{ background: "var(--white)", padding: "48px 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {[
              { icon: CheckCircle, titre: "Déplacement gratuit", desc: "Aucun frais de déplacement — le devis est établi sur place avant tout travail." },
              { icon: Clock, titre: "Tarif annoncé avant", desc: "Vous connaissez le prix exact avant que nous commencions l'intervention." },
              { icon: Shield, titre: "Garantie 2 ans", desc: "Toutes les réparations sont garanties 2 ans pièces et main-d'œuvre." },
              { icon: Info, titre: "Pas de supplément caché", desc: "Prix tout compris : déplacement, temps de travail, pièces (si non précisé)." },
            ].map(({ icon: Icon, titre, desc }) => (
              <div key={titre} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "var(--brand-50)", border: "1px solid var(--brand-100)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon size={20} color="var(--brand-500)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--ink-950)", fontSize: "0.95rem", marginBottom: "4px" }}>{titre}</div>
                  <div style={{ color: "var(--gray-500)", fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</div>
                </div>
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
                borderRadius: "16px",
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
            borderRadius: "12px",
            display: "flex",
            gap: "14px",
            alignItems: "flex-start",
          }}>
            <Info size={20} color="var(--brand-500)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <p style={{ color: "var(--gray-600)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "var(--ink-900)" }}>Tarifs TTC, pour Toulouse et l'agglomération.</strong>{" "}
              Les prix indiqués sont des fourchettes indicatives. Le tarif exact dépend de l'état des
              canalisations, de l'accessibilité et des pièces nécessaires. Un devis détaillé est toujours
              remis avant toute intervention. Aucun supplément de nuit ou de week-end sur les urgences.
            </p>
          </div>
        </div>
      </section>

      {/* ── Questions tarifs ── */}
      <section style={{ background: "var(--white)", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "760px" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--ink-950)", letterSpacing: "-0.02em",
            marginBottom: "32px", textAlign: "center",
          }}>
            Questions sur les tarifs
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                q: "Combien coûte un plombier à Toulouse ?",
                a: "Le déplacement est gratuit chez Nino Plomberie 31. Le tarif horaire varie entre 60 et 80 €/h. Pour les interventions courantes (fuite simple, WC bouché), comptez 80 à 150 € tout compris. Un devis précis est établi sur place avant le début des travaux.",
              },
              {
                q: "Y a-t-il un supplément pour une urgence le week-end ?",
                a: "Non. Nino Plomberie 31 n'applique pas de supplément de nuit ou de week-end sur ses interventions d'urgence. Le tarif annoncé est le tarif final, 7j/7.",
              },
              {
                q: "Comment est calculé le devis ?",
                a: "Le devis tient compte du temps d'intervention estimé, des pièces nécessaires et de la complexité du chantier. Il est remis par écrit ou par SMS avant tout démarrage. Vous pouvez refuser sans frais.",
              },
              {
                q: "Acceptez-vous les paiements par carte bancaire ?",
                a: "Oui, nous acceptons les règlements en espèces, par carte bancaire et par virement bancaire. Une facture conforme est remise après chaque intervention.",
              },
              {
                q: "Mon assurance peut-elle prendre en charge la réparation ?",
                a: "En cas de dégât des eaux, votre assurance habitation peut couvrir tout ou partie des réparations. Nous établissons un rapport d'intervention détaillé pour faciliter votre déclaration de sinistre.",
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "var(--sand-50)", borderRadius: "12px", padding: "20px 24px", border: "1px solid var(--gray-100)" }}>
                <div style={{ fontWeight: 700, color: "var(--ink-950)", marginBottom: "8px", fontSize: "0.95rem" }}>{q}</div>
                <div style={{ color: "var(--gray-600)", fontSize: "0.875rem", lineHeight: 1.7 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
