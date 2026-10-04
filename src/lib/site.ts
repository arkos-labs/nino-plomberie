// Informations officielles de l'entreprise — source unique pour le SEO et les données structurées.
// Sources : fiche Google Business + site historique nino-plomberie31.fr
export const SITE_URL = "https://www.ninoplomberie.fr"

export const BUSINESS = {
  name: "Nino Plomberie",
  legalName: "Nino Plomberie 31",
  director: "Christophe Hajjar",
  siren: "532365988",
  siret: "53236598800023",
  naf: "4322A",
  phone: "06 50 57 96 20",
  phoneIntl: "+33650579620",
  email: "contact.ninoplomberie@gmail.com",
  street: "11 Rue François Arago",
  postalCode: "31600",
  city: "Muret",
  region: "Occitanie",
  country: "France",
  lat: 43.4589326,
  lng: 1.3418356,
  rating: "4.4",
  reviewCount: "78",
  googleMapsUrl: "https://maps.google.com/?cid=9239381501337303445",
  experience: "plus de 20 ans",
} as const

export const BUSINESS_ID = `${SITE_URL}/#business`

export type Faq = { q: string; a: string }

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/** Script JSON-LD pour l'option `head.scripts` de TanStack Router */
export function ldScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) }
}

/** Balises canonical + Open Graph par page */
export function pageHead(opts: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${opts.path}`
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }
}
