// "See inside" previews: a handful of real pages from each product, with the
// sellable content (the 2026 calls, the answer keys, the questions) blurred
// out and a PREVIEW watermark baked in. The images live in
// public/previews/<level>/<slug>/ and are generated OFFLINE from the real
// PDFs (scripts/gen-pack-preview.py), never at request time, so the source
// PDFs are never shipped to the browser. Only add a subject here once its
// blurred previews have been rendered and checked by eye.

export interface PreviewSpread {
  /** Path under /public. */
  src: string;
  /** One line describing the page, shown under the book. */
  caption: string;
  /** Cover pages are shown sharp; content pages are blurred + locked. */
  locked: boolean;
}

export interface PreviewProduct {
  /** Catalogue product key, so the viewer can deep-link to the right tier. */
  key: "forecast" | "companion" | "vault" | "rehearsal";
  label: string;
  pages: PreviewSpread[];
}

export interface PackPreview {
  products: PreviewProduct[];
}

export const PACK_PREVIEWS: Record<string, PackPreview> = {
  "o-level/chemistry-pure": {
    products: [
      {
        key: "forecast",
        label: "Exam Forecast",
        pages: [
          {
            src: "/previews/o-level/chemistry-pure/forecast-1.jpg",
            caption: "The cover, 2026 Exam Intelligence Series",
            locked: false,
          },
          {
            src: "/previews/o-level/chemistry-pure/forecast-2.jpg",
            caption: "Contents, every topic tiered from Very High to Watch",
            locked: true,
          },
          {
            src: "/previews/o-level/chemistry-pure/forecast-3.jpg",
            caption: "The decade in data, ten years of papers mapped",
            locked: true,
          },
          {
            src: "/previews/o-level/chemistry-pure/forecast-4.jpg",
            caption: "Topic deep-dives, the 2026 call and the evidence behind it",
            locked: true,
          },
        ],
      },
      {
        key: "companion",
        label: "Paper 3 Practical Prediction",
        pages: [
          {
            src: "/previews/o-level/chemistry-pure/companion-1.jpg",
            caption: "The cover, a dedicated forecast for the practical",
            locked: false,
          },
          {
            src: "/previews/o-level/chemistry-pure/companion-2.jpg",
            caption: "Ten years of Paper 3, mapped and ranked",
            locked: true,
          },
          {
            src: "/previews/o-level/chemistry-pure/companion-3.jpg",
            caption: "Model full-credit exhibits and graphs",
            locked: true,
          },
        ],
      },
      {
        key: "vault",
        label: "Sure Questions Vault",
        pages: [
          {
            src: "/previews/o-level/chemistry-pure/vault-1.jpg",
            caption: "The cover, original questions weighted to the forecast",
            locked: false,
          },
          {
            src: "/previews/o-level/chemistry-pure/vault-2.jpg",
            caption: "Questions grouped by topic and forecast tier",
            locked: true,
          },
          {
            src: "/previews/o-level/chemistry-pure/vault-3.jpg",
            caption: "Every question with a full worked answer key",
            locked: true,
          },
        ],
      },
      {
        key: "rehearsal",
        label: "Final Rehearsal",
        pages: [
          {
            src: "/previews/o-level/chemistry-pure/rehearsal-1.jpg",
            caption: "The cover, a complete timed mock",
            locked: false,
          },
          {
            src: "/previews/o-level/chemistry-pure/rehearsal-2.jpg",
            caption: "A full candidate practice paper",
            locked: true,
          },
          {
            src: "/previews/o-level/chemistry-pure/rehearsal-3.jpg",
            caption: "Set in the exact 2026 paper format",
            locked: true,
          },
        ],
      },
    ],
  },
};

export function packPreviewFor(
  level: string,
  slug: string
): PackPreview | null {
  return PACK_PREVIEWS[`${level}/${slug}`] ?? null;
}
