"use client";

import { useEffect, useState } from "react";
import type { ExamPaper } from "@/lib/exam-dates-2026";
import { TIMETABLE_VERSION } from "@/lib/exam-dates-2026";

// Live countdown to a subject's next 2026 paper, plus the full paper schedule.
// Dates are official SEAB timetable facts (see lib/exam-dates-2026.ts), so the
// urgency is real, no invented scarcity. Renders nothing on the server and
// hydrates on the client so statically generated pages never bake in a stale
// clock.

const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

const fmtTime = (d: Date) =>
  d
    .toLocaleTimeString("en-SG", { hour: "numeric", minute: "2-digit", hour12: true })
    .toLowerCase()
    .replace(" ", "");

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <span className="flex flex-col items-center rounded-lg bg-night-2 px-2 py-1.5 sm:px-3">
      <span className="font-mono text-lg font-bold leading-none text-accent sm:text-2xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-wide text-body sm:text-[10px]">
        {label}
      </span>
    </span>
  );
}

export function ExamSchedule({
  papers,
  className = "",
}: {
  papers: ExamPaper[];
  className?: string;
}) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null || papers.length === 0) return null;

  const upcoming = papers
    .map((p) => ({ ...p, atMs: new Date(p.at).getTime() }))
    .sort((a, b) => a.atMs - b.atMs);
  const next = upcoming.find((p) => p.atMs > now);
  if (!next) return null; // season over; nothing to count down to

  const left = next.atMs - now;
  const days = Math.floor(left / 86_400_000);
  const hours = Math.floor((left % 86_400_000) / 3_600_000);
  const mins = Math.floor((left % 3_600_000) / 60_000);
  const secs = Math.floor((left % 60_000) / 1_000);

  return (
    <div
      className={`rounded-2xl border border-accent/30 bg-surface p-4 sm:p-5 ${className}`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-body">
        Next paper: {next.paper} · {fmtDate(new Date(next.atMs))},{" "}
        {fmtTime(new Date(next.atMs))}
      </p>
      <div className="mt-2 flex items-center gap-1.5 sm:gap-2" role="timer">
        <Unit value={days} label="days" />
        <Unit value={hours} label="hrs" />
        <Unit value={mins} label="min" />
        <Unit value={secs} label="sec" />
      </div>
      {upcoming.length > 1 && (
        <ul className="mt-4 divide-y divide-hairline border-t border-hairline">
          {upcoming.map((p) => {
            const past = p.atMs <= now;
            const d = new Date(p.atMs);
            return (
              <li
                key={p.paper}
                className={`flex items-baseline justify-between gap-3 py-1.5 text-xs sm:text-sm ${
                  past ? "text-body/50 line-through" : ""
                }`}
              >
                <span className={`font-medium ${past ? "" : "text-ink"}`}>
                  {p.paper}
                </span>
                <span className={`text-right ${past ? "" : "text-body"}`}>
                  {fmtDate(d)} · {fmtTime(d)}
                  {p.note ? ` (${p.note})` : ""}
                </span>
              </li>
            );
          })}
        </ul>
      )}
      <p className="mt-3 text-[10px] text-body">
        Dates from the official {TIMETABLE_VERSION}. Always confirm with your
        school&apos;s exam timetable.
      </p>
    </div>
  );
}
