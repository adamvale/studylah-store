import "server-only";
import { prisma } from "@/lib/db";

// ── Spaced repetition (Leitner) ─────────────────────────────────────────────
// One engine for three card kinds: daily-quiz questions answered CORRECTLY
// (wrong answers ride the mistake notebook's own resurrection system),
// definition cards, and formulas. Fixed intervals per box; a lapse drops the
// card back to box 1. Box 5 cards are "banked" but still resurface at 60 days
// so nothing is ever truly forgotten before exam day.

export type ReviewKind = "question" | "definition" | "formula" | "fasttrack";

export const BOX_INTERVAL_DAYS = [0, 1, 3, 7, 21, 60] as const; // index = box
export const MAX_BOX = 5;

function inDays(days: number): Date {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}

// Record a result. correct=true advances one box; false drops to box 1 and
// counts a lapse. Upserts so first-ever sightings create the card.
export async function recordReview(
  customerId: string,
  kind: ReviewKind,
  itemKey: string,
  level: string,
  slug: string,
  correct: boolean
): Promise<void> {
  const existing = await prisma.reviewCard.findUnique({
    where: { customerId_kind_itemKey: { customerId, kind, itemKey } },
  });
  if (!existing) {
    const box = correct ? 2 : 1;
    await prisma.reviewCard.create({
      data: {
        customerId,
        kind,
        itemKey,
        level,
        slug,
        box,
        reps: 1,
        lapses: correct ? 0 : 1,
        dueAt: inDays(BOX_INTERVAL_DAYS[box]),
      },
    });
    return;
  }
  const box = correct ? Math.min(existing.box + 1, MAX_BOX) : 1;
  await prisma.reviewCard.update({
    where: { id: existing.id },
    data: {
      box,
      reps: existing.reps + 1,
      lapses: existing.lapses + (correct ? 0 : 1),
      dueAt: inDays(BOX_INTERVAL_DAYS[box]),
    },
  });
}

// Cards due before `before`, oldest debt first.
export async function dueReviews(
  customerId: string,
  kind: ReviewKind,
  before: Date,
  take: number
) {
  return prisma.reviewCard.findMany({
    where: { customerId, kind, dueAt: { lt: before } },
    orderBy: { dueAt: "asc" },
    take,
  });
}

export async function reviewStats(customerId: string, kind: ReviewKind) {
  const [total, due, banked] = await Promise.all([
    prisma.reviewCard.count({ where: { customerId, kind } }),
    prisma.reviewCard.count({
      where: { customerId, kind, dueAt: { lt: new Date() } },
    }),
    prisma.reviewCard.count({ where: { customerId, kind, box: MAX_BOX } }),
  ]);
  return { total, due, banked };
}
