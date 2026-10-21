export interface BlogArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: 'conseils' | 'maintenance' | 'urgence' | 'actualites'
  readTime: number
  image?: string
  seoKeywords: string[]
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'detecter-fuite-eau',
    title: 'Comment détecter une fuite d\'eau à Muret et alentours',
    excerpt: 'Les fuites d\'eau peuvent causer des dégâts importants. Découvrez comment identifier rapidement une fuite avant qu\'elle n\'empire.',
    author: 'Nino Plomberie',
    publishedAt: '2026-10-15',
    category: 'conseils',
    readTime: 5,
    seoKeywords: ['fuite d\'eau', 'détection', 'Muret', 'plombier'],
    image: '/blog/fuite-eau.jpg',
    content: `## Comment détecter une fuite d'eau

Les fuites d'eau sont l'un des problèmes plomberie les plus courants. À Muret et alentours, les variations de température et la qualité de l'eau peuvent accélérer l'usure des tuyauteries.

### Signes avant-coureurs d'une fuite

1. **Augmentation inexplicable de la facture d'eau** - Si votre consommation a subitement augmenté sans changement d'utilisation, c'est souvent le premier signe.

2. **Taches d'humidité** - Consultez les murs, plafonds et sols. Des taches d'eau marron ou verdâtre indiquent une fuite.

3. **Bruits suspects** - Écoutez des bruits d'eau qui coule derrière les murs ou sous les planchers.

4. **Odeurs de moisi** - Une odeur persistante de moisi peut signaler une accumulation d'humidité due à une fuite cachée.

5. **Pression d'eau faible** - Si votre pression baisse progressivement, une fuite peut être en cause.

### Comment localiser la fuite

**Cas de fuite visible** : Videz les zones sous les tuyaux et la tuyauterie exposée pour identifier le point d'origine.

**Cas de fuite cachée** :
- Fermez tous les robinets
- Relevez le compteur d'eau
- Attendez 1-2 heures sans utiliser l'eau
- Vérifiez si le compteur a augmenté

### Quand appeler un plombier

Ne pas intervenir sur une fuite cachée soi-même. Les professionnels de Nino Plomberie disposent d'équipement de détection spécialisé pour localiser rapidement les fuites sans intervention destructive.

**Ne pas attendre** : Plus vite la fuite est réparée, moins le dégâtre des eaux augmentera et moins vos factures s'alourdiront.

Contactez Nino Plomberie pour une intervention rapide et efficace à Muret, Toulouse et alentours.`,
  },
  {
    id: '2',
    slug: 'entretien-chauffe-eau',
    title: 'Entretien du chauffe-eau : nos conseils pour l\'hiver',
    excerpt: 'L\'hiver approche. Préparez votre chauffe-eau pour éviter les pannes au pire moment.',
    author: 'Nino Plomberie',
    publishedAt: '2026-10-10',
    category: 'maintenance',
    readTime: 6,
    seoKeywords: ['chauffe-eau', 'entretien', 'hiver', 'maintenance'],
    image: '/blog/chauffe-eau.jpg',
    content: `## Entretien du chauffe-eau : préparation pour l'hiver

L'hiver est une période où le chauffe-eau fonctionne à plein régime. Un entretien régulier peut vous éviter une panne coûteuse au moment où vous en avez le plus besoin.

### Pourquoi entretenir son chauffe-eau

Un chauffe-eau bien entretenu :
- Consomme moins d'énergie
- Chauffe l'eau plus rapidement
- Dure plus longtemps
- Fonctionne de manière plus sécuritaire

### L'entretien annuel essentiel

**Détartrage** : Le calcaire s'accumule dans le réservoir et réduit l'efficacité. Un détartrage annuel peut augmenter la durée de vie de 5 à 10 ans.

**Vérification de la résistance** : Une résistance encrassée consomme plus d'électricité. Un professionnel peut la nettoyer ou la remplacer.

**Inspection du thermostat** : Assurez-vous qu'il maintient la bonne température (généralement 55-60°C).

**Contrôle de la tuyauterie** : Vérifiez l'absence de fuites, de corrosion ou de fissures.

### Signes d'un chauffe-eau défaillant

- L'eau devient tiède ou froide anormalement vite
- Des bruits de crépitement proviennent du réservoir
- Eau rouillée ou trouble
- Fuites autour du réservoir

### Quand appeler un professionnel

Nino Plomberie propose des services d'entretien et de maintenance à Muret et région toulousaine. Nous recommandons un détartrage tous les 1-2 ans selon la dureté de votre eau.`,
  },
  {
    id: '3',
    slug: 'debouchage-canalisation',
    title: 'Débouchage de canalisation : quand faire appel à un professionnel',
    excerpt: 'Les canalisations bouchées sont désagréables. Découvrez quand et pourquoi faire appel à un plombier professionnel.',
    author: 'Nino Plomberie',
    publishedAt: '2026-09-25',
    category: 'conseils',
    readTime: 7,
    seoKeywords: ['débouchage', 'canalisation', 'bouchon', 'plombier'],
    image: '/blog/debouchage.jpg',
    content: `## Débouchage de canalisation : guide complet

Un bouchon dans la canalisation peut transformer votre quotidien en cauchemar. Voici comment réagir efficacement.

### Causes courantes de bouchons

**Cheveux et savons** : La cause la plus fréquente dans les salles de bain.

**Résidus alimentaires** : Graisse solidifiée, marc de café, restes de nourriture.

**Papier toilette** : Un excès de papier ou un papier de mauvaise qualité.

**Calcaire** : L'accumulation de minéraux réduit le diamètre des conduites.

**Objets étrangers** : Jouets d'enfants, lingettes (même "flushables").

### Solutions rapides à essayer

**Le bon vieux plongeur** : Efficace pour les bouchons proches de la surface.

**Eau chaude** : Versez de l'eau bouillante pour dissoudre savons et graisses.

**Bicarbonate et vinaigre** : Versez du bicarbonate puis du vinaigre. Laissez reposer 30 minutes.

### Quand appeler un professionnel

Appelez Nino Plomberie si :
- Les bouchons reviennent régulièrement
- Plusieurs points de drainage sont affectés simultanément
- Les solutions simples n'ont pas marché
- Vous entendez des bruits suspects ou sentez des odeurs fétides

### Notre approche professionnelle

Nino Plomberie utilise :
- **Déboucheurs mécaniques** (flexibles haute pression)
- **Caméra d'inspection** (pour identifier le problème)
- **Nettoyage haute pression** (pour un débouchage en profondeur)

Intervention rapide à Muret, Toulouse et environs.`,
  },
  {
    id: '4',
    slug: 'urgence-plomberie-la-nuit',
    title: 'Urgence plomberie la nuit : comment réagir rapidement',
    excerpt: 'Un dégâtre d\'eau la nuit ? Voici comment minimiser les dégâts avant l\'arrivée d\'un plombier.',
    author: 'Nino Plomberie',
    publishedAt: '2026-09-15',
    category: 'urgence',
    readTime: 5,
    seoKeywords: ['urgence', 'plomberie', 'nuit', 'dégâtre d\'eau'],
    image: '/blog/urgence-nuit.jpg',
    content: `## Urgence plomberie la nuit : premiers gestes essentiels

Une fuite d'eau la nuit peut causer des dégâts considérables en quelques heures. Voici comment réagir rapidement.

### Premiers gestes (avant d'appeler le plombier)

**1. Fermez l'arrivée d'eau** : Localisez le robinet d'arrêt principal (généralement sous l'évier de la cuisine ou près du compteur) et fermez-le immédiatement.

**2. Dégagez la zone** : Déplacez meubles, tapis et objets de valeur loin de la zone inondée.

**3. Drainage** : Ouvrez les robinets pour vidanger les tuyaux.

**4. Aération** : Ouvrez portes et fenêtres pour limiter l'humidité.

**5. Nettoyage** : Avec des serviettes et une vadrouille, absorbez l'eau accumulée.

### Nino Plomberie disponible 24h/24

Nous offrons un service d'urgence 24h/24 à Muret et région toulousaine. Appelez immédiatement pour une intervention dans l'heure.

**Numéro d'urgence** : Consultez notre page contact pour les coordonnées.

### À ne pas faire

- Ne pas laisser courir l'eau
- Ne pas utiliser d'appareils électriques
- Ne pas ignorer l'odeur d'humidité
- Ne pas différer les réparations

### Prévention pour la nuit

- Contrôlez régulièrement les tuyaux
- Isolez les conduites exposées au froid
- Installez un détecteur de fuite d'eau
- Connaissez l'emplacement du robinet d'arrêt`,
  },
  {
    id: '5',
    slug: 'installation-radiateur',
    title: 'Installation ou remplacement de radiateur à Muret',
    excerpt: 'Besoin de changer un radiateur ? Notre guide explique le processus et pourquoi faire appel à un professionnel.',
    author: 'Nino Plomberie',
    publishedAt: '2026-09-05',
    category: 'maintenance',
    readTime: 8,
    seoKeywords: ['radiateur', 'installation', 'remplacement', 'chauffage'],
    image: '/blog/radiateur.jpg',
    content: `## Installation et remplacement de radiateur

Que ce soit pour améliorer votre confort thermique ou remplacer un radiateur défaillant, voici ce que vous devez savoir.

### Signes qu'il est temps de remplacer

- Le radiateur ne chauffe plus correctement
- Bruits bizarres ou fuites
- Rouille ou corrosion visible
- Perte d'efficacité énergétique
- Consommation de chauffage anormalement élevée

### Types de radiateurs modernes

**Radiateurs en acier** : Légers, efficaces, économiques. Parfaits pour la plupart des installations.

**Radiateurs en fonte** : Plus lourds mais excellent inertie thermique. Idéaux pour les vieilles installations.

**Radiateurs en aluminium** : Très efficaces, rapide à chauffer. Plus coûteux.

### Processus d'installation

1. **Évaluation** : Prise des mesures et calcul des besoins thermiques
2. **Dépose ancien radiateur** : Vidange et débranchement
3. **Préparation** : Installation des supports et tuyauterie
4. **Installation** : Fixation et raccordement du nouveau radiateur
5. **Mise en service** : Remplissage et test du système

### Pourquoi faire appel à un professionnel

- Calcul exact de la puissance thermique
- Installation conforme aux normes
- Vérification du circuit de chauffage
- Garance de la prestation
- Possibilité d'optimiser tout le système

Nino Plomberie propose installation et remplacement de radiateurs à Muret et région toulousaine. Devis gratuit sur demande.`,
  },
]

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug)
}

export function getBlogArticlesByCategory(
  category: BlogArticle['category']
): BlogArticle[] {
  return blogArticles
    .filter((article) => article.category === category)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export function getLatestBlogArticles(limit = 5): BlogArticle[] {
  return [...blogArticles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit)
}
