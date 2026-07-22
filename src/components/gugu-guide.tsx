"use client";

import { useEffect, useState } from "react";
import { NamedIcon } from "@/components/icons";
import { speak, stopSpeaking } from "@/lib/speak";

// Gugu, guiding on every page. A small floating companion that speaks the
// page's scripted guidance line (the same for every student, on-device speech,
// no AI). Auto-greets once per page per session; tap to hear it again; a mute
// toggle for anyone who prefers quiet. Sits above the bottom tab bar.

// Per client session: which lines have already been auto-spoken, so navigating
// back to a page doesn't re-greet.
const autoSpoken = new Set<string>();

export function GuguGuide({ line }: { line: string }) {
  const [muted, setMuted] = useState(false);
  const [talking, setTalking] = useState(false);

  useEffect(() => {
    try {
      setMuted(localStorage.getItem("gugu_muted") === "1");
    } catch {
      /* ignore */
    }
  }, []);

  // Auto-greet once per page per session (best-effort; iOS may need the first
  // tap before speech is allowed, which the button provides).
  useEffect(() => {
    if (!line || muted || autoSpoken.has(line)) return;
    autoSpoken.add(line);
    say();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [line, muted]);

  function say() {
    if (!line) return;
    setTalking(true);
    speak(line);
    window.setTimeout(() => setTalking(false), Math.min(14000, 500 + line.length * 60));
  }

  function toggleMute() {
    setMuted((m) => {
      const next = !m;
      try {
        localStorage.setItem("gugu_muted", next ? "1" : "0");
      } catch {
        /* ignore */
      }
      if (next) stopSpeaking();
      return next;
    });
  }

  if (!line) return null;

  return (
    <div
      className="fixed right-4 z-40 flex items-center gap-2 print:hidden"
      style={{ bottom: "calc(env(safe-area-inset-bottom) + 5.25rem)" }}
    >
      <button
        type="button"
        onClick={say}
        aria-label="Hear Gugu's guidance"
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-hairline text-accent shadow-lg ${talking ? "animate-pulse" : ""}`}
        style={{ backgroundColor: "#160f36" }}
      >
        <NamedIcon name="ghost" size={22} />
      </button>
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute Gugu" : "Mute Gugu"}
        className="flex h-7 w-7 items-center justify-center rounded-full border border-hairline text-body shadow"
        style={{ backgroundColor: "#160f36" }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
          {muted ? <path d="M17 8l6 8M23 8l-6 8" /> : <path d="M16 8a5 5 0 0 1 0 8" />}
        </svg>
      </button>
    </div>
  );
}
