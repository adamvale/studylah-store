import type { Metadata } from "next";
import { sgd, ALLIN_FLAT } from "@/lib/catalogue";
import { BundleBuilder } from "@/components/bundle-builder";

export const metadata: Metadata = {
  alternates: { canonical: "/bundles" },
  title: "Bundle builder — Mega-Bundle and All-In pricing",
  description:
    "Pick up to 6 subjects and watch Mega-Bundle and All-In pricing apply live. Master tier across every subject you take.",
};

export default function BundlesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-black text-ink">
        The more subjects, the less each one costs.
      </h1>
      <p className="mt-2 max-w-2xl text-body">
        Every bundle is the full Master pack — Forecast, Companion, Vault and
        Rehearsal — for each subject you pick. Add{" "}
        <strong className="font-medium text-ink">3 subjects</strong> and the
        Mega-Bundle kicks in (S$168 for O-Level, save S$36). Add{" "}
        <strong className="font-medium text-ink">5 or 6</strong> and All-In caps
        the lot at {sgd(ALLIN_FLAT["o-level"])}{" "}
        for O-Level — your 6th subject is effectively free. Pick your subjects
        below; you&apos;re always charged the cheapest combination.
      </p>
      <BundleBuilder />
    </div>
  );
}
