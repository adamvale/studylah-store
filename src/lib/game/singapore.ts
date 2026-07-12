import type { WorldSubject } from "@/lib/game/world2";

// ── The map of Singapore ─────────────────────────────────────────────────────
// The Fog Frontier is laid over Singapore: every game zone sits in a real
// district. The home hub is Toa Payoh (heartland centre), the Summit is Bukit
// Timah (the island's true high point), the coastal Saltwind Steps is Marine
// Parade, the restored Old Campus is one-north (the research belt), and each
// subject you own becomes a heartland town. The minimap draws this silhouette
// and marks where you are.

// Simplified Singapore outline, north up, normalised to a 100 × 54 box —
// pointed at Tuas (west) and Changi (east), bulging through the central
// heartland. Straight segments read fine at the retro pixel scale.
export const SG_VIEWBOX = "0 0 100 54";
export const SG_OUTLINE =
  "M3,40 L12,30 L22,22 L33,15 L44,10 L55,9 L65,11 L73,12 L82,16 L90,21 " +
  "L97,27 L89,30 L80,35 L70,41 L60,45 L51,47 L43,45 L34,42 L24,41 L14,41 L6,39 Z";

export interface District {
  name: string;
  x: number;
  y: number;
}

// Real districts at roughly their real relative positions inside the outline.
export const DISTRICTS: readonly District[] = [
  { name: "Woodlands", x: 40, y: 15 },
  { name: "Sembawang", x: 54, y: 13 },
  { name: "Yishun", x: 61, y: 18 },
  { name: "Ang Mo Kio", x: 57, y: 25 },
  { name: "Serangoon", x: 63, y: 29 },
  { name: "Hougang", x: 69, y: 24 },
  { name: "Sengkang", x: 71, y: 18 },
  { name: "Punggol", x: 77, y: 16 },
  { name: "Pasir Ris", x: 85, y: 21 },
  { name: "Tampines", x: 82, y: 28 },
  { name: "Bedok", x: 76, y: 34 },
  { name: "Changi", x: 92, y: 26 },
  { name: "Bishan", x: 52, y: 29 },
  { name: "Toa Payoh", x: 55, y: 34 },
  { name: "Marine Parade", x: 67, y: 40 },
  { name: "Kallang", x: 59, y: 39 },
  { name: "City", x: 54, y: 42 },
  { name: "Queenstown", x: 47, y: 40 },
  { name: "one-north", x: 42, y: 38 },
  { name: "Clementi", x: 36, y: 39 },
  { name: "Bukit Timah", x: 45, y: 30 },
  { name: "Bukit Batok", x: 33, y: 30 },
  { name: "Choa Chu Kang", x: 29, y: 20 },
  { name: "Jurong East", x: 26, y: 35 },
  { name: "Jurong West", x: 17, y: 33 },
  { name: "Tuas", x: 9, y: 37 },
];

const DISTRICT_BY_NAME = new Map(DISTRICTS.map((d) => [d.name, d]));
export function districtPos(name: string): District | undefined {
  return DISTRICT_BY_NAME.get(name);
}

// Fixed anchors for the always-present zones.
const FIXED_ZONE_DISTRICT: Record<string, string> = {
  hub: "Toa Payoh",
  summit: "Bukit Timah",
  saltwind: "Marine Parade",
  campus: "one-north",
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
  const set = new Set<string>(["Toa Payoh", "Bukit Timah", "Marine Parade", "one-north"]);
  subjects.forEach((_, i) => set.add(PROVINCE_POOL[i % PROVINCE_POOL.length]));
  return set;
}
