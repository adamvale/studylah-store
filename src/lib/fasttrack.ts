// ── FastTrack: answer like the examiner wants ──────────────────────────────
// Client-safe (no server imports). A sub-60% student usually knows more than
// their marks show; they lose credit at the point of WRITING. FastTrack teaches
// the writing, per QUESTION ARCHETYPE (a "Play"), attacking the four ways marks
// leak: missing keywords, vague phrasing, wrong format, incomplete logic.
//
// Each Play has five parts that map 1:1 to the goals:
//   1. recognise  - the 5-10s read: triggers, what it tests, marks→points
//   2. skeleton   - the 3-4 step answer shape examiners recognise instantly
//   3. keywords   - vague ✗ vs exact examiner ✓ contrast pairs
//   4. model      - a full-mark answer with crediting points
//   5. drill      - the student writes one; the AI marker scores X/Y (reuses
//                   the tutor "structured" mode) → mastery + SRS
//
// Content authored by FAMILY (chemistry/physics/biology) so Pure + Science +
// N(A) rows all share one playbook. Compliance: never promises a grade; every
// claim is about matching the mark scheme.
//
// COMPLIANCE NOTE for future edits: keep copy free of banned words
// (guaranteed/sure-win/leaked/insider/100%) and em/en dashes. Molecules use
// real Unicode (H₂O, CO₂); the minus sign is U+2212 in maths.

export type Family = "chemistry" | "physics" | "biology";

export interface KeywordPair {
  vague: string; // what a weak answer writes (loses the mark)
  exact: string; // the examiner phrasing that earns it
}

export interface Play {
  id: string; // stable, e.g. "chem-explain-bonding" (used for mastery + SRS)
  family: Family;
  name: string;
  cue: string; // the one-line "you'll see this when..."
  triggers: string[]; // command/stem words that flag this archetype (RECOGNISE)
  tests: string; // what the question is really testing
  marksHint: string; // how marks map to points
  skeleton: string[]; // the ordered steps of the answer shape
  keywords: KeywordPair[]; // vague → exact
  model: {
    prompt: string; // a representative question
    marks: number;
    answer: string; // full-mark model; crediting phrases in CAPS for the marker
    credit: string[]; // the crediting points, plain, in order (shown to student)
  };
  drill: {
    prompt: string; // a FRESH question of this archetype for the student
    marks: number;
    model: string; // model answer (CAPS crediting phrases) for the AI marker
  };
  // classifier: short stems used in the 5-second "which play is this?" game.
  classifierStems: string[];
}

