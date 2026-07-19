import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";
import { prisma } from "@/lib/db";
import { sendEmail } from "./email";

// The admin Mail tab's engine. The hello@ mailbox lives on the mail host
// (SiteGround); this module MIRRORS it into EmailMessage over IMAP and sends
// replies through the existing Resend pipeline. The mail host stays the
// source of truth: nothing here deletes or flags anything on the server, so
// webmail keeps working unchanged as the backup.
//
// Env (Railway + local .env, never committed):
//   MAIL_IMAP_HOST      e.g. mail.studylah.education (SiteGround)
//   MAIL_IMAP_PORT      993 (default)
//   MAIL_IMAP_USER      hello@studylah.education
//   MAIL_IMAP_PASSWORD  the mailbox password
//   MAIL_FROM           reply From, default "StudyLah <hello@studylah.education>"

const HOST = process.env.MAIL_IMAP_HOST ?? "";
const PORT = Number(process.env.MAIL_IMAP_PORT ?? 993);
const USER = process.env.MAIL_IMAP_USER ?? "";
const PASSWORD = process.env.MAIL_IMAP_PASSWORD ?? "";
export const MAIL_FROM =
  process.env.MAIL_FROM ?? "StudyLah <hello@studylah.education>";

export function mailConfigured(): boolean {
  return Boolean(HOST && USER && PASSWORD);
}

const SYNC_STALE_MS = 2 * 60 * 1000; // page-load syncs at most every 2 min
const FIRST_SYNC_COUNT = 50; // initial mirror depth
const MAX_SOURCE_BYTES = 400_000; // cap per message (attachments stay on host)

async function getSetting(key: string): Promise<string | null> {
  const row = await prisma.setting.findUnique({ where: { key } });
  return row?.value ?? null;
}

async function putSetting(key: string, value: string): Promise<void> {
  await prisma.setting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
}

// Crude but safe HTML-to-text for HTML-only emails. We NEVER render sender
// HTML in the admin panel (that would be an XSS door), text only.
function htmlToText(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<br\s*\/?>(\n)?/gi, "\n")
    .replace(/<\/(p|div|tr|li|h[1-6])>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export interface SyncResult {
  ok: boolean;
  synced: number;
  skipped?: boolean;
  error?: string;
}

/**
 * Mirror new INBOX messages into EmailMessage. Read-only against the host.
 * `force` skips the staleness guard (the "Check mail now" button).
 */
export async function syncMail(force = false): Promise<SyncResult> {
  if (!mailConfigured()) return { ok: false, synced: 0, error: "not configured" };

  const lastSyncAt = await getSetting("mail.lastSyncAt");
  if (!force && lastSyncAt && Date.now() - Date.parse(lastSyncAt) < SYNC_STALE_MS) {
    return { ok: true, synced: 0, skipped: true };
  }

  const client = new ImapFlow({
    host: HOST,
    port: PORT,
    secure: true,
    auth: { user: USER, pass: PASSWORD },
    logger: false,
  });

  let synced = 0;
  try {
    await client.connect();
    const lock = await client.getMailboxLock("INBOX");
    try {
      const box = client.mailbox;
      if (!box || typeof box === "boolean") throw new Error("no mailbox");

      // UIDVALIDITY change means the server renumbered everything: restart
      // the cursor, the unique messageId keeps old rows from duplicating.
      const uidValidity = String(box.uidValidity ?? "");
      const storedValidity = await getSetting("mail.uidValidity");
      let lastUid = Number((await getSetting("mail.lastUid")) ?? 0);
      if (storedValidity !== uidValidity) lastUid = 0;

      const range =
        lastUid > 0
          ? `${lastUid + 1}:*`
          : `${Math.max(1, box.exists - FIRST_SYNC_COUNT + 1)}:*`;

      for await (const msg of client.fetch(
        range,
        { uid: true, source: { maxLength: MAX_SOURCE_BYTES } },
        { uid: lastUid > 0 }
      )) {
        if (msg.uid <= lastUid) continue; // IMAP returns the last msg for empty ranges
        if (!msg.source) continue;
        const parsed = await simpleParser(msg.source);
        const from = parsed.from?.value?.[0];
        const messageId = parsed.messageId ?? `<imap-${uidValidity}-${msg.uid}@local>`;
        const body =
          parsed.text?.trim() ||
          (typeof parsed.html === "string" ? htmlToText(parsed.html) : "") ||
          "(empty message)";
        try {
          await prisma.emailMessage.create({
            data: {
              messageId,
              counterpart: (from?.address ?? "unknown").toLowerCase(),
              fromName: from?.name ?? "",
              subject: parsed.subject ?? "(no subject)",
              body: body.slice(0, 20_000),
              direction: "in",
              inReplyTo: parsed.inReplyTo ?? null,
              sentAt: parsed.date ?? new Date(),
            },
          });
          synced += 1;
        } catch {
          // unique messageId collision: already mirrored, fine
        }
        if (msg.uid > lastUid) lastUid = msg.uid;
      }

      await putSetting("mail.lastUid", String(lastUid));
      await putSetting("mail.uidValidity", uidValidity);
      await putSetting("mail.lastSyncAt", new Date().toISOString());
    } finally {
      lock.release();
    }
    return { ok: true, synced };
  } catch (err) {
    return {
      ok: false,
      synced,
      error: err instanceof Error ? err.message : "sync failed",
    };
  } finally {
    await client.logout().catch(() => {});
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Send a reply as hello@ via the existing email pipeline (Resend live,
 * data/outbox stub locally) and record it in the thread. Plain, personal
 * formatting on purpose: support replies should read as a person, not a
 * branded blast.
 */
export async function sendMailReply(opts: {
  to: string;
  subject: string;
  body: string;
  inReplyTo?: string | null;
}): Promise<{ delivered: boolean; detail?: string }> {
  const subject = opts.subject.trim() || "(no subject)";
  const html = `<div style="font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.65;color:#1a1a2e;white-space:pre-wrap;">${escapeHtml(opts.body)}</div>`;

  const result = await sendEmail({
    to: opts.to,
    subject,
    text: opts.body,
    html,
    from: MAIL_FROM,
    headers: opts.inReplyTo
      ? { "In-Reply-To": opts.inReplyTo, References: opts.inReplyTo }
      : undefined,
  });

  if (result.delivered) {
    await prisma.emailMessage.create({
      data: {
        messageId: `<reply-${crypto.randomUUID()}@studylah.education>`,
        counterpart: opts.to.toLowerCase(),
        fromName: "StudyLah",
        subject,
        body: opts.body.slice(0, 20_000),
        direction: "out",
        inReplyTo: opts.inReplyTo ?? null,
        sentAt: new Date(),
        seen: true,
      },
    });
  }
  return { delivered: result.delivered, detail: result.detail };
}
