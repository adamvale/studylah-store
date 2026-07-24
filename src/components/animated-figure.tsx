"use client";

import { useEffect, useRef, useState } from "react";
import { onSpeakProgress } from "@/lib/speak";
import { FigureZoom } from "@/components/figure-zoom";

// A diagram that draws itself while Gugu talks, instead of appearing finished
// before she has said what it shows.
//
// The figure is inlined rather than loaded through <img> because an <img> is a
// closed box: its CSS animations run on their own clock and cannot be told to
// wait. Inline, each <g data-step> is an element we can hold back until she has
// actually reached it. That is the whole reason for the change.
//
// What drives it:
//   - her real position in the audio (see onSpeakProgress), so the drawing
//     keeps her pace, pauses when she pauses, and lands finished as she stops
//   - a plain timer when there is no audio to follow (device voice, muted), so
//     the figure still builds rather than jumping to the end
//   - nothing at all under prefers-reduced-motion, or before JS runs: the
//     finished diagram, immediately
//
// Steps are stamped into the files by scripts/stamp-svg-steps.mjs from the
// section comments their authors already wrote, so the order is the order they
// meant to draw in.

// How a step earns its moment. A step can name the words it belongs to:
//
//   <g data-step="2" data-cue="in the top half">
//
// and it waits until she reaches those words, found by where they fall in the
// line. Without a cue the steps simply share the line evenly, which is right
// far more often than it sounds: these figures were drawn in the order the
// narration describes them.
// Reveal order is the data-step VALUE, not the element's position in the file.
// The two differ on purpose: a caption is often authored before the shape it
// labels, and moving it would change what paints over what, so the stamper
// renumbers instead of reordering.
function stepsOf(svg: SVGSVGElement): { step: number; els: Element[] }[] {
  const by = new Map<number, Element[]>();
  for (const el of Array.from(svg.querySelectorAll("[data-step]"))) {
    const n = Number(el.getAttribute("data-step"));
    if (!Number.isFinite(n)) continue;
    const list = by.get(n);
    if (list) list.push(el);
    else by.set(n, [el]);
  }
  return [...by.entries()].sort((a, b) => a[0] - b[0]).map(([step, els]) => ({ step, els }));
}

function cueFractions(steps: { step: number; els: Element[] }[], spoken: string): number[] {
  const n = steps.length;
  const hay = spoken.toLowerCase();
  return steps.map(({ els }, i) => {
    const cue = els.map((e) => e.getAttribute("data-cue")).find(Boolean);
    if (cue && hay.length) {
      const at = hay.indexOf(cue.toLowerCase());
      if (at >= 0) return at / hay.length;
    }
    return i / n; // even share, first step present from the start
  });
}

const FALLBACK_STEP_MS = 900;

export function AnimatedFigure({ src }: { src: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(false);
  // Kept WITH the src it was fetched for. Deriving the current markup rather
  // than clearing it on every src change avoids an extra render, and means a
  // card can never show the previous card's diagram while the next one loads.
  const [loaded, setLoaded] = useState<{ src: string; markup: string } | null>(null);
  const markup = loaded?.src === src ? loaded.markup : null;

  // Load the figure's markup so it can be inlined.
  useEffect(() => {
    let live = true;
    fetch(src)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
      .then((t) => {
        if (live && t.includes("<svg")) setLoaded({ src, markup: t });
      })
      .catch(() => {
        /* the plain <img> below is the fallback */
      });
    return () => {
      live = false;
    };
  }, [src]);

  // Drive the build.
  useEffect(() => {
    const host = hostRef.current;
    if (!host || !markup) return;
    const svg = host.querySelector("svg");
    if (!svg) return;

    const steps = stepsOf(svg);
    if (steps.length < 2) return; // a one-piece figure has nothing to build

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // finished figure, no motion, as asked

    const all = steps.flatMap((s) => s.els) as (Element & ElementCSSInlineStyle)[];
    let shown = -1;
    const show = (count: number) => {
      if (count === shown) return;
      shown = count;
      steps.forEach(({ els }, i) => {
        for (const el of els as (Element & ElementCSSInlineStyle)[]) {
          el.style.opacity = i < count ? "1" : "0";
        }
      });
    };

    // Start hidden. Done here rather than in CSS so a figure still renders in
    // full if this effect never runs.
    for (const el of all) {
      el.style.transition = "opacity 600ms ease-out";
      el.style.opacity = "0";
    }
    show(0);

    let cues: number[] | null = null;
    let timer: ReturnType<typeof setInterval> | null = null;

    // No voice to follow: build on a gentle timer instead of snapping to the end.
    const startTimed = () => {
      if (timer) return;
      let k = 0;
      show(++k);
      timer = setInterval(() => {
        show(++k);
        if (k >= steps.length && timer) {
          clearInterval(timer);
          timer = null;
        }
      }, FALLBACK_STEP_MS);
    };

    const stopTimed = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const off = onSpeakProgress(({ text, progress }) => {
      if (progress < 0) {
        startTimed(); // device voice: no timeline to follow
        return;
      }
      stopTimed();
      cues ??= cueFractions(steps, text);
      let count = 0;
      for (const f of cues) if (progress >= f) count++;
      show(Math.max(count, 1)); // once she is talking, something is on screen
    });

    // She may not narrate this card at all. Give her a moment to start, then
    // build it anyway rather than leaving a blank space.
    const grace = setTimeout(() => {
      if (shown <= 0) startTimed();
    }, 500);

    return () => {
      off();
      stopTimed();
      clearTimeout(grace);
    };
  }, [markup]);

  return (
    <>
      {/* Tap to open it full screen and pinch. The zoom shows the finished
          diagram: there it is being read, not watched. */}
      <button
        type="button"
        aria-label="Open the diagram to zoom in"
        onClick={() => setZoom(true)}
        className="mb-3 block w-full"
      >
        {markup ? (
          <div
            ref={hostRef}
            className="sl-figure block w-full"
            // Our own static figures from public/physics/images, listed by
            // physicsFigureSrc. Nothing here is user-supplied.
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        ) : (
          // Until the markup arrives (and if it never does), the plain image.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt=""
            className="block h-auto w-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
      </button>
      {zoom && <FigureZoom src={src} onClose={() => setZoom(false)} />}
    </>
  );
}
