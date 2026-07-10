import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { getCustomerId } from "@/lib/server/customer-session";

function icsStamp(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

// The student's entered paper dates as a calendar file — one import puts the
// whole timetable in their (or a parent's) phone calendar.
export async function GET() {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl), {
      status: 303,
    });
  }

  const dates = await prisma.examDate.findMany({
    where: { customerId },
    orderBy: { at: "asc" },
  });

  const events = dates
    .map((d) => {
      const end = new Date(d.at.getTime() + 2 * 60 * 60 * 1000); // 2h block
      return [
        "BEGIN:VEVENT",
        `UID:studylah-${d.id}`,
        `DTSTAMP:${icsStamp(new Date())}`,
        `DTSTART:${icsStamp(d.at)}`,
        `DTEND:${icsStamp(end)}`,
        `SUMMARY:${d.label.replace(/[,;\\]/g, " ")} — exam`,
        "BEGIN:VALARM",
        "TRIGGER:-P1D",
        "ACTION:DISPLAY",
        "DESCRIPTION:Exam tomorrow",
        "END:VALARM",
        "END:VEVENT",
      ].join("\r\n");
    })
    .join("\r\n");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//StudyLah//Exam timetable//EN",
    events,
    "END:VCALENDAR",
  ].join("\r\n");

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="studylah-exams.ics"',
      "Cache-Control": "no-store",
    },
  });
}
