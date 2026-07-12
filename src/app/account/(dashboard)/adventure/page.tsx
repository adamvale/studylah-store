import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects, sgDay } from "@/lib/server/study";
import { computeRisk } from "@/lib/server/risk";
import { clearedGyms, achievementSuffixes } from "@/lib/server/xp";
import { loreFor, isoWeekOf } from "@/lib/game/season";
import { AdventureGame } from "@/components/adventure-game";
import type { WorldSubject } from "@/lib/game/world2";

export const metadata: Metadata = { title: "Fog Frontier" };

// Two-letter subject sigil for the gym signs.
function sigil(name: string): string {
  const words = name.replace(/[()]/g, "").split(/\s+/).filter(Boolean);
  return (words[0]?.[0] ?? "?").concat(words[1]?.[0] ?? "").toUpperCase();
}

// Hoisted so the impurity (Date.now) isn't called during render — see
// react-hooks/purity and the same pattern on the Today page.
function examWindow(): { from: Date; to: Date } {
  const now = Date.now();
  return { from: new Date(now - 12 * 60 * 60 * 1000), to: new Date(now + 7 * 24 * 60 * 60 * 1000) };
}

const EMOJI_BY_FAMILY: Record<string, string> = {
  chemistry: "🧪",
  physics: "⚡",
  biology: "🧬",
  geography: "🌏",
  history: "📜",
  "social-studies": "🏛️",
  poa: "📊",
  emath: "➗",
  amath: "📐",
  fnn: "🍳",
};

export default async function AdventurePage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  const today = sgDay();
  const [subjects, cleared, story, starters, beatenBosses, fronts, underCleared, campusCleared, questsDone] =
    await Promise.all([
      ownedSubjects(customerId),
      clearedGyms(customerId),
      achievementSuffixes(customerId, "story:"),
      achievementSuffixes(customerId, "starter:"),
      achievementSuffixes(customerId, "boss:"),
      achievementSuffixes(customerId, "front:"),
      achievementSuffixes(customerId, "under:"),
      achievementSuffixes(customerId, "campus:"),
      achievementSuffixes(customerId, "quest:"),
    ]);

  const worldSubjects: WorldSubject[] = subjects.map((s) => ({
    level: s.level,
    slug: s.slug,
    name: s.name,
    short: sigil(s.name),
    emoji: EMOJI_BY_FAMILY[s.family] ?? "🏛️",
    family: s.family,
  }));

  if (worldSubjects.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">
          The Fog Frontier unlocks with your first subject
        </p>
        <p className="mt-2 text-sm text-body">
          Each subject you own becomes a whole province — a route of wild
          monsters, a town, and a gym to conquer.
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

  // ── The weekly Fog Front: the weakest subject's landmark, occupied ──────
  // Cleared state persists as achievement front:<isoweek>.
  const week = isoWeekOf(today);
  let front: { key: string; species: string; place: string } | null = null;
  if (!fronts.has(week)) {
    const risks = await computeRisk(customerId);
    const weakest = risks[0];
    if (weakest) {
      const subj = worldSubjects.find((s) => s.level === weakest.level && s.slug === weakest.slug);
      if (subj) {
        const lore = loreFor(subj.family);
        front = {
          key: `${subj.level}/${subj.slug}`,
          species: lore.route[0].species,
          place: `${lore.landmark} (${lore.place})`,
        };
      }
    }
  }

  // ── Notebook echoes: latest uncleared mistake per subject ────────────────
  const unresolved = await prisma.mistakeEntry.findMany({
    where: { customerId, resolved: false },
    orderBy: { createdAt: "desc" },
    select: { level: true, slug: true, reason: true },
    take: 60,
  });
  const echoBySubject: Record<string, string> = {};
  for (const m of unresolved) {
    const key = `${m.level}/${m.slug}`;
    if (!echoBySubject[key] && m.reason !== "unset") echoBySubject[key] = m.reason;
  }

  // ── Exam Week Mode: any of the student's papers within the next 7 days ──
  const win = examWindow();
  const examWeek =
    (await prisma.examDate.count({
      where: { customerId, at: { gte: win.from, lte: win.to } },
    })) > 0;

  return (
    <AdventureGame
      subjects={worldSubjects}
      cleared={[...cleared]}
      story={[...story]}
      starter={[...starters][0] ?? null}
      beaten={[...beatenBosses, ...(fronts.has(week) ? ["front"] : [])]}
      underCleared={[...underCleared]}
      campusCleared={[...campusCleared]}
      questsDone={[...questsDone]}
      front={front}
      echoBySubject={echoBySubject}
      examWeek={examWeek}
    />
  );
}
