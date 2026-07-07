import Link from "next/link";
import { LEVELS, TIER_NAMES, TIER_ORDER } from "@/lib/catalogue";
import { getDashboardMetrics } from "@/lib/server/metrics";
import { getEarlyBird } from "@/lib/server/pricing-store";

export const dynamic = "force-dynamic";

function money(cents: number): string {
  return `S$${(cents / 100).toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-trust/10 bg-white p-5">
      <p className="text-xs font-medium text-body">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-ink">{value}</p>
      {hint && <p className="mt-0.5 text-xs text-body">{hint}</p>}
    </div>
  );
}

export default async function AdminDashboardPage() {
  const [m, earlyBird] = await Promise.all([getDashboardMetrics(), getEarlyBird()]);
  const maxCount = Math.max(1, ...m.topSubjects.map((s) => s.count));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-bold text-ink">Dashboard</h1>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            earlyBird ? "bg-signal/10 text-signal-deep" : "bg-trust-soft text-trust"
          }`}
        >
          Early-bird pricing {earlyBird ? "ON" : "off"}
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Metric
          label="Revenue this week"
          value={money(m.revenueWeekCents)}
          hint={`${m.ordersWeek} order${m.ordersWeek === 1 ? "" : "s"}`}
        />
        <Metric label="Revenue all time" value={money(m.revenueAllCents)} hint={`${m.ordersAll} orders`} />
        <Metric label="Average order value" value={money(m.aovCents)} hint="all-time AOV" />
        <Metric
          label="Master attach-rate"
          value={`${m.masterAttachRate}%`}
          hint="of subject selections"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-trust/10 bg-white p-5">
          <h2 className="font-display text-lg font-bold text-ink">Tier mix</h2>
          <p className="text-xs text-body">Subject selections by tier, all orders.</p>
          <div className="mt-4 space-y-2">
            {TIER_ORDER.map((tier) => {
              const count = m.tierBreakdown[tier];
              const total =
                m.tierBreakdown.essential + m.tierBreakdown.strategic + m.tierBreakdown.master;
              const pct = total > 0 ? Math.round((count / total) * 100) : 0;
              return (
                <div key={tier} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-sm text-body">{TIER_NAMES[tier]}</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-heat-1">
                    <div
                      className={`h-full rounded-full ${tier === "master" ? "bg-heat-5" : tier === "strategic" ? "bg-heat-3" : "bg-heat-2"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-16 shrink-0 text-right font-mono text-sm text-ink">
                    {count} · {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-trust/10 bg-white p-5">
          <h2 className="font-display text-lg font-bold text-ink">Orders by subject</h2>
          <p className="text-xs text-body">Purchases per subject, all orders.</p>
          {m.topSubjects.length === 0 ? (
            <p className="mt-4 text-sm text-body">No paid orders yet.</p>
          ) : (
            <div className="mt-4 space-y-2">
              {m.topSubjects.slice(0, 8).map((s) => (
                <div key={s.key} className="flex items-center gap-3">
                  <span className="w-40 shrink-0 truncate text-sm text-body" title={s.name}>
                    {s.name}
                    <span className="text-body/50"> · {LEVELS[s.level].shortName}</span>
                  </span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-heat-1">
                    <div
                      className="h-full rounded-full bg-trust"
                      style={{ width: `${Math.round((s.count / maxCount) * 100)}%` }}
                    />
                  </div>
                  <span className="w-8 shrink-0 text-right font-mono text-sm text-ink">
                    {s.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Metric label="Email leads" value={String(m.leadsAll)} hint={`${m.leadsWeek} this week`} />
        <div className="rounded-2xl border border-trust/10 bg-white p-5">
          <p className="text-xs font-medium text-body">Quick links</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Link href="/admin/orders" className="rounded-lg border border-trust/25 px-3 py-1.5 text-sm font-medium text-trust hover:border-trust/50">
              View orders
            </Link>
            <Link href="/admin/products" className="rounded-lg border border-trust/25 px-3 py-1.5 text-sm font-medium text-trust hover:border-trust/50">
              Edit pricing
            </Link>
            <Link href="/admin/leads" className="rounded-lg border border-trust/25 px-3 py-1.5 text-sm font-medium text-trust hover:border-trust/50">
              Export leads
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
