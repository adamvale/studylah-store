import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getDiagnosticSet } from "@/lib/diagnostic-questions";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects, isCorrect } from "@/lib/server/study";
import { awardXp, totalXpFor, gamePayload, type GamePayload } from "@/lib/server/xp";
import type { Level } from "@/lib/catalogue";

// Study Duels, half 2: fetch a duel by code (to see its sealed questions)
// and submit one side's answers. Grading is server-side; each player may
// answer their side exactly once; both earn the same effort XP for
// completing, win or lose — the laurel on the result screen is cosmetic.

const DUEL_XP = 20;

function role(duel: { creatorId: string; challengerId: string | null }, customerId: string) {
  if (duel.creatorId === customerId) return "creator" as const;
  if (duel.challengerId === customerId || duel.challengerId === null) return "challenger" as const;
  return null; // duel already has a different challenger
}

export async function PUT(request: Request) {
  // fetch-by-code: returns the sealed questions if the caller may take it
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  let body: { code?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const code = typeof body.code === "string" ? body.code.trim().toUpperCase() : "";
  const duel = await prisma.duel.findUnique({ where: { code } });
  if (!duel) {
    return NextResponse.json({ error: "No duel answers to that code." }, { status: 404 });
  }
  const myRole = role(duel, customerId);
  if (!myRole) {
    return NextResponse.json({ error: "This duel already has its challenger." }, { status: 403 });
  }
  const owned = await ownedSubjects(customerId);
  if (!owned.some((s) => s.level === duel.level && s.slug === duel.slug)) {
    return NextResponse.json(
      { error: "You need this subject to answer this duel." },
      { status: 403 }
    );
  }
  const already = myRole === "creator" ? duel.creatorScore !== null : duel.challengerScore !== null;
  const set = getDiagnosticSet(duel.level as Level, duel.slug);
  const ids = JSON.parse(duel.questionIdsJson) as string[];
  const questions = ids
    .map((id) => set?.questions.find((q) => q.id === id))
    .filter((q): q is NonNullable<typeof q> => Boolean(q))
    .map(({ id, type, topic, stem, options, marks }) => ({ id, type, topic, stem, options, marks }));

  return NextResponse.json({
    code: duel.code,
    subject: { level: duel.level, slug: duel.slug },
    role: myRole,
    alreadyAnswered: already,
    myScore: myRole === "creator" ? duel.creatorScore : duel.challengerScore,
    rivalScore: myRole === "creator" ? duel.challengerScore : duel.creatorScore,
    total: ids.length,
    questions: already ? [] : questions,
  });
}

export async function POST(request: Request) {
  // submit answers for the caller's side
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  let body: { code?: unknown; answers?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const code = typeof body.code === "string" ? body.code.trim().toUpperCase() : "";
  const answers =
    typeof body.answers === "object" && body.answers !== null
      ? (body.answers as Record<string, string>)
      : {};

  const duel = await prisma.duel.findUnique({ where: { code } });
  if (!duel) {
    return NextResponse.json({ error: "No duel answers to that code." }, { status: 404 });
  }
  const myRole = role(duel, customerId);
  if (!myRole) {
    return NextResponse.json({ error: "This duel already has its challenger." }, { status: 403 });
  }
  const owned = await ownedSubjects(customerId);
  if (!owned.some((s) => s.level === duel.level && s.slug === duel.slug)) {
    return NextResponse.json(
      { error: "You need this subject to answer this duel." },
      { status: 403 }
    );
  }
  if (myRole === "creator" ? duel.creatorScore !== null : duel.challengerScore !== null) {
    return NextResponse.json({ error: "Your side is already sealed." }, { status: 409 });
  }

  const set = getDiagnosticSet(duel.level as Level, duel.slug);
  const ids = JSON.parse(duel.questionIdsJson) as string[];
  const results = ids.map((id) => {
    const q = set?.questions.find((qq) => qq.id === id);
    if (!q) return { id, correct: false, correctAnswer: "", workedSolution: "" };
    const given = String(answers[id] ?? "");
    const correct = given !== "" && isCorrect(q, given);
    const correctAnswer =
      q.type === "mcq" && q.options
        ? q.options[Number(q.correctKey[0])] ?? q.correctKey.join(" / ")
        : q.correctKey.join(" / ");
    return { id, correct, correctAnswer, workedSolution: q.workedSolution };
  });
  const score = results.filter((r) => r.correct).length;

  const updated = await prisma.duel.update({
    where: { id: duel.id },
    data:
      myRole === "creator"
        ? { creatorScore: score }
        : { challengerId: customerId, challengerScore: score },
  });

  // effort XP for showing up, identical for both sides, once per duel side
  let game: GamePayload | null = null;
  const xpBefore = await totalXpFor(customerId);
  const gained = await awardXp(customerId, "duel", `duel:${duel.id}:${myRole}`, DUEL_XP);
  if (gained > 0) game = await gamePayload(customerId, xpBefore, gained, []);

  const mine = myRole === "creator" ? updated.creatorScore : updated.challengerScore;
  const theirs = myRole === "creator" ? updated.challengerScore : updated.creatorScore;
  return NextResponse.json({
    score: mine,
    rivalScore: theirs,
    total: ids.length,
    complete: updated.creatorScore !== null && updated.challengerScore !== null,
    results,
    game,
  });
}
