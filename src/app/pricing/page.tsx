import type { Metadata } from "next";
import Link from "next/link";
import { getSubject, sgd, tierProducts, ALLIN_EXTRA, ALLIN_FLAT, MEGA_RATIO } from "@/lib/catalogue";
import type { Pricing } from "@/lib/pricing";
import { getPricing } from "@/lib/server/pricing-store";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing: 2026 O Level & N Level Prediction Packs and Bundles",
  description:
    "StudyLah pricing for 2026 O-Level and N(A)-Level exam preparation: Starter, Plus and Ultra tiers per subject, plus 3, 6 and 8 subject Ultra bundles. Instant PDF download, money-back guarantee.",
};

// The tier ladder, styled after the reference: struck original price in neon
// red, the real price slightly bigger in white beside it, and a small bold
// grey "Save S$X" line underneath. Display names: STARTER / PLUS / ULTRA.
const TIERS: {
  key: "essential" | "strategic" | "master";
  name: string;
  note: string;
  popular?: boolean;
  products: string[];
}[] = [
  {
    key: "essential",
    name: "STARTER",
    note: "The entry point",
    products: ["Exam Forecast"],
  },
  {
    key: "strategic",
    name: "PLUS",
    note: "",
    products: ["Exam Forecast", "Sure Questions Vault"],
  },
  {
    key: "master",
    name: "ULTRA",
    note: "",
    popular: true,
    products: [
      "Exam Forecast",
      "Sure Questions Vault",
      "Final Rehearsal",
      "Subject Companion",
      "StudyLand + StudyLah Legends",
    ],
  },
];

// The Higgsfield style discount chip that sits beside a tier name.
function PctChip({ price, value }: { price: number; value: number }) {
  const pct = Math.round((1 - price / value) * 100);
  if (pct <= 0) return null;
  return (
    <span className="shrink-0 rounded-full bg-coral px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wide text-night sm:px-2.5 sm:text-[11px]">
      {pct}% off
    </span>
  );
}

// Reference-style price row: struck original in bold neon red, the actual
// price slightly bigger in white, then a small bold grey "Save S$X" line.
function PriceRow({ price, value }: { price: number; value?: number }) {
  const discounted = value !== undefined && value > price;
  return (
    <div className="mt-2">
      <p className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
        {discounted && (
          <span className="font-display text-sm font-black text-[#ff2056] line-through sm:text-2xl">
            {sgd(value)}
          </span>
        )}
        <span className="font-display text-lg font-black text-white sm:text-3xl">
          {sgd(price)}
        </span>
      </p>
      {discounted && (
        <p className="mt-1 text-[10px] font-bold text-body sm:text-xs">
          Save {sgd(value - price)}
        </p>
      )}
    </div>
  );
}

