import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { askGugu } from "@/lib/server/gugu-brain";
import {
  sendSocialText,
  metaMessagingConfigured,
  type SocialChannel,
} from "@/lib/server/meta-messaging";

export const runtime = "nodejs";

// One webhook for BOTH Facebook Messenger and Instagram DMs — they arrive on
// the same Meta Page subscription (object "page" vs "instagram") and send
// through the same Page token. Same Gugu brain + compliance filter as the site
// widget and WhatsApp.
//
// GET  = Meta's subscription handshake (hub.challenge echo).
// POST = message notifications, HMAC-signed with the app secret.

// Same-app credentials as WhatsApp, so fall back to the WhatsApp vars (a single
// verify token / app secret is fine for one Meta app).
const VERIFY_TOKEN = () =>
  process.env.MESSENGER_VERIFY_TOKEN || process.env.WHATSAPP_VERIFY_TOKEN;
const APP_SECRET = () =>
  process.env.META_APP_SECRET || process.env.WHATSAPP_APP_SECRET;

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

const FALLBACK_REPLY =
  "Thanks for messaging StudyLah! I want to get that answered properly for you, so please email hello@studylah.education, or browse every subject with live prices here: https://studylah.education/subjects";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  const expected = VERIFY_TOKEN();
  if (mode === "subscribe" && expected && token === expected && challenge) {
    return new Response(challenge, { status: 200 });
  }
  return NextResponse.json({ error: "Verification failed." }, { status: 403 });
}

function validSignature(raw: string, header: string | null): boolean {
  const secret = APP_SECRET();
  if (!secret) {
    // No app secret configured: only acceptable in local stub mode (no Page
    // token either). With real credentials, unsigned posts are rejected.
    return !metaMessagingConfigured();
  }
  if (!header?.startsWith("sha256=")) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(raw, "utf8")
    .digest("hex");
  const given = header.slice("sha256=".length);
  return (
    given.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(given), Buffer.from(expected))
  );
}

interface MessagingEvent {
  sender?: { id?: string };
  message?: { mid?: string; text?: string; is_echo?: boolean };
}

function extractEvents(
  payload: unknown
): { channel: SocialChannel; ev: MessagingEvent }[] {
  const out: { channel: SocialChannel; ev: MessagingEvent }[] = [];
  const obj = (payload as { object?: string })?.object;
  const channel: SocialChannel | null =
    obj === "page" ? "messenger" : obj === "instagram" ? "instagram" : null;
  if (!channel) return out;
  const entries = (payload as { entry?: unknown[] })?.entry;
  if (!Array.isArray(entries)) return out;
  for (const entry of entries) {
    const messaging = (entry as { messaging?: unknown[] })?.messaging;
    if (!Array.isArray(messaging)) continue;
    for (const ev of messaging) out.push({ channel, ev: ev as MessagingEvent });
  }
  return out;
}

async function handleEvent(channel: SocialChannel, ev: MessagingEvent) {
  // Echoes are messages the Page itself sent (including Gugu's own replies) —
  // ignore, or the bot answers itself in a loop.
  if (ev.message?.is_echo) return;
  const contactId = ev.sender?.id;
  const msgId = ev.message?.mid;
  if (!contactId || !msgId) return; // read/delivery receipts have no mid

  const text = (ev.message?.text ?? "").trim().slice(0, 500);

  try {
    await prisma.socialMessage.create({
      data: { channel, contactId, msgId, role: "user", content: text || "[media]" },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return; // already processed (Meta retries until it sees a 200)
    }
    throw e;
  }

  if (rateLimited(`${channel}:${contactId}`)) return;

  // Human takeover: owner replied manually within 24h → Gugu stands down.
  const takeover = await prisma.socialMessage.findFirst({
    where: {
      channel,
      contactId,
      manual: true,
      createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    },
    select: { id: true },
  });
  if (takeover) return;

  let reply: string;
  if (!text) {
    reply =
      "I can only read text messages for now! Type your question and I'll help you out. 👻";
  } else {
    const rows = await prisma.socialMessage.findMany({
      where: { channel, contactId },
      orderBy: { createdAt: "desc" },
      take: 12,
    });
    rows.reverse();
    const history: { role: "user" | "assistant"; content: string }[] = [];
    for (const row of rows) {
      const role = row.role === "assistant" ? "assistant" : "user";
      const content = row.content.slice(0, 500);
      const last = history[history.length - 1];
      if (last && last.role === role) {
        last.content = `${last.content}\n${content}`.slice(0, 1000);
      } else {
        history.push({ role, content });
      }
    }
    while (history.length && history[0].role !== "user") history.shift();

    const result =
      history.length && history[history.length - 1].role === "user"
        ? await askGugu(history, { channel })
        : { fallback: true as const };
    reply = "reply" in result ? result.reply : FALLBACK_REPLY;
  }

  const sent = await sendSocialText(channel, contactId, reply);
  if (sent.delivered) {
    await prisma.socialMessage.create({
      data: {
        channel,
        contactId,
        msgId: "msgId" in sent ? sent.msgId : undefined,
        role: "assistant",
        content: reply,
      },
    });
  }
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (!validSignature(raw, request.headers.get("x-hub-signature-256"))) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }
  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Bad JSON." }, { status: 400 });
  }
  for (const { channel, ev } of extractEvents(payload)) {
    try {
      await handleEvent(channel, ev);
    } catch (err) {
      console.error("Messenger/Instagram webhook error", err);
    }
  }
  return NextResponse.json({ received: true });
}
