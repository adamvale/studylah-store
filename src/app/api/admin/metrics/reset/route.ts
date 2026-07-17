import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { setRevenueResetAt } from "@/lib/server/metrics";

// Reset (or un-reset) the dashboard revenue counters. NON-DESTRUCTIVE by
// design: it only moves the counting baseline; no order is ever touched, so
// buyers keep their downloads and the Orders tab keeps full history.
//   action=reset  -> counters start from now
//   action=clear  -> back to all-time
export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const action = String(form?.get("action") ?? "");

  if (action === "reset") {
    await setRevenueResetAt(new Date());
  } else if (action === "clear") {
    await setRevenueResetAt(null);
  } else {
    return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  }

  return NextResponse.redirect(new URL("/admin", serverConfig.siteUrl), {
    status: 303,
  });
}
