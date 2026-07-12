import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getQuestionSet } from "@/lib/server/question-bank";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects } from "@/lib/server/study";

// Study Duels, half 1: create + list. A duel is a server-dealt, SEALED set
// of 5 MCQs behind a share code. Codes travel outside the app between
// friends — there is no matchmaking, no discovery, no chat, and no
// leaderboard. Compliance: both sides earn effort XP on submission (see
// take/route.ts); the only "prize" is a cosmetic laurel on that result
// screen. Question keys never leave the server.

const DUEL_SIZE = 5;

function mintCode(): string {
  // 8 chars, unambiguous alphabet, grouped for read-aloud sharing
  const alpha = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 8; i++) out += alpha[Math.floor(Math.random() * alpha.length)];
  return `${out.slice(0, 4)}-${out.slice(4)}`;
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { level?: unknown; slug?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  if (!getSubject(level, slug)) {
    return NextResponse.json({ error: "Unknown subject." }, { status: 400 });
  }
  const owned = await ownedSubjects(customerId);
  if (!owned.some((s) => s.level === level && s.slug === slug)) {
    return NextResponse.json({ error: "Own this subject to duel in it." }, { status: 403 });
  }

  const set = await getQuestionSet(level, slug);
  const mcqs = set?.questions.filter((q) => q.type === "mcq" && q.options?.length) ?? [];
  if (mcqs.length < DUEL_SIZE) {
    return NextResponse.json({ error: "Not enough questions for a duel here yet." }, { status: 400 });
  }
  const dealt = [...mcqs].sort(() => Math.random() - 0.5).slice(0, DUEL_SIZE);

  // a fresh code; retry on the (astronomically rare) collision
  let code = mintCode();
  for (let i = 0; i < 3; i++) {
    const clash = await prisma.duel.findUnique({ where: { code } });
    if (!clash) break;
    code = mintCode();
  }

  const duel = await prisma.duel.create({
    data: {
      code,
      level,
      slug,
      questionIdsJson: JSON.stringify(dealt.map((q) => q.id)),
      creatorId: customerId,
    },
  });

  return NextResponse.json({
    code: duel.code,
    subject: { level, slug },
    questions: dealt.map(({ id, type, topic, stem, options, marks }) => ({
      id,
      type,
      topic,
      stem,
      options,
      marks,
    })),
  });
}

// GET: the caller's recent duels (capped — a mailbox, not a ranking).
export async function GET() {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  const rows = await prisma.duel.findMany({
    where: { OR: [{ creatorId: customerId }, { challengerId: customerId }] },
    orderBy: { createdAt: "desc" },
    take: 10,
  });
  return NextResponse.json({
    duels: rows.map((d) => {
      const mine = d.creatorId === customerId ? d.creatorScore : d.challengerScore;
      const theirs = d.creatorId === customerId ? d.challengerScore : d.creatorScore;
      return {
        code: d.code,
        level: d.level,
        slug: d.slug,
        role: d.creatorId === customerId ? "creator" : "challenger",
        myScore: mine,
        rivalScore: theirs,
        total: DUEL_SIZE,
        complete: d.creatorScore !== null && d.challengerScore !== null,
      };
    }),
  });
}
