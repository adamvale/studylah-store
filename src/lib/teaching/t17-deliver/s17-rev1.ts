import type { Subconcept } from "@/lib/teaching/subconcepts";

// T17 Magnetism, Revision 1. Checkpoint over KB Chapter 19, sections t17.1 to
// t17.3: magnets, poles and the law of poles; induced magnetism; magnetising
// and demagnetising. Question-only. Conceptual: no working, no formulas.

export const BOXES: Subconcept[] = [
  {
    id: "t17.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: poles, induced magnetism, magnetising",
    kind: "revision",
    steps: [
      {
        kind: "choice",
        question: "Inside a fully magnetised iron bar, how do the tiny domains point?",
        figure: "fig-19-01-domains",
        options: [
          "In every direction at random",
          "They cancel each other out",
          "They all point the same way",
          "They keep swapping direction each second",
        ],
        correct: 2,
        ask: "In a magnet the small domain fields must add up rather than cancel. That only happens when they line up. Which option describes lined-up domains?",
        hints: [
          "If the domains pointed every which way, their fields would cancel and there would be no magnet.",
          "For the bar to act as a magnet, the domains all have to point the same way so their fields add together.",
        ],
        explain: "In a magnetised bar the domains all point the same way, so their tiny fields add up to give one strong field. When they point at random the fields cancel and the material is unmagnetised.",
      },
      {
        kind: "choice",
        question: "The north pole of one magnet is brought up to the north pole of another. What happens?",
        options: [
          "They push apart",
          "They pull together",
          "Nothing at all happens",
          "They stick and then swap poles",
        ],
        correct: 0,
        ask: "These are 2 like poles facing each other. Recall what the law of poles says about like poles.",
        hints: [
          "The law of poles says like poles behave one way and unlike poles the other.",
          "2 north poles are like poles, and like poles always repel.",
        ],
        explain: "The 2 north poles push apart, because like poles repel. Only unlike poles, a north and a south, pull together.",
      },
      {
        kind: "choice",
        question: "Which single test proves for certain that an unmarked iron bar is a magnet?",
        options: [
          "It is attracted to a steel fridge door",
          "It attracts a small iron nail",
          "It picks up iron filings at its ends",
          "It repels one end of a known magnet",
        ],
        correct: 3,
        ask: "A plain piece of iron can be attracted, so attraction cannot be the sure test. Which behaviour only ever happens between 2 magnets?",
        hints: [
          "Any magnetic material is attracted to a magnet, so attraction on its own proves nothing.",
          "Only a magnet can repel another magnet, so repulsion is the sure test.",
        ],
        explain: "Repelling a known magnet is the only sure test, because only 2 magnets can repel. Attraction can happen with ordinary unmagnetised iron, so it does not prove the bar is a magnet.",
      },
      {
        kind: "choice",
        question: "The north pole of a magnet touches one end of an unmagnetised iron nail. Which pole does that near end of the nail become?",
        figure: "fig-19-04-induced-magnetism",
        options: [
          "A north pole",
          "A south pole",
          "No pole forms there",
          "It stays exactly as before",
        ],
        correct: 1,
        ask: "The nail is attracted to the magnet, so the poles that end up facing each other must be unlike. The magnet's end is a north. What must the nail's near end be?",
        hints: [
          "For the nail to be pulled in, unlike poles have to face each other across the touch point.",
          "The magnet's north is touching, so the near end of the nail is induced as a south pole.",
        ],
        explain: "The near end becomes a south pole. Induced magnetism always gives the near end the opposite pole to the magnet, so unlike poles face and the nail is attracted.",
      },
      {
        kind: "choice",
        question: "A steel bar is placed inside a solenoid carrying a steady direct current. What kind of magnet does it become?",
        options: [
          "A temporary magnet that fades at once",
          "No magnet, because steel cannot be magnetised",
          "A permanent magnet",
          "A magnet that reverses its poles each second",
        ],
        correct: 2,
        ask: "Steel is a hard magnetic material. Think about whether a hard material holds on to its magnetism or loses it quickly.",
        hints: [
          "Soft iron is easy to magnetise but loses it at once; steel is the hard material.",
          "A hard material like steel keeps its magnetism, so it becomes a permanent magnet.",
        ],
        explain: "The steel bar becomes a permanent magnet, because steel is a hard material that keeps its magnetism. A soft iron bar in the same coil would be only a temporary magnet.",
      },
      {
        kind: "classify",
        prompt: "Sort each material into the correct group.",
        bins: ["Magnetic", "Non-magnetic"],
        items: [
          { text: "iron", bin: 0 },
          { text: "cobalt", bin: 0 },
          { text: "nickel", bin: 0 },
          { text: "steel", bin: 0 },
          { text: "copper", bin: 1 },
          { text: "aluminium", bin: 1 },
          { text: "wood", bin: 1 },
          { text: "plastic", bin: 1 },
        ],
        ask: "Only a short list of metals can be magnetised. Recall those, and treat everything else as non-magnetic. Tap each material and drop it in a bin.",
        hints: [
          "The magnetic materials are iron, cobalt, nickel and alloys like steel.",
          "Copper, aluminium, wood and plastic are not magnetic, even though copper and aluminium are metals.",
        ],
        explain: "Iron, cobalt, nickel and steel are magnetic. Copper, aluminium, wood and plastic are non-magnetic, which is why not every metal is attracted to a magnet.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this reasoning about testing for a magnet is wrong. Find it.",
        lines: [
          "An unmagnetised iron bar is always attracted to a nearby magnet.",
          "This shows that attraction on its own proves an object is a magnet.",
          "Only repulsion happens between 2 magnets, so repulsion is the sure test.",
        ],
        errorLine: 1,
        ask: "Look for the line that treats attraction as proof. Ask yourself whether a plain, unmagnetised piece of iron can also be attracted.",
        hints: [
          "The first line is correct: ordinary iron is attracted to a magnet.",
          "If unmagnetised iron is also attracted, then attraction cannot prove an object is a magnet. That is the faulty line.",
        ],
        explain: "The second line is wrong. Attraction does not prove an object is a magnet, because unmagnetised iron is attracted too. Only repulsion is a sure test, since only 2 magnets can repel.",
      },
      {
        kind: "order",
        prompt: "Put the steps for demagnetising a steel magnet with alternating current in order.",
        items: [
          "Place the magnet inside a solenoid carrying alternating current",
          "Let the reversing field keep flipping the domains",
          "Slowly withdraw the magnet from the coil",
          "The domains are left pointing at random, so it is demagnetised",
        ],
        ask: "Start with getting the magnet into the changing field, and finish with the state of the domains at the end. Put the steps in order.",
        hints: [
          "The magnet has to be inside the alternating field before anything can change.",
          "The key move is withdrawing it slowly while the field still reverses, which leaves the domains random.",
        ],
        explain: "First put the magnet in an alternating current solenoid, let the reversing field flip the domains, then slowly withdraw it. Because the field is still reversing as it leaves, the domains are left random and the magnet is demagnetised.",
      },
      {
        kind: "cloze",
        prompt: "Complete the summary of induced magnetism.",
        segments: [
          "When iron is held near a magnet it gains ",
          " magnetism, and the end nearest the magnet becomes the ",
          " pole, so the iron is ",
          ". Take the magnet away and the iron loses it, so this magnetism is ",
          ".",
        ],
        bank: ["induced", "opposite", "attracted", "temporary", "permanent", "repelled"],
        answer: ["induced", "opposite", "attracted", "temporary"],
        ask: "Recall the name for magnetism a magnet creates in nearby iron, which pole the near end takes, whether it is pulled or pushed, and whether it lasts.",
        hints: [
          "A magnet creates induced magnetism in nearby iron, and the near end takes the opposite pole.",
          "Unlike poles face, so the iron is attracted, and it loses the magnetism at once, so it is temporary.",
        ],
        explain: "Iron near a magnet gains induced magnetism, its near end takes the opposite pole, so it is attracted. Because it loses the magnetism as soon as the magnet is removed, this magnetism is temporary.",
      },
      {
        kind: "match",
        prompt: "Match each method to what it does to a bar.",
        pairs: [
          { left: "Direct current in a solenoid", right: "magnetises the bar" },
          { left: "Alternating current, then slowly withdraw", right: "demagnetises the bar" },
          { left: "Steel placed in a d.c. coil", right: "becomes a permanent magnet" },
          { left: "Soft iron placed in a d.c. coil", right: "becomes a temporary magnet" },
        ],
        ask: "Sort out which current lines the domains up and which leaves them random, then which material keeps its magnetism and which does not.",
        hints: [
          "A steady direct current lines domains up; a reversing alternating current, withdrawn slowly, leaves them random.",
          "Steel is hard so it keeps its magnetism; soft iron loses it, so it is only temporary.",
        ],
        explain: "A direct current magnetises a bar, while alternating current with slow withdrawal demagnetises it. Steel becomes a permanent magnet, and soft iron becomes only a temporary one.",
      },
      {
        kind: "open",
        prompt: "You have 2 iron bars. One is a magnet and one is unmagnetised, but they look identical. Explain how you would use them to find out for certain which is the magnet, and why repulsion is the key.",
        figure: "fig-19-03-pole-law",
        modelAnswer: "Bring one end of the first bar up to one end of the second bar, then turn one bar round and try the other end too. If either bar is attracted no matter which way round you hold it, that alone does not prove it is a magnet, because unmagnetised iron is always attracted. But if at any point the bars push each other apart, that is repulsion, and only 2 magnets can repel. So the bar that can repel the other is the magnet. Repulsion is the key because attraction happens with ordinary iron as well, while repulsion only happens between 2 magnets.",
        marks: [
          "Bring the ends together and try both ways round.",
          "Attraction alone does not prove it, because unmagnetised iron is also attracted.",
          "Repulsion proves a magnet, because only 2 magnets can repel.",
        ],
        ask: "Think about what each bar does when you bring the ends together, and remember that only one of attraction and repulsion is a sure sign of a magnet.",
      },
      {
        kind: "open",
        prompt: "Describe how you would magnetise a steel bar using a solenoid and a direct current, and state how you would know which end has become the north pole.",
        modelAnswer: "Place the steel bar inside a solenoid, a long coil of wire, and pass a steady direct current through the coil. The coil produces a magnetic field like a bar magnet, which lines up the domains in the steel. Because steel is a hard material it keeps this alignment, so it becomes a permanent magnet. To find the north pole, look at the coil end-on: the end where the current flows anticlockwise is the north pole, and the end where it flows clockwise is the south pole.",
        marks: [
          "Put the steel bar in a solenoid and pass a direct current through the coil.",
          "The coil's field lines up the domains; steel keeps it, so a permanent magnet forms.",
          "Viewed end-on, the anticlockwise-current end is the north pole.",
        ],
        ask: "Think about what current the coil needs, what the coil's field does to the domains, and the end-on rule that tells you which end is north.",
      },
    ],
  },
];
