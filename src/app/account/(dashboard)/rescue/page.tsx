import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import {
  computeRisk,
  buildRescuePlan,
  RISK_CAVEAT,
  type RescueOptions,
  type SubjectRisk,
} from "@/lib/server/risk";
import { examPapersFor } from "@/lib/exam-dates-2026";
import { TierPill } from "@/components/heat";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = { title: "Rescue plan" };

const DAY_MS = 24 * 60 * 60 * 1000;
const SEASON_START = Date.UTC(2026, 9, 1); // last-resort fallback

// Days to the first upcoming paper. Priority: dates the student entered
// themselves, then the official SEAB 2026 timetable for the subjects they own
// (lib/exam-dates-2026.ts), then the generic season start.
function daysUntilFirstPaper(
  examDates: { at: Date }[],
  risks: SubjectRisk[]
): { days: number; source: "yours" | "seab" | "season" } {
  const now = Date.now();
  const own = examDates.find((d) => d.at.getTime() > now);
  if (own) {
    return {
      days: Math.max(1, Math.ceil((own.at.getTime() - now) / DAY_MS)),
      source: "yours",
    };
  }
  const official = risks
    .flatMap((r) => examPapersFor(r.level, r.slug))
    .map((p) => new Date(p.at).getTime())
    .filter((t) => t > now)
    .sort((a, b) => a - b)[0];
  if (official) {
    return {
      days: Math.max(1, Math.ceil((official - now) / DAY_MS)),
      source: "seab",
    };
  }
  return {
    days: Math.max(1, Math.ceil((SEASON_START - now) / DAY_MS)),
    source: "season",
  };
}

// The questionnaire's hours-per-day choices, mapped to plan slots (one slot is
// a ~35-minute focused block).
const HOURS_TO_SLOTS: Record<string, number> = {
  "1": 2,
  "2": 3,
  "3": 5,
  "4": 6,
};
const FEELS = new Set(["behind", "shaky", "fine"]);

