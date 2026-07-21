import type { Metadata } from "next";
import Link from "next/link";
import { getSubject, sgd, tierProducts } from "@/lib/catalogue";
import type { Pricing } from "@/lib/pricing";
import { bundleLadder } from "@/lib/bundle-ladder";
import { PctChip, PriceRow, cardStyle } from "@/components/tier-price-display";
import { getPricing } from "@/lib/server/pricing-store";
import { ExamCountdown } from "@/components/exam-countdown";

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

function PricingTiers({ pricing }: { pricing: Pricing }) {
  const { tierPrice, tierValue } = pricing;
  // Value/savings reflect a full four-product (science) suite, so Ultra reads
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
        {/* Honest urgency: the real paper dates, nothing invented. */}
        <div className="mt-5 flex justify-center">
          <ExamCountdown variant="urgent" />
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-5">
          {TIERS.map((t) => {
            const products = refSubject
              ? tierProducts(t.key, refSubject)
              : undefined;
            const price = tierPrice("o-level", t.key);
            const value = tierValue("o-level", t.key, products);
            const tint =
              t.key === "essential" ? "grey" : t.key === "strategic" ? "lime" : "crimson";
            return (
              <div
                key={t.key}
                className={`relative flex flex-col rounded-2xl border p-3 sm:p-6 ${
                  t.popular ? "border-accent" : "border-hairline"
                }`}
                style={cardStyle(tint)}
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
                {t.key === "essential" && (
                  <p className="mt-1 text-[10px] text-body sm:text-sm">{t.note}</p>
                )}

                <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
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

                {t.key === "essential" ? (
                  <PriceRow price={price} className="mt-auto pt-4" />
                ) : (
                  <PriceRow price={price} value={value} className="mt-auto pt-4" />
                )}
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

// The bundle ladder: 3, 6 and 8 Ultra subjects. The maths lives in
// lib/bundle-ladder.ts so this page and /bundles can never disagree.
function BundleTiers({ pricing }: { pricing: Pricing }) {
  const bundles = bundleLadder(pricing);

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
                b.popular ? "border-accent" : "border-hairline"
              }`}
              style={cardStyle(
                b.key === "mega" ? "grey" : b.key === "allin6" ? "lime" : "crimson"
              )}
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

              <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
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

              <PriceRow price={b.price} value={b.value} className="mt-auto pt-4" />
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
          {/* The receipt: proof beats promises, and we keep ours public. */}
          <p className="text-center text-xs text-body">
            We publish every forecast hit and miss after each sitting.{" "}
            <Link href="/accuracy" className="font-medium text-accent hover:underline">
              Judge us on the record →
            </Link>
          </p>
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
