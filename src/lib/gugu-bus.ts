// A tiny window-event bus so any page can make Gugu's floating bubble speak.
// Gugu lives in the site chrome (persists across route changes), while callers
// like the diagnostic quiz live in the page tree, a CustomEvent decouples them
// without a shared provider. Client-only; a no-op during SSR.

export const GUGU_SAY_EVENT = "gugu:say";

// An optional add-to-cart offer attached to a Gugu message (used after a
// diagnostic result reveal): Gugu shows Yes/No buttons and can drop the
// subject's Master pack straight into the cart.
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

export function guguSay(
  text: string,
  opts: { hold?: boolean; cta?: GuguCta } = {}
): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<GuguSayDetail>(GUGU_SAY_EVENT, {
      detail: { text, hold: opts.hold ?? false, cta: opts.cta },
    })
  );
}
