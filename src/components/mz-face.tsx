"use client";

// A dialogue face from the MZ face sheets (4x2 grid of 144px portraits).
// Falls back to the emoji if the role has no casting entry.
import { MZ_FACES } from "@/lib/game/mz";

export function MzFace({
  role,
  emoji,
  size = 72,
  className = "",
}: {
  role?: string;
  emoji?: string;
  size?: number;
  className?: string;
}) {
  const face = role ? MZ_FACES[role] : undefined;
  if (!face) {
    return (
      <span className={`flex items-center justify-center text-3xl ${className}`} style={{ width: size, height: size }} aria-hidden>
        {emoji ?? "🙂"}
      </span>
    );
  }
  const scale = size / 144;
  const col = face.index % 4;
  const row = Math.floor(face.index / 4);
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        backgroundImage: `url(/game/mz/faces/${face.sheet}.png)`,
        backgroundPosition: `${-col * 144 * scale}px ${-row * 144 * scale}px`,
        backgroundSize: `${576 * scale}px ${288 * scale}px`,
        backgroundRepeat: "no-repeat",
        borderRadius: 10,
      }}
    />
  );
}
