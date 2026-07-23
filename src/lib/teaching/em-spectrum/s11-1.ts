import type { Subconcept } from "@/lib/teaching/subconcepts";

// T11 Electromagnetic Waves, section 1. Grounded in KB Chapter 13 (Electromagnetic Waves) section 13.1.
// Figure colours follow the T11 colour key for fig-13-01-em-wave-structure: the electric-field wave = yellow,
// the magnetic-field wave = blue (drawn in planes at 90 degrees), the direction-of-travel arrow and the
// wavelength marker = grey. Conceptual box: no working, no formula.

export const BOXES: Subconcept[] = [
  {
    id: "t11.1",
    code: "T11.1",
    title: "What an electromagnetic wave is",
    blurb: "How EM waves are made, why they are transverse, and the one speed they all share",
    steps: [
      {
        kind: "concept",
        heading: "Made by a vibrating charge",
        body: "An electromagnetic wave is produced whenever an electric *charge vibrates*, that is, whenever it *accelerates*. The moving charge sets up a *changing electric field*, and a changing electric field creates a *changing magnetic field* nearby.",
        say: "Everything starts with a wobbling charge. When an electric charge vibrates back and forth, it is accelerating, and an accelerating charge disturbs the space around it. It makes an electric field that keeps changing, and a changing electric field always brings a changing magnetic field along with it. Those 2 changing fields are what ripple outward as an electromagnetic wave.",
      },
      {
        kind: "concept",
        heading: "Two fields at right angles",
        figure: "fig-13-01-em-wave-structure",
        body: "In an EM wave the *electric field* and the *magnetic field* oscillate at *right angles* to each other and to the direction of travel. Because the fields wave across the line of travel rather than along it, every EM wave is *transverse*.",
        say: "Look at the picture. The yellow wave is the electric field, oscillating up and down in one plane. The blue wave is the magnetic field, oscillating in a plane turned by 90 degrees, so the 2 sit at right angles. Both of them wave across a grey arrow that points in the direction of travel, and one full wavelength is marked in grey along that arrow. Since the fields shake sideways to the travel direction, an electromagnetic wave is a transverse wave.",
      },
      {
        kind: "concept",
        heading: "Energy across empty space",
        body: "An EM wave *transfers energy* from place to place without carrying any matter. Unlike sound, it needs *no medium*, so it can cross a *vacuum*. That is how the Sun's energy reaches Earth across empty space.",
        say: "An electromagnetic wave carries energy, not stuff. Nothing is physically moved along from the Sun to you, only energy is passed on. And here is the key difference from sound: an EM wave needs no material to travel through, no air, no water, nothing. It happily crosses a vacuum, which is empty space, and that is exactly how sunlight travels the 150 million kilometres from the Sun to Earth.",
      },
      {
        kind: "concept",
        heading: "One shared speed",
        body: "In a vacuum, every electromagnetic wave travels at the *same speed*, 3.0 times 10 to the power 8 metres per second. This is the *speed of light*. Different charges vibrating at different rates give waves of different *frequencies* and wavelengths, but never a different speed.",
        say: "Here is the fact that ties the whole family together. In a vacuum, radio waves, visible light and X-rays all travel at exactly the same speed, 3.0 times 10 to the power 8 metres per second, which we call the speed of light. What changes from one EM wave to another is how fast the charge vibrated, and that sets the frequency and the wavelength. The speed in a vacuum stays fixed for all of them.",
      },
      {
        kind: "choice",
        question: "Which statement best describes an electromagnetic wave?",
        options: [
          "A wave of vibrating air particles that needs a medium",
          "A longitudinal wave of compressions and rarefactions",
          "A transverse wave of a changing electric field and a changing magnetic field at right angles",
          "A stream of tiny solid particles fired from a charge",
        ],
        correct: 2,
        ask: "Recall what an EM wave is made of, and whether its fields wave along the travel direction or across it.",
        hints: [
          "An EM wave is a changing electric field paired with a changing magnetic field.",
          "The 2 fields are at right angles and wave across the direction of travel, so the wave is transverse.",
        ],
        explain: "An electromagnetic wave is a transverse wave made of a changing electric field and a changing magnetic field oscillating at right angles to each other and to the direction of travel.",
      },
      {
        kind: "choice",
        question: "Sunlight reaches Earth after crossing the empty space between the Sun and our planet. What does this show about electromagnetic waves?",
        options: [
          "They travel only through solids and liquids",
          "They need no medium and can cross a vacuum",
          "They speed up when they pass through air",
          "They are carried by vibrating air particles",
        ],
        correct: 1,
        ask: "Ask yourself what lies between the Sun and Earth, and whether an EM wave needs any material to travel through.",
        hints: [
          "The space between the Sun and Earth is very nearly a vacuum, with almost no particles.",
          "If light still crosses it, then EM waves need no medium.",
        ],
        explain: "The light crosses a vacuum, so EM waves need no medium to travel. They transfer energy across empty space, unlike sound, which needs a material.",
      },
      {
        kind: "choice",
        question: "In a vacuum, how do the speeds of radio waves, visible light and X-rays compare?",
        options: [
          "Radio waves are the slowest",
          "Visible light is the fastest",
          "X-rays are the fastest",
          "They all travel at the same speed, 3.0 x 10^8 m/s",
        ],
        correct: 3,
        ask: "Recall the one speed that every member of the EM family shares in a vacuum.",
        hints: [
          "In a vacuum, all EM waves travel at the speed of light.",
          "That speed is 3.0 times 10 to the power 8 metres per second, the same for every EM wave.",
        ],
        explain: "In a vacuum, all electromagnetic waves travel at the same speed, 3.0 times 10 to the power 8 metres per second, the speed of light. Only their frequency and wavelength differ.",
      },
      {
        kind: "classify",
        prompt: "Sort each statement by whether it is true for every electromagnetic wave.",
        bins: ["True for every EM wave", "Not true of EM waves"],
        items: [
          { text: "It is a transverse wave", bin: 0 },
          { text: "It transfers energy from place to place", bin: 0 },
          { text: "It travels at 3.0 x 10^8 m/s in a vacuum", bin: 0 },
          { text: "It is made when a charge vibrates", bin: 0 },
          { text: "It needs a medium such as air to travel", bin: 1 },
          { text: "Its electric and magnetic fields are parallel", bin: 1 },
        ],
        ask: "Sort the true facts about EM waves into the first bin. An EM wave is transverse, carries energy, needs no medium, and its 2 fields sit at right angles.",
        hints: [
          "EM waves are transverse, transfer energy, are made by a vibrating charge, and cross a vacuum at 3.0 times 10 to the power 8 metres per second.",
          "The 2 false statements are the ones about needing a medium and about the fields being parallel.",
        ],
        explain: "Every EM wave is transverse, transfers energy, is made by a vibrating charge, and crosses a vacuum at 3.0 times 10 to the power 8 metres per second. EM waves need no medium, and their electric and magnetic fields are at right angles, not parallel.",
      },
      {
        kind: "insight",
        body: "All EM waves share the *same nature*: made by a vibrating charge, *transverse*, carrying *energy* through a *vacuum* at 3.0 times 10 to the power 8 metres per second. Only their frequency and wavelength set them apart.",
        say: "Here is the idea to keep. Every electromagnetic wave, from radio to gamma, is built the same way. A vibrating charge makes a changing electric field and a changing magnetic field at right angles, giving a transverse wave that carries energy across a vacuum at 3.0 times 10 to the power 8 metres per second. The only thing that changes across the whole family is the frequency and the wavelength.",
      },
    ],
  },
];
