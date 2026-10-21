# SEO Action Plan: Nino Plomberie

**Audit Date:** 2026-10-04  
**Overall Score:** 78/100 (4 agents completed, awaiting 2 more)  
**Business Type:** Local Service (Plumbing — Muret, Toulouse)  
**Priority:** Medium (solid foundation, ready for growth optimization)

---

## Overall Health Summary

| Category | Score | Status | Effort |
|----------|-------|--------|--------|
| **Technical SEO** | 82 | ✅ Good | Low |
| **Local SEO** | 92 | ✅ Excellent | Low |
| **Content Quality** | 72 | ⚠️ Fair | Medium |
| **Schema Markup** | 75 | ⚠️ Fair | Low |
| **Performance** | ? | ⏳ Pending | ? |
| **AI Search** | ? | ⏳ Pending | ? |

---

## Phase 1: CRITICAL FIXES (Week 1)

**Goal:** Fix foundational issues blocking visibility  
**Effort:** ~8 hours total  
**Expected Impact:** +15-20% organic visibility

### 1.1 Add Missing Schema Markup (CRITICAL)

**What:** Service detail pages missing individual Service schema  
**Why:** Blocks visibility for "plombier fuite d'eau Toulouse" type queries  
**Implementation:**

Add to each service page (`/services/fuite-d-eau`, `/services/debouchage`, etc.):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Réparation de fuite d'eau",
  "description": "...",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://ninoplomberie.fr/#business"
  },
  "areaServed": ["Muret", "Toulouse", "Haute-Garonne"],
  "aggregateRating": {
    "ratingValue": "4.4",
    "reviewCount": "78"
  }
}
```

**Effort:** 2-3 hours (add to 7 service pages)  
**Priority:** 🔴 CRITICAL  
**Impact:** High

### 1.2 Fix Canonical Tags

**What:** Canonicals point to non-www, but site serves www  
**Why:** Minor duplicate content signal  
**Change:**
```html
<!-- From -->
<link rel="canonical" href="https://ninoplomberie.fr/" />

