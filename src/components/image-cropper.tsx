"use client";

import { useEffect, useRef, useState } from "react";

// A lightweight touch crop step: the camera grabs the whole page, so the
// student drags a box around the one question they want, then submits just
// that. Pointer-events based (works with touch and mouse). Outputs cropped
// JPEG base64, downscaled so the upload stays small.

interface Box {
  x: number; // 0..1 of displayed image width
  y: number;
  w: number;
  h: number;
}
type Drag =
  | { mode: "move"; startX: number; startY: number; box: Box }
  | { mode: "resize"; corner: "nw" | "ne" | "sw" | "se"; box: Box }
  | null;

export function ImageCropper({
  file,
  onCropped,
  onCancel,
}: {
  file: File;
  onCropped: (out: { base64: string; media: "image/jpeg" }) => void;
  onCancel: () => void;
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [box, setBox] = useState<Box>({ x: 0.08, y: 0.08, w: 0.84, h: 0.84 });
  const [busy, setBusy] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgElRef = useRef<HTMLImageElement | null>(null);
  const drag = useRef<Drag>(null);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  function rel(e: PointerEvent | React.PointerEvent) {
    const r = wrapRef.current!.getBoundingClientRect();
    return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
  }

  function onDown(e: React.PointerEvent, corner?: "nw" | "ne" | "sw" | "se") {
    e.preventDefault();
    (e.target as Element).setPointerCapture?.(e.pointerId);
    if (corner) drag.current = { mode: "resize", corner, box };
    else {
      const p = rel(e);
      drag.current = { mode: "move", startX: p.x - box.x, startY: p.y - box.y, box };
    }
  }

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!drag.current) return;
      const p = rel(e);
      const clamp = (v: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));
      if (drag.current.mode === "move") {
        const nx = clamp(p.x - drag.current.startX, 0, 1 - box.w);
        const ny = clamp(p.y - drag.current.startY, 0, 1 - box.h);
        setBox((b) => ({ ...b, x: nx, y: ny }));
      } else {
        const c = drag.current.corner;
        setBox((b) => {
          let { x, y, w, h } = b;
          const right = x + w;
          const bottom = y + h;
          const px = clamp(p.x);
          const py = clamp(p.y);
          if (c === "nw") { x = Math.min(px, right - 0.1); y = Math.min(py, bottom - 0.1); w = right - x; h = bottom - y; }
          if (c === "ne") { y = Math.min(py, bottom - 0.1); w = Math.max(0.1, px - x); h = bottom - y; }
          if (c === "sw") { x = Math.min(px, right - 0.1); w = right - x; h = Math.max(0.1, py - y); }
          if (c === "se") { w = Math.max(0.1, px - x); h = Math.max(0.1, py - y); }
          return { x, y, w, h };
        });
      }
    }
    function onUp() { drag.current = null; }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [box.w, box.h]);

  async function confirm() {
    const img = imgElRef.current;
    if (!img) return;
    setBusy(true);
    try {
      const nw = img.naturalWidth;
      const nh = img.naturalHeight;
      const sx = box.x * nw;
      const sy = box.y * nh;
      const sw = box.w * nw;
      const sh = box.h * nh;
      const maxEdge = 1280;
      const scale = Math.min(1, maxEdge / Math.max(sw, sh));
      const cw = Math.max(1, Math.round(sw * scale));
      const ch = Math.max(1, Math.round(sh * scale));
      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;
      canvas.getContext("2d")!.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.72);
      onCropped({ base64: dataUrl.split(",")[1], media: "image/jpeg" });
    } finally {
      setBusy(false);
    }
  }

  const pct = (v: number) => `${v * 100}%`;
  const handle =
    "absolute h-6 w-6 rounded-full border-2 border-accent bg-night touch-none";

  return (
    <div className="mt-4">
      <p className="mb-2 text-sm text-body">Drag the box around just the question you want.</p>
      <div ref={wrapRef} className="relative mx-auto max-w-full select-none overflow-hidden rounded-2xl bg-night">
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img ref={imgElRef} src={src} alt="Your photo" className="block max-h-[60vh] w-full object-contain" draggable={false} />
        )}
        {/* dim outside the crop box */}
        <div className="pointer-events-none absolute inset-0 bg-black/50" style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${pct(box.y)}, ${pct(box.x)} ${pct(box.y)}, ${pct(box.x)} ${pct(box.y + box.h)}, ${pct(box.x + box.w)} ${pct(box.y + box.h)}, ${pct(box.x + box.w)} ${pct(box.y)}, 0 ${pct(box.y)})` }} />
        <div
          onPointerDown={(e) => onDown(e)}
          className="absolute touch-none border-2 border-accent"
          style={{ left: pct(box.x), top: pct(box.y), width: pct(box.w), height: pct(box.h) }}
        >
          <span onPointerDown={(e) => onDown(e, "nw")} className={`${handle} -left-3 -top-3`} />
          <span onPointerDown={(e) => onDown(e, "ne")} className={`${handle} -right-3 -top-3`} />
          <span onPointerDown={(e) => onDown(e, "sw")} className={`${handle} -bottom-3 -left-3`} />
          <span onPointerDown={(e) => onDown(e, "se")} className={`${handle} -bottom-3 -right-3`} />
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={onCancel} className="flex-1 rounded-xl border border-hairline py-3 text-sm font-bold text-ink">
          Retake
        </button>
        <button type="button" onClick={confirm} disabled={busy} className="flex-1 rounded-xl bg-accent py-3 text-sm font-bold text-night disabled:opacity-60">
          {busy ? "Cropping..." : "Use this"}
        </button>
      </div>
    </div>
  );
}
