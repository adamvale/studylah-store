import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getCustomerId } from "@/lib/server/customer-session";

// Saves one topic's study status (0 untouched · 1 revised · 2 practised ·
// 3 confident). Fetch-called from the study-plan checklist with optimistic UI.
export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { level?: unknown; slug?: unknown; topic?: unknown; status?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  const topic = typeof body.topic === "string" ? body.topic.slice(0, 120) : "";
  const status = Number(body.status);
  if (
    !getSubject(level, slug) ||
    !topic ||
    !Number.isInteger(status) ||
    status < 0 ||
    status > 3
  ) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  await prisma.topicProgress.upsert({
    where: { customerId_level_slug_topic: { customerId, level, slug, topic } },
    create: { customerId, level, slug, topic, status },
    update: { status },
  });
  return NextResponse.json({ ok: true });
}
