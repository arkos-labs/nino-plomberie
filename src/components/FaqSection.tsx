// FAQ accessible (details/summary natif) + données structurées FAQPage
import { ChevronDown } from "lucide-react"
import { faqJsonLd, type Faq } from "../lib/site"

export function FaqSection({
  faqs,
  title = "Questions fréquentes",
  intro,
  background = "var(--sand-50)",
}: {
  faqs: Faq[]
  title?: string
  intro?: string
  background?: string
}) {
  return (
    <section style={{ background, padding: "clamp(48px, 8vw, 88px) 0" }} aria-labelledby="faq-title">
      <div className="section-container" style={{ maxWidth: "860px" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span className="badge-brand" style={{ marginBottom: "14px" }}>FAQ</span>
          <h2 id="faq-title" className="section-title" style={{ marginBottom: intro ? "10px" : 0 }}>
            {title}
          </h2>
          {intro && <p style={{ color: "var(--gray-500)", fontSize: "1rem", lineHeight: 1.6 }}>{intro}</p>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>
                <h3>{q}</h3>
                <ChevronDown size={20} aria-hidden="true" className="faq-chevron" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <style>{`
        .faq-item {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-sm);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-item[open] { border-color: var(--brand-200); box-shadow: var(--shadow-sm); }
        .faq-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 22px;
          min-height: 44px;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary:focus-visible { outline: 2px solid var(--brand-500); outline-offset: 2px; border-radius: var(--radius-sm); }
        .faq-item h3 {
          margin: 0;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--ink-950);
          line-height: 1.4;
        }
        .faq-chevron { flex-shrink: 0; color: var(--brand-500); transition: transform 0.2s ease; }
        .faq-item[open] .faq-chevron { transform: rotate(180deg); }
        .faq-item p {
          margin: 0;
          padding: 0 22px 20px;
          color: var(--gray-600);
          font-size: 0.97rem;
          line-height: 1.7;
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-item, .faq-chevron { transition: none; }
        }
      `}</style>
    </section>
  )
}
