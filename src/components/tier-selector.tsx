"use client";

import Link from "next/link";
import { useState } from "react";
import {
  PRODUCTS,
  TIER_NAMES,
  TIER_ORDER,
  getSubject,
  productNameFor,
  tierProducts,
  sgd,
  type Level,
  type Tier,
} from "@/lib/catalogue";
import { useCart } from "@/lib/cart-context";
import { usePricing } from "@/lib/pricing-context";
import { GuaranteeBadge } from "./guarantee-badge";

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

  // Master's contents vary by subject, only the sciences include Paper 3.
  const subject = getSubject(level, subjectSlug);
  const productsFor = (t: Tier) => (subject ? tierProducts(t, subject) : []);
  const masterValue = tierValue(level, "master", productsFor("master"));

  function add() {
    addItem({ level, subjectSlug, tier });
    setAdded(true);
  }

  return (
    <section aria-labelledby="tier-heading">
      <h2 id="tier-heading" className="font-display text-2xl font-black text-ink">
        Choose your tier
      </h2>
      <p className="mt-1 max-w-2xl text-sm text-body">
        Most students take Master, the full plan (forecast, practice and a
        full rehearsal) at the biggest saving. It&apos;s selected for you below;
        start smaller only if you prefer.
      </p>
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
                  className={`flex h-full flex-col rounded-2xl border-2 bg-surface p-5 transition-all peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-trust ${
                    isMaster
                      ? "border-accent shadow-[0_0_0_1px_var(--color-accent),0_10px_30px_-14px_rgba(255,220,0,0.5)] peer-checked:border-accent"
                      : "border-hairline opacity-80 peer-checked:border-signal peer-checked:opacity-100"
                  }`}
                >
                  {isMaster && (
                    <span className="absolute -top-3 left-5 rounded-full bg-accent px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-accent-deep">
                      Most popular · best value
                    </span>
                  )}
                  <span className="font-display text-lg font-bold text-ink">
                    {TIER_NAMES[t]}
                  </span>
                  <span className="mt-1 font-mono text-2xl font-medium text-accent">
                    {sgd(price)}
                    {earlyBird && price !== regular && (
                      <span className="ml-2 text-sm text-body line-through">
                        {sgd(regular)}
                      </span>
                    )}
                  </span>
                  {savings > 0 ? (
                    <span className="mt-1 text-xs font-medium text-guarantee">
                      {sgd(value)} value, save {sgd(value - price)}
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
                        {subject ? productNameFor(subject, p) : PRODUCTS[p].name}
                      </span>
                    ))}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <button
          type="button"
          onClick={add}
          className="cta-sheen glow-soft rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          Get {TIER_NAMES[tier]}, {sgd(tierPrice(level, tier))}
        </button>
        <p className="text-xs text-body">
          Instant PDF download · less than one hour of tuition · works right up
          to exam day · watermarked to you
        </p>
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
      <GuaranteeBadge variant="card" className="mt-4 max-w-2xl" />
      <p className="mt-4 text-xs text-body">
        Prefer a single PDF? The Essential tier is the Forecast alone. The
        Vault and Rehearsal are sold within tiers, where they cost less than
        their {sgd(masterValue)} combined value.
      </p>
    </section>
  );
}
