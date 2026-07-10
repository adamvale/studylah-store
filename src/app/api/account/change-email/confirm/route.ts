import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { verifyChangeEmailToken } from "@/lib/server/customer-session";

// The change-email link target. The token proves both the request (it was
// signed for this customer) and ownership of the new address (it was emailed
// there). Applying the change only updates the login/contact email; historical
// orders keep the address they were bought under.
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  const parsed = verifyChangeEmailToken(token);
  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(`/account/settings?${flag}`, serverConfig.siteUrl),
      { status: 303 }
    );

  if (!parsed) return back("error=emaillink");

  // Re-check for a collision at apply time, then update.
  const taken = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id FROM "Customer" WHERE email = ${parsed.newEmail} COLLATE NOCASE AND id <> ${parsed.customerId} LIMIT 1
  `;
  if (taken.length > 0) return back("error=taken");

  try {
    await prisma.customer.update({
      where: { id: parsed.customerId },
      data: { email: parsed.newEmail },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return back("error=taken");
    }
    throw e;
  }

  return back("emailchanged=1");
}
