import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { sgDay } from "@/lib/server/study";
import { sendNativePushToCustomer } from "@/lib/server/native-push";

// Guru's standing tuition slots. Run hourly. Fires a native push at each
// student's chosen weekday + Singapore hour, deep-linking straight into a Guru
// session. Deduped per SG day via lastPushed. Fails closed without CRON_SECRET.

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!serverConfig.cronSecret || key !== serverConfig.cronSecret) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Singapore",
    weekday: "short",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(now);
  const hourSg = Number(parts.find((p) => p.type === "hour")?.value ?? "-1");
  const wdName = parts.find((p) => p.type === "weekday")?.value ?? "";
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wdName);
  const today = sgDay();
  if (weekday < 0 || hourSg < 0) return NextResponse.json({ ok: true, sent: 0 });

  const due = await prisma.tutorSchedule.findMany({
    where: { active: true, weekday, hourSg, NOT: { lastPushed: today } },
    take: 500,
  });

  let sent = 0;
  for (const s of due) {
    const url = `/account/tutor?start=${encodeURIComponent(`${s.kind}:${s.topicKey}${s.level ? ":" + s.level : ""}`)}`;
    try {
      await sendNativePushToCustomer(s.customerId, {
        title: `${s.label} with Guru`,
        body: "Your session is ready. Tap to start now.",
        url,
      });
      sent++;
    } catch (e) {
      console.error(`Tutor-session push failed for ${s.id}`, e);
    }
    await prisma.tutorSchedule.update({ where: { id: s.id }, data: { lastPushed: today } });
  }
  return NextResponse.json({ due: due.length, sent });
}
