import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { createStudentAccount } from "@/lib/server/access-grants";

// Register a student by email with no entitlement attached. Separate from
// /access/grant because it deliberately gives nothing: it exists so a student
// can be on the system before, or without, buying anything.
export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const email = String(form?.get("email") ?? "");
  const notify = form?.get("notify") != null;

  const back = (flag: string) =>
    NextResponse.redirect(new URL(`/admin/access?${flag}`, serverConfig.siteUrl), {
      status: 303,
    });

  const res = await createStudentAccount({ email, notify });
  if (!res.ok) return back(`error=${encodeURIComponent(res.error)}`);
  // An address that was already on the system is reported rather than treated
  // as a success, so nobody assumes a fresh account was made.
  return back(
    res.created
      ? `account=${encodeURIComponent(res.email)}`
      : `exists=${encodeURIComponent(res.email)}`
  );
}
