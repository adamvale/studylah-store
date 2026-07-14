import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { computeRisk, buildRescuePlan, RISK_CAVEAT } from "@/lib/server/risk";
import { TierPill } from "@/components/heat";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = { title: "Rescue plan" };

const DAY_MS = 24 * 60 * 60 * 1000;
const SEASON_START = Date.UTC(2026, 9, 1); // fallback until paper dates are entered

// Kept outside the component so the impurity (Date.now) isn't called during
// render, see react-hooks/purity.
function daysUntilFirstPaper(examDates: { at: Date }[]): {
  days: number;
  usingRealDates: boolean;
} {
  const now = Date.now();
  const next = examDates.find((d) => d.at.getTime() > now);
  const target = next ? next.at.getTime() : SEASON_START;
  return {
    days: Math.max(1, Math.ceil((target - now) / DAY_MS)),
    usingRealDates: Boolean(next),
  };
}

export default async function RescuePage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

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

  const { days, usingRealDates } = daysUntilFirstPaper(examDates);
  const plan = buildRescuePlan(risks, days, unresolvedMistakes);
  const totalProtected = plan.protectedBySubject.reduce((s, p) => s + p.marks, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">
            The rescue plan
          </h2>
          <p className="mt-1 text-sm text-body">
            Behind is a position, not a verdict. This plan spends your remaining
            days only where the forecast says the marks concentrate, VERY HIGH
            and HIGH topics you haven&apos;t banked yet, highest payoff first.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="rounded-2xl border border-accent/40 bg-surface p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-body">
            {usingRealDates ? (
              <>
                <span className="font-display text-xl font-black text-ink">{days}</span>{" "}
                day{days === 1 ? "" : "s"} to your first paper
                {days > 14 && <>, planning the next 14</>}
              </>
            ) : (
              <>
                No paper dates entered yet, planning a 14-day sprint.{" "}
                <Link href="/account/study" className="font-medium text-accent hover:underline">
                  Add your dates
                </Link>{" "}
                to fit it to your real timetable.
              </>
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
