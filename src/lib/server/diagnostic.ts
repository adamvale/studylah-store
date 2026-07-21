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

// ── The 7-day nurture ladder ────────────────────────────────────────────────
// Day 0 is the immediate result email (sendResultsEmail). The SEQUENCE below is
// the six follow-ups on days 1-6, each carrying one persuasion weapon from the
// war plan Section 14: open loop, authority, narrative, product, risk reversal,
// countdown+anchor. All compliance-bound: probabilistic language, no grade
// promises, real numbers only, and the money-back guarantee is a real feature.
// The DiagnosticAttempt.followUpStep cursor tracks progress; followUpAt holds
// when the next step is due (set to unlockedAt + STEP_DAYS[step]).

const STEP_DAYS = [1, 2, 3, 4, 5, 6]; // days after unlock for steps 0..5
const DAY_MS = 24 * 60 * 60 * 1000;
const FIRST_PAPER_UTC = Date.UTC(2026, 8, 30); // 30 Sep 2026, matches the promo bar
function daysToFirstPaper(): number {
  return Math.max(0, Math.ceil((FIRST_PAPER_UTC - Date.now()) / DAY_MS));
}

type AttemptRow = NonNullable<
  Awaited<ReturnType<typeof prisma.diagnosticAttempt.findUnique>>
>;

function btn(href: string, label: string): string {
  return `<p style="margin:0 0 4px;"><a href="${href}" style="display:inline-block;background:#f4552b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 20px;border-radius:8px;">${label}</a></p>`;
}

interface Built {
  subject: string;
  html: string;
  text: string;
}

// Each builder returns the email for one step. subjName is the subject's
// display name; refHtml is the pre-rendered referral line.
type StepBuilder = (a: AttemptRow, subjName: string, refHtml: string) => Built;

const SEQUENCE: StepBuilder[] = [
  // Step 0, Day 1: the open loop, their single leakiest topic still waiting.
  (a, subjName) => {
    const url = productUrl(a.level, a.slug);
    const who = a.isParent ? "your child" : "you";
    const opener = `Yesterday ${who} scored ${a.score}/${a.totalMarks} across the highest-confidence topics for the 2026 ${subjName} paper. The topics that leaked marks have not gotten any less likely since.`;
    return {
      subject: `${subjName}: the topic most likely to ambush you`,
      html: emailLayout(`
        <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">The topic most likely to ambush you</h1>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">${opener}</p>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">One focused week on the topics you dropped fixes most of the gap, and the ranked Forecast shows exactly which question styles they arrive as. That is a far better use of the next few weeks than revising everything evenly.</p>
        ${btn(url, "See the topics you're set to lose marks on")}
        ${DISCLAIMER_HTML}${UNSUB_HTML}`),
      text: `Yesterday ${who} scored ${a.score}/${a.totalMarks} on the most-likely ${subjName} topics. Fix the gap: ${url}\n\nReply "unsubscribe" to stop these emails.`,
    };
  },
  // Step 1, Day 2: authority. How we forecast, and how we mark ourselves.
  (a, subjName) => {
    const acc = `${serverConfig.siteUrl}/accuracy`;
    return {
      subject: "How we forecast, and how we mark ourselves",
      html: emailLayout(`
        <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">A fair question: how would we know?</h1>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">Ten years of Singapore-Cambridge ${subjName} papers, every question tracked, every pattern ranked. That is the whole method. It is a probability, not a promise.</p>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">And every year we publish our hits AND our misses, in public. A forecast you cannot check is just marketing. Judge us on the record.</p>
        ${btn(acc, "See the published scorecard")}
        ${DISCLAIMER_HTML}${UNSUB_HTML}`),
      text: `How we forecast ${subjName}: ten years of past papers, ranked. We publish every hit and miss at ${acc}\n\nReply "unsubscribe" to stop these emails.`,
    };
  },
  // Step 2, Day 3: narrative. Studied everything except what came out.
  (a, subjName) => {
    const url = productUrl(a.level, a.slug);
    return {
      subject: "She studied everything except what came out",
      html: emailLayout(`
        <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">She revised everything, evenly</h1>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">One student we worked with revised her subjects evenly, as if fairness matters to an exam. It does not. Papers reward depth on the likely topics.</p>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">Her second run was different: forecast order, the highest-ranked topics first. The remaining weeks are enough to change your order too, and ${subjName} is where your diagnostic said the marks are leaking.</p>
        ${btn(url, "Revise in the order that pays")}
        ${DISCLAIMER_HTML}${UNSUB_HTML}`),
      text: `Revising everything evenly is the most expensive way to feel safe. Revise ${subjName} in forecast order: ${url}\n\nReply "unsubscribe" to stop these emails.`,
    };
  },
  // Step 3, Day 4: the product. What is inside Ultra + StudyLand.
  (a, subjName) => {
    const band = a.band as Band;
    const cta = ctaFor(band, (a.weakness as DiagnosticProduct | null) ?? null);
    const url = productUrl(a.level, a.slug);
    const pricing = `${serverConfig.siteUrl}/pricing`;
    return {
      subject: `What is inside the Ultra pack for ${subjName}`,
      html: emailLayout(`
        <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">${cta.headline}</h1>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">${cta.body}</p>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">The Ultra pack for ${subjName} is the ranked Forecast, the Sure Questions Vault, a full timed Final Rehearsal and the Companion, plus StudyLand: three aimed questions a day, a mistake notebook that hunts your weak spots, and StudyLah Legends where the battles are real exam questions. Taking more than one subject? Bundles save up to S$188.</p>
        ${btn(url, "See the pack")}
        <p style="font-size:12px;color:#8894a3;margin:8px 0 0;">Or compare bundles at <a href="${pricing}" style="color:#f4552b;">the pricing page</a>.</p>
        ${DISCLAIMER_HTML}${UNSUB_HTML}`),
      text: `The Ultra pack for ${subjName}: Forecast, Vault, Final Rehearsal, Companion, plus StudyLand and StudyLah Legends. ${url}\nBundles: ${pricing}\n\nReply "unsubscribe" to stop these emails.`,
    };
  },
  // Step 4, Day 5: risk reversal, the money-back rule in plain words.
  () => {
    const faq = `${serverConfig.siteUrl}/faq`;
    return {
      subject: "Our money-back rule, in plain words",
      html: emailLayout(`
        <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">The risk is ours, not yours</h1>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">If fewer than three of our top-five forecast topics for your subject appear in the 2026 paper, email your order ID within 14 days of the exam and we refund you in full. That is the whole rule. We put the risk on our forecast, not on your wallet.</p>
        ${btn(faq, "How the guarantee works")}
        ${DISCLAIMER_HTML}${UNSUB_HTML}`),
      text: `Money-back guarantee: if fewer than three of our top-five forecast topics appear in your paper, email your order ID within 14 days for a full refund. Details: ${faq}\n\nReply "unsubscribe" to stop these emails.`,
    };
  },
  // Step 5, Day 6: countdown + bundle anchor + first-order code.
  (a, subjName) => {
    const days = daysToFirstPaper();
    const url = productUrl(a.level, a.slug);
    const pricing = `${serverConfig.siteUrl}/pricing`;
    const clock = days > 0 ? `${days} days to the first 2026 paper. ` : "";
    return {
      subject: `${clock}The maths of the next move`,
      html: emailLayout(`
        <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">${clock}The maths of the next move</h1>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">From here, every week is worth marks. One ${subjName} Ultra pack is S$68. Three subjects together are S$168, six are S$268, and the more you stack the cheaper each one gets.</p>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">First order: the code <strong style="color:#101f33;">STUDYLAH10</strong> takes 10 percent off, and every pack is covered by the money-back guarantee. Whatever you choose, choose an order for the weeks you have left.</p>
        ${btn(url, "Aim my final weeks")}
        <p style="font-size:12px;color:#8894a3;margin:8px 0 0;">Compare bundles at <a href="${pricing}" style="color:#f4552b;">the pricing page</a>.</p>
        ${DISCLAIMER_HTML}${UNSUB_HTML}`),
      text: `${clock}One ${subjName} Ultra pack is S$68; three subjects S$168; six S$268. Code STUDYLAH10 for 10% off your first order. ${url}\nBundles: ${pricing}\n\nReply "unsubscribe" to stop these emails.`,
    };
  },
];

