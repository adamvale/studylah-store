import type { Subconcept } from "@/lib/teaching/subconcepts";

// T11 Electromagnetic Waves, section 5. Grounded in KB Chapter 13 (Electromagnetic Waves) section 13.5.
// Conceptual only: no calculation, no formula. Figure fig-13-02 is a vertical stack, radio at the top
// (long wavelength, low frequency) down to gamma at the bottom (short wavelength, high energy).

export const BOXES: Subconcept[] = [
  {
    id: "t11.5",
    code: "T11.5",
    title: "Harmful effects of EM waves",
    blurb: "Why the high-frequency end of the spectrum is the dangerous one",
    steps: [
      {
        kind: "concept",
        heading: "Danger rises with frequency",
        figure: "fig-13-02-em-spectrum",
        body: "The *harm* an electromagnetic wave can do grows towards the *high-frequency* end of the spectrum, because higher frequency means each wave carries more *energy*.",
        say: "This figure stacks the 7 regions from top to bottom. Radio waves sit at the top with the longest wavelength and lowest frequency, and gamma rays sit at the bottom with the shortest wavelength and highest energy. A grey arrow points down the side showing frequency and energy increasing. The lower you go, the more energy each wave carries, and the more harm it can do to living cells.",
      },
      {
        kind: "concept",
        heading: "Heating and sunburn",
        body: "Too much *ultraviolet* from the Sun *heats* and burns the skin, causing sunburn, and over time it can trigger *skin cancer*.",
        say: "Ultraviolet from the Sun is the reason we burn on a hot day. Absorbing too much of it heats and damages the skin, which we feel as sunburn. Worse, repeated overexposure can lead to skin cancer, which is why sun cream and covering up matter.",
      },
      {
        kind: "concept",
        heading: "Ionisation damages cells",
        body: "*Ultraviolet*, *X-rays* and *gamma rays* are so energetic that they are *ionising*: they knock electrons out of atoms, which can damage or kill cells and raise the risk of cancer and mutation.",
        say: "The 3 highest-energy regions, ultraviolet, X-rays and gamma rays, are called ionising. Each wave carries enough energy to tear electrons off atoms inside your cells. That damages the cell, can kill it, and can scramble its DNA, raising the risk of cancer and mutation. This is why these waves must be used carefully.",
      },
      {
        kind: "concept",
        heading: "The low-energy end is safer",
        body: "*Radio waves* and *microwaves* sit at the low-frequency end, so they are *non-ionising* and *low-energy*: they cannot knock electrons from atoms.",
        say: "At the other end of the spectrum, radio waves and microwaves carry very little energy per wave. They are non-ionising, meaning they cannot pull electrons off atoms, so they do not damage cells the way ultraviolet and above do. That is why we surround ourselves with radio and WiFi signals safely.",
      },
      {
        kind: "classify",
        prompt: "Sort each type of wave by whether it is ionising.",
        bins: ["Ionising", "Non-ionising"],
        items: [
          { text: "ultraviolet", bin: 0 },
          { text: "X-rays", bin: 0 },
          { text: "gamma rays", bin: 0 },
          { text: "radio waves", bin: 1 },
          { text: "microwaves", bin: 1 },
          { text: "infrared", bin: 1 },
          { text: "visible light", bin: 1 },
        ],
        ask: "Only the high-energy end can knock electrons out of atoms. Tap each wave and drop it in its bin.",
        hints: [
          "Ultraviolet, X-rays and gamma rays are the 3 ionising regions.",
          "Radio waves, microwaves, infrared and visible light are all too low in energy to ionise.",
        ],
        explain: "Ultraviolet, X-rays and gamma rays are ionising because they carry enough energy to knock electrons from atoms. Radio waves, microwaves, infrared and visible light are non-ionising and cannot.",
      },
      {
        kind: "choice",
        question: "Why are gamma rays far more dangerous to living cells than radio waves?",
        options: [
          "Gamma rays travel faster than radio waves",
          "Gamma rays carry much more energy and are ionising",
          "Radio waves cannot pass through the body",
          "Gamma rays have a longer wavelength",
        ],
        correct: 1,
        ask: "Think about how much energy each wave carries and whether it can pull electrons off atoms.",
        hints: [
          "All electromagnetic waves travel at the same speed in a vacuum, so speed is not the difference.",
          "Gamma rays are at the high-frequency end, so each one carries far more energy and is ionising.",
        ],
        explain: "Gamma rays carry much more energy per wave and are ionising, so they knock electrons from atoms and damage cells. Radio waves are low-energy and non-ionising.",
      },
      {
        kind: "choice",
        question: "A person spends a whole day in strong sunshine with no protection. Which harmful effect is most directly caused by too much ultraviolet?",
        options: [
          "Deafness",
          "Broken bones",
          "Sunburn and a raised risk of skin cancer",
          "Loss of magnetism",
        ],
        correct: 2,
        ask: "Ultraviolet acts on the skin. Think about what overexposure to the Sun does there.",
        hints: [
          "Ultraviolet heats and damages the skin.",
          "Short term this is sunburn, and long term it can lead to skin cancer.",
        ],
        explain: "Too much ultraviolet burns the skin, giving sunburn, and over time raises the risk of skin cancer.",
      },
      {
        kind: "choice",
        question: "Which statement about radio waves and microwaves is correct?",
        options: [
          "They are non-ionising and low in energy",
          "They are ionising and damage DNA",
          "They cause sunburn",
          "They carry more energy than gamma rays",
        ],
        correct: 0,
        ask: "These 2 sit at the low-frequency end of the spectrum. Think about how much energy that gives each wave.",
        hints: [
          "Low frequency means low energy per wave.",
          "With so little energy they cannot ionise atoms, unlike gamma rays.",
        ],
        explain: "Radio waves and microwaves are at the low-frequency end, so they are low-energy and non-ionising, unlike the damaging high-frequency waves.",
      },
      {
        kind: "open",
        prompt: "Explain why the high-frequency end of the electromagnetic spectrum is more dangerous to living cells than the low-frequency end.",
        modelAnswer: "As frequency increases, each wave carries more energy. At the high-frequency end, ultraviolet, X-rays and gamma rays carry enough energy to be ionising: they knock electrons out of atoms in living cells, which can damage or kill the cells and change their DNA, raising the risk of cancer and mutation. At the low-frequency end, radio waves and microwaves are low-energy and non-ionising, so they cannot knock out electrons and do far less harm.",
        marks: [
          "Higher frequency means each wave carries more energy.",
          "Ultraviolet, X-rays and gamma rays are ionising: they knock electrons from atoms.",
          "This damages or kills cells and raises the risk of cancer or mutation.",
          "Radio waves and microwaves are low-energy and non-ionising, so they cause little harm.",
        ],
        ask: "Link the frequency to the energy each wave carries, then say what ionising radiation does to cells, and contrast it with the low-energy end.",
      },
      {
        kind: "insight",
        body: "One rule ties this together: the higher the *frequency*, the more *energy* per wave, so the high-frequency *ionising* waves are the ones that damage cells.",
        say: "Keep this single thread. Frequency and energy rise together across the spectrum, so danger rises with them. The high-frequency ionising waves, ultraviolet, X-rays and gamma rays, are the ones that harm cells, while the low-frequency radio and microwaves stay safe.",
      },
    ],
  },
];
