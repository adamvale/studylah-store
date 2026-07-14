import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
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

// API-route guard for StudyLand/game endpoints. Returns a response to send
// back (401 if not signed in, 403 if signed in but not Master), or null when
// the caller is a Master and the route should proceed.
export async function masterApiGate(
  customerId: string | null
): Promise<NextResponse | null> {
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  if (!(await hasMasterAccess(customerId))) {
    return NextResponse.json(
      { error: "StudyLand is a Master-tier feature." },
      { status: 403 }
    );
  }
  return null;
}