// Sends the attempt's CURRENT ladder step, then advances the cursor and
// schedules the next step (or ends the ladder at step 6). Idempotent per step:
// the cron only calls this when followUpAt is due and followUpStep < 6.
export async function sendNextFollowUp(attemptId: string): Promise<boolean> {
  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt?.email || !attempt.unlockedAt) return false;
  const step = attempt.followUpStep;
  if (step < 0 || step >= SEQUENCE.length) return false;
  const subject = getSubject(attempt.level as Level, attempt.slug);
  if (!subject) return false;

  // Do not keep nurturing someone who has already bought.
  const order = await prisma.order.findFirst({ where: { email: attempt.email } });
  if (order) {
    await prisma.diagnosticAttempt.update({
      where: { id: attempt.id },
      data: { followUpStep: SEQUENCE.length },
    });
    return false;
  }

  const refHtml = referralLineHtml(await referralCodeFor(attempt.email));
  const built = SEQUENCE[step](attempt, subject.name, refHtml);
  const res = await sendEmail({
    to: attempt.email,
    subject: built.subject,
    html: built.html,
    text: built.text,
  });
  if (!res.delivered) return false;

  const nextStep = step + 1;
  const nextDue =
    nextStep < SEQUENCE.length
      ? new Date(attempt.unlockedAt.getTime() + STEP_DAYS[nextStep] * DAY_MS)
      : null;
  await prisma.diagnosticAttempt.update({
    where: { id: attempt.id },
    data: {
      followUpStep: nextStep,
      followUpAt: nextDue,
      followUpSentAt: new Date(), // last-sent marker, kept for observability
    },
  });
  return true;
}

// Back-compat alias: the cron used to call sendFollowUpEmail for a single send.
export const sendFollowUpEmail = sendNextFollowUp;
