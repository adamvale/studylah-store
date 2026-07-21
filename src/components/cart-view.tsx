"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  LEVELS,
  MAX_SUBJECTS,
  SUBJECTS,
  TIER_NAMES,
  TIER_ORDER,
  sgd,
  type Level,
  type Tier,
} from "@/lib/catalogue";
import { useCart } from "@/lib/cart-context";
import { usePricing } from "@/lib/pricing-context";
import { trackInitiateCheckout } from "@/components/analytics";
import { GuaranteeBadge } from "./guarantee-badge";

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
  const [parentOk, setParentOk] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [discount, setDiscount] = useState<AppliedDiscount | null>(null);
  const [discountError, setDiscountError] = useState("");
  const [checkoutError, setCheckoutError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [pricedFor, setPricedFor] = useState(items);
  const emailRef = useRef<HTMLInputElement>(null);
  const pricing = usePricing();

  // Remember the buyer's email across visits (device-local) so an
  // abandoned-cart return, or a repeat purchase, doesn't retype it. This is a
  // real drop-off point: the recovery email sends people back here.
  const emailLoaded = useRef(false);
  useEffect(() => {
    if (emailLoaded.current) return;
    emailLoaded.current = true;
    try {
      const saved = localStorage.getItem("studylah-checkout-email");
      if (saved) setEmail(saved);
    } catch {
      /* private mode */
    }
  }, []);
  useEffect(() => {
    try {
      if (email) localStorage.setItem("studylah-checkout-email", email);
    } catch {
      /* private mode */
    }
  }, [email]);

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

  async function applyDiscount(codeArg?: string, silent = false) {
    const code = (codeArg ?? codeInput).trim();
    setDiscountError("");
    if (code === "") return;
    try {
      const res = await fetch("/api/discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Email (when typed) lets referral codes be checked early, the
        // buyer sees "first order only" here, not at the pay button.
        body: JSON.stringify({ items, code, email: email || undefined }),
      });
      const body = (await res.json()) as AppliedDiscount & { error?: string };
      if (!res.ok) throw new Error(body.error ?? "That code isn't valid.");
      setDiscount(body);
    } catch (e) {
      setDiscount(null);
      // A failed auto-apply (referral link cookie) stays quiet, the shopper
      // never asked for it; manual attempts always explain themselves.
      if (!silent) {
        setDiscountError(e instanceof Error ? e.message : "That code isn't valid.");
      }
    }
  }

  // Referral link (?ref=CODE) sets a cookie site-wide; the cart redeems it
  // automatically once there is something to price. The ref makes it one-shot
  // per visit, and all state updates happen after the fetch (async), so this
  // effect never sets state synchronously.
  const refAutoTried = useRef(false);
  useEffect(() => {
    if (refAutoTried.current) return;
    if (items.length === 0 || discount || codeInput !== "") return;
    // Referral cookie first; else the login page's 10-minute welcome code.
    const cookies = document.cookie.split("; ");
    const raw =
      cookies.find((c) => c.startsWith("studylah_ref="))?.split("=")[1] ??
      cookies.find((c) => c.startsWith("studylah_welcome="))?.split("=")[1];
    refAutoTried.current = true;
    if (!raw) return;
    const code = decodeURIComponent(raw).toUpperCase();
    void (async () => {
      await applyDiscount(code, true);
      setCodeInput(code);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, discount, codeInput]);

  // Once a valid email is on a non-empty cart, record it (debounced) so the
  // abandoned-cart cron can send one recovery email if they don't check out.
  useEffect(() => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || items.length === 0) return;
    const t = setTimeout(() => {
      void fetch("/api/cart/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, items, discountCode: discount?.code }),
        keepalive: true,
      }).catch(() => {});
    }, 1500);
    return () => clearTimeout(t);
  }, [email, items, discount]);

  async function checkout() {
    setCheckoutError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setCheckoutError("Enter the email your PDFs should go to.");
      // The mobile Checkout lives in a sticky bar; bring the email field into
      // view so the shopper sees what's missing.
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      emailRef.current?.focus({ preventScroll: true });
      return;
    }
    if (!parentOk) {
      setCheckoutError(
        "Please confirm a parent or guardian is completing this purchase."
      );
      return;
    }
    setSubmitting(true);
    trackInitiateCheckout(priced.total); // pre-redirect intent signal for paid social
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          email,
          discountCode: discount?.code ?? undefined,
          parentConsent: parentOk,
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
          Start with the subject that worries you most. The forecast shows you
          exactly where to aim your last few weeks, and every pack is covered
          by the money-back guarantee.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/subjects"
            className="rounded-lg bg-signal px-5 py-3 text-sm font-medium text-white hover:bg-signal-deep"
          >
            Browse O-Level subjects
          </Link>
          <Link
            href="/bundles"
            className="rounded-lg border border-hairline bg-surface px-5 py-3 text-sm font-medium text-accent hover:border-hairline"
          >
            Build a bundle
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 pb-24 lg:grid-cols-3 lg:pb-0">
      <div className="space-y-2.5 lg:col-span-2">
        {priced.lines.map(({ item, listPrice, bundle }) => (
          <div
            key={`${item.level}-${item.subjectSlug}`}
            className="card-hover flex items-center justify-between gap-3 rounded-xl border border-hairline bg-surface p-3.5"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-sm font-bold text-ink">
                {subjectName(item.level, item.subjectSlug)}
              </p>
              <p className="mt-0.5 flex flex-wrap items-center gap-x-1.5 text-xs text-body">
                <span>{LEVELS[item.level].name}</span>
                {bundle && (
                  <span className="font-medium text-guarantee">
                    · {BUNDLE_LABELS[bundle]} applied
                  </span>
                )}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <label>
                <span className="sr-only">
                  Tier for {subjectName(item.level, item.subjectSlug)}
                </span>
                <select
                  value={item.tier}
                  onChange={(e) =>
                    setTier(item.level, item.subjectSlug, e.target.value as Tier)
                  }
                  className="rounded-lg border border-hairline bg-surface px-2 py-1 text-xs"
                >
                  {TIER_ORDER.map((t) => (
                    <option key={t} value={t}>
                      {TIER_NAMES[t]}
                    </option>
                  ))}
                </select>
              </label>
              <span className="w-12 text-right font-mono text-sm font-medium text-ink">
                {sgd(listPrice)}
              </span>
              <button
                type="button"
                onClick={() => removeItem(item.level, item.subjectSlug)}
                className="rounded-md p-1 text-body hover:bg-heat-5/10 hover:text-heat-5"
                aria-label={`Remove ${subjectName(item.level, item.subjectSlug)}`}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-hairline bg-signal/5 px-5 py-4"
            >
              <p className="text-sm text-ink">{nudge.message}</p>
              {action?.type === "add-subject" && (
                <Link
                  href="/bundles"
                  className="shrink-0 rounded-lg border border-signal px-4 py-2 text-sm font-medium text-teal hover:bg-signal/10"
                >
                  Add a subject
                </Link>
              )}
              {action?.type === "upgrade" && (
                <button
                  type="button"
                  onClick={() => setTier(action.level, action.subjectSlug, action.toTier)}
                  className="shrink-0 rounded-lg border border-signal px-4 py-2 text-sm font-medium text-teal hover:bg-signal/10"
                >
                  Upgrade to Ultra
                </button>
              )}
            </div>
          );
        })}

        {/* General savings nudge below the subjects: the more you add, the
            cheaper each one gets. Hidden once a specific add-subject nudge is
            already showing, or at the 8-subject cap. */}
        {items.length < MAX_SUBJECTS &&
          !nudges.some((n) => n.action?.type === "add-subject") && (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent/5 px-5 py-4">
              <p className="text-sm text-ink">
                The more subjects you add, the cheaper each one gets, up to{" "}
                {MAX_SUBJECTS} subjects.
              </p>
              <Link
                href="/bundles"
                className="shrink-0 rounded-lg border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10"
              >
                Add a subject
              </Link>
            </div>
          )}

        <button
          type="button"
          onClick={clear}
          className="text-sm text-body underline hover:text-ink"
        >
          Clear cart
        </button>
      </div>

      <aside aria-label="Order summary" className="lg:sticky lg:top-20 lg:self-start">
        <div className="rounded-2xl border border-hairline bg-surface p-5">
          <p className="font-display text-lg font-bold text-ink">Summary</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-body">
              <dt>
                {items.length} subject{items.length === 1 ? "" : "s"}, full value
              </dt>
              <dd className={`font-mono ${priced.savings > 0 ? "line-through" : "text-ink"}`}>
                {sgd(priced.baseline)}
              </dd>
            </div>
            {/* The permanent pack discount: parts value down to tier price
                (Ultra is S$116 of products sold at S$68). Bundle rows then
                stack on top, so the column sums exactly to the total. */}
            {(() => {
              const listSum = priced.lines.reduce((s, l) => s + l.listPrice, 0);
              const packDiscount = priced.baseline - listSum;
              if (packDiscount <= 0) return null;
              return (
                <div className="flex justify-between text-guarantee">
                  <dt>Pack discount (vs the parts)</dt>
                  <dd className="font-mono">−{sgd(packDiscount)}</dd>
                </div>
              );
            })()}
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
            <div className="flex justify-between border-t border-hairline pt-3 font-display text-lg font-bold text-ink">
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

          <div className="mt-4 border-t border-hairline pt-4">
            <label className="block">
              <span className="text-xs font-medium text-body">Discount code</span>
              <span className="mt-1 flex gap-2">
                <input
                  type="text"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  placeholder="STUDYLAH10"
                  className="w-full min-w-0 rounded-lg border border-hairline bg-surface px-3 py-2 text-sm uppercase placeholder:normal-case placeholder:text-body/40"
                />
                <button
                  type="button"
                  onClick={() => applyDiscount()}
                  className="shrink-0 rounded-lg border border-hairline px-3 py-2 text-sm font-medium text-accent hover:border-hairline"
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
              ref={emailRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-hairline bg-surface px-3 py-2 text-base placeholder:text-body/40"
            />
          </label>

          {/* Minors-facing store: a parent/guardian must be the one paying. */}
          <label className="mt-3 flex items-start gap-2 text-xs text-body">
            <input
              type="checkbox"
              checked={parentOk}
              onChange={(e) => setParentOk(e.target.checked)}
              className="mt-0.5"
            />
            <span>
              A parent or guardian is completing this purchase and agrees to the{" "}
              <Link href="/legal/terms" className="text-accent underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/legal/privacy" className="text-accent underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <GuaranteeBadge variant="card" className="mt-4" />

          {/* On mobile the Checkout lives in the sticky bottom bar; this
              in-summary button is the desktop CTA. The guarantee rides on the
              button itself, the downside of trying is zero. */}
          <button
            type="button"
            onClick={checkout}
            disabled={submitting}
            className="cta-sheen glow-soft mt-3 hidden w-full flex-col items-center rounded-lg bg-signal px-5 py-2.5 text-white transition-colors hover:bg-signal-deep lg:flex"
          >
            {submitting ? (
              <span className="py-0.5 text-sm font-medium">Starting secure payment…</span>
            ) : (
              <>
                <span className="text-sm font-bold">Checkout, {sgdCents(payableCents)}</span>
                <span className="text-[11px] font-medium text-white/80">
                  Fully refundable if the forecast misses
                </span>
              </>
            )}
          </button>
          {checkoutError && (
            <p className="mt-3 rounded-lg bg-heat-5/10 px-3 py-2.5 text-xs text-heat-5" role="alert">
              {checkoutError}
            </p>
          )}
          <p className="mt-4 text-xs text-body">
            Secure PayNow &amp; card via Stripe · your PDFs open the instant you
            pay · every page watermarked to you.
          </p>
          <p className="mt-2 text-xs text-body">
            Pick <span className="font-medium text-ink">Ultra</span> and you
            also unlock <span className="font-medium text-ink">StudyLand</span>{" "}
            (early-access beta), daily practice, a mistake notebook, a study plan
            and exam timers. No subscription, ever.
          </p>
        </div>
      </aside>

      {/* Sticky mobile checkout bar, same design as the bundle "add to cart"
          bar (data-bottom-cta lifts the Gugu helper above it). */}
      <div
        data-bottom-cta=""
        className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-night/95 backdrop-blur lg:hidden"
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="font-mono text-base font-bold text-ink">
              {sgdCents(payableCents)}
              {priced.savings > 0 && (
                <span className="ml-2 text-xs font-medium text-guarantee">
                  save {sgd(priced.savings)}
                </span>
              )}
            </p>
            <p className="truncate text-xs text-body">
              {items.length} subject{items.length === 1 ? "" : "s"} · refundable · PDFs to your email
            </p>
          </div>
          <button
            type="button"
            onClick={checkout}
            disabled={submitting}
            className="cta-sheen shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Starting…" : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
}
