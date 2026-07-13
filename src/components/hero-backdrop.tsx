// Purely decorative hero atmosphere: drifting aurora clouds, a masked dot grid,
// rising pixel motes and film grain, all CSS, no images (CSP-safe), no client
// JS. Mote positions are hardcoded (not random) so server and client render
// identically and never trip a hydration mismatch.

const MOTES = [
  { left: "8%", size: 6, color: "var(--color-accent)", dur: "9s", delay: "0s", op: 0.7 },
  { left: "18%", size: 4, color: "var(--color-teal)", dur: "12s", delay: "1.5s", op: 0.6 },
  { left: "31%", size: 5, color: "var(--color-violet)", dur: "10s", delay: "3s", op: 0.6 },
  { left: "44%", size: 3, color: "var(--color-accent)", dur: "14s", delay: "0.8s", op: 0.5 },
  { left: "57%", size: 6, color: "var(--color-mint)", dur: "11s", delay: "2.2s", op: 0.55 },
  { left: "69%", size: 4, color: "var(--color-accent)", dur: "13s", delay: "4s", op: 0.6 },
  { left: "80%", size: 5, color: "var(--color-teal)", dur: "9.5s", delay: "1s", op: 0.6 },
  { left: "90%", size: 3, color: "var(--color-violet)", dur: "12.5s", delay: "3.4s", op: 0.5 },
  { left: "25%", size: 3, color: "var(--color-accent)", dur: "15s", delay: "5s", op: 0.4 },
  { left: "63%", size: 4, color: "var(--color-accent)", dur: "10.5s", delay: "6s", op: 0.5 },
] as const;

export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="grain pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash, a deep radial that adds depth even before the blobs. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, rgba(80,40,255,0.28), transparent 55%)," +
            "radial-gradient(110% 90% at 100% 10%, rgba(69,200,207,0.22), transparent 55%)," +
            "radial-gradient(120% 100% at 60% 120%, rgba(255,220,0,0.14), transparent 60%)",
        }}
      />

      {/* Aurora colour clouds */}
      <div
        className="aurora-blob"
        style={{
          top: "-14%",
          left: "-8%",
          width: "50%",
          height: "62%",
          background: "radial-gradient(circle, rgba(124,58,237,0.85), transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          top: "-18%",
          right: "-10%",
          width: "52%",
          height: "65%",
          background: "radial-gradient(circle, rgba(69,200,207,0.6), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          bottom: "-25%",
          left: "22%",
          width: "58%",
          height: "62%",
          background: "radial-gradient(circle, rgba(255,220,0,0.45), transparent 70%)",
          animationDelay: "-12s",
        }}
      />

      {/* Masked dot grid */}
      <div className="hero-grid absolute inset-0" />

      {/* Rising pixel motes */}
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="mote px-img"
          style={{
            left: m.left,
            bottom: "-10px",
            width: m.size,
            height: m.size,
            backgroundColor: m.color,
            opacity: m.op,
            animationDuration: m.dur,
            animationDelay: m.delay,
          }}
        />
      ))}

      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
    </div>
  );
}
