// Dernière section de fond par commune (sujet distinct d'une page à l'autre) + une question de FAQ.
import type { ZoneExtra } from "./zone-content"

export const zoneExtra7: Record<string, ZoneExtra> = {
  villate: {
    sections: [{ h2: "Remplacer ses vannes et robinets d'arrêt", text: "Les robinets d'arrêt placés sous les éviers, derrière les WC ou à l'entrée d'une pièce permettent de couper l'eau localement sans priver toute la maison. Avec les années, ils se grippent ou fuient. Les remplacer, surtout avant un chantier ou une absence, est un petit investissement qui facilite chaque intervention future. Nino vérifie leur état à chaque diagnostic et vous indique ceux qui sont à changer." }],
    faq: [{ q: "Mon robinet d'arrêt goutte, que faire ?", a: "Un joint ou le presse-étoupe est en cause. Il peut se réparer ou se remplacer facilement." }],
  },
  frouzins: {
    sections: [{ h2: "Désembouer un circuit de chauffage", text: "Avec le temps, des boues se forment dans les circuits de chauffage : radiateurs froids en bas, chaudière qui chauffe plus longtemps, bruits dans les tuyaux. Un désembouage rétablit la circulation et protège la chaudière. C'est une opération à envisager si les radiateurs ne chauffent plus uniformément malgré la purge. Un diagnostic permet de confirmer le besoin avant de lancer le chantier." }],
    faq: [{ q: "Qu'est-ce qu'un désembouage ?", a: "Un nettoyage du circuit de chauffage pour éliminer les boues qui gênent la circulation de l'eau." }],
  },
  labastidette: {
    sections: [{ h2: "Un adoucisseur d'eau, utile ou non ?", text: "Un adoucisseur réduit le calcaire qui entartre ballons, robinetterie et appareils. Il peut allonger la durée de vie de l'installation, mais demande un entretien (sel, contrôle) et un emplacement adapté. Avant d'en installer un, il est utile de constater l'état de l'entartrage et la dureté de l'eau. Nino vous conseille sans pousser à l'achat." }],
    faq: [{ q: "L'adoucisseur est-il indispensable ?", a: "Non, il dépend de la dureté de l'eau et de l'état de l'installation." }],
  },
  lamasquere: {
    sections: [{ h2: "Remplacer un siphon", text: "Un siphon qui fuit ou qui sent mauvais se remplace en quelques minutes. Il faut choisir le bon diamètre, un joint adapté et un modèle facile à démonter pour l'entretien. Sous un évier, un siphon avec bouchon de nettoyage évite d'avoir à tout démonter en cas de bouchon." }],
    faq: [{ q: "Mon siphon fuit au niveau de l'écrou, que faire ?", a: "Un joint ou un serrage est à revoir. Si le plastique est fissuré, il faut le remplacer." }],
  },
  "le-fauga": {
    sections: [{ h2: "Après une coupure d'eau", text: "À la remise en eau après une coupure ou des travaux, ouvrez les robinets progressivement, laissez couler pour évacuer l'air et les éventuels dépôts, puis vérifiez l'absence de fuite aux raccords. Une eau trouble ou chargée en particules disparaît en général après quelques minutes. Si ce n'est pas le cas, faites contrôler vos filtres et vos mousseurs." }],
    faq: [{ q: "Mes robinets crachent après une coupure, c'est normal ?", a: "Oui, c'est de l'air dans les canalisations. Cela cesse après quelques instants." }],
  },
  "lavernose-lacasse": {
    sections: [{ h2: "Récupération d'eau de pluie : le raccordement", text: "Raccorder une cuve de récupération d'eau de pluie à des usages domestiques (WC, arrosage) impose de respecter des règles : séparation stricte avec le réseau d'eau potable, signalétique, clapet. Un raccordement mal réalisé peut contaminer l'eau du réseau. Mieux vaut faire valider le projet par un plombier avant de lancer les travaux." }],
    faq: [{ q: "Puis-je alimenter mes WC avec de l'eau de pluie ?", a: "Oui, sous conditions de séparation stricte du réseau potable. Un devis gratuit précise le montage." }],
  },
  "saint-clar-de-riviere": {
    sections: [{ h2: "Entretien d'un point d'eau extérieur", text: "Dans une maison de campagne, un robinet extérieur, une fontaine ou un lavoir sert beaucoup. Une vanne d'arrêt intérieure dédiée permet de le couper l'hiver, et un robinet purgeur évite le gel. Vérifiez le clapet anti-retour sur les raccordements de tuyaux d'arrosage : il protège le réseau d'eau potable des retours d'eau polluée." }],
    faq: [{ q: "Pourquoi un clapet anti-retour sur un robinet extérieur ?", a: "Pour éviter qu'une eau polluée ne retourne vers le réseau d'eau potable." }],
  },
  lherm: {
    sections: [{ h2: "Un ballon trop petit ou trop grand ?", text: "Un ballon trop petit s'épuise vite, un ballon trop grand chauffe de l'eau inutilement. La bonne capacité tient compte du nombre d'occupants, des usages (baignoire, douche) et de la place disponible. Si votre famille s'est agrandie ou si vous avez rénové une salle de bain, la capacité du chauffe-eau mérite d'être réévaluée." }],
    faq: [{ q: "Mon ballon de 100 litres suffit-il pour quatre personnes ?", a: "En général non. Environ 200 litres sont préférables pour une famille." }],
  },
  "beaumont-sur-leze": {
    sections: [{ h2: "Plancher chauffant : pannes et purge", text: "Un plancher chauffant qui chauffe de façon inégale peut contenir de l'air, être mal équilibré ou souffrir d'une pompe défaillante. La purge et l'équilibrage des circuits corrigent souvent le problème. Une fuite sur un circuit encastré, plus rare, demande une localisation précise avant toute intervention." }],
    faq: [{ q: "Mon plancher chauffant chauffe mal par endroits, pourquoi ?", a: "Air dans un circuit ou équilibrage à revoir. Un diagnostic précise la cause." }],
  },
  berat: {
    sections: [{ h2: "Premier relevé de compteur : bien le lire", text: "Le compteur d'eau affiche un index en mètres cubes. Relevé le soir et le matin sans consommation, il indique si une fuite existe. Notez aussi le petit témoin (roue ou triangle) qui tourne même pour de faibles fuites. C'est un test gratuit qui évite des mois de surconsommation." }],
    faq: [{ q: "Comment lire mon compteur d'eau ?", a: "L'index en m³ s'additionne ; un témoin qui tourne tous robinets fermés signale une fuite." }],
  },
  "bois-de-la-pierre": {
    sections: [{ h2: "Remplacer un chauffe-eau dans un petit espace", text: "Dans une dépendance ou un cellier exigu, le choix du chauffe-eau se fait selon les dimensions, l'accessibilité du groupe de sécurité et la possibilité d'évacuer le trop-plein. Un modèle compact et bien raccordé simplifie l'entretien. Pensez à prévoir un accès permettant de retirer le ballon en cas de remplacement." }],
    faq: [{ q: "Un chauffe-eau peut-il aller dans un placard ?", a: "Oui, si l'accès et l'évacuation sont prévus. Un devis gratuit le précise." }],
  },
  cugnaux: {
    sections: [{ h2: "Remplacer un WC", text: "Un WC se remplace en suivant quelques étapes : fermeture de l'eau, dépose de l'ancienne cuvette, contrôle de l'évacuation, pose de la nouvelle cuvette et de la chasse, essai d'étanchéité. Un WC suspendu demande un bâti-support, ce qui change les contraintes de pose. Nino vous conseille selon la configuration de votre salle d'eau." }],
    faq: [{ q: "Pouvez-vous poser un WC suspendu ?", a: "Oui, avec un bâti-support adapté et un devis gratuit." }],
  },
  "portet-sur-garonne": {
    sections: [{ h2: "Évacuations d'un commerce : graisses et siphons", text: "Dans un commerce de bouche ou un local avec point d'eau très utilisé, les graisses et dépôts peuvent encrasser rapidement les évacuations. Un nettoyage préventif régulier et un bac à graisses adapté limitent les bouchons. En cas d'obstruction, un débouchage rapide évite une interruption d'activité." }],
    faq: [{ q: "Mon évacuation de cuisine se bouche souvent, pourquoi ?", a: "Les graisses se solidifient dans les tuyaux. Un nettoyage et des gestes préventifs aident." }],
  },
  "villeneuve-tolosane": {
    sections: [{ h2: "Plomberie d'une extension de maison", text: "Une extension apporte souvent une salle d'eau, une cuisine ou une buanderie, et donc de nouveaux besoins en alimentation et évacuation. Il faut prévoir en amont le passage des canalisations, les pentes et l'accès aux raccords. Impliquer le plombier avant le coulage de la dalle évite des reprises coûteuses." }],
    faq: [{ q: "Quand intervenir sur la plomberie d'une extension ?", a: "Le plus tôt possible, avant la dalle et les cloisons." }],
  },
  "plaisance-du-touch": {
    sections: [{ h2: "Remplacer un sèche-serviettes", text: "Le remplacement d'un sèche-serviettes à eau chaude demande de vidanger le circuit, de déposer l'ancien radiateur, de poser le nouveau et de purger. Un modèle électrique est plus simple à poser mais consomme davantage. Dans les deux cas, vérifiez les raccords et le fonctionnement avant de refermer." }],
    faq: [{ q: "Peut-on remplacer un sèche-serviettes à eau chaude ?", a: "Oui, avec une vidange et une purge du circuit." }],
  },
  tournefeuille: {
    sections: [{ h2: "Évacuation d'un lave-linge qui déborde", text: "Un lave-linge qui déborde par le tuyau d'évacuation indique en général une évacuation encombrée ou mal siphonnée. Un nettoyage du siphon et un contrôle de la hauteur du tuyau règlent le problème. Il ne faut pas ignorer ce symptôme : l'eau stagnante peut provoquer des odeurs et des dégâts." }],
    faq: [{ q: "Mon lave-linge déborde par l'évacuation, que faire ?", a: "Contrôlez le siphon et la hauteur du tuyau. Appelez-nous si le problème persiste." }],
  },
  fonsorbes: {
    sections: [{ h2: "Entartrage : comment le repérer", text: "Les dépôts blancs autour des robinets, la pomme de douche qui se bouche, un chauffe-eau qui chauffe plus lentement sont les signes d'une eau calcaire. Un détartrage régulier et, si besoin, un adoucisseur limitent les dégâts. Les appareils durent plus longtemps avec un entretien adapté." }],
    faq: [{ q: "Comment détartrer une pomme de douche ?", a: "Un bain de vinaigre blanc suffit souvent. Si elle reste bouchée, remplacez-la." }],
  },
  auterive: {
    sections: [{ h2: "Raccorder un lave-vaisselle neuf", text: "Un lave-vaisselle neuf se raccorde à l'arrivée d'eau froide, à l'évacuation de l'évier et à l'électricité. Il faut un robinet d'arrêt dédié, un flexible adapté et un siphon à double raccord. Un mauvais montage provoque des fuites ou des remontées d'odeurs. Nino réalise le raccordement et teste le cycle." }],
    faq: [{ q: "Pouvez-vous raccorder mon lave-vaisselle ?", a: "Oui, avec robinet d'arrêt et siphon adaptés." }],
  },
  noe: {
    sections: [{ h2: "Un robinet de puisage au jardin", text: "Un point d'eau au jardin facilite l'arrosage et le nettoyage. Il doit être alimenté par une canalisation protégée du gel, avec une vanne d'arrêt intérieure et un clapet anti-retour. Une pose sérieuse évite les fuites derrière un mur et préserve la qualité de l'eau du réseau." }],
    faq: [{ q: "Peut-on ajouter un robinet extérieur ?", a: "Oui, avec vanne d'arrêt et protection antigel. Devis gratuit." }],
  },
  capens: {
    sections: [{ h2: "Contrôler le groupe de sécurité à la main", text: "En soulevant doucement la manette du groupe de sécurité, de l'eau doit s'écouler quelques secondes, puis s'arrêter quand on relâche. Si elle coule en continu, le groupe est entartré ou usé. Cette manœuvre mensuelle prévient le blocage et signale vite un défaut. Nino remplace le groupe lorsque c'est nécessaire." }],
    faq: [{ q: "À quelle fréquence manœuvrer le groupe de sécurité ?", a: "Environ une fois par mois." }],
  },
  carbonne: {
    sections: [{ h2: "Un évier qui se vide lentement", text: "Un évier lent signale un siphon encrassé, une graisse qui se fige ou une canalisation partiellement bouchée. Commencez par nettoyer le siphon. Si le problème persiste, un débouchage mécanique est nécessaire. Évitez de verser de l'huile ou de la graisse dans l'évier : elle se solidifie dans les tuyaux." }],
    faq: [{ q: "Comment éviter les bouchons dans l'évier ?", a: "Éviter graisses, marc de café et déchets alimentaires solides." }],
  },
  "saint-lys": {
    sections: [{ h2: "Remplacer des radiateurs", text: "Remplacer un radiateur demande de vidanger une partie du circuit, de déposer l'ancien, de poser le nouveau avec ses supports et vannes, puis de purger. Le choix de la puissance dépend de la pièce et de l'isolation. Un radiateur sous-dimensionné chauffe mal, un radiateur surdimensionné gaspille." }],
    faq: [{ q: "Comment choisir la puissance d'un radiateur ?", a: "Selon la surface, l'isolation et la température visée. Nino vous conseille." }],
  },
  balma: {
    sections: [{ h2: "Installer une douchette ou un WC lavant", text: "Ces équipements demandent une arrivée d'eau et, pour certains, une prise électrique. La pose doit respecter les règles de sécurité de la pièce et la protection contre les retours d'eau. Un plombier vérifie la compatibilité avec votre installation avant de commencer." }],
    faq: [{ q: "Peut-on installer un WC lavant dans un logement existant ?", a: "Oui, sous réserve d'une arrivée d'eau et d'une alimentation électrique adaptées." }],
  },
  blagnac: {
    sections: [{ h2: "Remplacer une baignoire par une douche", text: "Ce chantier courant demande de déposer la baignoire, d'adapter l'évacuation, de poser un receveur et de refaire l'étanchéité. La plomberie doit être reprise en même temps pour garantir un écoulement correct. Un devis gratuit détaille les étapes et la coordination avec les finitions." }],
    faq: [{ q: "Combien de temps pour remplacer une baignoire par une douche ?", a: "Quelques jours selon le chantier. Le devis précise le calendrier." }],
  },
  colomiers: {
    sections: [{ h2: "Faire contrôler sa plomberie avant un achat", text: "Avant d'acheter un logement, un contrôle de la plomberie (état des canalisations, du chauffe-eau, des évacuations) permet d'anticiper des travaux et de négocier. Un plombier peut repérer les signes d'une installation à reprendre. Nino réalise un diagnostic sur demande." }],
    faq: [{ q: "Pouvez-vous contrôler une installation avant l'achat ?", a: "Oui, sur demande, avec un devis gratuit." }],
  },
  "l-union": {
    sections: [{ h2: "Un robinet de chasse qui siffle", text: "Un sifflement à chaque remplissage de chasse indique un flotteur ou un robinet d'alimentation usé. Le remplacement est rapide et évite des vibrations dans les canalisations. Un réglage de la pression peut aussi atténuer le bruit." }],
    faq: [{ q: "Ma chasse d'eau siffle, pourquoi ?", a: "Un robinet flotteur usé ou une pression trop élevée." }],
  },
  "ramonville-saint-agne": {
    sections: [{ h2: "Remplacer un chauffe-eau en appartement", text: "Dans un appartement, le ballon est souvent placé dans un placard ou une cuisine, avec un accès contraint. Le remplacement demande de couper l'eau, éventuellement de prévenir le syndic, et de raccorder l'évacuation du groupe de sécurité. Prévoyez l'accès et le passage de l'ancien ballon." }],
    faq: [{ q: "Faut-il prévenir le syndic pour changer un chauffe-eau ?", a: "Parfois, si l'eau doit être coupée sur une colonne commune." }],
  },
  aucamville: {
    sections: [{ h2: "Pièces d'origine ou pièces compatibles ?", text: "Pour une réparation, une pièce d'origine garantit la compatibilité mais peut coûter plus cher ; une pièce compatible convient si elle respecte les dimensions et les normes. Nino utilise les pièces adaptées à chaque cas et précise le choix dans le devis." }],
    faq: [{ q: "Utilisez-vous des pièces de qualité ?", a: "Oui, adaptées à chaque installation et précisées dans le devis." }],
  },
  "saint-orens-de-gameville": {
    sections: [{ h2: "Choisir un meuble vasque ou un lavabo", text: "Un meuble vasque offre du rangement ; un lavabo seul gagne de la place. Le choix influence la position des arrivées et de l'évacuation, ainsi que la hauteur de pose. La plomberie doit être adaptée avant de poser le meuble, ce qui se prépare à l'étape du devis." }],
    faq: [{ q: "Pouvez-vous décaler les arrivées d'eau pour un meuble ?", a: "Oui, selon la configuration des murs. Devis gratuit." }],
  },
  "quint-fonsegrives": {
    sections: [{ h2: "Évacuation d'une baignoire qui se vide mal", text: "Une baignoire lente à se vider est souvent encombrée par des cheveux et des savons. Un nettoyage du siphon ou de la bonde suffit parfois. Si le problème persiste, la canalisation est peut-être partiellement bouchée plus loin. Un débouchage adapté la libère." }],
    faq: [{ q: "Ma baignoire se vide lentement, que faire ?", a: "Nettoyez la bonde et le siphon. Sinon, un débouchage est nécessaire." }],
  },
  launaguet: {
    sections: [{ h2: "Remplacer un flexible de douche", text: "Un flexible de douche fatigué fuit au niveau des raccords ou se vrille. Il se remplace en quelques minutes avec un modèle de la bonne longueur et du bon filetage. Un joint neuf à chaque raccord garantit l'étanchéité." }],
    faq: [{ q: "Mon flexible de douche fuit, que faire ?", a: "Changez-le, avec des joints neufs aux raccords." }],
  },
  labege: {
    sections: [{ h2: "Remplacer un chauffe-eau dans un local", text: "Dans un local professionnel, un chauffe-eau doit répondre aux besoins du personnel et de la clientèle. Un petit modèle sur évier convient à un point d'eau isolé, un ballon plus grand à des sanitaires fréquentés. Le remplacement planifié évite l'interruption d'activité." }],
    faq: [{ q: "Quel chauffe-eau pour un petit local ?", a: "Un modèle compact adapté aux besoins. Nino vous conseille." }],
  },
  "castanet-tolosan": {
    sections: [{ h2: "Remplacer une colonne d'évacuation", text: "Dans un bâti ancien, les évacuations en fonte ou en grès peuvent se fissurer ou se boucher. Un remplacement partiel ou complet, en PVC par exemple, rétablit un écoulement fiable. L'accès aux gaines et la coordination avec les voisins sont à prévoir en copropriété." }],
    faq: [{ q: "Mon évacuation en fonte fuit, que faire ?", a: "Un remplacement partiel est souvent possible. Un diagnostic précise l'étendue." }],
  },
  "saint-jory": {
    sections: [{ h2: "Mise en eau d'une installation neuve", text: "Avant de mettre en service une installation neuve, on contrôle les raccords, on purge l'air, on teste la pression et on vérifie l'absence de fuite. Cette étape protège contre les mauvaises surprises après la livraison. Nino réalise ces essais à la fin de chaque chantier." }],
    faq: [{ q: "Testez-vous l'installation après les travaux ?", a: "Oui, essai de pression et contrôle des raccords." }],
  },
  cornebarrieu: {
    sections: [{ h2: "Douche : débit insuffisant", text: "Un débit faible peut venir d'une pomme de douche entartrée, d'un mitigeur encrassé ou d'une pression insuffisante. Nettoyez ou remplacez la pomme, puis contrôlez le mitigeur. Si tous les points d'eau sont touchés, vérifiez le robinet d'arrêt et le réducteur." }],
    faq: [{ q: "Ma douche a peu de pression, pourquoi ?", a: "Pomme entartrée, mitigeur encrassé ou réducteur de pression mal réglé." }],
  },
  "saint-jean": {
    sections: [{ h2: "Remplacer un mitigeur de baignoire", text: "Un mitigeur de baignoire fuit souvent au niveau de la cartouche ou des raccords. Son remplacement demande de couper l'eau, de déposer l'ancien, de poser le nouveau avec des joints neufs et de vérifier l'étanchéité. Pensez à contrôler les robinets d'arrêt en même temps." }],
    faq: [{ q: "Mon mitigeur de baignoire fuit, faut-il le changer ?", a: "Pas toujours, une cartouche neuve suffit parfois." }],
  },
  leguevin: {
    sections: [{ h2: "Plomberie d'une salle de bain à l'étage", text: "Une salle de bain à l'étage impose de soigner l'étanchéité et l'évacuation, pour ne pas affecter le plafond du niveau inférieur. Des trappes d'accès aux raccords permettent un entretien facile. Les dégâts d'une fuite à l'étage sont plus importants : un contrôle régulier est utile." }],
    faq: [{ q: "Quels risques pour une salle de bain à l'étage ?", a: "Les infiltrations vers le niveau inférieur. Soignez l'étanchéité et les raccords." }],
  },
  rieumes: {
    sections: [{ h2: "Remplacer un vieux chauffe-eau en cave", text: "Dans une cave ou une dépendance, un ancien ballon peut être corrodé par l'humidité ambiante. Le remplacer par un modèle adapté, avec évacuation du trop-plein, évite des dégâts. Vérifiez aussi l'état du groupe de sécurité et des flexibles." }],
    faq: [{ q: "Mon chauffe-eau est dans une cave humide, est-ce un problème ?", a: "L'humidité accélère la corrosion. Un contrôle régulier est recommandé." }],
  },
  longages: {
    sections: [{ h2: "Installer un robinet de cuisine", text: "Le remplacement d'un robinet de cuisine suppose de couper l'eau, de déposer l'ancien, de poser le nouveau avec joint et de raccorder les flexibles. Un mitigeur à douchette ou à bec haut doit s'accorder à l'évier. Un test d'étanchéité clôt l'intervention." }],
    faq: [{ q: "Combien de temps pour changer un robinet de cuisine ?", a: "Généralement moins d'une heure." }],
  },
  venerque: {
    sections: [{ h2: "Entretenir sa chaudière avant l'hiver", text: "Avant la saison de chauffe, faites vérifier la pression, purger les radiateurs, contrôler les évacuations de condensats et l'état général de la chaudière. L'entretien annuel est une obligation légale et prévient les pannes pendant les premiers froids." }],
    faq: [{ q: "À quelle période entretenir la chaudière ?", a: "Idéalement en début d'automne, avant la saison de chauffe." }],
  },
}
