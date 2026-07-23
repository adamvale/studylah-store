import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects } from "@/lib/server/study";
import { coverageCount } from "@/lib/topic-coverage";
import { isFeatureClosed } from "@/lib/feature-gates";
import { PageHeading } from "@/components/page-heading";
import { PracticalClient } from "@/components/practical-client";

export const metadata: Metadata = { title: "Practical Lab" };

// Practical Lab: trains the science practical paper. Owners only; works on web
// and in the app (no camera/mic needed).
export default async function PracticalPage() {
  if (isFeatureClosed("practical")) redirect("/account/learn");
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);
  const owned = (await ownedSubjects(customerId)).map((s) => ({
    slug: s.slug,
    name: s.name,
    level: (s.level === "na-level" ? "na-level" : "o-level") as "o-level" | "na-level",
    family: s.family,
  }));

  // Topic coverage per science (how many syllabus topics have a lesson), from
  // the O-Level pure tables where the lessons target.
  const coverage: Record<string, { covered: number; total: number }> = {
    chemistry: coverageCount("o-level", "chemistry-pure"),
    physics: coverageCount("o-level", "physics-pure"),
    biology: coverageCount("o-level", "biology-pure"),
  };

  return (
    <div>
      <PageHeading description="The practical paper rewards technique: apparatus, measurement, observations, and spotting the source of error. Train it here, one skill at a time, for Chemistry, Physics and Biology.">
        Practical <span className="sl-grad-text">Lab</span>
      </PageHeading>
      <PracticalClient owned={owned} coverage={coverage} />
    </div>
  );
}
