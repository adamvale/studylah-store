import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { prisma } from "@/lib/db";
import { sendWhatsAppText } from "@/lib/server/whatsapp";

export const runtime = "nodejs";

// Owner replies to a WhatsApp thread from the admin inbox. The reply is sent
// through the same sender as Gugu (Graph API, or data/outbox in stub mode)
// and stored with manual=true, which pauses Gugu on that thread for 24h
// (see the webhook's takeover check).

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const waId = String(form?.get("waId") ?? "").trim();
  const text = String(form?.get("text") ?? "")
    .trim()
    .slice(0, 3000);

  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(
        `/admin/whatsapp?t=${encodeURIComponent(waId)}&${flag}`,
        serverConfig.siteUrl
      ),
      { status: 303 }
    );

  // waId is a phone number in international digits (Meta's wa_id format).
  if (!/^\d{6,20}$/.test(waId) || !text) {
    return back("error=Invalid%20number%20or%20empty%20message.");
  }

  const sent = await sendWhatsAppText(waId, text);
  if (!sent.delivered) {
    return back("error=Send%20failed%2C%20check%20server%20logs.");
  }

  await prisma.waMessage.create({
    data: {
      waId,
      msgId: "msgId" in sent ? sent.msgId : undefined,
      role: "assistant",
      content: text,
      manual: true,
    },
  });
  return back("sent=1");
}
