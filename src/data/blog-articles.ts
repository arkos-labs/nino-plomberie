// Contenu : conseils généraux uniquement. Aucune affirmation sur Nino hors faits vérifiés (24h/24, devis gratuit, Muret).
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
    slug: "detecter-fuite-eau",
    title: "Comment détecter une fuite d'eau chez soi",
    metaTitle: "Détecter une fuite d'eau : signes et méthode simple",
    excerpt:
      "Facture qui grimpe, tache d'humidité, compteur qui tourne : les signes qui doivent alerter et la méthode du compteur pour confirmer une fuite.",
    publishedAt: "2026-10-21",
    category: "Conseils",
    readTime: 4,
    service: { slug: "fuite-d-eau", label: "Fuite d'eau" },
    content: `Une fuite d'eau non traitée abîme les murs, les sols et fait grimper la facture. Plus elle est repérée tôt, plus la réparation est simple.

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
4. Relevez à nouveau l'index : s'il a bougé, il y a une fuite quelque part après le compteur.

## Les fuites les plus fréquentes

- **La chasse d'eau** qui coule en continu dans la cuvette.
- **Le groupe de sécurité du chauffe-eau** qui goutte en permanence.
- **Un raccord** sous l'évier ou derrière le lave-linge.
- **Un joint de robinet** usé.

## Quand appeler un plombier

Si la fuite est cachée dans un mur ou sous un sol, si l'eau coule fort ou si vous ne trouvez pas son origine, coupez l'arrivée d'eau générale et appelez un professionnel. Nino Plomberie intervient 24h/24 à Muret, Toulouse et en Haute-Garonne.`,
  },
  {
    slug: "entretien-chauffe-eau",
    title: "Entretenir son chauffe-eau avant l'hiver",
    metaTitle: "Entretien du chauffe-eau : les gestes avant l'hiver",
    excerpt:
      "Groupe de sécurité, température, calcaire : les vérifications simples qui évitent de se retrouver sans eau chaude en plein hiver.",
    publishedAt: "2026-10-21",
    category: "Entretien",
    readTime: 4,
    service: { slug: "chauffe-eau", label: "Chauffe-eau & Cumulus" },
    content: `En hiver, le chauffe-eau travaille davantage. Quelques vérifications simples limitent le risque de panne.

## Manœuvrer le groupe de sécurité

Le groupe de sécurité protège le ballon contre la surpression. Une fois par mois, actionnez sa manette quelques secondes : de l'eau doit s'écouler vers l'évacuation. S'il goutte en permanence ou ne laisse plus rien passer, il doit être vérifié.

## Régler la bonne température

Une température autour de 55 à 60 °C limite le développement des bactéries tout en évitant de surchauffer l'eau inutilement.

## Surveiller le calcaire

Le calcaire se dépose sur la résistance et au fond de la cuve. Il ralentit la chauffe et augmente la consommation. Dans les zones où l'eau est calcaire, un détartrage régulier par un professionnel prolonge la vie de l'appareil.

## Les signes d'un chauffe-eau qui fatigue

- L'eau chaude met de plus en plus de temps à arriver ou s'épuise vite.
- Le ballon émet des crépitements ou des claquements.
- L'eau sort trouble ou colorée.
- Une fuite apparaît sous la cuve ou autour des raccords.

## Réparer ou remplacer ?

Selon l'âge de l'appareil et la panne, une réparation peut suffire ou un remplacement sera plus raisonnable. Nino Plomberie établit un devis gratuit avant toute intervention.`,
  },
  {
    slug: "canalisation-bouchee",
    title: "Canalisation bouchée : que faire avant d'appeler un plombier",
    metaTitle: "Canalisation bouchée : solutions et quand appeler",
    excerpt:
      "Ventouse, eau chaude, bicarbonate : les gestes à essayer sur un évier ou une douche bouchés, et les signes qu'il faut passer la main.",
    publishedAt: "2026-10-21",
    category: "Conseils",
    readTime: 4,
    service: { slug: "debouchage", label: "Débouchage" },
    content: `Un évier, une douche ou des WC qui ne s'écoulent plus, c'est l'un des problèmes les plus courants. Voici quoi essayer, et quand s'arrêter.

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

## Quand appeler un plombier

- Le bouchon revient régulièrement.
- Plusieurs évacuations sont bouchées en même temps.
- L'eau remonte dans la douche quand vous tirez la chasse.
- Une mauvaise odeur persiste malgré le nettoyage.

Ces signes indiquent souvent un problème plus loin dans le réseau. Nino Plomberie intervient pour les débouchages à Muret, Toulouse et en Haute-Garonne, en urgence 24h/24.`,
  },
  {
    slug: "fuite-eau-urgence-premiers-gestes",
    title: "Fuite d'eau en urgence : les premiers gestes",
    metaTitle: "Fuite d'eau urgente : les premiers gestes à faire",
    excerpt:
      "Couper l'eau, couper l'électricité si besoin, protéger et prévenir : ce qu'il faut faire tout de suite en cas de fuite importante.",
    publishedAt: "2026-10-21",
    category: "Urgence",
    readTime: 3,
    service: { slug: "fuite-d-eau", label: "Fuite d'eau" },
    content: `Une fuite importante peut causer beaucoup de dégâts en peu de temps. Les bons réflexes limitent les dommages en attendant le plombier.

## Les gestes immédiats

1. **Coupez l'arrivée d'eau générale.** Le robinet se trouve en général près du compteur, sous l'évier ou dans le garage. Repérez-le dès aujourd'hui.
2. **Coupez l'électricité** de la pièce si l'eau approche des prises ou d'appareils électriques.
3. **Protégez vos biens** : déplacez les meubles et objets de valeur hors de l'eau.
4. **Épongez** l'eau au sol avec serpillières et seaux.
5. **Prévenez vos voisins** du dessous si vous êtes en appartement.

## Après l'intervention

- **Prenez des photos** des dégâts pour votre assurance.
- **Aérez** la pièce pour faire sécher murs et sols.
- **Déclarez le sinistre** à votre assureur dans les délais prévus par votre contrat.

## Prévenir plutôt que guérir

- Sachez où est votre robinet d'arrêt et vérifiez qu'il tourne bien.
- Surveillez les flexibles du lave-linge et du lave-vaisselle.
- Protégez du gel les tuyaux situés dans les pièces non chauffées.

Nino Plomberie répond 24h/24 et 7j/7 au 06 50 57 96 20 pour les urgences à Muret, Toulouse et en Haute-Garonne.`,
  },
  {
    slug: "radiateur-froid-purge",
    title: "Radiateur froid en haut : comment le purger",
    metaTitle: "Radiateur froid en haut : purger son radiateur",
    excerpt:
      "Un radiateur tiède en haut et chaud en bas contient de l'air. La purge se fait en quelques minutes, voici comment.",
    publishedAt: "2026-10-21",
    category: "Entretien",
    readTime: 3,
    service: { slug: "chauffage-chaudiere", label: "Chauffage & Chaudière" },
    content: `Au redémarrage du chauffage, il arrive qu'un radiateur reste froid en haut et chaud en bas. C'est le signe que de l'air s'est accumulé dans le circuit.

## Purger un radiateur

1. Allumez le chauffage et attendez que les radiateurs chauffent.
2. Placez un chiffon et un petit récipient sous la vis de purge, en haut du radiateur.
3. Ouvrez doucement la vis avec une clé de purge ou un tournevis : l'air s'échappe en sifflant.
4. Refermez dès que de l'eau sort sans bulles.
5. Recommencez sur les autres radiateurs, en commençant par le plus bas de la maison.

## Vérifier la pression

Après une purge, la pression du circuit baisse. Contrôlez le manomètre de la chaudière : sur une installation domestique, elle se situe en général entre 1 et 2 bars à froid. Si elle est trop basse, complétez selon la notice de votre chaudière.

## Quand faire appel à un professionnel

- Le radiateur reste froid malgré la purge.
- La pression chute régulièrement.
- La chaudière se met en sécurité ou affiche un code d'erreur.

Ces situations peuvent cacher une fuite sur le circuit ou un problème de chaudière. Nino Plomberie intervient pour le dépannage chauffage à Muret, Toulouse et en Haute-Garonne.`,
  },
]

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug)
}
