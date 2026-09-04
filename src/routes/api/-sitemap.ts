// src/routes/api/-sitemap.ts
// Génère le sitemap XML dynamiquement à partir des routes, services et communes
import { createAPIFileRoute } from "@tanstack/react-start/api"
import { communes } from "../../data/communes"
import { services } from "../../data/services"

const BASE_URL = "https://ninoplomberie31.fr"
const TODAY = new Date().toISOString().split("T")[0]

function url(
  loc: string,
  opts: { priority?: string; changefreq?: string; lastmod?: string } = {},
) {
  const { priority = "0.5", changefreq = "monthly", lastmod = TODAY } = opts
  return `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

export const Route = createAPIFileRoute("/api/sitemap")({
  GET: () => {
    const staticPages = [
      url("/",            { priority: "1.0", changefreq: "weekly" }),
      url("/services/",  { priority: "0.9", changefreq: "weekly" }),
      url("/a-propos",   { priority: "0.6", changefreq: "monthly" }),
      url("/contact",    { priority: "0.7", changefreq: "monthly" }),
    ]

    const servicePages = services.map((s) =>
      url(`/services/${s.slug}`, { priority: "0.85", changefreq: "monthly" }),
    )

    const villagePages = communes.map((c) =>
      url(`/intervention/${c.slug}`, { priority: "0.75", changefreq: "monthly" }),
    )

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...servicePages, ...villagePages].join("")}
</urlset>`

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
      },
    })
  },
})
