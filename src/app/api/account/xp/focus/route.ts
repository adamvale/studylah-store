import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { sgDay } from "@/lib/server/study";
import { XP } from "@/lib/game";
import { awardXp, totalXpFor, gamePayload } from "@/lib/server/xp";

// A completed focus block (pomodoro) reports here for XP. The timer runs
// client-side, so this is the one award the server can't fully witness —
// exposure is capped hard: only full blocks (≥20 min claimed) and at most
// 4 awards per Singapore day.
const MAX_PER_DAY = 4;

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { minutes?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const minutes = Number(body.minutes);
  if (!Number.isFinite(minutes) || minutes < 20) {
    return NextResponse.json({ ok: true, game: null }); // short blocks: no XP, no error
  }

  const today = sgDay();
  const usedToday = await prisma.xpEvent.count({
    where: { customerId, kind: "focus", sourceKey: { startsWith: `focus:${today}:` } },
  });
  if (usedToday >= MAX_PER_DAY) {
    return NextResponse.json({ ok: true, game: null, capped: true });
  }

  const xpBefore = await totalXpFor(customerId);
  const gained = await awardXp(
    customerId,
    "focus",
    `focus:${today}:${usedToday + 1}`,
    XP.focusSession,
    `${Math.round(minutes)}min`
  );
  const game = gained > 0 ? await gamePayload(customerId, xpBefore, gained, []) : null;
  return NextResponse.json({ ok: true, game });
}
