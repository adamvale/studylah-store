import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { logDiagnosticEvent, sendResultsEmail } from "@/lib/server/diagnostic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FOLLOW_UP_MS = 48 * 60 * 60 * 1000;

// The email gate. Same PDPA pattern as the heatmap: explicit consent
// (unticked by default in the UI), consent timestamp stored on the Lead.
// Unlocking sets unlockedAt — only then do worked solutions render anywhere.
const lastByEmail = new Map<string, number>();

export async function POST(request: Request) {
  let body: {
    attemptId?: unknown;
    email?: unknown;
    consent?: unknown;
    isParent?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const attemptId = typeof body.attemptId === "string" ? body.attemptId : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter the email your results should go to." }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json(
      { error: "Please tick the consent box so we can email your results (PDPA)." },
      { status: 400 }
    );
  }

  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt) {
    return NextResponse.json({ error: "We couldn't find that attempt — retake the check." }, { status: 404 });
  }

  const now = Date.now();
  const prev = lastByEmail.get(email.toLowerCase());
  if (prev && now - prev < 30_000 && attempt.unlockedAt) {
    return NextResponse.json({ ok: true, resultsUrl: `/diagnostic/results/${attempt.id}` });
  }
  lastByEmail.set(email.toLowerCase(), now);

  const lead = await prisma.lead.create({
    data: {
      email,
      source: "diagnostic",
      level: attempt.level,
      subjectSlug: attempt.slug,
      consentAt: new Date(),
    },
  });

  await prisma.diagnosticAttempt.update({
    where: { id: attempt.id },
    data: {
      email,
      leadId: lead.id,
      isParent: body.isParent === true,
      unlockedAt: attempt.unlockedAt ?? new Date(),
      followUpAt: attempt.followUpAt ?? new Date(now + FOLLOW_UP_MS),
    },
  });
  await logDiagnosticEvent("email_captured", attempt.id, attempt.band);

  // Best-effort: the unlock must not fail on a mail hiccup — the results
  // page has a resend button.
  try {
    await sendResultsEmail(attempt.id);
  } catch (e) {
    console.error(`Diagnostic results email failed for ${attempt.id}`, e);
  }

  return NextResponse.json({ ok: true, resultsUrl: `/diagnostic/results/${attempt.id}` });
}
