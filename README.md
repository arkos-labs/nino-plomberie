# Nino Plomberie — Site Web Officiel

Site web moderne et optimisé SEO pour **Nino Plomberie**, entreprise de plomberie-chauffage basée à Muret (31600), Haute-Garonne.

## 📋 Infos Entreprise

- **Raison Sociale** : Nino Plomberie 31
- **Responsable** : Christophe Hajjar
- **SIREN** : 532 365 988
- **SIRET** : 532 365 988 00023
- **Code NAF/APE** : 4322A (Travaux d'installation d'eau et de gaz en tous locaux)
- **Adresse** : 11 Rue François Arago, 31600 Muret
- **Téléphone** : 06 50 57 96 20
- **Email** : contact@nino-plomberie31.fr
- **Site Web** : https://ninoplomberie.fr
- **Note Google** : 4,4/5 (78 avis)
- **Disponibilité** : 24h/24, 7j/7

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site s'ouvre sur `http://localhost:3000`

### Build Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Framework** : [TanStack Start](https://tanstack.com/start) (React 19 + Vite)
- **Routing** : [TanStack Router](https://tanstack.com/router)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icons** : [Lucide React](https://lucide.dev/)
- **Forms** : [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email** : [Resend](https://resend.com/)
- **Hébergement** : [Vercel](https://vercel.com/)
- **Maps** : [Mapbox](https://mapbox.com/)

## 📁 Structure du Projet

```
src/
├── routes/              # Pages du site (routing file-based)
│   ├── index.tsx       # Accueil
│   ├── services/       # Pages services
│   ├── a-propos.tsx    # À propos
│   ├── realisations.tsx # Réalisations
│   ├── tarifs.tsx      # Tarifs
│   ├── zones.tsx       # Zones d'intervention
│   ├── contact.tsx     # Formulaire contact
│   ├── mentions-legales.tsx
│   └── politique-confidentialite.tsx
├── components/         # Composants réutilisables
│   ├── PageHero.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   └── FaqSection.tsx
├── data/              # Données (services, communes, réalisations)
├── lib/               # Utilitaires (site.ts avec infos entreprise)
└── styles.css        # Styles globaux Tailwind
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Builder pour production
npm run preview      # Prévisualiser la build production
npm run lint         # Vérifier avec ESLint
npm run format       # Formater le code avec Prettier
npm run check        # Vérifier la mise en forme
npm run typecheck    # Vérifier les types TypeScript
```

## 📱 Pages Principales

- **Accueil** (`/`) - Page d'accueil avec héro, services, réalisations, avis
- **Services** (`/services`) - Liste de tous les services
- **Service Détail** (`/services/[slug]`) - Page détaillée par service
- **À Propos** (`/a-propos`) - Présentation de Nino
- **Réalisations** (`/realisations`) - Galerie des chantiers réalisés
- **Tarifs** (`/tarifs`) - Grille de prix indicatifs
- **Zones** (`/zones`) - Communes d'intervention
- **Intervention par Ville** (`/intervention/[ville]`) - Pages SEO géographiques
- **Rendez-vous** (`/rendez-vous`) - Prise de RDV avec Calendly
- **Contact** (`/contact`) - Formulaire de contact
- **Mentions Légales** (`/mentions-legales`)
- **Politique de Confidentialité** (`/politique-confidentialite`)

## 🎯 Fonctionnalités Clés

✅ **SEO Optimisé**
- Structured Data (JSON-LD)
- Meta tags (OpenGraph, Canonical)
- Sitemap XML
- Breadcrumbs
- Pages géographiques dynamiques

✅ **Performance**
- Images optimisées (lazy loading)
- Code splitting automatique
- Cache Vercel

✅ **Accessibilité**
- ARIA labels
- Navigation au clavier
- Contraste des couleurs

✅ **Responsive**
- Mobile-first design
- Adapté à tous les écrans

✅ **Formulaires**
- Validation Zod
- Envoi d'emails avec Resend
- Diagnostic IA des photos

## 🌐 Déploiement sur Vercel

### Première fois

1. Push ce repo sur GitHub
2. Dans Vercel : **Add New > Project** et importer le repo
3. Vérifier les paramètres TanStack Start
4. Ajouter les variables d'environnement (voir `.env.example`)
5. Deploy

### Variables d'Environnement Requises

```env
# Vercel Blob (uploads)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# Resend (emails)
RESEND_API_KEY=re_...
EMAIL_FROM=nino@ninoplomberie31.fr
EMAIL_TO=contact@ninoplomberie31.fr

# Mapbox (cartes)
VITE_MAPBOX_TOKEN=pk.eyJ1...

# Site
VITE_SITE_URL=https://ninoplomberie.fr
```

## 📄 Mentions Légales

- **Mentions Légales** : `/mentions-legales`
- **Politique de Confidentialité** : `/politique-confidentialite`
- Conformes au **RGPD (UE 2016/679)**

## 📞 Support & Contact

Pour toute question concernant ce site :
- **Email** : contact@nino-plomberie31.fr
- **Téléphone** : 06 50 57 96 20
- **Adresse** : 11 Rue François Arago, 31600 Muret

## 📝 Licence

© 2024 Nino Plomberie 31. Tous droits réservés.

---

**Dernière mise à jour** : Octobre 2024
