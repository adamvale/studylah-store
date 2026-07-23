import type { Subconcept } from "@/lib/teaching/subconcepts";

// T10 General Wave Properties, section 1. Grounded in KB Chapter 11 (General Wave Properties) sections 11.1, 11.2.
// Conceptual box (no calculation). Figure colours follow the T10 colour key: wave curve = blue,
// wave-travel / shake arrow = yellow, vibration-direction arrow = green, rest line and dimension
// markers = grey, particles / source / rope / wall / objects = white.

export const BOXES: Subconcept[] = [
  {
    id: "t10.1",
    code: "T10.1",
    title: "What a wave is: energy, not matter",
    blurb: "A wave carries energy from place to place while the matter stays put",
    steps: [
      {
        kind: "concept",
        heading: "A wave is a travelling disturbance",
        figure: "fig-11-03-wave-in-rope",
        body: "A *wave* is a *disturbance*, a vibration or *oscillation*, that travels along and carries *energy* with it. Shake one end of a rope and the wiggle runs to the far end.",
        say: "A wave is just a disturbance that travels. In the picture a blue wave runs along a white rope that is tied to a white wall. At the near end a yellow arrow says shake one end up and down, and a second yellow arrow says the wave travels this way. You make the vibration at your hand, and it moves off along the rope carrying energy with it.",
      },
      {
        kind: "concept",
        heading: "Energy travels, matter does not",
        figure: "fig-11-04-energy-transfer-rope",
        body: "The key fact about every wave: it transfers *energy* from place to place *without transferring matter*. The stuff the wave moves through is left where it was.",
        say: "This is the single most important idea in the whole topic. A wave carries energy, not material. In the figure a rope runs from person A on the left to person B on the right, and a yellow arrow shows energy travelling from A to B. The caption reminds you that the rope itself stays where it is. Energy gets to B, but no rope is delivered to B.",
      },
      {
        kind: "concept",
        heading: "Particles only wobble about a rest point",
        figure: "fig-11-01-particle-displacement",
        body: "As a wave passes, each particle is only *temporarily displaced* from its *rest position* and then returns. No particle is *carried along* with the wave.",
        say: "This figure has 2 panels stacked. In the top panel a white particle sits on a blue wave and only moves up and down as a transverse wave goes by. In the bottom panel a white particle only moves left and right as a longitudinal wave goes by. The caption says no particle is carried along with the wave. Each particle just wobbles about its own resting spot and stays there.",
      },
      {
        kind: "concept",
        heading: "Two families of waves",
        body: "*Mechanical* waves need a *medium* to travel through, such as sound, water ripples, or a wave on a rope or spring. *Electromagnetic* waves need *no medium* and can cross a vacuum, such as radio, light, and X-rays.",
        say: "Waves come in 2 families. Mechanical waves must have some material to travel through, a medium, like air for sound, water for ripples, or a rope for a rope wave. Electromagnetic waves need nothing at all and can travel across empty space, which is how light and radio waves reach us from the Sun and from satellites.",
      },
      {
        kind: "choice",
        question: "A loudspeaker sends a sound wave across a room. What does the wave transfer to the far wall?",
        options: [
          "Air molecules, which are pushed all the way across",
          "Both energy and air, in equal amounts",
          "Energy, without carrying the air across",
          "Nothing, because sound is not a wave",
        ],
        correct: 2,
        ask: "Think about the key fact for every wave: it moves energy from place to place, but the material it travels through stays put.",
        hints: [
          "The air near the speaker vibrates and passes the disturbance on, then settles back.",
          "A wave carries energy without transferring matter, so the air is not delivered to the wall.",
        ],
        explain: "A wave transfers energy without transferring matter, so the sound wave delivers energy to the far wall while the air molecules only vibrate about their rest positions and stay roughly where they were.",
      },
      {
        kind: "classify",
        prompt: "Sort each wave by whether it needs a medium to travel through.",
        bins: ["Mechanical (needs a medium)", "Electromagnetic (needs no medium)"],
        items: [
          { text: "Sound in air", bin: 0 },
          { text: "Ripples on water", bin: 0 },
          { text: "A wave on a rope or spring", bin: 0 },
          { text: "Radio waves", bin: 1 },
          { text: "Light", bin: 1 },
          { text: "X-rays", bin: 1 },
        ],
        ask: "Ask yourself whether each one could still travel across empty space with no material at all. If it needs air, water, or a rope, it is mechanical.",
        hints: [
          "Sound, water ripples, and rope or spring waves all need some material to move through.",
          "Radio, light, and X-rays reach us from space through a vacuum, so they are electromagnetic.",
        ],
        explain: "Sound, water ripples, and rope or spring waves are mechanical because they need a medium. Radio, light, and X-rays are electromagnetic because they can cross a vacuum with no medium at all.",
      },
      {
        kind: "choice",
        question: "A small cork floats on a pond as water waves pass under it. What does the cork mainly do?",
        options: [
          "It is carried along the pond in the direction the waves travel",
          "It bobs up and down about a fixed point and stays in roughly the same place",
          "It sinks a little more each time a wave passes",
          "It stays perfectly still because water waves carry no energy",
        ],
        correct: 1,
        ask: "The water is the medium, so its particles are only temporarily displaced. Picture what happens to a floating object sitting on top of them.",
        hints: [
          "Each bit of water wobbles about its rest position and returns, it is not swept along.",
          "The cork rides that wobble, so it bobs up and down about one spot rather than travelling across.",
        ],
        explain: "The cork bobs up and down about a fixed point and stays in roughly the same place, because the water particles are only temporarily displaced from their rest positions. The wave carries energy past the cork without carrying the water, or the cork, along with it.",
      },
      {
        kind: "cloze",
        prompt: "Complete the key statement about what a wave does.",
        segments: ["A wave carries ", " from place to place ", " transferring matter."],
        bank: ["energy", "without", "matter", "with", "mass"],
        answer: ["energy", "without"],
        ask: "Recall the one sentence that is true for every single wave, mechanical or electromagnetic.",
        hints: [
          "The first blank is the thing that actually travels along the wave.",
          "The second blank makes clear that the material is left behind, not moved.",
        ],
        explain: "A wave carries energy from place to place without transferring matter. That single idea is true for every wave you will meet.",
      },
      {
        kind: "insight",
        body: "Every *wave*, mechanical or electromagnetic, does the same job: it moves *energy* from one place to another while the *matter* it passes through only vibrates and stays put.",
        say: "Hold on to this one idea. Whatever the wave, sound, water, light, or radio, it is a way of shipping energy across a distance without shipping any material. The particles of the medium, or in the case of light no medium at all, simply vibrate about their rest points and return. Energy moves, matter stays.",
      },
    ],
  },
];
