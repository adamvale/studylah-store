import {
  LEVELS,
  PUBLISHED_LEVELS,
  TIER_NAMES,
  TIER_ORDER,
  subjectsForLevel,
} from "@/lib/catalogue";
import { listGrants } from "@/lib/server/access-grants";

export const dynamic = "force-dynamic";
export const metadata = { title: "Access grants" };

const inputCls =
  "w-full rounded-lg border border-hairline bg-night-2 px-3 py-2 text-sm text-ink outline-none focus:border-accent";

export default async function AdminAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ granted?: string; revoked?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const grants = await listGrants();
  const subjectOptions = PUBLISHED_LEVELS.flatMap((level) =>
    subjectsForLevel(level).map((s) => ({
      value: `${level}::${s.slug}`,
      label: `${s.name} · ${LEVELS[level].shortName}`,
    }))
  );
  const bundleOptions = [
    { value: "all::all", label: "All subjects (O-Level + N(A)-Level)" },
    ...PUBLISHED_LEVELS.map((level) => ({
      value: `all::${level}`,
      label: `All ${LEVELS[level].shortName} subjects`,
    })),
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">Access grants</h1>
      <p className="mt-1 max-w-2xl text-sm text-body">
        Give a customer pack access without a purchase, comps, support fixes,
        influencers. Grant one subject or a whole level / all subjects in one
        action. A <span className="font-medium text-ink">Master</span> grant also
        unlocks StudyLand and the game. Grants are free (S$0); tick the box to
        email the customer a sign-in link, or tell them directly. They sign in
        with this email to get their PDFs and dashboard.
      </p>

      {sp.granted && (
        <div className="mt-4 rounded-xl border border-guarantee/40 bg-guarantee/10 px-4 py-3 text-sm text-guarantee">
          Access granted (order #{sp.granted}). The customer can sign in now.
        </div>
      )}
      {sp.revoked && (
        <div className="mt-4 rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-ink">
          Grant revoked.
        </div>
      )}
      {sp.error && (
        <div className="mt-4 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-coral">
          {decodeURIComponent(sp.error)}
        </div>
      )}

      <form
        action="/api/admin/access/grant"
        method="post"
        className="mt-5 rounded-2xl border border-hairline bg-surface p-5"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block sm:col-span-1">
            <span className="text-xs font-medium text-body">Customer email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="student@example.com"
              className={`mt-1 ${inputCls}`}
            />
          </label>
          <label className="block sm:col-span-1">
            <span className="text-xs font-medium text-body">Subject</span>
            <select name="subject" required defaultValue="" className={`mt-1 ${inputCls}`}>
              <option value="" disabled>
                Choose a subject or bundle…
              </option>
              <optgroup label="Bundles">
                {bundleOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Single subject">
                {subjectOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </optgroup>
            </select>
          </label>
          <label className="block sm:col-span-1">
            <span className="text-xs font-medium text-body">Tier</span>
            <select name="tier" required defaultValue="master" className={`mt-1 ${inputCls}`}>
              {TIER_ORDER.map((t) => (
                <option key={t} value={t}>
                  {TIER_NAMES[t]}
                  {t === "master" ? " (unlocks StudyLand)" : ""}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm text-body">
          <input
            type="checkbox"
            name="notify"
            defaultChecked
            className="h-4 w-4 rounded border-hairline bg-night-2"
          />
          Email the customer a sign-in link
        </label>
        <button
          type="submit"
          className="mt-3 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night transition-opacity hover:opacity-90"
        >
          Grant access
        </button>
      </form>

      <div className="mt-8">
        <h2 className="font-display text-lg font-bold text-ink">
          Current grants{" "}
          <span className="text-sm font-normal text-body">({grants.length})</span>
        </h2>
        {grants.length === 0 ? (
          <p className="mt-3 text-sm text-body">No comp grants yet.</p>
        ) : (
          <div className="mt-3 overflow-x-auto rounded-2xl border border-hairline">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-night-2 text-xs text-body">
                <tr>
                  <th className="px-4 py-2 font-medium">Customer</th>
                  <th className="px-4 py-2 font-medium">Granted</th>
                  <th className="px-4 py-2 font-medium">Date</th>
                  <th className="px-4 py-2 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {grants.map((g) => (
                  <tr key={g.orderId} className="border-t border-hairline">
                    <td className="px-4 py-3 text-ink">{g.email}</td>
                    <td className="px-4 py-3 text-body">
                      {g.lines.map((l) => (
                        <span
                          key={`${l.subjectName}-${l.tier}`}
                          className="mr-1.5 inline-block rounded-full bg-night-2 px-2 py-0.5 text-xs text-ink"
                        >
                          {l.subjectName} · {l.tier}
                        </span>
                      ))}
                      {g.master && (
                        <span className="ml-1 text-xs font-medium text-accent">
                          + StudyLand
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-body">
                      {g.createdAt.toLocaleDateString("en-SG", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <form action="/api/admin/access/revoke" method="post">
                        <input type="hidden" name="orderId" value={g.orderId} />
                        <button
                          type="submit"
                          className="rounded-lg border border-hairline px-3 py-1.5 text-xs font-medium text-coral hover:border-coral"
                        >
                          Revoke
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
