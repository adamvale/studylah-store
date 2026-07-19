import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { sendMailReply } from "@/lib/server/mail";

export const runtime = "nodejs";

// Owner replies to an email thread from the admin Mail tab. Sends as hello@
// through the existing Resend pipeline (data/outbox stub locally) with
// threading headers, and records the reply in the mirrored thread.

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const to = String(form?.get("to") ?? "").trim().toLowerCase();
  const subject = String(form?.get("subject") ?? "").trim().slice(0, 300);
  const body = String(form?.get("body") ?? "").trim().slice(0, 20_000);
  const inReplyTo = String(form?.get("inReplyTo") ?? "").trim() || null;

  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(`/admin/mail?t=${encodeURIComponent(to)}&${flag}`, serverConfig.siteUrl),
      { status: 303 }
    );

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to) || !body) {
    return back("error=Invalid%20address%20or%20empty%20message.");
  }

  const sent = await sendMailReply({ to, subject, body, inReplyTo });
  if (!sent.delivered) {
    return back("error=Send%20failed%2C%20check%20server%20logs.");
  }
  return back("sent=1");
}
