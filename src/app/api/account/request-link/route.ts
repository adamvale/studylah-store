import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { emailLayout, sendEmail } from "@/lib/server/email";
import { customerAuthEnabled, signLoginToken, currentLoginCode } from "@/lib/server/customer-session";

// Per-email throttle. Single replica (SQLite), so an in-memory map is enough to
// stop the endpoint being used to spam an inbox.
const lastSent = new Map<string, number>();
const MIN_INTERVAL_MS = 60_000;

// ── Welcome offer for emails with no account ────────────────────────────────
// Owner's call: when the email has never ordered, say so and turn the moment
// into a first purchase: a personal 20% code valid for 10 minutes. The code is
// a real DiscountCode row (checkout already enforces expiresAt +
// maxRedemptions), deduped per email so repeat clicks reuse the same code
// instead of minting new rows.
const WELCOME_PCT = 20;
const WELCOME_TTL_MS = 10 * 60 * 1000;
const WELCOME_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

// One code per email, derived deterministically, so repeat clicks reuse the
// same row and the description stays customer-facing (it shows in the cart).
function welcomeCode(email: string): string {
  const digest = createHash("sha256").update(`welcome:${email}`).digest();
  let suffix = "";
  for (let i = 0; i < 4; i++) suffix += WELCOME_ALPHABET[digest[i] % WELCOME_ALPHABET.length];
  return `WELCOME20-${suffix}`;
}

async function welcomeCodeFor(email: string): Promise<{ code: string; expiresAt: Date }> {
  const code = welcomeCode(email);
  const existing = await prisma.discountCode.findUnique({ where: { code } });
  const now = new Date();
  if (
    existing?.expiresAt &&
    existing.active &&
    existing.expiresAt > now &&
    existing.redemptions === 0
  ) {
    return { code, expiresAt: existing.expiresAt };
  }
  // Fresh 10 minutes (also revives an expired, unredeemed earlier offer).
  const expiresAt = new Date(Date.now() + WELCOME_TTL_MS);
  await prisma.discountCode.upsert({
    where: { code },
    create: {
      code,
      kind: "percent",
      value: WELCOME_PCT,
      description: "20% welcome offer, first order",
      active: true,
      expiresAt,
      maxRedemptions: 1,
    },
    update: { expiresAt, active: true, redemptions: 0 },
  });
  return { code, expiresAt };
}

export async function POST(request: Request) {
  // Always answer the same way, whether or not the email has an account, never
  // reveal who is a customer.
  const generic = NextResponse.json({ ok: true });

  const form = await request.formData().catch(() => null);
  const email = String(form?.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!customerAuthEnabled() || !email || !email.includes("@")) return generic;

  // Case-insensitive match: order emails come from Stripe and may be mixed-case.
  const rows = await prisma.$queryRaw<Array<{ id: string; email: string }>>`
    SELECT id, email FROM "Customer" WHERE email = ${email} COLLATE NOCASE LIMIT 1
  `;
  const customer = rows[0];

  // No account: no email to send. Tell them honestly and hand over the
  // 10-minute welcome code (idempotent per email, so retries reuse it).
  if (!customer) {
    try {
      const offer = await welcomeCodeFor(email);
      return NextResponse.json({
        ok: true,
        noAccount: true,
        code: offer.code,
        expiresAt: offer.expiresAt.toISOString(),
        pct: WELCOME_PCT,
      });
    } catch (e) {
      console.error("Welcome code failed", e);
      return generic;
    }
  }

  const now = Date.now();
  const prev = lastSent.get(email);
  if (prev && now - prev < MIN_INTERVAL_MS) return generic;
  lastSent.set(email, now);

  const url = `${serverConfig.siteUrl}/api/account/callback?token=${encodeURIComponent(
    signLoginToken(customer.id)
  )}`;
  const code = currentLoginCode(customer.email);

  const html = emailLayout(`
    <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">Sign in to StudyLah</h1>
    <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 16px;">
      Use the button below to open your account and re-download anything you've
      bought. This link works for 15 minutes and only from this email.
    </p>
    <p style="margin:0 0 20px;">
      <a href="${url}" style="display:inline-block;background:#f4552b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 20px;border-radius:8px;">
        Sign in to my account
      </a>
    </p>
    <p style="font-size:13px;color:#3d4e63;line-height:1.6;margin:0 0 6px;">
      Signing in on the StudyLand app? Enter this code instead:
    </p>
    <p style="font-size:28px;font-weight:bold;letter-spacing:6px;color:#101f33;margin:0 0 16px;">${code}</p>
    <p style="font-size:12px;color:#3d4e63;line-height:1.6;margin:0;">
      Didn't ask to sign in? You can safely ignore this email, nothing changes.
    </p>
  `);
  const text = [
    `Sign in to your StudyLah account:`,
    url,
    ``,
    `On the StudyLand app? Enter this code instead: ${code}`,
    ``,
    `This link works for 15 minutes. If you didn't request it, ignore this email.`,
  ].join("\n");

  try {
    await sendEmail({ to: customer.email, subject: "Sign in to StudyLah", html, text });
  } catch (e) {
    console.error("Magic-link email failed", e);
  }

  return generic;
}
