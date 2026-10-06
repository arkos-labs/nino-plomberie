// Contenu complémentaire des pages de zone (lot 1/5). Chaque commune a ses propres sections et sa propre FAQ.
import type { ZoneExtra } from "./zone-content"

export const zoneExtra1: Record<string, ZoneExtra> = {
  toulouse: {
    sections: [
      {
        h2: "Dégât des eaux en appartement : agir dans l'ordre",
        text: "À Toulouse, la majorité des logements sont des appartements, et une fuite touche vite le voisin du dessous. Premier réflexe : fermer le robinet d'arrêt de votre logement, couper l'électricité de la pièce concernée si l'eau atteint des prises, puis prévenir le voisin ou le gardien. Photographiez les dégâts avant d'éponger : le constat amiable de dégât des eaux se transmet à l'assurance dans les 5 jours ouvrés. Nino Plomberie identifie l'origine de la fuite (équipement privatif ou partie commune) et la répare, ce qui facilite le dossier d'assurance.",
      },
      {
        h2: "Du centre historique aux quartiers périphériques",
        text: "Les immeubles anciens du centre, de Saint-Cyprien ou des quartiers proches de la Garonne et du canal du Midi cachent souvent des canalisations d'origine, des colonnes montantes partagées et des ballons d'eau chaude installés dans des espaces exigus. Dans les secteurs plus récents, autour de Purpan, de Rangueil ou de la rocade, on rencontre plutôt des fuites sur joints, des mitigeurs fatigués ou des évacuations qui se bouchent. Dans les deux cas, la méthode reste la même : diagnostic, explication, devis gratuit, puis réparation.",
      },
      {
        h2: "Ce que Nino Plomberie traite à Toulouse",
        bullets: [
          "Recherche et réparation de fuites, y compris sur canalisations encastrées",
          "Débouchage de WC, éviers, douches et colonnes",
          "Remplacement de chauffe-eau et de ballons d'eau chaude",
          "Dépannage de chaudière et de chauffage",
          "Rénovation de salle de bain et pose de cuisine",
        ],
      },
    ],
    faq: [
      { q: "Comment joindre un plombier à Toulouse en pleine nuit ?", a: "Appelez le 06 50 57 96 20 : la ligne est ouverte 24h/24 et 7j/7, week-ends et jours fériés compris. Décrivez la situation, Nino vous indique les gestes à faire en attendant et organise le déplacement depuis Muret." },
      { q: "Intervenez-vous dans les copropriétés toulousaines ?", a: "Oui, pour les parties privatives (appartement, cave, parking) comme pour les petites interventions demandées par un syndic ou un gestionnaire. Pour une colonne montante commune, il faut l'accord du syndic." },
      { q: "Le devis est-il payant ?", a: "Non, le devis est gratuit et le prix vous est annoncé avant le début des travaux. Les réparations sont garanties 2 ans, pièces et main-d'œuvre." },
    ],
  },

  muret: {
    sections: [
      {
        h2: "Un artisan installé rue François Arago",
        text: "Nino Plomberie a son adresse à Muret, au 11 rue François Arago, et se déplace dans toute la ville. Cette proximité a un effet concret : en cas de fuite ou de panne de chauffe-eau, il n'y a pas de trajet depuis l'agglomération toulousaine à prévoir, et l'artisan connaît déjà les types de logements de la commune.",
      },
      {
        h2: "Muret : maisons de ville, pavillons et copropriétés",
        text: "Le centre de Muret et ses abords de la Garonne comptent des maisons anciennes dont les arrivées d'eau, les évacuations et les ballons d'eau chaude ont souvent été modifiés au fil des années. Les quartiers pavillonnaires, eux, posent plutôt des questions d'entretien : robinetterie à remplacer, groupe de sécurité du chauffe-eau à contrôler, siphons à nettoyer. Les petits collectifs près de la gare ont leurs propres contraintes de colonne et de compteur.",
      },
      {
        h2: "Entretenir pour éviter la panne",
        numbered: true,
        bullets: [
          "Manœuvrer régulièrement le groupe de sécurité du chauffe-eau pour éviter qu'il ne se bloque",
          "Repérer le robinet d'arrêt général pour pouvoir couper l'eau rapidement",
          "Contrôler les joints et flexibles sous les éviers et derrière les WC",
          "Faire entretenir la chaudière chaque année, c'est une obligation",
        ],
      },
    ],
    faq: [
      { q: "Où se trouve Nino Plomberie à Muret ?", a: "11 rue François Arago, 31600 Muret. L'entreprise est joignable au 06 50 57 96 20, 24h/24 et 7j/7." },
      { q: "Faites-vous la salle de bain complète à Muret ?", a: "Oui. Nino Plomberie traite la plomberie et s'appuie sur un second professionnel pour les finitions, avec un devis gratuit unique." },
      { q: "Combien de temps dure la garantie ?", a: "Les réparations sont garanties 2 ans, pièces et main-d'œuvre." },
    ],
  },

  saubens: {
    sections: [
      {
        h2: "Une commune au bord de la Garonne, à l'entrée de Muret",
        text: "Saubens s'étire le long de la Garonne entre Muret et l'agglomération toulousaine. Le village mêle quelques maisons anciennes et des lotissements plus récents. Pour un plombier basé à Muret, la route est courte, ce qui compte quand une fuite oblige à couper l'eau pour toute la maison.",
      },
      {
        h2: "Repérer une fuite avant qu'elle ne s'aggrave",
        text: "Fermez tous les robinets et appareils, puis observez le compteur : s'il continue à tourner, l'eau s'échappe quelque part (canalisation, chasse d'eau, chauffe-eau). Une tache d'humidité qui s'étend, une odeur de moisi, une pression qui baisse ou une facture d'eau qui grimpe sont d'autres signaux. Nino Plomberie localise l'origine avant de réparer, pour ne pas ouvrir un mur ou un sol inutilement.",
      },
      {
        h2: "Pannes que l'on voit souvent dans les maisons individuelles",
        bullets: [
          "Chauffe-eau qui goutte au niveau du groupe de sécurité ou de la cuve",
          "WC qui coule en continu à cause d'un mécanisme de chasse usé",
          "Évacuation de douche ou d'évier de plus en plus lente",
          "Robinet extérieur qui fuit après l'hiver",
        ],
      },
    ],
    faq: [
      { q: "Pouvez-vous venir à Saubens le soir ou le week-end ?", a: "Oui, la ligne 06 50 57 96 20 est ouverte 24h/24 et 7j/7. Une urgence un samedi soir est traitée comme un dépannage en semaine." },
      { q: "Comment savoir si j'ai une fuite cachée ?", a: "Fermez tous les points d'eau et regardez le compteur : s'il bouge, il y a une fuite. Appelez-nous pour la localiser et la réparer." },
      { q: "Que comprend le devis gratuit ?", a: "Un diagnostic de la panne, la liste des travaux et le prix annoncé avant toute intervention." },
    ],
  },

  seysses: {
    sections: [
      {
        h2: "Seysses : un habitat qui s'est étendu rapidement",
        text: "La commune de Seysses, voisine de Muret, a accueilli de nombreux lotissements. Les maisons construites à des périodes différentes n'ont pas les mêmes installations : tuyauterie en cuivre pour certaines, en PER ou en multicouche pour d'autres, ballons d'eau chaude de capacités variées. Un diagnostic préalable évite de proposer un remplacement là où une simple réparation suffit.",
      },
      {
        h2: "Chauffe-eau : combien de temps tient-il ?",
        text: "Un ballon électrique dure en général une dizaine d'années, parfois davantage selon l'entretien et la dureté de l'eau. Les signes de fatigue sont une eau qui chauffe moins, un temps de chauffe plus long, un bruit de calcaire dans la cuve ou une fuite au niveau du groupe de sécurité. Mieux vaut planifier le remplacement que le subir en urgence, avec le choix de la capacité adaptée au nombre d'occupants.",
      },
      {
        h2: "Pour un projet de salle de bain",
        numbered: true,
        bullets: [
          "Visite et diagnostic de l'existant (arrivées, évacuations, ventilation)",
          "Devis détaillé et gratuit, avec le périmètre de chaque intervenant",
          "Plomberie par Nino, finitions par un second professionnel",
          "Contrôle des raccords et remise du chantier propre",
        ],
      },
    ],
    faq: [
      { q: "Intervenez-vous à Seysses pour de petits travaux ?", a: "Oui : changement de robinet, de flexible, de mécanisme de chasse, remplacement de siphon. Un devis gratuit vous est donné avant la prestation." },
      { q: "Peut-on remplacer le chauffe-eau sur rendez-vous ?", a: "Oui, vous pouvez réserver un créneau en ligne ou appeler le 06 50 57 96 20. Le remplacement planifié évite la panne un week-end." },
      { q: "Votre travail est-il garanti ?", a: "Oui, 2 ans pièces et main-d'œuvre sur les réparations." },
    ],
  },

  villate: {
    sections: [
      {
        h2: "Villate : le plombier de Muret, sans intermédiaire",
        text: "Dans une petite commune résidentielle comme Villate, les habitants préfèrent généralement un artisan qu'ils peuvent rappeler directement. Chez Nino Plomberie, le téléphone sonne chez l'artisan : pas de centre d'appels, pas de sous-traitant envoyé à la dernière minute. Vous expliquez votre problème à la personne qui interviendra.",
      },
      {
        h2: "Les gestes à connaître avant l'arrivée du plombier",
        numbered: true,
        bullets: [
          "Repérer et fermer le robinet d'arrêt général, souvent près du compteur",
          "Couper l'électricité si l'eau a atteint des prises ou le tableau",
          "Poser un récipient sous la fuite et éponger pour limiter les dégâts",
          "Prendre quelques photos pour l'assurance",
        ],
      },
      {
        h2: "Au-delà du dépannage",
        text: "Nino ne se limite pas aux urgences : remplacement de robinetterie, installation d'un chauffe-eau, création ou rénovation de salle de bain, plomberie d'une extension. Pour un projet, demandez un devis gratuit : le prix et le périmètre des travaux sont fixés avant de commencer.",
      },
    ],
    faq: [
      { q: "Est-ce que Villate fait partie de votre zone ?", a: "Oui, Villate est une commune voisine de Muret où Nino Plomberie intervient, en urgence comme sur rendez-vous." },
      { q: "Vous déplacez-vous pour un simple robinet qui goutte ?", a: "Oui. Un robinet qui goutte gaspille de l'eau et abîme le joint ou la cartouche : une réparation rapide évite un remplacement complet." },
      { q: "Comment obtenir un devis ?", a: "Par téléphone au 06 50 57 96 20 ou via le formulaire de contact, avec une photo si possible. Le devis est gratuit." },
    ],
  },

  eaunes: {
    sections: [
      {
        h2: "Eaunes : à quelques minutes de l'atelier de Muret",
        text: "Eaunes touche Muret au sud-est. Un dépannage y demande très peu de temps de trajet depuis la rue François Arago, ce qui est précieux quand une fuite impose de couper l'eau pour toute la famille ou quand un chauffe-eau cesse de fonctionner un soir d'hiver.",
      },
      {
        h2: "Pavillons : les points à surveiller",
        text: "Dans les maisons individuelles d'Eaunes, quelques équipements concentrent la majorité des pannes. Le groupe de sécurité du chauffe-eau peut goutter en continu, signe d'entartrage ou d'une pression trop élevée. Les joints de robinetterie durcissent avec le temps. Les siphons de douche s'encrassent de cheveux et de savon. Un point annuel sur ces éléments évite beaucoup de mauvaises surprises.",
      },
      {
        h2: "Une intervention en trois temps",
        numbered: true,
        bullets: ["Diagnostic sur place et explication de la cause", "Devis annoncé avant de commencer", "Réparation, essai de bon fonctionnement et garantie de 2 ans"],
      },
    ],
    faq: [
      { q: "À Eaunes, intervenez-vous aussi la nuit ?", a: "Oui, le numéro 06 50 57 96 20 est joignable 24h/24, 7j/7, jours fériés compris." },
      { q: "Mon chauffe-eau goutte, est-ce grave ?", a: "Cela peut venir du groupe de sécurité (normal par moments, anormal en continu) ou de la cuve. Dans le second cas, un remplacement est à prévoir. Un diagnostic permet de trancher." },
      { q: "Le devis est-il gratuit ?", a: "Oui, et le prix est annoncé avant les travaux." },
    ],
  },

  "pins-justaret": {
    sections: [
      {
        h2: "Plomberie et chauffage : pourquoi un seul interlocuteur aide",
        text: "Quand l'eau chaude manque, la cause peut venir du chauffe-eau, de la chaudière, d'un mitigeur ou d'une vanne. Confier le diagnostic à un artisan qui maîtrise à la fois la plomberie et le chauffage évite les renvois d'un corps de métier à l'autre. À Pins-Justaret, où les logements vont de la maison ancienne au pavillon récent, c'est un vrai gain de temps.",
      },
      {
        h2: "Entretien annuel de la chaudière",
        text: "L'entretien annuel d'une chaudière est une obligation légale pour les chaudières à gaz et à fioul. Il permet de contrôler la combustion, de nettoyer les organes essentiels et de repérer une usure avant la panne. Si votre chaudière fait un bruit inhabituel, perd de la pression ou s'arrête sans raison, un dépannage rapide évite un remplacement prématuré.",
      },
      {
        h2: "Bien choisir un chauffe-eau",
        bullets: [
          "Capacité adaptée au nombre de personnes et aux usages (baignoire, double vasque)",
          "Emplacement et accès pour l'entretien du groupe de sécurité",
          "Évacuation des condensats ou du trop-plein correctement raccordée",
        ],
      },
    ],
    faq: [
      { q: "Entretenez-vous les chaudières à Pins-Justaret ?", a: "Nino Plomberie assure le dépannage et le remplacement de chaudière ; contactez-nous pour convenir d'une visite." },
      { q: "Mon eau chaude est tiède, que faire ?", a: "Vérifiez le disjoncteur et le thermostat du ballon, puis appelez-nous : cela peut venir d'une résistance, d'un thermostat ou d'un entartrage." },
      { q: "Un devis est-il possible par photo ?", a: "Oui, envoyez une photo via le formulaire de contact pour un premier avis, avant un devis gratuit complet." },
    ],
  },

  roquettes: {
    sections: [
      {
        h2: "Roquettes : une proximité utile la nuit",
        text: "Les pannes de plomberie ne respectent pas les horaires : un flexible qui lâche à 23 h, un chauffe-eau qui coule un dimanche matin. Roquettes, voisine de Muret, est suffisamment proche pour qu'une intervention d'urgence soit réaliste à toute heure, avec un artisan qui répond lui-même au téléphone.",
      },
      {
        h2: "Fuite d'urgence : la marche à suivre",
        numbered: true,
        bullets: [
          "Fermer l'arrivée d'eau générale au compteur",
          "Couper le courant dans la zone touchée si l'eau approche d'une prise ou du tableau",
          "Éponger, poser un récipient et ouvrir les robinets pour vider le circuit",
          "Prendre des photos des dégâts et appeler le 06 50 57 96 20",
        ],
      },
      {
        h2: "Après l'intervention",
        text: "Une fois la fuite stoppée, Nino vérifie l'état des raccords voisins, remet l'eau progressivement et teste la pression. Vous recevez une explication claire de la cause pour décider si une rénovation est utile. Les réparations sont garanties 2 ans, pièces et main-d'œuvre.",
      },
    ],
    faq: [
      { q: "Intervenez-vous à Roquettes un dimanche ?", a: "Oui, 24h/24 et 7j/7, y compris dimanches et jours fériés." },
      { q: "Que faire si l'eau coule et que je ne trouve pas le robinet d'arrêt ?", a: "Appelez-nous immédiatement : nous vous guidons pour localiser le robinet près du compteur ou à l'entrée du logement." },
      { q: "Le prix change-t-il la nuit ?", a: "Le prix est toujours annoncé avant l'intervention. Pour une urgence, demandez-le au téléphone." },
    ],
  },

  "saint-hilaire": {
    sections: [
      {
        h2: "À Saint-Hilaire, la recommandation compte",
        text: "Dans un village, un artisan se choisit souvent sur ce que disent les voisins. Nino Plomberie affiche 4,4/5 sur 79 avis Google, avec plus de 20 ans d'expérience. Vous pouvez lire les avis sur la fiche Google avant d'appeler et vous faire votre propre idée.",
      },
      {
        h2: "Ce que comprend une intervention de dépannage",
        bullets: [
          "Un déplacement depuis Muret et un diagnostic expliqué en termes simples",
          "Un devis gratuit, annoncé avant de toucher à l'installation",
          "Une réparation avec pièces adaptées, un essai et une remise en service",
          "Une garantie de 2 ans, pièces et main-d'œuvre",
        ],
      },
      {
        h2: "Entretenir sa plomberie sans se ruiner",
        text: "Un détartrage ou un contrôle des joints coûte bien moins qu'une réparation après dégât des eaux. Surveillez vos robinets, vos flexibles de lave-linge et de lave-vaisselle (à remplacer tous les quelques années), et la pression de l'eau : une pression trop élevée use les joints et les appareils. Un réducteur de pression peut se poser en amont.",
      },
    ],
    faq: [
      { q: "Où lire les avis sur Nino Plomberie ?", a: "Sur la fiche Google de l'entreprise, accessible depuis cette page : 4,4/5 sur 79 avis." },
      { q: "Intervenez-vous à Saint-Hilaire en urgence ?", a: "Oui, appelez le 06 50 57 96 20, la ligne est ouverte 24h/24 et 7j/7." },
      { q: "Les devis sont-ils gratuits ?", a: "Oui, et le prix est annoncé avant les travaux." },
    ],
  },

  "labarthe-sur-leze": {
    sections: [
      {
        h2: "Labarthe-sur-Lèze : entre pavillons et maisons de caractère",
        text: "La commune, traversée par la Lèze et proche de la RD820, compte beaucoup de maisons individuelles dont les installations ont de dix à trente ans. À cet âge, les ballons d'eau chaude, la robinetterie et les évacuations demandent de l'attention : entartrage, joints desséchés, mécanismes de chasse fatigués. Un point d'ensemble permet de prioriser ce qui doit être remplacé.",
      },
      {
        h2: "Préparer un projet de rénovation",
        numbered: true,
        bullets: [
          "Décrire le projet (salle de bain, cuisine, arrivée d'eau supplémentaire)",
          "Envoyer quelques photos pour un premier avis",
          "Recevoir un devis gratuit, avec périmètre et prix annoncé",
          "Fixer ensemble les dates d'intervention",
        ],
      },
      {
        h2: "Quand appeler en urgence",
        text: "Fuite visible, eau qui ne s'arrête pas, chauffe-eau qui déborde, évacuation totalement bouchée : ces cas ne peuvent pas attendre. Nino Plomberie répond 24h/24 et 7j/7 au 06 50 57 96 20 et vous aide à limiter les dégâts pendant le trajet.",
      },
    ],
    faq: [
      { q: "Faites-vous le débouchage à Labarthe-sur-Lèze ?", a: "Oui : WC, évier, douche, baignoire et canalisations, avec du matériel adapté et sans produit agressif pour les tuyaux." },
      { q: "Combien de temps pour rénover une salle de bain ?", a: "Cela dépend de l'étendue du projet. La durée vous est précisée dans le devis gratuit, après visite." },
      { q: "Vos réparations sont-elles garanties ?", a: "Oui, 2 ans pièces et main-d'œuvre." },
    ],
  },
}
