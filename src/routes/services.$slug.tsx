// src/routes/services.$slug.tsx — v3 (Pro Design)
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { getServiceBySlug, services } from "../data/services"
import {
  Phone, CheckCircle2, ChevronRight, ChevronDown,
  Droplets, Flame, Wind, Wrench, Bath, Building2,
  ArrowRight, Shield, Star, Clock, Zap,
} from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug)
    if (!service) return { meta: [{ title: "Service introuvable" }] }
    const metaDesc = service.metaDescription ?? `${service.titre} à Toulouse et Haute-Garonne — Nino Plomberie 31. Artisan qualifié, ${service.urgence ? "urgence 24h/7j, " : ""}devis gratuit. ☎ 06 50 57 96 20`
    return {
      meta: [
        { title: `Plombier ${service.titre} Toulouse | Nino Plomberie 31` },
        { name: "description", content: metaDesc },
      ],
      links: [
        { rel: "canonical", href: `https://ninoplomberie31.fr/services/${params.slug}` },
      ],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.titre} à Toulouse`,
          description: service.description,
          url: `https://ninoplomberie31.fr/services/${params.slug}`,
          provider: {
            "@type": "LocalBusiness",
            name: "Nino Plomberie 31",
            telephone: "+33650579620",
            address: { "@type": "PostalAddress", addressLocality: "Toulouse", postalCode: "31000", addressCountry: "FR" },
          },
          areaServed: ["Toulouse", "Colomiers", "Blagnac", "Tournefeuille", "Muret"].map(n => ({ "@type": "City", name: n })),
        }),
      }],
    }
  },
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug)
    if (!service) throw notFound()
    return { service }
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div style={{ padding: "80px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Outfit, sans-serif", color: "#0f2040", marginBottom: "16px" }}>Service introuvable</h1>
      <Link to="/services/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f97316", color: "white", padding: "12px 24px", borderRadius: "10px", textDecoration: "none", fontWeight: 600 }}>
        ← Voir tous les services
      </Link>
    </div>
  ),
})

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Droplets, Flame, Wind, Wrench, Bath, Building2,
}
const accentMap: Record<string, string> = {
  "fuite-d-eau":                  "#3b82f6",
  "chauffe-eau":                  "#f97316",
  "debouchage":                   "#8b5cf6",
  "remplacement-robinetterie":    "#10b981",
  "renovation-salle-de-bain":     "#ec4899",
  "installation-plomberie-neuve": "#06b6d4",
}

