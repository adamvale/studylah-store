"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useNativePlatform } from "@/lib/native";

// Slim, dismissible new-visitor promo strip above the header. Surfaces the
// first-order code on-site (it otherwise lived only in emails + the cart) — a
// direct lever for turning cold ad clicks into first purchases. Scrolls away
// above the sticky header; self-hides in the native app, at checkout/account,
// and once dismissed (device-local).
// It also carries the live days-to-paper count: the exam calendar is the one
// piece of urgency that is always true, so it rides the most-seen pixel row
// on the site (war plan weapon 2, the real countdown).
const HIDE_ON = ["/checkout", "/account", "/admin"];

// First written papers open the season around 1 Oct 2026 (SEAB timetable).
const SEASON_START = Date.UTC(2026, 9, 1);
const DAY_MS = 24 * 60 * 60 * 1000;
const noopSubscribe = () => () => {};
const daysLeft = () => Math.ceil((SEASON_START - Date.now()) / DAY_MS);

export function PromoBar() {
  const pathname = usePathname() ?? "";
  const native = useNativePlatform();
  // Computed in the browser so statically generated pages never bake in a
  // stale number; the server snapshot renders the promo line alone.
  const days = useSyncExternalStore(noopSubscribe, daysLeft, () => null);
  // Shown by default so SSR and first client render match; an effect hides it
  // for visitors who already dismissed it.
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("studylah-promo-dismissed") === "1") {
        setDismissed(true);
      }
    } catch {
      /* private mode: leave it showing */
    }
  }, []);

  if (native) return null;
  if (HIDE_ON.some((p) => pathname.startsWith(p))) return null;
  if (dismissed) return null;

  function close() {
    setDismissed(true);
    try {
      localStorage.setItem("studylah-promo-dismissed", "1");
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="z-40 bg-accent text-night print:hidden">
      {/* Flex row (not absolute overlay) so the dismiss button is a real,
          well-spaced 40px tap target next to the link. */}
      <div className="mx-auto flex max-w-4xl items-center gap-1 px-2">
        <Link
          href="/subjects"
          className="flex-1 py-2 text-center text-xs font-semibold leading-snug hover:underline sm:text-sm"
        >
          {days !== null && days > 0 && (
            <span className="whitespace-nowrap">
              <span className="font-mono font-bold">{days}</span> days to the
              first 2026 paper
              <span aria-hidden="true" className="mx-1.5 opacity-50">·</span>
            </span>
          )}
          <span className="whitespace-nowrap">10% off your first order</span>{" "}
          with code <span className="font-mono font-bold">STUDYLAH10</span>{" "}
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <button
          type="button"
          onClick={close}
          aria-label="Dismiss offer"
          className="grid h-10 w-10 shrink-0 place-items-center rounded text-night/70 transition-colors hover:bg-black/5 hover:text-night"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
