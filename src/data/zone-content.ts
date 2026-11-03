// Contenu éditorial des pages de zone (/intervention/$ville).
// Chaque page a son propre angle, sa structure et son appel à l'action : ne pas dupliquer d'une commune à l'autre.
// Faits utilisables : 24h/24 7j/7, plus de 20 ans d'expérience, garantie 2 ans, devis gratuit, 4,4/5 sur 79 avis Google.

export type ZoneCta = "tel" | "form" | "rdv" | "avis"

export type ZonePhoto = {
  src: string
  alt: string
  legende: string
}

export type ZoneSection = {
  h2: string
  text?: string
  afterText?: string
  bullets?: string[]
  numbered?: boolean
  faq?: Array<{ q: string; a: string }>
  photos?: ZonePhoto[]
}

export type ZoneContent = {
  title: string
  description: string
  h1: string
  intro: string
  sections: ZoneSection[]
  cta: { label: string; kind: ZoneCta }
  /** Ligne de renvoi vers la page parente, en fin de page (texte enrichi) */
  retour?: string
  /** Si true, utilise exclusivement les sections définies dans zoneContent[slug] dans leur ordre strict */
  strictSections?: boolean
  photos?: ZonePhoto[]
}
// Texte des sections, puces et cta.label : **gras** et [ancre](/chemin) acceptés (components/RichText)

export type ZoneExtra = {
  sections: ZoneSection[]
  faq: Array<{ q: string; a: string }>
}

