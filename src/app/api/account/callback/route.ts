import { NextResponse } from "next/server";
import { serverConfig } from "@/lib/server/config";
import {
  CUSTOMER_COOKIE,
  sessionCookieOptions,
  signSessionToken,
  verifyLoginToken,
} from "@/lib/server/customer-session";

// The magic-link target. Verifies the emailed token, then sets the session
// cookie directly on the redirect response and sends the customer to /account.
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  const customerId = verifyLoginToken(token);

  if (!customerId) {
    return NextResponse.redirect(
      new URL("/account/login?error=link", serverConfig.siteUrl),
      { status: 303 }
    );
  }

  const res = NextResponse.redirect(new URL("/account", serverConfig.siteUrl), {
    status: 303,
  });
  res.cookies.set(CUSTOMER_COOKIE, signSessionToken(customerId), sessionCookieOptions());
  return res;
}
