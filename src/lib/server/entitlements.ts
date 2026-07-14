import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

// StudyLand (the study dashboard) and StudyLah Legends are Master-tier perks.
// A customer has access once they own at least one Master-tier subject.
// OrderItem.tier stores the display name ("Master") set at checkout.
export async function hasMasterAccess(customerId: string): Promise<boolean> {
  const order = await prisma.order.findFirst({
    where: { customerId, items: { some: { tier: "Master" } } },
    select: { id: true },
  });
  return order !== null;
}

// Guard for StudyLand/game pages: non-Master buyers are sent to the upsell,
// where they can still re-download their PDFs.
export async function requireMaster(customerId: string): Promise<void> {
  if (!(await hasMasterAccess(customerId))) {
    redirect("/account/unlock");
  }
}
