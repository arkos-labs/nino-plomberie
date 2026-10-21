import { createFileRoute, Link } from '@tanstack/react-router'
import { blogArticles } from '#/data/blog-articles'
import { formatDate } from '#/lib/utils'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: 'Blog Plomberie - Conseils & Actualités - Nino Plomberie' },
      {
        name: 'description',
        content:
          'Conseils plomberie, maintenance, dépannage d\'urgence. Articles pratiques de Nino Plomberie à Muret',
      },
      { name: 'og:title', content: 'Blog - Nino Plomberie' },
      {
        name: 'og:description',
        content: 'Conseils et articles pratiques de plomberie',
      },
    ],
  }),
})

const categories = [
  { id: 'conseils', label: 'Conseils', icon: '💡' },
  { id: 'maintenance', label: 'Maintenance', icon: '🔧' },
  { id: 'urgence', label: 'Urgences', icon: '🚨' },
  { id: 'actualites', label: 'Actualités', icon: '📰' },
]

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Plomberie</h1>
          <p className="text-blue-100 text-lg">
            Conseils pratiques, maintenance et urgences plomberie. Des articles
            pour comprendre et entretenir vos installations à Muret et région
            toulousaine.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles
            .sort(
              (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            .map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              >
                {/* Image */}
                {article.image && (
                  <div className="h-48 bg-gradient-to-br from-blue-300 to-blue-500 relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {categories.find((c) => c.id === article.category)
                        ?.label || article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-700 transition">
                    <Link to="/blog/$slug" params={{ slug: article.slug }}>
                      {article.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-4">
                    <span>{formatDate(article.publishedAt)}</span>
                    <span>{article.readTime} min de lecture</span>
                  </div>

                  {/* Read More Link */}
                  <Link
                    to="/blog/$slug"
                    params={{ slug: article.slug }}
                    className="inline-block mt-4 text-blue-700 font-semibold hover:text-blue-900 transition"
                  >
                    Lire l'article →
                  </Link>
                </div>
              </article>
            ))}
        </div>

        {blogArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun article pour le moment. Revenez bientôt !
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-12 px-4 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'une intervention rapide ?
          </h2>
          <p className="text-blue-100 mb-6">
            Nos plombiers sont disponibles 24h/24 pour vos urgences à Muret et
            région toulousaine.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  )
}
