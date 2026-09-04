// src/routes/__root.tsx
import { HeadContent, Scripts, createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import appCss from "../styles.css?url"

const SITE_URL = "https://ninoplomberie31.fr"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1e3a5f" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nino Plomberie 31" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Nino Plomberie 31 — Plombier Toulouse" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Nino Plomberie 31",
          description: "Artisan plombier à Toulouse et en Haute-Garonne — urgences 24h/7j",
          url: "https://ninoplomberie31.fr",
          telephone: "+33650579620",
          email: "contact@nino-plomberie31.fr",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toulouse",
            postalCode: "31000",
            addressCountry: "FR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.6047,
            longitude: 1.4442,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "07:00",
              closes: "20:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "200",
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
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation chauffe-eau" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débouchage canalisation" } },
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
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{ position: "bottom-right" }}
            plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
