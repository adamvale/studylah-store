import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects } from "@/lib/server/study";
import { computeRisk } from "@/lib/server/risk";
import { examPapersFor, type ExamPaper } from "@/lib/exam-dates-2026";
import { TierPill } from "@/components/heat";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "War Room" };
export const dynamic = "force-dynamic";

const DAY_MS = 24 * 60 * 60 * 1000;
const UNLOCK_DAYS = 7;

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

// The night-before ritual, the same for every paper. Sleep beats notes.
const NIGHT_BEFORE = [
  "Sit the Final Rehearsal under the clock (use the exam timer)",
  "Read ONLY your mistake notebook, nothing new tonight",
  "One pass of formulas and definitions in Drills",
  "Pack: entry proof, calculator, pens, water",
  "Books closed by 9pm. Sleep is revision too.",
];

export default async function WarRoomPage({
  searchParams,
}: {
  searchParams: Promise<{ preview?: string }>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);
  const preview = (await searchParams).preview === "1";

  const subjects = await ownedSubjects(customerId);
  if (subjects.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">
          The War Room needs a subject
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

  const now = Date.now();
  const risks = await computeRisk(customerId);
  const mistakes = await prisma.mistakeEntry.groupBy({
    by: ["level", "slug"],
    where: { customerId, resolved: false },
    _count: { id: true },
  });
  const mistakeCount = (level: string, slug: string) =>
    mistakes.find((m) => m.level === level && m.slug === slug)?._count.id ?? 0;

  // One row per subject: next upcoming paper + all remaining papers.
  const rows = subjects
    .map((s) => {
      const papers = examPapersFor(s.level, s.slug)
        .map((p: ExamPaper) => ({ ...p, atMs: new Date(p.at).getTime() }))
        .filter((p) => p.atMs > now)
        .sort((a, b) => a.atMs - b.atMs);
      const next = papers[0] ?? null;
      const days = next ? Math.ceil((next.atMs - now) / DAY_MS) : null;
      return { subject: s, papers, next, days };
    })
    .sort((a, b) => (a.next?.atMs ?? Infinity) - (b.next?.atMs ?? Infinity));

  const anyArmed = rows.some(
    (r) => r.days !== null && r.days <= UNLOCK_DAYS
  );

  return (
    <div className="space-y-5">
      <PageHeading
        size="sm"
        description={`Each subject's war room opens ${UNLOCK_DAYS} days before its first paper: a tight final-week plan built from your own weak spots. No new content in the last week, only sharpening what you have.`}
      >
        The War Room
      </PageHeading>

      {!anyArmed && !preview && (
        <div className="rounded-2xl border border-accent/30 bg-surface p-5 text-sm text-body">
          Nothing armed yet, your earliest paper is{" "}
          {rows[0]?.days !== null && rows[0]?.next
            ? `${rows[0].days} days away (${rows[0].subject.name}, ${fmtDate(rows[0].next.at)})`
            : "not scheduled"}
          . The rooms open on their own, nothing for you to set up. Until
          then, the best prep is the boring kind: the daily three and your{" "}
          <Link href="/account/drills" className="font-medium text-accent hover:underline">
            drills
          </Link>
          .
        </div>
      )}

      {rows.map(({ subject, papers, next, days }) => {
        const armed = preview || (days !== null && days <= UNLOCK_DAYS);
        const risk = risks.find(
          (r) => r.level === subject.level && r.slug === subject.slug
        );
        const top5 = (risk?.topics ?? []).slice(0, 5);
        const misses = mistakeCount(subject.level, subject.slug);

        return (
          <div
            key={`${subject.level}/${subject.slug}`}
            className={`rounded-2xl border p-5 ${
              armed ? "border-coral/50 bg-surface" : "border-hairline bg-surface/60"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-display text-lg font-bold text-ink">
                {subject.name}
              </p>
              {next ? (
                <p className={`text-sm ${armed ? "font-bold text-coral" : "text-body"}`}>
                  {days} day{days === 1 ? "" : "s"} to {next.paper} ·{" "}
                  {fmtDate(next.at)}
                </p>
              ) : (
                <p className="text-sm text-body">No upcoming paper</p>
              )}
            </div>

            {!armed ? (
              <p className="mt-2 text-xs text-body">
                Opens {UNLOCK_DAYS} days before the paper. Papers:{" "}
                {papers.map((p) => `${p.paper} ${fmtDate(p.at)}`).join(" · ") || "none"}
              </p>
            ) : (
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-hairline bg-night p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">
                    Final-week focus (your top 5 forecast topics)
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {top5.length === 0 && (
                      <li className="text-sm text-body">
                        No topic data yet, start with the Forecast PDF&apos;s
                        VERY HIGH list.
                      </li>
                    )}
                    {top5.map((t) => (
                      <li key={t.topic} className="flex items-center justify-between gap-2 text-sm text-ink">
                        <span className="min-w-0 truncate">{t.topic}</span>
                        <TierPill tier={t.tier} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-hairline bg-night p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">
                    The countdown checklist
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink">
                    <li>
                      Reviews:{" "}
                      <Link href="/account/drills" className="font-medium text-accent hover:underline">
                        Formulas + definitions sweep
                      </Link>{" "}
                      (Drills, both decks, until "due" hits zero)
                    </li>
                    <li>
                      Monsters:{" "}
                      <Link href="/account/mistakes" className="font-medium text-accent hover:underline">
                        Clear your mistake notebook
                      </Link>{" "}
                      ({misses} open entr{misses === 1 ? "y" : "ies"} for this subject)
                    </li>
                    <li>
                      ⏱{" "}
                      <Link href="/account/timer" className="font-medium text-accent hover:underline">
                        One timed mini-mock
                      </Link>{" "}
                      (Final Rehearsal, real conditions, 2 days out)
                    </li>
                  </ul>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wide text-coral">
                    Night before {next?.paper ?? "the paper"}
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-body">
                    {NIGHT_BEFORE.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <p className="text-[10px] text-body/70">
        Paper dates from the official SEAB timetable. Always confirm against
        your school&apos;s exam timetable and entry proof.
      </p>
    </div>
  );
}
