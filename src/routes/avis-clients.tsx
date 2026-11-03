// src/routes/avis-clients.tsx — page dédiée aux avis (Brief section 7.5)
import { createFileRoute, Link } from "@tanstack/react-router"
import { Star, ExternalLink, Phone, Calendar, ArrowRight, CheckCircle2 } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { avis } from "../data/avis"
import { BUSINESS, SITE_URL, BUSINESS_ID, pageHead, ldScript, breadcrumbJsonLd, faqJsonLd, type Faq } from "../lib/site"

const FAQ: Faq[] = [
  {
    q: "Quelle est la note de Nino Plomberie sur Google ?",
    a: "Je suis noté 4,4/5 sur 79 avis Google. Tous les avis sont consultables en accès libre sur la fiche Google Maps de mon entreprise à Muret.",
  },
  {
    q: "Les avis affichés sur cette page sont-ils vrais ?",
    a: "Oui. Je ne recopie que des avis réellement publiés par mes clients sur Google sous leur propre compte.",
  },
  {
    q: "Comment laisser un avis après mon passage ?",
    a: "Cliquez sur le bouton « Laisser un avis sur Google » ci-dessous : indiquer la nature de la panne (fuite, débouchage, chauffe-eau) et votre commune aide concrètement les prochains habitants.",
  },
]

export const Route = createFileRoute("/avis-clients")({
  head: () => {
    const head = pageHead({
      title: "Avis clients Nino Plomberie - 4,4/5, 79 avis | Muret",
      description: "4,4/5 sur 79 avis Google. Les avis clients de Nino Plomberie, artisan plombier à Muret et Toulouse : dépannage 24h/24, devis gratuit, garantie 2 ans.",
      path: "/avis-clients",
    })
    return {
      ...head,
      scripts: [
        ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Avis clients", path: "/avis-clients" }])),
        ldScript(faqJsonLd(FAQ)),
        ldScript({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: `${SITE_URL}/avis-clients`,
          name: "Avis clients Nino Plomberie",
          about: { "@id": BUSINESS_ID },
        }),
      ],
    }
  },
  component: AvisPage,
})

