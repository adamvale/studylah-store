"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useNativePlatform } from "@/lib/native";

// Slim, dismissible new-visitor promo strip above the header. Surfaces the
// first-order code on-site (it otherwise lived only in emails + the cart) — a
// direct lever for turning cold ad clicks into first purchases. Scrolls away
// above the sticky header; self-hides in the native app, at checkout/account,
// and once dismissed (device-local).
const HIDE_ON = ["/checkout", "/account", "/admin"];

export function PromoBar() {
  const pathname = usePathname() ?? "";
  const native = useNativePlatform();
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
    <div className="relative z-40 bg-accent text-night print:hidden">
      <Link
        href="/subjects"
        className="mx-auto flex max-w-6xl items-center justify-center px-9 py-2 text-center text-xs font-semibold hover:underline sm:text-sm"
      >
        New here? Use code{" "}
        <span className="mx-1 font-mono font-bold">STUDYLAH10</span> for 10% off
        your first order &rarr;
      </Link>
      <button
        type="button"
        onClick={close}
        aria-label="Dismiss offer"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-night/70 transition-colors hover:text-night"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M4 4l8 8M12 4l-8 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
