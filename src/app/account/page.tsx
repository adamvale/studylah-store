import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { PUBLISHED_LEVELS, subjectsForLevel } from "@/lib/catalogue";
import { getCustomerId } from "@/lib/server/customer-session";
import { ensureReferralCode, REFERRAL_REWARD_CENTS } from "@/lib/server/referral";
import { serverConfig } from "@/lib/server/config";
import { BundleBuilder } from "@/components/bundle-builder";
import { ReferralShare } from "@/components/referral-share";

export const metadata: Metadata = { title: "Your account" };

type ItemRow = {
  id: string;
  productId: string;
  subjectName: string;
  productName: string;
  levelName: string;
  tier: string;
  fileLabel: string;
  product: { subject: { level: string; slug: string } };
  downloadEvents: { at: Date }[];
};

const sgd = (cents: number) => `S$${(cents / 100).toFixed(2)}`;
const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" });

// Referees' emails belong to them, not the referrer — show enough to
// recognise a friend, no more.
function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!domain) return email;
  return `${user.slice(0, 2)}${"*".repeat(Math.max(1, user.length - 2))}@${domain}`;
}

const REFERRAL_STATUS: Record<string, { label: string; cls: string }> = {
  payable: { label: "Payment on the way", cls: "bg-accent/15 text-accent" },
  paid: { label: "Paid", cls: "bg-guarantee/15 text-guarantee" },
  void: { label: "Order refunded", cls: "bg-coral/15 text-coral" },
};

// One order groups by subject (each a dropdown for multi-subject orders), and
// within a subject by product (a subject's Master pack ships several products).
function groupBySubject(items: ItemRow[]) {
  const groups = new Map<
    string,
    { key: string; subjectName: string; levelName: string; items: ItemRow[] }
  >();
  for (const item of items) {
    const key = `${item.product.subject.level}/${item.product.subject.slug}`;
    const existing = groups.get(key);
    if (existing) existing.items.push(item);
    else groups.set(key, { key, subjectName: item.subjectName, levelName: item.levelName, items: [item] });
  }
  return [...groups.values()];
}

function groupByProduct(items: ItemRow[]) {
  const groups = new Map<
    string,
    { key: string; productName: string; tier: string; items: ItemRow[] }
  >();
  for (const item of items) {
    const existing = groups.get(item.productId);
    if (existing) existing.items.push(item);
    else
      groups.set(item.productId, {
        key: item.productId,
        productName: item.productName,
        tier: item.tier,
        items: [item],
      });
  }
  return [...groups.values()];
}

function FileRow({ item, refunded }: { item: ItemRow; refunded: boolean }) {
  const last = item.downloadEvents[0]?.at;
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-hairline bg-night px-4 py-3">
      <div>
        <p className="text-sm text-body">{item.fileLabel}</p>
        <p className="mt-0.5 text-xs text-body/70">
          {last ? `Last downloaded ${fmtDate(last)}` : "Not downloaded yet"}
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
}

