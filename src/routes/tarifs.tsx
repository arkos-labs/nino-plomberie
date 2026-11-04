// src/routes/tarifs.tsx — Page tarifs & prix plombier Muret et Toulouse (Brief section 6.12)
import { createFileRoute, Link } from "@tanstack/react-router"
import { Phone, CheckCircle, Clock, Shield, Calendar, Info, ChevronRight, ChevronDown, ArrowRight } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { pageHead, ldScript, breadcrumbJsonLd, faqJsonLd, type Faq } from "../lib/site"

const TARIFS_FAQ: Faq[] = [
  {
    q: "Combien coûte une intervention de plombier à Muret ou Toulouse ?",
    a: "Le tarif plombier dépend de la panne et de l'intervention : déplacement et diagnostic à 130 € TTC, débouchage simple de WC ou d'évier à 140 € TTC, entretien annuel de chaudière gaz à 130 € TTC, réparation de fuite simple à 130 € TTC. Le prix exact est toujours écrit dans un devis gratuit signé avant le début des travaux.",
  },
  {
    q: "Le déplacement et le devis sont-ils gratuits ?",
    a: "Oui, le devis est gratuit et sans engagement : je vous annonce le prix sur place avant le premier coup de clé (déplacement et diagnostic : 130 € TTC).",
  },
  {
    q: "Existe-t-il un vrai plombier pas cher à Toulouse ?",
    a: "Méfiez-vous des prix d'appel affichés par les plateformes sur Internet qui multiplient la facture une fois sur place. Un plombier pas cher à Toulouse, en pratique, c'est un artisan qui annonce un prix ferme avant de commencer, ne change que la pièce usée et garantit sa réparation 2 ans.",
  },
  {
    q: "Mon assurance habitation prend-elle en charge la recherche de fuite ?",
    a: "En cas de dégât des eaux, la recherche de fuite non destructive est généralement prise en charge par votre assurance habitation selon votre contrat. Je vous remets une facture détaillée et un descriptif précis de l'origine de la fuite pour votre dossier.",
  },
]

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    ...pageHead({
      title: "Tarif plombier Muret & Toulouse - Prix annoncés | Nino",
      description:
        "Tarifs plombier à Muret et Toulouse : déplacement, débouchage, entretien chaudière, recherche de fuite. Devis gratuit avant travaux, garantie 2 ans. 06 50 57 96 20.",
      path: "/tarifs",
    }),
    scripts: [
      ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Tarifs", path: "/tarifs" }])),
      ldScript(faqJsonLd(TARIFS_FAQ)),
    ],
  }),
  component: TarifsPage,
})

const grille = [
  {
    categorie: "Débouchage & Urgences",
    items: [
      { service: "Devis sur place avant travaux", prix: "Gratuit", detail: "Prix écrit et signé avant le premier coup de clé" },
      { service: "Tarif déplacement & diagnostic", prix: "130 € TTC", detail: "Montant annoncé avant toute intervention" },
      { service: "Tarif plombier WC bouché / évier (furet)", prix: "140 € TTC", detail: "Débouchage mécanique sans produit chimique" },
      { service: "Débouchage canalisation profonde / haute pression", prix: "[À CONFIRMER PAR NINO : prix débouchage haute pression]", detail: "Selon longueur, regard et accessibilité" },
      { service: "Tarif plombier horaire (main-d'œuvre)", prix: "[À CONFIRMER PAR NINO : tarif horaire]", detail: "Annoncé à l'avance dans le devis" },
    ],
  },
  {
    categorie: "Recherche & Réparation de fuite",
    items: [
      { service: "Fuite simple (robinet, joint, flexible, raccord)", prix: "130 € TTC", detail: "Main-d'œuvre et petite fourniture" },
      { service: "Recherche de fuite sans casse et canalisation encastrée", prix: "[À CONFIRMER PAR NINO : tarif recherche de fuite]", detail: "Diagnostic ciblé pour l'assurance et réparation" },
      { service: "Changement mécanisme WC / flotteur", prix: "[À CONFIRMER PAR NINO : prix mécanisme WC]", detail: "Pièce et pose comprises" },
      { service: "Remplacement robinet mitigeur", prix: "[À CONFIRMER PAR NINO : prix pose mitigeur]", detail: "Main-d'œuvre, fourniture selon modèle choisi" },
    ],
  },
  {
    categorie: "Chaudière, Chauffage & Chauffe-eau",
    items: [
      { service: "Entretien annuel chaudière gaz", prix: "130 € TTC", detail: "Nettoyage, réglages et attestation officielle" },
      { service: "Dépannage panne de chauffage / chaudière", prix: "[À CONFIRMER PAR NINO : prix dépannage chauffage]", detail: "Diagnostic et remise en route" },
      { service: "Changement groupe de sécurité chauffe-eau", prix: "[À CONFIRMER PAR NINO : prix groupe de sécurité]", detail: "Pièce et main-d'œuvre" },
      { service: "Remplacement résistance chauffe-eau électrique", prix: "[À CONFIRMER PAR NINO : prix remplacement résistance]", detail: "Pièce et main-d'œuvre" },
      { service: "Pose chauffe-eau électrique", prix: "[À CONFIRMER PAR NINO : prix remplacement chauffe-eau]", detail: "Fourniture, pose et raccordement" },
    ],
  },
  {
    categorie: "Salle de bain & Rénovation",
    items: [
      { service: "Installation WC suspendu (bâti-support inclus)", prix: "[À CONFIRMER PAR NINO : prix pose WC suspendu]", detail: "Hors habillage carrelage" },
      { service: "Pose douche à l'italienne (plomberie)", prix: "[À CONFIRMER PAR NINO : prix plomberie douche italienne]", detail: "Alimentation, receveur et évacuation" },
      { service: "Rénovation salle de bain complète", prix: "[À CONFIRMER PAR NINO : ordre de prix au m² / salle de bain]", detail: "Sur devis détaillé après visite technique" },
    ],
  },
]

