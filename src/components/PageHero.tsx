// src/components/PageHero.tsx — en-tête commun des pages intérieures
import type { ReactNode } from "react"

type PageHeroProps = {
  /** Petite ligne en capitales au-dessus du titre */
  kicker: ReactNode
  /** Titre H1 ; entourer le mot mis en avant de <em> */
  title: ReactNode
  lead?: ReactNode
  actions?: ReactNode
  /** Fil d'Ariane, affiché au-dessus du kicker */
  breadcrumb?: ReactNode
  /** Contenu libre sous les boutons (statistiques…) */
  children?: ReactNode
  image?: string
}

export function PageHero({ kicker, title, lead, actions, breadcrumb, children, image = "/hero-plombier.jpg" }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url('${image}')` }} aria-hidden="true" />
      <div className="section-container page-hero-inner">
        {breadcrumb}
        <p className="page-hero-kicker">{kicker}</p>
        <h1 className="page-hero-title">{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {actions && <div className="page-hero-actions">{actions}</div>}
        {children}
      </div>
    </section>
  )
}
