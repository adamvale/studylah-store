import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAdmin } from "@/lib/server/admin-auth";

// Escapes a value for CSV: wrap in quotes and double any inner quotes.
function csvCell(value: string | null): string {
  const s = value ?? "";
  return `"${s.replace(/"/g, '""')}"`;
}

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  const header = ["email", "source", "level", "subjectSlug", "consentAt", "createdAt"];
  const rows = leads.map((lead) =>
    [
      csvCell(lead.email),
      csvCell(lead.source),
      csvCell(lead.level),
      csvCell(lead.subjectSlug),
      csvCell(lead.consentAt.toISOString()),
      csvCell(lead.createdAt.toISOString()),
    ].join(",")
  );
  const csv = [header.join(","), ...rows].join("\r\n");

  const stamp = new Date().toISOString().slice(0, 10);
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="studylah-leads-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
