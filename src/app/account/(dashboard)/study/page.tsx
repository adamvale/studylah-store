import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { LEVELS, type Level } from "@/lib/catalogue";
import { fullForecast } from "@/lib/topics";
import { FORECAST_TABLES } from "@/lib/forecast-tables";
import { forecastTier } from "@/components/heat";
import { getCustomerId } from "@/lib/server/customer-session";
import { StudyPlanBoard, type PlanSubject } from "@/components/study-plan-board";
import { Banner, fmtDate } from "../ui";

export const metadata: Metadata = { title: "Study plan" };

const SEASON_START = Date.UTC(2026, 9, 1); // fallback until dates are entered
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Clock reads live outside the component (page renders dynamically per
// request, so "now" is request time).
function countdown(examDates: { at: Date }[]): { now: number; weeksLeft: number } {
  const now = Date.now();
  const nextExam = examDates.find((d) => d.at.getTime() > now);
  const target = nextExam ? nextExam.at.getTime() : SEASON_START;
  return { now, weeksLeft: Math.ceil((target - now) / WEEK_MS) };
}

const MESSAGES = {
  "dateadded=1": { tone: "ok" as const, msg: "Paper added to your timetable." },
  "dateremoved=1": { tone: "ok" as const, msg: "Paper removed." },
  "error=date": { tone: "bad" as const, msg: "Give the paper a name and a valid date." },
  "error=datelimit": { tone: "bad" as const, msg: "That's plenty of papers — remove one first." },
};

export default async function StudyPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  const [orders, progressRows, examDates] = await Promise.all([
    prisma.order.findMany({
      where: { customerId, status: { not: "refunded" } },
      include: { items: { include: { product: { include: { subject: true } } } } },
    }),
    prisma.topicProgress.findMany({ where: { customerId } }),
    prisma.examDate.findMany({ where: { customerId }, orderBy: { at: "asc" } }),
  ]);

  // Owned subjects → their full topic list in forecast order, tiered.
  const seen = new Map<string, PlanSubject>();
  for (const order of orders) {
    for (const item of order.items) {
      const s = item.product.subject;
      const key = `${s.level}/${s.slug}`;
      if (seen.has(key)) continue;
      // The checklist must mirror the customer's own Forecast PDF: use the
      // real 2026 prediction table (extracted per subject), falling back to
      // the illustrative generator only if a table is ever missing.
      const table = FORECAST_TABLES[key];
      seen.set(key, {
        level: s.level,
        slug: s.slug,
        name: s.name,
        levelShort: LEVELS[s.level as Level].shortName,
        topics: table
          ? table.map((t) => ({ topic: t.topic, tier: t.tier }))
          : fullForecast(s.family as Parameters<typeof fullForecast>[0], key).map(
              (t) => ({ topic: t.topic, tier: forecastTier(t.probability) })
            ),
      });
    }
  }
  const subjects = [...seen.values()];

  const initialProgress: Record<string, number> = {};
  for (const row of progressRows) {
    initialProgress[`${row.level}/${row.slug}/${row.topic}`] = row.status;
  }

  const { now, weeksLeft } = countdown(examDates);

  const params = await searchParams;

  return (
    <div>
      <Banner params={params} messages={MESSAGES} />

      {subjects.length === 0 ? (
        <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
          <p className="font-display text-lg font-bold text-ink">
            Your study plan starts with a subject
          </p>
          <p className="mt-2 text-sm text-body">
            Once you own a forecast, every topic appears here as a tiered
            checklist you can work through.
          </p>
          <Link
            href="/account/add-subjects"
            className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Add a subject
          </Link>
        </div>
      ) : (
        <StudyPlanBoard
          subjects={subjects}
          initialProgress={initialProgress}
          weeksLeft={weeksLeft > 0 ? weeksLeft : null}
        />
      )}

      {/* Personal exam timetable */}
      <section className="mt-6 rounded-2xl border border-hairline bg-surface p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-ink">Your paper dates</h3>
          {examDates.length > 0 && (
            <a
              href="/api/account/exam-dates/ics"
              className="text-xs font-medium text-accent underline"
            >
              Add to calendar (.ics)
            </a>
          )}
        </div>
        <p className="mt-1 text-sm text-body">
          Enter your papers from the SEAB timetable when it&apos;s released —
          the countdown and weekly plan follow your real dates.
        </p>

        {examDates.length > 0 && (
          <ul className="mt-4 space-y-2">
            {examDates.map((d) => {
              const days = Math.ceil((d.at.getTime() - now) / (24 * 60 * 60 * 1000));
              return (
                <li
                  key={d.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-night px-4 py-2.5"
                >
                  <span>
                    <span className="block text-sm text-ink">{d.label}</span>
                    <span className="text-xs text-body">
                      {fmtDate(d.at)}
                      {days > 0 && ` · in ${days} day${days === 1 ? "" : "s"}`}
                    </span>
                  </span>
                  <form action="/api/account/exam-dates" method="post">
                    <input type="hidden" name="remove" value={d.id} />
                    <button
                      type="submit"
                      aria-label={`Remove ${d.label}`}
                      className="text-xs text-body hover:text-coral"
                    >
                      Remove
                    </button>
                  </form>
                </li>
              );
            })}
          </ul>
        )}

        <form
          action="/api/account/exam-dates"
          method="post"
          className="mt-4 flex flex-wrap items-end gap-3"
        >
          <div className="flex-1">
            <label htmlFor="paper-label" className="block text-xs font-medium text-body">
              Paper
            </label>
            <input
              id="paper-label"
              name="label"
              type="text"
              required
              maxLength={80}
              placeholder="e.g. Physics Paper 1"
              className="mt-1 w-full rounded-lg border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="paper-at" className="block text-xs font-medium text-body">
              Date &amp; time
            </label>
            <input
              id="paper-at"
              name="at"
              type="datetime-local"
              required
              className="mt-1 rounded-lg border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg border border-hairline px-4 py-2.5 text-sm font-medium text-ink hover:border-accent"
          >
            Add paper
          </button>
        </form>
      </section>
    </div>
  );
}
