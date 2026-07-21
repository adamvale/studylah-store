import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { sgDay } from "@/lib/server/study";
import { awardXp } from "@/lib/server/xp";
import { ORAL_ITEMS, oralItem } from "@/lib/oral-lessons";
import {
  assessPronunciation,
  coachPronunciation,
  speechConfigured,
} from "@/lib/server/speech";

// Project Loudspeaker API. Owners only, native shell.
// GET: the lesson catalogue + whether pronunciation scoring is switched on.
// POST: score one recorded attempt (audio -> Azure -> Guru coaching -> logged).
// The raw audio is never stored, only the scores, transcript and coaching.

const ORAL_CAP_PER_DAY = 40;
const ORAL_XP = 6;
const AUDIO_MEDIA_OK = /^audio\/(webm|ogg|wav|mp4|mpeg)/i;

export async function GET() {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  return NextResponse.json({
    scoringOn: speechConfigured(),
    items: ORAL_ITEMS.map((i) => ({
      key: i.key,
      lang: i.lang,
      levels: i.levels,
      mode: i.mode,
      title: i.title,
      text: i.text,
      hint: i.hint ?? null,
    })),
  });
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  let body: { itemKey?: unknown; audio?: unknown; media?: unknown; level?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const item = oralItem(typeof body.itemKey === "string" ? body.itemKey : "");
  const audio = typeof body.audio === "string" ? body.audio : "";
  const media = typeof body.media === "string" ? body.media : "";
  const level = body.level === "na-level" ? "na-level" : "o-level";
  if (!item) return NextResponse.json({ error: "Unknown practice item." }, { status: 400 });
  if (!audio || !AUDIO_MEDIA_OK.test(media)) {
    return NextResponse.json({ error: "Record your voice and try again." }, { status: 400 });
  }
  if (audio.length > 9_000_000) {
    return NextResponse.json({ error: "That clip is too long. Keep it under about 30 seconds." }, { status: 413 });
  }

  const since = new Date(`${sgDay()}T00:00:00+08:00`);
  const usedToday = await prisma.oralAttempt.count({
    where: { customerId, createdAt: { gte: since } },
  });
  if (usedToday >= ORAL_CAP_PER_DAY) {
    return NextResponse.json(
      { error: `That's ${ORAL_CAP_PER_DAY} recordings today, the daily limit. More tomorrow.`, capped: true },
      { status: 429 }
    );
  }

  const scored = await assessPronunciation({
    audioBase64: audio,
    mediaType: media,
    referenceText: item.text,
    langCode: item.langCode,
    scripted: item.mode === "read-aloud",
  });

  if (!scored.ok) {
    // Practice mode (scoring not configured) still logs the attempt as effort.
    if (scored.notConfigured) {
      await prisma.oralAttempt.create({
        data: { customerId, lang: item.lang, level, mode: item.mode, itemKey: item.key },
      });
      await awardXp(customerId, "oral", `oral:${item.key}:${Date.now()}`, ORAL_XP, item.key);
      return NextResponse.json({ ok: true, scoringOn: false, reason: scored.reason });
    }
    return NextResponse.json({ ok: false, reason: scored.reason });
  }

  const coaching = await coachPronunciation({
    scores: scored,
    langCode: item.langCode,
    referenceText: item.text,
    scripted: item.mode === "read-aloud",
  });

  await prisma.oralAttempt.create({
    data: {
      customerId,
      lang: item.lang,
      level,
      mode: item.mode,
      itemKey: item.key,
      transcript: scored.transcript.slice(0, 2000),
      accuracy: scored.accuracy,
      fluency: scored.fluency,
      completeness: scored.completeness,
      overall: scored.overall,
      coaching: coaching.slice(0, 1500),
    },
  });
  await awardXp(customerId, "oral", `oral:${item.key}:${Date.now()}`, ORAL_XP, item.key);

  return NextResponse.json({
    ok: true,
    scoringOn: true,
    transcript: scored.transcript,
    accuracy: scored.accuracy,
    fluency: scored.fluency,
    completeness: scored.completeness,
    overall: scored.overall,
    coaching,
  });
}