export const zoneContent: Record<string, ZoneContent> = {
  "toulouse": {
    "strictSections": true,
    "title": "Plombier Toulouse 24h/24 - Artisan local, devis gratuit",
    "description": "Plombier artisan à Toulouse, pas une plateforme. Dépannage urgence 24h/24 7j/7, devis gratuit validé avant travaux, garantie 2 ans. Basé à Muret, 20 ans de métier.",
    "h1": "Plombier à Toulouse : dépannage 24h/24, artisan basé à Muret",
    "intro": "Une fuite sous l'évier qui traverse le plancher, un WC bouché en plein dimanche ou un chauffe-eau à l'arrêt : quand vous cherchez un plombier à Toulouse, vous voulez parler directement à l'artisan qui viendra chez vous. Installé au 11 rue François Arago à Muret avec plus de 20 ans de métier, j'interviens 24h/24 et 7j/7 à Toulouse. Noté 4,4/5 sur 79 avis Google, je remets un devis gratuit avant travaux et mes réparations ont une garantie 2 ans : si la panne revient dans les deux ans, je reviens sans vous refacturer.",
    "sections": [
      {
        "h2": "Quel plombier appeler à Toulouse quand ça fuit ?",
        "text": "Quand l'eau coule sur le parquet ou que le voisin du dessous frappe à votre porte, le piège est d'appeler un numéro de plateforme nationale. Vous tombez sur un centre d'appels qui envoie un sous-traitant sans prix annoncé.\n\nAu 06 50 57 96 20, c'est moi qui décroche et qui me déplace. Fermez d'abord le robinet d'arrêt de votre appartement, coupez le disjoncteur si l'eau approche d'une prise et prenez deux photos.\n\nPour un [dépannage plomberie à Toulouse](/services/depannage-plomberie-toulouse) ou un [plombier urgence à Toulouse](/services/urgence-plombier-toulouse), je vous guide au téléphone pour stopper l'eau avant de prendre l'A64 depuis Muret."
      },
      {
        "h2": "Les pannes que je traite le plus à Toulouse",
        "text": "En appartement comme en maison toulousaine, quatre pannes reviennent chaque semaine :",
        "bullets": [
          "**Fuite d'eau encastrée ou apparente** : joint cédé, flexible percé ou fuite derrière un coffrage. J'assure la [recherche de fuite à Toulouse](/services/fuite-d-eau) sans casser vos murs au hasard.",
          "**WC, évier ou colonne bouchés** : l'eau remonte dans la cuvette ou le bac à douche. J'interviens pour le [débouchage de canalisation à Toulouse](/services/debouchage) au furet électrique ou à haute pression.",
          "**Panne de chauffe-eau électrique** : plus d'eau chaude, disjoncteur qui saute ou groupe de sécurité qui fuit. Je contrôle thermostat, résistance et cuve sur place (voir [chauffe-eau à Toulouse](/services/chauffe-eau)).",
          "**Panne de chauffage et chaudière gaz** : chaudière en sécurité ou radiateurs froids. Comme [plombier chauffagiste à Toulouse](/services/plombier-chauffagiste-toulouse), j'assure le dépannage et l'[entretien de chaudière à Toulouse](/services/entretien-chaudiere-toulouse)."
        ]
      },
      {
        "h2": "Cas réels traités à Toulouse",
        "text": "J'ai réalisé plus de 150 interventions au cours des trois dernières années à Toulouse. Voici quatre cas réels traités récemment :",
        "bullets": [
          "**Saint-Cyprien** : infiltration au plafond du voisin causée par une évacuation en fonte fissurée sous une baignoire. Localisation sans démolir le tablier et reprise en PVC dans la matinée.",
          "**Les Minimes** : rénovation complète d'une salle de bain avec dépose de baignoire, reprise des alimentations multicouche, pose d'un receveur extra-plat, d'une verrière et d'un meuble double vasque.",
          "**Toulouse centre-ville (Capitole / Carmes)** : remplacement en urgence d'un ballon de 200 litres percé dans un placard au 3e étage, avec groupe de sécurité neuf et réducteur de pression.",
          "**Rangueil** : dégorgement d'une colonne d'évier et de WC obstruée un samedi soir en résidence étudiante, avec compte rendu pour le propriétaire et le syndic."
        ],
        "photos": [
          {
            "src": "/realisations/photo-09.jpg",
            "alt": "Meuble double vasque et miroir LED posés dans une salle de bain à Toulouse par Nino Plomberie",
            "legende": "Rénovation de salle de bain à Toulouse : meuble double vasque et miroir LED."
          },
          {
            "src": "/realisations/photo-14.jpg",
            "alt": "Douche avec verrière et niche éclairée réalisée à Toulouse par Nino Plomberie",
            "legende": "Création de douche à l'italienne avec verrière et niche éclairée à Toulouse."
          },
          {
            "src": "/realisations/photo-02.jpg",
            "alt": "Colonne de douche thermostatique installée dans un appartement à Toulouse",
            "legende": "Pose de colonne de douche thermostatique et faïence à Toulouse."
          },
          {
            "src": "/realisations/photo-10.jpg",
            "alt": "Receveur extra-plat et paroi coulissante posés à Toulouse par Nino Plomberie",
            "legende": "Remplacement de baignoire par un receveur extra-plat à Toulouse."
          }
        ]
      },
      {
        "h2": "Pourquoi la plomberie toulousaine n'est pas celle de Muret",
        "text": "Intervenir comme plombier à Toulouse centre-ville ne ressemble pas à un dépannage en pavillon. Dans l'hypercentre (Capitole, Carmes, Saint-Étienne, Saint-Cyprien), les immeubles anciens en brique cachent des réseaux repris depuis cinquante ans : conduites en plomb ou acier, faibles pentes et colonnes montantes partagées.\n\nEn copropriété, il faut distinguer ce qui relève de votre partie privative (après votre robinet d'arrêt) des colonnes communes gérées par le syndic. Avant d'ouvrir une gaine ou de couper l'eau de l'immeuble, je repère les vannes d'isolement et je rédige un diagnostic précis pour votre assurance."
      },
      {
        "h2": "Délais d'intervention par secteur",
        "text": "Basé à Muret au pied de l'A64, j'accède directement au périphérique toulousain. Dès votre appel au 06 50 57 96 20, je vous donne mon heure d'arrivée réelle avant de partir.\n\nVoici les délais constatés par secteur : `[À CONFIRMER PAR NINO : délai moyen constaté depuis Muret vers Toulouse centre, vers l'ouest toulousain]`.\n\nLes quartiers sud et ouest proches de la rocade ([Purpan](/intervention/toulouse-purpan), [Rangueil](/intervention/toulouse-rangueil), Saint-Simon, Lardenne, Basso Cambo, Empalot) sont rejoints très vite par l'A64. Pour le centre ([Capitole](/intervention/toulouse-capitole), [Jean-Jaurès](/intervention/toulouse-jean-jaures), Carmes) et le nord ([Les Minimes](/intervention/toulouse-minimes), Borderouge, Croix-Daurade), je vous annonce un créneau tenant compte du trafic."
      },
      {
        "h2": "Combien coûte un dépannage à Toulouse ?",
        "text": "Le devis est gratuit et signé avant le premier coup de clé. Si le prix change, c'est moi qui vous appelle, pas l'inverse.\n\nVoici mes ordres de prix à Toulouse : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et fuite à Toulouse]`.\n\nConsultez la grille complète sur la page [tarifs plombier à Muret et Toulouse](/tarifs), ou la page [rénovation de salle de bain à Toulouse](/services/renovation-salle-de-bain-toulouse) pour un projet complet."
      },
      {
        "h2": "Un artisan, pas une plateforme",
        "text": "Contrairement aux plateformes qui sous-traitent votre appel contre commission, j'interviens seul sous mon nom depuis plus de 20 ans :",
        "bullets": [
          "**Un seul interlocuteur** : celui qui décroche au 06 50 57 96 20 est l'artisan qui vient réparer chez vous.",
          "**Devis gratuit avant travaux** : diagnostic expliqué et prix écrit avant toute intervention.",
          "**Garantie 2 ans pièces et main-d'œuvre** : si la panne revient dans les deux ans, je reviens sans vous refacturer.",
          "**4,4/5 sur 79 avis Google** : avis vérifiables sur la page [avis clients](/avis-clients)."
        ]
      },
      {
        "h2": "Les quartiers où j'interviens",
        "text": "J'interviens dans les 42 quartiers toulousains. Pages dédiées : [Capitole](/intervention/toulouse-capitole), [Jean-Jaurès](/intervention/toulouse-jean-jaures), [Les Minimes](/intervention/toulouse-minimes), [Purpan](/intervention/toulouse-purpan), [Rangueil](/intervention/toulouse-rangueil), ainsi que [plombier à Muret](/intervention/muret).",
        "bullets": [
          "**Centre et rive gauche** : Capitole, Les Carmes, Saint-Étienne, Saint-Michel, Jean-Jaurès, Compans-Caffarelli, Saint-Cyprien, Patte d'Oie, Les Arènes, Casselardit.",
          "**Nord** : Les Minimes, Barrière de Paris, Sept Deniers, Ponts-Jumeaux, Sesquières, Lalande, Borderouge, Croix-Daurade, Les Izards.",
          "**Est et sud-est** : Marengo, Bonnefoy, Jolimont, La Roseraie, Soupetard, Côte Pavée, Busca, Pont-des-Demoiselles, Montaudran, Rangueil, Saint-Agne, Empalot.",
          "**Ouest et sud-ouest** : Purpan, Lardenne, Saint-Martin-du-Touch, Saint-Simon, Lafourguette, Basso Cambo, Bellefontaine, Reynerie, Bagatelle, Papus, Faourette."
        ]
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Comment joindre votre plombier à Toulouse en urgence la nuit ?",
            "a": "Appelez-moi au 06 50 57 96 20 : je réponds 24h/24 et 7j/7, je vous indique comment couper l'eau et je vous donne mon délai d'arrivée."
          },
          {
            "q": "Intervenez-vous dans les copropriétés toulousaines ?",
            "a": "Oui, sur vos parties privatives comme sur les colonnes communes en lien avec le syndic, avec un rapport précis pour votre assurance."
          },
          {
            "q": "Mon voisin du dessous signale une fuite, que faire ?",
            "a": "Fermez votre arrivée d'eau, prévenez votre voisin et appelez-moi pour localiser la fuite sans casser au hasard. Le constat amiable s'envoie sous 5 jours ouvrés."
          },
          {
            "q": "Le devis est-il annoncé avant le dépannage ?",
            "a": "Oui. Je pose le diagnostic sur place et vous signez un devis gratuit avant le début des travaux."
          }
        ]
      },
      {
        "h2": "Une urgence à Toulouse ?",
        "text": "Une fuite, un WC bouché ou un chauffe-eau en panne ? Appelez-moi au 06 50 57 96 20 ou demandez votre devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi directement au 06 50 57 96 20 ou demandez votre devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "muret": {
    "strictSections": true,
    "title": "Plombier Muret - Dépannage 24h/24, artisan local | Nino",
    "description": "Plombier à Muret depuis plus de 20 ans. Dépannage urgence 24h/24, devis gratuit avant travaux, garantie 2 ans. Appelez le 06 50 57 96 20.",
    "h1": "Plombier à Muret : dépannage 24h/24, artisan depuis 20 ans",
    "intro": "Vous cherchez un plombier à Muret qui habite et travaille réellement dans votre commune ? Mon entreprise, Nino Plomberie, est installée au 11 rue François Arago à Muret (31600) depuis plus de 20 ans. Quand vous composez le 06 50 57 96 20, de jour comme de nuit 24h/24 et 7j/7, vous ne tombez pas sur un standard téléphonique : c'est moi qui décroche et qui me déplace chez vous. Noté 4,4/5 sur 79 avis Google, j'établis toujours un devis gratuit validé avant travaux et si la panne revient dans les 2 ans, je reviens sans vous refacturer.",
    "sections": [
      {
        "h2": "Votre plombier est à Muret, pas à l'autre bout de Toulouse",
        "text": "Faire venir un dépanneur depuis le nord de l'agglomération toulousaine quand un tuyau fuit à Muret, c'est attendre dans les bouchons de l'A64 ou de la RD820 pendant que l'eau abîme vos sols. Établi au 11 rue François Arago, je suis déjà sur place dans le 31600.\n\nCette proximité change tout : pas de long trajet à facturer, une arrivée rapide en cas de dégât des eaux, et un artisan que vous pouvez recontacter facilement le lendemain ou l'année suivante. En 20 ans de métier à Muret, je connais l'histoire des réseaux d'eau de nos quartiers, du centre ancien jusqu'aux lotissements récents."
      },
      {
        "h2": "Les pannes que je vois le plus à Muret",
        "text": "D'une rue à l'autre de Muret, les appels d'urgence et d'entretien portent sur quatre grands types de problèmes que je règle au quotidien comme plombier 31600 et chauffagiste à Muret :",
        "bullets": [
          "**Fuite d'eau sur arrivée, robinetterie ou canalisation** : raccord qui cède sous un évier, vanne d'arrêt grippée par le calcaire, tuyau percé dans un garage ou infiltration sous carrelage. J'assure la [recherche de fuite d'eau](/services/fuite-d-eau) sans casse inutile.",
          "**Débouchage WC Muret et débouchage canalisation Muret** : toilettes qui débordent, évier de cuisine engorgé par les graisses ou regard extérieur bloqué dans le jardin. J'interviens avec l'outillage mécanique et haute pression adapté (voir [débouchage canalisation](/services/debouchage)).",
          "**Panne de chauffe-eau et cumulus entartré** : ballon qui ne produit plus d'eau chaude, résistance en court-circuit ou groupe de sécurité qui fuit en continu. Je répare ou remplace votre équipement dans la journée (voir [chauffe-eau et cumulus](/services/chauffe-eau)).",
          "**Dépannage et entretien de chaudière** : en tant que [chauffagiste à Muret](/services/chauffage-chaudiere), j'assure l'entretien annuel obligatoire de votre chaudière gaz, la purge des radiateurs, le désembouage et la réparation des pannes de chauffage en plein hiver."
        ]
      },
      {
        "h2": "Mes chantiers à Muret",
        "text": "Travailler à Muret depuis plus de vingt ans m'amène à intervenir sur des bâtis très différents. Autour de la rue François Arago et dans le vieux centre près de la Garonne et du parc Jean Jaurès, les maisons de ville anciennes ont souvent des canalisations reprises à plusieurs époques, des caves humides et des évacuations à faible pente qui demandent un vrai savoir-faire.\n\nDans les lotissements pavillonnaires (Ox, Estantens, Joffrery, Maïmat, Brioudes), j'interviens beaucoup pour le remplacement de chauffe-eau, la pose de réducteurs de pression, la création de cuisine et la [rénovation de salle de bain](/services/renovation-salle-de-bain). Enfin, dans le secteur de la gare et les résidences collectives, je traite les fuites en étage et les colonnes partagées avec réactivité pour protéger les appartements voisins.",
        "photos": [
          {
            "src": "/realisations/photo-01.jpg",
            "alt": "Baignoire et robinetterie noire mat posées lors d'un chantier à Muret par Nino Plomberie",
            "legende": "Chantier réalisé à Muret : pose de baignoire et robinetterie noire mat (garantie 2 ans)."
          },
          {
            "src": "/realisations/photo-08.jpg",
            "alt": "Baignoire d'angle et WC suspendu installés dans une maison à Muret",
            "legende": "Rénovation complète à Muret : baignoire d'angle, bâti-support et WC suspendu."
          },
          {
            "src": "/realisations/photo-03.jpg",
            "alt": "Meuble vasque et mitigeur posés à Muret par votre artisan plombier rue François Arago",
            "legende": "Installation d'un meuble vasque, miroir et mitigeur dans un logement à Muret."
          }
        ]
      },
      {
        "h2": "Un diagnostic avant une réparation",
        "text": "Qu'il s'agisse d'un joint usé, d'une canalisation bouchée ou d'un ballon vieillissant, un diagnostic clair vous épargne une réparation inutile. À Muret, je commence toujours par poser les bonnes questions et par contrôler l'installation : depuis quand le symptôme est-il apparu ? la pression du réseau est-elle trop haute ? la pièce peut-elle être détartrée ou remplacée seule ?\n\nCette méthode vous évite de changer un chauffe-eau entier quand seul le thermostat ou le groupe de sécurité est en cause, ou de casser un mur quand la fuite vient d'un joint de raccordement derrière un mitigeur. Une fois la cause identifiée, je vous explique les options en français simple et je vous remets un devis gratuit avant de sortir les outils."
      },
      {
        "h2": "Combien coûte une intervention à Muret ?",
        "text": "Le devis est gratuit et signé avant le premier coup de clé. Vous savez exactement ce que vous payez avant que je ne commence les travaux, sans frais cachés.\n\nVoici les repères tarifaires à Muret : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et entretien chaudière à Muret]`.\n\nRetrouvez l'ensemble des informations sur la page [tarifs plombier à Muret et Toulouse](/tarifs). Pour une salle de bain complète, je prends en charge toute la plomberie et je coordonne les finitions avec un second professionnel : vous gardez un seul interlocuteur et un seul devis gratuit."
      },
      {
        "h2": "Les communes voisines où j'interviens",
        "text": "Depuis mon atelier du 11 rue François Arago à Muret, je rayonne en quelques minutes dans toutes les communes voisines du Muretain ainsi que comme [plombier à Toulouse](/intervention/toulouse). Vous pouvez consulter la page dédiée au [plombier dans le Muretain](/zones/muretain) ou les pages des communes limitrophes :",
        "bullets": [
          "**Au sud et à l'ouest immédiat** : [plombier à Saint-Hilaire](/intervention/saint-hilaire), [plombier au Fauga](/intervention/le-fauga), [plombier à Labastidette](/intervention/labastidette), [plombier à Lherm](/intervention/lherm) et [plombier à Lamasquère](/intervention/lamasquere).",
          "**À l'est et au nord de Muret** : [plombier à Eaunes](/intervention/eaunes), [plombier à Saubens](/intervention/saubens), [plombier à Seysses](/intervention/seysses), [plombier à Roques](/intervention/roques) et [plombier à Villate](/intervention/villate)."
        ]
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Quel est votre délai d'intervention en urgence à Muret ?",
            "a": "Comme je suis installé au 11 rue François Arago à Muret même, j'interviens généralement dans l'heure qui suit, rarement plus de 2 heures selon le chantier en cours. Je vous confirme toujours l'heure exacte dès votre appel au 06 50 57 96 20."
          },
          {
            "q": "Êtes-vous vraiment disponible la nuit, le dimanche et les jours fériés à Muret ?",
            "a": "Oui, 24h/24 et 7j/7 toute l'année. Une canalisation qui lâche un dimanche soir ou une panne de chauffage en plein hiver à Muret est traitée immédiatement en m'appelant directement."
          },
          {
            "q": "Assurez-vous aussi le chauffage et l'entretien de chaudière à Muret ?",
            "a": "Oui, je suis artisan plombier-chauffagiste. J'effectue l'entretien annuel obligatoire de votre chaudière gaz, le dépannage de chauffage, la purge et le remplacement de radiateurs à Muret."
          },
          {
            "q": "Comment fonctionne votre garantie de 2 ans ?",
            "a": "Toutes mes réparations et poses sont garanties 2 ans pièces et main-d'œuvre : si le problème réapparaît dans les deux ans sur l'élément traité, je reviens chez vous à Muret sans vous refacturer."
          }
        ]
      },
      {
        "h2": "Une urgence à Muret ?",
        "text": "Une fuite d'eau, un WC bouché, un chauffe-eau ou une chaudière en panne à Muret ? Je suis à deux pas, au 11 rue François Arago : appelez-moi directement ou demandez votre devis gratuit en ligne."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "saubens": {
    "title": "Plombier Saubens (31600) : intervention rapide 24h/24",
    "description": "Une fuite à Saubens ? Nino Plomberie, installé à Muret, vient vous dépanner à toute heure. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Fuite ou panne à Saubens : un plombier à deux pas, à toute heure",
    "intro": "Saubens, village au bord de la Garonne, se trouve entre Muret et Toulouse, sur l'axe de la RD820. Pour une urgence, la proximité de Muret fait gagner un temps précieux.",
    "sections": [
      {
        "h2": "Urgence plomberie à Saubens : que faire en attendant ?",
        "numbered": true,
        "bullets": [
          "Fermez l'arrivée d'eau générale.",
          "Coupez le courant si l'eau touche des prises.",
          "Appelez-nous, nous vous guidons."
        ]
      },
      {
        "h2": "Maisons individuelles : les pannes les plus courantes",
        "text": "Chauffe-eau qui fuit, WC qui se bouche, robinets qui gouttent : autant de dépannages que Nino traite sur place, avec devis gratuit."
      }
    ],
    "cta": {
      "label": "Urgence ? Un seul geste : le 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "seysses": {
    "strictSections": true,
    "title": "Plombier Seysses - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Seysses : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Seysses : dépannage 24h/24 par un artisan de Muret",
    "intro": "Vous habitez à Seysses (31600) et vous faites face à une fuite d'eau, un WC bouché ou un chauffe-eau en panne ? Installé dans la commune voisine de Muret au 11 rue François Arago depuis plus de 20 ans, j'interviens 24h/24 et 7j/7 comme plombier à Seysses. Noté 4,4/5 sur 79 avis Google, je vous réponds personnellement au 06 50 57 96 20, j'annonce un devis gratuit avant travaux et j'applique une garantie de 2 ans pièces et main-d'œuvre sur toutes mes réparations.",
    "sections": [
      {
        "h2": "Un plombier à Seysses en combien de temps ?",
        "text": "Seysses est directement limitrophe de Muret au nord-ouest : quelques minutes de route par la D12 ou par la sortie 34 de l'A64 séparent mon atelier de votre commune. Pour un dépannage plomberie à Seysses, vous n'attendez pas un dépanneur bloqué sur le périphérique toulousain.\n\nVoici le délai constaté depuis mon atelier : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Seysses]`. Dès votre appel au 06 50 57 96 20, je vous confirme mon heure d'arrivée."
      },
      {
        "h2": "Les pannes les plus fréquentes à Seysses",
        "text": "J'interviens à Seysses aussi bien pour les urgences de plomberie que pour l'entretien et les travaux planifiés :",
        "bullets": [
          "**Fuite d'eau sur tuyauterie ou robinetterie** : flexible de douche ou d'évier rompu, raccord PER ou cuivre fuyard, vanne d'arrêt bloquée (voir [recherche de fuite](/services/fuite-d-eau)).",
          "**Panne et remplacement de chauffe-eau** : ballon d'eau chaude qui ne chauffe plus, bruit de calcaire dans la cuve ou groupe de sécurité qui fuit (voir [chauffe-eau et cumulus](/services/chauffe-eau)).",
          "**Débouchage de WC, évier et canalisation** : dégorgement mécanique propre sans acide dangereux pour vos joints.",
          "**Rénovation de salle de bain et raccordements** : création de douche à l'italienne, pose de cuisine et entretien de chaudière gaz."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Seysses",
        "text": "Seysses a connu une forte croissance résidentielle ces vingt dernières années autour de son cœur de village ancien proche de l'église Saint-Blaise, de la mairie et du parc du Boulodrome. Dans les lotissements pavillonnaires récents et des années 2000 (secteurs de la Gayonne, de Saint-Desiré, du chemin de Couloume, des Moulières ou de la route de Frouzins), les réseaux sont majoritairement réalisés en PER ou en multicouche sur collecteurs : les pannes que j'y traite concernent surtout les ballons d'eau chaude électriques de 200 litres qui atteignent leurs dix à douze ans, les réducteurs de pression entartrés dans le garage et les mécanismes de chasse d'eau économiques qui restent bloqués.\n\nDans les maisons plus anciennes du centre bourg et le long de la route de Muret, je rencontre plutôt des conduites en cuivre soudé, des robinets d'arrêt grippés et des salles de bain d'origine que les propriétaires souhaitent rénover avec un receveur extra-plat.",
        "photos": [
          {
            "src": "/realisations/photo-05.jpg",
            "alt": "Pose de cuisine et plomberie réalisée dans le secteur Muret et Seysses par Nino Plomberie",
            "legende": "Installation complète de plomberie de cuisine et raccordements dans le secteur Muret / Seysses."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Seysses ?",
        "text": "Vous connaissez toujours le prix avant le début de l'intervention grâce à un devis gratuit établi sur place. Si la panne revient dans les deux ans sur l'élément réparé, je reviens sans vous refacturer.\n\nVoici les repères tarifaires à Seysses : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et remplacement chauffe-eau à Seysses]`.\n\nConsultez la page [tarifs plombier à Muret et Toulouse](/tarifs), ainsi que ma page [plombier à Muret](/intervention/muret)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Mon chauffe-eau a plus de dix ans à Seysses, vaut-il mieux le réparer ou le remplacer ?",
            "a": "Si seul le thermostat ou le groupe de sécurité est en cause et que la cuve est saine, je répare la pièce. Si la cuve est percée par la rouille, il faut remplacer le ballon : je vous chiffre clairement la solution adaptée."
          },
          {
            "q": "Intervenez-vous à Seysses pour de petites réparations comme un robinet ou un lave-linge ?",
            "a": "Oui, bien sûr : remplacement de mitigeur, de siphon, de mécanisme de WC ou création d'une arrivée et évacuation pour lave-linge et lave-vaisselle, toujours avec devis gratuit."
          },
          {
            "q": "Êtes-vous joignable la nuit et le dimanche à Seysses ?",
            "a": "Oui, 24h/24 et 7j/7 au 06 50 57 96 20. Comme je suis basé juste à côté à Muret, le déplacement est très rapide."
          }
        ]
      },
      {
        "h2": "Une urgence à Seysses ?",
        "text": "Une fuite d'eau, un chauffe-eau en panne ou un WC bouché à Seysses ? Je suis votre voisin à Muret : appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "villate": {
    "title": "Plombier Villate : artisan de Muret, 24h/24",
    "description": "Plombier à Villate : Nino Plomberie vient de Muret, tout proche, pour fuite, débouchage ou chauffe-eau. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Villate : l'artisan de Muret au bout du fil",
    "intro": "Dans une petite commune résidentielle comme Villate, on connaît ses artisans. Nino Plomberie, voisin à Muret, vous répond directement, sans standard ni plateforme.",
    "sections": [
      {
        "h2": "Un plombier voisin plutôt qu'un numéro d'appel national",
        "text": "Les plateformes de dépannage envoient un sous-traitant que vous ne reverrez pas. Ici, c'est la même personne du devis à la réparation, et la garantie de 2 ans s'applique à elle."
      },
      {
        "h2": "Dépannages fréquents chez les particuliers",
        "bullets": [
          "Fuite sur une arrivée d'eau",
          "WC ou évier bouché",
          "Ballon d'eau chaude en panne"
        ]
      }
    ],
    "cta": {
      "label": "Un appel suffit : 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "eaunes": {
    "strictSections": true,
    "title": "Plombier Eaunes - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Eaunes : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Eaunes : dépannage 24h/24 par un artisan de Muret",
    "intro": "Une fuite d'eau sous un évier, un WC bouché ou plus d'eau chaude un soir de semaine ? Si vous cherchez un plombier à Eaunes (31600), mon atelier est situé juste à côté, au 11 rue François Arago à Muret. Artisan indépendant depuis plus de 20 ans et noté 4,4/5 sur 79 avis Google, je vous réponds en direct au 06 50 57 96 20, 24h/24 et 7j/7. Vous obtenez un devis gratuit signé avant travaux et mes réparations sont couvertes par une garantie de 2 ans pièces et main-d'œuvre.",
    "sections": [
      {
        "h2": "Un plombier à Eaunes en combien de temps ?",
        "text": "Eaunes touche directement Muret à l'est, de l'autre côté de la Garonne par la D4 ou la D19. Pour un dépannage plomberie à Eaunes, je n'ai que quelques kilomètres à parcourir depuis la rue François Arago, sans traverser l'agglomération toulousaine.\n\nVoici le délai constaté pour arriver chez vous : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Eaunes]`. Dès votre appel au 06 50 57 96 20, je vous indique mon heure d'arrivée exacte et les gestes immédiats pour couper votre arrivée d'eau."
      },
      {
        "h2": "Les pannes les plus fréquentes à Eaunes",
        "text": "Dans les maisons individuelles d'Eaunes, j'interviens aussi bien en urgence que sur rendez-vous pour les pannes suivantes :",
        "bullets": [
          "**Fuite d'eau sur raccord, vanne ou canalisation** : flexible percé, joint de robinetterie usé, vanne d'arrêt grippée ou fuite enterrée après compteur (voir [recherche de fuite](/services/fuite-d-eau)).",
          "**Panne ou remplacement de chauffe-eau** : ballon électrique entartré, groupe de sécurité qui coule en continu ou résistance grillée (voir [chauffe-eau et cumulus](/services/chauffe-eau)).",
          "**Débouchage de WC, douche et évier** : dégorgement rapide d'évacuations lentes ou totalement bouchées sans produit corrosif.",
          "**Chaudière, chauffage et rénovation de salle de bain** : entretien de chaudière gaz, remplacement de radiateurs et création de douche à l'italienne."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Eaunes",
        "text": "Eaunes est une commune essentiellement pavillonnaire, structurée autour du bourg ancien et de l'abbaye cistercienne, des coteaux boisés de la forêt d'Eaunes et des nombreux lotissements construits entre les années 1980 et 2010 (secteurs du Pitou, des Coteaux, de la route de Lagardelle, de la route de Muret ou du chemin de la Plaine). Dans ces maisons individuelles de plain-pied ou à étage, le chauffe-eau électrique de 200 ou 300 litres est très souvent installé au garage ou dans la buanderie non chauffée : avec le calcaire et les écarts de température l'hiver, le groupe de sécurité et le joint de bride finissent par suinter.\n\nJe constate aussi régulièrement une pression d'eau élevée en pied de coteau qui fatigue les cartouches de mitigeurs et les électrovannes de lave-linge, ainsi que des robinets de puisage extérieurs fissurés par le gel au printemps. Un contrôle au manomètre et la pose d'un réducteur de pression bien réglé à l'entrée du réseau règlent durablement le problème.",
        "photos": [
          {
            "src": "/realisations/photo-03.jpg",
            "alt": "Meuble vasque et mitigeur installés près d'Eaunes et Muret par Nino Plomberie",
            "legende": "Installation sanitaire dans le secteur Muret / Eaunes : meuble vasque, miroir et mitigeur."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Eaunes ?",
        "text": "Avant de commencer la moindre réparation, j'effectue le diagnostic et je vous présente un devis gratuit écrit. Si la panne revient dans les deux ans sur la pièce réparée, je reviens sans vous refacturer.\n\nVoici les repères tarifaires à Eaunes : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et dépannage à Eaunes]`.\n\nConsultez la grille complète sur la page [tarifs plombier à Muret et Toulouse](/tarifs), ainsi que ma page voisine [plombier à Muret](/intervention/muret)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "À quelle distance d'Eaunes êtes-vous installé ?",
            "a": "Mon atelier est situé au 11 rue François Arago à Muret, commune limitrophe d'Eaunes. C'est moi qui décroche au 06 50 57 96 20 et qui me déplace directement chez vous."
          },
          {
            "q": "Mon chauffe-eau goutte dans mon garage à Eaunes, faut-il tout remplacer ?",
            "a": "Pas forcément. Un écoulement continu vient souvent du groupe de sécurité entartré ou d'une pression réseau trop forte. Je vérifie l'état de la cuve avant de vous proposer la réparation la plus simple."
          },
          {
            "q": "Intervenez-vous la nuit et le dimanche à Eaunes ?",
            "a": "Oui, 24h/24 et 7j/7 toute l'année, y compris les jours fériés, pour toute fuite d'eau, panne de chauffage ou WC bouché à Eaunes."
          }
        ]
      },
      {
        "h2": "Une urgence à Eaunes ?",
        "text": "Une fuite d'eau, un chauffe-eau en panne ou un WC bouché à Eaunes ? Je suis juste à côté à Muret : appelez-moi directement au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "pins-justaret": {
    "title": "Plombier chauffagiste Pins-Justaret | Nino Plomberie",
    "description": "Plomberie et chauffage à Pins-Justaret : diagnostic précis, chauffe-eau, chaudière, salle de bain. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Pins-Justaret : plomberie et chauffage entre les mains d'un même artisan",
    "intro": "Commune résidentielle au bord de la Garonne, Pins-Justaret réunit maisons récentes et habitat plus ancien. Un seul artisan peut donc traiter l'eau et le chauffage, ce qui évite les allers-retours entre corps de métier.",
    "sections": [
      {
        "h2": "Chauffe-eau et chaudière : entretien et remplacement",
        "bullets": [
          "Diagnostic : cause réelle de la panne avant de remplacer une pièce",
          "Remplacement : conseil sur la capacité adaptée au foyer",
          "Chaudière : dépannage et remplacement"
        ]
      },
      {
        "h2": "Salle de bain : plomberie soignée, finitions coordonnées",
        "text": "Nino pilote la plomberie et travaille avec un second professionnel pour les finitions. Vous gardez un seul point de contact."
      }
    ],
    "cta": {
      "label": "Demandez un diagnostic gratuit via le formulaire, photo à l'appui.",
      "kind": "form"
    }
  },
  "roquettes": {
    "title": "Plombier Roquettes : dépannage de nuit et week-end",
    "description": "Fuite ou panne à Roquettes, même la nuit : Nino Plomberie répond 24h/24, 7j/7. Devis gratuit, travaux garantis 2 ans. 06 50 57 96 20.",
    "h1": "Une fuite à Roquettes à 23 h ? Quelqu'un décroche",
    "intro": "Les pannes n'attendent pas les heures de bureau. À Roquettes, comme ailleurs autour de Muret, Nino Plomberie répond au 06 50 57 96 20 de jour comme de nuit, week-ends et jours fériés compris.",
    "sections": [
      {
        "h2": "Les bons réflexes avant l'arrivée du plombier",
        "text": "Fermez l'eau au compteur, coupez l'électricité si besoin, épongez et photographiez les dégâts pour votre assurance."
      },
      {
        "h2": "Après la réparation",
        "text": "Un diagnostic clair, un prix annoncé, une garantie de 2 ans."
      }
    ],
    "cta": {
      "label": "Bloqué avec de l'eau partout ? Appelez maintenant : 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "saint-hilaire": {
    "title": "Plombier Saint-Hilaire (31) : 4,4/5 sur Google",
    "description": "Plombier à Saint-Hilaire : Nino Plomberie, 4,4/5 sur 79 avis Google, plus de 20 ans d'expérience. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Saint-Hilaire : choisir un plombier dont les clients parlent bien",
    "intro": "Dans les communes autour de Muret, le choix d'un artisan passe beaucoup par les recommandations. Nino Plomberie est noté 4,4/5 sur 79 avis Google, et compte plus de 20 ans d'expérience.",
    "sections": [
      {
        "h2": "Ce que disent les clients",
        "text": "Vous pouvez consulter les avis publiés sur la fiche Google avant de nous appeler."
      },
      {
        "h2": "Ce que vous obtenez à chaque intervention",
        "bullets": [
          "Diagnostic expliqué simplement",
          "Devis gratuit, prix annoncé à l'avance",
          "Réparations garanties 2 ans"
        ]
      }
    ],
    "cta": {
      "label": "Lisez les avis sur Google, puis appelez le 06 50 57 96 20.",
      "kind": "avis"
    }
  },
  "labarthe-sur-leze": {
    "title": "Plombier Labarthe-sur-Lèze : devis gratuit, 24h/24",
    "description": "Plomberie à Labarthe-sur-Lèze : dépannage, chauffe-eau, salle de bain. Nino Plomberie, artisan de Muret, devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Labarthe-sur-Lèze : vos travaux de plomberie, sans courir après les devis",
    "intro": "Entre la Lèze et l'axe de la RD820, Labarthe-sur-Lèze compte de nombreux pavillons dont les installations vieillissent. Les gros travaux se préparent mieux qu'ils ne se subissent.",
    "sections": [
      {
        "h2": "Ce qu'un seul artisan prend en charge",
        "text": "Du remplacement d'un robinet à la rénovation de salle de bain, vous traitez avec le même interlocuteur."
      },
      {
        "h2": "Dépannage urgent, sans changer d'interlocuteur",
        "text": "Le jour où une fuite survient, vous connaissez déjà Nino : 24h/24, 7j/7."
      }
    ],
    "cta": {
      "label": "Envoyez-nous votre projet, nous vous répondons avec un devis gratuit.",
      "kind": "form"
    }
  },
  "frouzins": {
    "strictSections": true,
    "title": "Plombier Frouzins - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Frouzins : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Frouzins : dépannage 24h/24 par un artisan de Muret",
    "intro": "Une fuite sur une arrivée d'eau, un WC bouché ou une chaudière qui ne démarre plus ? Si vous cherchez un plombier à Frouzins (31270), j'interviens 24h/24 et 7j/7 depuis mon atelier voisin de Muret. Artisan indépendant avec plus de 20 ans de métier et une note de 4,4/5 sur 79 avis Google, je vous réponds directement au 06 50 57 96 20 sans centre d'appels. Vous bénéficiez d'un devis gratuit signé avant travaux et d'une garantie 2 ans pièces et main-d'œuvre.",
    "sections": [
      {
        "h2": "Un plombier à Frouzins en combien de temps ?",
        "text": "Située juste au nord de Seysses et de Muret le long du canal de Saint-Martory, Frouzins se rejoint en quelques minutes depuis mon atelier de la rue François Arago par la D12 ou la D70. Pour un dépannage plomberie à Frouzins, la route est directe.\n\nVoici le délai constaté pour arriver chez vous : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Frouzins]`. Dès votre appel au 06 50 57 96 20, je vous indique mon heure d'arrivée et comment fermer votre vanne d'arrêt générale sans la forcer."
      },
      {
        "h2": "Les pannes les plus fréquentes à Frouzins",
        "text": "Dans les pavillons et petites résidences de Frouzins, je traite au quotidien :",
        "bullets": [
          "**Fuite d'eau et vanne d'arrêt grippée** : réparation de fuite sous évier, remplacement de robinet d'arrêt général bloqué par le calcaire ou recherche de fuite (voir [recherche de fuite](/services/fuite-d-eau)).",
          "**Débouchage de WC et de canalisations** : dégorgement rapide d'évier, de douche ou de toilettes bouchées (voir [débouchage canalisation](/services/debouchage)).",
          "**Panne de chauffe-eau et cumulus** : dépannage de thermostat, changement de groupe de sécurité ou remplacement complet du ballon.",
          "**Chauffage, désembouage et salle de bain** : entretien de chaudière gaz, désembouage de circuit de radiateurs et rénovation de salle d'eau."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Frouzins",
        "text": "À Frouzins, entre le centre historique autour de la rue de la République et de l'église Saint-Germier, les abords du lac de Bordeneuve, le château des Demoiselles et les quartiers pavillonnaires des Taurens, de Mailheaux, du Courbet, des Prés ou de la route de Plaisance, l'habitat individuel domine largement. Dans les lotissements construits entre les années 1980 et 2005, je constate très souvent deux problèmes précis : d'une part, des robinets d'arrêt généraux placés dans le garage ou le regard qui n'ont pas été manœuvrés depuis dix ans et qui fuient ou cassent quand on veut couper l'eau en urgence ; d'autre part, des circuits de chauffage central emboués où les radiateurs chauffent en haut mais restent tièdes en bas.\n\nDans les petites résidences plus récentes vers Villeneuve-Tolosane et Seysses, les interventions portent surtout sur les mécanismes de chasse d'eau, les flexibles d'alimentation et l'entretien annuel des chaudières murales gaz.",
        "photos": [
          {
            "src": "/realisations/photo-11.jpg",
            "alt": "Radiateur sèche-serviettes et plomberie posés près de Frouzins par Nino Plomberie",
            "legende": "Installation de radiateur sèche-serviettes et reprise de plomberie par Nino Plomberie."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Frouzins ?",
        "text": "Je vous remets toujours un devis gratuit écrit avant de commencer les travaux. Pas de mauvaise surprise : le tarif est validé ensemble, et si la panne revient dans les deux ans, je reviens sans vous refacturer.\n\nVoici les repères tarifaires à Frouzins : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et dépannage à Frouzins]`.\n\nConsultez la page [tarifs plombier à Muret et Toulouse](/tarifs) ainsi que mes pages [plombier à Muret](/intervention/muret) et [plombier à Toulouse](/intervention/toulouse)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Mon robinet d'arrêt général est bloqué à Frouzins, comment couper l'eau ?",
            "a": "Ne forcez surtout pas avec une pince au risque de casser l'axe et de provoquer une inondation. Fermez directement la vanne avant ou après compteur dans le regard extérieur, puis appelez-moi au 06 50 57 96 20 pour remplacer le robinet d'arrêt par une vanne quart de tour neuve."
          },
          {
            "q": "Intervenez-vous le soir et le week-end à Frouzins ?",
            "a": "Oui, je suis joignable 24h/24 et 7j/7 au 06 50 57 96 20 et je me déplace depuis Muret, à quelques kilomètres seulement de Frouzins."
          },
          {
            "q": "Mes radiateurs chauffent mal en bas à Frouzins, que faire ?",
            "a": "Si une simple purge d'air ne suffit pas, c'est que des boues métalliques freinent la circulation d'eau au fond des radiateurs. Je réalise un diagnostic du circuit et, si nécessaire, un désembouage complet."
          }
        ]
      },
      {
        "h2": "Une urgence à Frouzins ?",
        "text": "Une fuite d'eau, un WC bouché ou un chauffe-eau en panne à Frouzins ? Appelez-moi directement au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "labastidette": {
    "title": "Plombier Labastidette : artisan de proximité, devis gratuit",
    "description": "À Labastidette, faites appel à Nino Plomberie : artisan de Muret, plus de 20 ans d'expérience, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Labastidette : un artisan du Muretain pour vos soucis de plomberie",
    "intro": "Dans un village comme Labastidette, au bord de la Garonne, on préfère un artisan qui connaît le territoire plutôt qu'une plateforme d'appels.",
    "sections": [
      {
        "h2": "Qui répond quand vous appelez ?",
        "text": "L'artisan lui-même, installé à Muret, sans centre d'appels intermédiaire."
      },
      {
        "h2": "Les interventions les plus demandées",
        "bullets": [
          "Robinetterie et sanitaires",
          "Chauffe-eau et ballon",
          "Débouchage"
        ]
      }
    ],
    "cta": {
      "label": "Un doute avant de vous décider ? Décrivez votre problème via le formulaire, photo à l'appui.",
      "kind": "form"
    }
  },
  "lamasquere": {
    "title": "Plombier Lamasquère : diagnostic précis et garantie 2 ans",
    "description": "Plombier à Lamasquère : diagnostic clair, chauffe-eau, chauffage, salle de bain. Nino Plomberie, devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Lamasquère : comprendre la panne avant de remplacer la pièce",
    "intro": "Entre pavillons récents et maisons plus anciennes, les installations de Lamasquère ne vieillissent pas toutes de la même façon. Un bon diagnostic évite de changer ce qui fonctionne.",
    "sections": [
      {
        "h2": "Chauffe-eau, chauffage : savoir quand réparer, savoir quand remplacer",
        "text": "Nino explique les options et vous laisse décider avec un devis gratuit."
      },
      {
        "h2": "Rénover une salle de bain",
        "text": "La plomberie est traitée par Nino ; les finitions sont confiées à un second professionnel."
      }
    ],
    "cta": {
      "label": "Demandez un diagnostic via le formulaire.",
      "kind": "form"
    }
  },
  "le-fauga": {
    "title": "Plombier Le Fauga : dépannage week-end et nuit",
    "description": "Le Fauga : fuite ou panne le week-end ? Nino Plomberie répond 24h/24, 7j/7, jours fériés compris. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Le Fauga : même le dimanche, un plombier répond",
    "intro": "Située près de l'A64, la commune du Fauga est facile d'accès depuis Muret. Pas d'attente de lundi pour une fuite découverte le dimanche.",
    "sections": [
      {
        "h2": "Pourquoi les pannes arrivent le week-end",
        "text": "Chauffage lancé, douche prolongée, machine à laver : la pression sur l'installation grimpe en dehors de la semaine."
      },
      {
        "h2": "Que faire en attendant",
        "text": "Fermer l'arrivée d'eau, couper l'électricité si nécessaire, appeler."
      }
    ],
    "cta": {
      "label": "Dimanche, minuit ou jour férié : 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "lavernose-lacasse": {
    "title": "Plombier Lavernose-Lacasse : artisan de Muret",
    "description": "Lavernose-Lacasse : plomberie, chauffe-eau, salle de bain par Nino Plomberie, artisan de Muret. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Lavernose-Lacasse : l'artisan de Muret se déplace jusqu'à chez vous",
    "intro": "Lavernose-Lacasse, au bord de la Garonne, est un peu plus à l'écart que les communes de la première couronne. Nino Plomberie s'y déplace malgré tout, pour des urgences comme pour des projets planifiés.",
    "sections": [
      {
        "h2": "Ce qui est inclus dans un devis gratuit",
        "text": "Le diagnostic, une proposition claire et un prix annoncé avant le début des travaux."
      },
      {
        "h2": "Une garantie qui compte",
        "text": "Réparations garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Prenez rendez-vous en ligne, première visite gratuite.",
      "kind": "rdv"
    }
  },
  "saint-clar-de-riviere": {
    "title": "Plombier Saint-Clar-de-Rivière : artisan, devis gratuit",
    "description": "Saint-Clar-de-Rivière : Nino Plomberie, artisan de Muret, répond à vos pannes de plomberie. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Saint-Clar-de-Rivière : un artisan qui se déplace jusqu'au village",
    "intro": "Dans une commune rurale, on trouve moins facilement un plombier disponible. Nino Plomberie, installé à Muret, couvre le secteur pour vos dépannages comme pour vos travaux.",
    "sections": [
      {
        "h2": "Maisons individuelles et corps de ferme rénovés",
        "text": "Les installations anciennes ont leurs particularités : ballons d'eau chaude surdimensionnés, évacuations irrégulières, arrivées d'eau vieillissantes. Un diagnostic précis évite les mauvaises surprises."
      },
      {
        "h2": "Un devis clair, une garantie de 2 ans",
        "text": "Vous savez ce que vous payez avant que le chantier ne commence."
      }
    ],
    "cta": {
      "label": "Décrivez votre problème via le formulaire, photo à l'appui.",
      "kind": "form"
    }
  },
  "lherm": {
    "title": "Plombier Lherm (31600) : chauffe-eau, fuite, débouchage",
    "description": "Plombier à Lherm : Nino Plomberie traite fuite, chauffe-eau, débouchage et rénovation. Plus de 20 ans d'expérience, devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Lherm : plomberie et chauffage, de la panne au projet de rénovation",
    "intro": "Lherm bénéficie d'un accès direct à l'A64, ce qui rend le trajet depuis Muret simple pour un artisan. Pavillons récents et maisons plus anciennes y cohabitent.",
    "sections": [
      {
        "h2": "Dépannage : ce qui est traité sur place",
        "bullets": [
          "Fuite sur arrivée d'eau ou siphon",
          "Ballon d'eau chaude qui ne chauffe plus",
          "Évacuation bouchée"
        ]
      },
      {
        "h2": "Rénover plutôt que rafistoler",
        "text": "Quand une installation date, un devis de remplacement peut coûter moins cher à long terme que des réparations répétées. Nino vous donne les deux options."
      }
    ],
    "cta": {
      "label": "Demandez un diagnostic, première visite gratuite.",
      "kind": "rdv"
    }
  },
  "beaumont-sur-leze": {
    "title": "Plombier Beaumont-sur-Lèze : intervention 24h/24",
    "description": "À Beaumont-sur-Lèze, Nino Plomberie intervient pour vos urgences et travaux. Artisan de Muret, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Beaumont-sur-Lèze : un plombier qui répond, même un soir de week-end",
    "intro": "Au bord de la Lèze, Beaumont-sur-Lèze est une commune où les artisans sont souvent débordés. Nino Plomberie reste joignable 24h/24 au 06 50 57 96 20.",
    "sections": [
      {
        "h2": "Panne soudaine : les bons réflexes",
        "text": "Fermez l'arrivée d'eau, coupez le courant si nécessaire, appelez : on vous oriente pendant que vous attendez."
      },
      {
        "h2": "Après l'intervention",
        "text": "Réparations garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Une urgence ? Appelez le 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "berat": {
    "title": "Plombier Bérat : devis gratuit, garantie 2 ans",
    "description": "Plombier à Bérat : Nino Plomberie, artisan de Muret, pour dépannage, chauffe-eau et plomberie neuve. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Bérat : le plombier de Muret pour vos travaux, petits ou grands",
    "intro": "Pour une petite commune comme Bérat, trouver un plombier disponible peut prendre du temps. Nino Plomberie couvre le secteur depuis Muret, avec plus de 20 ans d'expérience.",
    "sections": [
      {
        "h2": "Un seul interlocuteur du devis à la réparation",
        "text": "Vous parlez toujours à la même personne."
      },
      {
        "h2": "Ce qui est garanti",
        "text": "Réparations garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Un appel suffit pour obtenir un devis : 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "bois-de-la-pierre": {
    "title": "Plombier Bois-de-la-Pierre : artisan de confiance",
    "description": "Bois-de-la-Pierre : Nino Plomberie, 4,4/5 sur 79 avis Google. Artisan de Muret, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Bois-de-la-Pierre : choisissez un artisan dont les avis sont publics",
    "intro": "Quand on habite un petit village, on veut un artisan fiable. Nino Plomberie affiche 4,4/5 sur 79 avis Google : vous pouvez les consulter avant d'appeler.",
    "sections": [
      {
        "h2": "Ce qu'il faut savoir avant de choisir",
        "bullets": [
          "Prix annoncé avant le début des travaux",
          "Garantie de 2 ans pièces et main-d'œuvre",
          "Plus de 20 ans de métier"
        ]
      },
      {
        "h2": "Un devis sans engagement",
        "text": "Gratuit, avec diagnostic expliqué simplement."
      }
    ],
    "cta": {
      "label": "Consultez les avis sur Google, puis appelez le 06 50 57 96 20.",
      "kind": "avis"
    }
  },
  "cugnaux": {
    "strictSections": true,
    "title": "Plombier Cugnaux - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Cugnaux : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Cugnaux : dépannage 24h/24 par un artisan de Muret",
    "intro": "Vous cherchez un plombier à Cugnaux (31270) pour une fuite d'eau urgente, un WC bouché ou une panne de chauffe-eau ? Installé à Muret depuis plus de 20 ans (noté 4,4/5 sur 79 avis Google), j'interviens 24h/24 et 7j/7 dans tous les quartiers de Cugnaux. Quand vous appelez le 06 50 57 96 20, vous parlez directement à l'artisan qui se déplace chez vous, avec un devis gratuit signé avant travaux et une garantie 2 ans pièces et main-d'œuvre.",
    "sections": [
      {
        "h2": "Un plombier à Cugnaux en combien de temps ?",
        "text": "Depuis mon atelier de Muret, je rejoins Cugnaux rapidement par Roques et Villeneuve-Tolosane (D15 / D63) ou par l'A64 sortie Francazal, sans passer par le périphérique toulousain. Dès votre appel au 06 50 57 96 20 pour un dépannage plomberie à Cugnaux, je vous annonce mon heure d'arrivée réelle.\n\nVoici le délai constaté pour arriver chez vous : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Cugnaux]`. En cas de dégât des eaux en appartement ou en maison, je vous guide immédiatement au téléphone pour fermer l'arrivée d'eau."
      },
      {
        "h2": "Les pannes les plus fréquentes à Cugnaux",
        "text": "En pavillon comme en résidence collective à Cugnaux, j'interviens 24h/24 pour régler les pannes suivantes :",
        "bullets": [
          "**Fuite d'eau et dégât des eaux** : fuite sous évier ou lavabo, rupture de flexible, joint de colonne ou infiltration vers l'appartement du dessous (voir [recherche de fuite](/services/fuite-d-eau)).",
          "**Débouchage WC, évier et canalisation** : dégorgement rapide au furet professionnel ou haute pression sans abîmer les tuyaux (voir [débouchage canalisation](/services/debouchage)).",
          "**Chauffe-eau électrique et cumulus** : panne d'eau chaude, remplacement de résistance, de groupe de sécurité ou du ballon complet.",
          "**Remplacement de WC, robinetterie et salle de bain** : pose de WC classique ou suspendu, remplacement de mitigeur et rénovation complète de salle d'eau."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Cugnaux",
        "text": "Cugnaux réunit un tissu pavillonnaire dense et de nombreuses résidences collectives aux portes de Toulouse (Saint-Simon, Basso Cambo). Dans les quartiers résidentiels du Vivier, de Maurens, de La Bimoune, de Cugnala, de La Moreau, de Hautpoul ou de Debat Serre, les maisons individuelles ont souvent des installations de quinze à trente ans où les chauffe-eau électriques placés au garage s'entartrent et où les vannes extérieures et réducteurs de pression fatiguent avec le calcaire.\n\nAutour de l'avenue de Toulouse, de la place de la République, du parc du Manoir et dans le nouveau quartier de Francazal, les appartements en copropriété imposent une attention particulière : la limite entre partie privative et colonne commune se situe au robinet d'arrêt du logement, et une fuite sous un receveur de douche ou derrière un WC touche vite le plafond du voisin. J'établis systématiquement un compte rendu clair sur l'origine de la panne pour faciliter vos démarches entre locataire, propriétaire et syndic.",
        "photos": [
          {
            "src": "/realisations/photo-10.jpg",
            "alt": "Receveur extra-plat et paroi de douche installés dans le secteur Toulouse et Cugnaux par Nino Plomberie",
            "legende": "Rénovation de douche avec receveur extra-plat et paroi coulissante par Nino Plomberie."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Cugnaux ?",
        "text": "Le devis est gratuit et validé par écrit avant le premier coup de clé. Vous savez exactement ce qui est réparé et à quel tarif, avec ma garantie de 2 ans : si la panne revient dans les deux ans, je reviens sans vous refacturer.\n\nVoici les repères tarifaires à Cugnaux : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et dépannage à Cugnaux]`.\n\nConsultez la page [tarifs plombier à Muret et Toulouse](/tarifs), ainsi que mes pages [plombier à Toulouse](/intervention/toulouse) et [plombier à Muret](/intervention/muret)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Je suis locataire à Cugnaux, pouvez-vous préciser l'origine de la panne pour mon propriétaire ?",
            "a": "Oui. Mon devis gratuit et ma facture détaillent précisément si la panne relève de l'entretien courant (joint, siphon) ou de la vétusté d'un équipement (cuve de chauffe-eau percée, canalisation encastrée), ce qui clarifie la prise en charge avec votre propriétaire ou votre agence."
          },
          {
            "q": "Intervenez-vous en urgence la nuit et le week-end à Cugnaux ?",
            "a": "Oui, ma ligne 06 50 57 96 20 est ouverte 24h/24 et 7j/7. Je pars directement de Muret pour intervenir chez vous à Cugnaux."
          },
          {
            "q": "Pouvez-vous remplacer un WC classique par un WC suspendu à Cugnaux ?",
            "a": "Oui, j'installe le bâti-support, je reprends l'alimentation et l'évacuation PVC et je coordonne l'habillage avec un devis gratuit complet."
          }
        ]
      },
      {
        "h2": "Une urgence à Cugnaux ?",
        "text": "Une fuite d'eau, un WC bouché ou un chauffe-eau en panne à Cugnaux ? Appelez-moi directement au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "portet-sur-garonne": {
    "strictSections": true,
    "title": "Plombier Portet-sur-Garonne - Dépannage 24h/24 | Nino",
    "description": "Plombier à Portet-sur-Garonne : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Portet-sur-Garonne : dépannage 24h/24 par un artisan de Muret",
    "intro": "Vous cherchez un plombier à Portet-sur-Garonne (31120) pour stopper une fuite d'eau, déboucher une canalisation ou dépanner un chauffe-eau chez vous ou dans votre commerce ? Mon atelier est situé tout près, à Muret, sur le même axe de la RD820. Artisan indépendant depuis plus de 20 ans (4,4/5 sur 79 avis Google), j'interviens 24h/24 et 7j/7 avec un devis gratuit validé avant travaux et une garantie 2 ans pièces et main-d'œuvre. Appelez le 06 50 57 96 20.",
    "sections": [
      {
        "h2": "Un plombier à Portet-sur-Garonne en combien de temps ?",
        "text": "Portet-sur-Garonne se situe directement entre Muret et Toulouse sur la route d'Espagne (RD820) et le long de l'A64. Cette proximité immédiate avec mon atelier de Muret me permet d'intervenir très rapidement, sans subir les embouteillages du centre toulousain.\n\nVoici le délai constaté pour arriver sur place : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Portet-sur-Garonne]`. Dès votre appel au 06 50 57 96 20, je vous confirme mon heure d'arrivée exacte."
      },
      {
        "h2": "Les pannes les plus fréquentes à Portet-sur-Garonne",
        "text": "Pour un dépannage plomberie à Portet-sur-Garonne chez un particulier ou dans un local professionnel, je traite :",
        "bullets": [
          "**Fuite d'eau et dégât des eaux** : canalisation percée, flexible rompu, robinet d'arrêt bloqué ou chasse d'eau qui fuit (voir [recherche de fuite](/services/fuite-d-eau)).",
          "**Débouchage WC et canalisations** : dégorgement de toilettes, d'éviers de cuisine ou de sanitaires commerciaux (voir [débouchage canalisation](/services/debouchage)).",
          "**Chauffe-eau et production d'eau chaude** : réparation ou remplacement rapide de cumulus électrique et de groupe de sécurité.",
          "**Chauffage, chaudière et rénovation sanitaire** : entretien annuel de chaudière gaz, purge de radiateurs et rénovation de salle de bain."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Portet-sur-Garonne",
        "text": "Portet-sur-Garonne réunit trois secteurs bien distincts que je parcours chaque semaine entre Muret et Toulouse. Dans le vieux bourg historique proche des berges de la Garonne, de l'église et de la réserve naturelle du confluent Garonne-Ariège, les maisons anciennes en brique et galets ont souvent des réseaux d'eau repris à plusieurs époques et des caves humides où les vannes d'arrêt et conduites en cuivre s'oxydent vite. Dans les quartiers pavillonnaires de la Clairière, du Récébédou, de Francazal, de Creuse ou autour de la gare SNCF de Portet-Saint-Simon, j'interviens surtout sur des chauffe-eau électriques entartrés, des réducteurs de pression défaillants et des projets de rénovation complète de salle d'eau.\n\nEnfin, le long du boulevard de l'Europe et de la zone commerciale du Grand Portet, je dépanne régulièrement les sanitaires, lave-mains et petits ballons d'eau chaude des commerces, bureaux et restaurants qui ne peuvent pas rester fermés une journée entière.",
        "photos": [
          {
            "src": "/realisations/photo-08.jpg",
            "alt": "Baignoire d'angle et WC suspendu installés dans le secteur Muret et Portet-sur-Garonne par Nino Plomberie",
            "legende": "Réalisation dans le secteur Muret / Portet-sur-Garonne : pose de baignoire et WC suspendu."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Portet-sur-Garonne ?",
        "text": "Chaque intervention débute par un diagnostic clair et un devis gratuit signé avant le premier coup de clé. Si la panne revient dans les deux ans, je reviens sans vous refacturer.\n\nVoici les repères tarifaires à Portet-sur-Garonne : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et dépannage à Portet-sur-Garonne]`.\n\nConsultez la page [tarifs plombier à Muret et Toulouse](/tarifs), ainsi que mes pages [plombier à Muret](/intervention/muret) et [plombier à Toulouse](/intervention/toulouse)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Dépannez-vous aussi les commerces et locaux professionnels à Portet-sur-Garonne ?",
            "a": "Oui. J'interviens rapidement pour les boutiques, bureaux et petits locaux de Portet-sur-Garonne (WC bouché, fuite sur lavabo, chauffe-eau en panne) avec un devis gratuit et une facture détaillée."
          },
          {
            "q": "À quelle distance de Portet-sur-Garonne êtes-vous basé ?",
            "a": "Mon atelier est au 11 rue François Arago à Muret, juste au sud de Portet-sur-Garonne sur l'axe RD820 / A64."
          },
          {
            "q": "Puis-je vous appeler la nuit ou le dimanche pour une fuite à Portet-sur-Garonne ?",
            "a": "Oui, ma ligne 06 50 57 96 20 est ouverte 24h/24 et 7j/7 toute l'année, et c'est moi qui vous réponds directement."
          }
        ]
      },
      {
        "h2": "Une urgence à Portet-sur-Garonne ?",
        "text": "Une fuite d'eau, un sanitaire bouché ou un chauffe-eau en panne à Portet-sur-Garonne ? Appelez-moi directement au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "villeneuve-tolosane": {
    "title": "Plombier Villeneuve-Tolosane : devis gratuit, 24h/24",
    "description": "Villeneuve-Tolosane : Nino Plomberie, artisan de Muret, répond à vos urgences et à vos travaux. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Villeneuve-Tolosane : un plombier à portée de main pour votre maison",
    "intro": "Commune résidentielle proche de Toulouse, Villeneuve-Tolosane est composée de nombreux quartiers pavillonnaires. Les installations y vieillissent au même rythme que les lotissements.",
    "sections": [
      {
        "h2": "Pannes fréquentes dans les lotissements",
        "text": "Joints de robinets usés, ballon d'eau chaude entartré, évacuation lente, pression instable. Chaque cas est expliqué avant la réparation."
      },
      {
        "h2": "Projets de rénovation",
        "text": "Salle de bain, plomberie neuve, pose de cuisine : devis gratuit et interlocuteur unique."
      }
    ],
    "cta": {
      "label": "Réservez un créneau en ligne, première visite gratuite.",
      "kind": "rdv"
    }
  },
  "plaisance-du-touch": {
    "title": "Plombier Plaisance-du-Touch - Dépannage 24h/24 | Nino",
    "description": "Plombier à Plaisance-du-Touch : dépannage 24h/24 et 7j/7, fuite, débouchage, chauffe-eau. Devis gratuit avant travaux, garantie 2 ans. Appelez le 06 50 57 96 20.",
    "h1": "Plombier à Plaisance-du-Touch : pour que la panne ne gâche pas votre semaine",
    "intro": "Plaisance-du-Touch est une grande commune résidentielle de l'ouest toulousain, où beaucoup d'habitants travaillent loin de chez eux. Pour eux, la priorité est de ne pas perdre de temps.",
    "sections": [
      {
        "h2": "Prendre rendez-vous sans perdre une journée",
        "text": "Vous choisissez un créneau en ligne, ou vous nous appelez directement. Vous savez à quoi vous attendre avant de poser un jour de congé."
      },
      {
        "h2": "Dépannage et rénovation",
        "bullets": [
          "Chauffe-eau, chauffage, robinetterie",
          "Salle de bain et plomberie neuve",
          "Pose de cuisine"
        ]
      }
    ],
    "cta": {
      "label": "Choisissez votre créneau de diagnostic en ligne.",
      "kind": "rdv"
    }
  },
  "tournefeuille": {
    "strictSections": true,
    "title": "Plombier Tournefeuille - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Tournefeuille : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Tournefeuille : dépannage 24h/24 par un artisan de Muret",
    "intro": "Une fuite sous évier, une canalisation bouchée ou une panne d'eau chaude dans l'ouest toulousain ? Si vous cherchez un plombier à Tournefeuille (31170), j'interviens 24h/24 et 7j/7 depuis mon atelier de Muret. Artisan indépendant avec plus de 20 ans de métier et une note de 4,4/5 sur 79 avis Google, je me déplace personnellement sans passer par une plateforme. Vous bénéficiez d'un devis gratuit validé avant travaux et d'une garantie 2 ans pièces et main-d'œuvre. Appelez le 06 50 57 96 20.",
    "sections": [
      {
        "h2": "Un plombier à Tournefeuille en combien de temps ?",
        "text": "Depuis Muret, je rejoins Tournefeuille rapidement par les axes du sud-ouest toulousain (D63 / Cugnaux ou A64 puis rocade Arc-en-Ciel) sans passer par le centre de Toulouse. Lorsque vous m'appelez au 06 50 57 96 20 pour un dépannage plomberie à Tournefeuille, je vous indique mon heure d'arrivée réelle dès l'appel.\n\nVoici le temps de trajet constaté : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Tournefeuille]`. En cas de fuite importante, je vous guide tout de suite par téléphone pour fermer votre vanne d'arrêt générale."
      },
      {
        "h2": "Les pannes les plus fréquentes à Tournefeuille",
        "text": "J'interviens dans tous les quartiers de Tournefeuille avec l'outillage et les pièces de rechange courantes pour traiter :",
        "bullets": [
          "**Fuite d'eau et infiltration** : raccord desserré, tuyau cuivre ou multicouche percé, chasse d'eau qui coule ou infiltration sous douche (voir [recherche de fuite](/services/fuite-d-eau)).",
          "**Panne et remplacement de chauffe-eau** : ballon d'eau chaude électrique qui ne chauffe plus, disjoncte ou fuit par la cuve (voir [chauffe-eau et cumulus](/services/chauffe-eau)).",
          "**Débouchage de WC et canalisations** : dégorgement d'évier, de douche, de toilettes ou de conduite extérieure vers le tout-à-l'égout.",
          "**Rénovation de salle de bain et chauffage** : création de douche à l'italienne, pose de meuble vasque, dépannage et entretien de chaudière gaz."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Tournefeuille",
        "text": "J'ai déjà réalisé plusieurs chantiers à Tournefeuille, une grande commune résidentielle traversée par le Touch et proche de la base de loisirs de la Ramée, où se côtoient de vastes ensembles pavillonnaires et des résidences collectives. Du côté de La Paderne, de Pahin, du Mirabeau, de Belbèze, de Candie ou des Quéfets, beaucoup de maisons individuelles construites entre 1975 et 1995 ont encore leurs canalisations en cuivre d'origine et des salles de bain avec baignoire encastrée : j'y interviens souvent pour remplacer un vieux cumulus entartré dans le garage, reprendre une évacuation de lave-linge qui refoule ou transformer la baignoire en douche extra-plate sécurisée.\n\nAutour du centre-ville (boulevard Vincent Auriol), du Château, de Lardenne et du Petit Train, les appartements en copropriété présentent plutôt des fuites sur robinets d'arrêt grippés, des mécanismes de WC usés et des chaudières murales gaz à entretenir avant l'hiver.",
        "photos": [
          {
            "src": "/realisations/photo-13.jpg",
            "alt": "Douche thermostatique et meuble vasque posés à Tournefeuille par Nino Plomberie",
            "legende": "Chantier réalisé à Tournefeuille : pose d'une douche thermostatique et d'un meuble vasque."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Tournefeuille ?",
        "text": "Chez moi, le devis est gratuit et signé avant le premier coup de clé. Je vous explique la différence entre une simple pièce à remplacer (joint, cartouche, groupe de sécurité) et un équipement complet à changer.\n\nVoici les repères tarifaires pour Tournefeuille : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et dépannage à Tournefeuille]`.\n\nConsultez la page [tarifs plombier à Muret et Toulouse](/tarifs) ainsi que ma page [plombier à Toulouse](/intervention/toulouse)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Avez-vous déjà réalisé des travaux de plomberie à Tournefeuille ?",
            "a": "Oui, j'interviens régulièrement à Tournefeuille pour des dépannages d'urgence (fuite, chauffe-eau, débouchage) comme pour des rénovations de salle de bain, toutes couvertes par ma garantie de 2 ans."
          },
          {
            "q": "Combien de temps prend le remplacement d'un chauffe-eau à Tournefeuille ?",
            "a": "Un remplacement complet (vidange, dépose de l'ancien ballon, pose du neuf avec groupe de sécurité neuf et mise en eau) prend généralement une demi-journée."
          },
          {
            "q": "Intervenez-vous le soir et le week-end à Tournefeuille ?",
            "a": "Oui, je suis joignable 24h/24 et 7j/7 au 06 50 57 96 20, y compris le dimanche et les jours fériés."
          }
        ]
      },
      {
        "h2": "Une urgence à Tournefeuille ?",
        "text": "Une fuite d'eau, un WC bouché ou un chauffe-eau en panne à Tournefeuille ? Appelez-moi directement au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "fonsorbes": {
    "title": "Plombier Fonsorbes : débouchage, chauffe-eau | Nino",
    "description": "Plombier à Fonsorbes : débouchage de WC, évier et canalisation, chauffe-eau, salle de bain. Nino Plomberie, artisan de Muret. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Fonsorbes : donner une seconde vie à la plomberie de votre maison",
    "intro": "Fonsorbes a beaucoup grandi, avec des lotissements de différentes époques. Les installations qui avaient tout juste dix ans commencent déjà à demander de l'entretien.",
    "sections": [
      {
        "h2": "Débouchage à Fonsorbes : WC, évier, canalisation",
        "text": "WC, évier, douche ou canalisation bouchés à Fonsorbes : Nino Plomberie trouve le bouchon avec des outils professionnels, sans produit chimique agressif, et rétablit l'écoulement. Le devis est gratuit."
      },
      {
        "h2": "Entretien et remplacement du chauffe-eau",
        "text": "Un ballon qui chauffe mal, qui fait du bruit ou qui fuit se remplace avant la panne totale. Nino explique les options et vous laisse choisir."
      },
      {
        "h2": "Salle de bain à refaire",
        "text": "Plomberie traitée par Nino, finitions confiées à un second professionnel, devis unique."
      }
    ],
    "cta": {
      "label": "Envoyez votre projet via le formulaire, devis gratuit.",
      "kind": "form"
    }
  },
  "roques": {
    "title": "Plombier Roques : intervention rapide 24h/24",
    "description": "Roques : une fuite, une panne ? Nino Plomberie, installé à Muret, vient vous dépanner à toute heure. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Roques : l'artisan de Muret est à côté",
    "intro": "Roques fait partie des communes les plus proches de Muret. Pour une fuite en pleine nuit, cette proximité fait la différence.",
    "sections": [
      {
        "h2": "Les urgences les plus courantes",
        "bullets": [
          "Fuite sur canalisation",
          "Chauffe-eau en panne",
          "WC ou évier bouché"
        ]
      },
      {
        "h2": "Prix annoncé, travaux garantis 2 ans",
        "text": "Aucune surprise sur la facture."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20, Nino est tout proche.",
      "kind": "tel"
    }
  },
  "auterive": {
    "title": "Plombier Auterive : dépannage et rénovation | Nino",
    "description": "Plombier à Auterive : Nino Plomberie traite fuites, chauffe-eau, chauffage et salles de bain. Plus de 20 ans d'expérience. 06 50 57 96 20.",
    "h1": "Plombier à Auterive : de la maison de ville au pavillon, la plomberie est réglée",
    "intro": "Auterive, sur les bords de l'Ariège, mêle un centre ancien et des quartiers plus récents. Les besoins varient selon les époques de construction.",
    "sections": [
      {
        "h2": "Anciens bâtiments : les points de vigilance",
        "text": "Canalisations vieillissantes, ballons d'eau chaude surdimensionnés, évacuations irrégulières : un diagnostic précis aide à éviter les réparations répétées."
      },
      {
        "h2": "Dépannage, chauffage, rénovation",
        "text": "Nino assure les dépannages, le chauffage, la chaudière et la rénovation de salle de bain."
      }
    ],
    "cta": {
      "label": "Demandez un diagnostic via le formulaire, photo à l'appui.",
      "kind": "form"
    }
  },
  "noe": {
    "title": "Plombier Noé : artisan noté 4,4/5 sur Google",
    "description": "Plombier à Noé : Nino Plomberie, 4,4/5 sur 79 avis Google. Artisan de Muret, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Noé : un plombier choisi sur avis, pas sur promesse",
    "intro": "Dans un village comme Noé, on choisit son artisan avec soin. Nino Plomberie affiche 4,4/5 sur 79 avis Google, consultables sur sa fiche.",
    "sections": [
      {
        "h2": "Ce que vous pouvez attendre",
        "bullets": [
          "Devis gratuit, prix annoncé avant travaux",
          "Garantie de 2 ans, pièces et main-d'œuvre",
          "Plus de 20 ans d'expérience"
        ]
      },
      {
        "h2": "Un seul artisan, du diagnostic à la réparation",
        "text": "Pas de plateforme, pas d'intermédiaire."
      }
    ],
    "cta": {
      "label": "Lisez les avis, puis appelez le 06 50 57 96 20.",
      "kind": "avis"
    }
  },
  "capens": {
    "title": "Plombier Capens : artisan du Muretain, devis gratuit",
    "description": "Capens : Nino Plomberie couvre votre secteur depuis Muret. Fuite, chauffe-eau, débouchage, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Capens : un plombier du Muretain pour vos travaux",
    "intro": "À Capens, les maisons individuelles dominent. Quand un robinet fuit ou qu'un ballon lâche, trouver un artisan disponible n'est pas toujours simple. Nino Plomberie se déplace depuis Muret.",
    "sections": [
      {
        "h2": "Dépannages fréquents",
        "text": "Fuites, évacuations bouchées, chauffe-eau, robinetterie."
      },
      {
        "h2": "Ce qui est garanti",
        "text": "Prix annoncé, réparations garanties 2 ans."
      }
    ],
    "cta": {
      "label": "Un appel suffit pour obtenir un devis : 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "carbonne": {
    "strictSections": true,
    "title": "Plombier Carbonne - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Carbonne : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Carbonne : dépannage 24h/24 par un artisan de Muret",
    "intro": "Vous habitez dans le Volvestre et vous cherchez un plombier à Carbonne capable de se déplacer rapidement pour une fuite d'eau, un WC bouché ou un chauffe-eau en panne ? Installé à Muret au pied de l'A64 avec plus de 20 ans de métier (noté 4,4/5 sur 79 avis Google), j'interviens 24h/24 et 7j/7 à Carbonne (31390). Vous parlez directement à l'artisan qui réalise les travaux, avec un devis gratuit validé avant intervention et une garantie de 2 ans pièces et main-d'œuvre. Appelez le 06 50 57 96 20.",
    "sections": [
      {
        "h2": "Un plombier à Carbonne en combien de temps ?",
        "text": "Mon atelier de Muret est relié directement à Carbonne par l'autoroute A64 (sortie 27 Carbonne), sans aucun feu tricolore ni embouteillage urbain sur le trajet. Cet axe direct me permet de rejoindre Carbonne très vite, de jour comme de nuit.\n\nVoici le délai constaté pour arriver chez vous : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Carbonne]`. Dès votre appel au 06 50 57 96 20, je vous indique l'heure précise de mon arrivée et les gestes d'urgence pour fermer votre compteur d'eau."
      },
      {
        "h2": "Les pannes les plus fréquentes à Carbonne",
        "text": "J'assure tout le dépannage plomberie à Carbonne ainsi que les travaux d'installation et de chauffage :",
        "bullets": [
          "**Fuite d'eau intérieure ou après compteur** : tuyau en cuivre ou PEHD percé, raccord qui lâche, robinet extérieur gelé l'hiver (voir [recherche de fuite](/services/fuite-d-eau)).",
          "**Débouchage de WC et de canalisations** : curage et dégorgement d'évacuations bouchées par le calcaire, les lingettes ou les racines en jardin (voir [débouchage canalisation](/services/debouchage)).",
          "**Remplacement et dépannage de chauffe-eau** : ballon d'eau chaude électrique en panne, détartrage, changement de résistance ou de groupe de sécurité.",
          "**Chaudière, chauffage et salle de bain** : entretien de chaudière gaz, remplacement de radiateurs et rénovation complète de salle d'eau."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Carbonne",
        "text": "À Carbonne, l'habitat se partage entre le bourg ancien près des boucles de la Garonne, du pont de Jallier et de la confluence de l'Arize, et les lotissements pavillonnaires développés vers la gare SNCF, le chemin de Nauzes, le quartier du Lançon ou la route de Marquefave. Dans les maisons de ville anciennes du centre historique de Carbonne, je tombe fréquemment sur de longues colonnes d'alimentation en cuivre ou en acier galvanisé passant par des caves ou des garages non isolés, très exposées au gel hivernal, ainsi que sur des évacuations en grès ou en PVC ancien dont la pente est irrégulière.\n\nDans les pavillons individuels sur grand terrain, une panne fréquente concerne la conduite d'eau enterrée entre le regard du compteur en limite de propriété et la maison, ou un chauffe-eau installé au cellier dont l'anode et le groupe de sécurité n'ont pas été remplacés depuis des années.",
        "photos": [
          {
            "src": "/realisations/photo-07.jpg",
            "alt": "Chauffe-eau électrique et plomberie de cuisine posés dans le secteur de Muret et Carbonne par Nino Plomberie",
            "legende": "Installation de chauffe-eau électrique et raccordement de cuisine par Nino Plomberie."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Carbonne ?",
        "text": "Chaque dépannage ou chantier à Carbonne commence par un devis gratuit écrit, validé avec vous avant le premier coup de clé. Mes réparations sont garanties 2 ans : si la panne revient dans les deux ans, je reviens sans vous refacturer.\n\nVoici les repères tarifaires pour Carbonne : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et dépannage à Carbonne]`.\n\nConsultez la page [tarifs plombier à Muret et Toulouse](/tarifs) ainsi que ma page [plombier à Muret](/intervention/muret) et le secteur [plombier dans le Muretain](/zones/muretain)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Vous déplacez-vous à Carbonne même le soir ou le dimanche ?",
            "a": "Oui, j'interviens 24h/24 et 7j/7 à Carbonne grâce à l'accès direct par l'A64 depuis Muret. Appelez le 06 50 57 96 20 pour connaître mon délai d'arrivée immédiat."
          },
          {
            "q": "Mon compteur d'eau tourne alors que tous les robinets sont fermés à Carbonne, que faire ?",
            "a": "C'est souvent le signe d'une chasse d'eau qui fuit, d'un groupe de sécurité défectueux ou d'une fuite sur la canalisation entre le compteur et la maison. Fermez la vanne intérieure de la maison : si le compteur tourne encore, la fuite est enterrée entre le compteur et le bâti. Appelez-moi pour la localiser."
          },
          {
            "q": "Réalisez-vous aussi des rénovations de salle de bain à Carbonne ?",
            "a": "Oui, je prends en charge la rénovation complète de salle de bain à Carbonne (douche à l'italienne, remplacement de baignoire, meuble vasque et WC), avec un devis gratuit unique."
          }
        ]
      },
      {
        "h2": "Une urgence à Carbonne ?",
        "text": "Une fuite d'eau, un chauffe-eau en panne ou une canalisation bouchée à Carbonne ? Appelez-moi directement au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "saint-lys": {
    "strictSections": true,
    "title": "Plombier Saint-Lys - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Saint-Lys : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Saint-Lys : dépannage 24h/24 par un artisan de Muret",
    "intro": "Une fuite d'eau, une chaudière en arrêt ou un ballon d'eau chaude qui ne chauffe plus à l'ouest du Muretain ? Si vous cherchez un plombier à Saint-Lys (31470), j'interviens 24h/24 et 7j/7 depuis mon atelier de Muret. Artisan plombier-chauffagiste avec plus de 20 ans de métier et noté 4,4/5 sur 79 avis Google, je vous réponds en direct au 06 50 57 96 20, sans plateforme ni sous-traitance. Devis gratuit avant travaux et garantie 2 ans pièces et main-d'œuvre.",
    "sections": [
      {
        "h2": "Un plombier à Saint-Lys en combien de temps ?",
        "text": "Depuis Muret, je rejoins Saint-Lys directement par la D12 ou la D19 en passant par Seysses et Lamasquère, sur des routes départementales fluides à l'écart des bouchons toulousains. Dès votre appel au 06 50 57 96 20 pour un dépannage plomberie à Saint-Lys, je vous annonce mon heure d'arrivée précise.\n\nVoici le délai constaté pour rejoindre votre domicile : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Saint-Lys]`. En cas de fuite active, je vous explique immédiatement comment fermer votre vanne générale au compteur."
      },
      {
        "h2": "Les pannes les plus fréquentes à Saint-Lys",
        "text": "J'interviens dans tous les quartiers et hameaux de Saint-Lys pour vos urgences de plomberie et de chauffage :",
        "bullets": [
          "**Dépannage et entretien de chaudière** : perte de pression sur le circuit, vase d'expansion dégonflé, radiateurs froids ou chaudière en sécurité (voir [chauffage et chaudière](/services/chauffage-chaudiere)).",
          "**Panne ou fuite de chauffe-eau** : détartrage, remplacement de groupe de sécurité, de thermostat ou de cumulus complet (voir [chauffe-eau et cumulus](/services/chauffe-eau)).",
          "**Recherche et réparation de fuite d'eau** : fuite sur conduite en cuivre ou PER, robinet extérieur gelé ou infiltration derrière une cloison.",
          "**Débouchage de WC et rénovation de salle de bain** : dégorgement de canalisation et réfection complète de salle d'eau."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Saint-Lys",
        "text": "Autour de la halle centrale de Saint-Lys, du moulin de la Jalousie, du lac des Pêcheurs et dans les nombreux lotissements pavillonnaires (vers la route de Sainte-Foy, la route de Muret, la route de Fontenilles, le Moulin à Vent ou les Rossignols), la très grande majorité des logements sont des maisons individuelles avec jardin. Dans les constructions des années 1980 à 2005, je rencontre souvent des circuits de chauffage central dont les radiateurs sont emboués en partie basse et des chaudières gaz dont le vase d'expansion, le circulateur ou la soupape fatiguent à l'approche des premiers froids d'automne.\n\nDans les maisons plus anciennes du bourg et les propriétés sur grand terrain, les appels portent régulièrement sur des conduites d'alimentation extérieures longues après compteur en PEHD, des robinets de puisage au jardin fendus par le gel hivernal et des salles de bain d'époque à transformer en douche à l'italienne accessible.",
        "photos": [
          {
            "src": "/realisations/photo-01.jpg",
            "alt": "Baignoire et robinetterie noire mat installées dans le Muretain près de Saint-Lys par Nino Plomberie",
            "legende": "Chantier dans le secteur Muretain / Saint-Lys : pose de baignoire et robinetterie noire mat."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Saint-Lys ?",
        "text": "Je pose d'abord un diagnostic précis sur place et je vous remets un devis gratuit avant le premier coup de clé. Vous ne payez que ce qui a été validé, et si la panne revient dans les deux ans, je reviens sans vous refacturer.\n\nVoici les repères tarifaires à Saint-Lys : `[À CONFIRMER PAR NINO : ordres de prix déplacement, dépannage et entretien chaudière à Saint-Lys]`.\n\nConsultez la page [tarifs plombier à Muret et Toulouse](/tarifs), ma page [plombier à Muret](/intervention/muret) ou la page [plombier dans le Muretain](/zones/muretain)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Pourquoi ma chaudière perd-elle régulièrement de la pression dans ma maison à Saint-Lys ?",
            "a": "Une pression qui descend sous 1 bar vient le plus souvent d'un vase d'expansion dégonflé, d'une soupape qui goutte ou d'une micro-fuite sur un raccord de radiateur. Je contrôle l'ensemble du circuit avant de remplacer quoi que ce soit."
          },
          {
            "q": "Intervenez-vous en urgence le week-end et la nuit à Saint-Lys ?",
            "a": "Oui, je réponds 24h/24 et 7j/7 au 06 50 57 96 20 et je me déplace directement depuis Muret, y compris le dimanche et les jours fériés."
          },
          {
            "q": "Réalisez-vous la rénovation complète de salle de bain à Saint-Lys ?",
            "a": "Oui. Je traite toute la plomberie et je coordonne les finitions avec un second professionnel : vous avez un seul interlocuteur, un devis gratuit unique et 2 ans de garantie."
          }
        ]
      },
      {
        "h2": "Une urgence à Saint-Lys ?",
        "text": "Une fuite d'eau, une panne de chauffage ou un chauffe-eau à l'arrêt à Saint-Lys ? Appelez-moi directement au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "balma": {
    "strictSections": true,
    "title": "Plombier Balma - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Balma : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Balma : dépannage 24h/24 par un artisan de Muret",
    "intro": "Une fuite d'eau, un chauffe-eau à l'arrêt ou une chaudière qui ne chauffe plus à l'est de Toulouse ? Si vous cherchez un plombier à Balma réactif et ponctuel, j'interviens 24h/24 et 7j/7 depuis mon atelier de Muret. Artisan indépendant avec plus de 20 ans de métier et une note de 4,4/5 sur 79 avis Google, je vous réponds directement au 06 50 57 96 20. Le devis gratuit est validé avant travaux et chaque réparation est couverte par ma garantie 2 ans pièces et main-d'œuvre.",
    "sections": [
      {
        "h2": "Un plombier à Balma en combien de temps ?",
        "text": "Depuis Muret, je rejoins Balma par l'A64 puis le périphérique est (sorties Balma-Gramont, Lasbordes ou La Roseraie). Quand vous m'appelez au 06 50 57 96 20 pour une urgence, je vous annonce mon heure d'arrivée précise avant de partir.\n\nVoici le délai moyen constaté : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Balma]`. Pour un besoin non urgent (remplacement de chauffe-eau, entretien de chaudière, devis de salle de bain), vous pouvez aussi réserver un créneau précis afin de ne pas bloquer votre journée de travail."
      },
      {
        "h2": "Les pannes les plus fréquentes à Balma",
        "text": "Pour un dépannage plomberie à Balma ou une intervention de chauffagiste à Balma, voici les demandes que je traite le plus souvent :",
        "bullets": [
          "**Recherche et réparation de fuite d'eau** : fuite sur canalisation cuivre ou PER, groupe de sécurité qui coule, robinet d'arrêt grippé ou infiltration sous douche (voir [recherche de fuite](/services/fuite-d-eau)).",
          "**Chauffe-eau et chaudière gaz** : panne d'eau chaude, remplacement de ballon électrique ou thermodynamique, dépannage et [entretien de chaudière](/services/chauffage-chaudiere).",
          "**Débouchage de WC, évier et douche** : dégorgement mécanique propre et durable sans produits chimiques corrosifs.",
          "**Rénovation de salle de bain et robinetterie** : création de douche à l'italienne, pose de WC suspendu et remplacement de mitigeurs."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Balma",
        "text": "Balma associe des quartiers pavillonnaires établis sur les coteaux et des secteurs d'habitat collectif récent. Dans les maisons individuelles du Cyprié, de Lasbordes, du Saliège, de Saint-Clair ou autour de l'avenue de Toulouse et du centre-ville de Balma, beaucoup d'installations datent des années 1975 à 1995 : j'y vois régulièrement des conduites en cuivre entartrées, des réducteurs de pression hors d'usage qui laissent monter la pression du réseau au-delà de 4 bars en bas de coteau, et des chauffe-eau électriques de 200 ou 300 litres installés au sous-sol ou au garage qui arrivent en fin de vie.\n\nÀ l'inverse, dans l'écoquartier de Vidailhan, à Gramont et près du terminus du métro A, les résidences récentes utilisent des réseaux hydrocâblés en PER, des chaudières gaz à condensation ou des réseaux d'eau chaude collectifs où les pannes viennent plutôt des cartouches thermostatiques, des vannes d'équilibrage et des chasses d'eau encastrées.",
        "photos": [
          {
            "src": "/realisations/photo-06.jpg",
            "alt": "Douche avec mitigeur thermostatique installée dans le secteur toulousain et Balma par Nino Plomberie",
            "legende": "Pose de douche avec mitigeur thermostatique et faïence murale par Nino Plomberie."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Balma ?",
        "text": "Mon fonctionnement est simple : un diagnostic expliqué sur place, suivi d'un devis gratuit signé avant le premier coup de clé. Si la panne revient dans les deux ans, je reviens sans vous refacturer.\n\nVoici les ordres de prix à Balma : `[À CONFIRMER PAR NINO : ordres de prix déplacement, dépannage et entretien chaudière à Balma]`.\n\nRetrouvez la grille complète sur la page [tarifs plombier à Muret et Toulouse](/tarifs) ou consultez ma page [plombier à Toulouse](/intervention/toulouse)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Puis-je fixer un créneau précis à Balma sans poser une journée entière de congé ?",
            "a": "Oui. Pour les travaux et diagnostics non urgents à Balma, nous convenons d'un créneau horaire précis par téléphone au 06 50 57 96 20 ou via la prise de rendez-vous en ligne, et je vous préviens en cas d'aléa de circulation."
          },
          {
            "q": "Intervenez-vous en urgence le soir et le dimanche à Balma ?",
            "a": "Oui, 24h/24 et 7j/7. En cas de fuite importante ou de panne totale d'eau chaude à Balma, appelez-moi directement au 06 50 57 96 20."
          },
          {
            "q": "Pourquoi mon groupe de sécurité coule-t-il en permanence dans ma maison à Balma ?",
            "a": "Si l'eau coule même hors période de chauffe, c'est souvent que le siège du groupe est entartré ou que la pression d'arrivée d'eau dépasse 3,5 bars. Je mesure la pression au manomètre et je remplace uniquement la pièce nécessaire."
          }
        ]
      },
      {
        "h2": "Une urgence à Balma ?",
        "text": "Une fuite d'eau, un chauffe-eau en panne ou un débouchage urgent à Balma ? Appelez-moi directement au 06 50 57 96 20 ou demandez un devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "blagnac": {
    "strictSections": true,
    "title": "Plombier Blagnac - Dépannage 24h/24, chauffage | Nino",
    "description": "Plombier à Blagnac : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Blagnac : dépannage 24h/24 par un artisan de Muret",
    "intro": "Une fuite d'eau à 6 h du matin avant de partir travailler, une chaudière en sécurité en rentrant de poste à 22 h ou un WC bouché : si vous cherchez un plombier à Blagnac, je vous réponds en direct au 06 50 57 96 20, 24h/24 et 7j/7. Artisan plombier et chauffagiste installé à Muret avec plus de 20 ans de métier (4,4/5 sur 79 avis Google), j'interviens sans intermédiaire avec un devis gratuit signé avant travaux et une garantie de 2 ans pièces et main-d'œuvre.",
    "sections": [
      {
        "h2": "Un plombier à Blagnac en combien de temps ?",
        "text": "Depuis Muret, je rejoins Blagnac par l'A64 puis le périphérique ouest (A620/A621) en direction de l'aéroport Toulouse-Blagnac. Dès votre appel au 06 50 57 96 20, je vérifie l'état du trafic sur la rocade et je vous donne mon délai d'arrivée réel avant de partir.\n\nVoici le temps de trajet constaté : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Blagnac]`. Si vous travaillez en horaires décalés sur la zone aéroportuaire ou chez Airbus, nous pouvons aussi fixer un rendez-vous tôt le matin ou en soirée."
      },
      {
        "h2": "Les pannes les plus fréquentes à Blagnac",
        "text": "J'interviens à Blagnac à la fois pour le dépannage plomberie d'urgence et comme chauffagiste à Blagnac sur vos équipements thermiques :",
        "bullets": [
          "**Panne de chaudière et chauffage** : chaudière gaz qui affiche un code erreur, baisse de pression, radiateurs froids en bas. J'assure le dépannage et l'[entretien de chaudière](/services/chauffage-chaudiere).",
          "**Fuite d'eau et infiltration** : flexible d'alimentation rompu, chasse d'eau qui coule en continu, fuite sur collecteur ou sous receveur de douche.",
          "**Chauffe-eau électrique en panne** : remplacement de thermostat, de groupe de sécurité ou de ballon complet (voir [chauffe-eau et cumulus](/services/chauffe-eau)).",
          "**Débouchage de WC et canalisations** : dégorgement rapide d'évier, de douche ou de toilettes bouchées sans endommager la tuyauterie."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Blagnac",
        "text": "Le parc immobilier de Blagnac mêle plusieurs générations d'habitat où j'ai déjà réalisé de nombreux chantiers. Dans l'écoquartier d'Andromède et les résidences récentes proches du tramway T1 (Grand Noble, Odyssud, Place Georges Brassens), les appartements sont équipés de réseaux en PER ou multicouche sur nourrices, de WC suspendus sur bâti-support et de chaudières gaz à condensation : les appels que je reçois concernent surtout l'entretien annuel des chaudières, les mécanismes de chasse encastrés entartrés et les réglages de pression sur collecteur.\n\nDans le centre historique près de la Garonne et du parc du Ritouret, ainsi que dans les quartiers pavillonnaires de Grenade-les-Prés, Les Barradels, Les Saoulous, Ferradou, Layrac, Cantegril ou Pinot, on trouve des maisons individuelles où les chauffe-eau électriques, les vannes d'arrêt extérieures et les anciennes salles de bain demandent une remise à niveau durable. J'adapte toujours mon diagnostic au type de bâti avant de chiffrer l'intervention.",
        "photos": [
          {
            "src": "/realisations/photo-12.jpg",
            "alt": "WC suspendu noir et lave-mains installés à Blagnac par Nino Plomberie",
            "legende": "Chantier réalisé à Blagnac : installation d'un WC suspendu noir mat et d'un lave-mains."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Blagnac ?",
        "text": "Pas de surprise sur la facture : j'établis un devis gratuit sur place et vous validez le montant avant que je ne commence la réparation. Si la panne revient dans les deux ans, je reviens sans vous refacturer.\n\nVoici les ordres de grandeur pour Blagnac : `[À CONFIRMER PAR NINO : ordres de prix déplacement, dépannage plomberie et entretien chaudière à Blagnac]`.\n\nRetrouvez tous les détails sur la page [tarifs plombier à Muret et Toulouse](/tarifs), ainsi que sur ma page [plombier à Toulouse](/intervention/toulouse)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Intervenez-vous tôt le matin ou tard le soir à Blagnac pour les horaires décalés ?",
            "a": "Oui. Beaucoup d'habitants de Blagnac travaillent en horaires d'équipe autour de l'aéroport. Je réponds 24h/24 au 06 50 57 96 20 pour les urgences et je m'adapte à vos disponibilités."
          },
          {
            "q": "Faites-vous l'entretien et le dépannage de chaudière à Blagnac ?",
            "a": "Oui, en tant que plombier-chauffagiste, j'entretiens et je dépanne les chaudières gaz et les circuits de radiateurs dans tous les quartiers de Blagnac."
          },
          {
            "q": "Réparez-vous aussi les WC suspendus encastrés fréquents à Andromède ?",
            "a": "Oui. J'accède au mécanisme par la plaque de commande sans casser le coffrage pour remplacer le flotteur, la cloche ou le joint d'étanchéité."
          }
        ]
      },
      {
        "h2": "Une urgence à Blagnac ?",
        "text": "Une fuite d'eau, une chaudière en arrêt ou un sanitaire bouché à Blagnac ? Appelez-moi directement au 06 50 57 96 20 ou demandez votre devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "colomiers": {
    "strictSections": true,
    "title": "Plombier Colomiers - Dépannage 24h/24, artisan | Nino",
    "description": "Plombier à Colomiers : dépannage 24h/24 7j/7, fuite, débouchage, chauffe-eau. Artisan basé à Muret, 20 ans de métier. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Colomiers : dépannage 24h/24 par un artisan de Muret",
    "intro": "Vous avez une fuite d'eau, une canalisation bouchée ou un chauffe-eau en panne et vous cherchez un plombier à Colomiers ? Artisan indépendant basé à Muret depuis plus de 20 ans, j'interviens 24h/24 et 7j/7 dans tous les quartiers columérins. Noté 4,4/5 sur 79 avis Google, je me déplace personnellement sans passer par une plateforme ni un sous-traitant. Vous recevez un devis gratuit validé avant travaux et mes interventions bénéficient d'une garantie 2 ans pièces et main-d'œuvre. Appelez-moi au 06 50 57 96 20.",
    "sections": [
      {
        "h2": "Un plombier à Colomiers en combien de temps ?",
        "text": "Depuis mon atelier de Muret, je rejoins Colomiers directement par l'A64 puis la rocade Arc-en-Ciel (N124) sans traverser le centre de Toulouse. Lorsque vous m'appelez au 06 50 57 96 20 pour un dépannage plomberie à Colomiers, je vous indique immédiatement mon heure d'arrivée réelle.\n\nVoici le délai constaté : `[À CONFIRMER PAR NINO : délai moyen depuis Muret vers Colomiers]`. En attendant mon arrivée sur une fuite, fermez la vanne d'arrêt générale et coupez l'alimentation électrique proche de l'eau."
      },
      {
        "h2": "Les pannes les plus fréquentes à Colomiers",
        "text": "Que vous habitiez en appartement ou en pavillon à Colomiers, j'interviens avec les pièces courantes dans le camion :",
        "bullets": [
          "**Débouchage canalisation Colomiers et WC bouchés** : engorgement de colonne en résidence ou canalisation extérieure obstruée en pavillon. Je réalise le [débouchage de canalisation](/services/debouchage) mécanique ou haute pression.",
          "**Recherche et réparation de fuite d'eau** : fuite sous évier, flexible percé, joint de bride usé ou infiltration entre deux étages traitée par [recherche de fuite sans casse](/services/fuite-d-eau).",
          "**Dépannage et remplacement de chauffe-eau** : ballon électrique qui disjoncte, eau tiède ou groupe de sécurité entartré qui coule en continu.",
          "**Chauffage et rénovation de salle de bain** : dépannage de chaudière gaz, radiateurs froids et réfection complète de salle d'eau."
        ]
      },
      {
        "h2": "Ce que je vois dans les logements de Colomiers",
        "text": "Deuxième ville de Haute-Garonne, Colomiers présente trois grands profils de bâti que je connais bien pour y avoir réalisé plusieurs chantiers de dépannage et de salle de bain. Autour du Plein Centre, de la Naspe, du Seycheron, du Val d'Aran et des Fenassiers, les résidences collectives construites dans les années 1970 et 1980 ont souvent des colonnes d'évacuation en fonte ou PVC très sollicitées et des vannes d'arrêt d'origine grippées par le calcaire : quand une fuite survient en étage, il faut isoler rapidement le réseau et coordonner avec le syndic.\n\nDans les quartiers pavillonnaires comme Le Perget, Cabirol, Garroussal, En Sigal, Piquemil ou Monturon, je rencontre surtout des ballons d'eau chaude entartrés au bout de dix ans, des réducteurs de pression fatigués dans le garage et des projets de transformation de baignoire en douche à l'italienne. Enfin, du côté des Ramassiers, d'En Jacca et de Prat Couderc, les logements récents près du pôle aéronautique demandent un entretien régulier des mitigeurs thermostatiques et des chaudières gaz.",
        "photos": [
          {
            "src": "/realisations/photo-15.jpg",
            "alt": "Douche à l'italienne avec verrière noire et baignoire posées à Colomiers par Nino Plomberie",
            "legende": "Chantier réalisé à Colomiers : création d'une douche à l'italienne avec verrière noire et pose de baignoire."
          }
        ]
      },
      {
        "h2": "Combien coûte une intervention à Colomiers ?",
        "text": "Je vous annonce toujours le prix avant le premier coup de clé, sur un devis gratuit et écrit. Aucune pièce n'est remplacée sans votre accord préalable.\n\nVoici les repères pour une intervention à Colomiers : `[À CONFIRMER PAR NINO : ordres de prix déplacement, débouchage et dépannage à Colomiers]`.\n\nConsultez ma grille sur la page [tarifs plombier à Muret et Toulouse](/tarifs). J'interviens aussi tout près comme [plombier à Toulouse](/intervention/toulouse) et pour toute [rénovation de salle de bain](/services/renovation-salle-de-bain)."
      },
      {
        "h2": "Questions fréquentes",
        "faq": [
          {
            "q": "Intervenez-vous le week-end pour un débouchage de canalisation à Colomiers ?",
            "a": "Oui, je me déplace 24h/24 et 7j/7 à Colomiers. Un refoulement de WC ou de colonne le samedi ou le dimanche soir se traite sans attendre le lundi : appelez-moi au 06 50 57 96 20."
          },
          {
            "q": "Avez-vous déjà réalisé des chantiers à Colomiers ?",
            "a": "Oui, j'interviens régulièrement à Colomiers, aussi bien en dépannage d'urgence qu'en rénovation complète de salle de bain (douche à l'italienne, baignoire, robinetterie), avec une garantie de 2 ans."
          },
          {
            "q": "Qui me répond quand j'appelle le 06 50 57 96 20 ?",
            "a": "C'est moi, Nino, l'artisan plombier qui viendra chez vous à Colomiers. Il n'y a ni centre d'appels ni sous-traitance."
          }
        ]
      },
      {
        "h2": "Une urgence à Colomiers ?",
        "text": "Une fuite d'eau, un bouchon de canalisation ou une panne d'eau chaude à Colomiers ? Appelez-moi directement ou demandez votre devis gratuit."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    }
  },
  "l-union": {
    "title": "Plombier L'Union : devis gratuit, garantie 2 ans",
    "description": "Plombier à L'Union : Nino Plomberie traite fuite, chauffe-eau, débouchage et rénovation. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à L'Union : un plombier qui vous fait gagner du temps",
    "intro": "L'Union, au nord-est de Toulouse, est une commune résidentielle et commerçante. Pour ses habitants, un artisan qui répond vite et chiffre clairement fait gagner du temps.",
    "sections": [
      {
        "h2": "Devis et diagnostic",
        "text": "Nino explique la panne, annonce le prix, puis intervient."
      },
      {
        "h2": "Prestations",
        "bullets": [
          "Dépannage (fuite, débouchage, chauffe-eau)",
          "Chauffage et chaudière",
          "Rénovation de salle de bain"
        ]
      }
    ],
    "cta": {
      "label": "Envoyez une photo de votre problème via le formulaire.",
      "kind": "form"
    }
  },
  "ramonville-saint-agne": {
    "title": "Plombier Ramonville-Saint-Agne : diagnostic et devis",
    "description": "Plombier à Ramonville-Saint-Agne : Nino Plomberie traite fuites, chauffe-eau et chauffage. Plus de 20 ans d'expérience. 06 50 57 96 20.",
    "h1": "Plombier à Ramonville-Saint-Agne : de l'immeuble au pavillon, une plomberie bien diagnostiquée",
    "intro": "Ramonville-Saint-Agne, traversée par le canal du Midi et desservie par le métro, mêle résidences collectives et maisons. Chaque type de logement a ses pannes typiques.",
    "sections": [
      {
        "h2": "En résidence collective",
        "text": "Évacuations communes, ballons d'eau chaude, fuites chez le voisin : un diagnostic précis aide à comprendre l'origine."
      },
      {
        "h2": "En maison individuelle",
        "text": "Chauffe-eau, robinetterie, arrivée d'eau, chaudière."
      },
      {
        "h2": "Quartiers desservis à Ramonville-Saint-Agne",
        "bullets": [
          "Écoquartier Maragon-Floralies",
          "Giroussens",
          "Gleyze-Vieille",
          "La Barrière",
          "La Comtesse",
          "La Peyrade",
          "Maragon"
        ]
      }
    ],
    "cta": {
      "label": "Demandez un diagnostic, première visite gratuite.",
      "kind": "rdv"
    }
  },
  "aucamville": {
    "title": "Plombier Aucamville : artisan de confiance, devis gratuit",
    "description": "Aucamville : Nino Plomberie, plus de 20 ans d'expérience, 4,4/5 sur Google. Dépannage, chauffe-eau, salle de bain. 06 50 57 96 20.",
    "h1": "Plombier à Aucamville : un artisan qui explique avant de réparer",
    "intro": "Au nord de Toulouse, Aucamville est une commune où se côtoient pavillons et petits collectifs. Un plombier qui explique clairement le problème évite les mauvaises surprises.",
    "sections": [
      {
        "h2": "Ce qui est garanti",
        "text": "Prix annoncé avant les travaux, réparations garanties 2 ans, pièces et main-d'œuvre."
      },
      {
        "h2": "Ce que disent les avis",
        "text": "4,4/5 sur 79 avis Google, à consulter avant d'appeler."
      }
    ],
    "cta": {
      "label": "Lisez les avis, puis appelez le 06 50 57 96 20.",
      "kind": "avis"
    }
  },
  "saint-orens-de-gameville": {
    "title": "Plombier Saint-Orens-de-Gameville : devis rénovation",
    "description": "Saint-Orens-de-Gameville : Nino Plomberie pour votre salle de bain, chauffe-eau et plomberie neuve. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Saint-Orens-de-Gameville : vos projets de plomberie, du devis à la pose",
    "intro": "Commune résidentielle au sud-est de Toulouse, Saint-Orens-de-Gameville compte de nombreux pavillons dont les installations demandent parfois une remise à niveau complète.",
    "sections": [
      {
        "h2": "Salle de bain et plomberie neuve",
        "text": "Plomberie traitée par Nino, finitions confiées à un second professionnel."
      },
      {
        "h2": "Un devis gratuit, un prix annoncé",
        "text": "Avant tout début de chantier, avec garantie de 2 ans."
      },
      {
        "h2": "Quartiers desservis à Saint-Orens-de-Gameville",
        "bullets": [
          "Beauvoir",
          "Catala",
          "L'Orée du Bois",
          "La Querqueille",
          "Quartier Bourgade"
        ]
      }
    ],
    "cta": {
      "label": "Réservez un créneau de diagnostic en ligne.",
      "kind": "rdv"
    }
  },
  "quint-fonsegrives": {
    "title": "Plombier Quint-Fonsegrives : dépannage, devis gratuit",
    "description": "Plombier à Quint-Fonsegrives : Nino Plomberie traite fuite, chauffe-eau, chauffage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Quint-Fonsegrives : un plombier à appeler avant que la panne ne s'aggrave",
    "intro": "À l'est de Toulouse, Quint-Fonsegrives est une commune résidentielle. Une petite fuite négligée devient vite un dégât des eaux : mieux vaut agir tôt.",
    "sections": [
      {
        "h2": "Les signes à ne pas ignorer",
        "bullets": [
          "Goutte à goutte persistant",
          "Baisse de pression",
          "Facture d'eau qui grimpe sans raison"
        ]
      },
      {
        "h2": "Une intervention claire",
        "text": "Diagnostic, prix annoncé, réparation garantie 2 ans."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20 dès les premiers signes.",
      "kind": "tel"
    }
  },
  "launaguet": {
    "title": "Plombier Launaguet : devis gratuit, garantie 2 ans",
    "description": "Plombier à Launaguet : Nino Plomberie traite fuite, chauffe-eau, débouchage et rénovation. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Launaguet : un artisan plombier pour les pannes du quotidien",
    "intro": "Commune résidentielle au nord de Toulouse, Launaguet est composée surtout de pavillons. Les problèmes y sont souvent les mêmes : robinets usés, chauffe-eau, évacuations.",
    "sections": [
      {
        "h2": "Diagnostic avant réparation",
        "text": "Un point précis sur la cause, puis un devis gratuit."
      },
      {
        "h2": "Garantie et transparence",
        "text": "Prix annoncé avant travaux, réparations garanties 2 ans."
      }
    ],
    "cta": {
      "label": "Décrivez votre problème via le formulaire, photo à l'appui.",
      "kind": "form"
    }
  },
  "labege": {
    "title": "Plombier Labège : rendez-vous rapide, devis gratuit",
    "description": "Plombier à Labège : Nino Plomberie traite fuites, chauffe-eau et travaux. Prenez rendez-vous en ligne, devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Labège : une plomberie réglée sans perdre votre journée",
    "intro": "Labège concentre une grande zone d'activité tertiaire et de nombreux logements. Beaucoup de personnes y travaillent et y vivent : le temps libre est précieux.",
    "sections": [
      {
        "h2": "Prendre rendez-vous en ligne",
        "text": "Choisissez votre créneau pour un diagnostic et un devis, première visite gratuite."
      },
      {
        "h2": "Petits locaux professionnels et logements",
        "text": "Fuites, sanitaires, chauffe-eau : Nino intervient sur les deux."
      }
    ],
    "cta": {
      "label": "Réservez votre créneau de diagnostic en ligne.",
      "kind": "rdv"
    }
  },
  "castanet-tolosan": {
    "title": "Plombier Castanet-Tolosan : diagnostic précis, devis",
    "description": "Plombier à Castanet-Tolosan : Nino Plomberie, plus de 20 ans d'expérience. Dépannage, chauffe-eau, salle de bain. 06 50 57 96 20.",
    "h1": "Plombier à Castanet-Tolosan : des maisons de caractère aux pavillons récents, la même exigence",
    "intro": "Castanet-Tolosan, le long du canal du Midi, réunit un centre ancien et des quartiers pavillonnaires plus récents. Un bon diagnostic vaut mieux qu'une réparation précipitée.",
    "sections": [
      {
        "h2": "Centre ancien : les points de vigilance",
        "text": "Canalisations vieillissantes, ballons d'eau chaude surdimensionnés, évacuations irrégulières."
      },
      {
        "h2": "Quartiers récents",
        "text": "Robinetterie, joints, chauffe-eau : des soucis plus ponctuels, traités rapidement."
      }
    ],
    "cta": {
      "label": "Demandez un diagnostic, première visite gratuite.",
      "kind": "rdv"
    }
  },
  "saint-jory": {
    "title": "Plombier Saint-Jory : artisan fiable, garantie 2 ans",
    "description": "Saint-Jory : Nino Plomberie, 4,4/5 sur 79 avis Google. Dépannage, chauffe-eau, plomberie neuve. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Saint-Jory : un plombier dont les avis parlent pour lui",
    "intro": "Au nord de Toulouse, Saint-Jory associe habitat résidentiel et zone logistique. Pour ses habitants, choisir un artisan fiable passe souvent par les avis.",
    "sections": [
      {
        "h2": "Ce que disent les clients",
        "text": "4,4/5 sur 79 avis Google, à lire avant d'appeler."
      },
      {
        "h2": "Ce que vous obtenez",
        "bullets": [
          "Devis gratuit, prix annoncé",
          "Garantie de 2 ans, pièces et main-d'œuvre",
          "Plus de 20 ans d'expérience"
        ]
      }
    ],
    "cta": {
      "label": "Consultez les avis, puis appelez le 06 50 57 96 20.",
      "kind": "avis"
    }
  },
  "cornebarrieu": {
    "title": "Plombier Cornebarrieu : dépannage, devis gratuit",
    "description": "Plombier à Cornebarrieu : Nino Plomberie traite fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Cornebarrieu : une panne d'eau n'attend pas la fin de votre service",
    "intro": "À proximité de l'aéroport et du pôle aéronautique, beaucoup d'habitants de Cornebarrieu travaillent en horaires décalés. Pour eux, un artisan joignable en dehors des heures de bureau change tout.",
    "sections": [
      {
        "h2": "Joignable à toute heure",
        "text": "Nino Plomberie répond au 06 50 57 96 20, y compris le soir et le week-end."
      },
      {
        "h2": "Ce qui est garanti",
        "text": "Prix annoncé avant travaux, réparations garanties 2 ans."
      }
    ],
    "cta": {
      "label": "Appelez, même en dehors des heures de bureau.",
      "kind": "tel"
    }
  },
  "saint-jean": {
    "title": "Plombier Saint-Jean (31) : devis gratuit, garantie 2 ans",
    "description": "Plombier à Saint-Jean : Nino Plomberie traite fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Saint-Jean : un plombier clair sur le prix, avant d'intervenir",
    "intro": "À l'est de Toulouse, Saint-Jean est une commune résidentielle où beaucoup d'habitants ont peu de temps libre. Un devis clair et gratuit leur évite de perdre du temps.",
    "sections": [
      {
        "h2": "Comment ça se passe",
        "text": "Vous décrivez le problème, Nino pose un diagnostic et annonce le prix avant d'intervenir."
      },
      {
        "h2": "Garantie",
        "text": "Réparations garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Envoyez une photo de votre problème via le formulaire.",
      "kind": "form"
    }
  },
  "leguevin": {
    "title": "Plombier Léguevin - Dépannage 24h/24, devis gratuit | Nino",
    "description": "Plombier à Léguevin : dépannage 24h/24 et 7j/7, fuite, débouchage, chauffe-eau. Devis gratuit avant travaux, garantie 2 ans. Appelez le 06 50 57 96 20.",
    "h1": "Plombier à Léguevin : du dépannage à la rénovation, un seul artisan",
    "intro": "À l'ouest de Toulouse, Léguevin est une commune où dominent les maisons individuelles. Les besoins vont du dépannage ponctuel à la rénovation complète.",
    "sections": [
      {
        "h2": "Chauffage et chauffe-eau",
        "text": "Dépannage, remplacement, explications claires."
      },
      {
        "h2": "Salle de bain",
        "text": "Plomberie traitée par Nino, finitions confiées à un second professionnel."
      }
    ],
    "cta": {
      "label": "Réservez un créneau de diagnostic en ligne.",
      "kind": "rdv"
    }
  },
  "rieumes": {
    "title": "Plombier Rieumes : artisan de Muret, devis gratuit",
    "description": "Plombier à Rieumes : Nino Plomberie couvre le Volvestre depuis Muret. Fuite, chauffe-eau, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Rieumes : un artisan de Muret pour vos travaux dans le Volvestre",
    "intro": "Rieumes, au cœur du Volvestre, est une commune où l'on a moins d'artisans sous la main qu'en banlieue toulousaine. Nino Plomberie couvre le secteur depuis Muret.",
    "sections": [
      {
        "h2": "Maisons de bourg et pavillons",
        "text": "Les installations varient selon les époques : un diagnostic précis évite les remplacements inutiles."
      },
      {
        "h2": "Prix annoncé, garantie 2 ans",
        "text": "Devis gratuit avant les travaux."
      }
    ],
    "cta": {
      "label": "Un appel suffit pour obtenir un devis : 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "longages": {
    "title": "Plombier Longages : artisan du Muretain, devis gratuit",
    "description": "Plombier à Longages : Nino Plomberie, artisan de Muret, pour dépannage et rénovation. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Longages : un plombier qui connaît le Muretain",
    "intro": "Longages est une commune du sud de Muret. Un artisan installé à Muret y connaît le secteur, ses maisons et ses installations.",
    "sections": [
      {
        "h2": "Dépannages fréquents",
        "text": "Fuite, chauffe-eau, évacuation bouchée, robinetterie."
      },
      {
        "h2": "Devis gratuit, travaux garantis",
        "text": "Prix annoncé, garantie de 2 ans."
      }
    ],
    "cta": {
      "label": "Décrivez votre problème via le formulaire, photo à l'appui.",
      "kind": "form"
    }
  },
  "venerque": {
    "title": "Plombier Venerque : urgences 24h/24, artisan de Muret",
    "description": "Plombier à Venerque : Nino Plomberie, installé à Muret, intervient à toute heure. Fuite, chauffe-eau. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Venerque : l'artisan de Muret, à une courte distance",
    "intro": "Venerque, au bord de l'Ariège, est assez proche de Muret pour que Nino s'y déplace en urgence. Pas besoin d'attendre qu'un artisan lointain se libère.",
    "sections": [
      {
        "h2": "Urgences : les bons réflexes",
        "numbered": true,
        "bullets": [
          "Fermer l'arrivée d'eau au compteur",
          "Couper le courant si besoin",
          "Appeler le 06 50 57 96 20"
        ]
      },
      {
        "h2": "Travaux planifiés",
        "text": "Chauffe-eau, chauffage, salle de bain, plomberie neuve, avec devis gratuit et garantie de 2 ans."
      }
    ],
    "cta": {
      "label": "Appelez maintenant : 06 50 57 96 20.",
      "kind": "tel"
    }
  },
  "montrabe": {
    "title": "Plombier Montrabé (31850) : devis gratuit, garantie 2 ans",
    "description": "Plombier à Montrabé : Nino Plomberie, artisan de Muret, intervient pour fuite, chauffe-eau, débouchage et rénovation. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Montrabé : un plombier pour la métropole toulousaine, joignable à toute heure",
    "intro": "Montrabé, commune de Toulouse Métropole, se trouve à environ 8 km du centre de Toulouse, entre Balma, Saint-Jean et L'Union. Nino Plomberie, artisan basé à Muret, y intervient pour les dépannages comme pour les travaux planifiés.",
    "sections": [
      {
        "h2": "Dépannage et travaux à Montrabé",
        "text": "Fuite d'eau, chauffe-eau en panne, évacuation bouchée : le 06 50 57 96 20 répond 24h/24 et 7j/7. Pour un chantier à préparer (salle de bain, chauffage, plomberie neuve), un rendez-vous peut être pris en ligne et le devis est gratuit."
      },
      {
        "h2": "Un artisan indépendant, des engagements clairs",
        "text": "Nino Plomberie compte plus de 20 ans d'expérience. Le prix est annoncé avant les travaux et les réparations sont garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Prenez rendez-vous en ligne pour votre devis gratuit.",
      "kind": "rdv"
    }
  },
  "pinsaguel": {
    "title": "Plombier Pinsaguel (31120) : artisan de Muret, devis gratuit",
    "description": "Plombier à Pinsaguel : Nino Plomberie, installé à Muret à 6 km, traite fuite, chauffe-eau, débouchage et salle de bain. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Pinsaguel : le plombier de Muret à quelques kilomètres",
    "intro": "Pinsaguel, commune du Muretain Agglo comme Muret, se trouve à environ 6 km de l'adresse de Nino Plomberie. Une proximité utile pour un dépannage comme pour un chantier suivi.",
    "sections": [
      {
        "h2": "Dépannage plomberie à Pinsaguel",
        "text": "Fuite, évacuation bouchée, chauffe-eau qui ne chauffe plus : appelez le 06 50 57 96 20, 24h/24 et 7j/7. Le diagnostic précède toute réparation et le prix est annoncé avant l'intervention."
      },
      {
        "h2": "Chantiers : une distance courte depuis Muret",
        "text": "Pour une rénovation de salle de bain ou une pose de cuisine, la distance depuis Muret reste courte, ce qui facilite les visites de chantier. Devis gratuit, réparations garanties 2 ans."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20 pour une intervention à Pinsaguel.",
      "kind": "tel"
    }
  },
  "toulouse-capitole": {
    "title": "Plombier Toulouse Capitole - Dépannage 24h/24 | Nino",
    "description": "Plombier au Capitole à Toulouse : fuite, débouchage, chauffe-eau dans les immeubles anciens du centre. Artisan depuis 20 ans, devis gratuit. 06 50 57 96 20.",
    "h1": "Plomberie au Capitole : intervenir dans les immeubles anciens du centre",
    "intro": "Autour de la place du Capitole, les immeubles en brique sont anciens et les installations ont été modifiées au fil des décennies. En tant que [plombier à Toulouse](/intervention/toulouse) depuis plus de 20 ans, je réalise un diagnostic précis avant toute réparation pour protéger votre appartement et les parties communes.",
    "sections": [
      {
        "h2": "Dépannage dans le centre historique",
        "text": "Fuite sous un évier, canalisation bouchée, chauffe-eau en panne : je me déplace depuis mon atelier de Muret et je réponds 24h/24 et 7j/7 au 06 50 57 96 20. Le prix est annoncé avant l'intervention sur un devis gratuit validé avant travaux. Retrouvez aussi l'ensemble de mes interventions sur la page [plombier à Toulouse](/intervention/toulouse)."
      },
      {
        "h2": "Immeubles anciens : ce qu'il faut anticiper",
        "text": "Dans un immeuble ancien du Capitole, l'accès aux colonnes, au compteur ou aux vannes d'arrêt communes demande souvent de prévenir le syndic ou le voisinage. Je repère l'origine exacte d'une fuite avant d'ouvrir un coffrage, afin d'éviter toute casse inutile et de préserver vos murs."
      },
      {
        "h2": "Plomberie des immeubles anciens du centre : ce qu'on trouve dans les murs",
        "text": "Derrière les façades de brique autour du Capitole, les réseaux d'eau ont souvent été repris par morceaux au fil des propriétaires. Avant de réparer, il faut savoir ce qu'on a en face :",
        "bullets": [
          "**Canalisations en plomb** : interdites pour l'eau potable depuis 1995, elles subsistent dans certains immeubles anciens. Le plomb peut passer dans l'eau, et le seuil réglementaire est de 10 microgrammes par litre.",
          "**Colonnes vétustes** : une colonne montante fatiguée fuit aux raccords et touche plusieurs étages. Une [recherche de fuite](/services/fuite-d-eau) localise l'origine avant d'ouvrir.",
          "**Pression insuffisante en étage** : réseau entartré, tuyaux de faible section, vanne à moitié fermée. Le débit chute dès que deux points d'eau coulent.",
          "**Évacuation en fonte** : solide, mais corrodée avec le temps. Elle se bouche et suinte aux joints."
        ]
      },
      {
        "h2": "Remplacer les anciens réseaux : par où commencer",
        "text": "Ces reprises se préparent souvent avec une [rénovation de salle de bain](/services/renovation-salle-de-bain) : l'alimentation et l'évacuation sont refaites en même temps que les équipements. Pour une colonne commune, l'accord du syndic est nécessaire. Mon devis gratuit distingue clairement ce qui relève de votre logement et ce qui relève de la copropriété."
      },
      {
        "h2": "Prix et délais au Capitole",
        "text": "Le devis est gratuit et le prix validé avant le début des travaux (voir nos [tarifs plombier à Muret et Toulouse](/tarifs)). Le délai d'arrivée dépend des interventions en cours et de l'accès au centre-ville : je vous l'indique dès votre appel au 06 50 57 96 20."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    },
    "retour": "Les autres quartiers sont sur la page [plombier à Toulouse](/intervention/toulouse)."
  },
  "toulouse-jean-jaures": {
    "title": "Plombier Toulouse Jean-Jaurès - Dépannage 24h/24 | Nino",
    "description": "Plombier à Jean-Jaurès, Toulouse : fuite, dégât des eaux en immeuble, constat pour l'assurance. Artisan depuis 20 ans, devis gratuit. 06 50 57 96 20.",
    "h1": "Jean-Jaurès : agir vite en cas de dégât des eaux dans un immeuble",
    "intro": "Entre l'hypercentre et la gare Matabiau, le quartier Jean-Jaurès compte de nombreux immeubles collectifs. Une fuite chez soi touche vite le voisin du dessous : j'interviens comme [plombier à Toulouse](/intervention/toulouse) 24h/24 et 7j/7 pour stopper l'écoulement et réparer durablement.",
    "sections": [
      {
        "h2": "Stopper la fuite, comprendre l'origine",
        "text": "J'interviens 24h/24 et 7j/7 à Jean-Jaurès pour couper la fuite, identifier son origine exacte et réparer avec une garantie de 2 ans. Le devis est gratuit et signé avant le premier coup de clé. Consultez aussi ma page principale [plombier à Toulouse](/intervention/toulouse)."
      },
      {
        "h2": "Dégât des eaux : les bons réflexes",
        "text": "Fermez immédiatement votre arrivée d'eau générale, prévenez le voisin du dessous et le syndic si besoin, et photographiez les traces d'humidité avant d'éponger. Le sinistre se déclare à l'assurance dans les 5 jours ouvrés : mon rapport d'intervention précise l'origine de la fuite pour faciliter votre dossier."
      },
      {
        "h2": "Après la fuite : réparer et sécuriser",
        "text": "Une fois l'eau coupée, j'identifie la pièce défaillante, je la répare et je contrôle la pression du réseau pour éviter toute récidive. Pour une fuite encastrée derrière une cloison ou sous un carrelage, la [recherche de fuite](/services/fuite-d-eau) permet de localiser sans casser au hasard. Voir aussi nos [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 : on coupe la fuite d'abord.",
      "kind": "tel"
    },
    "retour": "Retrouvez tous les quartiers et les délais d'intervention sur la page [plombier à Toulouse](/intervention/toulouse), ou consultez le [dépannage plomberie à Toulouse](/services/depannage-plomberie-toulouse)."
  },
  "toulouse-minimes": {
    "title": "Plombier Toulouse Minimes - Salle de bain, 24h/24 | Nino",
    "description": "Plombier aux Minimes, Toulouse : rénovation de salle de bain, douche, dépannage plomberie 24h/24. Artisan depuis 20 ans, devis gratuit. 06 50 57 96 20.",
    "h1": "Minimes : refaire sa salle de bain, étape par étape",
    "intro": "Au nord du canal du Midi, le quartier des Minimes mêle toulousaines traditionnelles et résidences récentes. J'y interviens comme [plombier à Toulouse](/intervention/toulouse) aussi bien pour le dépannage 24h/24 que pour la rénovation complète de salle de bain.",
    "sections": [
      {
        "h2": "Une rénovation de A à Z",
        "text": "Dépose de l'ancienne installation, reprise des arrivées d'eau et des évacuations, pose de la douche à l'italienne, du WC suspendu et du meuble vasque : je réalise toute la plomberie et je m'appuie sur un second professionnel pour les finitions. Vous gardez un seul interlocuteur, votre [plombier à Toulouse](/intervention/toulouse)."
      },
      {
        "h2": "Devis clair, travaux garantis",
        "text": "Le devis est gratuit et le prix annoncé avant le début du chantier. Toutes mes installations sont couvertes par une garantie de 2 ans pièces et main-d'œuvre, et ma ligne de dépannage 06 50 57 96 20 reste ouverte 24h/24."
      },
      {
        "h2": "Rénovation de salle de bain aux Minimes : à prévoir",
        "text": "Avant le chantier, je passe sur place mesurer la pièce, vérifier les pentes d'évacuation et chiffrer les travaux : `[À CONFIRMER PAR NINO : budget indicatif pour la plomberie d'une rénovation de salle de bain]` (voir [nos tarifs](/tarifs)). Le détail complet de la prestation figure sur la page [rénovation de salle de bain](/services/renovation-salle-de-bain)."
      }
    ],
    "cta": {
      "label": "Envoyez les dimensions de la pièce et une photo via le formulaire ou appelez le 06 50 57 96 20.",
      "kind": "form"
    },
    "retour": "Retrouvez tous les quartiers et les délais d'intervention sur la page [plombier à Toulouse](/intervention/toulouse), ou consultez le [dépannage plomberie à Toulouse](/services/depannage-plomberie-toulouse)."
  },
  "toulouse-purpan": {
    "title": "Plombier Toulouse Purpan - Chauffe-eau, 24h/24 | Nino",
    "description": "Plombier à Purpan, Toulouse : entretien et remplacement de chauffe-eau, fuite, débouchage. Artisan depuis 20 ans, devis gratuit. 06 50 57 96 20.",
    "h1": "Purpan : entretenir ou remplacer son chauffe-eau",
    "intro": "À l'ouest de Toulouse, à proximité directe de la rocade et de l'hôpital, le quartier de Purpan compte aussi bien des résidences collectives que des maisons. J'y interviens rapidement comme [plombier à Toulouse](/intervention/toulouse) pour tout dépannage de chauffe-eau, de fuite ou de canalisation bouchée.",
    "sections": [
      {
        "h2": "Chauffe-eau : réparer ou remplacer",
        "text": "Un ballon qui chauffe mal, fait du bruit ou goutte en continu doit être diagnostiqué avant la panne totale. En tant que [plombier à Toulouse](/intervention/toulouse), je contrôle le thermostat, la résistance et la cuve sur place et je vous laisse choisir avec un devis gratuit validé avant travaux."
      },
      {
        "h2": "Dépannage 24h/24 à Purpan",
        "text": "Plus d'eau chaude un dimanche soir ou une fuite sous l'évier : ma ligne 06 50 57 96 20 est ouverte 24h/24 et 7j/7. Grâce à l'accès direct par l'A64 et le périphérique ouest depuis Muret, je rejoins Purpan rapidement, et mes réparations sont garanties 2 ans."
      },
      {
        "h2": "Entretien du chauffe-eau et de la chaudière à Purpan",
        "text": "Un ballon entartré consomme davantage et s'use plus vite : un contrôle régulier du groupe de sécurité et un détartrage prolongent sa durée de vie. Pour une chaudière gaz, l'entretien annuel est obligatoire : consultez l'[entretien de chaudière à Toulouse](/services/entretien-chaudiere-toulouse), la page [chauffe-eau](/services/chauffe-eau) et nos [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 pour un chauffe-eau en panne ou demandez un devis gratuit.",
      "kind": "tel"
    },
    "retour": "Retrouvez tous les quartiers et les délais d'intervention sur la page [plombier à Toulouse](/intervention/toulouse), ou consultez le [dépannage plomberie à Toulouse](/services/depannage-plomberie-toulouse)."
  },
  "toulouse-rangueil": {
    "title": "Plombier Toulouse Rangueil - Dépannage 24h/24 | Nino",
    "description": "Plombier à Rangueil, Toulouse : fuite, évacuation bouchée, qui paie en location. Dépannage 24h/24, artisan depuis 20 ans, devis gratuit. 06 50 57 96 20.",
    "h1": "Rangueil : locataire ou propriétaire, qui paie quoi ?",
    "intro": "Au sud-est de Toulouse, autour du campus universitaire et du CHU, Rangueil compte beaucoup de logements loués. Lorsqu'une fuite ou un bouchon survient, j'interviens comme [plombier à Toulouse](/intervention/toulouse) 24h/24 avec un devis gratuit qui précise clairement l'origine de la panne.",
    "sections": [
      {
        "h2": "Un diagnostic qui éclaire les responsabilités",
        "text": "En location, l'entretien courant (joints, flexible de douche, nettoyage de siphon) est en général à la charge du locataire, tandis que la vétusté d'un chauffe-eau ou une canalisation encastrée relève du propriétaire. Mon devis gratuit de [plombier à Toulouse](/intervention/toulouse) détaille la cause exacte de la panne pour éviter tout litige."
      },
      {
        "h2": "Dépannage rapide depuis l'A64, sans engagement",
        "text": "Rangueil est directement accessible depuis Muret par l'A64 et le périphérique sud. Une fuite ou une évacuation bouchée se traite vite : ma ligne 06 50 57 96 20 est ouverte 24h/24 et 7j/7, le prix est annoncé avant l'intervention et mes réparations sont garanties 2 ans."
      },
      {
        "h2": "Logement étudiant ou familial : gestes à connaître",
        "text": "Quel que soit le logement, le réflexe est le même : repérer le robinet d'arrêt, couper l'eau, photographier, puis m'appeler. Conserver ces photos et la facture simplifie les échanges entre locataire, propriétaire et assurance. Pour un siphon ou un WC bouché, voir le [débouchage](/services/debouchage) et nos [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "cta": {
      "label": "Envoyez une photo du problème via le formulaire ou appelez le 06 50 57 96 20.",
      "kind": "form"
    },
    "retour": "Retrouvez tous les quartiers et les délais d'intervention sur la page [plombier à Toulouse](/intervention/toulouse), ou consultez le [dépannage plomberie à Toulouse](/services/depannage-plomberie-toulouse)."
  },
  "lasserre-pradere": {
    "title": "Plombier Lasserre-Pradère : devis gratuit, artisan de Muret",
    "description": "Plombier à Lasserre-Pradère : Nino Plomberie traite fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Lasserre-Pradère : un artisan du Muretain",
    "intro": "Lasserre-Pradère, commune rurale de Haute-Garonne, bénéficie de la proximité de Muret où est basé Nino Plomberie. Pour une urgence ou un chantier, l'artisan se déplace et intervient rapidement.",
    "sections": [
      {
        "h2": "Dépannage et travaux",
        "text": "Fuite d'eau, chauffe-eau défaillant, canalisation bouchée, ou rénovation de salle de bain : Nino Plomberie traite tous les types de demande. Devis gratuit, prix annoncé avant les travaux, garantie 2 ans."
      },
      {
        "h2": "Une ligne toujours ouverte",
        "text": "24h/24, 7j/7, vous pouvez joindre l'artisan au 06 50 57 96 20 pour une urgence ou prendre rendez-vous pour un projet."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20 pour un devis gratuit.",
      "kind": "tel"
    }
  },
  "puydaniel": {
    "title": "Plombier Puydaniel : urgences 24h/24 | Nino",
    "description": "Plombier à Puydaniel : Nino Plomberie, artisan de Muret, intervient 24h/24. Fuite, chauffe-eau, débouchage. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Puydaniel : l'artisan de Muret à côté",
    "intro": "Puydaniel est une petite commune où l'artisan plombier doit être joignable à toute heure. Nino Plomberie répond 24h/24, 7j/7.",
    "sections": [
      {
        "h2": "Urgence plomberie",
        "text": "Une fuite, une évacuation bouchée, un chauffe-eau qui lâche : appelez le 06 50 57 96 20, quelle que soit l'heure. Un diagnostic et un devis gratuit vous attendent avant toute intervention."
      },
      {
        "h2": "Garantie et transparence",
        "text": "Prix annoncé avant les travaux, réparations garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20 pour une urgence.",
      "kind": "tel"
    }
  },
  "fonbeauzard": {
    "title": "Plombier Fonbeauzard : artisan local, devis gratuit",
    "description": "Plombier à Fonbeauzard : Nino Plomberie traite fuite, chauffe-eau, débouchage. Artisan de Muret. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Fonbeauzard : un artisan de confiance",
    "intro": "Fonbeauzard, commune paisible de la région, mérite un plombier fiable et disponible. Nino Plomberie, basé à Muret, intervient à Fonbeauzard sans délai.",
    "sections": [
      {
        "h2": "Dépannage rapide",
        "text": "Qu'il s'agisse d'une petite réparation ou d'un travail plus important, un seul interlocuteur vous accompagne du diagnostic à la fin des travaux."
      },
      {
        "h2": "Ce qui est garanti",
        "text": "Devis gratuit, prix annoncé, réparations garanties 2 ans."
      }
    ],
    "cta": {
      "label": "Décrivez votre problème via le formulaire, devis gratuit.",
      "kind": "form"
    }
  },
  "pin-balma": {
    "title": "Plombier Pin-Balma : dépannage 24h/24 | Nino",
    "description": "Plombier à Pin-Balma : Nino Plomberie, artisan de Muret, intervient 24h/24. Fuite, chauffe-eau, débouchage. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Pin-Balma : joignable à toute heure",
    "intro": "Pin-Balma est une commune résidentielle où l'on a besoin d'un plombier disponible. Nino Plomberie répond 24h/24, 7j/7.",
    "sections": [
      {
        "h2": "Pannes fréquentes",
        "text": "Robinetterie usée, ballon d'eau chaude entartré, siphon bouché, chauffage qui ne fonctionne pas : des pannes que nous traitons rapidement avec un devis gratuit."
      },
      {
        "h2": "Une garantie de 2 ans",
        "text": "Réparations garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20 pour un devis.",
      "kind": "tel"
    }
  },
  "marignac-lasclares": {
    "title": "Plombier Marignac-Lasclarès : devis gratuit | Nino",
    "description": "Plombier à Marignac-Lasclarès : Nino Plomberie traite fuite, chauffe-eau, chauffage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Marignac-Lasclarès : un artisan de proximité",
    "intro": "Marignac-Lasclarès, commune du Muretain, bénéficie de la proximité de Muret où Nino Plomberie est installé. Dépannage et travaux planifiés, tout sur place.",
    "sections": [
      {
        "h2": "Diagnostic clair",
        "text": "Avant toute réparation, un diagnostic précis vous aide à comprendre la situation et à prendre la bonne décision."
      },
      {
        "h2": "Prix annoncé, travaux garantis",
        "text": "Devis gratuit, prix avant intervention, garantie 2 ans."
      }
    ],
    "cta": {
      "label": "Prenez rendez-vous en ligne pour un diagnostic.",
      "kind": "rdv"
    }
  },
  "varennes": {
    "title": "Plombier Varennes : artisan de Muret, devis gratuit",
    "description": "Plombier à Varennes : Nino Plomberie traite fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Varennes : dépannage sans attendre",
    "intro": "Varennes est une commune où Nino Plomberie, basé à Muret, intervient sans délai pour tous types de dépannage ou travaux.",
    "sections": [
      {
        "h2": "Disponible 24h/24",
        "text": "Une urgence le soir ou le week-end ? Appelez le 06 50 57 96 20, la ligne est toujours ouverte."
      },
      {
        "h2": "Transparence et garantie",
        "text": "Devis gratuit, prix annoncé, réparations garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20 pour une intervention rapide.",
      "kind": "tel"
    }
  },
  "lespinasse": {
    "title": "Plombier L'Espinasse : artisan local, devis gratuit",
    "description": "Plombier à L'Espinasse : Nino Plomberie, artisan de Muret, traite fuite, chauffe-eau, débouchage. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à L'Espinasse : un artisan fiable",
    "intro": "L'Espinasse, petite commune tranquille, mérite un plombier disponible et transparent. Nino Plomberie couvre le secteur depuis Muret.",
    "sections": [
      {
        "h2": "Tous les types de dépannage",
        "text": "Fuite d'eau, chauffe-eau, débouchage, chauffage : nous traitons tous les types de panne et de projet."
      },
      {
        "h2": "Devis gratuit et garantie",
        "text": "Avant d'intervenir, un devis gratuit. Après intervention, une garantie de 2 ans."
      }
    ],
    "cta": {
      "label": "Décrivez votre problème, devis gratuit.",
      "kind": "form"
    }
  },
  "mauvaisin": {
    "title": "Plombier Mauvaisin : urgences 24h/24 | Nino",
    "description": "Plombier à Mauvaisin : Nino Plomberie, artisan de Muret, intervient 24h/24. Fuite, chauffe-eau. Devis gratuit. 06 50 57 96 20.",
    "h1": "Plombier à Mauvaisin : joignable à toute heure",
    "intro": "Mauvaisin est une commune où Nino Plomberie intervient sans délai pour tous vos besoins en plomberie et chauffage.",
    "sections": [
      {
        "h2": "Urgence plomberie",
        "text": "24h/24 et 7j/7, un plombier dépanne votre logement. Le diagnostic est gratuit, le prix annoncé avant l'intervention."
      },
      {
        "h2": "Garantie de 2 ans",
        "text": "Toutes les réparations sont garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20 pour une urgence.",
      "kind": "tel"
    }
  },
  "gratens": {
    "title": "Plombier Gratens : devis gratuit, artisan de Muret",
    "description": "Plombier à Gratens : Nino Plomberie traite fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Gratens : un artisan disponible",
    "intro": "Gratens, commune du secteur Muret, bénéficie de la proximité de Nino Plomberie pour tous types de dépannage et travaux.",
    "sections": [
      {
        "h2": "Dépannage et travaux",
        "text": "Fuite, chauffe-eau, chauffage, salle de bain : nous prenons en charge tous les projets avec un devis gratuit et une garantie 2 ans."
      },
      {
        "h2": "Une ligne ouverte",
        "text": "Joignable 24h/24, 7j/7, pour une urgence ou pour prendre rendez-vous."
      }
    ],
    "cta": {
      "label": "Appelez le 06 50 57 96 20 pour un devis.",
      "kind": "tel"
    }
  },
  "sabonneres": {
    "title": "Plombier Sabonnères : artisan local, devis gratuit",
    "description": "Plombier à Sabonnères : Nino Plomberie traite fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Plombier à Sabonnères : dépannage sans délai",
    "intro": "Sabonnères, commune rurale, bénéficie de la disponibilité de Nino Plomberie pour tous ses besoins en plomberie et chauffage.",
    "sections": [
      {
        "h2": "Disponibilité et transparence",
        "text": "Un artisan disponible à toute heure, avec un devis gratuit et un prix annoncé avant l'intervention."
      },
      {
        "h2": "Garantie de 2 ans",
        "text": "Toutes réparations garanties 2 ans, pièces et main-d'œuvre."
      }
    ],
    "cta": {
      "label": "Prenez rendez-vous en ligne ou appelez le 06 50 57 96 20.",
      "kind": "rdv"
    }
  },
  "toulouse-saint-cyprien": {
    "title": "Plombier Toulouse Saint-Cyprien - Dépannage 24h/24 | Nino",
    "description": "Plombier à Saint-Cyprien, Toulouse : dépannage 24h/24, fuite en immeuble ancien, débouchage, chauffe-eau. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    "h1": "Saint-Cyprien : plombier 24h/24 sur la rive gauche de Toulouse",
    "intro": "Sur la rive gauche de la Garonne, de la place intérieure Saint-Cyprien jusqu'à la Patte d'Oie, les immeubles anciens en brique côtoient des copropriétés plus récentes. J'y interviens 24h/24 comme [plombier à Toulouse](/intervention/toulouse) avec un devis gratuit signé avant travaux.",
    "sections": [
      {
        "h2": "Fuites et colonnes en immeuble ancien à Saint-Cyprien",
        "text": "Dans les appartements anciens de Saint-Cyprien, les évacuations en fonte et les colonnes montantes partagées demandent un diagnostic sans casse avant toute ouverture de mur. En tant que [plombier à Toulouse](/intervention/toulouse), je localise l'origine de la fuite et je fournis un compte rendu clair pour votre syndic et votre assurance (voir [recherche de fuite](/services/fuite-d-eau))."
      },
      {
        "h2": "Débouchage, chauffe-eau et rénovation",
        "text": "WC ou évier bouché, ballon d'eau chaude en panne dans un placard étroit ou [rénovation de salle de bain](/services/renovation-salle-de-bain) : j'interviens 24h/24 et 7j/7 au 06 50 57 96 20 avec une garantie de 2 ans pièces et main-d'œuvre. Consultez nos [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    },
    "retour": "Retrouvez tous les quartiers et les délais d'intervention sur la page [plombier à Toulouse](/intervention/toulouse)."
  },
  "toulouse-carmes": {
    "title": "Plombier Toulouse Les Carmes - Dépannage 24h/24 | Nino",
    "description": "Plombier aux Carmes à Toulouse : dépannage 24h/24, recherche de fuite, débouchage et chauffe-eau en centre historique. Devis gratuit. 06 50 57 96 20.",
    "h1": "Les Carmes : dépannage plomberie dans le centre historique de Toulouse",
    "intro": "Autour du marché des Carmes, de la place de la Trinité et de la rue Pharaon, les hôtels particuliers et immeubles anciens abritent des réseaux d'eau complexes. J'y interviens 24h/24 comme [plombier à Toulouse](/intervention/toulouse) avec plus de 20 ans d'expérience.",
    "sections": [
      {
        "h2": "Intervenir sans casser dans le bâti ancien des Carmes",
        "text": "Parquets anciens, murs en brique foraine et gaines techniques étroites : aux Carmes, chaque intervention de [plombier à Toulouse](/intervention/toulouse) commence par une localisation précise de la panne et la vérification des vannes d'arrêt de copropriété (voir [recherche de fuite](/services/fuite-d-eau))."
      },
      {
        "h2": "Urgences 24h/24 et devis gratuit avant travaux",
        "text": "Fuite d'eau, [débouchage de canalisation](/services/debouchage) ou remplacement de chauffe-eau : appelez le 06 50 57 96 20. Le devis est gratuit, signé avant le premier coup de clé, et garanti 2 ans (voir nos [tarifs](/tarifs))."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    },
    "retour": "Retrouvez tous les quartiers et les délais d'intervention sur la page [plombier à Toulouse](/intervention/toulouse)."
  },
  "toulouse-arenes": {
    "title": "Plombier Toulouse Les Arènes - Dépannage 24h/24 | Nino",
    "description": "Plombier aux Arènes à Toulouse : dépannage 24h/24, fuite, débouchage, chauffe-eau et chaudière. Artisan basé à Muret, devis gratuit. 06 50 57 96 20.",
    "h1": "Les Arènes : dépannage plomberie et chauffage à Toulouse",
    "intro": "Proche de la rocade ouest et du pôle multimodal, le quartier des Arènes réunit grandes résidences et maisons de ville. Depuis Muret par l'A64, j'y interviens rapidement 24h/24 comme [plombier à Toulouse](/intervention/toulouse).",
    "sections": [
      {
        "h2": "Dépannage rapide en résidence et maison aux Arènes",
        "text": "Fuite sur colonne ou arrivée d'eau, WC bouché, panne de chauffe-eau ou de chaudière : en tant que [plombier à Toulouse](/intervention/toulouse), je me déplace 24h/24 et 7j/7 au 06 50 57 96 20 avec un devis gratuit validé avant travaux."
      },
      {
        "h2": "Garantie 2 ans et tarifs annoncés",
        "text": "Toutes mes réparations bénéficient d'une garantie de 2 ans pièces et main-d'œuvre. Consultez le [débouchage de canalisation](/services/debouchage), le [dépannage plomberie à Toulouse](/services/depannage-plomberie-toulouse) et nos [tarifs plombier à Muret et Toulouse](/tarifs)."
      }
    ],
    "cta": {
      "label": "Appelez-moi au 06 50 57 96 20 ou demandez un devis gratuit en ligne.",
      "kind": "form"
    },
    "retour": "Retrouvez tous les quartiers et les délais d'intervention sur la page [plombier à Toulouse](/intervention/toulouse)."
  }
}

export const zoneSlugs = Object.keys(zoneContent)

import { zoneExtra1 } from "./zone-extra-1"
import { zoneExtra2 } from "./zone-extra-2"
import { zoneExtra3 } from "./zone-extra-3"
import { zoneExtra4 } from "./zone-extra-4"
import { zoneExtra5 } from "./zone-extra-5"
import { zoneExtra6 } from "./zone-extra-6"
import { zoneExtra7 } from "./zone-extra-7"

const zoneExtra: Record<string, ZoneExtra> = { ...zoneExtra1, ...zoneExtra2, ...zoneExtra3, ...zoneExtra4, ...zoneExtra5 }

/** Contenu complet d'une page de zone : sections de base + sections complémentaires, FAQ locale */
export function getZoneContent(slug: string): (ZoneContent & { faq: Array<{ q: string; a: string }> }) | undefined {
  const base = zoneContent[slug]
  if (!base) return undefined
  const baseFaq = base.sections.flatMap((s) => s.faq ?? [])
  if (base.strictSections) {
    return {
      ...base,
      sections: base.sections,
      faq: baseFaq,
    }
  }
  const extra = zoneExtra[slug]
  const more = zoneExtra6[slug]
  const last = zoneExtra7[slug]
  return {
    ...base,
    sections: [...base.sections.map((s) => ({ ...s, faq: undefined })).filter((s) => (s.bullets && s.bullets.length > 0) || (s.text ?? "").split(" ").length >= 22), ...(extra?.sections ?? []), ...(more?.sections ?? []), ...(last?.sections ?? [])],
    faq: [...baseFaq, ...(extra?.faq ?? []), ...(more?.faq ?? []), ...(last?.faq ?? [])],
  }
}
