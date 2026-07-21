// Email delivery: Resend when RESEND_API_KEY is set, otherwise a dev stub
// that writes each message to data/outbox/ so the flow is inspectable.
import { promises as fs } from "fs";
import path from "path";
import { serverConfig } from "./config";

export interface EmailAttachment {
  filename: string;
  content: Uint8Array;
}

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text: string;
  attachments?: EmailAttachment[];
  // Optional overrides for the admin Mail tab: reply as hello@ with proper
  // threading headers. Transactional mail keeps the defaults.
  from?: string;
  replyTo?: string;
  headers?: Record<string, string>;
}

export interface SendResult {
  delivered: boolean;
  via: "resend" | "outbox-stub";
  detail?: string;
}

async function sendViaResend(message: EmailMessage): Promise<SendResult> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverConfig.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: message.from ?? serverConfig.emailFrom,
      to: [message.to],
      reply_to: message.replyTo ?? serverConfig.emailReplyTo,
      subject: message.subject,
      html: message.html,
      text: message.text,
      headers: message.headers,
      attachments: message.attachments?.map((a) => ({
        filename: a.filename,
        content: Buffer.from(a.content).toString("base64"),
      })),
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    return { delivered: false, via: "resend", detail: `${res.status}: ${body}` };
  }
  return { delivered: true, via: "resend" };
}

async function sendViaOutboxStub(message: EmailMessage): Promise<SendResult> {
  const dir = path.join(process.cwd(), "data", "outbox");
  await fs.mkdir(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const slug = message.subject.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40);
  const base = path.join(dir, `${stamp}-${slug}`);

  await fs.writeFile(
    `${base}.json`,
    JSON.stringify(
      {
        from: message.from ?? serverConfig.emailFrom,
        to: message.to,
        subject: message.subject,
        text: message.text,
        headers: message.headers,
        attachments: message.attachments?.map((a) => `${path.basename(base)}-${a.filename}`) ?? [],
        sentAt: new Date().toISOString(),
      },
      null,
      2
    )
  );
  await fs.writeFile(`${base}.html`, message.html);
  for (const attachment of message.attachments ?? []) {
    await fs.writeFile(`${base}-${attachment.filename}`, attachment.content);
  }
  console.log(`[email stub] "${message.subject}" -> ${message.to} (saved to data/outbox)`);
  return { delivered: true, via: "outbox-stub" };
}

export async function sendEmail(message: EmailMessage): Promise<SendResult> {
  if (serverConfig.resendApiKey) {
    return sendViaResend(message);
  }
  return sendViaOutboxStub(message);
}

// Shared branded shell for transactional emails.
export function emailLayout(bodyHtml: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;background:#f6f8fb;font-family:Helvetica,Arial,sans-serif;color:#101f33;">
    <div style="max-width:560px;margin:0 auto;padding:32px 20px;">
      <div style="background:#101f33;border-radius:12px;padding:16px 20px;text-align:center;margin:0 0 18px;">
        <img src="${serverConfig.siteUrl.replace(/\/$/, "")}/studylah-logo.png" alt="StudyLah" height="30" style="height:30px;width:auto;display:inline-block;border:0;" />
        <div style="font-size:11px;color:#9fb0c8;margin-top:6px;">studylah.education</div>
      </div>
      <div style="background:#ffffff;border-radius:12px;padding:28px 24px;">
        ${bodyHtml}
      </div>
      <p style="font-size:10px;color:#3d4e63;line-height:1.6;margin:20px 0 0;">
        StudyLah materials are data-driven probabilistic forecasts and original practice
        content, not actual exam content. StudyLah is not affiliated with SEAB, MOE, or
        Cambridge (UCLES). You received this email because of a purchase or a request
        you made at studylah.education.
      </p>
    </div>
  </body>
</html>`;
}
