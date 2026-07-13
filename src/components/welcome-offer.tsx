"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// Leaver-recovery: most visitors never buy on visit 1. This is the second
// touch, an honest, low-pressure exit-intent card that offers the two things
// most likely to bring a hesitant visitor back: the free diagnostic (no-risk
// wedge) and a real welcome discount (STUDYLAH10, seeded in the DB).
//
// It shows AT MOST once, then remembers the dismissal forever (localStorage),
// so it never nags. No fake countdown, no dark patterns, the store is
// minors-facing. Suppressed inside the native game shell and on the pages where
// the visitor is already converting (cart/checkout) or already being pitched
// the free check (diagnostic).

const STORAGE_KEY = "studylah_welcome_v1";
const WELCOME_CODE = "STUDYLAH10";
const SUPPRESSED_PREFIXES = ["/cart", "/checkout", "/diagnostic", "/account", "/admin"];
// Mobile has no reliable exit-intent event; fall back to a gentle time delay.
const MOBILE_FALLBACK_MS = 25_000;

export function WelcomeOffer() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const suppressed =
    SUPPRESSED_PREFIXES.some((p) => pathname.startsWith(p)) ||
    (typeof document !== "undefined" && "native" in document.documentElement.dataset);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "dismissed");
    } catch {
      /* private mode, fine, it just won't persist */
    }
  }, []);

  useEffect(() => {
    if (suppressed) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }

    let armed = true;
    const trigger = () => {
      if (!armed) return;
      armed = false;
      setOpen(true);
    };

    // Desktop: cursor leaves through the top of the viewport → likely leaving.
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };
    document.addEventListener("mouseout", onMouseOut);
    const timer = window.setTimeout(trigger, MOBILE_FALLBACK_MS);

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.clearTimeout(timer);
    };
  }, [suppressed]);

  // Close the modal on route change without re-arming it for the session.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (!open) return null;

  const copyCode = () => {
    navigator.clipboard?.writeText(WELCOME_CODE).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => {},
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-offer-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 print:hidden"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={dismiss}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-2xl border border-accent/40 bg-night-2 p-6 shadow-2xl">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-md p-1.5 text-cloud hover:bg-surface hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <p className="font-mono text-xs font-medium uppercase tracking-wide text-teal">
          Before you go, 
        </p>
        <h2 id="welcome-offer-title" className="mt-2 font-display text-2xl font-black text-white">
          Not sure yet? Start free.
        </h2>
        <p className="mt-2 text-sm text-cloud">
          See exactly which topics would cost you marks on your 2026 paper, 10
          questions, about 7 minutes, instant score and worked solutions. No
          card.
        </p>

        <Link
          href="/diagnostic"
          onClick={dismiss}
          className="btn-pixel mt-5 block rounded bg-accent px-5 py-3 text-center text-sm font-bold text-night"
        >
          Predict my mark, free →
        </Link>

        <div className="mt-5 rounded-xl border border-hairline bg-surface p-4">
          <p className="text-sm text-cloud">
            Ready to buy? Here&apos;s{" "}
            <span className="font-bold text-accent">10% off your first pack.</span>
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <code className="flex-1 rounded-lg border border-dashed border-accent/50 bg-night px-3 py-2 text-center font-mono text-base font-bold tracking-widest text-accent">
              {WELCOME_CODE}
            </code>
            <button
              type="button"
              onClick={copyCode}
              className="shrink-0 rounded-lg border border-hairline px-3 py-2 text-xs font-medium text-white hover:border-accent"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
          <Link
            href="/subjects"
            onClick={dismiss}
            className="mt-2.5 inline-block text-xs font-medium text-accent hover:underline"
          >
            Browse subjects and apply it at checkout →
          </Link>
        </div>

        <button
          type="button"
          onClick={dismiss}
          className="mt-4 block w-full text-center text-xs text-body underline hover:text-cloud"
        >
          No thanks, I&apos;m just looking
        </button>
      </div>
    </div>
  );
}
