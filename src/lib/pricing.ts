import {
  ALLIN_EXTRA,
  ALLIN_FLAT,
  BASE_TIER_PRODUCTS,
  EARLY_BIRD_ACTIVE,
  MEGA_RATIO,
  PRICING,
  type Level,
  type LevelPricing,
  type ProductKey,
  type Tier,
} from "./catalogue";

// The full price table, shape-identical to the PRICING constant. The admin
// stores an edited copy in the database; everything else reads it through a
// bound Pricing instance so display and checkout can never disagree.
export type PricingTable = Record<Level, LevelPricing>;

export interface CartItem {
  level: Level;
  subjectSlug: string;
  tier: Tier;
}

export type BundleKind = "mega" | "all-in";

export interface AppliedBundle {
  kind: BundleKind;
  subjectSlugs: string[];
  // What those lines would cost at their chosen tier without the bundle.
  listTotal: number;
  price: number;
}

export interface PricedLine {
  item: CartItem;
  listPrice: number;
  bundle: BundleKind | null;
}

export interface PricedCart {
  lines: PricedLine[];
  baseline: number;
  total: number;
  savings: number;
  bundles: AppliedBundle[];
}

export interface Nudge {
  id: string;
  message: string;
  action:
    | { type: "add-subject" }
    | { type: "upgrade"; level: Level; subjectSlug: string; toTier: Tier }
    | null;
}

export interface Pricing {
  table: PricingTable;
  earlyBird: boolean;
  tierPrice(level: Level, tier: Tier, earlyBird?: boolean): number;
  regularTierPrice(level: Level, tier: Tier): number;
  alacartePrice(level: Level, product: ProductKey): number;
  tierValue(level: Level, tier: Tier, products?: ProductKey[]): number;
  tierSavings(level: Level, tier: Tier, products?: ProductKey[]): number;
  priceCart(items: CartItem[]): PricedCart;
  cartNudges(items: CartItem[]): Nudge[];
}

function megaPrice(regularMasterSum: number): number {
  return Math.round(regularMasterSum * MEGA_RATIO);
}

// All-In covers up to 6 Master subjects at a flat price, then each subject
// beyond the 6th is added at the per-subject extra rate. For mixed-level carts
// both the flat and the extra are the mean of each subject's level value, which
// reduces to exactly S$268 (O) / S$213 (N(A)) for single-level carts of 5-6,
// then +S$44 (O) / +S$36 (N(A)) for each of the 7th and 8th.
function allInPrice(masters: CartItem[]): number {
  const n = masters.length;
  const flat = Math.round(
    masters.reduce((s, m) => s + ALLIN_FLAT[m.level], 0) / n
  );
  if (n <= 6) return flat;
  const extra = Math.round(
    masters.reduce((s, m) => s + ALLIN_EXTRA[m.level], 0) / n
  );
  return flat + (n - 6) * extra;
}

interface Composition {
  total: number;
  bundles: AppliedBundle[];
}

