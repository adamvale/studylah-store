// A tiny window-event bus so any page can make Gugu's floating bubble speak.
// Gugu lives in the site chrome (persists across route changes), while callers
// like the diagnostic quiz live in the page tree, a CustomEvent decouples them
// without a shared provider. Client-only; a no-op during SSR.

export const GUGU_SAY_EVENT = "gugu:say";

export interface GuguSayDetail {
  text: string;
  // hold = pin this message and stop the attract rotation until replaced or
  // cleared (used for "Shh… 🙊" while a quiz is in progress). Otherwise the
  // message shows for a few seconds, then the usual rotation resumes.
  hold?: boolean;
}

export function guguSay(text: string, opts: { hold?: boolean } = {}): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<GuguSayDetail>(GUGU_SAY_EVENT, {
      detail: { text, hold: opts.hold ?? false },
    })
  );
}
