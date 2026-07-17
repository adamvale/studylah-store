import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { fastTrackFamilies, fastTrackProgress } from "@/lib/server/fasttrack";
import { FastTrackHub } from "@/components/fasttrack-hub";

export const metadata: Metadata = { title: "FastTrack" };
export const dynamic = "force-dynamic";

export default async function FastTrackPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  const families = await fastTrackFamilies(customerId);
  if (families.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">
          FastTrack is here for Chemistry, Physics and Biology
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-body">
          It trains the one thing that separates a 55 from a 70: writing answers
          the way examiners award marks. Add one of these subjects to unlock it.
        </p>
        <Link
          href="/account/add-subjects"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
        >
          Add a subject
        </Link>
      </div>
    );
  }

  const progress = await fastTrackProgress(customerId);
  return <FastTrackHub progress={progress} />;
}
