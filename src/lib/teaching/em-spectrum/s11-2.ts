import type { Subconcept } from "@/lib/teaching/subconcepts";

// T11 Electromagnetic Waves, section 2. Grounded in KB Chapter 13 (Electromagnetic Waves) section 13.2.
// Figure fig-13-02-em-spectrum is a vertical stack: radio at the top (long wavelength, low frequency),
// gamma at the bottom (short wavelength, high energy), with a grey down arrow "frequency and energy increase".

export const BOXES: Subconcept[] = [
  {
    id: "t11.2",
    code: "T11.2",
    title: "The electromagnetic spectrum",
    blurb: "The seven families of electromagnetic wave, ordered by frequency",
    steps: [
      {
        kind: "concept",
        heading: "One family, seven regions",
        body: "All electromagnetic waves together make up the *electromagnetic spectrum*. We split it into *seven regions*, from *radio waves* at one end to *gamma rays* at the other. A handy order to memorise is R M I V U X G.",
        say: "Every electromagnetic wave belongs to one big family called the electromagnetic spectrum. We split that family into 7 regions. In order they are radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays. The first letters spell R M I V U X G, which is worth learning by heart.",
      },
      {
        kind: "concept",
        heading: "Frequency rises from radio to gamma",
        figure: "fig-13-02-em-spectrum",
        body: "As you go from radio waves toward gamma rays, the *frequency increases*, the *wavelength decreases*, and the *energy increases*. These 3 change together across the whole spectrum.",
        say: "In this figure the 7 regions are stacked vertically. Radio waves sit at the top, labelled long wavelength and low frequency. Gamma rays sit at the bottom, labelled short wavelength and high energy. A grey arrow runs down the side pointing to a note, frequency and energy increase. So reading top to bottom, from radio down to gamma, frequency goes up, wavelength gets shorter, and the energy carried goes up.",
      },
      {
        kind: "concept",
        heading: "The high end is ionising",
        body: "The *high-frequency* end of the spectrum carries the most energy. Ultraviolet, X-rays and gamma rays are *ionising*: they can knock electrons out of atoms and damage living cells. Radio waves, microwaves, infrared and visible light are *non-ionising*.",
        say: "Because energy rises toward the gamma end, the top-energy waves can do real damage. Ultraviolet, X-rays and gamma rays are ionising, meaning they carry enough energy to knock electrons out of atoms and harm living cells. The lower-energy end, radio, microwaves, infrared and visible light, is non-ionising and much safer.",
      },
      {
        kind: "concept",
        heading: "Inside visible light",
        body: "*Visible light* is the narrow band our eyes detect, running about 400 nm to 700 nm. *Red* has the longest wavelength, sitting next to infrared; *violet* has the shortest, sitting next to ultraviolet. The order is red, orange, yellow, green, blue, indigo, violet.",
        say: "Visible light is only a thin slice of the whole spectrum, roughly 400 to 700 nanometres. Red light has the longest wavelength and sits right beside infrared. Violet has the shortest wavelength and sits right beside ultraviolet. Running from longest to shortest wavelength the colours go red, orange, yellow, green, blue, indigo, violet.",
      },
      {
        kind: "order",
        prompt: "Put the seven regions of the spectrum in order of increasing frequency, lowest first.",
        items: ["Radio waves", "Microwaves", "Infrared", "Visible light", "Ultraviolet", "X-rays", "Gamma rays"],
        ask: "The frequency is lowest at the radio end and highest at the gamma end. Start with radio waves and finish with gamma rays.",
        hints: [
          "Remember the memory aid R M I V U X G, which is already in order of rising frequency.",
          "Radio waves have the lowest frequency, then microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays highest.",
        ],
        explain: "In order of rising frequency the regions are radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays. Frequency increases the whole way, so radio is lowest and gamma is highest.",
      },
      {
        kind: "choice",
        question: "Which region of the electromagnetic spectrum has the longest wavelength?",
        options: ["Gamma rays", "X-rays", "Radio waves", "Ultraviolet"],
        correct: 2,
        ask: "Longest wavelength goes with lowest frequency. Which region sits at that end of the spectrum?",
        hints: [
          "Wavelength is largest where frequency is smallest.",
          "Radio waves sit at the low-frequency end, so they have the longest wavelength.",
        ],
        explain: "Radio waves have the longest wavelength, because they sit at the low-frequency end of the spectrum, where wavelength is greatest.",
      },
      {
        kind: "choice",
        question: "Which region carries the most energy and has the highest frequency?",
        options: ["Radio waves", "Microwaves", "Infrared", "Gamma rays"],
        correct: 3,
        ask: "Energy and frequency both rise toward the same end of the spectrum. Which region sits there?",
        hints: [
          "Energy is greatest where frequency is greatest.",
          "Gamma rays sit at the high-frequency end, so they carry the most energy.",
        ],
        explain: "Gamma rays carry the most energy and have the highest frequency, because they sit at the top end of the spectrum where both are greatest.",
      },
      {
        kind: "classify",
        prompt: "Sort each region by whether it is ionising or non-ionising.",
        bins: ["Ionising", "Non-ionising"],
        items: [
          { text: "Ultraviolet", bin: 0 },
          { text: "X-rays", bin: 0 },
          { text: "Gamma rays", bin: 0 },
          { text: "Radio waves", bin: 1 },
          { text: "Microwaves", bin: 1 },
          { text: "Infrared", bin: 1 },
          { text: "Visible light", bin: 1 },
        ],
        ask: "The ionising waves are the high-energy ones at the gamma end. Tap each region and drop it in its bin.",
        hints: [
          "Only the top 3 energy regions carry enough energy to knock electrons out of atoms.",
          "Ultraviolet, X-rays and gamma rays are ionising; radio, microwaves, infrared and visible light are not.",
        ],
        explain: "Ultraviolet, X-rays and gamma rays are ionising, because they carry enough energy to knock electrons from atoms. Radio waves, microwaves, infrared and visible light are non-ionising.",
      },
      {
        kind: "choice",
        question: "Within visible light, which colour has the longest wavelength?",
        options: ["Violet", "Red", "Blue", "Green"],
        correct: 1,
        ask: "One end of visible light sits next to infrared, the other next to ultraviolet. The longest wavelength is the one beside infrared.",
        hints: [
          "Red light borders infrared; violet light borders ultraviolet.",
          "Red has the longest wavelength of the visible colours, violet the shortest.",
        ],
        explain: "Red has the longest wavelength, because it sits at the edge of visible light next to infrared. Violet, next to ultraviolet, has the shortest.",
      },
      {
        kind: "insight",
        body: "Read the spectrum in the order *R M I V U X G* and one pattern carries you through: from radio to gamma the *frequency* and *energy* rise while the *wavelength* falls, and the top end turns ionising.",
        say: "Here is the idea to keep. Learn the 7 regions in the order R M I V U X G, radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma. Then one rule ties them together. Going from radio to gamma, frequency and energy climb while wavelength shrinks, and once you reach ultraviolet, X-rays and gamma the waves become ionising and can damage cells.",
      },
    ],
  },
];
