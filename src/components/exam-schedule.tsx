import type { ExamPaper } from "@/lib/exam-dates-2026";
import { TIMETABLE_VERSION } from "@/lib/exam-dates-2026";
import { ExamCountdownLive } from "./exam-countdown-live";

// The subject page's 2026 paper schedule. This is now a SERVER component: the
// full date table renders in the initial HTML so Google and AI search see
// every paper date (the answer to "when is the O-Level [subject] 2026 paper"),
// which the old client-only version hid behind hydration. The live ticking
// countdown is layered on top as a client child (exam-countdown-live.tsx).
// Dates are official SEAB facts (lib/exam-dates-2026.ts), so no invented
// urgency. Formatted in Singapore time so server and client agree.

const SG = "Asia/Singapore";
const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: SG,
  });
const fmtTime = (iso: string) =>
  new Date(iso)
    .toLocaleTimeString("en-SG", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: SG,
    })
    .toLowerCase()
    .replace(" ", "");

export function ExamSchedule({
  papers,
  className = "",
}: {
  papers: ExamPaper[];
  className?: string;
}) {
  if (papers.length === 0) return null;
  const sorted = [...papers].sort(
    (a, b) => new Date(a.at).getTime() - new Date(b.at).getTime()
  );

  return (
    <div
      className={`rounded-2xl border border-accent/30 bg-surface p-4 sm:p-5 ${className}`}
    >
      {/* Live ticking countdown to the next paper (client, progressive). */}
      <ExamCountdownLive papers={papers} />

      {/* Server-rendered, crawlable date table. */}
      <p className="text-xs font-medium uppercase tracking-wide text-body">
        2026 exam dates
      </p>
      <ul className="mt-2 divide-y divide-hairline border-t border-hairline">
        {sorted.map((p) => (
          <li
            key={p.paper}
            className="flex items-baseline justify-between gap-3 py-1.5 text-xs sm:text-sm"
          >
            <span className="font-medium text-ink">
              {p.paper}
              {p.kind ? (
                <span className="ml-1.5 font-normal text-body">{p.kind}</span>
              ) : null}
            </span>
            <span className="text-right text-body">
              {fmtDate(p.at)} · {fmtTime(p.at)}
              {p.note ? ` (${p.note})` : ""}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[10px] text-body">
        Dates from the official {TIMETABLE_VERSION}. Always confirm with your
        school&apos;s exam timetable.
      </p>
    </div>
  );
}
