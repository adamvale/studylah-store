import { PRICING, PRODUCT_ORDER, TIER_ORDER, type Level } from "../catalogue";
import { createPricing, type Pricing, type PricingTable } from "../pricing";
import { prisma } from "../db";

const PRICING_KEY = "pricingConfig";
const EARLY_BIRD_KEY = "earlyBirdActive";
const LEVELS: Level[] = ["o-level", "na-level"];

// Structural validation so a malformed DB row can never crash pricing — we
// fall back to the code constants instead.
function isValidTable(value: unknown): value is PricingTable {
  if (typeof value !== "object" || value === null) return false;
  const table = value as Record<string, unknown>;
  for (const level of LEVELS) {
    const lp = table[level] as
      | { tiers?: unknown; alacarte?: unknown; earlyBird?: unknown }
      | undefined;
    if (!lp || typeof lp !== "object") return false;
    const tiers = lp.tiers as Record<string, unknown> | undefined;
    const alacarte = lp.alacarte as Record<string, unknown> | undefined;
    if (!tiers || !alacarte || typeof lp.earlyBird !== "object" || lp.earlyBird === null) {
      return false;
    }
    for (const tier of TIER_ORDER) {
      if (typeof tiers[tier] !== "number") return false;
    }
    for (const product of PRODUCT_ORDER) {
      if (typeof alacarte[product] !== "number") return false;
    }
  }
  return true;
}

export async function getPricingTable(): Promise<PricingTable> {
  try {
    const row = await prisma.setting.findFirst({ where: { key: PRICING_KEY } });
    if (!row) return PRICING;
    const parsed: unknown = JSON.parse(row.value);
    if (isValidTable(parsed)) return parsed;
  } catch {
    // Database unavailable (e.g. build-time prerender before the volume is
    // mounted) or a malformed row: fall back to the code constants.
  }
  return PRICING;
}

export async function getEarlyBird(): Promise<boolean> {
  try {
    const row = await prisma.setting.findFirst({ where: { key: EARLY_BIRD_KEY } });
    return row?.value === "true";
  } catch {
    return false;
  }
}

// A Pricing instance bound to the live database config. Used by the checkout
// (authoritative) and by every server-rendered storefront page, so the price
// shown always equals the price charged.
export async function getPricing(): Promise<Pricing> {
  const [table, earlyBird] = await Promise.all([getPricingTable(), getEarlyBird()]);
  return createPricing(table, earlyBird);
}

export async function savePricingTable(table: PricingTable): Promise<void> {
  if (!isValidTable(table)) {
    throw new Error("Invalid pricing table.");
  }
  await prisma.setting.upsert({
    where: { key: PRICING_KEY },
    create: { key: PRICING_KEY, value: JSON.stringify(table) },
    update: { value: JSON.stringify(table) },
  });
}

export async function setEarlyBird(active: boolean): Promise<void> {
  await prisma.setting.upsert({
    where: { key: EARLY_BIRD_KEY },
    create: { key: EARLY_BIRD_KEY, value: active ? "true" : "false" },
    update: { value: active ? "true" : "false" },
  });
}
