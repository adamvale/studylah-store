import type { Subconcept } from "@/lib/teaching/subconcepts";

// T3 Dynamics, section 7. Grounded in KB Chapter 04 (Forces), Newton's first law and inertia.

export const BOXES: Subconcept[] = [
  {
    id: "t3.7",
    code: "T3.7",
    title: "Newton's first law and inertia",
    blurb: "Why balanced forces keep motion steady, and what inertia is",
    steps: [
      {
        kind: "concept",
        heading: "Newton's first law",
        body: "*Newton's first law* says an object stays at *rest*, or keeps moving at *constant velocity* in a straight line, unless a *resultant force* acts on it. For this reason it is also called the law of inertia.",
        say: "Newton's first law is about what happens when nothing pushes an object off balance. Left alone, an object at rest stays at rest, and an object already moving keeps going at a steady speed in a straight line. Only a resultant force can change that. Because objects resist changes to their motion, we also call this the law of inertia.",
      },
      {
        kind: "concept",
        heading: "Staying at rest",
        figure: "fig-04-04-cup-on-table",
        body: "When an object is at *rest* and stays at rest, the *resultant force* on it is *zero*. Its forces are *balanced*.",
        say: "In the picture a cup sits still on a table. One pink arrow points straight down, the weight of the cup pulling it toward the ground, and an equal green arrow points straight up, the normal force from the table. The 2 arrows are the same size, so they cancel. The resultant force is 0, and the cup stays exactly where it is.",
      },
      {
        kind: "concept",
        heading: "Moving at constant velocity",
        figure: "fig-04-05-ball-constant-velocity",
        body: "An object can keep moving at *constant velocity* with a *zero* resultant force too. Here the *driving force* forward and *friction* backward are balanced.",
        say: "Here a ball rolls along at a steady speed. The yellow arrow pushing it forward is the driving force, and the pink arrow pointing back is friction. They are equal in size, so once again the resultant force is 0. A zero resultant force does not mean stopped. It means no change, so the ball simply keeps the same velocity.",
      },
      {
        kind: "concept",
        heading: "Inertia",
        figure: "fig-04-06-inertia-card-coin",
        body: "*Inertia* is the *reluctance* of an object to change its state of *rest* or *motion*. A coin on a flicked card shows it well.",
        say: "Look at the card and coin trick. A coin balances on a card that rests over a glass. Flick the card away fast, sideways, and the coin barely follows it. Its inertia keeps it in place, so it drops straight down into the glass. Inertia is that reluctance to change whatever the object was already doing, whether resting or moving.",
      },
      {
        kind: "choice",
        question: "Newton's first law covers an object at rest and an object moving at constant velocity. What do these 2 cases share?",
        options: [
          "The resultant force on the object is 0",
          "A large resultant force acts on the object",
          "The object has no weight",
          "The object has no mass",
        ],
        correct: 0,
        ask: "In both cases the object's motion is not changing. Think about what the forces must add up to for that to happen.",
        hints: [
          "A change in motion always needs a resultant force.",
          "If nothing about the motion changes, the forces must be balanced, adding to 0.",
        ],
        explain: "In both cases the resultant force is 0. Balanced forces mean no change, so the object either stays at rest or keeps the same constant velocity.",
      },
      {
        kind: "match",
        prompt: "Match each everyday observation to the reason inertia gives for it.",
        pairs: [
          { left: "A mug slides across the dashboard as the car turns a corner", right: "It keeps moving in a straight line" },
          { left: "Passengers lurch backward as the bus pulls away", right: "They tend to stay at rest" },
          { left: "A coin dropped inside a moving train lands below your hand", right: "It keeps the train's forward speed" },
        ],
        ask: "For each case, ask what the object was doing just before, resting or moving, and remember inertia makes it keep doing that.",
        hints: [
          "An object at rest tends to stay at rest; a moving object tends to keep its speed and direction.",
          "The mug and the coin were already moving; the passengers were at rest until the bus pulled away.",
        ],
        explain: "The mug keeps moving straight while the car turns, so it slides. The passengers tend to stay at rest as the bus pulls away, so they lurch back. The coin keeps the train's forward speed, so it lands below your hand.",
      },
      {
        kind: "classify",
        prompt: "Sort each situation by the resultant force acting on the object.",
        bins: ["Resultant force is 0", "Resultant force is not 0"],
        items: [
          { text: "A cup resting on a table", bin: 0 },
          { text: "A ball rolling at constant velocity", bin: 0 },
          { text: "A block starting to move from rest", bin: 1 },
          { text: "A car speeding up along a road", bin: 1 },
        ],
        ask: "If the motion is steady, at rest or at constant velocity, the forces balance to 0. If the motion is changing, they do not. Tap each one and drop it in its bin.",
        hints: [
          "Steady motion, whether stopped or at constant velocity, means a zero resultant force.",
          "Speeding up or starting to move is a change in motion, so the resultant force is not 0.",
        ],
        explain: "The resting cup and the ball at constant velocity both have a resultant force of 0, because their motion is not changing. The block starting to move and the car speeding up are both changing their motion, so the resultant force is not 0.",
      },
      {
        kind: "cloze",
        prompt: "Complete the definition of inertia.",
        segments: [
          "Inertia is the",
          "of an object to change its state of rest or motion. The greater the mass, the",
          "the inertia.",
        ],
        bank: ["reluctance", "greater", "eagerness", "smaller"],
        answer: ["reluctance", "greater"],
        ask: "The first blank is the word for resisting change. The second compares inertia with mass: as the mass goes up, the inertia goes which way?",
        hints: [
          "Inertia is a reluctance, not an eagerness, to change motion.",
          "More mass means more inertia, so the inertia gets greater.",
        ],
        explain: "Inertia is the reluctance of an object to change its state of rest or motion, and the greater the mass, the greater the inertia.",
      },
      {
        kind: "choice",
        question: "Two blocks rest on the same floor. Block A has a mass of 2 kg and block B has a mass of 10 kg. Which needs a bigger force to start it moving, and why?",
        options: [
          "Block B, because more mass means more inertia",
          "Block A, because less mass means more inertia",
          "Both need the same force",
          "Block A, because it has more inertia",
        ],
        correct: 0,
        ask: "The heavier block resists a change in motion more. Link the larger mass to the amount of inertia.",
        hints: [
          "The greater the mass, the greater the inertia.",
          "Block B is 10 kilograms against 2 kilograms, so it has the most inertia and needs the biggest force.",
        ],
        explain: "Block B needs the bigger force. At 10 kilograms it has more mass than the 2 kilogram block A, so it has more inertia and resists being set moving more strongly.",
      },
      {
        kind: "insight",
        figure: "fig-04-07-mass-inertia",
        body: "The greater the *mass*, the greater the *inertia*, so a *heavier* object needs a *bigger force* to start it moving or to stop it.",
        say: "This last picture compares a small block and a large block side by side. The bigger block has more mass, so it has more inertia and resists moving more stubbornly. That is why a bigger force is needed to start a heavy block sliding than a light one. More mass always means more inertia.",
      },
    ],
  },
];