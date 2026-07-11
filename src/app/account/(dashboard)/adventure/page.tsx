import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects } from "@/lib/server/study";
import { clearedGyms, achievementSuffixes } from "@/lib/server/xp";
import { AdventureGame } from "@/components/adventure-game";
import type { WorldSubject } from "@/lib/game/world2";

export const metadata: Metadata = { title: "Fog Frontier" };

// Two-letter subject sigil for the gym signs.
function sigil(name: string): string {
  const words = name.replace(/[()]/g, "").split(/\s+/).filter(Boolean);
  return (words[0]?.[0] ?? "?").concat(words[1]?.[0] ?? "").toUpperCase();
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

  const [subjects, cleared, story, starters] = await Promise.all([
    ownedSubjects(customerId),
    clearedGyms(customerId),
    achievementSuffixes(customerId, "story:"),
    achievementSuffixes(customerId, "starter:"),
  ]);

  const worldSubjects: WorldSubject[] = subjects.map((s) => ({
    level: s.level,
    slug: s.slug,
    name: s.name,
    short: sigil(s.name),
    emoji: EMOJI_BY_FAMILY[s.family] ?? "🏛️",
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

  return (
    <AdventureGame
      subjects={worldSubjects}
      cleared={[...cleared]}
      story={[...story]}
      starter={[...starters][0] ?? null}
    />
  );
}
