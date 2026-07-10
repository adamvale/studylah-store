import type { Metadata } from "next";
import { prisma } from "@/lib/db";

export const metadata: Metadata = { title: "Referral payouts" };

const sgd = (cents: number) => `S$${(cents / 100).toFixed(2)}`;
const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" });

// The manual-payout worklist: who is owed what, and where to PayNow it.
// "Mark paid" is clicked AFTER the transfer is sent — it only records the fact.
export default async function PayoutsPage({
  searchParams,
}: {
  searchParams: Promise<{ marked?: string }>;
}) {
  const { marked } = await searchParams;

  const referrals = await prisma.referral.findMany({
    orderBy: { createdAt: "desc" },
    include: { referrer: true },
  });

  // Group payable rewards per referrer — one PayNow transfer settles a person.
  const owed = new Map<
    string,
    {
      referrer: (typeof referrals)[number]["referrer"];
      totalCents: number;
      rows: typeof referrals;
    }
  >();
  for (const r of referrals) {
    if (r.status !== "payable") continue;
    const entry = owed.get(r.referrerId);
    if (entry) {
      entry.totalCents += r.rewardCents;
      entry.rows.push(r);
    } else {
      owed.set(r.referrerId, { referrer: r.referrer, totalCents: r.rewardCents, rows: [r] });
    }
  }
  const owedList = [...owed.values()].sort((a, b) => b.totalCents - a.totalCents);
  const totalOwedCents = owedList.reduce((sum, o) => sum + o.totalCents, 0);
  const settled = referrals.filter((r) => r.status !== "payable").slice(0, 30);

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="font-display text-2xl font-bold text-ink">Referral payouts</h1>
        <p className="text-sm text-body">
          Owed now:{" "}
          <span className="font-mono font-bold text-accent">{sgd(totalOwedCents)}</span>{" "}
          across {owedList.length} referrer{owedList.length === 1 ? "" : "s"}
        </p>
      </div>
      <p className="mt-1 max-w-2xl text-sm text-body">
        Send each transfer yourself (PayNow), then hit &ldquo;Mark paid&rdquo; to
        record it. Rewards void automatically if the friend&apos;s order is
        refunded before payout.
      </p>

      {marked && (
        <p className="mt-4 rounded-lg bg-guarantee/15 px-4 py-2.5 text-sm text-ink">
          Recorded as paid.
        </p>
      )}

      {owedList.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-hairline bg-surface p-6 text-sm text-body">
          Nothing owed right now.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {owedList.map(({ referrer, totalCents, rows }) => (
            <section
              key={referrer.id}
              className="rounded-2xl border border-hairline bg-surface p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-ink">{referrer.email}</p>
                  <p className="mt-0.5 text-xs text-body">
                    Code {referrer.referralCode ?? "—"} · PayNow:{" "}
                    <span className="font-mono text-ink">
                      {referrer.payoutHandle ?? "not provided yet"}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-mono text-xl font-bold text-accent">
                    {sgd(totalCents)}
                  </p>
                  <form action="/api/admin/payouts/mark-paid" method="post">
                    <input type="hidden" name="referrerId" value={referrer.id} />
                    <button
                      type="submit"
                      className="rounded-lg bg-signal px-4 py-2 text-sm font-medium text-white hover:bg-signal-deep"
                    >
                      Mark paid
                    </button>
                  </form>
                </div>
              </div>
              <ul className="mt-3 space-y-1 border-t border-hairline pt-3 text-xs text-body">
                {rows.map((r) => (
                  <li key={r.id} className="flex justify-between gap-3">
                    <span>
                      Order No. {r.refereeOrderId} · {r.refereeEmail}
                    </span>
                    <span className="font-mono">
                      {sgd(r.rewardCents)} · {fmtDate(r.createdAt)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      {settled.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-lg font-bold text-ink">History</h2>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-hairline bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-hairline text-left text-xs text-body">
                  <th className="px-4 py-2.5 font-medium">Referrer</th>
                  <th className="px-4 py-2.5 font-medium">Referee order</th>
                  <th className="px-4 py-2.5 font-medium">Reward</th>
                  <th className="px-4 py-2.5 font-medium">Status</th>
                  <th className="px-4 py-2.5 font-medium">Paid at</th>
                </tr>
              </thead>
              <tbody>
                {settled.map((r) => (
                  <tr key={r.id} className="border-b border-hairline last:border-0">
                    <td className="px-4 py-2.5 text-body">{r.referrer.email}</td>
                    <td className="px-4 py-2.5 font-mono text-body">
                      No. {r.refereeOrderId}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-ink">{sgd(r.rewardCents)}</td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          r.status === "paid"
                            ? "bg-guarantee/15 text-guarantee"
                            : "bg-coral/15 text-coral"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 font-mono text-body">
                      {r.paidAt ? fmtDate(r.paidAt) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
