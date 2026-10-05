// src/routes/sitemap[.]xml.ts — sitemap XML généré à partir des pages, services et communes
import { createFileRoute } from "@tanstack/react-router"
import { communes } from "../data/communes"
import { services } from "../data/services"
import { SITE_URL } from "../lib/site"

// Dates de dernière modification réelles (à mettre à jour quand le contenu change), pas la date du build
const LASTMOD = {
  home: "2026-10-05",
  pages: "2026-10-05",
  services: "2026-10-04",
  communes: "2026-10-05",
}

function url(loc: string, lastmod: string, priority = "0.5", changefreq = "monthly") {
  return `
  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const pages = [
          url("/", LASTMOD.home, "1.0", "weekly"),
          url("/services", LASTMOD.pages, "0.9", "weekly"),
          url("/realisations", LASTMOD.pages, "0.8"),
          url("/tarifs", LASTMOD.pages, "0.8"),
          url("/zones", LASTMOD.pages, "0.7"),
          url("/a-propos", LASTMOD.pages, "0.7"),
          url("/contact", LASTMOD.pages, "0.7"),
          url("/rendez-vous", LASTMOD.pages, "0.6"),
          ...services.map((s) => url(`/services/${s.slug}`, LASTMOD.services, "0.85")),
          ...communes.map((c) => url(`/intervention/${c.slug}`, LASTMOD.communes, "0.6")),
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
