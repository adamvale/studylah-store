// The overworld generator for Adventure mode. Pure data (no DOM) so it can be
// reasoned about and tested: given the subjects a player owns, lay out a
// Game-Boy-style town — a central route, one gym per subject alternating left
// and right, and bands of tall grass the player crosses to reach them.

export const TILE = {
  GRASS: 0,
  TALL: 1,
  TREE: 2,
  WATER: 3,
  PATH: 4,
  WALL: 5,
  DOOR: 6,
  FLOWER: 7,
  SIGN: 8,
} as const;

export type TileId = (typeof TILE)[keyof typeof TILE];

const WALKABLE = new Set<number>([TILE.GRASS, TILE.TALL, TILE.PATH, TILE.FLOWER, TILE.DOOR]);
export function isWalkable(t: number): boolean {
  return WALKABLE.has(t);
}

export interface GymSpot {
  x: number;
  y: number; // the DOOR tile the player steps onto
  level: string;
  slug: string;
  name: string;
  short: string;
  emoji: string;
  index: number;
}

export interface WorldSubject {
  level: string;
  slug: string;
  name: string;
  short: string; // subject initials for the gym sign
  emoji: string;
}

export interface World {
  grid: number[][];
  width: number;
  height: number;
  gyms: GymSpot[];
  start: { x: number; y: number };
}

const W = 15;
const STATION = 5;
const PATH_X = 7;

export function buildWorld(subjects: WorldSubject[]): World {
  const n = Math.max(subjects.length, 0);
  const topMargin = 4;
  const bottomMargin = 4;
  const height = topMargin + n * STATION + bottomMargin;

  const grid: number[][] = Array.from({ length: height }, () =>
    Array.from({ length: W }, () => TILE.GRASS as number)
  );

  const put = (x: number, y: number, t: number) => {
    if (y >= 0 && y < height && x >= 0 && x < W) grid[y][x] = t;
  };

  // Tree border.
  for (let x = 0; x < W; x++) {
    put(x, 0, TILE.TREE);
    put(x, height - 1, TILE.TREE);
  }
  for (let y = 0; y < height; y++) {
    put(0, y, TILE.TREE);
    put(W - 1, y, TILE.TREE);
  }

  // Central route.
  for (let y = 1; y < height - 1; y++) put(PATH_X, y, TILE.PATH);

  const start = { x: PATH_X, y: height - 3 };

  // A couple of decorative flowers by the start.
  put(PATH_X - 1, height - 2, TILE.FLOWER);
  put(PATH_X + 1, height - 2, TILE.FLOWER);

  const gyms: GymSpot[] = [];
  subjects.forEach((s, i) => {
    const cy = height - 3 - (i + 1) * STATION;
    const side = i % 2 === 0 ? 1 : -1;
    const gx = PATH_X + side * 3;

    // Branch path from the route to the gym.
    const [a, b] = gx < PATH_X ? [gx, PATH_X] : [PATH_X, gx];
    for (let x = a; x <= b; x++) put(x, cy, TILE.PATH);

    // The gym building: a 3-wide, 2-tall block above the door.
    for (const wy of [cy - 2, cy - 1]) {
      for (const wx of [gx - 1, gx, gx + 1]) put(wx, wy, TILE.WALL);
    }
    put(gx, cy, TILE.DOOR);
    // A sign beside the door.
    put(gx - side, cy - 1 < 0 ? cy : cy, TILE.WALL);

    gyms.push({ x: gx, y: cy, ...s, index: i });

    // A band of tall grass across the route, below the station — you cross it
    // to advance. Keep the flanking tiles clear so it's not a wall.
    const bandY = cy + 2;
    for (let x = PATH_X - 2; x <= PATH_X + 2; x++) {
      if (grid[bandY]?.[x] === TILE.GRASS || grid[bandY]?.[x] === TILE.PATH) {
        put(x, bandY, TILE.TALL);
      }
    }
    // Extra grass patches flanking the route for optional grinding.
    for (const gy of [cy + 1, cy + 3]) {
      for (const gx2 of [PATH_X - 3, PATH_X + 3]) {
        if (grid[gy]?.[gx2] === TILE.GRASS) put(gx2, gy, TILE.TALL);
      }
    }
  });

  return { grid, width: W, height, gyms, start };
}
