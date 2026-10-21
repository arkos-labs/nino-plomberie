import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowUpRight, Phone, Clock } from "lucide-react"
import { blogArticles } from "../data/blog-articles"
import { PageHero } from "../components/PageHero"
import { formatDate } from "../lib/utils"
import { SITE_URL, BUSINESS, pageHead, ldScript, breadcrumbJsonLd } from "../lib/site"

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageHead({
      title: "Blog plomberie Toulouse : conseils | Nino Plomberie",
      description:
        "Fuite d'eau, dégât des eaux en appartement, échoppe à rénover, chauffe-eau, chauffage : les conseils de Nino Plomberie pour les habitants de Toulouse et de la Haute-Garonne.",
      path: "/blog",
    }),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Blog Nino Plomberie",
        url: `${SITE_URL}/blog`,
        blogPost: blogArticles.map((a) => ({
          "@type": "BlogPosting",
          headline: a.title,
          url: `${SITE_URL}/blog/${a.slug}`,
          datePublished: a.publishedAt,
        })),
      }),
      ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Blog", path: "/blog" }])),
    ],
  }),
  component: BlogIndex,
})

function BlogIndex() {
  const articles = [...blogArticles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>
      <PageHero
        kicker="Plombier Toulouse · Conseils · Urgences"
        title={<>Conseils plomberie à <em>Toulouse</em></>}
        lead="Appartement en copropriété, échoppe ancienne ou maison de la métropole : des conseils concrets pour entretenir vos installations et savoir quoi faire en cas d'urgence."
        actions={
          <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
            <Phone size={18} />
            Urgence 24h/24
          </a>
        }
        image="/realisations/photo-09.jpg"
      />

      <section style={{ padding: "72px 0 80px" }}>
        <div className="section-container" style={{ maxWidth: "1140px" }}>
          <div style={{ marginBottom: "32px" }}>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>Derniers articles</h2>
            <p className="section-subtitle">
              Plomberie et chauffage expliqués simplement, par un artisan qui intervient à{" "}
              <Link to="/intervention/$ville" params={{ ville: "toulouse" }}>Toulouse</Link> et en Haute-Garonne.
            </p>
          </div>
          <div className="feature-grid">
            {articles.map((a) => (
              <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-card-tag">{a.category}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="blog-card-meta">
                  {formatDate(a.publishedAt)} · <Clock size={13} aria-hidden="true" /> {a.readTime} min
                </span>
                <span className="feature-card-btn">Lire l'article <ArrowUpRight size={14} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .blog-card-meta { display: inline-flex; align-items: center; gap: 6px; font-size: 0.85rem; color: var(--gray-500); margin-top: auto; }
      `}</style>
    </div>
  )
}
