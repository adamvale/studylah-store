"use client";

import {
  sheetSprite,
  SHEET_DIMS,
  monsterBlockX,
  guardianX,
  portraitXY,
  uiXY,
  heartXY,
  type GuardianName,
  type PortraitName,
} from "@/lib/game/sheets";

// DOM-side sprites from the original StudyLah Legends sheets (background-position
// cropping, integer scale, pixelated). Canvas handles the overworld; these
// cover dialogue portraits, battle monsters, hearts, emblems and FX.

function Region({
  sheet,
  sx,
  sy,
  w,
  h,
  scale,
  className,
  label,
}: {
  sheet: keyof typeof SHEET_DIMS;
  sx: number;
  sy: number;
  w: number;
  h: number;
  scale: number;
  className?: string;
  label?: string;
}) {
  const [sw, sh] = SHEET_DIMS[sheet];
  return (
    <span
      className={`inline-block shrink-0 ${className ?? ""}`}
      style={sheetSprite(sheet as Parameters<typeof sheetSprite>[0], sx, sy, w, h, scale, sw, sh)}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}

export function MonsterSprite({
  species,
  shiny = false,
  stage = 1,
  scale = 3,
  className,
  label,
}: {
  species: string;
  shiny?: boolean;
  stage?: 1 | 2 | 3;
  scale?: number;
  className?: string;
  label?: string;
}) {
  const block = monsterBlockX(species);
  if (stage > 1) {
    // evolutions sheet: stages 2 & 3 side by side per 64px block
    return (
      <Region
        sheet="monsters_evolutions"
        sx={block + (stage === 2 ? 0 : 32)}
        sy={0}
        w={32}
        h={32}
        scale={scale}
        className={className}
        label={label}
      />
    );
  }
  return (
    <Region
      sheet="monsters"
      sx={block + (shiny ? 32 : 0)}
      sy={0}
      w={32}
      h={32}
      scale={scale}
      className={className}
      label={label}
    />
  );
}

export function GuardianSprite({
  name,
  scale = 3,
  className,
  label,
}: {
  name: GuardianName;
  scale?: number;
  className?: string;
  label?: string;
}) {
  return (
    <Region sheet="guardians" sx={guardianX(name)} sy={0} w={32} h={32} scale={scale} className={className} label={label} />
  );
}

export function PortraitSprite({
  name,
  emotive = false,
  scale = 2,
  className,
}: {
  name: PortraitName;
  emotive?: boolean;
  scale?: number;
  className?: string;
}) {
  const [sx, sy] = portraitXY(name, emotive);
  return <Region sheet="portraits" sx={sx} sy={sy} w={48} h={48} scale={scale} className={className} />;
}

export function UiSprite({
  name,
  scale = 2,
  className,
  label,
}: {
  name: string;
  scale?: number;
  className?: string;
  label?: string;
}) {
  const [sx, sy] = uiXY(name);
  return <Region sheet="ui" sx={sx} sy={sy} w={16} h={16} scale={scale} className={className} label={label} />;
}

export function HeartSprite({
  kind,
  scale = 1.5,
  className,
}: {
  kind: "full" | "half" | "empty";
  scale?: number;
  className?: string;
}) {
  const [sx, sy] = heartXY(kind);
  return <Region sheet="ui" sx={sx} sy={sy} w={16} h={16} scale={scale} className={className} />;
}

export function HeartRow({ current, max, scale = 1.5 }: { current: number; max: number; scale?: number }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${current} of ${max} hearts`}>
      {Array.from({ length: max }, (_, i) => (
        <HeartSprite key={i} kind={i < current ? "full" : "empty"} scale={scale} />
      ))}
    </span>
  );
}

// 4-frame gold capture swirl, animated via CSS steps (see globals.css).
// Fixed 2× scale, the keyframe offsets are baked for it.
export function CaptureSwirl() {
  const [sw, sh] = SHEET_DIMS.fx;
  return (
    <span
      className="ff-capture-swirl inline-block"
      style={{
        width: 32,
        height: 32,
        backgroundPosition: "-160px 0",
        backgroundImage: "url(/game/fx.png)",
        backgroundSize: `${sw * 2}px ${sh * 2}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
      }}
      aria-hidden
    />
  );
}
