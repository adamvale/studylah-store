"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// The hero pack conveyor. Six boxes in a fixed sequence, three visible at a
// time with the centre one largest, all standing perfectly upright with a
// gap between them. Scrolling the page slides the row horizontally: boxes
// glide left, fade out at the left edge, and the next enters from the
// right. Pure transform/opacity work on a rAF-throttled scroll listener.

export interface CarouselPack {
  slug: string;
  level: string;
  name: string;
  img: string;
}

const STEP_PX = 300; // scroll distance per one-box turn of the wheel

export function PackCarousel({ packs }: { packs: CarouselPack[] }) {
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const max = packs.length - 3;
    const onScroll = () => {
      if (reduced.current) return; // static first window for reduced motion
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const p = Math.min(max, Math.max(0, window.scrollY / STEP_PX));
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [packs.length]);

  // Centre of the visible window drifts from box 1 toward box packs.length-2.
  const centre = progress + 1;

  return (
    <div className="relative mx-auto h-[300px] w-full max-w-4xl sm:h-[380px] md:h-[440px]">
      {packs.map((p, i) => {
        const rel = i - centre; // 0 = centre, -1 = left slot, +1 = right slot
        const abs = Math.abs(rel);
        if (abs > 2.2) return null; // far off-stage, skip entirely
        const scale = 1.12 - 0.22 * Math.min(abs, 1.2);
        const opacity = Math.min(1, Math.max(0, 1.9 - abs));
        return (
          <Link
            key={p.slug}
            href={`/${p.level}/${p.slug}`}
            aria-label={`${p.name}, 2026 pack`}
            className="absolute left-1/2 top-1/2 block h-[88%] will-change-transform"
            style={{
              aspectRatio: "2 / 3",
              // 112% spacing = a clear breathing gap between upright boxes.
              transform: `translate(-50%, -50%) translateX(${rel * 112}%) scale(${scale})`,
              opacity,
              zIndex: 30 - Math.round(abs * 10),
              pointerEvents: abs > 1.3 ? "none" : "auto",
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
          </Link>
        );
      })}
    </div>
  );
}
