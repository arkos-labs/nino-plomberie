import { createFileRoute, notFound } from '@tanstack/react-router'
import { localities } from '../../data/localities'
import { pageHead } from '../../lib/site'

export const Route = createFileRoute('/localites/')({
  // Pages de zone retirées : seules les 50 pages /intervention/$ville existent
  beforeLoad: () => { throw notFound() },
  head: () => {
    const head = pageHead({
      title: "Plombier Muret & Toulouse - Zones d'intervention | Nino Plomberie",
      description: "Nino Plomberie intervient à Muret, Toulouse et dans de nombreuses communes de Haute-Garonne. Trouvez votre zone d'intervention.",
      path: "/localites",
    })
    // Contenu à valider avec Nino avant indexation
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex, follow" }] }
  },
  component: LocalitesIndex,
})

function LocalitesIndex() {
  // Grouper les localités par région
  const muret = localities.filter((l) => l.region === "Haute-Garonne" && l.slug === "muret")
  const toulouse = localities.filter((l) => l.region === "Haute-Garonne" && l.slug === "toulouse")
  const toulouseQuartiers = localities.filter((l) => l.region === "Toulouse")
  const other = localities.filter(
    (l) => l.region === "Haute-Garonne" && l.slug !== "muret" && l.slug !== "toulouse"
  )

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-gray-600">
          <a href="/" className="hover:underline">Accueil</a>
          <span className="mx-2">/</span>
          <span className="font-semibold">Localités</span>
        </nav>

        {/* Titre */}
        <h1 className="text-4xl font-bold mb-2">Zones d'intervention Nino Plomberie</h1>
        <p className="text-xl text-gray-700 mb-8">
          Nino Plomberie intervient à Muret, Toulouse et dans 20+ communes de Haute-Garonne.
          Cliquez sur votre localité pour connaître le délai et demander un devis.
        </p>

        {/* Muret */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Muret (Siège)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {muret.map((loc) => (
              <LocalityCard key={loc.slug} locality={loc} />
            ))}
          </div>
        </section>

        {/* Toulouse */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">Toulouse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {toulouse.map((loc) => (
              <LocalityCard key={loc.slug} locality={loc} />
            ))}
          </div>

          {/* Toulouse Quartiers */}
          <div className="ml-4 border-l-4 border-purple-300 pl-4">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Quartiers de Toulouse</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {toulouseQuartiers.map((loc) => (
                <LocalityCard key={loc.slug} locality={loc} />
              ))}
            </div>
          </div>
        </section>

        {/* Autres communes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-green-600">Communes voisines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {other.map((loc) => (
              <LocalityCard key={loc.slug} locality={loc} />
            ))}
          </div>
        </section>

        {/* Info générale */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Nino Plomberie</h2>
          <p className="text-gray-700 mb-4">
            Plombier artisan à Muret depuis plus de 20 ans. Nous intervenons 24h/24 et 7j/7
            pour tous types de dépannage plomberie:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Fuite d'eau et détection</li>
            <li>Débouchage urgence</li>
            <li>Chauffe-eau et cumulus</li>
            <li>Chauffage et radiateurs</li>
            <li>Rénovation salle de bain</li>
            <li>Installation plomberie neuve</li>
          </ul>
          <p className="text-gray-700 font-semibold">
            ✅ Devis gratuit • ✅ Garantie 2 ans • ✅ 4,4/5 sur 79 avis
          </p>
        </div>
      </div>
    </>
  )
}

interface LocalityCardProps {
  locality: typeof localities[0]
}

function LocalityCard({ locality }: LocalityCardProps) {
  return (
    <a
      href={`/localites/${locality.slug}`}
      className="block p-4 border border-gray-300 rounded-lg hover:shadow-lg hover:border-blue-500 transition"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-2">{locality.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{locality.region}</p>
      <p className="text-sm text-blue-600 font-semibold">⏱️ {locality.intervensionTime}</p>
    </a>
  )
}
