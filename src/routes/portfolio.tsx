import { createFileRoute } from '@tanstack/react-router'
import { portfolioProjects } from '../data/portfolio'
import { pageHead } from '../lib/site'

export const Route = createFileRoute('/portfolio')({
  head: () =>
    pageHead({
      title: "Portfolio rénovation salle de bain | Nino Plomberie",
      description: "Avant/après rénovation salle de bain à Toulouse et Muret par Nino Plomberie. Douche à l'italienne, WC suspendu, carrelage.",
      path: "/portfolio",
    }),
  component: PortfolioPage,
})

function PortfolioPage() {
  // Grouper par catégorie
  const salledeBain = portfolioProjects.filter((p) => p.category === 'salle-de-bain')
  const fuitEau = portfolioProjects.filter((p) => p.category === 'fuite-d-eau')
  const cuisine = portfolioProjects.filter((p) => p.category === 'cuisine')

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-gray-600">
          <a href="/" className="hover:underline">Accueil</a>
          <span className="mx-2">/</span>
          <span className="font-semibold">Portfolio</span>
        </nav>

        {/* Titre */}
        <h1 className="text-4xl font-bold mb-2">Portfolio rénovation</h1>
        <p className="text-xl text-gray-700 mb-8">
          Découvrez nos réalisations en salle de bain, cuisine et dépannage plomberie à Toulouse et Muret.
        </p>

        {/* Salle de bain */}
        {salledeBain.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">Rénovation salle de bain</h2>
            <div className="space-y-12">
              {salledeBain.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Fuite d'eau */}
        {fuitEau.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-red-600">Dépannage fuite d'eau</h2>
            <div className="space-y-12">
              {fuitEau.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Cuisine */}
        {cuisine.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-green-600">Pose cuisine</h2>
            <div className="space-y-12">
              {cuisine.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-4">Votre projet ressemble à l'un des nôtres?</h2>
          <p className="text-gray-700 mb-4">
            Contactez Nino Plomberie pour un devis gratuit. Nous adaptons le travail à votre budget et vos besoins.
          </p>
          <div className="space-y-2">
            <a
              href="tel:+33650579620"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition mr-4"
            >
              📞 06 50 57 96 20
            </a>
            <a
              href="/contact"
              className="inline-block bg-gray-600 text-white font-bold py-3 px-6 rounded hover:bg-gray-700 transition"
            >
              ✉️ Demander un devis
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

interface ProjectCardProps {
  project: typeof portfolioProjects[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      {/* Images avant/après */}
      <div className="grid grid-cols-2 gap-0 bg-gray-200">
        <div className="aspect-video bg-gray-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 font-semibold">Avant</p>
            <p className="text-sm text-gray-500">{project.imagesBefore}</p>
          </div>
        </div>
        <div className="aspect-video bg-gray-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 font-semibold">Après</p>
            <p className="text-sm text-gray-500">{project.imagesAfter}</p>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 rounded text-sm font-semibold text-white ${
            project.category === 'salle-de-bain' ? 'bg-blue-600' :
            project.category === 'fuite-d-eau' ? 'bg-red-600' :
            'bg-green-600'
          }`}>
            {project.category === 'salle-de-bain' ? 'Salle de bain' :
             project.category === 'fuite-d-eau' ? 'Fuite d\'eau' :
             'Cuisine'}
          </span>
          <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${
            project.complexity === 'simple' ? 'bg-green-100 text-green-800' :
            project.complexity === 'moyen' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {project.complexity === 'simple' ? 'Simple' :
             project.complexity === 'moyen' ? 'Moyen' :
             'Complexe'}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.location}</p>
        <p className="text-gray-700 mb-4">{project.description}</p>

        {/* Détails */}
        <div className="bg-gray-50 p-4 rounded mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 font-semibold">Durée</p>
              <p className="text-gray-800">{project.timeline}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">Matériaux</p>
              <ul className="text-sm text-gray-800 space-y-1">
                {project.materials.slice(0, 2).map((m, i) => (
                  <li key={i}>• {m}</li>
                ))}
                {project.materials.length > 2 && (
                  <li>• +{project.materials.length - 2} autres</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Témoignage */}
        {project.testimonial && (
          <div className="border-l-4 border-yellow-400 pl-4 italic text-gray-700">
            <p className="mb-2">"{project.testimonial.text}"</p>
            <p className="font-semibold text-gray-800">
              — {project.testimonial.client} {/* {project.testimonial.rating}⭐ */}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