// Binds a price table (code constants or the admin's DB copy) and an
// early-bird flag into a set of pricing functions. The `earlyBird` argument
// on tierPrice overrides the instance default when needed.
export function createPricing(
  table: PricingTable = PRICING,
  earlyBirdDefault: boolean = EARLY_BIRD_ACTIVE
): Pricing {
  function tierPrice(level: Level, tier: Tier, earlyBird = earlyBirdDefault): number {
    const pricing = table[level];
    const eb = pricing.earlyBird[tier];
    if (earlyBird && eb !== undefined) return eb;
    return pricing.tiers[tier];
  }

  function regularTierPrice(level: Level, tier: Tier): number {
    return table[level].tiers[tier];
  }

  function alacartePrice(level: Level, product: ProductKey): number {
    return table[level].alacarte[product];
  }

  // Sum of the à-la-carte prices of everything a tier includes. Pass the
  // subject's real product list (from `tierProducts`) when you have it —
  // Master's contents vary by subject, since only the sciences include Paper 3.
  function tierValue(
    level: Level,
    tier: Tier,
    products: ProductKey[] = BASE_TIER_PRODUCTS[tier]
  ): number {
    return products.reduce(
      (sum, product) => sum + table[level].alacarte[product],
      0
    );
  }

  function tierSavings(
    level: Level,
    tier: Tier,
    products: ProductKey[] = BASE_TIER_PRODUCTS[tier]
  ): number {
    return tierValue(level, tier, products) - tierPrice(level, tier);
  }

  // Always charges the cheapest valid composition: bundles only ever group
  // Master-tier subjects, and a bundle is applied only when it beats the
  // straight tier prices.
  function priceCart(items: CartItem[]): PricedCart {
    const baseline = items.reduce(
      (sum, item) => sum + tierPrice(item.level, item.tier),
      0
    );

    const masters = [...items]
      .filter((item) => item.tier === "master")
      .sort(
        (a, b) => regularTierPrice(b.level, "master") - regularTierPrice(a.level, "master")
      );

    const listTotalOf = (group: CartItem[]) =>
      group.reduce((sum, item) => sum + tierPrice(item.level, item.tier), 0);
    const regularSumOf = (group: CartItem[]) =>
      group.reduce((sum, item) => sum + regularTierPrice(item.level, "master"), 0);

    const compositions: Composition[] = [{ total: baseline, bundles: [] }];

    const withBundles = (bundles: AppliedBundle[]): Composition => {
      const replaced = bundles.reduce((sum, b) => sum + b.listTotal - b.price, 0);
      return { total: baseline - replaced, bundles };
    };

    if (masters.length >= 3) {
      const top3 = masters.slice(0, 3);
      const mega: AppliedBundle = {
        kind: "mega",
        subjectSlugs: top3.map((m) => m.subjectSlug),
        listTotal: listTotalOf(top3),
        price: megaPrice(regularSumOf(top3)),
      };
      compositions.push(withBundles([mega]));

      if (masters.length === 6) {
        const rest = masters.slice(3, 6);
        const mega2: AppliedBundle = {
          kind: "mega",
          subjectSlugs: rest.map((m) => m.subjectSlug),
          listTotal: listTotalOf(rest),
          price: megaPrice(regularSumOf(rest)),
        };
        compositions.push(withBundles([mega, mega2]));
      }
    }

    if (masters.length >= 5) {
      const allIn: AppliedBundle = {
        kind: "all-in",
        subjectSlugs: masters.map((m) => m.subjectSlug),
        listTotal: listTotalOf(masters),
        price: allInPrice(masters),
      };
      compositions.push(withBundles([allIn]));
    }

    const best = compositions.reduce((a, b) => (b.total < a.total ? b : a));

    const bundleOf = (item: CartItem): BundleKind | null => {
      for (const bundle of best.bundles) {
        if (item.tier === "master" && bundle.subjectSlugs.includes(item.subjectSlug)) {
          return bundle.kind;
        }
      }
      return null;
    };

    return {
      lines: items.map((item) => ({
        item,
        listPrice: tierPrice(item.level, item.tier),
        bundle: bundleOf(item),
      })),
      baseline,
      total: best.total,
      savings: baseline - best.total,
      bundles: best.bundles,
    };
  }

  function cartNudges(items: CartItem[]): Nudge[] {
    if (items.length === 0) return [];
    const nudges: Nudge[] = [];
    const priced = priceCart(items);
    const masters = items.filter((i) => i.tier === "master");
    const oCount = (masters.length > 0 ? masters : items).filter(
      (i) => i.level === "o-level"
    ).length;
    const level: Level =
      oCount * 2 >= (masters.length > 0 ? masters : items).length ? "o-level" : "na-level";

    const simulateExtraMaster = (): number => {
      const phantom: CartItem = { level, subjectSlug: "__phantom__", tier: "master" };
      return priceCart([...items, phantom]).total - priced.total;
    };

    if (items.length < 6) {
      if (masters.length === 2) {
        const extra = simulateExtraMaster();
        const saving = regularTierPrice(level, "master") - extra;
        nudges.push({
          id: "mega",
          message: `Add 1 more subject at Master to unlock Mega-Bundle pricing — save S$${saving}.`,
          action: { type: "add-subject" },
        });
      } else if (masters.length === 4) {
        const extra = simulateExtraMaster();
        nudges.push({
          id: "all-in",
          message: `Add your 5th subject at Master for S$${extra} — All-In covers every subject you take, up to 6.`,
          action: { type: "add-subject" },
        });
      } else if (masters.length === 5) {
        const extra = simulateExtraMaster();
        nudges.push({
          id: "all-in-free",
          message:
            extra <= 0
              ? "Your 6th subject is included free — All-In covers every subject you take."
              : `Add your 6th subject for S$${extra} with All-In.`,
          action: { type: "add-subject" },
        });
      }
    }

    for (const item of items) {
      if (item.tier === "strategic") {
        const delta = tierPrice(item.level, "master") - tierPrice(item.level, "strategic");
        const value = alacartePrice(item.level, "rehearsal");
        nudges.push({
          id: `upgrade-${item.level}-${item.subjectSlug}`,
          message: `Upgrade to Master for S$${delta} more and get Final Rehearsal (S$${value} value).`,
          action: {
            type: "upgrade",
            level: item.level,
            subjectSlug: item.subjectSlug,
            toTier: "master",
          },
        });
      }
    }

    return nudges;
  }

  return {
    table,
    earlyBird: earlyBirdDefault,
    tierPrice,
    regularTierPrice,
    alacartePrice,
    tierValue,
    tierSavings,
    priceCart,
    cartNudges,
  };
}

// Default instance bound to the code constants. Used as the client fallback
// and by any caller that doesn't need database prices.
const defaultPricing = createPricing();

export const tierPrice = defaultPricing.tierPrice;
export const regularTierPrice = defaultPricing.regularTierPrice;
export const alacartePrice = defaultPricing.alacartePrice;
export const tierValue = defaultPricing.tierValue;
export const tierSavings = defaultPricing.tierSavings;

// Standalone helpers kept for existing call sites (client cart, bundle
// builder). `earlyBird` defaults to the build-time flag; server code binds the
// database value via createPricing instead.
export function priceCart(items: CartItem[], earlyBird: boolean = EARLY_BIRD_ACTIVE): PricedCart {
  return createPricing(PRICING, earlyBird).priceCart(items);
}

export function cartNudges(items: CartItem[], earlyBird: boolean = EARLY_BIRD_ACTIVE): Nudge[] {
  return createPricing(PRICING, earlyBird).cartNudges(items);
}
