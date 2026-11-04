// src/data/services.ts
// Contenu des pages services conforme au brief SEO (1re personne, aucune invention chiffrée, H2 stricts).

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
  /** H1 si différent de « {titre} à Muret et Toulouse » (la partie avant « : » est mise en avant) */
  h1?: string
  /** serviceType du JSON-LD Service (par défaut : titre) */
  serviceType?: string
  /** Communes du JSON-LD areaServed (par défaut : liste commune des pages services) */
  areaServed?: string[]
  /** Sections éditoriales supplémentaires. Texte enrichi : **gras** et [ancre](/chemin) */
  sections?: ServiceSection[]
  /** Encart « À lire aussi » + bloc de clôture « Une urgence ou un devis ? » */
  aLireAussi?: Array<{ label: string; to: string }>
  /** false : page accessible et dans le sitemap, mais absente des listes de cartes services */
  listed?: boolean
  /** Slug dont on reprend la galerie de réalisations (par défaut : le slug de la page) */
  galerieSlug?: string
  heroImage?: string
  ctaButtonLabel?: string
  ctaH2?: string
  ctaLead?: string
  temoignage?: { nom: string; service: string; texte: string }
  photos?: Array<{ src: string; alt: string; legende: string }>
}

export interface ServiceSection {
  h2: string
  text?: string
  bullets?: string[]
  numbered?: boolean
  /** Phrase de transition après la liste */
  after?: string
  tableHeaders?: [string, string]
  table?: Array<{ col1: string; col2: string }>
  photos?: Array<{ src: string; alt: string; legende: string }>
}

