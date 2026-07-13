import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { sendParentDigest } from "@/lib/server/parent-digest";

// Weekly parent-digest sender. Idempotent (parentDigestSentAt guards re-sends
// within the week), so any scheduler works. Fails closed without CRON_SECRET.
// Run this daily or weekly, customers only get one email per ~week regardless.
export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!serverConfig.cronSecret || key !== serverConfig.cronSecret) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const due = await prisma.customer.findMany({
    where: { parentEmail: { not: null }, parentDigestConsentAt: { not: null } },
    select: { id: true },
    take: 200,
  });

  let sent = 0;
  for (const c of due) {
    try {
      if (await sendParentDigest(c.id)) sent++;
    } catch (e) {
      console.error(`Parent digest failed for ${c.id}`, e);
    }
  }
  return NextResponse.json({ candidates: due.length, sent });
}
