import { NextResponse } from "next/server";
import { getCustomerId } from "@/lib/server/customer-session";
import { STARTERS } from "@/lib/game";
import {
  awardXp,
  unlockBadge,
  totalXpFor,
  gamePayload,
  markAchievement,
  type GamePayload,
} from "@/lib/server/xp";

// Records a story beat in the Fog Frontier adventure. Every beat is earned
// by play the client can't fake cheaply (battles are graded server-side by
// /game/answer before the client reports the beat), the XP here is small and
// one-time (unique sourceKey), and beats are idempotent. Worst case for a
// dishonest client: a few dozen XP once — no marks, no grades, no content.

const HEROES = ["scout", "keeper", "agent"]; // male / female / secret agent

const BEATS: Record<string, number> = {
  hero: 5, // chose a researcher
  intro: 5, // finished onboarding with the Elder
  starter: 5, // chose a companion spirit
  rival1: 15, // first rival battle won
  fog1: 10, // saw off the Fog Order grunt in Haven
  fog2: 15, // defeated the Fog Order commander at the Summit
  rival2: 15, // rival rematch at the Summit
  championship: 50, // cleared the gauntlet (also unlocks the champion badge)
  ninth: 50, // lit the unofficial Old Campus beacon (post-game epilogue)
};

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { beat?: unknown; choice?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const beat = typeof body.beat === "string" ? body.beat : "";
  if (!(beat in BEATS)) {
    return NextResponse.json({ error: "Unknown beat." }, { status: 400 });
  }

  // Hero + starter choices ride their own achievements so the sprites
  // survive reinstalls. First choice wins; choosing is one-time.
  if (beat === "hero") {
    const choice = typeof body.choice === "string" ? body.choice : "";
    if (!HEROES.includes(choice)) {
      return NextResponse.json({ error: "Unknown researcher." }, { status: 400 });
    }
    await markAchievement(customerId, `hero:${choice}`);
  }
  if (beat === "starter") {
    const choice = typeof body.choice === "string" ? body.choice : "";
    if (!STARTERS.some((s) => s.id === choice)) {
      return NextResponse.json({ error: "Unknown companion." }, { status: 400 });
    }
    await markAchievement(customerId, `starter:${choice}`);
  }

  const fresh = await markAchievement(customerId, `story:${beat}`);

  let game: GamePayload | null = null;
  if (fresh) {
    const xpBefore = await totalXpFor(customerId);
    let gained = await awardXp(customerId, "story", `story:${beat}`, BEATS[beat]);
    const newBadges: { id: string; name: string; emoji: string }[] = [];
    if (beat === "championship") {
      const b = await unlockBadge(customerId, "champion");
      if (b) {
        newBadges.push({ id: b.id, name: b.name, emoji: b.emoji });
        gained += b.xp;
      }
    }
    if (gained > 0) game = await gamePayload(customerId, xpBefore, gained, newBadges);
  }

  return NextResponse.json({ done: true, fresh, game });
}
