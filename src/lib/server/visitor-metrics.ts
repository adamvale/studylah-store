import "server-only";
import { prisma } from "@/lib/db";

const DAY_MS = 24 * 60 * 60 * 1000;

export interface VisitorOverview {
  sessions: { all: number; day: number; week: number };
  pageviews: number;
  clicks: number;
  avgPagesPerSession: number;
  returningPct: number;
  mobilePct: number;
  topPages: { path: string; count: number }[];
  topClicks: { label: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
  devices: { device: string; count: number }[];
}

export async function getVisitorOverview(): Promise<VisitorOverview> {
  const now = Date.now();
  const day = new Date(now - DAY_MS);
  const week = new Date(now - 7 * DAY_MS);

  const [
    sessionsAll,
    sessionsDay,
    sessionsWeek,
    pageviews,
    clicks,
    returning,
    mobile,
    topPagesRaw,
    topClicksRaw,
    referrersRaw,
    devicesRaw,
  ] = await Promise.all([
    prisma.visitorSession.count(),
    prisma.visitorSession.count({ where: { startedAt: { gte: day } } }),
    prisma.visitorSession.count({ where: { startedAt: { gte: week } } }),
    prisma.visitorEvent.count({ where: { type: "pageview" } }),
    prisma.visitorEvent.count({ where: { type: "click" } }),
    prisma.visitorSession.count({ where: { isReturning: true } }),
    prisma.visitorSession.count({ where: { device: "mobile" } }),
    prisma.visitorEvent.groupBy({
      by: ["path"],
      where: { type: "pageview" },
      _count: { path: true },
      orderBy: { _count: { path: "desc" } },
      take: 10,
    }),
    prisma.visitorEvent.groupBy({
      by: ["label"],
      where: { type: "click", label: { not: null } },
      _count: { label: true },
      orderBy: { _count: { label: "desc" } },
      take: 10,
    }),
    prisma.visitorSession.groupBy({
      by: ["referrer"],
      // Count rows (id is never null) so the Direct/null group isn't zeroed —
      // COUNT(referrer) would skip NULL referrers.
      _count: { id: true },
      orderBy: { _count: { id: "desc" } },
      take: 8,
    }),
    prisma.visitorSession.groupBy({
      by: ["device"],
      _count: { device: true },
      orderBy: { _count: { device: "desc" } },
    }),
  ]);

  return {
    sessions: { all: sessionsAll, day: sessionsDay, week: sessionsWeek },
    pageviews,
    clicks,
    avgPagesPerSession: sessionsAll > 0 ? pageviews / sessionsAll : 0,
    returningPct: sessionsAll > 0 ? Math.round((returning / sessionsAll) * 100) : 0,
    mobilePct: sessionsAll > 0 ? Math.round((mobile / sessionsAll) * 100) : 0,
    topPages: topPagesRaw.map((r) => ({ path: r.path, count: r._count.path })),
    topClicks: topClicksRaw.map((r) => ({
      label: r.label ?? "(unlabelled)",
      count: r._count.label,
    })),
    topReferrers: referrersRaw.map((r) => ({
      referrer: r.referrer ?? "Direct / none",
      count: r._count.id,
    })),
    devices: devicesRaw.map((r) => ({ device: r.device, count: r._count.device })),
  };
}

export interface Journey {
  sessionId: string;
  visitorId: string;
  startedAt: Date;
  lastSeenAt: Date;
  device: string;
  referrer: string | null;
  landingPath: string;
  utm: { source: string | null; medium: string | null; campaign: string | null };
  isReturning: boolean;
  pageviews: number;
  clicks: number;
  events: { type: string; path: string; label: string | null; createdAt: Date }[];
}

export async function getRecentJourneys(limit = 25): Promise<Journey[]> {
  const sessions = await prisma.visitorSession.findMany({
    orderBy: { startedAt: "desc" },
    take: limit,
    include: {
      events: {
        orderBy: { createdAt: "asc" },
        take: 60,
        select: { type: true, path: true, label: true, createdAt: true },
      },
    },
  });
  return sessions.map((s) => ({
    sessionId: s.id,
    visitorId: s.visitorId,
    startedAt: s.startedAt,
    lastSeenAt: s.lastSeenAt,
    device: s.device,
    referrer: s.referrer,
    landingPath: s.landingPath,
    utm: { source: s.utmSource, medium: s.utmMedium, campaign: s.utmCampaign },
    isReturning: s.isReturning,
    pageviews: s.pageviews,
    clicks: s.clicks,
    events: s.events,
  }));
}
