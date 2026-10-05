// src/lib/notify.ts — notifications Telegram vers Nino (serveur uniquement)
// Variables d'environnement : TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (une ou plusieurs, séparées par des virgules)

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

/** Met en forme des lignes « libellé : valeur » (valeurs vides ignorées) */
export function formatLines(title: string, rows: Array<[string, string | undefined | null]>) {
  const body = rows
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `<b>${esc(k)}</b> : ${esc(String(v))}`)
    .join("\n")
  return `${title}\n\n${body}`
}

/** Envoie un message Telegram (HTML). Ne lève jamais d'erreur : une notification ne doit pas casser un formulaire. */
export async function notifyTelegram(html: string): Promise<boolean> {
  const token = process.env["TELEGRAM_BOT_TOKEN"]
  const chats = (process.env["TELEGRAM_CHAT_ID"] ?? "").split(",").map((s) => s.trim()).filter(Boolean)
  if (!token || chats.length === 0) {
    console.log("[notify] Telegram non configuré — message :", html.replace(/<[^>]+>/g, ""))
    return false
  }
  try {
    const results = await Promise.all(
      chats.map((chat_id) =>
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id, text: html, parse_mode: "HTML", disable_web_page_preview: true }),
        }),
      ),
    )
    const ok = results.every((r) => r.ok)
    if (!ok) console.error("[notify] Telegram a refusé le message", results.map((r) => r.status))
    return ok
  } catch (err) {
    console.error("[notify] Échec d'envoi Telegram", err)
    return false
  }
}
