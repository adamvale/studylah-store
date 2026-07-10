import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { getCustomerId } from "@/lib/server/customer-session";

const back = (flag: string) =>
  NextResponse.redirect(new URL(`/account/study?${flag}`, serverConfig.siteUrl), {
    status: 303,
  });

// Add ("Physics P1", 2026-10-19T08:00) or remove a paper from the student's
// personal timetable. Form-posted from the study tab.
export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl), {
      status: 303,
    });
  }

  const form = await request.formData().catch(() => null);

  // Deletion: a hidden `remove` field carrying the row id.
  const removeId = form?.get("remove");
  if (typeof removeId === "string" && removeId) {
    await prisma.examDate.deleteMany({ where: { id: removeId, customerId } });
    return back("dateremoved=1");
  }

  const label = String(form?.get("label") ?? "").trim().slice(0, 80);
  const when = String(form?.get("at") ?? "");
  const at = new Date(when);
  if (!label || Number.isNaN(at.getTime())) return back("error=date");

  const count = await prisma.examDate.count({ where: { customerId } });
  if (count >= 30) return back("error=datelimit");

  await prisma.examDate.create({ data: { customerId, label, at } });
  return back("dateadded=1");
}
