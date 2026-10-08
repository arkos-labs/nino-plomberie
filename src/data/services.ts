// src/data/services.ts
// Contenu des pages services. Uniquement des informations vérifiées (fiche Google, site historique)
// et des conseils généraux de plomberie — aucun prix ni équipement non confirmé.

export interface ServiceFiche {
  slug: string
  titre: string
  sousTitre: string
  /** Réponse courte et factuelle en tête de page (extraits Google / moteurs IA) */
  enBref: string
  description: string
  metaDescription?: string
  /** Titre de page (balise title) si différent de « {titre} à Muret et Toulouse » */
  metaTitle?: string
  details: string[]
  prix: string
  urgence: boolean
  icon: string
  faq: Array<{ question: string; reponse: string }>
  seoContent?: string[]
}

const DEVIS = "Devis gratuit, prix validé avec vous avant intervention"

export const services: ServiceFiche[] = [
  {
    slug: "fuite-d-eau",
    titre: "Fuite d'eau",
    sousTitre: "Recherche et réparation de fuite à Muret et Toulouse",
    enBref:
      "Nino Plomberie répare les fuites d'eau 24h/24 et 7j/7 à Muret, Toulouse et en Haute-Garonne : robinet, joint, raccord, canalisation apparente ou encastrée, chasse d'eau, groupe de sécurité de chauffe-eau. Le devis est gratuit et la réparation garantie 2 ans pièces et main-d'œuvre.",
    metaDescription:
      "Fuite d'eau à Muret ou Toulouse ? Nino Plomberie intervient 24h/24 et 7j/7 : robinet, joint, canalisation, chasse d'eau. Devis gratuit, réparation garantie 2 ans. ☎ 06 50 57 96 20",
    description:
      "Une fuite d'eau non traitée peut abîmer sols, murs et plafonds en quelques heures et faire grimper la facture d'eau. Nino Plomberie localise l'origine de la fuite et la répare, de jour comme de nuit.",
    details: [
      "Recherche de l'origine de la fuite",
      "Réparation ou remplacement de robinets, joints et raccords",
      "Réparation de canalisations cuivre, PER, multicouche et PVC",
      "Fuites de chasse d'eau, de WC et de mécanismes",
      "Fuites de chauffe-eau et de groupe de sécurité",
      "Remise en état de l'installation après sinistre",
    ],
    prix: DEVIS,
    urgence: true,
    icon: "Droplets",
    seoContent: [
      "Une fuite ne se voit pas toujours : tache d'humidité au plafond, peinture qui cloque, odeur de moisi, compteur d'eau qui tourne alors que tout est fermé ou facture anormalement élevée sont autant de signes à prendre au sérieux. Plus la fuite est traitée tôt, plus les dégâts et les coûts restent limités.",
      "À Muret, Toulouse et dans l'agglomération, Nino Plomberie intervient sur tous les types de fuites : robinet qui goutte, joint de siphon usé, raccord desserré, tuyau percé, canalisation encastrée, chasse d'eau qui coule en continu ou groupe de sécurité de cumulus qui fuit. Le diagnostic permet d'identifier l'origine exacte avant de réparer.",
      "En cas de dégât des eaux, la réparation rapide de la fuite est la première étape. Pensez aussi à prendre des photos des dégâts et à prévenir votre assurance habitation dans les délais prévus par votre contrat.",
    ],
    faq: [
      {
        question: "Que faire immédiatement en cas de fuite d'eau ?",
        reponse:
          "Fermez le robinet d'arrêt de l'appareil concerné ou, à défaut, la vanne générale près du compteur d'eau. Si l'eau s'approche de prises ou d'appareils électriques, coupez le disjoncteur. Épongez, protégez vos meubles, prenez des photos puis appelez le 06 50 57 96 20.",
      },
      {
        question: "Comment savoir si j'ai une fuite d'eau cachée ?",
        reponse:
          "Fermez tous les robinets et relevez l'index du compteur d'eau. Attendez une à deux heures sans utiliser d'eau : si l'index a bougé, il y a une fuite. Taches d'humidité, moisissures et facture d'eau en hausse sont aussi des signes d'alerte.",
      },
      {
        question: "Intervenez-vous pour une fuite la nuit ou le week-end ?",
        reponse:
          "Oui, Nino Plomberie est joignable 24h/24 et 7j/7, week-ends et jours fériés compris. Le délai d'arrivée dépend de votre commune et vous est indiqué au téléphone.",
      },
      {
        question: "La réparation d'une fuite est-elle garantie ?",
        reponse: "Oui, les réparations sont garanties 2 ans, pièces et main-d'œuvre.",
      },
      {
        question: "Mon robinet fuit même fermé, est-ce grave ?",
        reponse:
          "Ce n'est pas dangereux mais il ne faut pas attendre : un robinet qui goutte en permanence gaspille beaucoup d'eau. La cause est généralement un joint ou une cartouche usés, une réparation simple et rapide.",
      },
    ],
  },
  {
    slug: "debouchage",
    titre: "Débouchage canalisation",
    sousTitre: "Débouchage WC, évier, douche, baignoire et canalisation",
    metaTitle: "Débouchage canalisation & WC à Toulouse et Muret | Nino Plomberie",
    enBref:
      "Nino Plomberie débouche WC, éviers, lavabos, douches, baignoires et canalisations à Muret, Toulouse et en Haute-Garonne, 24h/24 et 7j/7. L'intervention se fait avec des outils professionnels, sans produit chimique agressif, et le devis est gratuit.",
    metaDescription:
      "Débouchage de WC, évier, douche et canalisation à Toulouse, Muret et en Haute-Garonne, 24h/24 et 7j/7, sans produit agressif. Devis gratuit ☎ 06 50 57 96 20",
    description:
      "WC qui déborde, évier qui ne s'écoule plus, douche qui stagne : Nino Plomberie trouve le bouchon et rétablit l'écoulement, puis vous conseille pour éviter que le problème ne revienne.",
    details: [
      "Débouchage de WC",
      "Débouchage d'évier et de lavabo (graisses, résidus)",
      "Débouchage de douche et de baignoire (cheveux, calcaire)",
      "Démontage et nettoyage de siphons",
      "Débouchage de canalisations intérieures",
      "Conseils d'entretien pour éviter les récidives",
    ],
    prix: DEVIS,
    urgence: true,
    icon: "Wind",
    seoContent: [
      "Un écoulement lent, des gargouillements ou de mauvaises odeurs annoncent souvent un bouchon qui se forme. Graisses de cuisine, cheveux, calcaire, lingettes ou objets tombés dans les toilettes finissent par obstruer siphons et canalisations.",
      "Les déboucheurs chimiques vendus en grande surface sont corrosifs : ils peuvent abîmer les joints et les canalisations en PVC sans régler un bouchon bien installé. Un plombier utilise des outils mécaniques adaptés pour retirer le bouchon sans endommager l'installation.",
      "Nino Plomberie intervient à Muret, Toulouse et dans toute la Haute-Garonne, y compris le soir et le week-end quand des WC bouchés rendent le logement difficile à vivre.",
    ],
    faq: [
      {
        question: "Mes WC débordent, que faire en attendant ?",
        reponse:
          "Ne tirez plus la chasse. Fermez le robinet d'arrivée d'eau du WC, situé en général derrière ou à côté de la cuvette, puis épongez. N'utilisez pas de produit chimique, qui peut abîmer les joints, et appelez le 06 50 57 96 20.",
      },
      {
        question: "Comment éviter que mes canalisations se bouchent ?",
        reponse:
          "Ne jetez ni graisse de cuisson dans l'évier, ni lingettes, cotons ou serviettes dans les WC, même s'ils sont dits biodégradables. Posez une grille sur les bondes de douche pour retenir les cheveux et nettoyez régulièrement les siphons.",
      },
      {
        question: "Un débouchage est-il possible le week-end ?",
        reponse: "Oui, Nino Plomberie est joignable 24h/24 et 7j/7, week-ends et jours fériés compris.",
      },
      {
        question: "Pourquoi éviter les déboucheurs chimiques ?",
        reponse:
          "Ils sont corrosifs, dangereux à manipuler et peuvent endommager les joints et les tuyaux en PVC. Ils agissent mal sur les bouchons compacts et rendent ensuite l'intervention du plombier plus délicate.",
      },
    ],
  },
  {
    slug: "chauffe-eau",
    titre: "Chauffe-eau & Cumulus",
    sousTitre: "Dépannage, remplacement et installation",
    enBref:
      "Nino Plomberie dépanne, remplace et installe les chauffe-eau et cumulus à Muret, Toulouse et en Haute-Garonne, 7j/7. Plus d'eau chaude, ballon qui fuit ou groupe de sécurité qui goutte : le diagnostic et le devis sont gratuits et le remplacement peut être réalisé rapidement, même le week-end.",
    metaDescription:
      "Plus d'eau chaude ? Nino Plomberie dépanne et remplace votre chauffe-eau ou cumulus à Muret, Toulouse et en Haute-Garonne, 7j/7. Devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Plus d'eau chaude, eau tiède, ballon qui fuit ou disjoncteur qui saute : Nino Plomberie diagnostique la panne de votre chauffe-eau et vous propose la solution la plus adaptée, réparation ou remplacement.",
    details: [
      "Diagnostic de panne de chauffe-eau électrique",
      "Remplacement de résistance, thermostat ou anode",
      "Remplacement du groupe de sécurité",
      "Détartrage du ballon",
      "Remplacement et installation de cumulus",
      "Raccordement et mise en service",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Flame",
    seoContent: [
      "L'eau de la région toulousaine est calcaire : le tartre s'accumule dans le ballon et sur la résistance, ce qui réduit le rendement et la durée de vie du chauffe-eau. Un détartrage régulier et le contrôle du groupe de sécurité prolongent nettement sa durée de vie.",
      "Quand le chauffe-eau tombe en panne, le diagnostic permet de savoir si une réparation suffit (résistance, thermostat, groupe de sécurité) ou si le remplacement est plus raisonnable, par exemple quand la cuve fuit ou que l'appareil est très ancien.",
      "Comme en témoignent les avis clients, Nino Plomberie intervient aussi le week-end pour remplacer un cumulus tombé en panne : plus d'eau chaude un dimanche, ce n'est pas une fatalité.",
    ],
    faq: [
      {
        question: "Je n'ai plus d'eau chaude, que vérifier avant d'appeler ?",
        reponse:
          "Vérifiez que le disjoncteur du chauffe-eau au tableau électrique n'a pas sauté et que le contacteur heures creuses est bien en position automatique ou marche forcée. Si tout est normal et que l'eau reste froide, la résistance ou le thermostat sont probablement en cause.",
      },
      {
        question: "Quelle capacité de chauffe-eau choisir ?",
        reponse:
          "On compte habituellement 50 à 60 litres par personne : environ 100 litres pour 2 personnes, 150 à 200 litres pour 3 à 4 personnes et 250 à 300 litres au-delà. Nino vous conseille selon votre logement et vos habitudes.",
      },
      {
        question: "Mon groupe de sécurité goutte, est-ce normal ?",
        reponse:
          "Quelques gouttes pendant la chauffe sont normales : l'eau se dilate. Un écoulement continu, en revanche, indique un groupe de sécurité défectueux ou une pression trop élevée. Il faut alors le faire contrôler et le remplacer si besoin.",
      },
      {
        question: "Réparer ou remplacer mon chauffe-eau ?",
        reponse:
          "Une résistance, un thermostat ou un groupe de sécurité se remplacent facilement. Si la cuve fuit ou si l'appareil est très ancien et entartré, le remplacement est généralement plus économique à terme. Le diagnostic gratuit permet de trancher.",
      },
    ],
  },
  {
    slug: "chauffage-chaudiere",
    titre: "Chauffage & Chaudière",
    sousTitre: "Plombier chauffagiste à Muret et Toulouse",
    metaTitle: "Entreprise de chauffage Muret & Toulouse | Nino Plomberie",
    enBref:
      "Nino Plomberie est une entreprise de plomberie et de chauffage basée à Muret. Plombier-chauffagiste, elle intervient à Toulouse et en Haute-Garonne pour l'entretien et le dépannage de chaudière, de chauffage et de radiateurs : chaudière qui se met en sécurité, pression qui chute, radiateurs froids ou circuit à purger. Le devis est gratuit.",
    metaDescription:
      "Entreprise de chauffage et de plomberie à Muret et Toulouse : entretien et dépannage de chaudière, chauffage, radiateurs. Devis gratuit ☎ 06 50 57 96 20",
    description:
      "Plus de chauffage, chaudière qui s'arrête, radiateurs qui restent froids ou qui font du bruit : Nino Plomberie diagnostique le problème et remet votre installation en état.",
    details: [
      "Entretien de chaudière",
      "Dépannage de chaudière",
      "Diagnostic de perte de pression du circuit",
      "Purge et équilibrage des radiateurs",
      "Remplacement de radiateurs",
      "Remplacement de vannes et robinets thermostatiques",
      "Réparation de fuites sur le circuit de chauffage",
    ],
    prix: DEVIS,
    urgence: true,
    icon: "Thermometer",
    seoContent: [
      "Une panne de chauffage en plein hiver devient vite une urgence, surtout avec des enfants ou des personnes âgées à la maison. Les causes les plus fréquentes sont une pression trop basse dans le circuit, de l'air dans les radiateurs, une vanne bloquée ou un composant de la chaudière défaillant.",
      "Avant de lancer de gros travaux, un diagnostic permet souvent de régler le problème simplement : remise en pression, purge, remplacement d'une pièce. Nino Plomberie vous explique l'origine de la panne et ce qu'il faut faire.",
      "Rappel : l'entretien annuel des chaudières (gaz, fioul, bois) est obligatoire en France. Il améliore la sécurité, le rendement et la durée de vie de l'appareil.",
    ],
    faq: [
      {
        question: "Mes radiateurs sont froids alors que la chaudière fonctionne, pourquoi ?",
        reponse:
          "Les causes les plus courantes sont de l'air dans le circuit (radiateur froid en haut), une vanne ou un robinet thermostatique bloqué, ou un circuit mal équilibré (radiateurs éloignés de la chaudière qui chauffent mal). Une purge et un équilibrage règlent souvent le problème.",
      },
      {
        question: "Ma chaudière perd de la pression, que faire ?",
        reponse:
          "Une chaudière murale fonctionne en général entre 1 et 2 bars à froid. Si la pression baisse régulièrement, il y a probablement une fuite sur le circuit ou un problème de vase d'expansion ou de soupape. Il faut faire contrôler l'installation plutôt que de remettre de l'eau sans cesse.",
      },
      {
        question: "L'entretien annuel de la chaudière est-il obligatoire ?",
        reponse:
          "Oui, l'entretien annuel est obligatoire pour les chaudières dont la puissance est comprise entre 4 et 400 kW. Il doit être réalisé par un professionnel qualifié, qui remet une attestation à conserver.",
      },
      {
        question: "Pourquoi purger les radiateurs ?",
        reponse:
          "L'air accumulé dans les radiateurs empêche l'eau chaude de circuler : le haut du radiateur reste froid, le chauffage est moins efficace et la consommation augmente. Une purge en début de saison de chauffe est recommandée.",
      },
    ],
  },
  {
    slug: "robinetterie-sanitaires",
    titre: "Robinetterie & Sanitaires",
    sousTitre: "Robinets, mitigeurs, douches, WC et vasques",
    enBref:
      "Nino Plomberie remplace et installe robinets, mitigeurs, colonnes de douche, WC suspendus ou à poser, vasques et meubles de salle de bain à Muret, Toulouse et en Haute-Garonne. Vous pouvez fournir votre matériel ou laisser Nino s'en occuper. Le devis est gratuit.",
    metaDescription:
      "Changer un robinet, un mitigeur, un WC ou une colonne de douche à Muret ou Toulouse : Nino Plomberie installe vos sanitaires. Devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Robinet qui goutte, mitigeur fatigué, chasse d'eau qui coule, WC à remplacer : Nino Plomberie pose et remplace vos équipements sanitaires avec des raccordements propres et étanches.",
    details: [
      "Remplacement de robinets et mitigeurs (cuisine, salle de bain)",
      "Pose de colonnes de douche et mitigeurs thermostatiques",
      "Réparation et remplacement de mécanismes de chasse d'eau",
      "Pose de WC suspendus avec bâti-support ou de WC à poser",
      "Pose de vasques, meubles vasque et éviers",
      "Remplacement d'une baignoire par une douche",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Wrench",
    seoContent: [
      "Changer un vieux robinet mélangeur pour un mitigeur, installer une colonne de douche thermostatique ou passer à un WC suspendu améliore le confort au quotidien et limite le gaspillage d'eau.",
      "Les réalisations de Nino Plomberie en photo sur ce site en témoignent : robinetterie noire mat, colonnes de douche, meubles double vasque, WC suspendus. Chaque pose est raccordée proprement et testée pour garantir l'étanchéité.",
      "Vous avez déjà choisi votre modèle ? Vous pouvez fournir votre propre matériel. Sinon, Nino vous conseille sur les équipements adaptés à votre installation et à votre budget.",
    ],
    faq: [
      {
        question: "Puis-je fournir mon propre robinet ou mon WC ?",
        reponse:
          "Oui, vous pouvez fournir votre matériel. Nino vérifie simplement qu'il est compatible avec votre installation avant la pose. Il peut aussi s'occuper de l'approvisionnement si vous préférez.",
      },
      {
        question: "Ma chasse d'eau coule en permanence, que faire ?",
        reponse:
          "Le joint du mécanisme ou le flotteur est généralement en cause. En attendant la réparation, fermez le robinet d'arrivée d'eau du WC pour éviter de gaspiller de l'eau.",
      },
      {
        question: "Quels sont les avantages d'un mitigeur thermostatique ?",
        reponse:
          "Il maintient automatiquement l'eau à la température choisie, même si quelqu'un ouvre un autre robinet dans la maison. C'est plus confortable, plus sûr pour les enfants (pas de brûlure) et plus économique.",
      },
      {
        question: "Peut-on remplacer une baignoire par une douche ?",
        reponse:
          "Oui, c'est un projet courant, notamment pour gagner de la place ou faciliter l'accès. Nino adapte l'évacuation et l'alimentation et peut poser un receveur extra-plat avec une paroi de douche.",
      },
    ],
  },
  {
    slug: "renovation-salle-de-bain",
    titre: "Rénovation salle de bain",
    sousTitre: "Création et rénovation de A à Z",
    metaTitle: "Rénovation salle de bain Toulouse & Muret | Nino Plomberie",
    enBref:
      "Nino Plomberie crée et rénove des salles de bain de A à Z à Muret, Toulouse et en Haute-Garonne : plomberie, cloisons, placo, carrelage, peinture, douche à l'italienne ou receveur extra-plat, WC suspendu, meuble vasque. Les chantiers sont réalisés à deux professionnels pour un résultat soigné dans les délais. Le devis est gratuit.",
    metaDescription:
      "Création et rénovation de salle de bain à Muret et Toulouse, de A à Z : plomberie, carrelage, douche à l'italienne, WC suspendu. Nino Plomberie, devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Que vous souhaitiez moderniser votre salle de bain, remplacer la baignoire par une douche ou créer une nouvelle pièce d'eau, Nino Plomberie vous accompagne du projet aux finitions.",
    details: [
      "Dépose de l'ancienne installation",
      "Modification des arrivées d'eau et des évacuations",
      "Création de cloisons et pose de placo",
      "Douche à l'italienne ou receveur extra-plat avec paroi",
      "Pose de carrelage, faïence et peinture",
      "Installation de WC suspendu, meuble vasque et miroir",
    ],
    prix: "Devis gratuit et détaillé selon votre projet",
    urgence: false,
    icon: "Bath",
    seoContent: [
      "Nino Plomberie prend en charge votre projet de salle de bain dans sa globalité : la plomberie bien sûr, mais aussi la création de cloisons, le placo, la pose du carrelage et la peinture. Pour ces chantiers, Nino travaille avec un second professionnel afin de tenir les délais et de soigner chaque étape.",
      "Douche à l'italienne, receveur extra-plat, paroi coulissante, meuble double vasque, WC suspendu, robinetterie noire mat ou chromée : les photos de réalisations présentées sur cette page montrent des salles de bain réellement réalisées par l'entreprise.",
      "Il est aussi possible de déplacer une salle de bain dans une autre pièce de la maison pour optimiser l'agencement : arrivées d'eau et évacuations sont alors entièrement repensées.",
    ],
    faq: [
      {
        question: "Gérez-vous aussi le carrelage, le placo et la peinture ?",
        reponse:
          "Oui. Nino Plomberie propose un service clé en main incluant la plomberie, la création de cloisons, le placo, la pose de carrelage et la peinture, en collaboration avec un second professionnel.",
      },
      {
        question: "Combien de temps dure une rénovation de salle de bain ?",
        reponse:
          "Cela dépend de la surface et de l'ampleur des travaux : un simple remplacement d'équipements prend quelques jours, une rénovation complète davantage. Un planning vous est communiqué avec le devis.",
      },
      {
        question: "Peut-on installer une douche à l'italienne partout ?",
        reponse:
          "Pas toujours : une douche à l'italienne de plain-pied demande une pente d'évacuation suffisante sous le sol. Quand ce n'est pas possible, un receveur extra-plat offre un rendu proche et un accès facile. Nino vous indique la meilleure solution après visite.",
      },
      {
        question: "Peut-on déplacer une salle de bain dans une autre pièce ?",
        reponse:
          "Oui, Nino Plomberie prend en charge le déplacement d'une salle de bain dans une autre zone de la maison, en recréant les arrivées d'eau et les évacuations nécessaires.",
      },
    ],
  },
  {
    slug: "installation-plomberie-neuve",
    titre: "Plomberie neuve",
    sousTitre: "Construction, extension et mise aux normes",
    enBref:
      "Nino Plomberie réalise la plomberie de maisons neuves, d'extensions et de rénovations lourdes à Muret, Toulouse et en Haute-Garonne : réseaux d'eau froide et chaude, évacuations, attentes pour cuisine et salle de bain, pose des sanitaires et mise en service. Le devis est gratuit.",
    metaDescription:
      "Plomberie neuve à Muret, Toulouse et en Haute-Garonne : maison neuve, extension, mise aux normes. Réseaux, évacuations, sanitaires. Nino Plomberie, devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Construction, extension ou rénovation complète : Nino Plomberie réalise l'installation de plomberie de A à Z, en coordination avec les autres corps de métier du chantier.",
    details: [
      "Création des réseaux d'eau froide et d'eau chaude",
      "Pose des évacuations",
      "Mise en place des attentes cuisine et salle de bain",
      "Pose et raccordement des appareils sanitaires",
      "Installation du chauffe-eau",
      "Tests d'étanchéité et mise en service",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Building2",
    seoContent: [
      "Dans une construction neuve ou une extension, une plomberie bien conçue garantit un bon débit à chaque point d'eau, des évacuations qui fonctionnent sans bruit ni odeur et un entretien facile pendant des années.",
      "Nino Plomberie intervient aussi bien en neuf qu'en rénovation : remise en état d'une installation après sinistre, mise aux normes ou reprise complète des réseaux d'une maison ancienne.",
      "Sur chantier, Nino s'adapte au planning et travaille en coordination avec les autres artisans (électricien, plaquiste, carreleur).",
    ],
    faq: [
      {
        question: "Travaillez-vous avec les autres corps de métier ?",
        reponse:
          "Oui, Nino Plomberie s'adapte au planning du chantier et se coordonne avec les autres artisans pour que chaque étape s'enchaîne correctement.",
      },
      {
        question: "Faites-vous aussi la mise aux normes d'une installation ancienne ?",
        reponse:
          "Oui, Nino Plomberie prend en charge la remise en état et la mise aux normes d'installations existantes, ainsi que les réparations après sinistre.",
      },
      {
        question: "À quel moment faire intervenir le plombier sur un chantier neuf ?",
        reponse:
          "Le plombier intervient une première fois avant la pose des cloisons et des sols pour passer les réseaux et les évacuations, puis une seconde fois en fin de chantier pour poser et raccorder les appareils sanitaires.",
      },
    ],
  },
  {
    slug: "pose-cuisine",
    titre: "Pose de cuisine",
    sousTitre: "Pose et raccordement de cuisine clé en main",
    enBref:
      "Nino Plomberie pose des cuisines clé en main à Muret, Toulouse et en Haute-Garonne : montage et pose des meubles, plan de travail, évier et robinetterie, raccordement du lave-vaisselle et du lave-linge. Une prestation idéale en rénovation comme en construction. Le devis est gratuit.",
    metaDescription:
      "Pose de cuisine clé en main à Muret et Toulouse : meubles, plan de travail, évier, raccordements eau et évacuation. Nino Plomberie, devis gratuit. ☎ 06 50 57 96 20",
    description:
      "En complément de la plomberie, Nino Plomberie propose la pose de cuisines : un seul interlocuteur pour le montage des meubles et tous les raccordements d'eau.",
    details: [
      "Montage et pose des meubles de cuisine",
      "Pose du plan de travail",
      "Pose de l'évier et de la robinetterie",
      "Raccordement du lave-vaisselle et du lave-linge",
      "Modification des arrivées d'eau et évacuations si nécessaire",
      "Réglages et finitions",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Wrench",
    seoContent: [
      "Faire poser sa cuisine par un plombier présente un avantage concret : les arrivées d'eau, les évacuations et les raccordements de l'évier, du lave-vaisselle et du lave-linge sont réalisés dans les règles par la même personne qui monte les meubles.",
      "Nino Plomberie intervient pour des projets de rénovation ou de construction, à Muret, Toulouse et dans l'agglomération. Les photos de réalisations montrent des cuisines posées par l'entreprise.",
    ],
    faq: [
      {
        question: "Posez-vous des cuisines achetées en magasin ?",
        reponse:
          "Oui, Nino Plomberie pose les cuisines que vous avez achetées et réalise tous les raccordements d'eau nécessaires.",
      },
      {
        question: "Pouvez-vous déplacer l'évier lors de la pose de la cuisine ?",
        reponse:
          "Oui, c'est l'intérêt de faire appel à un plombier : les arrivées d'eau et l'évacuation peuvent être modifiées pour s'adapter au nouvel agencement.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceFiche | undefined {
  return services.find((s) => s.slug === slug)
}
