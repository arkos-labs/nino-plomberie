# Plan d'Implémentation SEO — Corrections Critiques

**Objectif:** Corriger tous les problèmes identifiés + surpasser concurrents top 5  
**Sans:** Création de blog (focus SEO technique + mots-clés)  
**Timeline:** 3-4 semaines

---

## 🔴 SEMAINE 1: Corrections Critiques (15 heures)

### 1. Ajouter Service Schema à Toutes Pages Service

**Fichier:** `src/routes/services/$service.tsx`

**Templates à ajouter** (pour chaque service):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://ninoplomberie.fr/services/fuite-d-eau#service",
  "name": "Réparation de fuite d'eau",
  "description": "Localisation et réparation urgente de fuites d'eau...",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://ninoplomberie.fr/#business"
  },
  "areaServed": ["Muret", "Toulouse", "Colomiers", "Tournefeuille", "Blagnac"],
  "aggregateRating": {
    "ratingValue": "4.4",
    "reviewCount": "78"
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://ninoplomberie.fr/contact"
    }
  }
}
```

**Services à schema-iser:**
1. Fuite d'eau
2. Débouchage
3. Chauffe-eau
4. Chauffage & Chaudière
5. Robinetterie
6. Salle de bain
7. Pose cuisine

**Temps:** 2-3 heures  
**Priorité:** 🔴 CRITIQUE  
**Impact:** +5-10% visibilité service queries

---

### 2. Convertir Images JPG → WebP

**Outils:** Squoosh.app (gratuit, pas inscription nécessaire)

**Images à traiter:**
- photo-01.jpg → photo-01.webp (+ JPEG fallback)
- photo-02.jpg → photo-02.webp
- ... (15 images au total)

**Résultats attendus:**
- photo-04.jpg: 343 KB → ~220 KB (35% réduction)
- photo-03.jpg: 215 KB → ~140 KB (35% réduction)
- Total savings: ~400-500 KB (28% réduction)

**Code HTML à changer:**

```html
<!-- AVANT -->
<img src="/realisations/photo-01.jpg" alt="..." />

<!-- APRÈS -->
<picture>
  <source srcset="/realisations/photo-01.webp" type="image/webp">
  <img src="/realisations/photo-01.jpg" alt="..." />
</picture>
```

**Temps:** 2-3 heures  
**Priorité:** 🔴 CRITIQUE  
**Impact:** Mobile FCP -30%, +1-2 secondes improvement

---

### 3. Implémenter Responsive Images (srcset)

**Plan:**
- Créer versions small (150-200px), medium (313px), large (600px) de chaque image
- Utiliser ImageMagick ou Squoosh pour redimensionner

**Code exemple:**

```html
<img 
  srcset="
    /realisations/photo-01-sm.jpg 375w,
    /realisations/photo-01-md.jpg 768w,
    /realisations/photo-01.jpg 1200w
  "
  sizes="(max-width: 600px) 100vw, 50vw"
  src="/realisations/photo-01.jpg"
  alt="..."
/>
```

**Images à générer:**
- 15 images × 3 tailles = 45 fichiers
- Outils gratuits: ImageMagick CLI ou Squoosh batch

**Temps:** 2-3 heures  
**Priorité:** 🔴 CRITIQUE  
**Impact:** Mobile bandwidth -40-60%

---

### 4. Fixer Canonical Tags

**Problème:** Canonical pointe vers non-www, site est www  
**Correction:**

```html
<!-- AVANT -->
<link rel="canonical" href="https://ninoplomberie.fr/" />

