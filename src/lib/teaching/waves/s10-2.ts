import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, section 2. Grounded in KB Chapter 11 (11.3, 11.4).
// Figure colours follow the carry-over colour key: wave curve = blue, travel-direction arrow = yellow,
// vibration-direction arrow = green, rest line/dimension markers = grey, particle dots/source dot = white.

export const BOXES: Subconcept[] = [
  {
    id: "t10.2",
    code: "T10.2",
    title: "Wavefronts; transverse and longitudinal",
    blurb: "Lines that join a wave's crests, and the two families all waves fall into",
    steps: [
      {
        kind: "concept",
        heading: "What a wavefront is",
        figure: "fig-11-05-wavefront",
        body: "A *wavefront* joins all the points that are at the *same stage of vibration*, such as a whole crest. The wave always travels *at right angles* to its wavefronts, and neighbouring wavefronts are one *wavelength* apart.",
        say: "In the picture a white dot in the middle is the source, and blue rings spread out around it like ripples on a pond. Each blue ring is one wavefront, a line joining points that are all at the same stage of their vibration, for example all sitting on a crest at once. The wave moves outward at right angles to these rings, and each ring is one wavelength from the next.",
      },
      {
        kind: "concept",
        heading: "Transverse waves",
        figure: "fig-11-06-transverse-wave",
        body: "In a *transverse* wave the particles vibrate *perpendicular* to the direction the wave travels. This kind of wave has *crests* and *troughs*. Water waves and all electromagnetic waves, including light, are transverse.",
        say: "The blue curve is a transverse wave. A green arrow points up and down to show that the particles vibrate up and down, while a yellow arrow points sideways to show the wave travelling that way. Notice the vibration sits at 90 degrees to the travel direction, which is what makes it transverse. These waves have high points called crests and low points called troughs. Water ripples and every electromagnetic wave, light included, behave like this.",
      },
      {
        kind: "concept",
        heading: "Longitudinal waves",
        figure: "fig-11-07-longitudinal-wave",
        body: "In a *longitudinal* wave the particles vibrate *parallel* to the direction the wave travels. Instead of crests and troughs it has *compressions*, where particles bunch together, and *rarefactions*, where they spread apart. Sound and a push-pull wave on a spring are longitudinal.",
        say: "Here the wave is drawn as white particles. Where they bunch tightly together is a compression, and where they are spread far apart is a rarefaction, both labelled on the figure. A green arrow points left and right to show that the particles vibrate along the same line the wave moves, and a yellow arrow shows that travel direction. Because the shaking is along the travel line, this is a longitudinal wave. Sound in air and a push-pull wave sent down a spring are the everyday examples.",
      },
      {
        kind: "match",
        prompt: "Match each wave type or feature to its correct description.",
        pairs: [
          { left: "Transverse wave", right: "particles vibrate perpendicular to the travel direction" },
          { left: "Longitudinal wave", right: "particles vibrate parallel to the travel direction" },
          { left: "Crests and troughs", right: "the high and low points of a transverse wave, like water" },
          { left: "Compressions and rarefactions", right: "the bunched and spread regions of a longitudinal wave, like sound" },
        ],
        ask: "Sort by the direction of vibration first: perpendicular means transverse, parallel means longitudinal. Crests and troughs belong to one family, compressions and rarefactions to the other.",
        hints: [
          "A transverse wave shakes across the travel line and shows crests and troughs; a longitudinal wave shakes along it and shows compressions and rarefactions.",
          "Water and light are transverse; sound is longitudinal.",
        ],
        explain: "A transverse wave vibrates perpendicular to travel and has crests and troughs, as with water and light. A longitudinal wave vibrates parallel to travel and has compressions and rarefactions, as with sound.",
      },
      {
        kind: "choice",
        question: "In which type of wave do the particles vibrate in the same direction that the wave travels?",
        figure: "fig-11-07-longitudinal-wave",
        options: ["A transverse wave", "A wavefront", "A longitudinal wave", "An electromagnetic wave"],
        correct: 2,
        ask: "Parallel to travel means the shaking is along the same line as the motion. Which family does that describe?",
        hints: [
          "Transverse waves vibrate across the travel line; the other family vibrates along it.",
          "The wave with compressions and rarefactions is the one whose particles move back and forth along the travel direction.",
        ],
        explain: "It is a longitudinal wave, because in a longitudinal wave the particles vibrate parallel to the direction of travel, giving compressions and rarefactions. A transverse wave vibrates perpendicular to travel instead.",
      },
      {
        kind: "classify",
        prompt: "Sort each example by the type of wave it is.",
        bins: ["Transverse", "Longitudinal"],
        items: [
          { text: "Ripples on water", bin: 0 },
          { text: "A beam of light", bin: 0 },
          { text: "Sound travelling through air", bin: 1 },
          { text: "A push-pull wave on a spring", bin: 1 },
        ],
        ask: "Ask whether the particles shake across the travel direction (transverse) or back and forth along it (longitudinal). Tap each example and drop it in its bin.",
        hints: [
          "Water waves and all electromagnetic waves, including light, are transverse.",
          "Sound and a push-pull spring wave are longitudinal.",
        ],
        explain: "Ripples on water and a beam of light are transverse, because their particles vibrate perpendicular to travel. Sound and a push-pull spring wave are longitudinal, because their particles vibrate along the travel line.",
      },
      {
        kind: "cloze",
        prompt: "Complete the description of a longitudinal wave.",
        segments: [
          "In a longitudinal wave the particles bunch tightly together at a ",
          " and spread far apart at a ",
          ".",
        ],
        bank: ["compression", "rarefaction", "crest", "trough"],
        answer: ["compression", "rarefaction"],
        ask: "One word names the region where particles crowd together, the other where they spread out. Crests and troughs belong to transverse waves, so they are not the answers here.",
        hints: [
          "Bunched-up particles form a compression.",
          "Spread-out particles form a rarefaction.",
        ],
        explain: "Particles bunch together at a compression and spread apart at a rarefaction. Crests and troughs are the features of a transverse wave, not a longitudinal one.",
      },
      {
        kind: "insight",
        body: "Every wave is either *transverse* or *longitudinal*, decided by one thing: whether the particles vibrate *across* the travel direction or *along* it.",
        say: "Here is the idea to keep. To classify any wave, look only at how its particles vibrate compared with the way it travels. Shaking across the travel line makes it transverse, with crests and troughs, like water and light. Shaking along the travel line makes it longitudinal, with compressions and rarefactions, like sound. That single test sorts every wave you will meet.",
      },
    ],
  },
];
