import Link from "next/link";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { hasMasterAccess } from "@/lib/server/entitlements";

export const metadata = { title: "Unlock StudyLand" };

// Shown to signed-in buyers who don't own a Ultra-tier subject. Their PDFs
// stay fully accessible via orders; StudyLand + the game are the Ultra perk.
export default async function UnlockPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  if (await hasMasterAccess(customerId)) redirect("/account");

  return (
    <div className="mx-auto max-w-xl px-4 py-14 text-center">
      <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
        Ultra tier · early access
      </p>
      <h1 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">
        StudyLand is a Ultra-tier perk.
      </h1>
      <p className="mx-auto mt-3 max-w-md text-body">
        Your PDFs are always yours, re-download them any time. StudyLand, the
        dashboard that runs your whole final stretch (daily practice, a mistake
        notebook that hunts your weak spots, a live Marks-at-Risk meter, exam
        timers, and StudyLah Legends) unlocks the moment you add the Ultra tier.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          href="/subjects"
          className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-opacity hover:opacity-90"
        >
          Upgrade to Ultra →
        </Link>
        <Link
          href="/account/orders"
          className="rounded-lg border border-hairline px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
        >
          Re-download my PDFs
        </Link>
      </div>
      <p className="mt-6 text-xs text-body/80">
        Already upgraded? Sign out and back in to refresh your access.
      </p>
    </div>
  );
}
