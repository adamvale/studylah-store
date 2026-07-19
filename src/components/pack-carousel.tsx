"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// The hero pack conveyor, scrollytelling edition. Six boxes, three visible,
// centre largest, all upright with a gap. The stage PINS in the viewport
// while the user scrolls: the page holds still as boxes slide left one by
// one (exit left, enter right), and once the last window is reached the
// stage un-pins and the page continues. Implemented as a tall outer track
// with a sticky stage; progress = how far the track has scrolled under the
// pin point. Transform/opacity only, rAF-throttled.

export interface CarouselPack {
  slug: string;
  level: string;
  name: string;
  img: string;
}

const STEP_PX = 320; // scroll distance per one-box advance while pinned

export function PackCarousel({ packs }: { packs: CarouselPack[] }) {
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const turns = Math.max(0, packs.length - 3);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return; // static first window, no pinned scroll section

    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const outer = outerRef.current;
        const stage = stageRef.current;
        if (!outer || !stage) return;
        // The sticky `top` offset, resolved to px by the browser.
        const pinTop = parseFloat(getComputedStyle(stage).top) || 0;
        const p = Math.min(
          turns,
          Math.max(0, (pinTop - outer.getBoundingClientRect().top) / STEP_PX)
        );
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [turns]);

  const centre = progress + 1;

  return (
    // The track: stage height + one STEP of runway per turn. The runway must
    // be real CONTENT (a spacer sibling), not padding: sticky elements can
    // only travel within their containing block's content box, so a
    // padding-bottom runway gives the stage zero room and it never pins.
    <div ref={outerRef} className="relative w-full">
      <div
        ref={stageRef}
        className="sticky top-[calc(50svh-150px)] mx-auto h-[300px] w-full max-w-4xl sm:top-[calc(50svh-190px)] sm:h-[380px] md:top-[calc(50svh-220px)] md:h-[440px]"
      >
        {packs.map((p, i) => {
          const rel = i - centre; // 0 = centre, -1 = left slot, +1 = right slot
          const abs = Math.abs(rel);
          if (abs > 2.2) return null; // far off-stage, skip entirely
          const scale = 1.12 - 0.22 * Math.min(abs, 1.2);
          const opacity = Math.min(1, Math.max(0, 1.9 - abs));
          return (
            <div
              key={p.slug}
              className="absolute left-1/2 top-1/2 h-[88%] will-change-transform"
              style={{
                aspectRatio: "2 / 3",
                // 112% spacing = a clear breathing gap between upright boxes.
                transform: `translate(-50%, -50%) translateX(${rel * 112}%) scale(${scale})`,
                opacity,
                zIndex: 30 - Math.round(abs * 10),
              }}
            >
              <Image
                src={p.img}
                alt={`${p.name}, StudyLah 2026 pack`}
                fill
                priority={i <= 2}
                sizes="(max-width: 640px) 45vw, 340px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          );
        })}
      </div>
      {!reduced && <div style={{ height: turns * STEP_PX }} aria-hidden />}
    </div>
  );
}
