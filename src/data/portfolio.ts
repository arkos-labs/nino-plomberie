// src/data/portfolio.ts
// Portfolio rénovation salle de bain — avant/après + descriptions

export interface PortfolioProject {
  id: string
  title: string
  description: string
  category: 'salle-de-bain' | 'cuisine' | 'fuite-d-eau'
  location: string
  complexity: 'simple' | 'moyen' | 'complexe'
  imagesBefore: string
  imagesAfter: string
  timeline: string // "5 jours" / "3 semaines"
  materials: string[]
  testimonial?: {
    client: string
    rating: number
    text: string
  }
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'sdb-toulouse-capitole-01',
    title: 'Rénovation salle de bain Capitole Toulouse',
    description: 'Rénovation complète petit espace immeuble ancien Capitole: douche à l\'italienne de plain-pied, WC suspendu, meuble vasque, carrelage mur et sol.',
    category: 'salle-de-bain',
    location: 'Toulouse - Capitole',
    complexity: 'complexe',
    imagesBefore: '/realisations/photo-01',
    imagesAfter: '/realisations/photo-02',
    timeline: '10 jours',
    materials: ['Douche italienne 90x90', 'WC suspendu + bâti-support', 'Meuble vasque 80cm', 'Carrelage 30x60 anthracite', 'Peinture salle de bain'],
    testimonial: {
      client: 'Mme Dubois (Capitole)',
      rating: 5,
      text: 'Travail impeccable, délais respectés. Nino très professionnel et à l\'écoute. Recommande vivement!',
    },
  },
  {
    id: 'sdb-muret-02',
    title: 'Remplacement baignoire → douche Muret',
    description: 'Remplacement baignoire par douche à l\'italienne extra-plat. Receveur ultra-fin 2cm. Gain de place significatif.',
    category: 'salle-de-bain',
    location: 'Muret',
    complexity: 'moyen',
    imagesBefore: '/realisations/photo-03',
    imagesAfter: '/realisations/photo-04',
    timeline: '4 jours',
    materials: ['Receveur extra-plat 80x120', 'Paroi de douche coulissante', 'Robinetterie thermostatique', 'Carrelage sol antidérapant'],
    testimonial: {
      client: 'M. Martin (Muret)',
      rating: 5,
      text: 'Problème résolu rapidement. Le résultat est magnifique et fonctionne parfaitement.',
    },
  },
  {
    id: 'sdb-toulouse-minimes-03',
    title: 'Salle de bain double vasque Minimes',
    description: 'Création salle de bain avec meuble double vasque, miroir intégré, équipements haut de gamme.',
    category: 'salle-de-bain',
    location: 'Toulouse - Minimes',
    complexity: 'moyen',
    imagesBefore: '/realisations/photo-05',
    imagesAfter: '/realisations/photo-06',
    timeline: '7 jours',
    materials: ['Meuble double vasque 120cm', 'Miroir LED intégré', 'Carrelage marbre blanc', 'WC suspendu'],
  },
  {
    id: 'sdb-colomiers-04',
    title: 'Rénovation salle de bain Colomiers petit budget',
    description: 'Rénovation petite salle de bain avec budget limité: évier + robinet + carrelage simple + peinture.',
    category: 'salle-de-bain',
    location: 'Colomiers',
    complexity: 'simple',
    imagesBefore: '/realisations/photo-07',
    imagesAfter: '/realisations/photo-08',
    timeline: '3 jours',
    materials: ['Évier 60cm', 'Robinet monocommande', 'Carrelage 20x20', 'Peinture spéciale salle de bain'],
  },
  {
    id: 'sdb-toulouse-purpan-05',
    title: 'Salle de bain moderne Purpan Toulouse',
    description: 'Salle de bain entièrement repensée avec douche open space, carrelage grand format, équipements contemporains.',
    category: 'salle-de-bain',
    location: 'Toulouse - Purpan',
    complexity: 'complexe',
    imagesBefore: '/realisations/photo-01',
    imagesAfter: '/realisations/photo-09',
    timeline: '12 jours',
    materials: ['Douche open space 120x100', 'Carrelage 60x120 grand format', 'Meuble vasque suspendu', 'WC suspendu haut de gamme'],
    testimonial: {
      client: 'Mme et M. Lefebvre (Purpan)',
      rating: 5,
      text: 'Dépassé nos attentes! Le design est magnifique et très fonctionnel. Merci Nino!',
    },
  },
  {
    id: 'fuite-toulouse-06',
    title: 'Détection et réparation fuite cachée Toulouse',
    description: 'Fuite d\'eau cachée trouvée par détection thermique. Tuyau percé en encastré, réparation sans casse.',
    category: 'fuite-d-eau',
    location: 'Toulouse centre',
    complexity: 'complexe',
    imagesBefore: '/realisations/photo-02',
    imagesAfter: '/realisations/photo-03',
    timeline: '1 journée',
    materials: ['Détection infrarouge', 'Repérage tuyau', 'Remplacement section tuyau cuivre'],
    testimonial: {
      client: 'M. Rousseau (Toulouse)',
      rating: 5,
      text: 'Grâce à la détection thermique, Nino a trouvé la fuite sans faire des dégâts. Très efficace!',
    },
  },
  {
    id: 'cuisine-muret-07',
    title: 'Pose cuisine clé en main Muret',
    description: 'Pose cuisine complète: montage meubles, plan de travail, évier + robinetterie, raccordements eau/évacuation.',
    category: 'cuisine',
    location: 'Muret',
    complexity: 'moyen',
    imagesBefore: '/realisations/photo-04',
    imagesAfter: '/realisations/photo-05',
    timeline: '5 jours',
    materials: ['Cuisine 2m50', 'Plan de travail stratifié', 'Évier double bac', 'Robinetterie chrome brossé', 'Raccordement lave-vaisselle'],
  },
]

export function getProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.id === id)
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.category === category)
}

export function getProjectsByLocation(location: string): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.location === location)
}
