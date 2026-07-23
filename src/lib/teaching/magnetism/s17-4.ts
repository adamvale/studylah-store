import type { Subconcept } from "@/lib/teaching/subconcepts";

// T17 Magnetism, section 4. Grounded in KB Chapter 19 (Magnetism) sections 19.7, 19.8.
// CONCEPTUAL: no numeric calculations, no working blocks, no formula fields. Spoken counts as digits.
// Figure colour key: a north pole N = red, a south pole S = blue; magnet bodies and soft iron keepers
// = white/grey; field lines and their arrows = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t17.4",
    code: "T17.4",
    title: "Soft and hard materials; storing magnets",
    blurb: "Why soft iron and steel behave so differently, and how to keep magnets strong",
    steps: [
      {
        kind: "concept",
        heading: "Soft magnetic materials",
        body: "A *soft* magnetic material such as *soft iron* is *easily magnetised* but loses its magnetism just as easily, so it makes only a temporary magnet. This is exactly what an electromagnet core, a relay or an electric bell needs.",
        say: "Soft iron picks up magnetism the instant a field is applied and drops it the instant the field is removed. Because that magnetism comes and goes so readily, soft iron makes only a temporary magnet. That is perfect for an electromagnet, a relay or an electric bell, where you want the magnetism to switch on and off with the current.",
      },
      {
        kind: "concept",
        heading: "Hard magnetic materials",
        body: "A *hard* magnetic material such as *steel* is *hard to magnetise*, but once magnetised it keeps its magnetism, so it makes a permanent magnet. Loudspeakers, motors and door catches all rely on hard magnets.",
        say: "Steel resists being magnetised, so it takes more effort to line up its domains. In return it holds onto that magnetism for a long time, which makes a permanent magnet. Loudspeakers, electric motors and cupboard door catches all use hard magnets so the magnetism stays put.",
      },
      {
        kind: "concept",
        heading: "\"Soft\" is about the magnetism, not the metal",
        body: "Here *soft* and *hard* describe how *easily the magnetism changes*, not how physically soft the metal is. Soft iron is a solid, hard metal to the touch; it is called soft only because its magnetism is *easily altered*.",
        say: "Do not take the words too literally. Soft iron is a genuinely hard, solid lump of metal you could not squash. It is called magnetically soft only because its magnetism is easily changed. Steel is called magnetically hard because its magnetism is difficult to change. The words describe the magnetism, not the feel of the metal.",
      },
      {
        kind: "concept",
        heading: "Storing magnets with keepers",
        figure: "fig-19-09-soft-iron-keepers",
        body: "Bar magnets are stored in pairs with *soft iron keepers* laid across opposite poles, so the poles join N-S-N-S in a *closed loop* with *no free poles* left exposed. This stops the magnets weakening and helps them *keep their strength*.",
        say: "In the picture 2 white bar magnets lie side by side, and 2 white soft iron keepers bridge their ends. A red north pole meets a blue south pole at every join, so the poles run north, south, north, south all the way round in a closed loop with no free poles sticking out. The soft iron carries the field neatly from one magnet to the next, and that keeps the stored magnets from slowly losing their strength.",
      },
      {
        kind: "match",
        prompt: "Match each magnetic material to how it behaves and where it is used.",
        pairs: [
          { left: "Soft iron", right: "Easily magnetised, loses it easily, used in electromagnets" },
          { left: "Steel", right: "Hard to magnetise, keeps its magnetism, used in permanent magnets" },
          { left: "Temporary magnet", right: "Magnetism switches on and off, as in a relay" },
          { left: "Permanent magnet", right: "Magnetism stays put, as in a loudspeaker" },
        ],
        ask: "Sort them by whether the magnetism comes and goes or stays. Soft iron and temporary magnets let go of their magnetism; steel and permanent magnets hold onto it.",
        hints: [
          "Soft iron is the easily magnetised one used in electromagnets; steel is the one that keeps its magnetism.",
          "A temporary magnet switches on and off like a relay; a permanent magnet stays magnetised like a loudspeaker magnet.",
        ],
        explain: "Soft iron is easily magnetised and demagnetised, so it makes temporary magnets for electromagnets and relays. Steel is hard to magnetise but keeps its magnetism, so it makes permanent magnets for loudspeakers and motors.",
      },
      {
        kind: "choice",
        question: "An engineer needs a core for an electromagnet that must switch its magnetism on and off with the current. Which material should the core be made from?",
        options: ["Steel, because it keeps its magnetism", "Soft iron, because its magnetism is easily changed", "Copper, because it carries current", "Aluminium, because it is light"],
        correct: 1,
        ask: "An electromagnet must lose its magnetism the moment the current stops, so pick the material whose magnetism is easily gained and lost.",
        hints: [
          "You want a temporary magnet, not a permanent one.",
          "Soft iron magnetises and demagnetises easily; steel would stay magnetised after the current stopped.",
        ],
        explain: "Soft iron is the right choice, because its magnetism is easily changed, so the core magnetises when the current flows and loses it when the current stops. Steel would stay magnetised, and copper and aluminium are not magnetic materials.",
      },
      {
        kind: "choice",
        question: "Which material is best for a permanent magnet in a loudspeaker?",
        options: ["Steel, because it keeps its magnetism once magnetised", "Soft iron, because it magnetises easily", "Wood, because it is cheap", "Plastic, because it is light"],
        correct: 0,
        ask: "A loudspeaker magnet must stay magnetised for years, so pick the material that holds onto its magnetism.",
        hints: [
          "You need a permanent magnet, so the magnetism must not fade.",
          "Steel is hard to magnetise but keeps its magnetism; soft iron would lose it.",
        ],
        explain: "Steel is best, because it is hard to magnetise but keeps its magnetism, giving a permanent magnet. Soft iron would lose its magnetism, and wood and plastic are non-magnetic.",
      },
      {
        kind: "choice",
        question: "Why are bar magnets stored in pairs with soft iron keepers across their ends?",
        options: ["To make the magnets physically heavier", "To turn the magnets into electromagnets", "So the poles form a closed N-S-N-S loop with no free poles, keeping the magnets strong", "To reverse the poles of the magnets"],
        correct: 2,
        ask: "Think about what the keepers do to the poles. They link the ends so the field runs round instead of leaking out into the air.",
        hints: [
          "The keepers join opposite poles so the field flows in a complete loop.",
          "With no free poles exposed, the domains are not disturbed, so the magnets keep their strength.",
        ],
        explain: "The keepers join opposite poles into a closed N-S-N-S loop with no free poles exposed, so the field is carried neatly round the loop and the magnets keep their strength instead of slowly weakening.",
      },
      {
        kind: "choice",
        question: "A sensitive instrument is protected from a nearby magnetic field by surrounding it with a case. Which material and reason are correct?",
        options: ["Copper, because it blocks all magnetism", "Plastic, because it repels field lines", "Steel, because it becomes a permanent magnet around the instrument", "Soft iron, because it channels the field lines around the instrument"],
        correct: 3,
        ask: "Magnetic shielding works by giving the field an easy path through a soft magnetic material so it goes round the instrument rather than through it.",
        hints: [
          "The shield must guide the field lines, so it has to be a magnetic material that magnetises easily.",
          "Soft iron draws the field lines into itself and carries them around the space inside.",
        ],
        explain: "Soft iron is used for magnetic shielding, because it is easily magnetised and channels the field lines into itself and around the instrument, leaving the space inside almost field free.",
      },
      {
        kind: "insight",
        body: "One property splits the two worlds: soft materials let magnetism *come and go* for *temporary* magnets and shielding, while hard materials *hold* magnetism for permanent magnets. Storing magnets with soft iron keepers borrows the soft behaviour to protect the hard.",
        say: "Keep this single idea. Whether a material is magnetically soft or hard comes down to one thing, how easily its magnetism changes. Soft iron lets magnetism come and go, which is why it suits electromagnets and shielding. Steel holds its magnetism, which is why it makes permanent magnets. And when we store those permanent magnets, soft iron keepers close the loop and keep them strong.",
      },
    ],
  },
];
