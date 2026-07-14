import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { isValidGrade } from "@/lib/grades";

// Set (or clear) a customer's target grade for one subject.
export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { level?: unknown; slug?: unknown; targetGrade?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  const targetGrade = typeof body.targetGrade === "string" ? body.targetGrade : "";
  if (!getSubject(level, slug)) {
    return NextResponse.json({ error: "Unknown subject." }, { status: 400 });
  }

  // Empty target clears the goal.
  if (targetGrade === "") {
    await prisma.subjectGoal.deleteMany({ where: { customerId, level, slug } });
    return NextResponse.json({ ok: true, cleared: true });
  }
  if (!isValidGrade(level, targetGrade)) {
    return NextResponse.json({ error: "Invalid grade." }, { status: 400 });
  }

  await prisma.subjectGoal.upsert({
    where: { customerId_level_slug: { customerId, level, slug } },
    create: { customerId, level, slug, targetGrade },
    update: { targetGrade },
  });
  return NextResponse.json({ ok: true });
}