// ── CHEMISTRY ────────────────────────────────────────────────────────────────
const CHEMISTRY: Play[] = [
  {
    id: "chem-explain-bonding",
    family: "chemistry",
    name: "Explain a property from bonding & structure",
    cue: "Any 'explain why X conducts / melts high / is hard' question.",
    triggers: ["explain why", "in terms of", "structure and bonding", "account for"],
    tests: "Linking a physical property to the particles and the forces between them.",
    marksHint: "Usually 2 to 4 marks: name the structure, the particles, the forces, then the consequence. One mark per link.",
    skeleton: [
      "Name the structure and bonding (e.g. giant ionic lattice / giant covalent / simple molecular / metallic).",
      "Say what the particles are and the force holding them (strong electrostatic attraction / weak intermolecular forces / delocalised electrons).",
      "State what must happen for the property (energy to overcome the force / charged particles free to move).",
      "Conclude with the property, linked back.",
    ],
    keywords: [
      { vague: "the bonds are strong", exact: "strong electrostatic forces of attraction between oppositely charged ions" },
      { vague: "it has free electrons", exact: "delocalised electrons that are free to move and carry charge" },
      { vague: "the molecules are weak", exact: "weak intermolecular forces between the molecules (not the covalent bonds) are broken" },
      { vague: "it conducts because of ions", exact: "the ions are free to move and carry charge when molten or dissolved" },
    ],
    model: {
      prompt: "Explain why sodium chloride has a high melting point. (2)",
      marks: 2,
      answer:
        "Sodium chloride has a GIANT IONIC LATTICE with STRONG ELECTROSTATIC FORCES OF ATTRACTION between the oppositely charged ions. A LARGE AMOUNT OF ENERGY is needed to overcome these forces, so the melting point is high.",
      credit: [
        "Giant ionic lattice structure",
        "Strong electrostatic attraction between oppositely charged ions",
        "A large amount of energy is needed to overcome the forces",
      ],
    },
    drill: {
      prompt: "Explain why graphite can conduct electricity but diamond cannot. (3)",
      marks: 3,
      model:
        "Graphite has a GIANT COVALENT STRUCTURE in which each carbon atom bonds to THREE others, leaving ONE DELOCALISED ELECTRON per atom. These DELOCALISED ELECTRONS ARE FREE TO MOVE and carry charge, so graphite conducts. In diamond each carbon bonds to FOUR others with NO FREE ELECTRONS, so diamond cannot conduct.",
    },
    classifierStems: [
      "Explain, in terms of structure, why silicon dioxide has a high melting point.",
      "Account for the electrical conductivity of molten lead bromide.",
    ],
  },
  {
    id: "chem-mole-calc",
    family: "chemistry",
    name: "Mole calculation (mass ⇄ moles ⇄ mass)",
    cue: "Any 'calculate the mass/volume/amount' with an equation given.",
    triggers: ["calculate the mass", "calculate the number of moles", "how many moles", "calculate the volume"],
    tests: "Working through moles as the bridge, with the right steps shown for method marks.",
    marksHint: "Method marks are for the STEPS, not just the answer. Show moles of the known, the ratio, then the unknown, with units.",
    skeleton: [
      "Write moles of the substance you know: moles = mass ÷ Mr (or volume ÷ 24 dm³ for a gas at r.t.p.).",
      "Use the equation's mole ratio to get moles of the substance you want.",
      "Convert back: mass = moles × Mr (or volume = moles × 24 dm³).",
      "State the answer with units and correct significant figures.",
    ],
    keywords: [
      { vague: "I divided by the number", exact: "moles = mass ÷ Mr" },
      { vague: "the ratio is the same", exact: "using the 1:2 mole ratio from the balanced equation" },
      { vague: "24", exact: "molar gas volume = 24 dm³ per mole at room temperature and pressure" },
    ],
    model: {
      prompt: "Calculate the mass of magnesium oxide formed when 4.8 g of magnesium burns completely. (Mr: MgO = 40, Mg = 24) 2Mg + O₂ → 2MgO (3)",
      marks: 3,
      answer:
        "MOLES OF Mg = 4.8 ÷ 24 = 0.2 mol. From the 2:2 (1:1) RATIO, MOLES OF MgO = 0.2 mol. MASS OF MgO = 0.2 × 40 = 8.0 g.",
      credit: [
        "Moles of Mg = 4.8 ÷ 24 = 0.2",
        "Mole ratio Mg:MgO is 1:1 so moles MgO = 0.2",
        "Mass = 0.2 × 40 = 8.0 g",
      ],
    },
    drill: {
      prompt: "Calculate the volume of carbon dioxide (at r.t.p.) produced when 10 g of calcium carbonate decomposes completely. (Mr: CaCO₃ = 100) CaCO₃ → CaO + CO₂ (3)",
      marks: 3,
      model:
        "MOLES OF CaCO₃ = 10 ÷ 100 = 0.1 mol. From the 1:1 RATIO, MOLES OF CO₂ = 0.1 mol. VOLUME OF CO₂ = 0.1 × 24 = 2.4 dm³ at r.t.p.",
    },
    classifierStems: [
      "Calculate the mass of copper deposited when 0.5 mol of electrons pass through.",
      "Determine the number of moles in 8.0 g of methane (Mr = 16).",
    ],
  },
  {
    id: "chem-gas-test",
    family: "chemistry",
    name: "Describe a test for a gas or ion",
    cue: "'Describe a test to show...' or 'How would you test for...'.",
    triggers: ["describe a test", "how would you test", "identify the gas", "test for"],
    tests: "Reagent added + observation + conclusion, in that exact order.",
    marksHint: "2 marks: one for the test (reagent/method), one for the correct positive observation. No observation = no mark.",
    skeleton: [
      "State the test: the reagent added or the method used.",
      "State the exact positive observation (colour change, precipitate colour, gas effect).",
      "If asked, state the conclusion (which ion/gas is present).",
    ],
    keywords: [
      { vague: "it turns cloudy", exact: "limewater turns milky / a white precipitate forms" },
      { vague: "the splint reacts", exact: "a lighted splint gives a squeaky pop (hydrogen) / relights (oxygen)" },
      { vague: "it goes a different colour", exact: "damp red litmus paper turns blue (ammonia) / damp blue litmus turns red then bleaches (chlorine)" },
      { vague: "add acid and it fizzes", exact: "add dilute acid; effervescence and the gas turns limewater milky (carbonate → CO₂)" },
    ],
    model: {
      prompt: "Describe a test to show that a gas is carbon dioxide. (2)",
      marks: 2,
      answer: "BUBBLE THE GAS THROUGH LIMEWATER. The LIMEWATER TURNS MILKY (white precipitate), showing the gas is carbon dioxide.",
      credit: ["Bubble the gas through limewater", "Limewater turns milky / cloudy white"],
    },
    drill: {
      prompt: "Describe a test to identify the gas hydrogen. (2)",
      marks: 2,
      model: "HOLD A LIGHTED SPLINT at the mouth of the tube. The gas burns with a SQUEAKY POP, showing it is hydrogen.",
    },
    classifierStems: [
      "Describe a chemical test to distinguish ethanol from ethanoic acid.",
      "State a test for chloride ions in solution.",
    ],
  },
  {
    id: "chem-rate-explain",
    family: "chemistry",
    name: "Explain a rate change (collision theory)",
    cue: "'Explain why increasing temperature/concentration speeds up the reaction.'",
    triggers: ["explain why", "rate of reaction", "collision", "faster", "increasing the temperature"],
    tests: "Collision theory: frequency of effective collisions.",
    marksHint: "2 to 3 marks: more/faster particles, more frequent collisions, more collisions with enough energy.",
    skeleton: [
      "State what the change does to the particles (more particles per volume / more kinetic energy / larger surface area).",
      "Say this makes collisions MORE FREQUENT (and, for temperature, more particles have energy ≥ activation energy).",
      "Conclude: more frequent effective collisions per second, so the rate increases.",
    ],
    keywords: [
      { vague: "the particles hit more", exact: "the frequency of collisions increases" },
      { vague: "there is more energy", exact: "more particles have energy greater than or equal to the activation energy" },
      { vague: "they move faster so it's quicker", exact: "particles move faster, so effective collisions happen more often per second" },
      { vague: "more particles to react", exact: "more particles per unit volume, so collisions are more frequent" },
    ],
    model: {
      prompt: "Explain, using collision theory, why increasing the concentration of an acid increases the rate of reaction. (2)",
      marks: 2,
      answer:
        "At higher concentration there are MORE ACID PARTICLES PER UNIT VOLUME, so the FREQUENCY OF COLLISIONS between reacting particles increases. More effective collisions per second means the RATE OF REACTION INCREASES.",
      credit: [
        "More particles per unit volume",
        "Frequency of (effective) collisions increases",
      ],
    },
    drill: {
      prompt: "Explain, using collision theory, why increasing the temperature increases the rate of a reaction. (3)",
      marks: 3,
      model:
        "At higher temperature the particles have MORE KINETIC ENERGY and MOVE FASTER, so COLLISIONS ARE MORE FREQUENT. Also, MORE PARTICLES HAVE ENERGY GREATER THAN OR EQUAL TO THE ACTIVATION ENERGY, so a greater proportion of collisions are effective. The RATE OF REACTION INCREASES.",
    },
    classifierStems: [
      "Explain why powdered marble reacts faster than marble chips.",
      "Use collision theory to explain the effect of a catalyst on rate.",
    ],
  },
  {
    id: "chem-ionic-equation",
    family: "chemistry",
    name: "Write an ionic / balanced equation",
    cue: "'Write the ionic equation for...' or 'construct a balanced equation'.",
    triggers: ["write the ionic equation", "balanced equation", "construct an equation", "including state symbols"],
    tests: "Correct formulae, balancing, spectator ions removed, state symbols.",
    marksHint: "Often 2 marks: one for correct formulae/balancing, one for state symbols. State symbols are a whole mark, do not skip them.",
    skeleton: [
      "Write correct formulae for reactants and products (charges balanced within each formula).",
      "Balance the atoms and the charges.",
      "For ionic equations, cancel spectator ions (ions unchanged on both sides).",
      "Add state symbols: (s) (l) (g) (aq).",
    ],
    keywords: [
      { vague: "H2O", exact: "H₂O(l) with the state symbol" },
      { vague: "leave out the state", exact: "include (s), (l), (g), (aq) for every species" },
      { vague: "keep everything", exact: "remove spectator ions that are unchanged on both sides" },
    ],
    model: {
      prompt: "Write the ionic equation, with state symbols, for the reaction between silver nitrate and sodium chloride solutions. (2)",
      marks: 2,
      answer: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s). The CORRECT FORMULAE AND BALANCING score one mark; the STATE SYMBOLS score the second.",
      credit: ["Correct balanced ionic equation Ag⁺ + Cl⁻ → AgCl", "Correct state symbols (aq, aq, s)"],
    },
    drill: {
      prompt: "Write the ionic equation, with state symbols, for the neutralisation of any strong acid by any strong alkali. (2)",
      marks: 2,
      model: "H⁺(aq) + OH⁻(aq) → H₂O(l). CORRECT SPECIES AND BALANCING score one mark; STATE SYMBOLS score the second.",
    },
    classifierStems: [
      "Construct the balanced equation for the complete combustion of propane.",
      "Write the ionic half-equation for the oxidation of iron(II) to iron(III).",
    ],
  },
  {
    id: "chem-electrolysis",
    family: "chemistry",
    name: "Electrolysis: product at each electrode",
    cue: "'Name the product at the cathode/anode and explain.'",
    triggers: ["electrolysis", "cathode", "anode", "electrode", "product at"],
    tests: "Which ion is discharged where, and why, with the half-equation.",
    marksHint: "Marks for: the ion attracted, the discharge rule, the product, and the half-equation.",
    skeleton: [
      "State which ions move to which electrode (cations → cathode, anions → anode).",
      "Apply the discharge rule (reactivity for cathode; halide/OH⁻ preference for anode).",
      "Name the product formed.",
      "Give the half-equation with electrons.",
    ],
    keywords: [
      { vague: "the metal appears", exact: "metal ions are reduced and discharged at the cathode" },
      { vague: "it gains electrons", exact: "reduction: gain of electrons at the cathode (e.g. Cu²⁺ + 2e⁻ → Cu)" },
      { vague: "it loses electrons", exact: "oxidation: loss of electrons at the anode (e.g. 2Cl⁻ → Cl₂ + 2e⁻)" },
    ],
    model: {
      prompt: "During the electrolysis of molten lead(II) bromide, name the product at the cathode and give the half-equation. (2)",
      marks: 2,
      answer:
        "Pb²⁺ ions move to the CATHODE and are REDUCED to LEAD. Half-equation: Pb²⁺ + 2e⁻ → Pb.",
      credit: ["Product is lead (metal at cathode by reduction)", "Half-equation Pb²⁺ + 2e⁻ → Pb"],
    },
    drill: {
      prompt: "During the electrolysis of concentrated sodium chloride solution, name the product at the anode and give the half-equation. (2)",
      marks: 2,
      model: "CHLORINE is produced at the ANODE, as chloride ions are preferentially discharged (OXIDISED). Half-equation: 2Cl⁻ → Cl₂ + 2e⁻.",
    },
    classifierStems: [
      "Predict the product at the cathode during electrolysis of copper(II) sulfate with carbon electrodes.",
      "Explain why hydrogen, not sodium, forms at the cathode in dilute sodium chloride.",
    ],
  },
  {
    id: "chem-energetics",
    family: "chemistry",
    name: "Exothermic / endothermic in terms of bonds",
    cue: "'Explain why the reaction is exothermic in terms of bond breaking and making.'",
    triggers: ["exothermic", "endothermic", "bond breaking", "bond making", "energy change", "in terms of bonds"],
    tests: "Bond breaking absorbs energy, bond making releases it, then compare.",
    marksHint: "Marks for: breaking takes in energy, making gives out energy, then which is greater.",
    skeleton: [
      "Breaking bonds is ENDOTHERMIC (absorbs / takes in energy).",
      "Making bonds is EXOTHERMIC (releases / gives out energy).",
      "Compare: if more energy is released making bonds than absorbed breaking them, the reaction is exothermic (and the reverse for endothermic).",
    ],
    keywords: [
      { vague: "it gives off heat", exact: "energy is released to the surroundings, so temperature rises" },
      { vague: "breaking bonds makes energy", exact: "breaking bonds absorbs energy (endothermic)" },
      { vague: "making bonds uses energy", exact: "making bonds releases energy (exothermic)" },
    ],
    model: {
      prompt: "Explain, in terms of bonds, why the combustion of methane is exothermic. (3)",
      marks: 3,
      answer:
        "BREAKING the bonds in methane and oxygen ABSORBS ENERGY (endothermic). MAKING the bonds in carbon dioxide and water RELEASES ENERGY (exothermic). MORE ENERGY IS RELEASED making bonds than is absorbed breaking them, so the reaction is exothermic overall.",
      credit: [
        "Breaking bonds absorbs energy",
        "Making bonds releases energy",
        "More energy released than absorbed → exothermic",
      ],
    },
    drill: {
      prompt: "A reaction takes in heat from the surroundings so the temperature falls. Explain, in terms of bond breaking and making, why this reaction is endothermic. (3)",
      marks: 3,
      model:
        "BREAKING bonds ABSORBS ENERGY (endothermic) and MAKING bonds RELEASES ENERGY (exothermic). Here, MORE ENERGY IS ABSORBED breaking bonds than is released making them, so overall the reaction takes in energy and is endothermic.",
    },
    classifierStems: [
      "Use bond energies to explain the sign of the enthalpy change.",
      "Explain why a hand-warmer reaction is described as exothermic.",
    ],
  },
  {
    id: "chem-organic-mechanism",
    family: "chemistry",
    name: "Organic reactions & conditions",
    cue: "'State the type of reaction and the conditions' for an organic change.",
    triggers: ["type of reaction", "conditions", "reagent", "addition", "substitution", "combustion", "esterification"],
    tests: "Naming the reaction type and quoting exact reagents/conditions.",
    marksHint: "One mark for the reaction type, one for the reagent, one for the condition (catalyst/temperature/UV).",
    skeleton: [
      "Name the reaction type (addition / substitution / combustion / fermentation / esterification / cracking).",
      "State the reagent(s).",
      "State the condition(s): catalyst, temperature, pressure, UV light.",
    ],
    keywords: [
      { vague: "add bromine", exact: "bromine water; the C=C double bond adds across (addition, decolourises)" },
      { vague: "heat it up", exact: "concentrated sulfuric acid catalyst, warm (esterification)" },
      { vague: "with sunlight", exact: "in the presence of ultraviolet light (substitution of alkane with chlorine)" },
      { vague: "using yeast", exact: "yeast, 30 to 40 °C, absence of air (anaerobic fermentation)" },
    ],
    model: {
      prompt: "Ethene reacts with steam to form ethanol. State the type of reaction and the conditions. (3)",
      marks: 3,
      answer:
        "This is an ADDITION reaction (hydration). Conditions: STEAM, a PHOSPHORIC ACID CATALYST, about 300 °C and 60 to 70 atmospheres pressure.",
      credit: ["Addition (hydration) reaction", "Phosphoric acid catalyst", "High temperature and pressure / steam"],
    },
    drill: {
      prompt: "Ethanol and ethanoic acid react to form an ester. State the type of reaction and the conditions. (3)",
      marks: 3,
      model:
        "This is ESTERIFICATION (a condensation reaction). Conditions: a CONCENTRATED SULFURIC ACID CATALYST and GENTLE WARMING (heat under reflux).",
    },
    classifierStems: [
      "State the reagent and condition for converting an alkene to an alkane.",
      "Name the reaction type when a long-chain alkane is broken into smaller molecules.",
    ],
  },
  {
    id: "chem-titration-method",
    family: "chemistry",
    name: "Describe a titration / practical method",
    cue: "'Describe how you would carry out...' a titration or preparation.",
    triggers: ["describe how", "method", "titration", "prepare a pure sample", "how would you obtain"],
    tests: "Ordered, repeatable steps with the credit-bearing detail (indicator, end point, repeats).",
    marksHint: "Marks for named apparatus, the key measured detail, the end point, and improving reliability (repeats / concordant results).",
    skeleton: [
      "Measure a fixed volume of one solution with a pipette into a flask; add the indicator.",
      "Add the other solution from a burette, swirling, until the end point (colour change).",
      "Record the titre; repeat until concordant results, then take the mean.",
      "State the relevant safety/accuracy point if asked.",
    ],
    keywords: [
      { vague: "measure the acid", exact: "use a pipette to measure a fixed 25.0 cm³ into a conical flask" },
      { vague: "until it changes colour", exact: "until the indicator just changes colour (the end point)" },
      { vague: "do it a few times", exact: "repeat until two titres are concordant (within 0.10 cm³) and take the mean" },
      { vague: "add indicator", exact: "add a few drops of a suitable indicator (e.g. methyl orange / phenolphthalein)" },
    ],
    model: {
      prompt: "Describe how you would use titration to find the volume of acid that neutralises 25.0 cm³ of alkali. (4)",
      marks: 4,
      answer:
        "USE A PIPETTE to measure 25.0 cm³ of the alkali into a CONICAL FLASK and ADD A FEW DROPS OF INDICATOR. Fill a BURETTE with the acid and add it slowly, SWIRLING, until the INDICATOR JUST CHANGES COLOUR (the END POINT). Record the titre and REPEAT UNTIL CONCORDANT, then take the mean.",
      credit: [
        "Pipette a fixed volume into a flask + add indicator",
        "Add acid from a burette while swirling",
        "Stop at the end point (colour change)",
        "Repeat for concordant results and average",
      ],
    },
    drill: {
      prompt: "Describe how you would prepare a pure, dry sample of copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid. (4)",
      marks: 4,
      model:
        "ADD EXCESS COPPER(II) OXIDE to warm dilute sulfuric acid until no more reacts (to ensure all the acid is used). FILTER to remove the excess solid. Heat the filtrate to EVAPORATE TO THE POINT OF CRYSTALLISATION, then LEAVE TO COOL so crystals form. Filter and DRY the crystals between filter paper.",
    },
    classifierStems: [
      "Describe how to obtain pure water from salty water.",
      "Outline a method to measure the rate of a gas-producing reaction.",
    ],
  },
  {
    id: "chem-data-conclusion",
    family: "chemistry",
    name: "Draw a conclusion from data",
    cue: "'What can you conclude...' / 'use the data to explain...'.",
    triggers: ["what can you conclude", "use the data", "suggest an explanation", "the results show"],
    tests: "Quoting the data, stating the trend, then linking to chemistry.",
    marksHint: "One mark for quoting figures with units, one for the trend, one for the explanation.",
    skeleton: [
      "Quote the specific data (with units) that supports your point.",
      "State the trend or comparison in words (increases / is greater than).",
      "Link the trend to the chemistry (reactivity, rate, bonding).",
    ],
    keywords: [
      { vague: "it goes up", exact: "the rate increases from 12 cm³/s to 30 cm³/s as temperature rises" },
      { vague: "it's better", exact: "the value is greater, showing a higher reactivity" },
      { vague: "the numbers show it", exact: "the data show a positive correlation between X and Y" },
    ],
    model: {
      prompt: "A student times how long marble chips take to react at 20 °C (80 s) and 40 °C (35 s). What can you conclude, and why? (3)",
      marks: 3,
      answer:
        "The reaction is FASTER at the higher temperature: it took 80 s AT 20 °C but only 35 s AT 40 °C. So the RATE INCREASES WITH TEMPERATURE, because particles have more energy and COLLIDE MORE FREQUENTLY WITH ENOUGH ENERGY to react.",
      credit: [
        "Quote both times with temperatures",
        "Rate increases with temperature (trend)",
        "Explanation via more frequent effective collisions",
      ],
    },
    drill: {
      prompt: "Metal X displaces copper from copper(II) sulfate but metal Y does not. Use this to conclude the relative reactivity of X, Y and copper, and explain. (3)",
      marks: 3,
      model:
        "X IS MORE REACTIVE THAN COPPER because it DISPLACES copper from its salt. Y IS LESS REACTIVE THAN COPPER because it CANNOT DISPLACE it. So the order of reactivity is X, then copper, then Y (a more reactive metal displaces a less reactive one).",
    },
    classifierStems: [
      "Use the temperature rise to conclude which reaction is most exothermic.",
      "The pH falls as acid is added; what can you conclude about the solution?",
    ],
  },
];

