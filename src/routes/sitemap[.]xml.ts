// src/routes/sitemap[.]xml.ts — sitemap XML généré à partir des pages, services et communes
import { createFileRoute } from "@tanstack/react-router"
import { communes } from "../data/communes"
import { services } from "../data/services"
import { SITE_URL } from "../lib/site"

const TODAY = new Date().toISOString().split("T")[0]

function url(loc: string, priority = "0.5", changefreq = "monthly") {
  return `
  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const pages = [
          url("/", "1.0", "weekly"),
          url("/services", "0.9", "weekly"),
          url("/realisations", "0.8"),
          url("/tarifs", "0.8"),
          url("/zones", "0.7"),
          url("/a-propos", "0.7"),
          url("/contact", "0.7"),
          url("/rendez-vous", "0.6"),
          ...services.map((s) => url(`/services/${s.slug}`, "0.85")),
          ...communes.map((c) => url(`/intervention/${c.slug}`, "0.6")),
        ]

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.join("")}
</urlset>`

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        })
      },
    },
  },
})
