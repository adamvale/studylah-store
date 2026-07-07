// Server-side pricing for checkout. Never trusts client prices: the cart
// items (level/subject/tier only) are re-priced here with the same pure
// engine the storefront uses, then discounts are applied from the database.
import { getSubject, LEVELS, TIER_NAMES, type Level, type Tier } from "../catalogue";
import { type CartItem, type PricedCart } from "../pricing";
import { prisma } from "../db";
import { getEarlyBird, getPricing } from "./pricing-store";

export interface QuoteLine {
  item: CartItem;
  subjectName: string;
  label: string;
  // Final cents for this line after bundle + discount allocation. All lines
  // sum exactly to totalCents.
  cents: number;
}

export interface CheckoutQuote {
  items: CartItem[];
  priced: PricedCart;
  earlyBird: boolean;
  subtotalCents: number;
  discountCode: string | null;
  discountDescription: string | null;
  discountCents: number;
  totalCents: number;
  lines: QuoteLine[];
}

export type QuoteResult =
  | { ok: true; quote: CheckoutQuote }
  | { ok: false; error: string; status: number };

const TIERS: Tier[] = ["essential", "strategic", "master"];
const LEVELS_KEYS: Level[] = ["o-level", "na-level"];

function parseItems(raw: unknown): CartItem[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 12) return null;
  const seen = new Map<string, CartItem>();
  for (const entry of raw) {
    if (typeof entry !== "object" || entry === null) return null;
    const e = entry as Record<string, unknown>;
    const level = e.level as Level;
    const tier = e.tier as Tier;
    const subjectSlug = e.subjectSlug;
    if (!LEVELS_KEYS.includes(level) || !TIERS.includes(tier)) return null;
    if (typeof subjectSlug !== "string") return null;
    if (!getSubject(level, subjectSlug)) return null;
    // Duplicate subjects collapse to the last tier chosen, matching the cart.
    seen.set(`${level}::${subjectSlug}`, { level, subjectSlug, tier });
  }
  if (seen.size > 6) return null;
  return [...seen.values()];
}

// Distribute `totalCents` across weights proportionally, summing exactly.
function allocate(totalCents: number, weights: number[]): number[] {
  const weightSum = weights.reduce((a, b) => a + b, 0);
  if (weightSum === 0) return weights.map(() => 0);
  const out: number[] = [];
  let allocated = 0;
  for (let i = 0; i < weights.length; i++) {
    if (i === weights.length - 1) {
      out.push(totalCents - allocated);
    } else {
      const cents = Math.floor((totalCents * weights[i]) / weightSum);
      out.push(cents);
      allocated += cents;
    }
  }
  return out;
}

export async function quoteCheckout(
  rawItems: unknown,
  rawCode?: unknown
): Promise<QuoteResult> {
  const items = parseItems(rawItems);
  if (!items) {
    return { ok: false, error: "Your cart looks invalid — refresh and try again.", status: 400 };
  }

  // Authoritative pricing: the admin's live DB prices + early-bird flag, the
  // same instance the storefront renders from.
  const pricing = await getPricing();
  const earlyBird = await getEarlyBird();
  const priced = pricing.priceCart(items);
  const subtotalCents = priced.total * 100;

  // Discount code (optional).
  let discountCents = 0;
  let discountCode: string | null = null;
  let discountDescription: string | null = null;
  if (typeof rawCode === "string" && rawCode.trim() !== "") {
    const code = rawCode.trim().toUpperCase();
    const found = await prisma.discountCode.findUnique({ where: { code } });
    const expired = found?.expiresAt != null && found.expiresAt < new Date();
    const exhausted =
      found?.maxRedemptions != null && found.redemptions >= found.maxRedemptions;
    if (!found || !found.active || expired || exhausted) {
      return { ok: false, error: "That discount code isn't valid.", status: 400 };
    }
    discountCents =
      found.kind === "percent"
        ? Math.round((subtotalCents * found.value) / 100)
        : Math.min(found.value, subtotalCents);
    discountCode = found.code;
    discountDescription = found.description || found.code;
  }

  const totalCents = subtotalCents - discountCents;

  // Per-line allocation: bundle prices and the discount are spread
  // proportionally so Stripe line items sum exactly to the charged total.
  const listWeights = priced.lines.map((line) =>
    line.bundle
      ? pricing.regularTierPrice(line.item.level, "master")
      : line.listPrice
  );
  const lineCents = allocate(totalCents, listWeights);

  const lines: QuoteLine[] = priced.lines.map((line, i) => {
    const subject = getSubject(line.item.level, line.item.subjectSlug);
    const subjectName = subject?.name ?? line.item.subjectSlug;
    return {
      item: line.item,
      subjectName,
      label: `${subjectName} — ${TIER_NAMES[line.item.tier]} (${LEVELS[line.item.level].shortName})`,
      cents: lineCents[i],
    };
  });

  return {
    ok: true,
    quote: {
      items,
      priced,
      earlyBird,
      subtotalCents,
      discountCode,
      discountDescription,
      discountCents,
      totalCents,
      lines,
    },
  };
}
