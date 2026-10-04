// src/routes/contact.tsx
import { createFileRoute, Link } from "@tanstack/react-router"
import { useState } from "react"
import { Phone, CheckCircle2, Loader2, Calendar, Clock, MapPin, Mail, ExternalLink, ClipboardList, ImagePlus, X } from "lucide-react"
import { FaqSection } from "../components/FaqSection"
import { SITE_URL, BUSINESS, BUSINESS_ID, pageHead, ldScript, breadcrumbJsonLd, type Faq } from "../lib/site"

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead({
      title: "Contact & devis gratuit — Nino Plomberie, plombier à Muret",
      description:
        "Contactez Nino Plomberie au 06 50 57 96 20, 24h/24 et 7j/7, ou demandez un devis gratuit en ligne avec photo. 11 Rue François Arago, 31600 Muret. Intervention à Toulouse et en Haute-Garonne.",
      path: "/contact",
    }),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${SITE_URL}/contact`,
        name: "Contacter Nino Plomberie",
        about: { "@id": BUSINESS_ID },
      }),
      ldScript(breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Contact", path: "/contact" }])),
    ],
  }),
  component: ContactPage,
})

const CONTACT_FAQ: Faq[] = [
  {
    q: "Comment joindre Nino Plomberie en urgence ?",
    a: "Appelez directement le 06 50 57 96 20 : la ligne est ouverte 24h/24 et 7j/7. Pour une urgence (fuite, dégât des eaux, WC bouché), le téléphone est plus rapide que le formulaire.",
  },
  {
    q: "Comment obtenir un devis gratuit ?",
    a: "Remplissez le formulaire de cette page en décrivant votre besoin et, si possible, joignez une photo. Nino vous recontacte pour préciser le projet. Le devis est gratuit et validé avec vous avant toute intervention.",
  },
  {
    q: "Quelles informations donner pour une demande de devis ?",
    a: "Indiquez votre commune, le type de problème ou de travaux, l'urgence de la situation et, si vous le pouvez, une photo de l'installation (fuite, robinet, chauffe-eau avec sa plaque signalétique, salle de bain à rénover).",
  },
  {
    q: "Où se trouve Nino Plomberie ?",
    a: "Nino Plomberie est situé au 11 Rue François Arago, 31600 Muret. Il s'agit de l'adresse de l'entreprise : Nino se déplace chez vous à Muret, à Toulouse et dans toute la Haute-Garonne.",
  },
]

const ETAPES = [
  {
    titre: "Vous décrivez votre besoin",
    texte: "Commune, type de problème ou de travaux, urgence de la situation et, si possible, une photo de l'installation.",
  },
  {
    titre: "Nino vous recontacte",
    texte: "Un échange pour préciser votre projet et répondre à vos questions.",
  },
  {
    titre: "Devis gratuit, validé avec vous",
    texte: "Le devis est gratuit et validé ensemble avant toute intervention.",
  },
]

const SUJETS = ["Fuite d'eau", "Débouchage", "Chauffe-eau", "Sanitaires & Robinetterie", "Rénovation / Autre"]

function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "", email: "", tel: "", sujet: SUJETS[0], message: "",
    photo: undefined as { filename: string; content: string } | undefined,
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [field]: e.target.value }))
  }

  const readPhoto = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) {
      setFormData((p) => ({ ...p, photo: undefined }))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const content = (reader.result as string).split(",")[1]
      if (content) setFormData((p) => ({ ...p, photo: { filename: file.name, content } }))
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Erreur serveur")
      setSent(true)
    } catch {
      setError("Impossible d'envoyer votre message. Appelez-nous directement.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="ct-page">
      <section className="ct-wrap">
        <div className="ct-blob ct-blob-a" aria-hidden="true" />
        <div className="ct-blob ct-blob-b" aria-hidden="true" />

        <div className="ct-grid">
          <div className="ct-band" aria-hidden="true" />

          {/* ── Intro (dans le bandeau) ── */}
          <div className="ct-intro">
            <span className="ct-kicker">Devis gratuit · Ligne ouverte 24h/24</span>
            <h1 className="ct-title">
              Contactez <span>Nino Plomberie</span>
            </h1>
            <p className="ct-lead">
              Une urgence ? Appelez directement, la ligne est ouverte 24h/24 et 7j/7.
            </p>
            <div className="ct-intro-actions">
              <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-cta">
                <Phone size={18} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <Link to="/rendez-vous" className="btn-ghost">
                <Calendar size={18} aria-hidden="true" />
                Prendre rendez-vous
              </Link>
            </div>
          </div>

          {/* ── En-tête de la carte formulaire ── */}
          <div className="ct-card-head">
            <div className="ct-card-icon"><ClipboardList size={24} aria-hidden="true" /></div>
            <p>
              Décrivez votre besoin en quelques mots : Nino vous recontacte et prépare votre <strong>devis gratuit</strong>.
            </p>
          </div>

          {/* ── Corps du formulaire ── */}
          <div className="ct-card-body">
            {sent ? (
              <div className="ct-success" role="status">
                <CheckCircle2 size={48} color="#15803d" aria-hidden="true" />
                <h2>Message envoyé avec succès !</h2>
                <p>Nino vous recontactera très rapidement. En cas d'urgence, appelez directement le {BUSINESS.phone}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-form">
                {error && <div className="ct-error" role="alert">{error}</div>}

                <div className="ct-row">
                  <label className="ct-field">
                    <span className="sr-only">Votre nom</span>
                    <input type="text" value={formData.nom} onChange={handleChange("nom")} placeholder="Votre nom *" autoComplete="name" required minLength={2} />
                  </label>
                  <label className="ct-field">
                    <span className="sr-only">Téléphone</span>
                    <input type="tel" value={formData.tel} onChange={handleChange("tel")} placeholder="Téléphone *" autoComplete="tel" required minLength={8} />
                  </label>
                </div>

                <div className="ct-row">
                  <label className="ct-field">
                    <span className="sr-only">E-mail</span>
                    <input type="email" value={formData.email} onChange={handleChange("email")} placeholder="E-mail" autoComplete="email" />
                  </label>
                  <label className="ct-field">
                    <span className="sr-only">Service souhaité</span>
                    <select value={formData.sujet} onChange={handleChange("sujet")} required>
                      {SUJETS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </label>
                </div>

                <h2 className="ct-optional">Optionnel</h2>

                <label className="ct-field">
                  <span className="sr-only">Détails de votre demande</span>
                  <textarea value={formData.message} onChange={handleChange("message")} placeholder="Détails : commune, problème, depuis quand…" rows={5} />
                </label>

                <label
                  className={`ct-drop${dragOver ? " is-over" : ""}`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); readPhoto(e.dataTransfer.files[0]) }}
                >
                  <span className="ct-drop-icon"><ImagePlus size={22} aria-hidden="true" /></span>
                  <span className="ct-drop-text">
                    {formData.photo ? formData.photo.filename : "Glissez une photo ici ou cliquez pour l'ajouter"}
                  </span>
                  {formData.photo && (
                    <button
                      type="button"
                      className="ct-drop-clear"
                      aria-label="Retirer la photo"
                      onClick={(e) => { e.preventDefault(); readPhoto(undefined) }}
                    >
                      <X size={16} />
                    </button>
                  )}
                  <input type="file" accept="image/*" className="sr-only" onChange={(e) => readPhoto(e.target.files?.[0])} />
                </label>

                <button type="submit" disabled={loading} className="btn-brand ct-submit">
                  {loading && <Loader2 size={18} className="ct-spin" aria-hidden="true" />}
                  {loading ? "Envoi…" : "Envoyer ma demande"}
                </button>

                <p className="ct-note">
                  Une urgence ? Appelez directement le <a href={`tel:${BUSINESS.phoneIntl}`}>{BUSINESS.phone}</a>
                </p>
              </form>
            )}
          </div>

          {/* ── Prochaines étapes ── */}
          <div className="ct-steps">
            <h2 className="ct-steps-title">Et ensuite ?</h2>
            <p className="ct-steps-lead">Votre demande est entre de bonnes mains.</p>

            <ol className="ct-timeline">
              {ETAPES.map(({ titre, texte }, i) => (
                <li key={titre}>
                  <span className="ct-dot" aria-hidden="true" />
                  <h3>{i + 1}. {titre}</h3>
                  <p>{texte}</p>
                </li>
              ))}
            </ol>

            <ul className="ct-infos">
              <li><Clock size={18} aria-hidden="true" /><span>Ouvert 24h/24, 7j/7, week-ends et jours fériés compris</span></li>
              <li><MapPin size={18} aria-hidden="true" /><span>{BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.city}<br /><small>Intervention à Toulouse et en Haute-Garonne</small></span></li>
              <li><Mail size={18} aria-hidden="true" /><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
            </ul>

            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="ct-maps">
              Voir sur Google Maps · 4,4/5 <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Carte ── */}
      <section style={{ padding: "0 24px 72px", maxWidth: "1200px", margin: "0 auto" }} aria-label="Carte d'accès">
        <iframe
          title="Nino Plomberie, 11 Rue François Arago à Muret sur Google Maps"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(`Nino Plomberie, ${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`)}&z=14&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "360px", border: 0, borderRadius: "20px", display: "block" }}
        />
      </section>

      <FaqSection faqs={CONTACT_FAQ} title="Questions avant de nous contacter" background="white" />

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .ct-page { background: var(--sand-50); min-height: 100vh; }
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

        .ct-wrap { position: relative; overflow: hidden; padding: 0 24px 80px; }
        .ct-blob { position: absolute; border-radius: 50%; filter: blur(2px); pointer-events: none; }
        .ct-blob-a { width: 340px; height: 340px; left: -140px; top: 420px; background: var(--cta-100); }
        .ct-blob-b { width: 420px; height: 420px; right: -200px; bottom: -60px; background: var(--brand-100); opacity: 0.7; }

        .ct-grid {
          position: relative; max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: minmax(0, 1fr) 520px; column-gap: 72px;
          grid-template-areas: "intro head" "steps body";
        }
        .ct-band {
          grid-row: 1; grid-column: 1 / -1;
          background: var(--brand-600);
          box-shadow: 0 0 0 100vmax var(--brand-600);
          clip-path: inset(0 -100vmax);
        }

        .ct-intro { grid-area: intro; position: relative; padding: 72px 0 56px; color: #fff; }
        .ct-kicker { display: inline-block; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cta-400); margin-bottom: 18px; }
        .ct-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4.5vw, 3.1rem); line-height: 1.1; letter-spacing: -0.03em; color: #fff; margin: 0 0 16px; }
        .ct-title span { color: var(--cta-400); }
        .ct-lead { color: rgba(255,255,255,0.78); font-size: 1.1rem; line-height: 1.65; max-width: 440px; margin: 0 0 28px; }
        .ct-intro-actions { display: flex; flex-wrap: wrap; gap: 12px; }

        .ct-card-head {
          grid-area: head; position: relative; align-self: end; margin-top: 56px;
          display: flex; align-items: center; gap: 18px;
          background: var(--sand-100); border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          padding: 28px 32px; border-bottom: 1px solid #e2e8f0;
        }
        .ct-card-head p { margin: 0; color: var(--ink-800); font-size: 1.02rem; line-height: 1.55; }
        .ct-card-head strong { color: var(--ink-950); }
        .ct-card-icon { flex-shrink: 0; width: 52px; height: 52px; border-radius: 10px; display: grid; place-items: center; background: var(--brand-500); color: var(--cta-400); }

        .ct-card-body {
          grid-area: body; align-self: start; position: relative; background: #fff;
          border-radius: 0 0 var(--radius-sm) var(--radius-sm); padding: 32px;
          box-shadow: 0 30px 60px -20px rgba(28,52,84,0.22);
        }
        .ct-form { display: flex; flex-direction: column; gap: 16px; }
        .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ct-field { display: block; }
        .ct-field input, .ct-field select, .ct-field textarea {
          width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; color: var(--ink-950);
          background: var(--sand-100); border: 1px solid transparent; border-radius: 6px;
          padding: 13px 14px; outline: none; transition: border-color .2s, background .2s;
        }
        .ct-field textarea { resize: vertical; min-height: 130px; }
        .ct-field input::placeholder, .ct-field textarea::placeholder { color: var(--ink-600); }
        .ct-field input:focus, .ct-field select:focus, .ct-field textarea:focus { background: #fff; border-color: var(--brand-400); }
        .ct-optional { font-family: var(--font-display); font-size: 1.05rem; font-weight: 600; color: var(--ink-950); margin: 10px 0 0; }

        .ct-drop {
          display: flex; align-items: center; gap: 14px; cursor: pointer;
          background: var(--sand-100); border-radius: 6px; padding: 10px;
        }
        .ct-drop-icon { flex-shrink: 0; width: 44px; height: 44px; border-radius: 6px; background: #fff; color: var(--brand-500); display: grid; place-items: center; }
        .ct-drop-text {
          flex: 1; min-width: 0; text-align: center; font-size: 0.85rem; color: var(--ink-600);
          border: 1.5px dashed #cbd5e1; border-radius: 6px; padding: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
          transition: border-color .2s, color .2s;
        }
        .ct-drop:hover .ct-drop-text, .ct-drop.is-over .ct-drop-text, .ct-drop:focus-within .ct-drop-text { border-color: var(--cta-500); color: var(--ink-800); }
        .ct-drop-clear { flex-shrink: 0; border: none; background: none; color: var(--ink-600); cursor: pointer; padding: 6px; border-radius: 6px; }
        .ct-drop-clear:hover { color: var(--ink-950); background: #fff; }

        .ct-submit { margin-top: 6px; width: 100%; }
        .ct-spin { animation: spin 1s linear infinite; }
        .ct-note { text-align: center; font-size: 0.88rem; color: var(--ink-700); margin: 4px 0 0; }
        .ct-note a { color: var(--ink-950); font-weight: 700; text-decoration: none; }
        .ct-error { background: #fee2e2; border: 1px solid #fca5a5; border-radius: 6px; padding: 12px 16px; color: #991b1b; font-size: 0.9rem; }
        .ct-success { padding: 24px 0; }
        .ct-success h2 { font-family: var(--font-display); font-weight: 700; color: var(--ink-950); font-size: 1.5rem; margin: 16px 0 10px; }
        .ct-success p { color: var(--ink-700); margin: 0; line-height: 1.6; }

        .ct-steps { grid-area: steps; position: relative; padding-top: 64px; }
        .ct-steps-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.9rem, 3.5vw, 2.5rem); line-height: 1.1; letter-spacing: -0.02em; color: var(--brand-600); margin: 0 0 14px; max-width: 320px; }
        .ct-steps-lead { color: var(--ink-800); font-size: 1.05rem; line-height: 1.5; margin: 0 0 44px; max-width: 300px; }
        .ct-timeline { list-style: none; margin: 0 0 44px; padding: 0; }
        .ct-timeline li { position: relative; padding: 0 0 30px 34px; max-width: 360px; }
        .ct-timeline li::before { content: ""; position: absolute; left: 7px; top: 18px; bottom: -2px; width: 2px; background: var(--brand-100); }
        .ct-timeline li:last-child::before { display: none; }
        .ct-dot { position: absolute; left: 0; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: var(--cta-500); box-shadow: inset 0 0 0 4px var(--cta-500), inset 0 0 0 7px #fff; }
        .ct-timeline h3 { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--ink-950); margin: 0 0 6px; }
        .ct-timeline p { font-size: 0.88rem; line-height: 1.6; color: var(--ink-700); margin: 0; }

        .ct-infos { list-style: none; margin: 0 0 20px; padding: 0; display: grid; gap: 14px; max-width: 380px; }
        .ct-infos li { display: flex; gap: 12px; align-items: flex-start; color: var(--ink-800); font-size: 0.93rem; line-height: 1.5; }
        .ct-infos svg { flex-shrink: 0; color: var(--cta-500); margin-top: 2px; }
        .ct-infos small { color: var(--ink-600); font-size: 0.83rem; }
        .ct-infos a { color: var(--ink-800); text-decoration: none; word-break: break-all; }
        .ct-infos a:hover { color: var(--brand-500); }
        .ct-maps { display: inline-flex; align-items: center; gap: 8px; color: var(--brand-500); font-weight: 600; font-size: 0.9rem; border: 1px solid var(--brand-100); background: #fff; border-radius: 999px; padding: 9px 16px; text-decoration: none; }
        .ct-maps:hover { border-color: var(--brand-300); }

        @media (max-width: 1000px) {
          .ct-grid { grid-template-columns: minmax(0, 1fr); grid-template-areas: "intro" "head" "body" "steps"; }
          .ct-band { grid-row: 1 / 3; }
          .ct-intro { padding: 56px 0 8px; }
          .ct-card-head { margin-top: 32px; }
          .ct-steps { padding-top: 56px; }
        }
        @media (max-width: 600px) {
          .ct-wrap { padding: 0 16px 64px; }
          .ct-row { grid-template-columns: minmax(0, 1fr); }
          .ct-drop-text { white-space: normal; }
          .ct-card-head, .ct-card-body { padding: 22px 20px; }
          .ct-card-head { gap: 14px; }
          .ct-blob-a { display: none; }
        }
      `}</style>
    </div>
  )
}
