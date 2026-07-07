"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const NAV = [
  { href: "/o-level", label: "O-Level" },
  { href: "/na-level", label: "N(A)-Level" },
  { href: "/bundles", label: "Bundles" },
  { href: "/accuracy", label: "Accuracy" },
  { href: "/faq", label: "FAQ" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span aria-hidden="true" className="flex items-end gap-0.5">
        <span className="h-2 w-1.5 rounded-sm bg-heat-2" />
        <span className="h-3 w-1.5 rounded-sm bg-heat-3" />
        <span className="h-4 w-1.5 rounded-sm bg-heat-5" />
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-trust">
        StudyLah!
      </span>
    </Link>
  );
}

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-trust/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-trust-soft ${
                pathname.startsWith(item.href) ? "text-trust" : "text-body"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/free-heatmap"
            className="hidden rounded-md px-3 py-1.5 text-sm font-medium text-signal-deep hover:bg-signal/10 sm:block"
          >
            Free heatmap
          </Link>
          <Link
            href="/cart"
            className="relative rounded-md bg-trust px-3.5 py-1.5 text-sm font-medium text-white hover:bg-trust-deep"
          >
            Cart
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-signal px-1 font-mono text-xs font-medium text-white">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-trust md:hidden"
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
          className="border-t border-trust/10 bg-paper px-4 py-2 md:hidden"
        >
          {[...NAV, { href: "/free-heatmap", label: "Free heatmap" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm font-medium text-ink hover:bg-trust-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
