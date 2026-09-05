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
  seoContent?: string[]
  realisations?: Array<{ titre: string; lieu: string; description: string; image: string }>
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
    seoContent: [
      "Faire appel à un expert pour la recherche de fuite d'eau à Toulouse est indispensable pour éviter des dégâts des eaux coûteux. Avec les variations de température et le calcaire présent dans l'eau de la Garonne, les canalisations vieillissantes ont tendance à se fragiliser.",
      "Nino Plomberie 31 utilise des méthodes de détection non destructives (caméra thermique, gaz traceur) pour localiser précisément l'origine du sinistre sans casser vos murs ou votre carrelage. Nous couvrons toute l'agglomération (Blagnac, Colomiers, Balma...) avec un délai d'intervention express.",
      "En cas de dégât des eaux, notre intervention rapide limite l'étendue du sinistre. Nous établissons un rapport d'intervention détaillé que vous pouvez transmettre à votre assurance pour votre déclaration de sinistre. Robinet qui fuit, tuyau percé, joint défaillant : chaque source d'humidité traitée rapidement évite des milliers d'euros de dégâts sur parquet, placo ou circuit électrique.",
    ],
    realisations: [
      { titre: "Détection sous carrelage", lieu: "📍 Toulouse Centre", description: "Recherche de fuite non destructive dans une salle de bain ancienne.", image: "" },
      { titre: "Remplacement PER percé", lieu: "📍 Colomiers", description: "Intervention d'urgence sur un tuyau d'alimentation percé dans un mur.", image: "" }
    ],
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
      {
        question: "Mon robinet fuit même fermé, que faire ?",
        reponse:
          "Un robinet qui fuit en position fermée indique un joint usé ou un clapet défaillant. Coupez l'arrivée d'eau sous l'évier et appelez-nous. L'intervention est rapide (30 à 60 min) et peu coûteuse si elle est faite rapidement — un robinet qui goutte peut gaspiller jusqu'à 120 L d'eau par jour.",
      },
      {
        question: "Comment déclarer un dégât des eaux après une fuite ?",
        reponse:
          "Prévenez votre assurance dans les 5 jours ouvrés. Nous vous remettons un bon d'intervention détaillant la cause, l'étendue et les réparations effectuées — document indispensable pour votre déclaration de sinistre auprès de votre assureur.",
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
    seoContent: [
      "Le remplacement d'un chauffe-eau à Toulouse nécessite une intervention professionnelle pour garantir la sécurité électrique et hydraulique de l'installation. L'eau dure de notre région favorise l'accumulation de tartre, ce qui réduit la durée de vie des ballons d'eau chaude traditionnels.",
      "Nous proposons l'installation de cumulus électriques classiques mais aussi de chauffe-eaux thermodynamiques de marques reconnues (Thermor, Atlantic). Ces modèles modernes permettent de diviser par trois votre facture d'eau chaude sanitaire tout en bénéficiant des aides de l'État (MaPrimeRénov')."
    ],
    realisations: [
      { titre: "Ballon Thermodynamique", lieu: "📍 Tournefeuille", description: "Remplacement d'un vieux cumulus par un système thermodynamique Atlantic.", image: "" },
      { titre: "Dépannage d'urgence", lieu: "📍 Toulouse Minimes", description: "Changement de la résistance stéatite et détartrage complet du ballon.", image: "" }
    ],
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
    seoContent: [
      "Un évier bouché ou des WC qui débordent peuvent rapidement transformer votre quotidien en cauchemar. Notre service de débouchage de canalisation à Toulouse intervient de jour comme de nuit pour résoudre ces problèmes sanitaires avec l'équipement adéquat.",
      "Plutôt que d'utiliser des produits chimiques corrosifs qui abîment vos tuyaux en PVC, nous utilisons des techniques professionnelles comme le furet électrique ou le camion hydrocureur haute pression. Un passage caméra peut également être réalisé pour inspecter l'état structurel de votre réseau d'assainissement."
    ],
    realisations: [
      { titre: "Débouchage Colonne", lieu: "📍 Toulouse Hyper-centre", description: "Passage caméra et hydrocurage d'une colonne d'immeuble bouchée par du calcaire.", image: "" },
      { titre: "Dégorgement WC", lieu: "📍 Muret", description: "Intervention rapide pour des toilettes bouchées à cause d'objets inadaptés.", image: "" }
    ],
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
    slug: "robinetterie-sanitaires",
    titre: "Robinetterie & Sanitaires",
    sousTitre: "Changer un robinet, WC, douche à Toulouse",
    metaDescription: "Robinet qui fuit ou à changer à Toulouse ? Nino Plomberie 31 remplace robinets, mécanismes WC, douche italienne. Grohe / Hansgrohe disponible. Devis gratuit. ☎ 06 50 57 96 20",
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
    seoContent: [
      "La rénovation de vos sanitaires ou le simple remplacement de robinetterie améliore considérablement le confort de votre habitat et permet de faire des économies d'eau significatives. Nous intervenons sur toute la métropole toulousaine pour installer des équipements de grande qualité (Grohe, Hansgrohe, Jacob Delafon).",
      "Que vous souhaitiez remplacer un vieux robinet mélangeur par un mitigeur thermostatique moderne, ou installer un WC suspendu Geberit esthétique et facile d'entretien, notre expertise garantit une finition soignée et une étanchéité absolue."
    ],
    realisations: [
      { titre: "Installation WC Suspendu", lieu: "📍 Blagnac", description: "Pose d'un bâti-support Geberit et habillage complet sur mesure.", image: "" },
      { titre: "Remplacement Mitigeur", lieu: "📍 L'Union", description: "Fourniture et pose d'un mitigeur thermostatique Grohe pour douche.", image: "" }
    ],
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
    seoContent: [
      "Refaire sa salle de bain à Toulouse exige un savoir-faire spécifique, en particulier lors de la création d'une douche à l'italienne qui nécessite des pentes d'évacuation parfaites et une étanchéité sous carrelage infaillible (système SPEC ou SEL).",
      "De la dépose des anciens équipements jusqu'aux finitions, nous coordonnons votre projet de salle de bain clé en main. Meuble double vasque, sèche-serviettes électrique, baignoire îlot ou paroi de douche sur-mesure, nous donnons vie à vos idées d'aménagement tout en respectant les normes électriques (volumes de sécurité NF C 15-100)."
    ],
    realisations: [
      { titre: "Douche à l'italienne", lieu: "📍 Balma", description: "Création d'une douche encastrée avec receveur extra-plat et paroi vitrée.", image: "" },
      { titre: "Rénovation Complète", lieu: "📍 Toulouse Côte Pavée", description: "Transformation d'une petite salle d'eau avec meuble double vasque suspendu.", image: "" }
    ],
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
    seoContent: [
      "Dans le cadre d'une construction neuve ou d'une extension de maison en Haute-Garonne, la conception du réseau de plomberie est une étape cruciale. Une distribution d'eau bien pensée (en pieuvre ou repiquage) utilisant du multicouche ou du cuivre assure un débit constant et limite les nuisances sonores.",
      "Nous travaillons sur plans (architecte ou maître d'œuvre) pour réaliser vos attentes d'arrivées d'eau et vos réseaux d'évacuation gravitaire (PVC). Notre expertise en installation plomberie neuve vous garantit le respect de la réglementation en vigueur (RT2012 / RE2020) et une conformité absolue."
    ],
    realisations: [
      { titre: "Réseau PER Multicouche", lieu: "📍 Saint-Orens", description: "Création d'un réseau en pieuvre depuis la nourrice principale pour une maison neuve.", image: "" },
      { titre: "Attentes Cuisine & SDB", lieu: "📍 Pibrac", description: "Mise en place des évacuations et arrivées d'eau pour une extension de 40m².", image: "" }
    ],
    faq: [
      {
        question: "Intervenez-vous en coordination avec d'autres corps de métier ?",
        reponse:
          "Oui, nous avons l'habitude de travailler avec électriciens, carreleurs et maçons. Nous nous adaptons au planning de chantier.",
      },
    ],
  },
  {
    slug: "chauffage-chaudiere",
    titre: "Chauffage & Chaudière",
    sousTitre: "Chauffagiste Toulouse — entretien, dépannage, installation",
    metaDescription: "Plombier chauffagiste à Toulouse — entretien chaudière gaz, panne chauffage, radiateur froid. Nino Plomberie 31 intervient rapidement. Devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Plus de chauffage ? Chaudière en panne ? Radiateurs froids ? Nino Plomberie 31 intervient comme chauffagiste qualifié à Toulouse et en Haute-Garonne : entretien annuel obligatoire de chaudière gaz, dépannage toutes marques, remplacement de radiateurs.",
    details: [
      "Entretien annuel chaudière gaz (obligatoire depuis 2009)",
      "Dépannage panne de chauffage central",
      "Remplacement brûleur, vase d'expansion, soupape de sécurité",
      "Pose et remplacement de radiateurs acier ou aluminium",
      "Purge et rééquilibrage du circuit de chauffage",
      "Installation chaudière à condensation",
    ],
    prix: "Entretien chaudière à partir de 120 € TTC — devis gratuit sur place",
    urgence: true,
    icon: "Thermometer",
    seoContent: [
      "Un chauffagiste qualifié à Toulouse intervient rapidement en cas de panne de chauffage, surtout en hiver. Nino Plomberie 31 assure l'entretien annuel obligatoire de votre chaudière gaz (individuelle ou collective) conformément au décret du 9 juin 2009. L'absence d'entretien peut entraîner un refus de garantie de votre assureur en cas de sinistre.",
      "Chaudière qui s'éteint seule, radiateurs qui ne chauffent plus, bruits anormaux ou pression qui chute — ces symptômes nécessitent une intervention professionnelle. Nous diagnostiquons la panne et intervenons avec les pièces détachées adaptées à toutes les marques : Chaffoteaux, Saunier Duval, Vaillant, Atlantic, Frisquet, De Dietrich, Bosch, Viessmann.",
    ],
    realisations: [
      { titre: "Entretien chaudière murale", lieu: "📍 Toulouse Compans", description: "Entretien annuel et remplacement du brûleur d'une chaudière murale Saunier Duval.", image: "" },
      { titre: "Dépannage radiateur froid", lieu: "📍 Colomiers", description: "Purge et rééquilibrage du circuit de chauffage pour un appartement 4 pièces.", image: "" },
    ],
    faq: [
      {
        question: "L'entretien annuel de chaudière est-il obligatoire ?",
        reponse:
          "Oui, l'entretien annuel d'une chaudière gaz est obligatoire depuis le décret du 9 juin 2009 pour toute puissance comprise entre 4 et 400 kW. En cas de sinistre, l'absence d'entretien peut entraîner un refus de garantie de votre assureur.",
      },
      {
        question: "Ma chaudière s'éteint régulièrement, que faire ?",
        reponse:
          "Une chaudière qui s'éteint seule peut indiquer un problème de pression, de vase d'expansion, de sonde de température ou d'électrode d'allumage. Appelez-nous pour un diagnostic — nous intervenons sous 24h.",
      },
      {
        question: "Quelles marques de chaudière dépannez-vous ?",
        reponse:
          "Nous intervenons sur toutes les marques : Chaffoteaux, Saunier Duval, Vaillant, Atlantic, Frisquet, De Dietrich, Bosch, Viessmann. Nous disposons des pièces détachées courantes en stock.",
      },
      {
        question: "Mes radiateurs sont froids alors que la chaudière tourne, pourquoi ?",
        reponse:
          "Radiateurs froids avec chaudière en marche : il s'agit probablement d'un problème de déséquilibrage du circuit, de présence d'air (purge nécessaire) ou de vanne thermostatique bloquée. Nous diagnostiquons et résolvons le problème en une intervention.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceFiche | undefined {
  return services.find((s) => s.slug === slug)
}
