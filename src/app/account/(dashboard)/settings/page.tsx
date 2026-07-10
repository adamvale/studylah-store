import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
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
};

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  const params = await searchParams;

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
    </div>
  );
}