function TarifsPage() {
  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>

      <PageHero
        kicker="Transparence tarifaire · Muret & Toulouse"
        title={<>Tarifs plombier à Muret et Toulouse : <em>ce que vous payez</em></>}
        lead="Quand une fuite démarre ou qu'un WC déborde, la première crainte n'est pas la panne : c'est la facture. Voici comment je calcule chaque tarif plombier à Muret et à Toulouse, avec mes ordres de prix indicatifs. Installé à Muret depuis plus de 20 ans (noté 4,4/5 sur 79 avis Google), je fais signer un devis gratuit avant le premier coup de clé et je garantis mes réparations 2 ans."
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
        image="/realisations/photo-07.jpg"
      />

      {/* Engagements clés */}
      <section style={{ background: "var(--white)", padding: "40px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="section-container">
          <div className="feature-grid">
            {[
              { icon: CheckCircle, titre: "Devis gratuit écrit", desc: "Le prix est écrit et signé avec vous avant le début des travaux." },
              { icon: Clock, titre: "Prix annoncé d'avance", desc: "Aucune intervention ne démarre sans votre accord sur le montant." },
              { icon: Shield, titre: "Garantie 2 ans", desc: "Si la panne revient dans les 2 ans, je reviens sans vous refacturer." },
              { icon: Info, titre: "Zéro sous-traitance", desc: "Vous parlez directement à l'artisan qui réalise l'intervention." },
            ].map(({ icon: Icon, titre, desc }) => (
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
      </section>

      {/* H2 #1 — Le déplacement et le diagnostic */}
      <section style={{ padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "920px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Le déplacement et le diagnostic
          </h2>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, marginBottom: "14px" }}>
            Basé au 11 rue François Arago à Muret, je me déplace dans tout le Muretain, à Toulouse et en Haute-Garonne. Dès votre appel au <strong>06 50 57 96 20</strong>, vous m'expliquez le symptôme (et m'envoyez une photo si besoin) : je vous donne déjà une première fourchette par téléphone.
          </p>
          <ul style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.8, paddingLeft: "22px", margin: 0 }}>
            <li><strong>Devis gratuit avant travaux</strong> : une fois sur place, j'identifie l'origine exacte de la panne et je rédige le devis avant de toucher à l'installation.</li>
            <li><strong>Tarif déplacement plombier et diagnostic</strong> : 130 € TTC.</li>
            <li><strong>Tarif plombier horaire</strong> : annoncé à l'avance selon la technicité de l'intervention — <code>[À CONFIRMER PAR NINO : taux horaire exact]</code>.</li>
          </ul>
        </div>
      </section>

      {/* H2 #2 — Débouchage : les ordres de prix */}
      <section style={{ background: "white", padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "920px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Débouchage : les ordres de prix
          </h2>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, marginBottom: "14px" }}>
            Le <strong>prix d'un débouchage de canalisation</strong> dépend de l'endroit où se loge le bouchon. Un siphon d'évier ou une cuvette de WC ne demande pas le même matériel qu'une canalisation enterrée entre la maison et le regard.
          </p>
          <ul style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.8, paddingLeft: "22px", marginBottom: "16px" }}>
            <li><strong>Tarif plombier WC bouché, évier ou douche bouchée (furet mécanique ou pompe)</strong> : 140 € TTC.</li>
            <li><strong>Débouchage de canalisation principale ou haute pression</strong> : chiffré sur place après contrôle du regard et de la longueur obstruée — <code>[À CONFIRMER PAR NINO : fourchette débouchage haute pression]</code>.</li>
          </ul>
          <p style={{ color: "#475569", fontSize: "0.98rem", margin: 0 }}>
            Pour les gestes d'urgence et le détail des méthodes, consultez la page{" "}
            <Link to="/services/$slug" params={{ slug: "debouchage" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              débouchage canalisation à Toulouse et Muret
            </Link>{" "}
            ou notre guide sur le{" "}
            <Link to="/blog/$slug" params={{ slug: "prix-debouchage-canalisation-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              prix d'un débouchage de canalisation à Toulouse
            </Link>.
          </p>
        </div>
      </section>

      {/* H2 #3 — Entretien et dépannage chaudière */}
      <section style={{ padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "920px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Entretien et dépannage chaudière
          </h2>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, marginBottom: "14px" }}>
            L'entretien annuel de votre chaudière gaz est obligatoire et évite la majorité des pannes d'hiver. Comme plombier-chauffagiste, j'interviens à la fois sur le corps de chauffe et sur le réseau de radiateurs.
          </p>
          <ul style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.8, paddingLeft: "22px", marginBottom: "16px" }}>
            <li><strong>Entretien annuel de chaudière gaz avec attestation</strong> : 130 € TTC.</li>
            <li><strong>Dépannage panne de chauffage ou chaudière en sécurité</strong> : hors pièce de rechange — <code>[À CONFIRMER PAR NINO : prix dépannage chauffage]</code>.</li>
            <li><strong>Purge et rééquilibrage du circuit de radiateurs</strong> : <code>[À CONFIRMER PAR NINO : prix purge et rééquilibrage]</code>.</li>
          </ul>
          <p style={{ color: "#475569", fontSize: "0.98rem", margin: 0 }}>
            Voir le détail sur les pages{" "}
            <Link to="/services/$slug" params={{ slug: "entretien-chaudiere-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              entretien chaudière à Toulouse
            </Link>{" "}
            et{" "}
            <Link to="/services/$slug" params={{ slug: "chauffage-chaudiere" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              chauffagiste à Muret et Toulouse
            </Link>.
          </p>
        </div>
      </section>

      {/* H2 #4 — Recherche de fuite */}
      <section style={{ background: "white", padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "920px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Recherche de fuite
          </h2>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, marginBottom: "14px" }}>
            Ouvrir un mur ou un carrelage au hasard coûte toujours plus cher que la fuite elle-même. Je localise d'abord précisément l'origine de l'infiltration avant toute réparation.
          </p>
          <ul style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.8, paddingLeft: "22px", marginBottom: "16px" }}>
            <li><strong>Réparation de fuite simple visible (joint, robinet, flexible, raccord)</strong> : 130 € TTC.</li>
            <li><strong>Recherche de fuite sans casse et réparation sur canalisation encastrée</strong> : selon l'accès — <code>[À CONFIRMER PAR NINO : tarif recherche de fuite plombier]</code>.</li>
          </ul>
          <p style={{ color: "#475569", fontSize: "0.98rem", margin: 0 }}>
            En savoir plus sur ma méthode de{" "}
            <Link to="/services/$slug" params={{ slug: "fuite-d-eau" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              recherche de fuite d'eau à Toulouse et Muret
            </Link>.
          </p>
        </div>
      </section>

      {/* Grille récapitulative complète */}
      <section style={{ padding: "48px 0" }}>
        <div className="section-container" style={{ maxWidth: "960px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {grille.map((cat) => (
              <div key={cat.categorie} style={{ background: "white", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                <div style={{ background: "var(--ink-900)", color: "white", padding: "14px 22px", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>
                  {cat.categorie}
                </div>
                <div>
                  {cat.items.map((item, idx) => (
                    <div
                      key={item.service}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr",
                        gap: "16px",
                        padding: "16px 22px",
                        borderBottom: idx < cat.items.length - 1 ? "1px solid #f1f5f9" : "none",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--ink-950)", fontSize: "0.98rem" }}>{item.service}</div>
                        <div style={{ color: "#64748b", fontSize: "0.86rem", marginTop: "2px" }}>{item.detail}</div>
                      </div>
                      <div style={{ textAlign: "right", fontWeight: 800, color: "var(--brand-600)", fontSize: "1rem" }}>
                        {item.prix}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 #5 — Ce qui fait varier un devis */}
      <section style={{ background: "white", padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "920px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Ce qui fait varier un devis
          </h2>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, marginBottom: "16px" }}>
            Deux fuites ou deux remplacements de chauffe-eau ne demandent pas toujours le même temps. Quatre critères concrets expliquent l'écart d'un chantier à l'autre :
          </p>
          <ul style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.8, paddingLeft: "22px", margin: 0 }}>
            <li><strong>L'accessibilité</strong> : un chauffe-eau posé à hauteur d'homme dans un garage à Muret se remplace plus vite qu'un ballon coincé dans un placard en hauteur dans un étage sans ascenseur au Capitole.</li>
            <li><strong>L'état du réseau existant</strong> : raccorder sur du cuivre récent avec une vanne d'arrêt fonctionnelle est immédiat ; reprendre un raccord grippé sur du plomb ou de l'acier galvanisé demande une adaptation.</li>
            <li><strong>Les pièces à fournir</strong> : je répare avec un simple joint ou une cartouche quand cela suffit, et je ne remplace l'appareil complet que s'il est percé ou irréparable.</li>
            <li><strong>L'horaire d'intervention</strong> : pour une urgence en pleine nuit, un dimanche ou un jour férié, le tarif est précisé dès votre appel au 06 50 57 96 20 avant mon départ.</li>
          </ul>
        </div>
      </section>

      {/* H2 #6 — Pourquoi je donne le prix avant de commencer */}
      <section style={{ padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "920px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Pourquoi je donne le prix avant de commencer
          </h2>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, marginBottom: "14px" }}>
            Beaucoup d'habitants tapent <strong>« plombier pas cher Toulouse »</strong> après avoir entendu parler de factures abusives pour un simple joint. Ces abus viennent presque toujours du même modèle : une plateforme annonce un tarif dérisoire au téléphone, puis le sous-traitant démonte votre robinet avant de vous présenter la vraie addition.
          </p>
          <p style={{ color: "#475569", fontSize: "1.03rem", lineHeight: 1.8, marginBottom: "14px" }}>
            Je ne promets pas de prix cassés irréalistes : je promets un <strong>prix honnête, écrit et signé avant le premier coup de clé</strong>. Si le montant ne vous convient pas, je repars et vous ne me devez rien pour le devis. Et si la réparation que j'ai faite lâche dans les 2 ans, je reviens gratuitement.
          </p>
          <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "28px" }}>
            Découvrez aussi notre page dédiée{" "}
            <Link to="/services/$slug" params={{ slug: "plombier-pas-cher-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              plombier pas cher à Toulouse : comment éviter les pièges
            </Link>, ainsi que nos interventions comme{" "}
            <Link to="/intervention/$ville" params={{ ville: "muret" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>
              plombier à Muret
            </Link>{" "}
            et{" "}
            <Link to="/intervention/$ville" params={{ ville: "toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>
              plombier à Toulouse
            </Link>.
          </p>

          {/* FAQ en accordéon H3 pour conserver strictement les 6 H2 du brief */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
            {TARIFS_FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: "10px", padding: "16px 20px", border: "1px solid #e2e8f0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, color: "var(--ink-950)", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>{f.q}</h3>
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.75, margin: "10px 0 0" }}>{f.a}</p>
              </details>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {[
              { label: "Dépannage plomberie Toulouse", href: "/services/depannage-plomberie-toulouse" },
              { label: "Plombier urgence Toulouse 24h/24", href: "/services/urgence-plombier-toulouse" },
              { label: "Débouchage canalisation Toulouse", href: "/services/debouchage" },
              { label: "Entretien chaudière Toulouse", href: "/services/entretien-chaudiere-toulouse" },
              { label: "Chauffe-eau Toulouse & Muret", href: "/services/chauffe-eau" },
              { label: "Rénovation salle de bain Toulouse", href: "/services/renovation-salle-de-bain-toulouse" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                to={href as "/services"}
                style={{
                  padding: "9px 18px",
                  borderRadius: "999px",
                  border: "1.5px solid var(--brand-200)",
                  color: "var(--brand-700)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "var(--white)",
                }}
              >
                {label} <ChevronRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: "var(--brand-500)", padding: "64px 0", textAlign: "center" }}>
        <div className="section-container">
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.7rem, 3.8vw, 2.5rem)", color: "white", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Besoin d'un prix clair avant travaux ?
          </div>
          <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "28px", fontSize: "1.05rem" }}>
            Appelez-moi directement : j'évalue votre panne au téléphone et je me déplace pour un devis gratuit.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0650579620" className="btn-cta" style={{ fontSize: "1.05rem", padding: "16px 32px" }}>
              <Phone size={20} />
              Appeler Nino · 06 50 57 96 20
            </a>
            <Link to="/contact" className="btn-ghost" style={{ fontSize: "1.05rem", padding: "16px 28px" }}>
              Demander un devis gratuit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