export default async function RescuePage({
  searchParams,
}: {
  searchParams: Promise<{ h?: string; f?: string; s?: string | string[] }>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  const sp = await searchParams;
  const hours = sp.h && HOURS_TO_SLOTS[sp.h] ? sp.h : "2";
  const feel = (FEELS.has(sp.f ?? "") ? sp.f : "shaky") as NonNullable<
    RescueOptions["feel"]
  >;
  const picked = new Set(
    (Array.isArray(sp.s) ? sp.s : sp.s ? [sp.s] : []).filter(Boolean)
  );

  const [risks, examDates, unresolvedMistakes] = await Promise.all([
    computeRisk(customerId),
    prisma.examDate.findMany({ where: { customerId }, orderBy: { at: "asc" } }),
    prisma.mistakeEntry.count({ where: { customerId, resolved: false } }),
  ]);

  if (risks.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">
          A rescue plan needs a subject
        </p>
        <p className="mt-2 text-sm text-body">
          Once you own a forecast, this page turns your remaining topics into a
          day-by-day salvage plan.
        </p>
        <Link
          href="/account/add-subjects"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
        >
          Add a subject
        </Link>
      </div>
    );
  }

  const { days, source } = daysUntilFirstPaper(examDates, risks);
  const focusKeys =
    picked.size > 0
      ? new Set(
          risks
            .map((r) => `${r.level}/${r.slug}`)
            .filter((k) => picked.has(k))
        )
      : undefined;
  const plan = buildRescuePlan(risks, days, unresolvedMistakes, {
    slotsPerDay: HOURS_TO_SLOTS[hours],
    feel,
    focusKeys,
  });
  const totalProtected = plan.protectedBySubject.reduce((s, p) => s + p.marks, 0);

  const feelChoices = [
    { value: "behind", label: "Way behind", blurb: "biggest marks first, effort be damned" },
    { value: "shaky", label: "Somewhat shaky", blurb: "best payoff per hour of work" },
    { value: "fine", label: "Mostly fine", blurb: "sharpen what you know, under the clock" },
  ] as const;
  const hourChoices = [
    { value: "1", label: "About 1 hour" },
    { value: "2", label: "1 to 2 hours" },
    { value: "3", label: "2 to 3 hours" },
    { value: "4", label: "3 hours or more" },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">
            The rescue plan
          </h2>
          <p className="mt-1 text-sm text-body">
            Behind is a position, not a verdict. Answer three questions and this
            page spends your remaining days only where the forecast says the
            marks concentrate, VERY HIGH and HIGH topics you haven&apos;t banked
            yet, highest payoff first.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* The questionnaire. Plain GET form: answers live in the URL, so the
          plan is shareable, printable, and needs no client JS. */}
      <form
        method="get"
        className="rounded-2xl border border-hairline bg-surface p-5"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <fieldset>
            <legend className="text-xs font-medium uppercase tracking-wide text-body">
              1 · How do you feel about your prep?
            </legend>
            <div className="mt-2 space-y-1.5">
              {feelChoices.map((c) => (
                <label
                  key={c.value}
                  className={`flex cursor-pointer items-baseline gap-2 rounded-lg border px-3 py-2 text-sm ${
                    feel === c.value
                      ? "border-accent bg-accent/10 text-ink"
                      : "border-hairline text-body hover:text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="f"
                    value={c.value}
                    defaultChecked={feel === c.value}
                    className="sr-only"
                  />
                  <span className="font-medium">{c.label}</span>
                  <span className="text-xs">{c.blurb}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-xs font-medium uppercase tracking-wide text-body">
              2 · Study time you can really give each day?
            </legend>
            <div className="mt-2 space-y-1.5">
              {hourChoices.map((c) => (
                <label
                  key={c.value}
                  className={`flex cursor-pointer items-baseline gap-2 rounded-lg border px-3 py-2 text-sm ${
                    hours === c.value
                      ? "border-accent bg-accent/10 text-ink"
                      : "border-hairline text-body hover:text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="h"
                    value={c.value}
                    defaultChecked={hours === c.value}
                    className="sr-only"
                  />
                  <span className="font-medium">{c.label}</span>
                  <span className="text-xs">
                    {HOURS_TO_SLOTS[c.value]} blocks/day
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-xs font-medium uppercase tracking-wide text-body">
              3 · Rescue which subjects? (blank = all)
            </legend>
            <div className="mt-2 space-y-1.5">
              {risks.map((r) => {
                const key = `${r.level}/${r.slug}`;
                const on = picked.has(key);
                return (
                  <label
                    key={key}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                      on
                        ? "border-accent bg-accent/10 text-ink"
                        : "border-hairline text-body hover:text-ink"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="s"
                      value={key}
                      defaultChecked={on}
                      className="h-3.5 w-3.5 accent-[var(--color-accent)]"
                    />
                    <span className="font-medium">{r.name}</span>
                    <span className="text-xs">{r.levelShort}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>
        <button
          type="submit"
          className="mt-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
        >
          Rebuild my rescue plan
        </button>
      </form>

      <div className="rounded-2xl border border-accent/40 bg-surface p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-body">
            <span className="font-display text-xl font-black text-ink">{days}</span>{" "}
            day{days === 1 ? "" : "s"} to your first paper
            {days > 14 && <>, planning the next 14</>}
            {source === "seab" && (
              <span className="block text-xs">
                from the official SEAB 2026 timetable for your subjects
              </span>
            )}
            {source === "season" && (
              <span className="block text-xs">
                estimated season start,{" "}
                <Link href="/account/study" className="font-medium text-accent hover:underline">
                  add your dates
                </Link>{" "}
                to pin it down
              </span>
            )}
          </p>
          <p className="text-sm text-body">
            Puts <span className="font-display text-xl font-black text-ink">~{totalProtected}</span>{" "}
            forecast-weighted marks back under your control
          </p>
        </div>
        {plan.protectedBySubject.length > 1 && (
          <p className="mt-2 text-xs text-body">
            {plan.protectedBySubject
              .map((p) => `${p.name} ~${p.marks}`)
              .join(" · ")}
          </p>
        )}
      </div>

      {/* The daily rituals ride every day of the plan */}
      <div className="rounded-2xl border border-hairline bg-surface p-4 text-sm text-body">
        <span className="font-medium text-ink">Every day, before the topics:</span>{" "}
        the daily three (2 minutes)
        {plan.unresolvedMistakes > 0 && (
          <>
            {" "}
            · clear 2 entries from your{" "}
            <Link href="/account/mistakes" className="font-medium text-accent hover:underline">
              mistake notebook
            </Link>{" "}
            ({plan.unresolvedMistakes} open)
          </>
        )}
      </div>

      <ol className="space-y-4">
        {plan.planDays.map((day) => (
          <li key={day.dayNumber} className="rounded-2xl border border-hairline bg-surface p-5">
            <p className="font-display font-bold text-ink">
              Day {day.dayNumber}
              {day.dayNumber === 1 && <span className="ml-2 text-xs font-normal text-accent">start today</span>}
            </p>
            <ul className="mt-3 space-y-2">
              {day.items.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-night px-4 py-2.5"
                >
                  <span className="min-w-0">
                    <span className="block text-sm text-ink">{item.topic}</span>
                    <span className="text-xs text-body">
                      {item.subjectName} · {item.levelShort} · {item.action}
                    </span>
                  </span>
                  <TierPill tier={item.tier} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {plan.extras.length > 0 && (
        <div className="rounded-2xl border border-hairline bg-surface p-5">
          <p className="font-display font-bold text-ink">If you find extra time</p>
          <ul className="mt-2 space-y-1 text-sm text-body">
            {plan.extras.map((item, i) => (
              <li key={i}>
                • {item.topic} <span className="text-xs">({item.subjectName})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-2xl border border-hairline bg-surface p-5 text-sm text-body">
        <p className="font-medium text-ink">The night before each paper</p>
        <p className="mt-1">
          Sit that subject&apos;s Final Rehearsal under the clock (use the{" "}
          <Link href="/account/timer" className="font-medium text-accent hover:underline">
            exam timer
          </Link>
          ), then close the books and review only your mistake notebook and the
          formula/definition lists. Sleep beats one more hour of notes.
        </p>
      </div>

      <p className="text-xs text-body/70">{RISK_CAVEAT}</p>
    </div>
  );
}
