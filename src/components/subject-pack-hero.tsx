"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// The subject page's box render. Starts as a big product shot right under
// the title, filling most of the viewport height. As the visitor scrolls it
// shrinks smoothly into a small floating icon pinned under the site header,
// and stays floating there for the rest of the page.
//
// IMPORTANT: this component must be a DIRECT child of the page's root
// column. A sticky element can only travel within its parent, so nesting it
// in a small wrapper would un-pin it as soon as the wrapper scrolls past.
// The whole component is the sticky element; its layout box keeps the page
// flow stable while the visual shrinks via transform. pointer-events-none
// so the (mostly empty) scaled region never blocks clicks on content.

const SHRINK_OVER_PX = 450; // scroll distance for full-size -> icon

export function SubjectPackHero({ img, alt }: { img: string; alt: string }) {
  const [p, setP] = useState(0); // 0 = full size, 1 = floating icon
  const [reduced, setReduced] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setP(Math.min(1, Math.max(0, window.scrollY / SHRINK_OVER_PX)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (reduced) {
    return (
      <div className="relative mx-auto mt-6 h-56 w-full sm:h-72">
        <Image src={img} alt={alt} fill priority sizes="300px" className="rotate-1 object-contain drop-shadow-2xl" />
      </div>
    );
  }

  // The element's real HEIGHT interpolates from hero size down to icon
  // size, so the page flow collapses with the image and no empty band is
  // left between the image and the content below it. The image simply
  // fills the shrinking box, no transform needed.
  const heightSvh = 58 - 46 * p; // 58svh -> 12svh

  return (
    <div
      className="pointer-events-none sticky top-[68px] z-30 mt-2 flex justify-center"
      style={{ height: `${heightSvh}svh`, minHeight: 90 }}
    >
      <div className="relative h-full" style={{ aspectRatio: "2 / 3" }}>
        {/* rotate-1: the box renders lean slightly left, +1deg squares them up */}
        <Image
          src={img}
          alt={alt}
          fill
          priority
          sizes="(max-width: 640px) 70vw, 420px"
          className="rotate-1 object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
