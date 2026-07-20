// Server-side engine for the "Am I Ready?" diagnostic: grading (answers never
// leave the server), readiness bands, weakness→product mapping, funnel events
// and the two result emails. Compliance: topic-scoped readiness only, never
// grade promises; STANDARD_DISCLAIMER rides every email via emailLayout.
import { prisma } from "../db";
import { getSubject, type Level } from "../catalogue";
import {
  type DiagnosticProduct,
  type DiagnosticSet,
} from "../diagnostic-questions";
import { getDiagnosticSet } from "./question-bank";
import { STANDARD_DISCLAIMER } from "../compliance";
import { serverConfig } from "./config";
import { emailLayout, sendEmail } from "./email";

export type Band = "danger" | "warning" | "pass";

export const BAND_COPY: Record<Band, { title: string; line: string }> = {
  danger: {
    title: "Danger zone on these topics",
    line: "These topics are forecast VERY HIGH for 2026, and right now they would cost you marks. The good news: it's exactly the kind of gap two focused weeks can close.",
  },
  warning: {
    title: "Warning, close, but marks are leaking",
    line: "You know these topics, but the paper pays for precision, and a few marks slipped. Tighten the working and they become bankers.",
  },
  pass: {
    title: "Pass territory, keep it sharp",
    line: "Strong showing on the most-likely topics. Keep it warm and make sure the rest of the forecast looks like this.",
  },
};

export function bandFor(score: number, totalMarks: number): Band {
  const pct = totalMarks === 0 ? 0 : (score / totalMarks) * 100;
  if (pct <= 50) return "danger";
  if (pct <= 80) return "warning";
  return "pass";
}

// Indicative grade band from this 10-question sample. ALWAYS presented as an
// estimate on the tested topics with the caveat line, never a promise
// (compliance: no grade guarantees). N(A) subjects use N(A) grades 1-5.
export function gradeEstimateFor(
  level: string,
  score: number,
  totalMarks: number
): string {
  const pct = totalMarks === 0 ? 0 : (score / totalMarks) * 100;
  if (level === "na-level") {
    if (pct >= 90) return "Grade 1-2";
    if (pct >= 75) return "Grade 2-3";
    if (pct >= 55) return "Grade 3-4";
    if (pct >= 40) return "Grade 4-5";
    return "below Grade 5";
  }
  if (pct >= 90) return "A1-A2";
  if (pct >= 75) return "B3-B4";
  if (pct >= 55) return "C5-C6";
  if (pct >= 40) return "D7-E8";
  return "below E8";
}

export const ESTIMATE_CAVEAT =
  "An estimate from this 10-question sample on the topics forecast most likely, not a promise or prediction of your actual result.";

export interface GradedAnswer {
  questionId: string;
  given: string;
  correct: boolean;
  marksEarned: number;
  marks: number;
}

