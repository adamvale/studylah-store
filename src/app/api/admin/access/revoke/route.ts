import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { revokeGrant } from "@/lib/server/access-grants";

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const orderId = Number(form?.get("orderId"));

  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(`/admin/access?${flag}`, serverConfig.siteUrl),
      { status: 303 }
    );

  if (!Number.isInteger(orderId)) return back("error=bad-input");

  const res = await revokeGrant(orderId);
  if (!res.ok) return back(`error=${encodeURIComponent(res.error)}`);
  return back("revoked=1");
}