// ── PHYSICS ──────────────────────────────────────────────────────────────────
const PHYSICS: Play[] = [
  {
    id: "phys-formula-calc",
    family: "physics",
    name: "Calculation: formula, substitute, evaluate, unit",
    cue: "Any 'calculate' with numbers and a formula.",
    triggers: ["calculate", "determine", "work out", "find the", "how much"],
    tests: "Method marks for the equation and substitution, plus the unit.",
    marksHint: "The formula and correct substitution usually score even if the final number is wrong. The UNIT is often its own mark.",
    skeleton: [
      "Write the equation in symbols (e.g. V = I R).",
      "Rearrange if needed, then substitute the numbers with units.",
      "Evaluate to get the value.",
      "State the answer with the correct unit and sensible significant figures.",
    ],
    keywords: [
      { vague: "I just did the sum", exact: "state the equation, then show the substitution before the answer" },
      { vague: "the answer is 12", exact: "12 V (always give the unit)" },
      { vague: "moved it around", exact: "rearranged to make the required quantity the subject" },
    ],
    model: {
      prompt: "A resistor carries a current of 0.5 A when connected to a 6 V supply. Calculate its resistance. (2)",
      marks: 2,
      answer: "EQUATION: R = V ÷ I. SUBSTITUTE: R = 6 ÷ 0.5 = 12. ANSWER: R = 12 Ω.",
      credit: ["Correct equation and substitution R = 6 ÷ 0.5", "Answer 12 with the unit Ω"],
    },
    drill: {
      prompt: "A car of mass 900 kg accelerates at 2 m/s². Calculate the resultant force on the car. (2)",
      marks: 2,
      model: "EQUATION: F = m a. SUBSTITUTE: F = 900 × 2 = 1800. ANSWER: F = 1800 N.",
    },
    classifierStems: [
      "Calculate the kinetic energy of a 2 kg ball moving at 3 m/s.",
      "Determine the power of a 60 J per second lamp.",
    ],
  },
  {
    id: "phys-explain-forces",
    family: "physics",
    name: "Explain motion using forces",
    cue: "'Explain why the object speeds up / stays at constant speed / stops.'",
    triggers: ["explain why", "in terms of forces", "resultant force", "why does it", "state and explain"],
    tests: "Comparing the forces to get a resultant, then linking to the motion.",
    marksHint: "Marks for naming the forces, comparing them (resultant), and the consequence for motion.",
    skeleton: [
      "Name the forces acting (e.g. driving force, friction/air resistance, weight).",
      "Compare them to state the resultant force (or that they are balanced).",
      "Link to motion: balanced → constant velocity / at rest; unbalanced → accelerates in the direction of the resultant.",
    ],
    keywords: [
      { vague: "the forces are equal so it stops", exact: "the forces are balanced, so there is no resultant force and it moves at constant velocity" },
      { vague: "there's more push", exact: "the resultant force acts in the direction of motion" },
      { vague: "it slows because of air", exact: "air resistance acts opposite to motion, giving a resultant force that decelerates it" },
    ],
    model: {
      prompt: "A skydiver falls at a steady (terminal) velocity. Explain, in terms of forces, why the velocity is constant. (2)",
      marks: 2,
      answer:
        "The skydiver's WEIGHT (downward) is BALANCED by the AIR RESISTANCE (upward). As there is NO RESULTANT FORCE, the skydiver moves at CONSTANT VELOCITY.",
      credit: ["Weight is balanced by air resistance", "No resultant force → constant velocity"],
    },
    drill: {
      prompt: "A car accelerates along a flat road. Its driving force is greater than the total resistive force. Explain, in terms of forces, why the car accelerates. (2)",
      marks: 2,
      model:
        "The DRIVING FORCE is GREATER than the resistive forces (friction and air resistance), so there is a RESULTANT FORCE in the direction of motion. This resultant force causes the car to ACCELERATE.",
    },
    classifierStems: [
      "Explain why a parachute reduces the skydiver's speed.",
      "A book rests on a table; explain why it does not move in terms of forces.",
    ],
  },
  {
    id: "phys-energy-transfer",
    family: "physics",
    name: "Describe energy transfers",
    cue: "'Describe the energy changes as...' / 'in terms of energy'.",
    triggers: ["energy changes", "energy transfer", "in terms of energy", "conservation of energy"],
    tests: "Correct energy stores, in order, using the right names, conserving energy.",
    marksHint: "One mark per correct transfer, in the right order. Use the proper store names.",
    skeleton: [
      "State the starting energy store.",
      "Describe each transfer in order (store → store), including wasted energy (usually thermal).",
      "State the useful final store and note energy is conserved.",
    ],
    keywords: [
      { vague: "movement energy", exact: "kinetic energy" },
      { vague: "height energy", exact: "gravitational potential energy" },
      { vague: "it loses energy", exact: "some energy is transferred to the surroundings as thermal (heat) energy" },
      { vague: "electric energy turns to light", exact: "electrical energy is transferred to light and thermal energy stores" },
    ],
    model: {
      prompt: "Describe the energy transfers as a ball falls from a height and bounces lower than before. (3)",
      marks: 3,
      answer:
        "As it falls, GRAVITATIONAL POTENTIAL ENERGY is transferred to KINETIC ENERGY. On impact, some energy is transferred to THERMAL (and sound) ENERGY to the surroundings, so LESS kinetic energy is available to raise it, and it bounces lower. Energy is CONSERVED overall.",
      credit: [
        "GPE → KE as it falls",
        "Some energy transferred to thermal/sound on impact",
        "Energy is conserved (so it rises to a lower height)",
      ],
    },
    drill: {
      prompt: "Describe the energy transfers in a battery-powered torch that is switched on. (3)",
      marks: 3,
      model:
        "The battery stores CHEMICAL ENERGY, which is transferred to ELECTRICAL ENERGY in the circuit. The bulb transfers this to LIGHT ENERGY (useful) and THERMAL ENERGY (wasted, to the surroundings). Energy is CONSERVED overall.",
    },
    classifierStems: [
      "Describe the energy changes in a swinging pendulum.",
      "State the energy transfers in a hydroelectric power station.",
    ],
  },
  {
    id: "phys-experiment-design",
    family: "physics",
    name: "Describe an experiment to determine X",
    cue: "'Describe an experiment to measure / determine...'.",
    triggers: ["describe an experiment", "how would you determine", "plan an investigation", "measure the"],
    tests: "Variables controlled, measurements taken, how the result is calculated, repeats.",
    marksHint: "Marks for: what you measure and with what, control of variables, the calculation, and improving accuracy (repeats/mean).",
    skeleton: [
      "State the quantities you measure and the instrument for each.",
      "State the variable you change and the ones you keep constant.",
      "Say how you use the measurements to get the answer (formula or graph gradient).",
      "Improve reliability: repeat and average, reduce a named error.",
    ],
    keywords: [
      { vague: "measure it a few times", exact: "repeat the readings and calculate the mean" },
      { vague: "use a timer", exact: "measure the time for 20 oscillations with a stopwatch, then divide by 20" },
      { vague: "keep things the same", exact: "keep the controlled variables constant (e.g. same mass, same length)" },
      { vague: "work it out", exact: "plot a graph and find the gradient / substitute into the equation" },
    ],
    model: {
      prompt: "Describe an experiment to determine the density of a small, irregular stone. (4)",
      marks: 4,
      answer:
        "MEASURE THE MASS of the stone using a BALANCE. Find its VOLUME by DISPLACEMENT: lower it into a measuring cylinder of water and record the RISE IN WATER LEVEL. Calculate DENSITY = MASS ÷ VOLUME. REPEAT and average to improve reliability.",
      credit: [
        "Mass measured with a balance",
        "Volume by displacement (water level rise)",
        "Density = mass ÷ volume",
        "Repeat and average / reduce error",
      ],
    },
    drill: {
      prompt: "Describe an experiment to determine the resistance of a fixed resistor using an ammeter and a voltmeter. (4)",
      marks: 4,
      model:
        "Connect the resistor in a circuit with an AMMETER IN SERIES and a VOLTMETER IN PARALLEL across it. Record the CURRENT and the VOLTAGE. Calculate RESISTANCE = VOLTAGE ÷ CURRENT. Take SEVERAL PAIRS OF READINGS and average (or plot V against I and find the gradient) to improve reliability.",
    },
    classifierStems: [
      "Describe how to measure the acceleration of a trolley down a ramp.",
      "Plan an investigation into how the length of a wire affects its resistance.",
    ],
  },
  {
    id: "phys-graph-interpret",
    family: "physics",
    name: "Interpret a motion / physics graph",
    cue: "'Use the graph to find...' / 'describe the motion shown'.",
    triggers: ["use the graph", "describe the motion", "gradient", "area under", "from the graph"],
    tests: "Knowing what gradient and area mean on THIS graph, and reading values correctly.",
    marksHint: "State what the gradient/area represents, then read values off with units.",
    skeleton: [
      "Identify the graph type (distance-time, speed-time, etc.).",
      "State what the gradient represents (speed / acceleration) and/or what the area represents (distance).",
      "Read the required values from the axes, with units.",
      "Interpret in words if asked (speeding up / constant / stationary).",
    ],
    keywords: [
      { vague: "the line goes up", exact: "a positive gradient shows the object is accelerating (speed-time) / moving away (distance-time)" },
      { vague: "flat line", exact: "a horizontal line on a distance-time graph shows the object is stationary" },
      { vague: "the space under it", exact: "the area under a speed-time graph equals the distance travelled" },
      { vague: "steeper means faster", exact: "the steeper the gradient of a distance-time graph, the greater the speed" },
    ],
    model: {
      prompt: "On a speed-time graph the line rises steadily from 0 to 20 m/s in 4 s. Find the acceleration and state what the area under the line represents. (3)",
      marks: 3,
      answer:
        "ACCELERATION = GRADIENT = change in speed ÷ time = 20 ÷ 4 = 5 m/s². The AREA UNDER THE LINE represents the DISTANCE TRAVELLED.",
      credit: [
        "Acceleration = gradient = 20 ÷ 4",
        "Acceleration = 5 m/s²",
        "Area under the line = distance travelled",
      ],
    },
    drill: {
      prompt: "A distance-time graph is a straight horizontal line for 10 s, then a straight line sloping upwards. Describe the motion in each part and say how you would find the speed in the second part. (3)",
      marks: 3,
      model:
        "In the first part the line is HORIZONTAL, so the object is STATIONARY. In the second part the line SLOPES UPWARD at a constant gradient, so the object moves at CONSTANT SPEED. The SPEED equals the GRADIENT = distance ÷ time for that section.",
    },
    classifierStems: [
      "Use the current-voltage graph to find the resistance at 2 V.",
      "Describe the motion shown by a speed-time graph that slopes down to zero.",
    ],
  },
  {
    id: "phys-state-law",
    family: "physics",
    name: "State a law or definition precisely",
    cue: "'State...' / 'define...' a quantity or law.",
    triggers: ["state", "define", "what is meant by", "give the definition"],
    tests: "Word-for-word precision, including the conditions.",
    marksHint: "These are all-or-nothing on the exact wording. Include the condition (e.g. 'provided temperature is constant').",
    skeleton: [
      "Give the precise definition/law in the exam's own wording.",
      "Include any condition or 'provided that' clause.",
      "Add the defining equation if it earns a mark.",
    ],
    keywords: [
      { vague: "voltage over current", exact: "resistance is the ratio of the potential difference across a component to the current through it" },
      { vague: "current is the same everywhere", exact: "Ohm's law: current is directly proportional to potential difference, provided temperature is constant" },
      { vague: "force times distance", exact: "the moment of a force = force × perpendicular distance from the pivot" },
    ],
    model: {
      prompt: "State Ohm's law. (2)",
      marks: 2,
      answer:
        "Ohm's law: the CURRENT through a metallic conductor is DIRECTLY PROPORTIONAL to the POTENTIAL DIFFERENCE across it, PROVIDED THE TEMPERATURE (and other physical conditions) REMAINS CONSTANT.",
      credit: [
        "Current directly proportional to potential difference",
        "Provided temperature is constant",
      ],
    },
    drill: {
      prompt: "Define the moment of a force, and state the principle of moments for a balanced object. (3)",
      marks: 3,
      model:
        "The MOMENT OF A FORCE = FORCE × PERPENDICULAR DISTANCE from the pivot. The PRINCIPLE OF MOMENTS states that for an object in equilibrium, the TOTAL CLOCKWISE MOMENT about a pivot EQUALS the TOTAL ANTICLOCKWISE MOMENT about the same pivot.",
    },
    classifierStems: [
      "Define acceleration.",
      "State the principle of conservation of energy.",
    ],
  },
  {
    id: "phys-waves",
    family: "physics",
    name: "Waves: explain reflection, refraction, ray diagrams",
    cue: "'Explain what happens to the ray...' / wave behaviour.",
    triggers: ["refraction", "reflection", "total internal reflection", "the ray", "wavefront", "explain what happens"],
    tests: "Cause (speed change / angle vs critical angle) and the correct direction of bending.",
    marksHint: "Marks for the cause and the correct direction (towards/away from the normal), plus the condition for TIR.",
    skeleton: [
      "State the boundary and what changes (speed, and usually wavelength).",
      "State the direction of bending relative to the normal (into a denser medium → towards the normal).",
      "For total internal reflection: state that the angle of incidence is greater than the critical angle, and the ray reflects fully.",
    ],
    keywords: [
      { vague: "the light bends", exact: "the light refracts towards the normal as it slows entering a denser medium" },
      { vague: "it bounces back inside", exact: "total internal reflection occurs when the angle of incidence exceeds the critical angle" },
      { vague: "the angle is the same", exact: "the angle of incidence equals the angle of reflection (measured from the normal)" },
    ],
    model: {
      prompt: "Explain what happens to a ray of light as it passes from air into glass at an angle. (2)",
      marks: 2,
      answer:
        "The light SLOWS DOWN as it enters the denser glass, so it REFRACTS TOWARDS THE NORMAL (the angle of refraction is smaller than the angle of incidence).",
      credit: ["Light slows entering the denser medium", "Refracts towards the normal"],
    },
    drill: {
      prompt: "Explain the condition for total internal reflection to occur when light travels from glass to air. (2)",
      marks: 2,
      model:
        "Total internal reflection occurs when light travels from a DENSER to a LESS DENSE medium AND the ANGLE OF INCIDENCE IS GREATER THAN THE CRITICAL ANGLE. The ray is then reflected entirely back into the glass.",
    },
    classifierStems: [
      "Explain why a straw in a glass of water looks bent.",
      "State the condition for an echo to be heard.",
    ],
  },
  {
    id: "phys-circuits",
    family: "physics",
    name: "Circuits: series vs parallel reasoning",
    cue: "'Explain what happens to the current / brightness when...'.",
    triggers: ["series", "parallel", "current", "potential difference", "what happens to the reading", "brightness"],
    tests: "Applying the rules: current splits in parallel, p.d. shared in series, total resistance behaviour.",
    marksHint: "Marks for stating the rule and applying it to the specific change asked.",
    skeleton: [
      "State the relevant circuit rule (current is the same in series / splits in parallel; p.d. adds in series).",
      "Say what the change does to total resistance.",
      "Link to current and to the observation (brightness of a lamp, meter reading).",
    ],
    keywords: [
      { vague: "the current shares out", exact: "in parallel, the current from the source splits between the branches" },
      { vague: "adding bulbs makes them dimmer", exact: "adding lamps in series increases total resistance, so the current falls and each lamp is dimmer" },
      { vague: "voltage splits", exact: "in series, the potential difference is shared between the components" },
    ],
    model: {
      prompt: "Two identical lamps are connected in series. A third identical lamp is added in series. Explain what happens to the brightness of the original lamps. (3)",
      marks: 3,
      answer:
        "Adding a lamp in series INCREASES THE TOTAL RESISTANCE of the circuit. For the same supply voltage, the CURRENT DECREASES. Since the lamps carry LESS CURRENT, they are DIMMER.",
      credit: [
        "Total resistance increases",
        "Current decreases",
        "Lamps are dimmer (less current)",
      ],
    },
    drill: {
      prompt: "Two identical lamps are connected in parallel to a battery. One lamp is unscrewed and removed. Explain what happens to the brightness of the remaining lamp. (3)",
      marks: 3,
      model:
        "In PARALLEL, each lamp has the FULL SUPPLY POTENTIAL DIFFERENCE across it, independent of the other. Removing one lamp DOES NOT CHANGE the p.d. across the remaining lamp, so its CURRENT IS UNCHANGED and its BRIGHTNESS STAYS THE SAME.",
    },
    classifierStems: [
      "Explain what happens to the ammeter reading when a resistor is added in parallel.",
      "State why household appliances are wired in parallel.",
    ],
  },
  {
    id: "phys-suggest-improve",
    family: "physics",
    name: "Suggest an improvement / source of error",
    cue: "'Suggest one improvement' or 'give a source of error'.",
    triggers: ["suggest an improvement", "source of error", "how could the experiment be improved", "why is the result inaccurate"],
    tests: "A specific, sensible improvement linked to reducing a named error.",
    marksHint: "Vague answers ('be more careful') score nothing. Name the error and a concrete fix.",
    skeleton: [
      "Name the specific error (parallax, reaction time, heat loss, friction).",
      "State a concrete change that reduces it.",
      "Say how that improves the result (more accurate / more reliable).",
    ],
    keywords: [
      { vague: "be more accurate", exact: "read the scale at eye level to avoid parallax error" },
      { vague: "measure carefully", exact: "time more oscillations (e.g. 20) and divide, to reduce the effect of reaction time" },
      { vague: "do it again", exact: "repeat and average to reduce the effect of random error" },
      { vague: "stop heat escaping", exact: "insulate the container with a lid and lagging to reduce heat loss to the surroundings" },
    ],
    model: {
      prompt: "In a pendulum experiment a student times one swing with a stopwatch. Suggest one improvement and explain why it helps. (2)",
      marks: 2,
      answer:
        "TIME 20 OSCILLATIONS and divide by 20 to find the period. This REDUCES THE EFFECT OF REACTION TIME (a random error), giving a more accurate period.",
      credit: ["Time many oscillations and divide", "Reduces reaction-time / random error"],
    },
    drill: {
      prompt: "A student measures the temperature rise when heating water but the value is lower than expected. Suggest one improvement and explain why it helps. (2)",
      marks: 2,
      model:
        "ADD A LID AND INSULATION (lagging) to the container. This REDUCES HEAT LOSS TO THE SURROUNDINGS, so more of the energy raises the water temperature and the result is more accurate.",
    },
    classifierStems: [
      "Suggest why the measured value of g is slightly too large.",
      "Give one improvement to a Hooke's law spring experiment.",
    ],
  },
  {
    id: "phys-data-conclusion",
    family: "physics",
    name: "Conclude from data / a relationship",
    cue: "'What does the data show about the relationship between...'.",
    triggers: ["what does the data show", "relationship between", "is it directly proportional", "use the results"],
    tests: "Naming the relationship precisely and quoting evidence for it.",
    marksHint: "One mark for the relationship stated correctly, one for evidence from the data.",
    skeleton: [
      "State the relationship in exact terms (directly proportional / inversely proportional / increases with).",
      "Quote data as evidence (e.g. doubling X doubles Y).",
      "Note the condition or limit if there is one.",
    ],
    keywords: [
      { vague: "they go up together", exact: "Y is directly proportional to X (a straight line through the origin)" },
      { vague: "one goes up, one goes down", exact: "Y is inversely proportional to X (as X doubles, Y halves)" },
      { vague: "there's a pattern", exact: "there is a linear relationship, shown by the constant gradient" },
    ],
    model: {
      prompt: "A graph of extension against load for a spring is a straight line through the origin until it curves at high loads. State the relationship and its limit. (2)",
      marks: 2,
      answer:
        "The extension is DIRECTLY PROPORTIONAL to the load (a STRAIGHT LINE THROUGH THE ORIGIN), obeying Hooke's law. This holds UNTIL THE LIMIT OF PROPORTIONALITY, where the line begins to curve.",
      credit: [
        "Extension directly proportional to load (straight line through origin)",
        "Only up to the limit of proportionality",
      ],
    },
    drill: {
      prompt: "For a fixed mass of gas at constant temperature, the results show that when the pressure doubles, the volume halves. State the relationship between pressure and volume, quoting the evidence. (2)",
      marks: 2,
      model:
        "The pressure is INVERSELY PROPORTIONAL to the volume (Boyle's law): the evidence is that WHEN PRESSURE DOUBLES, VOLUME HALVES, so pressure × volume is constant, at constant temperature.",
    },
    classifierStems: [
      "State the relationship shown by a current-voltage straight-line graph.",
      "What does a distance² against time graph tell you about the motion?",
    ],
  },
];

