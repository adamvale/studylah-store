// The project-wide icon set. Owner rule: no emoji anywhere, every glyph is a
// stroke SVG on currentColor so it inherits text colour and re-themes with
// the tokens. All icons share the 24x24 grid and the same stroke weight.

import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function base(size: number | undefined, props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  return {
    viewBox: "0 0 24 24",
    width: size ?? 18,
    height: size ?? 18,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className,
    ...rest,
  };
}

function make(name: string, d: string) {
  function IconComponent({ size, ...props }: IconProps) {
    return (
      <svg {...base(size, props)}>
        <path d={d} />
      </svg>
    );
  }
  IconComponent.displayName = name;
  return IconComponent;
}

export const IconFlame = make(
  "IconFlame",
  "M12 21c-3.9 0-6.5-2.4-6.5-6 0-2.6 1.6-4.6 3-6.2.9-1 1.9-2.2 2.4-3.8.2-.7 1-.9 1.5-.4 1.3 1.3 2.1 3 1.9 4.9 1-.4 1.6-1 2-1.8.3-.6 1.1-.6 1.4 0 .8 1.5 1.8 3.6 1.8 5.7 0 3.9-3 7.6-7.5 7.6Zm0 0c1.7 0 3-1.3 3-3s-1.4-2.6-3-4c-1.6 1.4-3 2.3-3 4s1.3 3 3 3Z"
);
export const IconCheckCircle = make(
  "IconCheckCircle",
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-3.5-9 2.5 2.5 4.5-5"
);
export const IconCheck = make("IconCheck", "m5 12.5 4.5 4.5L19 7");
export const IconRepeat = make(
  "IconRepeat",
  "M4 12a8 8 0 0 1 13.6-5.7L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.6 5.7L4 15.5M4 20v-4.5h4.5"
);
export const IconCrown = make(
  "IconCrown",
  "M4 8.5 8 12l4-6 4 6 4-3.5-1.5 9.5h-13L4 8.5Zm2.5 12h11"
);
export const IconCap = make(
  "IconCap",
  "m12 4 10 4.5L12 13 2 8.5 12 4Zm-6 6.7V15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.3M22 8.5V14"
);
export const IconTarget = make(
  "IconTarget",
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-4h.01"
);
export const IconBolt = make("IconBolt", "M13 3 5 13.5h5.5L10 21l8-10.5h-5.5L13 3Z");
export const IconSwords = make(
  "IconSwords",
  "m4 4 6.5 6.5M4 4v3.5M4 4h3.5M20 4l-6.5 6.5M20 4v3.5M20 4h-3.5M7 13l4 4-3.5 3.5-2-2L7 17l-1.5-1.5L7 13Zm10 0-4 4 3.5 3.5 2-2L17 17l1.5-1.5L17 13Z"
);
export const IconMap = make(
  "IconMap",
  "M9 5 3 7v12l6-2 6 2 6-2V5l-6 2-6-2Zm0 0v12m6-10v12"
);
export const IconGhost = make(
  "IconGhost",
  "M12 3a7 7 0 0 0-7 7v10l2.3-1.8L9.7 20l2.3-1.8L14.3 20l2.4-1.8L19 20V10a7 7 0 0 0-7-7Zm-2.5 8h.01M14.5 11h.01"
);
export const IconTimer = make(
  "IconTimer",
  "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-12v4l2.5 2.5M9.5 2.5h5"
);
export const IconLifebuoy = make(
  "IconLifebuoy",
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5.6 5.6l3.6 3.6m5.6 5.6 3.6 3.6m0-12.8-3.6 3.6m-5.6 5.6-3.6 3.6"
);
export const IconCastle = make(
  "IconCastle",
  "M5 21V9M5 9V4h2.5v2H10V4h4v2h2.5V4H19v5m0 0v12M5 9h14M5 21h14m-9.5 0v-4a2.5 2.5 0 0 1 5 0v4"
);
export const IconGamepad = make(
  "IconGamepad",
  "M7 8h10a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-1l-2-2h-4l-2 2H7a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4Zm1.5 3.5v3M6 13h3m6.5-.5h.01M18 14h.01"
);
export const IconBook = make(
  "IconBook",
  "M4 6.5C6.5 5 9.5 5 12 6.5c2.5-1.5 5.5-1.5 8 0V18c-2.5-1.5-5.5-1.5-8 0-2.5-1.5-5.5-1.5-8 0V6.5ZM12 6.5V18"
);
export const IconChart = make("IconChart", "M4 19h16M7 19v-6m5 6V9m5 10v-9");
export const IconShield = make(
  "IconShield",
  "M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z"
);
export const IconLock = make(
  "IconLock",
  "M7 10V8a5 5 0 0 1 10 0v2m-11 0h12v9H6v-9Zm6 3v3"
);
export const IconSparkle = make(
  "IconSparkle",
  "M12 4c.6 3.5 2.5 5.4 6 6-3.5.6-5.4 2.5-6 6-.6-3.5-2.5-5.4-6-6 3.5-.6 5.4-2.5 6-6Zm7 10 .4 2.1L21.5 16.5l-2.1.4-.4 2.1-.4-2.1-2.1-.4 2.1-.4.4-2.1Z"
);
export const IconPhone = make(
  "IconPhone",
  "M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3Zm2 15h4"
);
export const IconBell = make(
  "IconBell",
  "M6 16v-5.5a6 6 0 0 1 12 0V16l1.5 2h-15L6 16Zm4 5a2 2 0 0 0 4 0"
);
export const IconTrophy = make(
  "IconTrophy",
  "M8 4h8v6a4 4 0 0 1-8 0V4Zm0 1H4.5V8A3.5 3.5 0 0 0 8 11.5M16 5h3.5V8a3.5 3.5 0 0 1-3.5 3.5M12 14v3m-4 4h8m-6.5 0 .5-4h4l.5 4"
);
export const IconStar = make(
  "IconStar",
  "m12 3.5 2.5 5.2 5.7.7-4.2 4 1.1 5.6L12 16.2 6.9 19l1.1-5.6-4.2-4 5.7-.7L12 3.5Z"
);
export const IconFlask = make(
  "IconFlask",
  "M10 3h4m-3 0v6l-5.2 8.7A2 2 0 0 0 7.5 21h9a2 2 0 0 0 1.7-3.3L13 9V3M8.5 15h7"
);
export const IconAtom = make(
  "IconAtom",
  "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8-6.5c1.8 1.8-1 6.5-6.2 11.7C8.5 23.4 3.8 26.2 2 24.4m0 0C.2 22.6 3 17.9 8.2 12.7 13.5 7.4 18.2 4.6 20 6.4M20 6.5c-1.8-1.8-6.5 1-11.8 6.2C3 17.9.2 22.6 2 24.4"
);
export const IconLeaf = make(
  "IconLeaf",
  "M5 19C4 9 9 4 20 4c0 11-5 16-13 15Zm0 0c2-5 5-8 9-10"
);
export const IconCalculator = make(
  "IconCalculator",
  "M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 3h8v3H8V6Zm0 6h.01M12 12h.01M16 12h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01"
);
export const IconPencil = make(
  "IconPencil",
  "m14.5 5 4.5 4.5L8.5 20H4v-4.5L14.5 5Zm-2 2 4.5 4.5"
);
export const IconMail = make(
  "IconMail",
  "M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1.5 8 6 8-6"
);
export const IconWarning = make(
  "IconWarning",
  "M12 4 2.5 20h19L12 4Zm0 6v4.5m0 3v.01"
);
export const IconCamera = make(
  "IconCamera",
  "M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
);
export const IconMic = make(
  "IconMic",
  "M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3ZM6 11a6 6 0 0 0 12 0M12 17v4m-3 0h6"
);
export const IconInfo = make(
  "IconInfo",
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v.01M12 11v6"
);
export const IconSkull = make(
  "IconSkull",
  "M12 3a8 8 0 0 0-8 8c0 2.5 1.2 4.6 3 6v3h10v-3c1.8-1.4 3-3.5 3-6a8 8 0 0 0-8-8Zm-3 9.5h.01m5.99 0h.01M10 21v-2m4 2v-2"
);
export const IconHeart = make(
  "IconHeart",
  "M12 20 5 13.2a4.6 4.6 0 0 1 0-6.5 4.4 4.4 0 0 1 6.3 0l.7.7.7-.7a4.4 4.4 0 0 1 6.3 0 4.6 4.6 0 0 1 0 6.5L12 20Z"
);
export const IconRocket = make(
  "IconRocket",
  "M12 15c5-4 7-8 6.5-12.5C14 2 10 4 6 9m6 6-3-3m3 3-1.5 4-2.5-2.5L4 18l1.5-4L3 11.5 7 10m8.5-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
);
export const IconBrain = make(
  "IconBrain",
  "M9.5 4A2.5 2.5 0 0 0 7 6.5c-2 .3-3 1.7-3 3.5 0 1 .3 1.8 1 2.5-.7.7-1 1.5-1 2.5 0 2 1.5 3.5 3.5 3.5.3 1.2 1.4 2 2.5 2 1.4 0 2.5-1.1 2.5-2.5v-11A2.5 2.5 0 0 0 10 4h-.5Zm5 0A2.5 2.5 0 0 1 17 6.5c2 .3 3 1.7 3 3.5 0 1-.3 1.8-1 2.5.7.7 1 1.5 1 2.5 0 2-1.5 3.5-3.5 3.5-.3 1.2-1.4 2-2.5 2-1.4 0-2.5-1.1-2.5-2.5"
);
export const IconEye = make(
  "IconEye",
  "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
);
export const IconClock = make(
  "IconClock",
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 3"
);
export const IconCalendar = make(
  "IconCalendar",
  "M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm-1 5h16M8 3.5v4m8-4v4"
);
export const IconDownload = make(
  "IconDownload",
  "M12 4v10m0 0 4-4m-4 4-4-4M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2"
);
export const IconChat = make(
  "IconChat",
  "M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Z"
);
export const IconKey = make(
  "IconKey",
  "M14.5 14a5.5 5.5 0 1 0-5.2-3.8L3 16.5V21h4.5v-2.5H10V16h2.5l1-1.2c.3.1.7.2 1 .2Zm1-6.5h.01"
);
export const IconCompass = make(
  "IconCompass",
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z"
);
export const IconScroll = make(
  "IconScroll",
  "M7 3h11a2 2 0 0 1 2 2v2h-4M7 3a2 2 0 0 1 2 2v13a3 3 0 0 1-3 3m1-18a2 2 0 0 0-2 2v2h4m-2 14h11a3 3 0 0 0 3-3v-1H9m-3 4a3 3 0 0 1-3-3v-1h3"
);
export const IconDice = make(
  "IconDice",
  "M5 5h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3.5 4h.01m6.99 0h.01M12 12h.01M8.5 15h.01m6.99 0h.01"
);
export const IconWand = make(
  "IconWand",
  "m5 19 9-9m2.5-2.5L19 5M15 3.5v.01M20.5 9h.01M18 13.5l1.5 1.5M8 5.5 9.5 7"
);
export const IconBattery = make(
  "IconBattery",
  "M3 9h15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm19 2v2M5.5 11.5v1m3-1v1m3-1v1"
);
export const IconMoon = make(
  "IconMoon",
  "M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"
);
export const IconGear = make(
  "IconGear",
  "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.5-3c0-.6-.1-1.2-.2-1.8l2-1.5-2-3.4-2.3 1a7.6 7.6 0 0 0-3-1.8L13.7 2h-3.4L10 4.5a7.6 7.6 0 0 0-3 1.8l-2.3-1-2 3.4 2 1.5a7.8 7.8 0 0 0 0 3.6l-2 1.5 2 3.4 2.3-1a7.6 7.6 0 0 0 3 1.8l.3 2.5h3.4l.3-2.5a7.6 7.6 0 0 0 3-1.8l2.3 1 2-3.4-2-1.5c.1-.6.2-1.2.2-1.8Z"
);
export const IconDrop = make(
  "IconDrop",
  "M12 3.5c3.5 4.2 6 7.6 6 11a6 6 0 0 1-12 0c0-3.4 2.5-6.8 6-11Zm-2.5 11a2.5 2.5 0 0 0 2.5 2.5"
);

