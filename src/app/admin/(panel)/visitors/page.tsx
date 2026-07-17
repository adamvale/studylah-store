import {
  getDailyVisitors,
  getRecentJourneys,
  getVisitorOverview,
  type DailyVisitors,
} from "@/lib/server/visitor-metrics";

export const dynamic = "force-dynamic";
export const metadata = { title: "Visitors" };

function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5">
      <p className="text-xs font-medium text-body">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold text-ink">{value}</p>
      {hint && <p className="mt-0.5 text-xs text-body">{hint}</p>}
    </div>
  );
}

function BarList({
  title,
  hint,
  rows,
  empty,
}: {
  title: string;
  hint?: string;
  rows: { label: string; count: number }[];
  empty: string;
}) {
  const max = Math.max(1, ...rows.map((r) => r.count));
  return (
    <section className="rounded-2xl border border-hairline bg-surface p-5">
      <h2 className="font-display text-lg font-bold text-ink">{title}</h2>
      {hint && <p className="text-xs text-body">{hint}</p>}
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-body">{empty}</p>
      ) : (
        <div className="mt-4 space-y-2">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <span className="w-40 shrink-0 truncate text-sm text-body" title={r.label}>
                {r.label}
              </span>
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-heat-1">
                <div
                  className="h-full rounded-full bg-trust"
                  style={{ width: `${Math.round((r.count / max) * 100)}%` }}
                />
              </div>
              <span className="w-10 shrink-0 text-right font-mono text-sm text-ink">
                {r.count}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

const time = (d: Date) =>
  d.toLocaleString("en-SG", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

export default async function AdminVisitorsPage() {
  const [o, journeys, daily] = await Promise.all([
    getVisitorOverview(),
    getRecentJourneys(25),
    getDailyVisitors(30),
  ]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-bold text-ink">Visitors</h1>
        <span className="text-xs text-body">First-party · anonymous · no PII</span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Metric
          label="Visitors (sessions)"
          value={o.sessions.all.toLocaleString()}
          hint={`${o.sessions.day} in 24h · ${o.sessions.week} in 7d`}
        />
        <Metric label="Pageviews" value={o.pageviews.toLocaleString()} />
        <Metric label="Clicks tracked" value={o.clicks.toLocaleString()} />
        <Metric
          label="Avg pages / visit"
          value={o.avgPagesPerSession.toFixed(1)}
          hint={`${o.returningPct}% returning · ${o.mobilePct}% mobile`}
        />
      </div>

      <DailySection daily={daily} />

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <BarList
          title="Top pages"
          hint="Pageviews by path."
          rows={o.topPages.map((p) => ({ label: p.path, count: p.count }))}
          empty="No pageviews yet."
        />
        <BarList
          title="Most-clicked"
          hint="Where visitors click, by element."
          rows={o.topClicks.map((c) => ({ label: c.label, count: c.count }))}
          empty="No clicks yet."
        />
        <BarList
          title="Top referrers"
          hint="Where sessions come from."
          rows={o.topReferrers.map((r) => ({ label: r.referrer, count: r.count }))}
          empty="No sessions yet."
        />
        <BarList
          title="Devices"
          rows={o.devices.map((d) => ({
            label: d.device === "mobile" ? "Mobile" : "Desktop",
            count: d.count,
          }))}
          empty="No sessions yet."
        />
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-bold text-ink">
          Recent journeys{" "}
          <span className="text-sm font-normal text-body">({journeys.length})</span>
        </h2>
        <p className="mt-1 text-sm text-body">
          Each visit, expand to replay the click-by-click path.
        </p>
        {journeys.length === 0 ? (
          <p className="mt-3 text-sm text-body">No visits recorded yet.</p>
        ) : (
          <div className="mt-3 space-y-2">
            {journeys.map((j) => (
              <details
                key={j.sessionId}
                className="group rounded-2xl border border-hairline bg-surface"
              >
                <summary className="flex cursor-pointer flex-wrap items-center gap-x-3 gap-y-1 px-5 py-3">
                  <span className="rounded-full bg-night-2 px-2 py-0.5 text-xs font-medium text-ink">
                    {j.device === "mobile" ? "📱 Mobile" : "🖥 Desktop"}
                  </span>
                  <span className="text-sm text-ink">{j.referrer ?? "Direct"}</span>
                  <span className="text-xs text-body">landed {j.landingPath}</span>
                  {j.isReturning && (
                    <span className="rounded-full bg-signal/15 px-2 py-0.5 text-xs font-medium text-teal">
                      returning
                    </span>
                  )}
                  {j.utm.source && (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                      {j.utm.source}
                      {j.utm.campaign ? ` · ${j.utm.campaign}` : ""}
                    </span>
                  )}
                  <span className="ml-auto text-xs text-body">
                    {j.pageviews} pages · {j.clicks} clicks · {time(j.startedAt)}
                  </span>
                </summary>
                <ol className="border-t border-hairline px-5 py-3 text-sm">
                  {j.events.map((e, i) => (
                    <li key={i} className="flex items-baseline gap-2 py-0.5">
                      <span className="font-mono text-[11px] text-body/70">
                        {e.createdAt.toLocaleTimeString("en-SG", {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })}
                      </span>
                      {e.type === "click" ? (
                        <span className="text-ink">
                          <span className="font-medium text-accent">click</span>{" "}
                          {e.label ?? "(unlabelled)"}
                          <span className="text-body"> · {e.path}</span>
                        </span>
                      ) : (
                        <span className="text-ink">
                          <span className="font-medium text-trust">view</span>{" "}
                          {e.path}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


// ── Daily visitors: the day-by-day growth view ──────────────────────────────
function delta(today: number, yesterday: number): { text: string; cls: string } {
  const d = today - yesterday;
  if (d > 0) return { text: `▲ ${d}`, cls: "text-teal" };
  if (d < 0) return { text: `▼ ${Math.abs(d)}`, cls: "text-coral" };
  return { text: "—", cls: "text-body/50" };
}

function DailySection({ daily }: { daily: DailyVisitors[] }) {
  const max = Math.max(1, ...daily.map((d) => d.sessions));
  const last14 = daily.slice(-14).reverse(); // newest first for the table
  const week = daily.slice(-7).reduce((n, d) => n + d.sessions, 0);
  const prevWeek = daily.slice(-14, -7).reduce((n, d) => n + d.sessions, 0);
  const weekTrend = delta(week, prevWeek);

  return (
    <section className="mt-6 rounded-2xl border border-hairline bg-surface p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-lg font-bold text-ink">Daily visitors</h2>
        <p className="text-xs text-body">
          Last 7 days: <span className="font-mono text-ink">{week}</span> visits{" "}
          <span className={weekTrend.cls}>{weekTrend.text}</span> vs the 7 before
        </p>
      </div>
      <p className="text-xs text-body">
        Visits (sessions) per day, Singapore time, last 30 days.
      </p>

      {/* the 30-day bar chart */}
      <div className="mt-4 flex h-28 items-end gap-[3px]" aria-hidden>
        {daily.map((d) => (
          <div
            key={d.day}
            className="group relative flex-1"
            title={`${d.label}: ${d.sessions} visits, ${d.unique} unique, ${d.pageviews} pageviews`}
          >
            <div
              className={`w-full rounded-t ${d.sessions > 0 ? "bg-trust" : "bg-heat-1"}`}
              style={{ height: `${Math.max(3, Math.round((d.sessions / max) * 112))}px` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-body/60">
        <span>{daily[0]?.label}</span>
        <span>{daily[daily.length - 1]?.label}</span>
      </div>

      {/* the day-by-day table, newest first */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-hairline text-left text-xs text-body">
              <th className="py-1.5 pr-3 font-medium">Day</th>
              <th className="py-1.5 pr-3 text-right font-medium">Visits</th>
              <th className="py-1.5 pr-3 text-right font-medium">vs prev day</th>
              <th className="py-1.5 pr-3 text-right font-medium">Unique</th>
              <th className="py-1.5 text-right font-medium">Pageviews</th>
            </tr>
          </thead>
          <tbody>
            {last14.map((d, i) => {
              const prev = last14[i + 1];
              const t = prev ? delta(d.sessions, prev.sessions) : { text: "—", cls: "text-body/50" };
              return (
                <tr key={d.day} className="border-b border-hairline/50">
                  <td className="py-1.5 pr-3 text-body">{d.label}</td>
                  <td className="py-1.5 pr-3 text-right font-mono text-ink">{d.sessions}</td>
                  <td className={`py-1.5 pr-3 text-right font-mono text-xs ${t.cls}`}>{t.text}</td>
                  <td className="py-1.5 pr-3 text-right font-mono text-body">{d.unique}</td>
                  <td className="py-1.5 text-right font-mono text-body">{d.pageviews}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
