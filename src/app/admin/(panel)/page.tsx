import Link from "next/link";
import { LEVELS, TIER_NAMES, TIER_ORDER } from "@/lib/catalogue";
import { prisma } from "@/lib/db";
import { getDashboardMetrics } from "@/lib/server/metrics";
import { getEarlyBird } from "@/lib/server/pricing-store";

export const dynamic = "force-dynamic";

// "Am I Ready?" funnel, straight from DiagnosticEvent/Attempt, the same
// own-DB analytics pattern as the rest of this dashboard. "Added to cart" is
// the direct diagnostic->cart action (cta_clicked with meta "add_master").
async function getDiagnosticFunnel() {
  const [events, attempts, unlocked, addToCart] = await Promise.all([
    prisma.diagnosticEvent.groupBy({ by: ["type"], _count: { type: true } }),
    prisma.diagnosticAttempt.count(),
    prisma.diagnosticAttempt.count({ where: { unlockedAt: { not: null } } }),
    prisma.diagnosticEvent.count({
      where: { type: "cta_clicked", meta: "add_master" },
    }),
  ]);
  const count = (type: string) =>
    events.find((e) => e.type === type)?._count.type ?? 0;
  return {
    starts: count("diagnostic_start"),
    completes: attempts,
    emails: unlocked,
    addToCart,
    ctaClicks: count("cta_clicked"),
    shares: count("result_shared"),
  };
}

// Open abandoned carts (captured email, not yet recovered) = warm,
// re-marketable demand. recoveredAt is set when they come back and pay.
async function getAbandonedCarts() {
  const [open, recovered] = await Promise.all([
    prisma.abandonedCart.count({ where: { recoveredAt: null } }),
    prisma.abandonedCart.count({ where: { recoveredAt: { not: null } } }),
  ]);
  return { open, recovered };
}

function pct(part: number, whole: number): string {
  return whole > 0 ? `${Math.round((part / whole) * 100)}%` : "—";
}

function money(cents: number): string {
  return `S$${(cents / 100).toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5">
      <p className="text-xs font-medium text-body">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-ink">{value}</p>
      {hint && <p className="mt-0.5 text-xs text-body">{hint}</p>}
    </div>
  );
}

export default async function AdminDashboardPage() {
  const [m, earlyBird, funnel, carts] = await Promise.all([
    getDashboardMetrics(),
    getEarlyBird(),
    getDiagnosticFunnel(),
    getAbandonedCarts(),
  ]);
  const maxCount = Math.max(1, ...m.topSubjects.map((s) => s.count));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-bold text-ink">Dashboard</h1>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            earlyBird ? "bg-signal/10 text-teal" : "bg-trust-soft text-accent"
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
        <Metric
          label={m.resetAt ? "Revenue since reset" : "Revenue all time"}
          value={money(m.revenueAllCents)}
          hint={`${m.ordersAll} orders${
            m.resetAt
              ? ` · since ${m.resetAt.toLocaleDateString("en-SG", { day: "numeric", month: "short" })}`
              : ""
          }`}
        />
        <Metric
          label="Average order value"
          value={money(m.aovCents)}
          hint={m.resetAt ? "AOV since reset" : "all-time AOV"}
        />
        <Metric
          label="Master attach-rate"
          value={`${m.masterAttachRate}%`}
          hint="of subject selections"
        />
      </div>

      {/* Revenue counter controls. Non-destructive: only moves the counting
          baseline; orders and downloads are never touched. */}
      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-body">
        {m.resetAt ? (
          <>
            <span>
              Counters started fresh on{" "}
              {m.resetAt.toLocaleString("en-SG", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
              . Orders history is untouched.
            </span>
            <form method="post" action="/api/admin/metrics/reset">
              <input type="hidden" name="action" value="clear" />
              <button
                type="submit"
                className="rounded-lg border border-hairline px-3 py-1.5 font-medium text-ink hover:border-accent"
              >
                Show all-time again
              </button>
            </form>
          </>
        ) : (
          <details className="group">
            <summary className="cursor-pointer list-none rounded-lg border border-hairline px-3 py-1.5 font-medium text-body hover:border-accent hover:text-ink">
              Reset revenue counters…
            </summary>
            <div className="mt-2 flex flex-wrap items-center gap-3 rounded-xl border border-hairline bg-surface p-3">
              <span>
                Start the dashboard numbers from zero, from this moment. No
                order is deleted, buyers keep every download, and you can
                switch back to all-time any time.
              </span>
              <form method="post" action="/api/admin/metrics/reset">
                <input type="hidden" name="action" value="reset" />
                <button
                  type="submit"
                  className="rounded-lg bg-coral/15 px-3 py-1.5 font-bold text-coral hover:bg-coral/25"
                >
                  Reset from now
                </button>
              </form>
            </div>
          </details>
        )}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-hairline bg-surface p-5">
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

        <section className="rounded-2xl border border-hairline bg-surface p-5">
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

      <div className="mt-6 rounded-2xl border border-hairline bg-surface p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-xs font-medium text-body">
            &ldquo;Am I Ready?&rdquo; diagnostic funnel
          </p>
          <p className="text-xs text-body">
            Start &rarr; cart:{" "}
            <span className="font-mono font-medium text-accent">
              {pct(funnel.addToCart, funnel.starts)}
            </span>
          </p>
        </div>
        {/* Linear funnel with step-over-step conversion, so the biggest drop
            is obvious at a glance. "Added to cart" is the diagnostic->cart
            one-tap action. */}
        <div className="mt-3 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          {[
            { label: "Starts", value: funnel.starts, rate: null },
            { label: "Completed", value: funnel.completes, rate: pct(funnel.completes, funnel.starts) },
            { label: "Emails", value: funnel.emails, rate: pct(funnel.emails, funnel.completes) },
            { label: "Added to cart", value: funnel.addToCart, rate: pct(funnel.addToCart, funnel.emails) },
          ].map((step) => (
            <div key={step.label} className="rounded-xl bg-night-2/40 p-3">
              <p className="font-display text-xl font-bold text-ink">{step.value}</p>
              <p className="text-xs text-body">{step.label}</p>
              {step.rate && (
                <p className="mt-0.5 font-mono text-[11px] text-guarantee">
                  {step.rate} of prev
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 border-t border-hairline pt-3 text-xs text-body">
          <span>
            CTA clicks (all):{" "}
            <span className="font-mono text-ink">{funnel.ctaClicks}</span>
          </span>
          <span>
            Result shares:{" "}
            <span className="font-mono text-ink">{funnel.shares}</span>
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Metric label="Email leads" value={String(m.leadsAll)} hint={`${m.leadsWeek} this week`} />
        <Metric
          label="Open abandoned carts"
          value={String(carts.open)}
          hint={`${carts.recovered} recovered all-time`}
        />
        <div className="rounded-2xl border border-hairline bg-surface p-5">
          <p className="text-xs font-medium text-body">Quick links</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Link href="/admin/orders" className="rounded-lg border border-hairline px-3 py-1.5 text-sm font-medium text-accent hover:border-hairline">
              View orders
            </Link>
            <Link href="/admin/products" className="rounded-lg border border-hairline px-3 py-1.5 text-sm font-medium text-accent hover:border-hairline">
              Edit pricing
            </Link>
            <Link href="/admin/leads" className="rounded-lg border border-hairline px-3 py-1.5 text-sm font-medium text-accent hover:border-hairline">
              Export leads
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
