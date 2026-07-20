import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ULTRA_DB_TIERS } from "@/lib/catalogue";

// StudyLand (the study dashboard) and StudyLah Legends are Ultra-tier perks.
// A customer has access once they own at least one Ultra-tier subject.
// OrderItem.tier stores the display name set at checkout: "Ultra" today,
// "Master" on orders placed before the v2.20 rename, so match both.
export async function hasMasterAccess(customerId: string): Promise<boolean> {
  const order = await prisma.order.findFirst({
    where: { customerId, items: { some: { tier: { in: [...ULTRA_DB_TIERS] } } } },
    select: { id: true },
  });
  return order !== null;
}

// Guard for StudyLand/game pages: non-Ultra buyers are sent to the upsell,
// where they can still re-download their PDFs.
export async function requireMaster(customerId: string): Promise<void> {
  if (!(await hasMasterAccess(customerId))) {
    redirect("/account/unlock");
  }
}

// API-route guard for StudyLand/game endpoints. Returns a response to send
// back (401 if not signed in, 403 if signed in but not Ultra), or null when
// the caller is a Ultra and the route should proceed.
export async function masterApiGate(
  customerId: string | null
): Promise<NextResponse | null> {
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  if (!(await hasMasterAccess(customerId))) {
    return NextResponse.json(
      { error: "StudyLand is a Ultra-tier feature." },
      { status: 403 }
    );
  }
  return null;
}
