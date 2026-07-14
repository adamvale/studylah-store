import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { isValidReason } from "@/lib/server/mistakes";

// Add a mistake by hand, typically a question missed on a school paper.
export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: {
    level?: unknown;
    slug?: unknown;
    topic?: unknown;
    stem?: unknown;
    correctAnswer?: unknown;
    myAnswer?: unknown;
    reason?: unknown;
    note?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  const topic = typeof body.topic === "string" ? body.topic.trim().slice(0, 120) : "";
  const stem = typeof body.stem === "string" ? body.stem.trim().slice(0, 2000) : "";
  const reason = typeof body.reason === "string" ? body.reason : "unset";
  const str = (v: unknown, max: number) =>
    typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;

  if (!getSubject(level, slug) || !topic || !stem || !isValidReason(reason)) {
    return NextResponse.json({ error: "Fill in the subject, topic and question." }, { status: 400 });
  }

  const entry = await prisma.mistakeEntry.create({
    data: {
      customerId,
      level,
      slug,
      topic,
      stem,
      correctAnswer: str(body.correctAnswer, 1000),
      myAnswer: str(body.myAnswer, 1000),
      reason,
      source: "manual",
      note: str(body.note, 1000),
    },
  });
  return NextResponse.json({ ok: true, id: entry.id });
}
