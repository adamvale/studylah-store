import type { Level } from "@/lib/catalogue";

// Project Loudspeaker content: starter oral-practice items for O-Level (G3) and
// N(A)-Level (G2) Chinese and English, mapped to the real Paper 4 oral tasks
// (reading aloud + spoken conversation). A small seed set; Coddy expands it,
// the owner curates. No emojis, no dashes, minors-safe.

export type OralLang = "chinese" | "english";
export type OralMode = "read-aloud" | "conversation";

export interface OralItem {
  key: string;
  lang: OralLang;
  levels: Level[];
  mode: OralMode;
  title: string;
  // read-aloud: the passage to read. conversation: the question to answer.
  text: string;
  // Azure locale for scoring.
  langCode: "zh-CN" | "en-GB";
  hint?: string;
}

export const ORAL_ITEMS: OralItem[] = [
  // ── Chinese, reading aloud ────────────────────────────────────────────────
  {
    key: "zh-read-1",
    lang: "chinese",
    levels: ["o-level", "na-level"],
    mode: "read-aloud",
    title: "朗读短文：图书馆",
    text: "图书馆是学习的好地方。这里安静又舒适，同学们可以专心地看书和温习功课。放学以后，我常常到图书馆借书，然后找一个靠窗的位子坐下来阅读。",
    langCode: "zh-CN",
    hint: "读慢一点，注意每个字的声调。",
  },
  {
    key: "zh-read-2",
    lang: "chinese",
    levels: ["o-level", "na-level"],
    mode: "read-aloud",
    title: "朗读短文：健康饮食",
    text: "均衡的饮食对身体非常重要。我们应该多吃蔬菜和水果，少吃油炸和太甜的食物。除此以外，每天喝足够的水，也能让我们保持健康。",
    langCode: "zh-CN",
    hint: "注意“衡”“炸”这类字的发音。",
  },
  // ── Chinese, conversation ────────────────────────────────────────────────
  {
    key: "zh-conv-1",
    lang: "chinese",
    levels: ["o-level", "na-level"],
    mode: "conversation",
    title: "会话：周末的安排",
    text: "请说一说：你通常怎么安排周末的时间？为什么？",
    langCode: "zh-CN",
    hint: "先说做什么，再说原因，最后说你的感受。",
  },
  // ── English, reading aloud ───────────────────────────────────────────────
  {
    key: "en-read-1",
    lang: "english",
    levels: ["o-level", "na-level"],
    mode: "read-aloud",
    title: "Reading aloud: The morning market",
    text: "The morning market is busy from as early as six o'clock. Stallholders call out their prices, and the air is thick with the smell of fresh herbs and grilled food. Regular customers weave through the narrow aisles, greeting the sellers they have known for years.",
    langCode: "en-GB",
    hint: "Read at a steady pace and pronounce word endings clearly.",
  },
  {
    key: "en-read-2",
    lang: "english",
    levels: ["o-level", "na-level"],
    mode: "read-aloud",
    title: "Reading aloud: A close call",
    text: "The cyclist braked hard as the traffic light changed. For a moment the whole junction seemed to hold its breath. Then the cars edged forward, the crossing cleared, and the ordinary rhythm of the street returned as if nothing had happened.",
    langCode: "en-GB",
    hint: "Mind the linking between words and the stress on key verbs.",
  },
  // ── English, conversation ────────────────────────────────────────────────
  {
    key: "en-conv-1",
    lang: "english",
    levels: ["o-level", "na-level"],
    mode: "conversation",
    title: "Conversation: Screen time",
    text: "Some people say students spend too much time on their phones. What is your view, and how do you manage your own screen time?",
    langCode: "en-GB",
    hint: "State your view, give one reason with an example, then a personal habit.",
  },
];

export function oralItemsFor(lang: OralLang, level: Level): OralItem[] {
  return ORAL_ITEMS.filter((i) => i.lang === lang && i.levels.includes(level));
}

export function oralItem(key: string): OralItem | undefined {
  return ORAL_ITEMS.find((i) => i.key === key);
}
