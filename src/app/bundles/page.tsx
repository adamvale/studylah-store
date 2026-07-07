import type { Metadata } from "next";
import { sgd, ALLIN_FLAT } from "@/lib/catalogue";
import { BundleBuilder } from "@/components/bundle-builder";

export const metadata: Metadata = {
  title: "Bundle builder — Mega-Bundle and All-In pricing",
  description:
    "Pick up to 6 subjects and watch Mega-Bundle and All-In pricing apply live. Master tier across every subject you take.",
};

export default function BundlesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-ink">
        Build your bundle
      </h1>
      <p className="mt-2 max-w-2xl text-body">
        Every bundle is the Master tier — Forecast, Vault, and Rehearsal — for
        each subject you pick. Three subjects unlock the{" "}
        <strong className="font-medium text-ink">Mega-Bundle</strong> (S$168
        for O-Level, save S$36). Five or six unlock{" "}
        <strong className="font-medium text-ink">All-In</strong> (
        {sgd(ALLIN_FLAT["o-level"])}
        {" flat for O-Level — your 6th subject is effectively free). You're always charged the cheapest combination."}
      </p>
      <BundleBuilder />
    </div>
  );
}