function PricingTiers({ pricing }: { pricing: Pricing }) {
  const { tierPrice, tierValue } = pricing;
  // Value/savings reflect a full four-product (science) suite, so Master reads
  // its true bundle value rather than the 3-product default.
  const refSubject = getSubject("o-level", "chemistry-pure");
  return (
    <section id="tiers" className="reveal scroll-mt-24 pb-6 pt-14">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-center font-display text-4xl font-black text-white sm:text-5xl">
          Choose your tier
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cloud">
          Most families choose{" "}
          <span className="font-semibold text-accent">Ultra</span>: the complete
          plan that turns ten years of exam data into a calm, focused final
          month, and the biggest saving. Start smaller only if you prefer.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-5">
          {TIERS.map((t) => {
            const products = refSubject
              ? tierProducts(t.key, refSubject)
              : undefined;
            const price = tierPrice("o-level", t.key);
            const value = tierValue("o-level", t.key, products);
            return (
              <div
                key={t.key}
                className={`relative flex flex-col rounded-2xl border p-3 sm:p-6 ${
                  t.popular
                    ? "border-accent bg-night-2"
                    : "border-hairline bg-surface"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wide text-night sm:-top-3 sm:px-3 sm:py-1 sm:text-[11px]">
                    <span className="sm:hidden">Best value</span>
                    <span className="hidden sm:inline">
                      Most popular · Best value
                    </span>
                  </span>
                )}
                <p className="flex flex-wrap items-center gap-1.5 font-display text-base font-bold text-white sm:gap-2 sm:text-2xl">
                  {t.name}
                  <PctChip price={price} value={value} />
                </p>

                {t.key === "essential" ? (
                  <>
                    <PriceRow price={price} />
                    <p className="mt-2 text-[10px] text-body sm:text-sm">{t.note}</p>
                  </>
                ) : (
                  <PriceRow price={price} value={value} />
                )}

                <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-2">
                  {t.products.map((p) => (
                    <li
                      key={p}
                      className="flex gap-1.5 text-[11px] leading-tight text-cloud sm:gap-2 sm:text-sm"
                    >
                      <span aria-hidden="true" className="text-guarantee">
                        •
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-center font-mono text-xs text-body">
          N(A)-Level: Starter {sgd(pricing.tierPrice("na-level", "essential"))} ·
          Plus {sgd(pricing.tierPrice("na-level", "strategic"))} · Ultra{" "}
          {sgd(pricing.tierPrice("na-level", "master"))}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Link
            href="/subjects"
            className="btn-pixel cta-sheen glow-soft rounded bg-accent px-7 py-3.5 text-sm font-bold text-night"
          >
            Choose your subject →
          </Link>
          <p className="text-center font-mono text-xs text-body">
            Instant PDF download · works right up to exam day · watermarked to
            you
          </p>
        </div>
      </div>
    </section>
  );
}

// The bundle ladder: 3, 6 and 8 Master subjects. Savings and the discount
// chip measure against the FULL per-subject parts value (what all four
// products cost a la carte, S$116 for O-Level), not just the Master price,
// so the struck number is the true value of what the buyer receives.
function BundleTiers({ pricing }: { pricing: Pricing }) {
  const master = pricing.tierPrice("o-level", "master");
  const refSubject = getSubject("o-level", "chemistry-pure");
  const masterValue = pricing.tierValue(
    "o-level",
    "master",
    refSubject ? tierProducts("master", refSubject) : undefined
  );
  const bundles = [
    {
      key: "mega",
      count: 3,
      name: "3 subjects",
      tag: "Mega Bundle",
      price: Math.round(3 * master * MEGA_RATIO),
      popular: false,
    },
    {
      key: "allin6",
      count: 6,
      name: "6 subjects",
      tag: "All-In",
      price: ALLIN_FLAT["o-level"],
      popular: true,
    },
    {
      key: "allin8",
      count: 8,
      name: "8 subjects",
      tag: "All-In +2",
      price: ALLIN_FLAT["o-level"] + 2 * ALLIN_EXTRA["o-level"],
      popular: false,
    },
  ].map((b) => ({
    ...b,
    value: b.count * masterValue,
    savings: b.count * masterValue - b.price,
    perSubject: b.price / b.count,
  }));

  return (
    <section id="bundles" className="reveal scroll-mt-24 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl font-black text-white sm:text-4xl">
          Choose your bundle
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cloud">
          Every bundle is full <span className="font-semibold text-accent">Ultra tier</span> for
          every subject in it. The more subjects you stack, the more you keep.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-5">
          {bundles.map((b) => (
            <div
              key={b.key}
              className={`relative flex flex-col rounded-2xl border p-3 sm:p-6 ${
                b.popular ? "border-accent bg-night-2" : "border-hairline bg-surface"
              }`}
            >
              {b.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wide text-night sm:-top-3 sm:px-3 sm:py-1 sm:text-[11px]">
                  Most popular
                </span>
              )}
              <p className="flex flex-wrap items-center gap-1.5 font-display text-base font-bold text-white sm:gap-2 sm:text-2xl">
                {b.name}
                <PctChip price={b.price} value={b.value} />
              </p>
              <p className="font-mono text-[9px] font-bold uppercase tracking-wide text-teal sm:text-[11px]">
                {b.tag}
              </p>

              <PriceRow price={b.price} value={b.value} />

              <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-2">
                <li className="flex gap-1.5 text-[11px] leading-tight text-cloud sm:gap-2 sm:text-sm">
                  <span aria-hidden="true" className="text-guarantee">•</span>
                  {b.count} Ultra subjects, your pick
                </li>
                <li className="flex gap-1.5 text-[11px] leading-tight text-cloud sm:gap-2 sm:text-sm">
                  <span aria-hidden="true" className="text-guarantee">•</span>
                  About {sgd(Math.round(b.perSubject))} per subject
                </li>
                <li className="flex gap-1.5 text-[11px] leading-tight text-cloud sm:gap-2 sm:text-sm">
                  <span aria-hidden="true" className="text-guarantee">•</span>
                  StudyLand + Legends for every subject
                </li>
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center font-mono text-xs text-body">
          Mix any levels and subjects; the cart always charges the cheapest
          valid combination automatically.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Link
            href="/bundles"
            className="btn-pixel cta-sheen glow-soft rounded bg-accent px-7 py-3.5 text-sm font-bold text-night"
          >
            Build your bundle →
          </Link>
          <div className="mx-auto max-w-2xl rounded-xl border border-hairline bg-surface px-4 py-3 text-center text-sm text-cloud">
            <span className="font-medium text-guarantee">
              Money-back guarantee.
            </span>{" "}
            Full refund if fewer than 3 of our top-5 forecast topics appear in
            the paper, email your order ID within 14 days of the exam.{" "}
            <Link href="/faq" className="font-medium text-accent hover:underline">
              How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function PricingPage() {
  const pricing = await getPricing();
  return (
    <div>
      <PricingTiers pricing={pricing} />
      <BundleTiers pricing={pricing} />
    </div>
  );
}
