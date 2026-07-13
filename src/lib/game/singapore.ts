import type { WorldSubject } from "@/lib/game/world2";

// ── The map of Singapore ─────────────────────────────────────────────────────
// StudyLah Legends is laid over Singapore: every game zone sits in a real
// district. The home hub is Toa Payoh (heartland centre), the Summit is Bukit
// Timah (the island's true high point), the coastal Saltwind Steps is Marine
// Parade, the restored Old Campus is one-north (the research belt), and each
// subject you own becomes a heartland town. The minimap draws this silhouette
// and marks where you are.

// Singapore outline, north up, from real lon/lat (Tuas 103.60°E → Changi
// 104.04°E; Sembawang 1.47°N → Marina 1.24°N), normalised to a 100 × 48 box.
// District + landmark coords below are placed from the same projection, so the
// whole map is geographically faithful. Straight segments read fine at pixel scale.
export const SG_VIEWBOX = "0 0 100 48";
export const SG_OUTLINE =
  "M3,31 L16,18 L29,9 L42,6 L54,5 L62,8 L70,13 L78,17 L86,19 L93,22 L97,26 " +
  "L86,32 L74,35 L62,37 L58,40 L55,42 L49,41 L42,39 L30,37 L17,35 L7,35 Z";

export interface District {
  name: string;
  x: number;
  y: number;
}

// Real districts at roughly their real relative positions inside the outline.
export const DISTRICTS: readonly District[] = [
  { name: "Woodlands", x: 44, y: 11 },
  { name: "Sembawang", x: 50, y: 9 },
  { name: "Yishun", x: 53, y: 12 },
  { name: "Ang Mo Kio", x: 55, y: 22 },
  { name: "Serangoon", x: 61, y: 26 },
  { name: "Hougang", x: 65, y: 22 },
  { name: "Sengkang", x: 66, y: 19 },
  { name: "Punggol", x: 68, y: 16 },
  { name: "Pasir Ris", x: 78, y: 22 },
  { name: "Tampines", x: 77, y: 25 },
  { name: "Bedok", x: 73, y: 30 },
  { name: "Changi", x: 86, y: 26 },
  { name: "Bishan", x: 56, y: 26 },
  { name: "Toa Payoh", x: 56, y: 29 },
  { name: "Marine Parade", x: 68, y: 34 },
  { name: "Kallang", x: 61, y: 33 },
  { name: "City", x: 57, y: 36 },
  { name: "Queenstown", x: 46, y: 36 },
  { name: "one-north", x: 43, y: 35 },
  { name: "Clementi", x: 38, y: 32 },
  { name: "Bukit Timah", x: 42, y: 25 },
  { name: "Bukit Batok", x: 35, y: 26 },
  { name: "Choa Chu Kang", x: 34, y: 20 },
  { name: "Jurong East", x: 34, y: 29 },
  { name: "Jurong West", x: 25, y: 28 },
  { name: "Tuas", x: 11, y: 31 },
  { name: "Fort Canning", x: 55, y: 36 },
  { name: "Bras Basah", x: 58, y: 35 },
  { name: "Sentosa", x: 52, y: 42 },
];

const DISTRICT_BY_NAME = new Map(DISTRICTS.map((d) => [d.name, d]));
export function districtPos(name: string): District | undefined {
  return DISTRICT_BY_NAME.get(name);
}

// Label placement (viewBox units, relative to the dot) for the full map.
// Default is centred 2.4 above the dot; the central cluster is fanned out
// (left / right / below) so the labels don't stack on top of each other.
export type LabelOffset = { dx: number; dy: number; anchor: "start" | "middle" | "end" };
export const DEFAULT_LABEL: LabelOffset = { dx: 0, dy: -2.4, anchor: "middle" };
export const LABEL_OFFSET: Record<string, LabelOffset> = {
  Bishan: { dx: -2, dy: -1.4, anchor: "end" },
  "Bukit Timah": { dx: -2.2, dy: 0.9, anchor: "end" },
  "Toa Payoh": { dx: 2.4, dy: 1, anchor: "start" },
  "one-north": { dx: -2.2, dy: 0.9, anchor: "end" },
  "Fort Canning": { dx: -1.4, dy: 3.3, anchor: "end" },
  Sentosa: { dx: 0, dy: 3.6, anchor: "middle" },
  "Bras Basah": { dx: 1.6, dy: 2.7, anchor: "start" },
  "Marine Parade": { dx: 2.4, dy: 0.9, anchor: "start" },
  Kallang: { dx: -2, dy: 0.9, anchor: "end" },
  City: { dx: 0, dy: 3.4, anchor: "middle" },
  Queenstown: { dx: -2.2, dy: 0.9, anchor: "end" },
};
export function labelFor(name: string): LabelOffset {
  return LABEL_OFFSET[name] ?? DEFAULT_LABEL;
}

