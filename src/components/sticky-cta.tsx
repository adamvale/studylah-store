"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// A persistent call-to-action that slides up once the visitor scrolls past the
// hero. Landing-page staple: keeps the offer one tap away no matter how far
// they read.
export function StickyCta({ label = "Find your subject's forecast" }: { label?: string }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-night/95 backdrop-blur transition-transform duration-300 ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <p className="hidden text-sm font-medium text-white sm:block">
          Know what&apos;s likely before you sit the paper.
        </p>
        <Link
          href="/o-level"
          className="w-full rounded-lg bg-accent px-5 py-3 text-center text-sm font-bold text-night transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
