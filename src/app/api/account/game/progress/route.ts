import { NextResponse } from "next/server";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { groupStanding } from "@/lib/server/group-gate";

// The story panel's server truths: group-gate standing (Act I + first beacon,
// level band) and today's study status (daily three, due reviews). Read-only.
export async function GET() {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  const standing = await groupStanding(customerId);
  return NextResponse.json(standing);
}
