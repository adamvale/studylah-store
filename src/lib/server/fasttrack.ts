import "server-only";
import { prisma } from "@/lib/db";
import { recordReview } from "@/lib/server/srs";
import { awardXp } from "@/lib/server/xp";
import { ownedSubjects, sgDay } from "@/lib/server/study";
import {
  PLAYBOOKS,
  familyForSubject,
  playById,
  type Family,
} from "@/lib/fasttrack";

// ── FastTrack progress (server) ──────────────────────────────────────────────
// Mastery rides the shared SRS engine, kind "fasttrack": a play's box climbs
// with each good drill (first good = box 2, second consecutive good = box 3),
// and a poor drill lapses it to box 1. "Mastered" = box >= MASTER_BOX, i.e.
// the student scored well on the drill twice in a row. itemKey = the play id.
//
// XP is small, once per play per SG-day (so it rewards genuine practice, never
// grinding), through the farm-proof ledger. Never promises a grade.

const MASTER_BOX = 3;
const GOOD_PCT = 0.6; // a "good" drill = 60%+ of the marks (the target band)
const XP_PER_DRILL = 6;

export interface PlayState {
  id: string;
  box: number;
  mastered: boolean;
  attempts: number;
  dueForReview: boolean;
}

export interface FamilyProgress {
  family: Family;
  total: number;
  mastered: number;
  states: Record<string, PlayState>; // playId → state
}

// Which FastTrack families the customer has unlocked (owns a mapping subject).
export async function fastTrackFamilies(customerId: string): Promise<Family[]> {
  const owned = await ownedSubjects(customerId);
  const set = new Set<Family>();
  for (const s of owned) {
    const f = familyForSubject(s.family);
    if (f) set.add(f);
  }
  // Stable order: chemistry, physics, biology
  return (["chemistry", "physics", "biology"] as Family[]).filter((f) => set.has(f));
}

export async function fastTrackProgress(customerId: string): Promise<FamilyProgress[]> {
  const families = await fastTrackFamilies(customerId);
  if (families.length === 0) return [];

  const cards = await prisma.reviewCard.findMany({
    where: { customerId, kind: "fasttrack" },
    select: { itemKey: true, box: true, reps: true, dueAt: true },
  });
  const now = new Date();
  const byKey = new Map(cards.map((c) => [c.itemKey, c]));

  return families.map((family) => {
    const plays = PLAYBOOKS[family];
    const states: Record<string, PlayState> = {};
    let mastered = 0;
    for (const p of plays) {
      const card = byKey.get(p.id);
      const box = card?.box ?? 0;
      const isMastered = box >= MASTER_BOX;
      if (isMastered) mastered += 1;
      states[p.id] = {
        id: p.id,
        box,
        mastered: isMastered,
        attempts: card?.reps ?? 0,
        dueForReview: Boolean(card && card.dueAt < now),
      };
    }
    return { family, total: plays.length, mastered, states };
  });
}

export interface RecordResult {
  ok: boolean;
  state?: PlayState;
  xp?: number;
}

// Record a drill attempt. `pct` is marks earned / marks available (0..1),
// computed from the AI marker's server-graded "Score: X/Y". Advances the SRS
// box, awards small once-per-day XP, and reports the new state.
export async function recordFastTrackDrill(
  customerId: string,
  playId: string,
  pct: number
): Promise<RecordResult> {
  const play = playById(playId);
  if (!play) return { ok: false };

  // The play must belong to a family the customer owns (entitlement).
  const families = await fastTrackFamilies(customerId);
  if (!families.includes(play.family)) return { ok: false };

  const good = pct >= GOOD_PCT;
  // FastTrack plays aren't tied to a single level/slug (Pure/Science/NA share
  // the playbook), so store the family as the slug for grouping.
  await recordReview(customerId, "fasttrack", playId, "fasttrack", play.family, good);

  let xp = 0;
  if (good) {
    xp = await awardXp(customerId, "fasttrack", `fasttrack:${playId}:${sgDay()}`, XP_PER_DRILL);
  }

  const card = await prisma.reviewCard.findUnique({
    where: { customerId_kind_itemKey: { customerId, kind: "fasttrack", itemKey: playId } },
    select: { box: true, reps: true, dueAt: true },
  });
  const box = card?.box ?? (good ? 2 : 1);
  return {
    ok: true,
    xp,
    state: {
      id: playId,
      box,
      mastered: box >= MASTER_BOX,
      attempts: card?.reps ?? 1,
      dueForReview: false,
    },
  };
}
