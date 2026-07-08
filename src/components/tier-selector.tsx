"use client";

import Link from "next/link";
import { useState } from "react";
import {
  PRODUCTS,
  TIER_NAMES,
  TIER_ORDER,
  getSubject,
  tierProducts,
  sgd,
  type Level,
  type Tier,
} from "@/lib/catalogue";
import { useCart } from "@/lib/cart-context";
import { usePricing } from "@/lib/pricing-context";

export function TierSelector({
  level,
  subjectSlug,
  subjectName,
}: {
  level: Level;
  subjectSlug: string;
  subjectName: string;
}) {
  const [tier, setTier] = useState<Tier>("master");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { earlyBird, tierPrice, regularTierPrice, tierValue, tierSavings } = usePricing();

  // Master's contents vary by subject — only the sciences include Paper 3.
  const subject = getSubject(level, subjectSlug);
  const productsFor = (t: Tier) => (subject ? tierProducts(t, subject) : []);
  const masterValue = tierValue(level, "master", productsFor("master"));

  function add() {
    addItem({ level, subjectSlug, tier });
    setAdded(true);
  }

  return (
    <section aria-labelledby="tier-heading">
      <h2 id="tier-heading" className="font-display text-2xl font-bold text-ink">
        Choose your tier
      </h2>
      <fieldset className="mt-5">
        <legend className="sr-only">Tier for {subjectName}</legend>
        <div className="grid gap-4 md:grid-cols-3">
          {TIER_ORDER.map((t) => {
            const included = productsFor(t);
            const price = tierPrice(level, t);
            const regular = regularTierPrice(level, t);
            const value = tierValue(level, t, included);
            const savings = tierSavings(level, t, included);
            const isMaster = t === "master";
            return (
              <label key={t} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="tier"
                  value={t}
                  checked={tier === t}
                  onChange={() => {
                    setTier(t);
                    setAdded(false);
                  }}
                  className="peer sr-only"
                />
                <span
                  className={`flex h-full flex-col rounded-2xl border-2 bg-white p-5 transition-colors peer-checked:border-signal peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-trust ${
                    isMaster ? "border-trust/25" : "border-trust/10"
                  }`}
                >
                  {isMaster && (
                    <span className="absolute -top-3 left-5 rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-deep">
                      Best value
                    </span>
                  )}
                  <span className="font-display text-lg font-bold text-ink">
                    {TIER_NAMES[t]}
                  </span>
                  <span className="mt-1 font-mono text-2xl font-medium text-trust">
                    {sgd(price)}
                    {earlyBird && price !== regular && (
                      <span className="ml-2 text-sm text-body line-through">
                        {sgd(regular)}
                      </span>
                    )}
                  </span>
                  {savings > 0 ? (
                    <span className="mt-1 text-xs font-medium text-guarantee">
                      {sgd(value)} value — save {sgd(value - price)}
                    </span>
                  ) : (
                    <span className="mt-1 text-xs text-body">
                      The entry point
                    </span>
                  )}
                  <span className="mt-4 space-y-1.5 text-sm text-body">
                    {included.map((p) => (
                      <span key={p} className="flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-guarantee"
                          aria-hidden="true"
                        />
                        {PRODUCTS[p].name}
                      </span>
                    ))}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={add}
          className="rounded-lg bg-signal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-signal-deep"
        >
          Add {TIER_NAMES[tier]} to cart — {sgd(tierPrice(level, tier))}
        </button>
        {added && (
          <p className="text-sm text-guarantee" role="status">
            <span className="font-medium">
              {subjectName} ({TIER_NAMES[tier]}) is in your cart.
            </span>{" "}
            <Link href="/cart" className="underline">
              View cart
            </Link>{" "}
            or{" "}
            <Link href={`/${level}`} className="underline">
              add another subject
            </Link>
            .
          </p>
        )}
      </div>
      <p className="mt-4 text-xs text-body">
        Prefer a single PDF? The Essential tier is the Forecast alone. The
        Vault and Rehearsal are sold within tiers, where they cost less than
        their {sgd(masterValue)} combined value.
      </p>
    </section>
  );
}
