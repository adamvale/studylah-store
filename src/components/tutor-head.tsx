"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NamedIcon } from "@/components/icons";
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
// Shaped like a FaceTime picture-in-picture tile, floating above the lesson on a
// two-layer shadow, and draggable for the same reason FaceTime's is: wherever it
// sits by default, sooner or later it covers something the student wants to read.
// Where they put it is remembered.
//
// It can also be dismissed, because a face on screen is company for some students
// and a distraction for others. Dismissing leaves a small badge rather than
// nothing at all, so bringing her back is one tap and never a hunt through
// settings. Both the position and the dismissed state persist per device.
//
// Drop the footage at:
//   public/tutor/<name>-idle.mp4     a few seconds, looping, mouth closed
//   public/tutor/<name>-talking.mp4  a few seconds, looping, mid-speech
// Both 3:4 portrait, muted and silent: the audio always comes from Gugu's
// generated voice. If the files are missing the window hides itself, so nothing
// breaks before the footage exists.

const STORE_KEY = "tutor_head_pos";
const HIDE_KEY = "tutor_head_hidden";
const EDGE = 12; // keep this much clear of every edge
const PILL = 40; // the little badge left behind when she is dismissed

type Pos = { x: number; y: number };

export function TutorHead({ name = "amy", width = 104 }: { name?: string; width?: number }) {
  const [hidden, setHidden] = useState(false);
  const height = Math.round((width * 4) / 3);
  const boxW = hidden ? PILL : width;
  const boxH = hidden ? PILL : height;
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
      x: Math.min(Math.max(p.x, EDGE), Math.max(EDGE, window.innerWidth - boxW - EDGE)),
      y: Math.min(Math.max(p.y, EDGE), Math.max(EDGE, window.innerHeight - boxH - EDGE)),
    }),
    [boxW, boxH],
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
    try {
      setHidden(localStorage.getItem(HIDE_KEY) === "1");
    } catch {
      /* ignore */
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

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (!pos) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    grab.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!dragging) return;
    e.preventDefault(); // stop the lesson scrolling under the finger
    setPos(clamp({ x: e.clientX - grab.current.x, y: e.clientY - grab.current.y }));
  };

  const endDrag = (e: React.PointerEvent<HTMLElement>) => {
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

  // Some students find a face on screen distracting while they read, so she can
  // be dismissed to a small badge and brought back later. The choice sticks.
  function setDismissed(next: boolean) {
    setHidden(next);
    setPos((p) => (p ? clamp(p) : p)); // the box changes size, so re-clamp it
    try {
      localStorage.setItem(HIDE_KEY, next ? "1" : "0");
    } catch {
      /* private mode */
    }
  }

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
  // Two layers: a wide soft one for the lift off the page and a tight dark one
  // for the contact shadow, so the tile reads as floating above the lesson.
  const float = dragging
    ? "0 30px 60px -12px rgba(0,0,0,.75), 0 10px 20px -6px rgba(0,0,0,.6)"
    : "0 18px 40px -10px rgba(0,0,0,.65), 0 6px 14px -6px rgba(0,0,0,.55)";

  // Dismissed: leave a small badge she can be brought back from. Still draggable,
  // so it never becomes stuck over something either.
  if (hidden) {
    return (
      <button
        type="button"
        aria-label="Show the tutor"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClick={() => !dragging && setDismissed(false)}
        className="fixed z-[60] flex touch-none select-none items-center justify-center rounded-full border border-white/15 bg-night/80 text-accent backdrop-blur"
        style={{ width: PILL, height: PILL, left: pos.x, top: pos.y, boxShadow: float }}
      >
        <NamedIcon name="ghost" size={20} />
      </button>
    );
  }

  return (
    <div
      role="button"
      tabIndex={-1}
      aria-label="Tutor video. Drag to move it out of the way."
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={`fixed z-[60] cursor-grab touch-none select-none overflow-hidden rounded-2xl border bg-night/70 backdrop-blur ${
        dragging ? "cursor-grabbing border-accent/70 scale-105" : "border-white/15"
      } transition-[border-color,transform] duration-150`}
      style={{ width, height, left: pos.x, top: pos.y, boxShadow: float }}
    >
      {/* Dismiss. Its own pointer handlers stop the press turning into a drag. */}
      <button
        type="button"
        aria-label="Hide the tutor"
        onPointerDown={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          setDismissed(true);
        }}
        className="absolute right-1 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-night/70 text-ink/80 backdrop-blur"
      >
        <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden>
          <path d="M1.5 1.5 L10.5 10.5 M10.5 1.5 L1.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
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
