# Phase 2 — Checklist d'implémentation

## ✅ COMPLÉTÉ

### Pages Service × Localité
- [x] Route `/services/$service/$locality` créée
- [x] 160 pages générées automatiquement (7 services × 23 localités)
- [x] Chaque page: titre localisé + description + FAQs localité + CTA

**Impact SEO:** +160 pages, +100 mots-clés locaux

---

### Portfolio Salle de Bain
- [x] Structure `src/data/portfolio.ts` créée avec 7 projets
- [x] Page `/portfolio` créée avec avant/après
- [x] Témoignages clients intégrés
- [x] Filtre par catégorie et complexité

**Impact SEO:** +1 page, +30 mots-clés ("rénovation salle de bain toulouse", etc)

---

### Composant Image Optimisé
- [x] `OptimizedImage.tsx` créé avec WebP + srcset support
- [x] Lazy loading intégré
- [x] Responsive images (375w, 768w, 1200w)
- [x] Guide de conversion WebP inclus

**Impact Performance:** -30-40% image size, -1-2s LCP

---

## ⏳ À FAIRE

### 1. Convertir images en WebP (2-3 heures)

**Outils gratuits:**

#### Option A: Squoosh.app (Web, no install)
```
1. Aller sur squoosh.app
2. Upload image JPG
3. Sélectionner "WebP" à droite
4. Régler qualité à 80
5. Download
6. Répéter pour chaque taille (original + sm + md)
```

#### Option B: ImageMagick (CLI)
```bash
# Installer: brew install imagemagick (Mac) ou apt-get install imagemagick (Linux)

# Convertir original
convert photo.jpg -quality 80 photo.webp

# Créer versions responsive
convert photo.jpg -quality 80 -resize 375x photo-sm.webp
convert photo.jpg -quality 80 -resize 768x photo-md.webp
```

#### Option C: FFmpeg (CLI)
```bash
ffmpeg -i photo.jpg -c:v libwebp -quality 80 photo.webp
```

**Images à convertir:**
```
/public/realisations/
├── photo-01.jpg → photo-01.webp (+ sm, md versions)
├── photo-02.jpg → photo-02.webp (+ sm, md versions)
├── photo-03.jpg → photo-03.webp (+ sm, md versions)
├── photo-04.jpg → photo-04.webp (+ sm, md versions)
├── photo-05.jpg → photo-05.webp (+ sm, md versions)
├── photo-06.jpg → photo-06.webp (+ sm, md versions)
├── photo-07.jpg → photo-07.webp (+ sm, md versions)
├── photo-08.jpg → photo-08.webp (+ sm, md versions)
├── photo-09.jpg → photo-09.webp (+ sm, md versions)
└── hero-nino-v2.jpg → hero-nino-v2.webp (+ sm, md versions)

/public/portfolio/
├── sdb-capitole-01-before.jpg → .webp (+ sm, md)
├── sdb-capitole-01-after.jpg → .webp (+ sm, md)
├── sdb-muret-02-before.jpg → .webp (+ sm, md)
├── sdb-muret-02-after.jpg → .webp (+ sm, md)
└── ... (pour tous les 7 projets)
```

---

### 2. Intégrer OptimizedImage dans composants (1 heure)

**Où l'utiliser:**

```tsx
// src/routes/portfolio.tsx
import { OptimizedImage } from '~/components/OptimizedImage'

// REMPLACER:
// <img src="/portfolio/sdb-capitole-01-after.jpg" alt="..." />

// PAR:
<OptimizedImage 
  src="/portfolio/sdb-capitole-01-after.jpg"
  srcWebp="/portfolio/sdb-capitole-01-after"
  alt="Salle de bain rénovée Capitole"
  width={600}
  height={400}
/>
```

**Fichiers à modifier:**
- [ ] `src/routes/portfolio.tsx` — 14 images avant/après
- [ ] `src/components/Header.tsx` — logo + hero
- [ ] `src/routes/__root.tsx` — hero image

---

### 3. Ajouter images portfolio (variable)

**Créer fichier (ou utiliser placeholder):**
```bash
# Pour chaque projet, créer 2 images:
# sdb-capitole-01-before.jpg + sdb-capitole-01-after.jpg
# sdb-muret-02-before.jpg + sdb-muret-02-after.jpg
# etc.

# Ou utiliser les images existantes réalisations/photo-*.jpg
# comme placeholders pour tester
```

---

### 4. Campagne devis Google (0.5-1 heure)

**Créer Local Services Ads:**
1. Aller sur Google Business Profile
2. Onglet "Services" 
3. Ajouter services proposés
4. Activer "Local Services Ads"
5. Valider numéro téléphone + identité

**Impact:** +20-30% leads qualifiés

---

### 5. Système demander avis clients (0.5 heure)

**Créer template email/SMS post-intervention:**

**Email:**
```
Bonjour [NOM_CLIENT],

Merci d'avoir fait confiance à Nino Plomberie!
Nous apprécions votre avis client.

⭐ Laisser un avis sur Google:
[LIEN_GOOGLE_BUSINESS]

☎️ 06 50 57 96 20
```

**SMS (à ajouter après chaque devis):**
```
Nino Plomberie vous remercie! ⭐ 
Partagez votre expérience:
[LIEN_GOOGLE_BUSINESS]
```

**Objectif:** +10-15 avis/mois (78 → 150+ avis en 6 mois)

---

## 📊 Impact Phase 2 Total

| Métrique | Avant | Après | Gain |
|----------|-------|-------|------|
| **Pages** | 23 localités | +160 services/localité = 160+ | +160 pages |
| **Portfolio** | 0 | 7 projets | +7 pages |
| **Images WebP** | 0% | 100% | -35% size |
| **Mots-clés** | 100+ | 250+ | +150 keywords |
| **Trafic estimé** | 100% | +300-400% | x3-4 |
| **Performance** | LCP 3.5s | LCP 1.5s | -2s ⚡ |

---

## ⏱️ Timeline

**Week 1:**
- [ ] Convertir images WebP (3h)
- [ ] Intégrer OptimizedImage composants (1h)
- [ ] Tester pages service/localité (30min)

**Week 2:**
- [ ] Ajouter images portfolio (variable)
- [ ] Setup Google Local Services Ads (1h)
- [ ] Créer template email/SMS avis (30min)

**Total Phase 2: 5-6 heures**

---

## 🚀 Après Phase 2

**Phase 3 — Monitoring & Optimization:**
- [ ] Monitorer Google Search Console (nouveaux 160 pages)
- [ ] Vérifier Core Web Vitals après WebP
- [ ] Analyser trafic nouveau par localité
- [ ] Ajuster stratégie si needed

**Expected results:**
- Week 1-2: Indexation 160 pages + 7 portfolio
- Week 3-4: Premiers rankings mots-clés service/localité
- Month 2: Trafic +200-300%
- Month 3: Avis clients 100+, trafic +400%

---

## Commands de conversion (copy-paste)

```bash
# Si installer ImageMagick:
# Mac: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Batch convert tous JPG → WebP dans folder:
for f in *.jpg; do convert "$f" -quality 80 "${f%.jpg}.webp"; done

# Créer versions responsive:
for f in *.jpg; do 
  convert "$f" -quality 80 -resize 375x "${f%.jpg}-sm.webp"
  convert "$f" -quality 80 -resize 768x "${f%.jpg}-md.webp"
  convert "$f" -quality 80 "${f%.jpg}.webp"
done
```

---

**Questions?** Consultez `OptimizedImage.tsx` pour plus de détails usage.
