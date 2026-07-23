import type { Subconcept } from "@/lib/teaching/subconcepts";

// T17 Magnetism, section 2. Grounded in KB Chapter 19 (Magnetism) section 19.4.
// Conceptual chapter: no calculations, no working, no formula. Colour key: north pole N = red,
// south pole S = blue, iron bar / nails / magnet body = white/grey, field lines = grey.

export const BOXES: Subconcept[] = [
  {
    id: "t17.2",
    code: "T17.2",
    title: "Induced magnetism",
    blurb: "How an ordinary piece of iron turns into a magnet near a magnet, and why it does not last",
    steps: [
      {
        kind: "concept",
        heading: "Iron becomes a magnet near a magnet",
        figure: "fig-19-04-induced-magnetism",
        body: "When a *magnetic material* is placed *near or touching* a magnet, it becomes a magnet itself. This is called *induced magnetism*.",
        say: "This figure has 2 numbered steps. In Step 1 a plain white iron bar is brought up close to a red and blue permanent magnet, and on its own the bar is not a magnet. In Step 2 the bar has turned into a magnet just by being near the other one. That is induced magnetism, a magnetic material becoming a magnet because a magnet is close by.",
      },
      {
        kind: "concept",
        heading: "The near end takes the opposite pole",
        figure: "fig-19-04-induced-magnetism",
        body: "The end of the material *nearest* the magnet takes the *opposite* pole, so *unlike poles* face each other and the material is *attracted*.",
        say: "Look again at Step 2. The magnet's near end here is a red north pole. The end of the white bar closest to it becomes a blue south pole, the opposite pole. Because unlike poles attract, the bar is pulled toward the magnet. This is exactly how a magnet picks up a piece of iron and drags it in.",
      },
      {
        kind: "concept",
        heading: "A chain of nails",
        figure: "fig-19-05-nail-chain",
        body: "Each piece of iron that is picked up becomes an *induced magnet* too, so it can attract the *next* piece. This lets a single magnet hold a whole *chain of nails*.",
        say: "In this picture a magnet holds a hanging string of white iron nails, one below the next. The top nail is turned into an induced magnet by the magnet touching it, so its lower end can grab the second nail. That nail becomes a magnet in turn and grabs a third, and so the chain builds downward from just 1 magnet at the top.",
      },
      {
        kind: "concept",
        heading: "It does not last",
        body: "Induced magnetism is *temporary*. *Remove the magnet* and the iron *loses* it almost at once, so the chain of nails simply *drops apart*.",
        say: "Here is the catch. The induced magnetism only lasts while the magnet is there. The moment you take the magnet away, soft iron loses its magnetism almost instantly. With nothing left to hold them together, the nails in the chain fall apart and drop off, one after another.",
      },
      {
        kind: "choice",
        question: "What does 'induced magnetism' mean?",
        options: [
          "Rubbing 2 magnets together to make them stronger",
          "Heating iron until it glows so it becomes a magnet",
          "A magnetic material becoming a magnet when it is near or touching a magnet",
          "A magnet losing its poles when it is dropped",
        ],
        correct: 2,
        ask: "Think about what happens to a plain iron bar the moment a magnet is brought close to it.",
        hints: [
          "The word 'induced' means the magnetism is brought on by something nearby.",
          "The iron turns into a magnet just because a magnet is near it or touching it.",
        ],
        explain: "Induced magnetism is a magnetic material becoming a magnet when it is placed near or touching a magnet. No heating or rubbing is needed, only the presence of the magnet.",
      },
      {
        kind: "choice",
        question: "A magnet's north pole is held close to one end of an iron bar. What pole does that near end of the bar become?",
        figure: "fig-19-04-induced-magnetism",
        options: [
          "A north pole, the same as the magnet",
          "A south pole, the opposite of the magnet",
          "No pole at all",
          "Both poles at once",
        ],
        correct: 1,
        ask: "The bar is attracted, not pushed away. Which pole would need to face the north pole for them to attract?",
        hints: [
          "Unlike poles attract, and the bar is pulled toward the magnet.",
          "So the near end must take the opposite pole, a south pole facing the magnet's north.",
        ],
        explain: "The near end becomes a south pole, the opposite of the magnet's north pole. Unlike poles now face each other, so the bar is attracted and pulled in.",
      },
      {
        kind: "choice",
        question: "A magnet holds a chain of iron nails. When the magnet is pulled away, the nails fall apart. Why?",
        options: [
          "The nails become too heavy to hold",
          "The nails swap their poles over",
          "The nails turn into non-magnetic copper",
          "The induced magnetism is temporary and is lost once the magnet is gone",
        ],
        correct: 3,
        ask: "The nails were only magnets because the magnet was there. What happens to that magnetism when the magnet leaves?",
        hints: [
          "Induced magnetism in soft iron does not last on its own.",
          "Remove the magnet and the iron loses its magnetism almost at once, so nothing holds the nails.",
        ],
        explain: "Induced magnetism is temporary. Once the magnet is removed, the iron loses its magnetism almost immediately, so the nails no longer attract one another and drop apart.",
      },
      {
        kind: "order",
        prompt: "Put the stages of a magnet picking up and then dropping a chain of nails into the right order.",
        items: [
          "The magnet touches the top nail.",
          "The top nail becomes an induced magnet.",
          "The lower end of that nail attracts the next nail, and a chain hangs down.",
          "The magnet is pulled away.",
          "The nails lose their induced magnetism and drop apart.",
        ],
        ask: "Start with the magnet arriving, follow how each nail turns into a magnet, then think about what happens when the magnet leaves.",
        hints: [
          "First the magnet has to reach the top nail and turn it into a magnet before any chain can form.",
          "The chain only falls apart at the very end, after the magnet is taken away and the magnetism is lost.",
        ],
        explain: "The magnet touches the top nail, which becomes an induced magnet and attracts the next nail, building a chain. When the magnet is removed the induced magnetism is lost, so the nails drop apart.",
      },
      {
        kind: "spoterror",
        prompt: "One line in this description of induced magnetism is wrong. Find it.",
        lines: [
          "A magnetic material placed near a magnet becomes a magnet itself.",
          "The end nearest the magnet takes the opposite pole.",
          "Unlike poles then face each other, so the material is attracted.",
          "Induced magnetism is permanent, so the nails stay joined after the magnet is taken away.",
        ],
        errorLine: 3,
        ask: "Read each line and ask which one would still be true after the magnet is removed.",
        hints: [
          "Think about what actually happens to a nail chain when you lift the magnet off.",
          "Induced magnetism is not permanent, it is temporary and lost once the magnet is gone.",
        ],
        explain: "The wrong line is the last one. Induced magnetism is temporary, not permanent. Remove the magnet and the iron loses its magnetism almost at once, so the nails drop apart rather than staying joined.",
      },
      {
        kind: "insight",
        body: "Induced magnetism explains how a magnet *lifts iron*: it *induces* an opposite pole on the near end so the iron is *attracted*, but the effect is *temporary* and vanishes when the magnet leaves.",
        say: "Hold on to one idea. A magnet does not just pull iron, it first turns that iron into a magnet, giving its near end the opposite pole so the 2 attract. But this borrowed magnetism is only temporary. Take the magnet away and it is gone, which is why a lifted chain of nails simply falls apart.",
        figure: "fig-19-05-nail-chain",
      },
    ],
  },
];
