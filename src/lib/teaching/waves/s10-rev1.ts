import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, Revision 1. Checkpoint over KB Chapter 11,
// sections t10.1 to t10.3: what a wave is (energy not matter), wavefronts,
// transverse and longitudinal waves, amplitude and points in phase.
// Question-only, conceptual span (no calculations, no working).

export const BOXES: Subconcept[] = [
  {
    id: "t10.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: what a wave is, wave types, amplitude and phase",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "A wave travels across the surface of a pond. What does the wave carry from one place to another?",
        options: [
          "The water itself, scooped along",
          "The whole pond, shifted sideways",
          "Energy, without carrying matter along",
          "Nothing at all",
        ],
        correct: 2,
        ask: "A wave is a disturbance that moves along. Recall the one thing it passes on while the water is only briefly displaced. Which option is that?",
        hints: [
          "A wave transfers energy from place to place.",
          "The water particles only bob up and down about a fixed point; they are not carried across the pond.",
        ],
        explain: "A wave transfers energy without transferring matter. The water is only briefly displaced and returns to its rest position, so it is energy, not the water, that travels across the pond.",
      },
      {
        kind: "choice",
        question: "The figure shows a wave sent along a rope from person A to person B. What happens to the rope itself?",
        figure: "fig-11-04-energy-transfer-rope",
        options: [
          "It stays where it is while energy passes along it",
          "It is carried bodily from A to B",
          "It vanishes once the wave reaches B",
          "It is turned into energy by the wave",
        ],
        correct: 0,
        ask: "The yellow arrow shows energy going from A to B. Ask whether the rope moves along with that energy or stays put. Which option fits?",
        hints: [
          "Each part of the rope only vibrates about its own rest position.",
          "The energy travels from A to B, but the rope itself does not move along with it.",
        ],
        explain: "The rope stays where it is. Each part of it vibrates about a fixed point while energy travels along the rope from A to B, showing that a wave carries energy but not matter.",
      },
      {
        kind: "choice",
        question: "In a transverse wave, how do the particles vibrate compared with the direction the wave travels?",
        options: [
          "Along the same line as the travel",
          "In a circle around the source",
          "They do not vibrate at all",
          "At right angles to the travel",
        ],
        correct: 3,
        ask: "In a transverse wave the vibration and the travel are at 90 degrees to each other. Which option says that?",
        hints: [
          "Transverse means the vibration is perpendicular to the direction of travel.",
          "Water waves and light are transverse: the particles move up and down while the wave moves forward.",
        ],
        explain: "In a transverse wave the particles vibrate at right angles, that is 90 degrees, to the direction the wave travels. This gives the crests and troughs seen on a rope or water wave.",
      },
      {
        kind: "choice",
        question: "The figure shows a wave against its rest line. The amplitude of the wave is best described as which of these?",
        figure: "fig-11-09-amplitude",
        options: [
          "The distance between 2 neighbouring crests",
          "The maximum displacement from the rest position",
          "The number of waves passing each second",
          "The time taken for one complete oscillation",
        ],
        correct: 1,
        ask: "Amplitude is measured from the grey dashed rest line up to a crest, or down to a trough. Which option describes that distance?",
        hints: [
          "Amplitude is a displacement, measured from the rest position.",
          "It is the largest displacement, reaching a crest one way and a trough the other, and both give the same value.",
        ],
        explain: "The amplitude is the maximum displacement from the rest position. It is the height of a crest or the depth of a trough measured from the rest line, and both give the same value. The distance between crests is the wavelength, not the amplitude.",
      },
      {
        kind: "choice",
        question: "2 points on a wave are said to be in phase when they are which of these?",
        options: [
          "A crest and the very next trough",
          "Any 2 points chosen on the wave",
          "At the same position relative to the rest line and moving the same way",
          "The 2 points with the largest amplitude",
        ],
        correct: 2,
        ask: "In phase means the 2 points are doing exactly the same thing at the same moment. Which option captures both their position and their direction of motion?",
        hints: [
          "Points in phase are at the same stage of the vibration.",
          "2 crests are in phase, and points one wavelength apart are in phase; a crest and the next trough are not.",
        ],
        explain: "2 points are in phase when they are at the same position relative to the rest line and moving the same way. Any 2 crests, or points one wavelength apart, are in phase. A crest and the next trough are moving oppositely, so they are not in phase.",
      },
      {
        kind: "classify",
        prompt: "Sort each wave into the correct family.",
        bins: ["Mechanical (needs a medium)", "Electromagnetic (no medium needed)"],
        items: [
          { text: "sound in air", bin: 0 },
          { text: "ripples on water", bin: 0 },
          { text: "a wave on a rope", bin: 0 },
          { text: "radio waves", bin: 1 },
          { text: "visible light", bin: 1 },
          { text: "X-rays", bin: 1 },
        ],
        ask: "For each wave, ask whether it needs a material to travel through, or whether it can cross empty space. Tap each one and drop it in its bin.",
        hints: [
          "Sound, water ripples and a rope wave all need a medium to carry them.",
          "Radio waves, light and X-rays are electromagnetic and cross a vacuum, so they need no medium.",
        ],
        explain: "Sound, water ripples and a rope wave are mechanical waves that need a medium. Radio waves, light and X-rays are electromagnetic waves that travel through a vacuum, so they need no medium.",
      },
      {
        kind: "match",
        prompt: "Match each wave to its correct description.",
        pairs: [
          { left: "Transverse wave", right: "particles vibrate at 90 degrees to travel; has crests and troughs" },
          { left: "Longitudinal wave", right: "particles vibrate along the travel line; has compressions and rarefactions" },
          { left: "Sound wave", right: "a longitudinal wave that needs a medium" },
          { left: "Light wave", right: "a transverse wave that can cross a vacuum" },
        ],
        ask: "Sort out which type has crests and troughs and which has compressions and rarefactions, then place sound and light with the type each belongs to.",
        hints: [
          "Transverse waves vibrate across the travel direction; longitudinal waves vibrate along it.",
          "Sound is longitudinal and needs a medium; light is transverse and crosses a vacuum.",
        ],
        explain: "A transverse wave vibrates at 90 degrees to travel and has crests and troughs, like light. A longitudinal wave vibrates along the travel line and has compressions and rarefactions, like sound.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of the 2 wave types.",
        segments: [
          "In a transverse wave the particles vibrate ",
          " to the direction of travel, while in a longitudinal wave they vibrate ",
          " to it. A longitudinal wave is made of compressions and ",
          ".",
        ],
        bank: ["perpendicular", "parallel", "rarefactions", "crests", "sideways", "along"],
        answer: ["perpendicular", "parallel", "rarefactions"],
        ask: "Recall the angle between vibration and travel for each type, then name the spread-out regions that pair with compressions.",
        hints: [
          "Transverse is perpendicular to travel; longitudinal is parallel to travel.",
          "In a longitudinal wave the particles bunch into compressions and spread into rarefactions.",
        ],
        explain: "In a transverse wave the particles vibrate perpendicular to travel, and in a longitudinal wave they vibrate parallel to it. A longitudinal wave is made of compressions, where particles bunch, and rarefactions, where they spread.",
      },
      {
        kind: "order",
        prompt: "A point on a transverse wave completes one oscillation. Put these stages in order, starting from the rest position as it begins moving up.",
        items: [
          "Rest position, moving up",
          "Highest point, the crest",
          "Rest position, moving down",
          "Lowest point, the trough",
        ],
        ask: "Follow one point as it rises to the top, falls back through the middle, and drops to the bottom. Put the 4 stages in that order.",
        hints: [
          "Starting at rest and moving up, the point first reaches the crest.",
          "It then passes back through the rest position moving down before reaching the trough.",
        ],
        explain: "Beginning at the rest position moving up, the point rises to the crest, comes back down through the rest position, and then falls to the trough. That is one half of the up-and-down motion of a transverse wave.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this description of a wave is wrong. Find it.",
        lines: [
          "A wave is a disturbance that travels through a medium.",
          "As the wave passes, the particles are carried along with the wave to a new place.",
          "The wave transfers energy from one place to another.",
          "The particles only vibrate about their rest position.",
        ],
        errorLine: 1,
        ask: "Check what happens to the particles. Do they travel along with the wave, or only vibrate about a fixed point? Find the line that disagrees with the others.",
        hints: [
          "A wave carries energy, not matter.",
          "The particles are only briefly displaced and return to rest; they are not carried along with the wave.",
        ],
        explain: "Line 2, numbered 1 from zero, is wrong. The particles are not carried along with the wave. They only vibrate about their rest position while energy travels through the medium.",
      },
      {
        kind: "open",
        prompt: "The figure shows a floating cork as a wave passes. Explain what is meant by saying a wave transfers energy but not matter, using the cork.",
        figure: "fig-11-01-particle-displacement",
        modelAnswer: "A wave is a disturbance that travels and carries energy from one place to another. As the wave passes, the cork is only briefly displaced from its rest position and then returns, so it bobs up and down about a fixed point. It is not carried along in the direction the wave travels. This shows that the wave passes on energy while the water and the cork stay put, so energy is transferred but matter is not.",
        marks: [
          "A wave transfers energy from place to place.",
          "The cork bobs about a fixed rest position and returns.",
          "The cork is not carried along, so no matter is transferred.",
        ],
        ask: "Think about whether the cork moves across the water with the wave, or just bobs up and down while the energy travels on.",
      },
      {
        kind: "open",
        prompt: "Describe 2 differences between a transverse wave and a longitudinal wave, and give one example of each.",
        modelAnswer: "In a transverse wave the particles vibrate at right angles, 90 degrees, to the direction of travel, while in a longitudinal wave they vibrate along the direction of travel. A transverse wave is made of crests and troughs, whereas a longitudinal wave is made of compressions and rarefactions. An example of a transverse wave is light or a water wave; an example of a longitudinal wave is sound or a push-pull spring wave.",
        marks: [
          "Transverse vibrates perpendicular to travel; longitudinal vibrates parallel to travel.",
          "Transverse has crests and troughs; longitudinal has compressions and rarefactions.",
          "One correct example of each, such as light for transverse and sound for longitudinal.",
        ],
        ask: "Compare the direction the particles vibrate in each type, and what features each type has, then name a real example of each.",
      },
    ],
  },
];