export const services: ServiceFiche[] = [
  {
    "slug": "urgence-plombier-toulouse",
    "titre": "Urgence plombier 24h/24",
    "sousTitre": "Dépannage plomberie d'urgence à Toulouse et dans le 31",
    "metaTitle": "Plombier urgence Toulouse 24h/24 7j/7 - Dépannage | Nino",
    "metaDescription": "Urgence plomberie à Toulouse : fuite, WC bouché, chauffe-eau en panne. Intervention 24h/24 7j/7, devis gratuit avant travaux, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier urgence à Toulouse : dépannage 24h/24 et 7j/7",
    "serviceType": "Dépannage plomberie d'urgence",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-08.jpg",
    "enBref": "J'assure le dépannage de plomberie en urgence à Toulouse, Muret et en Haute-Garonne, 24h/24 et 7j/7 : fuite d'eau, WC bouché, chaudière en sécurité, chauffe-eau en panne. Le devis gratuit est validé avant travaux : vous connaissez le prix avant le premier coup de clé. Mes réparations sont garanties 2 ans.",
    "description": "Un appartement à Saint-Cyprien, une maison à Muret, un rez-de-chaussée aux Minimes : quand l'eau déborde, chaque minute compte. Ma ligne est ouverte 24h/24 et 7j/7 au 06 50 57 96 20. Vous me parlez en direct, sans plateforme. Devis gratuit validé avant travaux : vous connaissez le prix avant le premier coup de clé.",
    "details": [
      "Fuite d'eau sous évier, chauffe-eau ou canalisation rompue",
      "WC bouché et canalisation qui refoule",
      "Chaudière en sécurité, coupure de chauffage en hiver",
      "Radiateur ou circuit de chauffage qui fuit",
      "Chauffe-eau en panne ou groupe de sécurité qui coule",
      "Mise en sécurité immédiate de l'installation"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": true,
    "icon": "Droplets",
    "seoContent": [
      "Basé au 11 rue François Arago à Muret, j'exerce comme plombier-chauffagiste depuis plus de 20 ans (plus de 150 interventions à Toulouse sur trois ans, note de 4,4/5 sur 79 avis Google). La nuit ou le dimanche, c'est moi qui décroche et qui interviens avec un devis gratuit signé avant travaux."
    ],
    "sections": [
      {
        "h2": "Que faire dans les 5 premières minutes ?",
        "text": "Avant mon arrivée, ces gestes simples stoppent les dégâts dans votre logement :",
        "numbered": true,
        "bullets": [
          "**Coupez l'arrivée d'eau générale** : fermez la vanne près du compteur (sous l'évier, aux WC, au garage ou en regard).",
          "**Coupez le disjoncteur en cas de risque électrique** : si l'eau approche d'une prise ou coule sous le chauffe-eau, coupez au tableau.",
          "**Ne tirez plus la chasse d'eau** : sur un WC bouché, une chasse de plus fait déborder la cuvette.",
          "**Ne versez aucun produit chimique** : l'acide stagne devant le bouchon, attaque les joints et brûle la peau au démontage.",
          "**Épongez et photographiez** : protégez vos meubles, placez une bassine et prenez des photos pour votre assurance."
        ],
        "after": "Appelez-moi ensuite au 06 50 57 96 20 : je vous guide par téléphone pendant que je prends la route."
      },
      {
        "h2": "Les urgences que je traite",
        "text": "Voici les pannes qui demandent une intervention immédiate, de jour comme de nuit :",
        "bullets": [
          "**Fuite franche sur canalisation ou raccord** : tuyau cuivre ou multicouche qui cède sous l'évier ou au plafond. Voir ma page [recherche de fuite d'eau](/services/fuite-d-eau).",
          "**WC bouché ou colonne qui refoule** : l'eau remonte dans la cuvette ou la douche. J'interviens au furet ou haute pression ([débouchage de canalisation](/services/debouchage)).",
          "**Chauffe-eau qui fuit ou disjoncte** : groupe de sécurité bloqué, cuve percée ou panne d'eau chaude. Voir ma page [chauffe-eau et cumulus](/services/chauffe-eau).",
          "**Chaudière à l'arrêt en plein hiver** : appareil en sécurité, pression à zéro ou radiateur qui fuit ([chauffage et chaudière](/services/chauffage-chaudiere)).",
          "**Compteur d'eau qui s'affole** : tous les robinets sont fermés mais l'index tourne vite, signe d'une rupture après compteur."
        ],
        "after": "Un doute sur la gravité ? Appelez-moi : si cela peut attendre le lendemain, je vous le dis franchement."
      },
      {
        "h2": "Délais d'intervention constatés",
        "text": "Depuis mon atelier du 11 rue François Arago à [Muret](/intervention/muret), proche de l'A64 et de la rocade, je vous annonce mon heure d'arrivée réelle au téléphone :",
        "bullets": [
          "**Secteur Muret et sud toulousain** ([Muret](/intervention/muret), [Portet-sur-Garonne](/intervention/portet-sur-garonne), Seysses, Roques, Eaunes) : `[À CONFIRMER PAR NINO : délais moyens d'arrivée constatés par zone]`.",
          "**Toulouse intra-muros** ([Toulouse](/intervention/toulouse) : Saint-Cyprien, Carmes, Capitole, Minimes, Rangueil, Côte Pavée) : `[À CONFIRMER PAR NINO : délais moyens d'arrivée constatés par zone]`.",
          "**Ouest et nord toulousain** ([Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac), [Tournefeuille](/intervention/tournefeuille), Cugnaux, Plaisance-du-Touch) : `[À CONFIRMER PAR NINO : délais moyens d'arrivée constatés par zone]`."
        ],
        "after": "Si je suis déjà en intervention, je vous donne mon créneau exact sans vous laisser dans le flou."
      },
      {
        "h2": "Ce qu'on ne fait pas",
        "text": "Face aux dérives des plateformes anonymes, voici mes règles de travail :",
        "bullets": [
          "**Pas de majoration cachée** : déplacement et main-d'œuvre sont écrits noir sur blanc sur le devis, même la nuit ou le dimanche.",
          "**Pas de travaux sans devis signé** : je ne remplace rien avant votre accord écrit. Vous connaissez le prix avant le premier coup de clé.",
          "**Pas de sous-traitance** : je travaille seul, sans centre d'appels ni commercial au pourcentage.",
          "**Pas de remplacement abusif** : quand un joint ou un groupe de sécurité suffit à stopper la fuite, je répare la pièce au lieu de tout changer."
        ],
        "after": "Mon nom figure sur mon camion et sur mes 79 avis Google (note de 4,4/5)."
      },
      {
        "h2": "Comment se passe une intervention",
        "text": "Chaque sortie d'urgence suit quatre étapes claires :",
        "numbered": true,
        "bullets": [
          "**Appel direct au 06 50 57 96 20** : vous m'expliquez la panne, je vous dicte la mise en sécurité et je confirme mon heure d'arrivée.",
          "**Diagnostic et devis gratuit sur place** : j'identifie l'origine de la panne et vous remets un devis gratuit détaillé.",
          "**Réparation immédiate** : dès signature, je répare avec les pièces de mon camion (raccords, joints, groupes de sécurité, thermostats, furet).",
          "**Facture claire et garantie 2 ans** : remise en eau, nettoyage et garantie 2 ans pièces et main-d'œuvre."
        ],
        "after": "Pour une panne non urgente en semaine, consultez ma page [dépannage plomberie à Toulouse](/services/depannage-plomberie-toulouse)."
      },
      {
        "h2": "Combien coûte une urgence la nuit ou le week-end ?",
        "text": "Le tarif dépend de la panne et de l'horaire. À titre indicatif : `[À CONFIRMER PAR NINO : tarif de déplacement et majoration éventuelle nuit / week-end]`. Mon devis reste gratuit et le montant total est annoncé avant travaux. Voir ma page [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "temoignage": {
      "nom": "Nicolas N.",
      "service": "Dépannage d'urgence",
      "texte": "Merci Nino pour votre réactivité et votre qualité de travail. Très disponible pour répondre à l'urgence de la situation. Je recommande vivement."
    },
    "photos": [
      {
        "src": "/realisations/photo-08.jpg",
        "alt": "Intervention d'urgence plomberie de nuit sur WC et canalisation à Muret",
        "legende": "Dépannage d'urgence en soirée à Muret : remise en service WC et évacuation."
      },
      {
        "src": "/realisations/photo-07.jpg",
        "alt": "Remplacement d'un chauffe-eau électrique en urgence le week-end à Muret",
        "legende": "Intervention week-end à Muret : remplacement d'un cumulus en panne et raccordement."
      },
      {
        "src": "/realisations/photo-02.jpg",
        "alt": "Réparation de fuite urgente sur colonne de douche à Toulouse",
        "legende": "Dépannage à Toulouse : suppression d'une fuite sur raccord de douche et contrôle d'étanchéité."
      }
    ],
    "faq": [
      {
        "question": "Intervenez-vous vraiment la nuit, le dimanche et les jours fériés ?",
        "reponse": "Oui. Je réponds personnellement au 06 50 57 96 20 24h/24 et 7j/7, y compris la nuit, le week-end et les jours fériés. Je vous indique immédiatement mon délai d'arrivée selon votre commune."
      },
      {
        "question": "Le devis est-il gratuit même en urgence ?",
        "reponse": "Oui, mon devis est gratuit. Je vous annonce le prix exact sur place et vous le signez avant que je commence la réparation. Vous connaissez le prix avant le premier coup de clé."
      },
      {
        "question": "Que faire en attendant votre arrivée sur une fuite ?",
        "reponse": "Fermez tout de suite la vanne d'arrêt générale d'eau. Si l'eau touche une prise ou le chauffe-eau, coupez le disjoncteur au tableau électrique. Épongez et prenez des photos pour votre assurance."
      },
      {
        "question": "Mes réparations d'urgence sont-elles garanties ?",
        "reponse": "Oui, toutes mes réparations sont garanties 2 ans, pièces et main-d'œuvre, avec une facture détaillée conforme aux demandes des assurances habitation."
      }
    ],
    "aLireAussi": [
      {
        "label": "Dépannage plomberie à Toulouse",
        "to": "/services/depannage-plomberie-toulouse"
      },
      {
        "label": "Débouchage canalisation",
        "to": "/services/debouchage"
      },
      {
        "label": "Recherche de fuite",
        "to": "/services/fuite-d-eau"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence maintenant ?",
    "ctaLead": "Appelez-moi directement au 06 50 57 96 20. Je décroche 24h/24 et 7j/7, je vous guide au téléphone et vous validez mon devis gratuit avant le premier coup de clé."
  },
  {
    "slug": "fuite-d-eau",
    "titre": "Fuite d'eau",
    "sousTitre": "Recherche et réparation de fuite à Muret et Toulouse",
    "metaTitle": "Recherche de fuite Toulouse & Muret - Détection | Nino",
    "metaDescription": "Recherche de fuite d'eau à Toulouse et Muret : détection sans casse, réparation, devis gratuit avant travaux. Artisan depuis 20 ans, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Recherche de fuite d'eau à Toulouse et Muret : détection sans casse",
    "serviceType": "Recherche de fuite d'eau",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-02.jpg",
    "enBref": "Je localise et je répare vos fuites d'eau à Toulouse, Muret et en Haute-Garonne, 24h/24 et 7j/7 : détection sans casse des fuites encastrées, réparation de canalisation cuivre, PER ou multicouche, joint, robinet ou chauffe-eau. Devis gratuit validé avant travaux et réparation garantie 2 ans pièces et main-d'œuvre.",
    "description": "Une auréole au plafond, un mur qui cloque ou un compteur d'eau qui tourne tout seul : je cherche l'origine exacte de la fuite avant d'ouvrir quoi que ce soit. Artisan plombier depuis plus de 20 ans (4,4/5 sur 79 avis Google), j'interviens à Muret et Toulouse avec devis gratuit avant travaux.",
    "details": [
      "Recherche de fuite sans casse (cloisons, dalles, coffrages)",
      "Contrôle de pression et test d'étanchéité des réseaux",
      "Réparation de canalisations cuivre, PER, multicouche et PVC",
      "Suppression des fuites de robinets, joints et raccords",
      "Réparation de fuites sur chasse d'eau et groupe de sécurité",
      "Facture détaillée pour votre déclaration de dégât des eaux"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": true,
    "icon": "Droplets",
    "seoContent": [
      "Installé au 11 rue François Arago à [Muret](/intervention/muret) depuis plus de 20 ans, j'interviens chaque semaine à [Toulouse](/intervention/toulouse), [Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac) et [Tournefeuille](/intervention/tournefeuille) pour des dégâts des eaux et des pertes de pression. Dans les toulousaines en brique comme dans les résidences récentes, une fuite traitée dès les premiers signes évite la dépose complète d'un carrelage ou d'un parquet.",
      "Lorsque vous m'appelez au 06 50 57 96 20, je me déplace personnellement, je diagnostique l'origine de l'infiltration et je vous remets un devis gratuit écrit avant toute réparation. Mon intervention est garantie 2 ans pièces et main-d'œuvre et ma facture détaille la recherche et la remise en état pour votre assurance habitation."
    ],
    "sections": [
      {
        "h2": "Une facture d'eau qui augmente ?",
        "text": "Un filet d'eau invisible derrière une cloison ou sous un jardin suffit à faire exploser votre facture annuelle. Avant de m'appeler, faites ce test simple en trois étapes :",
        "numbered": true,
        "bullets": [
          "**Relevez votre compteur le soir** : fermez tous les robinets de la maison, coupez le lave-linge et le lave-vaisselle, vérifiez que personne ne tire d'eau et notez précisément les chiffres rouges et noirs du compteur.",
          "**Vérifiez l'index au réveil** : sans avoir ouvert un robinet ni tiré la chasse pendant la nuit, contrôlez le compteur. Si les chiffres ont avancé ou que la petite roulette tourne, une fuite coule après votre compteur.",
          "**Isolez la maison du réseau extérieur** : fermez la vanne d'arrêt intérieure de la maison. Si le compteur situé en limite de propriété tourne encore, la fuite se situe sur la canalisation enterrée entre la rue et votre logement."
        ],
        "after": "Appelez-moi dès que le test est positif : plus je traite la fuite tôt, moins l'humidité abîme vos cloisons et vos sols."
      },
      {
        "h2": "Les signes qui ne trompent pas",
        "text": "Une fuite encastrée met parfois plusieurs semaines avant de traverser un mur. Surveillez ces quatre alertes dans votre logement :",
        "bullets": [
          "**Auréole au plafond ou peinture qui cloque** : l'eau s'infiltre depuis la salle de bain de l'étage, un joint silicone de douche fissuré, une bonde mal serrée ou une gaine technique verticale.",
          "**Plinthes qui noircissent et odeur de moisi** : l'humidité remonte par capillarité dans le placo au pied de la cloison ou derrière un meuble de cuisine.",
          "**Bruit de sifflement ou de goutte-à-goutte** : dans le silence de la nuit, vous entendez l'eau filer dans un mur ou dans le vide sanitaire alors que tous les robinets sont fermés.",
          "**Chute de pression sur la chaudière** : si le manomètre de votre chauffage redescend sans cesse sous 1 bar, un raccord ou un tuyau du circuit de radiateurs fuit."
        ],
        "after": "Si l'eau coule à flot sur le sol, coupez la vanne générale et passez par ma page [plombier urgence à Toulouse](/services/urgence-plombier-toulouse)."
      },
      {
        "h2": "Comment on trouve une fuite sans casser",
        "text": "Ouvrir un mur carrelé au hasard coûte cher et ne sert à rien. Avec plus de 20 ans de métier et plus de 150 interventions à [Toulouse](/intervention/toulouse) sur trois ans, je procède par élimination méthodique avant toute ouverture : j'inspecte d'abord les points singuliers accessibles (nourrices de distribution, coffrages de WC suspendu, trappes de visite de baignoire, siphons et joints périphériques de receveur), je teste ensuite la tenue en pression tronçon par tronçon (eau froide, eau chaude, chauffage) et je repère le point exact d'humidité. Récemment, dans une maison à [Muret](/intervention/muret) puis dans un appartement des Carmes à Toulouse, j'ai isolé la fuite sur un raccord encastré derrière le meuble vasque : une seule découpe propre dans le fond du meuble a suffi pour réparer le tuyau en cuivre, sans casser un seul carreau de faïence."
      },
      {
        "h2": "Fuite visible ou fuite cachée",
        "text": "Je distingue deux situations qui ne demandent pas le même travail sur place :",
        "bullets": [
          "**Fuite visible (apparente)** : goutte-à-goutte sous un siphon d'évier, flexible de douche percé, robinet d'arrêt grippé, groupe de sécurité de [chauffe-eau](/services/chauffe-eau) qui coule en continu ou mécanisme de chasse d'eau usé. Je remplace la pièce défectueuse ou je refais le raccord immédiatement avec le stock de mon camion.",
          "**Fuite cachée (encastrée)** : tuyau cuivre piqué par la corrosion dans une cloison, raccord PER sous baignoire, alimentation sous dalle ou évacuation PVC fendue dans un coffrage. Je localise d'abord le point précis sans démolition inutile, j'ouvre uniquement la zone nécessaire et je répare durablement par brasure ou sertissage."
        ],
        "after": "Pour moderniser un équipement vétuste qui fuit, consultez aussi ma page [robinetterie et sanitaires](/services/robinetterie-sanitaires)."
      },
      {
        "h2": "Combien coûte une recherche de fuite ?",
        "text": "Le tarif dépend de l'accessibilité du réseau et de la nature de la fuite (apparente ou encastrée). À titre indicatif : `[À CONFIRMER PAR NINO : prix d'une recherche de fuite sans casse et d'une réparation de fuite simple]`. Je vous remets toujours un devis gratuit écrit à signer avant le début des travaux. Consultez l'ensemble de mes informations sur la page [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "temoignage": {
      "nom": "Cynthia M.",
      "service": "Fuite d'eau",
      "texte": "Je recommande Nino sans aucune hésitation. Venu réparer une fuite de l'évier et raccorder un lave-linge, Nino a été très gentil, rapide et efficace. Il s'adapte très rapidement face aux problèmes inattendus rencontrés. C'est un vrai expert dans son domaine."
    },
    "photos": [
      {
        "src": "/realisations/photo-02.jpg",
        "alt": "Recherche et réparation de fuite sur colonne de douche à Toulouse",
        "legende": "Toulouse : reprise d'étanchéité et raccordement sans casse du carrelage mural."
      },
      {
        "src": "/realisations/photo-03.jpg",
        "alt": "Réparation de fuite sous meuble vasque et mitigeur à Muret",
        "legende": "Muret : suppression d'une fuite sur alimentation et siphon sous meuble vasque."
      },
      {
        "src": "/realisations/photo-10.jpg",
        "alt": "Contrôle d'étanchéité sur receveur de douche extra-plat à Toulouse",
        "legende": "Toulouse : réfection complète des joints et de l'évacuation après infiltration."
      }
    ],
    "faq": [
      {
        "question": "Que faire immédiatement quand je découvre une fuite d'eau ?",
        "reponse": "Fermez le robinet d'arrêt de l'appareil ou la vanne générale près du compteur. Coupez le disjoncteur si l'eau approche d'une prise électrique. Épongez, prenez des photos pour votre assurance et appelez-moi au 06 50 57 96 20."
      },
      {
        "question": "Devez-vous casser le carrelage pour trouver la fuite ?",
        "reponse": "Non. Je commence toujours par une recherche sans casse en testant les réseaux et en inspectant les accès techniques. Si une ouverture est indispensable pour souder ou sertir le tuyau, elle est ciblée au strict minimum."
      },
      {
        "question": "Fournissez-vous une facture pour mon assurance habitation ?",
        "reponse": "Oui. Je vous remets un devis détaillé avant travaux puis une facture précise indiquant la recherche et la réparation de la fuite, document demandé par votre assureur en cas de dégât des eaux."
      },
      {
        "question": "Vos réparations de fuite sont-elles garanties ?",
        "reponse": "Oui, toutes mes réparations sont garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "aLireAussi": [
      {
        "label": "Plombier urgence à Toulouse",
        "to": "/services/urgence-plombier-toulouse"
      },
      {
        "label": "Robinetterie et sanitaires",
        "to": "/services/robinetterie-sanitaires"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence ou un devis ?"
  },
  {
    "slug": "debouchage",
    "titre": "Débouchage canalisation",
    "sousTitre": "Débouchage WC, évier, douche, baignoire et canalisation",
    "metaTitle": "Débouchage canalisation Toulouse & Muret 24h/24 | Nino",
    "metaDescription": "Débouchage WC, évier, canalisation à Toulouse et Muret. Intervention 24h/24 7j/7, devis gratuit avant travaux, garantie 2 ans. Appelez le 06 50 57 96 20.",
    "h1": "Débouchage canalisation à Toulouse et Muret, WC et éviers",
    "serviceType": "Débouchage de canalisation et de WC",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-08.jpg",
    "enBref": "Je débouche vos WC, éviers, lavabos, douches et canalisations à Toulouse, Muret et en Haute-Garonne, 24h/24 et 7j/7. J'interviens avec des outils mécaniques professionnels (pompe, furet, haute pression), sans produit chimique corrosif. Devis gratuit validé avant travaux et garantie 2 ans.",
    "description": "WC qui déborde, évier qui ne s'écoule plus, douche qui stagne : Nino Plomberie trouve le bouchon et rétablit l'écoulement, puis vous conseille pour éviter que le problème ne revienne.",
    "details": [
      "Débouchage de WC classiques et WC suspendus",
      "Débouchage d'évier de cuisine et de lavabo (graisses, résidus)",
      "Débouchage de douche et baignoire (cheveux, calcaire, savon)",
      "Démontage et curage des siphons et culottes d'évacuation",
      "Débouchage mécanique au furet et dégorgement de canalisations",
      "Vérification du bon écoulement et conseils anti-récidive"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": true,
    "icon": "Wind",
    "sections": [
      {
        "h2": "Le bouchon revient régulièrement ?",
        "text": "Quand un évier ou un WC se rebouche trois semaines après un premier débouchage, c'est que le bouchon a seulement été percé au lieu d'être extrait. À [Toulouse](/intervention/toulouse) comme à [Muret](/intervention/muret), l'eau est calcaire : le tartre rétrécit l'intérieur des tuyaux PVC ou fonte et retient les graisses de cuisine, le papier et les lingettes. Une pente d'évacuation trop faible ou un coude mal orienté ralentit aussi le flux. Mon travail ne s'arrête pas dès que l'eau descend : je retire l'amas complet et je teste plusieurs chasses d'eau ou pleins d'évier pour vérifier le débit."
      },
      {
        "h2": "Les gestes à essayer avant d'appeler",
        "text": "Si l'eau ne déborde pas encore sur le carrelage, tentez ces trois vérifications simples :",
        "numbered": true,
        "bullets": [
          "**Démontez et videz le siphon** : sous un évier ou un lavabo, placez une bassine, dévissez le culot du siphon à la main et retirez les cheveux ou restes alimentaires.",
          "**Utilisez une ventouse à eau** : bouchez le trop-plein avec un chiffon humide, laissez un fond d'eau dans la cuvette ou l'évier et pompez énergiquement pour décoller le bouchon.",
          "**Versez de l'eau très chaude (non bouillante)** : sur un évier ralenti par la graisse de cuisson, une casserole d'eau bien chaude aide à dissoudre le savon figé sans déformer le PVC."
        ],
        "after": "L'eau reste bloquée ou remonte dans la douche quand vous tirez la chasse ? Arrêtez tout et appelez-moi au 06 50 57 96 20."
      },
      {
        "h2": "Pourquoi éviter les déboucheurs chimiques agressifs",
        "text": "Les gels et granulés à base de soude caustique ou d'acide sulfurique vendus en supermarché posent trois problèmes graves. D'abord, la réaction chimique dégage une chaleur intense qui ramollit les tuyaux en PVC et cuit les joints en caoutchouc. Ensuite, face à un bouchon compact de lingettes ou de calcaire, le liquide ne traverse pas : il stagne dans la cuvette et transforme l'eau en mélange toxique. Enfin, il brûle les mains et les yeux dès qu'il faut démonter le siphon ou passer le furet. Préférez toujours un débouchage mécanique."
      },
      {
        "h2": "WC, évier, colonne d'immeuble : trois cas, trois méthodes",
        "text": "Je choisis mon outil selon l'appareil bouché et la distance du bouchon dans votre réseau d'évacuation :",
        "bullets": [
          "**WC bouché (à poser ou suspendu)** : le bouchon se loge souvent dans le col de cygne de la cuvette ou juste derrière la pipe de raccordement, causé par un excès de papier, des lingettes ou un bloc désodorisant décroché. J'utilise une pompe à pression professionnelle puis un furet gainé qui traverse la porcelaine sans la rayer pour accrocher et extraire l'obstacle. Pour une urgence toilette, consultez aussi ma page [débouchage WC à Toulouse](/services/debouchage-wc-toulouse).",
          "**Évier de cuisine, lavabo ou douche engorgés** : en cuisine, les huiles et graisses refroidissent dans le tuyau horizontal et forment un bouchon dur comme du savon ; en salle de bain, les cheveux s'enroulent autour de la bonde et retiennent le calcaire. Après ouverture et nettoyage complet du siphon, j'introduis un furet mécanique rotatif dans la canalisation murale sur plusieurs mètres pour racler les parois et rétablir le diamètre d'origine.",
          "**Canalisation principale ou pied de colonne d'immeuble** : quand l'eau des WC refoule dans le bac à douche ou que plusieurs voisins d'un immeuble à [Toulouse](/intervention/toulouse) ou [Colomiers](/intervention/colomiers) subissent un engorgement simultané, l'obstruction est loin dans le collecteur. J'interviens par les regards de visite ou les tés de dégorgement pour libérer la conduite principale, et je me coordonne avec le syndic si le bouchon touche les parties communes."
        ],
        "after": "Si le bouchon a provoqué un suintement sur un joint, je vérifie l'étanchéité ou j'effectue une [recherche de fuite](/services/fuite-d-eau)."
      },
      {
        "h2": "Combien coûte un débouchage ?",
        "text": "Mon devis est gratuit et je vous annonce toujours le prix fixe avant de commencer. À titre indicatif : débouchage simple au furet (évier, douche ou WC) à 140 € TTC. Aucun supplément n'est ajouté en fin d'intervention. Consultez ma grille complète sur la page [tarifs plombier à Muret et Toulouse](/tarifs)."
      },
      {
        "h2": "Comment se passe une intervention",
        "numbered": true,
        "bullets": [
          "**Diagnostic au téléphone et sur place** : vous m'appelez au 06 50 57 96 20, je vous indique quand j'arrive et je repère sur place où se situe le bouchon (siphon, branchement privatif ou collecteur).",
          "**Devis gratuit signé avant travaux** : je vous annonce la méthode retenue et le tarif exact avant d'intervenir.",
          "**Débouchage mécanique et test d'écoulement** : j'extrais le bouchon au furet ou à la pompe, je remonte les siphons avec des joints sains et je vérifie le bon écoulement à plein débit."
        ],
        "after": "Pour une inondation en cours la nuit, passez par ma page [plombier urgence à Toulouse](/services/urgence-plombier-toulouse)."
      }
    ],
    "temoignage": {
      "nom": "Coralie L.",
      "service": "Débouchage",
      "texte": "Je recommande Nino sans hésiter, que j'ai contacté pour venir déboucher mon évier et réparer une fuite. Il est arrivé dans l'heure qui a suivi mon appel et a été très efficace."
    },
    "photos": [
      {
        "src": "/realisations/photo-08.jpg",
        "alt": "Débouchage d'un WC suspendu et contrôle d'évacuation à Muret",
        "legende": "Muret : débouchage mécanique d'un WC suspendu et test d'écoulement."
      },
      {
        "src": "/realisations/photo-03.jpg",
        "alt": "Débouchage d'un lavabo et nettoyage de siphon à Muret, rue François Arago",
        "legende": "Muret : démontage du siphon, curage de la canalisation murale et remise en eau."
      },
      {
        "src": "/realisations/photo-07.jpg",
        "alt": "Débouchage d'évier de cuisine et reprise d'évacuation à Muret",
        "legende": "Muret : dégorgement d'une conduite d'évier de cuisine obstruée par les graisses."
      }
    ],
    "faq": [
      {
        "question": "Mes WC débordent, que faire en attendant votre arrivée ?",
        "reponse": "Ne tirez surtout plus la chasse d'eau. Fermez le petit robinet d'arrêt situé sur le côté du réservoir WC, épongez l'eau au sol et n'ajoutez aucun produit chimique. Appelez-moi au 06 50 57 96 20."
      },
      {
        "question": "J'ai déjà versé du Destop ou de l'acide, pouvez-vous intervenir ?",
        "reponse": "Oui, mais prévenez-moi impérativement dès votre appel et à mon arrivée. Je dois porter des protections adaptées pour éviter les brûlures chimiques lors de l'ouverture du siphon ou du passage du furet."
      },
      {
        "question": "Intervenez-vous le soir et le dimanche pour un WC bouché ?",
        "reponse": "Oui, je suis joignable 24h/24 et 7j/7. Un logement avec un seul WC bouché ne peut pas attendre plusieurs jours."
      },
      {
        "question": "Comment éviter que mon évier ou mes toilettes ne se rebouchent ?",
        "reponse": "Ne jetez jamais de lingettes (même dites biodégradables) ni de rouleaux carton dans les WC. En cuisine, essuyez les poêles grasses avec un essuie-tout avant de les laver et videz les siphons deux fois par an."
      }
    ],
    "aLireAussi": [
      {
        "label": "Débouchage WC à Toulouse",
        "to": "/services/debouchage-wc-toulouse"
      },
      {
        "label": "Plombier urgence à Toulouse",
        "to": "/services/urgence-plombier-toulouse"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence ou un devis ?"
  },
  {
    "slug": "chauffe-eau",
    "titre": "Chauffe-eau & Cumulus",
    "sousTitre": "Dépannage, remplacement et installation",
    "metaTitle": "Chauffe-eau Toulouse, Muret - Dépannage, remplacement | Nino",
    "metaDescription": "Plus d'eau chaude ? Dépannage et remplacement de chauffe-eau à Toulouse et Muret, 7j/7. Artisan depuis 20 ans, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Chauffe-eau et cumulus à Muret et Toulouse : dépannage et remplacement",
    "serviceType": "Dépannage et remplacement de chauffe-eau",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-07.jpg",
    "enBref": "Je dépanne, je remplace et j'installe votre chauffe-eau ou cumulus à Muret, Toulouse et en Haute-Garonne, 7j/7 : panne d'eau chaude, ballon qui fuit, résistance entartrée ou groupe de sécurité qui coule. Artisan depuis plus de 20 ans (4,4/5 sur 79 avis), devis gratuit validé avant travaux et garantie 2 ans.",
    "description": "Plus d'eau chaude sous la douche, un disjoncteur qui saute ou un ballon qui goutte au garage : j'interviens à Muret et Toulouse, même le week-end, pour diagnostiquer la panne et réparer ou remplacer votre chauffe-eau sans attendre.",
    "details": [
      "Diagnostic de panne électrique ou hydraulique sur chauffe-eau",
      "Remplacement de thermostat, résistance stéatite ou blindée",
      "Remplacement du groupe de sécurité et du siphon",
      "Détartrage complet de la cuve et contrôle de l'anode",
      "Dépose de l'ancien ballon et pose d'un cumulus neuf",
      "Raccordement eau, électricité et mise en service immédiate"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": true,
    "icon": "Flame",
    "seoContent": [
      "À [Toulouse](/intervention/toulouse), [Muret](/intervention/muret) et [Colomiers](/intervention/colomiers), le calcaire s'accumule au fond des ballons d'eau chaude et forme une gangue autour de la résistance. L'appareil met plus de temps à chauffer, consomme davantage d'électricité et finit par se mettre en sécurité. En plus de 20 ans de métier et plus de 150 interventions à Toulouse sur trois ans, c'est l'une des pannes que je dépanne le plus souvent.",
      "Quand vous m'appelez au 06 50 57 96 20, je vérifie d'abord avec vous par téléphone si le problème vient du tableau électrique avant de me déplacer. Sur place, mon devis gratuit vous permet de décider en toute clarté entre une simple réparation et le remplacement du ballon."
    ],
    "sections": [
      {
        "h2": "Plus d'eau chaude : les 3 causes les plus fréquentes",
        "text": "Quand le robinet d'eau chaude reste glacé le matin, la panne provient presque toujours de l'un de ces trois éléments :",
        "numbered": true,
        "bullets": [
          "**Panne d'alimentation électrique ou contacteur jour/nuit** : le disjoncteur dédié au tableau a sauté, ou le contacteur heures creuses ne bascule plus. Passez le curseur en « marche forcée » (position I) : s'il rebascule immédiatement en coupant le courant, votre chauffe-eau est en court-circuit.",
          "**Thermostat mis en sécurité thermique ou hors service** : entartré par le calcaire, le ballon surchauffe à sa base et déclenche la sécurité du thermostat. Parfois un réarmement après détartrage suffit ; sinon, je remplace le thermostat sans vider toute la cuve.",
          "**Résistance brûlée ou cuve percée par la corrosion** : la résistance électrique ne chauffe plus l'eau, ou de l'eau rouillée goutte sous le capot inférieur du ballon. Une fuite par la cuve signifie que l'acier est percé : le remplacement complet du cumulus est alors indispensable."
        ],
        "after": "Si de l'eau coule fort au pied du ballon, fermez le robinet d'arrêt du groupe de sécurité et consultez ma page [plombier urgence à Toulouse](/services/urgence-plombier-toulouse)."
      },
      {
        "h2": "Réparer ou remplacer son chauffe-eau ?",
        "text": "Je ne remplace jamais un cumulus complet quand une pièce détachée règle durablement la panne. Voici comment je tranche lors de mon diagnostic sur place :",
        "bullets": [
          "**On répare le chauffe-eau** : lorsque la cuve est parfaitement étanche et que la panne vient uniquement du groupe de sécurité qui coule en continu, du thermostat défectueux ou d'une résistance stéatite accessible dans son fourreau sans vidange.",
          "**On remplace le chauffe-eau** : lorsque la cuve elle-même fuit (eau teintée de rouille qui suinte sous l'isolant), car une cuve sous pression percée par la corrosion ne se ressoude jamais, ou lorsque l'appareil est très ancien et que le coût cumulé d'une résistance, d'un thermostat, d'un joint de bride et d'un détartrage approche celui d'un ballon neuf garanti."
        ],
        "after": "Je vous montre la pièce en cause sur place pour que vous choisissiez en connaissance de cause."
      },
      {
        "h2": "Combien de temps pour un remplacement ?",
        "text": "Une fois mon devis gratuit signé, je vidange l'ancien ballon, je le dépose, je fixe le nouveau cumulus (vertical mural, sur trépied ou horizontal), je monte un groupe de sécurité neuf ainsi que des raccords diélectriques, puis je remets en eau et en chauffe. Je garde les formats courants en stock ou chez mes fournisseurs proches de mon atelier du 11 rue François Arago à [Muret](/intervention/muret), ce qui me permet d'intervenir aussi le week-end en cas d'urgence."
      },
      {
        "h2": "Chauffe-eau électrique, cumulus, thermodynamique : que choisir ?",
        "text": "Le bon modèle dépend de la place disponible, du nombre d'occupants et de la dureté de l'eau :",
        "bullets": [
          "**Cumulus à résistance stéatite** : la résistance est protégée du contact direct avec l'eau par un fourreau émaillé. C'est le choix que je recommande à [Toulouse](/intervention/toulouse) et Muret face au calcaire, et la résistance se change sans vidanger le ballon.",
          "**Chauffe-eau plat ou gain de place** : idéal dans les studios et appartements toulousains (Capitole, Carmes, Saint-Cyprien) où le placard est étroit, avec une montée en température rapide.",
          "**Chauffe-eau thermodynamique** : équipé d'une petite pompe à chaleur intégrée, il convient aux maisons individuelles disposant d'un garage ou d'une buanderie non chauffée au volume suffisant."
        ],
        "after": "Vous préférez une production d'eau chaude par chaudière gaz ? Consultez ma page [chauffage et chaudière](/services/chauffage-chaudiere)."
      },
      {
        "h2": "Combien ça coûte ?",
        "text": "Le tarif dépend de la réparation (changement de groupe de sécurité, thermostat, résistance) ou de la capacité et du modèle du ballon à poser. À titre indicatif : `[À CONFIRMER PAR NINO : ordre de prix d'un dépannage et d'un remplacement de chauffe-eau, pose comprise]`. Mon devis est gratuit, détaillé et validé avant les travaux. Retrouvez toutes les informations sur la page [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "temoignage": {
      "nom": "Louis Q.",
      "service": "Chauffe-eau",
      "texte": "Cumulus tombé en panne le samedi, j'ai téléphoné à Nino le dimanche matin à 9h, m'a répondu gentiment pour une visite en début d'après-midi, changement du cumulus aussitôt dit aussitôt fait car il en avait un en stock. Travail soigné."
    },
    "photos": [
      {
        "src": "/realisations/photo-07.jpg",
        "alt": "Pose et raccordement d'un chauffe-eau électrique vertical à Muret",
        "legende": "Muret : installation d'un cumulus neuf avec groupe de sécurité et siphon."
      },
      {
        "src": "/realisations/photo-06.jpg",
        "alt": "Contrôle de pression et d'eau chaude sur douche thermostatique à Toulouse",
        "legende": "Toulouse : vérification du débit et de la température d'eau chaude après dépannage."
      },
      {
        "src": "/realisations/photo-05.jpg",
        "alt": "Raccordement eau chaude et eau froide en cuisine à Toulouse",
        "legende": "Toulouse : création et raccordement du réseau d'eau chaude sanitaire."
      }
    ],
    "faq": [
      {
        "question": "Je n'ai plus d'eau chaude, que vérifier avant de vous appeler ?",
        "reponse": "Regardez votre tableau électrique : vérifiez que le disjoncteur du chauffe-eau est bien levé et passez le contacteur jour/nuit sur I (marche forcée). Si l'eau reste froide quelques heures après ou si le disjoncteur saute tout de suite, appelez-moi au 06 50 57 96 20."
      },
      {
        "question": "Mon groupe de sécurité goutte sous le ballon, est-ce normal ?",
        "reponse": "Un léger goutte-à-goutte pendant les heures de chauffe (souvent la nuit) est normal car l'eau se dilate en chauffant. En revanche, un filet d'eau continu toute la journée montre que le groupe de sécurité est entartré ou que la pression du réseau est trop forte : il faut le remplacer."
      },
      {
        "question": "Pouvez-vous remplacer un chauffe-eau le week-end ?",
        "reponse": "Oui. J'interviens 7j/7 à Muret, Toulouse et dans toute la Haute-Garonne. Si la cuve est percée un samedi ou un dimanche, je peux poser un ballon neuf rapidement."
      },
      {
        "question": "Quelle garantie s'applique sur vos interventions ?",
        "reponse": "Mes interventions et installations sont couvertes par ma garantie de 2 ans pièces et main-d'œuvre, en plus de la garantie fabricant de la cuve."
      }
    ],
    "aLireAussi": [
      {
        "label": "Plombier urgence à Toulouse",
        "to": "/services/urgence-plombier-toulouse"
      },
      {
        "label": "Recherche de fuite d'eau",
        "to": "/services/fuite-d-eau"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence ou un devis ?"
  },
  {
    "slug": "chauffage-chaudiere",
    "titre": "Chauffage & Chaudière",
    "sousTitre": "Plombier chauffagiste à Muret et Toulouse",
    "metaTitle": "Entretien & dépannage chaudière Toulouse - 24h/24 | Nino",
    "metaDescription": "Entretien chaudière, dépannage et remplacement à Toulouse et Muret. Intervention 24h/24, devis gratuit avant travaux, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Chauffagiste à Muret et Toulouse : entretien et dépannage de chaudière",
    "serviceType": "Entretien et dépannage de chaudière",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-11.jpg",
    "enBref": "Chauffagiste basé à Muret depuis plus de 20 ans, j'assure l'entretien annuel, le dépannage 24h/24 et le remplacement de votre chaudière et de vos radiateurs à Toulouse et en Haute-Garonne. Devis gratuit validé avant travaux, attestation d'entretien remise et garantie 2 ans pièces et main-d'œuvre.",
    "description": "Chaudière en sécurité un soir d'hiver, pression qui chute sous 1 bar, radiateurs froids ou visite d'entretien annuel : j'interviens en direct au 06 50 57 96 20 à Muret et Toulouse, sans plateforme.",
    "details": [
      "Dépannage de chaudière en sécurité 24h/24 et 7j/7",
      "Entretien annuel obligatoire avec remise d'attestation",
      "Recherche de perte de pression sur le circuit de chauffage",
      "Purge, désembouage et équilibrage des radiateurs",
      "Remplacement de vannes, têtes thermostatiques et radiateurs",
      "Remplacement de chaudière sur devis gratuit"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": true,
    "icon": "Thermometer",
    "seoContent": [
      "Installé au 11 rue François Arago à [Muret](/intervention/muret) depuis plus de 20 ans, j'interviens sur les chaudières murales et au sol dans toute l'agglomération toulousaine (plus de 150 interventions à [Toulouse](/intervention/toulouse) sur trois ans, note de 4,4/5 sur 79 avis Google). Quand le chauffage s'arrête par temps froid, vous m'appelez directement au 06 50 57 96 20 et je vous annonce mon créneau réel sans passer par un centre d'appels.",
      "Avant toute réparation ou remplacement de pièce sur votre chaudière ou vos radiateurs, j'établis un devis gratuit écrit que vous validez. Vous connaissez le prix exact à l'avance et mon intervention est couverte par ma garantie de 2 ans pièces et main-d'œuvre."
    ],
    "sections": [
      {
        "h2": "La chaudière ne démarre plus : que vérifier ?",
        "text": "Avant de m'appeler pour un dépannage, contrôlez ces quatre points devant votre chaudière :",
        "numbered": true,
        "bullets": [
          "**Regardez le manomètre de pression** : à froid, l'aiguille ou l'affichage doit se situer entre 1 et 1,5 bar. Sous 0,8 bar, la chaudière se met en sécurité par manque d'eau. Ouvrez doucement le robinet de remplissage sous l'appareil jusqu'à 1,2 bar puis refermez-le bien.",
          "**Vérifiez l'arrivée de gaz et l'électricité** : assurez-vous que le disjoncteur dédié au tableau est levé et que la vanne jaune de gaz est ouverte (si vos plaques gaz ne s'allument plus non plus, la coupure vient du réseau).",
          "**Contrôlez le thermostat d'ambiance** : des piles usées dans le boîtier mural du salon empêchent l'ordre de chauffe de partir vers la chaudière.",
          "**Relevez le code erreur affiché** : n'appuyez pas dix fois de suite sur le bouton Reset. Notez le code clignotant à l'écran et donnez-le-moi au 06 50 57 96 20 pour que je prépare les bonnes pièces."
        ],
        "after": "Si vous sentez une odeur de gaz, n'actionnez aucun interrupteur, ouvrez les fenêtres, sortez et appelez immédiatement le numéro d'urgence gaz."
      },
      {
        "h2": "Entretien chaudière à Toulouse : prix et délais",
        "text": "Je réalise la révision complète de votre chaudière à [Toulouse](/intervention/toulouse), [Muret](/intervention/muret), [Tournefeuille](/intervention/tournefeuille), [Colomiers](/intervention/colomiers) et dans tout le département : nettoyage du brûleur et du corps de chauffe, contrôle des sécurités, vérification du tirage et du vase d'expansion, puis remise de votre attestation officielle pour l'assurance. À titre indicatif : `[À CONFIRMER PAR NINO : prix d'un entretien annuel de chaudière et délai moyen de rendez-vous]`. Pour connaître tout le détail de la visite, consultez ma page dédiée [entretien chaudière à Toulouse](/services/entretien-chaudiere-toulouse) ainsi que mes [tarifs plombier à Muret et Toulouse](/tarifs)."
      },
      {
        "h2": "À quelle fréquence faire entretenir sa chaudière ?",
        "text": "L'entretien est obligatoire une fois par an pour toutes les chaudières d'une puissance comprise entre 4 et 400 kW, que vous soyez locataire ou propriétaire. Je vous conseille de planifier votre rendez-vous à la fin de l'été ou au début de l'automne : je détecte ainsi les pièces d'usure (électrode d'allumage, joint, soupape, vase d'expansion dégonflé) avant de rallumer le chauffage pour l'hiver. Vous conservez l'attestation pendant deux ans pour votre assurance habitation et votre bailleur."
      },
      {
        "h2": "Réparer ou remplacer ?",
        "text": "Une chaudière qui s'arrête ne demande pas systématiquement à être changée :",
        "bullets": [
          "**Quand je répare** : dans la majorité de mes dépannages, la panne vient d'un circulateur bloqué après l'été, d'un vase d'expansion à regonfler, d'une sonde de température, d'un échangeur entartré, d'une soupape 3 bars qui fuit ou d'un circuit de radiateurs emboué. Une réparation ciblée remet votre chauffage en route pour plusieurs hivers.",
          "**Quand je conseille le remplacement** : si le corps de chauffe est percé, si la carte électronique et le bloc gaz lâchent sur un appareil très ancien dont les pièces ne sont plus fabriquées, ou si les pannes se répètent chaque mois. Je vous établis alors un devis gratuit sans vous forcer la main."
        ],
        "after": "Toutes mes réparations sont couvertes par ma garantie de 2 ans pièces et main-d'œuvre."
      },
      {
        "h2": "Pourquoi un seul artisan pour l'eau et le chauffage",
        "text": "Cette page détaille mes interventions techniques sur votre chaudière et vos radiateurs. Si vous cherchez à comprendre comment j'interviens à la fois sur vos réseaux d'eau sanitaire et sur votre chauffage central, consultez ma page [plombier chauffagiste à Toulouse](/services/plombier-chauffagiste-toulouse). Une baisse de pression sur la chaudière cache souvent une micro-fuite sur un tuyau ou un raccord de radiateur : en traitant les deux métiers moi-même depuis mon atelier du 11 rue François Arago à Muret (note de 4,4/5 sur 79 avis), je trouve la cause réelle dès la première visite."
      }
    ],
    "photos": [
      {
        "src": "/realisations/photo-11.jpg",
        "alt": "Pose et raccordement d'un radiateur sèche-serviettes sur circuit de chauffage à Toulouse",
        "legende": "Toulouse : installation d'un sèche-serviettes, équilibrage et purge du réseau."
      },
      {
        "src": "/realisations/photo-07.jpg",
        "alt": "Intervention chauffagiste sur production d'eau chaude et chauffage à Muret",
        "legende": "Muret : contrôle des organes de sécurité et des raccordements hydrauliques."
      },
      {
        "src": "/realisations/photo-06.jpg",
        "alt": "Vérification de la température d'eau chaude sanitaire en sortie de chaudière à Toulouse",
        "legende": "Toulouse : test de stabilité de l'eau chaude après révision du corps de chauffe."
      }
    ],
    "faq": [
      {
        "question": "Mes radiateurs restent froids en haut alors que la chaudière tourne, pourquoi ?",
        "reponse": "De l'air s'est accumulé en point haut du radiateur et bloque la circulation de l'eau chaude. Il faut purger les radiateurs puis remettre la chaudière entre 1 et 1,5 bar de pression. Si le bas reste froid ou que le radiateur ne chauffe pas du tout, le robinet thermostatique est grippé ou le circuit est emboué."
      },
      {
        "question": "Ma chaudière perd de la pression toutes les semaines, est-ce grave ?",
        "reponse": "Remettre de l'eau chaque semaine entartre le corps de chauffe et masque une anomalie : soit le vase d'expansion est HS, soit la soupape de sécurité goutte, soit un raccord fuit sur le circuit des radiateurs. Appelez-moi pour contrôler l'installation."
      },
      {
        "question": "Dépannage de chaudière la nuit ou le dimanche : intervenez-vous ?",
        "reponse": "Oui, je suis joignable 24h/24 et 7j/7 au 06 50 57 96 20 pour une panne totale de chauffage ou d'eau chaude, avec devis gratuit annoncé avant travaux."
      },
      {
        "question": "Remettez-vous l'attestation d'entretien annuel pour l'assurance ?",
        "reponse": "Oui, je vous remets l'attestation officielle d'entretien dès la fin de ma visite annuelle."
      }
    ],
    "aLireAussi": [
      {
        "label": "Entretien chaudière à Toulouse",
        "to": "/services/entretien-chaudiere-toulouse"
      },
      {
        "label": "Plombier chauffagiste à Toulouse",
        "to": "/services/plombier-chauffagiste-toulouse"
      },
      {
        "label": "Plombier urgence à Toulouse",
        "to": "/services/urgence-plombier-toulouse"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence ou un devis ?"
  },
  {
    "slug": "renovation-salle-de-bain",
    "titre": "Rénovation salle de bain",
    "sousTitre": "Création et rénovation de A à Z",
    "metaTitle": "Rénovation salle de bain Toulouse & Muret - Devis | Nino",
    "metaDescription": "Rénovation de salle de bain à Toulouse et Muret : plomberie, carrelage, douche à l'italienne, WC suspendu. Artisan depuis 20 ans, devis gratuit, garantie 2 ans.",
    "h1": "Rénovation de salle de bain à Muret et Toulouse",
    "serviceType": "Rénovation de salle de bain",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-15.jpg",
    "enBref": "Je crée et je rénove votre salle de bain de A à Z à Muret, Toulouse et en Haute-Garonne : plomberie, arrivées et évacuations, étanchéité, carrelage, faïence, douche à l'italienne, receveur extra-plat, WC suspendu et meuble vasque. Artisan depuis plus de 20 ans, devis gratuit et garantie 2 ans.",
    "description": "Remplacer une vieille baignoire par une douche à l'italienne, moderniser vos sanitaires ou refaire toute la pièce d'eau : je pilote votre chantier du devis aux finitions à Muret, Toulouse et dans l'agglomération.",
    "details": [
      "Dépose complète de l'ancienne salle de bain",
      "Modification des arrivées d'eau et des pentes d'évacuation",
      "Création de cloisons, placo hydrofuge et étanchéité sous carrelage",
      "Pose de douche à l'italienne ou receveur extra-plat avec paroi",
      "Pose de carrelage au sol, faïence murale et peinture",
      "Installation de WC suspendu, meuble double vasque et sèche-serviettes"
    ],
    "prix": "Devis gratuit et détaillé par poste avant le démarrage des travaux",
    "urgence": false,
    "icon": "Bath",
    "seoContent": [
      "Depuis mon atelier du 11 rue François Arago à [Muret](/intervention/muret), j'accompagne les propriétaires de Muret, [Toulouse](/intervention/toulouse), [Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac) et [Tournefeuille](/intervention/tournefeuille) dans la transformation complète de leur salle de bain. Avec plus de 20 ans de métier et une note de 4,4/5 sur 79 avis Google, je conçois des pièces d'eau durables où chaque raccord encastré et chaque pente d'écoulement sont vérifiés avant la pose du carrelage.",
      "Pour vous éviter de jongler entre plusieurs entreprises qui s'attendent mutuellement, je gère l'intégralité de la plomberie et des équipements sanitaires et j'interviens en binôme avec un second professionnel de confiance sur les rénovations complètes (placo hydrofuge, étanchéité, carrelage, faïence et peinture). Vous gardez un seul interlocuteur, un devis gratuit détaillé et une garantie de 2 ans pièces et main-d'œuvre."
    ],
    "sections": [
      {
        "h2": "Par où commencer une rénovation de salle de bain ?",
        "text": "Une salle de bain réussie repose d'abord sur ce qui ne se voit plus une fois le carrelage posé : les pentes d'évacuation et l'étanchéité. Voici comment je prépare chaque projet avec vous :",
        "numbered": true,
        "bullets": [
          "**Visite technique à domicile** : je viens chez vous à [Muret](/intervention/muret), [Toulouse](/intervention/toulouse), [Colomiers](/intervention/colomiers) ou [Blagnac](/intervention/blagnac) pour relever les cotes exactes, vérifier l'emplacement de la colonne de chute en fonte ou en PVC et mesurer la réserve disponible dans le plancher.",
          "**Choix de l'implantation et des équipements** : nous définissons ensemble ce qui bouge et ce qui reste en place (passage d'une baignoire à une douche, création d'une double vasque, déplacement du WC). Vous pouvez acheter vos meubles, votre robinetterie et votre carrelage ou me confier la fourniture.",
          "**Devis gratuit détaillé par poste** : je chiffre séparément la dépose, la plomberie, l'étanchéité, la pose sanitaire et les finitions. Sur les rénovations complètes, mon binôme assure le placo, le carrelage et la peinture dans la foulée pour tenir les délais annoncés."
        ],
        "after": "Vous habitez dans Toulouse même ? Consultez aussi ma page dédiée à la [rénovation de salle de bain à Toulouse](/services/renovation-salle-de-bain-toulouse)."
      },
      {
        "h2": "Douche à l'italienne, WC suspendu : ce qui change vraiment",
        "text": "Au-delà de l'esthétique, ces trois transformations changent le confort et l'entretien au quotidien :",
        "bullets": [
          "**Remplacer la baignoire par une douche** : vous supprimez la marche haute difficile à enjamber et vous gagnez de la place pour un meuble vasque plus large ou un lave-linge. Quand la dalle en béton ne permet pas d'encastrer le siphon pour une douche de plain-pied, je pose un receveur extra-plat antidérapant au rendu très proche.",
          "**Passer au WC suspendu sur bâti-support** : le réservoir disparaît dans un coffrage carrelé et la cuvette ne touche plus le sol. Le passage de la serpillière prend dix secondes et le mécanisme double chasse réduit la consommation d'eau.",
          "**Reprendre l'étanchéité (SPEC) sous la faïence** : avant de coller le carrelage dans la zone de douche et autour de la baignoire, j'applique un système d'étanchéité liquide avec bandes d'angle sur le placo hydrofuge. C'est ce qui évite toute infiltration invisible chez vous ou chez le voisin du dessous."
        ],
        "after": "Pour un simple changement de mitigeur ou de vasque sans toucher au carrelage, voyez ma page [robinetterie et sanitaires](/services/robinetterie-sanitaires)."
      },
      {
        "h2": "Avant / après : mes chantiers",
        "text": "Toutes les photos ci-dessous sont issues de mes vrais chantiers réalisés à Toulouse, Muret, Colomiers, Blagnac et Tournefeuille :",
        "photos": [
          {
            "src": "/realisations/photo-15.jpg",
            "alt": "Rénovation complète de salle de bain avec douche verrière noire et baignoire à Colomiers",
            "legende": "Colomiers : création d'une douche à l'italienne avec verrière atelier noire et pose de baignoire."
          },
          {
            "src": "/realisations/photo-09.jpg",
            "alt": "Pose de meuble double vasque bois et miroir LED à Toulouse",
            "legende": "Toulouse : installation d'un meuble double vasque suspendu, robinetterie noire et miroir rétroéclairé."
          },
          {
            "src": "/realisations/photo-12.jpg",
            "alt": "Installation d'un WC suspendu noir mat et lave-mains à Blagnac",
            "legende": "Blagnac : pose d'un bâti-support, habillage carrelé, cuvette suspendue noire et lave-mains."
          },
          {
            "src": "/realisations/photo-01.jpg",
            "alt": "Rénovation salle de bain avec baignoire et robinetterie noire à Muret",
            "legende": "Muret : réfection complète des arrivées d'eau, faïence marbrée et pose de baignoire."
          },
          {
            "src": "/realisations/photo-10.jpg",
            "alt": "Pose de receveur extra-plat et paroi vitrée coulissante à Toulouse",
            "legende": "Toulouse : remplacement d'une baignoire par une douche extra-plate et faïence grand format."
          },
          {
            "src": "/realisations/photo-02.jpg",
            "alt": "Colonne de douche thermostatique et faïence murale à Toulouse",
            "legende": "Toulouse : pose d'une colonne de douche thermostatique sur faïence neuve."
          },
          {
            "src": "/realisations/photo-03.jpg",
            "alt": "Meuble vasque et mitigeur posés à Muret",
            "legende": "Muret : installation d'une vasque sur meuble et raccordement complet."
          },
          {
            "src": "/realisations/photo-06.jpg",
            "alt": "Douche carrelée avec mitigeur encastré à Toulouse",
            "legende": "Toulouse : étanchéité sous carrelage, faïence et pose de robinetterie de douche."
          },
          {
            "src": "/realisations/photo-11.jpg",
            "alt": "Pose d'un radiateur sèche-serviettes en salle de bain à Toulouse",
            "legende": "Toulouse : raccordement d'un sèche-serviettes sur le réseau de chauffage."
          }
        ]
      },
      {
        "h2": "Combien de temps durent les travaux ?",
        "text": "La durée dépend de l'ampleur du chantier (simple remplacement d'une baignoire par une douche ou réfection totale sols, murs et plomberie). À titre indicatif : `[À CONFIRMER PAR NINO : durée moyenne pour une douche seule et pour une rénovation complète]`. Je m'engage sur un calendrier précis dès la remise du devis gratuit et je mène votre chantier jusqu'au bout sans le déserter."
      },
      {
        "h2": "Combien ça coûte ?",
        "text": "Le budget varie selon la surface de la pièce, l'état des canalisations existantes et la gamme des sanitaires choisis. À titre indicatif : `[À CONFIRMER PAR NINO : ordre de prix au m² ou budget moyen pour une rénovation de salle de bain]`. Mon devis gratuit détaille chaque ligne avant tout engagement. Retrouvez également ma page [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "temoignage": {
      "nom": "Cynthia M.",
      "service": "Plomberie & installation",
      "texte": "Je recommande Nino sans aucune hésitation. Venu réparer une fuite de l'évier et raccorder un lave-linge, Nino a été très gentil, rapide et efficace. Il s'adapte très rapidement face aux problèmes inattendus rencontrés. C'est un vrai expert dans son domaine."
    },
    "photos": [
      {
        "src": "/realisations/photo-14.jpg",
        "alt": "Douche à l'italienne avec verrière et niche éclairée à Toulouse",
        "legende": "Toulouse : douche sur mesure avec niche carrelée rétroéclairée et colonne noire."
      },
      {
        "src": "/realisations/photo-13.jpg",
        "alt": "Rénovation de salle de bain avec douche thermostatique et meuble vasque à Tournefeuille",
        "legende": "Tournefeuille : pose d'une paroi vitrée, colonne thermostatique et meuble vasque."
      },
      {
        "src": "/realisations/photo-08.jpg",
        "alt": "Pose de baignoire d'angle et WC suspendu à Muret",
        "legende": "Muret : aménagement complet d'une salle de bain familiale avec baignoire d'angle."
      }
    ],
    "faq": [
      {
        "question": "Prenez-vous en charge le carrelage, le placo et la peinture ?",
        "reponse": "Oui. Je gère toute la plomberie et les sanitaires, et je travaille en binôme avec un second professionnel pour le placo, l'étanchéité, le carrelage et la peinture. Vous gardez un seul interlocuteur du début à la fin."
      },
      {
        "question": "Peut-on installer une douche à l'italienne dans un appartement ancien ?",
        "reponse": "Une douche de plain-pied nécessite d'encastrer le siphon et le tuyau d'évacuation avec une pente suffisante dans le sol. Quand la dalle en béton ne le permet pas, je pose un receveur extra-plat qui offre un accès très bas et une étanchéité parfaite."
      },
      {
        "question": "Puis-je acheter moi-même mes meubles et ma robinetterie ?",
        "reponse": "Oui, tout à fait. Je vérifie avec vous avant l'achat que les dimensions, les entraxes et les vidages correspondent bien à votre salle de bain."
      },
      {
        "question": "Vos travaux de rénovation sont-ils garantis ?",
        "reponse": "Oui, mes travaux de plomberie et d'installation sont garantis 2 ans, pièces et main-d'œuvre."
      }
    ],
    "aLireAussi": [
      {
        "label": "Rénovation salle de bain à Toulouse",
        "to": "/services/renovation-salle-de-bain-toulouse"
      },
      {
        "label": "Robinetterie et sanitaires",
        "to": "/services/robinetterie-sanitaires"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Un projet ? Demandez un devis gratuit",
    "ctaLead": "Appelez-moi au 06 50 57 96 20 ou décrivez votre projet en ligne. Je me déplace gratuitement à Muret, Toulouse et en Haute-Garonne pour chiffrer votre salle de bain."
  },
  {
    "slug": "depannage-plomberie-toulouse",
    "titre": "Dépannage plomberie Toulouse",
    "sousTitre": "Dépannage plomberie à Toulouse, de jour comme de nuit",
    "metaTitle": "Dépannage plomberie Toulouse 24h/24 - Devis gratuit | Nino",
    "metaDescription": "Dépannage plomberie à Toulouse 24h/24 7j/7 : fuite, WC bouché, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Dépannage plomberie à Toulouse : 24h/24, par un artisan",
    "serviceType": "Dépannage de plomberie",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-02.jpg",
    "enBref": "J'assure le dépannage de plomberie à Toulouse et en Haute-Garonne, 24h/24 et 7j/7 : fuite d'eau, WC ou évier bouché, chauffe-eau en panne, robinetterie, chasse d'eau et chaudière. Artisan indépendant basé à Muret avec plus de 20 ans de métier (4,4/5 sur 79 avis), devis gratuit signé avant travaux et garantie 2 ans.",
    "description": "Un robinet qui fuit, une chasse d'eau qui coule en continu, un WC bouché ou un chauffe-eau froid : à Toulouse, j'interviens personnellement avec mon camion-atelier. Vous m'appelez en direct au 06 50 57 96 20, sans plateforme.",
    "details": [
      "Réparation de fuite sur robinet, siphon, raccord ou canalisation",
      "Débouchage de WC, évier, lavabo et douche au furet",
      "Dépannage de chauffe-eau et remplacement de groupe de sécurité",
      "Réparation de chasse d'eau qui coule ou ne remplit plus",
      "Dépannage de chaudière et purge de radiateurs froids",
      "Remplacement de robinetterie, mitigeurs et vannes d'arrêt"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": true,
    "icon": "Wrench",
    "seoContent": [
      "Depuis mon atelier du 11 rue François Arago à [Muret](/intervention/muret), j'ai réalisé plus de 150 interventions à [Toulouse](/intervention/toulouse) sur trois ans. En immeuble ancien comme en résidence récente, une panne de plomberie bien décrite au téléphone se règle souvent en un seul passage grâce aux pièces que je garde dans mon camion."
    ],
    "sections": [
      {
        "h2": "Quelle panne avez-vous ?",
        "text": "Identifiez votre panne dans ce tableau pour connaître le bon geste immédiat et la page dédiée :",
        "tableHeaders": [
          "Panne constatée",
          "Action immédiate & service associé"
        ],
        "table": [
          {
            "col1": "**Fuite d'eau** (robinet, tuyau, plafond)",
            "col2": "Fermez la vanne d'arrêt, épongez et consultez ma page [recherche et réparation de fuite](/services/fuite-d-eau)."
          },
          {
            "col1": "**WC bouché** (eau qui monte dans la cuvette)",
            "col2": "Ne tirez plus la chasse, n'utilisez pas d'acide. Voir mon service [débouchage de WC et canalisation](/services/debouchage)."
          },
          {
            "col1": "**Évier ou lavabo bouché** (eau stagnante)",
            "col2": "Videz le siphon avec une bassine ; si le bouchon est dans le mur, j'interviens au furet ([débouchage](/services/debouchage))."
          },
          {
            "col1": "**Chauffe-eau en panne** (plus d'eau chaude ou fuite)",
            "col2": "Vérifiez le disjoncteur au tableau électrique puis consultez ma page [chauffe-eau et cumulus](/services/chauffe-eau)."
          },
          {
            "col1": "**Chaudière en sécurité** (code erreur, arrêt)",
            "col2": "Vérifiez que la pression est entre 1 et 1,5 bar et relevez le code défaut ([chauffage et chaudière](/services/chauffage-chaudiere))."
          },
          {
            "col1": "**Radiateur froid** (haut froid ou radiateur glacé)",
            "col2": "Purgez l'air ou faites débloquer le robinet thermostatique et équilibrer le circuit ([chauffage](/services/chauffage-chaudiere))."
          }
        ]
      },
      {
        "h2": "Ce qui se passe quand vous appelez",
        "text": "Chaque dépannage suit exactement les quatre mêmes étapes :",
        "numbered": true,
        "bullets": [
          "**Appel direct avec moi au 06 50 57 96 20** : vous me décrivez la panne, je vous indique comment couper l'eau si nécessaire et nous fixons mon heure de passage.",
          "**Diagnostic précis sur place** : j'examine l'installation et je vous montre la pièce défectueuse ou l'origine de la fuite.",
          "**Devis gratuit signé avant travaux** : j'inscris le détail des pièces et de la main-d'œuvre sur un devis écrit. Rien ne commence sans votre signature.",
          "**Réparation garantie 2 ans** : j'effectue la réparation proprement, je remets en eau pour contrôler l'étanchéité et vous bénéficiez de ma garantie 2 ans pièces et main-d'œuvre."
        ]
      },
      {
        "h2": "Les pannes que je traite le plus à Toulouse",
        "text": "Le bâti toulousain a ses particularités selon l'âge des immeubles et des maisons. Voici les cinq dépannages les plus fréquents sur lesquels j'interviens :",
        "bullets": [
          "**À Saint-Cyprien** : dans les immeubles anciens proches de la Garonne, je remplace souvent des robinets d'arrêt grippés par le calcaire et je répare des fuites sur d'anciennes soudures cuivre sous évier.",
          "**Aux Minimes** : dans les toulousaines et maisons de ville, j'interviens régulièrement pour des groupes de sécurité de chauffe-eau qui coulent en continu et des détartrages de ballons électriques.",
          "**Aux Carmes** : dans les appartements de caractère aux colonnes étroites, je débouche au furet mécanique des évacuations de WC et de cuisine engorgées sans abîmer les parquets ni les coffrages.",
          "**À Rangueil** : dans les studios étudiants et résidences, je répare les mécanismes de chasse d'eau qui fuient jour et nuit et je remplace les mitigeurs de douche ou de lavabo cassés.",
          "**Au Capitole** : en hypercentre, je recherche et répare les fuites encastrées derrière les cloisons de salle de bain avant qu'elles ne tachent le plafond de l'étage inférieur."
        ],
        "after": "Si l'eau inonde déjà votre sol la nuit ou le dimanche, passez par ma page [plombier urgence à Toulouse](/services/urgence-plombier-toulouse)."
      },
      {
        "h2": "Délais d'intervention",
        "text": "En partant de [Muret](/intervention/muret) par l'A64 et le périphérique, je rejoins rapidement l'ensemble des quartiers de [Toulouse](/intervention/toulouse) ainsi que [Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac) et [Tournefeuille](/intervention/tournefeuille). À titre indicatif : `[À CONFIRMER PAR NINO : délais moyens par secteur de Toulouse]`. Je vous confirme toujours mon créneau réel dès votre appel."
      },
      {
        "h2": "Combien coûte un dépannage ?",
        "text": "Mon devis est gratuit et validé avec vous avant toute intervention. Les ordres de prix dépendent de la nature de la réparation : `[À CONFIRMER PAR NINO : ordres de prix d'un dépannage courant à Toulouse]`. Consultez l'ensemble des informations tarifaires sur ma page [tarifs plombier à Muret et Toulouse](/tarifs)."
      },
      {
        "h2": "Pourquoi un artisan plutôt qu'une plateforme",
        "text": "Quand vous cliquez sur une annonce de plateforme nationale, votre appel tombe dans un standard qui revend votre adresse à un sous-traitant contre une forte commission. Le technicien envoyé sur place doit gonfler la facture pour rentabiliser sa course. En m'appelant, vous parlez directement à l'artisan qui se déplace, qui chiffre au juste prix et qui garantit personnellement son travail pendant 2 ans."
      }
    ],
    "temoignage": {
      "nom": "Coralie L.",
      "service": "Dépannage & débouchage",
      "texte": "Je recommande Nino sans hésiter, que j'ai contacté pour venir déboucher mon évier et réparer une fuite. Il est arrivé dans l'heure qui a suivi mon appel et a été très efficace."
    },
    "photos": [
      {
        "src": "/realisations/photo-02.jpg",
        "alt": "Dépannage de robinetterie et colonne de douche à Toulouse",
        "legende": "Toulouse : remplacement et contrôle d'étanchéité d'une colonne de douche thermostatique."
      },
      {
        "src": "/realisations/photo-03.jpg",
        "alt": "Réparation de mitigeur et vidage sous vasque en dépannage à Muret",
        "legende": "Muret : remise en état du mitigeur et de l'évacuation sous meuble vasque."
      },
      {
        "src": "/realisations/photo-06.jpg",
        "alt": "Dépannage plomberie sur douche et arrivée d'eau à Toulouse",
        "legende": "Toulouse : réglage de pression et remplacement d'un mitigeur mural."
      }
    ],
    "faq": [
      {
        "question": "Combien coûte un dépannage de plomberie à Toulouse ?",
        "reponse": "Le tarif dépend de la pièce à réparer ou du bouchon à extraire (`[À CONFIRMER PAR NINO : ordres de prix d'un dépannage courant]`). Dans tous les cas, j'établis un devis gratuit sur place et vous validez le prix avant le début des travaux."
      },
      {
        "question": "Quel est votre délai d'intervention à Toulouse ?",
        "reponse": "Mon délai dépend de votre quartier et des interventions en cours (`[À CONFIRMER PAR NINO : délais moyens par secteur de Toulouse]`). Je vous donne toujours mon heure d'arrivée exacte dès votre appel au 06 50 57 96 20."
      },
      {
        "question": "Intervenez-vous la nuit, le week-end et les jours fériés ?",
        "reponse": "Oui, je suis joignable 24h/24 et 7j/7. Toute majoration éventuelle de nuit ou de week-end est annoncée clairement avant mon intervention et écrite sur le devis."
      },
      {
        "question": "Le devis est-il vraiment gratuit et sans engagement ?",
        "reponse": "Oui. Je diagnostique la panne et je vous présente mon devis gratuit avant de commencer quoi que ce soit. Vous êtes libre d'accepter ou non."
      },
      {
        "question": "Quelle garantie couvre vos dépannages ?",
        "reponse": "Toutes mes réparations de plomberie et de chauffage sont garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "aLireAussi": [
      {
        "label": "Plombier urgence à Toulouse",
        "to": "/services/urgence-plombier-toulouse"
      },
      {
        "label": "Débouchage canalisation",
        "to": "/services/debouchage"
      },
      {
        "label": "Recherche de fuite d'eau",
        "to": "/services/fuite-d-eau"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence maintenant ?",
    "ctaLead": "Appelez-moi directement au 06 50 57 96 20. Je vous réponds 24h/24 et 7j/7 à Toulouse et Muret, avec devis gratuit validé avant travaux."
  },
  {
    "slug": "entretien-chaudiere-toulouse",
    "titre": "Entretien chaudière Toulouse",
    "sousTitre": "Entretien annuel de chaudière à Toulouse et Muret",
    "metaTitle": "Entretien chaudière Toulouse - Prix et rendez-vous | Nino",
    "metaDescription": "Entretien chaudière à Toulouse et Muret par un chauffagiste artisan. Rendez-vous rapide, devis gratuit avant travaux, garantie 2 ans. Appelez le 06 50 57 96 20.",
    "h1": "Entretien chaudière à Toulouse : prix, délais et rendez-vous",
    "serviceType": "Entretien de chaudière",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-11.jpg",
    "ctaButtonLabel": "Prendre rendez-vous",
    "enBref": "Je réalise l'entretien annuel obligatoire de votre chaudière à Toulouse, Muret et en Haute-Garonne : nettoyage complet du brûleur et du corps de chauffe, contrôle des sécurités et du tirage, vérification de la pression et remise de l'attestation d'entretien. Artisan chauffagiste depuis plus de 20 ans (4,4/5 sur 79 avis).",
    "description": "Faire entretenir sa chaudière chaque année évite les pannes en plein hiver, réduit la consommation de gaz et répond à l'obligation légale. J'interviens à Toulouse et Muret sur rendez-vous au 06 50 57 96 20.",
    "details": [
      "Nettoyage du corps de chauffe, du brûleur et de la veilleuse",
      "Contrôle d'étanchéité des circuits de gaz et d'eau",
      "Vérification du conduit d'évacuation des fumées et du tirage",
      "Contrôle de la pression et regonflage du vase d'expansion",
      "Vérification de la soupape de sécurité et du circulateur",
      "Remise de l'attestation officielle d'entretien pour l'assurance"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": false,
    "icon": "Thermometer",
    "seoContent": [
      "Basé au 11 rue François Arago à [Muret](/intervention/muret), j'interviens depuis plus de 20 ans chez les particuliers à [Toulouse](/intervention/toulouse), [Colomiers](/intervention/colomiers), [Tournefeuille](/intervention/tournefeuille) et dans toute la Haute-Garonne (plus de 150 interventions à Toulouse sur trois ans, note de 4,4/5 sur 79 avis Google). Contrairement aux grands contrats d'entretien où le technicien change chaque année et passe en dix minutes, je prends le temps de nettoyer et de contrôler réellement chaque organe de votre chaudière.",
      "À chaque visite annuelle, je vérifie aussi l'équilibre de votre réseau de chauffage et je vous donne des conseils concrets pour régler votre thermostat d'ambiance sans gaspiller de gaz. Vous repartez avec une chaudière fiable pour tout l'hiver et votre attestation officielle en main."
    ],
    "sections": [
      {
        "h2": "L'entretien est-il obligatoire ?",
        "text": "Oui. La réglementation française impose un entretien annuel pour toutes les chaudières (gaz, fioul, bois) dont la puissance est comprise entre 4 et 400 kW. En location, cet entretien courant est à la charge du locataire, sauf si le bail prévoit qu'il est inclus dans les charges. À la fin de ma visite, je vous remets une attestation d'entretien nominative : conservez-la au minimum deux ans, car votre bailleur ou votre assurance habitation vous la demandera en cas de sinistre."
      },
      {
        "h2": "À quelle fréquence ?",
        "text": "La révision doit être effectuée une fois par année civile. Mon conseil d'artisan : prenez rendez-vous entre la fin de l'été et le début de l'automne, avant de rallumer les radiateurs. Cela me permet de nettoyer la chaudière au calme, de purger l'air du réseau et de remplacer à temps un joint ou une électrode fatiguée avant la vague de froid de novembre où tout le monde appelle en même temps."
      },
      {
        "h2": "Ce que comprend un entretien",
        "text": "Lors de mon passage chez vous à Toulouse ou Muret, j'effectue méthodiquement ces six points de contrôle :",
        "bullets": [
          "**Nettoyage du corps de chauffe et du brûleur** : je démonte la façade, je brosse et j'aspire les suies et poussières sur le brûleur, les électrodes d'allumage et les ailettes du corps de chauffe pour garantir une combustion propre.",
          "**Vérification des organes de sécurité** : je teste la sonde d'ionisation, le limiteur de surchauffe et l'absence totale de fuite d'eau ou de gaz sur les raccords internes.",
          "**Contrôle de l'évacuation des fumées** : je vérifie l'état du conduit (ventouse ou cheminée), l'extracteur et la bonne évacuation des gaz brûlés pour prévenir tout risque de monoxyde de carbone.",
          "**Contrôle du vase d'expansion et de la pression** : je vérifie la pression du vase d'expansion (et je le regonfle si besoin) puis j'ajuste la pression d'eau du circuit entre 1 et 1,5 bar.",
          "**Vérification du circulateur et de l'eau chaude** : je contrôle que la pompe tourne sans bruit anormal et que l'eau chaude sanitaire monte rapidement à la température demandée.",
          "**Remise de l'attestation d'entretien** : je rédige et je signe votre attestation avec mes conseils d'usage pour réduire votre consommation."
        ]
      },
      {
        "h2": "Combien ça coûte ?",
        "text": "Je vous annonce le tarif de la visite dès votre appel, sans frais cachés. À titre indicatif : `[À CONFIRMER PAR NINO : tarif de l'entretien annuel de chaudière]`. Si lors de l'entretien je repère une pièce d'usure à prévoir, je ne la remplace jamais sans vous établir un devis gratuit au préalable. Retrouvez l'ensemble de mes informations sur la page [tarifs plombier à Muret et Toulouse](/tarifs)."
      },
      {
        "h2": "Combien de temps pour avoir un rendez-vous ?",
        "text": "J'organise mes tournées par secteur entre Muret et Toulouse pour vous proposer un créneau précis sans vous bloquer toute la journée. À titre indicatif : `[À CONFIRMER PAR NINO : délai moyen pour obtenir un créneau d'entretien]`. Appelez-moi directement au 06 50 57 96 20 pour convenir d'une date."
      },
      {
        "h2": "Entretien ou dépannage : comment savoir ?",
        "text": "Un entretien annuel se fait sur une chaudière qui fonctionne normalement, dans le but de la nettoyer et de prévenir les pannes. En revanche, si votre chaudière affiche déjà un code erreur, s'arrête toute seule, perd de la pression chaque jour ou ne donne plus d'eau chaude, il ne s'agit plus d'un simple entretien mais d'un dépannage : consultez alors ma page [chauffage et dépannage de chaudière](/services/chauffage-chaudiere) ou ma page [plombier chauffagiste à Toulouse](/services/plombier-chauffagiste-toulouse)."
      }
    ],
    "photos": [
      {
        "src": "/realisations/photo-11.jpg",
        "alt": "Contrôle d'un radiateur sèche-serviettes et du circuit de chauffage lors d'un entretien à Toulouse",
        "legende": "Toulouse : vérification de la chauffe et purge des radiateurs lors de la visite annuelle."
      },
      {
        "src": "/realisations/photo-06.jpg",
        "alt": "Test de débit et de température d'eau chaude sur douche à Toulouse",
        "legende": "Toulouse : contrôle de la stabilité de l'eau chaude sanitaire produite par la chaudière."
      },
      {
        "src": "/realisations/photo-07.jpg",
        "alt": "Vérification des raccordements hydrauliques et sécurités à Muret",
        "legende": "Muret : inspection des vannes d'arrêt, soupapes et évacuations."
      }
    ],
    "faq": [
      {
        "question": "Combien coûte l'entretien annuel d'une chaudière à Toulouse ?",
        "reponse": "Le tarif de la visite annuelle est annoncé dès la prise de rendez-vous (`[À CONFIRMER PAR NINO : tarif de l'entretien annuel de chaudière]`). Le devis est gratuit et l'attestation d'entretien est incluse."
      },
      {
        "question": "Qui doit payer l'entretien de la chaudière : le locataire ou le propriétaire ?",
        "reponse": "L'entretien annuel courant est à la charge du locataire. En revanche, le remplacement d'une pièce importante usée par la vétusté ou le remplacement complet de la chaudière reste à la charge du propriétaire."
      },
      {
        "question": "Dois-je signer un contrat d'engagement sur plusieurs années ?",
        "reponse": "Non. Je réalise votre entretien annuel à la demande, sans vous enfermer dans un abonnement reconduit automatiquement."
      },
      {
        "question": "Que faire si ma chaudière est déjà en panne aujourd'hui ?",
        "reponse": "Précisez-le-moi au téléphone au 06 50 57 96 20 : j'interviendrai alors pour un diagnostic et un dépannage avant de réaliser l'entretien."
      }
    ],
    "aLireAussi": [
      {
        "label": "Chauffagiste : entretien et dépannage chaudière",
        "to": "/services/chauffage-chaudiere"
      },
      {
        "label": "Plombier chauffagiste à Toulouse",
        "to": "/services/plombier-chauffagiste-toulouse"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Prendre rendez-vous",
    "ctaLead": "Appelez-moi au 06 50 57 96 20 ou laissez-moi vos disponibilités via le formulaire pour fixer votre visite d'entretien annuel à Toulouse ou Muret."
  },
  {
    "slug": "plombier-chauffagiste-toulouse",
    "titre": "Plombier chauffagiste Toulouse",
    "sousTitre": "Plomberie et chauffage à Toulouse, un seul artisan",
    "listed": false,
    "metaTitle": "Plombier chauffagiste Toulouse - Dépannage 24h/24 | Nino",
    "metaDescription": "Plombier chauffagiste à Toulouse : dépannage 24h/24, chaudière, chauffe-eau. Artisan local basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans.",
    "h1": "Plombier chauffagiste à Toulouse : un artisan, pas une plateforme",
    "serviceType": "Plomberie et chauffage",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-11.jpg",
    "enBref": "Artisan plombier chauffagiste indépendant basé au 11 rue François Arago à Muret, j'interviens à Toulouse et en Haute-Garonne depuis plus de 20 ans. Noté 4,4/5 sur 79 avis Google, j'assure vos dépannages 24h/24, votre chaudière et votre plomberie avec devis gratuit avant travaux et garantie 2 ans. Pas de plateforme, pas de centre d'appels : vous parlez à celui qui intervient.",
    "description": "Toulousaine des Minimes, appartement des Carmes ou maison à Lardenne : j'ai plus de 20 ans de métier, une note de 4,4/5 sur 79 avis et toutes mes réparations sont couvertes par une garantie 2 ans. Pas de plateforme, pas de centre d'appels : vous parlez à celui qui intervient.",
    "details": [
      "Dépannage plomberie et chauffage 24h/24 et 7j/7",
      "Entretien annuel et dépannage de chaudière",
      "Dépannage et remplacement de chauffe-eau et cumulus",
      "Recherche et réparation de fuite d'eau sans casse",
      "Débouchage de WC, évier et canalisation au furet",
      "Purge, équilibrage et remplacement de radiateurs"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": false,
    "icon": "Thermometer",
    "seoContent": [
      "Depuis plus de 20 ans, j'accompagne les propriétaires et locataires de [Toulouse](/intervention/toulouse), [Muret](/intervention/muret), [Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac) et [Tournefeuille](/intervention/tournefeuille) aussi bien sur leurs réseaux d'eau sanitaire que sur leurs installations de chauffage central. Avec plus de 150 interventions à Toulouse sur trois ans et une note de 4,4/5 sur 79 avis Google, je défends un métier d'artisan de proximité où le client connaît le prix avant le premier coup de clé.",
      "Que vous ayez besoin d'un dépannage en pleine nuit, du remplacement d'un radiateur sèche-serviettes, de la réparation d'une fuite sur un collecteur ou de la remise en route de votre chaudière avant l'hiver, je me déplace personnellement et j'établis un devis gratuit écrit avant de commencer."
    ],
    "sections": [
      {
        "h2": "Plombier ou chauffagiste : pourquoi un seul artisan pour les deux",
        "text": "Dans votre logement, l'eau sanitaire et le chauffage partagent les mêmes nourrices, les mêmes cloisons et souvent le même appareil de production. Faire venir un plombier d'un côté et un chauffagiste de l'autre finit souvent par un renvoi de balle quand une panne touche les deux réseaux. En exerçant les deux métiers depuis plus de 20 ans, je contrôle l'installation dans son ensemble : de l'arrivée d'eau après compteur jusqu'au brûleur de la chaudière et aux robinets thermostatiques des radiateurs. Cette page vous présente mon profil et mon fonctionnement en dépannage global ; pour le détail technique des pannes de chaudière et la révision obligatoire, consultez ma page [chauffagiste : entretien et dépannage de chaudière](/services/chauffage-chaudiere) ainsi que ma page [entretien chaudière à Toulouse](/services/entretien-chaudiere-toulouse)."
      },
      {
        "h2": "Un artisan basé à Muret, pas à l'autre bout du département",
        "text": "Mon entreprise est domiciliée au 11 rue François Arago à [Muret](/intervention/muret), juste au sud de [Toulouse](/intervention/toulouse). En empruntant l'A64 ou la RD820, je rejoins rapidement les quartiers toulousains (Saint-Cyprien, Carmes, Capitole, Minimes, Rangueil, Côte Pavée, Lardenne) ainsi que [Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac) et [Tournefeuille](/intervention/tournefeuille). J'ai réalisé plus de 150 interventions à Toulouse sur trois ans. Quand vous composez le 06 50 57 96 20, vous ne tombez jamais sur un standard délocalisé qui revend votre appel : je vous réponds en direct, je me déplace avec mon propre camion-atelier et j'engage ma responsabilité d'artisan."
      },
      {
        "h2": "Eau et chauffage : les pannes qui viennent ensemble",
        "text": "Voici quatre cas concrets rencontrés chaque semaine à Toulouse où la double compétence plombier et chauffagiste fait gagner du temps et de l'argent :",
        "bullets": [
          "**Pression de chaudière qui chute tous les deux jours** : le problème ne vient pas toujours de la chaudière elle-même, mais souvent d'un raccord de radiateur qui suinte sous le plancher, d'un purgeur automatique défectueux ou d'une soupape qui fuit à l'égout. Voir aussi ma page [recherche de fuite d'eau](/services/fuite-d-eau).",
          "**Plus d'eau chaude au robinet mais radiateurs chauds** : sur une chaudière mixte, la vanne 3 voies motorisée ou l'échangeur à plaques entartré par le calcaire toulousain bloque le passage vers les robinets sanitaires.",
          "**Coups de bélier et sifflements dans les tuyaux** : une pression d'eau froide excessive fatigue à la fois vos mitigeurs, le groupe de sécurité du [chauffe-eau](/services/chauffe-eau) et le disconnecteur de remplissage du chauffage. La pose d'un réducteur de pression calibré protège tout le logement.",
          "**Rénovation de salle de bain avec sèche-serviettes** : modifier les arrivées d'eau d'une douche et déplacer en même temps un radiateur sur le chauffage central ne demande qu'un seul chantier coordonné."
        ]
      },
      {
        "h2": "Ce que change un seul interlocuteur",
        "text": "Passer directement par un artisan indépendant change tout sur le déroulement et le coût de votre intervention :",
        "numbered": true,
        "bullets": [
          "**Un seul diagnostic et un seul devis gratuit** : je cherche la cause réelle de la panne sans facturer deux déplacements distincts. À titre indicatif : `[À CONFIRMER PAR NINO : tarif de déplacement et ordres de prix plomberie / chauffage]`. Voir mes [tarifs plombier à Muret et Toulouse](/tarifs).",
          "**Un seul numéro 24h/24 et 7j/7** : au 06 50 57 96 20, vous savez exactement qui vient chez vous, aujourd'hui comme dans deux ans, sans sous-traitance.",
          "**Une garantie unique de 2 ans** : toutes mes réparations de plomberie et de chauffage sont garanties 2 ans, pièces et main-d'œuvre, avec une facture claire."
        ]
      }
    ],
    "photos": [
      {
        "src": "/realisations/photo-11.jpg",
        "alt": "Installation d'un radiateur sèche-serviettes par plombier chauffagiste à Toulouse",
        "legende": "Toulouse : raccordement d'un sèche-serviettes et équilibrage du chauffage."
      },
      {
        "src": "/realisations/photo-07.jpg",
        "alt": "Pose de chauffe-eau et raccordements plomberie à Muret",
        "legende": "Muret : installation complète d'un chauffe-eau et reprise des canalisations."
      },
      {
        "src": "/realisations/photo-02.jpg",
        "alt": "Pose de colonne de douche thermostatique et réglage d'eau chaude à Toulouse",
        "legende": "Toulouse : pose de robinetterie thermostatique et contrôle de pression."
      }
    ],
    "faq": [
      {
        "question": "Intervenez-vous dans tous les quartiers de Toulouse ?",
        "reponse": "Oui, j'interviens dans tout Toulouse (Capitole, Carmes, Saint-Cyprien, Minimes, Rangueil, Côte Pavée, Lardenne, Borderouge) ainsi qu'à Muret et dans les communes de Haute-Garonne."
      },
      {
        "question": "Quelle est la différence entre cette page et votre page chauffage-chaudière ?",
        "reponse": "Cette page vous présente ma façon de travailler en tant qu'artisan unique pour votre eau et votre chauffage. Pour les pannes précises de chaudière ou la visite annuelle, consultez mes pages Chauffage & Chaudière et Entretien chaudière à Toulouse."
      },
      {
        "question": "Travaillez-vous avec les syndics et les agences immobilières ?",
        "reponse": "Oui, j'interviens régulièrement à la demande de propriétaires bailleurs, de locataires et de syndics pour des recherches de fuite, des débouchages ou des pannes de chauffage."
      },
      {
        "question": "Vos interventions sont-elles garanties ?",
        "reponse": "Oui, toutes mes réparations sont garanties 2 ans, pièces et main-d'œuvre, avec un devis gratuit validé avant le début des travaux."
      }
    ],
    "aLireAussi": [
      {
        "label": "Chauffagiste : entretien et dépannage chaudière",
        "to": "/services/chauffage-chaudiere"
      },
      {
        "label": "Entretien chaudière à Toulouse",
        "to": "/services/entretien-chaudiere-toulouse"
      },
      {
        "label": "Plombier urgence à Toulouse",
        "to": "/services/urgence-plombier-toulouse"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence ou un devis ?"
  },
  {
    "slug": "renovation-salle-de-bain-toulouse",
    "titre": "Rénovation salle de bain Toulouse",
    "sousTitre": "Rénovation de salle de bain à Toulouse, de A à Z",
    "listed": false,
    "galerieSlug": "renovation-salle-de-bain",
    "metaTitle": "Rénovation salle de bain Toulouse - Devis gratuit | Nino",
    "metaDescription": "Rénovation de salle de bain à Toulouse : plomberie, carrelage, douche à l'italienne. Artisan depuis 20 ans, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Rénovation de salle de bain à Toulouse : un seul artisan du début à la fin",
    "serviceType": "Rénovation de salle de bain",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-14.jpg",
    "enBref": "Je rénove votre salle de bain à Toulouse du début à la fin : dépose, arrivées et évacuations d'eau, étanchéité, carrelage, douche à l'italienne ou receveur extra-plat, WC suspendu et meuble vasque. Artisan depuis plus de 20 ans (4,4/5 sur 79 avis), devis gratuit détaillé et garantie 2 ans.",
    "description": "En appartement ancien au Capitole ou aux Carmes comme en maison aux Minimes ou à Lardenne, je pilote la rénovation complète de votre salle de bain à Toulouse. Vous gardez un seul interlocuteur du premier métré jusqu'aux finitions.",
    "details": [
      "Visite technique et prise de cotes à Toulouse",
      "Dépose des anciens équipements et protection des parties communes",
      "Reprise complète des réseaux d'eau et des pentes d'évacuation",
      "Étanchéité sous carrelage, pose de faïence et de carrelage au sol",
      "Création de douche à l'italienne ou pose de receveur extra-plat",
      "Installation de WC suspendu, meuble double vasque et sèche-serviettes"
    ],
    "prix": "Devis gratuit détaillé poste par poste avant le démarrage du chantier",
    "urgence": false,
    "icon": "Bath",
    "seoContent": [
      "Rénover une salle de bain dans un immeuble toulousain demande de l'expérience : murs qui ne sont pas d'équerre, planchers bois anciens, colonnes en fonte à respecter et accès parfois étroits par l'escalier. Basé au 11 rue François Arago à [Muret](/intervention/muret), j'ai réalisé plus de 150 interventions à [Toulouse](/intervention/toulouse) sur trois ans (note de 4,4/5 sur 79 avis Google). Sur les chantiers complets, je travaille en binôme avec un second professionnel de confiance pour que la plomberie, le placo, le carrelage et la peinture s'enchaînent sans temps mort.",
      "Avant le moindre démontage, nous validons ensemble l'implantation de chaque élément (douche, meuble vasque, WC suspendu, sèche-serviettes) et je vous remets un devis gratuit détaillé poste par poste. Mes installations sont couvertes par ma garantie de 2 ans pièces et main-d'œuvre, et vous pouvez découvrir d'autres chantiers sur ma page [réalisations](/realisations)."
    ],
    "sections": [
      {
        "h2": "Par où commencer ?",
        "text": "Votre projet de salle de bain à Toulouse avance en trois étapes claires :",
        "numbered": true,
        "bullets": [
          "**L'idée et la visite sur place** : vous m'appelez au 06 50 57 96 20. Je me déplace gratuitement chez vous à Toulouse pour mesurer la pièce, vérifier où passent les colonnes d'eau, inspecter l'état des tuyaux existants pour prévenir toute [fuite d'eau](/services/fuite-d-eau) et valider la faisabilité technique d'une douche à l'italienne ou d'un WC suspendu.",
          "**Le devis gratuit poste par poste** : je vous remets un chiffrage écrit et détaillé (dépose, plomberie, étanchéité, carrelage, pose des sanitaires). Vous pouvez fournir vos équipements ou me demander de les commander chez mes fournisseurs professionnels.",
          "**Les travaux coordonnés jusqu'aux finitions** : je protège vos sols et les parties communes dès le premier jour, je coupe l'eau uniquement quand c'est indispensable et je livre la salle de bain propre, testée sous pression et prête à l'emploi."
        ]
      },
      {
        "h2": "Ce que je prends en charge",
        "text": "Vous n'avez pas besoin de chercher et de coordonner quatre corps de métier différents :",
        "bullets": [
          "**Plomberie et alimentation** : reprise des tuyauteries cuivre, PER ou multicouche encastrées, pose de nourrices d'isolement et création des arrivées pour colonne thermostatique, double vasque ou lave-linge.",
          "**Évacuation et étanchéité** : modification de la pente d'écoulement vers la colonne de chute, pose de siphon de sol ou de receveur extra-plat et application du système d'étanchéité sous carrelage (SPEC) avec bandes d'angle.",
          "**Carrelage, placo et peinture** : création de coffrages et niches en placo hydrofuge, pose de faïence murale toute hauteur, carrelage antidérapant au sol et mise en peinture du plafond.",
          "**Sanitaires et chauffage** : montage du bâti-support de WC suspendu, paroi vitrée ou verrière de douche, meuble vasque, miroir LED et raccordement du radiateur sèche-serviettes."
        ],
        "after": "Pour voir aussi mes chantiers dans le reste du département ([Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac), Muret), consultez ma page générale [rénovation de salle de bain](/services/renovation-salle-de-bain) et ma galerie de [réalisations](/realisations)."
      },
      {
        "h2": "Avant / après à Toulouse",
        "text": "Voici six exemples de réalisations et d'aménagements de salles de bain menés sur le secteur toulousain :",
        "photos": [
          {
            "src": "/realisations/photo-14.jpg",
            "alt": "Douche à l'italienne avec verrière noire et niche éclairée à Toulouse Les Carmes",
            "legende": "Toulouse (Les Carmes) : création d'une douche avec verrière sur mesure et niche lumineuse."
          },
          {
            "src": "/realisations/photo-09.jpg",
            "alt": "Meuble double vasque bois et miroir LED posés à Toulouse Saint-Cyprien",
            "legende": "Toulouse (Saint-Cyprien) : pose d'un meuble double vasque, mitigeurs noirs et grand miroir LED."
          },
          {
            "src": "/realisations/photo-10.jpg",
            "alt": "Pose d'un receveur extra-plat et paroi coulissante à Toulouse Les Minimes",
            "legende": "Toulouse (Les Minimes) : remplacement d'une baignoire par un receveur extra-plat avec paroi vitrée."
          },
          {
            "src": "/realisations/photo-02.jpg",
            "alt": "Installation d'une colonne de douche thermostatique et faïence à Toulouse Capitole",
            "legende": "Toulouse (Capitole) : reprise des arrivées encastrées et pose d'une colonne thermostatique."
          },
          {
            "src": "/realisations/photo-06.jpg",
            "alt": "Douche carrelée avec mitigeur thermostatique à Toulouse Rangueil",
            "legende": "Toulouse (Rangueil) : réfection de l'étanchéité, faïence murale et robinetterie de douche."
          },
          {
            "src": "/realisations/photo-11.jpg",
            "alt": "Pose de radiateur sèche-serviettes dans une salle de bain rénovée à Toulouse Côte Pavée",
            "legende": "Toulouse (Côte Pavée) : installation et raccordement d'un sèche-serviettes mural."
          }
        ]
      },
      {
        "h2": "Combien de temps durent les travaux ?",
        "text": "La durée d'un chantier en appartement ou en maison à Toulouse dépend des travaux de dépose, du temps de séchage des chapes et de la surface à carreler. À titre indicatif : `[À CONFIRMER PAR NINO : durée moyenne d'un chantier de salle de bain à Toulouse]`. Je vous communique le planning précis avec le devis gratuit pour que vous puissiez vous organiser et prévenir vos voisins."
      },
      {
        "h2": "Combien ça coûte ?",
        "text": "Le coût dépend de la configuration de votre pièce et des matériaux retenus. À titre indicatif : `[À CONFIRMER PAR NINO : ordre de prix au m² pour une salle de bain à Toulouse]`. Mon devis est gratuit, détaillé et validé avant toute intervention. Consultez aussi ma page [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "faq": [
      {
        "question": "Puis-je remplacer ma baignoire par une douche sans refaire toute la salle de bain ?",
        "reponse": "Oui. Je peux déposer uniquement la baignoire, adapter la vidange et les arrivées d'eau, poser un receveur extra-plat, reprendre la faïence sur la zone concernée et monter la paroi vitrée."
      },
      {
        "question": "Comment gérez-vous les chantiers en étage sans ascenseur à Toulouse ?",
        "reponse": "J'anticipe l'accès lors de ma visite technique : protection des parties communes, évacuation des gravats en sacs adaptés et organisation des livraisons aux horaires autorisés par la copropriété."
      },
      {
        "question": "Qui s'occupe du carrelage et du placo pendant le chantier ?",
        "reponse": "Je réalise toute la plomberie et les sanitaires et j'interviens en binôme avec un second professionnel pour le placo, le carrelage et la peinture. Vous n'avez qu'un seul interlocuteur."
      },
      {
        "question": "Quelle est la garantie sur ma nouvelle salle de bain ?",
        "reponse": "Mes travaux d'installation et de plomberie sont couverts par ma garantie de 2 ans pièces et main-d'œuvre."
      }
    ],
    "aLireAussi": [
      {
        "label": "Rénovation de salle de bain (Muret & 31)",
        "to": "/services/renovation-salle-de-bain"
      },
      {
        "label": "Robinetterie et sanitaires",
        "to": "/services/robinetterie-sanitaires"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Un projet ? Demandez un devis gratuit",
    "ctaLead": "Appelez-moi au 06 50 57 96 20 pour organiser une visite gratuite chez vous à Toulouse et recevoir un devis détaillé pour votre salle de bain."
  },
  {
    "slug": "robinetterie-sanitaires",
    "titre": "Robinetterie & Sanitaires",
    "sousTitre": "Robinets, mitigeurs, douches, WC et vasques",
    "metaTitle": "Robinetterie & Sanitaires Muret et Toulouse | Nino",
    "metaDescription": "Pose et remplacement de robinet, mitigeur, WC suspendu ou colonne de douche à Muret et Toulouse. Artisan depuis 20 ans, devis gratuit, garantie 2 ans.",
    "h1": "Robinetterie et sanitaires à Muret et Toulouse : pose et remplacement",
    "serviceType": "Pose et remplacement de robinetterie et sanitaires",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-09.jpg",
    "enBref": "Je remplace et j'installe vos robinets, mitigeurs, colonnes de douche thermostatiques, WC à poser ou suspendus, vasques et meubles de salle de bain à Muret, Toulouse et en Haute-Garonne. Vous pouvez fournir votre matériel ou me confier l'achat. Devis gratuit validé avant travaux et garantie 2 ans.",
    "description": "Robinet qui goutte, mitigeur bloqué par le calcaire, chasse d'eau qui fuit ou envie d'un WC suspendu neuf : j'installe vos équipements sanitaires avec des raccordements propres, étanches et durables.",
    "details": [
      "Remplacement de robinets et mitigeurs (cuisine, lavabo, douche)",
      "Pose de colonnes de douche et mitigeurs thermostatiques",
      "Réparation et changement de mécanismes de chasse d'eau",
      "Installation de WC à poser et de WC suspendus avec bâti-support",
      "Pose de vasques, meubles double vasque et éviers",
      "Remplacement de vannes d'arrêt et pose de réducteurs de pression"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": false,
    "icon": "Wrench",
    "seoContent": [
      "Basé au 11 rue François Arago à [Muret](/intervention/muret) depuis plus de 20 ans, j'interviens chaque semaine à [Toulouse](/intervention/toulouse), [Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac) et [Tournefeuille](/intervention/tournefeuille) pour remplacer des robinets usés, réparer des chasses d'eau ou poser des sanitaires neufs. Avec plus de 150 interventions à Toulouse sur trois ans et une note de 4,4/5 sur 79 avis Google, je soigne autant l'étanchéité cachée que les finitions visibles.",
      "Un robinet qui goutte ou un mécanisme de WC entartré finit par coûter cher sur la facture d'eau annuelle. Quand vous m'appelez au 06 50 57 96 20, je vérifie d'abord si une simple réparation suffit avant de vous proposer un remplacement, toujours avec un devis gratuit signé avant travaux et ma garantie de 2 ans pièces et main-d'œuvre."
    ],
    "sections": [
      {
        "h2": "Remplacer un équipement fatigué sans tout refaire",
        "text": "Il n'est pas nécessaire de rénover toute la pièce pour retrouver du confort et stopper le gaspillage d'eau à [Muret](/intervention/muret) ou à [Toulouse](/intervention/toulouse) :",
        "bullets": [
          "**Mitigeur de cuisine ou de salle de bain** : je démonte l'ancien robinet grippé par le tartre, je remplace les flexibles d'alimentation et les joints fibre ou caoutchouc, puis je pose un mitigeur neuf parfaitement étanche.",
          "**Colonne de douche thermostatique** : l'eau garde exactement la température choisie, même si quelqu'un ouvre un robinet ailleurs dans la maison, avec une butée de sécurité anti-brûlure à 38 °C.",
          "**Mécanisme de chasse d'eau ou WC complet** : une chasse qui fuit en continu gaspille des dizaines de mètres cubes par an. Je remplace le robinet flotteur et la cloche, ou je pose une cuvette neuve sans bride facile à nettoyer.",
          "**Meuble simple ou double vasque** : je dépose l'ancien lavabo sur colonne, j'adapte la hauteur des alimentations et du siphon PVC et je fixe solidement votre nouveau meuble vasque et son miroir LED."
        ],
        "after": "Si votre projet inclut aussi la réfection du carrelage et de la douche, consultez ma page [rénovation de salle de bain](/services/renovation-salle-de-bain)."
      },
      {
        "h2": "WC à poser ou WC suspendu : comment je procède",
        "text": "Le remplacement des toilettes fait partie des demandes les plus fréquentes dans les appartements toulousains (Saint-Cyprien, Carmes, Minimes) comme dans les maisons du Muretain :",
        "bullets": [
          "**Remplacement d'un WC à poser** : je vérifie le type d'évacuation existant (sortie horizontale dans le mur ou sortie verticale dans la dalle), je dépose l'ancienne cuvette, je monte une pipe d'évacuation et un robinet d'arrêt neufs et je scelle le nouveau pack WC au sol.",
          "**Création d'un WC suspendu** : je fixe un bâti-support autoportant ou universel sur la dalle et le mur porteur, je raccorde l'alimentation en eau et la pipe PVC de 100 mm, je réalise l'habillage en placo hydrofuge prêt à carreler ou à peindre, puis je pose la cuvette suspendue et la plaque de commande double touche."
        ],
        "after": "Si vos toilettes s'écoulent mal avant même le changement, je vérifie la conduite ou j'interviens pour un [débouchage de WC](/services/debouchage-wc-toulouse)."
      },
      {
        "h2": "Calcaire et pression : protéger votre robinetterie à Toulouse et Muret",
        "text": "En Haute-Garonne, deux facteurs usent prématurément les cartouches céramiques des mitigeurs et les joints de chasse d'eau : le calcaire et une pression réseau parfois trop élevée la nuit. Lors de mon passage, je contrôle vos vannes d'arrêt sous évier ou sous lavabo (souvent bloquées par le tartre) et je les remplace par des vannes quart de tour fiables. Si vos tuyaux claquent à la fermeture des robinets ou si le groupe de sécurité de votre [chauffe-eau](/services/chauffe-eau) goutte en permanence, j'installe un réducteur de pression après compteur pour stabiliser tout votre réseau domestique autour de 3 bars."
      },
      {
        "h2": "Fournir votre matériel ou me laisser gérer",
        "text": "Je m'adapte à votre organisation : si vous avez déjà repéré un meuble vasque, un WC suspendu ou une robinetterie noire mat en magasin, je vérifie avec vous les entraxes (standard 150 mm pour une douche), les longueurs de flexibles et les diamètres de vidage avant la pose. Si vous préférez ne vous occuper de rien, je fournis des équipements professionnels éprouvés dont les pièces détachées (cartouches céramiques, têtes thermostatiques, joints et mécanismes de chasse) restent faciles à trouver dans dix ans."
      },
      {
        "h2": "Combien coûte la pose de robinetterie ou de sanitaires ?",
        "text": "Le tarif dépend de l'équipement à remplacer et de l'état des arrivées d'eau existantes. À titre indicatif : `[À CONFIRMER PAR NINO : ordre de prix pour le remplacement d'un robinet, d'une chasse d'eau ou d'un WC]`. Mon devis est toujours gratuit et signé avant l'intervention. Consultez ma page [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "photos": [
      {
        "src": "/realisations/photo-09.jpg",
        "alt": "Pose de meuble double vasque et robinetterie noire mat à Toulouse",
        "legende": "Toulouse : installation d'un meuble double vasque, mitigeurs noirs et vidages."
      },
      {
        "src": "/realisations/photo-12.jpg",
        "alt": "Installation d'un WC suspendu noir et d'un lave-mains à Blagnac",
        "legende": "Blagnac : pose d'un WC suspendu sur bâti-support et raccordement d'un lave-mains."
      },
      {
        "src": "/realisations/photo-01.jpg",
        "alt": "Pose de robinetterie de baignoire noire mat à Muret",
        "legende": "Muret : montage et raccordement d'une robinetterie sur baignoire."
      }
    ],
    "faq": [
      {
        "question": "Puis-je acheter moi-même mon robinet ou mon WC ?",
        "reponse": "Oui. Je vérifie simplement avant le montage que le modèle choisi est compatible avec vos arrivées d'eau et votre évacuation (sortie horizontale ou verticale pour un WC)."
      },
      {
        "question": "Ma chasse d'eau coule en permanence dans la cuvette, faut-il changer tout le WC ?",
        "reponse": "Non. Dans la grande majorité des cas, remplacer le mécanisme de chasse ou le robinet flotteur à l'intérieur du réservoir suffit à stopper la fuite sans remplacer la porcelaine."
      },
      {
        "question": "Mon mitigeur thermostatique ne donne plus que de l'eau tiède, pourquoi ?",
        "reponse": "La cartouche thermostatique est souvent bloquée par le calcaire. Selon l'état et la marque du robinet, je détartre ou je remplace la cartouche, ou je pose un mitigeur neuf sur vos raccords existants."
      },
      {
        "question": "Quelle garantie s'applique sur la pose de sanitaires ?",
        "reponse": "Mon intervention est garantie 2 ans, pièces et main-d'œuvre, avec un devis gratuit validé avant le début des travaux."
      }
    ],
    "aLireAussi": [
      {
        "label": "Rénovation de salle de bain",
        "to": "/services/renovation-salle-de-bain"
      },
      {
        "label": "Recherche de fuite d'eau",
        "to": "/services/fuite-d-eau"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence ou un devis ?"
  },
  {
    "slug": "installation-plomberie-neuve",
    "titre": "Plomberie neuve",
    "sousTitre": "Construction, extension et mise aux normes",
    "metaTitle": "Installation plomberie neuve Toulouse & Muret - Devis | Nino",
    "metaDescription": "Installation de plomberie neuve à Muret et Toulouse : maison neuve, extension, rénovation complète. Artisan depuis 20 ans, devis gratuit, garantie 2 ans.",
    "h1": "Installation de plomberie neuve à Muret et Toulouse",
    "serviceType": "Installation de plomberie neuve",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-15.jpg",
    "enBref": "Je réalise l'installation complète de plomberie pour vos constructions neuves, extensions, surélévations et rénovations lourdes à Muret, Toulouse et en Haute-Garonne : réseaux d'eau froide et chaude sur nourrices, évacuations PVC, attentes cuisine et salle de bain, pose du chauffe-eau et des sanitaires. Devis gratuit et garantie 2 ans.",
    "description": "Construction de maison, création d'une suite parentale ou reprise totale des réseaux d'une toulousaine ancienne : je conçois et je pose votre installation de plomberie de A à Z.",
    "details": [
      "Création des réseaux d'eau froide et d'eau chaude (PER, multicouche, cuivre)",
      "Distribution équilibrée par nourrices avec vannes d'isolement",
      "Pose des collecteurs et évacuations PVC avec pentes normées",
      "Création des attentes pour cuisine, buanderie et salles d'eau",
      "Installation du chauffe-eau et des équipements sanitaires",
      "Mise en pression, tests d'étanchéité et mise en service"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": false,
    "icon": "Building2",
    "seoContent": [
      "Basé au 11 rue François Arago à [Muret](/intervention/muret) avec plus de 20 ans de métier (note de 4,4/5 sur 79 avis Google et plus de 150 interventions à [Toulouse](/intervention/toulouse) sur trois ans), je réalise les installations complètes de plomberie sanitaire et de chauffage pour les maisons individuelles, les extensions, les divisions de logements et les rénovations totales en Haute-Garonne.",
      "Un réseau neuf bien pensé évite les baisses de pression sous la douche, les coups de bélier dans les cloisons et les odeurs d'évacuation. Vous traitez directement avec l'artisan qui dimensionne, pose et met en service votre installation, avec un devis gratuit détaillé et une garantie de 2 ans pièces et main-d'œuvre."
    ],
    "sections": [
      {
        "h2": "Un réseau bien conçu dès le départ",
        "text": "Sur un chantier neuf ou une rénovation totale à [Muret](/intervention/muret), [Toulouse](/intervention/toulouse), [Colomiers](/intervention/colomiers) ou [Tournefeuille](/intervention/tournefeuille), la qualité de la plomberie se joue avant la fermeture des cloisons et le coulage de la chape :",
        "bullets": [
          "**Distribution par nourrices (collecteurs)** : chaque point d'eau dispose de son départ dédié avec vanne d'arrêt identifiée. Vous pouvez couper l'eau d'un seul WC ou d'un lavabo sans priver le reste de la maison.",
          "**Diamètres et pression adaptés** : je dimensionne les canalisations principales et secondaires pour conserver un débit confortable sous la douche même lorsqu'un robinet de cuisine ou un lave-linge tourne en parallèle.",
          "**Évacuations silencieuses et ventilées** : je respecte scrupuleusement les pentes d'écoulement (1 à 3 cm par mètre) et je pose une ventilation primaire de chute en toiture pour empêcher le désiphonnage et les remontées d'odeurs."
        ],
        "after": "Vous aménagez aussi la pièce d'eau ou la cuisine ? Voyez mes pages [rénovation de salle de bain](/services/renovation-salle-de-bain) et [pose de cuisine](/services/pose-cuisine)."
      },
      {
        "h2": "Cuivre, multicouche ou PER : quel matériau pour votre projet ?",
        "text": "Je sélectionne le matériau de vos tuyauteries selon le passage des réseaux (encastré en dalle, en doublage placo ou apparent) :",
        "bullets": [
          "**Le tube multicouche serti** : doté d'une âme en aluminium, il ne se dilate presque pas à l'eau chaude, bloque l'oxygène (idéal pour protéger les circuits de [chauffage et chaudière](/services/chauffage-chaudiere)) et garde une forme propre en apparent comme en cloison.",
          "**Le cuivre brasé** : incontournable pour les départs de chaudière, les raccordements techniques exposés aux chocs au garage et les finitions apparentes dans les toulousaines de caractère.",
          "**Le PER gainé sous fourreau** : passé d'un seul tenant entre la nourrice et l'appareil sanitaire dans la dalle, il permet une alimentation sans aucun raccord noyé dans le béton."
        ]
      },
      {
        "h2": "Intervention en deux phases sur votre chantier",
        "text": "Pour que votre chantier avance sans retard avec le maçon, le plaquiste et le carreleur, j'interviens en deux étapes :",
        "numbered": true,
        "bullets": [
          "**Première phase (incorporation et pré-équipement)** : j'interviens avant le plaquiste et le chapiste pour passer les fourreaux d'eau froide et chaude, poser les nourrices, créer les évacuations PVC, installer le robinet de jardin antigel et fixer les bâtis-supports de WC suspendus.",
          "**Seconde phase (appareillage et mise en eau)** : une fois les sols et les faïences terminés, je reviens poser le [chauffe-eau](/services/chauffe-eau), les parois de douche, les meubles vasques et la [robinetterie](/services/robinetterie-sanitaires), puis je teste chaque raccord sous pression."
        ]
      },
      {
        "h2": "Remise aux normes des maisons anciennes à Toulouse et dans le 31",
        "text": "Lors de l'achat d'une maison des années 1930 à 1970 aux Minimes, à Côte Pavée, à Lardenne ou dans le centre de Muret, les réseaux existants mêlent parfois vieux tuyaux en acier galvanisé entartrés, brasures fatiguées et évacuations sans pente. Je dépose l'ensemble des conduites vétustes pour repartir du compteur avec un réducteur de pression neuf, une vanne générale accessible et une distribution complète aux normes actuelles."
      },
      {
        "h2": "Combien coûte une installation de plomberie neuve ?",
        "text": "Le chiffrage dépend du nombre de pièces d'eau, de la distance entre le compteur et les points de puisage et des appareils choisis. À titre indicatif : `[À CONFIRMER PAR NINO : budget indicatif pour une création de réseau ou une salle d'eau neuve]`. Je vous remets un devis gratuit détaillé après étude de vos plans ou visite sur place. Consultez aussi ma page [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "photos": [
      {
        "src": "/realisations/photo-15.jpg",
        "alt": "Création complète de salle de bain dans une rénovation à Colomiers",
        "legende": "Colomiers : création des réseaux d'alimentation, d'évacuation et pose des équipements."
      },
      {
        "src": "/realisations/photo-05.jpg",
        "alt": "Création des attentes d'eau et d'évacuation pour îlot de cuisine à Toulouse",
        "legende": "Toulouse : passage des alimentations et vidanges pour une cuisine neuve avec îlot."
      },
      {
        "src": "/realisations/photo-13.jpg",
        "alt": "Installation sanitaire neuve dans une maison à Tournefeuille",
        "legende": "Tournefeuille : pose de douche, meuble vasque et raccordements neufs."
      }
    ],
    "faq": [
      {
        "question": "À quel moment vous appeler pour une extension ou une construction ?",
        "reponse": "Contactez-moi dès que vos plans sont définis, avant le coulage de la dalle ou la pose des rails de placo. Cela permet de placer les évacuations et les gaines exactement aux bons endroits sans devoir percer la dalle après coup."
      },
      {
        "question": "Faites-vous la remise aux normes de vieilles canalisations en plomb ou en acier ?",
        "reponse": "Oui. Je dépose les anciens réseaux vétustes et je recrée une distribution propre en cuivre, multicouche ou PER avec nourrices d'isolement et vannes quart de tour."
      },
      {
        "question": "Vous coordonnez-vous avec le maçon, le plaquiste et l'électricien ?",
        "reponse": "Oui, j'ai l'habitude des chantiers en neuf comme en rénovation et je cale mes passages avec les autres artisans pour ne jamais bloquer l'avancement."
      },
      {
        "question": "Quelle est la garantie sur une installation de plomberie neuve ?",
        "reponse": "Mes travaux sont couverts par ma garantie de 2 ans pièces et main-d'œuvre, avec un contrôle de mise en pression complet avant la remise en service."
      }
    ],
    "aLireAussi": [
      {
        "label": "Rénovation de salle de bain",
        "to": "/services/renovation-salle-de-bain"
      },
      {
        "label": "Pose de cuisine",
        "to": "/services/pose-cuisine"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Un projet ? Demandez un devis gratuit"
  },
  {
    "slug": "pose-cuisine",
    "titre": "Pose de cuisine",
    "sousTitre": "Pose et raccordement de cuisine clé en main",
    "metaTitle": "Pose de cuisine & raccordement Muret et Toulouse | Nino",
    "metaDescription": "Pose de cuisine clé en main à Muret et Toulouse : montage des meubles, plan de travail, évier et raccordements plomberie. Devis gratuit, garantie 2 ans.",
    "h1": "Pose et raccordement de cuisine à Muret et Toulouse",
    "serviceType": "Pose et raccordement de cuisine",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-05.jpg",
    "enBref": "Je pose votre cuisine clé en main à Muret, Toulouse et en Haute-Garonne : montage et mise à niveau des caissons, découpe et pose du plan de travail, encastrement de l'évier, pose du mitigeur et raccordement du lave-vaisselle et du lave-linge. Un seul artisan pour la menuiserie et la plomberie, devis gratuit et garantie 2 ans.",
    "description": "Faire poser sa cuisine par un artisan plombier vous évite de coordonner deux intervenants : je monte vos meubles et je réalise en même temps toutes les modifications d'arrivées d'eau et d'évacuation.",
    "details": [
      "Montage et fixation murale des meubles bas, hauts et colonnes",
      "Découpe et pose du plan de travail et de la crédence",
      "Encastrement de l'évier et pose du mitigeur de cuisine",
      "Création ou déplacement des arrivées d'eau et vidanges",
      "Raccordement du lave-vaisselle, du lave-linge et du chauffe-eau",
      "Vérification complète de l'étanchéité sous l'évier"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": false,
    "icon": "Wrench",
    "seoContent": [
      "Installé au 11 rue François Arago à [Muret](/intervention/muret) depuis plus de 20 ans (note de 4,4/5 sur 79 avis Google et plus de 150 interventions à [Toulouse](/intervention/toulouse) sur trois ans), j'assure à la fois la modification des réseaux de plomberie et la pose complète de votre cuisine équipée à Muret, Toulouse, [Colomiers](/intervention/colomiers), [Blagnac](/intervention/blagnac) et [Tournefeuille](/intervention/tournefeuille).",
      "Que vous ayez commandé vos meubles chez un cuisiniste ou en grande surface d'aménagement, je prends votre chantier en main de la dépose de l'ancienne cuisine jusqu'à la mise en eau de l'évier et du lave-vaisselle, avec un devis gratuit détaillé et une garantie de 2 ans pièces et main-d'œuvre."
    ],
    "sections": [
      {
        "h2": "Pourquoi confier la pose de votre cuisine à un plombier ?",
        "text": "Sur beaucoup de chantiers à [Toulouse](/intervention/toulouse) ou [Muret](/intervention/muret), le poseur de meubles s'arrête dès que les tuyaux existants ne tombent pas en face du nouveau meuble sous-évier ou qu'une vanne d'arrêt goutte. En tant qu'artisan plombier depuis plus de 20 ans, j'adapte directement vos alimentations d'eau chaude et froide, je crée le piquage avec robinet d'arrêt et siphon dédié pour le lave-vaisselle, je déplace l'évacuation PVC de 40 mm si vous créez un îlot central et j'assemble l'ensemble de vos caissons."
      },
      {
        "h2": "Préparation des attentes d'eau et d'évacuation avant la pose",
        "text": "Avant même d'aligner le premier meuble bas, je vérifie que votre réseau sous évier est sain et conforme au plan technique de votre cuisine :",
        "bullets": [
          "**Déplacement des arrivées d'eau** : si l'évier change de mur ou passe sur un îlot, je reprends les conduites en cuivre ou multicouche pour les amener exactement dans le vide sanitaire du caisson sous-évier.",
          "**Création de double vidange ventilée** : je pose une évacuation séparée pour l'évier et le lave-vaisselle afin d'éviter que l'eau de vidange de la machine ne refoule dans le bac de l'évier.",
          "**Remplacement des vannes d'arrêt** : je profite du chantier pour poser des vannes quart de tour neuves qui permettront de couper l'eau de la cuisine en une seconde en cas de besoin."
        ],
        "after": "Dans le cadre d'une rénovation complète de maison, consultez aussi ma page [installation de plomberie neuve](/services/installation-plomberie-neuve)."
      },
      {
        "h2": "Montage des meubles, plan de travail et raccordements",
        "text": "Une fois les réseaux prêts, je réalise la pose complète en quatre étapes soignées :",
        "numbered": true,
        "bullets": [
          "**Assemblage et mise à niveau des caissons** : montage des meubles bas, colonnes four/réfrigérateur et meubles hauts avec fixations adaptées à la nature de votre mur (brique toulousaine, placo avec chevilles métalliques ou béton).",
          "**Découpe et assemblage du plan de travail** : découpe précise des emplacements de l'évier et de la plaque de cuisson, application d'un joint d'étanchéité sur les chants sciés pour empêcher le bois de gonfler à l'humidité, puis pose des plinthes et fileurs.",
          "**Pose de l'évier et du mitigeur** : encastrement de l'évier (inox, résine ou céramique), montage du mitigeur ou de la douchette extractible et installation d'un siphon gain de place qui libère le rangement dans le tiroir sous-évier.",
          "**Raccordement de l'électroménager et tests** : branchement en eau et vidange du lave-vaisselle et du lave-linge, mise en pression et contrôle minutieux de chaque joint sous l'évier."
        ]
      },
      {
        "h2": "Mes réalisations de cuisines en Haute-Garonne",
        "text": "J'installe les cuisines achetées chez tous les cuisinistes et grandes enseignes :",
        "bullets": [
          "**Cuisine familiale avec îlot central** : passage des réseaux au sol, assemblage des caissons, découpe précise du plan de travail bois ou stratifié et pose de l'évier encastré.",
          "**Kitchenette et cuisine d'appartement** : optimisation de l'espace dans les studios de Rangueil, des Carmes ou de Saint-Cyprien, avec intégration du lave-linge et du [chauffe-eau électrique](/services/chauffe-eau) dans un placard technique propre.",
          "**Modernisation de l'espace lavage** : remplacement d'un évier ancien et pose d'une robinetterie neuve sans changer les meubles existants. Voir aussi ma page [robinetterie et sanitaires](/services/robinetterie-sanitaires)."
        ]
      },
      {
        "h2": "Combien coûte la pose et le raccordement d'une cuisine ?",
        "text": "Le prix dépend du nombre de meubles à monter, des découpes de plan de travail et des modifications de plomberie à prévoir. À titre indicatif : `[À CONFIRMER PAR NINO : ordre de prix pour un raccordement d'évier/lave-vaisselle ou une pose de cuisine complète]`. Mon devis est gratuit et détaillé avant le début du chantier. Consultez aussi ma page [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "temoignage": {
      "nom": "Cynthia M.",
      "service": "Plomberie & raccordement cuisine",
      "texte": "Je recommande Nino sans aucune hésitation. Venu réparer une fuite de l'évier et raccorder un lave-linge, Nino a été très gentil, rapide et efficace. Il s'adapte très rapidement face aux problèmes inattendus rencontrés. C'est un vrai expert dans son domaine."
    },
    "photos": [
      {
        "src": "/realisations/photo-05.jpg",
        "alt": "Pose complète d'une cuisine avec îlot central à Toulouse",
        "legende": "Toulouse : montage des meubles, pose du plan de travail bois et raccordement de l'îlot."
      },
      {
        "src": "/realisations/photo-07.jpg",
        "alt": "Pose de meubles de cuisine et intégration d'un chauffe-eau à Muret",
        "legende": "Muret : installation d'une cuisine équipée et raccordement du cumulus."
      },
      {
        "src": "/realisations/photo-03.jpg",
        "alt": "Raccordement de mitigeur et vidage étanche à Muret",
        "legende": "Muret : pose de robinetterie et contrôle d'étanchéité des raccordements."
      }
    ],
    "faq": [
      {
        "question": "Posez-vous les cuisines achetées en grande surface ou chez un cuisiniste ?",
        "reponse": "Oui, je monte et je raccorde toutes les marques de cuisines achetées en magasin d'aménagement ou chez un cuisiniste spécialisé."
      },
      {
        "question": "Pouvez-vous déplacer les arrivées d'eau pour mon nouvel évier ?",
        "reponse": "Oui, c'est tout l'avantage de passer par un artisan plombier : je modifie les tuyaux d'eau chaude et froide ainsi que l'évacuation PVC avant de fixer vos nouveaux meubles."
      },
      {
        "question": "Intervenez-vous juste pour raccorder un évier et un lave-vaisselle ?",
        "reponse": "Oui, si vous avez déjà monté vos caissons vous-même, j'interviens volontiers uniquement pour découper le plan de travail, poser l'évier, le mitigeur et raccorder le lave-vaisselle ou le lave-linge."
      },
      {
        "question": "Quelle garantie couvre la pose et les raccordements de ma cuisine ?",
        "reponse": "L'ensemble de mon installation et de mes raccordements de plomberie est couvert par ma garantie de 2 ans pièces et main-d'œuvre."
      }
    ],
    "aLireAussi": [
      {
        "label": "Robinetterie et sanitaires",
        "to": "/services/robinetterie-sanitaires"
      },
      {
        "label": "Installation plomberie neuve",
        "to": "/services/installation-plomberie-neuve"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Un projet ? Demandez un devis gratuit"
  },
  {
    "slug": "plombier-pas-cher-toulouse",
    "titre": "Plombier pas cher Toulouse : prix clairs",
    "sousTitre": "Prix annoncés avant travaux, sans surprise",
    "listed": false,
    "metaTitle": "Plombier pas cher Toulouse : prix clairs, devis gratuit | Nino",
    "metaDescription": "Un plombier à prix clairs à Toulouse : ordres de prix annoncés, devis gratuit validé avant travaux, pas de surprise sur la facture. Appelez le 06 50 57 96 20.",
    "h1": "Plombier pas cher à Toulouse : prix clairs, devis gratuit",
    "serviceType": "Plomberie à prix annoncé",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-02.jpg",
    "enBref": "À Toulouse et Muret, je travaille avec une règle simple : mon devis est gratuit et le prix est écrit et validé avec vous avant le début des travaux. Artisan indépendant depuis plus de 20 ans (4,4/5 sur 79 avis Google), je travaille sans plateforme ni intermédiaire, avec une garantie de 2 ans pièces et main-d'œuvre.",
    "description": "Un plombier honnête n'est pas celui qui promet un prix dérisoire au téléphone pour tripler la note une fois la pièce démontée : c'est celui dont la facture finale correspond au centime près au devis signé avant travaux.",
    "details": [
      "Devis gratuit écrit avant toute intervention",
      "Prix fixe validé par votre signature avant travaux",
      "Pièces et main-d'œuvre détaillées ligne par ligne",
      "Zéro commission de plateforme ou de centre d'appels",
      "Réparations garanties 2 ans pièces et main-d'œuvre",
      "Réparation privilégiée plutôt que le remplacement systématique"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": false,
    "icon": "Wrench",
    "sections": [
      {
        "h2": "Comment je garde des tarifs justes à Toulouse et Muret",
        "text": "Basé au 11 rue François Arago à [Muret](/intervention/muret), j'interviens seul à [Toulouse](/intervention/toulouse), [Colomiers](/intervention/colomiers) et dans toute la Haute-Garonne. Mon organisation réduit les coûts inutiles :",
        "bullets": [
          "**Aucun intermédiaire** : je n'achète pas de fiches clients à des plateformes qui prélèvent une forte commission sur votre facture.",
          "**Je répare quand c'est réparable** : si un joint, une cartouche de mitigeur ou un groupe de sécurité suffit à stopper la fuite, je ne vous pousse jamais à changer tout l'appareil.",
          "**Ordres de prix transparents** : `[À CONFIRMER PAR NINO : ordres de prix des interventions courantes (débouchage, fuite simple, entretien chaudière, main-d'œuvre)]`. Retrouvez toute ma grille sur la page [tarifs plombier à Muret et Toulouse](/tarifs)."
        ]
      },
      {
        "h2": "Comment éviter les arnaques au dépannage",
        "numbered": true,
        "bullets": [
          "**Méfiez-vous des prix d'appel irréalistes sur Internet** : un tarif minuscule affiché sur un prospectus sert uniquement à faire entrer un commercial chez vous.",
          "**Exigez un devis écrit avant le démontage** : tant que vous n'avez pas signé le devis, le technicien n'a pas le droit de démonter votre installation.",
          "**Vérifiez l'adresse et les avis de l'entreprise** : mon entreprise est immatriculée à Muret et cumule 79 avis vérifiés sur Google (note de 4,4/5)."
        ],
        "after": "Besoin d'une intervention rapide aujourd'hui ? Consultez ma page [dépannage plomberie à Toulouse](/services/depannage-plomberie-toulouse) ou ma page [plombier urgence à Toulouse](/services/urgence-plombier-toulouse)."
      }
    ],
    "photos": [
      {
        "src": "/realisations/photo-02.jpg",
        "alt": "Intervention plomberie sur colonne de douche à Toulouse avec devis gratuit",
        "legende": "Toulouse : pose et réparation de robinetterie sur devis gratuit validé avant travaux."
      },
      {
        "src": "/realisations/photo-03.jpg",
        "alt": "Réparation d'un mitigeur et siphon de vasque à Muret",
        "legende": "Muret : dépannage ciblé sur meuble vasque sans remplacement inutile."
      },
      {
        "src": "/realisations/photo-07.jpg",
        "alt": "Remplacement de chauffe-eau à tarif clair à Muret",
        "legende": "Muret : installation d'un cumulus neuf avec facture détaillée et garantie 2 ans."
      }
    ],
    "faq": [
      {
        "question": "Le devis est-il vraiment gratuit ?",
        "reponse": "Oui, mon devis est gratuit et le prix est validé avec vous avant le début des travaux."
      },
      {
        "question": "Comment être sûr que le prix ne changera pas à la fin de l'intervention ?",
        "reponse": "Le montant total (déplacement, main-d'œuvre et pièces) est inscrit sur le devis que vous signez avant que je commence. La facture finale reprend exactement ce montant."
      },
      {
        "question": "Vos réparations sont-elles garanties même sur un petit dépannage ?",
        "reponse": "Oui, toutes mes réparations sont garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "aLireAussi": [
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      },
      {
        "label": "Dépannage plomberie à Toulouse",
        "to": "/services/depannage-plomberie-toulouse"
      },
      {
        "label": "Plombier urgence à Toulouse",
        "to": "/services/urgence-plombier-toulouse"
      }
    ],
    "ctaH2": "Une urgence ou un devis ?"
  },
  {
    "slug": "debouchage-wc-toulouse",
    "titre": "Débouchage WC Toulouse",
    "sousTitre": "Débouchage de toilettes et WC suspendus 24h/24 à Toulouse",
    "listed": false,
    "metaTitle": "Débouchage WC Toulouse 24h/24 - Prix & Urgence | Nino",
    "metaDescription": "WC bouché à Toulouse ou Muret ? Débouchage mécanique 24h/24 7j/7 sans produit chimique, devis gratuit avant travaux, garantie 2 ans. Appelez le 06 50 57 96 20.",
    "h1": "Débouchage WC à Toulouse : intervention 24h/24 et devis gratuit",
    "serviceType": "Débouchage de WC",
    "areaServed": [
      "Toulouse",
      "Muret",
      "Colomiers",
      "Blagnac",
      "Tournefeuille",
      "Portet-sur-Garonne",
      "Cugnaux",
      "Balma",
      "Plaisance-du-Touch",
      "Ramonville-Saint-Agne"
    ],
    "heroImage": "/realisations/photo-08.jpg",
    "enBref": "J'interviens 24h/24 et 7j/7 à Toulouse, Muret et en Haute-Garonne pour déboucher vos WC classiques, WC suspendus et broyeurs : extraction mécanique du bouchon à la pompe haute pression ou au furet professionnel, sans acide corrosif. Devis gratuit validé avant travaux et garantie 2 ans.",
    "description": "L'eau monte jusqu'au bord de la cuvette et ne descend plus ? Ne tirez plus la chasse. Appelez-moi directement au 06 50 57 96 20 : j'interviens à Toulouse et Muret avec les outils mécaniques adaptés pour dégager vos toilettes proprement.",
    "details": [
      "Débouchage de WC à poser et de WC suspendus",
      "Intervention à la pompe professionnelle et au furet gainé",
      "Extraction de lingettes, blocs WC tombés et bouchons de calcaire",
      "Dégorgement de la pipe d'évacuation et de la colonne de chute",
      "Remplacement de pipe WC ou de joint à lèvre si fuite associée",
      "Intervention 24h/24 et 7j/7 avec devis gratuit avant travaux"
    ],
    "prix": "Devis gratuit validé avec vous avant travaux, garantie 2 ans pièces et main-d'œuvre",
    "urgence": true,
    "icon": "Wind",
    "sections": [
      {
        "h2": "WC bouché : les 3 réflexes immédiats",
        "numbered": true,
        "bullets": [
          "**Ne tirez plus la chasse d'eau** : un réservoir contient 6 à 9 litres d'eau. Une seule chasse de trop suffit à faire déborder la cuvette sur le sol.",
          "**Coupez le robinet d'arrêt du WC** : tournez le petit robinet situé à gauche ou à droite du réservoir pour éviter tout remplissage accidentel.",
          "**Ne versez aucun déboucheur chimique** : la soude ou l'acide ne dissout ni le tartre épais ni les lingettes, stagne dans l'eau de la cuvette et brûle les joints comme la peau."
        ],
        "after": "Si un évier ou une douche refoule en même temps que le WC, consultez ma page complète [débouchage de canalisation à Toulouse et Muret](/services/debouchage)."
      },
      {
        "h2": "Comment je débouche vos toilettes sans abîmer la porcelaine",
        "text": "À [Toulouse](/intervention/toulouse) (Saint-Cyprien, Carmes, Capitole, Minimes, Rangueil) comme à [Muret](/intervention/muret), j'utilise d'abord une pompe à pression/dépression professionnelle qui décolle les bouchons logés dans le siphon de la cuvette. Si l'obstruction est plus loin dans la pipe de 100 mm ou dans le coude de colonne (lingettes agglomérées, plaque de tartre, objet tombé par mégarde), je passe un furet mécanique gainé qui franchit les coudes sans rayer l'émail du WC."
      },
      {
        "h2": "Combien coûte un débouchage de WC à Toulouse ?",
        "text": "Mon devis est gratuit et je vous annonce le prix exact sur place avant de commencer. À titre indicatif : débouchage simple de WC au furet ou à la pompe à 140 € TTC. Retrouvez l'ensemble des informations tarifaires sur ma page [tarifs plombier à Muret et Toulouse](/tarifs). En cas d'inondation la nuit ou le dimanche, voyez aussi ma page [plombier urgence à Toulouse](/services/urgence-plombier-toulouse)."
      }
    ],
    "photos": [
      {
        "src": "/realisations/photo-08.jpg",
        "alt": "Débouchage et remise en service d'un WC suspendu à Muret",
        "legende": "Muret : débouchage mécanique d'un WC suspendu et contrôle d'écoulement."
      },
      {
        "src": "/realisations/photo-12.jpg",
        "alt": "Intervention sur WC suspendu noir et évacuation à Blagnac",
        "legende": "Blagnac : vérification de la pipe d'évacuation et du bâti-support."
      },
      {
        "src": "/realisations/photo-02.jpg",
        "alt": "Contrôle des évacuations sanitaires en salle de bain à Toulouse",
        "legende": "Toulouse : test d'écoulement complet des appareils sanitaires de la pièce d'eau."
      }
    ],
    "faq": [
      {
        "question": "Un bloc désodorisant ou un jouet est tombé dans la cuvette, pouvez-vous le retirer ?",
        "reponse": "Oui. Surtout ne tirez plus la chasse pour ne pas pousser l'objet plus loin dans la colonne. J'utilise un furet accrocheur ou je dépose proprement la cuvette si l'objet est coincé dans la pipe de sortie."
      },
      {
        "question": "Intervenez-vous sur les WC suspendus ?",
        "reponse": "Oui, je débouche tous les modèles de WC suspendus sans abîmer le coffrage carrelé."
      },
      {
        "question": "Puis-je vous appeler un dimanche ou le soir ?",
        "reponse": "Oui, je réponds personnellement 24h/24 et 7j/7 au 06 50 57 96 20."
      }
    ],
    "aLireAussi": [
      {
        "label": "Débouchage canalisation Toulouse & Muret",
        "to": "/services/debouchage"
      },
      {
        "label": "Plombier urgence à Toulouse",
        "to": "/services/urgence-plombier-toulouse"
      },
      {
        "label": "Tarifs plombier à Muret et Toulouse",
        "to": "/tarifs"
      }
    ],
    "ctaH2": "Une urgence ou un devis ?"
  }
]

export function getServiceBySlug(slug: string): ServiceFiche | undefined {
  return services.find((s) => s.slug === slug)
}
