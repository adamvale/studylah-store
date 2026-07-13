"use client";

import { useSyncExternalStore } from "react";

// The written-paper season opens around the start of October. Weeks are
// computed in the browser (server snapshot renders nothing) so statically
// generated pages never bake in a stale number, and the wording stays
// approximate on purpose — honest urgency.
const SEASON_START = Date.UTC(2026, 9, 1); // 1 Oct 2026

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const noopSubscribe = () => () => {};
const weeksLeft = () => Math.ceil((SEASON_START - Date.now()) / WEEK_MS);

export function ExamCountdown({
  className = "",
  variant = "pill",
}: {
  className?: string;
  variant?: "pill" | "urgent";
}) {
  const weeks = useSyncExternalStore(noopSubscribe, weeksLeft, () => null);

  if (weeks === null || weeks <= 0) return null;

  // Urgent variant leans on a REAL deadline (the paper dates) with a
  // loss-frame — honest urgency, no fake countdowns or invented scarcity.
  if (variant === "urgent") {
    return (
      <div
        className={`inline-flex items-center gap-2.5 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-2 text-sm ${className}`}
      >
        <span aria-hidden="true" className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent" />
        <span className="text-cloud">
          <span className="font-bold text-accent">≈ {weeks} week{weeks === 1 ? "" : "s"}</span>{" "}
          to the Oct/Nov 2026 papers — every week you wait is a week revising
          blind.
        </span>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs font-medium text-cloud ${className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      ≈ {weeks} week{weeks === 1 ? "" : "s"} to the Oct/Nov 2026 papers
    </span>
  );
}
