import { NextResponse } from "next/server";
import { serverConfig } from "@/lib/server/config";
import { CUSTOMER_COOKIE, sessionCookieOptions } from "@/lib/server/customer-session";

export async function POST() {
  const res = NextResponse.redirect(new URL("/", serverConfig.siteUrl), { status: 303 });
  res.cookies.set(CUSTOMER_COOKIE, "", { ...sessionCookieOptions(), maxAge: 0 });
  res.cookies.set("studylah_acct", "", {
    ...sessionCookieOptions(),
    httpOnly: false,
    maxAge: 0,
  });
  return res;
}
