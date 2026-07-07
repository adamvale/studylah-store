import { SUBJECTS, type Level, type Tier } from "../catalogue";
import { prisma } from "../db";

interface SnapshotItem {
  level: Level;
  subjectSlug: string;
  tier: Tier;
}

function parseSnapshotItems(pricingJson: string): SnapshotItem[] {
  try {
    const parsed = JSON.parse(pricingJson) as { items?: unknown };
    if (!Array.isArray(parsed.items)) return [];
    return parsed.items.filter(
      (i): i is SnapshotItem =>
        typeof i === "object" &&
        i !== null &&
        typeof (i as SnapshotItem).subjectSlug === "string"
    );
  } catch {
    return [];
  }
}

function subjectName(level: string, slug: string): string {
  return SUBJECTS.find((s) => s.level === level && s.slug === slug)?.name ?? slug;
}

export interface SubjectSales {
  key: string;
  name: string;
  level: Level;
  count: number;
}

export interface DashboardMetrics {
  revenueWeekCents: number;
  revenueAllCents: number;
  ordersWeek: number;
  ordersAll: number;
  aovCents: number;
  masterAttachRate: number; // 0-100, share of subject selections at Master
  tierBreakdown: Record<Tier, number>;
  topSubjects: SubjectSales[];
  leadsAll: number;
  leadsWeek: number;
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const orders = await prisma.order.findMany({
    where: { status: "paid" },
    select: { totalCents: true, createdAt: true, pricingJson: true },
  });

  let revenueWeekCents = 0;
  let revenueAllCents = 0;
  let ordersWeek = 0;
  const tierBreakdown: Record<Tier, number> = { essential: 0, strategic: 0, master: 0 };
  const bySubject = new Map<string, SubjectSales>();

  for (const order of orders) {
    revenueAllCents += order.totalCents;
    if (order.createdAt >= weekAgo) {
      revenueWeekCents += order.totalCents;
      ordersWeek++;
    }
    for (const item of parseSnapshotItems(order.pricingJson)) {
      if (item.tier in tierBreakdown) tierBreakdown[item.tier]++;
      const key = `${item.level}::${item.subjectSlug}`;
      const existing = bySubject.get(key);
      if (existing) {
        existing.count++;
      } else {
        bySubject.set(key, {
          key,
          name: subjectName(item.level, item.subjectSlug),
          level: item.level,
          count: 1,
        });
      }
    }
  }

  const ordersAll = orders.length;
  const totalSelections =
    tierBreakdown.essential + tierBreakdown.strategic + tierBreakdown.master;

  const [leadsAll, leadsWeek] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { createdAt: { gte: weekAgo } } }),
  ]);

  return {
    revenueWeekCents,
    revenueAllCents,
    ordersWeek,
    ordersAll,
    aovCents: ordersAll > 0 ? Math.round(revenueAllCents / ordersAll) : 0,
    masterAttachRate:
      totalSelections > 0
        ? Math.round((tierBreakdown.master / totalSelections) * 100)
        : 0,
    tierBreakdown,
    topSubjects: [...bySubject.values()].sort((a, b) => b.count - a.count),
    leadsAll,
    leadsWeek,
  };
}
