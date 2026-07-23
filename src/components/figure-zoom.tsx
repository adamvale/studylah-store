"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Tap any diagram to open it full screen, then pinch to zoom and drag to pan.
//
// Diagrams are drawn to be read in a small card, which quietly limits what they
// can show: fine scale divisions, a labelled hand for the grip rule, the detail
// on a vernier. With a zoom the drawing no longer has to survive at card size,
// so figures can carry the detail the physics actually needs.
//
// The pinch is implemented on pointer events rather than left to the browser.
// Inside the native shell a fixed overlay does not reliably get native pinch,
// and letting the page zoom instead would drag the whole lesson about.

const MIN = 1;
const MAX = 6;

export function FigureZoom({ src, onClose }: { src: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  // live pointers, so two fingers can be told from one
  const pts = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ dist: number; scale: number } | null>(null);
  const pan = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const lastTap = useRef(0);

  // Esc closes it on a keyboard, and the lesson underneath must not scroll while
  // the overlay is up.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const clampPan = useCallback((s: number, x: number, y: number) => {
    // do not let the drawing be dragged entirely off screen
    const limX = (window.innerWidth * (s - 1)) / 2 + 40;
    const limY = (window.innerHeight * (s - 1)) / 2 + 40;
    return { x: Math.max(-limX, Math.min(limX, x)), y: Math.max(-limY, Math.min(limY, y)) };
  }, []);

  const zoomTo = useCallback(
    (next: number) => {
      const s = Math.max(MIN, Math.min(MAX, next));
      setScale(s);
      if (s === 1) { setTx(0); setTy(0); return; }
      const c = clampPan(s, tx, ty);
      setTx(c.x);
      setTy(c.y);
    },
    [clampPan, tx, ty],
  );

  function down(e: React.PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.current.size === 2) {
      const [a, b] = [...pts.current.values()];
      pinch.current = { dist: Math.hypot(a.x - b.x, a.y - b.y) || 1, scale };
      pan.current = null;
    } else if (pts.current.size === 1) {
      pan.current = { x: e.clientX, y: e.clientY, tx, ty };
      // double tap toggles between fit and a useful magnification
      const now = Date.now();
      if (now - lastTap.current < 300) zoomTo(scale > 1.2 ? 1 : 2.5);
      lastTap.current = now;
    }
  }

  function move(e: React.PointerEvent) {
    if (!pts.current.has(e.pointerId)) return;
    pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    e.preventDefault();
    if (pts.current.size >= 2 && pinch.current) {
      const [a, b] = [...pts.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      zoomTo(pinch.current.scale * (d / pinch.current.dist));
      return;
    }
    if (pan.current && scale > 1) {
      const c = clampPan(scale, pan.current.tx + (e.clientX - pan.current.x), pan.current.ty + (e.clientY - pan.current.y));
      setTx(c.x);
      setTy(c.y);
    }
  }

  function up(e: React.PointerEvent) {
    pts.current.delete(e.pointerId);
    if (pts.current.size < 2) pinch.current = null;
    if (pts.current.size === 0) pan.current = null;
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex touch-none select-none items-center justify-center bg-night/95 backdrop-blur"
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      onWheel={(e) => zoomTo(scale * (e.deltaY < 0 ? 1.12 : 1 / 1.12))}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        draggable={false}
        className="max-h-[88vh] max-w-[94vw] object-contain"
        style={{ transform: `translate(${tx}px, ${ty}px) scale(${scale})`, transition: pinch.current || pan.current ? "none" : "transform .18s" }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-7 text-center text-xs text-body/70">
        {scale > 1.05 ? "Drag to move. Double tap to fit." : "Pinch or double tap to zoom in."}
      </div>

      <button
        type="button"
        aria-label="Close the diagram"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-night/80 text-ink"
      >
        <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden>
          <path d="M1.5 1.5 L10.5 10.5 M10.5 1.5 L1.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
