import type { Metadata } from "next";
import { BundleBuilder } from "@/components/bundle-builder";

export const metadata: Metadata = {
  alternates: { canonical: "/bundles" },
  title: "Bundle builder — Mega-Bundle and All-In pricing",
  description:
    "Pick up to 8 subjects and watch Mega-Bundle and All-In pricing apply live. Master tier across every subject you take.",
};

// The savings ladder, as scannable badge-pills instead of a paragraph — the
// same message ("more subjects = cheaper each") with the picker in view sooner.
const TIERS: { badge: string; title: string; note: string }[] = [
  { badge: "3+", title: "Mega-Bundle", note: "save S$36" },
  { badge: "5+", title: "All-In", note: "lowest price per subject" },
  { badge: "8", title: "max subjects", note: "one combined Study HQ plan" },
];

export default function BundlesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-3xl font-black text-ink sm:text-4xl">
        The more subjects, the less each one costs.
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-body">
        Every subject is the full Master pack — Forecast, Companion, Vault and
        Rehearsal. You&apos;re always charged the cheapest combination, so the
        price per subject drops the more you add.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {TIERS.map((t) => (
          <div
            key={t.badge}
            className="flex items-center gap-2 rounded-full border border-hairline bg-surface py-1.5 pl-1.5 pr-3.5"
          >
            <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-xs font-bold text-night">
              {t.badge}
            </span>
            <span className="text-sm font-medium text-ink">{t.title}</span>
            <span className="text-xs text-body">· {t.note}</span>
          </div>
        ))}
      </div>

      <BundleBuilder />
    </div>
  );
}
