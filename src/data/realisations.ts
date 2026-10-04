// Photos réelles issues de la fiche Google Business Nino Plomberie
// `ville` : slug de la commune du chantier (voir data/communes.ts), à renseigner uniquement
// avec la commune réelle confirmée par Nino. Laisser vide si inconnue : rien n'est affiché.
export type Realisation = { src: string; titre: string; services: string[]; ville?: string }

// Communes où Nino a réalisé des chantiers (confirmé par Nino le 2026-10-04), sans répartition photo par photo
export const VILLES_CHANTIERS = ["toulouse", "colomiers", "blagnac", "tournefeuille", "muret"]

export const realisations: Realisation[] = [
  { src: "/realisations/photo-09.jpg", titre: "Meuble double vasque et miroir LED",       services: ["renovation-salle-de-bain", "robinetterie-sanitaires"], ville: "toulouse" },
  { src: "/realisations/photo-15.jpg", titre: "Douche à l'italienne avec verrière noire et baignoire", services: ["renovation-salle-de-bain", "robinetterie-sanitaires"], ville: "colomiers" },
  { src: "/realisations/photo-12.jpg", titre: "WC suspendu noir et lave-mains",           services: ["renovation-salle-de-bain", "robinetterie-sanitaires"], ville: "blagnac" },
  { src: "/realisations/photo-14.jpg", titre: "Verrière de douche et niche éclairée",     services: ["renovation-salle-de-bain"] },
  { src: "/realisations/photo-13.jpg", titre: "Douche thermostatique et meuble vasque",   services: ["renovation-salle-de-bain", "robinetterie-sanitaires"], ville: "tournefeuille" },
  { src: "/realisations/photo-01.jpg", titre: "Baignoire et robinetterie noire mat",      services: ["renovation-salle-de-bain", "robinetterie-sanitaires"] },
  { src: "/realisations/photo-02.jpg", titre: "Colonne de douche thermostatique",         services: ["renovation-salle-de-bain", "robinetterie-sanitaires"] },
  { src: "/realisations/photo-08.jpg", titre: "Baignoire d'angle et WC suspendu",         services: ["renovation-salle-de-bain"] },
  { src: "/realisations/photo-10.jpg", titre: "Receveur extra-plat et paroi coulissante", services: ["renovation-salle-de-bain"] },
  { src: "/realisations/photo-03.jpg", titre: "Meuble vasque et mitigeur",                services: ["renovation-salle-de-bain", "robinetterie-sanitaires"] },
  { src: "/realisations/photo-06.jpg", titre: "Douche avec mitigeur thermostatique",      services: ["renovation-salle-de-bain", "robinetterie-sanitaires"] },
  { src: "/realisations/photo-07.jpg", titre: "Cuisine posée et chauffe-eau électrique",   services: ["chauffe-eau", "pose-cuisine"] },
  { src: "/realisations/photo-05.jpg", titre: "Pose de cuisine avec îlot",                services: ["pose-cuisine"] },
  { src: "/realisations/photo-11.jpg", titre: "Radiateur sèche-serviettes",               services: ["renovation-salle-de-bain", "chauffage-chaudiere"] },
]
