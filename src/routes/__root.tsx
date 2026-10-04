// src/routes/__root.tsx
import { HeadContent, Scripts, createRootRoute, Outlet } from "@tanstack/react-router"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import appCss from "../styles.css?url"
import { SITE_URL, BUSINESS, BUSINESS_ID, ldScript } from "../lib/site"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1e3a5f" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nino Plomberie" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:image", content: `${SITE_URL}/hero-nino-v2.jpg` },
      { property: "og:image:alt", content: "Nino Plomberie — plombier à Muret et Toulouse" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/hero-nino-v2.jpg` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS.name,
        inLanguage: "fr-FR",
        publisher: { "@id": BUSINESS_ID },
      }),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Plumber", "HVACBusiness"],
          "@id": BUSINESS_ID,
          name: BUSINESS.name,
          alternateName: BUSINESS.legalName,
          description: `Artisan plombier-chauffagiste basé à Muret (31) avec ${BUSINESS.experience} d'expérience : dépannage 24h/24 et 7j/7, fuites, débouchage, chauffe-eau, rénovation de salle de bain et pose de cuisine à Muret, Toulouse et en Haute-Garonne.`,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          image: [`${SITE_URL}/hero-nino-v2.jpg`, `${SITE_URL}/realisations/photo-09.jpg`],
          telephone: BUSINESS.phoneIntl,
          email: BUSINESS.email,
          sameAs: [BUSINESS.googleMapsUrl],
          hasMap: BUSINESS.googleMapsUrl,
          knowsAbout: ["Plomberie", "Recherche de fuite", "Débouchage", "Chauffe-eau", "Chauffage", "Rénovation de salle de bain", "Pose de cuisine"],
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: BUSINESS.city,
            postalCode: BUSINESS.postalCode,
            addressRegion: BUSINESS.region,
            addressCountry: "FR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: BUSINESS.lat,
            longitude: BUSINESS.lng,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BUSINESS.rating,
            reviewCount: BUSINESS.reviewCount,
            bestRating: "5",
            worstRating: "1",
          },
          priceRange: "€€",
          currenciesAccepted: "EUR",
          paymentAccepted: "Cash, Carte bancaire, Virement",
          areaServed: [
            { "@type": "AdministrativeArea", name: "Haute-Garonne" },
            { "@type": "City", name: "Toulouse" },
            { "@type": "City", name: "Colomiers" },
            { "@type": "City", name: "Tournefeuille" },
            { "@type": "City", name: "Blagnac" },
            { "@type": "City", name: "Muret" },
            { "@type": "City", name: "Plaisance-du-Touch" },
            { "@type": "City", name: "Cugnaux" },
            { "@type": "City", name: "Balma" },
            { "@type": "City", name: "Ramonville-Saint-Agne" },
            { "@type": "City", name: "Castanet-Tolosan" },
            { "@type": "City", name: "Fonsorbes" },
            { "@type": "City", name: "L'Union" },
            { "@type": "City", name: "Aucamville" },
            { "@type": "City", name: "Saint-Orens-de-Gameville" },
            { "@type": "City", name: "Saint-Jean" },
            { "@type": "City", name: "Portet-sur-Garonne" }
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services de plomberie",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage fuite d'eau" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débouchage canalisation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage et installation chauffe-eau" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage chauffage et chaudière" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Robinetterie et sanitaires" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création et rénovation de salle de bain" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose de cuisine" } },
            ],
          },
        }),
      },
    ],
  }),
  component: RootDocument,
})

function RootDocument() {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
