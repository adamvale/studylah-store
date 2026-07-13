"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LEVELS,
  MAX_SUBJECTS,
  SUBJECTS,
  sgd,
  subjectCode,
  PUBLISHED_LEVELS,
  type Level,
} from "@/lib/catalogue";
import { useCart } from "@/lib/cart-context";
import { usePricing } from "@/lib/pricing-context";
import { type CartItem } from "@/lib/pricing";

type SelectionKey = `${Level}::${string}`;

export function BundleBuilder({
  hide = [],
  stacked = false,
}: {
  // Subjects to leave out, as `${level}::${slug}` (e.g. already-owned ones).
  hide?: string[];
  // Single-column layout for embedding in a narrow container.
  stacked?: boolean;
} = {}) {
  const [selected, setSelected] = useState<Set<SelectionKey>>(new Set());
  const [limitHit, setLimitHit] = useState(false);
  const [activeLevel, setActiveLevel] = useState<Level>(
    PUBLISHED_LEVELS[0] ?? "o-level"
  );
  const { addItem } = useCart();
  const router = useRouter();
  const pricing = usePricing();

  const hidden = useMemo(() => new Set(hide), [hide]);
  const levels = useMemo(
    () =>
      PUBLISHED_LEVELS.map((level) => ({
        level,
        subjects: SUBJECTS.filter(
          (s) => s.level === level && !hidden.has(`${level}::${s.slug}`)
        ),
      })).filter((g) => g.subjects.length > 0),
    [hidden]
  );

  const items: CartItem[] = useMemo(
    () =>
      [...selected].map((key) => {
        const [level, subjectSlug] = key.split("::") as [Level, string];
        return { level, subjectSlug, tier: "master" as const };
      }),
    [selected]
  );

  const priced = useMemo(() => pricing.priceCart(items), [pricing, items]);

  function toggle(key: SelectionKey) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
        setLimitHit(false);
      } else if (next.size < MAX_SUBJECTS) {
        next.add(key);
        setLimitHit(false);
      } else {
        setLimitHit(true);
      }
      return next;
    });
  }

  function addAllToCart() {
    for (const item of items) addItem(item);
    router.push("/cart");
  }

  const count = selected.size;
  // Fall back to the first available level if the active one has no subjects
  // (e.g. an embed that hides a whole level).
  const shownLevel = levels.some((g) => g.level === activeLevel)
    ? activeLevel
    : levels[0]?.level;
  const stepMessage =
    count === 0
      ? "Pick your subjects — each comes as the full Master pack: forecast, practice and a full rehearsal."
      : count < 3
        ? `Add ${3 - count} more subject${3 - count === 1 ? "" : "s"} to unlock Mega-Bundle pricing — you'll save on every one.`
        : count < 5
          ? count === 4
            ? "One more subject unlocks All-In — the lowest price per subject there is."
            : "Mega-Bundle applied. Add more subjects and the saving grows."
          : count === 5
            ? "All-In applied — add your 6th and it's effectively free."
            : count === 6
              ? "All-In applied — you can still add up to 2 more subjects."
              : "All-In applied — every subject you take, at the lowest price per subject.";

  if (levels.length === 0) {
    return (
      <p className="mt-4 rounded-2xl border border-hairline bg-surface p-5 text-sm text-body">
        You already own every published subject — nice work.
      </p>
    );
  }

  return (
    <div
      className={`${stacked ? "mt-4 space-y-6" : "mt-10 grid gap-8 lg:grid-cols-3"} ${
        count > 0 ? "pb-20 lg:pb-0" : ""
      }`}
    >
      <div className={stacked ? "space-y-4" : "space-y-5 lg:col-span-2"}>
        {/* Level toggle — pick O-Level (G3) or N(A)-Level (G2); selections in
            both levels persist as you switch. */}
        {levels.length > 1 && (
          <div
            role="tablist"
            aria-label="Choose a level"
            className="inline-flex gap-1 rounded-xl border border-hairline bg-surface p-1"
          >
            {levels.map(({ level }) => {
              const isActive = level === shownLevel;
              return (
                <button
                  key={level}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveLevel(level)}
                  className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                    isActive
                      ? "bg-accent text-night"
                      : "text-body hover:bg-night-2 hover:text-white"
                  }`}
                >
                  {LEVELS[level].name}
                </button>
              );
            })}
          </div>
        )}

        {levels
          .filter(({ level }) => level === shownLevel)
          .map(({ level, subjects }) => (
            <section key={level} aria-labelledby={`bundle-${level}`}>
              <h3 id={`bundle-${level}`} className="sr-only">
                {LEVELS[level].name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => {
                  const key: SelectionKey = `${level}::${subject.slug}`;
                  const active = selected.has(key);
                  const code = subjectCode(level, subject.slug);
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(key)}
                      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                        active
                          ? "border-accent bg-accent text-night"
                          : "border-hairline bg-surface text-body hover:border-accent/60"
                      }`}
                    >
                      {subject.name}
                      {code && (
                        <span className="ml-1.5 font-mono text-xs opacity-70">{code}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        {limitHit && (
          <p className="rounded-lg bg-heat-3/25 px-4 py-2.5 text-sm text-ink" role="alert">
            Bundles cover up to {MAX_SUBJECTS} subjects. Remove one to swap.
          </p>
        )}
      </div>

      <aside
        aria-label="Bundle summary"
        className={stacked ? "" : "lg:sticky lg:top-20 lg:self-start"}
      >
        <div className="rounded-2xl border border-hairline bg-surface p-5">
          <p className="font-display text-lg font-bold text-ink">Your bundle</p>
          <p className="mt-1 text-sm text-body">{stepMessage}</p>
          {count > 0 && (
            <>
              <ul className="mt-4 space-y-1.5 border-t border-hairline pt-4 text-sm">
                {items.map((item) => {
                  const subject = SUBJECTS.find(
                    (s) => s.level === item.level && s.slug === item.subjectSlug
                  );
                  return (
                    <li key={`${item.level}-${item.subjectSlug}`} className="flex justify-between gap-2">
                      <span className="text-body">
                        {subject?.name}{" "}
                        <span className="text-xs text-body/75">
                          · {LEVELS[item.level].shortName}
                        </span>
                      </span>
                      <span className="font-mono text-ink">Master</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 border-t border-hairline pt-4">
                {priced.savings > 0 && (
                  <p className="flex justify-between text-sm text-body">
                    <span>{priced.bundles[0]?.kind === "all-in" ? "All-In" : "Mega-Bundle"} applied</span>
                    <span className="font-mono line-through">{sgd(priced.baseline)}</span>
                  </p>
                )}
                <p className="mt-1 flex justify-between font-display text-xl font-bold text-ink">
                  <span>Total</span>
                  <span className="font-mono">{sgd(priced.total)}</span>
                </p>
                {priced.savings > 0 && (
                  <p className="mt-1 text-right text-sm font-medium text-guarantee">
                    You save {sgd(priced.savings)}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={addAllToCart}
                className="cta-sheen glow-soft mt-5 w-full rounded-lg bg-accent px-5 py-3 text-sm font-bold text-night transition-opacity hover:opacity-90"
              >
                Add {count} subject{count === 1 ? "" : "s"} to cart
              </button>
            </>
          )}
          {count === 0 && (
            <p className="mt-4 text-sm text-body">
              Not sure what to pick?{" "}
              <Link href="/subjects" className="font-medium text-accent underline">
                Browse subjects
              </Link>{" "}
              first.
            </p>
          )}
        </div>
      </aside>

      {/* On phones the summary card sits below the pickers, so the running
          total rides in a sticky bar — watching the price drop as subjects go
          in is the whole fun of the bundle. */}
      {count > 0 && (
        <div
          data-bottom-cta=""
          className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-night/95 backdrop-blur lg:hidden"
        >
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <p className="font-mono text-base font-bold text-ink">
                {sgd(priced.total)}
                {priced.savings > 0 && (
                  <span className="ml-2 text-xs font-medium text-guarantee">
                    save {sgd(priced.savings)}
                  </span>
                )}
              </p>
              <p className="truncate text-xs text-body">
                {count} subject{count === 1 ? "" : "s"} · Master pack each
              </p>
            </div>
            <button
              type="button"
              onClick={addAllToCart}
              className="cta-sheen shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
