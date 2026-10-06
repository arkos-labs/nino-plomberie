// Contenu complémentaire des pages de zone (lot 3/5).
import type { ZoneExtra } from "./zone-content"

export const zoneExtra3: Record<string, ZoneExtra> = {
  cugnaux: {
    sections: [
      {
        h2: "Cugnaux, aux portes de Toulouse",
        text: "Cugnaux est une commune dense, située juste au sud-ouest de Toulouse. On y trouve des pavillons, des résidences et des immeubles plus récents. Les habitants ont souvent besoin d'un dépannage rapide, parce qu'une fuite en appartement touche vite le voisin du dessous.",
      },
      {
        h2: "Pavillon ou résidence : ce qui change",
        text: "En pavillon, vous avez la main sur toute l'installation : compteur, robinet d'arrêt, chauffe-eau, évacuations. Une panne se traite en un point précis. En résidence, la part privative commence après le robinet d'arrêt du logement ; les colonnes, les évacuations communes et les compteurs divisionnaires relèvent souvent du syndic. Savoir où s'arrête votre responsabilité simplifie les démarches.",
      },
      {
        h2: "Étapes d'une intervention",
        numbered: true,
        bullets: ["Appel et premières consignes", "Diagnostic sur place", "Devis gratuit annoncé avant de commencer", "Réparation, essai et garantie 2 ans"],
      },
    ],
    faq: [
      { q: "Intervenez-vous à Cugnaux le week-end ?", a: "Oui, la ligne 06 50 57 96 20 est ouverte 24h/24, 7j/7." },
      { q: "Je suis locataire, qui paie la réparation ?", a: "Cela dépend de la nature de la panne (entretien courant ou vétusté). Nino peut établir un devis et un compte rendu à transmettre au propriétaire." },
      { q: "Faites-vous les salles de bain ?", a: "Oui, avec un second professionnel pour les finitions. Devis gratuit." },
    ],
  },

  "portet-sur-garonne": {
    sections: [
      {
        h2: "Une ville résidentielle et commerçante au sud de Toulouse",
        text: "Portet-sur-Garonne est desservie par la gare, reliée à Toulouse et à Muret, et abrite de nombreuses zones commerciales et d'activité. Les besoins en plomberie vont des particuliers aux petits commerces et locaux professionnels : sanitaires, points d'eau, chauffe-eau.",
      },
      {
        h2: "Pour les petits locaux professionnels",
        text: "Un point d'eau en panne dans un commerce, un cabinet ou un atelier doit être rétabli vite. Nino se déplace avec un diagnostic clair et un devis gratuit, dans la mesure du possible avant que l'activité ne soit trop perturbée. Pour un local loué, pensez à vérifier qui, du bailleur ou du locataire, est responsable de l'équipement concerné.",
      },
      {
        h2: "Pour les particuliers",
        bullets: ["Fuite d'eau et dégât des eaux", "Débouchage de WC et d'évier", "Remplacement de chauffe-eau", "Rénovation de salle de bain, pose de cuisine"],
      },
    ],
    faq: [
      { q: "Dépannez-vous aussi les commerces ?", a: "Oui, pour les petits locaux professionnels. Appelez le 06 50 57 96 20 en décrivant le besoin." },
      { q: "Intervenez-vous à Portet-sur-Garonne en urgence ?", a: "Oui, 24h/24 et 7j/7." },
      { q: "Établissez-vous des devis gratuits ?", a: "Oui, pour les particuliers comme pour les professionnels." },
    ],
  },

  "villeneuve-tolosane": {
    sections: [
      {
        h2: "Un tissu pavillonnaire proche de Toulouse",
        text: "Villeneuve-Tolosane est une commune résidentielle proche de Toulouse, composée de nombreux lotissements. Au bout de dix à quinze ans, certains équipements commencent à montrer des signes d'usure : mitigeurs, flexibles, joints, ballons d'eau chaude. Un contrôle préventif évite de gérer une panne dans l'urgence.",
      },
      {
        h2: "La check-list de l'entretien annuel",
        numbered: true,
        bullets: [
          "Manœuvrer le groupe de sécurité du chauffe-eau",
          "Vérifier les joints et flexibles sous les éviers et derrière les WC",
          "Nettoyer les siphons et les bondes",
          "Contrôler la pression d'eau et l'état du robinet d'arrêt général",
        ],
      },
      {
        h2: "Projets : cuisine, salle de bain, extension",
        text: "Pour un agrandissement ou une rénovation, la plomberie doit être pensée en amont : positions des arrivées et évacuations, pentes, accès aux raccords. Nino intervient sur la partie plomberie et s'appuie sur un second professionnel pour les finitions, avec un devis unique.",
      },
    ],
    faq: [
      { q: "Intervenez-vous à Villeneuve-Tolosane en soirée ?", a: "Oui, la ligne est ouverte 24h/24 et 7j/7." },
      { q: "Faites-vous la pose de cuisine ?", a: "Oui, la pose de cuisine fait partie de nos prestations." },
      { q: "Combien dure la garantie ?", a: "2 ans, pièces et main-d'œuvre." },
    ],
  },

  "plaisance-du-touch": {
    sections: [
      {
        h2: "Une grande commune résidentielle de l'ouest toulousain",
        text: "Plaisance-du-Touch compte beaucoup de lotissements et de familles actives. Beaucoup d'habitants travaillent en journée à Toulouse ou ailleurs, ce qui complique la prise de rendez-vous avec un artisan. D'où l'intérêt d'un agenda en ligne et d'une ligne joignable au-delà des heures de bureau.",
      },
      {
        h2: "Comment gagner du temps avec un artisan",
        text: "Avant d'appeler, rassemblez trois informations : ce qui ne fonctionne plus, depuis quand, et si la panne s'aggrave. Quelques photos aident à préparer le déplacement. Précisez aussi l'âge approximatif de l'équipement concerné. Ces éléments permettent un devis gratuit plus précis et évitent un second déplacement.",
      },
      {
        h2: "Prestations disponibles",
        bullets: ["Chauffe-eau, chauffage, chaudière", "Robinetterie et sanitaires", "Salle de bain, plomberie neuve", "Pose de cuisine"],
      },
    ],
    faq: [
      { q: "Peut-on réserver un créneau en ligne ?", a: "Oui, l'agenda en ligne propose un diagnostic avec première visite gratuite." },
      { q: "Faut-il être présent pendant l'intervention ?", a: "Oui, une personne doit être présente pour donner accès au logement et valider le devis." },
      { q: "Les réparations sont-elles garanties ?", a: "Oui, 2 ans pièces et main-d'œuvre." },
    ],
  },

  tournefeuille: {
    sections: [
      {
        h2: "Tournefeuille : une commune où Nino est déjà intervenu",
        text: "Nino Plomberie a déjà réalisé des chantiers à Tournefeuille. La commune, située à l'ouest de Toulouse, réunit pavillons, résidences et collectifs. Connaître ces différents types d'habitat permet d'anticiper les contraintes d'accès, de coupure d'eau et de coordination avec les voisins.",
      },
      {
        h2: "Conseils selon le type de logement",
        text: "Dans une résidence, prévenez le syndic ou le gardien avant une intervention nécessitant de couper l'eau dans les parties communes. Dans un pavillon, repérez le robinet d'arrêt et la vanne du chauffe-eau. Dans tous les cas, gardez à portée de main la facture ou la référence des équipements installés : elle accélère le diagnostic.",
      },
      {
        h2: "Ce qui est garanti",
        bullets: ["Devis gratuit", "Prix annoncé avant les travaux", "Garantie 2 ans pièces et main-d'œuvre", "Plus de 20 ans d'expérience"],
      },
    ],
    faq: [
      { q: "Avez-vous déjà travaillé à Tournefeuille ?", a: "Oui, des chantiers y ont été réalisés. Nous ne détaillons pas ici les adresses des clients." },
      { q: "Intervenez-vous en urgence ?", a: "Oui, 24h/24 et 7j/7 au 06 50 57 96 20." },
      { q: "Puis-je envoyer des photos ?", a: "Oui, via le formulaire de contact, pour un premier avis avant un devis gratuit." },
    ],
  },

  fonsorbes: {
    sections: [
      {
        h2: "Une commune en forte croissance",
        text: "Fonsorbes, à l'ouest de Muret, a vu de nombreux lotissements se construire. Les maisons les plus récentes arrivent à l'âge des premières réparations importantes : chauffe-eau, robinetterie, évacuations. C'est le bon moment pour un contrôle plutôt que d'attendre la panne.",
      },
      {
        h2: "Choisir un chauffe-eau adapté",
        text: "La capacité d'un chauffe-eau se choisit selon le nombre d'occupants : environ 100 à 150 litres pour une à deux personnes, 200 litres pour une famille, davantage si l'on utilise une baignoire ou un bain à remous. Un ballon trop petit s'épuise vite, un ballon trop grand consomme inutilement. Nino vous conseille avant de poser.",
      },
      {
        h2: "Pour une salle de bain neuve",
        numbered: true,
        bullets: ["Définir le besoin et le budget", "Visite sur place et devis gratuit", "Plomberie par Nino, finitions par un second professionnel", "Contrôle final"],
      },
    ],
    faq: [
      { q: "Pouvez-vous intervenir à Fonsorbes ?", a: "Oui, depuis Muret. Appelez le 06 50 57 96 20 pour les modalités selon votre besoin." },
      { q: "Quelle capacité de chauffe-eau pour une famille ?", a: "Environ 200 litres pour 3 à 4 personnes, à ajuster selon vos usages. Nino vous conseille lors du devis gratuit." },
      { q: "Garantie ?", a: "2 ans pièces et main-d'œuvre." },
    ],
  },

  roques: {
    sections: [
      {
        h2: "Roques : à quelques minutes de Muret",
        text: "Roques fait partie des communes les plus proches de Muret. C'est un avantage décisif pour une intervention d'urgence : le temps de trajet est court, ce qui limite les dégâts d'une fuite et le temps passé sans eau chaude ou sans WC utilisable.",
      },
      {
        h2: "Trois pannes très fréquentes",
        bullets: ["Chasse d'eau qui fuit en continu (mécanisme ou flotteur usé)", "Mitigeur qui goutte ou qui ne règle plus la température", "Évacuation de douche ou de lavabo de plus en plus lente"],
      },
      {
        h2: "Prévenir plutôt que subir",
        text: "Un flexible de lave-linge ou de lave-vaisselle peut céder sans prévenir. Remplacez-le régulièrement, surtout s'il est rigide, craquelé ou rouillé aux raccords. Fermez le robinet d'alimentation en cas d'absence prolongée. Quelques minutes de contrôle évitent un dégât des eaux.",
      },
    ],
    faq: [
      { q: "Quel est le délai pour venir à Roques ?", a: "Roques est voisine de Muret : le délai est court et vous est précisé lors de l'appel au 06 50 57 96 20." },
      { q: "Intervenez-vous la nuit ?", a: "Oui, 24h/24, 7j/7." },
      { q: "Avez-vous une garantie ?", a: "Oui, 2 ans pièces et main-d'œuvre." },
    ],
  },

  auterive: {
    sections: [
      {
        h2: "Auterive : une ville de l'Ariège toulousaine à l'habitat varié",
        text: "Auterive, au sud de Muret sur les bords de l'Ariège, mêle un centre ancien, des quartiers résidentiels et des hameaux. Le centre compte des maisons de ville anciennes dont la plomberie a été modifiée plusieurs fois ; les quartiers plus récents ont des installations plus homogènes.",
      },
      {
        h2: "Rénover une installation ancienne",
        text: "Dans un bâti ancien, la remise à niveau de la plomberie est souvent liée à une rénovation globale : salle de bain, cuisine, isolation. C'est l'occasion de remplacer les canalisations vieillissantes, de repositionner les évacuations avec les bonnes pentes et d'installer un chauffe-eau adapté. Un devis gratuit permet de comparer rénovation partielle et complète.",
      },
      {
        h2: "Prestations",
        bullets: ["Dépannage fuite, débouchage", "Chauffage et chaudière", "Chauffe-eau", "Salle de bain, plomberie neuve", "Pose de cuisine"],
      },
    ],
    faq: [
      { q: "Intervenez-vous à Auterive ?", a: "Oui, depuis Muret. Les modalités sont précisées au téléphone selon la nature de l'intervention." },
      { q: "Peut-on avoir un devis pour une rénovation ?", a: "Oui, devis gratuit après visite ou à partir de photos." },
      { q: "Quelle garantie sur les travaux ?", a: "2 ans, pièces et main-d'œuvre sur les réparations." },
    ],
  },

  noe: {
    sections: [
      {
        h2: "Noé : un village de la Garonne",
        text: "Noé est un village du sud de la Haute-Garonne, au bord du fleuve. Les maisons y sont majoritairement individuelles. Pour leurs propriétaires, le choix d'un artisan passe beaucoup par la confiance : on veut savoir qui vient, ce qu'il va faire et combien cela coûtera.",
      },
      {
        h2: "Ce que disent les avis",
        text: "Nino Plomberie est noté 4,4/5 sur 79 avis Google. Les avis de la fiche permettent de vérifier le sérieux des interventions, la clarté des devis et la qualité du suivi. Nous vous invitons à les lire avant de nous contacter.",
      },
      {
        h2: "Votre intervention",
        numbered: true,
        bullets: ["Appel ou message avec photos", "Devis gratuit, prix annoncé", "Intervention et essai", "Garantie 2 ans"],
      },
    ],
    faq: [
      { q: "Intervenez-vous à Noé ?", a: "Oui, depuis Muret. Appelez le 06 50 57 96 20 pour connaître les modalités." },
      { q: "Où consulter les avis ?", a: "Sur la fiche Google de Nino Plomberie : 4,4/5 sur 79 avis." },
      { q: "Le devis est-il payant ?", a: "Non, il est gratuit." },
    ],
  },

  capens: {
    sections: [
      {
        h2: "Capens : maisons individuelles et besoins classiques",
        text: "À Capens, les maisons individuelles dominent. Les besoins sont ceux d'un habitat de village : robinetterie, chauffe-eau, évacuations, parfois chauffage. Un plombier qui se déplace depuis Muret évite de chercher un artisan introuvable au dernier moment.",
      },
      {
        h2: "Reconnaître un chauffe-eau en fin de vie",
        bullets: ["Eau qui reste tiède malgré un thermostat réglé", "Goutte qui coule en permanence du groupe de sécurité", "Traces de rouille ou d'humidité à la base de la cuve", "Bruits de calcaire pendant le chauffage"],
      },
      {
        h2: "Réparer ou remplacer ?",
        text: "Un thermostat ou une résistance se remplacent. Une cuve percée ou fortement corrodée, non. Nino établit un devis gratuit pour chaque option et vous explique les écarts de durée de vie.",
      },
    ],
    faq: [
      { q: "Vous déplacez-vous à Capens ?", a: "Oui. Appelez le 06 50 57 96 20 pour confirmer les modalités." },
      { q: "Mon ballon goutte, que faire ?", a: "Vérifiez si la goutte vient du groupe de sécurité ou de la cuve, et appelez-nous si le doute persiste." },
      { q: "Les devis sont-ils gratuits ?", a: "Oui, avec prix annoncé avant les travaux." },
    ],
  },
}
