import { createFileRoute, notFound } from '@tanstack/react-router'
import { getServiceBySlug, services } from '../../../data/services'
import { getLocalityBySlug } from '../../../data/localities'
import { pageHead } from '../../../lib/site'

export const Route = createFileRoute('/services/$service/$locality')({
  // Pages de zone retirées : seules les 50 pages /intervention/$ville existent
  beforeLoad: () => { throw notFound() },
  head: ({ params }) => {
    const service = getServiceBySlug(params.service)
    const locality = getLocalityBySlug(params.locality)
    if (!service || !locality) return {}
    return pageHead({
      title: `${service.titre} à ${locality.name} | Nino Plomberie`,
      description: `${service.titre} à ${locality.name} par Nino Plomberie, plombier à Muret. Devis gratuit, intervention 24h/24.`,
      path: `/services/${params.service}/${params.locality}`,
    })
  },
  component: ServiceLocalityDetail,
})

function ServiceLocalityDetail() {
  const { service: serviceSlug, locality: localitySlug } = Route.useParams()
  const service = getServiceBySlug(serviceSlug)
  const locality = getLocalityBySlug(localitySlug)

  if (!service || !locality) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Page non trouvée</h1>
        <p>Retour à <a href="/services" className="text-blue-600">services</a></p>
      </div>
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-gray-600">
          <a href="/" className="hover:underline">Accueil</a>
          <span className="mx-2">/</span>
          <a href="/services" className="hover:underline">Services</a>
          <span className="mx-2">/</span>
          <a href={`/services/${serviceSlug}`} className="hover:underline">{service.titre}</a>
          <span className="mx-2">/</span>
          <a href={`/localites/${localitySlug}`} className="hover:underline">{locality.name}</a>
        </nav>

        {/* Titre */}
        <h1 className="text-4xl font-bold mb-2">{service.titre} à {locality.name}</h1>
        <p className="text-xl text-gray-700 mb-4">{locality.region}</p>

        {/* Intro localisée */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
          <p className="text-lg text-gray-800">
            {service.description} à {locality.name}. Nino Plomberie intervient dans {locality.name}
            avec délai estimé <strong>{locality.intervensionTime}</strong>.
          </p>
        </div>

        {/* Description service */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{service.titre} — Comment ça marche</h2>
          <p className="text-gray-700 mb-4">{service.description}</p>

          {/* Détails service */}
          <h3 className="text-xl font-bold mb-3">Services détails</h3>
          <ul className="space-y-2 mb-6">
            {service.details.map((detail, i) => (
              <li key={i} className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spécificités localité */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">À {locality.name}</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Délai d'intervention:</strong> {locality.intervensionTime}
            </p>
            <p>
              <strong>Services disponibles:</strong> {locality.servicesFocus.map((s) => s.replace(/-/g, ' ')).join(', ')}
            </p>
            <p>
              <strong>Disponibilité:</strong> 24h/24 et 7j/7, y compris week-ends et jours fériés
            </p>
            <p>
              <strong>Tarif:</strong> {service.prix}
            </p>
          </div>
        </div>

        {/* FAQs localité */}
        {locality.faqTop && locality.faqTop.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Questions fréquentes — {locality.name}</h2>
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

        {/* CTA */}
        <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Besoin de {service.titre.toLowerCase()} à {locality.name}?</h2>
          <p className="mb-4">Devis gratuit. Garantie 2 ans. Intervention rapide.</p>
          <div className="space-y-2">
            <a
              href={`tel:+33650579620`}
              className="block bg-white text-blue-600 font-bold py-3 px-4 rounded text-center hover:bg-gray-100 transition"
            >
              📞 06 50 57 96 20
            </a>
            <a
              href="/contact"
              className="block bg-gray-700 text-white font-bold py-3 px-4 rounded text-center hover:bg-gray-800 transition"
            >
              ✉️ Demander un devis
            </a>
          </div>
        </div>

        {/* Liens vers autres services */}
        <div className="border-t pt-8">
          <h2 className="text-xl font-bold mb-4">Autres services à {locality.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services
              .filter((s) => s.slug !== serviceSlug)
              .map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}/${localitySlug}`}
                  className="block p-3 border border-gray-300 rounded hover:shadow-lg hover:border-blue-500 transition"
                >
                  <p className="font-semibold text-gray-800">{s.titre}</p>
                  <p className="text-sm text-gray-600">{s.sousTitre}</p>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
