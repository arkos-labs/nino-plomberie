import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getBlogArticle, blogArticles, type BlogArticle } from '#/data/blog-articles'
import { formatDate } from '#/lib/utils'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogArticle,
  head: ({ params }) => {
    const article = getBlogArticle(params.slug)
    if (!article)
      return { meta: [{ title: 'Article non trouvé' }] }

    return {
      meta: [
        { title: `${article.title} - Blog Nino Plomberie` },
        {
          name: 'description',
          content: article.excerpt,
        },
        { name: 'og:title', content: article.title },
        { name: 'og:description', content: article.excerpt },
        {
          name: 'keywords',
          content: article.seoKeywords.join(', '),
        },
      ],
    }
  },
  loader: ({ params }): { article: BlogArticle } => {
    const article = getBlogArticle(params.slug)
    if (!article) {
      throw notFound()
    }
    return { article }
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Article non trouvé
        </h1>
        <p className="text-gray-600 mb-8">
          L'article que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Retour au blog
        </Link>
      </div>
    </div>
  ),
})

export default function BlogArticle() {
  const { article } = Route.useLoaderData() as { article: BlogArticle }

  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Link
            to="/blog"
            className="text-blue-100 hover:text-white transition mb-4 inline-block"
          >
            ← Retour au blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <span>{formatDate(article.publishedAt)}</span>
            <span>•</span>
            <span>{article.readTime} min de lecture</span>
            {article.updatedAt && (
              <>
                <span>•</span>
                <span>Mis à jour le {formatDate(article.updatedAt)}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-blue max-w-none">
          <MarkdownContent content={article.content} />
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              À propos de Nino Plomberie
            </h3>
            <p className="text-gray-700 mb-4">
              Artisan plombier-chauffagiste basé à Muret, nous intervenons sur
              toute la région toulousaine pour vos besoins en plomberie,
              chauffage et urgences 24h/24.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Keywords */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">
            Mots-clés
          </h3>
          <div className="flex flex-wrap gap-2">
            {article.seoKeywords.map((keyword: string) => (
              <span
                key={keyword}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-gray-50 mt-12 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relArticle) => (
                <Link
                  key={relArticle.id}
                  to="/blog/$slug"
                  params={{ slug: relArticle.slug }}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-gray-800 mb-2 hover:text-blue-700">
                    {relArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600">{relArticle.excerpt}</p>
                  <span className="text-xs text-gray-500 mt-4 block">
                    {formatDate(relArticle.publishedAt)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-12 px-4 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'une intervention ?</h2>
          <p className="text-blue-100 mb-6">
            Contactez-nous pour une intervention à Muret et région toulousaine.
            Disponibles 24h/24 pour les urgences.
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

interface MarkdownContentProps {
  content: string
}

function MarkdownContent({ content }: MarkdownContentProps) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (!line.trim()) {
      continue
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl font-bold text-gray-800 mt-8 mb-4"
        >
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-xl font-bold text-gray-700 mt-6 mb-3"
        >
          {line.replace('### ', '')}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      // Collect consecutive list items
      const listItems = []
      let j = i
      while (j < lines.length && lines[j].startsWith('- ')) {
        listItems.push(
          <li key={`li-${j}`} className="text-gray-700 ml-4">
            {lines[j].replace('- ', '')}
          </li>
        )
        j++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc ml-6 my-4">
          {listItems}
        </ul>
      )
      i = j - 1
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={`p-bold-${i}`} className="text-gray-700 my-4 font-semibold">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else {
      elements.push(
        <p key={`p-${i}`} className="text-gray-700 my-4 leading-relaxed">
          {parseInlineMarkdown(line)}
        </p>
      )
    }
  }

  return <>{elements}</>
}

function parseInlineMarkdown(text: string) {
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  const boldRegex = /\*\*(.*?)\*\*/g
  const italicRegex = /\*(.*?)\*/g
  const linkRegex = /\[(.*?)\]\((.*?)\)/g

  let match
  const matches: Array<{
    type: 'bold' | 'italic' | 'link'
    start: number
    end: number
    content: string
    href?: string
  }> = []

  while ((match = boldRegex.exec(text)) !== null) {
    matches.push({
      type: 'bold',
      start: match.index,
      end: match.index + match[0].length,
      content: match[1],
    })
  }

  while ((match = italicRegex.exec(text)) !== null) {
    matches.push({
      type: 'italic',
      start: match.index,
      end: match.index + match[0].length,
      content: match[1],
    })
  }

  while ((match = linkRegex.exec(text)) !== null) {
    matches.push({
      type: 'link',
      start: match.index,
      end: match.index + match[0].length,
      content: match[1],
      href: match[2],
    })
  }

  matches.sort((a, b) => a.start - b.start)

  for (const match of matches) {
    if (match.start > lastIndex) {
      parts.push(text.substring(lastIndex, match.start))
    }

    if (match.type === 'bold') {
      parts.push(
        <strong key={`${match.type}-${match.start}`}>{match.content}</strong>
      )
    } else if (match.type === 'italic') {
      parts.push(
        <em key={`${match.type}-${match.start}`}>{match.content}</em>
      )
    } else if (match.type === 'link' && match.href) {
      parts.push(
        <a
          key={`${match.type}-${match.start}`}
          href={match.href}
          className="text-blue-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match.content}
        </a>
      )
    }

    lastIndex = match.end
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}
