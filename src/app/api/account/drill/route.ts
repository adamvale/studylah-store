import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { ownedSubjects, sgDay } from "@/lib/server/study";
import { recordReview, dueReviews, reviewStats } from "@/lib/server/srs";
import { awardXp } from "@/lib/server/xp";
import { formulasForFamilies, formulaById } from "@/lib/formula-bank";

export const runtime = "nodejs";

// Definition Drill + Formula Trainer. GET deals a session of cards (due
// spaced-repetition reviews first, then unseen items); POST records a
// self-graded result ("knew it" or "not yet") into the Leitner scheduler.

const SESSION_SIZE = 10;

export interface DrillCard {
  itemKey: string;
  level: string;
  slug: string;
  subjectName: string;
  topic: string;
  front: string; // the prompt side
  back: string; // the answer side (for formulas: the formula in math notation)
  symbols?: { sym: string; meaning: string; unit?: string }[]; // formula legend
  note?: string;
  due: boolean; // true = scheduled review, false = brand new
}

export async function GET(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const url = new URL(request.url);
  const kind = url.searchParams.get("kind") === "formula" ? "formula" : "definition";
  const subjects = await ownedSubjects(customerId);
  if (subjects.length === 0) return NextResponse.json({ cards: [], stats: null });

  const seen = new Set(
    (
      await prisma.reviewCard.findMany({
        where: { customerId, kind },
        select: { itemKey: true },
      })
    ).map((c) => c.itemKey)
  );
  const due = await dueReviews(customerId, kind, new Date(), SESSION_SIZE);
  const dueKeys = new Set(due.map((d) => d.itemKey));

  const cards: DrillCard[] = [];

  if (kind === "definition") {
    // Definition cards live in GameTeachingCard (kind "definition"), seeded
    // per subject from the game bank.
    const ownedKeys = subjects.map((s) => ({ level: s.level, slug: s.slug }));
    const all = await prisma.gameTeachingCard.findMany({
      where: { kind: "definition", OR: ownedKeys },
      orderBy: [{ level: "asc" }, { slug: "asc" }, { ord: "asc" }],
    });
    const byId = new Map(all.map((c) => [c.id, c]));
    const subjName = (level: string, slug: string) =>
      subjects.find((s) => s.level === level && s.slug === slug)?.name ?? slug;

    // due reviews first
    for (const d of due) {
      const c = byId.get(d.itemKey);
      if (!c) continue;
      const data = JSON.parse(c.dataJson) as { term?: string; topic?: string; body?: string };
      cards.push({
        itemKey: c.id,
        level: c.level,
        slug: c.slug,
        subjectName: subjName(c.level, c.slug),
        topic: data.topic ?? "",
        front: data.term ?? "",
        back: data.body ?? "",
        due: true,
      });
    }
    // then unseen, spread across subjects round-robin for variety
    const unseenBySubject = new Map<string, typeof all>();
    for (const c of all) {
      if (seen.has(c.id) || dueKeys.has(c.id)) continue;
      const k = `${c.level}/${c.slug}`;
      const list = unseenBySubject.get(k) ?? [];
      list.push(c);
      unseenBySubject.set(k, list);
    }
    const queues = [...unseenBySubject.values()];
    let qi = 0;
    while (cards.length < SESSION_SIZE && queues.some((q) => q.length > 0)) {
      const q = queues[qi % queues.length];
      qi++;
      const c = q.shift();
      if (!c) continue;
      const data = JSON.parse(c.dataJson) as { term?: string; topic?: string; body?: string };
      cards.push({
        itemKey: c.id,
        level: c.level,
        slug: c.slug,
        subjectName: subjName(c.level, c.slug),
        topic: data.topic ?? "",
        front: data.term ?? "",
        back: data.body ?? "",
        due: false,
      });
    }
  } else {
    // Formulas come from the static bank, keyed by subject family.
    const families = new Set(subjects.map((s) => s.family));
    const bank = formulasForFamilies(families);
    const subjectForFamily = (family: string) =>
      subjects.find((s) => s.family === family);

    for (const d of due) {
      const f = formulaById(d.itemKey);
      if (!f) continue;
      const subj = subjectForFamily(f.family);
      if (!subj) continue;
      cards.push({
        itemKey: f.id,
        level: subj.level,
        slug: subj.slug,
        subjectName: subj.name,
        topic: f.name,
        front: f.prompt,
        back: f.formula,
        symbols: f.symbols,
        note: f.note,
        due: true,
      });
    }
    for (const f of bank) {
      if (cards.length >= SESSION_SIZE) break;
      if (seen.has(f.id) || dueKeys.has(f.id)) continue;
      const subj = subjectForFamily(f.family);
      if (!subj) continue;
      cards.push({
        itemKey: f.id,
        level: subj.level,
        slug: subj.slug,
        subjectName: subj.name,
        topic: f.name,
        front: f.prompt,
        back: f.formula,
        symbols: f.symbols,
        note: f.note,
        due: false,
      });
    }
  }

  const stats = await reviewStats(customerId, kind);
  return NextResponse.json({ cards: cards.slice(0, SESSION_SIZE), stats });
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: {
    kind?: unknown;
    itemKey?: unknown;
    level?: unknown;
    slug?: unknown;
    correct?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
  const kind = body.kind === "formula" ? "formula" : "definition";
  const itemKey = String(body.itemKey ?? "");
  const level = String(body.level ?? "");
  const slug = String(body.slug ?? "");
  const correct = Boolean(body.correct);
  if (!itemKey || !level || !slug) {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  await recordReview(customerId, kind, itemKey, level, slug, correct);
  // A little XP per card per day keeps the habit fed without being farmable.
  const xp = await awardXp(
    customerId,
    "drill",
    `drill:${kind}:${itemKey}:${sgDay()}`,
    correct ? 3 : 1
  );
  return NextResponse.json({ ok: true, xp });
}
