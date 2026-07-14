"use client";

import { useEffect, useState, type ReactNode } from "react";

// Renders children only after the browser goes idle (or a short timeout),
// keeping non-critical widgets off the critical path so their JS doesn't
// inflate initial script-evaluation / TBT. Use for fixed/modal UI that has no
// layout impact when it appears a beat late (chat FAB, exit-intent, etc.).
export function DeferMount({
  children,
  timeout = 2500,
}: {
  children: ReactNode;
  timeout?: number;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setShow(true), { timeout });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(() => setShow(true), 1200);
    return () => window.clearTimeout(t);
  }, [timeout]);
  return show ? <>{children}</> : null;
}
