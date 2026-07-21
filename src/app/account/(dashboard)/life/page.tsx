import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { LifeClient } from "@/components/life-client";

export const metadata: Metadata = { title: "Life Skills" };

// The Life Skills wing. Owners only; native-app-gated inside LifeClient.
export default async function LifePage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
        Life <span className="sl-grad-text">Skills</span>
      </h1>
      <p className="mt-1 max-w-md text-sm text-body">
        Money, confidence, starting up, staying calm, and how Singapore actually works. The things
        school never taught, coached by Guru.
      </p>
      <LifeClient />
    </div>
  );
}
