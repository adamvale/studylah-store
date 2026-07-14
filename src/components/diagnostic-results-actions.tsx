"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { guguSay } from "@/lib/gugu-bus";
import { useCart } from "@/lib/cart-context";
import type { Level } from "@/lib/catalogue";
import { trackLead, trackAddToCart } from "@/components/analytics";

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
      className="inline-block rounded-lg border border-hairline px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent"
    >
      {children}
    </a>
  );
}

// One-tap path from the free result straight to a filled cart on the
// recommended Master tier, no detour through the subject page to re-decide.
// Master is the default/best-value tier; "compare tiers" stays as the escape
// hatch for shoppers who want the full grid.
export function AddMasterToCart({
  attemptId,
  level,
  slug,
  subjectName,
  priceSgd,
}: {
  attemptId: string;
  level: Level;
  slug: string;
  subjectName: string;
  priceSgd: number;
}) {
  const { addItem } = useCart();
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  function go() {
    if (busy) return;
    setBusy(true);
    addItem({ level, subjectSlug: slug, tier: "master" });
    beacon("cta_clicked", attemptId, "add_master");
    trackAddToCart(priceSgd);
    router.push("/cart");
  }
  return (
    <button
      type="button"
      onClick={go}
      disabled={busy}
      className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5 disabled:opacity-70"
    >
      {busy ? "Adding…" : `Add ${subjectName} Master to cart →`}
    </button>
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

// Once the student has revealed their result, Gugu carries on with a tailored,
// sales-focused line and an offer to drop the subject's Master pack in the cart.
// COMPLIANCE: never promise or imply a grade/result. We frame it as winnable
// marks, highest-chance topics and protecting an edge, never "will improve your
// grade".
export function GuguResultCheer({
  subjectName,
  level,
  slug,
  topGrade,
}: {
  subjectName: string;
  level: string;
  slug: string;
  // True only for the very top band (A1–A2 / N(A) Grade 1–2).
  topGrade: boolean;
}) {
  useEffect(() => {
    const text = topGrade
      ? `Sharp work! 🎯 Now the trick is keeping that edge, the paper only rewards the topics that actually turn up, and one careless slip can cost the top band. The ${subjectName} pack keeps you drilling the most-likely topics and rehearsing under time. Shall I add ${subjectName} Master to your cart?`
      : `Those marks are winnable! 💪 The ${subjectName} Forecast pack points you straight at the highest-chance topics, so your last weeks land where the paper actually pays. Shall I add ${subjectName} Master to your cart?`;
    guguSay(text, { cta: { level, slug, subjectName } });
  }, [subjectName, level, slug, topGrade]);
  return null;
}

export function ResultsViewedBeacon({ attemptId }: { attemptId: string }) {
  // Fire-once view event; module state resets per navigation which is fine.
  if (typeof window !== "undefined") {
    const key = `diag-viewed-${attemptId}`;
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      beacon("results_viewed", attemptId);
      trackLead(); // ad-pixel Lead conversion, deduped by the same session key
    }
  }
  return null;
}