// Data-driven lookup for cards authored as plain objects (Learn hub, drills,
// war room). Add here rather than re-introducing glyph fields.
export const NAMED_ICONS = {
  target: IconTarget,
  bolt: IconBolt,
  swords: IconSwords,
  map: IconMap,
  ghost: IconGhost,
  timer: IconTimer,
  lifebuoy: IconLifebuoy,
  castle: IconCastle,
  gamepad: IconGamepad,
  book: IconBook,
  chart: IconChart,
  shield: IconShield,
  lock: IconLock,
  sparkle: IconSparkle,
  phone: IconPhone,
  bell: IconBell,
  trophy: IconTrophy,
  star: IconStar,
  flask: IconFlask,
  atom: IconAtom,
  leaf: IconLeaf,
  calculator: IconCalculator,
  pencil: IconPencil,
  brain: IconBrain,
  eye: IconEye,
  clock: IconClock,
  calendar: IconCalendar,
  chat: IconChat,
  key: IconKey,
  compass: IconCompass,
  scroll: IconScroll,
  dice: IconDice,
  wand: IconWand,
  flame: IconFlame,
  repeat: IconRepeat,
  crown: IconCrown,
  cap: IconCap,
  heart: IconHeart,
  skull: IconSkull,
  rocket: IconRocket,
  check: IconCheckCircle,
  moon: IconMoon,
  gear: IconGear,
  drop: IconDrop,
  camera: IconCamera,
  mic: IconMic,
} as const;

export type IconName = keyof typeof NAMED_ICONS;

export function NamedIcon({ name, ...props }: { name: IconName } & IconProps) {
  const Cmp = NAMED_ICONS[name];
  return <Cmp {...props} />;
}