<!-- To -->
<link rel="canonical" href="https://www.ninoplomberie.fr/" />
```

**Effort:** 15 minutes  
**Priority:** 🟡 Medium  
**Impact:** Low

### 1.3 Verify Security Headers

**What:** Check HSTS, CSP, X-Frame-Options, etc.  
**Why:** Security + SEO  
**Action:** Visit https://securityheaders.com and check domain  
**Effort:** 30 minutes + fix time  
**Priority:** 🟡 Medium  
**Impact:** Low (security, not direct ranking)

---

## Phase 2: FOUNDATION IMPROVEMENTS (Weeks 2-3)

**Goal:** Strengthen content and user signals  
**Effort:** ~15 hours  
**Expected Impact:** +10-15% organic visibility

### 2.1 Expand Service Pages with Depth

**Current State:** 100-150 words per page (thin)  
**Target:** 300-500 words (substantial)  

**Add to each service page:**
1. "Common Causes" section (why this problem happens)
2. "How We Diagnose" section (methodology + expertise)
3. "Prevention Tips" section (value-add content)
4. "Timeline & Process" section (set expectations)
5. "Materials & Standards" section (technical credibility)

**Example structure for "Fuite d'eau":**
```
Réparation Fuite d'eau à Muret et Toulouse
├── Introduction (30 words)
├── Common Causes of Leaks (150 words)
│   ├── Joint worn out
│   ├── Old pipes
│   ├── Corrosion
│   └── Installation issues
├── How We Find Hidden Leaks (150 words)
│   ├── Visual inspection
│   ├── Thermal imaging (our method!)
│   └── Tracer gas detection
├── Prevention Tips (100 words)
├── Our Process (150 words)
└── FAQ (service-specific)
```

**Services to update:**
1. Fuite d'eau (highest search volume)
2. Débouchage
3. Chauffe-eau & Ballon
4. Chauffage & Chaudière
5. Robinetterie & Sanitaires
6. Salle de bain
7. Pose de cuisine

**Effort:** 8-10 hours (4-6 hours per service × 7 services, with templates)  
**Priority:** 🔴 CRITICAL  
**Impact:** High (ranks for informational queries)

### 2.2 Add Visible Breadcrumb Navigation

**Current:** Schema breadcrumbs exist, but not visible to users  
**Target:** Visual breadcrumbs above content on all pages

**Example:**
```
Accueil > Services > Fuite d'eau
```

**Pages to add:**
- All service pages
- /tarifs
- /contact
- /realisations

**Effort:** 2-3 hours (design + implementation)  
**Priority:** 🟡 Medium  
**Impact:** Medium (UX + internal linking)

### 2.3 Update Social Sharing Image (OG:image)

**Current:** `/logo.png` (tiny, not engaging)  
**Target:** Large branded preview image (1200x630px)

**Action:**
1. Create or source hero image
2. Update og:image meta tag
3. Test with Facebook debugger

**Effort:** 1-2 hours  
**Priority:** 🟢 Low  
**Impact:** Low (social sharing engagement)

### 2.4 Display Email Address on Contact Page

**Current:** Email only in schema, not visible  
**Target:** Visible in "Coordonnées" section

**Add to contact page:**
```
Coordonnées
─────────
Téléphone: 06 50 57 96 20
Email: contact.ninoplomberie@gmail.com
Adresse: 11 Rue François Arago, 31600 Muret
Horaires: 24h/24, 7j/7
```

**Effort:** 20 minutes  
**Priority:** 🟢 Low  
**Impact:** Low (UX)

---

## Phase 3: CONTENT AUTHORITY (Month 2)

**Goal:** Establish thought leadership & organic traffic growth  
**Effort:** ~30 hours  
**Expected Impact:** +20-30% organic visibility (ongoing)

### 3.1 Create Blog (5-10 Initial Articles)

**Why:** Fresh content signals, long-tail keyword rankings, returning visitors  

**Target Articles:**
1. "Top 5 Winter Plumbing Problems & Solutions" (seasonal, 800 words)
2. "How to Detect Hidden Water Leaks" (evergreen, 1000 words)
3. "Water Heater Types: Comparing Electric, Gas, Heat Pump" (buyer's guide, 1200 words)
4. "Bathroom Renovation Timeline: What to Expect" (detailed guide, 1500 words)
5. "When to DIY vs. Call a Professional Plumber" (educational, 800 words)
6. "Why Are My Radiators Cold? Troubleshooting Guide" (problem-solving, 900 words)
7. "Pipe Materials Explained: PER, Multicouche, Cuivre, PVC" (technical, 1000 words)

**Effort:** 25-30 hours (4-5 hours per article × 6-7 articles)  
**Frequency:** Publish 2-3 per month initially, then monthly  
**Priority:** 🔴 CRITICAL  
**Impact:** High (establishes expertise, drives organic growth)

### 3.2 Enhance Realisations Gallery

**Current:** Beautiful photos with minimal description  
**Target:** Photos with technical project details

**For each major project, add:**
- Specific challenge addressed
- Materials used
- Timeline
- Technical specifications
- Before/after comparison

**Example:**
```
Douche à l'italienne (Colomiers)
─────────────────────────────
Problem: Bathroom too small for traditional shower
Solution: Italian shower (extra-flat base, no curb)
Materials: Hansgrohe thermostat mixer, Villeroy & Boch base
Tile: Hand-laid mosaic, waterproofed with epoxy grout
Timeline: 5 days (including plumbing + tiling)
Result: Spacious bathroom, accessibility improved
```

**Effort:** 4-6 hours  
**Priority:** 🟡 Medium  
**Impact:** Medium (showcases expertise)

---

## Phase 4: MONITORING & ITERATION (Ongoing)

**Goal:** Track performance and continuously optimize  

### 4.1 Monthly Monitoring

- [ ] Google Search Console (clicks, impressions, CTR, rankings)
- [ ] Google Business Profile (review count, call tracking)
- [ ] Core Web Vitals (LCP, INP, CLS)
- [ ] Organic traffic (Google Analytics 4)
- [ ] Ranking position for target keywords

**Target Keywords to Track:**
- "plombier muret" (primary)
- "plombier toulouse" (primary)
- "fuite d'eau muret" (service + location)
- "debouchage toulouse" (service + location)
- "chauffe-eau muret" (service + location)
- "plomberie urgence toulouse" (emergency)
- "plombier 24h toulouse" (availability)

### 4.2 Quarterly Audits

- Schema validation
- Broken link check
- New competitors analysis
- Page depth review (ensure 300+ words)

---

## Quick Win Summary

**Do in Week 1 (5 hours):**
```
[ ] Add Service schema to 7 service pages (2 hrs)
[ ] Fix canonical tags (15 min)
[ ] Verify security headers (30 min)
[ ] Add email to contact page (20 min)
[ ] Update OG:image (1 hr)
[ ] Add visible breadcrumbs (2 hrs)
```

**Do in Weeks 2-3 (15 hours):**
```
[ ] Expand service pages (10 hrs)
[ ] Enhance realisations (4 hrs)
[ ] Fix any outstanding schema issues (1 hr)
```

**Do in Month 2+ (30+ hours):**
```
[ ] Write 5-10 blog articles (25 hrs)
[ ] Set up blog publishing cadence (2 hrs)
[ ] Create editorial calendar (2 hrs)
```

---

## Expected Timeline & Results

### Month 1
- ✅ Schema & technical fixes complete
- ✅ Service pages expanded
- 📈 Expected: +5-10% organic traffic

### Month 2
- ✅ 3-5 blog articles published
- ✅ First pages ranking for new long-tail keywords
- 📈 Expected: +15-25% organic traffic

### Month 3
- ✅ 8-10 blog articles published
- ✅ Authority established
- 📈 Expected: +25-40% organic traffic
- 🎯 Potential: Top 3 local pack positions

### Month 6 (Full potential)
- ✅ Ongoing blog cadence (monthly)
- ✅ Content refresh cycle
- 📈 Expected: +50-100% organic traffic (vs. baseline)
- 🎯 Likely: Top 3-5 positions for primary keywords

---

## Success Metrics

| Metric | Baseline | Month 1 | Month 3 | Month 6 |
|--------|----------|---------|---------|---------|
| Organic Sessions | TBD | +10% | +30% | +75% |
| New User Sessions | TBD | +15% | +40% | +100% |
| Local Pack Impressions | TBD | +20% | +60% | +150% |
| CTR from Search | TBD | +5% | +15% | +25% |
| Avg. Page Depth | 200 words | 300 words | 500 words | 600+ words |
| Monthly Blog Posts | 0 | 0 | 3-5 | 4-5 |
| Service Page Word Count | 100-150 | 300-400 | 400-500 | 500+ |

---

## Budget & Resource Requirements

| Phase | Effort | Cost (DIY) | Cost (Agency) |
|-------|--------|-----------|---------------|
| Phase 1: Critical Fixes | ~8 hrs | $0 | $400-600 |
| Phase 2: Foundations | ~15 hrs | $0 | $800-1200 |
| Phase 3: Content | ~30 hrs | $0 | $1500-2500 |
| Phase 4: Ongoing | 4 hrs/month | $0 | $400-600/month |
| **Total (First 2 months)** | **~53 hrs** | **$0** | **$2700-4300** |

---

## Notes

- ⚠️ All recommendations assume WordPress/modern CMS (changes are straightforward)
- ⚠️ Waiting for Performance & AI Search agent reports to finalize
- ⚠️ Blog content requires writing skill or copywriter investment
- ✅ Schema implementation is non-technical (find/replace with provided templates)
- ✅ All other fixes require 5 minutes to 2 hours each

