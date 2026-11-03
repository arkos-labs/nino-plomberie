// src/routes/zones.muretain.tsx — page hub : Plombier dans le Muretain (Brief section 7.4)
import { createFileRoute, Link } from "@tanstack/react-router"
import { MapPin, Phone, Calendar, ArrowRight } from "lucide-react"
import { PageHero } from "../components/PageHero"
import { communes, getCommuneBySlug } from "../data/communes"
import { BUSINESS, pageHead, ldScript, breadcrumbJsonLd, faqJsonLd, type Faq } from "../lib/site"

// 15 communes du Muretain
const SLUGS = [
  "saubens", "seysses", "villate", "eaunes", "pins-justaret", "roquettes", "saint-hilaire", "labarthe-sur-leze",
  "frouzins", "labastidette", "lamasquere", "le-fauga", "lavernose-lacasse", "saint-clar-de-riviere", "lherm",
]

const FAQ: Faq[] = [
  {
    q: "Quelles communes du Muretain couvrez-vous ?",
    a: "Installé au 11 rue François Arago à Muret, j'interviens dans les 15 communes du Muretain listées sur cette page ainsi qu'à Carbonne, Saint-Lys, Toulouse et dans toute la Haute-Garonne.",
  },
  {
    q: "Quel est le délai d'intervention dans le Muretain ?",
    a: "À Muret même, j'arrive généralement dans l'heure qui suit, rarement plus de 2 heures. Pour les communes voisines du Muretain, le délai dépend de la distance et vous est annoncé dès votre appel au 06 50 57 96 20 [À CONFIRMER PAR NINO : délais moyens vers Carbonne, Eaunes, Saint-Lys].",
  },
  {
    q: "Le devis est-il gratuit dans tout le Muretain ?",
    a: "Oui. Le devis est gratuit et signé avant le début des travaux, et chaque réparation est garantie 2 ans pièces et main-d'œuvre.",
  },
]

function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

export const Route = createFileRoute("/zones/muretain")({
  head: () => {
    const head = pageHead({
      title: "Plombier dans le Muretain - Dépannage 24h/24 | Nino",
      description: "Plombier dans le Muretain : Muret, Carbonne, Eaunes, Saint-Lys, Le Fauga. Dépannage 24h/24, artisan depuis 20 ans, devis gratuit, garantie 2 ans. 06 50 57 96 20.",
      path: "/zones/muretain",
    })
    return {
      ...head,
      scripts: [
        ldScript(breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Zones d'intervention", path: "/zones" },
          { name: "Muretain", path: "/zones/muretain" },
        ])),
        ldScript(faqJsonLd(FAQ)),
      ],
    }
  },
  component: MuretainPage,
})

