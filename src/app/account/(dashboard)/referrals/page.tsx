import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { ensureReferralCode, REFERRAL_REWARD_CENTS } from "@/lib/server/referral";
import { serverConfig } from "@/lib/server/config";
import { ReferralShare } from "@/components/referral-share";
import { Banner, fmtDate, maskEmail, sgd } from "../ui";

export const metadata: Metadata = { title: "Refer a friend" };

const REFERRAL_STATUS: Record<string, { label: string; cls: string }> = {
  payable: { label: "Payment on the way", cls: "bg-accent/15 text-accent" },
  paid: { label: "Paid", cls: "bg-guarantee/15 text-guarantee" },
  void: { label: "Order refunded", cls: "bg-coral/15 text-coral" },
};

const MESSAGES = {
  "handlesaved=1": { tone: "ok" as const, msg: "Payout details saved." },
  "handlecleared=1": { tone: "ok" as const, msg: "Payout details removed." },
  "error=handle": {
    tone: "bad" as const,
    msg: "That payout detail looks too long — try again.",
  },
};

export default async function ReferralsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    include: { referrals: { orderBy: { createdAt: "desc" } } },
  });
  if (!customer) redirect("/account/login");

  const referralCode = customer.referralCode ?? (await ensureReferralCode(customer.id));
  const referralLink = `${serverConfig.siteUrl}/?ref=${referralCode}`;
  const payableCents = customer.referrals
    .filter((r) => r.status === "payable")
    .reduce((sum, r) => sum + r.rewardCents, 0);
  const paidCents = customer.referrals
    .filter((r) => r.status === "paid")
    .reduce((sum, r) => sum + r.rewardCents, 0);
  const friendsReferred = customer.referrals.filter((r) => r.status !== "void").length;

  const params = await searchParams;

  return (
    <div>
      <Banner params={params} messages={MESSAGES} />

      <h2 className="font-display text-lg font-bold text-ink">
        Refer a friend — you both get {sgd(REFERRAL_REWARD_CENTS)}
      </h2>
      <p className="mt-1 text-sm text-body">
        Share your code. A friend gets{" "}
        <span className="font-medium text-ink">S$15 off</span>{" "}
        their first order, and once it&apos;s paid, we pay{" "}
        <span className="font-medium text-ink">S$15 to you</span>{" "}
        — by PayNow,
        processed manually within a few days.{" "}
        <Link href="/legal/referral-terms" className="text-accent underline">
          Programme terms
        </Link>
        .
      </p>

      <ReferralShare code={referralCode} link={referralLink} />

      <div className="mt-4 grid grid-cols-3 gap-3 rounded-2xl border border-hairline bg-surface p-4 text-center">
        <div>
          <p className="font-display text-2xl font-bold text-ink">{friendsReferred}</p>
          <p className="text-xs text-body">friends referred</p>
        </div>
        <div>
          <p className="font-display text-2xl font-bold text-accent">{sgd(payableCents)}</p>
          <p className="text-xs text-body">on the way to you</p>
        </div>
        <div>
          <p className="font-display text-2xl font-bold text-guarantee">{sgd(paidCents)}</p>
          <p className="text-xs text-body">paid out</p>
        </div>
      </div>

      {customer.referrals.length > 0 && (
        <div className="mt-4 space-y-2">
          {customer.referrals.map((r) => {
            const badge = REFERRAL_STATUS[r.status] ?? REFERRAL_STATUS.payable;
            return (
              <div
                key={r.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-night px-4 py-3"
              >
                <div>
                  <p className="text-sm text-body">{maskEmail(r.refereeEmail)}</p>
                  <p className="mt-0.5 text-xs text-body/80">{fmtDate(r.createdAt)}</p>
                </div>
                <span className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium text-ink">
                    {sgd(r.rewardCents)}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge.cls}`}>
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
        className="mt-6 flex flex-wrap items-end gap-3 rounded-2xl border border-hairline bg-surface p-4"
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
        <p className="w-full text-xs text-body/80">
          Used only to send your rewards, visible only to you and StudyLah.
          Under 18? Use a parent or guardian&apos;s PayNow.
        </p>
      </form>
    </div>
  );
}
