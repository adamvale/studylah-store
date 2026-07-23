"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { onAudioLevel, onSpeakingChange } from "@/lib/speak";

// A small window on the lesson where the tutor sits, so a student feels taught
// by a person rather than read to by an app.
//
// Two short looping clips do the work: an idle loop while Gugu is quiet and a
// talking loop while she speaks. They are crossfaded, so there is no reload
// stutter when she starts or stops. Deliberately NOT one clip per line: the
// lesson has thousands of spoken lines and they change often, so per-line video
// would cost a re-render every time a word is edited. This costs two files.
//
// Shaped like a FaceTime picture-in-picture tile, and draggable for the same
// reason FaceTime's is: wherever it sits by default, sooner or later it covers
// something the student wants to read. Where they put it is remembered.
//
// Drop the footage at:
//   public/tutor/<name>-idle.mp4     a few seconds, looping, mouth closed
//   public/tutor/<name>-talking.mp4  a few seconds, looping, mid-speech
// Both 3:4 portrait, muted and silent: the audio always comes from Gugu's
// generated voice. If the files are missing the window hides itself, so nothing
// breaks before the footage exists.

const STORE_KEY = "tutor_head_pos";
const EDGE = 12; // keep this much clear of every edge

type Pos = { x: number; y: number };

export function TutorHead({ name = "amy", width = 104 }: { name?: string; width?: number }) {
  const height = Math.round((width * 4) / 3);
  const [speaking, setSpeaking] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [pos, setPos] = useState<Pos | null>(null); // null until measured, so it never flashes
  const [dragging, setDragging] = useState(false);
  const idleRef = useRef<HTMLVideoElement | null>(null);
  const talkRef = useRef<HTMLVideoElement | null>(null);
  const grab = useRef<Pos>({ x: 0, y: 0 }); // pointer offset within the tile

  // Never let it sit off-screen, including after a rotation or a resize.
  const clamp = useCallback(
    (p: Pos): Pos => ({
      x: Math.min(Math.max(p.x, EDGE), Math.max(EDGE, window.innerWidth - width - EDGE)),
      y: Math.min(Math.max(p.y, EDGE), Math.max(EDGE, window.innerHeight - height - EDGE)),
    }),
    [width, height],
  );

  // Start where the student last left it; otherwise bottom-left, clear of the footer.
  useEffect(() => {
    let start: Pos | null = null;
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const p = JSON.parse(raw) as Pos;
        if (typeof p?.x === "number" && typeof p?.y === "number") start = p;
      }
    } catch {
      /* ignore a corrupt value */
    }
    setPos(clamp(start ?? { x: EDGE + 4, y: window.innerHeight - height - 96 }));
    const onResize = () => setPos((p) => (p ? clamp(p) : p));
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [clamp, height]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pos) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    grab.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    e.preventDefault(); // stop the lesson scrolling under the finger
    setPos(clamp({ x: e.clientX - grab.current.x, y: e.clientY - grab.current.y }));
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    try {
      if (pos) localStorage.setItem(STORE_KEY, JSON.stringify(pos));
    } catch {
      /* private mode, not worth caring about */
    }
  };

  useEffect(() => onSpeakingChange(setSpeaking), []);

  // A generic loop reads as wrong mainly because the mouth moves during pauses.
  // So the talking clip is advanced only while there is real voice energy and
  // held still between words and sentences. It cannot match phonemes, but at
  // this size what the eye checks is "does the mouth move when I hear her".
  //
  // level < 0 means the waveform is unreadable (device voice, or audio served
  // without CORS). Then we just let the clip run, which is the old behaviour.
  const voiced = useRef(true);
  useEffect(
    () =>
      onAudioLevel((level) => {
        const talk = talkRef.current;
        if (!talk) return;
        if (level < 0) {
          voiced.current = true;
          if (talk.paused) void talk.play().catch(() => {});
          return;
        }
        const isVoiced = level > 0.06; // below this is a pause, not speech
        if (isVoiced === voiced.current) return;
        voiced.current = isVoiced;
        if (isVoiced) void talk.play().catch(() => {});
        else talk.pause(); // hold the frame rather than mouthing at silence
      }),
    [],
  );

  // Keep the visible clip rolling and rewind the hidden one, so every switch
  // starts from the top of the loop rather than halfway through a mouth shape.
  useEffect(() => {
    const idle = idleRef.current;
    const talk = talkRef.current;
    if (!idle || !talk) return;
    const on = speaking ? talk : idle;
    const off = speaking ? idle : talk;
    void on.play().catch(() => {
      /* autoplay can be refused until the first tap; the poster still shows */
    });
    try {
      off.pause();
      off.currentTime = 0;
    } catch {
      /* ignore */
    }
  }, [speaking, ready]);

  if (failed || !pos) return null;

  const common = "absolute inset-0 h-full w-full object-cover transition-opacity duration-200";

  return (
    <div
      role="button"
      tabIndex={-1}
      aria-label="Tutor video. Drag to move it out of the way."
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={`fixed z-[60] cursor-grab touch-none select-none overflow-hidden rounded-2xl border bg-night/70 shadow-2xl backdrop-blur ${
        dragging ? "cursor-grabbing border-accent/70 scale-105" : "border-white/15"
      } transition-[border-color,transform] duration-150`}
      style={{ width, height, left: pos.x, top: pos.y }}
    >
      <video
        ref={idleRef}
        src={`/tutor/${name}-idle.mp4`}
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
        onError={() => setFailed(true)}
        className={`${common} ${speaking ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={talkRef}
        src={`/tutor/${name}-talking.mp4`}
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setFailed(true)}
        className={`${common} ${speaking ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
