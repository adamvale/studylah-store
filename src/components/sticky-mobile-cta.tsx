"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNativePlatform } from "@/lib/native";

// Persistent mobile-only action bar for the storefront. Paid traffic is mobile
// first, so a primary CTA that follows the scroll recovers the taps a
// scrolled-past hero button loses. Hidden on desktop, in the native app, and on
// in-funnel routes where the visitor is already converting (cart, checkout,
// account, the diagnostic itself).
const HIDE_ON = ["/cart", "/checkout", "/account", "/diagnostic", "/downloads"];
// Subject detail pages carry their own "Get Master" sticky bar, so the global
// bar must stand down there to avoid two stacked bottom bars.
const SUBJECT_DETAIL = /^\/(o-level|na-level|nt-level)\/[^/]+$/;

export function StickyMobileCta() {
  const pathname = usePathname() ?? "";
  const native = useNativePlatform();
  if (native) return null;
  if (HIDE_ON.some((p) => pathname.startsWith(p))) return null;
  if (SUBJECT_DETAIL.test(pathname)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-night-2/95 px-3 pb-[calc(0.55rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur sm:hidden print:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <Link
          href="/diagnostic"
          className="flex-1 rounded-lg bg-accent px-3 py-3 text-center text-sm font-bold text-night"
        >
          Predict my mark, free
        </Link>
        <Link
          href="/subjects"
          className="rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white"
        >
          Shop
        </Link>
      </div>
    </div>
  );
}