function normalise(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

// Grades one short-answer question. Numeric answers (every accepted key starts
// with a digit/sign, e.g. "30", "3.0 Ω") must match EXACTLY — "3" must not pass
// "30". For "phrasing" answers (State/Explain/Describe style, accepted keys are
// words) we grade like the game's "check my phrasing": the student is correct if
// their answer CONTAINS an accepted key phrase, so wording can vary.
function shortAnswerCorrect(correctKey: string[], given: string): boolean {
  const g = normalise(given);
  if (!g) return false;
  const numeric = correctKey.every((k) => /^\s*[-+]?\d/.test(k.trim()));
  if (numeric) return correctKey.some((k) => normalise(k) === g);
  return correctKey.some((k) => {
    const nk = normalise(k);
    return nk.length >= 3 && g.includes(nk);
  });
}

export function gradeAttempt(
  set: DiagnosticSet,
  answers: Record<string, string>
): { graded: GradedAnswer[]; score: number; totalMarks: number; weakness: DiagnosticProduct | null } {
  const graded: GradedAnswer[] = set.questions.map((q) => {
    const given = String(answers[q.id] ?? "");
    const correct =
      q.type === "mcq"
        ? q.correctKey.some((k) => normalise(k) === normalise(given))
        : shortAnswerCorrect(q.correctKey, given);
    return {
      questionId: q.id,
      given,
      correct,
      marksEarned: correct ? q.marks : 0,
      marks: q.marks,
    };
  });
  const score = graded.reduce((sum, g) => sum + g.marksEarned, 0);
  const totalMarks = graded.reduce((sum, g) => sum + g.marks, 0);

  // Weakness = the product bucket where the most marks were dropped
  // (companion = method/technique, vault = application/practice).
  const dropped: Record<string, number> = {};
  for (const g of graded) {
    if (g.correct) continue;
    const q = set.questions.find((x) => x.id === g.questionId);
    if (!q) continue;
    dropped[q.mapsToProduct] = (dropped[q.mapsToProduct] ?? 0) + q.marks;
  }
  const weakness =
    Object.keys(dropped).length === 0
      ? null
      : ((Object.entries(dropped).sort((a, b) => b[1] - a[1])[0][0]) as DiagnosticProduct);

  return { graded, score, totalMarks, weakness };
}

// The tailored CTA per the brief's mapping. Low overall score outranks the
// per-question buckets; a clean sheet nudges Vault/Rehearsal to stay sharp.
export function ctaFor(band: Band, weakness: DiagnosticProduct | null): {
  product: "companion" | "vault" | "master" | "rehearsal";
  headline: string;
  body: string;
} {
  if (band === "danger") {
    return {
      product: "master",
      headline: "Close the gap with the full Ultra pack",
      body: "Forecast, Companion, Vault and a timed Final Rehearsal, the complete route from 'danger zone' to walking in prepared. Covered by the conditional 14-day money-back guarantee.",
    };
  }
  if (weakness === "companion") {
    return {
      product: "companion",
      headline: "Your marks slipped on method, that's the Companion's job",
      body: "It turns the forecast into paper technique: the working structure, the conventions markers pay for, the format of every answer.",
    };
  }
  if (weakness === "vault") {
    return {
      product: "vault",
      headline: "Practise where the marks are, the Sure Questions Vault",
      body: "Original exam-style questions on the highest-tier calls, each with a full answer key, so the next time these topics appear, they pay in full.",
    };
  }
  return {
    product: "rehearsal",
    headline: "Sharp here, now prove it under time",
    body: "The Final Rehearsal is a complete original mock in the 2026 format. Sit it under exam conditions and keep these topics (and the rest) match-fit.",
  };
}

export function productUrl(level: string, slug: string): string {
  return `${serverConfig.siteUrl}/${level}/${slug}`;
}

// --- Funnel events ---------------------------------------------------------

export const EVENT_TYPES = [
  "diagnostic_start",
  "question_answered",
  "diagnostic_complete",
  "email_captured",
  "results_viewed",
  "cta_clicked",
  "result_shared",
] as const;
export type DiagnosticEventType = (typeof EVENT_TYPES)[number];

export async function logDiagnosticEvent(
  type: DiagnosticEventType,
  attemptId?: string | null,
  meta?: string
): Promise<void> {
  try {
    await prisma.diagnosticEvent.create({
      data: { type, attemptId: attemptId ?? null, meta: meta ?? null },
    });
  } catch (e) {
    console.error(`Diagnostic event ${type} failed`, e);
  }
}

// --- Emails ------------------------------------------------------------------

function referralLineHtml(referralCode: string | null): string {
  const line = referralCode
    ? `Refer a friend, you both get S$15. Your link: <a href="${serverConfig.siteUrl}/?ref=${referralCode}" style="color:#f4552b;">${serverConfig.siteUrl}/?ref=${referralCode}</a>`
    : `Refer a friend, you both get S$15 once you're a customer. Your code lives in <a href="${serverConfig.siteUrl}/account/referrals" style="color:#f4552b;">your account</a>.`;
  return `<p style="font-size:12px;color:#3d4e63;line-height:1.6;margin:12px 0 0;">${line}</p>`;
}

const UNSUB_HTML = `<p style="font-size:11px;color:#8894a3;line-height:1.6;margin:12px 0 0;">Don't want these emails? Reply "unsubscribe" and we'll remove you right away (PDPA).</p>`;

// The spec requires the independence disclaimer VERBATIM in these emails
// (emailLayout's generic footer is a paraphrase).
const DISCLAIMER_HTML = `<p style="font-size:11px;color:#8894a3;line-height:1.6;margin:12px 0 0;">${STANDARD_DISCLAIMER}</p>`;

async function referralCodeFor(email: string): Promise<string | null> {
  const rows = await prisma.$queryRaw<Array<{ referralCode: string | null }>>`
    SELECT "referralCode" FROM "Customer" WHERE email = ${email} COLLATE NOCASE LIMIT 1
  `;
  return rows[0]?.referralCode ?? null;
}

export async function sendResultsEmail(attemptId: string): Promise<boolean> {
  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt?.email || !attempt.unlockedAt) return false;
  const set = await getDiagnosticSet(attempt.level, attempt.slug);
  const subject = getSubject(attempt.level as Level, attempt.slug);
  if (!set || !subject) return false;

  const graded = JSON.parse(attempt.answersJson) as GradedAnswer[];
  const band = attempt.band as Band;
  const cta = ctaFor(band, (attempt.weakness as DiagnosticProduct | null) ?? null);
  const resultsUrl = `${serverConfig.siteUrl}/diagnostic/results/${attempt.id}`;
  const isParent = attempt.isParent;

  const rowsHtml = set.questions
    .map((q, i) => {
      const g = graded.find((x) => x.questionId === q.id);
      const ok = g?.correct ?? false;
      return `<li style="margin:0 0 10px;font-size:13px;color:#3d4e63;">
        <strong>Q${i + 1} (${ok ? `${q.marks}/${q.marks}` : `0/${q.marks}`} marks)</strong>, ${q.stem}<br/>
        <span style="color:${ok ? "#1a7f4e" : "#b3261e"};">${ok ? "Correct." : "Marks dropped."}</span>
        ${q.workedSolution}
      </li>`;
    })
    .join("");

  const intro = isParent
    ? `<p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">
        Your child took our quick readiness check on <strong>${set.topicLabel}</strong>, 
        the topics our data rates most likely for the 2026 ${subject.name} paper. Below is the
        honest picture and exactly what to use, and when, to close the gap. These are
        probabilistic forecasts from ten years of past papers, a calmer way to plan
        revision, not a shortcut around it.</p>`
    : `<p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">
        You took the quick check on <strong>${set.topicLabel}</strong>, the topics our data rates most likely for your 2026 ${subject.name} paper. Here's the full
        breakdown and the fastest fix.</p>`;

  const html = emailLayout(`
    <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">${BAND_COPY[band].title}</h1>
    ${intro}
    <p style="font-size:15px;margin:0 0 6px;color:#101f33;"><strong>Score: ${attempt.score}/${attempt.totalMarks}</strong> across the highest-tier forecast topics.</p>
    <p style="font-size:14px;margin:0 0 4px;color:#101f33;">Indicative grade on these topics: <strong>${gradeEstimateFor(attempt.level, attempt.score, attempt.totalMarks)}</strong></p>
    <p style="font-size:11px;color:#8894a3;margin:0 0 16px;">${ESTIMATE_CAVEAT}</p>
    <ul style="margin:0 0 16px;padding-left:18px;">${rowsHtml}</ul>
    <p style="font-size:14px;color:#101f33;margin:0 0 6px;"><strong>${cta.headline}</strong></p>
    <p style="font-size:13px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">${cta.body}</p>
    <p style="margin:0 0 8px;">
      <a href="${productUrl(attempt.level, attempt.slug)}" style="display:inline-block;background:#f4552b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 20px;border-radius:8px;">
        See ${subject.name} packs
      </a>
    </p>
    <p style="font-size:12px;color:#3d4e63;margin:0;">Your full results page: <a href="${resultsUrl}" style="color:#f4552b;">${resultsUrl}</a></p>
    ${referralLineHtml(await referralCodeFor(attempt.email))}
    ${DISCLAIMER_HTML}
    ${UNSUB_HTML}
  `);

  const text = [
    `${BAND_COPY[band].title}`,
    `Score: ${attempt.score}/${attempt.totalMarks} on ${set.topicLabel}.`,
    `Indicative grade on these topics: ${gradeEstimateFor(attempt.level, attempt.score, attempt.totalMarks)}, ${ESTIMATE_CAVEAT}`,
    ``,
    `Full breakdown + worked solutions: ${resultsUrl}`,
    `${cta.headline}, ${productUrl(attempt.level, attempt.slug)}`,
    ``,
    `Reply "unsubscribe" to stop these emails.`,
  ].join("\n");

  const res = await sendEmail({
    to: attempt.email,
    subject: `Your ${subject.name} readiness results + worked solutions`,
    html,
    text,
  });
  if (res.delivered) {
    await prisma.diagnosticAttempt.update({
      where: { id: attempt.id },
      data: { resultEmailSentAt: new Date() },
    });
  }
  return res.delivered;
}

