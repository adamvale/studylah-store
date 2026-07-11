import { prisma } from "@/lib/db";
import {
  BADGES,
  badgeById,
  levelForXp,
  levelProgress,
  titleForLevel,
} from "@/lib/game";

// Server-authoritative XP. Every award goes through awardXp(), whose
// (customerId, sourceKey) unique index makes each real-world action worth XP
// exactly once — repeating the action is a silent no-op. Levels and titles
// are derived from the summed ledger at read time; nothing is stored that
// could drift.

export interface GamePayload {
  xpGained: number;
  totalXp: number;
  level: number;
  title: string;
  leveledUp: boolean;
  progressPct: number;
  newBadges: { id: string; name: string; emoji: string }[];
}

export async function totalXpFor(customerId: string): Promise<number> {
  const agg = await prisma.xpEvent.aggregate({
    where: { customerId },
    _sum: { amount: true },
  });
  return agg._sum.amount ?? 0;
}

// Grants XP once per (customer, sourceKey). Returns the amount actually
// granted (0 if this key was already spent).
export async function awardXp(
  customerId: string,
  kind: string,
  sourceKey: string,
  amount: number,
  meta?: string
): Promise<number> {
  if (amount <= 0) return 0;
  try {
    await prisma.xpEvent.create({
      data: { customerId, kind, sourceKey, amount, meta },
    });
    return amount;
  } catch {
    return 0; // unique violation — already awarded
  }
}

// Unlocks a badge once; grants its bonus XP through the same ledger.
export async function unlockBadge(
  customerId: string,
  badgeId: string
): Promise<{ id: string; name: string; emoji: string; xp: number } | null> {
  const def = badgeById(badgeId);
  if (!def) return null;
  try {
    await prisma.achievement.create({ data: { customerId, badgeId } });
  } catch {
    return null; // already unlocked
  }
  await awardXp(customerId, "badge", `badge:${badgeId}`, def.xp);
  return { id: def.id, name: def.name, emoji: def.emoji, xp: def.xp };
}

export async function unlockedBadgeIds(customerId: string): Promise<Set<string>> {
  const rows = await prisma.achievement.findMany({
    where: { customerId },
    select: { badgeId: true },
  });
  return new Set(rows.map((r) => r.badgeId));
}

// Which subject gyms this player has cleared, as "level/slug" keys.
export async function clearedGyms(customerId: string): Promise<Set<string>> {
  const rows = await prisma.achievement.findMany({
    where: { customerId, badgeId: { startsWith: "gym:" } },
    select: { badgeId: true },
  });
  return new Set(rows.map((r) => r.badgeId.slice("gym:".length)));
}

// The read model for headers/cards.
export async function getPlayer(customerId: string): Promise<{
  xp: number;
  level: number;
  title: string;
  progressPct: number;
  intoLevel: number;
  needed: number;
  badges: number;
  badgesTotal: number;
}> {
  const [xp, badgeCount] = await Promise.all([
    totalXpFor(customerId),
    prisma.achievement.count({ where: { customerId } }),
  ]);
  const prog = levelProgress(xp);
  return {
    xp,
    level: prog.level,
    title: titleForLevel(prog.level),
    progressPct: prog.pct,
    intoLevel: prog.intoLevel,
    needed: prog.needed,
    badges: badgeCount,
    badgesTotal: BADGES.length,
  };
}

// Helper for award sites: bundle the response the client shows as a toast.
// `xpBefore` must be read BEFORE the awards so leveledUp is detected.
export async function gamePayload(
  customerId: string,
  xpBefore: number,
  xpGained: number,
  newBadges: { id: string; name: string; emoji: string }[]
): Promise<GamePayload> {
  const totalXp = await totalXpFor(customerId);
  const before = levelForXp(xpBefore);
  const prog = levelProgress(totalXp);
  return {
    xpGained,
    totalXp,
    level: prog.level,
    title: titleForLevel(prog.level),
    leveledUp: prog.level > before,
    progressPct: prog.pct,
    newBadges,
  };
}
