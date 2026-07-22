"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// The immersive full-screen surface every multi-step learning activity runs
// inside: lessons, the daily three, FastTrack plays, drills, practice decks.
// It portals to <body> so the fixed overlay escapes the .native-screen page
// wrapper (whose transition transform would otherwise trap position:fixed),
// paints the standard app background (sl-screen-bg), clears the notch, and
// pins the footer (the primary action) to the bottom edge. The content sits
// in the middle and only scrolls if a single step is unusually long, so every
// step is a single screenload with the action always in reach.

export function ImmersiveShell({
  onExit,
  title,
  subtitle,
  progress,
  headerRight,
  footer,
  children,
}: {
  onExit?: () => void;
  title?: string;
  subtitle?: string;
  // Show a progress bar + count in the top bar. Omit for activities with no
  // fixed step count (a flashcard deck, a chat-style trainer).
  progress?: { current: number; total: number } | null;
  // Optional control on the right of the top bar (e.g. "End session").
  headerRight?: React.ReactNode;
  // Pinned to the bottom edge. Usually the primary button(s).
  footer?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div className="studyland sl-screen-bg fixed inset-0 z-[60] flex flex-col">
      {/* Compact top bar: exit + progress/count (or headerRight). Clears the
          notch on iOS. */}
      <div
        className="flex items-center gap-3 px-4 pb-3"
        style={{ paddingTop: "max(env(safe-area-inset-top), 0.9rem)" }}
      >
        {onExit && (
          <button
            type="button"
            onClick={onExit}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-lg leading-none text-body"
          >
            ←
          </button>
        )}
        {progress ? (
          <>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-accent transition-all"
                style={{ width: `${(progress.current / Math.max(progress.total, 1)) * 100}%` }}
              />
            </div>
            <span className="shrink-0 font-mono text-[10px] text-body">
              {progress.current}/{progress.total}
            </span>
          </>
        ) : (
          <div className="flex-1" />
        )}
        {headerRight}
      </div>

      {/* Content, centred between the bar and the footer; scrolls only if a
          single step overflows. */}
      <div className="flex-1 overflow-y-auto px-4">
        {(title || subtitle) && (
          <div className="pb-1 pt-1">
            {subtitle && (
              <p className="truncate text-[11px] font-bold uppercase tracking-wide text-accent">
                {subtitle}
              </p>
            )}
            {title && (
              <p className="truncate font-display text-base font-bold text-ink">{title}</p>
            )}
          </div>
        )}
        <div className="flex min-h-full flex-col justify-center py-3">{children}</div>
      </div>

      {/* Footer pinned to the bottom edge, above the home indicator. */}
      {footer && (
        <div
          className="border-t border-hairline px-4 pt-3"
          style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.9rem)" }}
        >
          {footer}
        </div>
      )}
    </div>,
    document.body,
  );
}
