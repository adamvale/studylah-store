import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { NotificationToggle } from "@/components/pwa";
import { Banner } from "../ui";

export const metadata: Metadata = { title: "Account settings" };

const MESSAGES = {
  "emailsent=1": {
    tone: "ok" as const,
    msg: "Check your new inbox for a confirmation link — the change applies once you click it.",
  },
  "emailchanged=1": { tone: "ok" as const, msg: "Your sign-in email has been updated." },
  "error=same": { tone: "bad" as const, msg: "That's already the email on your account." },
  "error=taken": {
    tone: "bad" as const,
    msg: "That email is already used by another account.",
  },
  "error=email": { tone: "bad" as const, msg: "Please enter a valid email address." },
  "error=send": {
    tone: "bad" as const,
    msg: "We couldn't send that email — please try again.",
  },
  "error=emaillink": {
    tone: "bad" as const,
    msg: "That confirmation link expired or was invalid — request a new one.",
  },
  "parent=on": { tone: "ok" as const, msg: "Weekly progress emails are on. You can turn them off any time." },
  "parent=removed": { tone: "ok" as const, msg: "Weekly progress emails are off." },
  "parent=bademail": { tone: "bad" as const, msg: "Please enter a valid parent email address." },
  "parent=consent": { tone: "bad" as const, msg: "Tick the consent box so we know it's okay to email them." },
};

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  const params = await searchParams;
  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: { parentEmail: true, parentDigestConsentAt: true },
  });
  const parentOn = Boolean(customer?.parentEmail && customer?.parentDigestConsentAt);

  return (
    <div>
      <Banner params={params} messages={MESSAGES} />

      <h2 className="font-display text-lg font-bold text-ink">Account settings</h2>
      <p className="mt-1 text-sm text-body">
        Change the email you sign in with. We&apos;ll send a confirmation link
        to the new address — it only takes effect once you click it. Past
        orders keep the email they were bought under.
      </p>
      <form
        action="/api/account/change-email/request"
        method="post"
        className="mt-4 flex flex-wrap items-end gap-3 rounded-2xl border border-hairline bg-surface p-4"
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

      {/* Streak reminders (web push) */}
      <h2 className="mt-10 font-display text-lg font-bold text-ink">
        Streak reminders
      </h2>
      <p className="mt-1 text-sm text-body">
        One push notification, only on evenings your daily streak is about to
        break. Works on Android from the browser; on iPhone, add StudyLand to
        your home screen first.
      </p>
      <div className="mt-4 rounded-2xl border border-hairline bg-surface p-4">
        <NotificationToggle />
      </div>

      {/* Parent progress digest (opt-in) */}
      <h2 className="mt-10 font-display text-lg font-bold text-ink">
        Weekly progress email to a parent
      </h2>
      <p className="mt-1 text-sm text-body">
        Send a parent or guardian a short weekly summary — topics revised,
        practice done, current streak. No grades are promised, and they can
        unsubscribe from any email.
      </p>

      {parentOn ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-guarantee/40 bg-surface p-4">
          <p className="text-sm text-ink">
            Sending weekly to{" "}
            <span className="font-medium">{customer?.parentEmail}</span>
          </p>
          <form action="/api/account/parent-digest" method="post">
            <input type="hidden" name="remove" value="1" />
            <button
              type="submit"
              className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-body hover:text-coral"
            >
              Turn off
            </button>
          </form>
        </div>
      ) : (
        <form
          action="/api/account/parent-digest"
          method="post"
          className="mt-4 rounded-2xl border border-hairline bg-surface p-4"
        >
          <label htmlFor="parent-email" className="block text-xs font-medium text-body">
            Parent&apos;s email
          </label>
          <input
            id="parent-email"
            name="parentEmail"
            type="email"
            required
            placeholder="parent@example.com"
            className="mt-1 w-full rounded-lg border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
          <label className="mt-3 flex items-start gap-2 text-xs text-body">
            <input type="checkbox" name="consent" className="mt-0.5 accent-accent" />
            <span>
              I confirm this person is happy to receive a weekly progress email
              about my StudyLah revision.
            </span>
          </label>
          <button
            type="submit"
            className="mt-4 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-night"
          >
            Turn on weekly email
          </button>
        </form>
      )}
    </div>
  );
}
