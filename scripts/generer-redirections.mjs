// scripts/generer-redirections.mjs
// Génère les redirections 301 de l'ancien site (nino-plomberie31.fr) vers le nouveau (ninoplomberie.fr)
// et les écrit dans vercel.json (clé "redirects"). Usage : node scripts/generer-redirections.mjs
//
// Source : scripts/anciennes-urls.txt = toutes les URL des sitemaps Yoast de l'ancien site (relevé du 2026-10-04).
// Chaque ancienne page est redirigée vers la page la plus proche du nouveau site, jamais en masse vers l'accueil.

import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const NOUVEAU = "https://ninoplomberie.fr"
// Les redirections ne s'appliquent qu'aux requêtes arrivant sur l'ancien domaine
const ANCIEN_HOTE = [{ type: "host", value: "(www\\.)?nino-plomberie31\\.fr" }]

const communes = new Set(
  [...readFileSync(join(root, "src/data/communes.ts"), "utf8").matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1]),
)

const FIXES = {
  "/": "/",
  "/contact/": "/contact",
  "/realisations-muret/": "/realisations",
  "/blog/": "/services",
  "/category/uncategorized/": "/services",
}

// Articles de blog : redirigés vers la page qui traite le même sujet (premier mot-clé trouvé)
const SUJETS = [
  [["prix", "tarif", "couts", "cout", "budget", "devis"], "/tarifs"],
  [["chasse", "robinet", "robinetterie", "adoucisseur", "tartre", "siphon", "raccords", "cuivre", "per", "multicouche", "debit"], "/services/robinetterie-sanitaires"],
  [["chauffe", "ballon", "cumulus"], "/services/chauffe-eau"],
  [["chaudiere", "radiateur"], "/services/chauffage-chaudiere"],
  [["odeur", "debouchage", "deboucher", "bouchee"], "/services/debouchage"],
  [["cuisine"], "/services/pose-cuisine"],
  [["salle", "salles", "douche", "baignoire", "receveur", "vmc", "ventilation", "carrelage", "etancheite", "humide", "electriques"], "/services/renovation-salle-de-bain"],
  [["fuite", "fuites", "degat", "gelee", "belier"], "/services/fuite-d-eau"],
  [["evacuation", "toilette"], "/services/debouchage"],
  [["urgence", "depannage"], "/"],
  [["choisir", "artisan", "professionnel", "chauffagiste", "entreprise"], "/a-propos"],
]

function destination(url) {
  if (FIXES[url]) return FIXES[url]
  const slug = url.replace(/^\/|\/$/g, "")

  const ville = slug.match(/^plombier-(.+)$/)?.[1]
  if (ville && communes.has(ville)) return `/intervention/${ville}`

  // Pages « rénovation salle de bain + ville » : le nouveau site a une seule page service
  if (slug.startsWith("renovation-salle-de-bain-") && slug !== "renovation-salle-de-bain-personne-agee") {
    return "/services/renovation-salle-de-bain"
  }

  const mots = new Set(slug.split("-"))
  for (const [cles, cible] of SUJETS) if (cles.some((c) => mots.has(c))) return cible

  // Ancienne page ville absente des communes du nouveau site
  if (ville) return "/zones"
  return "/services"
}

const urls = readFileSync(join(root, "scripts/anciennes-urls.txt"), "utf8").split(/\r?\n/).map((l) => l.trim()).filter(Boolean)

const redirects = []
for (const url of urls) {
  const cible = `${NOUVEAU}${destination(url)}`
  // Avec et sans « / » final : l'ancien WordPress utilisait le « / » final, les liens externes pas toujours
  const sources = url === "/" ? ["/"] : [url, url.replace(/\/$/, "")]
  for (const source of sources) redirects.push({ source, has: ANCIEN_HOTE, destination: cible, statusCode: 301 })
}
// Toute autre adresse de l'ancien domaine (images, flux…) : vers l'accueil du nouveau site
redirects.push({ source: "/:path*", has: ANCIEN_HOTE, destination: `${NOUVEAU}/`, statusCode: 301 })

const vercelPath = join(root, "vercel.json")
const vercel = JSON.parse(readFileSync(vercelPath, "utf8"))
vercel.redirects = redirects
writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + "\n")

// Récapitulatif
const parCible = {}
for (const url of urls) {
  const d = destination(url)
  const cle = d.startsWith("/intervention/") ? "/intervention/<commune>" : d
  parCible[cle] = (parCible[cle] ?? 0) + 1
}
console.log(`${urls.length} anciennes URL -> ${redirects.length} règles écrites dans vercel.json`)
console.table(parCible)
