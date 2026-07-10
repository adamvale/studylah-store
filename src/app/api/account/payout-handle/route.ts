import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { getCustomerId } from "@/lib/server/customer-session";

// Where the customer wants their referral rewards paid (e.g. a PayNow mobile
// number). Sensitive personal data under PDPA: stored for the manual payout
// list only, shown to the customer and the admin, never logged.
export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl), {
      status: 303,
    });
  }

  const form = await request.formData().catch(() => null);
  const handle = String(form?.get("handle") ?? "").trim();
  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(`/account/referrals?${flag}`, serverConfig.siteUrl),
      { status: 303 }
    );

  // Empty clears the handle; otherwise keep it sane and short.
  if (handle.length > 120) return back("error=handle");

  await prisma.customer.update({
    where: { id: customerId },
    data: { payoutHandle: handle === "" ? null : handle },
  });
  return back(handle === "" ? "handlecleared=1" : "handlesaved=1");
}
