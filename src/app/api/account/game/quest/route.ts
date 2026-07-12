import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { sgDay } from "@/lib/server/study";
import { questById, isoWeekOf } from "@/lib/game/season";
import {
  awardXp,
  totalXpFor,
  gamePayload,
  markAchievement,
  type GamePayload,
} from "@/lib/server/xp";

// Completes a season-pack activity: side quests (with server verification
// where the notebook can prove it), Undercroft keystones, the weekly Fog
// Front, mini-bosses, and Old Campus tile marks. Everything is idempotent
// (achievement + unique XP sourceKey) and small — a dishonest client earns
// pocket change once, never content, marks, or grades.

const ISO_WEEK = () => isoWeekOf(sgDay());

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { id?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const id = typeof body.id === "string" ? body.id : "";

  // ── resolve what this id is worth + whether the notebook must vouch ─────
  let xp = 0;
  let badgeId = "";

  if (id.startsWith("campus:")) {
    // fog-tile clear marker — world state only, XP comes from the battle
    if (!/^campus:\d+-\d+$/.test(id)) {
      return NextResponse.json({ error: "Unknown mark." }, { status: 400 });
    }
    badgeId = id;
  } else if (id.startsWith("under:")) {
    const key = id.slice("under:".length);
    if (!/^[a-z-]+\/[a-z0-9-]+$/.test(key)) {
      return NextResponse.json({ error: "Unknown keystone." }, { status: 400 });
    }
    badgeId = id;
    xp = 40;
  } else if (id.startsWith("boss:")) {
    const boss = id.slice("boss:".length);
    if (!["whisper", "hurry", "blank"].includes(boss)) {
      return NextResponse.json({ error: "Unknown boss." }, { status: 400 });
    }
    badgeId = id;
    xp = 40;
  } else if (id === "front") {
    badgeId = `front:${ISO_WEEK()}`;
    xp = 50;
  } else if (id.startsWith("chore:")) {
    badgeId = `chore:${sgDay()}`;
    xp = 10;
  } else {
    const quest = questById(id);
    if (!quest) {
      return NextResponse.json({ error: "Unknown quest." }, { status: 400 });
    }
    // notebook-backed quests are verified against the real notebook
    if (quest.serverCheck === "resolved3") {
      const n = await prisma.mistakeEntry.count({ where: { customerId, resolved: true } });
      if (n < 3) return NextResponse.json({ done: false, hint: "The notebook counts three when three are cleared." });
    } else if (quest.serverCheck === "method2") {
      const n = await prisma.mistakeEntry.count({
        where: { customerId, resolved: true, reason: "method" },
      });
      if (n < 2) return NextResponse.json({ done: false, hint: "Two golem entries, re-stacked — the notebook will know." });
    } else if (quest.serverCheck === "oldest") {
      const oldest = await prisma.mistakeEntry.findFirst({
        where: { customerId },
        orderBy: { createdAt: "asc" },
      });
      if (!oldest || !oldest.resolved) {
        return NextResponse.json({ done: false, hint: "The oldest entry still waits at the bottom of the notebook." });
      }
    }
    badgeId = `quest:${quest.id}`;
    xp = quest.xp;
  }

  const fresh = await markAchievement(customerId, badgeId);
  let game: GamePayload | null = null;
  if (fresh && xp > 0) {
    const xpBefore = await totalXpFor(customerId);
    const gained = await awardXp(customerId, "quest", badgeId, xp);
    if (gained > 0) game = await gamePayload(customerId, xpBefore, gained, []);
  }
  return NextResponse.json({ done: true, fresh, game });
}
