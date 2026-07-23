import type { Subconcept } from "@/lib/teaching/subconcepts";

// T11 Electromagnetic Waves, Revision 2. Checkpoint over KB Chapter 13,
// sections t11.4 to t11.5: uses of the spectrum and harmful effects.
// Question-only, conceptual (no calculations, no working).

export const BOXES: Subconcept[] = [
  {
    id: "t11.rev2",
    code: "R2",
    title: "Revision 2",
    blurb: "Checkpoint: uses of the spectrum and harmful effects",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Which region of the electromagnetic spectrum is used to sterilise surgical instruments?",
        options: ["Radio waves", "Gamma rays", "Infrared", "Microwaves"],
        correct: 1,
        ask: "Ask which radiation carries the most energy and is powerful enough to kill bacteria on metal tools. Which option is that?",
        hints: [
          "Sterilising kills microbes, so it needs a very high-energy, penetrating radiation.",
          "Gamma rays are the highest-energy region and are used to sterilise medical instruments and in radiotherapy.",
        ],
        explain: "Gamma rays sterilise surgical instruments, because they carry very high energy that kills microbes on the metal. Radio waves, infrared and microwaves are far too low in energy to do this.",
      },
      {
        kind: "choice",
        question: "A hospital needs an image of a suspected broken bone. Which radiation is used?",
        options: ["Microwaves", "Infrared", "Radio waves", "X-rays"],
        correct: 3,
        ask: "Ask which radiation passes through soft tissue but is stopped by dense bone, so bone shows up on the image. Which option is that?",
        hints: [
          "The radiation must pass through skin and muscle yet be absorbed by bone.",
          "X-rays are absorbed by dense bone and are used to image fractures and in CT scans.",
        ],
        explain: "X-rays image broken bones, because they pass through soft tissue but are absorbed by dense bone, which then shows up on the picture. The other regions do not pass through the body in this way.",
      },
      {
        kind: "choice",
        question: "A television remote control sends its signals using which radiation?",
        options: ["Infrared", "Ultraviolet", "Gamma rays", "X-rays"],
        correct: 0,
        ask: "Ask which low-energy radiation, just beyond red light, is used for short-range signals in remote controls and thermal cameras. Which option is that?",
        hints: [
          "The radiation sits just beyond visible red light and is felt as heat.",
          "Infrared is used in remote controls, thermal imaging and grills.",
        ],
        explain: "Infrared carries the signals from a remote control, because it is a safe, low-energy radiation ideal for short-range signalling. Ultraviolet, gamma rays and X-rays are all far too energetic and harmful for this everyday job.",
      },
      {
        kind: "choice",
        question: "Why are gamma rays more dangerous to living cells than radio waves?",
        options: [
          "They travel faster than radio waves",
          "They have a longer wavelength",
          "They carry more energy and are ionising",
          "They cannot pass through the body",
        ],
        correct: 2,
        ask: "Ask what changes from the radio end to the gamma end of the spectrum, and why that lets gamma rays damage atoms in a cell. Which option is that?",
        hints: [
          "In a vacuum every EM wave travels at the same speed, so speed is not the difference.",
          "Gamma rays sit at the high-frequency end, so they carry much more energy and are ionising, meaning they knock electrons from atoms.",
        ],
        explain: "Gamma rays are more dangerous because they carry far more energy and are ionising, so they can knock electrons out of atoms and damage cells. Both gamma rays and radio waves travel at the same speed in a vacuum, so speed is not the reason.",
      },
      {
        kind: "choice",
        question: "What can too much ultraviolet radiation from the Sun cause?",
        options: [
          "Better night vision",
          "Stronger bones only",
          "No effect at all",
          "Sunburn and skin cancer",
        ],
        correct: 3,
        ask: "Ask what happens to skin that gets too much of the Sun's ultraviolet, and remember that ultraviolet is ionising. Which option is that?",
        hints: [
          "Ultraviolet heats and burns the skin, which is why sunburn happens.",
          "Because ultraviolet is ionising, it can also damage skin cells and raise the risk of skin cancer.",
        ],
        explain: "Too much ultraviolet causes sunburn and can lead to skin cancer, because ultraviolet is ionising and damages skin cells. It does not improve night vision, and it certainly is not harmless.",
      },
      {
        kind: "match",
        prompt: "Match each region of the spectrum to a common use.",
        pairs: [
          { left: "Gamma rays", right: "Radiotherapy to treat cancer" },
          { left: "X-rays", right: "Imaging broken bones" },
          { left: "Infrared", right: "Remote controls" },
          { left: "Microwaves", right: "Satellite communication" },
          { left: "Radio waves", right: "Television broadcasting" },
          { left: "Ultraviolet", right: "Sterilising drinking water" },
        ],
        ask: "For each region, recall one everyday job it does. Start with the ones you are sure of, then match the rest by elimination.",
        hints: [
          "The high-energy end does medical jobs: gamma rays for radiotherapy, X-rays for bone images.",
          "The low-energy end does communication: radio for broadcasting, microwaves for satellites; infrared runs remote controls and ultraviolet sterilises water.",
        ],
        explain: "Gamma rays treat cancer in radiotherapy, X-rays image bones, infrared drives remote controls, microwaves carry satellite links, radio waves broadcast television, and ultraviolet sterilises drinking water.",
      },
      {
        kind: "classify",
        prompt: "Sort each region into ionising or non-ionising radiation.",
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
        ask: "The ionising regions are the ones at the high-frequency end that carry enough energy to knock electrons from atoms. Tap each region and drop it in its bin.",
        hints: [
          "Only the top-energy end is ionising: ultraviolet, X-rays and gamma rays.",
          "Everything with less energy than ultraviolet, which is radio waves, microwaves, infrared and visible light, is non-ionising.",
        ],
        explain: "Ultraviolet, X-rays and gamma rays are ionising, because they carry enough energy to knock electrons from atoms. Radio waves, microwaves, infrared and visible light are non-ionising and low-energy.",
      },
      {
        kind: "order",
        prompt: "Order these regions from least energy to most energy (least harmful to most harmful).",
        items: [
          "Radio waves",
          "Microwaves",
          "Infrared",
          "Visible light",
          "Ultraviolet",
          "X-rays",
          "Gamma rays",
        ],
        ask: "Energy increases as you move from the radio end towards the gamma end of the spectrum. Put the regions in that order.",
        hints: [
          "Radio waves have the least energy and are the safest; gamma rays have the most energy and are the most harmful.",
          "The order of increasing energy is radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.",
        ],
        explain: "From least to most energy the order is radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays. Danger to living cells grows the same way, so gamma rays are the most harmful.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of harmful effects.",
        segments: [
          "Ultraviolet, X-rays and gamma rays are ",
          " because they carry enough energy to knock electrons from atoms. Radio waves and microwaves are ",
          " and low-energy. Too much ultraviolet from the Sun can cause ",
          " and skin cancer.",
        ],
        bank: ["ionising", "non-ionising", "sunburn", "gamma rays", "heating", "reflection"],
        answer: ["ionising", "non-ionising", "sunburn"],
        ask: "Recall which end of the spectrum can knock electrons from atoms, what the low-energy end is called instead, and what too much ultraviolet does to skin.",
        hints: [
          "The high-energy regions that knock out electrons are ionising; the low-energy radio and microwave regions are non-ionising.",
          "Too much ultraviolet first burns the skin, which is sunburn, before the longer-term risk of skin cancer.",
        ],
        explain: "Ultraviolet, X-rays and gamma rays are ionising, radio waves and microwaves are non-ionising, and too much ultraviolet causes sunburn as well as skin cancer.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this list of facts is wrong. Find it.",
        lines: [
          "Gamma rays can be used to sterilise medical instruments.",
          "X-rays are used to take images of broken bones.",
          "Radio waves are ionising and can damage living cells.",
          "Infrared radiation is used in television remote controls.",
        ],
        errorLine: 2,
        ask: "Check which region really is ionising. Only the high-frequency end can knock electrons from atoms, so ask whether radio waves belong there.",
        hints: [
          "Ionising radiation is only ultraviolet, X-rays and gamma rays.",
          "Radio waves sit at the low-energy end, so they are non-ionising and do not damage cells in that way.",
        ],
        explain: "The wrong line says radio waves are ionising. Radio waves are at the low-energy end of the spectrum, so they are non-ionising. The other 3 lines are correct uses.",
      },
      {
        kind: "open",
        prompt: "Explain why the radiations at the high-frequency end of the spectrum, such as ultraviolet, X-rays and gamma rays, are more harmful to people than radio waves.",
        modelAnswer: "The high-frequency radiations carry much more energy per wave. Ultraviolet, X-rays and gamma rays are ionising, which means each wave has enough energy to knock electrons out of atoms in living cells. This can damage or kill cells and change the DNA, raising the risk of cancer and mutation. Radio waves have a very low frequency and low energy, so they are non-ionising and pass through the body without causing this damage.",
        marks: [
          "Energy increases towards the high-frequency end, so those waves carry more energy.",
          "Ultraviolet, X-rays and gamma rays are ionising / knock electrons from atoms in cells.",
          "This damages cells or DNA and can cause cancer, while radio waves are non-ionising.",
        ],
        ask: "Think about how the energy of an EM wave changes across the spectrum, and what ionising means for the atoms inside a living cell.",
      },
      {
        kind: "open",
        prompt: "Ultraviolet radiation is both useful and harmful. Give 1 use of ultraviolet radiation and describe 1 harmful effect it can have on the body.",
        modelAnswer: "A use of ultraviolet is sterilising drinking water, because it kills bacteria; it is also used to make vitamin D in the skin and for security marking with fluorescent inks. A harmful effect is that too much ultraviolet from the Sun burns the skin, which is sunburn, and because ultraviolet is ionising it can damage skin cells and cause skin cancer.",
        marks: [
          "1 valid use, for example sterilising water, making vitamin D, or security marking.",
          "Harmful effect: sunburn or damage to skin cells.",
          "Links the harm to skin cancer or to ultraviolet being ionising.",
        ],
        ask: "Recall what ultraviolet is used for in water treatment or on the skin, then think about what happens when skin gets too much of it from the Sun.",
      },
    ],
  },
];
