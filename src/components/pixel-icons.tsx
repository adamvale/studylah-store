// Hand-drawn pixel icon set, same 16px language as the Adventure tileset,
// so the chrome and the overworld read as one game. Pure SVG rects on a
// 16×16 grid; `currentColor` inherits the active/inactive tab colour.

interface P {
  size?: number;
  className?: string;
}

function Px({ size = 20, className, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const r = (x: number, y: number, w: number, h: number, key?: string) => (
  <rect key={key ?? `${x}-${y}-${w}-${h}`} x={x} y={y} width={w} height={h} fill="currentColor" />
);

// 🎯 Missions, a scroll with a checkmark
export function IconMissions(p: P) {
  return (
    <Px {...p}>
      {r(3, 1, 10, 2)}
      {r(2, 3, 2, 10)}
      {r(12, 3, 2, 10)}
      {r(4, 13, 8, 2)}
      {r(5, 6, 2, 2)}
      {r(7, 8, 2, 2)}
      {r(9, 6, 2, 2)}
    </Px>
  );
}

// 🗺️ World, a folded map with a route dot
export function IconWorld(p: P) {
  return (
    <Px {...p}>
      {r(1, 2, 4, 12)}
      {r(6, 3, 4, 12)}
      {r(11, 2, 4, 12)}
      {r(7, 6, 2, 2)}
      {r(12, 9, 2, 2)}
      {r(2, 5, 2, 2)}
    </Px>
  );
}

// ⚔️ Battle, crossed pixel swords
export function IconBattle(p: P) {
  return (
    <Px {...p}>
      {r(2, 2, 2, 2)}
      {r(4, 4, 2, 2)}
      {r(6, 6, 4, 4)}
      {r(10, 4, 2, 2)}
      {r(12, 2, 2, 2)}
      {r(4, 10, 2, 2)}
      {r(2, 12, 2, 2)}
      {r(10, 10, 2, 2)}
      {r(12, 12, 2, 2)}
    </Px>
  );
}

// 👾 Bestiary, an 8-bit monster
export function IconBestiary(p: P) {
  return (
    <Px {...p}>
      {r(4, 2, 8, 2)}
      {r(2, 4, 12, 6)}
      {r(4, 6, 2, 2, "eyeL")}
      {r(10, 6, 2, 2, "eyeR")}
      {r(3, 10, 3, 2)}
      {r(10, 10, 3, 2)}
      {r(2, 12, 2, 2)}
      {r(7, 12, 2, 2)}
      {r(12, 12, 2, 2)}
    </Px>
  );
}

// 🎒 More, an adventurer's backpack
export function IconMore(p: P) {
  return (
    <Px {...p}>
      {r(5, 1, 6, 2)}
      {r(3, 3, 10, 11)}
      {r(1, 5, 2, 6)}
      {r(13, 5, 2, 6)}
      {r(5, 7, 6, 2)}
      {r(7, 9, 2, 3)}
    </Px>
  );
}

// 🔊 Sound on / off, pixel speaker
export function IconSound({ muted, ...p }: P & { muted: boolean }) {
  return (
    <Px {...p}>
      {r(2, 6, 3, 4)}
      {r(5, 4, 2, 8)}
      {r(7, 2, 2, 12)}
      {muted ? (
        <>
          {r(10, 5, 2, 2, "x1")}
          {r(12, 7, 2, 2, "x2")}
          {r(14, 9, 1, 2, "x3")}
          {r(12, 5, 2, 2, "x4")}
          {r(10, 9, 2, 2, "x5")}
        </>
      ) : (
        <>
          {r(11, 6, 1, 4, "w1")}
          {r(13, 4, 1, 8, "w2")}
        </>
      )}
    </Px>
  );
}

// 🛡️ Streak shield
export function IconShield(p: P) {
  return (
    <Px {...p}>
      {r(3, 2, 10, 2)}
      {r(2, 4, 12, 5)}
      {r(3, 9, 10, 2)}
      {r(5, 11, 6, 2)}
      {r(7, 13, 2, 2)}
    </Px>
  );
}

// 💀 Boss skull
export function IconBoss(p: P) {
  return (
    <Px {...p}>
      {r(4, 1, 8, 2)}
      {r(2, 3, 12, 7)}
      {r(4, 5, 3, 3, "sL")}
      {r(9, 5, 3, 3, "sR")}
      {r(4, 10, 8, 2)}
      {r(4, 12, 2, 3)}
      {r(7, 12, 2, 3)}
      {r(10, 12, 2, 3)}
    </Px>
  );
}
