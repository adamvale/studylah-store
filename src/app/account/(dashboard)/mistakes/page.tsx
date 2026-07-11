import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { fullForecast } from "@/lib/topics";
import { FORECAST_TABLES } from "@/lib/forecast-tables";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects } from "@/lib/server/study";
import { MistakeNotebook, type MistakeItem } from "@/components/mistake-notebook";
import { MonsterDex, type DexCounts } from "@/components/monster-dex";

export const metadata: Metadata = { title: "Mistakes" };

export default async function MistakesPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  const [rows, subjects] = await Promise.all([
    prisma.mistakeEntry.findMany({
      where: { customerId },
      orderBy: [{ resolved: "asc" }, { createdAt: "desc" }],
    }),
    ownedSubjects(customerId),
  ]);

  const nameFor = (level: string, slug: string) =>
    getSubject(level as Level, slug)?.name ?? slug;

  const initial: MistakeItem[] = rows.map((r) => ({
    id: r.id,
    level: r.level,
    slug: r.slug,
    subjectName: nameFor(r.level, r.slug),
    topic: r.topic,
    stem: r.stem,
    correctAnswer: r.correctAnswer,
    myAnswer: r.myAnswer,
    reason: r.reason,
    source: r.source,
    note: r.note,
    resolved: r.resolved,
    clearStreak: r.clearStreak,
    nextResurfaceAt: r.nextResurfaceAt ? r.nextResurfaceAt.toISOString() : null,
    canRetest: Boolean(r.questionId),
    createdAt: r.createdAt.toISOString(),
  }));

  // Topic suggestions for the add form's datalist — the subject's real 2026
  // forecast topics, same source the study checklist uses.
  const topicsBySubject: Record<string, string[]> = {};
  for (const s of subjects) {
    const key = `${s.level}/${s.slug}`;
    const table = FORECAST_TABLES[key];
    topicsBySubject[key] = table
      ? table.map((t) => t.topic)
      : fullForecast(
          getSubject(s.level, s.slug)?.family as Parameters<typeof fullForecast>[0],
          key
        ).map((t) => t.topic);
  }

  // Dex counts: species (the WHY) × at-large / banished.
  const dexMap = new Map<string, DexCounts>();
  for (const r of rows) {
    const entry = dexMap.get(r.reason) ?? { reason: r.reason, atLarge: 0, banished: 0 };
    if (r.resolved) entry.banished++;
    else entry.atLarge++;
    dexMap.set(r.reason, entry);
  }
  const dexCounts = [...dexMap.values()];

  return (
    <div className="space-y-6">
      <MonsterDex counts={dexCounts} />
      <div>
        <h2 className="font-display text-2xl font-bold text-ink">
          The bestiary <span className="text-body">(错题本)</span>
        </h2>
        <p className="mt-1 text-sm text-body">
          Every mistake is a monster, and its species is WHY you lost the mark.
          Identify each one, then beat it twice in your daily three to banish it
          for good. Auto-captured from your daily practice and readiness checks
          — add your own from school papers.
        </p>
      </div>

      <MistakeNotebook
        initial={initial}
        subjects={subjects.map((s) => ({ level: s.level, slug: s.slug, name: s.name }))}
        topicsBySubject={topicsBySubject}
      />
    </div>
  );
}
