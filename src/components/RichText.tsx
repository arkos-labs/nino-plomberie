// src/components/RichText.tsx — texte enrichi minimal pour les contenus en données :
// **gras** et [ancre](/chemin-interne). Les liens commençant par "/" passent par le routeur.
import { Link } from "@tanstack/react-router"
import type { ReactNode } from "react"

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g

export function richText(text: string, linkColor = "var(--brand-600)"): ReactNode[] {
  const style = { fontWeight: 600, color: linkColor, textDecoration: "underline", textUnderlineOffset: "3px" }
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
    if (link) {
      const [, label, href] = link
      return href.startsWith("/") ? (
        <Link key={i} to={href as "/"} style={style}>{label}</Link>
      ) : (
        <a key={i} href={href} style={style}>{label}</a>
      )
    }
    return part
  })
}

/** Retire la syntaxe enrichie (pour le JSON-LD ou les attributs) */
export function plainText(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
}
