// src/routes/services.$slug.tsx — v3 (Pro Design)
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { getServiceBySlug, services } from "../data/services"
import {
  Phone, CheckCircle2, ChevronRight, ChevronDown,
  Droplets, Flame, Wind, Wrench, Bath, Building2,
  ArrowRight, Shield, Star, Clock, Zap, Calendar
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
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--ink-950)", marginBottom: "16px" }}>Service introuvable</h1>
      <Link to="/services/" className="btn-secondary">
        ← Voir tous les services
      </Link>
    </div>
  ),
})

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Droplets, Flame, Wind, Wrench, Bath, Building2,
}
const accentMap: Record<string, string> = {
  "fuite-d-eau":                  "var(--brand-400)",
  "chauffe-eau":                  "var(--brand-400)",
  "debouchage":                   "var(--brand-400)",
  "remplacement-robinetterie":    "var(--brand-400)",
  "renovation-salle-de-bain":     "var(--brand-400)",
  "installation-plomberie-neuve": "var(--brand-400)",
}

function ServiceDetailPage() {
  const { service } = Route.useLoaderData()
  const [openFaq, setOpenFaq]   = useState<number | null>(null)

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const Icon    = iconMap[service.icon] ?? Wrench
  const accent  = accentMap[service.slug] ?? "var(--brand-400)"

  return (
    <div style={{ background: "var(--sand-50)" }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)",
        paddingTop: "64px",
        paddingBottom: "80px",
      }}>
        <div className="section-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--cta-500)", color: "#fff",
            borderRadius: "999px", padding: "5px 18px",
            fontSize: "0.82rem", fontWeight: 700,
            letterSpacing: "0.05em", textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            {service.urgence ? (
              <>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff", display: "inline-block" }} />
                Urgence 24h/7j — Toulouse (31)
              </>
            ) : (
              <>
                <Zap size={13} />
                Toulouse &amp; Haute-Garonne (31)
              </>
            )}
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            color: "#fff",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>
            <span style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #FDE68A, #FB923C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {service.titre}
            </span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 36px",
          }}>
            {service.sousTitre ? service.sousTitre : service.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a href="tel:0650579620" className="btn-cta" style={{ fontSize: "1rem", padding: "14px 28px", borderRadius: "10px", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <Phone size={18} />
              Appeler Nino - 06 50 57 96 20
            </a>
            <Link to="/rendez-vous" className="btn-ghost" style={{ fontSize: "1rem", padding: "14px 28px", borderRadius: "10px", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Calendar size={18} />
              Prendre Rendez-vous
            </Link>
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
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--ink-950)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ display: "inline-block", width: "3px", height: "18px", background: accent, borderRadius: "2px" }} />
                  Ce qui est inclus
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
                  {service.details.map((d) => (
                    <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 14px", background: "#f8fafc", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                      <CheckCircle2 size={15} color={accent} style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "#334155", fontSize: "0.92rem", lineHeight: 1.7 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu SEO */}
              {service.seoContent && service.seoContent.length > 0 && (
                <div style={{ background: "white", borderRadius: "16px", padding: "36px", marginBottom: "24px" }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem", color: "var(--ink-950)", marginBottom: "16px" }}>
                    Notre expertise : {service.titre} à Toulouse
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {service.seoContent.map((paragraphe, idx) => (
                      <p key={idx} style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.7 }}>
                        {paragraphe}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Réalisations */}
              {service.realisations && service.realisations.length > 0 && (
                <div style={{ background: "white", borderRadius: "16px", padding: "36px", marginBottom: "24px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--ink-950)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ display: "inline-block", width: "3px", height: "18px", background: accent, borderRadius: "2px" }} />
                    Dernières interventions
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
                    {service.realisations.map((rea, idx) => (
                      <div key={idx} style={{ borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden", background: "#f8fafc" }}>
                        <div style={{ height: "140px", background: "var(--sand-50)", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #e2e8f0" }}>
                          {/* Espace pour l'image */}
                          <span style={{ color: "#94a3b8", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>Photo de chantier</span>
                        </div>
                        <div style={{ padding: "16px" }}>
                          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: accent, marginBottom: "4px" }}>{rea.lieu}</div>
                          <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>{rea.titre}</h4>
                          <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5 }}>{rea.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              {service.faq.length > 0 && (
                <div style={{ background: "white", borderRadius: "16px", padding: "36px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--ink-950)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
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
                          <span style={{ fontWeight: 600, color: "#1e293b", fontSize: "1rem", lineHeight: 1.5 }}>{item.question}</span>
                          <ChevronDown size={16} color="#94a3b8" style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s" }} />
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: "0 20px 18px", color: "#64748b", fontSize: "1rem", lineHeight: 1.7, borderTop: "1px solid #f1f5f9" }}>
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
                <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.7, marginBottom: "22px" }}>{service.prix}</p>

                <a href="tel:0650579620" className="btn-cta"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", padding: "13px", borderRadius: "10px", textDecoration: "none", marginBottom: "10px", boxSizing: "border-box" }}
                >
                  <Phone size={16} /> 06 50 57 96 20
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
              <div style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 60%, var(--brand-400) 100%)", borderRadius: "16px", padding: "24px" }}>
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
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--ink-950)", marginBottom: "24px" }}>
            Autres prestations
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
            {related.map((s) => {
              const RI = iconMap[s.icon] ?? Wrench
              const ra = accentMap[s.slug] ?? "var(--brand-400)"
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
