import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects } from "@/lib/server/study";
import { clearedGyms } from "@/lib/server/xp";
import { Adventure } from "@/components/adventure";
import type { WorldSubject } from "@/lib/game/world";

export const metadata: Metadata = { title: "Adventure" };

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

  const [subjects, cleared] = await Promise.all([
    ownedSubjects(customerId),
    clearedGyms(customerId),
  ]);

  const worldSubjects: WorldSubject[] = subjects.map((s) => ({
    level: s.level,
    slug: s.slug,
    name: s.name,
    short: sigil(s.name),
    emoji: EMOJI_BY_FAMILY[s.family] ?? "🏛️",
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-ink">Adventure</h2>
        <p className="mt-1 text-sm text-body">
          Walk the town, cross the tall grass — wild monsters attack, and the
          only way to beat them is to answer correctly. Clear each subject&apos;s
          gym to earn its badge. Every question is real; every win is real XP.
        </p>
      </div>

      {worldSubjects.length === 0 ? (
        <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
          <p className="font-display text-lg font-bold text-ink">
            The map unlocks with your first subject
          </p>
          <p className="mt-2 text-sm text-body">
            Each subject you own becomes a gym on the map, with its own monsters
            to battle.
          </p>
          <Link
            href="/account/add-subjects"
            className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Add a subject
          </Link>
        </div>
      ) : (
        <Adventure subjects={worldSubjects} cleared={[...cleared]} />
      )}
    </div>
  );
}
