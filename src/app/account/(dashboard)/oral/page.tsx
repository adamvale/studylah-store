import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { OralClient } from "@/components/oral-client";

export const metadata: Metadata = { title: "Oral Skills" };

// Project Loudspeaker. Owners only; the mic tool itself is native-app-gated
// inside OralClient (web shows an "open the app" note).
export default async function OralPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
        Oral <span className="sl-grad-text">Skills</span>
      </h1>
      <p className="mt-1 max-w-md text-sm text-body">
        Practise your Chinese and English oral out loud. Hear the model reading first, then read a
        passage or answer a question, and Guru scores your pronunciation and coaches the fixes.
      </p>
      <OralClient />
    </div>
  );
}
