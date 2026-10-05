// Contenu éditorial des 50 pages de zone (/intervention/$ville).
// Chaque page a son propre angle, sa structure et son appel à l'action : ne pas dupliquer d'une commune à l'autre.
// Faits utilisables : 24h/24 7j/7, plus de 20 ans d'expérience, garantie 2 ans, devis gratuit, 4,4/5 sur 78 avis Google.

export type ZoneCta = "tel" | "form" | "rdv" | "avis"

export type ZoneSection = {
  h2: string
  text?: string
  bullets?: string[]
  numbered?: boolean
  faq?: Array<{ q: string; a: string }>
}

export type ZoneContent = {
  title: string
  description: string
  h1: string
  intro: string
  sections: ZoneSection[]
  cta: { label: string; kind: ZoneCta }
}

export type ZoneExtra = {
  sections: ZoneSection[]
  faq: Array<{ q: string; a: string }>
}

const GARANTIE = "Réparations garanties 2 ans, pièces et main-d'œuvre."

export const zoneContent: Record<string, ZoneContent> = {
  toulouse: {
    title: "Plombier Toulouse 24h/24 : dépannage et devis | Nino",
    description: "Fuite, chauffe-eau, débouchage à Toulouse : Nino Plomberie intervient 24h/24, devis gratuit, garantie 2 ans. Appelez le 06 50 57 96 20.",
    h1: "Plombier à Toulouse : un artisan pour les immeubles anciens comme pour les appartements récents",
    intro: "Entre les immeubles en briques du centre, les copropriétés de Saint-Cyprien ou des Minimes et les résidences près de la rocade, aucun logement toulousain n'a la même plomberie. C'est pourquoi un diagnostic précis vaut mieux qu'une réparation à l'aveugle.",
    sections: [
      { h2: "Dépannage plomberie à Toulouse, quel que soit le quartier", text: "Fuite sous un évier, dégât des eaux chez le voisin du dessous, chauffe-eau qui ne chauffe plus : Nino Plomberie se déplace de Muret par l'A64 ou la RD820 et intervient 24h/24, week-ends et jours fériés compris. Le prix est annoncé avant le début des travaux." },
      { h2: "Anciennes canalisations, copropriétés : ce qui change vraiment", bullets: ["Colonnes et réseaux vieillissants : repérer l'origine exacte d'une fuite avant d'ouvrir un mur", "Appartements en étage : limiter les dégâts et préserver les parties communes", "Salle de bain à refaire : plomberie, évacuations, remplacement des équipements"], text: "Plus de 20 ans de métier, et des réparations garanties 2 ans, pièces et main-d'œuvre." },
    ],
    cta: { label: "Décrivez votre problème en une photo via le formulaire, ou appelez le 06 50 57 96 20.", kind: "form" },
  },

  muret: {
    title: "Plombier Muret : artisan local, urgences 24h/24",
    description: "Nino Plomberie est installé à Muret, rue François Arago. Fuite, chauffe-eau, salle de bain : devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Votre plombier est à Muret, pas à l'autre bout de Toulouse",
    intro: "Nino Plomberie est établi au 11 rue François Arago, à Muret. Ici, quand vous appelez, vous parlez à l'artisan qui se déplacera chez vous.",
    sections: [
      { h2: "Plombier dans le centre ancien et les quartiers pavillonnaires de Muret", text: "Maisons de ville près de la Garonne, lotissements des quartiers résidentiels, appartements proches de la gare : les situations sont variées, les problèmes aussi (robinetterie fatiguée, ballon d'eau chaude entartré, évacuation lente)." },
      { h2: "Ce que Nino fait à Muret", text: "Dépannage, débouchage, chauffe-eau, chauffage et chaudière, salle de bain, pose de cuisine." },
      { h2: "Questions fréquentes à Muret", faq: [
        { q: "Vous êtes vraiment basé à Muret ?", a: "Oui, l'adresse figure dans les mentions légales : 11 rue François Arago, 31600 Muret." },
        { q: "Intervenez-vous la nuit ?", a: "Oui, 24h/24 et 7j/7, jours fériés compris." },
      ] },
    ],
    cta: { label: "Passez nous voir au 11 rue François Arago ou appelez le 06 50 57 96 20.", kind: "tel" },
  },

  saubens: {
    title: "Plombier Saubens (31600) : intervention rapide 24h/24",
    description: "Une fuite à Saubens ? Nino Plomberie, installé à Muret, vient vous dépanner à toute heure. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Fuite ou panne à Saubens : un plombier à deux pas, à toute heure",
    intro: "Saubens, village au bord de la Garonne, se trouve entre Muret et Toulouse, sur l'axe de la RD820. Pour une urgence, la proximité de Muret fait gagner un temps précieux.",
    sections: [
      { h2: "Urgence plomberie à Saubens : que faire en attendant ?", numbered: true, bullets: ["Fermez l'arrivée d'eau générale.", "Coupez le courant si l'eau touche des prises.", "Appelez-nous, nous vous guidons."] },
      { h2: "Maisons individuelles : les pannes les plus courantes", text: "Chauffe-eau qui fuit, WC qui se bouche, robinets qui gouttent : autant de dépannages que Nino traite sur place, avec devis gratuit." },
    ],
    cta: { label: "Urgence ? Un seul geste : le 06 50 57 96 20.", kind: "tel" },
  },

  seysses: {
    title: "Plombier Seysses : devis gratuit, travaux garantis 2 ans",
    description: "Salle de bain, chauffe-eau, plomberie neuve à Seysses : Nino Plomberie planifie vos travaux avec un devis gratuit. 06 50 57 96 20.",
    h1: "Seysses : des travaux de plomberie planifiés, sans mauvaise surprise",
    intro: "Seysses a beaucoup construit ces dernières années : maisons récentes, lotissements, mais aussi bâti plus ancien qui demande des mises à niveau. Les besoins vont donc du dépannage à la rénovation.",
    sections: [
      { h2: "Rénover sa salle de bain à Seysses", text: "Nino Plomberie s'occupe de la plomberie et coordonne les travaux avec un second professionnel pour la partie finitions. Vous obtenez un devis gratuit, un interlocuteur unique et une garantie de 2 ans." },
      { h2: "Remplacer un chauffe-eau avant la panne", text: "Un ballon de plus de dix ans ou qui fait du bruit mérite un contrôle. Mieux vaut le remplacer à votre rythme qu'en urgence un dimanche." },
    ],
    cta: { label: "Réservez un créneau de diagnostic en ligne, première visite gratuite.", kind: "rdv" },
  },

  villate: {
    title: "Plombier Villate : artisan de Muret, 24h/24",
    description: "Plombier à Villate : Nino Plomberie vient de Muret, tout proche, pour fuite, débouchage ou chauffe-eau. Devis gratuit. 06 50 57 96 20.",
    h1: "Villate : l'artisan de Muret au bout du fil",
    intro: "Dans une petite commune résidentielle comme Villate, on connaît ses artisans. Nino Plomberie, voisin à Muret, vous répond directement, sans standard ni plateforme.",
    sections: [
      { h2: "Un plombier voisin plutôt qu'un numéro d'appel national", text: "Les plateformes de dépannage envoient un sous-traitant que vous ne reverrez pas. Ici, c'est la même personne du devis à la réparation, et la garantie de 2 ans s'applique à elle." },
      { h2: "Dépannages fréquents chez les particuliers", bullets: ["Fuite sur une arrivée d'eau", "WC ou évier bouché", "Ballon d'eau chaude en panne"] },
    ],
    cta: { label: "Un appel suffit : 06 50 57 96 20.", kind: "tel" },
  },

  eaunes: {
    title: "Plombier Eaunes : voisin de Muret, urgences 24h/24",
    description: "Plombier à Eaunes : Nino Plomberie, installé à Muret, intervient à toute heure. Fuite, chauffe-eau, débouchage. Devis gratuit. 06 50 57 96 20.",
    h1: "À Eaunes, le plombier de Muret arrive en quelques minutes de route",
    intro: "Eaunes touche Muret : pour une fuite un soir de semaine, la proximité change tout. L'artisan se trouve à deux pas, rue François Arago.",
    sections: [
      { h2: "Pavillons et lotissements d'Eaunes : les pannes classiques", text: "Dans l'habitat individuel, les mêmes soucis reviennent : joints de robinetterie usés, chauffe-eau entartré, siphon bouché, pression d'eau instable." },
      { h2: "Devis annoncé avant de commencer", text: "Vous connaissez le prix avant toute intervention, et les réparations sont garanties 2 ans, pièces et main-d'œuvre." },
    ],
    cta: { label: "Une panne à Eaunes ? Appelez le 06 50 57 96 20, Nino est tout proche.", kind: "tel" },
  },

  "pins-justaret": {
    title: "Plombier chauffagiste Pins-Justaret | Nino Plomberie",
    description: "Plomberie et chauffage à Pins-Justaret : diagnostic précis, chauffe-eau, chaudière, salle de bain. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Pins-Justaret : plomberie et chauffage entre les mains d'un même artisan",
    intro: "Commune résidentielle au bord de la Garonne, Pins-Justaret réunit maisons récentes et habitat plus ancien. Un seul artisan peut donc traiter l'eau et le chauffage, ce qui évite les allers-retours entre corps de métier.",
    sections: [
      { h2: "Chauffe-eau et chaudière : entretien et remplacement", bullets: ["Diagnostic : cause réelle de la panne avant de remplacer une pièce", "Remplacement : conseil sur la capacité adaptée au foyer", "Chaudière : dépannage et remplacement"] },
      { h2: "Salle de bain : plomberie soignée, finitions coordonnées", text: "Nino pilote la plomberie et travaille avec un second professionnel pour les finitions. Vous gardez un seul point de contact." },
    ],
    cta: { label: "Demandez un diagnostic gratuit via le formulaire, photo à l'appui.", kind: "form" },
  },

  roquettes: {
    title: "Plombier Roquettes : dépannage de nuit et week-end",
    description: "Fuite ou panne à Roquettes, même la nuit : Nino Plomberie répond 24h/24, 7j/7. Devis gratuit, travaux garantis 2 ans. 06 50 57 96 20.",
    h1: "Une fuite à Roquettes à 23 h ? Quelqu'un décroche",
    intro: "Les pannes n'attendent pas les heures de bureau. À Roquettes, comme ailleurs autour de Muret, Nino Plomberie répond au 06 50 57 96 20 de jour comme de nuit, week-ends et jours fériés compris.",
    sections: [
      { h2: "Les bons réflexes avant l'arrivée du plombier", text: "Fermez l'eau au compteur, coupez l'électricité si besoin, épongez et photographiez les dégâts pour votre assurance." },
      { h2: "Après la réparation", text: "Un diagnostic clair, un prix annoncé, une garantie de 2 ans." },
    ],
    cta: { label: "Bloqué avec de l'eau partout ? Appelez maintenant : 06 50 57 96 20.", kind: "tel" },
  },

  "saint-hilaire": {
    title: "Plombier Saint-Hilaire (31) : 4,4/5 sur Google",
    description: "Plombier à Saint-Hilaire : Nino Plomberie, 4,4/5 sur 78 avis Google, plus de 20 ans d'expérience. Devis gratuit. 06 50 57 96 20.",
    h1: "Saint-Hilaire : choisir un plombier dont les clients parlent bien",
    intro: "Dans les communes autour de Muret, le choix d'un artisan passe beaucoup par les recommandations. Nino Plomberie est noté 4,4/5 sur 78 avis Google, et compte plus de 20 ans d'expérience.",
    sections: [
      { h2: "Ce que disent les clients", text: "Vous pouvez consulter les avis publiés sur la fiche Google avant de nous appeler." },
      { h2: "Ce que vous obtenez à chaque intervention", bullets: ["Diagnostic expliqué simplement", "Devis gratuit, prix annoncé à l'avance", "Réparations garanties 2 ans"] },
    ],
    cta: { label: "Lisez les avis sur Google, puis appelez le 06 50 57 96 20.", kind: "avis" },
  },

  "labarthe-sur-leze": {
    title: "Plombier Labarthe-sur-Lèze : devis gratuit, 24h/24",
    description: "Plomberie à Labarthe-sur-Lèze : dépannage, chauffe-eau, salle de bain. Nino Plomberie, artisan de Muret, devis gratuit. 06 50 57 96 20.",
    h1: "Labarthe-sur-Lèze : vos travaux de plomberie, sans courir après les devis",
    intro: "Entre la Lèze et l'axe de la RD820, Labarthe-sur-Lèze compte de nombreux pavillons dont les installations vieillissent. Les gros travaux se préparent mieux qu'ils ne se subissent.",
    sections: [
      { h2: "Ce qu'un seul artisan prend en charge", text: "Du remplacement d'un robinet à la rénovation de salle de bain, vous traitez avec le même interlocuteur." },
      { h2: "Dépannage urgent, sans changer d'interlocuteur", text: "Le jour où une fuite survient, vous connaissez déjà Nino : 24h/24, 7j/7." },
    ],
    cta: { label: "Envoyez-nous votre projet, nous vous répondons avec un devis gratuit.", kind: "form" },
  },

  frouzins: {
    title: "Plombier Frouzins : urgences 24h/24 | Nino Plomberie",
    description: "Fuite, chauffe-eau, débouchage à Frouzins : Nino Plomberie, artisan de Muret, intervient 24h/24. Devis gratuit. 06 50 57 96 20.",
    h1: "Frouzins : un plombier joignable à toute heure, à deux pas de Muret",
    intro: "Frouzins se trouve entre Muret et Toulouse. Pour les habitants, c'est un avantage : l'artisan est très proche quand la panne arrive.",
    sections: [
      { h2: "Dépannage plomberie à Frouzins", text: "Fuite, WC bouché, ballon d'eau chaude en panne : on intervient vite et on explique ce qui s'est passé." },
      { h2: "Prix annoncé avant les travaux", text: "Devis gratuit, réparations garanties 2 ans." },
    ],
    cta: { label: "Appelez le 06 50 57 96 20, l'artisan se déplace.", kind: "tel" },
  },

  labastidette: {
    title: "Plombier Labastidette : artisan de proximité, devis gratuit",
    description: "À Labastidette, faites appel à Nino Plomberie : artisan de Muret, plus de 20 ans d'expérience, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Labastidette : un artisan du Muretain pour vos soucis de plomberie",
    intro: "Dans un village comme Labastidette, au bord de la Garonne, on préfère un artisan qui connaît le territoire plutôt qu'une plateforme d'appels.",
    sections: [
      { h2: "Qui répond quand vous appelez ?", text: "L'artisan lui-même, installé à Muret, sans centre d'appels intermédiaire." },
      { h2: "Les interventions les plus demandées", bullets: ["Robinetterie et sanitaires", "Chauffe-eau et ballon", "Débouchage"] },
    ],
    cta: { label: "Un doute avant de vous décider ? Décrivez votre problème via le formulaire, photo à l'appui.", kind: "form" },
  },

  lamasquere: {
    title: "Plombier Lamasquère : diagnostic précis et garantie 2 ans",
    description: "Plombier à Lamasquère : diagnostic clair, chauffe-eau, chauffage, salle de bain. Nino Plomberie, devis gratuit. 06 50 57 96 20.",
    h1: "Lamasquère : comprendre la panne avant de remplacer la pièce",
    intro: "Entre pavillons récents et maisons plus anciennes, les installations de Lamasquère ne vieillissent pas toutes de la même façon. Un bon diagnostic évite de changer ce qui fonctionne.",
    sections: [
      { h2: "Chauffe-eau, chauffage : savoir quand réparer, savoir quand remplacer", text: "Nino explique les options et vous laisse décider avec un devis gratuit." },
      { h2: "Rénover une salle de bain", text: "La plomberie est traitée par Nino ; les finitions sont confiées à un second professionnel." },
    ],
    cta: { label: "Demandez un diagnostic via le formulaire.", kind: "form" },
  },

  "le-fauga": {
    title: "Plombier Le Fauga : dépannage week-end et nuit",
    description: "Le Fauga : fuite ou panne le week-end ? Nino Plomberie répond 24h/24, 7j/7, jours fériés compris. Devis gratuit. 06 50 57 96 20.",
    h1: "Le Fauga : même le dimanche, un plombier répond",
    intro: "Située près de l'A64, la commune du Fauga est facile d'accès depuis Muret. Pas d'attente de lundi pour une fuite découverte le dimanche.",
    sections: [
      { h2: "Pourquoi les pannes arrivent le week-end", text: "Chauffage lancé, douche prolongée, machine à laver : la pression sur l'installation grimpe en dehors de la semaine." },
      { h2: "Que faire en attendant", text: "Fermer l'arrivée d'eau, couper l'électricité si nécessaire, appeler." },
    ],
    cta: { label: "Dimanche, minuit ou jour férié : 06 50 57 96 20.", kind: "tel" },
  },

  "lavernose-lacasse": {
    title: "Plombier Lavernose-Lacasse : artisan de Muret",
    description: "Lavernose-Lacasse : plomberie, chauffe-eau, salle de bain par Nino Plomberie, artisan de Muret. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Lavernose-Lacasse : l'artisan de Muret se déplace jusqu'à chez vous",
    intro: "Lavernose-Lacasse, au bord de la Garonne, est un peu plus à l'écart que les communes de la première couronne. Nino Plomberie s'y déplace malgré tout, pour des urgences comme pour des projets planifiés.",
    sections: [
      { h2: "Ce qui est inclus dans un devis gratuit", text: "Le diagnostic, une proposition claire et un prix annoncé avant le début des travaux." },
      { h2: "Une garantie qui compte", text: GARANTIE },
    ],
    cta: { label: "Prenez rendez-vous en ligne, première visite gratuite.", kind: "rdv" },
  },

  "saint-clar-de-riviere": {
    title: "Plombier Saint-Clar-de-Rivière : artisan, devis gratuit",
    description: "Saint-Clar-de-Rivière : Nino Plomberie, artisan de Muret, répond à vos pannes de plomberie. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Saint-Clar-de-Rivière : un artisan qui se déplace jusqu'au village",
    intro: "Dans une commune rurale, on trouve moins facilement un plombier disponible. Nino Plomberie, installé à Muret, couvre le secteur pour vos dépannages comme pour vos travaux.",
    sections: [
      { h2: "Maisons individuelles et corps de ferme rénovés", text: "Les installations anciennes ont leurs particularités : ballons d'eau chaude surdimensionnés, évacuations irrégulières, arrivées d'eau vieillissantes. Un diagnostic précis évite les mauvaises surprises." },
      { h2: "Un devis clair, une garantie de 2 ans", text: "Vous savez ce que vous payez avant que le chantier ne commence." },
    ],
    cta: { label: "Décrivez votre problème via le formulaire, photo à l'appui.", kind: "form" },
  },

  lherm: {
    title: "Plombier Lherm (31600) : chauffe-eau, fuite, débouchage",
    description: "Plombier à Lherm : Nino Plomberie traite fuite, chauffe-eau, débouchage et rénovation. Plus de 20 ans d'expérience, devis gratuit. 06 50 57 96 20.",
    h1: "Lherm : plomberie et chauffage, de la panne au projet de rénovation",
    intro: "Lherm bénéficie d'un accès direct à l'A64, ce qui rend le trajet depuis Muret simple pour un artisan. Pavillons récents et maisons plus anciennes y cohabitent.",
    sections: [
      { h2: "Dépannage : ce qui est traité sur place", bullets: ["Fuite sur arrivée d'eau ou siphon", "Ballon d'eau chaude qui ne chauffe plus", "Évacuation bouchée"] },
      { h2: "Rénover plutôt que rafistoler", text: "Quand une installation date, un devis de remplacement peut coûter moins cher à long terme que des réparations répétées. Nino vous donne les deux options." },
    ],
    cta: { label: "Demandez un diagnostic, première visite gratuite.", kind: "rdv" },
  },

  "beaumont-sur-leze": {
    title: "Plombier Beaumont-sur-Lèze : intervention 24h/24",
    description: "À Beaumont-sur-Lèze, Nino Plomberie intervient pour vos urgences et travaux. Artisan de Muret, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Beaumont-sur-Lèze : un plombier qui répond, même un soir de week-end",
    intro: "Au bord de la Lèze, Beaumont-sur-Lèze est une commune où les artisans sont souvent débordés. Nino Plomberie reste joignable 24h/24 au 06 50 57 96 20.",
    sections: [
      { h2: "Panne soudaine : les bons réflexes", text: "Fermez l'arrivée d'eau, coupez le courant si nécessaire, appelez : on vous oriente pendant que vous attendez." },
      { h2: "Après l'intervention", text: GARANTIE },
    ],
    cta: { label: "Une urgence ? Appelez le 06 50 57 96 20.", kind: "tel" },
  },

  berat: {
    title: "Plombier Bérat : devis gratuit, garantie 2 ans",
    description: "Plombier à Bérat : Nino Plomberie, artisan de Muret, pour dépannage, chauffe-eau et plomberie neuve. Devis gratuit. 06 50 57 96 20.",
    h1: "Bérat : le plombier de Muret pour vos travaux, petits ou grands",
    intro: "Pour une petite commune comme Bérat, trouver un plombier disponible peut prendre du temps. Nino Plomberie couvre le secteur depuis Muret, avec plus de 20 ans d'expérience.",
    sections: [
      { h2: "Un seul interlocuteur du devis à la réparation", text: "Vous parlez toujours à la même personne." },
      { h2: "Ce qui est garanti", text: GARANTIE },
    ],
    cta: { label: "Un appel suffit pour obtenir un devis : 06 50 57 96 20.", kind: "tel" },
  },

  "bois-de-la-pierre": {
    title: "Plombier Bois-de-la-Pierre : artisan de confiance",
    description: "Bois-de-la-Pierre : Nino Plomberie, 4,4/5 sur 78 avis Google. Artisan de Muret, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Bois-de-la-Pierre : choisissez un artisan dont les avis sont publics",
    intro: "Quand on habite un petit village, on veut un artisan fiable. Nino Plomberie affiche 4,4/5 sur 78 avis Google : vous pouvez les consulter avant d'appeler.",
    sections: [
      { h2: "Ce qu'il faut savoir avant de choisir", bullets: ["Prix annoncé avant le début des travaux", "Garantie de 2 ans pièces et main-d'œuvre", "Plus de 20 ans de métier"] },
      { h2: "Un devis sans engagement", text: "Gratuit, avec diagnostic expliqué simplement." },
    ],
    cta: { label: "Consultez les avis sur Google, puis appelez le 06 50 57 96 20.", kind: "avis" },
  },

  cugnaux: {
    title: "Plombier Cugnaux : dépannage rapide 24h/24",
    description: "Plombier à Cugnaux : Nino Plomberie intervient à toute heure pour fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Cugnaux : un plombier qui rejoint votre logement sans attendre",
    intro: "Cugnaux est collée à Toulouse, mais accessible depuis Muret par un axe direct. Pour un dégât des eaux, cet accès rapide compte.",
    sections: [
      { h2: "Logements pavillonnaires et résidences collectives", text: "Les pannes diffèrent : dans un pavillon, c'est souvent un chauffe-eau ou une arrivée d'eau ; en résidence, une colonne, une évacuation ou un joint." },
      { h2: "Prix annoncé, garantie de 2 ans", text: "Devis gratuit avant les travaux, réparations garanties 2 ans, pièces et main-d'œuvre." },
    ],
    cta: { label: "Appelez le 06 50 57 96 20, on vous répond.", kind: "tel" },
  },

  "portet-sur-garonne": {
    title: "Plombier Portet-sur-Garonne : particuliers et pros",
    description: "Portet-sur-Garonne : Nino Plomberie dépanne particuliers et commerces. Fuite, chauffe-eau, débouchage. Devis gratuit. 06 50 57 96 20.",
    h1: "Portet-sur-Garonne : de la maison au commerce, la plomberie est traitée",
    intro: "Portet-sur-Garonne est à la fois une ville résidentielle, un nœud ferroviaire et une zone d'activité commerciale. Les besoins vont des particuliers aux petits locaux professionnels.",
    sections: [
      { h2: "Dépannage pour les particuliers", bullets: ["Fuite d'eau", "Ballon en panne", "WC ou évier bouché"] },
      { h2: "Commerces et petits locaux", text: "Un point d'eau qui lâche en pleine journée coûte cher. Un appel suffit : Nino se déplace avec un diagnostic clair." },
    ],
    cta: { label: "Décrivez votre situation et recevez un devis gratuit.", kind: "form" },
  },

  "villeneuve-tolosane": {
    title: "Plombier Villeneuve-Tolosane : devis gratuit, 24h/24",
    description: "Villeneuve-Tolosane : Nino Plomberie, artisan de Muret, répond à vos urgences et à vos travaux. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Villeneuve-Tolosane : un plombier à portée de main pour votre maison",
    intro: "Commune résidentielle proche de Toulouse, Villeneuve-Tolosane est composée de nombreux quartiers pavillonnaires. Les installations y vieillissent au même rythme que les lotissements.",
    sections: [
      { h2: "Pannes fréquentes dans les lotissements", text: "Joints de robinets usés, ballon d'eau chaude entartré, évacuation lente, pression instable. Chaque cas est expliqué avant la réparation." },
      { h2: "Projets de rénovation", text: "Salle de bain, plomberie neuve, pose de cuisine : devis gratuit et interlocuteur unique." },
    ],
    cta: { label: "Réservez un créneau en ligne, première visite gratuite.", kind: "rdv" },
  },

  "plaisance-du-touch": {
    title: "Plombier Plaisance-du-Touch : rapide et garanti 2 ans",
    description: "Plombier à Plaisance-du-Touch : Nino Plomberie, devis gratuit, plus de 20 ans d'expérience, garantie 2 ans. Appelez le 06 50 57 96 20.",
    h1: "Plaisance-du-Touch : pour que la panne ne gâche pas votre semaine",
    intro: "Plaisance-du-Touch est une grande commune résidentielle de l'ouest toulousain, où beaucoup d'habitants travaillent loin de chez eux. Pour eux, la priorité est de ne pas perdre de temps.",
    sections: [
      { h2: "Prendre rendez-vous sans perdre une journée", text: "Vous choisissez un créneau en ligne, ou vous nous appelez directement. Vous savez à quoi vous attendre avant de poser un jour de congé." },
      { h2: "Dépannage et rénovation", bullets: ["Chauffe-eau, chauffage, robinetterie", "Salle de bain et plomberie neuve", "Pose de cuisine"] },
    ],
    cta: { label: "Choisissez votre créneau de diagnostic en ligne.", kind: "rdv" },
  },

  tournefeuille: {
    title: "Plombier Tournefeuille : artisan expérimenté 24h/24",
    description: "Plombier à Tournefeuille : Nino Plomberie y intervient déjà. Plus de 20 ans d'expérience, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Tournefeuille : un plombier qui connaît déjà le secteur",
    intro: "Nino Plomberie a déjà réalisé des chantiers à Tournefeuille, une commune de l'ouest toulousain où l'on trouve des maisons récentes et des résidences plus anciennes.",
    sections: [
      { h2: "Plusieurs types de logements, un même soin", text: "Qu'il s'agisse d'un pavillon ou d'un appartement, le diagnostic précède toujours la réparation." },
      { h2: "Ce qui est garanti", text: "Prix annoncé avant travaux, réparations garanties 2 ans, plus de 20 ans de métier." },
    ],
    cta: { label: "Appelez le 06 50 57 96 20 pour un devis gratuit.", kind: "tel" },
  },

  fonsorbes: {
    title: "Plombier Fonsorbes : devis gratuit, garantie 2 ans",
    description: "Plombier à Fonsorbes : Nino Plomberie, artisan de Muret, pour chauffe-eau, salle de bain, dépannage. Devis gratuit. 06 50 57 96 20.",
    h1: "Fonsorbes : donner une seconde vie à la plomberie de votre maison",
    intro: "Fonsorbes a beaucoup grandi, avec des lotissements de différentes époques. Les installations qui avaient tout juste dix ans commencent déjà à demander de l'entretien.",
    sections: [
      { h2: "Entretien et remplacement du chauffe-eau", text: "Un ballon qui chauffe mal, qui fait du bruit ou qui fuit se remplace avant la panne totale. Nino explique les options et vous laisse choisir." },
      { h2: "Salle de bain à refaire", text: "Plomberie traitée par Nino, finitions confiées à un second professionnel, devis unique." },
    ],
    cta: { label: "Envoyez votre projet via le formulaire, devis gratuit.", kind: "form" },
  },

  roques: {
    title: "Plombier Roques : intervention rapide 24h/24",
    description: "Roques : une fuite, une panne ? Nino Plomberie, installé à Muret, vient vous dépanner à toute heure. Devis gratuit. 06 50 57 96 20.",
    h1: "Roques : l'artisan de Muret est à côté",
    intro: "Roques fait partie des communes les plus proches de Muret. Pour une fuite en pleine nuit, cette proximité fait la différence.",
    sections: [
      { h2: "Les urgences les plus courantes", bullets: ["Fuite sur canalisation", "Chauffe-eau en panne", "WC ou évier bouché"] },
      { h2: "Prix annoncé, travaux garantis 2 ans", text: "Aucune surprise sur la facture." },
    ],
    cta: { label: "Appelez le 06 50 57 96 20, Nino est tout proche.", kind: "tel" },
  },

  auterive: {
    title: "Plombier Auterive : dépannage et rénovation | Nino",
    description: "Plombier à Auterive : Nino Plomberie traite fuites, chauffe-eau, chauffage et salles de bain. Plus de 20 ans d'expérience. 06 50 57 96 20.",
    h1: "Auterive : de la maison de ville au pavillon, la plomberie est réglée",
    intro: "Auterive, sur les bords de l'Ariège, mêle un centre ancien et des quartiers plus récents. Les besoins varient selon les époques de construction.",
    sections: [
      { h2: "Anciens bâtiments : les points de vigilance", text: "Canalisations vieillissantes, ballons d'eau chaude surdimensionnés, évacuations irrégulières : un diagnostic précis aide à éviter les réparations répétées." },
      { h2: "Dépannage, chauffage, rénovation", text: "Nino assure les dépannages, le chauffage, la chaudière et la rénovation de salle de bain." },
    ],
    cta: { label: "Demandez un diagnostic via le formulaire, photo à l'appui.", kind: "form" },
  },

  noe: {
    title: "Plombier Noé : artisan noté 4,4/5 sur Google",
    description: "Plombier à Noé : Nino Plomberie, 4,4/5 sur 78 avis Google. Artisan de Muret, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Noé : un plombier choisi sur avis, pas sur promesse",
    intro: "Dans un village comme Noé, on choisit son artisan avec soin. Nino Plomberie affiche 4,4/5 sur 78 avis Google, consultables sur sa fiche.",
    sections: [
      { h2: "Ce que vous pouvez attendre", bullets: ["Devis gratuit, prix annoncé avant travaux", "Garantie de 2 ans, pièces et main-d'œuvre", "Plus de 20 ans d'expérience"] },
      { h2: "Un seul artisan, du diagnostic à la réparation", text: "Pas de plateforme, pas d'intermédiaire." },
    ],
    cta: { label: "Lisez les avis, puis appelez le 06 50 57 96 20.", kind: "avis" },
  },

  capens: {
    title: "Plombier Capens : artisan du Muretain, devis gratuit",
    description: "Capens : Nino Plomberie couvre votre secteur depuis Muret. Fuite, chauffe-eau, débouchage, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Capens : un plombier du Muretain pour vos travaux",
    intro: "À Capens, les maisons individuelles dominent. Quand un robinet fuit ou qu'un ballon lâche, trouver un artisan disponible n'est pas toujours simple. Nino Plomberie se déplace depuis Muret.",
    sections: [
      { h2: "Dépannages fréquents", text: "Fuites, évacuations bouchées, chauffe-eau, robinetterie." },
      { h2: "Ce qui est garanti", text: "Prix annoncé, réparations garanties 2 ans." },
    ],
    cta: { label: "Un appel suffit pour obtenir un devis : 06 50 57 96 20.", kind: "tel" },
  },

  carbonne: {
    title: "Plombier Carbonne : artisan du Muretain, devis gratuit",
    description: "Plombier à Carbonne : Nino Plomberie, artisan de Muret, pour dépannage, chauffe-eau et rénovation. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Carbonne : un artisan plombier qui se déplace jusqu'à vous",
    intro: "Carbonne, ville de la Garonne, est plus loin de Muret que la première couronne. Nino Plomberie la couvre néanmoins pour les dépannages et les travaux planifiés.",
    sections: [
      { h2: "Maisons de ville et pavillons : pannes classiques", text: "Fuites de joints, chauffe-eau entartré, siphons bouchés : des interventions que Nino traite avec un diagnostic clair." },
      { h2: "Devis annoncé avant travaux", text: "Gratuit, avec garantie de 2 ans, pièces et main-d'œuvre." },
    ],
    cta: { label: "Demandez votre devis via le formulaire, photo à l'appui.", kind: "form" },
  },

  "saint-lys": {
    title: "Plombier Saint-Lys : diagnostic précis, garantie 2 ans",
    description: "Saint-Lys : Nino Plomberie traite fuite, chauffe-eau, chauffage et salle de bain. Plus de 20 ans d'expérience, devis gratuit. 06 50 57 96 20.",
    h1: "Saint-Lys : comprendre votre installation avant d'y toucher",
    intro: "Saint-Lys, commune résidentielle à l'ouest de Muret, regroupe un habitat varié. Chaque installation a son histoire, et un diagnostic solide évite de remplacer inutilement.",
    sections: [
      { h2: "Chauffage et chaudière", text: "Dépannage et remplacement, avec explications claires et devis gratuit." },
      { h2: "Salle de bain et plomberie neuve", text: "Plomberie traitée par Nino, finitions coordonnées avec un second professionnel." },
    ],
    cta: { label: "Prenez rendez-vous en ligne, première visite gratuite.", kind: "rdv" },
  },

  balma: {
    title: "Plombier Balma : rendez-vous rapide, devis gratuit",
    description: "Plombier à Balma : Nino Plomberie vous propose un créneau rapide. Dépannage, chauffe-eau, salle de bain. Devis gratuit. 06 50 57 96 20.",
    h1: "Balma : un créneau de plombier sans courir après les rappels",
    intro: "Balma, desservie par le métro et bien connectée à Toulouse, est une commune où beaucoup d'habitants ont peu de temps libre. Prendre rendez-vous en ligne leur épargne des appels.",
    sections: [
      { h2: "Réservez en quelques clics", text: "Choisissez le créneau qui vous convient pour un diagnostic et un devis, première visite gratuite." },
      { h2: "En cas d'urgence", text: "Appelez directement : 24h/24, 7j/7." },
    ],
    cta: { label: "Réservez votre créneau en ligne.", kind: "rdv" },
  },

  blagnac: {
    title: "Plombier Blagnac : urgences 24h/24 | Nino Plomberie",
    description: "Plombier à Blagnac : Nino Plomberie y a déjà réalisé des chantiers. Dépannage 24h/24, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Blagnac : à côté de l'aéroport, un plombier qui ne dort pas",
    intro: "Blagnac, avec son pôle aéronautique, est une ville où l'on travaille souvent en horaires décalés. Une panne d'eau à 6 h ou à 22 h doit pouvoir se régler.",
    sections: [
      { h2: "Dépannage à toute heure", text: "Nino Plomberie répond 24h/24, 7j/7, week-ends et jours fériés compris." },
      { h2: "Un artisan qui connaît déjà Blagnac", text: "Des chantiers y ont été réalisés. Garantie de 2 ans, prix annoncé avant travaux." },
    ],
    cta: { label: "Appelez le 06 50 57 96 20, quelle que soit l'heure.", kind: "tel" },
  },

  colomiers: {
    title: "Plombier Colomiers : artisan fiable, garantie 2 ans",
    description: "Plombier à Colomiers : Nino Plomberie y est déjà intervenu. Plus de 20 ans d'expérience, 4,4/5 sur Google, devis gratuit. 06 50 57 96 20.",
    h1: "Colomiers : un plombier recommandé, connu de la commune",
    intro: "Ville dynamique de l'ouest toulousain, Colomiers compte de nombreux logements récents et des résidences plus anciennes. Nino Plomberie y a déjà réalisé des chantiers.",
    sections: [
      { h2: "Un artisan noté 4,4/5 sur Google", text: "78 avis consultables sur la fiche de l'entreprise." },
      { h2: "Dépannage et travaux", bullets: ["Fuites, chauffe-eau, débouchage", "Chauffage et chaudière", "Salle de bain et plomberie neuve"] },
    ],
    cta: { label: "Lisez les avis, puis appelez le 06 50 57 96 20.", kind: "avis" },
  },

  "l-union": {
    title: "Plombier L'Union : devis gratuit, garantie 2 ans",
    description: "Plombier à L'Union : Nino Plomberie traite fuite, chauffe-eau, débouchage et rénovation. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "L'Union : un plombier qui vous fait gagner du temps",
    intro: "L'Union, au nord-est de Toulouse, est une commune résidentielle et commerçante. Pour ses habitants, un artisan qui répond vite et chiffre clairement fait gagner du temps.",
    sections: [
      { h2: "Devis et diagnostic", text: "Nino explique la panne, annonce le prix, puis intervient." },
      { h2: "Prestations", bullets: ["Dépannage (fuite, débouchage, chauffe-eau)", "Chauffage et chaudière", "Rénovation de salle de bain"] },
    ],
    cta: { label: "Envoyez une photo de votre problème via le formulaire.", kind: "form" },
  },

  "ramonville-saint-agne": {
    title: "Plombier Ramonville-Saint-Agne : diagnostic et devis",
    description: "Plombier à Ramonville-Saint-Agne : Nino Plomberie traite fuites, chauffe-eau et chauffage. Plus de 20 ans d'expérience. 06 50 57 96 20.",
    h1: "Ramonville-Saint-Agne : de l'immeuble au pavillon, une plomberie bien diagnostiquée",
    intro: "Ramonville-Saint-Agne, traversée par le canal du Midi et desservie par le métro, mêle résidences collectives et maisons. Chaque type de logement a ses pannes typiques.",
    sections: [
      { h2: "En résidence collective", text: "Évacuations communes, ballons d'eau chaude, fuites chez le voisin : un diagnostic précis aide à comprendre l'origine." },
      { h2: "En maison individuelle", text: "Chauffe-eau, robinetterie, arrivée d'eau, chaudière." },
    ],
    cta: { label: "Demandez un diagnostic, première visite gratuite.", kind: "rdv" },
  },

  aucamville: {
    title: "Plombier Aucamville : artisan de confiance, devis gratuit",
    description: "Aucamville : Nino Plomberie, plus de 20 ans d'expérience, 4,4/5 sur Google. Dépannage, chauffe-eau, salle de bain. 06 50 57 96 20.",
    h1: "Aucamville : un artisan qui explique avant de réparer",
    intro: "Au nord de Toulouse, Aucamville est une commune où se côtoient pavillons et petits collectifs. Un plombier qui explique clairement le problème évite les mauvaises surprises.",
    sections: [
      { h2: "Ce qui est garanti", text: "Prix annoncé avant les travaux, réparations garanties 2 ans, pièces et main-d'œuvre." },
      { h2: "Ce que disent les avis", text: "4,4/5 sur 78 avis Google, à consulter avant d'appeler." },
    ],
    cta: { label: "Lisez les avis, puis appelez le 06 50 57 96 20.", kind: "avis" },
  },

  "saint-orens-de-gameville": {
    title: "Plombier Saint-Orens-de-Gameville : devis rénovation",
    description: "Saint-Orens-de-Gameville : Nino Plomberie pour votre salle de bain, chauffe-eau et plomberie neuve. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Saint-Orens-de-Gameville : vos projets de plomberie, du devis à la pose",
    intro: "Commune résidentielle au sud-est de Toulouse, Saint-Orens-de-Gameville compte de nombreux pavillons dont les installations demandent parfois une remise à niveau complète.",
    sections: [
      { h2: "Salle de bain et plomberie neuve", text: "Plomberie traitée par Nino, finitions confiées à un second professionnel." },
      { h2: "Un devis gratuit, un prix annoncé", text: "Avant tout début de chantier, avec garantie de 2 ans." },
    ],
    cta: { label: "Réservez un créneau de diagnostic en ligne.", kind: "rdv" },
  },

  "quint-fonsegrives": {
    title: "Plombier Quint-Fonsegrives : dépannage, devis gratuit",
    description: "Plombier à Quint-Fonsegrives : Nino Plomberie traite fuite, chauffe-eau, chauffage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Quint-Fonsegrives : un plombier à appeler avant que la panne ne s'aggrave",
    intro: "À l'est de Toulouse, Quint-Fonsegrives est une commune résidentielle. Une petite fuite négligée devient vite un dégât des eaux : mieux vaut agir tôt.",
    sections: [
      { h2: "Les signes à ne pas ignorer", bullets: ["Goutte à goutte persistant", "Baisse de pression", "Facture d'eau qui grimpe sans raison"] },
      { h2: "Une intervention claire", text: "Diagnostic, prix annoncé, réparation garantie 2 ans." },
    ],
    cta: { label: "Appelez le 06 50 57 96 20 dès les premiers signes.", kind: "tel" },
  },

  launaguet: {
    title: "Plombier Launaguet : devis gratuit, garantie 2 ans",
    description: "Plombier à Launaguet : Nino Plomberie traite fuite, chauffe-eau, débouchage et rénovation. Devis gratuit. 06 50 57 96 20.",
    h1: "Launaguet : un artisan plombier pour les pannes du quotidien",
    intro: "Commune résidentielle au nord de Toulouse, Launaguet est composée surtout de pavillons. Les problèmes y sont souvent les mêmes : robinets usés, chauffe-eau, évacuations.",
    sections: [
      { h2: "Diagnostic avant réparation", text: "Un point précis sur la cause, puis un devis gratuit." },
      { h2: "Garantie et transparence", text: "Prix annoncé avant travaux, réparations garanties 2 ans." },
    ],
    cta: { label: "Décrivez votre problème via le formulaire, photo à l'appui.", kind: "form" },
  },

  labege: {
    title: "Plombier Labège : rendez-vous rapide, devis gratuit",
    description: "Plombier à Labège : Nino Plomberie traite fuites, chauffe-eau et travaux. Prenez rendez-vous en ligne, devis gratuit. 06 50 57 96 20.",
    h1: "Labège : une plomberie réglée sans perdre votre journée",
    intro: "Labège concentre une grande zone d'activité tertiaire et de nombreux logements. Beaucoup de personnes y travaillent et y vivent : le temps libre est précieux.",
    sections: [
      { h2: "Prendre rendez-vous en ligne", text: "Choisissez votre créneau pour un diagnostic et un devis, première visite gratuite." },
      { h2: "Petits locaux professionnels et logements", text: "Fuites, sanitaires, chauffe-eau : Nino intervient sur les deux." },
    ],
    cta: { label: "Réservez votre créneau de diagnostic en ligne.", kind: "rdv" },
  },

  "castanet-tolosan": {
    title: "Plombier Castanet-Tolosan : diagnostic précis, devis",
    description: "Plombier à Castanet-Tolosan : Nino Plomberie, plus de 20 ans d'expérience. Dépannage, chauffe-eau, salle de bain. 06 50 57 96 20.",
    h1: "Castanet-Tolosan : des maisons de caractère aux pavillons récents, la même exigence",
    intro: "Castanet-Tolosan, le long du canal du Midi, réunit un centre ancien et des quartiers pavillonnaires plus récents. Un bon diagnostic vaut mieux qu'une réparation précipitée.",
    sections: [
      { h2: "Centre ancien : les points de vigilance", text: "Canalisations vieillissantes, ballons d'eau chaude surdimensionnés, évacuations irrégulières." },
      { h2: "Quartiers récents", text: "Robinetterie, joints, chauffe-eau : des soucis plus ponctuels, traités rapidement." },
    ],
    cta: { label: "Demandez un diagnostic, première visite gratuite.", kind: "rdv" },
  },

  "saint-jory": {
    title: "Plombier Saint-Jory : artisan fiable, garantie 2 ans",
    description: "Saint-Jory : Nino Plomberie, 4,4/5 sur 78 avis Google. Dépannage, chauffe-eau, plomberie neuve. Devis gratuit. 06 50 57 96 20.",
    h1: "Saint-Jory : un plombier dont les avis parlent pour lui",
    intro: "Au nord de Toulouse, Saint-Jory associe habitat résidentiel et zone logistique. Pour ses habitants, choisir un artisan fiable passe souvent par les avis.",
    sections: [
      { h2: "Ce que disent les clients", text: "4,4/5 sur 78 avis Google, à lire avant d'appeler." },
      { h2: "Ce que vous obtenez", bullets: ["Devis gratuit, prix annoncé", "Garantie de 2 ans, pièces et main-d'œuvre", "Plus de 20 ans d'expérience"] },
    ],
    cta: { label: "Consultez les avis, puis appelez le 06 50 57 96 20.", kind: "avis" },
  },

  cornebarrieu: {
    title: "Plombier Cornebarrieu : dépannage, devis gratuit",
    description: "Plombier à Cornebarrieu : Nino Plomberie traite fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Cornebarrieu : une panne d'eau n'attend pas la fin de votre service",
    intro: "À proximité de l'aéroport et du pôle aéronautique, beaucoup d'habitants de Cornebarrieu travaillent en horaires décalés. Pour eux, un artisan joignable en dehors des heures de bureau change tout.",
    sections: [
      { h2: "Joignable à toute heure", text: "Nino Plomberie répond au 06 50 57 96 20, y compris le soir et le week-end." },
      { h2: "Ce qui est garanti", text: "Prix annoncé avant travaux, réparations garanties 2 ans." },
    ],
    cta: { label: "Appelez, même en dehors des heures de bureau.", kind: "tel" },
  },

  "saint-jean": {
    title: "Plombier Saint-Jean (31) : devis gratuit, garantie 2 ans",
    description: "Plombier à Saint-Jean : Nino Plomberie traite fuite, chauffe-eau, débouchage. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Saint-Jean : un plombier clair sur le prix, avant d'intervenir",
    intro: "À l'est de Toulouse, Saint-Jean est une commune résidentielle où beaucoup d'habitants ont peu de temps libre. Un devis clair et gratuit leur évite de perdre du temps.",
    sections: [
      { h2: "Comment ça se passe", text: "Vous décrivez le problème, Nino pose un diagnostic et annonce le prix avant d'intervenir." },
      { h2: "Garantie", text: GARANTIE },
    ],
    cta: { label: "Envoyez une photo de votre problème via le formulaire.", kind: "form" },
  },

  leguevin: {
    title: "Plombier Léguevin : artisan expérimenté, devis gratuit",
    description: "Plombier à Léguevin : Nino Plomberie, plus de 20 ans d'expérience. Chauffe-eau, chauffage, salle de bain. Devis gratuit. 06 50 57 96 20.",
    h1: "Léguevin : du dépannage à la rénovation, un seul artisan",
    intro: "À l'ouest de Toulouse, Léguevin est une commune où dominent les maisons individuelles. Les besoins vont du dépannage ponctuel à la rénovation complète.",
    sections: [
      { h2: "Chauffage et chauffe-eau", text: "Dépannage, remplacement, explications claires." },
      { h2: "Salle de bain", text: "Plomberie traitée par Nino, finitions confiées à un second professionnel." },
    ],
    cta: { label: "Réservez un créneau de diagnostic en ligne.", kind: "rdv" },
  },

  rieumes: {
    title: "Plombier Rieumes : artisan de Muret, devis gratuit",
    description: "Plombier à Rieumes : Nino Plomberie couvre le Volvestre depuis Muret. Fuite, chauffe-eau, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Rieumes : un artisan de Muret pour vos travaux dans le Volvestre",
    intro: "Rieumes, au cœur du Volvestre, est une commune où l'on a moins d'artisans sous la main qu'en banlieue toulousaine. Nino Plomberie couvre le secteur depuis Muret.",
    sections: [
      { h2: "Maisons de bourg et pavillons", text: "Les installations varient selon les époques : un diagnostic précis évite les remplacements inutiles." },
      { h2: "Prix annoncé, garantie 2 ans", text: "Devis gratuit avant les travaux." },
    ],
    cta: { label: "Un appel suffit pour obtenir un devis : 06 50 57 96 20.", kind: "tel" },
  },

  longages: {
    title: "Plombier Longages : artisan du Muretain, devis gratuit",
    description: "Plombier à Longages : Nino Plomberie, artisan de Muret, pour dépannage et rénovation. Devis gratuit, garantie 2 ans. 06 50 57 96 20.",
    h1: "Longages : un plombier qui connaît le Muretain",
    intro: "Longages est une commune du sud de Muret. Un artisan installé à Muret y connaît le secteur, ses maisons et ses installations.",
    sections: [
      { h2: "Dépannages fréquents", text: "Fuite, chauffe-eau, évacuation bouchée, robinetterie." },
      { h2: "Devis gratuit, travaux garantis", text: "Prix annoncé, garantie de 2 ans." },
    ],
    cta: { label: "Décrivez votre problème via le formulaire, photo à l'appui.", kind: "form" },
  },

  venerque: {
    title: "Plombier Venerque : urgences 24h/24, artisan de Muret",
    description: "Plombier à Venerque : Nino Plomberie, installé à Muret, intervient à toute heure. Fuite, chauffe-eau. Devis gratuit. 06 50 57 96 20.",
    h1: "Venerque : l'artisan de Muret, à une courte distance",
    intro: "Venerque, au bord de l'Ariège, est assez proche de Muret pour que Nino s'y déplace en urgence. Pas besoin d'attendre qu'un artisan lointain se libère.",
    sections: [
      { h2: "Urgences : les bons réflexes", numbered: true, bullets: ["Fermer l'arrivée d'eau au compteur", "Couper le courant si besoin", "Appeler le 06 50 57 96 20"] },
      { h2: "Travaux planifiés", text: "Chauffe-eau, chauffage, salle de bain, plomberie neuve, avec devis gratuit et garantie de 2 ans." },
    ],
    cta: { label: "Appelez maintenant : 06 50 57 96 20.", kind: "tel" },
  },
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
  const extra = zoneExtra[slug]
  const more = zoneExtra6[slug]
  const last = zoneExtra7[slug]
  const baseFaq = base.sections.flatMap((s) => s.faq ?? [])
  return {
    ...base,
    sections: [...base.sections.map((s) => ({ ...s, faq: undefined })).filter((s) => (s.bullets && s.bullets.length > 0) || (s.text ?? "").split(" ").length >= 22), ...(extra?.sections ?? []), ...(more?.sections ?? []), ...(last?.sections ?? [])],
    faq: [...baseFaq, ...(extra?.faq ?? []), ...(more?.faq ?? []), ...(last?.faq ?? [])],
  }
}
