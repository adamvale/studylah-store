import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, section 1. Grounded in KB Chapter 22 sections 22.1, 22.2, 22.3.
// Figure colours follow the house palette: a proton = red, a neutron = grey, an electron = blue,
// the nucleus outline, shells, labels and the chemical symbol = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t20.1",
    code: "T20.1",
    title: "The atom, nuclide notation and isotopes",
    blurb: "Inside the atom, how we label a nuclide, and what isotopes are",
    steps: [
      {
        kind: "concept",
        heading: "Inside the atom",
        figure: "fig-22-01-atom-structure",
        body: "An atom has a tiny central *nucleus* made of *protons* (charge +1) and *neutrons* (charge 0), with *electrons* (charge -1) moving in outer shells. Protons and neutrons together are called nucleons.",
        say: "A cluster sits at the centre of the atom, the nucleus. Inside it are red protons, each marked with a plus sign, and grey neutrons marked zero. Around the nucleus, blue electrons move in the curved outer shells, the energy levels. The protons and neutrons together are called nucleons.",
      },
      {
        kind: "concept",
        heading: "Mass and charge",
        body: "Almost all of an atom's *mass* sits in the *nucleus*, because an electron is only about 1/1840 as heavy as a proton. A *neutral* atom has equal numbers of protons and electrons, so its charges cancel.",
        say: "Nearly all the weight of an atom is packed into that central nucleus. An electron is only about 1 part in 1840 as heavy as a proton, so the electrons barely add to the mass. In a neutral atom the number of electrons matches the number of protons, so the negative and positive charges cancel out exactly.",
      },
      {
        kind: "concept",
        heading: "Nuclide notation",
        figure: "fig-22-02-nuclide-notation",
        body: "*Nuclide notation* labels an atom as A over Z X. The *proton number* Z (bottom left) is the number of protons; the *nucleon number* A (top left) is the number of protons plus neutrons.",
        formula: {
          latex: "^{A}_{Z}\\text{X}",
          where: [
            { sym: "A", meaning: "nucleon number (protons plus neutrons)" },
            { sym: "Z", meaning: "proton number (number of protons)" },
            { sym: "X", meaning: "chemical symbol of the element" },
          ],
        },
        say: "The figure shows the notation with 3 labels around a chemical symbol X. At the top left is the nucleon number A, the total count of protons and neutrons. At the bottom left is the proton number Z, the number of protons. So writing vanadium 51 tells you it has the proton number 23 below and the nucleon number 51 above.",
      },
      {
        kind: "concept",
        heading: "Counting neutrons",
        body: "The number of *neutrons* in an atom is the *nucleon number* minus the *proton number*. You are never given the neutron count directly, so you work it out this way.",
        formula: {
          latex: "N = A - Z",
          where: [
            { sym: "N", meaning: "number of neutrons" },
            { sym: "A", meaning: "nucleon number" },
            { sym: "Z", meaning: "proton number" },
          ],
        },
        say: "You are never told the neutron count directly, so you work it out. Take the nucleon number on top and subtract the proton number below, and what is left is the number of neutrons. For vanadium 51, the nucleon number 51 minus the proton number 23 leaves 28 neutrons.",
      },
      {
        kind: "insight",
        body: "*Isotopes* are atoms of the *same element* (same proton number) but with *different numbers of neutrons*, so they have different nucleon numbers. They share chemical properties but differ physically.",
        say: "Isotopes are different versions of the same element. They have the same proton number, so the same number of electrons and the same chemical behaviour. What differs is the number of neutrons, which changes the nucleon number and the mass. Carbon 12 and carbon 14 are isotopes of carbon in this way.",
      },
      {
        kind: "choice",
        question: "In a neutral atom, which statement is always true?",
        options: [
          "There are always more neutrons than protons",
          "There are more electrons than protons",
          "The number of electrons equals the number of protons",
          "An atom has no electrons at all",
        ],
        correct: 2,
        ask: "A neutral atom carries no overall charge, so the negative electrons must exactly balance the positive protons. Which option says that?",
        hints: [
          "The positive and negative charges have to cancel.",
          "Equal numbers of protons and electrons means the atom is neutral.",
        ],
        explain: "In a neutral atom the number of electrons equals the number of protons, so the positive and negative charges cancel and the atom has no overall charge.",
      },
      {
        kind: "slider",
        prompt: "A vanadium atom has nucleon number 51 and proton number 23. Set the slider to its number of neutrons.",
        min: 0,
        max: 40,
        step: 1,
        unit: "neutrons",
        start: 0,
        targetMin: 27.5,
        targetMax: 28.5,
        ask: "The number of neutrons is the nucleon number minus the proton number, so work out 51 - 23.",
        hints: [
          "Neutrons equal the nucleon number minus the proton number.",
          "51 - 23 is 28, so slide to 28 neutrons.",
        ],
        working: [
          { label: "Formula", latex: "N = A - Z" },
          { label: "Substitute", latex: "N = 51 - 23" },
          { label: "Answer", latex: "N = 28\\ \\text{neutrons}" },
        ],
        explain: "The atom has 28 neutrons, because the nucleon number 51 minus the proton number 23 is 28.",
      },
      {
        kind: "choice",
        question: "2 isotopes of the same element must have the same...",
        options: [
          "number of neutrons",
          "chemical properties",
          "nucleon number",
          "mass",
        ],
        correct: 1,
        ask: "Isotopes have the same proton number, so the same electron arrangement. Which property does that fix?",
        hints: [
          "The proton and electron counts are the same, so their chemistry matches.",
          "Isotopes differ in neutrons and mass, but share chemical properties.",
        ],
        explain: "Isotopes of an element share the same chemical properties, because they have the same proton number and so the same number and arrangement of electrons. Their neutron number, nucleon number and mass differ.",
      },
      {
        kind: "classify",
        prompt: "Chlorine 35 and chlorine 37 are isotopes. Sort each property by whether it is the same for both or different between them.",
        bins: ["Same for both isotopes", "Different between the isotopes"],
        items: [
          { text: "Proton number", bin: 0 },
          { text: "Number of electrons", bin: 0 },
          { text: "Chemical properties", bin: 0 },
          { text: "Number of neutrons", bin: 1 },
          { text: "Nucleon number", bin: 1 },
          { text: "Mass of the atom", bin: 1 },
        ],
        ask: "Isotopes share their proton number, so anything set by protons or electrons stays the same, while the neutron count and everything that depends on it changes. Drop each property in its bin.",
        hints: [
          "The same proton number means the same electrons and the same chemistry.",
          "More neutrons means a bigger nucleon number and more mass.",
        ],
        explain: "Chlorine 35 and chlorine 37 have the same proton number, so the same electrons and chemical properties. They differ in their number of neutrons, and so in nucleon number and mass.",
      },
      {
        kind: "choice",
        question: "The proton number Z of an atom tells you...",
        options: [
          "the number of protons in the nucleus",
          "the number of neutrons in the nucleus",
          "the total number of nucleons",
          "the number of electron shells",
        ],
        correct: 0,
        ask: "Z sits at the bottom left of the nuclide symbol and names the element. What does it count?",
        hints: [
          "Z is the proton number.",
          "It counts the protons, which also equals the electrons in a neutral atom.",
        ],
        explain: "The proton number Z is the number of protons in the nucleus. It defines the element and, in a neutral atom, also equals the number of electrons.",
      },
    ],
  },
];
