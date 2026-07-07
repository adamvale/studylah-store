import { NextResponse } from "next/server";
import { serverConfig } from "@/lib/server/config";
import { ADMIN_COOKIE } from "@/lib/server/admin-auth";

export async function POST() {
  const res = NextResponse.redirect(`${serverConfig.siteUrl}/admin/login`, {
    status: 303,
  });
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
