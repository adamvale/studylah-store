import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getDiagnosticSet } from "@/lib/server/question-bank";
import { realTopCalls } from "@/lib/forecast-tables";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects, sgDay } from "@/lib/server/study";
import { XP } from "@/lib/game";
import { awardXp, unlockBadge } from "@/lib/server/xp";
import {
  bandFor,
  gradeAttempt,
  gradeEstimateFor,
  logDiagnosticEvent,
} from "@/lib/server/diagnostic";

// Grades an attempt SERVER-SIDE and returns only the headline: score, band,
// attempt id. Worked solutions stay behind the email gate; correct answers
// never leave this process.
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: {
    level?: unknown;
    slug?: unknown;
    answers?: unknown;
    utm?: unknown;
    ref?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  const set = await getDiagnosticSet(level, slug);
  if (!set || !getSubject(level, slug)) {
    return NextResponse.json({ error: "No diagnostic for that subject yet." }, { status: 404 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts — take a breath and try again in a minute." },
      { status: 429 }
    );
  }

  const answers =
    typeof body.answers === "object" && body.answers !== null
      ? (body.answers as Record<string, string>)
      : {};

  const { graded, score, totalMarks, weakness } = gradeAttempt(set, answers);
  const band = bandFor(score, totalMarks);
  const topic = realTopCalls(level, slug, 1)[0];
  // Signed-in students get their attempt linked, so the dashboard can chart
  // their score history without an email round-trip. Anonymous takers stay null.
  const customerId = await getCustomerId();

  const attempt = await prisma.diagnosticAttempt.create({
    data: {
      level,
      slug,
      topic: set.topicLabel,
      answersJson: JSON.stringify(graded),
      score,
      totalMarks,
      band,
      weakness,
      customerId,
      utm: typeof body.utm === "string" ? body.utm.slice(0, 200) : null,
      ref: typeof body.ref === "string" ? body.ref.slice(0, 40) : null,
    },
  });
  await logDiagnosticEvent("diagnostic_complete", attempt.id, `${level}/${slug} ${score}/${totalMarks}`);

  // ── XP for signed-in students (silent here; lands in StudyLand) ─────────
  if (customerId) {
    try {
      await awardXp(
        customerId,
        "diagnostic",
        `diag:${level}/${slug}:${sgDay()}`,
        XP.diagnosticAttempt
      );
      // Personal-best bonus: strictly better % than any earlier attempt.
      const pct = totalMarks === 0 ? 0 : Math.round((score / totalMarks) * 100);
      const previous = await prisma.diagnosticAttempt.findMany({
        where: { customerId, level, slug, id: { not: attempt.id } },
        select: { score: true, totalMarks: true },
      });
      const bestBefore = previous.reduce(
        (m, a) => Math.max(m, a.totalMarks === 0 ? 0 : Math.round((a.score / a.totalMarks) * 100)),
        -1
      );
      if (previous.length > 0 && pct > bestBefore) {
        await awardXp(customerId, "diagnostic", `diagbest:${level}/${slug}:${pct}`, XP.diagnosticBest);
      }
      // Full Recon: at least one attempt in every owned subject.
      const owned = await ownedSubjects(customerId);
      if (owned.length > 0) {
        const attempted = await prisma.diagnosticAttempt.findMany({
          where: { customerId },
          select: { level: true, slug: true },
          distinct: ["level", "slug"],
        });
        const have = new Set(attempted.map((a) => `${a.level}/${a.slug}`));
        if (owned.every((s) => have.has(`${s.level}/${s.slug}`))) {
          await unlockBadge(customerId, "full-recon");
        }
      }
    } catch (e) {
      console.error("diagnostic XP award failed", e); // never block the result
    }
  }

  return NextResponse.json({
    attemptId: attempt.id,
    score,
    totalMarks,
    band,
    gradeEstimate: gradeEstimateFor(level, score, totalMarks),
    topicTier: topic?.tier ?? "very-high",
  });
}