function MuretainPage() {
  const liste = SLUGS.map((slug) => getCommuneBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({ c, km: Math.round(distanceKm(BUSINESS.lat, BUSINESS.lng, c.lat, c.lng)) }))
    .sort((a, b) => a.km - b.km)

  return (
    <div style={{ background: "var(--sand-50)" }}>
      <PageHero
        kicker="Haute-Garonne (31) · Muretain"
        title={<>Plombier dans le Muretain : <em>les communes où j'interviens</em></>}
        lead="Quand une canalisation lâche à Eaunes, à Seysses ou au Fauga, faire venir un dépanneur depuis le nord de Toulouse fait perdre une heure sur la rocade. Voici comment j'interviens comme plombier dans le Muretain depuis mon atelier du 11 rue François Arago à Muret. Avec plus de 20 ans de métier et 4,4/5 sur 79 avis Google, je me déplace 24h/24 et 7j/7 avec un devis gratuit signé avant travaux et 2 ans de garantie."
        actions={
          <>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
              <Phone size={18} aria-hidden="true" /> Appeler Nino · {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-ghost">
              <Calendar size={18} aria-hidden="true" /> Demander un devis gratuit
            </Link>
          </>
        }
        image="/realisations/photo-08.jpg"
      />

      {/* H2 #1 — Pourquoi un artisan du Muretain change tout */}
      <section style={{ background: "white", padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "900px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Pourquoi un artisan du Muretain change tout
          </h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "1.03rem", margin: "0 0 14px" }}>
            En cherchant un{" "}
            <Link to="/intervention/$ville" params={{ ville: "muret" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              plombier à Muret
            </Link>{" "}
            ou dans le Muretain, vous tombez souvent sur des numéros nationaux qui sous-traitent à des intervenants basés à l'autre bout du département. Mon atelier est situé rue François Arago, au cœur de Muret : je emprunte directement la RD820, l'A64 ou les départementales vers la vallée de la Lèze et le Savès.
          </p>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "1.03rem", margin: 0 }}>
            Vous parlez directement à l'artisan qui se déplace chez vous. Le prix est écrit sur un devis gratuit avant le premier coup de clé, et si la panne revient dans les deux ans, je reviens sans vous refacturer.
          </p>
        </div>
      </section>

      {/* H2 #2 — Les communes desservies */}
      <section style={{ padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "960px" }}>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>Les communes desservies</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, margin: "0 0 24px" }}>
            Retrouvez ci-dessous les 15 communes du Muretain les plus proches de Muret, ainsi que{" "}
            <Link to="/intervention/$ville" params={{ ville: "carbonne" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Carbonne</Link>{" "}
            et{" "}
            <Link to="/intervention/$ville" params={{ ville: "saint-lys" }} style={{ color: "var(--brand-600)", fontWeight: 600 }}>plombier à Saint-Lys</Link> :
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
            {liste.map(({ c, km }) => (
              <li key={c.slug}>
                <Link
                  to="/intervention/$ville"
                  params={{ ville: c.slug }}
                  style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 16px", background: "white", border: "1px solid #e2e8f0", borderRadius: "12px", textDecoration: "none", color: "var(--ink-950)", fontWeight: 600 }}
                >
                  <MapPin size={16} aria-hidden="true" color="var(--brand-600)" />
                  <span>Plombier à {c.nom}</span>
                  <span style={{ marginLeft: "auto", fontWeight: 400, color: "#64748b", fontSize: "0.85rem" }}>≈ {km} km</span>
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ color: "#475569", marginTop: "20px", marginBottom: 0 }}>
            J'interviens également pour tout{" "}
            <Link to="/services/$slug" params={{ slug: "depannage-plomberie-toulouse" }} style={{ color: "var(--brand-600)", fontWeight: 700 }}>
              dépannage plomberie à Toulouse
            </Link>{" "}
            et sur l'ensemble des <Link to="/zones" style={{ fontWeight: 600 }}>{communes.length} communes d'intervention en Haute-Garonne</Link>.
          </p>
        </div>
      </section>

      {/* H2 #3 — Les pannes typiques du secteur */}
      <section style={{ background: "white", padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "900px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Les pannes typiques du secteur
          </h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "1.03rem", margin: "0 0 16px" }}>
            En 20 ans d'interventions autour de Muret, je rencontre trois grands profils de logements qui n'ont pas les mêmes fragilités :
          </p>
          <ul style={{ color: "#334155", lineHeight: 1.85, paddingLeft: "22px", margin: "0 0 28px" }}>
            <li>
              <strong>Maisons de bourg anciennes (vieux Muret, Saint-Hilaire, Le Fauga, Carbonne)</strong> : canalisations en cuivre ancien ou en plomb, vannes d'arrêt grippées et évacuations en fonte qui demandent un diagnostic soigné avant d'ouvrir une cloison.
            </li>
            <li>
              <strong>Pavillons et lotissements des années 1980 à 2010 (Eaunes, Seysses, Frouzins, Labarthe-sur-Lèze)</strong> : chauffe-eau électriques de 150 à 300 L installés au garage dont le groupe de sécurité ou la résistance s'entartre, réducteurs de pression fatigués et robinets extérieurs fendus par le gel.
            </li>
            <li>
              <strong>Réseaux extérieurs sur terrain arboré (Lherm, Lavernose-Lacasse, Saint-Lys)</strong> : longues canalisations entre le compteur en limite de propriété et la maison, sensibles aux mouvements de terrain argileux et aux racines dans les regards d'évacuation.
            </li>
          </ul>

          {/* 2 images avec alt descriptif et local */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            <figure style={{ margin: 0, background: "var(--sand-50)", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
              <img
                src="/realisations/photo-08.jpg"
                alt="Installation de baignoire d'angle et WC suspendu à Muret dans le Muretain"
                loading="lazy"
                style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
              />
              <figcaption style={{ padding: "10px 14px", fontSize: "0.88rem", color: "#475569" }}>
                <strong>Chantier à Muret</strong> — pose de baignoire d'angle et bâti-support WC suspendu.
              </figcaption>
            </figure>
            <figure style={{ margin: 0, background: "var(--sand-50)", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
              <img
                src="/realisations/photo-03.jpg"
                alt="Pose de meuble vasque et mitigeur par un plombier du Muretain à Muret"
                loading="lazy"
                style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
              />
              <figcaption style={{ padding: "10px 14px", fontSize: "0.88rem", color: "#475569" }}>
                <strong>Robinetterie et sanitaires dans le Muretain</strong> — garantie 2 ans pièces et main-d'œuvre.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* H2 #4 — Délais d'intervention dans le Muretain */}
      <section style={{ padding: "56px 0" }}>
        <div className="section-container" style={{ maxWidth: "900px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Délais d'intervention dans le Muretain
          </h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "1.03rem", margin: "0 0 14px" }}>
            Parce que je pars directement de Muret (11 rue François Arago), les trajets vers les communes du Muretain évitent les bouchons du périphérique toulousain :
          </p>
          <ul style={{ color: "#334155", lineHeight: 1.85, paddingLeft: "22px", margin: 0 }}>
            <li>
              <strong>Muret et communes limitrophes (Saubens, Seysses, Eaunes, Villate, Saint-Hilaire)</strong> : en urgence, j'arrive généralement dans l'heure qui suit votre appel, rarement plus de 2 heures [À CONFIRMER PAR NINO : délai moyen constaté sur la première couronne de Muret].
            </li>
            <li>
              <strong>Deuxième couronne du Muretain (Frouzins, Roquettes, Pins-Justaret, Labarthe-sur-Lèze, Le Fauga, Labastidette, Lamasquère)</strong> : délai annoncé en direct par téléphone selon le chantier en cours [À CONFIRMER PAR NINO : délai moyen constaté].
            </li>
            <li>
              <strong>Sud et ouest du secteur (Lherm, Lavernose-Lacasse, Saint-Clar-de-Rivière, Carbonne, Saint-Lys)</strong> : intervention le jour même en urgence 24h/24 ou créneau planifié sur rendez-vous [À CONFIRMER PAR NINO : délai moyen constaté].
            </li>
          </ul>
        </div>
      </section>

      {/* H2 #5 — Une urgence ou un devis ? */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "640px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Une urgence ou un devis ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.08rem", marginBottom: "28px", lineHeight: 1.7 }}>
            Appelez-moi directement au 06 50 57 96 20 (24h/24 et 7j/7) ou demandez votre devis gratuit en ligne.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
              <Phone size={16} /> Appeler Nino · {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-ghost">
              Demander un devis gratuit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
