import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { LEVELS, PUBLISHED_LEVELS, subjectsForLevel } from "@/lib/catalogue";
import { getCustomerId } from "@/lib/server/customer-session";

export const metadata: Metadata = { title: "Your account" };

type ItemRow = {
  id: string;
  productId: string;
  subjectName: string;
  productName: string;
  levelName: string;
  tier: string;
  fileLabel: string;
  downloadEvents: { at: Date }[];
};

function groupByProduct(items: ItemRow[]) {
  const groups = new Map<
    string,
    { key: string; subjectName: string; productName: string; levelName: string; tier: string; items: ItemRow[] }
  >();
  for (const item of items) {
    const existing = groups.get(item.productId);
    if (existing) existing.items.push(item);
    else
      groups.set(item.productId, {
        key: item.productId,
        subjectName: item.subjectName,
        productName: item.productName,
        levelName: item.levelName,
        tier: item.tier,
        items: [item],
      });
  }
  return [...groups.values()];
}

const sgd = (cents: number) => `S$${(cents / 100).toFixed(2)}`;
const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" });

const BANNER: Record<string, { tone: "ok" | "bad"; msg: string }> = {
  "sent=1": { tone: "ok", msg: "Receipt email sent." },
  "emailsent=1": {
    tone: "ok",
    msg: "Check your new inbox for a confirmation link — the change applies once you click it.",
  },
  "emailchanged=1": { tone: "ok", msg: "Your sign-in email has been updated." },
  "error=order": { tone: "bad", msg: "Couldn't resend that receipt — please try again." },
  "error=same": { tone: "bad", msg: "That's already the email on your account." },
  "error=taken": { tone: "bad", msg: "That email is already used by another account." },
  "error=email": { tone: "bad", msg: "Please enter a valid email address." },
  "error=send": { tone: "bad", msg: "We couldn't send that email — please try again." },
  "error=emaillink": {
    tone: "bad",
    msg: "That confirmation link expired or was invalid — request a new one.",
  },
};

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    include: {
      orders: {
        orderBy: { createdAt: "desc" },
        include: {
          items: {
            include: {
              product: { include: { subject: true } },
              downloadEvents: { orderBy: { at: "desc" }, take: 1 },
            },
          },
        },
      },
    },
  });
  if (!customer) redirect("/account/login");

  // What they already own (ignore refunded orders), for "complete your set".
  const owned = new Set<string>();
  for (const order of customer.orders) {
    if (order.status === "refunded") continue;
    for (const item of order.items) {
      owned.add(`${item.product.subject.level}/${item.product.subject.slug}`);
    }
  }
  const unownedByLevel = PUBLISHED_LEVELS.map((level) => ({
    level,
    subjects: subjectsForLevel(level).filter((s) => !owned.has(`${level}/${s.slug}`)),
  })).filter((g) => g.subjects.length > 0);

  const ownedCount = owned.size;
  const bundleNudge =
    ownedCount >= 1 && ownedCount < 3
      ? `You own ${ownedCount} subject${ownedCount === 1 ? "" : "s"}. Add ${3 - ownedCount} more and Mega-Bundle pricing applies — every subject gets cheaper.`
      : ownedCount >= 3 && ownedCount < 5
        ? `You own ${ownedCount} subjects. Add ${5 - ownedCount} more for All-In — the lowest price per subject there is.`
        : null;

  const params = await searchParams;
  const banner =
    Object.entries(params)
      .map(([k, v]) => BANNER[`${k}=${v}`])
      .find(Boolean) ?? null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink">Your account</h1>
          <p className="mt-1 text-sm text-body">
            Signed in as <span className="font-medium text-ink">{customer.email}</span>
          </p>
        </div>
        <form action="/api/account/logout" method="post">
          <button
            type="submit"
            className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-body hover:text-ink"
          >
            Sign out
          </button>
        </form>
      </div>

      {banner && (
        <p
          className={`mt-6 rounded-lg px-4 py-2.5 text-sm text-ink ${
            banner.tone === "ok" ? "bg-guarantee/15" : "bg-coral/15"
          }`}
        >
          {banner.msg}
        </p>
      )}

      {/* Orders */}
      {customer.orders.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-hairline bg-surface p-8 text-center">
          <p className="font-display text-lg font-bold text-ink">No orders yet</p>
          <p className="mt-2 text-sm text-body">
            When you buy a forecast it&apos;ll appear here for re-download.
          </p>
          <Link
            href="/o-level"
            className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Browse subjects
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {customer.orders.map((order) => {
            const refunded = order.status === "refunded";
            return (
              <section key={order.id} className="rounded-2xl border border-hairline bg-surface p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-display font-bold text-ink">
                    Order No. {order.id}
                    {refunded && (
                      <span className="ml-2 rounded-full bg-coral/20 px-2 py-0.5 text-xs font-medium text-coral">
                        Refunded
                      </span>
                    )}
                  </p>
                  <p className="font-mono text-sm text-body">
                    {fmtDate(order.createdAt)} · {sgd(order.totalCents)}
                  </p>
                </div>

                <div className="mt-4 space-y-4 border-t border-hairline pt-4">
                  {groupByProduct(order.items).map((group) => (
                    <div key={group.key}>
                      <p className="text-sm font-medium text-ink">
                        {group.subjectName} — {group.productName}
                      </p>
                      <p className="text-xs text-body">
                        {group.levelName} · {group.tier} tier
                      </p>
                      <div className="mt-2 space-y-2">
                        {group.items.map((item) => {
                          const last = item.downloadEvents[0]?.at;
                          return (
                            <div
                              key={item.id}
                              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-hairline bg-night px-4 py-3"
                            >
                              <div>
                                <p className="text-sm text-body">{item.fileLabel}</p>
                                <p className="mt-0.5 text-xs text-body/70">
                                  {last
                                    ? `Last downloaded ${fmtDate(last)}`
                                    : "Not downloaded yet"}
                                </p>
                              </div>
                              {refunded ? (
                                <span className="text-xs text-body">Unavailable</span>
                              ) : (
                                <a
                                  href={`/api/account/download/${item.id}`}
                                  className="rounded-lg bg-signal px-4 py-2 text-sm font-medium text-white hover:bg-signal-deep"
                                >
                                  Download
                                </a>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {!refunded && (
                  <form
                    action="/api/account/resend-receipt"
                    method="post"
                    className="mt-4 border-t border-hairline pt-3"
                  >
                    <input type="hidden" name="orderId" value={order.id} />
                    <button type="submit" className="text-xs font-medium text-accent underline">
                      Email me this receipt again
                    </button>
                  </form>
                )}
              </section>
            );
          })}
        </div>
      )}

      {/* Complete your set + bundle nudge */}
      {unownedByLevel.length > 0 && (
        <section className="mt-10 rounded-2xl border border-hairline bg-surface p-5">
          <h2 className="font-display text-lg font-bold text-ink">Complete your set</h2>
          {bundleNudge && <p className="mt-1 text-sm text-body">{bundleNudge}</p>}
          <div className="mt-4 space-y-4">
            {unownedByLevel.map((group) => (
              <div key={group.level}>
                <p className="text-xs font-medium text-body">{LEVELS[group.level].name}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.subjects.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${group.level}/${s.slug}`}
                      className="rounded-full border border-hairline bg-night px-3.5 py-1.5 text-sm font-medium text-cloud hover:border-accent"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/bundles"
            className="mt-5 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Build a bundle &amp; save
          </Link>
        </section>
      )}

      {/* Account settings */}
      <section className="mt-6 rounded-2xl border border-hairline bg-surface p-5">
        <h2 className="font-display text-lg font-bold text-ink">Account settings</h2>
        <p className="mt-1 text-sm text-body">
          Change the email you sign in with. We&apos;ll send a confirmation link
          to the new address — it only takes effect once you click it. Past
          orders keep the email they were bought under.
        </p>
        <form
          action="/api/account/change-email/request"
          method="post"
          className="mt-4 flex flex-wrap items-end gap-3"
        >
          <div className="flex-1">
            <label htmlFor="new-email" className="block text-xs font-medium text-body">
              New email
            </label>
            <input
              id="new-email"
              name="email"
              type="email"
              required
              placeholder="new@example.com"
              className="mt-1 w-full rounded-lg border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg border border-hairline px-4 py-2.5 text-sm font-medium text-ink hover:border-accent"
          >
            Send confirmation
          </button>
        </form>
      </section>

      <p className="mt-10 text-xs text-body">
        Every PDF is watermarked to your email and order number. Trouble with a
        file?{" "}
        <a href="mailto:hello@studylah.education" className="font-medium text-accent underline">
          hello@studylah.education
        </a>
        .
      </p>
    </div>
  );
}
