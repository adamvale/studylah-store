import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { sendFollowUpEmail } from "@/lib/server/diagnostic";

// The ~48h follow-up sender. Idempotent (followUpSentAt guards re-sends), so
// any scheduler works: Railway cron, cron-job.org, or a manual visit. Fails
// closed without CRON_SECRET.
export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!serverConfig.cronSecret || key !== serverConfig.cronSecret) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const due = await prisma.diagnosticAttempt.findMany({
    where: {
      unlockedAt: { not: null },
      followUpAt: { lte: new Date() },
      followUpSentAt: null,
      email: { not: null },
    },
    take: 50,
    orderBy: { followUpAt: "asc" },
  });

  let sent = 0;
  for (const attempt of due) {
    try {
      if (await sendFollowUpEmail(attempt.id)) sent++;
    } catch (e) {
      console.error(`Diagnostic follow-up failed for ${attempt.id}`, e);
    }
  }
  return NextResponse.json({ due: due.length, sent });
}
