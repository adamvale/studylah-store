import fs from "fs/promises";
import path from "path";

// Outbound WhatsApp via the Meta Cloud API. Mirrors email.ts: with credentials
// it calls the Graph API, without them it writes each message to data/outbox/
// so the whole webhook flow is testable locally before Meta is configured.

const GRAPH_VERSION = process.env.WHATSAPP_GRAPH_VERSION || "v23.0";

export function whatsappConfigured(): boolean {
  return Boolean(
    process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID
  );
}

export type WaSendResult =
  | { delivered: true; via: "graph" | "outbox-stub"; msgId?: string }
  | { delivered: false; error: string };

export async function sendWhatsAppText(
  to: string,
  body: string
): Promise<WaSendResult> {
  if (!whatsappConfigured()) return sendToOutbox(to, body);

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to,
          type: "text",
          text: { preview_url: true, body },
        }),
      }
    );
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`WhatsApp send failed (${res.status})`, detail);
      return { delivered: false, error: `graph ${res.status}` };
    }
    const data = (await res.json()) as { messages?: { id?: string }[] };
    return { delivered: true, via: "graph", msgId: data.messages?.[0]?.id };
  } catch (err) {
    console.error("WhatsApp send error", err);
    return { delivered: false, error: "network" };
  }
}

async function sendToOutbox(to: string, body: string): Promise<WaSendResult> {
  const dir = path.join(process.cwd(), "data", "outbox");
  await fs.mkdir(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  await fs.writeFile(
    path.join(dir, `${stamp}-whatsapp-to-${to}.json`),
    JSON.stringify({ channel: "whatsapp", to, body }, null, 2)
  );
  console.log(`[whatsapp stub] -> ${to} (saved to data/outbox)`);
  return { delivered: true, via: "outbox-stub" };
}
