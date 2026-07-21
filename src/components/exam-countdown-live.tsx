"use client";

import { useEffect, useState } from "react";
import type { ExamPaper } from "@/lib/exam-dates-2026";

// The live ticking countdown to a subject's NEXT 2026 paper. Client-only by
// design: a per-second clock cannot be server-rendered without baking a stale
// value. The full paper-date TABLE is server-rendered separately (in
// exam-schedule.tsx) so crawlers and AI search still see every date; this is
// progressive enhancement layered on top.

const SG = "Asia/Singapore";
const fmtDate = (ms: number) =>
  new Date(ms).toLocaleDateString("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: SG,
  });
const fmtTime = (ms: number) =>
  new Date(ms)
    .toLocaleTimeString("en-SG", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: SG,
    })
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

export function ExamCountdownLive({ papers }: { papers: ExamPaper[] }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null || papers.length === 0) return null;

  const next = papers
    .map((p) => ({ ...p, atMs: new Date(p.at).getTime() }))
    .sort((a, b) => a.atMs - b.atMs)
    .find((p) => p.atMs > now);
  if (!next) return null; // season over; nothing to count down to

  const left = next.atMs - now;
  const days = Math.floor(left / 86_400_000);
  const hours = Math.floor((left % 86_400_000) / 3_600_000);
  const mins = Math.floor((left % 3_600_000) / 60_000);
  const secs = Math.floor((left % 60_000) / 1_000);

  return (
    <div className="mb-4 border-b border-hairline pb-4">
      <p className="text-xs font-medium uppercase tracking-wide text-body">
        Next paper: {next.paper} · {fmtDate(next.atMs)}, {fmtTime(next.atMs)}
      </p>
      <div className="mt-2 flex items-center gap-1.5 sm:gap-2" role="timer">
        <Unit value={days} label="days" />
        <Unit value={hours} label="hrs" />
        <Unit value={mins} label="min" />
        <Unit value={secs} label="sec" />
      </div>
    </div>
  );
}
