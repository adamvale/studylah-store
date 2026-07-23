import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, section 3. Grounded in KB Chapter 11 (General Wave Properties) sections 11.5, 11.6.
// Figure colours follow the carry-over colour key: the wave curve = blue; the rest/equilibrium line = grey dashed;
// dimension markers (amplitude) = grey; points and dots = white. CONCEPTUAL box: no working, no formula.

export const BOXES: Subconcept[] = [
  {
    id: "t10.3",
    code: "T10.3",
    title: "Amplitude and points in phase",
    blurb: "What amplitude measures, why it sets the energy, and when 2 points are in phase",
    steps: [
      {
        kind: "concept",
        heading: "Points in phase",
        figure: "fig-11-08-in-phase",
        body: "2 points on a wave are *in phase* when they sit at the *same position* relative to the rest line and are moving the *same* way. Points that are exactly *one wavelength* apart are always in phase.",
        say: "In the picture a blue wave runs across the screen. 3 white points are marked and labelled these 3 are in phase, and each one sits one wavelength apart from the next. They are all at the same stage of the wave and moving the same way. A crest and a trough are also marked, but they are labelled not in phase, because one is at the top while the other is at the bottom.",
      },
      {
        kind: "concept",
        heading: "What amplitude is",
        figure: "fig-11-09-amplitude",
        body: "The *amplitude* A of a wave is the *maximum displacement* of a point from its *rest position*. Measured up to a crest or down to a trough it gives the *same value*.",
        say: "This figure shows a blue wave drawn against a grey dashed rest line, the level where the particles sit when nothing disturbs them. 2 grey markers labelled A are drawn: one reaches up from the rest line to a crest, the other reaches down from the rest line to a trough. Both have the same length, because the amplitude is the largest displacement from rest, and a crest and a trough give the same value.",
      },
      {
        kind: "concept",
        heading: "Amplitude carries the energy",
        figure: "fig-11-10-amplitude-energy",
        body: "A *larger amplitude* means the wave carries *more energy*. The wavelength can be unchanged, yet the taller wave still delivers more energy.",
        say: "This figure stacks 2 panels with the same wavelength. In the top panel a blue wave has a small amplitude and is labelled less energy. In the bottom panel a blue wave of the same wavelength has a large amplitude and is labelled more energy. So for a given wave, the taller it swings from the rest line, the more energy it carries.",
      },
      {
        kind: "choice",
        question: "Which statement correctly defines the amplitude of a wave?",
        options: [
          "The distance from one crest to the next crest",
          "The full height measured from a crest down to a trough",
          "The maximum displacement of a point from its rest position",
          "The time taken for one complete wave to pass",
        ],
        correct: 2,
        ask: "Amplitude is measured from the rest line, not from crest to trough, and it is a displacement, not a distance along the wave or a time.",
        hints: [
          "Start at the rest line and measure how far a point moves at its furthest.",
          "It is the largest displacement from rest, up to a crest or down to a trough.",
        ],
        explain: "The amplitude is the maximum displacement of a point from its rest position. Crest to trough is twice the amplitude, crest to crest is the wavelength, and one complete wave in time is the period.",
      },
      {
        kind: "choice",
        question: "2 water waves have the same wavelength, but wave X has a larger amplitude than wave Y. Which statement is correct?",
        options: [
          "Wave X carries less energy than wave Y",
          "Wave X carries more energy than wave Y",
          "Both waves carry exactly the same energy",
          "Amplitude has no effect on the energy carried",
        ],
        correct: 1,
        ask: "For a given wave, energy grows with amplitude, so the taller wave carries more.",
        hints: [
          "A bigger swing from the rest line means more energy.",
          "Wave X has the larger amplitude, so it carries the greater energy.",
        ],
        explain: "Wave X carries more energy, because a larger amplitude means more energy is transferred, even when the wavelength is the same.",
      },
      {
        kind: "choice",
        question: "Look at the marked points on the wave. Which pair of points is in phase?",
        figure: "fig-11-08-in-phase",
        options: [
          "A crest and the next trough",
          "A crest and the point a quarter wavelength further along",
          "A crest and the point half a wavelength further along",
          "2 crests that are one wavelength apart",
        ],
        correct: 3,
        ask: "In phase means the same position relative to the rest line and moving the same way. Points one wavelength apart match; a crest and a trough do not.",
        hints: [
          "A crest and a trough are on opposite sides of the rest line, so they are not in phase.",
          "2 crests one wavelength apart are at the same stage and moving the same way.",
        ],
        explain: "2 crests one wavelength apart are in phase, because points a whole wavelength apart are always at the same position and moving the same way. A crest and a trough are on opposite sides of the rest line, so they are not in phase.",
      },
      {
        kind: "match",
        prompt: "Match each wave term to its correct meaning.",
        pairs: [
          { left: "Amplitude", right: "Maximum displacement from the rest position" },
          { left: "In phase", right: "Same position relative to rest and moving the same way" },
          { left: "One wavelength apart", right: "A separation that always leaves 2 points in phase" },
          { left: "Larger amplitude", right: "More energy carried by the wave" },
        ],
        ask: "Pair each term with the phrase that defines it. Amplitude is about displacement, in phase is about matching motion, and amplitude is linked to energy.",
        hints: [
          "Amplitude is the largest displacement from rest, and a bigger amplitude means more energy.",
          "2 points one wavelength apart are in phase: same position, same direction of motion.",
        ],
        explain: "Amplitude is the maximum displacement from rest, and a larger amplitude carries more energy. Points that are in phase share the same position relative to rest and move the same way, which is exactly what happens for points one wavelength apart.",
      },
      {
        kind: "insight",
        body: "*Amplitude* tells you the *energy* a wave carries, while being *in phase* tells you which points march in step. Points *one wavelength apart* stay in step; a crest and a trough never do.",
        say: "Here is the idea to keep. Amplitude is the maximum swing from the rest line, and the taller that swing, the more energy the wave carries. Being in phase is a separate idea: it is about which points move together. Any 2 points one wavelength apart are in phase, moving in step, while a crest and a trough are always out of step.",
      },
    ],
  },
];
