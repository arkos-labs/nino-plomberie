// src/components/Gallery.tsx — galerie « mosaïque » des réalisations
import { useEffect, useState } from "react"
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Realisation } from "../data/realisations"
import { getCommuneBySlug } from "../data/communes"

const CATEGORIES: Record<string, string> = {
  "renovation-salle-de-bain": "Salles de bain",
  "robinetterie-sanitaires": "Robinetterie",
  "chauffe-eau": "Chauffe-eau",
  "pose-cuisine": "Cuisines",
}

// Formats alternés pour l'effet mosaïque (les photos sont recadrées)
const RATIOS = ["3 / 4", "1 / 1", "4 / 5", "4 / 3", "3 / 4", "5 / 4"]

type GalleryProps = {
  items: Realisation[]
  /** Affiche les onglets de catégories au-dessus de la galerie */
  filters?: boolean
}

export function Gallery({ items, filters = false }: GalleryProps) {
  const [cat, setCat] = useState<string | null>(null)
  const [open, setOpen] = useState<number | null>(null)

  const cats = Object.keys(CATEGORIES).filter((c) => items.some((r) => r.services.includes(c)))
  const shown = cat ? items.filter((r) => r.services.includes(cat)) : items

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % shown.length))
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + shown.length) % shown.length))
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, shown.length])

  const current = open === null ? null : shown[open]

  return (
    <div className="gal">
      {filters && cats.length > 1 && (
        <div className="gal-tabs" role="tablist" aria-label="Filtrer les réalisations">
          {[null, ...cats].map((c) => (
            <button
              key={c ?? "all"}
              type="button"
              role="tab"
              aria-selected={cat === c}
              className={`gal-tab${cat === c ? " is-active" : ""}`}
              onClick={() => setCat(c)}
            >
              {c ? CATEGORIES[c] : "Toutes"}
            </button>
          ))}
        </div>
      )}

      <div className="gal-grid">
        {shown.map((r, i) => {
          // Une seule ville par chantier, uniquement si elle est renseignée dans data/realisations.ts
          const ville = r.ville ? getCommuneBySlug(r.ville)?.nom : undefined
          const categorie = CATEGORIES[r.services[0]] ?? "Réalisation"
          const label = ville ? `${categorie} · ${ville}` : categorie
          const alt = ville ? `${r.titre} à ${ville} — Nino Plomberie` : `${r.titre} — Nino Plomberie`
          return (
            <figure key={r.src} className="gal-item" style={{ aspectRatio: RATIOS[i % RATIOS.length] }}>
              <button type="button" className="gal-open" onClick={() => setOpen(i)} aria-label={`Agrandir : ${alt}`}>
                <img src={r.src} alt={alt} loading="lazy" />
                <span className="gal-zoom" aria-hidden="true"><Maximize2 size={15} /></span>
              </button>
              <figcaption className="gal-cap">
                <span className="gal-cap-text">
                  <strong>{r.titre}</strong>
                  <span>{label}</span>
                </span>
              </figcaption>
            </figure>
          )
        })}
      </div>

      {current && open !== null && (
        <div className="gal-lightbox" role="dialog" aria-modal="true" aria-label={current.titre} onClick={() => setOpen(null)}>
          <button type="button" className="gal-lb-btn gal-lb-close" aria-label="Fermer" onClick={() => setOpen(null)}><X size={22} /></button>
          {shown.length > 1 && (
            <>
              <button type="button" className="gal-lb-btn gal-lb-prev" aria-label="Photo précédente"
                onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + shown.length) % shown.length) }}>
                <ChevronLeft size={24} />
              </button>
              <button type="button" className="gal-lb-btn gal-lb-next" aria-label="Photo suivante"
                onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % shown.length) }}>
                <ChevronRight size={24} />
              </button>
            </>
          )}
          <figure className="gal-lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.titre} />
            <figcaption>
              {current.titre}
              {current.ville && getCommuneBySlug(current.ville) ? ` — ${getCommuneBySlug(current.ville)!.nom}` : ""}
            </figcaption>
          </figure>
        </div>
      )}

      <style>{`
        .gal-tabs { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 22px; scrollbar-width: none; }
        .gal-tabs::-webkit-scrollbar { display: none; }
        .gal-tab {
          flex-shrink: 0; padding: 8px 16px; border: none; background: none; cursor: pointer;
          font: inherit; font-size: 0.95rem; font-weight: 500; color: var(--ink-700);
          border-radius: var(--radius-sm); transition: background .2s, color .2s;
        }
        .gal-tab:hover { background: var(--sand-100); color: var(--brand-600); }
        .gal-tab.is-active { background: var(--sand-100); color: var(--brand-600); font-weight: 700; }

        .gal-grid { columns: 3 240px; column-gap: 16px; }
        .gal-item {
          position: relative; margin: 0 0 16px; break-inside: avoid;
          border-radius: 14px; overflow: hidden; background: var(--sand-100);
        }
        .gal-open { display: block; width: 100%; height: 100%; padding: 0; border: none; background: none; cursor: zoom-in; }
        .gal-open img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s var(--ease-out); }
        .gal-item:hover .gal-open img { transform: scale(1.04); }
        .gal-zoom {
          position: absolute; top: 10px; right: 10px; width: 32px; height: 32px; border-radius: 50%;
          display: grid; place-items: center; color: #fff;
          background: rgba(15,23,42,0.35); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          opacity: 0.85; transition: opacity .2s;
        }
        .gal-item:hover .gal-zoom { opacity: 1; }
        .gal-cap {
          position: absolute; left: 10px; right: 10px; bottom: 10px;
          display: flex; align-items: center; padding: 8px 12px;
          border-radius: 10px; color: #fff; pointer-events: none;
          background: rgba(15,23,42,0.45); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
        }
        .gal-cap-text { min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }
        .gal-cap-text strong { font-size: 0.85rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .gal-cap-text span { font-size: 0.74rem; line-height: 1.35; color: rgba(255,255,255,0.8); white-space: normal; }

        .gal-lightbox { position: fixed; inset: 0; z-index: 10000; background: rgba(10,15,25,0.9); display: grid; place-items: center; padding: 24px; }
        .gal-lb-figure { margin: 0; max-width: min(1000px, 100%); max-height: 100%; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .gal-lb-figure img { max-width: 100%; max-height: calc(100vh - 110px); object-fit: contain; border-radius: 12px; display: block; }
        .gal-lb-figure figcaption { color: #fff; font-weight: 600; text-align: center; }
        .gal-lb-btn {
          position: absolute; width: 44px; height: 44px; border-radius: 50%; border: none; cursor: pointer;
          display: grid; place-items: center; color: #fff; background: rgba(255,255,255,0.12);
        }
        .gal-lb-btn:hover { background: rgba(255,255,255,0.25); }
        .gal-lb-close { top: 16px; right: 16px; }
        .gal-lb-prev { left: 16px; top: 50%; transform: translateY(-50%); }
        .gal-lb-next { right: 16px; top: 50%; transform: translateY(-50%); }

        @media (max-width: 560px) {
          .gal-grid { columns: 2; column-gap: 10px; }
          .gal-item { margin-bottom: 10px; border-radius: 12px; }
          .gal-cap { left: 6px; right: 6px; bottom: 6px; padding: 6px 8px; }
          .gal-cap-text strong { font-size: 0.72rem; }
          .gal-cap-text span { font-size: 0.64rem; }
        }
        @media (prefers-reduced-motion: reduce) { .gal-open img { transition: none; } }
      `}</style>
    </div>
  )
}
