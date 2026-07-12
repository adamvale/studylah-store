import { NextResponse } from "next/server";
import { getSubject, type Level } from "@/lib/catalogue";
import { getDiagnosticSet, type PublicQuestion } from "@/lib/diagnostic-questions";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects } from "@/lib/server/study";

// Adventure mode: deal a hand of battle questions for a subject the player
// OWNS. MCQ only (battles need tappable options), sanitized — correct keys
// never leave the server.
export async function GET(request: Request) {
  const customerId = await getCustomerId();
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

  const set = getDiagnosticSet(level, slug);
  if (!set) {
    return NextResponse.json({ error: "No questions for this subject yet." }, { status: 404 });
  }

  const mcqs = set.questions.filter((q) => q.type === "mcq" && q.options?.length);
  // Shuffle server-side so each hand differs.
  const shuffled = [...mcqs].sort(() => Math.random() - 0.5).slice(0, count);
  // The Whisper's "fog on the page": hint=1 marks ONE WRONG option per
  // question so the client can hide it. Safe by construction — it reveals
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
