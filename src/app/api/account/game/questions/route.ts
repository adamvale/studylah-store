import { NextResponse } from "next/server";
import { getSubject, type Level } from "@/lib/catalogue";
import { type PublicQuestion } from "@/lib/diagnostic-questions";
import { drawFromBank } from "@/lib/server/question-bank";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { ownedSubjects } from "@/lib/server/study";

// Adventure mode: deal a hand of battle questions for a subject the player
// OWNS. MCQ only (battles need tappable options), sanitized, correct keys
// never leave the server.
export async function GET(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const url = new URL(request.url);
  const level = url.searchParams.get("level") as Level;
  const slug = url.searchParams.get("slug") ?? "";
  const count = Math.min(Math.max(Number(url.searchParams.get("count")) || 8, 1), 12);

  if (!getSubject(level, slug)) {
    return NextResponse.json({ error: "Unknown subject." }, { status: 400 });
  }
  const owned = await ownedSubjects(customerId);
  if (!owned.some((s) => s.level === level && s.slug === slug)) {
    return NextResponse.json({ error: "Own this subject to battle here." }, { status: 403 });
  }

  // The content contract: declarative draw, optionally scoped by difficulty
  // (story bosses ramp up) or topic prefix (topic-gated story quests).
  const diffParam = Number(url.searchParams.get("difficulty"));
  const topicParam = url.searchParams.get("topic") ?? "";
  const shuffled = await drawFromBank(level, slug, {
    count,
    mcqOnly: true,
    minDifficulty: diffParam >= 1 && diffParam <= 3 ? (diffParam as 1 | 2 | 3) : undefined,
    // literal prefix match, escaped: topics are syllabus codes like "A1 ..."
    topicRx: topicParam
      ? new RegExp(`^${topicParam.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i")
      : undefined,
  });
  if (shuffled.length === 0) {
    return NextResponse.json({ error: "No questions for this subject yet." }, { status: 404 });
  }
  // The Whisper's "fog on the page": hint=1 marks ONE WRONG option per
  // question so the client can hide it. Safe by construction, it reveals
  // an option that is NOT the answer, never the answer itself.
  const hint = url.searchParams.get("hint") === "1";
  const questions: (PublicQuestion & { fogIndex?: number })[] = shuffled.map((q) => {
    const base: PublicQuestion & { fogIndex?: number } = {
      id: q.id,
      type: q.type,
      topic: q.topic,
      stem: q.stem,
      options: q.options,
      marks: q.marks,
    };
    if (hint && q.options && q.options.length > 2) {
      const correctIdx = Number(q.correctKey[0]);
      const wrongIdxs = q.options.map((_, i) => i).filter((i) => i !== correctIdx);
      base.fogIndex = wrongIdxs[Math.floor(Math.random() * wrongIdxs.length)];
    }
    return base;
  });
  return NextResponse.json({ questions });
}
