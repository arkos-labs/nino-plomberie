# Critical SEO Gaps — Nino Plomberie

**Priority:** CRITICAL - Must fix before major ranking improvements possible

---

## 1. Missing JSON-LD Schema Markup (CRITICAL)

**Severity:** 🔴 CRITICAL  
**Impact:** High - Directly affects local search, AI search visibility, rich snippets

### Current State
- ❌ NO LocalBusiness schema on homepage
- ❌ NO Organization schema
- ❌ NO Service schemas on service pages (/services/fuite-d-eau, etc.)
- ❌ NO FAQPage schema (site has FAQ section but no schema)
- ❌ NO AggregateRating schema (blocks Google review rich snippets)
- ❌ NO BreadcrumbList schema (navigation exists but not marked up)

### Why This Matters

#### For Google Local Search
- **LocalBusiness** schema is essential for appearing in Google Local 3-pack
- **AggregateRating** schema enables rich snippets with star ratings and review count
- Missing schema = reduced visibility in "plumber near me" searches

#### For AI Search (ChatGPT, Perplexity, Claude, Bing Copilot, Google AI Overviews)
- AI systems extract data from structured markup (JSON-LD) first
- Without schema, AI systems struggle to reliably cite:
  - Business name, address, phone
  - Service offerings
  - Business hours
  - Reviews/ratings
- Even with well-written content, lack of schema **significantly reduces AI discoverability**

#### For Google Search General
- **Service** schemas help Google understand what services are offered
- **FAQPage** schema improves visibility in Google's featured snippets
- **BreadcrumbList** improves crawlability and navigation understanding

### What Needs to Be Added

#### 1. LocalBusiness Schema (Priority: CRITICAL)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ninoplomberie.fr/#business",
  "name": "Nino Plomberie",
  "image": "https://ninoplomberie.fr/logo.png",
  "description": "Artisan plombier-chauffagiste à Muret (31) depuis plus de 20 ans. Dépannage urgent 24h/24 et 7j/7.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11 Rue François Arago",
    "addressLocality": "Muret",
    "postalCode": "31600",
    "addressCountry": "FR",
    "addressRegion": "Occitanie"
  },
  "telephone": "+33650579620",
  "email": "contact.ninoplomberie@gmail.com",
  "url": "https://ninoplomberie.fr",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "24:00"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.5118",
    "longitude": "1.3903"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "ratingCount": 78,
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$$",
  "areaServed": [
    "Muret",
    "Toulouse",
    "Blagnac",
    "Colomiers",
    "Tournefeuille",
    "Balma",
    "Saint-Orens",
    "Castanet",
    "Labège",
    "Portet-sur-Garonne"
  ],
  "servesCuisine": [],
  "sameAs": [
    "https://maps.google.com/?cid=9239381501337303445"
  ],
  "knowsLanguage": "fr"
}
```

#### 2. Organization Schema (Priority: HIGH)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ninoplomberie.fr/#organization",
  "name": "Nino Plomberie",
  "url": "https://ninoplomberie.fr",
  "logo": "https://ninoplomberie.fr/logo.png",
  "sameAs": [
    "https://maps.google.com/?cid=9239381501337303445"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Emergency Services",
    "telephone": "+33650579620",
    "email": "contact.ninoplomberie@gmail.com",
    "hoursAvailable": "24/7"
  }
}
```

#### 3. Service Schemas (Priority: HIGH - one per service page)
For `/services/fuite-d-eau`, `/services/debouchage`, `/services/chauffe-eau`, etc.
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Réparation de fuite d'eau",
  "description": "Détection et réparation urgente de fuites d'eau. Disponible 24h/24 et 7j/7 à Muret et Toulouse.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://ninoplomberie.fr/#business"
  },
  "areaServed": [
    "Muret",
    "Toulouse",
    "Haute-Garonne"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://ninoplomberie.fr/services/fuite-d-eau",
    "servicePhone": "+33650579620"
  }
}
```

#### 4. FAQPage Schema (Priority: HIGH)
For the FAQ section on homepage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels travaux réalise Nino Plomberie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nino Plomberie assure le dépannage plomberie (fuite d'eau, débouchage de WC, évier ou canalisation, ..."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous en urgence la nuit et le week-end ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nino Plomberie est joignable 24h/24 et 7j/7, y compris le week-end et les jours fériés..."
      }
    }
    // ... etc for all FAQ items
  ]
}
```

#### 5. BreadcrumbList Schema (Priority: MEDIUM)
For main pages
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://ninoplomberie.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://ninoplomberie.fr/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Fuite d'eau",
      "item": "https://ninoplomberie.fr/services/fuite-d-eau"
    }
  ]
}
```

---

## 2. Impact on SEO & Visibility

### Before Adding Schema
- ❌ Limited local search visibility
- ❌ No review rich snippets in Google
- ❌ AI systems (ChatGPT, Perplexity, Claude) struggle to cite business info
- ❌ No FAQ rich snippets
- ❌ Breadcrumbs not understood by Google

### After Adding Schema
- ✅ Eligible for Google Local 3-pack (with proper optimization)
- ✅ Review stars appear in search results
- ✅ AI systems can reliably cite business data
- ✅ FAQ answers appear in featured snippets
- ✅ Improved crawlability and indexation
- ✅ Higher CTR from search results (rich snippets attract more clicks)

---

## 3. Implementation Timeline

**Effort:** 2-4 hours (developer)  
**Priority:** 🔴 Do this FIRST, before other optimizations

---

## 4. Testing & Validation

After implementation:
1. ✅ Validate with Google Schema Markup Tester
2. ✅ Validate with JSON-LD.org validator
3. ✅ Test in Rich Result Test (Google)
4. ✅ Check Google Search Console for schema errors
5. ✅ Re-crawl pages to trigger schema indexation

---

**Next Steps:**
- [ ] Implement LocalBusiness schema on homepage
- [ ] Implement Service schemas on each service page
- [ ] Add FAQPage schema to homepage (or dedicated FAQ page)
- [ ] Add BreadcrumbList schemas
- [ ] Validate all schemas
- [ ] Monitor Google Search Console for rich result generation

