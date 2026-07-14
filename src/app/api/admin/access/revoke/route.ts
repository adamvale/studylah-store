import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { revokeGrantsForEmail } from "@/lib/server/access-grants";

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const email = String(form?.get("email") ?? "");

  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(`/admin/access?${flag}`, serverConfig.siteUrl),
      { status: 303 }
    );

  if (!email) return back("error=bad-input");

  const res = await revokeGrantsForEmail(email);
  if (!res.ok) return back(`error=${encodeURIComponent(res.error)}`);
  return back("revoked=1");
}
