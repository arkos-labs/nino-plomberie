import { createFileRoute, notFound } from '@tanstack/react-router'
import { getLocalityBySlug } from '../../data/localities'
import { pageHead } from '../../lib/site'

export const Route = createFileRoute('/localites/$slug')({
  // Pages de zone retirées : seules les 50 pages /intervention/$ville existent
  beforeLoad: () => { throw notFound() },
  head: ({ params }) => {
    const locality = getLocalityBySlug(params.slug)
    if (!locality) return {}
    const head = pageHead({
      title: `Plombier ${locality.name} | Nino Plomberie`,
      description: locality.description,
      path: `/localites/${params.slug}`,
    })
    // Contenu à valider avec Nino avant indexation (délais et FAQ non vérifiés)
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex, follow" }] }
  },
  loader: ({ params }) => {
    const locality = getLocalityBySlug(params.slug)
    if (!locality) throw notFound()
    return { locality }
  },
  component: LocaliteDetail,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Localité non trouvée</h1>
      <p>Retour à la <a href="/zones" className="text-blue-600">liste des zones</a></p>
    </div>
  ),
})

function LocaliteDetail() {
  const { locality } = Route.useLoaderData()

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-gray-600">
          <a href="/" className="hover:underline">Accueil</a>
          <span className="mx-2">/</span>
          <a href="/zones" className="hover:underline">Localités</a>
          <span className="mx-2">/</span>
          <span className="font-semibold">{locality.name}</span>
        </nav>

        {/* Titre */}
        <h1 className="text-4xl font-bold mb-2">Plombier {locality.name}</h1>
        <p className="text-xl text-gray-700 mb-4">{locality.region}</p>
        <p className="text-lg text-gray-600 mb-8">{locality.description}</p>

        {/* Délai intervention */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
          <h2 className="font-bold text-lg mb-2">⏱️ Délai d'intervention</h2>
          <p className="text-gray-800">{locality.intervensionTime}</p>
        </div>

        {/* Services disponibles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Services disponibles</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {locality.servicesFocus.map((service) => (
              <li key={service} className="flex items-center text-gray-700">
                <span className="text-blue-600 mr-3">✓</span>
                {service.replace(/-/g, ' ')}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold mb-4">Besoin d'un plombier à {locality.name} ?</p>
          <div className="space-y-2">
            <a
              href="tel:+33650579620"
              className="block bg-blue-600 text-white font-bold py-3 px-4 rounded text-center hover:bg-blue-700 transition"
            >
              📞 06 50 57 96 20
            </a>
            <a
              href="/contact"
              className="block bg-gray-600 text-white font-bold py-3 px-4 rounded text-center hover:bg-gray-700 transition"
            >
              ✉️ Demander un devis
            </a>
          </div>
        </div>

        {/* FAQ */}
        {locality.faqTop && locality.faqTop.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes - {locality.name}</h2>
            <div className="space-y-4">
              {locality.faqTop.map((faq, i) => (
                <details key={i} className="border border-gray-300 p-4 rounded">
                  <summary className="font-semibold cursor-pointer text-gray-800">
                    {faq.q}
                  </summary>
                  <p className="text-gray-700 mt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Info générale */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Nino Plomberie</h2>
          <p className="text-gray-700 mb-4">
            Plombier artisan à Muret depuis plus de 20 ans. Intervention d'urgence 24h/24 et 7j/7
            pour tous types de dépannage plomberie: fuite d'eau, débouchage, chauffe-eau, chauffage,
            rénovation salle de bain et cuisine.
          </p>
          <p className="text-gray-700">
            Devis gratuit. Garantie 2 ans pièces et main-d'œuvre. 4,4/5 sur 78 avis clients vérifiés.
          </p>
        </div>
      </div>
    </>
  )
}
