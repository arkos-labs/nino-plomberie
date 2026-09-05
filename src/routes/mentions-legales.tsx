// src/routes/mentions-legales.tsx
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions Légales — Nino Plomberie 31" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MentionsLegalesPage,
})

function MentionsLegalesPage() {
  return (
    <div style={{ background: "#f9fafb", padding: "64px 0" }}>
      <div className="section-container" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--ink-950)", fontSize: "2.2rem", marginBottom: "32px" }}>
          Mentions Légales
        </h1>

        {[
          {
            titre: "1. Éditeur du site",
            contenu: [
              "Raison sociale : Nino Plomberie 31",
              "Forme juridique : Entreprise individuelle (EI)",
              "SIRET : XXX XXX XXX 00000",
              "Adresse : [ADRESSE À COMPLÉTER], 31000 Toulouse",
              "Téléphone : 06 50 57 96 20",
              "Email : contact@nino-plomberie31.fr",
              "Directeur de la publication : Nino [NOM À COMPLÉTER]",
            ],
          },
          {
            titre: "2. Hébergeur",
            contenu: [
              "Vercel Inc.",
              "340 Pine Street, Suite 701, San Francisco, CA 94104, USA",
              "Site web : https://vercel.com",
            ],
          },
          {
            titre: "3. Propriété intellectuelle",
            contenu: [
              "L'ensemble du contenu de ce site (textes, images, logos, structure) est la propriété exclusive de Nino Plomberie 31, sauf mention contraire.",
              "Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.",
            ],
          },
          {
            titre: "4. Responsabilité",
            contenu: [
              "Nino Plomberie 31 s'efforce de maintenir les informations de ce site à jour et exactes.",
              "Toutefois, nous ne pouvons garantir l'exactitude absolue, l'exhaustivité ou l'actualité des informations publiées.",
              "La responsabilité du site ne peut être engagée pour tout dommage résultant de l'utilisation ou de l'impossibilité d'utiliser le site.",
            ],
          },
          {
            titre: "5. Liens hypertextes",
            contenu: [
              "Le site peut contenir des liens vers des sites tiers. Nino Plomberie 31 n'est pas responsable du contenu de ces sites externes.",
            ],
          },
          {
            titre: "6. Droit applicable",
            contenu: [
              "Le présent site et ses mentions légales sont soumis au droit français.",
              "En cas de litige, les tribunaux français seront compétents.",
            ],
          },
        ].map(({ titre, contenu }) => (
          <section key={titre} style={{ marginBottom: "32px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink-950)", fontSize: "1.15rem", marginBottom: "12px" }}>
              {titre}
            </h2>
            {contenu.map((line, i) => (
              <p key={i} style={{ color: "#374151", lineHeight: 1.7, marginBottom: "6px", fontSize: "1.05rem" }}>
                {line}
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
