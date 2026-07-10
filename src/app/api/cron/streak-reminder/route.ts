import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { sgDay, addDays, computeStreak } from "@/lib/server/study";
import { sendPushToCustomer } from "@/lib/server/push";

// "Your streak dies at midnight" — the retention push. Run hourly; it only
// fires inside the Singapore evening window (19:00–22:59), targets customers
// whose streak is alive (practised yesterday) but at risk (not yet today),
// and marks streakPingDay so nobody is pinged twice in a day. Fails closed
// without CRON_SECRET.
export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!serverConfig.cronSecret || key !== serverConfig.cronSecret) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const hourSg = Number(
    new Date().toLocaleString("en-GB", { hour: "2-digit", hour12: false, timeZone: "Asia/Singapore" })
  );
  if (hourSg < 19 || hourSg > 22) {
    return NextResponse.json({ window: "closed", sent: 0 });
  }

  const today = sgDay();
  const yesterday = addDays(today, -1);

  // Streak alive yesterday…
  const aliveRows = await prisma.dailyQuizDay.findMany({
    where: { day: yesterday },
    select: { customerId: true },
  });
  const alive = [...new Set(aliveRows.map((r) => r.customerId))];
  if (alive.length === 0) return NextResponse.json({ window: "open", candidates: 0, sent: 0 });

  // …but not yet today, not already pinged, and with a device to reach.
  const doneToday = new Set(
    (
      await prisma.dailyQuizDay.findMany({
        where: { day: today, customerId: { in: alive } },
        select: { customerId: true },
      })
    ).map((r) => r.customerId)
  );
  // NB: `not: today` alone would drop NULLs (SQL: NULL != x is not true), so
  // never-pinged customers need the explicit null branch.
  const customers = await prisma.customer.findMany({
    where: {
      id: { in: alive.filter((id) => !doneToday.has(id)) },
      OR: [{ streakPingDay: null }, { streakPingDay: { not: today } }],
      pushSubscriptions: { some: {} },
    },
    select: { id: true },
    take: 200,
  });

  let sent = 0;
  for (const c of customers) {
    try {
      const rows = await prisma.dailyQuizDay.findMany({
        where: { customerId: c.id },
        select: { day: true },
      });
      const streak = computeStreak(
        rows.map((r) => r.day),
        today
      );
      const delivered = await sendPushToCustomer(c.id, {
        title: `🔥 Your ${streak.current}-day streak ends at midnight`,
        body: "Three questions keeps it alive — two minutes, marked instantly.",
        url: "/account",
        tag: "streak-reminder",
      });
      if (delivered > 0) sent++;
      await prisma.customer.update({
        where: { id: c.id },
        data: { streakPingDay: today },
      });
    } catch (e) {
      console.error(`Streak reminder failed for ${c.id}`, e);
    }
  }

  return NextResponse.json({ window: "open", candidates: customers.length, sent });
}