// ── BIOLOGY ───────────────────────────────────────────────────────────────────
const BIOLOGY: Play[] = [
  {
    id: "bio-structure-function",
    family: "biology",
    name: "Explain how a structure suits its function",
    cue: "'Explain how X is adapted for / suited to...'.",
    triggers: ["adapted for", "suited to", "how the structure", "explain how", "relate the structure"],
    tests: "Pairing each named feature with the job it does (a feature alone is not enough).",
    marksHint: "One mark per feature-and-reason PAIR. Naming a feature without its function scores nothing.",
    skeleton: [
      "Name a structural feature.",
      "State the function it performs or how it helps.",
      "Repeat for each mark, keeping feature and reason paired.",
    ],
    keywords: [
      { vague: "it has a big surface", exact: "a large surface area to volume ratio, for faster diffusion / absorption" },
      { vague: "thin walls", exact: "a wall one cell thick, giving a short diffusion distance" },
      { vague: "lots of blood", exact: "a rich (dense) blood supply that maintains a steep concentration gradient" },
      { vague: "moist", exact: "a moist surface so gases dissolve before diffusing across" },
    ],
    model: {
      prompt: "Explain how an alveolus is adapted for efficient gas exchange. (3)",
      marks: 3,
      answer:
        "The alveolus has a LARGE SURFACE AREA for more diffusion, a WALL ONE CELL THICK giving a SHORT DIFFUSION DISTANCE, and a RICH BLOOD SUPPLY that MAINTAINS A STEEP CONCENTRATION GRADIENT. Together these make gas exchange efficient.",
      credit: [
        "Large surface area → more diffusion",
        "Thin wall (one cell thick) → short diffusion distance",
        "Good blood supply → maintains concentration gradient",
      ],
    },
    drill: {
      prompt: "Explain how a root hair cell is adapted for the efficient absorption of water and mineral ions. (3)",
      marks: 3,
      model:
        "The root hair cell has a LONG, NARROW EXTENSION giving a LARGE SURFACE AREA for absorption, a THIN CELL WALL/MEMBRANE for a SHORT DISTANCE, and MANY MITOCHONDRIA that release energy for the ACTIVE TRANSPORT of mineral ions.",
    },
    classifierStems: [
      "Explain how the small intestine is adapted for absorption.",
      "Relate the structure of a red blood cell to its function.",
    ],
  },
  {
    id: "bio-describe-pathway",
    family: "biology",
    name: "Describe a pathway or process in sequence",
    cue: "'Describe the pathway of...' / 'describe how X moves through...'.",
    triggers: ["describe the pathway", "describe how", "trace the route", "in order", "sequence"],
    tests: "The correct ordered stages, using the right named structures.",
    marksHint: "Marks for each correct stage in the right order. Skipping or reordering loses marks.",
    skeleton: [
      "Start at the stated beginning.",
      "List each named structure/stage in the exact order, with what happens at each.",
      "End at the stated destination.",
    ],
    keywords: [
      { vague: "the blood goes round", exact: "blood flows: vena cava → right atrium → right ventricle → pulmonary artery → lungs" },
      { vague: "food gets digested", exact: "in order: mouth → oesophagus → stomach → small intestine (digestion and absorption)" },
      { vague: "air goes in", exact: "air passes: nose/mouth → trachea → bronchi → bronchioles → alveoli" },
    ],
    model: {
      prompt: "Describe the pathway of a molecule of oxygen from the alveolus to a muscle cell. (3)",
      marks: 3,
      answer:
        "Oxygen DIFFUSES from the alveolus into the BLOOD CAPILLARY and binds to HAEMOGLOBIN in a red blood cell. Blood travels to the HEART (pulmonary vein → left atrium → left ventricle) and is pumped through ARTERIES to the muscle. Oxygen then DIFFUSES from the capillary into the MUSCLE CELL.",
      credit: [
        "Diffuses into blood / binds to haemoglobin",
        "Carried via the heart and arteries to the tissue",
        "Diffuses from capillary into the muscle cell",
      ],
    },
    drill: {
      prompt: "Describe the pathway of a molecule of digested glucose from the small intestine to a liver cell. (3)",
      marks: 3,
      model:
        "Glucose is ABSORBED across the small intestine wall (villi) into the BLOOD CAPILLARY. It travels in the HEPATIC PORTAL VEIN directly to the LIVER. It then moves from the blood INTO THE LIVER CELL.",
    },
    classifierStems: [
      "Describe the passage of urine from the kidney to outside the body.",
      "Trace the route of a nerve impulse in a reflex arc.",
    ],
  },
  {
    id: "bio-enzyme-explain",
    family: "biology",
    name: "Explain enzyme action / effect of a factor",
    cue: "'Explain the effect of temperature/pH on enzyme activity.'",
    triggers: ["enzyme", "active site", "denatured", "optimum", "explain the effect of temperature", "explain the effect of pH"],
    tests: "Active site, complementary substrate, and what a factor does to the shape/collision rate.",
    marksHint: "Marks for: active site fits the substrate; increasing then the turning point; denaturing at the extreme.",
    skeleton: [
      "State the enzyme's active site is complementary to the substrate (lock and key).",
      "Describe the rising part (more kinetic energy → more collisions → faster) up to the optimum.",
      "Describe past the optimum: the active site changes shape (denatures) so the substrate no longer fits, and activity falls.",
    ],
    keywords: [
      { vague: "the enzyme dies", exact: "the enzyme is denatured; its active site changes shape" },
      { vague: "it fits like a key", exact: "the substrate is complementary to the active site (lock and key)" },
      { vague: "heat speeds it up", exact: "higher temperature gives more kinetic energy, so more frequent enzyme-substrate collisions" },
      { vague: "best temperature", exact: "the optimum temperature, where the rate of reaction is highest" },
    ],
    model: {
      prompt: "Explain the effect of increasing temperature on the rate of an enzyme-controlled reaction, up to and beyond the optimum. (4)",
      marks: 4,
      answer:
        "As temperature rises towards the optimum, molecules gain KINETIC ENERGY, so there are MORE FREQUENT ENZYME-SUBSTRATE COLLISIONS and the rate INCREASES. At the OPTIMUM the rate is highest. Beyond it, the ENZYME IS DENATURED: the ACTIVE SITE CHANGES SHAPE so the substrate NO LONGER FITS, and the rate falls.",
      credit: [
        "More kinetic energy → more frequent collisions (rate rises)",
        "Optimum temperature = highest rate",
        "Enzyme denatured beyond optimum (active site changes shape)",
        "Substrate no longer fits → rate falls",
      ],
    },
    drill: {
      prompt: "Explain the effect of pH on the activity of an enzyme, referring to its optimum pH. (3)",
      marks: 3,
      model:
        "Each enzyme has an OPTIMUM pH at which its activity is HIGHEST. Away from the optimum, the CHANGE IN pH ALTERS THE SHAPE OF THE ACTIVE SITE (denatures the enzyme), so the SUBSTRATE NO LONGER FITS and the rate of reaction DECREASES.",
    },
    classifierStems: [
      "Explain why enzymes are described as biological catalysts.",
      "Explain the effect of substrate concentration on enzyme activity.",
    ],
  },
  {
    id: "bio-experiment-design",
    family: "biology",
    name: "Design a fair-test experiment",
    cue: "'Describe an experiment / investigation to find out...'.",
    triggers: ["describe an experiment", "plan an investigation", "how would you find out", "fair test", "investigate the effect"],
    tests: "Independent/dependent/controlled variables, a control, measurement, and repeats.",
    marksHint: "Marks for: variable changed, variable measured, variables controlled, a control experiment, and repeats for reliability.",
    skeleton: [
      "State the variable you change (independent) and the one you measure (dependent).",
      "State the variables you keep constant (to make it a fair test).",
      "Include a control where appropriate.",
      "Repeat and average to improve reliability.",
    ],
    keywords: [
      { vague: "change the amount", exact: "vary the independent variable over a suitable range, in equal steps" },
      { vague: "keep it fair", exact: "control all other variables (same temperature, same volume, same time)" },
      { vague: "have a normal one", exact: "set up a control with no enzyme / boiled enzyme for comparison" },
      { vague: "measure it", exact: "measure the dependent variable quantitatively (e.g. volume of gas, colour change time)" },
    ],
    model: {
      prompt: "Describe an experiment to investigate the effect of light intensity on the rate of photosynthesis in pondweed. (4)",
      marks: 4,
      answer:
        "CHANGE the LIGHT INTENSITY by moving a lamp to measured distances. MEASURE the RATE by counting BUBBLES OF OXYGEN PER MINUTE from the pondweed. CONTROL the temperature, the volume of water and the type/amount of pondweed. REPEAT at each distance and take the mean.",
      credit: [
        "Change light intensity (independent variable)",
        "Measure bubbles/oxygen per minute (dependent variable)",
        "Control temperature and other variables (fair test)",
        "Repeat and average for reliability",
      ],
    },
    drill: {
      prompt: "Describe an experiment to investigate the effect of temperature on the activity of the enzyme amylase breaking down starch. (4)",
      marks: 4,
      model:
        "CHANGE the TEMPERATURE using water baths at set values. MIX amylase with starch and MEASURE THE TIME for the starch to be fully broken down (test samples with IODINE until it stays orange-brown). CONTROL the volumes and concentrations of amylase and starch and the pH. REPEAT at each temperature and average.",
    },
    classifierStems: [
      "Plan an investigation into the effect of exercise on pulse rate.",
      "Describe how to test a leaf for the presence of starch.",
    ],
  },
  {
    id: "bio-data-response",
    family: "biology",
    name: "Data response: describe then explain",
    cue: "'Describe the trend and suggest an explanation' from a graph/table.",
    triggers: ["describe the trend", "suggest an explanation", "use the data", "account for the results", "what do the results show"],
    tests: "First DESCRIBE (with figures), then EXPLAIN (the biology). Students often do only one.",
    marksHint: "Describe = quote data and the trend. Explain = the biological reason. Do BOTH, they are separate marks.",
    skeleton: [
      "Describe the overall trend, quoting figures with units from the data.",
      "Note any change of trend (a peak, a plateau) with the value where it happens.",
      "Explain the biological reason for the trend.",
    ],
    keywords: [
      { vague: "it goes up then flattens", exact: "the rate increases up to X, then levels off (plateaus) at Y" },
      { vague: "because of the factor", exact: "because that factor becomes limiting beyond this point" },
      { vague: "the graph shows a rise", exact: "the value rises from A to B as the variable increases" },
    ],
    model: {
      prompt: "A graph shows the rate of photosynthesis rising with light intensity then levelling off. Describe the trend and suggest an explanation for the levelling off. (3)",
      marks: 3,
      answer:
        "As light intensity increases, the RATE OF PHOTOSYNTHESIS INCREASES, then it LEVELS OFF (plateaus). The levelling off happens because LIGHT IS NO LONGER THE LIMITING FACTOR; ANOTHER FACTOR (such as carbon dioxide concentration or temperature) is now LIMITING the rate.",
      credit: [
        "Rate increases with light intensity (describe)",
        "Then levels off / plateaus (describe)",
        "Because another factor is now limiting (explain)",
      ],
    },
    drill: {
      prompt: "A graph shows a person's pulse rate rising during exercise and staying high for some minutes after they stop, before falling. Describe the trend after exercise stops and suggest an explanation. (3)",
      marks: 3,
      model:
        "After exercise stops, the PULSE RATE STAYS HIGH for a few minutes, THEN FALLS gradually back to resting. It stays high because the body must REPAY THE OXYGEN DEBT: extra oxygen is needed to BREAK DOWN THE LACTIC ACID built up during anaerobic respiration.",
    },
    classifierStems: [
      "Describe and explain the change in blood glucose after a meal.",
      "Account for the shape of a population growth curve.",
    ],
  },
  {
    id: "bio-define-term",
    family: "biology",
    name: "Define a key term precisely",
    cue: "'Define...' / 'what is meant by...'.",
    triggers: ["define", "what is meant by", "state what is meant", "give the meaning"],
    tests: "The exact syllabus definition, including all required clauses.",
    marksHint: "These need the complete wording. A partial definition scores partial or nothing.",
    skeleton: [
      "Give the precise definition in the syllabus wording.",
      "Include every required clause (e.g. 'net movement', 'from high to low concentration', 'partially permeable membrane').",
    ],
    keywords: [
      { vague: "things spread out", exact: "diffusion: the net movement of particles from a region of higher to lower concentration, down a concentration gradient" },
      { vague: "water moves in", exact: "osmosis: the net movement of water molecules across a partially permeable membrane, from higher to lower water potential" },
      { vague: "moving against the flow", exact: "active transport: movement of particles against a concentration gradient, using energy from respiration" },
    ],
    model: {
      prompt: "Define osmosis. (3)",
      marks: 3,
      answer:
        "Osmosis is the NET MOVEMENT OF WATER MOLECULES from a region of HIGHER WATER POTENTIAL (dilute solution) to a region of LOWER WATER POTENTIAL (concentrated solution) ACROSS A PARTIALLY PERMEABLE MEMBRANE.",
      credit: [
        "Net movement of water molecules",
        "From higher to lower water potential (dilute to concentrated)",
        "Across a partially permeable membrane",
      ],
    },
    drill: {
      prompt: "Define active transport. (3)",
      marks: 3,
      model:
        "Active transport is the MOVEMENT OF PARTICLES/IONS across a membrane AGAINST A CONCENTRATION GRADIENT (from lower to higher concentration), USING ENERGY released by RESPIRATION.",
    },
    classifierStems: [
      "Define the term 'limiting factor'.",
      "State what is meant by a food chain.",
    ],
  },
  {
    id: "bio-compare",
    family: "biology",
    name: "Compare two things (state both sides)",
    cue: "'Compare X and Y' / 'give differences between...'.",
    triggers: ["compare", "differences between", "distinguish between", "state one difference", "contrast"],
    tests: "Making a COMPARATIVE statement about the SAME feature for both, not a list about one.",
    marksHint: "Each mark needs BOTH sides in one comparison (e.g. 'A has..., whereas B has...'). One-sided points score nothing.",
    skeleton: [
      "Pick a feature.",
      "State it for both, as a linked comparison ('X ..., whereas Y ...').",
      "Repeat for each mark, always comparing the same feature on both sides.",
    ],
    keywords: [
      { vague: "arteries are thick", exact: "arteries have thick, muscular walls, whereas veins have thinner walls" },
      { vague: "one has valves", exact: "veins contain valves, whereas arteries (except at the heart) do not" },
      { vague: "different DNA", exact: "a plant cell has a cell wall, whereas an animal cell does not" },
    ],
    model: {
      prompt: "State two differences between arteries and veins. (2)",
      marks: 2,
      answer:
        "Arteries have THICK, MUSCULAR/ELASTIC WALLS, WHEREAS veins have THINNER WALLS. Arteries carry blood at HIGH PRESSURE and have NO VALVES, WHEREAS veins carry blood at LOW PRESSURE and CONTAIN VALVES.",
      credit: [
        "Wall thickness compared (arteries thick vs veins thin)",
        "Pressure/valves compared (arteries high pressure, no valves vs veins low pressure, valves)",
      ],
    },
    drill: {
      prompt: "State two differences between a typical plant cell and a typical animal cell. (2)",
      marks: 2,
      model:
        "A plant cell has a CELLULOSE CELL WALL, WHEREAS an animal cell has NONE. A plant cell has a LARGE PERMANENT VACUOLE (and chloroplasts), WHEREAS an animal cell has NO LARGE VACUOLE (and no chloroplasts).",
    },
    classifierStems: [
      "Compare aerobic and anaerobic respiration.",
      "Give two differences between the male and female reproductive systems.",
    ],
  },
  {
    id: "bio-explain-mechanism",
    family: "biology",
    name: "Explain a control mechanism (homeostasis)",
    cue: "'Explain how the body responds to / controls...'.",
    triggers: ["explain how the body", "homeostasis", "controls", "responds to", "negative feedback", "regulate"],
    tests: "The receptor → coordinator → effector → response chain, with the correct direction of correction.",
    marksHint: "Marks for: detecting the change, the response that corrects it, and returning to normal (negative feedback).",
    skeleton: [
      "State the change is DETECTED (by a receptor / the brain / an organ).",
      "State the RESPONSE (hormone released / effector acts).",
      "State how this CORRECTS the change and returns the level to normal (negative feedback).",
    ],
    keywords: [
      { vague: "the body cools down", exact: "sweat is produced; its evaporation transfers thermal energy from the skin, cooling the body" },
      { vague: "insulin lowers sugar", exact: "insulin is released, causing the liver to convert glucose to glycogen, lowering blood glucose" },
      { vague: "it goes back to normal", exact: "this returns the level to normal by negative feedback" },
    ],
    model: {
      prompt: "Explain how the body reduces blood glucose concentration when it rises after a meal. (3)",
      marks: 3,
      answer:
        "The rise in blood glucose is DETECTED BY THE PANCREAS, which releases INSULIN. Insulin causes the LIVER (and muscle) to CONVERT GLUCOSE INTO GLYCOGEN for storage, so the BLOOD GLUCOSE FALLS back to normal (negative feedback).",
      credit: [
        "Pancreas detects the rise and releases insulin",
        "Liver converts glucose to glycogen",
        "Blood glucose returns to normal (negative feedback)",
      ],
    },
    drill: {
      prompt: "Explain how the body responds to being too cold, to raise its temperature. (3)",
      marks: 3,
      model:
        "The fall in temperature is DETECTED BY THE SKIN AND BRAIN. In response, SHIVERING occurs (muscles contract, releasing heat by respiration) and BLOOD VESSELS NEAR THE SKIN CONSTRICT (vasoconstriction) to REDUCE HEAT LOSS. This RAISES THE BODY TEMPERATURE back to normal.",
    },
    classifierStems: [
      "Explain how the eye responds to bright light.",
      "Explain how water content of the blood is controlled.",
    ],
  },
  {
    id: "bio-genetics-cross",
    family: "biology",
    name: "Genetics: work a monohybrid cross",
    cue: "'Draw a genetic diagram / show the cross' for inheritance.",
    triggers: ["genetic diagram", "cross", "phenotype", "genotype", "ratio", "probability", "punnett"],
    tests: "Parental genotypes, gametes, offspring, and the ratio, all labelled.",
    marksHint: "Marks for: parent genotypes, gametes (circled), offspring genotypes, and the phenotype ratio.",
    skeleton: [
      "Write the parents' genotypes and their phenotypes.",
      "Write the gametes each parent makes (circle them).",
      "Combine in a Punnett square to get the offspring genotypes.",
      "State the phenotype ratio and probability asked for.",
    ],
    keywords: [
      { vague: "big B little b", exact: "use consistent allele symbols: B = dominant allele, b = recessive allele" },
      { vague: "half and half", exact: "a ratio of offspring phenotypes, e.g. 3 dominant : 1 recessive" },
      { vague: "the parents' genes", exact: "the parental genotypes, e.g. Bb × Bb" },
    ],
    model: {
      prompt: "Both parents are heterozygous for a condition where the allele B (brown) is dominant to b (blue). Draw the cross and give the ratio of offspring phenotypes. (3)",
      marks: 3,
      answer:
        "PARENTS: Bb × Bb. GAMETES: (B) (b) from each. OFFSPRING (Punnett): BB, Bb, Bb, bb. PHENOTYPE RATIO = 3 BROWN : 1 BLUE.",
      credit: [
        "Parental genotypes Bb × Bb",
        "Correct gametes and combination (BB, Bb, Bb, bb)",
        "Ratio 3 brown : 1 blue",
      ],
    },
    drill: {
      prompt: "A homozygous tall pea plant (TT) is crossed with a homozygous short pea plant (tt); tall is dominant. Draw the cross for the F1 generation and give the ratio of phenotypes. (3)",
      marks: 3,
      model:
        "PARENTS: TT × tt. GAMETES: (T) from one parent, (t) from the other. OFFSPRING: all Tt. PHENOTYPE RATIO = ALL TALL (100% tall in the F1).",
    },
    classifierStems: [
      "Work out the chance of a child being a carrier for a recessive condition.",
      "Draw a genetic diagram for a test cross.",
    ],
  },
];