// ── v3 arcade palette (from SINGAPORE_MAP_INSTRUCTIONS) ──────────────────────
export const SG_ARCADE = {
  bg: "#1b1b3a", // navy
  sea: "#262657",
  land: "#2a2a52",
  mint: "#4ef3c9", // borders / coastline / accents
  pink: "#ff2e88", // the player "you are here"
  gold: "#ffd166", // your provinces / landmarks
  white: "#f7f7ff",
  dim: "#8b93c6",
} as const;

// ── 15 real Singapore landmarks (v3 sg_buildings index order) ────────────────
// Placed at roughly their real relative positions on the outline. Emoji stand
// in for the pixel building sprites until the sg_buildings.png sheet ships.
export interface Landmark {
  name: string;
  emoji: string;
  x: number;
  y: number;
}
export const LANDMARKS: readonly Landmark[] = [
  { name: "Marina Bay Sands", emoji: "🏨", x: 58, y: 38 },
  { name: "Merlion Park", emoji: "🦁", x: 57, y: 37 },
  { name: "Botanic Gardens", emoji: "🌳", x: 49, y: 32 },
  { name: "Jewel Changi", emoji: "✈️", x: 86, y: 24 },
  { name: "Our Tampines Hub", emoji: "🏬", x: 76, y: 25 },
  { name: "Singapore Expo", emoji: "🏢", x: 80, y: 29 },
  { name: "Singapore Zoo", emoji: "🐘", x: 44, y: 16 },
  { name: "Woodlands Checkpoint", emoji: "🛂", x: 39, y: 9 },
  { name: "Kranji War Memorial", emoji: "🎖️", x: 37, y: 14 },
  { name: "Punggol Point", emoji: "⚓", x: 68, y: 14 },
  { name: "Hougang Stadium", emoji: "🏟️", x: 65, y: 24 },
  { name: "NEX Serangoon", emoji: "🛍️", x: 61, y: 26 },
  { name: "NTU Hive", emoji: "🎓", x: 20, y: 27 },
  { name: "Science Centre", emoji: "🔬", x: 32, y: 29 },
  { name: "Chinese Garden", emoji: "🏯", x: 31, y: 28 },
];

// Fixed anchors for the always-present zones.
const FIXED_ZONE_DISTRICT: Record<string, string> = {
  hub: "Toa Payoh",
  summit: "Bukit Timah",
  saltwind: "Marine Parade",
  campus: "one-north",
  cells: "Fort Canning",
  lantern: "Sentosa",
  reading: "Bras Basah",
};

// Heartland towns handed out to owned subjects, in order — a nice geographic
// spread around the central hub.
const PROVINCE_POOL = [
  "Ang Mo Kio",
  "Bishan",
  "Tampines",
  "Bedok",
  "Jurong East",
  "Woodlands",
  "Serangoon",
  "Hougang",
  "Yishun",
  "Sengkang",
  "Punggol",
  "Bukit Batok",
  "Choa Chu Kang",
  "Queenstown",
  "Clementi",
  "Pasir Ris",
];

function subjectIndex(subjects: WorldSubject[], level: string, slug: string): number {
  return subjects.findIndex((s) => s.level === level && s.slug === slug);
}

// Which real district a game zone sits in.
export function districtForZone(zoneId: string, subjects: WorldSubject[]): string {
  if (FIXED_ZONE_DISTRICT[zoneId]) return FIXED_ZONE_DISTRICT[zoneId];
  // "prov:<level>/<slug>" and "under:<level>/<slug>" both belong to their subject.
  const m = zoneId.match(/^(?:prov|under):([^/]+)\/(.+)$/);
  if (m) {
    const i = subjectIndex(subjects, m[1], m[2]);
    if (i >= 0) return PROVINCE_POOL[i % PROVINCE_POOL.length];
  }
  return "Toa Payoh";
}

// The set of districts that are "in play" this run: hub, owned subjects, and
// the always-present landmarks — used to light the minimap.
export function activeDistricts(subjects: WorldSubject[]): Set<string> {
  const set = new Set<string>([
    "Toa Payoh", "Bukit Timah", "Marine Parade", "one-north",
    "Fort Canning", "Bras Basah", "Sentosa",
  ]);
  subjects.forEach((_, i) => set.add(PROVINCE_POOL[i % PROVINCE_POOL.length]));
  return set;
}
