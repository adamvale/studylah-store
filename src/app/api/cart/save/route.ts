import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Records a cart the shopper has attached an email to but not yet paid for, so
// the abandoned-cart cron can send one recovery email later. Upserts by email;
// cleared on a paid order. Best-effort, always returns quickly.
export async function POST(request: Request) {
  let body: { email?: unknown; items?: unknown; discountCode?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) return NextResponse.json({ ok: false }, { status: 400 });

  // Keep only well-formed cart items, capped.
  const raw = Array.isArray(body.items) ? body.items : [];
  const items = raw
    .filter(
      (i): i is { level: string; subjectSlug: string; tier: string } =>
        typeof i === "object" &&
        i !== null &&
        typeof (i as { level?: unknown }).level === "string" &&
        typeof (i as { subjectSlug?: unknown }).subjectSlug === "string" &&
        typeof (i as { tier?: unknown }).tier === "string"
    )
    .slice(0, 12)
    .map((i) => ({ level: i.level, subjectSlug: i.subjectSlug, tier: i.tier }));
  if (items.length === 0) return NextResponse.json({ ok: false }, { status: 400 });

  const discountCode =
    typeof body.discountCode === "string" ? body.discountCode.slice(0, 40) : null;
  const itemsJson = JSON.stringify(items);

  try {
    await prisma.abandonedCart.upsert({
      where: { email },
      create: { email, itemsJson, discountCode },
      // Refresh contents; clear any prior "recovered" flag (they're active
      // again). Leave remindedAt so a reminded cart is never chased twice.
      update: { itemsJson, discountCode, recoveredAt: null },
    });
  } catch (e) {
    console.error("cart save failed", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
