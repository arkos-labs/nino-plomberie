// src/routes/politique-confidentialite.tsx
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de Confidentialité — Nino Plomberie 31" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PolitiqueConfidentialitePage,
})

function PolitiqueConfidentialitePage() {
  return (
    <div style={{ background: "#f9fafb", padding: "64px 0" }}>
      <div className="section-container" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--ink-950)", fontSize: "2.2rem", marginBottom: "8px" }}>
          Politique de Confidentialité
        </h1>
        <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginBottom: "40px" }}>
          Conformément au RGPD (Règlement Général sur la Protection des Données — UE 2016/679)
        </p>

        {[
          {
            titre: "1. Responsable du traitement",
            contenu: [
              "Nino Plomberie 31 — Entreprise individuelle",
              "SIRET : XXX XXX XXX 00000",
              "Adresse : [ADRESSE À COMPLÉTER], 31000 Toulouse",
              "Contact DPO : contact@nino-plomberie31.fr",
            ],
          },
          {
            titre: "2. Données collectées",
            contenu: [
              "Formulaire de contact : nom, prénom, email, téléphone, adresse, message.",
              "Module diagnostic IA : photos uploadées pour analyse — non conservées sur nos serveurs au-delà du traitement.",
              "Navigation : cookies techniques (aucun cookie publicitaire tiers utilisé).",
            ],
          },
          {
            titre: "3. Finalités du traitement",
            contenu: [
              "Répondre à vos demandes de devis et d'intervention.",
              "Vous recontacter suite à un diagnostic IA.",
              "Améliorer la qualité de nos services.",
              "Respecter nos obligations légales (conservation des factures 10 ans).",
            ],
          },
          {
            titre: "4. Base légale",
            contenu: [
              "Exécution d'un contrat ou de mesures précontractuelles (formulaire de devis).",
              "Intérêt légitime (amélioration du service).",
              "Consentement (cookies optionnels le cas échéant).",
            ],
          },
          {
            titre: "5. Durée de conservation",
            contenu: [
              "Données de contact : 3 ans après le dernier contact.",
              "Photos diagnostic IA : suppression immédiate après analyse.",
              "Données de facturation : 10 ans (obligation légale).",
            ],
          },
          {
            titre: "6. Destinataires des données",
            contenu: [
              "Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales.",
              "Sous-traitants techniques : Vercel (hébergement), Resend (envoi emails), OpenAI (analyse IA photo).",
              "Tous nos sous-traitants sont soumis à des garanties contractuelles RGPD.",
            ],
          },
          {
            titre: "7. Vos droits",
            contenu: [
              "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et de portabilité de vos données.",
              "Vous pouvez exercer ces droits par email à : contact@nino-plomberie31.fr",
              "En cas de réclamation : autorité compétente — CNIL (www.cnil.fr).",
            ],
          },
          {
            titre: "8. Cookies",
            contenu: [
              "Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement (session, sécurité).",
              "Aucun cookie de tracking ou publicitaire n'est déposé sans votre consentement.",
            ],
          },
        ].map(({ titre, contenu }) => (
          <section key={titre} style={{ marginBottom: "32px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink-950)", fontSize: "1.15rem", marginBottom: "12px" }}>
              {titre}
            </h2>
            {contenu.map((line, i) => (
              <p key={i} style={{ color: "#374151", lineHeight: 1.7, marginBottom: "6px", fontSize: "1.05rem" }}>
                • {line}
              </p>
            ))}
          </section>
        ))}

        <p style={{ color: "#9ca3af", fontSize: "0.8rem", marginTop: "32px" }}>
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
  )
}
