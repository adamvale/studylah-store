"use client";

import { useEffect, useState } from "react";
import { guguSay } from "@/lib/gugu-bus";

function beacon(type: string, attemptId: string, meta?: string) {
  void fetch("/api/diagnostic/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, attemptId, meta }),
    keepalive: true,
  }).catch(() => {});
}

export function CtaLink({
  attemptId,
  product,
  href,
  children,
}: {
  attemptId: string;
  product: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={() => beacon("cta_clicked", attemptId, product)}
      className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

export function ResendButton({ attemptId }: { attemptId: string }) {
  const [state, setState] = useState<"idle" | "busy" | "sent" | "error">("idle");
  async function resend() {
    setState("busy");
    try {
      const res = await fetch("/api/diagnostic/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }
  return (
    <button
      type="button"
      onClick={() => void resend()}
      disabled={state === "busy" || state === "sent"}
      className="text-xs font-medium text-accent underline disabled:opacity-60"
    >
      {state === "sent"
        ? "Sent, check your inbox"
        : state === "busy"
          ? "Sending…"
          : state === "error"
            ? "Try again in a minute"
            : "Re-send my results email"}
    </button>
  );
}

export function ShareRow({
  attemptId,
  shareUrl,
  message,
}: {
  attemptId: string;
  shareUrl: string;
  message: string;
}) {
  const [copied, setCopied] = useState(false);
  const full = `${message} ${shareUrl}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this:", full);
    }
    beacon("result_shared", attemptId, "copy");
  }

  async function nativeShare() {
    beacon("result_shared", attemptId, "native");
    try {
      await navigator.share({ text: message, url: shareUrl });
    } catch {
      /* user dismissed */
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={`https://wa.me/?text=${encodeURIComponent(full)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => beacon("result_shared", attemptId, "whatsapp")}
        className="rounded-lg bg-guarantee px-4 py-2 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
      >
        WhatsApp
      </a>
      <a
        href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => beacon("result_shared", attemptId, "telegram")}
        className="rounded-lg bg-signal px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
      >
        Telegram
      </a>
      <button
        type="button"
        onClick={() => void copy()}
        className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-ink hover:border-accent"
      >
        {copied ? "Copied!" : "Copy link"}
      </button>
      {/* Instagram Stories / TikTok have no web share intents, so we open the
          share-card IMAGE (the route's opengraph-image). The og-image path must
          be appended to the PATH, not after the query string, otherwise the
          browser fetches the page HTML instead of the PNG. On mobile it opens
          the image to long-press-save; on desktop `download` saves it. */}
      <a
        href={`${shareUrl.split("?")[0]}/opengraph-image`}
        target="_blank"
        rel="noopener noreferrer"
        download="studylah-result-card.png"
        onClick={() => beacon("result_shared", attemptId, "download-card")}
        className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-ink hover:border-accent"
      >
        Card for IG/TikTok
      </a>
      <button
        type="button"
        onClick={() => void nativeShare()}
        className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-ink hover:border-accent"
      >
        More…
      </button>
    </div>
  );
}

// Once the student has revealed their result, Gugu carries on with the
// performance-based line (the neutral "pop your email in" fired on the quiz).
const BAND_CHEER: Record<"danger" | "warning" | "pass", string> = {
  pass: "Sharp work! 🎯 You're on top of these. Keep that edge.",
  warning: "So close! 💡 A few marks slipping, see exactly where below.",
  danger: "Big marks to win back 💪 The fix plan below shows how.",
};

export function GuguResultCheer({ band }: { band: "danger" | "warning" | "pass" }) {
  useEffect(() => {
    guguSay(BAND_CHEER[band], { hold: false });
  }, [band]);
  return null;
}

export function ResultsViewedBeacon({ attemptId }: { attemptId: string }) {
  // Fire-once view event; module state resets per navigation which is fine.
  if (typeof window !== "undefined") {
    const key = `diag-viewed-${attemptId}`;
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      beacon("results_viewed", attemptId);
    }
  }
  return null;
}