function ServiceDetailPage() {
  const { service } = Route.useLoaderData()
  const [openFaq, setOpenFaq]   = useState<number | null>(null)

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const Icon    = iconMap[service.icon] ?? Wrench
  const accent  = accentMap[service.slug] ?? "#f97316"

  return (
    <div style={{ background: "#f8f7f5" }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "#0d1f1f", padding: "72px 0 64px" }}>
        <div className="section-container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Badges */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "22px" }}>
              {service.urgence && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: "999px", padding: "4px 12px", fontSize: "0.7rem", fontWeight: 700, color: "#fca5a5", letterSpacing: "0.07em", textTransform: "uppercase" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f87171", animation: "hpulse 1.5s ease-in-out infinite" }} />
                  Urgence 24h/7j
                </span>
              )}
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "4px 12px", fontSize: "0.7rem", color: "rgba(255,255,255,0.55)" }}>
                <Zap size={10} />
                Toulouse &amp; Haute-Garonne (31)
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "20px" }}>
              {service.titre}
            </h1>
            
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", fontWeight: 500, marginBottom: "12px" }}>
              {service.sousTitre}
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "700px", marginBottom: "36px" }}>
              {service.description}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="tel:0650579620"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#f97316", color: "white", fontWeight: 700, fontSize: "0.95rem", padding: "14px 28px", borderRadius: "10px", textDecoration: "none", border: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ea6f0b" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f97316" }}
              >
                <Phone size={17} />
                Appeler maintenant
              </a>
              <Link
                to="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "0.95rem", padding: "14px 24px", borderRadius: "10px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.13)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.13)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)" }}
              >
                Devis gratuit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contenu principal ────────────────────────────────────────────── */}
      <section style={{ padding: "64px 0 72px" }}>
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          <div className="svc-layout" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "start" }}>

            {/* ── Colonne principale ── */}
            <div>

              {/* Ce qui est inclus */}
              <div style={{ background: "white", borderRadius: "16px", padding: "36px", marginBottom: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 700, fontSize: "1rem", color: "#0f1923", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ display: "inline-block", width: "3px", height: "18px", background: accent, borderRadius: "2px" }} />
                  Ce qui est inclus
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
                  {service.details.map((d) => (
                    <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 14px", background: "#f8fafc", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                      <CheckCircle2 size={15} color={accent} style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "#334155", fontSize: "0.83rem", lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {service.faq.length > 0 && (
                <div style={{ background: "white", borderRadius: "16px", padding: "36px" }}>
                  <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 700, fontSize: "1rem", color: "#0f1923", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ display: "inline-block", width: "3px", height: "18px", background: accent, borderRadius: "2px" }} />
                    Questions fréquentes
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {service.faq.map((item, i) => (
                      <div
                        key={i}
                        style={{ borderRadius: "12px", border: `1px solid ${openFaq === i ? `${accent}30` : "#f1f5f9"}`, overflow: "hidden", transition: "border-color 0.2s" }}
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{ width: "100%", padding: "18px 20px", background: openFaq === i ? `${accent}08` : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", textAlign: "left", transition: "background 0.2s" }}
                        >
                          <span style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.88rem", lineHeight: 1.4 }}>{item.question}</span>
                          <ChevronDown size={16} color="#94a3b8" style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s" }} />
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: "0 20px 18px", color: "#64748b", fontSize: "0.86rem", lineHeight: 1.75, borderTop: "1px solid #f1f5f9" }}>
                            <div style={{ paddingTop: "14px" }}>{item.reponse}</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "sticky", top: "24px" }}>

              {/* Tarif */}
              <div style={{ background: "white", borderRadius: "16px", padding: "28px", border: `1px solid ${accent}22` }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: accent, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                  Tarification
                </div>
                <p style={{ color: "#334155", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "22px" }}>{service.prix}</p>

                <a
                  href="tel:0650579620"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", background: "#f97316", color: "white", fontWeight: 700, fontSize: "0.92rem", padding: "13px", borderRadius: "10px", textDecoration: "none", marginBottom: "10px", boxSizing: "border-box" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ea6f0b" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f97316" }}
                >
                  <Phone size={16} /> Appeler Nino
                </a>
                <Link
                  to="/contact"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", background: "#f8fafc", color: "#334155", fontWeight: 600, fontSize: "0.88rem", padding: "12px", borderRadius: "10px", textDecoration: "none", border: "1px solid #e2e8f0", boxSizing: "border-box" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#f1f5f9" }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#f8fafc" }}
                >
                  Devis gratuit <ArrowRight size={13} />
                </Link>
              </div>

              {/* Garanties */}
              <div style={{ background: "#0d1f1f", borderRadius: "16px", padding: "24px" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                  Nos engagements
                </div>
                {[
                  { icon: Shield,        text: "Artisan certifié RGE Qualibat"   },
                  { icon: CheckCircle2,  text: "Garantie 2 ans main-d'œuvre"     },
                  { icon: Star,          text: "Devis écrit avant tout travaux"   },
                  { icon: Clock,         text: "Déplacement gratuit dans le 31"   },
                ].map(({ icon: I, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <I size={14} color={accent} style={{ flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem" }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Note Google */}
              <div style={{ background: "white", borderRadius: "16px", padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px", border: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#eab308" color="#eab308" />)}
                </div>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1e293b" }}>4.9 / 5</div>
                  <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: "1px" }}>sur 120+ avis Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Autres services ──────────────────────────────────────────────── */}
      <section style={{ background: "white", padding: "56px 0 64px", borderTop: "1px solid #f1f5f9" }}>
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 700, fontSize: "1.1rem", color: "#0f1923", marginBottom: "24px" }}>
            Autres prestations
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
            {related.map((s) => {
              const RI = iconMap[s.icon] ?? Wrench
              const ra = accentMap[s.slug] ?? "#f97316"
              return (
                <Link
                  key={s.slug}
                  to={"/services/$slug"}
                  params={{ slug: s.slug }}
                  style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", background: "#f8fafc", borderRadius: "12px", border: "1px solid #f1f5f9", transition: "border-color 0.15s, background 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${ra}40`; e.currentTarget.style.background = `${ra}06` }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.background = "#f8fafc" }}
                >
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${ra}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <RI size={15} color={ra} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize: "0.83rem", fontWeight: 600, color: "#334155", lineHeight: 1.3 }}>{s.titre}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .svc-layout { grid-template-columns: 1fr !important; }
        }
        @keyframes hpulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
