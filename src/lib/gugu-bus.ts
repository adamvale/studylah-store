// A tiny window-event bus so any page can make Gugu's floating bubble speak.
// Gugu lives in the site chrome (persists across route changes), while callers
// like the diagnostic quiz live in the page tree, a CustomEvent decouples them
// without a shared provider. Client-only; a no-op during SSR.

export const GUGU_SAY_EVENT = "gugu:say";

// An optional add-to-cart offer attached to a Gugu message (used after a
// diagnostic result reveal): Gugu shows Yes/No buttons and can drop the
// subject's Ultra pack straight into the cart.
export interface GuguCta {
  level: string;
  slug: string;
  subjectName: string;
}

export interface GuguSayDetail {
  text: string;
  // hold = pin this message and stop the attract rotation until replaced or
  // cleared (used for "Shh…" while a quiz is in progress). Otherwise the
  // message shows for a few seconds, then the usual rotation resumes.
  hold?: boolean;
  cta?: GuguCta;
}

// Buffer the last message on `window` so a lazily-mounted Gugu (deferred for
// performance) can replay a message fired before it hydrated — otherwise the
// diagnostic-results cheer, dispatched on page load, would be lost.
declare global {
  interface Window {
    __guguPending?: GuguSayDetail & { at: number };
  }
}

export function guguSay(
  text: string,
  opts: { hold?: boolean; cta?: GuguCta } = {}
): void {
  if (typeof window === "undefined") return;
  const detail: GuguSayDetail = { text, hold: opts.hold ?? false, cta: opts.cta };
  window.__guguPending = { ...detail, at: Date.now() };
  window.dispatchEvent(new CustomEvent<GuguSayDetail>(GUGU_SAY_EVENT, { detail }));
}

// Consume a message dispatched shortly before the listener mounted (once).
export function consumePendingGuguSay(maxAgeMs = 10000): GuguSayDetail | null {
  if (typeof window === "undefined") return null;
  const p = window.__guguPending;
  if (p && Date.now() - p.at <= maxAgeMs) {
    window.__guguPending = undefined;
    return { text: p.text, hold: p.hold, cta: p.cta };
  }
  return null;
}
