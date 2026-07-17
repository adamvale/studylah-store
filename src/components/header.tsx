"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useHideCommerce } from "@/lib/native";

// Reads the non-sensitive "logged in" hint cookie set at sign-in, so the
// header can say "StudyLand" to returning students. Server snapshot = false
// keeps SSR and hydration consistent; the value settles on the client.
const noopSubscribe = () => () => {};
const hasAccountCookie = () => document.cookie.includes("studylah_acct=1");

function useSignedIn(): boolean {
  return useSyncExternalStore(noopSubscribe, hasAccountCookie, () => false);
}

const NAV = [
  { href: "/subjects", label: "Subjects" },
  { href: "/bundles", label: "Bundles" },
  { href: "/studyland", label: "StudyLand" },
  { href: "/fasttrack", label: "FastTrack" },
  { href: "/accuracy", label: "Accuracy" },
  { href: "/faq", label: "FAQ" },
];

function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center" aria-label="StudyLah home">
      <Image
        src="/studylah-logo.png"
        alt="StudyLah"
        width={286}
        height={97}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const signedIn = useSignedIn();
  const accountLabel = signedIn ? "StudyLand" : "Account";
  // Inside the native app the header is app chrome, not a storefront: no
  // marketing nav, no cart (Apple reader-app rule).
  const hideCommerce = useHideCommerce();

  // In the native app the account area IS the app, the game shell brings
  // its own HUD, so the site header disappears there entirely. On the few
  // reachable non-account pages (blog, legal) it stays as a slim bar whose
  // logo leads back to HQ, since a webview has no back button.
  if (hideCommerce && pathname.startsWith("/account")) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-night-2/70 backdrop-blur-xl print:hidden">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Logo href={hideCommerce ? "/account" : "/"} />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {(hideCommerce ? [] : NAV).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-surface ${
                pathname.startsWith(item.href) ? "text-accent" : "text-cloud"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {!hideCommerce && (
            <Link
              href="/diagnostic"
              className="hidden rounded-md px-3 py-1.5 text-sm font-medium text-cloud hover:bg-surface sm:block"
            >
              Predict your mark
            </Link>
          )}
          <Link
            href="/account"
            className="hidden rounded-md px-3 py-1.5 text-sm font-medium text-cloud hover:bg-surface sm:block"
          >
            {accountLabel}
          </Link>
          {!hideCommerce && (
            <Link
              href="/cart"
              className="relative rounded-md bg-violet px-3.5 py-1.5 text-sm font-medium text-white hover:opacity-90"
            >
              Cart
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 font-mono text-xs font-bold text-night">
                  {count}
                </span>
              )}
            </Link>
          )}
          <button
            type="button"
            className="rounded-md p-2 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-hairline bg-night-2/80 px-4 py-2 backdrop-blur-xl md:hidden"
        >
          {(hideCommerce
            ? [{ href: "/account", label: accountLabel }]
            : [
                ...NAV,
                { href: "/diagnostic", label: "Predict your mark" },
                { href: "/account", label: accountLabel },
              ]
          ).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm font-medium text-white hover:bg-surface"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