// A subject's products + file download rows — shown inline (single-subject
// order) or inside a dropdown (multi-subject order).
function SubjectFiles({ items, refunded }: { items: ItemRow[]; refunded: boolean }) {
  return (
    <div className="space-y-4">
      {groupByProduct(items).map((group) => (
        <div key={group.key}>
          <p className="text-sm font-medium text-ink">{group.productName}</p>
          <p className="text-xs text-body">{group.tier} tier</p>
          <div className="mt-2 space-y-2">
            {group.items.map((item) => (
              <FileRow key={item.id} item={item} refunded={refunded} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

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
  "handlesaved=1": { tone: "ok", msg: "Payout details saved." },
  "handlecleared=1": { tone: "ok", msg: "Payout details removed." },
  "error=handle": { tone: "bad", msg: "That payout detail looks too long — try again." },
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
      referrals: { orderBy: { createdAt: "desc" } },
    },
  });
  if (!customer) redirect("/account/login");

  // Refer-a-friend: mint the shareable code on first visit.
  const referralCode = customer.referralCode ?? (await ensureReferralCode(customer.id));
  const referralLink = `${serverConfig.siteUrl}/?ref=${referralCode}`;
  const payableCents = customer.referrals
    .filter((r) => r.status === "payable")
    .reduce((sum, r) => sum + r.rewardCents, 0);
  const paidCents = customer.referrals
    .filter((r) => r.status === "paid")
    .reduce((sum, r) => sum + r.rewardCents, 0);
  const friendsReferred = customer.referrals.filter((r) => r.status !== "void").length;

  // What they already own (ignore refunded orders), for "complete your set".
  const owned = new Set<string>();
  for (const order of customer.orders) {
    if (order.status === "refunded") continue;
    for (const item of order.items) {
      owned.add(`${item.product.subject.level}/${item.product.subject.slug}`);
    }
  }
  // What to leave out of the bundle builder, in its `${level}::${slug}` format.
  const hideKeys = [...owned].map((k) => k.replace("/", "::"));
  const hasUnowned = PUBLISHED_LEVELS.some((level) =>
    subjectsForLevel(level).some((s) => !owned.has(`${level}/${s.slug}`))
  );

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
            const subjects = groupBySubject(order.items);
            const multi = subjects.length > 1;
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

                <div className="mt-4 space-y-3 border-t border-hairline pt-4">
                  {subjects.map((subj) =>
                    multi ? (
                      <details key={subj.key} className="group rounded-xl border border-hairline">
                        <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3">
                          <span>
                            <span className="font-medium text-ink">{subj.subjectName}</span>
                            <span className="ml-2 text-xs text-body">{subj.levelName}</span>
                          </span>
                          <span className="flex items-center gap-3 text-xs text-body">
                            {subj.items.length} file{subj.items.length === 1 ? "" : "s"}
                            <span
                              aria-hidden="true"
                              className="transition-transform group-open:rotate-180"
                            >
                              ▾
                            </span>
                          </span>
                        </summary>
                        <div className="border-t border-hairline px-4 py-4">
                          <SubjectFiles items={subj.items} refunded={refunded} />
                        </div>
                      </details>
                    ) : (
                      <div key={subj.key}>
                        <p className="mb-3 text-sm font-medium text-ink">
                          {subj.subjectName}{" "}
                          <span className="text-xs font-normal text-body">{subj.levelName}</span>
                        </p>
                        <SubjectFiles items={subj.items} refunded={refunded} />
                      </div>
                    )
                  )}
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

      {/* Complete your set — pick unowned subjects with live bundle pricing */}
      {hasUnowned && (
        <section className="mt-10 rounded-2xl border border-hairline bg-surface p-5">
          <h2 className="font-display text-lg font-bold text-ink">Complete your set</h2>
          <p className="mt-1 text-sm text-body">
            Add the subjects you don&apos;t own yet — pick 3 or more and
            bundle pricing applies automatically.
          </p>
          <BundleBuilder hide={hideKeys} stacked />
        </section>
      )}

      {/* Refer a friend */}
      <section className="mt-6 rounded-2xl border border-hairline bg-surface p-5">
        <h2 className="font-display text-lg font-bold text-ink">
          Refer a friend — you both get {sgd(REFERRAL_REWARD_CENTS)}
        </h2>
        <p className="mt-1 text-sm text-body">
          Share your code. A friend gets{" "}
          <span className="font-medium text-ink">S$15 off</span> their first
          order, and once it&apos;s paid, we pay{" "}
          <span className="font-medium text-ink">S$15 to you</span> — by PayNow,
          processed manually within a few days.{" "}
          <Link href="/legal/referral-terms" className="text-accent underline">
            Programme terms
          </Link>
          .
        </p>

        <ReferralShare code={referralCode} link={referralLink} />

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-hairline pt-4 text-center">
          <div>
            <p className="font-display text-2xl font-bold text-ink">{friendsReferred}</p>
            <p className="text-xs text-body">friends referred</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-accent">
              {sgd(payableCents)}
            </p>
            <p className="text-xs text-body">on the way to you</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-guarantee">
              {sgd(paidCents)}
            </p>
            <p className="text-xs text-body">paid out</p>
          </div>
        </div>

        {customer.referrals.length > 0 && (
          <div className="mt-4 space-y-2 border-t border-hairline pt-4">
            {customer.referrals.map((r) => {
              const badge = REFERRAL_STATUS[r.status] ?? REFERRAL_STATUS.payable;
              return (
                <div
                  key={r.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-night px-4 py-3"
                >
                  <div>
                    <p className="text-sm text-body">{maskEmail(r.refereeEmail)}</p>
                    <p className="mt-0.5 text-xs text-body/70">{fmtDate(r.createdAt)}</p>
                  </div>
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-sm font-medium text-ink">
                      {sgd(r.rewardCents)}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge.cls}`}
                    >
                      {badge.label}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        )}

        <form
          action="/api/account/payout-handle"
          method="post"
          className="mt-4 flex flex-wrap items-end gap-3 border-t border-hairline pt-4"
        >
          <div className="flex-1">
            <label htmlFor="payout-handle" className="block text-xs font-medium text-body">
              Where we pay you — PayNow mobile number
            </label>
            <input
              id="payout-handle"
              name="handle"
              type="text"
              defaultValue={customer.payoutHandle ?? ""}
              placeholder="e.g. 9123 4567"
              maxLength={120}
              className="mt-1 w-full rounded-lg border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg border border-hairline px-4 py-2.5 text-sm font-medium text-ink hover:border-accent"
          >
            Save
          </button>
          <p className="w-full text-xs text-body/70">
            Used only to send your rewards, visible only to you and StudyLah.
            Under 18? Use a parent or guardian&apos;s PayNow.
          </p>
        </form>
      </section>

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