export const PLAYBOOKS: Record<Family, Play[]> = {
  chemistry: CHEMISTRY,
  physics: PHYSICS,
  biology: BIOLOGY,
};

export const FAMILY_META: Record<Family, { label: string; emoji: string; blurb: string }> = {
  chemistry: {
    label: "Chemistry",
    emoji: "🧪",
    blurb: "Bonding, moles, tests, rates and equations, phrased the way the mark scheme wants.",
  },
  physics: {
    label: "Physics",
    emoji: "⚡",
    blurb: "Calculations, forces, energy and experiments, structured so no method marks leak.",
  },
  biology: {
    label: "Biology",
    emoji: "🧬",
    blurb: "Structure and function, processes and data response, with the examiner's exact terms.",
  },
};

// Which owned subject maps to which FastTrack family. A subject's catalogue
// `family` already collapses Pure + Science + N(A) rows, so they share one
// playbook. Only chemistry/physics/biology have FastTrack for now.
export function familyForSubject(family?: string): Family | null {
  if (family === "chemistry" || family === "physics" || family === "biology") return family;
  return null;
}

export function playById(id: string): Play | undefined {
  return [...CHEMISTRY, ...PHYSICS, ...BIOLOGY].find((p) => p.id === id);
}

export function playsForFamily(f: Family): Play[] {
  return PLAYBOOKS[f];
}

// The four leaks, shown as the "why marks slip" framing everywhere.
export const LEAKS = [
  { id: "keywords", label: "Missing keywords", fix: "Use the exact examiner words" },
  { id: "vague", label: "Vague phrasing", fix: "Say precisely what earns the mark" },
  { id: "format", label: "Wrong format", fix: "Answer in the shape examiners recognise" },
  { id: "logic", label: "Incomplete logic", fix: "Every step, in order, nothing skipped" },
] as const;
