import type { Subconcept } from "@/lib/teaching/subconcepts";

// T17 Magnetism, section 1. Grounded in KB Chapter 19 (Magnetism) sections 19.1, 19.2, 19.3.
// Conceptual chapter: no formulas, no working. Figure colour key: a north pole (N) = red,
// a south pole (S) = blue, the magnet body / iron bar = white, domain arrows = small grey/white
// arrows, field lines and their arrows = grey. Digits for spoken numbers.

export const BOXES: Subconcept[] = [
  {
    id: "t17.1",
    code: "T17.1",
    title: "Magnets, poles and the law of poles",
    blurb: "What makes a material magnetic, and how poles push and pull",
    steps: [
      {
        kind: "concept",
        heading: "Materials are made of domains",
        figure: "fig-19-01-domains",
        body: "Every magnetic material is built from tiny atomic magnets grouped into regions called *domains*. In a *magnetised* material the domains all point the same way, so their fields add up; in an *unmagnetised* material they point at random, so their fields cancel.",
        say: "This figure has 2 panels. On the left is a magnetised material: the white block is full of small grey domain arrows that all point the same way, so their fields add and the block acts as a magnet. On the right is an unmagnetised material: the same grey domain arrows now point every which way, so their fields cancel out and there is no overall magnet.",
      },
      {
        kind: "concept",
        heading: "Which materials are magnetic",
        body: "Only a few materials are *magnetic*: *iron*, cobalt and nickel, together with alloys such as *steel*. Common materials like copper, aluminium, wood and plastic are *non-magnetic*, so a magnet does not attract them.",
        say: "Magnetism is fussy about materials. Iron, cobalt and nickel are magnetic, and so are alloys made from them, such as steel. But copper, aluminium, wood and plastic feel no pull at all, so we call them non-magnetic. If a magnet ignores an object, that object is probably not a magnetic material.",
      },
      {
        kind: "concept",
        heading: "A magnet has two poles",
        figure: "fig-19-02-suspended-magnet",
        body: "Every magnet has *two poles*, a *north* (N) and a *south* (S), where the magnetism is strongest. Hang a magnet so it can swing freely and it settles pointing north to south, with its north-seeking pole turned toward geographic north.",
        say: "In this figure a bar magnet hangs from a thread and is free to turn. Its north pole is drawn red and its south pole blue. Left alone, it swings round and settles pointing north to south, because the red north-seeking pole is pulled toward the Earth's geographic north. A magnet always keeps these 2 poles, and its pull is strongest right at the ends.",
      },
      {
        kind: "concept",
        heading: "The law of poles",
        figure: "fig-19-03-pole-law",
        body: "The *law of poles* is simple: *like poles repel* and *unlike poles attract*. A magnet will attract any magnetic material, but only another magnet can *repel* it.",
        say: "This figure has 2 parts. On the left an unlike pair, a red north facing a blue south, are pulled together because unlike poles attract. On the right a like pair, 2 red norths or 2 blue souths facing each other, are pushed apart because like poles repel. Keep the phrase in mind: like poles repel, unlike poles attract.",
      },
      {
        kind: "choice",
        question: "A steel bar is a magnet. How are the domains inside it arranged?",
        figure: "fig-19-01-domains",
        options: [
          "They point in every direction at random",
          "Half point one way and half the other, so the fields cancel",
          "They all point the same way, so their fields add",
          "The bar contains no domains while it is a magnet",
        ],
        correct: 2,
        ask: "A magnet is a magnetised material. Think about which arrangement of domains makes all the little fields add up rather than cancel.",
        hints: [
          "Random domains cancel and give no overall magnet, so a magnet is not random.",
          "In a magnet the domains line up the same way, so their fields add together.",
        ],
        explain: "In a magnet the domains all point the same way, so their fields add and the bar has a strong overall magnetism. Random domains would cancel and leave no magnet.",
      },
      {
        kind: "classify",
        prompt: "Sort each material by whether a magnet attracts it.",
        bins: ["Magnetic", "Non-magnetic"],
        items: [
          { text: "Iron", bin: 0 },
          { text: "Steel", bin: 0 },
          { text: "Cobalt", bin: 0 },
          { text: "Nickel", bin: 0 },
          { text: "Copper", bin: 1 },
          { text: "Aluminium", bin: 1 },
          { text: "Wood", bin: 1 },
          { text: "Plastic", bin: 1 },
        ],
        ask: "Only iron, cobalt, nickel and their alloys such as steel are magnetic. Tap each material and drop it in the right bin.",
        hints: [
          "Iron, cobalt, nickel and steel are the magnetic ones.",
          "Copper, aluminium, wood and plastic are not attracted by a magnet.",
        ],
        explain: "Iron, cobalt, nickel and steel are magnetic materials that a magnet attracts. Copper, aluminium, wood and plastic are non-magnetic and feel no pull.",
      },
      {
        kind: "choice",
        question: "The north pole of one magnet is brought up to the south pole of another. What happens?",
        figure: "fig-19-03-pole-law",
        options: [
          "They repel, because these are like poles",
          "They attract, because these are unlike poles",
          "Nothing happens between 2 different poles",
          "They repel, because unlike poles always repel",
        ],
        correct: 1,
        ask: "A north and a south are unlike poles. Recall what the law of poles says unlike poles do.",
        hints: [
          "North and south are different, so they are unlike poles.",
          "Unlike poles attract, so a north and a south are pulled together.",
        ],
        explain: "A north and a south are unlike poles, and unlike poles attract, so the 2 magnets are pulled together. Like poles, such as north and north, would repel instead.",
      },
      {
        kind: "choice",
        question: "A steel paperclip is pulled toward a metal bar. Does this prove the bar is a magnet?",
        figure: "fig-19-03-pole-law",
        options: [
          "Yes, only a magnet can attract a steel paperclip",
          "Yes, attraction is the sure test for a magnet",
          "No, because a steel paperclip is non-magnetic",
          "No, since a magnet attracts any magnetic material, so only repulsion is a sure test",
        ],
        correct: 3,
        ask: "A magnet attracts plain magnetic materials as well as other magnets, so attraction on its own is not decisive. Think about which effect only a magnet can produce.",
        hints: [
          "An ordinary magnetic material is attracted by a magnet, so attraction does not single out a magnet.",
          "Only another magnet can repel a magnet, so repulsion is the one sure test.",
        ],
        explain: "Attraction is not proof, because a magnet also pulls on ordinary magnetic materials like a steel clip. Only repulsion, which needs 2 magnets, is a sure test that the bar is a magnet.",
      },
      {
        kind: "insight",
        body: "*Attraction* alone never proves something is a magnet, because a magnet also pulls on plain magnetic materials. Only *repulsion* between poles proves you are holding a real magnet.",
        say: "Here is the idea to keep. A magnet grabs any magnetic material, so seeing attraction tells you very little. Repulsion is different: only 2 real magnets can push each other apart. So if you ever want to be sure an object is a magnet, look for repulsion, not attraction.",
      },
    ],
  },
];
