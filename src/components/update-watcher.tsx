"use client";

import { useEffect, useRef, useState } from "react";
import { IconRepeat, IconSparkle } from "@/components/icons";

// Deploy awareness for StudyLand. Polls /api/version; three quiet states:
//   idle     - nothing rendered (the normal case, 99% of the time)
//   updating - a poll failed, the Railway swap window is in progress
//   updated  - polls answer again with a NEW version: an update landed
// Deliberately never auto-refreshes and never blocks the screen: a student
// mid-quiz keeps their state, submits retry on their own, and the refresh
// happens only when THEY tap it.

const POLL_MS = 45_000;

type Phase = "idle" | "updating" | "updated";

export function UpdateWatcher() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [dismissed, setDismissed] = useState(false);
  const baseline = useRef<string | null>(null);
  const failures = useRef(0);

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const res = await fetch("/api/version", { cache: "no-store" });
        if (!res.ok) throw new Error();
        const { v } = (await res.json()) as { v: string };
        if (cancelled) return;
        failures.current = 0;
        if (baseline.current === null) {
          baseline.current = v; // first successful read = the version we run
        } else if (v !== baseline.current) {
          setPhase("updated");
          return; // terminal until refresh
        } else {
          setPhase((p) => (p === "updating" ? "idle" : p));
        }
      } catch {
        if (cancelled) return;
        // One blip could be the student's own connection; two misses in a row
        // during a session almost always means the deploy swap.
        failures.current += 1;
        if (baseline.current !== null && failures.current >= 2) {
          setPhase((p) => (p === "updated" ? p : "updating"));
        }
      }
    }

    void check();
    const id = setInterval(() => void check(), POLL_MS);
    const onVisible = () => {
      if (document.visibilityState === "visible") void check();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  if (phase === "idle" || dismissed) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-3 bottom-20 z-50 md:inset-x-auto md:bottom-6 md:right-6 md:max-w-sm print:hidden"
    >
      {/* Solid surface, not .glass: a floating toast over arbitrary content
          must be readable, translucency let the page text bleed through. */}
      <div
        className="flex items-start gap-3 rounded-2xl border border-accent/40 p-4 shadow-[0_12px_40px_rgba(5,2,20,0.7)]"
        style={{ backgroundColor: "#191238" }}
      >
        <span className="icon-orb shrink-0 text-accent" aria-hidden>
          {phase === "updating" ? <IconRepeat size={18} /> : <IconSparkle size={18} />}
        </span>
        <div className="min-w-0 flex-1">
          {phase === "updating" ? (
            <>
              <p className="font-display text-sm font-bold text-ink">
                System and content updating
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-body">
                Takes about a minute. Keep going, your answers on this screen
                are safe and will send once it&apos;s done.
              </p>
            </>
          ) : (
            <>
              <p className="font-display text-sm font-bold text-ink">
                StudyLand just got an update
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-body">
                Finish your quiz first, nothing is lost. Then refresh to get
                the newest version.
              </p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="sl-btn mt-2 !px-4 !py-1.5 text-xs"
              >
                Refresh now
              </button>
            </>
          )}
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="shrink-0 text-body hover:text-ink"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
