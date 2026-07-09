import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAdminToken, ADMIN_COOKIE } from "@/lib/server/admin-session";
import { isMaintenanceOn } from "@/lib/server/maintenance";

// Runs before every storefront page render (Next 16 proxy, Node.js runtime).
// When maintenance mode is on, the public sees the maintenance screen while
// logged-in admins pass through to preview production. Everything is wrapped so
// a fault here can never take the live site down — it fails OPEN.
export function proxy(request: NextRequest) {
  try {
    if (!isMaintenanceOn()) return NextResponse.next();

    // Admins bypass the gate: they can verify the real site during maintenance.
    if (verifyAdminToken(request.cookies.get(ADMIN_COOKIE)?.value)) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    const res = NextResponse.rewrite(url);
    res.headers.set("Cache-Control", "no-store");
    res.headers.set("Retry-After", "3600");
    return res;
  } catch {
    // Never let a bug in the gate break the site.
    return NextResponse.next();
  }
}

export const config = {
  // Run on storefront PAGES only. Exclude APIs (Stripe webhook, downloads),
  // Next internals, the admin panel (so it stays reachable to toggle off),
  // customer download pages, the maintenance page itself, and — crucially —
  // any static file (anything with a dot, e.g. /studylah-logo.png). Without the
  // dot exclusion, maintenance mode rewrote the logo to HTML and it broke.
  matcher: [
    "/((?!api|_next|admin|downloads|maintenance|.*\\.).*)",
  ],
};
