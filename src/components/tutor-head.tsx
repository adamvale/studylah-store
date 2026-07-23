"use client";

import { useEffect, useRef, useState } from "react";
import { onSpeakingChange } from "@/lib/speak";

// A small window on the lesson where the tutor sits, so a student feels taught
// by a person rather than read to by an app.
//
// Two short looping clips do the work: an idle loop while Gugu is quiet and a
// talking loop while she speaks. They are crossfaded, so there is no reload
// stutter when she starts or stops. Deliberately NOT one clip per line: the
// lesson has thousands of spoken lines and they change often, so per-line video
// would cost a re-render every time a word is edited. This costs two files.
//
// Drop the footage at:
//   public/tutor/<name>-idle.mp4     a few seconds, looping, mouth closed
//   public/tutor/<name>-talking.mp4  a few seconds, looping, mid-speech
// Both muted and silent: the audio always comes from Gugu's generated voice.
// If the files are missing the window hides itself, so nothing breaks before
// the footage exists.

export function TutorHead({ name = "amy", size = 96 }: { name?: string; size?: number }) {
  const [speaking, setSpeaking] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const idleRef = useRef<HTMLVideoElement | null>(null);
  const talkRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => onSpeakingChange(setSpeaking), []);

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

  if (failed) return null;

  const common =
    "absolute inset-0 h-full w-full object-cover transition-opacity duration-200";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-24 left-4 z-[60] overflow-hidden rounded-2xl border border-hairline bg-night/70 shadow-xl backdrop-blur"
      style={{ width: size, height: size }}
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
