import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { prisma } from "@/lib/db";
import { sendSocialText, type SocialChannel } from "@/lib/server/meta-messaging";

export const runtime = "nodejs";

// Owner replies to a Messenger/Instagram thread from the admin inbox. Sent
// through the same sender as Gugu and stored with manual=true, which pauses
// Gugu on that thread for 24h (see the webhook's takeover check).

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const channel = String(form?.get("channel") ?? "") as SocialChannel;
  const contactId = String(form?.get("contactId") ?? "").trim();
  const text = String(form?.get("text") ?? "")
    .trim()
    .slice(0, 3000);

  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(
        `/admin/social?t=${encodeURIComponent(`${channel}:${contactId}`)}&${flag}`,
        serverConfig.siteUrl
      ),
      { status: 303 }
    );

  if (
    (channel !== "messenger" && channel !== "instagram") ||
    !contactId ||
    !text
  ) {
    return back("error=Invalid%20thread%20or%20empty%20message.");
  }

  const sent = await sendSocialText(channel, contactId, text);
  if (!sent.delivered) {
    return back("error=Send%20failed%2C%20check%20server%20logs.");
  }

  await prisma.socialMessage.create({
    data: {
      channel,
      contactId,
      msgId: "msgId" in sent ? sent.msgId : undefined,
      role: "assistant",
      content: text,
      manual: true,
    },
  });
  return back("sent=1");
}
