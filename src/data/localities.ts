// src/data/localities.ts
// Données des communes et localités couvertes par Nino Plomberie
// Utilisé pour générer les pages localité + FAQs hyper-locales

export interface Locality {
  slug: string
  name: string
  region: string
  description: string
  keywords: string[]
  intervensionTime: string // Délai intervention estimé depuis Muret
  servicesFocus: string[] // Services prioritaires pour cette zone
  faqTop: Array<{ q: string; a: string }>
}

export const localities: Locality[] = [
  // Muret et région immédiate
  {
    slug: "muret",
    name: "Muret",
    region: "Haute-Garonne",
    description: "Plombier à Muret: dépannage, rénovation salle de bain, chauffage. Nino Plomberie est basé à Muret et intervient en urgence 24h/24.",
    keywords: ["plombier muret", "urgence plomberie muret", "fuite d'eau muret", "débouchage muret", "chauffe-eau muret"],
    intervensionTime: "15-30 minutes",
    servicesFocus: ["fuite-d-eau", "debouchage", "chauffe-eau", "renovation-salle-de-bain"],
    faqTop: [
      {
        q: "Quel est le délai d'intervention à Muret ?",
        a: "Nino Plomberie est basé à Muret. Pour une urgence, délai moyen 15-30 minutes. Pour un devis non urgent, le lendemain ou surlendemain selon disponibilité.",
      },
      {
        q: "Vous intervenez aussi dans les petits villages autour de Muret ?",
        a: "Oui, Nino Plomberie intervient à Fonsorbes, L'Union, Labège et tous les petits villages en rayon de 30 km autour de Muret.",
      },
      {
        q: "Faites-vous des petits travaux (robinet, chasse d'eau) à Muret ?",
        a: "Bien sûr, tout type de travail : robinet qui fuit, chasse d'eau qui coule, évier bouché, radiateur froid, urgence plomberie même mineure.",
      },
      {
        q: "Fuite d'eau à Muret la nuit, qui appeler ?",
        a: "Appelez Nino Plomberie au 06 50 57 96 20 même à minuit. Nous intervenons 24h/24. Délai 15-30 min à Muret.",
      },
      {
        q: "Combien coûte une intervention plomberie urgence à Muret ?",
        a: "Les tarifs sont transparents : fuite simple €80-150, débouchage €100-150, chauffe-eau panne €150-300+. Devis gratuit avant travail.",
      },
      {
        q: "Débouchage WC bouché à Muret samedi, c'est possible ?",
        a: "Oui, WC bouché le samedi = urgence. Nino intervient 7j/7 y compris week-end et jours fériés à Muret.",
      },
      {
        q: "Garantie 2 ans, c'est quoi exactement ?",
        a: "Garantie 2 ans pièces et main-d'œuvre : si la réparation fait défaut, nous revenons sans frais pour corriger.",
      },
    ],
  },
  {
    slug: "toulouse",
    name: "Toulouse",
    region: "Haute-Garonne",
    description: "Plombier Toulouse: urgence 24h/24, fuite d'eau, débouchage, salle de bain. Nino Plomberie intervient à Toulouse centre et quartiers.",
    keywords: ["plombier toulouse", "fuite d'eau toulouse", "débouchage toulouse", "urgence plomberie toulouse", "salle de bain toulouse"],
    intervensionTime: "45 min - 1h30 selon quartier",
    servicesFocus: ["fuite-d-eau", "debouchage", "renovation-salle-de-bain"],
    faqTop: [
      {
        q: "Quel est le délai d'intervention à Toulouse ?",
        a: "À Toulouse centre (Capitole, Minimes, Carmes), env. 45 min à 1h. Toulouse nord (Bellefontaine, Purpan), 1-1h15. Toulouse est (Empalot), 1h15-1h30.",
      },
      {
        q: "Intervenez-vous le soir et le week-end à Toulouse ?",
        a: "Oui, 24h/24 et 7j/7. Un appel le soir, dimanche ou jour férié vous donne le délai exact pour votre secteur.",
      },
      {
        q: "Débouchez-vous WC urgence à Toulouse le soir ?",
        a: "Oui, WC bouché le soir = urgence traitée. Nino se déplace à Toulouse y compris après 20h pour les urgences.",
      },
      {
        q: "Fuite d'eau Toulouse immeuble ancien, c'est compliqué ?",
        a: "Les immeubles anciens Toulouse ont souvent des tuyauteries cuivre corrodées. Nino détecte avec infrarouge et s'adapte aux configurations anciennes.",
      },
      {
        q: "Rénovation salle de bain Toulouse, combien de temps ?",
        a: "Simple remplacement équipements: 2-3 jours. Rénovation complète (douche + carrelage + WC suspendu): 1-2 semaines selon ampleur.",
      },
      {
        q: "Plombier urgence Toulouse dimanche, tarif ?",
        a: "Même tarif qu'en semaine + supplément urgence €50-100. Devis gratuit au téléphone avant intervention.",
      },
      {
        q: "Chauffe-eau panne Toulouse en hiver, intervention rapide ?",
        a: "Oui, plus d'eau chaude l'hiver = urgence. Nino peut remplacer cumulus même le dimanche à Toulouse.",
      },
      {
        q: "Vous travaillez dans tous les quartiers Toulouse ?",
        a: "Oui: Capitole, Minimes, Carmes, Saint-Michel, Bellefontaine, Purpan, Empalot, Lardenne et tous les quartiers.",
      },
    ],
  },
  {
    slug: "toulouse-capitole",
    name: "Toulouse - Quartier Capitole",
    region: "Toulouse",
    description: "Plombier quartier Capitole Toulouse: fuite d'eau, débouchage, rénovation salle de bain. Délai 45 min.",
    keywords: ["plombier capitole toulouse", "fuite d'eau capitole", "urgence plomberie centre toulouse"],
    intervensionTime: "45 minutes",
    servicesFocus: ["fuite-d-eau", "renovation-salle-de-bain"],
    faqTop: [
      {
        q: "Fuite d'eau à Capitole Toulouse, quel délai ?",
        a: "Capitole est le centre de Toulouse. Délai Nino Plomberie: 45 minutes environ en urgence.",
      },
      {
        q: "Pouvez-vous faire rénovation salle de bain immeuble ancien Capitole ?",
        a: "Oui, les immeubles de Capitole sont souvent anciens. Nino s'adapte aux anciennes tuyauteries, aux petits espaces, à la complexité d'accès.",
      },
      {
        q: "WC bouché Capitole Toulouse, intervention rapide ?",
        a: "45 min délai à Capitole. Débouchage sans produits chimiques agressifs, sans endommager les tuyaux.",
      },
      {
        q: "Chauffe-eau panne Capitole, qui appeler ?",
        a: "Nino Plomberie 06 50 57 96 20. Délai 45 min, remplacement possible même week-end à Capitole.",
      },
      {
        q: "Dégâts des eaux Capitole Toulouse, intervention d'urgence ?",
        a: "Oui, fuite massive = urgence. Nino coupe l'eau et localise source en 45 min à Capitole, puis répare.",
      },
    ],
  },
  {
    slug: "toulouse-minimes",
    name: "Toulouse - Quartier Minimes",
    region: "Toulouse",
    description: "Plombier Minimes Toulouse: dépannage, urgence fuite d'eau, chauffage. Délai 1h.",
    keywords: ["plombier minimes toulouse", "fuite d'eau minimes", "débouchage minimes toulouse"],
    intervensionTime: "1 heure",
    servicesFocus: ["fuite-d-eau", "chauffage-chaudiere"],
    faqTop: [
      {
        q: "Plus de chauffage à Minimes Toulouse, quel délai d'urgence ?",
        a: "Chauffage en panne l'hiver à Minimes = urgence. Délai Nino: 1h environ. Appel le matin = intervention souvent même jour.",
      },
      {
        q: "Radiateurs froids Minimes Toulouse, pourquoi ?",
        a: "Cause courante: air dans circuit ou pression basse. Purge + remise en pression règle le problème en 1-2h.",
      },
      {
        q: "Fuite eau radiateur Minimes Toulouse, urgent ?",
        a: "Oui, fuite radiateur = dégâts possibles. Nino intervient 1h à Minimes pour localiser et réparer.",
      },
      {
        q: "Chaudière panne Minimes dimanche, qui appeler ?",
        a: "Nino Plomberie 24h/24. Panne chaudière l'hiver = urgence. Délai 1h à Minimes.",
      },
      {
        q: "Entretien chaudière Minimes obligatoire ?",
        a: "Oui, entretien annuel obligatoire pour chaudière gaz. Nino le réalise et délivre attestation.",
      },
    ],
  },
  {
    slug: "toulouse-carmes",
    name: "Toulouse - Quartier Carmes",
    region: "Toulouse",
    description: "Plombier Carmes Toulouse: fuite d'eau, rénovation salle de bain, urgence. Délai 50 min.",
    keywords: ["plombier carmes toulouse", "fuite d'eau carmes toulouse"],
    intervensionTime: "50 minutes",
    servicesFocus: ["fuite-d-eau", "renovation-salle-de-bain"],
    faqTop: [
      {
        q: "Fuite d'eau Carmes Toulouse, qui appeler ?",
        a: "Appel Nino Plomberie au 06 50 57 96 20. Délai 50 min env. Diagnostic gratuit, devis avant intervention.",
      },
      {
        q: "Débouchage WC Carmes Toulouse urgence ?",
        a: "Oui, 24h/24. Délai 50 min. Pas de produits chimiques agressifs, outils professionnels.",
      },
      {
        q: "Rénovation salle de bain Carmes, combien ça coûte ?",
        a: "Devis gratuit sur place. €2500-7000 selon envergure (petite vs complète avec carrelage/douche).",
      },
      {
        q: "Robinet qui coule Carmes Toulouse, intervention rapide ?",
        a: "Oui, 50 min délai. Remplacement robinet €80-160 main-d'œuvre + fournitures.",
      },
      {
        q: "Chauffe-eau à remplacer Carmes, prix ?",
        a: "Cumulus 100L €800-1200 (fourniture + pose). Devis gratuit précise le modèle et prix exact.",
      },
    ],
  },
  {
    slug: "toulouse-bellefontaine",
    name: "Toulouse - Bellefontaine & Nord",
    region: "Toulouse",
    description: "Plombier Bellefontaine Toulouse: urgence plomberie, chauffe-eau, chauffage. Délai 1h-1h15.",
    keywords: ["plombier bellefontaine toulouse", "urgence plomberie toulouse nord", "chauffe-eau bellefontaine"],
    intervensionTime: "1h-1h15",
    servicesFocus: ["fuite-d-eau", "chauffe-eau", "chauffage-chaudiere"],
    faqTop: [
      {
        q: "WC bouché à Bellefontaine Toulouse, delai ?",
        a: "Délai Nino: 1h-1h15 à Bellefontaine. Débouchage sans produit chimique agressif.",
      },
      {
        q: "Fuite d'eau Bellefontaine Toulouse urgence la nuit ?",
        a: "Oui 24h/24. Délai 1h-1h15. Appellez 06 50 57 96 20 même minuit.",
      },
      {
        q: "Chauffe-eau panne Bellefontaine, intervention week-end ?",
        a: "Oui, dimanche et jours fériés. Délai 1h-1h15. Remplacement souvent possible même jour.",
      },
      {
        q: "Débouchage canalisation profonde Bellefontaine ?",
        a: "Oui, furet motorisé pour bouchons compacts. Délai 1h-1h15. Coût €150-300 selon profondeur.",
      },
      {
        q: "Radiateur qui fuit Bellefontaine, c'est grave ?",
        a: "Oui, fuite radiateur endommage. Nino intervient 1h-1h15 pour localiser et réparer raccord ou vanne.",
      },
    ],
  },
  {
    slug: "toulouse-empalot",
    name: "Toulouse - Empalot & Est",
    region: "Toulouse",
    description: "Plombier Empalot Toulouse: fuite d'eau, débouchage, salle de bain. Délai 1h15-1h30.",
    keywords: ["plombier empalot toulouse", "fuite d'eau empalot", "débouchage empalot toulouse"],
    intervensionTime: "1h15-1h30",
    servicesFocus: ["fuite-d-eau", "debouchage"],
    faqTop: [
      {
        q: "Plombier fiable Empalot Toulouse ?",
        a: "Nino Plomberie: 20+ ans expérience, 4.4/5 avis, garantie 2 ans. Délai à Empalot 1h15-1h30.",
      },
      {
        q: "Fuite d'eau Empalot Toulouse, tarif ?",
        a: "Fuite simple robinet/joint: €80-150. Tuyau percé: €150-350. Devis gratuit avant intervention.",
      },
      {
        q: "Plus d'eau chaude Empalot, qui appeler ?",
        a: "Nino Plomberie 06 50 57 96 20. Délai 1h15-1h30. Diagnostic gratuit, remplacement possible même jour.",
      },
      {
        q: "Débouchage urgence Empalot Toulouse ?",
        a: "Oui 24h/24. Délai 1h15-1h30. Furet + ventouse, sans produits chimiques.",
      },
      {
        q: "Rénovation salle de bain Empalot petit budget ?",
        a: "Possible: remplacement évier + robinet + WC €1500-2000. Devis gratuit pour adapter.",
      },
    ],
  },
  {
    slug: "toulouse-purpan",
    name: "Toulouse - Purpan & Ouest",
    region: "Toulouse",
    description: "Plombier Purpan Toulouse: urgence, rénovation salle de bain, chauffe-eau. Délai 1h-1h15.",
    keywords: ["plombier purpan toulouse", "plombier toulouse ouest", "rénovation salle de bain purpan"],
    intervensionTime: "1h-1h15",
    servicesFocus: ["renovation-salle-de-bain", "chauffe-eau"],
    faqTop: [
      {
        q: "Rénovation salle de bain Purpan Toulouse, combien ça coûte ?",
        a: "Nino Plomberie devis gratuit. Petit budget (évier + robinet) vs complet (carrelage + douche + WC). Visite pour estimer.",
      },
      {
        q: "Fuite d'eau Purpan Toulouse, délai ?",
        a: "Délai 1h-1h15 à Purpan. Devis gratuit, réparation garantie 2 ans.",
      },
      {
        q: "Chauffe-eau thermodynamique Purpan, possibilité ?",
        a: "Oui, Nino installe cumulus thermodynamique (économies énergie). €1200-2000 fourniture + pose.",
      },
      {
        q: "Débouchage WC Purpan urgent ?",
        a: "Oui 24h/24 y compris dimanche. Délai 1h-1h15. Sans produits chimiques corrosifs.",
      },
      {
        q: "Détection fuite d'eau Purpan par infrarouge ?",
        a: "Oui, caméra thermique pour localiser fuites cachées. Inclus dans diagnostic gratuit.",
      },
    ],
  },
  {
    slug: "toulouse-lardenne",
    name: "Toulouse - Lardenne",
    region: "Toulouse",
    description: "Plombier Lardenne Toulouse: fuite d'eau, chauffage, urgence. Délai 1h-1h15.",
    keywords: ["plombier lardenne toulouse", "urgence plomberie lardenne"],
    intervensionTime: "1h-1h15",
    servicesFocus: ["fuite-d-eau", "chauffage-chaudiere"],
    faqTop: [
      {
        q: "Fuite d'eau Lardenne Toulouse, délai intervention ?",
        a: "Lardenne est à l'est Toulouse. Délai Nino 1h-1h15. Devis gratuit, réparation garantie.",
      },
      {
        q: "Débouchage urgence WC Lardenne ?",
        a: "Oui 24h/24. Délai 1h-1h15. Sans produits agressifs.",
      },
      {
        q: "Chauffe-eau panne Lardenne dimanche ?",
        a: "Oui, remplacement possible dimanche. Délai 1h-1h15. €800-1200 pour cumulus 100L.",
      },
      {
        q: "Rénovation salle de bain Lardenne, entreprise fiable ?",
        a: "Nino: 20+ ans, 4.4/5 avis, garantie 2 ans. Devis gratuit, plomberie + pose carrelage + peinture.",
      },
      {
        q: "Radiateur froid Lardenne, perte de chauffage ?",
        a: "Cause: air circuit ou pression basse. Purge rapide règle. Délai 1h-1h15.",
      },
    ],
  },
  // Banlieue Toulouse
  {
    slug: "colomiers",
    name: "Colomiers",
    region: "Haute-Garonne",
    description: "Plombier Colomiers: urgence 24h/24, débouchage, chauffe-eau. Nino Plomberie Colomiers délai 1h-1h15.",
    keywords: ["plombier colomiers", "urgence plomberie colomiers", "débouchage colomiers", "chauffe-eau colomiers"],
    intervensionTime: "1h-1h15",
    servicesFocus: ["fuite-d-eau", "debouchage", "chauffe-eau"],
    faqTop: [
      {
        q: "Plombier urgence Colomiers le dimanche ?",
        a: "Oui, Nino Plomberie joignable dimanche et jours fériés. WC bouché ou fuite = urgence traitée 24h/24.",
      },
      {
        q: "Fuite d'eau Colomiers Toulouse, délai ?",
        a: "Délai 1h-1h15. Devis gratuit, réparation garantie 2 ans.",
      },
      {
        q: "Débouchage urgence Colomiers WC bouché ?",
        a: "Oui 24h/24 7j/7. Délai 1h-1h15. Pas de produits chimiques corrosifs.",
      },
      {
        q: "Chauffe-eau à remplacer Colomiers ?",
        a: "Oui, cumulus 100L €800-1200 fourniture + pose. Délai remplacement souvent même jour.",
      },
      {
        q: "Plombier fiable Colomiers banlieue Toulouse ?",
        a: "Nino: 20+ ans, 4.4/5 avis, garantie 2 ans. Déplacements gratuits Colomiers.",
      },
    ],
  },
  {
    slug: "tournefeuille",
    name: "Tournefeuille",
    region: "Haute-Garonne",
    description: "Plombier Tournefeuille: fuite d'eau, salle de bain, urgence. Nino Plomberie Tournefeuille délai 1h-1h15.",
    keywords: ["plombier tournefeuille", "urgence plomberie tournefeuille", "rénovation salle de bain tournefeuille"],
    intervensionTime: "1h-1h15",
    servicesFocus: ["fuite-d-eau", "renovation-salle-de-bain"],
    faqTop: [
      {
        q: "Fuite d'eau Tournefeuille, qui appeler ?",
        a: "Nino Plomberie: 06 50 57 96 20. Délai 1h-1h15. Devis gratuit pour réparation.",
      },
      {
        q: "Rénovation salle de bain Tournefeuille, prix ?",
        a: "Devis gratuit. Petit projet €1500-2000, complet €3000-7000. Visite pour estimer.",
      },
      {
        q: "WC bouché Tournefeuille urgence nuit ?",
        a: "Oui 24h/24. Délai 1h-1h15. Débouchage sans produits agressifs.",
      },
      {
        q: "Chauffe-eau panne Tournefeuille week-end ?",
        a: "Oui, intervention dimanche possible. Délai 1h-1h15. Remplacement souvent possible même jour.",
      },
      {
        q: "Radiateur qui fuit Tournefeuille, urgent ?",
        a: "Oui, fuite radiateur = dégâts. Nino répare raccord ou vanne. Délai 1h-1h15.",
      },
    ],
  },
  {
    slug: "blagnac",
    name: "Blagnac",
    region: "Haute-Garonne",
    description: "Plombier Blagnac: débouchage, chauffage, urgence. Nino Plomberie Blagnac délai 1h-1h15.",
    keywords: ["plombier blagnac", "urgence plomberie blagnac", "chauffe-eau blagnac"],
    intervensionTime: "1h-1h15",
    servicesFocus: ["debouchage", "chauffe-eau", "chauffage-chaudiere"],
    faqTop: [
      {
        q: "Débouchage urgence Blagnac WC bouché ?",
        a: "Oui 24h/24. Délai 1h-1h15. Nino utilise furet + ventouse, pas de chimie agressive.",
      },
      {
        q: "Chauffe-eau panne Blagnac, qui appeler ?",
        a: "Nino Plomberie 06 50 57 96 20. Délai 1h-1h15. Diagnostic + remplacement rapide.",
      },
      {
        q: "Chauffage panne Blagnac l'hiver, urgence ?",
        a: "Oui, chauffage en panne = urgence. Nino intervient 1h-1h15 même dimanche.",
      },
      {
        q: "Chaudière qui fuit Blagnac, grave ?",
        a: "Oui, fuite chaudière demande intervention rapide. Nino diagnostique cause et répare.",
      },
      {
        q: "Radiateur froid Blagnac, perte de chauffage ?",
        a: "Cause: air ou pression basse. Purge règle. Délai 1h-1h15.",
      },
    ],
  },
  {
    slug: "plaisance-du-touch",
    name: "Plaisance-du-Touch",
    region: "Haute-Garonne",
    description: "Plombier Plaisance-du-Touch: fuite d'eau, urgence plomberie. Délai 1h15-1h30.",
    keywords: ["plombier plaisance-du-touch", "urgence plomberie plaisance-du-touch"],
    intervensionTime: "1h15-1h30",
    servicesFocus: ["fuite-d-eau"],
    faqTop: [
      {
        q: "Fuite d'eau Plaisance-du-Touch, délai ?",
        a: "Délai 1h15-1h30. Devis gratuit, réparation garantie 2 ans.",
      },
      {
        q: "Fuite d'eau urgence Plaisance-du-Touch la nuit ?",
        a: "Oui 24h/24. Appellez 06 50 57 96 20 même minuit.",
      },
      {
        q: "Robinet qui goutte Plaisance-du-Touch, tarif ?",
        a: "Remplacement simple €80-150. Devis gratuit avant intervention.",
      },
      {
        q: "Détection fuite cachée Plaisance-du-Touch ?",
        a: "Oui, infrarouge pour fuites invisibles. Diagnostic gratuit.",
      },
    ],
  },
  {
    slug: "cugnaux",
    name: "Cugnaux",
    region: "Haute-Garonne",
    description: "Plombier Cugnaux: débouchage, chauffe-eau, urgence. Nino Plomberie Cugnaux délai 1h30.",
    keywords: ["plombier cugnaux", "urgence plomberie cugnaux", "débouchage cugnaux"],
    intervensionTime: "1h30",
    servicesFocus: ["debouchage", "chauffe-eau"],
    faqTop: [
      {
        q: "Débouchage urgence Cugnaux WC ou évier bouché ?",
        a: "Oui 24h/24. Délai 1h30. Furet + ventouse, sans produits chimiques dangereux.",
      },
      {
        q: "Chauffe-eau panne Cugnaux, qui appeler ?",
        a: "Nino Plomberie 06 50 57 96 20. Délai 1h30. Diagnostic + remplacement rapide.",
      },
      {
        q: "Fuite tuyau Cugnaux, tarif réparation ?",
        a: "Fuite simple €80-150, tuyau percé €150-350. Devis gratuit avant travail.",
      },
      {
        q: "Plombier fiable Cugnaux ?",
        a: "Nino: 20+ ans, 4.4/5 avis, garantie 2 ans. Déplacements gratuits Cugnaux.",
      },
    ],
  },
  {
    slug: "balma",
    name: "Balma",
    region: "Haute-Garonne",
    description: "Plombier Balma: fuite d'eau, rénovation salle de bain. Nino Plomberie Balma délai 1h-1h15.",
    keywords: ["plombier balma", "fuite d'eau balma", "rénovation salle de bain balma"],
    intervensionTime: "1h-1h15",
    servicesFocus: ["fuite-d-eau", "renovation-salle-de-bain"],
    faqTop: [
      {
        q: "Fuite d'eau Balma Toulouse, délai ?",
        a: "Délai 1h-1h15. Devis gratuit, réparation garantie 2 ans.",
      },
      {
        q: "Rénovation salle de bain Balma, prix ?",
        a: "Petit projet €1500-2000, complet €3000-7000. Devis gratuit sur place.",
      },
      {
        q: "Robinet qui fuit Balma, intervention rapide ?",
        a: "Oui, délai 1h-1h15. Remplacement simple €80-150.",
      },
      {
        q: "Débouchage urgence Balma ?",
        a: "Oui 24h/24. Délai 1h-1h15. Sans produits chimiques agressifs.",
      },
    ],
  },
  {
    slug: "ramonville",
    name: "Ramonville-Saint-Agne",
    region: "Haute-Garonne",
    description: "Plombier Ramonville: urgence plomberie, débouchage, chauffage. Délai 1h15-1h30.",
    keywords: ["plombier ramonville", "urgence plomberie ramonville", "plombier saint-agne"],
    intervensionTime: "1h15-1h30",
    servicesFocus: ["debouchage", "chauffage-chaudiere"],
    faqTop: [
      {
        q: "Débouchage WC bouché Ramonville urgence ?",
        a: "Oui 24h/24. Délai 1h15-1h30. Débouchage professionnel sans produits agressifs.",
      },
      {
        q: "Chauffage panne Ramonville l'hiver ?",
        a: "Urgence! Nino intervient 1h15-1h30 même dimanche. Diagnostic + réparation.",
      },
      {
        q: "Chaudière qui perd pression Ramonville ?",
        a: "Cause: fuite circuit ou vase d'expansion. Nino diagnostique et répare.",
      },
    ],
  },
  {
    slug: "castanet-tolosan",
    name: "Castanet-Tolosan",
    region: "Haute-Garonne",
    description: "Plombier Castanet-Tolosan: fuite d'eau, urgence. Nino Plomberie Castanet délai 1h30.",
    keywords: ["plombier castanet", "urgence plomberie castanet", "fuite d'eau castanet"],
    intervensionTime: "1h30",
    servicesFocus: ["fuite-d-eau"],
    faqTop: [
      {
        q: "Fuite d'eau Castanet-Tolosan, qui appeler ?",
        a: "Nino Plomberie 06 50 57 96 20. Délai 1h30. Devis gratuit avant intervention.",
      },
      {
        q: "Fuite urgence Castanet la nuit ?",
        a: "Oui 24h/24. Appel même minuit. Délai 1h30.",
      },
      {
        q: "Robinet qui goutte Castanet, tarif ?",
        a: "€80-150 remplacement. Devis gratuit, garantie 2 ans.",
      },
    ],
  },
  {
    slug: "fonsorbes",
    name: "Fonsorbes",
    region: "Haute-Garonne",
    description: "Plombier Fonsorbes: urgence 24h/24, débouchage, chauffage. Délai 30-45 min.",
    keywords: ["plombier fonsorbes", "urgence plomberie fonsorbes", "plombier fonsorbes toulouse"],
    intervensionTime: "30-45 minutes",
    servicesFocus: ["debouchage", "chauffage-chaudiere"],
    faqTop: [
      {
        q: "Débouchage urgence Fonsorbes ?",
        a: "Oui 24h/24. Délai 30-45 min (proche Muret). Sans chimie agressive.",
      },
      {
        q: "Chauffage panne Fonsorbes ?",
        a: "Urgence! Délai 30-45 min. Diagnostic + réparation même dimanche.",
      },
      {
        q: "Robinet qui fuit Fonsorbes ?",
        a: "Délai 30-45 min. Remplacement €80-150. Garantie 2 ans.",
      },
    ],
  },
  {
    slug: "lunion",
    name: "L'Union",
    region: "Haute-Garonne",
    description: "Plombier L'Union: fuite d'eau, urgence. Nino Plomberie L'Union délai 30-45 min.",
    keywords: ["plombier l'union", "fuite d'eau l'union", "urgence plomberie l'union"],
    intervensionTime: "30-45 minutes",
    servicesFocus: ["fuite-d-eau"],
    faqTop: [
      {
        q: "Fuite d'eau L'Union, délai ?",
        a: "Délai 30-45 min (proche Muret). Devis gratuit, réparation garantie 2 ans.",
      },
      {
        q: "Fuite urgence L'Union nuit ou week-end ?",
        a: "Oui 24h/24 7j/7. Appel 06 50 57 96 20 même dimanche minuit.",
      },
      {
        q: "Débouchage WC L'Union ?",
        a: "Oui, délai 30-45 min. Furet sans produits chimiques.",
      },
    ],
  },
  {
    slug: "saint-orens",
    name: "Saint-Orens-de-Gameville",
    region: "Haute-Garonne",
    description: "Plombier Saint-Orens: débouchage, chauffe-eau, urgence. Délai 1h15-1h30.",
    keywords: ["plombier saint-orens", "urgence plomberie saint-orens"],
    intervensionTime: "1h15-1h30",
    servicesFocus: ["debouchage", "chauffe-eau"],
    faqTop: [
      {
        q: "WC bouché Saint-Orens urgence ?",
        a: "Oui 24h/24. Délai 1h15-1h30. Débouchage professionnel sans produits agressifs.",
      },
      {
        q: "Chauffe-eau panne Saint-Orens ?",
        a: "Délai 1h15-1h30. Diagnostic gratuit, remplacement souvent même jour.",
      },
      {
        q: "Plombier fiable Saint-Orens ?",
        a: "Nino: 20+ ans, 4.4/5 avis, garantie 2 ans. Déplacements gratuits.",
      },
    ],
  },
  {
    slug: "portet",
    name: "Portet-sur-Garonne",
    region: "Haute-Garonne",
    description: "Plombier Portet: fuite d'eau, rénovation salle de bain. Délai 1h15-1h30.",
    keywords: ["plombier portet", "plombier portet sur garonne"],
    intervensionTime: "1h15-1h30",
    servicesFocus: ["fuite-d-eau", "renovation-salle-de-bain"],
    faqTop: [
      {
        q: "Fuite d'eau Portet-sur-Garonne ?",
        a: "Délai 1h15-1h30. Devis gratuit, réparation garantie 2 ans.",
      },
      {
        q: "Rénovation salle de bain Portet ?",
        a: "Devis gratuit. Petit budget vs complet. Nino s'occupe plomberie + finitions.",
      },
      {
        q: "Robinet qui goutte Portet ?",
        a: "Remplacement €80-150. Délai 1h15-1h30. Garantie 2 ans.",
      },
    ],
  },
  {
    slug: "aucamville",
    name: "Aucamville",
    region: "Haute-Garonne",
    description: "Plombier Aucamville: urgence plomberie, débouchage. Délai 1h-1h15.",
    keywords: ["plombier aucamville", "urgence plomberie aucamville"],
    intervensionTime: "1h-1h15",
    servicesFocus: ["debouchage"],
    faqTop: [
      {
        q: "Débouchage urgence Aucamville ?",
        a: "Oui 24h/24. Délai 1h-1h15. Outils professionnels, pas de chimie.",
      },
      {
        q: "WC bouché Aucamville dimanche ?",
        a: "Oui, intervention dimanche 24h/24. Délai 1h-1h15.",
      },
      {
        q: "Plombier Aucamville fiable ?",
        a: "Nino: 20+ ans, 4.4/5 avis, garantie 2 ans.",
      },
    ],
  },
  {
    slug: "labege",
    name: "Labège",
    region: "Haute-Garonne",
    description: "Plombier Labège: fuite d'eau, chauffage, urgence. Nino Plomberie Labège délai 1h15-1h30.",
    keywords: ["plombier labège", "urgence plomberie labège", "chauffage labège"],
    intervensionTime: "1h15-1h30",
    servicesFocus: ["fuite-d-eau", "chauffage-chaudiere"],
    faqTop: [
      {
        q: "Fuite d'eau Labège urgence ?",
        a: "Oui 24h/24. Délai 1h15-1h30. Devis gratuit avant intervention.",
      },
      {
        q: "Chauffage panne Labège l'hiver ?",
        a: "Urgence! Nino intervient 1h15-1h30 même dimanche.",
      },
      {
        q: "Radiateur froid Labège ?",
        a: "Cause: air ou pression basse. Purge règle. Délai 1h15-1h30.",
      },
      {
        q: "Chauffe-eau panne Labège ?",
        a: "Délai 1h15-1h30. Diagnostic gratuit, remplacement souvent rapide.",
      },
    ],
  },
]

export function getLocalityBySlug(slug: string): Locality | undefined {
  return localities.find((l) => l.slug === slug)
}

export function getLocalitiesByRegion(region: string): Locality[] {
  return localities.filter((l) => l.region === region)
}
