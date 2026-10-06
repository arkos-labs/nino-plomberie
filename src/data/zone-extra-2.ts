// Contenu complémentaire des pages de zone (lot 2/5).
import type { ZoneExtra } from "./zone-content"

export const zoneExtra2: Record<string, ZoneExtra> = {
  frouzins: {
    sections: [
      {
        h2: "Entre Muret et Toulouse, une position pratique",
        text: "Frouzins se situe à l'ouest de Muret, dans la direction de Toulouse. Un artisan basé à Muret y arrive rapidement, ce qui est un atout pour les pannes qui ne peuvent pas attendre : fuite sur une arrivée d'eau, chauffe-eau qui déborde, WC bouché dans un logement où il n'y a qu'un seul sanitaire.",
      },
      {
        h2: "Logements récents : des pannes différentes",
        text: "Dans un pavillon de moins de quinze ans, les canalisations sont rarement en cause. Ce sont plutôt les joints, les flexibles, les mécanismes de chasse et les mitigeurs qui montrent des signes de fatigue. À l'inverse, dans les habitations plus anciennes, ce sont les canalisations, les vannes d'arrêt et les ballons d'eau chaude qui demandent d'être contrôlés. Savoir distinguer les deux cas évite des remplacements inutiles.",
      },
      {
        h2: "Interventions proposées à Frouzins",
        bullets: ["Dépannage fuite d'eau", "Débouchage", "Chauffe-eau (réparation et remplacement)", "Robinetterie et sanitaires", "Rénovation de salle de bain, pose de cuisine"],
      },
    ],
    faq: [
      { q: "Combien de temps pour venir à Frouzins ?", a: "Nino Plomberie est basé à Muret, commune voisine. Le temps de trajet est court, mais il vous est précisé au téléphone selon la situation." },
      { q: "Mon WC coule en continu, est-ce urgent ?", a: "Une chasse qui fuit peut faire grimper la facture d'eau. Ce n'est pas toujours une urgence, mais mieux vaut réparer rapidement le mécanisme." },
      { q: "Les devis sont-ils gratuits ?", a: "Oui, et les travaux sont garantis 2 ans, pièces et main-d'œuvre." },
    ],
  },

  labastidette: {
    sections: [
      {
        h2: "Un village du Muretain proche de la Garonne",
        text: "Labastidette est un village de taille modeste, au bord de la Garonne, où l'on se connaît encore. Pour une panne de plomberie, il est rassurant de s'adresser à un artisan installé dans le secteur plutôt qu'à une plateforme nationale qui renvoie vers un prestataire différent à chaque fois.",
      },
      {
        h2: "Comprendre sa facture d'eau",
        text: "Une facture d'eau qui augmente sans raison est souvent le signe d'une fuite discrète : chasse d'eau qui coule, robinet extérieur, canalisation enterrée, chauffe-eau. Pour la repérer, notez l'index du compteur le soir, ne consommez rien pendant la nuit, puis relisez-le au matin. Si le chiffre a bougé, appelez un plombier : plus la fuite est détectée tôt, moins elle coûte.",
      },
      {
        h2: "Trois interventions fréquentes",
        numbered: true,
        bullets: ["Remplacement d'un mitigeur ou d'un robinet", "Débouchage d'une évacuation lente", "Contrôle ou remplacement d'un chauffe-eau"],
      },
    ],
    faq: [
      { q: "Qui répond au téléphone ?", a: "L'artisan lui-même, installé à Muret. Pas de centre d'appels." },
      { q: "Intervenez-vous à Labastidette pour un devis de rénovation ?", a: "Oui : visite, diagnostic, devis gratuit. Pour la salle de bain, la plomberie est traitée par Nino et les finitions par un second professionnel." },
      { q: "Que faire pour une fuite en pleine nuit ?", a: "Fermez l'eau au compteur et appelez le 06 50 57 96 20 : la ligne est ouverte 24h/24." },
    ],
  },

  lamasquere: {
    sections: [
      {
        h2: "Lamasquère : de la maison ancienne au pavillon récent",
        text: "Les logements de Lamasquère ne datent pas de la même époque, et leur plomberie non plus. Un pavillon des années 2000 a généralement des réseaux en cuivre ou en multicouche et un ballon d'eau chaude électrique classique. Une maison plus ancienne peut conserver des tuyaux d'origine, plus sensibles à l'entartrage et aux fuites. Le diagnostic précède toujours la réparation.",
      },
      {
        h2: "Réparer ou remplacer : la règle simple",
        text: "On répare quand la panne vient d'une pièce usée et que le reste de l'installation est sain : joint, cartouche, flexible, thermostat. On remplace quand l'appareil est ancien, corrodé ou qu'il tombe en panne trop souvent. Nino explique les deux options, donne un devis gratuit pour chacune, et vous laisse décider.",
      },
      {
        h2: "Rénover une salle de bain sans mauvaise surprise",
        bullets: ["Étanchéité de la douche et des parois", "Pentes d'évacuation", "Ventilation de la pièce", "Raccords accessibles pour l'entretien futur"],
      },
    ],
    faq: [
      { q: "Pouvez-vous venir faire un diagnostic à Lamasquère ?", a: "Oui, sur rendez-vous : vous pouvez réserver en ligne. La première visite est gratuite." },
      { q: "Dois-je changer mon chauffe-eau de plus de dix ans ?", a: "Pas forcément, mais un contrôle est conseillé. Un chauffe-eau ancien qui fuit au niveau de la cuve doit être remplacé." },
      { q: "Avez-vous une garantie ?", a: "Oui, 2 ans pièces et main-d'œuvre sur les réparations." },
    ],
  },

  "le-fauga": {
    sections: [
      {
        h2: "Le Fauga : près de l'A64, facile d'accès",
        text: "La commune se trouve à proximité de l'A64, à une distance raisonnable de Muret. Cet accès simple permet de se déplacer rapidement même en dehors des horaires habituels. Pour les habitants, savoir qu'un plombier répond un dimanche change la façon d'aborder une panne.",
      },
      {
        h2: "Pourquoi les pannes arrivent souvent le week-end",
        text: "Le week-end, on sollicite davantage l'installation : douches plus longues, lave-linge en série, chauffage poussé. Un flexible fatigué, un joint durci ou un robinet d'arrêt grippé peuvent alors lâcher au pire moment. Un contrôle des flexibles (à changer régulièrement) et un coup d'œil au robinet d'arrêt général avant l'hiver limitent les risques.",
      },
      {
        h2: "Gestes avant l'arrivée du plombier",
        numbered: true,
        bullets: ["Fermer l'arrivée d'eau générale", "Couper l'électricité si nécessaire", "Éponger et protéger les meubles", "Appeler le 06 50 57 96 20"],
      },
    ],
    faq: [
      { q: "Intervenez-vous au Fauga le dimanche ?", a: "Oui, 24h/24 et 7j/7, jours fériés compris." },
      { q: "Comment faire si mon robinet d'arrêt est grippé ?", a: "Ne forcez pas : appelez-nous. Le robinet peut être remplacé après diagnostic." },
      { q: "Le devis est-il gratuit ?", a: "Oui, et le prix est annoncé avant d'intervenir." },
    ],
  },

  "lavernose-lacasse": {
    sections: [
      {
        h2: "Une commune de la Garonne un peu plus éloignée",
        text: "Lavernose-Lacasse se trouve au sud-ouest de Muret, sur les bords de la Garonne. L'éloignement relatif est précisé au téléphone au moment de l'appel, selon la situation et le motif de l'intervention, pour que vous sachiez à quoi vous attendre.",
      },
      {
        h2: "Du dépannage au projet planifié",
        text: "Toutes les interventions ne sont pas urgentes. Remplacer un chauffe-eau vieillissant, créer un point d'eau supplémentaire, refaire une salle de bain, poser une cuisine : ces travaux se préparent avec un devis gratuit et un calendrier clair. Plus le projet est anticipé, plus il est facile de le coordonner avec les autres corps de métier.",
      },
      {
        h2: "Ce qu'un bon devis contient",
        bullets: ["Le détail des travaux et des fournitures", "Le prix annoncé avant le début du chantier", "Le calendrier d'intervention", "La garantie de 2 ans"],
      },
    ],
    faq: [
      { q: "Vous déplacez-vous jusqu'à Lavernose-Lacasse ?", a: "Oui. Appelez le 06 50 57 96 20 pour confirmer la disponibilité selon la nature de l'intervention." },
      { q: "Puis-je prendre rendez-vous en ligne ?", a: "Oui, la première visite de diagnostic est gratuite." },
      { q: "Faites-vous la pose de cuisine ?", a: "Oui, la pose de cuisine fait partie des prestations de Nino Plomberie." },
    ],
  },

  "saint-clar-de-riviere": {
    sections: [
      {
        h2: "Une commune rurale du sud-ouest toulousain",
        text: "Saint-Clar-de-Rivière est une commune rurale où dominent les maisons individuelles, parfois anciennes, parfois rénovées. Les installations y ont souvent été modifiées par étapes : extension, salle d'eau ajoutée, ballon d'eau chaude changé. Un diagnostic global évite d'empiler les réparations.",
      },
      {
        h2: "Pourquoi un diagnostic avant tout",
        text: "Une fuite sous un évier peut venir d'un siphon, d'un joint ou d'un raccord mal serré. Une eau tiède peut venir du ballon, du thermostat ou d'une résistance. Remplacer au hasard coûte cher et ne règle pas toujours le problème. Nino pose un diagnostic, vous l'explique et chiffre l'intervention avant de la réaliser.",
      },
      {
        h2: "Entretien utile à la campagne",
        numbered: true,
        bullets: ["Protéger les robinets extérieurs et canalisations apparentes du gel", "Contrôler le groupe de sécurité du chauffe-eau", "Vérifier la pression d'eau", "Surveiller le compteur en cas de fuite suspecte"],
      },
    ],
    faq: [
      { q: "Intervenez-vous à Saint-Clar-de-Rivière ?", a: "Oui, depuis Muret, pour les dépannages et les travaux. Les modalités sont précisées au téléphone." },
      { q: "Mon installation est ancienne, dois-je tout refaire ?", a: "Pas forcément. Un diagnostic permet de savoir ce qui peut être conservé et ce qui doit être remplacé." },
      { q: "Les devis sont-ils gratuits ?", a: "Oui. Les réparations sont garanties 2 ans." },
    ],
  },

  lherm: {
    sections: [
      {
        h2: "Lherm : un accès simple depuis Muret",
        text: "Lherm profite de l'accès à l'A64 et se trouve à une courte distance de Muret. La commune compte beaucoup de maisons individuelles, avec des besoins classiques : chauffe-eau, robinetterie, évacuations, chauffage. Un artisan qui connaît le secteur sait à quoi s'attendre.",
      },
      {
        h2: "Réparer plusieurs fois ou rénover une fois",
        text: "Quand les mêmes éléments tombent en panne régulièrement (flexibles, joints, mitigeur, ballon), un remplacement complet de la partie concernée finit par coûter moins cher que des interventions répétées. Nino vous présente les deux options dans un devis gratuit, sans vous pousser vers la plus chère.",
      },
      {
        h2: "Services proposés à Lherm",
        bullets: ["Dépannage fuite et débouchage", "Chauffe-eau et chauffage", "Robinetterie et sanitaires", "Salle de bain et plomberie neuve", "Pose de cuisine"],
      },
    ],
    faq: [
      { q: "Combien de temps pour un dépannage à Lherm ?", a: "Le temps de trajet depuis Muret est court. Il vous est précisé lors de l'appel au 06 50 57 96 20." },
      { q: "Pouvez-vous remplacer mon chauffe-eau ?", a: "Oui, sur diagnostic et avec un devis gratuit." },
      { q: "Quelle garantie ?", a: "2 ans, pièces et main-d'œuvre." },
    ],
  },

  "beaumont-sur-leze": {
    sections: [
      {
        h2: "Beaumont-sur-Lèze : un artisan joignable quand les autres ne le sont pas",
        text: "Dans les communes autour de Muret, les artisans sont souvent très sollicités. Nino Plomberie répond 24h/24 et 7j/7 au téléphone et se déplace pour les urgences comme pour les rendez-vous planifiés. Une réponse humaine rapide fait la différence en cas d'eau qui coule.",
      },
      {
        h2: "Les cinq urgences les plus fréquentes",
        bullets: ["Fuite sur canalisation ou raccord", "Chauffe-eau qui déborde ou ne chauffe plus", "WC ou évier totalement bouché", "Dégât des eaux après une rupture de flexible", "Panne de chaudière en période de froid"],
      },
      {
        h2: "Limiter les dégâts en attendant",
        text: "Fermez l'eau à l'arrivée générale. Coupez l'électricité si l'eau touche des prises. Ouvrez un robinet situé au point bas pour vider les canalisations. Déplacez les objets sensibles. Prenez des photos pour l'assurance. Nino vous guide au téléphone pendant que vous faites ces gestes.",
      },
    ],
    faq: [
      { q: "Vous venez à Beaumont-sur-Lèze la nuit ?", a: "Appelez le 06 50 57 96 20 : la ligne est ouverte 24h/24, 7j/7. Les modalités de déplacement sont précisées au téléphone." },
      { q: "Faut-il un devis avant d'intervenir en urgence ?", a: "Le prix vous est annoncé avant de commencer. En urgence, il est donné par téléphone ou sur place." },
      { q: "Les réparations sont-elles garanties ?", a: "Oui, 2 ans pièces et main-d'œuvre." },
    ],
  },

  berat: {
    sections: [
      {
        h2: "Bérat : un petit village, un artisan à joindre directement",
        text: "Dans une petite commune, on cherche un interlocuteur fiable, qui rappelle et qui vient. Nino Plomberie répond au téléphone en direct, sans standard. Vous décrivez votre problème, vous recevez les premières consignes, puis un devis gratuit avant de décider.",
      },
      {
        h2: "Pannes courantes dans les maisons de village",
        text: "Les maisons plus anciennes peuvent avoir des arrivées d'eau mal protégées du gel, des ballons d'eau chaude surdimensionnés ou des évacuations en pente insuffisante. Les logements récents posent plutôt des questions de réglage de pression ou de qualité de robinetterie. Dans les deux cas, un artisan expérimenté repère vite la cause.",
      },
      {
        h2: "Votre dossier en trois étapes",
        numbered: true,
        bullets: ["Un appel ou un message avec photo", "Un devis gratuit", "Une intervention garantie 2 ans"],
      },
    ],
    faq: [
      { q: "Vous intervenez à Bérat ?", a: "Oui, depuis Muret. Appelez le 06 50 57 96 20 pour les modalités selon votre besoin." },
      { q: "Comment protéger mes canalisations du gel ?", a: "Isolez les canalisations apparentes, vidangez les robinets extérieurs et coupez leur alimentation avant l'hiver." },
      { q: "Quel est le prix d'un dépannage ?", a: "Il dépend de la panne : il est annoncé avant l'intervention, après un diagnostic. Un devis gratuit est établi." },
    ],
  },

  "bois-de-la-pierre": {
    sections: [
      {
        h2: "Bois-de-la-Pierre : choisir un artisan dont on peut vérifier les avis",
        text: "Quand on habite un petit village, on veut éviter de se tromper d'artisan. Nino Plomberie est noté 4,4/5 sur 79 avis Google. Lire ces avis avant d'appeler permet de se faire une idée du sérieux, de la clarté des devis et du suivi des interventions.",
      },
      {
        h2: "Questions à poser à tout plombier",
        bullets: ["Le devis est-il gratuit et détaillé ?", "Le prix est-il annoncé avant d'intervenir ?", "Quelle garantie sur les réparations ?", "Combien d'années d'expérience ?"],
        text: "Chez Nino Plomberie : devis gratuit, prix annoncé avant les travaux, garantie de 2 ans pièces et main-d'œuvre, plus de 20 ans d'expérience.",
      },
      {
        h2: "Pour aller plus loin",
        text: "Vous pouvez consulter la page des tarifs, les réalisations en images et les pages de service pour mieux comprendre ce que Nino fait au quotidien : dépannage, chauffe-eau, chauffage, salle de bain, cuisine.",
      },
    ],
    faq: [
      { q: "Intervenez-vous à Bois-de-la-Pierre ?", a: "Oui, depuis Muret. Appelez le 06 50 57 96 20 pour confirmer les modalités selon votre besoin." },
      { q: "Peut-on demander un devis sans se déplacer ?", a: "Oui, envoyez des photos via le formulaire de contact pour un premier avis, avant un devis gratuit complet." },
      { q: "Les avis sont-ils consultables ?", a: "Oui, sur la fiche Google de Nino Plomberie : 4,4/5 sur 79 avis." },
    ],
  },
}
