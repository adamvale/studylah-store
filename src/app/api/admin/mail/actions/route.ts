import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { prisma } from "@/lib/db";
import { syncMail } from "@/lib/server/mail";

export const runtime = "nodejs";

// Small admin Mail actions: force a mailbox sync, or archive a thread.

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const action = String(form?.get("action") ?? "");
  const thread = String(form?.get("t") ?? "").trim().toLowerCase();

  const back = (query: string) =>
    NextResponse.redirect(new URL(`/admin/mail${query}`, serverConfig.siteUrl), {
      status: 303,
    });

  if (action === "sync") {
    const result = await syncMail(true);
    if (!result.ok) {
      return back(`?error=${encodeURIComponent(`Sync failed: ${result.error ?? "unknown"}`)}`);
    }
    return back(`?synced=${result.synced}`);
  }

  if (action === "archive" && thread) {
    await prisma.emailMessage.updateMany({
      where: { counterpart: thread },
      data: { archived: true, seen: true },
    });
    return back("");
  }

  if (action === "unarchive" && thread) {
    await prisma.emailMessage.updateMany({
      where: { counterpart: thread },
      data: { archived: false },
    });
    return back(`?t=${encodeURIComponent(thread)}`);
  }

  return back("");
}
