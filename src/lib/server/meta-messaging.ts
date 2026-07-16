import fs from "fs/promises";
import path from "path";

// Outbound Facebook Messenger + Instagram DMs via the Meta Graph API. Both
// platforms send through the SAME endpoint (POST /me/messages) with the
// connected Page's access token, so one sender covers both. Mirrors
// whatsapp.ts: with a token it calls Graph, without one it writes to
// data/outbox/ so the whole webhook flow is testable before Meta is wired up.

const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v23.0";

export type SocialChannel = "messenger" | "instagram";

export function metaMessagingConfigured(): boolean {
  return Boolean(process.env.META_PAGE_ACCESS_TOKEN);
}

export type SocialSendResult =
  | { delivered: true; via: "graph" | "outbox-stub"; msgId?: string }
  | { delivered: false; error: string };

export async function sendSocialText(
  channel: SocialChannel,
  recipientId: string,
  body: string
): Promise<SocialSendResult> {
  if (!metaMessagingConfigured()) return sendToOutbox(channel, recipientId, body);

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/me/messages?access_token=${encodeURIComponent(
        process.env.META_PAGE_ACCESS_TOKEN as string
      )}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient: { id: recipientId },
          messaging_type: "RESPONSE",
          message: { text: body },
        }),
      }
    );
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`${channel} send failed (${res.status})`, detail);
      return { delivered: false, error: `graph ${res.status}` };
    }
    const data = (await res.json()) as { message_id?: string };
    return { delivered: true, via: "graph", msgId: data.message_id };
  } catch (err) {
    console.error(`${channel} send error`, err);
    return { delivered: false, error: "network" };
  }
}

async function sendToOutbox(
  channel: SocialChannel,
  recipientId: string,
  body: string
): Promise<SocialSendResult> {
  const dir = path.join(process.cwd(), "data", "outbox");
  await fs.mkdir(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  await fs.writeFile(
    path.join(dir, `${stamp}-${channel}-to-${recipientId}.json`),
    JSON.stringify({ channel, to: recipientId, body }, null, 2)
  );
  console.log(`[${channel} stub] -> ${recipientId} (saved to data/outbox)`);
  return { delivered: true, via: "outbox-stub" };
}
