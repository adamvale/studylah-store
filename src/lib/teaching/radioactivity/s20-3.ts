import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, section 3. Grounded in KB Chapter 22 (Radioactivity) section 22.6: nuclide equations.
// CALCULATION section: every nuclide equation lives in a `formula` field; every calculation question
// carries a `working` block that balances the nucleon number A (top) and the proton number Z (bottom).
// No figure needed - the equations live in the formula/working latex.

export const BOXES: Subconcept[] = [
  {
    id: "t20.3",
    code: "T20.3",
    title: "Nuclide equations",
    blurb: "Balancing nuclear decay by conserving nucleon number and proton number",
    steps: [
      {
        kind: "concept",
        heading: "Both sides must balance",
        body: "In every nuclear equation the *total nucleon number* (the top numbers) and the *total proton number* (the bottom numbers) are *conserved*: they add up to the same total on each side.",
        formula: {
          latex: "A_{\\text{before}} = A_{\\text{after}}, \\quad Z_{\\text{before}} = Z_{\\text{after}}",
          where: [
            { sym: "A", meaning: "total nucleon number (top)" },
            { sym: "Z", meaning: "total proton number (bottom)" },
          ],
        },
        say: "A nuclear equation is like a balance sheet. Add up the top numbers, the nucleon numbers, on the left and they must equal the total on the right. Do the same with the bottom numbers, the proton numbers. Nothing is created or lost, so both totals stay conserved. That single rule lets you fill in any missing nucleus.",
      },
      {
        kind: "concept",
        heading: "Alpha decay: A down 4, Z down 2",
        body: "In *alpha decay* the nucleus emits a *helium nucleus* (2 protons and 2 neutrons). So the nucleon number *falls by 4* and the proton number *falls by 2*, making a new element.",
        formula: {
          latex: "^{238}_{92}\\text{U} \\rightarrow\\ ^{234}_{90}\\text{Th} + ^{4}_{2}\\text{He}",
          where: [
            { sym: "^{4}_{2}\\text{He}", meaning: "the alpha particle (a helium nucleus)" },
          ],
        },
        say: "An alpha particle is a helium nucleus, carrying 2 protons and 2 neutrons away. So the nucleon number drops by 4 and the proton number drops by 2, and the atom turns into a new element. Uranium 238 loses an alpha and becomes thorium 234. Check it: 234 plus 4 is 238 on top, and 90 plus 2 is 92 on the bottom.",
      },
      {
        kind: "concept",
        heading: "Beta decay: A same, Z up 1",
        body: "In *beta decay* a *neutron turns into a proton* and throws out a fast *electron*. The nucleon number is unchanged and the proton number rises by 1, making a new element.",
        formula: {
          latex: "^{131}_{53}\\text{I} \\rightarrow\\ ^{131}_{54}\\text{Xe} + ^{0}_{-1}\\text{e}",
          where: [
            { sym: "^{0}_{-1}\\text{e}", meaning: "the beta particle (an electron)" },
          ],
        },
        say: "In beta decay a neutron inside the nucleus changes into a proton, and a fast electron, the beta particle, shoots out. The total number of nucleons does not change, but there is now one more proton, so the proton number goes up by 1. Iodine 131 becomes xenon 131. Notice the electron is written with a nucleon number of 0 and a proton number of minus 1, so the bottoms still balance: 54 plus minus 1 gives 53.",
      },
      {
        kind: "concept",
        heading: "Gamma emission: nothing changes",
        body: "In *gamma emission* the nucleus only *sheds energy* as an electromagnetic wave. The nucleon number and the proton number are *both unchanged*, so it stays the *same nuclide*.",
        formula: {
          latex: "^{60}_{27}\\text{Co} \\rightarrow\\ ^{60}_{27}\\text{Co} + \\gamma",
        },
        say: "Gamma emission is different. The nucleus just releases a burst of energy as a high-energy electromagnetic wave. No protons or neutrons leave, so the top and bottom numbers stay exactly the same and the nuclide is unchanged. Cobalt 60 stays cobalt 60 after emitting a gamma ray.",
      },
      {
        kind: "choice",
        question: "Complete the alpha decay: ^{238}_{92}U -> ? + ^{4}_{2}He. Which is the missing nucleus?",
        options: ["^{242}_{94}Pu", "^{234}_{92}U", "^{234}_{90}Th", "^{236}_{88}Ra"],
        correct: 2,
        ask: "Alpha decay takes 4 off the top and 2 off the bottom. Work out 238 minus 4 and 92 minus 2.",
        hints: [
          "The nucleon numbers must balance: 238 = A + 4, so A is 238 minus 4.",
          "238 minus 4 is 234, and 92 minus 2 is 90, which is thorium.",
        ],
        working: [
          { label: "Formula", latex: "A = 238 - 4, \\quad Z = 92 - 2" },
          { label: "Substitute", latex: "^{238}_{92}\\text{U} \\rightarrow\\ ^{234}_{90}\\text{X} + ^{4}_{2}\\text{He}" },
          { label: "Answer", latex: "^{234}_{90}\\text{Th}" },
        ],
        explain: "The daughter is thorium 234, because the nucleon number falls by 4 to 234 and the proton number falls by 2 to 90.",
      },
      {
        kind: "choice",
        question: "Complete the beta decay: ^{234}_{90}Th -> ? + ^{0}_{-1}e. Which is the missing nucleus?",
        options: ["^{234}_{91}Pa", "^{234}_{89}Ac", "^{230}_{88}Ra", "^{234}_{90}Th"],
        correct: 0,
        ask: "Beta decay keeps the top number the same and raises the bottom number by 1. Work out 90 plus 1.",
        hints: [
          "The nucleon number stays at 234; the proton number rises by 1.",
          "90 plus 1 is 91, which is protactinium.",
        ],
        working: [
          { label: "Formula", latex: "A = 234, \\quad Z = 90 + 1" },
          { label: "Substitute", latex: "^{234}_{90}\\text{Th} \\rightarrow\\ ^{234}_{91}\\text{X} + ^{0}_{-1}\\text{e}" },
          { label: "Answer", latex: "^{234}_{91}\\text{Pa}" },
        ],
        explain: "The daughter is protactinium 234, because in beta decay the nucleon number stays at 234 while the proton number rises by 1 to 91.",
      },
      {
        kind: "choice",
        question: "Identify the missing particle: ^{210}_{84}Po -> ^{206}_{82}Pb + ?",
        options: ["a beta particle, ^{0}_{-1}e", "a neutron, ^{1}_{0}n", "a gamma ray", "an alpha particle, ^{4}_{2}He"],
        correct: 3,
        ask: "Find the change in the top and bottom numbers: 210 minus 206 and 84 minus 82. Which particle carries that away?",
        hints: [
          "The nucleon number falls by 4 and the proton number falls by 2.",
          "A particle of 4 on top and 2 on the bottom is a helium nucleus, an alpha particle.",
        ],
        working: [
          { label: "Formula", latex: "A = 210 - 206, \\quad Z = 84 - 82" },
          { label: "Substitute", latex: "^{210}_{84}\\text{Po} \\rightarrow\\ ^{206}_{82}\\text{Pb} + ^{A}_{Z}\\text{?}" },
          { label: "Answer", latex: "^{4}_{2}\\text{He}\\ \\text{(an alpha particle)}" },
        ],
        explain: "The missing particle is an alpha particle, helium 4, because the nucleon number drops by 4 and the proton number drops by 2.",
      },
      {
        kind: "order",
        prompt: "Put the bismuth 212 decay chain in order: it emits an alpha particle, then the product emits a beta particle.",
        items: [
          "^{212}_{83}Bi emits an alpha particle",
          "^{208}_{81}Tl is formed",
          "^{208}_{81}Tl emits a beta particle",
          "^{208}_{82}Pb is formed",
        ],
        ask: "Start with the alpha decay of bismuth 212, which takes 4 off the top and 2 off the bottom, then follow with the beta decay.",
        hints: [
          "Alpha first: 212 becomes 208 and 83 becomes 81, which is thallium 208.",
          "Then beta: the top stays 208 and 81 rises to 82, which is lead 208.",
        ],
        explain: "Bismuth 212 first emits an alpha to become thallium 208 (nucleon number 212 to 208, proton number 83 to 81), then thallium 208 emits a beta to become lead 208 (nucleon number stays 208, proton number 81 to 82).",
      },
      {
        kind: "choice",
        question: "In every nuclear decay equation, which 2 quantities must add up to the same total on both sides?",
        options: [
          "the number of electrons and the number of atoms",
          "the total nucleon number and the total proton number",
          "the mass in grams and the temperature",
          "the number of neutrons only",
        ],
        correct: 1,
        ask: "Think about the top numbers and the bottom numbers in the notation A over Z. Which 2 totals are conserved?",
        hints: [
          "One is the top number in the notation, one is the bottom number.",
          "The total nucleon number and the total proton number are both conserved.",
        ],
        explain: "The total nucleon number (the top numbers) and the total proton number (the bottom numbers) are conserved, so each of those totals is equal on both sides.",
      },
      {
        kind: "insight",
        body: "To fill in any missing nucleus, just *balance the tops* and *balance the bottoms*: the *nucleon numbers* add up equally, and so do the *proton numbers*.",
        say: "Here is the takeaway. You never have to memorise every decay. Write down what you know, then balance the top numbers so the nucleon totals match, and balance the bottom numbers so the proton totals match. Whatever is left over is your missing nucleus or particle.",
      },
    ],
  },
];
