import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ULTRA_DB_TIERS } from "@/lib/catalogue";

// Marketing metrics feed for the Cowork agent's automated morning brief.
// Read-only aggregate numbers, no personal data (no emails, no names, no
// order lines). Gated by MARKETING_METRICS_KEY: the route 404s until the env
// var is set, and the key rides an Authorization: Bearer header or ?key=.
//
// GET /api/marketing/metrics?key=... ->
//   { yesterday: {...}, last7Days: {...}, topSources: [...], summary: "..." }

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Singapore day boundaries (UTC+8, no DST).
const SG_OFFSET_MS = 8 * 60 * 60 * 1000;
function sgMidnight(daysAgo: number): Date {
  const sgNow = new Date(Date.now() + SG_OFFSET_MS);
  const day = Date.UTC(
    sgNow.getUTCFullYear(),
    sgNow.getUTCMonth(),
    sgNow.getUTCDate() - daysAgo
  );
  return new Date(day - SG_OFFSET_MS);
}

const GRANT_PREFIX = "grant_"; // comp grants are S$0, excluded from revenue

interface WindowStats {
  diagnosticsCompleted: number;
  paidOrders: number;
  revenueSgd: number;
  aovSgd: number;
  bundleOrders: number; // orders holding 3+ Ultra subjects
  bundleShare: number; // 0-100
}

async function windowStats(from: Date, to: Date): Promise<WindowStats> {
  const [diagnostics, orders] = await Promise.all([
    prisma.diagnosticAttempt.count({
      where: { createdAt: { gte: from, lt: to } },
    }),
    prisma.order.findMany({
      where: {
        createdAt: { gte: from, lt: to },
        status: "paid",
        NOT: { stripeSessionId: { startsWith: GRANT_PREFIX } },
      },
      select: { totalCents: true, items: { select: { tier: true } } },
    }),
  ]);

  const revenueCents = orders.reduce((s, o) => s + o.totalCents, 0);
  const ultraTiers = ULTRA_DB_TIERS as readonly string[];
  const bundleOrders = orders.filter(
    (o) => o.items.filter((i) => ultraTiers.includes(i.tier)).length >= 3
  ).length;

  return {
    diagnosticsCompleted: diagnostics,
    paidOrders: orders.length,
    revenueSgd: Math.round(revenueCents / 100),
    aovSgd: orders.length ? Math.round(revenueCents / 100 / orders.length) : 0,
    bundleOrders,
    bundleShare: orders.length
      ? Math.round((bundleOrders / orders.length) * 100)
      : 0,
  };
}

export async function GET(request: Request) {
  const secret = process.env.MARKETING_METRICS_KEY;
  if (!secret) return new NextResponse(null, { status: 404 });

  const url = new URL(request.url);
  const given =
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    url.searchParams.get("key") ??
    "";
  if (given !== secret) {
    return NextResponse.json({ error: "Invalid key." }, { status: 401 });
  }

  const todayStart = sgMidnight(0);
  const yesterdayStart = sgMidnight(1);
  const weekStart = sgMidnight(7);

  const [yesterday, last7Days, sources] = await Promise.all([
    windowStats(yesterdayStart, todayStart),
    windowStats(weekStart, todayStart),
    prisma.visitorSession.groupBy({
      by: ["utmSource"],
      where: { startedAt: { gte: weekStart }, utmSource: { not: null } },
      _count: { _all: true },
      orderBy: { _count: { id: "desc" } },
      take: 5,
    }),
  ]);

  const topSources = sources.map((s) => ({
    source: s.utmSource,
    sessions: s._count._all,
  }));

  const summary =
    `Yesterday (SG time): ${yesterday.diagnosticsCompleted} diagnostics completed, ` +
    `${yesterday.paidOrders} paid orders, S$${yesterday.revenueSgd} revenue` +
    (yesterday.paidOrders ? `, AOV S$${yesterday.aovSgd}` : "") +
    `. Last 7 days: ${last7Days.diagnosticsCompleted} diagnostics, ` +
    `${last7Days.paidOrders} orders, S$${last7Days.revenueSgd} revenue, ` +
    `AOV S$${last7Days.aovSgd}, bundle share ${last7Days.bundleShare} percent.` +
    (topSources.length
      ? ` Top tagged sources this week: ${topSources
          .map((s) => `${s.source} (${s.sessions})`)
          .join(", ")}.`
      : " No UTM-tagged sessions recorded this week yet.");

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    timezone: "Asia/Singapore",
    yesterday,
    last7Days,
    topSources,
    summary,
  });
}
