// src/data/services.ts
// Contenu des pages services. Uniquement des informations vérifiées (fiche Google, site historique)
// et des conseils généraux de plomberie — aucun prix ni équipement non confirmé.

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
}

export interface ServiceSection {
  h2: string
  text?: string
  bullets?: string[]
  numbered?: boolean
  /** Phrase de transition après la liste */
  after?: string
}

const DEVIS = "Devis gratuit, prix validé avec vous avant intervention"

const COMMUNES_31 = ["Toulouse", "Muret", "Colomiers", "Blagnac", "Tournefeuille", "Portet-sur-Garonne", "Cugnaux", "Balma", "Plaisance-du-Touch", "Ramonville-Saint-Agne"]

export const services: ServiceFiche[] = [
  {
    slug: "urgence-plombier-toulouse",
    titre: "Urgence plombier 24h/24",
    sousTitre: "Dépannage plomberie d'urgence à Toulouse et dans le 31",
    metaTitle: "Plombier urgence Toulouse 24h/24 : dépannage | Nino",
    metaDescription:
      "Plombier en urgence à Toulouse et dans le 31, 24h/24 et 7j/7. Dépannage fuite, WC bouché, chaudière en panne. Devis gratuit avant travaux.",
    h1: "Plombier urgence à Toulouse : dépannage 24h/24 et 7j/7",
    serviceType: "Dépannage plomberie d'urgence",
    areaServed: COMMUNES_31,
    enBref:
      "Nino Plomberie assure le dépannage de plomberie en urgence à Toulouse, Muret et dans toute la Haute-Garonne, 24h/24 et 7j/7 : fuite d'eau, WC bouché, chaudière en sécurité, radiateur qui fuit. Le devis est gratuit et validé avec vous avant travaux, la réparation est garantie 2 ans.",
    description:
      "Un appartement à Saint-Cyprien, une maison à Muret, un local aux Minimes : quand l'eau part où elle ne devrait pas, chaque minute compte. La ligne est ouverte 24h/24 et 7j/7, week-ends et jours fériés compris, au 06 50 57 96 20. Vous parlez directement à l'artisan qui se déplace.",
    details: [
      "Fuite d'eau sous évier, chauffe-eau ou canalisation",
      "WC bouché et canalisation qui déborde",
      "Chaudière en sécurité, plus de chauffage",
      "Radiateur ou circuit de chauffage qui fuit",
      "Chauffe-eau en panne, groupe de sécurité qui coule",
      "Mise en sécurité de l'installation",
    ],
    prix: DEVIS,
    urgence: true,
    icon: "Droplets",
    sections: [
      {
        h2: "Quand appeler un plombier en urgence",
        text: "Certaines pannes peuvent attendre un rendez-vous. Celles-ci, non :",
        bullets: [
          "**Fuite sous évier ou sous chauffe-eau** : l'eau s'étale, gagne le sol, puis le voisin du dessous. Fermez la vanne, puis appelez.",
          "**WC bouché avec débordement** : l'eau monte et sort de la cuvette. Ne tirez plus la chasse.",
          "**Chaudière en sécurité en plein hiver** : plus de chauffage ni d'eau chaude, et la maison refroidit vite.",
          "**Radiateur qui fuit** : l'eau du circuit est chaude, souvent noire, et tache les sols. La pression de la chaudière chute en même temps.",
          "**Compteur qui tourne sans usage** : tout est fermé, l'index bouge encore. Une fuite cachée coule quelque part.",
        ],
        after: "Un doute ? Appelez : on vous dit au téléphone si ça peut attendre le lendemain.",
      },
      {
        h2: "Comment se passe un dépannage d'urgence",
        numbered: true,
        bullets: [
          "**Appel et qualification** : vous décrivez la situation au 06 50 57 96 20. L'artisan vous indique les gestes à faire tout de suite et le délai d'arrivée selon votre commune.",
          "**Devis gratuit validé avant travaux** : sur place, Nino cherche l'origine de la panne et annonce le prix. Rien ne démarre sans votre accord.",
          "**Intervention** : réparation de la fuite, débouchage, remise en route du chauffage. Si une pièce doit être commandée, l'installation est mise en sécurité en attendant.",
          "**Garantie 2 ans** : les réparations sont garanties 2 ans, pièces et main-d'œuvre.",
        ],
        after: "Vous connaissez le prix avant le premier coup de clé.",
      },
      {
        h2: "Ce qu'on ne fait pas",
        bullets: [
          "**Pas de majoration cachée** : tout ce qui est facturé figure sur le devis, nuit et week-end compris.",
          "**Pas de travaux sans devis signé** : vous validez le prix d'abord, l'artisan répare ensuite.",
          "**Pas de sous-traitance à une plateforme** : l'artisan qui décroche est celui qui se déplace. Pas de centre d'appels.",
        ],
        after: "Un artisan indépendant, plus de 20 ans de métier.",
      },
      {
        h2: "Urgence plomberie à Toulouse et dans le 31",
        text: "Basé à Muret, Nino Plomberie couvre Toulouse et le sud-ouest toulousain. Pour un [dépannage à Toulouse](/intervention/toulouse), une fuite en appartement touche vite l'étage du dessous. Pour votre [plombier à Muret](/intervention/muret), les maisons ont souvent un chauffe-eau et des canalisations qui ont des années de service. L'artisan se déplace aussi en urgence : [plombier à Colomiers](/intervention/colomiers), [plombier à Blagnac](/intervention/blagnac), [plombier à Tournefeuille](/intervention/tournefeuille), [plombier à Portet-sur-Garonne](/intervention/portet-sur-garonne), comme dans les autres communes de la [zone d'intervention](/zones). Le délai d'arrivée dépend de votre commune : il vous est indiqué dès l'appel.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous la nuit et le week-end ?",
        reponse:
          "Oui. La ligne est ouverte 24h/24 et 7j/7, week-ends et jours fériés compris. Vous parlez directement à l'artisan, qui vous indique le délai d'arrivée selon votre commune.",
      },
      {
        question: "Le devis est-il payant ?",
        reponse:
          "Non, le devis est gratuit, même en urgence. Le prix est annoncé et validé avec vous avant le début des travaux. Les réparations sont garanties 2 ans, pièces et main-d'œuvre.",
      },
      {
        question: "Que faire en attendant votre arrivée ?",
        reponse:
          "Coupez l'arrivée d'eau au robinet de l'appareil ou à la vanne générale. Si l'eau approche d'une prise, coupez le disjoncteur. Ne versez pas de déboucheur chimique et photographiez les dégâts pour l'assurance.",
      },
      {
        question: "Quelles communes couvrez-vous ?",
        reponse:
          "Toulouse et ses quartiers, Muret, Colomiers, Blagnac, Tournefeuille, Portet-sur-Garonne et les autres communes de Haute-Garonne listées sur la page des zones d'intervention.",
      },
    ],
    aLireAussi: [
      { label: "Débouchage canalisation", to: "/services/debouchage" },
      { label: "Recherche de fuite", to: "/services/fuite-d-eau" },
      { label: "Chauffagiste Muret & Toulouse", to: "/services/chauffage-chaudiere" },
    ],
  },
  {
    slug: "fuite-d-eau",
    titre: "Fuite d'eau",
    sousTitre: "Recherche et réparation de fuite à Muret et Toulouse",
    metaTitle: "Recherche de fuite Toulouse & Muret : détection | Nino",
    h1: "Recherche de fuite d'eau à Toulouse et Muret",
    serviceType: "Recherche de fuite d'eau",
    sections: [
      {
        h2: "Les signes qui ne trompent pas",
        bullets: [
          "**Facture d'eau qui augmente** : vos habitudes n'ont pas changé, mais l'eau part quelque part.",
          "**Tache au plafond** : auréole, peinture qui cloque. La fuite vient souvent de l'étage ou d'une gaine.",
          "**Compteur qui tourne** : tout est fermé et l'index bouge encore. La fuite est après le compteur.",
          "**Bruit de ruissellement** : un écoulement s'entend dans un mur alors qu'aucun robinet n'est ouvert.",
        ],
        after: "Pour aller plus loin, lisez [les signes d'une fuite à ne pas ignorer](/blog/plombier-urgence-toulouse-quand-appeler). L'eau coule fort ? C'est une [fuite d'eau en urgence](/services/urgence-plombier-toulouse) : coupez la vanne générale et appelez.",
      },
    ],
    enBref:
      "Nino Plomberie répare les fuites d'eau 24h/24 et 7j/7 à Muret, Toulouse et en Haute-Garonne : robinet, joint, raccord, canalisation apparente ou encastrée, chasse d'eau, groupe de sécurité de chauffe-eau. Le devis est gratuit et la réparation garantie 2 ans pièces et main-d'œuvre.",
    metaDescription:
      "Recherche de fuite d'eau à Toulouse et Muret : détection sans casse, réparation, devis gratuit avant travaux. Garantie 2 ans.",
    description:
      "Une fuite d'eau non traitée peut abîmer sols, murs et plafonds en quelques heures et faire grimper la facture d'eau. Nino Plomberie localise l'origine de la fuite et la répare, de jour comme de nuit.",
    details: [
      "Recherche de l'origine de la fuite",
      "Réparation ou remplacement de robinets, joints et raccords",
      "Réparation de canalisations cuivre, PER, multicouche et PVC",
      "Fuites de chasse d'eau, de WC et de mécanismes",
      "Fuites de chauffe-eau et de groupe de sécurité",
      "Remise en état de l'installation après sinistre",
    ],
    prix: DEVIS,
    urgence: true,
    icon: "Droplets",
    seoContent: [
      "Une fuite ne se voit pas toujours : tache d'humidité au plafond, peinture qui cloque, odeur de moisi, compteur d'eau qui tourne alors que tout est fermé ou facture anormalement élevée sont autant de signes à prendre au sérieux. Plus la fuite est traitée tôt, plus les dégâts et les coûts restent limités.",
      "À Muret, Toulouse et dans l'agglomération, Nino Plomberie intervient sur tous les types de fuites : robinet qui goutte, joint de siphon usé, raccord desserré, tuyau percé, canalisation encastrée, chasse d'eau qui coule en continu ou groupe de sécurité de cumulus qui fuit. Le diagnostic permet d'identifier l'origine exacte avant de réparer.",
      "En cas de dégât des eaux, la réparation rapide de la fuite est la première étape. Pensez aussi à prendre des photos des dégâts et à prévenir votre assurance habitation dans les délais prévus par votre contrat.",
    ],
    faq: [
      {
        question: "Que faire immédiatement en cas de fuite d'eau ?",
        reponse:
          "Fermez le robinet d'arrêt de l'appareil concerné ou, à défaut, la vanne générale près du compteur d'eau. Si l'eau s'approche de prises ou d'appareils électriques, coupez le disjoncteur. Épongez, protégez vos meubles, prenez des photos puis appelez le 06 50 57 96 20.",
      },
      {
        question: "Comment savoir si j'ai une fuite d'eau cachée ?",
        reponse:
          "Fermez tous les robinets et relevez l'index du compteur d'eau. Attendez une à deux heures sans utiliser d'eau : si l'index a bougé, il y a une fuite. Taches d'humidité, moisissures et facture d'eau en hausse sont aussi des signes d'alerte.",
      },
      {
        question: "Intervenez-vous pour une fuite la nuit ou le week-end ?",
        reponse:
          "Oui, Nino Plomberie est joignable 24h/24 et 7j/7, week-ends et jours fériés compris. Le délai d'arrivée dépend de votre commune et vous est indiqué au téléphone.",
      },
      {
        question: "La réparation d'une fuite est-elle garantie ?",
        reponse: "Oui, les réparations sont garanties 2 ans, pièces et main-d'œuvre.",
      },
      {
        question: "Mon robinet fuit même fermé, est-ce grave ?",
        reponse:
          "Ce n'est pas dangereux mais il ne faut pas attendre : un robinet qui goutte en permanence gaspille beaucoup d'eau. La cause est généralement un joint ou une cartouche usés, une réparation simple et rapide.",
      },
    ],
  },
  {
    slug: "debouchage",
    titre: "Débouchage canalisation",
    sousTitre: "Débouchage WC, évier, douche, baignoire et canalisation",
    metaTitle: "Débouchage canalisation Toulouse & Muret, WC 24h/24 | Nino",
    h1: "Débouchage canalisation à Toulouse et Muret, WC et éviers",
    serviceType: "Débouchage de canalisation et de WC",
    sections: [
      {
        h2: "Débouchage WC, évier, douche : les cas courants",
        text: "Appartement du centre ou maison en périphérie : un [débouchage canalisation à Toulouse](/intervention/toulouse) commence toujours par trouver où se loge le bouchon.",
        bullets: [
          "**WC bouché** : l'eau monte dans la cuvette ou s'évacue au ralenti. Ne tirez plus la chasse.",
          "**Évier qui ne s'écoule plus** : graisses et résidus figés dans le siphon ou la canalisation.",
          "**Douche ou baignoire qui stagne** : cheveux et calcaire bloquent la bonde.",
          "**Canalisation qui refoule** : l'eau remonte dans un autre appareil. Le bouchon est plus loin dans le réseau.",
        ],
      },
      {
        h2: "Pourquoi éviter les déboucheurs chimiques agressifs",
        text: "Ils sont corrosifs : ils attaquent les joints et les tuyaux en PVC, et brûlent la peau à la moindre éclaboussure. Sur un bouchon compact, ils ne passent pas. Le produit stagne alors dans la canalisation et complique l'intervention. Une ventouse ou le démontage du siphon règlent déjà beaucoup de cas. Sinon, le débouchage mécanique reste la solution sûre : appelez pour un [débouchage en urgence](/services/urgence-plombier-toulouse).",
      },
    ],
    enBref:
      "Nino Plomberie débouche WC, éviers, lavabos, douches, baignoires et canalisations à Muret, Toulouse et en Haute-Garonne, 24h/24 et 7j/7. L'intervention se fait avec des outils professionnels, sans produit chimique agressif, et le devis est gratuit.",
    metaDescription:
      "Débouchage de canalisation et de WC à Toulouse et Muret, 24h/24. Intervention rapide, devis gratuit avant travaux, garantie 2 ans.",
    description:
      "WC qui déborde, évier qui ne s'écoule plus, douche qui stagne : Nino Plomberie trouve le bouchon et rétablit l'écoulement, puis vous conseille pour éviter que le problème ne revienne.",
    details: [
      "Débouchage de WC",
      "Débouchage d'évier et de lavabo (graisses, résidus)",
      "Débouchage de douche et de baignoire (cheveux, calcaire)",
      "Démontage et nettoyage de siphons",
      "Débouchage de canalisations intérieures",
      "Conseils d'entretien pour éviter les récidives",
    ],
    prix: DEVIS,
    urgence: true,
    icon: "Wind",
    seoContent: [
      "Un écoulement lent, des gargouillements ou de mauvaises odeurs annoncent souvent un bouchon qui se forme. Graisses de cuisine, cheveux, calcaire, lingettes ou objets tombés dans les toilettes finissent par obstruer siphons et canalisations.",
      "Les déboucheurs chimiques vendus en grande surface sont corrosifs : ils peuvent abîmer les joints et les canalisations en PVC sans régler un bouchon bien installé. Un plombier utilise des outils mécaniques adaptés pour retirer le bouchon sans endommager l'installation.",
      "Nino Plomberie intervient à Muret, Toulouse et dans toute la Haute-Garonne, y compris le soir et le week-end quand des WC bouchés rendent le logement difficile à vivre.",
    ],
    faq: [
      {
        question: "Mes WC débordent, que faire en attendant ?",
        reponse:
          "Ne tirez plus la chasse. Fermez le robinet d'arrivée d'eau du WC, situé en général derrière ou à côté de la cuvette, puis épongez. N'utilisez pas de produit chimique, qui peut abîmer les joints, et appelez le 06 50 57 96 20.",
      },
      {
        question: "Comment éviter que mes canalisations se bouchent ?",
        reponse:
          "Ne jetez ni graisse de cuisson dans l'évier, ni lingettes, cotons ou serviettes dans les WC, même s'ils sont dits biodégradables. Posez une grille sur les bondes de douche pour retenir les cheveux et nettoyez régulièrement les siphons.",
      },
      {
        question: "Un débouchage est-il possible le week-end ?",
        reponse: "Oui, Nino Plomberie est joignable 24h/24 et 7j/7, week-ends et jours fériés compris.",
      },
      {
        question: "Pourquoi éviter les déboucheurs chimiques ?",
        reponse:
          "Ils sont corrosifs, dangereux à manipuler et peuvent endommager les joints et les tuyaux en PVC. Ils agissent mal sur les bouchons compacts et rendent ensuite l'intervention du plombier plus délicate.",
      },
    ],
  },
  {
    slug: "chauffe-eau",
    titre: "Chauffe-eau & Cumulus",
    sousTitre: "Dépannage, remplacement et installation",
    enBref:
      "Nino Plomberie dépanne, remplace et installe les chauffe-eau et cumulus à Muret, Toulouse et en Haute-Garonne, 7j/7. Plus d'eau chaude, ballon qui fuit ou groupe de sécurité qui goutte : le diagnostic et le devis sont gratuits et le remplacement peut être réalisé rapidement, même le week-end.",
    metaDescription:
      "Plus d'eau chaude ? Nino Plomberie dépanne et remplace votre chauffe-eau ou cumulus à Muret, Toulouse et en Haute-Garonne, 7j/7. Devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Plus d'eau chaude, eau tiède, ballon qui fuit ou disjoncteur qui saute : Nino Plomberie diagnostique la panne de votre chauffe-eau et vous propose la solution la plus adaptée, réparation ou remplacement.",
    details: [
      "Diagnostic de panne de chauffe-eau électrique",
      "Remplacement de résistance, thermostat ou anode",
      "Remplacement du groupe de sécurité",
      "Détartrage du ballon",
      "Remplacement et installation de cumulus",
      "Raccordement et mise en service",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Flame",
    seoContent: [
      "L'eau de la région toulousaine est calcaire : le tartre s'accumule dans le ballon et sur la résistance, ce qui réduit le rendement et la durée de vie du chauffe-eau. Un détartrage régulier et le contrôle du groupe de sécurité prolongent nettement sa durée de vie.",
      "Quand le chauffe-eau tombe en panne, le diagnostic permet de savoir si une réparation suffit (résistance, thermostat, groupe de sécurité) ou si le remplacement est plus raisonnable, par exemple quand la cuve fuit ou que l'appareil est très ancien.",
      "Comme en témoignent les avis clients, Nino Plomberie intervient aussi le week-end pour remplacer un cumulus tombé en panne : plus d'eau chaude un dimanche, ce n'est pas une fatalité.",
    ],
    faq: [
      {
        question: "Je n'ai plus d'eau chaude, que vérifier avant d'appeler ?",
        reponse:
          "Vérifiez que le disjoncteur du chauffe-eau au tableau électrique n'a pas sauté et que le contacteur heures creuses est bien en position automatique ou marche forcée. Si tout est normal et que l'eau reste froide, la résistance ou le thermostat sont probablement en cause.",
      },
      {
        question: "Quelle capacité de chauffe-eau choisir ?",
        reponse:
          "On compte habituellement 50 à 60 litres par personne : environ 100 litres pour 2 personnes, 150 à 200 litres pour 3 à 4 personnes et 250 à 300 litres au-delà. Nino vous conseille selon votre logement et vos habitudes.",
      },
      {
        question: "Mon groupe de sécurité goutte, est-ce normal ?",
        reponse:
          "Quelques gouttes pendant la chauffe sont normales : l'eau se dilate. Un écoulement continu, en revanche, indique un groupe de sécurité défectueux ou une pression trop élevée. Il faut alors le faire contrôler et le remplacer si besoin.",
      },
      {
        question: "Réparer ou remplacer mon chauffe-eau ?",
        reponse:
          "Une résistance, un thermostat ou un groupe de sécurité se remplacent facilement. Si la cuve fuit ou si l'appareil est très ancien et entartré, le remplacement est généralement plus économique à terme. Le diagnostic gratuit permet de trancher.",
      },
    ],
  },
  {
    slug: "chauffage-chaudiere",
    titre: "Chauffage & Chaudière",
    sousTitre: "Plombier chauffagiste à Muret et Toulouse",
    metaTitle: "Chauffagiste Muret & Toulouse : chaudière, entretien | Nino",
    h1: "Chauffagiste à Muret et Toulouse : chaudière et dépannage",
    serviceType: "Entretien et dépannage de chaudière",
    sections: [
      {
        h2: "Entretien de chaudière : ce qu'on vérifie",
        text: "L'entretien annuel est obligatoire. Votre [plombier à Muret](/intervention/muret) suit la même méthode à chaque visite, à Muret comme à Toulouse :",
        numbered: true,
        bullets: [
          "**Contrôle de sécurité** : état de l'appareil, raccordements, absence de fuite d'eau ou de gaz.",
          "**Nettoyage** : brûleur, corps de chauffe et pièces encrassées.",
          "**Évacuation des fumées** : conduit et tirage vérifiés.",
          "**Pression et circuit** : manomètre, vase d'expansion et soupape contrôlés, radiateurs purgés si besoin.",
          "**Attestation d'entretien** : le document vous est remis, à conserver.",
        ],
        after: "Un rendez-vous suffit, et le devis est gratuit.",
      },
      {
        h2: "Dépannage chauffage : les pannes qu'on rencontre",
        bullets: [
          "**Chaudière en sécurité** : elle s'arrête et affiche un code défaut. Ne la relancez pas en boucle : notez le code, il oriente le diagnostic.",
          "**Radiateur froid** : froid en haut, c'est de l'air. Froid partout, c'est souvent une vanne bloquée ou un circuit mal équilibré.",
          "**Pression à zéro** : le manomètre tombe sous 1 bar. Une remise en pression dépanne, mais si la baisse revient, une fuite est à chercher.",
          "**Bruit de bouilloire** : sifflements et claquements signalent souvent du tartre ou des boues dans l'échangeur.",
        ],
        after: "Décrivez la panne au téléphone : l'artisan arrive avec les bonnes pièces.",
      },
      {
        h2: "Chaudière en panne en pleine nuit ?",
        text: "Plus de chauffage un soir d'hiver, avec des enfants ou une personne âgée à la maison : ça n'attend pas le lendemain. Votre [chaudière en panne cette nuit](/services/urgence-plombier-toulouse) ? La ligne est ouverte 24h/24 et 7j/7. En cas d'odeur de gaz, ne touchez à aucun interrupteur, aérez et sortez avant d'appeler les secours gaz. Le devis reste gratuit, même en urgence.",
      },
    ],
    enBref:
      "Nino Plomberie est une entreprise de plomberie et de chauffage basée à Muret. Plombier-chauffagiste, elle intervient à Toulouse et en Haute-Garonne pour l'entretien et le dépannage de chaudière, de chauffage et de radiateurs : chaudière qui se met en sécurité, pression qui chute, radiateurs froids ou circuit à purger. Le devis est gratuit.",
    metaDescription:
      "Chauffagiste à Muret et Toulouse : entretien et dépannage de chaudière, dépannage chauffage 24h/24. Devis gratuit, garantie 2 ans.",
    description:
      "Plus de chauffage, chaudière qui s'arrête, radiateurs qui restent froids ou qui font du bruit : Nino Plomberie diagnostique le problème et remet votre installation en état.",
    details: [
      "Entretien de chaudière",
      "Dépannage de chaudière",
      "Diagnostic de perte de pression du circuit",
      "Purge et équilibrage des radiateurs",
      "Remplacement de radiateurs",
      "Remplacement de vannes et robinets thermostatiques",
      "Réparation de fuites sur le circuit de chauffage",
    ],
    prix: DEVIS,
    urgence: true,
    icon: "Thermometer",
    seoContent: [
      "Une panne de chauffage en plein hiver devient vite une urgence, surtout avec des enfants ou des personnes âgées à la maison. Les causes les plus fréquentes sont une pression trop basse dans le circuit, de l'air dans les radiateurs, une vanne bloquée ou un composant de la chaudière défaillant.",
      "Avant de lancer de gros travaux, un diagnostic permet souvent de régler le problème simplement : remise en pression, purge, remplacement d'une pièce. Nino Plomberie vous explique l'origine de la panne et ce qu'il faut faire.",
      "Rappel : l'entretien annuel des chaudières (gaz, fioul, bois) est obligatoire en France. Il améliore la sécurité, le rendement et la durée de vie de l'appareil.",
    ],
    faq: [
      {
        question: "Mes radiateurs sont froids alors que la chaudière fonctionne, pourquoi ?",
        reponse:
          "Les causes les plus courantes sont de l'air dans le circuit (radiateur froid en haut), une vanne ou un robinet thermostatique bloqué, ou un circuit mal équilibré (radiateurs éloignés de la chaudière qui chauffent mal). Une purge et un équilibrage règlent souvent le problème.",
      },
      {
        question: "Ma chaudière perd de la pression, que faire ?",
        reponse:
          "Une chaudière murale fonctionne en général entre 1 et 2 bars à froid. Si la pression baisse régulièrement, il y a probablement une fuite sur le circuit ou un problème de vase d'expansion ou de soupape. Il faut faire contrôler l'installation plutôt que de remettre de l'eau sans cesse.",
      },
      {
        question: "L'entretien annuel de la chaudière est-il obligatoire ?",
        reponse:
          "Oui, l'entretien annuel est obligatoire pour les chaudières dont la puissance est comprise entre 4 et 400 kW. Il doit être réalisé par un professionnel qualifié, qui remet une attestation à conserver.",
      },
      {
        question: "Pourquoi purger les radiateurs ?",
        reponse:
          "L'air accumulé dans les radiateurs empêche l'eau chaude de circuler : le haut du radiateur reste froid, le chauffage est moins efficace et la consommation augmente. Une purge en début de saison de chauffe est recommandée.",
      },
    ],
  },
  {
    slug: "robinetterie-sanitaires",
    titre: "Robinetterie & Sanitaires",
    sousTitre: "Robinets, mitigeurs, douches, WC et vasques",
    metaTitle: "Robinetterie & Sanitaires Muret et Toulouse | Nino",
    enBref:
      "Nino Plomberie remplace et installe robinets, mitigeurs, colonnes de douche, WC suspendus ou à poser, vasques et meubles de salle de bain à Muret, Toulouse et en Haute-Garonne. Vous pouvez fournir votre matériel ou laisser Nino s'en occuper. Le devis est gratuit.",
    metaDescription:
      "Changer un robinet, un mitigeur, un WC ou une colonne de douche à Muret ou Toulouse : Nino Plomberie installe vos sanitaires. Devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Robinet qui goutte, mitigeur fatigué, chasse d'eau qui coule, WC à remplacer : Nino Plomberie pose et remplace vos équipements sanitaires avec des raccordements propres et étanches.",
    details: [
      "Remplacement de robinets et mitigeurs (cuisine, salle de bain)",
      "Pose de colonnes de douche et mitigeurs thermostatiques",
      "Réparation et remplacement de mécanismes de chasse d'eau",
      "Pose de WC suspendus avec bâti-support ou de WC à poser",
      "Pose de vasques, meubles vasque et éviers",
      "Remplacement d'une baignoire par une douche",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Wrench",
    seoContent: [
      "Changer un vieux robinet mélangeur pour un mitigeur, installer une colonne de douche thermostatique ou passer à un WC suspendu améliore le confort au quotidien et limite le gaspillage d'eau.",
      "Les réalisations de Nino Plomberie en photo sur ce site en témoignent : robinetterie noire mat, colonnes de douche, meubles double vasque, WC suspendus. Chaque pose est raccordée proprement et testée pour garantir l'étanchéité.",
      "Vous avez déjà choisi votre modèle ? Vous pouvez fournir votre propre matériel. Sinon, Nino vous conseille sur les équipements adaptés à votre installation et à votre budget.",
    ],
    faq: [
      {
        question: "Puis-je fournir mon propre robinet ou mon WC ?",
        reponse:
          "Oui, vous pouvez fournir votre matériel. Nino vérifie simplement qu'il est compatible avec votre installation avant la pose. Il peut aussi s'occuper de l'approvisionnement si vous préférez.",
      },
      {
        question: "Ma chasse d'eau coule en permanence, que faire ?",
        reponse:
          "Le joint du mécanisme ou le flotteur est généralement en cause. En attendant la réparation, fermez le robinet d'arrivée d'eau du WC pour éviter de gaspiller de l'eau.",
      },
      {
        question: "Quels sont les avantages d'un mitigeur thermostatique ?",
        reponse:
          "Il maintient automatiquement l'eau à la température choisie, même si quelqu'un ouvre un autre robinet dans la maison. C'est plus confortable, plus sûr pour les enfants (pas de brûlure) et plus économique.",
      },
      {
        question: "Peut-on remplacer une baignoire par une douche ?",
        reponse:
          "Oui, c'est un projet courant, notamment pour gagner de la place ou faciliter l'accès. Nino adapte l'évacuation et l'alimentation et peut poser un receveur extra-plat avec une paroi de douche.",
      },
    ],
  },
  {
    slug: "renovation-salle-de-bain",
    titre: "Rénovation salle de bain",
    sousTitre: "Création et rénovation de A à Z",
    metaTitle: "Rénovation salle de bain Toulouse & Muret | Nino Plomberie",
    sections: [
      {
        h2: "Rénover sans tout casser",
        text: "Une salle de bain fatiguée ne demande pas toujours une démolition complète. Trois chantiers ciblés changent déjà le quotidien :",
        bullets: [
          "**Remplacer la baignoire par une douche** : dépose de la baignoire, adaptation de l'évacuation, receveur extra-plat et paroi. La pièce gagne de la place.",
          "**Reprendre l'étanchéité** : joints, raccords au siphon, protection sous le carrelage. Une infiltration discrète abîme la cloison et le plafond du dessous.",
          "**Rendre la pièce plus accessible** : douche de plain-pied quand la pente d'évacuation le permet, receveur extra-plat sinon, WC suspendu posé à la bonne hauteur.",
        ],
        after: "Le devis gratuit détaille ce qui est conservé et ce qui est refait.",
      },
    ],
    enBref:
      "Nino Plomberie crée et rénove des salles de bain de A à Z à Muret, Toulouse et en Haute-Garonne : plomberie, cloisons, placo, carrelage, peinture, douche à l'italienne ou receveur extra-plat, WC suspendu, meuble vasque. Les chantiers sont réalisés à deux professionnels pour un résultat soigné dans les délais. Le devis est gratuit.",
    metaDescription:
      "Création et rénovation de salle de bain à Muret et Toulouse, de A à Z : plomberie, carrelage, douche à l'italienne, WC suspendu. Nino Plomberie, devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Que vous souhaitiez moderniser votre salle de bain, remplacer la baignoire par une douche ou créer une nouvelle pièce d'eau, Nino Plomberie vous accompagne du projet aux finitions.",
    details: [
      "Dépose de l'ancienne installation",
      "Modification des arrivées d'eau et des évacuations",
      "Création de cloisons et pose de placo",
      "Douche à l'italienne ou receveur extra-plat avec paroi",
      "Pose de carrelage, faïence et peinture",
      "Installation de WC suspendu, meuble vasque et miroir",
    ],
    prix: "Devis gratuit et détaillé selon votre projet",
    urgence: false,
    icon: "Bath",
    seoContent: [
      "Nino Plomberie prend en charge votre projet de salle de bain dans sa globalité : la plomberie bien sûr, mais aussi la création de cloisons, le placo, la pose du carrelage et la peinture. Pour ces chantiers, Nino travaille avec un second professionnel afin de tenir les délais et de soigner chaque étape.",
      "Douche à l'italienne, receveur extra-plat, paroi coulissante, meuble double vasque, WC suspendu, robinetterie noire mat ou chromée : les photos de réalisations présentées sur cette page montrent des salles de bain réellement réalisées par l'entreprise.",
      "Il est aussi possible de déplacer une salle de bain dans une autre pièce de la maison pour optimiser l'agencement : arrivées d'eau et évacuations sont alors entièrement repensées.",
    ],
    faq: [
      {
        question: "Gérez-vous aussi le carrelage, le placo et la peinture ?",
        reponse:
          "Oui. Nino Plomberie propose un service clé en main incluant la plomberie, la création de cloisons, le placo, la pose de carrelage et la peinture, en collaboration avec un second professionnel.",
      },
      {
        question: "Combien de temps dure une rénovation de salle de bain ?",
        reponse:
          "Cela dépend de la surface et de l'ampleur des travaux : un simple remplacement d'équipements prend quelques jours, une rénovation complète davantage. Un planning vous est communiqué avec le devis.",
      },
      {
        question: "Peut-on installer une douche à l'italienne partout ?",
        reponse:
          "Pas toujours : une douche à l'italienne de plain-pied demande une pente d'évacuation suffisante sous le sol. Quand ce n'est pas possible, un receveur extra-plat offre un rendu proche et un accès facile. Nino vous indique la meilleure solution après visite.",
      },
      {
        question: "Peut-on déplacer une salle de bain dans une autre pièce ?",
        reponse:
          "Oui, Nino Plomberie prend en charge le déplacement d'une salle de bain dans une autre zone de la maison, en recréant les arrivées d'eau et les évacuations nécessaires.",
      },
    ],
  },
  {
    slug: "installation-plomberie-neuve",
    titre: "Plomberie neuve",
    sousTitre: "Construction, extension et mise aux normes",
    enBref:
      "Nino Plomberie réalise la plomberie de maisons neuves, d'extensions et de rénovations lourdes à Muret, Toulouse et en Haute-Garonne : réseaux d'eau froide et chaude, évacuations, attentes pour cuisine et salle de bain, pose des sanitaires et mise en service. Le devis est gratuit.",
    metaDescription:
      "Plomberie neuve à Muret, Toulouse et en Haute-Garonne : maison neuve, extension, mise aux normes. Réseaux, évacuations, sanitaires. Nino Plomberie, devis gratuit. ☎ 06 50 57 96 20",
    description:
      "Construction, extension ou rénovation complète : Nino Plomberie réalise l'installation de plomberie de A à Z, en coordination avec les autres corps de métier du chantier.",
    details: [
      "Création des réseaux d'eau froide et d'eau chaude",
      "Pose des évacuations",
      "Mise en place des attentes cuisine et salle de bain",
      "Pose et raccordement des appareils sanitaires",
      "Installation du chauffe-eau",
      "Tests d'étanchéité et mise en service",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Building2",
    seoContent: [
      "Dans une construction neuve ou une extension, une plomberie bien conçue garantit un bon débit à chaque point d'eau, des évacuations qui fonctionnent sans bruit ni odeur et un entretien facile pendant des années.",
      "Nino Plomberie intervient aussi bien en neuf qu'en rénovation : remise en état d'une installation après sinistre, mise aux normes ou reprise complète des réseaux d'une maison ancienne.",
      "Sur chantier, Nino s'adapte au planning et travaille en coordination avec les autres artisans (électricien, plaquiste, carreleur).",
    ],
    faq: [
      {
        question: "Travaillez-vous avec les autres corps de métier ?",
        reponse:
          "Oui, Nino Plomberie s'adapte au planning du chantier et se coordonne avec les autres artisans pour que chaque étape s'enchaîne correctement.",
      },
      {
        question: "Faites-vous aussi la mise aux normes d'une installation ancienne ?",
        reponse:
          "Oui, Nino Plomberie prend en charge la remise en état et la mise aux normes d'installations existantes, ainsi que les réparations après sinistre.",
      },
      {
        question: "À quel moment faire intervenir le plombier sur un chantier neuf ?",
        reponse:
          "Le plombier intervient une première fois avant la pose des cloisons et des sols pour passer les réseaux et les évacuations, puis une seconde fois en fin de chantier pour poser et raccorder les appareils sanitaires.",
      },
    ],
  },
  {
    slug: "pose-cuisine",
    titre: "Pose de cuisine",
    sousTitre: "Pose et raccordement de cuisine clé en main",
    enBref:
      "Nino Plomberie pose des cuisines clé en main à Muret, Toulouse et en Haute-Garonne : montage et pose des meubles, plan de travail, évier et robinetterie, raccordement du lave-vaisselle et du lave-linge. Une prestation idéale en rénovation comme en construction. Le devis est gratuit.",
    metaDescription:
      "Pose de cuisine clé en main à Muret et Toulouse : meubles, plan de travail, évier, raccordements eau et évacuation. Nino Plomberie, devis gratuit. ☎ 06 50 57 96 20",
    description:
      "En complément de la plomberie, Nino Plomberie propose la pose de cuisines : un seul interlocuteur pour le montage des meubles et tous les raccordements d'eau.",
    details: [
      "Montage et pose des meubles de cuisine",
      "Pose du plan de travail",
      "Pose de l'évier et de la robinetterie",
      "Raccordement du lave-vaisselle et du lave-linge",
      "Modification des arrivées d'eau et évacuations si nécessaire",
      "Réglages et finitions",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Wrench",
    seoContent: [
      "Faire poser sa cuisine par un plombier présente un avantage concret : les arrivées d'eau, les évacuations et les raccordements de l'évier, du lave-vaisselle et du lave-linge sont réalisés dans les règles par la même personne qui monte les meubles.",
      "Nino Plomberie intervient pour des projets de rénovation ou de construction, à Muret, Toulouse et dans l'agglomération. Les photos de réalisations montrent des cuisines posées par l'entreprise.",
    ],
    faq: [
      {
        question: "Posez-vous des cuisines achetées en magasin ?",
        reponse:
          "Oui, Nino Plomberie pose les cuisines que vous avez achetées et réalise tous les raccordements d'eau nécessaires.",
      },
      {
        question: "Pouvez-vous déplacer l'évier lors de la pose de la cuisine ?",
        reponse:
          "Oui, c'est l'intérêt de faire appel à un plombier : les arrivées d'eau et l'évacuation peuvent être modifiées pour s'adapter au nouvel agencement.",
      },
    ],
  },
  {
    slug: "plombier-chauffagiste-toulouse",
    titre: "Plombier chauffagiste Toulouse",
    sousTitre: "Plomberie et chauffage à Toulouse, un seul artisan",
    listed: false,
    metaTitle: "Plombier chauffagiste Toulouse : dépannage 24h/24 | Nino",
    metaDescription:
      "Plombier chauffagiste à Toulouse : dépannage, débouchage, entretien de chaudière. Artisan local basé à Muret, 24h/24. Devis gratuit, garantie 2 ans.",
    h1: "Plombier chauffagiste à Toulouse : un artisan, pas une plateforme",
    serviceType: "Plomberie et chauffage",
    areaServed: COMMUNES_31,
    enBref:
      "Nino Plomberie est un plombier chauffagiste indépendant, basé à Muret, qui intervient à Toulouse et dans toute la Haute-Garonne : dépannage 24h/24, débouchage, recherche de fuite, chauffe-eau, entretien et dépannage de chaudière. Le devis est gratuit, la réparation garantie 2 ans.",
    description:
      "Échoppe des Minimes, appartement des Carmes, maison à Lardenne : à Toulouse, la plomberie et le chauffage vieillissent ensemble. Nino Plomberie est un artisan indépendant qui traite les deux, de la fuite à la chaudière. Pas de plateforme, pas de centre d'appels : vous parlez à celui qui intervient.",
    details: [
      "Dépannage plomberie 24h/24 et 7j/7",
      "Débouchage de WC, évier et canalisation",
      "Recherche et réparation de fuite",
      "Remplacement de chauffe-eau et cumulus",
      "Entretien et dépannage de chaudière",
      "Purge et équilibrage des radiateurs",
    ],
    prix: DEVIS,
    urgence: false,
    icon: "Thermometer",
    sections: [
      {
        h2: "Plombier ou chauffagiste : pourquoi un seul artisan pour les deux",
        text: "Dans un logement, l'eau et le chauffage partagent les mêmes tuyaux, la même pression, parfois le même appareil. Une chaudière qui perd de la pression cache souvent une fuite sur le circuit. Un chauffe-eau qui coule abîme le sol comme une canalisation percée. Avec deux entreprises, chacune regarde sa partie. Avec un plombier chauffagiste, le diagnostic porte sur toute l'installation : on cherche l'origine de la panne sans se renvoyer la balle. Un seul devis, un seul interlocuteur, une seule garantie de 2 ans. En copropriété comme en maison, c'est aussi moins de rendez-vous à caler.",
      },
      {
        h2: "Nos interventions à Toulouse",
        bullets: [
          "[Débouchage canalisation](/services/debouchage) : WC, évier, douche ou colonne, avec des outils mécaniques plutôt qu'un produit agressif.",
          "[Recherche de fuite](/services/fuite-d-eau) : l'origine est cherchée avant d'ouvrir un mur, puis la canalisation est réparée.",
          "[Chauffage et chaudière](/services/chauffage-chaudiere) : entretien annuel, chaudière en sécurité, radiateurs froids, pression qui chute.",
          "[Chauffe-eau et cumulus](/services/chauffe-eau) : plus d'eau chaude, ballon qui fuit, groupe de sécurité qui coule.",
          "[Robinetterie et sanitaires](/services/robinetterie-sanitaires) : mitigeur, colonne de douche, WC suspendu, chasse d'eau.",
        ],
        after: "Une panne précise ? Chaque service a sa page détaillée.",
      },
      {
        h2: "Un artisan basé à Muret, pas à l'autre bout du département",
        text: "Nino Plomberie est installé au 11 rue François Arago, à [Muret](/intervention/muret), au sud de Toulouse. L'A64 et la RD820 relient Muret à la ville. Plus de 20 ans de métier, une entreprise indépendante, pas une enseigne : l'artisan qui décroche est celui qui se déplace, qui chiffre et qui répare. Ça compte quand il faut rappeler pour une question ou faire jouer la garantie. Pour connaître le parcours de l'entreprise, lisez [qui est Nino Plomberie](/a-propos).",
      },
      {
        h2: "Ce que comprend le devis gratuit",
        numbered: true,
        bullets: [
          "**Le diagnostic** : l'origine de la panne ou l'état de l'installation, expliqués simplement.",
          "**Le détail des travaux** : ce qui est réparé, remplacé ou conservé.",
          "**Le prix** : main-d'œuvre et pièces, annoncés avant le début des travaux.",
          "**La garantie** : 2 ans, pièces et main-d'œuvre, sur les réparations.",
        ],
        after: "Vous validez, puis l'artisan intervient. Aucun engagement avant.",
      },
    ],
    faq: [
      {
        question: "Vous déplacez-vous dans tous les quartiers de Toulouse ?",
        reponse:
          "Oui, du Capitole à Borderouge, de Saint-Cyprien à Rangueil. Les quartiers desservis sont listés sur la page plombier à Toulouse. Le délai d'arrivée dépend du quartier et vous est indiqué à l'appel.",
      },
      {
        question: "Le tarif est-il différent la nuit ?",
        reponse:
          "Le prix dépend de l'intervention. Dans tous les cas, il est annoncé dans le devis gratuit et validé avec vous avant les travaux, de jour comme de nuit.",
      },
      {
        question: "Travaillez-vous avec les syndics ?",
        reponse:
          "Oui, pour les petites interventions demandées par un syndic ou un gestionnaire. Pour une colonne commune, les travaux se font avec l'accord du syndic. Les parties privatives se traitent directement avec vous.",
      },
    ],
    aLireAussi: [
      { label: "Plombier urgence à Toulouse", to: "/services/urgence-plombier-toulouse" },
      { label: "Plombier en urgence : quand appeler ?", to: "/blog/plombier-urgence-toulouse-quand-appeler" },
      { label: "Plombier à Toulouse, quartier par quartier", to: "/intervention/toulouse" },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceFiche | undefined {
  return services.find((s) => s.slug === slug)
}
