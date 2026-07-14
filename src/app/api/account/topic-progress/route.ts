import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { tierForTopic } from "@/lib/server/risk";
import { XP } from "@/lib/game";
import { awardXp, unlockBadge, totalXpFor, gamePayload, type GamePayload } from "@/lib/server/xp";

// Saves one topic's study status (0 untouched · 1 revised · 2 practised ·
// 3 confident). Fetch-called from the study-plan checklist with optimistic UI.
//
// XP: each status step a topic reaches for the FIRST time pays out, priced by
// the topic's forecast tier. The per-(topic, status) sourceKey means cycling
// a topic back and forth can never farm XP.
export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { level?: unknown; slug?: unknown; topic?: unknown; status?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  const topic = typeof body.topic === "string" ? body.topic.slice(0, 120) : "";
  const status = Number(body.status);
  if (
    !getSubject(level, slug) ||
    !topic ||
    !Number.isInteger(status) ||
    status < 0 ||
    status > 3
  ) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  await prisma.topicProgress.upsert({
    where: { customerId_level_slug_topic: { customerId, level, slug, topic } },
    create: { customerId, level, slug, topic, status },
    update: { status },
  });

  // ── XP + fog badges ─────────────────────────────────────────────────────
  let game: GamePayload | null = null;
  if (status > 0) {
    const xpBefore = await totalXpFor(customerId);
    const tier = tierForTopic(level, slug, topic) ?? "watch";
    const step = XP.topicStepByTier[tier] ?? 2;
    let gained = 0;
    // Reaching status N for the first time also credits any skipped steps
    // (a topic taken straight to Confident earns all three).
    for (let s = 1; s <= status; s++) {
      gained += await awardXp(
        customerId,
        "topic_up",
        `topic:${level}/${slug}/${topic}:${s}`,
        step,
        tier
      );
    }
    const newBadges: { id: string; name: string; emoji: string }[] = [];
    if (status === 3) {
      const confident = await prisma.topicProgress.count({
        where: { customerId, status: 3 },
      });
      for (const [n, id] of [[10, "fog-10"], [25, "fog-25"]] as const) {
        if (confident >= n) {
          const b = await unlockBadge(customerId, id);
          if (b) {
            newBadges.push({ id: b.id, name: b.name, emoji: b.emoji });
            gained += b.xp;
          }
        }
      }
    }
    if (gained > 0 || newBadges.length > 0) {
      game = await gamePayload(customerId, xpBefore, gained, newBadges);
    }
  }

  return NextResponse.json({ ok: true, game });
}
