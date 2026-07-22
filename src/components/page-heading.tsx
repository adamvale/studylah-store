"use client";

import { useState } from "react";

// One page title for every dashboard screen. The long description no longer
// eats the top of the screen: it hides behind a small "?" beside the title and
// pops up only when tapped. Pass the title as children (so gradient spans like
// <span className="sl-grad-text"> survive) and the blurb as `description`.

export function PageHeading({
  children,
  description,
  size = "lg",
}: {
  children: React.ReactNode;
  description?: string;
  // "lg" for a page's main <h1>, "sm" for a sub-view <h2> heading.
  size?: "lg" | "sm";
}) {
  const [open, setOpen] = useState(false);
  const Tag = size === "lg" ? "h1" : "h2";
  const titleClass =
    size === "lg"
      ? "font-display text-3xl font-extrabold tracking-tight text-ink"
      : "font-display text-2xl font-black text-ink";

  return (
    <div className="relative">
      <Tag className={`flex items-start gap-2 ${titleClass}`}>
        <span className="min-w-0">{children}</span>
        {description && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="What is this screen?"
            aria-expanded={open}
            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline text-sm font-bold text-body transition-colors hover:border-accent/60 hover:text-accent"
          >
            ?
          </button>
        )}
      </Tag>

      {open && description && (
        <>
          {/* Tap anywhere else to dismiss. */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />
          <div
            className="absolute left-0 top-full z-50 mt-2 max-w-xs rounded-2xl border border-hairline p-4 text-sm leading-relaxed text-body shadow-2xl"
            style={{ backgroundColor: "#160f36" }}
          >
            {description}
          </div>
        </>
      )}
    </div>
  );
}
