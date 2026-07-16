import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects, sgDay } from "@/lib/server/study";
import { formulasForFamilies } from "@/lib/formula-bank";
import { DrillsHub, type StructuredCard, type SubjectTopics } from "@/components/drills-hub";

export const metadata: Metadata = { title: "Drills" };
export const dynamic = "force-dynamic";

// Deterministic day-seeded shuffle so the structured set rotates daily but is
// stable within a day.
function hashStr(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default async function DrillsPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  const subjects = await ownedSubjects(customerId);
  if (subjects.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">
          Drills unlock with your first subject
        </p>
        <Link
          href="/account/add-subjects"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
        >
          Add a subject
        </Link>
      </div>
    );
  }

  const ownedKeys = subjects.map((s) => ({ level: s.level, slug: s.slug }));

  // Topics per subject (for the Explain-it-back picker), from the teaching
  // cards' own topic labels.
  const topicRows = await prisma.gameTeachingCard.findMany({
    where: { OR: ownedKeys },
    select: { level: true, slug: true, dataJson: true },
  });
  const topicsBySubject = new Map<string, Set<string>>();
  for (const row of topicRows) {
    try {
      const t = (JSON.parse(row.dataJson) as { topic?: string }).topic;
      if (!t) continue;
      const k = `${row.level}/${row.slug}`;
      if (!topicsBySubject.has(k)) topicsBySubject.set(k, new Set());
      topicsBySubject.get(k)!.add(t);
    } catch {
      // skip malformed card
    }
  }
  const subjectTopics: SubjectTopics[] = subjects.map((s) => ({
    level: s.level,
    slug: s.slug,
    name: s.name,
    topics: [...(topicsBySubject.get(`${s.level}/${s.slug}`) ?? [])].sort(),
  }));

  // Today's structured-answer set: precision cards (prompt + model answer with
  // crediting phrases in CAPS), rotated daily.
  const precisionRows = await prisma.gameTeachingCard.findMany({
    where: { kind: "precision", OR: ownedKeys },
  });
  const day = sgDay();
  const structured: StructuredCard[] = precisionRows
    .map((c) => {
      try {
        const d = JSON.parse(c.dataJson) as {
          topic?: string;
          prompt?: string;
          model?: string;
        };
        if (!d.prompt || !d.model) return null;
        const subj = subjects.find((s) => s.level === c.level && s.slug === c.slug);
        return {
          id: c.id,
          subjectName: subj?.name ?? c.slug,
          topic: d.topic ?? "",
          prompt: d.prompt,
          model: d.model,
          sort: hashStr(`${c.id}:${day}`),
        };
      } catch {
        return null;
      }
    })
    .filter((c): c is StructuredCard & { sort: number } => c !== null)
    .sort((a, b) => a.sort - b.sort)
    .slice(0, 6)
    .map(({ sort: _sort, ...card }) => card);

  const hasFormulas = formulasForFamilies(new Set(subjects.map((s) => s.family))).length > 0;

  return (
    <DrillsHub
      subjects={subjectTopics}
      structured={structured}
      hasFormulas={hasFormulas}
    />
  );
}
