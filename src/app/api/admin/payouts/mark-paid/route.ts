import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";

// Records that the owner has SENT a referrer's pending rewards (one PayNow
// transfer covering their payable balance). Bookkeeping only — the app never
// moves money.
export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const form = await request.formData().catch(() => null);
  const referrerId = String(form?.get("referrerId") ?? "");
  if (!referrerId) {
    return NextResponse.json({ error: "Bad referrer id." }, { status: 400 });
  }

  const res = await prisma.referral.updateMany({
    where: { referrerId, status: "payable" },
    data: { status: "paid", paidAt: new Date() },
  });
  console.log(`Payouts: marked ${res.count} referral(s) paid for ${referrerId}.`);

  return NextResponse.redirect(new URL("/admin/payouts?marked=1", serverConfig.siteUrl), {
    status: 303,
  });
}
