import { prisma } from "@/lib/db";
import { clearedGyms, achievementSuffixes, totalXpFor } from "@/lib/server/xp";
import { ownedSubjects, sgDay } from "@/lib/server/study";
import { levelForXp } from "@/lib/game";
import { actProgress, groupEligibleFrom, bandForLevel, type ActContext } from "@/lib/game/acts";

// ── The Phase 4 foundation: who may join group challenges, and in which
// band. BOTH rules are enforced here, server-side, so no client can join a
// team early or punch outside its level band:
//   1. solo-story gate: Act I complete + first beacon lit (owner's design)
//   2. level band: matchmaking may only pair students in the same band
export interface GroupStanding {
  eligible: boolean;
  actIDone: boolean;
  gymsLit: number;
  level: number;
  band: { id: string; name: string; min: number; max: number };
  dailyDone: boolean;
  dueReviews: number;
}

export async function groupStanding(customerId: string): Promise<GroupStanding> {
  const today = sgDay();
  const [subjects, gyms, story, bosses, under, quests, xp, dailyRow, due] = await Promise.all([
    ownedSubjects(customerId),
    clearedGyms(customerId),
    achievementSuffixes(customerId, "story:"),
    achievementSuffixes(customerId, "boss:"),
    achievementSuffixes(customerId, "under:"),
    achievementSuffixes(customerId, "quest:"),
    totalXpFor(customerId),
    prisma.dailyQuizDay.findUnique({
      where: { customerId_day: { customerId, day: today } },
      select: { answered: true },
    }),
    prisma.reviewCard.count({ where: { customerId, dueAt: { lte: new Date() } } }),
  ]);

  const ctx: ActContext = {
    story,
    gymsLit: [...gyms].length,
    gymsTotal: subjects.length,
    beaten: bosses,
    underCleared: [...under].length,
    questsDone: quests,
  };
  const level = levelForXp(xp);
  const [act1] = actProgress(ctx);

  return {
    eligible: groupEligibleFrom(ctx),
    actIDone: act1.complete,
    gymsLit: ctx.gymsLit,
    level,
    band: bandForLevel(level),
    dailyDone: (dailyRow?.answered ?? 0) >= 3,
    dueReviews: due,
  };
}
