import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects } from "@/lib/server/study";
import { PracticalClient } from "@/components/practical-client";

export const metadata: Metadata = { title: "Practical Lab" };

// Practical Lab: trains the science practical paper. Owners only; works on web
// and in the app (no camera/mic needed).
export default async function PracticalPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);
  const owned = (await ownedSubjects(customerId)).map((s) => ({
    slug: s.slug,
    name: s.name,
    level: (s.level === "na-level" ? "na-level" : "o-level") as "o-level" | "na-level",
    family: s.family,
  }));

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
        Practical <span className="sl-grad-text">Lab</span>
      </h1>
      <p className="mt-1 max-w-md text-sm text-body">
        The practical paper rewards technique: apparatus, measurement, observations, and spotting
        the source of error. Train it here, one skill at a time, for Chemistry, Physics and Biology.
      </p>
      <PracticalClient owned={owned} />
    </div>
  );
}
