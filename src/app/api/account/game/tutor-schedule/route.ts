import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";

// Standing "tuition slots": the student picks a subject/track, weekday and
// Singapore hour, and Guru pushes a reminder to start a session then.

export async function GET() {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const schedules = await prisma.tutorSchedule.findMany({
    where: { customerId, active: true },
    orderBy: [{ weekday: "asc" }, { hourSg: "asc" }],
  });
  return NextResponse.json({ schedules });
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  let body: {
    kind?: unknown;
    topicKey?: unknown;
    level?: unknown;
    label?: unknown;
    weekday?: unknown;
    hourSg?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const kind = body.kind === "life" ? "life" : "subject";
  const topicKey = typeof body.topicKey === "string" ? body.topicKey : "";
  const label = typeof body.label === "string" ? body.label.trim().slice(0, 60) : "";
  const weekday = Number(body.weekday);
  const hourSg = Number(body.hourSg);
  if (!topicKey || !label || !Number.isInteger(weekday) || weekday < 0 || weekday > 6 || !Number.isInteger(hourSg) || hourSg < 0 || hourSg > 23) {
    return NextResponse.json({ error: "Pick a subject, a day and a time." }, { status: 400 });
  }
  // Cap the number of active slots so the cron stays cheap.
  const count = await prisma.tutorSchedule.count({ where: { customerId, active: true } });
  if (count >= 14) {
    return NextResponse.json({ error: "That is the most slots you can set. Remove one first." }, { status: 429 });
  }
  const schedule = await prisma.tutorSchedule.create({
    data: {
      customerId,
      kind,
      topicKey,
      level: body.level === "na-level" ? "na-level" : kind === "subject" ? "o-level" : null,
      label,
      weekday,
      hourSg,
    },
  });
  return NextResponse.json({ ok: true, schedule });
}

export async function DELETE(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const id = new URL(request.url).searchParams.get("id") ?? "";
  await prisma.tutorSchedule.deleteMany({ where: { id, customerId } });
  return NextResponse.json({ ok: true });
}