export async function sendFollowUpEmail(attemptId: string): Promise<boolean> {
  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt?.email || !attempt.unlockedAt || attempt.followUpSentAt) return false;
  const subject = getSubject(attempt.level as Level, attempt.slug);
  if (!subject) return false;
  const band = attempt.band as Band;
  const cta = ctaFor(band, (attempt.weakness as DiagnosticProduct | null) ?? null);
  const isParent = attempt.isParent;

  const proofLine = `We publish our accuracy after every sitting, hits AND misses, at <a href="${serverConfig.siteUrl}/accuracy" style="color:#f4552b;">the public scorecard</a>. A forecast you can't check is just marketing.`;
  const opener = isParent
    ? `Two days ago your child scored ${attempt.score}/${attempt.totalMarks} across <strong>the VERY HIGH-tier topics</strong>, the highest-confidence calls for the 2026 ${subject.name} paper.`
    : `Two days ago you scored ${attempt.score}/${attempt.totalMarks} across <strong>the VERY HIGH-tier topics</strong>, the highest-confidence calls for your 2026 ${subject.name} paper.`;

  const html = emailLayout(`
    <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">That topic hasn't gotten less likely</h1>
    <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">${opener}</p>
    <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">${proofLine}</p>
    <p style="font-size:14px;color:#101f33;margin:0 0 6px;"><strong>${cta.headline}</strong></p>
    <p style="font-size:13px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">${cta.body} Early-bird pricing applies while it's on.</p>
    <p style="margin:0;">
      <a href="${productUrl(attempt.level, attempt.slug)}" style="display:inline-block;background:#f4552b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 20px;border-radius:8px;">
        Fix it before the paper does
      </a>
    </p>
    ${referralLineHtml(await referralCodeFor(attempt.email))}
    ${DISCLAIMER_HTML}
    ${UNSUB_HTML}
  `);

  const res = await sendEmail({
    to: attempt.email,
    subject: `${subject.name}: the most-likely topics are still waiting`,
    html,
    text: `You scored ${attempt.score}/${attempt.totalMarks} across the most-likely ${subject.name} topics. Proof of our track record: ${serverConfig.siteUrl}/accuracy\n\n${cta.headline}: ${productUrl(attempt.level, attempt.slug)}\n\nReply "unsubscribe" to stop these emails.`,
  });
  if (res.delivered) {
    await prisma.diagnosticAttempt.update({
      where: { id: attempt.id },
      data: { followUpSentAt: new Date() },
    });
  }
  return res.delivered;
}
