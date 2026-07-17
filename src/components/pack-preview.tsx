"use client";

import { useState } from "react";
import Image from "next/image";
import type { PackPreview as PackPreviewData } from "@/lib/pack-previews";

// A flippable "see inside" viewer for a subject's pack. Shows a few real pages
// per product with the sellable content blurred out, so a buyer can feel what
// they're getting without leaking the answers. Pure client-side, images only,
// no PDF ever reaches the browser.
//
// variant="full"  the subject-page section (heading + tabs + book + rail).
// variant="hero"  the compact homepage showcase (tabs + book + caption only),
//                 sized to drop into the hero's right column.
export function PackPreview({
  preview,
  subjectName,
  tiersHref = "#tiers",
  variant = "full",
}: {
  preview: PackPreviewData;
  subjectName: string;
  tiersHref?: string;
  variant?: "full" | "hero";
}) {
  const [product, setProduct] = useState(0);
  const [page, setPage] = useState(0);
  // Bumped on every turn so the CSS flip animation replays; sign encodes
  // direction (>0 forward, <0 back).
  const [flip, setFlip] = useState(1);

  const hero = variant === "hero";
  const current = preview.products[product];
  const spread = current.pages[page];
  const lastPage = current.pages.length - 1;

  function goProduct(i: number) {
    if (i === product) return;
    setProduct(i);
    setPage(0);
    setFlip((f) => (f > 0 ? f + 1 : -f + 1));
  }

  function turn(delta: number) {
    const next = page + delta;
    if (next < 0 || next > lastPage) return;
    setPage(next);
    setFlip(delta > 0 ? Math.abs(flip) + 1 : -(Math.abs(flip) + 1));
  }

  const tabs = (
    <div className={`flex flex-wrap gap-2 ${hero ? "justify-center" : ""}`}>
      {preview.products.map((p, i) => (
        <button
          key={p.key}
          type="button"
          onClick={() => goProduct(i)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${
            i === product
              ? "bg-accent text-night"
              : "border border-hairline bg-surface text-body hover:text-ink"
          }`}
        >
          {p.label}
        </button>
      ))}
    </div>
  );

  const book = (
    <div className="relative aspect-[800/1131] overflow-hidden rounded-xl border border-hairline bg-white shadow-2xl">
      <div
        key={flip}
        className={`absolute inset-0 ${flip > 0 ? "pp-next" : "pp-prev"}`}
      >
        <Image
          src={spread.src}
          alt={`${current.label}, ${spread.caption}`}
          fill
          sizes="(max-width: 640px) 90vw, 384px"
          className="object-contain"
          priority={product === 0 && page === 0}
        />
      </div>

      {/* Lock chip on blurred pages */}
      {spread.locked && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-night/80 px-2.5 py-1 font-mono text-[11px] font-medium text-white backdrop-blur">
          Blurred, unlock to read
        </span>
      )}

      {/* Tap zones / arrows */}
      {page > 0 && (
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => turn(-1)}
          className="group absolute inset-y-0 left-0 z-10 flex w-1/4 items-center justify-start pl-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-night/60 text-lg text-white opacity-0 transition-opacity group-hover:opacity-100">
            ‹
          </span>
        </button>
      )}
      {page < lastPage && (
        <button
          type="button"
          aria-label="Next page"
          onClick={() => turn(1)}
          className="group absolute inset-y-0 right-0 z-10 flex w-1/4 items-center justify-end pr-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-night/60 text-lg text-white opacity-0 transition-opacity group-hover:opacity-100">
            ›
          </span>
        </button>
      )}
    </div>
  );

  const dots = (
    <div className="mt-3 flex items-center justify-center gap-2">
      {current.pages.map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Page ${i + 1}`}
          onClick={() => {
            if (i !== page) turn(i - page);
          }}
          className={`h-2 rounded-full transition-all ${
            i === page ? "w-5 bg-accent" : "w-2 bg-hairline hover:bg-body"
          }`}
        />
      ))}
    </div>
  );

  // Compact homepage showcase: sits in the hero's right column in place of the
  // forecast card. No rail, no big heading, its own eyebrow + caption.
  if (hero) {
    return (
      <div className="w-full">
        <p className="text-center font-mono text-xs font-medium uppercase tracking-wide text-teal">
          See inside · real pages, blurred
        </p>
        <div className="mt-3">{tabs}</div>
        <div className="glow-hero mx-auto mt-4 w-full max-w-[17rem] rounded-xl">
          {book}
        </div>
        {dots}
        <p className="mt-2 text-center text-xs text-cloud">{spread.caption}</p>
      </div>
    );
  }

  return (
    <section aria-labelledby="peek-heading" className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-wide text-teal">
            See inside
          </p>
          <h2
            id="peek-heading"
            className="mt-1 font-display text-2xl font-black text-ink sm:text-3xl"
          >
            Peek inside the {subjectName} pack
          </h2>
          <p className="mt-1 max-w-xl text-sm text-body">
            Real pages from all four PDFs. The 2026 calls, questions and answer
            keys are blurred here, they arrive sharp the moment you unlock.
          </p>
        </div>
      </div>

      <div className="mt-5">{tabs}</div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="mx-auto w-full max-w-sm">
          {book}
          {dots}
          <p className="mt-2 text-center text-xs text-body">{spread.caption}</p>
        </div>

        {/* Rail */}
        <aside className="flex flex-col justify-center rounded-2xl border border-hairline bg-surface p-5">
          <p className="font-mono text-xs font-medium text-teal">
            {current.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-body">
            This is one of the four PDFs in the pack. Flip through the pages, then
            unlock the full, un-blurred set, worked answers and all.
          </p>
          <a
            href={tiersHref}
            className="cta-sheen mt-4 inline-block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
          >
            Unlock the full pack →
          </a>
          <p className="mt-3 text-center font-mono text-[11px] text-body">
            Money-back guarantee
          </p>
        </aside>
      </div>
    </section>
  );
}
