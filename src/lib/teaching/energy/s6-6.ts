import type { Subconcept } from "@/lib/teaching/subconcepts";

// T6 Energy, Work and Power, section 6. Grounded in KB Chapter 07 (Energy, Work and Power) section on power, efficiency and energy resources.
// Figure colours follow the T6 colour key: lifting/driving force = yellow, weight and gravitational potential store = pink,
// motion/speed/kinetic store = blue, objects (person) = white, stairs/ground/height guides and the total input band = grey;
// on the Sankey diagram the useful output arrow = green and the dissipated (wasted) arrow = red.

export const BOXES: Subconcept[] = [
  {
    id: "t6.6",
    code: "T6.6",
    title: "Power, efficiency and energy resources",
    blurb: "How fast energy is transferred, how much of it is useful, and where it comes from",
    steps: [
      {
        kind: "concept",
        heading: "Power is the rate of transfer",
        figure: "fig-07-16-stairs",
        body: "*Power* is the *rate* at which energy is transferred, which is the same as the rate at which work is done. Its unit is the *watt*, where 1 watt is 1 joule per second.",
        formula: {
          latex: "P = \\dfrac{W}{t}",
          where: [
            { sym: "P", meaning: "power", unit: "W" },
            { sym: "W", meaning: "work done (energy transferred)", unit: "J" },
            { sym: "t", meaning: "time taken", unit: "s" },
          ],
        },
        say: "Power tells you how fast energy is being transferred, not just how much. In the picture a white figure runs up a flight of grey stairs, and a grey guide down the side marks the total height, 4 metres. 2 people could climb those same stairs and do the same work against gravity, but whoever reaches the top in less time transfers the energy faster, so that person has the greater power. Divide the work done by the time taken in seconds, and the power comes out in watts, where 1 watt is 1 joule each second.",
      },
      {
        kind: "concept",
        heading: "Power at a constant speed",
        body: "When a *force* keeps an object moving at a *constant speed*, the *power* is simply the force multiplied by the speed.",
        formula: {
          latex: "P = F v",
          where: [
            { sym: "P", meaning: "power", unit: "W" },
            { sym: "F", meaning: "force", unit: "N" },
            { sym: "v", meaning: "speed", unit: "m/s" },
          ],
        },
        say: "There is a quick way to find power when something moves steadily. If a driving force keeps an object going at a constant speed, multiply that force by the speed and you get the power straight away. For example, a force of 100 newtons pulling a load at 4 metres per second delivers 100 times 4, which is 400 watts.",
      },
      {
        kind: "concept",
        heading: "Efficiency",
        figure: "fig-07-12-sankey-efficiency",
        body: "*Efficiency* compares the *useful* energy output with the *total* energy input. The total input always equals the useful output plus the energy *dissipated* to the surroundings.",
        formula: {
          latex: "\\text{efficiency} = \\dfrac{\\text{useful output}}{\\text{total input}} \\times 100\\%",
        },
        say: "No device passes on all the energy it takes in. This is a Sankey diagram. A wide grey band on the left stands for the total energy input. It splits into 2 arrows. The green arrow flowing straight on is the useful output, the energy that does the job you wanted. The red arrow branching away is the energy dissipated, usually wasted as heat and sound. The wider that green arrow is compared with the grey input band, the more efficient the device. To find the efficiency, divide the useful output by the total input and multiply by 100 percent.",
      },
      {
        kind: "concept",
        heading: "Renewable and non-renewable resources",
        body: "*Non-renewable* resources, such as *fossil fuels* and *nuclear* fuels, run out once we use them. *Renewable* resources are replenished naturally, so they will not run out.",
        say: "We draw our energy from 2 kinds of resource. Non-renewable resources are the fossil fuels, coal, oil and natural gas, together with nuclear fuels. They took an enormous span of time to form, so once we burn through them they are gone. Renewable resources are topped up by nature as fast as we use them. These include biofuels, wind, tides, hydropower, geothermal energy from hot rocks, and solar energy from the Sun.",
      },
      {
        kind: "choice",
        question: "A student of mass 50 kg runs up a staircase 3.0 m high in 6.0 s. Taking g = 10 N/kg, the work done against gravity is 1500 J. What is the student's power?",
        options: ["250 W", "9000 W", "150 W", "25 W"],
        correct: 0,
        ask: "Power is the work done divided by the time taken, so work out 1500 ÷ 6.0.",
        hints: [
          "Use power equals work done divided by time.",
          "1500 ÷ 6.0 is 250, and power is measured in watts.",
        ],
        working: [
          { label: "Formula", latex: "P = \\dfrac{W}{t}" },
          { label: "Substitute", latex: "P = \\dfrac{1500}{6.0}" },
          { label: "Answer", latex: "P = 250\\ \\text{W}" },
        ],
        explain: "The power is 250 watts, because 1500 joules of work divided by 6.0 seconds is 250 joules per second, which is 250 watts.",
      },
      {
        kind: "tiles",
        prompt: "A conveyor belt pulls a load along at a constant 2.5 m/s with a force of 240 N. Build the working line that gives the power P.",
        tiles: ["P =", "240", "\\times", "2.5", "=", "600", "W", "N"],
        answer: ["P =", "240", "\\times", "2.5", "=", "600", "W"],
        ask: "At a constant speed the power is the force times the speed, so set up 240 × 2.5.",
        hints: [
          "Use power equals force times speed.",
          "240 × 2.5 is 600, and power is measured in watts.",
        ],
        working: [
          { label: "Formula", latex: "P = F v" },
          { label: "Substitute", latex: "P = 240 \\times 2.5" },
          { label: "Answer", latex: "P = 600\\ \\text{W}" },
        ],
        explain: "The power is 600 watts, because a force of 240 newtons moving its load at 2.5 metres per second transfers 240 × 2.5, which is 600 watts.",
      },
      {
        kind: "choice",
        question: "An electric heater is supplied with 200000 J of energy and is 75% efficient. How much energy is usefully transferred as heat?",
        options: ["150000 J", "50000 J", "266667 J", "75000 J"],
        correct: 0,
        ask: "The useful output is the efficiency as a fraction times the total input, so work out 75 ÷ 100, then times 200000.",
        hints: [
          "Useful output equals the efficiency times the total input.",
          "75 percent of 200000 is 150000.",
        ],
        working: [
          { label: "Formula", latex: "\\text{useful} = \\text{efficiency} \\times \\text{total}" },
          { label: "Substitute", latex: "\\text{useful} = \\dfrac{75}{100} \\times 200000" },
          { label: "Answer", latex: "\\text{useful} = 150000\\ \\text{J}" },
        ],
        explain: "The useful output is 150000 joules, because 75 percent of 200000 joules is 150000 joules. The remaining 50000 joules is dissipated.",
      },
      {
        kind: "slider",
        prompt: "A wind turbine takes in 800 J of energy from the wind and is 25% efficient. Set the slider to the energy dissipated (wasted), in joules.",
        min: 0,
        max: 800,
        step: 10,
        unit: "J",
        start: 0,
        targetMin: 590,
        targetMax: 610,
        ask: "First find the useful output, which is 25% of 800, then subtract it from the total input of 800.",
        hints: [
          "The dissipated energy is the total input minus the useful output.",
          "25 percent of 800 is 200, and 800 - 200 is 600.",
        ],
        working: [
          { label: "Formula", latex: "\\text{dissipated} = \\text{total} - \\text{useful}" },
          { label: "Substitute", latex: "\\text{dissipated} = 800 - 200" },
          { label: "Answer", latex: "\\text{dissipated} = 600\\ \\text{J}" },
        ],
        explain: "The energy dissipated is 600 joules, because 25 percent of 800 joules is 200 joules of useful output, and 800 - 200 is 600 joules wasted.",
      },
      {
        kind: "classify",
        prompt: "Sort each energy resource as renewable or non-renewable.",
        bins: ["Renewable", "Non-renewable"],
        items: [
          { text: "Wind", bin: 0 },
          { text: "Solar", bin: 0 },
          { text: "Hydropower", bin: 0 },
          { text: "Coal", bin: 1 },
          { text: "Natural gas", bin: 1 },
          { text: "Nuclear fuel", bin: 1 },
        ],
        ask: "Renewable resources are replenished naturally and never run out; non-renewable ones run out once used. Tap each resource and drop it in its bin.",
        hints: [
          "Wind, solar and hydropower are topped up by nature all the time.",
          "Coal and natural gas are fossil fuels, and nuclear fuel is also non-renewable.",
        ],
        explain: "Wind, solar and hydropower are renewable, because nature replenishes them. Coal, natural gas and nuclear fuel are non-renewable, because once used they are gone.",
      },
      {
        kind: "insight",
        body: "A device is more *efficient* when a bigger share of its *total input* becomes *useful* output, yet energy is always *conserved*, because the dissipated part is transferred to the surroundings, not destroyed.",
        say: "Here is the idea to carry away. Making a device efficient means getting as much useful output as you can from the energy you put in, so less is wasted. But no energy ever vanishes. The part that is not useful is dissipated to the surroundings, usually as heat and sound, so the total is always conserved. Power then tells you how quickly all of that transfer happens, in joules each second.",
      },
    ],
  },
];
