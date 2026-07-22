import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { LifeClient } from "@/components/life-client";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Life Skills" };

// The Life Skills wing. Owners only; native-app-gated inside LifeClient.
export default async function LifePage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  return (
    <div>
      <PageHeading description="Money, confidence, starting up, staying calm, and how Singapore actually works. The things school never taught, coached by Guru.">
        Life <span className="sl-grad-text">Skills</span>
      </PageHeading>
      <LifeClient />
    </div>
  );
}