function AvisPage() {
  return (
    <div style={{ background: "var(--sand-50)" }}>
      <PageHero
        kicker="Avis vérifiables sur Google Maps"
        title={<>Avis clients : <em>4,4/5 sur 79 avis Google</em></>}
        lead="Avant de faire entrer un plombier chez vous en pleine nuit ou de lui confier votre salle de bain, vous voulez savoir comment il travaille. Voici les avis Nino Plomberie publiés par mes clients à Muret, Toulouse et en Haute-Garonne, ainsi que ma façon de travailler depuis plus de 20 ans."
        actions={
          <>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
              <Phone size={18} aria-hidden="true" /> Appeler Nino · {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-ghost">
              <Calendar size={18} aria-hidden="true" /> Demander un devis gratuit
            </Link>
          </>
        }
        image="/realisations/photo-09.jpg"
      />

      {/* H2 #1 — Ce que disent les clients */}
      <section style={{ padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "860px" }}>
          <h2 className="section-title" style={{ marginBottom: "14px" }}>Ce que disent les clients</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "24px" }}>
            Extraits d'avis réellement publiés sur la fiche Google de{" "}
            <Link to="/" style={{ color: "var(--brand-600)", fontWeight: 700 }}>Nino Plomberie</Link>{" "}
            (4,4/5 sur 79 avis) :
          </p>
          <div style={{ display: "grid", gap: "16px" }}>
            {avis.map((a) => (
              <figure key={a.nom} style={{ margin: 0, background: "white", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px 22px" }}>
                <div aria-label={`${a.note} étoiles sur 5`} style={{ display: "flex", gap: "2px", marginBottom: "8px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < a.note ? "#f59e0b" : "#e5e7eb"} color={i < a.note ? "#f59e0b" : "#e5e7eb"} aria-hidden="true" />
                  ))}
                </div>
                <blockquote style={{ margin: 0, color: "#334155", lineHeight: 1.75 }}>« {a.texte} »</blockquote>
                <figcaption style={{ marginTop: "10px", fontSize: "0.88rem", color: "#64748b" }}>
                  <strong style={{ color: "var(--ink-950)" }}>{a.nom}</strong> · {a.service} · Avis Google vérifié
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ color: "#64748b", fontSize: "0.92rem", marginTop: "16px", marginBottom: 0 }}>
            [À CONFIRMER PAR NINO : ajouter ici 4 à 6 autres avis réels recopiés mot pour mot depuis la fiche Google Business Profile avec prénom et ville du chantier.] Consultez l'intégralité des 79 avis directement sur{" "}
            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              la fiche Google Maps Nino Plomberie <ExternalLink size={13} aria-hidden="true" />
            </a>.
          </p>
        </div>
      </section>

      {/* H2 #2 — Les reproches qu'on me fait */}
      <section style={{ background: "white", padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "860px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>Les reproches qu'on me fait</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "16px" }}>
            Une note de 4,4/5 sur 79 avis signifie que la grande majorité des interventions se passent très bien, mais aussi que je ne suis pas à 5,0/5. Pourquoi ? Voici les deux points que j'assume pleinement :
          </p>
          <ul style={{ color: "#334155", lineHeight: 1.85, paddingLeft: "22px", margin: 0 }}>
            <li>
              <strong>Je suis un artisan seul, pas un centre d'appels</strong> : quand je suis déjà en train de souder sous un évier à Muret ou de remplacer un chauffe-eau à Toulouse, je ne peux pas me dédoubler. Si mon planning du jour est complet pour un dépannage non vital, je préfère vous le dire franchement au téléphone plutôt que de vous faire attendre toute la journée.
            </li>
            <li>
              <strong>Je refuse de bricoler une réparation qui ne tiendra pas</strong> : comme je garantis mon travail 2 ans pièces et main-d'œuvre, il m'arrive de conseiller le remplacement d'une pièce trop corrodée plutôt qu'un colmatage provisoire. Le choix final vous appartient toujours sur devis écrit.
            </li>
          </ul>
        </div>
      </section>

      {/* H2 #3 — Comment je travaille */}
      <section style={{ padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "860px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>Comment je travaille</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "20px" }}>
            Que j'intervienne comme{" "}
            <Link to="/intervention/$ville" params={{ ville: "muret" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>plombier à Muret</Link>{" "}
            ou comme{" "}
            <Link to="/intervention/$ville" params={{ ville: "toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>plombier à Toulouse</Link>, je m'impose trois règles simples :
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: "12px" }}>
            {[
              { titre: "Devis signé avant le premier coup de clé", desc: "Vous connaissez le tarif exact avant que je ne démonte quoi que ce soit. Si le prix change, c'est moi qui vous appelle." },
              { titre: "Garantie 2 ans pièces et main-d'œuvre", desc: "Si la panne revient dans les deux ans sur la réparation effectuée, je reviens sans vous refacturer." },
              { titre: "Aucune sous-traitance", desc: "Celui qui décroche au 06 50 57 96 20 est celui qui se présente à votre porte et qui réalise les travaux." },
            ].map((item) => (
              <li key={item.titre} style={{ background: "white", padding: "18px 20px", borderRadius: "12px", border: "1px solid #e2e8f0", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <CheckCircle2 size={18} color="var(--brand-600)" style={{ flexShrink: 0, marginTop: "3px" }} aria-hidden="true" />
                <div>
                  <strong style={{ color: "var(--ink-950)", display: "block", marginBottom: "4px" }}>{item.titre}</strong>
                  <span style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.65 }}>{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <figure style={{ margin: 0, background: "white", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
            <img
              src="/realisations/photo-09.jpg"
              alt="Meuble double vasque et miroir LED posés à Toulouse par Nino Plomberie"
              loading="lazy"
              style={{ width: "100%", maxHeight: "320px", objectFit: "cover", display: "block" }}
            />
            <figcaption style={{ padding: "12px 16px", fontSize: "0.9rem", color: "#475569" }}>
              <strong>Chantier réalisé à Toulouse</strong> — pose de meuble double vasque, robinetterie et miroir LED.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* H2 #4 — Laisser un avis */}
      <section style={{ background: "white", padding: "48px 0" }}>
        <div className="section-container" style={{ maxWidth: "860px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>Laisser un avis</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, margin: "0 0 18px" }}>
            Je suis intervenu chez vous récemment ? Votre retour m'aide à me faire connaître face aux plateformes nationales. Deux lignes suffisent : précisez la panne traitée et votre commune.
          </p>
          <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ display: "inline-flex" }}>
            <Star size={16} aria-hidden="true" /> Laisser un avis sur la fiche Google <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* H2 #5 — Une urgence ou un devis ? */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "640px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Une urgence ou un devis ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.08rem", marginBottom: "28px", lineHeight: 1.7 }}>
            Appelez-moi directement au 06 50 57 96 20 (24h/24 et 7j/7) ou demandez votre devis gratuit avant travaux.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
              <Phone size={16} /> Appeler Nino · {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-ghost">
              Demander un devis gratuit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
