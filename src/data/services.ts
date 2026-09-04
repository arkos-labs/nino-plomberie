// src/data/services.ts

export interface ServiceFiche {
  slug: string
  titre: string
  sousTitre: string
  description: string
  metaDescription?: string
  details: string[]
  prix: string
  urgence: boolean
  icon: string
  faq: Array<{ question: string; reponse: string }>
}

export const services: ServiceFiche[] = [
  {
    slug: "fuite-d-eau",
    titre: "Fuite d'eau",
    sousTitre: "Détection et réparation rapide",
    metaDescription: "Fuite d'eau à Toulouse ? Nino Plomberie 31 intervient en urgence sous 1h : détection caméra thermique, réparation robinet, canalisation. Devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Une fuite d'eau non traitée peut causer des dégâts considérables en quelques heures. Nino Plomberie 31 intervient en urgence 7j/7 pour localiser et réparer toute fuite : robinet, canalisation encastrée, joint, raccord ou canalisation principale.",
    details: [
      "Détection de fuite par caméra thermique ou endoscopique",
      "Réparation de robinets, joints et siphons",
      "Remplacement de canalisations encastrées",
      "Bouchage de fissures sur tuyaux cuivre/PER/PVC",
      "Intervention sur compteur d'eau et vanne générale",
      "Remise en conformité et test d'étanchéité",
    ],
    prix: "Déplacement offert + devis gratuit sur place",
    urgence: true,
    icon: "Droplets",
    faq: [
      {
        question: "Combien de temps pour intervenir sur une fuite ?",
        reponse:
          "En cas d'urgence, nous intervenons sous 1h dans Toulouse et les communes proches. Pour les cas non urgents, nous nous déplaçons sous 24h.",
      },
      {
        question: "Comment couper l'eau en attendant le plombier ?",
        reponse:
          "Fermez la vanne générale (généralement sous l'évier de cuisine ou dans le couloir près du compteur). Cela stoppe l'alimentation de tout le logement.",
      },
      {
        question: "La réparation est-elle garantie ?",
        reponse:
          "Oui, toutes nos réparations sont garanties 2 ans pièces et main-d'œuvre. Nous utilisons uniquement des pièces certifiées NF.",
      },
    ],
  },
  {
    slug: "chauffe-eau",
    titre: "Chauffe-eau & Ballon",
    sousTitre: "Installation, remplacement et dépannage",
    metaDescription: "Installation et dépannage chauffe-eau à Toulouse. Électrique, thermodynamique, solaire — Nino Plomberie 31 remplace votre ballon dès le jour même. Devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Plus d'eau chaude ? Ballon qui fuit ? Résistance grillée ? Nino Plomberie 31 installe et dépanne tous types de chauffe-eau : électrique, thermodynamique, solaire ou chaudière. Pose en journée, y compris le week-end.",
    details: [
      "Diagnostic et remplacement de résistance électrique",
      "Changement de groupe de sécurité et thermostat",
      "Installation de chauffe-eau électrique (50 à 300L)",
      "Pose de chauffe-eau thermodynamique",
      "Raccordement au circuit eau chaude sanitaire",
      "Mise en service et réglage de la température",
    ],
    prix: "Fourniture + pose à partir de 590 € (chauffe-eau 100L)",
    urgence: false,
    icon: "Flame",
    faq: [
      {
        question: "Quelle taille de chauffe-eau choisir ?",
        reponse:
          "Comptez environ 50L par personne. Pour 2 personnes : 100L, pour 4 personnes : 200L. Un thermodynamique sera plus économique sur le long terme.",
      },
      {
        question: "Combien dure une installation complète ?",
        reponse:
          "Le remplacement d'un chauffe-eau existant prend entre 2 et 4 heures. L'eau chaude est disponible 2h après la mise en service pour un chauffe-eau électrique.",
      },
    ],
  },
  {
    slug: "debouchage",
    titre: "Débouchage canalisation",
    sousTitre: "WC, évier, douche, fosse septique",
    metaDescription: "Débouchage WC, évier, douche, fosse septique à Toulouse. Intervention urgence 24h/7j — furet électrique ou hydrocurage haute pression. Résultat garanti. ☎ 06 50 57 96 20",
    description:
      "Canalisations bouchées, WC qui déborde, évier qui ne s'écoule plus — Nino Plomberie 31 débouche vos canalisations par furet électrique ou hydrocurage haute pression. Résultat garanti, sans casse.",
    details: [
      "Débouchage WC, douche, baignoire et lavabo",
      "Débouchage évier cuisine (graisses, tartre)",
      "Passage caméra pour diagnostic visuel",
      "Hydrocurage haute pression des canalisations extérieures",
      "Vidange et débouchage fosse septique",
      "Traitement anti-odeurs et entretien préventif",
    ],
    prix: "À partir de 80 € TTC (furet simple) — devis sur place",
    urgence: true,
    icon: "Wind",
    faq: [
      {
        question: "Mon WC déborde, que faire en urgence ?",
        reponse:
          "Coupez l'arrivée d'eau du WC (robinet flotteur sous la cuvette), appelez-nous. N'utilisez pas de produit chimique, cela peut endommager les joints.",
      },
      {
        question: "Le débouchage fonctionne-t-il toujours ?",
        reponse:
          "Oui, dans 95% des cas. Pour les bouchons très compacts ou racines d'arbres, nous utilisons l'hydrocurage haute pression ou le fraisage.",
      },
    ],
  },
  {
    slug: "remplacement-robinetterie",
    titre: "Robinetterie & Sanitaires",
    sousTitre: "Pose et remplacement de robinets, WC, douche",
    metaDescription: "Remplacement robinet, mécanisme WC, douche à l'italienne à Toulouse. Artisan plombier qualifié, fourniture Grohe / Hansgrohe possible. Devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Robinet qui goutte, mécanisme WC défaillant, douche à remplacer — Nino Plomberie 31 intervient pour tous vos travaux de robinetterie et sanitaires. Large choix de marques (Grohe, Hansgrohe, Jacob Delafon).",
    details: [
      "Remplacement robinet mitigeur salle de bain / cuisine",
      "Changement mécanisme chasse d'eau et flotteur",
      "Pose de douche à l'italienne et paroi",
      "Installation WC suspendu ou à poser",
      "Rénovation salle de bain complète",
      "Remplacement de baignoire par douche",
    ],
    prix: "Main d'œuvre à partir de 60 €/h — fourniture en sus",
    urgence: false,
    icon: "Wrench",
    faq: [
      {
        question: "Puis-je choisir mon modèle de robinetterie ?",
        reponse:
          "Absolument. Vous pouvez fournir votre propre matériel ou nous demander de l'approvisionner. Nous travaillons avec les grandes enseignes et grossistes professionnels.",
      },
    ],
  },
  {
    slug: "renovation-salle-de-bain",
    titre: "Rénovation salle de bain",
    sousTitre: "Conception, plomberie et installation",
    metaDescription: "Rénovation salle de bain à Toulouse — douche à l'italienne, WC suspendu, vasque. Nino Plomberie 31 gère toute la plomberie de votre rénovation. Devis sur mesure gratuit.",
    description:
      "De la conception à la pose, Nino Plomberie 31 prend en charge la plomberie complète de votre rénovation de salle de bain. Douche à l'italienne, paroi, vasque, WC suspendu — nous coordonnons les travaux.",
    details: [
      "Étude et plan de plomberie",
      "Dépose de l'ancienne installation",
      "Modification et extension des réseaux eau/évacuation",
      "Pose de douche à l'italienne avec receveur ou béton ciré",
      "Installation de meuble vasque et miroir rétroéclairé",
      "Pose de WC suspendu avec bâti-support",
    ],
    prix: "Devis gratuit sur mesure — partir de 2 500 € main d'œuvre",
    urgence: false,
    icon: "Bath",
    faq: [
      {
        question: "Combien de temps prend une rénovation salle de bain ?",
        reponse:
          "En moyenne 5 à 10 jours ouvrés selon l'ampleur des travaux. Nous établissons un planning précis avant de commencer.",
      },
      {
        question: "Gérez-vous aussi le carrelage et la peinture ?",
        reponse:
          "Nous gérons toute la plomberie. Pour le carrelage et la peinture, nous collaborons avec des artisans partenaires de confiance.",
      },
    ],
  },
  {
    slug: "installation-plomberie-neuve",
    titre: "Installation plomberie neuve",
    sousTitre: "Construction, extension, maison neuve",
    metaDescription: "Plomberie neuve pour maison ou extension à Toulouse et Haute-Garonne. Tirage réseaux eau froide/chaude, évacuations PVC, raccordements sanitaires. Devis sur plan gratuit.",
    description:
      "Maison neuve ou extension ? Nino Plomberie 31 réalise la plomberie complète en neuf : réseaux d'alimentation, évacuations, appareils sanitaires, préparation pour cuisine et salle de bain.",
    details: [
      "Tirage des réseaux eau froide/chaude (cuivre, PER multicouche)",
      "Pose des évacuations PVC",
      "Installation des attentes plomberie",
      "Mise en place du réseau VMC salle de bain",
      "Pose et raccordement de tous les appareils sanitaires",
      "Tests de pression et mise en service",
    ],
    prix: "Devis sur mesure selon plans — contact obligatoire",
    urgence: false,
    icon: "Building2",
    faq: [
      {
        question: "Intervenez-vous en coordination avec d'autres corps de métier ?",
        reponse:
          "Oui, nous avons l'habitude de travailler avec électriciens, carreleurs et maçons. Nous nous adaptons au planning de chantier.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceFiche | undefined {
  return services.find((s) => s.slug === slug)
}
