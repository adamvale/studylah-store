import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { sendNextFollowUp } from "@/lib/server/diagnostic";

// Advances the 7-day nurture ladder. Each run sends every attempt whose next
// step is due (followUpAt <= now) and not yet complete (followUpStep < 6),
// then the sender schedules the following step. Idempotent per step, so any
// cadence works: run this every few hours. Fails closed without CRON_SECRET.
const TOTAL_STEPS = 6;

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!serverConfig.cronSecret || key !== serverConfig.cronSecret) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const due = await prisma.diagnosticAttempt.findMany({
    where: {
      unlockedAt: { not: null },
      followUpAt: { lte: new Date() },
      followUpStep: { lt: TOTAL_STEPS },
      email: { not: null },
    },
    take: 100,
    orderBy: { followUpAt: "asc" },
  });

  let sent = 0;
  for (const attempt of due) {
    try {
      if (await sendNextFollowUp(attempt.id)) sent++;
    } catch (e) {
      console.error(`Diagnostic follow-up failed for ${attempt.id}`, e);
    }
  }
  return NextResponse.json({ due: due.length, sent });
}
