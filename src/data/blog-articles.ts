// Contenu : conseils généraux à angle toulousain. Aucune affirmation sur Nino hors faits vérifiés
// (24h/24, devis gratuit, basé à Muret, chantiers confirmés à Toulouse). Pas de délais ni de chiffres locaux non sourcés.
export interface BlogArticle {
  slug: string
  title: string
  metaTitle: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt?: string
  category: "Conseils" | "Entretien" | "Urgence"
  readTime: number
  service: { slug: string; label: string }
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "mauvaises-odeurs-canalisation-toulouse",
    title: "Mauvaises odeurs de canalisation à Toulouse : d'où viennent-elles et comment les éliminer",
    metaTitle: "Odeur de canalisation à Toulouse : causes et solutions",
    excerpt:
      "Odeur d'égout dans la salle de bain, la cuisine ou les WC : les causes les plus courantes en appartement comme en maison ancienne, et les gestes pour les faire disparaître.",
    publishedAt: "2026-10-27",
    category: "Entretien",
    readTime: 4,
    service: { slug: "debouchage", label: "Débouchage" },
    content: `Une odeur d'égout qui flotte dans la salle de bain ou sous l'évier n'est jamais agréable, et elle revient souvent malgré l'aération. Dans un appartement toulousain en copropriété comme dans une échoppe en brique, la cause est le plus souvent simple à repérer : une évacuation qui ne joue plus son rôle de barrière contre les remontées d'air du réseau.

## Comprendre d'où vient l'odeur

Chaque appareil sanitaire (lavabo, douche, évier, WC) est relié à l'évacuation par un siphon. Sa forme en U retient un peu d'eau qui bloque le passage des odeurs. Si cette eau disparaît, si le siphon est sale ou si l'évacuation est mal ventilée, l'air du réseau remonte dans la pièce.

Pour localiser la source, sentez successivement chaque évacuation de la pièce, bonde et trop-plein compris. L'odeur est en général plus forte à l'endroit fautif.

## Les causes les plus fréquentes

- **Un siphon qui s'est vidé** : une salle de bain ou une douche peu utilisée, une résidence secondaire fermée pendant les vacances d'été, ou une chaleur qui fait s'évaporer l'eau du siphon.
- **Des dépôts accumulés** : graisses à la cuisine, savon et cheveux à la salle de bain forment une couche qui fermente dans le siphon et la bonde.
- **Un siphon ou un joint défectueux** : un raccord mal serré laisse passer l'air même si le siphon est plein.
- **Un joint de WC fatigué** à la base de la cuvette.
- **Un défaut de ventilation** de la colonne d'évacuation, qui provoque un effet d'aspiration de l'eau des siphons quand un voisin vide sa baignoire ou tire la chasse.
- **Une évacuation vieillissante** : dans les maisons anciennes, des canalisations fissurées ou partiellement obstruées peuvent laisser remonter des odeurs.

## Les gestes à essayer chez vous

1. **Remettre de l'eau** : faites couler l'eau quelques instants dans les appareils peu utilisés pour reconstituer la garde d'eau du siphon.
2. **Nettoyer la bonde et le siphon** : retirez la grille, enlevez les cheveux et les dépôts, puis démontez le siphon avec une bassine dessous pour le rincer à l'eau chaude et au liquide vaisselle.
3. **Vérifier le remontage** : le joint doit être bien en place et l'écrou serré à la main, sans forcer.
4. **Rincer à l'eau chaude** les évacuations de cuisine pour entraîner les graisses.
5. **Aérer** la pièce et vérifier que les grilles de ventilation ne sont pas obstruées.

Évitez de mélanger plusieurs produits d'entretien ou de déboucheurs entre eux : certains mélanges dégagent des vapeurs dangereuses. Utilisez un seul produit à la fois, en suivant le mode d'emploi, et aérez.

## Les odeurs qui reviennent malgré tout

Si l'odeur persiste après le nettoyage, le problème est probablement plus en amont. Plusieurs indices doivent vous mettre sur la piste :

- Plusieurs appareils sentent mauvais en même temps.
- L'eau s'évacue lentement ou fait des gargouillis.
- L'odeur apparaît surtout quand un voisin utilise ses sanitaires.
- Des traces d'humidité apparaissent près d'une évacuation ou d'une colonne.

Dans ce cas, il peut s'agir d'une canalisation partiellement bouchée, d'un défaut de ventilation ou d'une évacuation endommagée. En copropriété, une colonne commune relève du syndic : signalez-lui le problème si plusieurs logements sont touchés.

## Quand appeler un professionnel

- L'odeur persiste après nettoyage et remise en eau des siphons.
- L'évacuation est lente ou régulièrement bouchée.
- Vous constatez de l'humidité ou une fuite près des raccords.
- Vous sentez une odeur de gaz, qui est différente d'une odeur d'égout : n'actionnez aucun interrupteur, ouvrez les fenêtres et quittez le logement avant d'appeler les secours.

Nino Plomberie intervient à Toulouse, Muret et dans toute la Haute-Garonne pour déboucher, réparer ou remplacer vos évacuations, avec un devis gratuit avant les travaux.`,
  },
  {
    slug: "wc-qui-fuit-chasse-d-eau-toulouse",
    title: "WC qui fuit ou chasse d'eau qui coule à Toulouse : diagnostic et solutions",
    metaTitle: "Chasse d'eau qui coule à Toulouse : que faire",
    excerpt:
      "Un filet d'eau dans la cuvette, un bruit de remplissage sans fin ou une flaque au pied des WC : comment trouver l'origine du problème et savoir quand appeler un plombier.",
    publishedAt: "2026-10-21",
    category: "Conseils",
    readTime: 4,
    service: { slug: "robinetterie-sanitaires", label: "Robinetterie & Sanitaires" },
    content: `Dans un appartement en copropriété comme dans une maison ancienne de Toulouse, un WC qui fuit passe souvent inaperçu pendant des semaines. Le bruit devient familier, la facture d'eau monte doucement. Pourtant, un mécanisme de chasse d'eau défaillant fait perdre de l'eau jour et nuit, et une fuite à la base de la cuvette peut abîmer le sol et gêner les voisins du dessous.

## Repérer l'origine du problème

Avant de démonter quoi que ce soit, identifiez d'où vient l'eau :

- **Un filet d'eau dans la cuvette** ou un bruit de remplissage qui revient régulièrement : le problème vient du réservoir.
- **Une flaque au pied des WC** : le joint entre la cuvette et l'évacuation, ou le raccord d'arrivée d'eau, est en cause.
- **De l'eau sur les parois extérieures du réservoir** : ce peut être de la condensation, surtout en été quand l'eau du réseau est fraîche, ou une fuite à la jonction réservoir-cuvette.

Pour confirmer une fuite dans la cuvette, versez quelques gouttes de colorant alimentaire dans le réservoir sans tirer la chasse. Si la couleur apparaît dans la cuvette au bout d'un quart d'heure, le clapet ne ferme pas correctement.

## Les pannes courantes du réservoir

1. **Le flotteur est mal réglé** : l'eau monte trop haut et s'écoule par le trop-plein. Ajustez la hauteur du flotteur pour que le niveau reste sous le trop-plein.
2. **Le joint du clapet est usé ou entartré** : il ne ferme plus l'écoulement. Nettoyez-le ou remplacez-le.
3. **Le robinet flotteur est défectueux** : il ne coupe plus l'arrivée d'eau et le remplissage ne s'arrête pas. Le remplacer suffit généralement.

Avant toute intervention, fermez le petit robinet d'arrêt situé sous le réservoir ou sur l'arrivée d'eau, puis videz le réservoir en tirant la chasse. Prenez en photo le mécanisme avant de le démonter et relevez la référence de la marque : cela facilite l'achat d'une pièce compatible.

## Une fuite à la base de la cuvette

Si l'eau s'écoule au sol lors de chaque chasse, la pipe d'évacuation ou son joint est probablement abîmé. Dans les échoppes et les maisons anciennes, le sol et le raccordement ont parfois vieilli ensemble, ce qui rend la réparation moins simple. En appartement, une fuite répétée vers l'étage inférieur relève d'un dégât des eaux : prévenez votre voisin et votre assureur sans attendre.

## Éviter que le problème revienne

Le calcaire et l'usure finissent par fatiguer les joints et le flotteur. Tirez la chasse de temps en temps pour vérifier que le réservoir se remplit puis s'arrête, et ne laissez pas un léger écoulement durer : il s'aggrave rarement tout seul.

## Quand appeler un professionnel

- Le réglage et le changement des joints n'ont rien résolu.
- L'eau coule à la base de la cuvette ou au raccord du mur.
- Le réservoir est fissuré ou le mécanisme n'est plus disponible.
- Vous souhaitez remplacer le WC entier, par exemple par un modèle suspendu.

En attendant l'intervention, fermez l'arrêt d'eau du WC et utilisez un seau pour la chasse si besoin.

Nino Plomberie intervient à Toulouse, Muret et dans toute la Haute-Garonne pour réparer ou remplacer vos sanitaires, avec un devis gratuit avant les travaux.`,
  },
  {
    slug: "fuite-eau-toulouse",
    title: "Fuite d'eau à Toulouse : comment la détecter et que faire",
    metaTitle: "Fuite d'eau à Toulouse : détecter et réagir vite",
    excerpt:
      "Facture qui grimpe, tache au plafond, compteur qui tourne : les signes d'une fuite dans une maison ou un appartement toulousain, et la méthode pour la confirmer.",
    publishedAt: "2026-10-21",
    category: "Conseils",
    readTime: 4,
    service: { slug: "fuite-d-eau", label: "Fuite d'eau" },
    content: `Que vous habitiez un appartement à Saint-Cyprien, une échoppe aux Minimes ou une maison en périphérie de Toulouse, une fuite non traitée abîme les murs et fait grimper la facture. Plus elle est repérée tôt, plus la réparation est simple.

## Les signes qui doivent alerter

- **Une facture d'eau qui augmente** sans changement dans vos habitudes.
- **Des taches d'humidité** sur un mur, un plafond ou autour d'un sanitaire.
- **Un bruit d'écoulement** alors qu'aucun robinet n'est ouvert.
- **Une odeur de moisi** persistante dans une pièce.
- **Une baisse de pression** au robinet.

## La méthode du compteur

1. Fermez tous les robinets et n'utilisez aucun appareil (lave-linge, lave-vaisselle).
2. Relevez l'index du compteur d'eau.
3. Attendez une à deux heures sans utiliser d'eau.
4. Relevez à nouveau l'index : s'il a bougé, il y a une fuite après le compteur.

En appartement, le compteur est souvent sur le palier ou dans une gaine technique. Demandez au syndic si vous ne le trouvez pas.

## Les fuites les plus fréquentes

- **La chasse d'eau** qui coule en continu dans la cuvette.
- **Le groupe de sécurité du chauffe-eau** qui goutte en permanence.
- **Un raccord** sous l'évier ou derrière le lave-linge.
- **Un joint de robinet** usé.

## Quand appeler un plombier à Toulouse

Si la fuite est cachée dans un mur ou sous un sol, si l'eau coule fort ou si elle touche un voisin, coupez l'arrivée d'eau et appelez un professionnel. Nino Plomberie intervient à Toulouse et dans toute la Haute-Garonne, 24h/24 et 7j/7.`,
  },
  {
    slug: "degat-des-eaux-appartement-toulouse",
    title: "Dégât des eaux en appartement à Toulouse : les bons réflexes",
    metaTitle: "Dégât des eaux en appartement à Toulouse : que faire",
    excerpt:
      "Fuite chez vous ou chez le voisin du dessus : couper l'eau, prévenir, remplir le constat amiable et faire réparer. Le guide pour les locataires et copropriétaires toulousains.",
    publishedAt: "2026-10-21",
    category: "Urgence",
    readTime: 5,
    service: { slug: "fuite-d-eau", label: "Fuite d'eau" },
    content: `À Toulouse, une grande partie des logements sont des appartements en copropriété. Une fuite y concerne rarement un seul logement : l'eau descend chez le voisin du dessous. Voici comment réagir.

## Si la fuite vient de chez vous

1. **Coupez l'arrivée d'eau** de votre logement. Le robinet d'arrêt est souvent près du compteur, sur le palier ou sous l'évier.
2. **Coupez l'électricité** de la pièce si l'eau approche des prises.
3. **Prévenez le voisin du dessous** pour qu'il vérifie ses plafonds.
4. **Faites intervenir un plombier** pour trouver et réparer la fuite.

## Si l'eau vient de chez le voisin du dessus

1. **Montez prévenir** le voisin, ou le syndic s'il est absent.
2. **Si personne ne répond** et que l'eau coule fort, contactez le syndic ou le gardien : ils peuvent parfois couper l'eau de la colonne.
3. **Protégez vos biens** et coupez l'électricité de la pièce touchée.

## Le constat amiable dégât des eaux

Remplissez un constat amiable avec le voisin concerné, puis déclarez le sinistre à votre assureur dans les délais de votre contrat. Prenez des photos des dégâts et gardez la facture de réparation du plombier. Entre assureurs, la plupart des dégâts des eaux en immeuble sont gérés selon la convention IRSI : votre assureur vous indiquera la marche à suivre.

## Partie privative ou partie commune ?

- **Fuite sur une canalisation privative** (après votre robinet d'arrêt) : à la charge de l'occupant ou du propriétaire.
- **Fuite sur une colonne commune** : c'est au syndic d'organiser la réparation.

En cas de doute, un plombier peut localiser l'origine de la fuite et vous indiquer de quel côté elle se trouve.

Nino Plomberie intervient en urgence 24h/24 dans les appartements de Toulouse et de la métropole, au 06 50 57 96 20.`,
  },
  {
    slug: "plomberie-maison-ancienne-toulouse",
    title: "Plomberie des maisons anciennes à Toulouse : échoppes et vieux réseaux",
    metaTitle: "Échoppe toulousaine : rénover une plomberie ancienne",
    excerpt:
      "Tuyaux en plomb ou en acier galvanisé, évacuations fatiguées, pression faible : ce qu'il faut vérifier dans une échoppe ou une maison ancienne de Toulouse.",
    publishedAt: "2026-10-21",
    category: "Conseils",
    readTime: 5,
    service: { slug: "installation-plomberie-neuve", label: "Plomberie neuve" },
    content: `Les échoppes et les maisons de ville en brique font le charme de Toulouse. Mais derrière les murs, la plomberie a souvent plusieurs décennies. Avant un achat ou une rénovation, elle mérite un vrai contrôle.

## Les matériaux à repérer

- **Le plomb** : courant dans les logements construits avant 1949. Les canalisations en plomb sont interdites dans les installations neuves depuis 1995, et la teneur en plomb de l'eau du robinet est limitée à 10 microgrammes par litre. Des tuyaux gris, mous et sans soudure visible doivent alerter.
- **L'acier galvanisé** : il s'entartre et rouille de l'intérieur, ce qui fait baisser la pression et colore l'eau.
- **Les anciennes évacuations** en fonte ou en grès : elles se fissurent avec le temps et peuvent provoquer des remontées d'odeurs.

## Les signes d'un réseau à reprendre

- Une pression faible, surtout à l'étage.
- Une eau trouble ou colorée au premier tirage.
- Des fuites à répétition sur les raccords.
- Des évacuations lentes et des odeurs dans la salle de bain.

## Rénover sans tout casser

Dans une échoppe, les murs épais et les pièces en enfilade compliquent le passage des tuyaux. Un plombier peut proposer de remplacer le réseau d'alimentation par du cuivre ou du multicouche, en profitant des travaux de salle de bain ou de cuisine pour limiter les saignées.

## Faire le point avant les travaux

Nino Plomberie intervient à Toulouse pour la plomberie neuve, la rénovation de salle de bain et la pose de cuisine, avec un devis gratuit avant chaque chantier.`,
  },
  {
    slug: "canalisation-bouchee-toulouse",
    title: "Canalisation bouchée à Toulouse : que faire avant d'appeler un plombier",
    metaTitle: "Canalisation bouchée à Toulouse : solutions simples",
    excerpt:
      "Ventouse, siphon, bicarbonate : les gestes à essayer sur un évier, une douche ou des WC bouchés, et les signes qu'il faut passer la main.",
    publishedAt: "2026-10-21",
    category: "Conseils",
    readTime: 4,
    service: { slug: "debouchage", label: "Débouchage" },
    content: `Un évier, une douche ou des WC qui ne s'écoulent plus, c'est l'un des appels les plus fréquents à Toulouse comme ailleurs. Voici quoi essayer, et quand s'arrêter.

## Les causes les plus fréquentes

- **Cheveux et savon** dans les douches et lavabos.
- **Graisses et restes alimentaires** dans l'évier de cuisine.
- **Lingettes et excès de papier** dans les WC, même les lingettes dites « jetables ».
- **Calcaire** qui réduit peu à peu le diamètre des tuyaux.

## Les gestes à essayer

1. **La ventouse** : efficace sur un bouchon proche de la bonde.
2. **Démonter le siphon** sous l'évier ou le lavabo, avec une bassine dessous, et le nettoyer.
3. **Le bicarbonate et le vinaigre blanc** : versez-les, laissez agir une demi-heure, puis rincez à l'eau chaude.

Évitez les déboucheurs chimiques agressifs : ils abîment les canalisations et sont dangereux si un plombier doit ensuite intervenir.

## En immeuble : attention à la colonne

Si plusieurs appartements de la même colonne ont des évacuations lentes, le bouchon se trouve probablement dans la canalisation commune. Prévenez le syndic : c'est à la copropriété de faire intervenir un plombier.

## Quand appeler un plombier

- Le bouchon revient régulièrement.
- Plusieurs évacuations sont bouchées en même temps.
- L'eau remonte dans la douche quand vous tirez la chasse.
- Une mauvaise odeur persiste malgré le nettoyage.

Nino Plomberie intervient pour les débouchages à Toulouse et en Haute-Garonne, en urgence 24h/24.`,
  },
  {
    slug: "chauffe-eau-hiver-toulouse",
    title: "Chauffe-eau : les vérifications avant l'hiver à Toulouse",
    metaTitle: "Chauffe-eau à Toulouse : l'entretien avant l'hiver",
    excerpt:
      "Groupe de sécurité, température, calcaire, ballon au garage : les gestes simples pour ne pas rester sans eau chaude cet hiver.",
    publishedAt: "2026-10-21",
    category: "Entretien",
    readTime: 4,
    service: { slug: "chauffe-eau", label: "Chauffe-eau & Cumulus" },
    content: `Les hivers toulousains sont plutôt doux, mais les matins de gel existent, et c'est souvent à ce moment que le chauffe-eau lâche. Quelques vérifications limitent le risque de panne.

## Manœuvrer le groupe de sécurité

Le groupe de sécurité protège le ballon contre la surpression. Une fois par mois, actionnez sa manette quelques secondes : de l'eau doit s'écouler vers l'évacuation. S'il goutte en permanence ou ne laisse plus rien passer, il doit être vérifié.

## Régler la bonne température

Une température autour de 55 à 60 °C limite le développement des bactéries tout en évitant de surchauffer l'eau inutilement.

## Surveiller le calcaire

Le calcaire se dépose sur la résistance et au fond de la cuve. Il ralentit la chauffe et augmente la consommation. La dureté de l'eau de votre commune figure sur le site de votre distributeur ou sur votre facture : plus elle est élevée, plus un détartrage régulier est utile.

## Ballon au garage ou dans les combles

Dans beaucoup de maisons de l'agglomération toulousaine, le cumulus est installé au garage, dans un cellier ou sous les combles. Ces pièces non chauffées exposent les tuyaux au gel : pensez à isoler les canalisations apparentes.

## Les signes d'un chauffe-eau qui fatigue

- L'eau chaude met de plus en plus de temps à arriver ou s'épuise vite.
- Le ballon émet des crépitements ou des claquements.
- L'eau sort trouble ou colorée.
- Une fuite apparaît sous la cuve ou autour des raccords.

Nino Plomberie dépanne et remplace les chauffe-eau à Toulouse et en Haute-Garonne, avec un devis gratuit avant toute intervention.`,
  },
  {
    slug: "radiateur-froid-chauffage-toulouse",
    title: "Radiateur froid au redémarrage du chauffage : comment le purger",
    metaTitle: "Radiateur froid en haut : purger son chauffage",
    excerpt:
      "À la première vague de froid, un radiateur reste tiède en haut ? Il contient de l'air. La purge se fait en quelques minutes, voici comment.",
    publishedAt: "2026-10-21",
    category: "Entretien",
    readTime: 3,
    service: { slug: "chauffage-chaudiere", label: "Chauffage & Chaudière" },
    content: `À Toulouse, le chauffage redémarre souvent d'un coup, à la première vraie fraîcheur de l'automne. C'est le moment où l'on découvre un radiateur froid en haut et chaud en bas : de l'air s'est accumulé dans le circuit.

## Purger un radiateur

1. Allumez le chauffage et attendez que les radiateurs chauffent.
2. Placez un chiffon et un petit récipient sous la vis de purge, en haut du radiateur.
3. Ouvrez doucement la vis avec une clé de purge ou un tournevis : l'air s'échappe en sifflant.
4. Refermez dès que de l'eau sort sans bulles.
5. Recommencez sur les autres radiateurs, en commençant par le plus bas de la maison.

## Vérifier la pression

Après une purge, la pression du circuit baisse. Contrôlez le manomètre de la chaudière : sur une installation domestique, elle se situe en général entre 1 et 2 bars à froid. Si elle est trop basse, complétez selon la notice de votre chaudière.

## En appartement avec chauffage collectif

Si votre immeuble a un chauffage collectif, ne touchez pas à la pression : signalez le problème au syndic ou au gardien. Vous pouvez en revanche purger vos radiateurs si le règlement de copropriété le permet.

## Quand faire appel à un professionnel

- Le radiateur reste froid malgré la purge.
- La pression chute régulièrement.
- La chaudière se met en sécurité ou affiche un code d'erreur.

Nino Plomberie intervient pour le dépannage chauffage à Toulouse et en Haute-Garonne.`,
  },
]

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug)
}
