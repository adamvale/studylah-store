import { prisma } from "@/lib/db";
import { serverConfig } from "./config";
import { sendEmail, emailLayout } from "./email";
import { signParentUnsubToken } from "./customer-session";
import { sgDay, computeStreak } from "./study";

// Opt-in weekly progress digest for a parent. Factual and encouraging, never
// a grade promise, never another student's data. Idempotent per ~week via
// Customer.parentDigestSentAt.

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export interface WeeklyStats {
  topicsWorked: number;
  nowConfident: number;
  quizDays: number;
  quizCorrect: number;
  quizAnswered: number;
  streak: number;
}

export async function weeklyStatsFor(customerId: string): Promise<WeeklyStats> {
  const weekAgo = new Date(Date.now() - WEEK_MS);
  const weekAgoDay = sgDay(weekAgo);

  const [worked, confident, dayRows, allDays] = await Promise.all([
    prisma.topicProgress.count({ where: { customerId, updatedAt: { gte: weekAgo } } }),
    prisma.topicProgress.count({
      where: { customerId, updatedAt: { gte: weekAgo }, status: { gte: 3 } },
    }),
    prisma.dailyQuizDay.findMany({ where: { customerId, day: { gte: weekAgoDay } } }),
    prisma.dailyQuizDay.findMany({ where: { customerId }, select: { day: true } }),
  ]);

  const streak = computeStreak(
    allDays.map((d) => d.day),
    sgDay()
  );

  return {
    topicsWorked: worked,
    nowConfident: confident,
    quizDays: dayRows.length,
    quizCorrect: dayRows.reduce((s, d) => s + d.correct, 0),
    quizAnswered: dayRows.reduce((s, d) => s + d.answered, 0),
    streak: streak.current,
  };
}

function digestHtml(studentEmail: string, stats: WeeklyStats, unsubUrl: string): string {
  const lines = [
    `<strong>${stats.topicsWorked}</strong> topic${stats.topicsWorked === 1 ? "" : "s"} revised this week`,
    `<strong>${stats.nowConfident}</strong> marked fully confident`,
    `<strong>${stats.quizDays}</strong> day${stats.quizDays === 1 ? "" : "s"} of daily practice (${stats.quizCorrect}/${stats.quizAnswered} correct)`,
    `Current streak: <strong>${stats.streak} day${stats.streak === 1 ? "" : "s"}</strong>`,
  ];
  return emailLayout(`
    <h1 style="font-size:20px;margin:0 0 4px;color:#101f33;">This week's revision</h1>
    <p style="font-size:13px;color:#3d4e63;margin:0 0 16px;">A quick snapshot of ${studentEmail}'s progress on StudyLah.</p>
    <ul style="font-size:14px;color:#101f33;line-height:1.9;margin:0 0 16px;padding-left:18px;">
      ${lines.map((l) => `<li>${l}</li>`).join("")}
    </ul>
    <p style="font-size:13px;color:#3d4e63;margin:0 0 4px;">The best support you can give is a quiet ten minutes and a &ldquo;show me what you practised today&rdquo;. Consistency is what moves marks.</p>
    <p style="font-size:11px;color:#8894a3;margin:20px 0 0;">
      You receive this because ${studentEmail} added your address to their StudyLah account.
      <a href="${unsubUrl}" style="color:#8894a3;">Unsubscribe</a>.
    </p>
  `);
}

// Sends the digest for one customer if they've opted in and aren't already
// done for this week. Returns true if an email went out.
export async function sendParentDigest(customerId: string, force = false): Promise<boolean> {
  const customer = await prisma.customer.findUnique({ where: { id: customerId } });
  if (!customer || !customer.parentEmail || !customer.parentDigestConsentAt) return false;
  if (
    !force &&
    customer.parentDigestSentAt &&
    Date.now() - customer.parentDigestSentAt.getTime() < 6 * 24 * 60 * 60 * 1000
  ) {
    return false; // already sent this week
  }

  const stats = await weeklyStatsFor(customerId);
  const unsubUrl = `${serverConfig.siteUrl}/api/parent-digest/unsubscribe?token=${signParentUnsubToken(customerId)}`;

  const textLines = [
    `${stats.topicsWorked} topics revised this week`,
    `${stats.nowConfident} marked fully confident`,
    `${stats.quizDays} days of daily practice (${stats.quizCorrect}/${stats.quizAnswered} correct)`,
    `Current streak: ${stats.streak} days`,
    ``,
    `Unsubscribe: ${unsubUrl}`,
  ];

  await sendEmail({
    to: customer.parentEmail,
    subject: `This week's revision, ${customer.email}`,
    html: digestHtml(customer.email, stats, unsubUrl),
    text: textLines.join("\n"),
  });

  await prisma.customer.update({
    where: { id: customerId },
    data: { parentDigestSentAt: new Date() },
  });
  return true;
}
