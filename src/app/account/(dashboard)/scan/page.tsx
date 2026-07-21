import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ScanClient } from "@/components/scan-client";

export const metadata: Metadata = { title: "Snap & Teach" };

// Project Sightseeing. Owners only; the camera tool itself is native-app-gated
// inside ScanClient (web shows an "open the app" note).
export default async function ScanPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
        Snap <span className="sl-grad-text">&amp; Teach</span>
      </h1>
      <p className="mt-1 max-w-md text-sm text-body">
        Stuck on a question? Photograph it and Guru walks you through it, one step at a time.
      </p>
      <ScanClient />
    </div>
  );
}
