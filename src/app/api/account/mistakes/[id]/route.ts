import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { isValidReason } from "@/lib/server/mistakes";

// Ownership guard shared by both handlers: the entry must exist AND belong to
// the signed-in customer, or we 404 (never reveal another customer's rows).
async function ownedEntry(id: string) {
  const customerId = await getCustomerId();
  if (!customerId) return { error: NextResponse.json({ error: "Not signed in." }, { status: 401 }) };
  const entry = await prisma.mistakeEntry.findUnique({ where: { id } });
  if (!entry || entry.customerId !== customerId) {
    return { error: NextResponse.json({ error: "Not found." }, { status: 404 }) };
  }
  return { customerId, entry };
}

// Classify the reason and/or toggle resolved.
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const owned = await ownedEntry(id);
  if (owned.error) return owned.error;

  let body: { reason?: unknown; resolved?: unknown; note?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data: { reason?: string; resolved?: boolean; note?: string | null } = {};
  if (typeof body.reason === "string") {
    if (!isValidReason(body.reason)) {
      return NextResponse.json({ error: "Invalid reason." }, { status: 400 });
    }
    data.reason = body.reason;
  }
  if (typeof body.resolved === "boolean") data.resolved = body.resolved;
  if (typeof body.note === "string") data.note = body.note.trim().slice(0, 1000) || null;

  await prisma.mistakeEntry.update({ where: { id }, data });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const owned = await ownedEntry(id);
  if (owned.error) return owned.error;
  await prisma.mistakeEntry.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
