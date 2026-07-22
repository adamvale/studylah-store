import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { TopicFamily } from "@/lib/catalogue";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects } from "@/lib/server/study";
import {
  PRECISION,
  DEFINITIONS,
  QA_DRILLS,
  CARELESS,
  toolsForFamilies,
} from "@/lib/study/practice-content";
import { PracticeTools } from "@/components/practice-tools";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Practice" };

export default async function PracticePage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  const subjects = await ownedSubjects(customerId);
  const families = new Set<TopicFamily>(subjects.map((s) => s.family as TopicFamily));
  const tools = toolsForFamilies(families);

  const gather = <T,>(map: Partial<Record<TopicFamily, T[]>>): T[] =>
    [...families].flatMap((f) => map[f] ?? []);

  const data = {
    tools,
    precision: gather(PRECISION),
    definitions: gather(DEFINITIONS),
    qa: families.has("chemistry") ? QA_DRILLS : [],
    careless: gather(CARELESS),
  };

  return (
    <div className="space-y-6">
      <PageHeading
        size="sm"
        description="Skill drills tuned to your subjects, the phrasing, definitions and formats that decide marks beyond just knowing the content."
      >
        Practice drills
      </PageHeading>

      {subjects.length === 0 ? (
        <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
          <p className="font-display text-lg font-bold text-ink">
            Drills unlock with your subjects
          </p>
          <p className="mt-2 text-sm text-body">
            Own a subject and its skill drills appear here.
          </p>
          <Link
            href="/account/add-subjects"
            className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Add a subject
          </Link>
        </div>
      ) : tools.length === 0 ? (
        <div className="rounded-2xl border border-hairline bg-surface p-8 text-center text-sm text-body">
          Skill drills for your subjects are on the way, check back soon.
        </div>
      ) : (
        <PracticeTools data={data} />
      )}
    </div>
  );
}
