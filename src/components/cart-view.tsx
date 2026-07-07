"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  LEVELS,
  SUBJECTS,
  TIER_NAMES,
  TIER_ORDER,
  sgd,
  type Level,
  type Tier,
} from "@/lib/catalogue";
import { useCart } from "@/lib/cart-context";
import { usePricing } from "@/lib/pricing-context";

function subjectName(level: Level, slug: string): string {
  return (
    SUBJECTS.find((s) => s.level === level && s.slug === slug)?.name ?? slug
  );
}

const BUNDLE_LABELS = { mega: "Mega-Bundle", "all-in": "All-In" } as const;

interface AppliedDiscount {
  code: string;
  description: string | null;
  discountCents: number;
  totalCents: number;
}

function sgdCents(cents: number): string {
  const dollars = cents / 100;
  return Number.isInteger(dollars) ? `S$${dollars}` : `S$${dollars.toFixed(2)}`;
}

export function CartView() {
  const { items, ready, removeItem, setTier, clear } = useCart();
  const [email, setEmail] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [discount, setDiscount] = useState<AppliedDiscount | null>(null);
  const [discountError, setDiscountError] = useState("");
  const [checkoutError, setCheckoutError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [pricedFor, setPricedFor] = useState(items);
  const pricing = usePricing();

  const priced = useMemo(() => pricing.priceCart(items), [pricing, items]);
  const nudges = useMemo(() => pricing.cartNudges(items), [pricing, items]);

  // Cart changed: any applied code is stale against the new total. Reset
  // during render (React's guidance for adjusting state on a changed
  // dependency) rather than in an effect.
  if (pricedFor !== items) {
    setPricedFor(items);
    setDiscount(null);
    setDiscountError("");
  }

  async function applyDiscount() {
    setDiscountError("");
    if (codeInput.trim() === "") return;
    try {
      const res = await fetch("/api/discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, code: codeInput }),
      });
      const body = (await res.json()) as AppliedDiscount & { error?: string };
      if (!res.ok) throw new Error(body.error ?? "That code isn't valid.");
      setDiscount(body);
    } catch (e) {
      setDiscount(null);
      setDiscountError(e instanceof Error ? e.message : "That code isn't valid.");
    }
  }

  async function checkout() {
    setCheckoutError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setCheckoutError("Enter the email your PDFs should go to.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          email,
          discountCode: discount?.code ?? undefined,
        }),
      });
      const body = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !body.url) {
        throw new Error(body.error ?? "Payment couldn't be started. Try again.");
      }
      window.location.href = body.url;
    } catch (e) {
      setCheckoutError(
        e instanceof Error ? e.message : "Payment couldn't be started. Try again."
      );
      setSubmitting(false);
    }
  }

  const payableCents = discount ? discount.totalCents : priced.total * 100;

  if (!ready) {
    return <p className="py-12 text-center text-sm text-body">Loading your cart…</p>;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-ink">
          Your cart is empty
        </h2>
        <p className="mt-3 text-body">
          Start with your hardest subject — the forecast tells you where the
          marks are.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/o-level"
            className="rounded-lg bg-signal px-5 py-3 text-sm font-medium text-white hover:bg-signal-deep"
          >
            Browse O-Level subjects
          </Link>
          <Link
            href="/na-level"
            className="rounded-lg border border-trust/25 bg-white px-5 py-3 text-sm font-medium text-trust hover:border-trust/50"
          >
            N(A)-Level subjects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        {priced.lines.map(({ item, listPrice, bundle }) => (
          <div
            key={`${item.level}-${item.subjectSlug}`}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-trust/10 bg-white p-5"
          >
            <div className="min-w-0">
              <p className="font-display font-bold text-ink">
                {subjectName(item.level, item.subjectSlug)}
              </p>
              <p className="text-xs text-body">{LEVELS[item.level].name}</p>
              {bundle && (
                <span className="mt-1.5 inline-block rounded-full bg-guarantee/10 px-2.5 py-0.5 text-xs font-medium text-guarantee">
                  {BUNDLE_LABELS[bundle]} pricing applied
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <label>
                <span className="sr-only">
                  Tier for {subjectName(item.level, item.subjectSlug)}
                </span>
                <select
                  value={item.tier}
                  onChange={(e) =>
                    setTier(item.level, item.subjectSlug, e.target.value as Tier)
                  }
                  className="rounded-lg border border-trust/20 bg-white px-2.5 py-1.5 text-sm"
                >
                  {TIER_ORDER.map((t) => (
                    <option key={t} value={t}>
                      {TIER_NAMES[t]}
                    </option>
                  ))}
                </select>
              </label>
              <span className="w-14 text-right font-mono text-sm font-medium text-ink">
                {sgd(listPrice)}
              </span>
              <button
                type="button"
                onClick={() => removeItem(item.level, item.subjectSlug)}
                className="rounded-md p-1.5 text-body hover:bg-heat-5/10 hover:text-heat-5"
                aria-label={`Remove ${subjectName(item.level, item.subjectSlug)}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {nudges.map((nudge) => {
          const action = nudge.action;
          return (
            <div
              key={nudge.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-signal/30 bg-signal/5 px-5 py-4"
            >
              <p className="text-sm text-ink">{nudge.message}</p>
              {action?.type === "add-subject" && (
                <Link
                  href="/bundles"
                  className="shrink-0 rounded-lg border border-signal px-4 py-2 text-sm font-medium text-signal-deep hover:bg-signal/10"
                >
                  Add a subject
                </Link>
              )}
              {action?.type === "upgrade" && (
                <button
                  type="button"
                  onClick={() => setTier(action.level, action.subjectSlug, action.toTier)}
                  className="shrink-0 rounded-lg border border-signal px-4 py-2 text-sm font-medium text-signal-deep hover:bg-signal/10"
                >
                  Upgrade to Master
                </button>
              )}
            </div>
          );
        })}

        <button
          type="button"
          onClick={clear}
          className="text-sm text-body underline hover:text-ink"
        >
          Clear cart
        </button>
      </div>

      <aside aria-label="Order summary" className="lg:sticky lg:top-20 lg:self-start">
        <div className="rounded-2xl border border-trust/10 bg-white p-5">
          <p className="font-display text-lg font-bold text-ink">Summary</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-body">
              <dt>
                {items.length} subject{items.length === 1 ? "" : "s"}
              </dt>
              <dd className={`font-mono ${priced.savings > 0 ? "line-through" : "text-ink"}`}>
                {sgd(priced.baseline)}
              </dd>
            </div>
            {priced.bundles.map((b, i) => (
              <div key={i} className="flex justify-between text-guarantee">
                <dt>
                  {BUNDLE_LABELS[b.kind]} ({b.subjectSlugs.length} subjects)
                </dt>
                <dd className="font-mono">−{sgd(b.listTotal - b.price)}</dd>
              </div>
            ))}
            {discount && (
              <div className="flex justify-between text-guarantee">
                <dt>{discount.description ?? discount.code}</dt>
                <dd className="font-mono">−{sgdCents(discount.discountCents)}</dd>
              </div>
            )}
            <div className="flex justify-between border-t border-trust/10 pt-3 font-display text-lg font-bold text-ink">
              <dt>Total</dt>
              <dd className="font-mono">{sgdCents(payableCents)}</dd>
            </div>
            {priced.savings > 0 && (
              <p className="text-right font-medium text-guarantee">
                You save {sgd(priced.savings)}
                {discount ? ` + ${sgdCents(discount.discountCents)}` : ""}
              </p>
            )}
          </dl>

          <div className="mt-4 border-t border-trust/10 pt-4">
            <label className="block">
              <span className="text-xs font-medium text-body">Discount code</span>
              <span className="mt-1 flex gap-2">
                <input
                  type="text"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  placeholder="STUDYLAH10"
                  className="w-full min-w-0 rounded-lg border border-trust/20 bg-white px-3 py-2 text-sm uppercase placeholder:normal-case placeholder:text-body/40"
                />
                <button
                  type="button"
                  onClick={applyDiscount}
                  className="shrink-0 rounded-lg border border-trust/25 px-3 py-2 text-sm font-medium text-trust hover:border-trust/50"
                >
                  Apply
                </button>
              </span>
            </label>
            {discountError && (
              <p className="mt-1.5 text-xs text-heat-5" role="alert">
                {discountError}
              </p>
            )}
          </div>

          <label className="mt-3 block">
            <span className="text-xs font-medium text-body">
              Email for your PDFs
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-trust/20 bg-white px-3 py-2 text-sm placeholder:text-body/40"
            />
          </label>

          <button
            type="button"
            onClick={checkout}
            disabled={submitting}
            className="mt-4 w-full rounded-lg bg-signal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-signal-deep"
          >
            {submitting ? "Starting secure payment…" : `Checkout — ${sgdCents(payableCents)}`}
          </button>
          {checkoutError && (
            <p className="mt-3 rounded-lg bg-heat-5/10 px-3 py-2.5 text-xs text-heat-5" role="alert">
              {checkoutError}
            </p>
          )}
          <p className="mt-4 text-xs text-body">
            PayNow and cards via Stripe · Money-back guarantee · Instant
            download after payment · PDFs watermarked to your email
          </p>
        </div>
      </aside>
    </div>
  );
}
