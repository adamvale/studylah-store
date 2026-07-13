import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendResultsEmail } from "@/lib/server/diagnostic";

// "Re-send my results email", unlocked attempts only, 60s per attempt.
const last = new Map<string, number>();

export async function POST(request: Request) {
  let body: { attemptId?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const attemptId = typeof body.attemptId === "string" ? body.attemptId : "";
  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt?.unlockedAt || !attempt.email) {
    return NextResponse.json({ error: "Unlock your results first." }, { status: 400 });
  }
  const now = Date.now();
  const prev = last.get(attemptId);
  if (prev && now - prev < 60_000) {
    return NextResponse.json({ error: "Just sent, give it a minute." }, { status: 429 });
  }
  last.set(attemptId, now);
  const delivered = await sendResultsEmail(attemptId);
  return NextResponse.json({ ok: delivered });
}
