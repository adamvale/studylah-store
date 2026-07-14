import "server-only";
import crypto from "crypto";
import { prisma } from "@/lib/db";
import {
  getSubject,
  LEVELS,
  TIER_NAMES,
  type Level,
  type Tier,
} from "@/lib/catalogue";
import type { CartItem } from "@/lib/pricing";
import { getEarlyBird, getPricing } from "@/lib/server/pricing-store";
import type { CheckoutQuote } from "@/lib/server/checkout";
import { createOrderFromCheckout } from "@/lib/server/orders";
import { serverConfig } from "@/lib/server/config";
import { emailLayout, sendEmail } from "@/lib/server/email";

// Admin comp grants reuse the ordinary order pipeline: a grant is just a
// S$0 order whose stripeSessionId is prefixed "grant_". That means every
// existing system, entitlement checks (Master gating / StudyLand), the
// download page, order history, works with zero extra plumbing, and revoking
// is simply deleting that order. Grants can cover one subject or a whole
// level / all subjects in a single order (the public 6-subject cart cap does
// not apply here, we build the priced quote directly).
const GRANT_PREFIX = "grant_";
const MAX_GRANT_ITEMS = 40;

export type GrantResult =
  | { ok: true; orderId: number }
  | { ok: false; error: string };

async function buildCompQuote(items: CartItem[]): Promise<CheckoutQuote> {
  const pricing = await getPricing();
  const earlyBird = await getEarlyBird();
  const priced = pricing.priceCart(items);
  const subtotalCents = priced.total * 100;
  const lines = items.map((item) => {
    const subject = getSubject(item.level, item.subjectSlug);
    const subjectName = subject?.name ?? item.subjectSlug;
    return {
      item,
      subjectName,
      label: `${subjectName}, ${TIER_NAMES[item.tier]} (${LEVELS[item.level].shortName})`,
      cents: 0,
    };
  });
  // Zeroed total (comp), but the snapshot keeps the value given away for audit.
  return {
    items,
    priced,
    earlyBird,
    subtotalCents,
    discountCode: "ADMIN_GRANT",
    discountDescription: "Admin comp grant",
    discountCents: subtotalCents,
    totalCents: 0,
    lines,
  };
}

async function sendGrantEmail(email: string, items: CartItem[]): Promise<void> {
  const master = items.some((i) => i.tier === "master");
  const listHtml = items
    .map((i) => {
      const s = getSubject(i.level, i.subjectSlug);
      return `<li style="margin:0 0 6px;font-size:14px;color:#3d4e63;">${
        s?.name ?? i.subjectSlug
      } — ${TIER_NAMES[i.tier]} (${LEVELS[i.level].shortName})</li>`;
    })
    .join("");
  const loginUrl = `${serverConfig.siteUrl}/account/login`;

  const html = emailLayout(`
    <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">Your StudyLah access is ready</h1>
    <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 8px;">
      We've added the following to your StudyLah account (${email}):
    </p>
    <ul style="margin:0 0 14px;padding-left:18px;">${listHtml}</ul>
    ${
      master
        ? `<p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">
             Your <strong style="color:#101f33;">Master</strong> access also unlocks
             StudyLand, your day-by-day dashboard for the run-in to the paper, and StudyLah Legends.
           </p>`
        : ""
    }
    <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">
      Sign in with this email to get your PDFs${master ? " and open StudyLand" : ""}.
      No password, we email you a one-time link.
    </p>
    <p style="margin:0 0 8px;">
      <a href="${loginUrl}" style="display:inline-block;background:#f4552b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 20px;border-radius:8px;">
        Sign in to StudyLah
      </a>
    </p>
    <p style="font-size:11px;color:#8894a3;line-height:1.6;margin:16px 0 0;">
      You're getting this because a StudyLah admin granted you access. Not expecting it? Reply and let us know (PDPA).
    </p>
  `);

  const text = `Your StudyLah access is ready. We've added to your account (${email}): ${items
    .map((i) => `${getSubject(i.level, i.subjectSlug)?.name ?? i.subjectSlug} — ${TIER_NAMES[i.tier]}`)
    .join(", ")}. Sign in to get your PDFs${
    master ? " and StudyLand" : ""
  }: ${loginUrl}`;

  await sendEmail({
    to: email,
    subject: "Your StudyLah access is ready",
    html,
    text,
  });
}

export async function grantAccess(input: {
  email: string;
  items: CartItem[];
  notify?: boolean;
}): Promise<GrantResult> {
  const email = input.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter a valid email." };
  }

  // Dedupe by level+subject (last tier wins), and validate every subject.
  const seen = new Map<string, CartItem>();
  for (const it of input.items) {
    if (!getSubject(it.level, it.subjectSlug)) {
      return { ok: false, error: `Unknown subject: ${it.subjectSlug}.` };
    }
    seen.set(`${it.level}::${it.subjectSlug}`, it);
  }
  const items = [...seen.values()];
  if (items.length === 0) return { ok: false, error: "Pick at least one subject." };
  if (items.length > MAX_GRANT_ITEMS) {
    return { ok: false, error: "Too many subjects in one grant." };
  }

  const quote = await buildCompQuote(items);
  try {
    const { order } = await createOrderFromCheckout({
      stripeSessionId: `${GRANT_PREFIX}${crypto.randomUUID()}`,
      email,
      quote,
      comp: true,
    });
    if (input.notify) {
      // Best-effort: a failed email must never lose the grant.
      await sendGrantEmail(email, items).catch((e) =>
        console.error(`Grant ${order.id}: access email failed`, e)
      );
    }
    return { ok: true, orderId: order.id };
  } catch (e) {
    console.error("grantAccess failed", e);
    return { ok: false, error: e instanceof Error ? e.message : "Grant failed." };
  }
}

export interface GrantRow {
  orderId: number;
  email: string;
  createdAt: Date;
  // One line per distinct subject+tier on the grant (items are per-file).
  lines: { subjectName: string; tier: string }[];
  master: boolean;
}

export async function listGrants(): Promise<GrantRow[]> {
  const orders = await prisma.order.findMany({
    where: { stripeSessionId: { startsWith: GRANT_PREFIX } },
    select: {
      id: true,
      email: true,
      createdAt: true,
      items: { select: { subjectName: true, tier: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  return orders.map((o) => {
    const seen = new Map<string, { subjectName: string; tier: string }>();
    for (const it of o.items) {
      seen.set(`${it.subjectName}::${it.tier}`, {
        subjectName: it.subjectName,
        tier: it.tier,
      });
    }
    const lines = [...seen.values()];
    return {
      orderId: o.id,
      email: o.email,
      createdAt: o.createdAt,
      lines,
      master: lines.some((l) => l.tier === TIER_NAMES.master),
    };
  });
}

// Revoke a grant by deleting its order (and dependent items + download
// tokens). Scoped to grant_ orders so a real purchase can never be deleted
// through this path.
export async function revokeGrant(orderId: number): Promise<GrantResult> {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    select: { id: true, stripeSessionId: true },
  });
  if (!order || !order.stripeSessionId.startsWith(GRANT_PREFIX)) {
    return { ok: false, error: "Not an admin grant." };
  }
  try {
    await prisma.$transaction(async (tx) => {
      await tx.downloadToken.deleteMany({ where: { orderItem: { orderId } } });
      await tx.orderItem.deleteMany({ where: { orderId } });
      await tx.order.delete({ where: { id: orderId } });
    });
    return { ok: true, orderId };
  } catch (e) {
    console.error("revokeGrant failed", e);
    return { ok: false, error: "Revoke failed." };
  }
}
