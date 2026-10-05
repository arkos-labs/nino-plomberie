// Section technique supplémentaire par commune (un sujet différent d'une page à l'autre) + une question de FAQ.
import type { ZoneExtra } from "./zone-content"

export const zoneExtra6: Record<string, ZoneExtra> = {
  toulouse: {
    sections: [{ h2: "Coups de bélier et bruits dans les colonnes", text: "Dans les immeubles toulousains, un claquement sec à la fermeture d'un robinet ou des vibrations dans les murs signalent souvent un coup de bélier : une onde de pression provoquée par une fermeture brusque, aggravée par des canalisations mal fixées ou une pression trop élevée. À la longue, ce phénomène fatigue les raccords et peut provoquer des fuites. Un réducteur de pression, un anti-bélier ou une simple fixation des tuyaux règlent le problème." }],
    faq: [{ q: "Mon voisin du dessous se plaint d'une fuite, que faire ?", a: "Fermez l'eau de votre logement, contactez-nous pour localiser l'origine, et déclarez le sinistre à votre assurance avec un constat amiable dans les 5 jours ouvrés." }],
  },
  muret: {
    sections: [{ h2: "Partir en vacances sans mauvaise surprise", text: "Avant une absence de plusieurs jours, fermez l'arrivée d'eau générale, coupez l'alimentation du chauffe-eau ou passez-le en mode hors-gel, et vérifiez que rien ne goutte. Un dégât des eaux découvert au retour d'une semaine de vacances coûte beaucoup plus cher qu'une fuite repérée dans la journée. Pour les maisons de Muret laissées vides plusieurs semaines, une vérification rapide des flexibles est un bon réflexe." }],
    faq: [{ q: "Peut-on passer vous voir sans rendez-vous ?", a: "Pour être sûr de trouver l'artisan, appelez avant au 06 50 57 96 20 : il peut être en intervention." }],
  },
  saubens: {
    sections: [{ h2: "Le robinet extérieur et l'arrosage du jardin", text: "Dans les maisons de Saubens, le robinet extérieur est l'un des premiers points à fuir après l'hiver : le gel peut fissurer le corps du robinet ou la canalisation qui l'alimente. Avant l'arrivée du froid, coupez l'alimentation intérieure, vidangez le robinet extérieur et protégez-le. Au printemps, ouvrez progressivement et contrôlez l'absence de fuite avant de brancher un tuyau d'arrosage." }],
    faq: [{ q: "Mon robinet extérieur fuit depuis l'hiver, c'est grave ?", a: "Cela peut être un joint ou une fissure causée par le gel. Il vaut mieux le faire contrôler rapidement pour éviter une fuite derrière le mur." }],
  },
  seysses: {
    sections: [{ h2: "Raccorder correctement lave-linge et lave-vaisselle", text: "Un raccordement mal fait est une source classique de fuite : flexible trop tendu, robinet d'arrêt absent, évacuation mal siphonnée. Pour chaque appareil, prévoyez un robinet d'arrêt accessible, un flexible en bon état et une évacuation avec un siphon. À Seysses, où beaucoup de familles s'équipent lors d'une installation neuve, un contrôle de ces points évite des dégâts des eaux." }],
    faq: [{ q: "Pouvez-vous installer un lave-linge ou un lave-vaisselle ?", a: "Oui, le raccordement fait partie des travaux de plomberie courants : arrivée, évacuation, robinet d'arrêt." }],
  },
  villate: {
    sections: [{ h2: "Une odeur d'égout dans la maison", text: "Une odeur désagréable venant d'un lavabo, d'une douche ou d'un sol peut venir d'un siphon vide (après une longue absence), d'une évacuation encrassée ou d'une ventilation défaillante. Versez de l'eau dans les siphons peu utilisés, nettoyez les bondes et appelez un plombier si l'odeur persiste : le problème peut venir de plus loin sur le réseau." }],
    faq: [{ q: "Mon évier sent mauvais malgré le nettoyage, que faire ?", a: "Un siphon encrassé ou une évacuation partiellement bouchée peut en être la cause. Un débouchage ou un nettoyage de siphon règle généralement le problème." }],
  },
  eaunes: {
    sections: [{ h2: "Un débit d'eau faible au robinet", text: "Quand le débit baisse sur un seul robinet, la cause est souvent un mousseur encrassé de calcaire, qu'on peut nettoyer ou remplacer. Si tous les points d'eau sont touchés, la cause peut être un robinet d'arrêt partiellement fermé, un filtre bouché ou une canalisation entartrée. Un contrôle de la pression permet de trancher et d'éviter de remplacer des pièces qui fonctionnent." }],
    faq: [{ q: "Mon eau sort faiblement de tous les robinets, pourquoi ?", a: "Vérifiez que le robinet d'arrêt est bien ouvert et que le filtre n'est pas encrassé. Si le problème persiste, un diagnostic est nécessaire." }],
  },
  "pins-justaret": {
    sections: [{ h2: "Purger ses radiateurs avant l'hiver", text: "Des radiateurs qui chauffent mal en haut et restent froids en bas contiennent souvent de l'air. Une purge à l'aide de la clé adaptée, circulateur arrêté, rétablit la circulation de l'eau chaude. Pensez ensuite à vérifier la pression de la chaudière et à la remonter si besoin. Si le problème revient, un diagnostic s'impose : fuite, vase d'expansion ou circulateur défaillant." }],
    faq: [{ q: "Mes radiateurs sont froids en bas, est-ce une panne ?", a: "C'est souvent de l'air à purger ou un embouage du circuit. Si ce n'est pas suffisant, un dépannage est à prévoir." }],
  },
  roquettes: {
    sections: [{ h2: "Chauffe-eau et eau trop chaude ou pas assez", text: "Une eau qui sort brûlante peut venir d'un thermostat déréglé ; une eau tiède, d'une résistance usée ou d'un entartrage. Évitez de monter la température au-delà de ce qui est recommandé : cela accélère l'entartrage et augmente le risque de brûlure. Un mitigeur thermostatique à la sortie des douches est une protection simple, notamment avec des enfants." }],
    faq: [{ q: "Mon eau chaude s'épuise trop vite, que faire ?", a: "Le ballon est peut-être entartré ou sous-dimensionné. Nino contrôle l'installation et propose un devis gratuit." }],
  },
  "saint-hilaire": {
    sections: [{ h2: "Entretenir un chauffe-eau : l'anode et le groupe de sécurité", text: "La cuve d'un chauffe-eau électrique est protégée de la corrosion par une anode, qui s'use avec le temps. Un contrôle périodique et un remplacement au bon moment allongent la durée de vie du ballon. Le groupe de sécurité doit lui aussi être actionné régulièrement pour éviter l'entartrage et le blocage. Ces gestes d'entretien, simples pour un professionnel, évitent une panne brutale." }],
    faq: [{ q: "Peut-on prolonger la vie d'un chauffe-eau ?", a: "Oui, avec un entretien régulier : groupe de sécurité, détartrage, remplacement de l'anode selon l'état du ballon." }],
  },
  "labarthe-sur-leze": {
    sections: [{ h2: "Changer de robinetterie : mitigeur ou mélangeur ?", text: "Le mitigeur règle débit et température avec un seul levier, tandis que le mélangeur dispose de deux commandes. Les cartouches céramique modernes durent longtemps, mais finissent par fuir. Un mitigeur thermostatique garde une température stable et limite les brûlures. Lors d'un remplacement, il faut aussi contrôler les flexibles et les robinets d'arrêt, pour ne pas laisser une pièce fatiguée sur une robinetterie neuve." }],
    faq: [{ q: "Mon mitigeur goutte, je dois le changer ?", a: "Pas toujours : une cartouche ou un joint peut suffire. Nino vous donne l'option la plus économique." }],
  },
  frouzins: {
    sections: [{ h2: "Le robinet d'arrêt général : où est-il ?", text: "En cas de fuite, la première action est de couper l'eau. Le robinet d'arrêt général se trouve généralement près du compteur, à l'entrée du terrain ou dans le logement. Vérifiez qu'il se manœuvre sans effort : un robinet grippé par le calcaire ne vous sera d'aucun secours le jour où vous en aurez besoin. Manœuvrez-le une fois par an." }],
    faq: [{ q: "Mon robinet d'arrêt est bloqué, que faire ?", a: "Ne forcez pas, cela peut le casser. Appelez-nous : il peut être remplacé après diagnostic." }],
  },
  labastidette: {
    sections: [{ h2: "Un chauffe-eau vertical, horizontal ou sur évier ?", text: "Le choix d'un chauffe-eau dépend de la place disponible : un modèle vertical mural convient à un cellier ou un garage, un modèle horizontal à un faux plafond ou un vide sanitaire, un petit modèle sur évier à un point d'eau isolé. Dans les maisons de village, le ballon est parfois installé dans un recoin peu accessible, ce qui complique l'entretien. Nino vous conseille la solution la mieux adaptée." }],
    faq: [{ q: "Peut-on déplacer un chauffe-eau ?", a: "Oui, selon la configuration. Un devis gratuit précise les travaux nécessaires." }],
  },
  lamasquere: {
    sections: [{ h2: "Les WC : chasse qui fuit, cuvette qui bouge", text: "Une chasse d'eau qui coule en continu gaspille plusieurs litres par heure : le flotteur, le joint de cloche ou le mécanisme est à remplacer. Une cuvette qui bouge se fixe de nouveau, et le joint d'évacuation est à contrôler. Un WC qui se bouche à répétition peut indiquer un problème de ventilation ou d'évacuation, pas seulement un objet jeté dedans." }],
    faq: [{ q: "Mon WC se bouche souvent, pourquoi ?", a: "Les lingettes sont la cause principale, mais une pente insuffisante ou une ventilation défaillante peut aussi en être responsable." }],
  },
  "le-fauga": {
    sections: [{ h2: "Une panne de chauffage un dimanche d'hiver", text: "Chaudière en panne, radiateurs froids, pression qui chute : les pannes de chauffage arrivent souvent au pire moment. Avant d'appeler, vérifiez l'alimentation électrique, la pression sur le manomètre et l'éventuel code d'erreur affiché. Notez-le : il aide au diagnostic. Si vous sentez une odeur de gaz, ne touchez à rien, aérez et sortez : cela relève de l'urgence gaz, pas du plombier." }],
    faq: [{ q: "Ma chaudière affiche un code d'erreur, que faire ?", a: "Notez-le et appelez-nous. Il aide à orienter le diagnostic avant le déplacement." }],
  },
  "lavernose-lacasse": {
    sections: [{ h2: "Plomberie d'une extension ou d'une dépendance", text: "Ajouter une salle d'eau, une buanderie ou un point d'eau dans une dépendance suppose de raccorder l'alimentation, l'évacuation et parfois l'eau chaude. La distance au réseau existant, les pentes d'évacuation et la protection contre le gel doivent être étudiées avant de commencer. Un devis gratuit précise le tracé, les matériaux et le calendrier." }],
    faq: [{ q: "Pouvez-vous créer un point d'eau dans mon garage ?", a: "Oui, après étude des arrivées et évacuations existantes. Devis gratuit." }],
  },
  "saint-clar-de-riviere": {
    sections: [{ h2: "Eau trouble, jaune ou rouillée : que signifie-t-elle ?", text: "Une eau colorée après une coupure ou des travaux sur le réseau est souvent passagère : laissez couler quelques minutes. Si le phénomène persiste, il peut venir de canalisations corrodées dans la maison ou d'un ballon d'eau chaude dont la cuve se dégrade. Un contrôle permet d'identifier l'origine et de décider de la suite avant que l'installation ne se détériore davantage." }],
    faq: [{ q: "Mon eau chaude est jaune, mon ballon est-il à changer ?", a: "C'est un signe possible de corrosion de la cuve. Un contrôle est recommandé." }],
  },
  lherm: {
    sections: [{ h2: "Une pression d'eau trop forte", text: "Une pression supérieure à environ 3 à 4 bars use les joints, les robinets et les appareils électroménagers. Un manomètre permet de la mesurer, et un réducteur de pression se pose à l'entrée de l'installation. C'est une opération simple qui évite de nombreuses fuites. Si vous entendez des claquements ou si les joints durcissent rapidement, faites contrôler la pression." }],
    faq: [{ q: "Comment connaître la pression de mon eau ?", a: "Avec un manomètre à visser sur un robinet. Nino peut le faire lors d'un diagnostic." }],
  },
  "beaumont-sur-leze": {
    sections: [{ h2: "Évacuation bouchée : ce qu'il ne faut pas faire", text: "Les produits chimiques puissants abîment les joints et les canalisations anciennes, et ne règlent pas toujours le problème. Évitez-les, et évitez de jeter lingettes, graisses ou marc de café dans les évacuations. Un débouchage mécanique, adapté à la nature de l'obstruction, est plus sûr pour vos canalisations. Pour les évacuations lentes, un nettoyage de siphon suffit parfois." }],
    faq: [{ q: "Un déboucheur chimique est-il dangereux ?", a: "Il peut abîmer les canalisations et provoquer des projections. Un débouchage mécanique est préférable." }],
  },
  berat: {
    sections: [{ h2: "Protéger sa plomberie du gel", text: "Avant l'hiver, vidangez les robinets extérieurs, isolez les canalisations apparentes ou situées dans les parties non chauffées (garage, cave, combles) et ne coupez pas complètement le chauffage dans une maison inoccupée. Une canalisation gelée peut éclater et provoquer une fuite au dégel. En cas de gel, ne cherchez pas à dégeler au chalumeau : appelez un professionnel." }],
    faq: [{ q: "Que faire si mes canalisations ont gelé ?", a: "Fermez l'eau, ouvrez les robinets, et appelez-nous. Évitez toute flamme directe." }],
  },
  "bois-de-la-pierre": {
    sections: [{ h2: "Pour une résidence secondaire", text: "Dans une maison peu occupée, les risques sont l'absence de circulation d'eau (siphons vides, odeurs), le gel en hiver et les fuites non détectées. Avant de partir : couper l'eau générale, vidanger si besoin et mettre le chauffe-eau à l'arrêt. À l'arrivée, ouvrir progressivement et contrôler. Nino peut vérifier l'installation avant la saison." }],
    faq: [{ q: "Puis-je faire contrôler ma maison avant la saison ?", a: "Oui, un contrôle de l'installation peut être planifié avec un devis gratuit." }],
  },
  cugnaux: {
    sections: [{ h2: "Locataire ou propriétaire : qui répare ?", text: "L'entretien courant (joints, robinetterie, débouchage) incombe généralement au locataire, tandis que la vétusté et les gros équipements (chauffe-eau en fin de vie, canalisations) relèvent du propriétaire. En cas de dégât des eaux, le diagnostic précise l'origine et facilite la répartition. Nino peut établir un devis détaillé à transmettre au propriétaire ou au gestionnaire." }],
    faq: [{ q: "Pouvez-vous établir un devis pour mon propriétaire ?", a: "Oui, un devis gratuit et détaillé peut lui être transmis." }],
  },
  "portet-sur-garonne": {
    sections: [{ h2: "Sanitaires d'un local professionnel", text: "Pour un commerce ou un petit local, l'installation sanitaire doit rester en état de marche : WC, lavabo, éventuellement point d'eau chaude. Une chasse qui fuit, un siphon bouché ou un chauffe-eau en panne perturbent l'activité. Une visite d'entretien annuelle limite ces risques, et un dépannage rapide permet de rouvrir sans perdre la journée." }],
    faq: [{ q: "Faites-vous de l'entretien préventif pour les locaux ?", a: "Oui, sur demande, avec un devis gratuit." }],
  },
  "villeneuve-tolosane": {
    sections: [{ h2: "Les flexibles : à surveiller et remplacer", text: "Les flexibles de douche, de robinetterie, de lave-linge ou de chauffe-eau sont des pièces d'usure. Un flexible craquelé, rouillé aux raccords ou durci doit être remplacé, avant qu'il ne cède. Une rupture peut inonder une pièce en quelques minutes. Changer un flexible prend peu de temps et coûte peu, comparé à un dégât des eaux." }],
    faq: [{ q: "Tous les combien changer un flexible ?", a: "Selon l'état, généralement tous les quelques années. Contrôlez-le chaque année." }],
  },
  "plaisance-du-touch": {
    sections: [{ h2: "Douche : évacuation lente et joints noircis", text: "Une douche qui s'écoule lentement indique un siphon encrassé de cheveux et de savon ; un nettoyage suffit souvent. Des joints noircis ou décollés peuvent laisser passer l'eau derrière les parois. Les refaire à temps évite des infiltrations dans les murs ou le plafond de l'étage inférieur. Pour une douche très ancienne, un remplacement complet peut être plus judicieux." }],
    faq: [{ q: "Ma douche coule vers le voisin du dessous, que faire ?", a: "Fermez l'eau et contactez-nous : un diagnostic permet de localiser l'infiltration." }],
  },
  tournefeuille: {
    sections: [{ h2: "Colonne de douche et robinetterie moderne", text: "Les colonnes de douche et mitigeurs thermostatiques sont de plus en plus courants. Leur installation demande de respecter les entraxes, les débits et la pression. Une mauvaise pose provoque des fuites ou un fonctionnement irrégulier. Nino vérifie les arrivées, pose l'équipement et teste l'ensemble avant de repartir." }],
    faq: [{ q: "Pouvez-vous installer une colonne de douche que j'ai achetée ?", a: "Oui, après vérification de la compatibilité avec votre installation." }],
  },
  fonsorbes: {
    sections: [{ h2: "Salle de bain : douche à l'italienne ou receveur extra-plat", text: "La douche à l'italienne offre une grande liberté de dimensions et un accès facile, mais demande une étanchéité irréprochable et une pente d'évacuation précise. Le receveur extra-plat est plus rapide à poser et plus simple à entretenir. Le bon choix dépend de la configuration de la pièce et du plancher. Nino vous conseille lors du devis gratuit." }],
    faq: [{ q: "Quelle douche choisir pour un petit espace ?", a: "Un receveur extra-plat ou une douche à l'italienne compacte, selon la hauteur disponible sous le plancher." }],
  },
  roques: {
    sections: [{ h2: "Un robinet qui goutte : pourquoi et que faire", text: "Une goutte par seconde représente plusieurs milliers de litres par an. La cause est généralement un joint ou une cartouche usée, rarement le robinet lui-même. Le remplacement de la pièce usée est rapide, et vous évite de payer de l'eau perdue. Si le robinet est ancien, mieux vaut le remplacer pour éviter une nouvelle fuite." }],
    faq: [{ q: "Combien d'eau perd un robinet qui goutte ?", a: "Plusieurs milliers de litres par an. Une réparation rapide est rentable." }],
  },
  auterive: {
    sections: [{ h2: "Canalisations en plomb dans le bâti ancien", text: "Dans certains logements anciens, des canalisations en plomb subsistent. Leur remplacement est recommandé, car le plomb peut se dissoudre dans l'eau. Un plombier peut identifier la nature des tuyaux et proposer un remplacement par du cuivre, du PER ou du multicouche. C'est un chantier à anticiper lors d'une rénovation." }],
    faq: [{ q: "Comment savoir si mes canalisations sont en plomb ?", a: "Le plomb est gris mat, mou et se raye à l'ongle. Un professionnel peut le confirmer." }],
  },
  noe: {
    sections: [{ h2: "Le groupe de sécurité du chauffe-eau", text: "Le groupe de sécurité protège le chauffe-eau d'une surpression. Il laisse échapper un peu d'eau pendant la chauffe, ce qui est normal ; un écoulement permanent est anormal. Actionnez-le régulièrement pour éviter qu'il ne s'entartre. S'il fuit en continu, il faut le remplacer." }],
    faq: [{ q: "Mon groupe de sécurité goutte, est-ce normal ?", a: "Par moments oui, en continu non. Un contrôle est conseillé." }],
  },
  capens: {
    sections: [{ h2: "Vidange d'un chauffe-eau", text: "Vidanger le ballon une fois par an élimine une partie du calcaire déposé au fond et prolonge sa durée de vie. L'opération demande de couper l'alimentation électrique, de fermer l'arrivée d'eau et d'utiliser le groupe de sécurité. En cas de doute, mieux vaut la confier à un plombier." }],
    faq: [{ q: "Faut-il vidanger son chauffe-eau ?", a: "C'est recommandé de temps en temps, surtout en eau calcaire." }],
  },
  carbonne: {
    sections: [{ h2: "Remplacer un évier ou un lavabo", text: "Le remplacement d'un évier ou d'un lavabo demande de couper l'eau, de déposer l'ancien équipement, de poser le nouveau et de refaire les raccordements. La robinetterie, le siphon et les flexibles sont souvent à renouveler en même temps. Un joint mal posé provoque des fuites lentes, difficiles à repérer." }],
    faq: [{ q: "Faut-il changer le siphon avec le lavabo ?", a: "C'est conseillé, pour éviter une fuite à la jonction." }],
  },
  "saint-lys": {
    sections: [{ h2: "Le vase d'expansion et la pression de la chaudière", text: "Le vase d'expansion absorbe les variations de volume de l'eau du circuit de chauffage. S'il est défaillant, la pression monte ou chute, et la soupape peut se déclencher. Une pression qui descend régulièrement sous 1 bar doit alerter. Un diagnostic précis évite de remplacer des pièces au hasard." }],
    faq: [{ q: "Pourquoi ma chaudière perd de la pression ?", a: "Fuite, vase d'expansion ou purge d'un radiateur. Un diagnostic permet de trancher." }],
  },
  balma: {
    sections: [{ h2: "Préparer un rendez-vous efficace", text: "Pour un diagnostic en rendez-vous, préparez quelques informations : la nature du problème, depuis quand, les appareils concernés, leur âge, l'accès au robinet d'arrêt. Rendez les lieux accessibles (placard sous évier dégagé, accès au ballon). Le rendez-vous sera plus court et le devis plus précis." }],
    faq: [{ q: "Faut-il préparer quelque chose avant la visite ?", a: "Dégagez l'accès à l'équipement et repérez le robinet d'arrêt." }],
  },
  blagnac: {
    sections: [{ h2: "Étanchéité d'une douche", text: "Une douche mal étanchéifiée peut causer des dégâts invisibles pendant des mois : humidité dans la cloison, moisissures, plafond taché à l'étage inférieur. La qualité de l'étanchéité sous le carrelage, des joints et des raccords au siphon est déterminante. Pour une rénovation, c'est un point à ne pas négliger." }],
    faq: [{ q: "Comment repérer une infiltration d'une douche ?", a: "Taches d'humidité, peinture qui cloque, odeur de moisi à proximité." }],
  },
  colomiers: {
    sections: [{ h2: "Plomberie d'une cuisine", text: "L'installation d'une cuisine implique l'arrivée d'eau chaude et froide, l'évacuation de l'évier et du lave-vaisselle, parfois la création d'un point d'eau supplémentaire. Les positions doivent être prévues avant la pose des meubles. Un robinet d'arrêt par appareil facilite les interventions futures." }],
    faq: [{ q: "Posez-vous des cuisines ?", a: "Oui, la pose de cuisine fait partie des prestations." }],
  },
  "l-union": {
    sections: [{ h2: "Pose d'un mitigeur thermostatique", text: "Un mitigeur thermostatique garde la température réglée malgré les variations de pression, et limite le risque de brûlure. Sa pose demande de respecter les entraxes et de contrôler l'arrivée d'eau chaude et froide. Il est particulièrement utile dans les familles avec jeunes enfants." }],
    faq: [{ q: "Un mitigeur thermostatique est-il utile ?", a: "Oui : température stable et sécurité accrue." }],
  },
  "ramonville-saint-agne": {
    sections: [{ h2: "Humidité et condensation : ne pas confondre avec une fuite", text: "Des traces d'humidité ne viennent pas toujours d'une fuite : la condensation sur des canalisations d'eau froide ou une ventilation insuffisante peut provoquer les mêmes symptômes. Un plombier distingue les deux et recommande la bonne solution, par exemple un calorifugeage ou une amélioration de la ventilation." }],
    faq: [{ q: "Mes canalisations suintent, est-ce une fuite ?", a: "Pas toujours : il peut s'agir de condensation. Un diagnostic le confirme." }],
  },
  aucamville: {
    sections: [{ h2: "Que contient un devis de plomberie ?", text: "Un bon devis détaille la main-d'œuvre, les fournitures, le déplacement éventuel et la garantie. Il précise ce qui est inclus et ce qui ne l'est pas. Comparer deux devis suppose de comparer les mêmes prestations. Nino annonce le prix avant les travaux, sans mauvaise surprise." }],
    faq: [{ q: "Le devis engage-t-il ?", a: "Non, il est gratuit et sans engagement." }],
  },
  "saint-orens-de-gameville": {
    sections: [{ h2: "Pourquoi coordonner plomberie et finitions", text: "En rénovation de salle de bain, la plomberie intervient avant et après les finitions : alimentation et évacuation d'abord, raccordement des appareils ensuite. Un décalage entre les intervenants provoque des retards. Avec un second professionnel coordonné par Nino, le chantier suit un ordre logique." }],
    faq: [{ q: "Combien d'intervenants pour une salle de bain ?", a: "Deux : Nino pour la plomberie, un second professionnel pour les finitions." }],
  },
  "quint-fonsegrives": {
    sections: [{ h2: "Facture d'eau en hausse : vérifier d'abord", text: "Une hausse de consommation sans changement d'habitudes évoque une fuite : chasse d'eau, canalisation, chauffe-eau. Relevez l'index du compteur à intervalles réguliers. Une fuite détectée tôt coûte peu à réparer, tandis qu'une fuite négligée peut faire doubler la facture et abîmer le logement." }],
    faq: [{ q: "Ma facture d'eau a doublé, que faire ?", a: "Testez le compteur puis appelez-nous pour localiser la fuite." }],
  },
  launaguet: {
    sections: [{ h2: "Choisir sa robinetterie de cuisine", text: "Un mitigeur de cuisine avec douchette extractible facilite le nettoyage, tandis qu'un modèle à bec haut permet de remplir de grands récipients. Vérifiez la compatibilité avec l'évier et la présence d'un perçage. La pose est simple, mais le raccordement des flexibles doit être soigné." }],
    faq: [{ q: "Pouvez-vous poser un robinet que j'ai acheté ?", a: "Oui, après vérification de la compatibilité." }],
  },
  labege: {
    sections: [{ h2: "Entretien préventif d'une installation", text: "Un contrôle annuel des flexibles, du groupe de sécurité, de la pression et des siphons coûte peu et évite beaucoup de pannes. Pour un local professionnel, c'est l'assurance de ne pas être surpris un jour d'ouverture. Nino propose un devis gratuit pour ce type de visite." }],
    faq: [{ q: "Proposez-vous des visites d'entretien ?", a: "Oui, sur demande, avec devis gratuit." }],
  },
  "castanet-tolosan": {
    sections: [{ h2: "Rénover une salle de bain dans l'ancien", text: "Dans un logement ancien, la salle de bain impose de composer avec des murs irréguliers, des évacuations existantes et parfois des planchers sensibles à l'humidité. Une étude préalable permet de choisir les bons matériaux et de positionner correctement les appareils. Un devis gratuit détaille les contraintes." }],
    faq: [{ q: "Peut-on déplacer une douche dans l'ancien ?", a: "Souvent oui, après étude des évacuations et du plancher." }],
  },
  "saint-jory": {
    sections: [{ h2: "Créer un point d'eau supplémentaire", text: "Ajouter un lavabo, une buanderie ou un lave-linge suppose d'étudier l'alimentation, l'évacuation et la ventilation. Plus le nouveau point d'eau est loin des réseaux existants, plus le chantier est long. Un devis gratuit permet de comparer plusieurs implantations." }],
    faq: [{ q: "Combien de temps pour créer un point d'eau ?", a: "Cela dépend de la distance aux réseaux. Le devis le précise." }],
  },
  cornebarrieu: {
    sections: [{ h2: "Absence prolongée : couper l'eau", text: "Avant un long déplacement, fermez l'arrivée d'eau générale et coupez le chauffe-eau. Dans une maison vide, une fuite peut passer inaperçue des jours entiers. Un contrôle des flexibles avant le départ évite un retour désagréable." }],
    faq: [{ q: "Dois-je couper l'eau en partant en vacances ?", a: "C'est conseillé pour une absence longue." }],
  },
  "saint-jean": {
    sections: [{ h2: "Chasse d'eau qui coule : un réglage simple", text: "Une chasse qui coule peut venir d'un flotteur mal réglé ou d'un joint de cloche usé. Un réglage ou le remplacement du mécanisme suffit. Ne laissez pas la fuite durer : elle augmente la facture et peut user la cuvette." }],
    faq: [{ q: "Ma chasse d'eau coule, est-ce urgent ?", a: "Pas urgent, mais rentable à réparer vite." }],
  },
  leguevin: {
    sections: [{ h2: "Chauffe-eau thermodynamique ou électrique classique ?", text: "Le chauffe-eau thermodynamique consomme moins d'électricité qu'un modèle classique, mais coûte plus cher à l'achat et demande un emplacement adapté. Le modèle électrique classique est simple et économique à l'installation. Le choix dépend de l'espace disponible, du budget et des habitudes de consommation." }],
    faq: [{ q: "Quel chauffe-eau choisir ?", a: "Cela dépend de l'espace et du budget. Nino vous conseille lors du devis gratuit." }],
  },
  rieumes: {
    sections: [{ h2: "Évacuations d'une maison ancienne", text: "Dans les maisons de bourg, les évacuations sont parfois sinueuses ou en pente insuffisante, ce qui favorise les bouchons. Une inspection permet de distinguer un simple encrassement d'un défaut de conception. Selon le cas, un nettoyage ou une reprise partielle est préférable." }],
    faq: [{ q: "Mes évacuations se bouchent souvent, pourquoi ?", a: "Pente insuffisante ou encrassement. Un diagnostic permet de trancher." }],
  },
  longages: {
    sections: [{ h2: "Remplacement d'un ballon d'eau chaude", text: "Le remplacement comprend la vidange, la dépose de l'ancien ballon, la pose du nouveau, le raccordement hydraulique et électrique, et le groupe de sécurité neuf. Un essai en chauffe clôt l'intervention. L'opération se fait généralement dans la journée." }],
    faq: [{ q: "Combien de temps dure un remplacement de chauffe-eau ?", a: "Généralement une demi-journée à une journée." }],
  },
  venerque: {
    sections: [{ h2: "Choisir entre réparation et remplacement", text: "Un équipement de plus de dix ans, qui tombe en panne régulièrement, mérite souvent d'être remplacé. Un équipement récent avec une panne isolée se répare. Nino vous présente les deux options dans un devis gratuit et vous laisse choisir." }],
    faq: [{ q: "Réparer ou remplacer ?", a: "Cela dépend de l'âge, de la fréquence des pannes et du coût de la réparation." }],
  },
}
