import type { LessonStep } from "@/lib/lesson-steps";

// Project Playground round 1: 18 interactive lessons authored by Coddy, validated.
// Wired into Practical Lab (sciences) and Life Skills (life) by their host files.

export interface PlaygroundLesson {
  key: string;
  title: string;
  minutes: number;
  steps: LessonStep[];
  talkPrompt?: string;
}

export const PLAYGROUND_SCIENCE: Record<"chemistry" | "physics" | "biology", PlaygroundLesson[]> = {
  chemistry: [
    {
      key: "chem-gas-1",
      title: "Testing for gases",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Every gas has a signature",
          body: "In the lab you often make a gas and then need to prove what it is. Each common gas gives one clear result with a simple test: a sound, a glow, or a colour change. Learn the pairs and you can name a gas in seconds.",
        },
        {
          kind: "match",
          prompt: "Match each gas to the result it gives.",
          pairs: [
            { left: "Hydrogen", right: "Lighted splint gives a squeaky pop" },
            { left: "Oxygen", right: "Glowing splint relights" },
            { left: "Carbon dioxide", right: "Limewater turns milky" },
            { left: "Ammonia", right: "Damp red litmus turns blue" },
          ],
          ask: "Time to sort the gas tests. Drag each gas to the result it gives. Start with the one you feel surest about.",
          hints: [
            "Two of these use a splint. One makes a pop, the other relights a glow.",
            "Carbon dioxide turns limewater cloudy. Ammonia is the alkaline gas, so it turns red litmus blue.",
            "Hydrogen pops, oxygen relights a glowing splint, carbon dioxide turns limewater milky, ammonia turns damp red litmus blue.",
          ],
          explain: "Hydrogen gives a squeaky pop with a lighted splint. Oxygen relights a glowing splint. Carbon dioxide turns limewater milky. Ammonia is alkaline, so it turns damp red litmus blue.",
        },
        {
          kind: "choice",
          question: "You collect a colourless gas. A glowing splint held in it bursts back into flame. Which gas is it?",
          options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"],
          correct: 1,
          ask: "Here is a real observation. A glowing splint relights. Which gas does that point to?",
          hints: [
            "A pop would mean hydrogen. This one relights a glow instead.",
            "Only one gas feeds a flame strongly enough to relight it.",
          ],
          explain: "It is oxygen. Oxygen relights a glowing splint because it supports combustion. Hydrogen would give a pop, not a relight.",
        },
        {
          kind: "insight",
          body: "Pop is hydrogen, relight is oxygen, milky limewater is carbon dioxide. Three results, three gases, no guessing.",
        },
      ],
      talkPrompt: "Quiz me on the gas tests, one at a time.",
    },
    {
      key: "chem-mole-1",
      title: "Moles: n = m over M",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Counting particles by weighing",
          body: "A mole is a counting unit for particles, like a dozen but far bigger. You cannot count atoms one by one, so instead you weigh. To find the number of moles, divide the mass you have by the molar mass. In symbols, n = m over M.",
        },
        {
          kind: "tiles",
          prompt: "Build the formula for the number of moles.",
          tiles: ["n", "=", "m", "M", "÷", "×"],
          answer: ["n", "=", "m", "÷", "M"],
          ask: "Let us build the mole formula. Number of moles equals mass divided by molar mass. Place the tiles in order.",
          hints: [
            "Start with n equals.",
            "Mass goes on top, so mass comes before the divide sign.",
            "The order is n, equals, m, divide, M.",
          ],
          explain: "The formula is n equals m divided by M. Number of moles equals the mass in grams divided by the molar mass.",
        },
        {
          kind: "slider",
          prompt: "How many moles are in 8 g of NaOH? (M = 40)",
          min: 0,
          max: 1,
          step: 0.01,
          unit: " mol",
          start: 0.61,
          targetMin: 0.19,
          targetMax: 0.21,
          ask: "Try the numbers. Eight grams of sodium hydroxide, molar mass forty. Slide to the number of moles.",
          hints: [
            "Use n equals mass divided by molar mass.",
            "That is eight divided by forty.",
            "Eight divided by forty is zero point two moles.",
          ],
          explain: "Eight grams divided by a molar mass of forty gives zero point two moles.",
        },
        {
          kind: "insight",
          body: "Grams tell you how heavy. Moles tell you how many. Divide by the molar mass to swap from one to the other.",
        },
      ],
      talkPrompt: "Quiz me on mole calculations, one at a time.",
    },
    {
      key: "chem-rate-1",
      title: "Reading rate graphs",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "The shape tells the story",
          body: "When a reaction makes a gas, we can plot the volume made against time. A steep line means gas is being made quickly, so the rate is high. As reactant runs out the line gets less steep, and when the line goes flat the reaction has stopped.",
        },
        {
          kind: "plot",
          prompt: "Gas volume rises then levels off at 60 cm^3, reached at 40 s. Plot the point where the reaction has finished.",
          xLabel: "t / s",
          yLabel: "V / cm^3",
          xMax: 60,
          yMax: 80,
          targetX: 40,
          targetY: 60,
          ask: "Look for where the curve stops climbing. Plot the point where the reaction has just finished.",
          hints: [
            "The reaction is done when the volume stops rising.",
            "That happens at forty seconds, at a volume of sixty.",
            "Plot the point at forty seconds and sixty cubic centimetres.",
          ],
          explain: "The reaction finishes where the graph goes flat, at forty seconds and sixty cubic centimetres. After that, no more gas is made.",
        },
        {
          kind: "choice",
          question: "Curve A is steeper at the start than curve B. What does the steeper start tell you?",
          options: [
            "Curve A has a faster rate at the start",
            "Curve A makes more product in total",
            "Curve A uses less reactant overall",
            "Curve A must be at a lower temperature",
          ],
          correct: 0,
          ask: "Two reactions are drawn. Curve A starts steeper than curve B. What does a steeper start mean?",
          hints: [
            "Steepness on a rate graph is about speed, not the final amount.",
            "A steeper line means more product is made in the same time.",
          ],
          explain: "A steeper start means a faster rate at the start. Steepness shows speed. It does not tell you the total product, which is set by where the curves level off.",
        },
        {
          kind: "insight",
          body: "Steeper means faster. Flat means finished. The gradient of a rate graph is the rate itself.",
        },
      ],
      talkPrompt: "Quiz me on reading rate graphs, one at a time.",
    },
    {
      key: "chem-electro-1",
      title: "Electrolysis basics",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Splitting with electricity",
          body: "Electrolysis uses electricity to break down a compound that is molten or dissolved. The ions become free to move. Positive ions, called cations, travel to the negative cathode. Negative ions, called anions, travel to the positive anode.",
        },
        {
          kind: "match",
          prompt: "Match each term to what it means.",
          pairs: [
            { left: "Cathode", right: "Negative electrode, attracts positive ions" },
            { left: "Anode", right: "Positive electrode, attracts negative ions" },
            { left: "Cation", right: "Positive ion, moves to the cathode" },
            { left: "Anion", right: "Negative ion, moves to the anode" },
          ],
          ask: "Sort the electrolysis words. Match each term to its meaning. Opposite charges attract, so let that guide you.",
          hints: [
            "The cathode is the negative electrode. Opposite charges attract.",
            "Cations are positive, so they go to the negative cathode. Anions are negative, so they go to the positive anode.",
            "Cathode is negative, anode is positive, cations are positive ions, anions are negative ions.",
          ],
          explain: "The cathode is negative and attracts positive cations. The anode is positive and attracts negative anions. Opposite charges attract.",
        },
        {
          kind: "order",
          prompt: "Put the stages of electrolysis in order.",
          items: [
            "The compound is melted or dissolved so ions can move",
            "Positive ions travel to the cathode",
            "At the cathode the positive ions gain electrons",
            "A product forms and collects at the electrode",
          ],
          ask: "This is an electrolysis sequence. What has to happen first before any ion can move? Put the stages in order.",
          hints: [
            "Ions can only move when the compound is molten or dissolved.",
            "After the ions move, they reach the electrode and gain or lose electrons.",
            "Free the ions, move them to the electrode, they gain electrons, then a product forms.",
          ],
          explain: "First the compound is melted or dissolved so ions can move. Positive ions travel to the cathode, gain electrons there, and a product forms at the electrode.",
        },
        {
          kind: "insight",
          body: "Cations to the cathode, anions to the anode. Electrolysis is just charged ions moving to the opposite electrode.",
        },
      ],
      talkPrompt: "Quiz me on electrolysis terms, one at a time.",
    },
    {
      key: "chem-acidbase-1",
      title: "Preparing a soluble salt",
      minutes: 6,
      steps: [
        {
          kind: "concept",
          heading: "Acid plus insoluble base",
          body: "To make a soluble salt such as copper sulfate, you react an acid with an insoluble base like copper oxide. You add the base until no more will dissolve, remove what is left, then crystallise the salt from the solution.",
        },
        {
          kind: "order",
          prompt: "Put the steps to make a soluble salt in order.",
          items: [
            "Add excess insoluble base to warm acid",
            "Stir until no more base dissolves",
            "Filter off the leftover base",
            "Evaporate the filtrate to the point of crystallisation",
            "Leave to crystallise, then dry the crystals",
          ],
          ask: "This is a salt preparation. Think about why you add the base first. Put the five steps in order.",
          hints: [
            "You need the acid to react fully before you remove anything.",
            "Filter only after the base has reacted, then work on the liquid that passes through.",
            "Add excess base, stir, filter, evaporate, then crystallise and dry.",
          ],
          explain: "Add excess base to warm acid, stir until no more dissolves, filter off the leftover base, evaporate the filtrate to the crystallisation point, then leave it to crystallise and dry the crystals.",
        },
        {
          kind: "choice",
          question: "Why is excess insoluble base added to the acid?",
          options: [
            "To make sure all the acid is used up",
            "To speed up crystallisation",
            "To make the salt more soluble",
            "To colour the final solution",
          ],
          correct: 0,
          ask: "Here is the reasoning check. Why add more base than seems needed? Pick the best reason.",
          hints: [
            "Think about what you do not want left in the final solution.",
            "Any leftover acid would spoil the pure salt, so you make sure it all reacts.",
          ],
          explain: "Excess base is added so that all the acid reacts. The leftover base is insoluble, so you can simply filter it off, leaving a pure salt solution.",
        },
        {
          kind: "insight",
          body: "Excess base, then filter, then crystallise. The base you cannot use is easy to remove, so add plenty.",
        },
      ],
      talkPrompt: "Quiz me on preparing soluble salts, one at a time.",
    },
    {
      key: "chem-bonding-1",
      title: "Ionic or covalent",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Transfer or share",
          body: "Atoms bond to get a full outer shell. In ionic bonding a metal gives electrons to a non-metal, forming charged ions that attract. In covalent bonding two non-metals share electrons instead. So the type of bond depends on which atoms meet.",
        },
        {
          kind: "match",
          prompt: "Match each substance to its bonding.",
          pairs: [
            { left: "Sodium chloride NaCl", right: "Ionic, electrons transferred" },
            { left: "Water H_2O", right: "Covalent, electrons shared" },
            { left: "Magnesium oxide MgO", right: "Ionic, metal and non-metal" },
            { left: "Methane CH_4", right: "Covalent, non-metals only" },
          ],
          ask: "Sort these four substances. Ask yourself for each one, is it a metal with a non-metal, or non-metals together? Then match.",
          hints: [
            "Metal plus non-metal is ionic. Non-metal plus non-metal is covalent.",
            "Sodium and magnesium are metals. Water and methane are made of non-metals only.",
            "Sodium chloride and magnesium oxide are ionic. Water and methane are covalent.",
          ],
          explain: "Sodium chloride and magnesium oxide are ionic because a metal transfers electrons to a non-metal. Water and methane are covalent because non-metals share electrons.",
        },
        {
          kind: "tiles",
          prompt: "Build the rule for ionic bonding.",
          tiles: ["metal", "non-metal", "+", "=", "ionic", "covalent"],
          answer: ["metal", "+", "non-metal", "=", "ionic"],
          ask: "Let us build the ionic rule in tiles. A metal plus a non-metal gives which bond? Lay it out.",
          hints: [
            "Start with the two kinds of atom that bond ionically.",
            "A metal joined with a non-metal gives an ionic bond.",
            "The order is metal, plus, non-metal, equals, ionic.",
          ],
          explain: "The rule is metal plus non-metal equals ionic. Two non-metals together would give covalent instead.",
        },
        {
          kind: "insight",
          body: "Metal with non-metal transfers electrons and is ionic. Non-metals together share electrons and are covalent.",
        },
      ],
      talkPrompt: "Quiz me on ionic versus covalent bonding, one at a time.",
    },
  ],
  physics: [
    {
      key: "phys-forces-1",
      title: "Resultant force and F = m a",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "One force that stands for all",
          body: "When several forces act on an object, you add them with their directions to get a single resultant force. If the resultant is not zero, the object accelerates. The link between them is force equals mass times acceleration, written F = m times a.",
        },
        {
          kind: "tiles",
          prompt: "Build Newton's second law.",
          tiles: ["F", "=", "m", "a", "×", "÷"],
          answer: ["F", "=", "m", "×", "a"],
          ask: "Let us build the second law. Force equals mass times acceleration. Place the tiles in order.",
          hints: [
            "Start with force equals.",
            "Mass and acceleration are multiplied, not divided.",
            "The order is F, equals, m, times, a.",
          ],
          explain: "The law is F equals m times a. Force equals mass multiplied by acceleration.",
        },
        {
          kind: "plot",
          prompt: "A 2 kg mass feels a resultant force of 6 N. Plot the point (force, acceleration).",
          xLabel: "F / N",
          yLabel: "a / m s^{-2}",
          xMax: 10,
          yMax: 6,
          targetX: 6,
          targetY: 3,
          ask: "Work out the acceleration first, then plot the point. Force is six newtons, mass is two kilograms.",
          hints: [
            "Rearrange the law: acceleration equals force divided by mass.",
            "That is six divided by two.",
            "Six divided by two is three, so plot six newtons and three metres per second squared.",
          ],
          explain: "Acceleration is force divided by mass, which is six divided by two, giving three metres per second squared. So the point is six newtons and three.",
        },
        {
          kind: "insight",
          body: "Add forces to find the resultant, then F equals m times a turns that force into acceleration.",
        },
      ],
      talkPrompt: "Quiz me on resultant force and F equals m a, one at a time.",
    },
    {
      key: "phys-moments-1",
      title: "Balancing moments",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Turning effect of a force",
          body: "A moment is the turning effect of a force. It equals the force times the distance from the pivot. A seesaw balances when the clockwise moment equals the anticlockwise moment. A bigger distance makes a smaller force able to balance a larger one.",
        },
        {
          kind: "slider",
          prompt: "On a seesaw, 20 N sits 2 m left of the pivot. A 40 N child sits on the right. At what distance does it balance?",
          min: 0,
          max: 4,
          step: 0.1,
          unit: " m",
          start: 3.1,
          targetMin: 0.9,
          targetMax: 1.1,
          ask: "Balance the seesaw. The left side gives twenty newtons times two metres. Slide the forty newton child until the moments match.",
          hints: [
            "First find the left moment: twenty times two.",
            "The right side must also give forty newton metres, and the force is forty newtons.",
            "Forty newton metres divided by forty newtons is one metre.",
          ],
          explain: "The left moment is twenty newtons times two metres, which is forty newton metres. The child must give the same, so forty newton metres divided by forty newtons is one metre.",
        },
        {
          kind: "choice",
          question: "A beam balances on a pivot. Which statement must be true?",
          options: [
            "The clockwise and anticlockwise moments are equal",
            "The two forces are always equal",
            "The two distances are always equal",
            "There are no forces acting at all",
          ],
          correct: 0,
          ask: "Here is the principle check. When a beam balances, what is always true about its moments? Pick one.",
          hints: [
            "Balance is about turning effects, not the forces on their own.",
            "The forces can differ if the distances differ. It is the moments that match.",
          ],
          explain: "When balanced, the clockwise moment equals the anticlockwise moment. The forces and distances can each differ, as long as force times distance is equal on both sides.",
        },
        {
          kind: "insight",
          body: "Moment equals force times distance. Balance means clockwise moments equal anticlockwise moments.",
        },
      ],
      talkPrompt: "Quiz me on moments and balancing, one at a time.",
    },
    {
      key: "phys-energy-1",
      title: "Energy transfers",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Energy changes form",
          body: "Energy is never made or destroyed, it only moves and changes store. A device is really an energy converter: it takes energy in one store and passes it on as another. Naming the start store and the end store is the whole skill.",
        },
        {
          kind: "match",
          prompt: "Match each device to its main energy transfer.",
          pairs: [
            { left: "Electric kettle", right: "Electrical to thermal" },
            { left: "Falling ball", right: "Gravitational to kinetic" },
            { left: "Torch", right: "Chemical to light" },
            { left: "Stretched catapult", right: "Elastic to kinetic" },
          ],
          ask: "Match each object to the energy change it causes. For each one, ask what store it starts with and what it ends as.",
          hints: [
            "A kettle plugs in and gets hot, so it starts electrical and ends thermal.",
            "A falling ball loses height and speeds up, so gravitational becomes kinetic.",
            "The torch uses a battery, and the catapult uses stretch.",
          ],
          explain: "A kettle turns electrical energy into thermal. A falling ball turns gravitational into kinetic. A torch turns chemical into light. A stretched catapult turns elastic into kinetic.",
        },
        {
          kind: "order",
          prompt: "Put the energy chain of a coal power station in order.",
          items: [
            "Chemical energy is stored in the coal",
            "Burning heats water into steam, giving thermal energy",
            "The steam turns a turbine, giving kinetic energy",
            "The generator produces electrical energy",
          ],
          ask: "This is an energy chain. What store does the coal hold before anything burns? Put the four stages in order.",
          hints: [
            "It begins with the fuel before it is burned.",
            "Burning comes next and makes heat, then movement, then electricity.",
            "Chemical, then thermal, then kinetic, then electrical.",
          ],
          explain: "Coal holds chemical energy. Burning gives thermal energy in steam, the steam turns a turbine for kinetic energy, and the generator gives electrical energy.",
        },
        {
          kind: "insight",
          body: "Every device just moves energy from one store to another. Name the start and the end and you have it.",
        },
      ],
      talkPrompt: "Quiz me on energy transfers, one at a time.",
    },
    {
      key: "phys-waves-1",
      title: "Wave speed v = f λ",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Speed from frequency and wavelength",
          body: "A wave carries energy without moving matter along with it. Its speed depends on how many waves pass each second, the frequency, and how long each wave is, the wavelength. Multiply them and you get the wave speed: v = f times lambda.",
        },
        {
          kind: "tiles",
          prompt: "Build the wave speed equation.",
          tiles: ["v", "=", "f", "λ", "×", "÷"],
          answer: ["v", "=", "f", "×", "λ"],
          ask: "Let us build the wave equation. Speed equals frequency times wavelength. Place the tiles in order.",
          hints: [
            "Start with speed equals.",
            "Frequency and wavelength are multiplied.",
            "The order is v, equals, f, times, lambda.",
          ],
          explain: "The equation is v equals f times lambda. Wave speed equals frequency multiplied by wavelength.",
        },
        {
          kind: "slider",
          prompt: "A wave has frequency 5 Hz and wavelength 4 m. Slide to its speed.",
          min: 0,
          max: 40,
          step: 0.5,
          unit: " m/s",
          start: 31,
          targetMin: 19.5,
          targetMax: 20.5,
          ask: "Use the equation. Frequency five hertz, wavelength four metres. Slide to the wave speed.",
          hints: [
            "Speed equals frequency times wavelength.",
            "That is five times four.",
            "Five times four is twenty metres per second.",
          ],
          explain: "Speed is frequency times wavelength, which is five times four, giving twenty metres per second.",
        },
        {
          kind: "insight",
          body: "More waves per second or longer waves both mean a faster wave. Speed equals frequency times wavelength.",
        },
      ],
      talkPrompt: "Quiz me on the wave speed equation, one at a time.",
    },
    {
      key: "phys-circuit-2",
      title: "Series and parallel circuits",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "One path or many",
          body: "In a series circuit there is a single loop, so the current has only one path and must pass through every part. In a parallel circuit the current splits into separate branches. This difference decides what happens when one part is switched off or removed.",
        },
        {
          kind: "circuit",
          prompt: "This is a series circuit with two switches. Close the switches needed to light the lamp.",
          switches: [
            { id: "s1", label: "Switch A" },
            { id: "s2", label: "Switch B" },
          ],
          needed: ["s1", "s2"],
          ask: "In a series circuit the current has only one path. Think about which switches must be closed, then close them to light the lamp.",
          hints: [
            "In series, current must pass through everything in the loop.",
            "If even one switch is open, the loop is broken and no current flows.",
            "Close both Switch A and Switch B to complete the single loop.",
          ],
          explain: "Both switches must be closed. In a series circuit there is one path, so an open switch anywhere breaks the whole loop and the lamp stays off.",
        },
        {
          kind: "choice",
          question: "In a series circuit of two lamps, one lamp is removed. What happens to the other lamp?",
          options: [
            "It goes out because the loop is broken",
            "It stays exactly the same",
            "It gets brighter",
            "It keeps glowing on its own branch",
          ],
          correct: 0,
          ask: "Picture two lamps in series. One is taken out. What happens to the other? Pick the result.",
          hints: [
            "In series there is only one path for the current.",
            "Remove any part of a single loop and the current stops everywhere.",
          ],
          explain: "The other lamp goes out. In series there is one path, so removing one lamp breaks the loop and stops the current for both.",
        },
        {
          kind: "insight",
          body: "Series is one loop, so one break stops everything. Parallel has branches that can work on their own.",
        },
      ],
      talkPrompt: "Quiz me on series and parallel circuits, one at a time.",
    },
  ],
  biology: [
    {
      key: "bio-cell-1",
      title: "Cell organelles",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Tiny parts with clear jobs",
          body: "A cell is like a small factory, and each organelle has one main job. The nucleus is the control centre, the mitochondria release energy, and in plants the chloroplasts capture light. Knowing the job of each part makes the whole cell make sense.",
        },
        {
          kind: "match",
          prompt: "Match each organelle to its function.",
          pairs: [
            { left: "Nucleus", right: "Controls the cell and holds DNA" },
            { left: "Mitochondrion", right: "Releases energy in respiration" },
            { left: "Chloroplast", right: "Absorbs light for photosynthesis" },
            { left: "Cell wall", right: "Gives a plant cell support" },
          ],
          ask: "Match each cell part to its job. Start with the nucleus, the part you know best.",
          hints: [
            "The nucleus holds the DNA and runs the cell.",
            "Mitochondria are where respiration releases energy. Chloroplasts trap light.",
            "The cell wall is the tough outer layer that supports a plant cell.",
          ],
          explain: "The nucleus controls the cell and holds DNA. Mitochondria release energy in respiration. Chloroplasts absorb light for photosynthesis. The cell wall supports a plant cell.",
        },
        {
          kind: "choice",
          question: "Which structure is found in a plant cell but not an animal cell?",
          options: ["Chloroplast", "Nucleus", "Cell membrane", "Mitochondrion"],
          correct: 0,
          ask: "Here is a compare question. Which of these belongs to plant cells only? Pick one.",
          hints: [
            "Animal and plant cells both have a nucleus, membrane and mitochondria.",
            "Only plants make food from light, so only they have the light-trapping part.",
          ],
          explain: "Chloroplasts are found in plant cells but not animal cells, because only plants photosynthesise. The nucleus, membrane and mitochondria are in both.",
        },
        {
          kind: "insight",
          body: "Nucleus controls, mitochondria power, chloroplasts feed the plant. One part, one job.",
        },
      ],
      talkPrompt: "Quiz me on cell organelles, one at a time.",
    },
    {
      key: "bio-enzyme-1",
      title: "Enzymes and temperature",
      minutes: 6,
      steps: [
        {
          kind: "concept",
          heading: "Fast, then too hot",
          body: "Enzymes are biological catalysts that speed up reactions in living things. As temperature rises, they work faster, up to an optimum. Past that point the enzyme loses its shape, called denaturing, and stops working. In humans the optimum is around 37 degrees celsius.",
        },
        {
          kind: "plot",
          prompt: "Enzyme activity rises to a peak near 37 celsius, then falls. Plot the point of maximum activity.",
          xLabel: "temp / C",
          yLabel: "rate",
          xMax: 60,
          yMax: 10,
          targetX: 37,
          targetY: 8,
          ask: "Find the top of the curve. Plot the point where enzyme activity is at its highest.",
          hints: [
            "Activity climbs, peaks, then drops as the enzyme denatures.",
            "For a human enzyme the peak is near body temperature.",
            "Plot the peak at about thirty seven degrees, near the top of the rate scale.",
          ],
          explain: "The peak is near thirty seven degrees celsius, at the highest rate. Below it the enzyme is slow, above it the enzyme denatures and the rate falls.",
        },
        {
          kind: "order",
          prompt: "Put in order what happens as temperature rises past the optimum.",
          items: [
            "Activity reaches its peak at the optimum temperature",
            "The enzyme molecules gain too much energy",
            "The active site changes shape and denatures",
            "The substrate no longer fits and activity falls",
          ],
          ask: "Think about heating an enzyme too far. What is the first thing that happens, and what is the result? Put the stages in order.",
          hints: [
            "It starts at the best temperature, the peak.",
            "Too much heat shakes the enzyme apart before activity drops.",
            "Peak, then too much energy, then the active site denatures, then activity falls.",
          ],
          explain: "Activity peaks at the optimum. Extra heat gives the molecules too much energy, the active site changes shape and denatures, so the substrate no longer fits and activity falls.",
        },
        {
          kind: "insight",
          body: "Warmer means faster, but only up to the optimum. Past it the active site denatures and cannot be undone.",
        },
      ],
      talkPrompt: "Quiz me on enzymes and temperature, one at a time.",
    },
    {
      key: "bio-transport-1",
      title: "Diffusion and osmosis",
      minutes: 6,
      steps: [
        {
          kind: "concept",
          heading: "Moving down a gradient",
          body: "Substances often move from where they are crowded to where they are sparse, from high to low concentration. When any particles do this it is diffusion. When it is water moving across a partially permeable membrane, we give it a special name: osmosis.",
        },
        {
          kind: "match",
          prompt: "Match each term to its meaning.",
          pairs: [
            { left: "Diffusion", right: "Particles spread from high to low concentration" },
            { left: "Osmosis", right: "Water crosses a partially permeable membrane" },
            { left: "Active transport", right: "Movement against the gradient using energy" },
            { left: "Partially permeable", right: "Lets some molecules through but not others" },
          ],
          ask: "Sort the transport words. Match each term to its meaning. Osmosis is the water one, so anchor on that.",
          hints: [
            "Diffusion is any particles spreading out. Osmosis is specifically water.",
            "Active transport needs energy because it goes the hard way, against the gradient.",
            "Partially permeable means only some molecules can pass.",
          ],
          explain: "Diffusion is particles spreading from high to low concentration. Osmosis is water crossing a partially permeable membrane. Active transport moves against the gradient using energy. Partially permeable lets some molecules through but not others.",
        },
        {
          kind: "slider",
          prompt: "A visking tube of strong sugar solution sits in water. By osmosis its mass rises by 20 percent. If it started at 10 g, slide to its new mass.",
          min: 8,
          max: 16,
          step: 0.5,
          unit: " g",
          start: 14.5,
          targetMin: 11.5,
          targetMax: 12.5,
          ask: "Water enters the sugar solution by osmosis, so the mass goes up. It started at ten grams and rose by twenty percent. Slide to the new mass.",
          hints: [
            "Twenty percent of ten grams is the gain to add on.",
            "Twenty percent of ten is two grams.",
            "Ten grams plus two grams is twelve grams.",
          ],
          explain: "Water moves in by osmosis. Twenty percent of ten grams is two grams gained, so the new mass is twelve grams.",
        },
        {
          kind: "insight",
          body: "Diffusion is any particles spreading out. Osmosis is water only, across a partially permeable membrane.",
        },
      ],
      talkPrompt: "Quiz me on diffusion and osmosis, one at a time.",
    },
    {
      key: "bio-genetics-1",
      title: "Monohybrid inheritance",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Dominant hides recessive",
          body: "You carry two copies of each gene, called alleles, one from each parent. A dominant allele, written as a capital letter, shows even if only one copy is present. A recessive allele, written lower case, shows only when both copies are recessive. This is how a monohybrid cross works.",
        },
        {
          kind: "choice",
          question: "T is dominant for tall, t is recessive for short. A plant is Tt. What does it look like?",
          options: ["Tall", "Short", "Halfway in height", "Impossible to tell"],
          correct: 0,
          ask: "A plant has the alleles capital T and small t. One is dominant. What is its appearance? Pick one.",
          hints: [
            "The capital letter is dominant and shows even with one copy.",
            "One dominant allele is enough for the tall feature to appear.",
          ],
          explain: "It looks tall. Capital T is dominant, so a single copy is enough to show the tall feature, even though the short allele is still carried.",
        },
        {
          kind: "tiles",
          prompt: "Two Tt parents are crossed. Build the ratio of tall to short offspring.",
          tiles: ["3", "1", ":", "4"],
          answer: ["3", ":", "1"],
          ask: "Cross two Tt parents and count the tall and short offspring. Build the ratio in tiles.",
          hints: [
            "A cross of Tt with Tt gives TT, Tt, Tt and tt.",
            "Three of the four are tall, and one is short.",
            "The ratio of tall to short is three to one.",
          ],
          explain: "A Tt by Tt cross gives TT, Tt, Tt and tt. Three carry a dominant T and are tall, one is tt and short, so the ratio is three to one.",
        },
        {
          kind: "insight",
          body: "One dominant allele is enough to show. A cross of two carriers gives the classic three to one ratio.",
        },
      ],
      talkPrompt: "Quiz me on monohybrid inheritance, one at a time.",
    },
  ],
};

