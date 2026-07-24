import {
  LEVELS,
  PUBLISHED_LEVELS,
  TIER_NAMES,
  TIER_ORDER,
  subjectsForLevel,
} from "@/lib/catalogue";
import { listBareAccounts, listCustomers, listGrants } from "@/lib/server/access-grants";

export const dynamic = "force-dynamic";
export const metadata = { title: "Access grants" };

const inputCls =
  "w-full rounded-lg border border-hairline bg-night-2 px-3 py-2 text-sm text-ink outline-none focus:border-accent";

export default async function AdminAccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    granted?: string;
    revoked?: string;
    error?: string;
    account?: string;
    exists?: string;
  }>;
}) {
  const sp = await searchParams;
  const [grants, customers, bare] = await Promise.all([
    listGrants(),
    listCustomers(),
    listBareAccounts(),
  ]);
  const money = (cents: number) =>
    `S$${(cents / 100).toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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
        action. A <span className="font-medium text-ink">Ultra</span> grant also
        unlocks StudyLand and the game. Grants are free (S$0); tick the box to
        email the customer a sign-in link, or tell them directly. They sign in
        with this email to get their PDFs and dashboard.
      </p>

      {sp.granted && (
        <div className="mt-4 rounded-xl border border-guarantee/40 bg-guarantee/10 px-4 py-3 text-sm text-guarantee">
          Access granted (order #{sp.granted}). The customer can sign in now.
        </div>
      )}
      {sp.account && (
        <div className="mt-4 rounded-xl border border-guarantee/40 bg-guarantee/10 px-4 py-3 text-sm text-guarantee">
          Account created for {decodeURIComponent(sp.account)}. They can sign in
          now, and have no subjects yet.
        </div>
      )}
      {sp.exists && (
        <div className="mt-4 rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-ink">
          {decodeURIComponent(sp.exists)} was already on the system, so nothing
          was changed.
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

      <form
        action="/api/admin/access/create-account"
        method="post"
        className="mt-5 rounded-2xl border border-hairline bg-surface p-5"
      >
        <h2 className="font-display text-lg font-bold text-ink">
          Create a student account
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-body">
          Registers a student by email and gives them nothing. Useful for
          putting someone on the system before they buy, or for a student you
          will grant subjects to separately. There is no password: they sign in
          with this email and we send a link. Safe to reuse an address, an
          existing customer is reported back, never overwritten.
        </p>
        <p className="mt-2 max-w-2xl text-xs text-body">
          Worth knowing: every study tool sits behind a paid tier, so an account
          on its own signs in to its orders and the unlock page and no further.
          To give them the packs, use{" "}
          <span className="font-medium text-ink">Grant access</span> above.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <label className="block sm:col-span-1">
            <span className="mb-1 block text-xs font-medium text-body">Student email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="student@example.com"
              className={inputCls}
            />
          </label>
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm text-body">
          <input
            type="checkbox"
            name="notify"
            defaultChecked
            className="h-4 w-4 rounded border-hairline bg-night-2"
          />
          Email the student a sign-in link
        </label>
        <button
          type="submit"
          className="mt-3 rounded-lg border border-accent px-5 py-2.5 text-sm font-bold text-accent transition-opacity hover:opacity-90"
        >
          Create account
        </button>
      </form>

      <div className="mt-8">
        <h2 className="font-display text-lg font-bold text-ink">
          Registered, nothing granted yet{" "}
          <span className="text-sm font-normal text-body">({bare.length})</span>
        </h2>
        {bare.length === 0 ? (
          <p className="mt-3 text-sm text-body">
            No accounts are waiting. Every registered student has something.
          </p>
        ) : (
          <div className="mt-3 overflow-x-auto rounded-2xl border border-hairline">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead className="bg-night-2 text-xs text-body">
                <tr>
                  <th className="px-4 py-2 font-medium">Email</th>
                  <th className="px-4 py-2 font-medium">Registered</th>
                </tr>
              </thead>
              <tbody>
                {bare.map((a) => (
                  <tr key={a.email} className="border-t border-hairline">
                    <td className="px-4 py-2 text-ink">{a.email}</td>
                    <td className="px-4 py-2 text-body">
                      {a.createdAt.toLocaleDateString("en-SG")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

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
                  <tr key={g.email} className="border-t border-hairline">
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
                        <input type="hidden" name="email" value={g.email} />
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

      {/* Customer directory: every account and what they own. */}
      <div className="mt-10">
        <h2 className="font-display text-lg font-bold text-ink">
          All customers{" "}
          <span className="text-sm font-normal text-body">({customers.length})</span>
        </h2>
        <p className="mt-1 text-sm text-body">
          Everyone with an account and what they&apos;ve purchased. Comp grants
          show a badge and don&apos;t count toward spend.
        </p>
        {customers.length === 0 ? (
          <p className="mt-3 text-sm text-body">No customers yet.</p>
        ) : (
          <div className="mt-3 overflow-x-auto rounded-2xl border border-hairline">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-night-2 text-xs text-body">
                <tr>
                  <th className="px-4 py-2 font-medium">Customer</th>
                  <th className="px-4 py-2 font-medium">Purchases</th>
                  <th className="px-4 py-2 font-medium">Spent</th>
                  <th className="px-4 py-2 font-medium">Access</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c) => (
                  <tr key={c.email} className="border-t border-hairline align-top">
                    <td className="px-4 py-3 text-ink">
                      {c.email}
                      <span className="mt-0.5 block text-xs text-body">
                        joined{" "}
                        {c.createdAt.toLocaleDateString("en-SG", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-body">
                      {c.subjects.length === 0 ? (
                        <span className="text-body/60">No purchases</span>
                      ) : (
                        c.subjects.map((s) => (
                          <span
                            key={`${s.subjectName}-${s.tier}`}
                            className="mb-1 mr-1.5 inline-block rounded-full bg-night-2 px-2 py-0.5 text-xs text-ink"
                          >
                            {s.subjectName} · {s.tier}
                          </span>
                        ))
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-ink">
                      {money(c.spentCents)}
                      <span className="mt-0.5 block text-xs text-body">
                        {c.orders} order{c.orders === 1 ? "" : "s"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {c.master && (
                        <span className="mr-1 inline-block rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                          StudyLand
                        </span>
                      )}
                      {c.comped && (
                        <span className="inline-block rounded-full bg-signal/15 px-2 py-0.5 text-xs font-medium text-teal">
                          Comp
                        </span>
                      )}
                      {!c.master && !c.comped && (
                        <span className="text-xs text-body/60">
                          {c.orders > 0 ? "PDFs only" : "—"}
                        </span>
                      )}
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
