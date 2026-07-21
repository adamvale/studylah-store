import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { sgDay } from "@/lib/server/study";
import { awardXp } from "@/lib/server/xp";
import { teachScan, forecastRankFor, type ScanMedia } from "@/lib/server/scan";
import { getSubject, type Level } from "@/lib/catalogue";

// Project Sightseeing API. Owners only (the app is a buyer perk), native shell.
// POST action "teach": a photo -> Guru teaches it, and the extracted question is
//   logged as a ScannedQuestion asset. The raw image is never stored.
// POST action "save": drop a taught scan into the mistake notebook to revisit.

const SCAN_CAP_PER_DAY = 20; // generous, buyers-only; a backstop against abuse
const SCAN_XP = 5;
const MEDIA: Record<string, ScanMedia> = {
  "image/jpeg": "image/jpeg",
  "image/png": "image/png",
  "image/webp": "image/webp",
};

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: {
    action?: unknown;
    image?: unknown;
    media?: unknown;
    scanId?: unknown;
    reason?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const action = body.action === "save" ? "save" : "teach";

  // ── Save a taught scan into the mistake notebook ─────────────────────────
  if (action === "save") {
    const scanId = typeof body.scanId === "string" ? body.scanId : "";
    const scan = await prisma.scannedQuestion.findFirst({
      where: { id: scanId, customerId },
    });
    if (!scan) {
      return NextResponse.json({ error: "That scan wasn't found." }, { status: 404 });
    }
    const teaching = JSON.parse(scan.teachingJson) as { answer?: string };
    // Only tie it to a subject the app recognises; otherwise keep it loose.
    const subject =
      scan.level && scan.slug ? getSubject(scan.level as Level, scan.slug) : null;
    const reason =
      body.reason === "careless" ||
      body.reason === "concept" ||
      body.reason === "method" ||
      body.reason === "time"
        ? body.reason
        : "unset";
    const entry = await prisma.mistakeEntry.create({
      data: {
        customerId,
        level: subject?.level ?? scan.level ?? "o-level",
        slug: subject?.slug ?? scan.slug ?? "",
        topic: scan.topic || scan.subjectLabel || "Scanned question",
        stem: scan.questionText.slice(0, 2000),
        correctAnswer: teaching.answer?.slice(0, 1000) ?? null,
        reason,
        source: "scan",
      },
    });
    await awardXp(customerId, "scan", `scan-save:${scan.id}`, SCAN_XP, scan.id);
    return NextResponse.json({ ok: true, mistakeId: entry.id });
  }

  // ── Teach a fresh photo ──────────────────────────────────────────────────
  const image = typeof body.image === "string" ? body.image : "";
  const media = MEDIA[typeof body.media === "string" ? body.media : ""];
  if (!image || !media) {
    return NextResponse.json({ error: "Send a photo of one question." }, { status: 400 });
  }
  // Cap payload (~7MB of base64 ≈ 5MB image); the client compresses first.
  if (image.length > 7_000_000) {
    return NextResponse.json(
      { error: "That photo is too large. Try again, it will be compressed automatically." },
      { status: 413 }
    );
  }

  // Daily cap (buyers-only, so this is purely an abuse backstop).
  const since = new Date(`${sgDay()}T00:00:00+08:00`);
  const usedToday = await prisma.scannedQuestion.count({
    where: { customerId, createdAt: { gte: since } },
  });
  if (usedToday >= SCAN_CAP_PER_DAY) {
    return NextResponse.json(
      { error: `That's ${SCAN_CAP_PER_DAY} scans today, the daily limit. More tomorrow.`, capped: true },
      { status: 429 }
    );
  }

  const result = await teachScan(image, media);
  if (!result.ok) {
    return NextResponse.json({ ok: false, reason: result.reason });
  }

  const forecastRank = forecastRankFor(result.level, result.slug, result.topic);

  // Log the asset (no image kept). This is the corpus of real questions
  // students bring us, a demand signal and a future-content source.
  const scan = await prisma.scannedQuestion.create({
    data: {
      customerId,
      level: result.level,
      slug: result.slug,
      subjectLabel: result.subjectLabel,
      topic: result.topic,
      forecastRank,
      questionText: result.questionText,
      teachingJson: JSON.stringify({
        steps: result.steps,
        answer: result.answer,
        misconception: result.misconception,
      }),
    },
  });
  await awardXp(customerId, "scan", `scan:${scan.id}`, SCAN_XP, scan.id);

  return NextResponse.json({
    ok: true,
    scanId: scan.id,
    subjectLabel: result.subjectLabel,
    topic: result.topic,
    forecastRank,
    questionText: result.questionText,
    steps: result.steps,
    answer: result.answer,
    misconception: result.misconception,
  });
}
