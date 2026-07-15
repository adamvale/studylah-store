import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { askGugu } from "@/lib/server/gugu-brain";
import { sendWhatsAppText, whatsappConfigured } from "@/lib/server/whatsapp";

export const runtime = "nodejs";

// Meta Cloud API webhook: WhatsApp messages in, Gugu replies out. Same brain,
// prompt, and compliance filter as the site widget (src/lib/server/gugu-brain).
//
// GET  = Meta's one-time subscription handshake (hub.challenge echo).
// POST = message notifications, HMAC-signed with the app secret.

// Best-effort in-memory rate limit per WhatsApp number (same rationale as
// /api/chat: single Railway replica, bounds Claude spend on abuse).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function rateLimited(waId: string): boolean {
  const now = Date.now();
  const recent = (hits.get(waId) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(waId, recent);
  return recent.length > MAX_PER_WINDOW;
}

// Scripted reply used when the brain falls back (no API key, Claude error, or
// a generated reply tripped the compliance filter). Never left unanswered.
const FALLBACK_REPLY =
  "Thanks for messaging StudyLah! I want to get that answered properly for you, so please email hello@studylah.education, or browse every subject with live prices here: https://studylah.education/subjects";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  const expected = process.env.WHATSAPP_VERIFY_TOKEN;
  if (mode === "subscribe" && expected && token === expected && challenge) {
    return new Response(challenge, { status: 200 });
  }
  return NextResponse.json({ error: "Verification failed." }, { status: 403 });
}

function validSignature(raw: string, header: string | null): boolean {
  const secret = process.env.WHATSAPP_APP_SECRET;
  if (!secret) {
    // No app secret configured. Only acceptable in local stub mode (no Graph
    // credentials either); with real credentials, unsigned posts are rejected.
    return !whatsappConfigured();
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

interface WaTextMessage {
  id?: string;
  from?: string;
  type?: string;
  text?: { body?: string };
}

function extractMessages(payload: unknown): WaTextMessage[] {
  const out: WaTextMessage[] = [];
  const entries = (payload as { entry?: unknown[] })?.entry;
  if (!Array.isArray(entries)) return out;
  for (const entry of entries) {
    const changes = (entry as { changes?: unknown[] })?.changes;
    if (!Array.isArray(changes)) continue;
    for (const change of changes) {
      const value = (change as { value?: { messages?: unknown[] } })?.value;
      if (Array.isArray(value?.messages)) {
        out.push(...(value.messages as WaTextMessage[]));
      }
    }
  }
  return out;
}

async function handleMessage(msg: WaTextMessage): Promise<void> {
  const waId = msg.from;
  const msgId = msg.id;
  if (!waId || !msgId) return;

  // Non-text messages (images, audio, stickers, ...) get a gentle nudge.
  const text =
    msg.type === "text" ? (msg.text?.body ?? "").trim().slice(0, 500) : "";

  // Record the inbound turn; the unique msgId makes redelivered webhooks
  // no-ops (Meta retries until it sees a 200).
  try {
    await prisma.waMessage.create({
      data: { waId, msgId, role: "user", content: text || `[${msg.type}]` },
    });
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002"
    ) {
      return; // already processed this message
    }
    throw e;
  }

  if (rateLimited(waId)) return;

  let reply: string;
  if (!text) {
    reply =
      "I can only read text messages for now! Type your question and I'll help you out. 👻";
  } else {
    // Last few turns for this number, oldest first. Consecutive same-role rows
    // (e.g. two quick messages before Gugu replied) are merged, the Claude
    // Messages API requires strict user/assistant alternation.
    const rows = await prisma.waMessage.findMany({
      where: { waId },
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
    // History must start with a user turn and end with the current user turn.
    while (history.length && history[0].role !== "user") history.shift();

    const result =
      history.length && history[history.length - 1].role === "user"
        ? await askGugu(history, { channel: "whatsapp" })
        : { fallback: true as const };
    reply = "reply" in result ? result.reply : FALLBACK_REPLY;
  }

  const sent = await sendWhatsAppText(waId, reply);
  if (sent.delivered) {
    await prisma.waMessage.create({
      data: {
        waId,
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

  // Always ack quickly with 200 (Meta retries non-200s aggressively; the
  // msgId dedupe makes retries harmless anyway). Status updates (delivered /
  // read receipts) carry no messages[] and fall through to the ack.
  for (const msg of extractMessages(payload)) {
    try {
      await handleMessage(msg);
    } catch (err) {
      console.error("WhatsApp webhook error", err);
    }
  }
  return NextResponse.json({ received: true });
}
