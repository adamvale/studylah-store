"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

// First-party, anonymous visitor-journey tracker. Assigns a persistent random
// visitorId (localStorage) and a per-visit sessionId (sessionStorage), records
// pageviews on route change and clicks (delegated), and flushes batches to
// /api/track on an interval + on page hide. No PII, admin pages are excluded.
const VISITOR_KEY = "sl_vid";
const SESSION_KEY = "sl_sid";

function randomId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
  }
}

// A short, human-readable label for a clicked element.
function labelFor(el: HTMLElement): string | null {
  const tracked = el.closest<HTMLElement>("[data-track]");
  if (tracked?.dataset.track) return tracked.dataset.track.slice(0, 120);
  const target = el.closest<HTMLElement>("a,button,[role='button']");
  if (!target) return null;
  const aria = target.getAttribute("aria-label");
  const text = (aria || target.textContent || "").replace(/\s+/g, " ").trim();
  const tag = target.tagName.toLowerCase();
  const label = text ? `${tag}: ${text}` : tag;
  return label.slice(0, 120);
}

type QueuedEvent = { type: "pageview" | "click"; path: string; label?: string };

export function VisitorTracker() {
  const pathname = usePathname() ?? "/";
  const skip = pathname.startsWith("/admin");

  const ids = useRef<{ visitorId: string; sessionId: string } | null>(null);
  const initPayload = useRef<Record<string, unknown> | null>(null);
  const queue = useRef<QueuedEvent[]>([]);
  const lastPath = useRef<string | null>(null);

  const flush = useCallback((useBeacon = false) => {
    if (!ids.current) return;
    const events = queue.current;
    const init = initPayload.current;
    if (events.length === 0 && !init) return;
    queue.current = [];
    initPayload.current = null;
    const payload = JSON.stringify({
      sessionId: ids.current.sessionId,
      visitorId: ids.current.visitorId,
      init,
      events,
    });
    try {
      if (useBeacon && navigator.sendBeacon) {
        navigator.sendBeacon("/api/track", new Blob([payload], { type: "application/json" }));
      } else {
        void fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      /* ignore */
    }
  }, []);

  // One-time id + session setup, and the first pageview.
  useEffect(() => {
    if (skip || ids.current) return;
    let visitorId: string | null = null;
    try {
      visitorId = localStorage.getItem(VISITOR_KEY);
    } catch {
      /* private mode: fall through, tracking becomes best-effort */
    }
    const isReturning = !!visitorId;
    if (!visitorId) {
      visitorId = randomId();
      try {
        localStorage.setItem(VISITOR_KEY, visitorId);
      } catch {
        /* ignore */
      }
    }
    let sessionId: string | null = null;
    try {
      sessionId = sessionStorage.getItem(SESSION_KEY);
    } catch {
      /* ignore */
    }
    if (!sessionId) {
      sessionId = randomId();
      try {
        sessionStorage.setItem(SESSION_KEY, sessionId);
      } catch {
        /* ignore */
      }
      const url = new URL(window.location.href);
      let referrer: string | null = null;
      try {
        referrer = document.referrer ? new URL(document.referrer).hostname : null;
      } catch {
        referrer = null;
      }
      initPayload.current = {
        landingPath: pathname,
        referrer,
        utmSource: url.searchParams.get("utm_source"),
        utmMedium: url.searchParams.get("utm_medium"),
        utmCampaign: url.searchParams.get("utm_campaign"),
        device: window.matchMedia("(max-width: 640px)").matches ? "mobile" : "desktop",
        isReturning,
      };
    }
    ids.current = { visitorId, sessionId };
    // Seed the first pageview here (the pathname effect only fires on change).
    lastPath.current = pathname;
    queue.current.push({ type: "pageview", path: pathname });
  }, [skip, pathname]);

  // Pageview on subsequent route changes.
  useEffect(() => {
    if (skip || !ids.current) return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    queue.current.push({ type: "pageview", path: pathname });
  }, [skip, pathname]);

  // Delegated click capture + flush loop.
  useEffect(() => {
    if (skip) return;
    const onClick = (e: MouseEvent) => {
      if (!ids.current) return;
      const el = e.target as HTMLElement | null;
      if (!el) return;
      queue.current.push({
        type: "click",
        path: window.location.pathname,
        label: labelFor(el) ?? undefined,
      });
    };
    document.addEventListener("click", onClick, { capture: true });

    const interval = window.setInterval(() => flush(false), 5000);
    const onHide = () => flush(true);
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flush(true);
    };
    window.addEventListener("pagehide", onHide);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.clearInterval(interval);
      window.removeEventListener("pagehide", onHide);
      document.removeEventListener("visibilitychange", onVisibility);
      flush(true);
    };
  }, [skip, flush]);

  return null;
}
