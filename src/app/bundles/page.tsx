import type { Metadata } from "next";
import Link from "next/link";
import { BundleBuilder } from "@/components/bundle-builder";
import { sgd } from "@/lib/catalogue";
import { bundleLadder } from "@/lib/bundle-ladder";
import { getPricing } from "@/lib/server/pricing-store";

export const metadata: Metadata = {
  alternates: { canonical: "/bundles" },
  title: "Bundle builder, Mega-Bundle and All-In pricing",
  description:
    "Pick up to 8 subjects and watch Mega-Bundle and All-In pricing apply live. Ultra tier across every subject you take, saving up to S$572.",
};

export default async function BundlesPage() {
  const pricing = await getPricing();
  const bundles = bundleLadder(pricing);
  const best = bundles[bundles.length - 1];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-3xl font-black text-ink sm:text-4xl">
        One calm plan for every subject.{" "}
        <span className="text-accent">The more you add, the less each costs.</span>
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-body">
        Every subject is the full Ultra pack, Forecast, Companion, Vault and
        Rehearsal, so your child meets every paper with the same focused,
        guesswork-free plan. Add all the subjects they&apos;re sitting and
        you&apos;re always charged the cheapest combination, the price per
        subject drops the more you add, up to{" "}
        <span className="font-semibold text-guarantee">
          {sgd(best.savings)} saved
        </span>{" "}
        on {best.count} subjects.
      </p>

      {/* The real savings ladder, same numbers as /pricing (shared source). */}
      <div className="mt-5 grid gap-2 sm:grid-cols-3 sm:gap-3">
        {bundles.map((b) => (
          <div
            key={b.key}
            className={`rounded-2xl border p-3 sm:p-4 ${
              b.popular ? "border-accent bg-night-2" : "border-hairline bg-surface"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display text-base font-bold text-ink sm:text-lg">
                {b.count} subjects
              </span>
              <span className="rounded-full bg-coral px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-night">
                {b.percentOff}% off
              </span>
              {b.popular && (
                <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-night">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-teal">
              {b.tag}
            </p>
            <p className="mt-2 flex flex-wrap items-baseline gap-1.5">
              <span className="font-display text-sm font-black text-[#ff2056] line-through decoration-[3px] sm:text-lg">
                {sgd(b.value)}
              </span>
              <span className="font-display text-lg font-black text-ink sm:text-2xl">
                {sgd(b.price)}
              </span>
            </p>
            <p className="mt-0.5 text-[11px] font-bold text-body">
              Save {sgd(b.savings)} · about {sgd(Math.round(b.perSubject))} per
              subject
            </p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-body">
        Savings are measured against buying each subject&apos;s four products
        separately. Mixed levels are fine, the cart always applies the cheapest
        valid combination.{" "}
        <Link href="/pricing" className="font-medium text-accent hover:underline">
          See full pricing →
        </Link>
      </p>

      <BundleBuilder />
    </div>
  );
}
