import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Phone, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"
import { blogArticles, getBlogArticle, type BlogArticle } from "../data/blog-articles"
import { PageHero } from "../components/PageHero"
import { formatDate } from "../lib/utils"
import { SITE_URL, BUSINESS, BUSINESS_ID, pageHead, ldScript, breadcrumbJsonLd } from "../lib/site"

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = getBlogArticle(params.slug)
    if (!article) return { meta: [{ title: "Article introuvable" }, { name: "robots", content: "noindex" }] }
    const path = `/blog/${article.slug}`
    const head = pageHead({ title: article.metaTitle, description: article.excerpt, path })
    return {
      ...head,
      meta: [...head.meta, { property: "og:type", content: "article" }],
      scripts: [
        ldScript({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt ?? article.publishedAt,
          mainEntityOfPage: `${SITE_URL}${path}`,
          inLanguage: "fr-FR",
          author: { "@id": BUSINESS_ID },
          publisher: { "@id": BUSINESS_ID },
        }),
        ldScript(breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: article.title, path },
        ])),
      ],
    }
  },
  loader: ({ params }): { article: BlogArticle } => {
    const article = getBlogArticle(params.slug)
    if (!article) throw notFound()
    return { article }
  },
  component: BlogArticlePage,
  notFoundComponent: () => (
    <div style={{ padding: "80px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--ink-950)", marginBottom: "16px" }}>Article introuvable</h1>
      <Link to="/blog" className="btn-cta">Retour au blog</Link>
    </div>
  ),
})

function BlogArticlePage() {
  const { article } = Route.useLoaderData() as { article: BlogArticle }
  const others = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <div style={{ background: "var(--sand-50)", minHeight: "100vh" }}>
      <PageHero
        breadcrumb={
          <nav className="blog-crumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/blog">Blog</Link>
          </nav>
        }
        kicker={`${article.category} · ${formatDate(article.publishedAt)} · ${article.readTime} min de lecture`}
        title={article.title}
        lead={article.excerpt}
        image="/realisations/photo-09.jpg"
      />

      <section style={{ padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "760px" }}>
          <article className="blog-body">
            <Markdown content={article.content} />
          </article>

          <aside className="blog-service">
            <p>Besoin d'un plombier à Toulouse ?</p>
            <div className="blog-service-links">
              <Link to="/services/$slug" params={{ slug: article.service.slug }}>
                Service {article.service.label} <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link to="/intervention/$ville" params={{ ville: "toulouse" }}>
                Plombier à Toulouse <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {others.length > 0 && (
        <section style={{ background: "white", padding: "64px 0" }}>
          <div className="section-container" style={{ maxWidth: "1140px" }}>
            <h2 className="section-title" style={{ marginBottom: "28px" }}>À lire aussi</h2>
            <div className="feature-grid">
              {others.map((a) => (
                <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="feature-card">
                  <div className="feature-card-top">
                    <span className="feature-card-tag">{a.category}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="feature-card-btn">Lire l'article <ArrowUpRight size={14} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)", padding: "64px 0" }}>
        <div className="section-container" style={{ maxWidth: "640px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Une urgence ou un devis ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", marginBottom: "32px", lineHeight: 1.7 }}>
            Nino Plomberie intervient à Toulouse, Muret et dans toute la Haute-Garonne. La ligne est ouverte 24h/24.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-ghost">
              Demander un devis <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .blog-crumb { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; margin-bottom: 14px; color: rgba(255,255,255,0.75); }
        .blog-crumb a { color: rgba(255,255,255,0.9); text-decoration: none; }
        .blog-crumb a:hover { text-decoration: underline; }
        .blog-body { background: white; border-radius: var(--radius-sm); padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); color: var(--ink-700); font-size: 1.05rem; line-height: 1.75; }
        .blog-body > :first-child { margin-top: 0; }
        .blog-body h2 { font-family: var(--font-display); font-weight: 800; font-size: 1.45rem; color: var(--ink-950); letter-spacing: -0.02em; margin: 36px 0 14px; }
        .blog-body p { margin: 0 0 16px; }
        .blog-body ul, .blog-body ol { margin: 0 0 20px; padding-left: 24px; }
        .blog-body ul { list-style: disc; }
        .blog-body ol { list-style: decimal; }
        .blog-body li { margin-bottom: 8px; padding-left: 4px; }
        .blog-body li::marker { color: var(--brand-600); font-weight: 700; }
        .blog-body strong { color: var(--ink-950); }
        .blog-service { margin-top: 24px; padding: 24px 28px; border-radius: var(--radius-sm); background: var(--sand-100); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .blog-service p { margin: 0; font-weight: 700; color: var(--ink-950); }
        .blog-service-links { display: flex; gap: 20px; flex-wrap: wrap; }
        .blog-service a { display: inline-flex; align-items: center; gap: 6px; color: var(--brand-600); font-weight: 700; text-decoration: none; }
        .blog-service a:hover { text-decoration: underline; }
        @media (max-width: 640px) { .blog-body { padding: 24px 20px; font-size: 1rem; } }
      `}</style>
    </div>
  )
}

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  )
}

function Markdown({ content }: { content: string }) {
  const blocks: ReactNode[] = []
  const lines = content.split("\n")
  let i = 0
  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={i}>{line.slice(3)}</h2>)
      i++
    } else if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line)
      const items: ReactNode[] = []
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i].trim())) {
        items.push(<li key={i}>{inline(lines[i].trim().replace(/^(- |\d+\. )/, ""))}</li>)
        i++
      }
      blocks.push(ordered ? <ol key={`l${i}`}>{items}</ol> : <ul key={`l${i}`}>{items}</ul>)
    } else {
      blocks.push(<p key={i}>{inline(line)}</p>)
      i++
    }
  }
  return <>{blocks}</>
}