<!-- APRÈS -->
<link rel="canonical" href="https://www.ninoplomberie.fr/" />
```

**Fichiers à modifier:**
- `src/routes/__root.tsx` (layout principal)
- Vérifier toutes pages générées

**Temps:** 15 minutes  
**Priorité:** 🟡 MEDIUM  
**Impact:** Low (pero important pour Google)

---

### 5. Ajouter Breadcrumbs Visibles

**Fichier:** Créer composant `src/components/Breadcrumb.tsx`

```tsx
export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-600">
      {items.map((item, i) => (
        <span key={i}>
          <a href={item.url} className="hover:underline">{item.label}</a>
          {i < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  )
}
```

**Ajouter à:**
- Pages service (`/services/fuite-d-eau`, etc.)
- Page tarifs
- Page contact

**Temps:** 2 heures  
**Priorité:** 🟡 MEDIUM  
**Impact:** UX + internal linking

---

### 6. Update OG:image pour Social Sharing

**Problème:** og:image pointe vers logo (petit, non-engageant)  
**Solution:** Créer hero image 1200x630px

**Fichier à modifier:** `src/routes/__root.tsx`

```tsx
<meta property="og:image" content="https://www.ninoplomberie.fr/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Nino Plomberie — Plombier Muret 24h/24" />
```

**Image:** Créer design simple (Canva gratuit):
- Logo + "Nino Plomberie"
- "Plombier Muret & Toulouse"
- "24h/24 · 7j/7 · Garantie 2 ans"

**Temps:** 1 heure  
**Priorité:** 🟡 MEDIUM  
**Impact:** Shareability sur réseaux

---

### 7. Afficher Email sur Page Contact

**Fichier:** `src/routes/contact.tsx`

**Ajouter section:**

```tsx
<section className="bg-gray-50 p-6 rounded">
  <h3 className="font-bold mb-4">Coordonnées</h3>
  <div className="space-y-2">
    <p><strong>Téléphone:</strong> <a href="tel:+33650579620">06 50 57 96 20</a></p>
    <p><strong>Email:</strong> <a href="mailto:contact.ninoplomberie@gmail.com">contact.ninoplomberie@gmail.com</a></p>
    <p><strong>Adresse:</strong> 11 Rue François Arago, 31600 Muret</p>
    <p><strong>Horaires:</strong> 24h/24 · 7j/7</p>
  </div>
</section>
```

**Temps:** 20 minutes  
**Priorité:** 🟡 MEDIUM  
**Impact:** UX + clarity

---

## 🟡 SEMAINES 2-3: Expansion Contenu (18 heures)

### 8. Étoffer Pages Service (300-500 mots chacune)

**Structure pour chaque page:**

```
TITRE: "Service + Localisation" (ex: "Fuite d'eau à Muret et Toulouse")

H2: Qu'est-ce qu'une fuite d'eau?
- Définition simple
- Pourquoi c'est urgent
- Dommages potentiels

H2: Comment on détecte les fuites cachées?
- Signes d'alerte
- Méthodes de diagnostic (thermique, traçeur)
- Notre approche

H2: Causes communes des fuites
- Tuyauterie usée
- Joints défaillants
- Corrosion
- Installation défectueuse

H2: Conseils Prévention
- Maintenance régulière
- Gestes simples
- Quand faire intervenir artisan

H2: Notre Processus
- Appel diagnostic
- Visite & devis gratuit
- Réparation garantie 2 ans

H2: Communes servies
- Muret, Toulouse, Colomiers, etc.
- Temps intervalle estimé
```

**Longueur cible:** 300-400 mots par page  
**Pages:** 7 services  
**Temps:** 10 heures  
**Priorité:** 🔴 CRITIQUE  
**Impact:** +20-40% trafic

---

## 🎯 RÉSUMÉ IMPLÉMENTATION SEMAINE 1

| Tâche | Temps | Priorité | Impact |
|-------|-------|----------|--------|
| Service Schema (7 pages) | 2-3 hrs | 🔴 | +5-10% |
| WebP conversion | 2-3 hrs | 🔴 | -30% mobile load |
| Responsive images | 2-3 hrs | 🔴 | -40% bandwidth |
| Canonical fix | 15 min | 🟡 | Low |
| Breadcrumbs | 2 hrs | 🟡 | UX + linking |
| OG:image | 1 hr | 🟡 | Social |
| Email visible | 20 min | 🟡 | UX |
| **TOTAL** | **~13 hrs** | | **+50-80% metrics** |

---

## ⏳ Attente: Analyse Concurrentielle

L'agent analyse les concurrents top 5 pour identifier:
- Mots-clés qu'ils rank MAIS vous n'avez pas
- Pages/sections qu'ils ont MAIS vous n'avez pas
- Stratégie SEO détectée

**Résultats:** Recommandations spécifiques pour passer devant chaque concurrent.