export const PLAYGROUND_LIFE: Record<string, PlaygroundLesson[]> = {
  money: [
    {
      key: "life-money-2",
      title: "Needs versus wants",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Two kinds of spending",
          body: "A need is something you truly rely on, like transport to school or a proper meal. A want is nice to have but not essential, like the newest sneakers or an in-game item. Telling them apart is the first move in handling money well. This is general life skill, not investment advice.",
        },
        {
          kind: "match",
          prompt: "Match each item to what it really is.",
          pairs: [
            { left: "Bus fare to school", right: "Need, you rely on it" },
            { left: "Latest sneakers", right: "Want, nice but not essential" },
            { left: "A proper lunch", right: "Need, keeps you going" },
            { left: "In-game skins", right: "Want, pure extra" },
          ],
          ask: "Sort these into needs and wants. Ask for each one, would I struggle without it? Then match.",
          hints: [
            "If life genuinely gets harder without it, it is a need.",
            "Getting to school and eating are needs. Style items and game extras are wants.",
            "Bus fare and lunch are needs. Sneakers and skins are wants.",
          ],
          explain: "Bus fare and a proper lunch are needs, because you rely on them day to day. The latest sneakers and in-game skins are wants, pleasant but not essential.",
        },
        {
          kind: "order",
          prompt: "Put the steps for handling pocket money in a sensible order.",
          items: [
            "Cover your needs first",
            "Set aside a little as savings",
            "Then spend on wants",
            "Check what is left before the next top up",
          ],
          ask: "You just got your pocket money. What should come first, and what can wait? Put the steps in order.",
          hints: [
            "The things you rely on come before the things you simply fancy.",
            "Save a little before you reach the fun spending.",
            "Needs first, then savings, then wants, then check what is left.",
          ],
          explain: "Cover needs first, set aside a little as savings, then spend on wants, and check what is left before your next top up. Needs and savings come before wants.",
        },
        {
          kind: "insight",
          body: "Needs first, savings next, wants last. That order keeps your money working for you.",
        },
      ],
      talkPrompt: "Quiz me on needs versus wants, one at a time.",
    },
  ],
  calm: [
    {
      key: "life-calm-2",
      title: "Steadying exam nerves",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Nerves are normal",
          body: "Feeling nervous before a paper is completely normal, and a little of it can even sharpen your focus. The aim is not to remove nerves but to steady them, so they help you instead of taking over. A few simple habits can bring your body and mind back to calm.",
        },
        {
          kind: "order",
          prompt: "Put this calming routine in order.",
          items: [
            "Notice the nervous feeling without fighting it",
            "Breathe in slowly for a count of four",
            "Breathe out slowly for a count of six",
            "Bring your focus back to the first question",
          ],
          ask: "Here is a routine to settle nerves. What comes first, noticing or breathing? Put the four steps in order.",
          hints: [
            "You settle a feeling by noticing it first, not by battling it.",
            "The out breath is slower than the in breath, and it comes second.",
            "Notice, breathe in for four, breathe out for six, then refocus.",
          ],
          explain: "First notice the feeling without fighting it, breathe in for four, breathe out for six, then bring your focus back to the first question. Naming the feeling and slowing the breath both calm the body.",
        },
        {
          kind: "choice",
          question: "The night before a paper you feel wound up. Which next step is most helpful?",
          options: [
            "Do a short review, then rest and sleep",
            "Stay up all night cramming",
            "Skip sleep to redo every topic",
            "Scroll and compare yourself to friends online",
          ],
          correct: 0,
          ask: "It is the night before and you feel tense. What is the kindest, most useful thing to do? Pick one.",
          hints: [
            "Your brain remembers and steadies best after rest.",
            "A short review then good sleep beats a sleepless night of cramming.",
          ],
          explain: "A short review then rest and sleep is most helpful. Sleep settles the mind and helps memory, while an all nighter usually leaves you more anxious and tired.",
        },
        {
          kind: "insight",
          body: "Nerves are normal and they pass. If worry ever feels too big to carry, talk to a trusted adult, and you can reach the Samaritans of Singapore any time on 1767.",
        },
      ],
      talkPrompt: "Talk me through calming my exam nerves, one step at a time.",
    },
  ],
  lifeos: [
    {
      key: "life-time-2",
      title: "Planning a week",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "A plan beats a scramble",
          body: "A week feels lighter when you can see it. Instead of reacting to whatever shouts loudest, you decide in advance what matters and when it happens. A few minutes of planning saves hours of stress, and it leaves room to rest without guilt.",
        },
        {
          kind: "order",
          prompt: "Put the steps for planning your week in order.",
          items: [
            "List everything due this week",
            "Mark which items matter most",
            "Block time for the big items first",
            "Fit smaller tasks around them",
            "Leave some space to rest",
          ],
          ask: "You are planning the week ahead. Do you list first or schedule first? Put the five steps in order.",
          hints: [
            "You cannot judge what matters until you can see it all.",
            "Big and important things get their time before small ones fill the gaps.",
            "List, mark priorities, block the big items, fit the small ones, then leave rest.",
          ],
          explain: "List everything first, mark what matters most, block time for the big items, fit smaller tasks around them, and leave space to rest. Seeing it all before scheduling is what makes the plan work.",
        },
        {
          kind: "tiles",
          prompt: "Build the rule for tackling your tasks.",
          tiles: ["do", "the", "hardest", "easiest", "task", "first"],
          answer: ["do", "the", "hardest", "task", "first"],
          ask: "Let us build a simple work rule. When your focus is freshest, which task should you take on? Lay out the tiles.",
          hints: [
            "Fresh energy is best spent on the demanding work, not the easy bits.",
            "Do the toughest thing while you are sharpest.",
            "The rule reads do the hardest task first.",
          ],
          explain: "The rule is do the hardest task first. Tackling the toughest job while your focus is fresh makes the rest of the day feel easier.",
        },
        {
          kind: "insight",
          body: "See the whole week, protect time for what matters, and start with the hardest thing. Planning buys back calm.",
        },
      ],
      talkPrompt: "Help me plan my week, one step at a time.",
    },
  ],
};
