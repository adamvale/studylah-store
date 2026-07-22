// dynamics-questions.ts
// Teaching question bank for O-Level Physics, Dynamics (topicKey "t3-dynamics").
// Every wrong option maps to the misconception it reveals (see dynamics-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in the StudyLah Physics study notes, Chapter 03 - Mass and Weight and
// Chapter 04 - Forces.
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const DYNAMICS_QUESTIONS: TeachQuestion[] = [
  {
    id: "dyn-q-01",
    topicKey: "t3-dynamics",
    subtopic: "mass-vs-weight",
    stem: "A 6 kg bag of books is carried from the Earth to the Moon. What is its mass on the Moon?",
    figure: null,
    options: ["6 kg", "About 1 kg", "0 kg", "Slightly less than 6 kg"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-massweight-1", 2: "dyn-massweight-1", 3: "dyn-massweight-1" },
    walkthrough: [
      "Mass is the amount of matter in the bag.",
      "Carrying the bag to the Moon does not add or remove any matter.",
      "So the mass stays exactly the same as it was on the Earth.",
      "The mass on the Moon is still six kilograms."
    ],
    explain: "Mass measures the amount of matter, and that does not change with location. The bag feels lighter on the Moon because its weight is smaller there, but the matter inside it is unchanged, so its mass is still six kilograms. Any answer that shrinks the mass confuses the lighter feeling of weight with the amount of mass."
  },
  {
    id: "dyn-q-02",
    topicKey: "t3-dynamics",
    subtopic: "mass-vs-weight",
    stem: "A 60 kg astronaut weighs 600 N on the Earth, where g = 10 N/kg. What is her weight on the Moon, where g = 1.6 N/kg?",
    figure: null,
    options: ["96 N", "600 N", "60 N", "96 kg"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-massweight-2", 2: "dyn-massweight-4", 3: "dyn-massweight-3" },
    walkthrough: [
      "Her mass is the same everywhere, sixty kilograms.",
      "Weight is mass times gravitational field strength.",
      "On the Moon that is sixty times one point six.",
      "So her weight on the Moon is ninety six newtons."
    ],
    explain: "Weight depends on the local gravitational field strength, so it changes with location even though mass does not. Sixty kilograms times one point six newtons per kilogram gives ninety six newtons on the Moon. Keeping six hundred newtons treats weight as fixed, using sixty newtons copies the mass value across, and answering in kilograms muddles the unit of weight, which is the newton."
  },
  {
    id: "dyn-q-03",
    topicKey: "t3-dynamics",
    subtopic: "mass-vs-weight",
    stem: "Which line gives the correct SI unit for each quantity?",
    figure: null,
    options: [
      "Mass in kilograms, weight in newtons",
      "Mass in newtons, weight in kilograms",
      "Mass in newtons, weight in newtons",
      "Mass in kilograms, weight in kilograms"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-massweight-3", 2: "dyn-massweight-3", 3: "dyn-massweight-3" },
    walkthrough: [
      "Mass is an amount of matter, measured in kilograms.",
      "Weight is a force, and every force is measured in newtons.",
      "So mass goes in kilograms and weight goes in newtons.",
      "Only the first line has both the right way round."
    ],
    explain: "Mass is measured in kilograms and weight, being a force, in newtons. A quick check is the formula weight equals mass times gravitational field strength, where kilograms times newtons per kilogram gives newtons. Any line that puts mass in newtons or weight in kilograms has the units swapped."
  },
  {
    id: "dyn-q-04",
    topicKey: "t3-dynamics",
    subtopic: "mass-vs-weight",
    stem: "A box has a mass of 8 kg near the Earth, where g = 10 N/kg. What is its weight?",
    figure: null,
    options: ["80 N", "8 N", "0.8 N", "8 kg"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-massweight-4", 2: "dyn-massweight-4", 3: "dyn-massweight-3" },
    walkthrough: [
      "Weight is mass times gravitational field strength.",
      "The mass is eight kilograms and the field strength is ten newtons per kilogram.",
      "Multiply eight by ten.",
      "The weight is eighty newtons."
    ],
    explain: "Weight is not the same number as mass. You multiply the mass by the gravitational field strength, so eight kilograms times ten newtons per kilogram gives eighty newtons. Copying the mass value across as eight newtons, dividing to get zero point eight, or answering in kilograms all miss that step."
  },
  {
    id: "dyn-q-05",
    topicKey: "t3-dynamics",
    subtopic: "gravitational-field",
    stem: "Which of these is a non contact force?",
    figure: "fig-03-03-two-masses-attract.svg",
    options: ["Gravitational force", "Friction", "Tension", "Normal force"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-gravfield-1", 2: "dyn-gravfield-1", 3: "dyn-gravfield-1" },
    walkthrough: [
      "A contact force needs the two objects to be touching.",
      "Friction, tension and the normal force all act only through contact.",
      "The gravitational force reaches across a gap, with no touching needed.",
      "So the gravitational force is the non contact one."
    ],
    explain: "Gravity acts across empty space, so it is a non contact force. Friction, tension and the normal force all require surfaces or materials in contact, so they are contact forces. The push you feel underfoot is the normal force, not gravity itself."
  },
  {
    id: "dyn-q-06",
    topicKey: "t3-dynamics",
    subtopic: "gravitational-field",
    stem: "Uranus has a larger diameter than the Earth, yet the table gives Uranus a gravitational field strength of 9 N/kg and the Earth 10 N/kg. Which planet actually has the larger field strength?",
    figure: null,
    options: [
      "The Earth",
      "Uranus",
      "Uranus, because a wider planet always pulls harder",
      "It cannot be told without the diameters"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-gravfield-2", 2: "dyn-gravfield-2", 3: "dyn-gravfield-2" },
    walkthrough: [
      "The field strength is given directly in the table.",
      "The Earth is ten newtons per kilogram and Uranus is nine.",
      "Ten is larger than nine, so the Earth has the larger field strength.",
      "This is true even though Uranus has the larger diameter."
    ],
    explain: "You read the field strength straight from the table rather than judging by size. The Earth's ten newtons per kilogram beats Uranus's nine, even though Uranus is the wider planet. So a larger diameter does not always mean a larger gravitational field strength."
  },
  {
    id: "dyn-q-07",
    topicKey: "t3-dynamics",
    subtopic: "gravitational-field",
    stem: "Near the Earth the gravitational field strength is 10 N/kg. What is the acceleration of free fall there?",
    figure: null,
    options: ["10 m/s^2", "About 1 m/s^2", "It cannot be found from the field strength", "100 m/s^2"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-gravfield-3", 2: "dyn-gravfield-3", 3: "dyn-gravfield-3" },
    walkthrough: [
      "One newton per kilogram is exactly the same as one metre per second squared.",
      "So the number does not change when you switch between the two.",
      "A field strength of ten newtons per kilogram means a free fall acceleration of ten.",
      "The acceleration of free fall is ten metres per second squared."
    ],
    explain: "The gravitational field strength and the acceleration of free fall are the same quantity, because one newton per kilogram equals one metre per second squared. So ten newtons per kilogram gives ten metres per second squared. You do not need a separate number, and the value certainly is not one or a hundred."
  },
  {
    id: "dyn-q-08",
    topicKey: "t3-dynamics",
    subtopic: "inertia",
    stem: "Two shopping trolleys are pushed from rest with the same force. One is empty and one is loaded with heavy tins. Which is harder to get moving?",
    figure: "fig-04-07-mass-inertia.svg",
    options: ["The loaded trolley", "The empty trolley", "They are equally hard", "Whichever is pushed second"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-inertia-1", 2: "dyn-inertia-1", 3: "dyn-inertia-1" },
    walkthrough: [
      "Inertia is the reluctance of an object to change its motion.",
      "Inertia depends on mass, so more mass means more inertia.",
      "The loaded trolley has the larger mass.",
      "So the loaded trolley is harder to get moving."
    ],
    explain: "The greater the mass, the greater the inertia, so the loaded trolley resists a change in its motion more strongly and is harder to start moving. Saying they are equally hard misses that inertia grows with mass."
  },
  {
    id: "dyn-q-09",
    topicKey: "t3-dynamics",
    subtopic: "free-fall",
    stem: "With no air resistance, a 5 kg ball and a 1 kg ball are dropped together from the same height. Which reaches the ground first?",
    figure: "fig-04-26-free-fall-graph.svg",
    options: ["They land together", "The 5 kg ball", "The 1 kg ball", "The 5 kg ball, by a small margin"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-freefall-1", 2: "dyn-freefall-1", 3: "dyn-freefall-1" },
    walkthrough: [
      "With no air resistance, gravity gives every object the same acceleration.",
      "The heavier ball feels a larger weight, but it also has more mass to move.",
      "Writing weight equals mass times acceleration, the mass cancels, leaving the same acceleration.",
      "So both balls fall at about ten metres per second squared and land together."
    ],
    explain: "Without air resistance, mass makes no difference to the fall. The larger weight of the heavy ball is matched exactly by its larger mass, so the two effects cancel and every object accelerates at about ten metres per second squared. The balls land together."
  },
  {
    id: "dyn-q-10",
    topicKey: "t3-dynamics",
    subtopic: "newtons-first-law",
    stem: "The forces on a moving box are perfectly balanced. Which statement is correct?",
    figure: "fig-04-05-ball-constant-velocity.svg",
    options: [
      "It keeps moving at a constant velocity",
      "It must be at rest",
      "It must be slowing down",
      "It cannot be moving at all"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-nfl-1", 2: "dyn-nfl-1", 3: "dyn-nfl-1" },
    walkthrough: [
      "A zero resultant force means the velocity does not change.",
      "That allows two cases: staying at rest, or keeping a constant velocity.",
      "The box was already moving, so it keeps that same velocity.",
      "Balanced forces do not force it to stop or stand still."
    ],
    explain: "Balanced forces mean the velocity does not change, not that the object must be at rest. A moving box with balanced forces simply keeps a constant velocity. It only stays still if it was already at rest, so slowing down or standing still are not required."
  },
  {
    id: "dyn-q-11",
    topicKey: "t3-dynamics",
    subtopic: "newtons-first-law",
    stem: "A space probe drifting far from any star has its engine switched off, and there is no friction. What happens to its motion?",
    figure: "fig-04-05-ball-constant-velocity.svg",
    options: ["It keeps moving at a constant velocity", "It slows down and stops", "It stops at once", "It speeds up"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-nfl-2", 2: "dyn-nfl-2", 3: "dyn-nfl-2" },
    walkthrough: [
      "With the engine off and no friction, there is no resultant force on the probe.",
      "By Newton's first law, an object with no resultant force keeps a constant velocity.",
      "Nothing acts to slow it down or speed it up.",
      "So the probe keeps drifting at the same velocity."
    ],
    explain: "A moving object needs no force to keep moving. By the first law, with no resultant force the probe keeps a constant velocity indefinitely. On the Earth things slow down because of friction, but out in space there is none, so the probe neither slows nor stops."
  },
  {
    id: "dyn-q-12",
    topicKey: "t3-dynamics",
    subtopic: "balanced-unbalanced-forces",
    stem: "A trolley has a 12 N force pulling it to the right and a 5 N force pulling it to the left. What is the resultant force?",
    figure: "fig-04-03-unbalanced-forces.svg",
    options: ["7 N to the right", "17 N to the right", "17 N to the left", "7 N to the left"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-resultant-1", 2: "dyn-resultant-1", 3: "dyn-resultant-1" },
    walkthrough: [
      "Take the right as positive, so the left force is negative.",
      "The forces are plus twelve and minus five.",
      "Add them with their signs: twelve take away five is seven.",
      "The result is positive, so seven newtons to the right."
    ],
    explain: "Opposite forces subtract, because force is a vector and direction matters. Twelve to the right and five to the left give a resultant of seven newtons to the right, not seventeen. Adding the sizes ignores that the forces point opposite ways, and losing the sign points the answer the wrong way."
  },
  {
    id: "dyn-q-13",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    stem: "A 4 kg box is pushed with a force of 25 N along a floor that provides 13 N of friction. What is the acceleration of the box?",
    figure: "fig-04-11-we-box-push.svg",
    options: ["3.0 m/s^2", "6.25 m/s^2", "9.5 m/s^2", "3.25 m/s^2"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-nsl-1", 2: "dyn-resultant-1", 3: "dyn-nsl-1" },
    walkthrough: [
      "First find the resultant force along the floor.",
      "The push is twenty five newtons and friction is thirteen newtons against it.",
      "Twenty five take away thirteen is twelve newtons.",
      "Acceleration is resultant force over mass, twelve over four, which is three metres per second squared."
    ],
    explain: "The second law uses the resultant force, not the full push. Subtract the thirteen newtons of friction from the twenty five newton push to get twelve newtons, then divide by the four kilogram mass to get three metres per second squared. Dividing twenty five by four skips the friction, and adding the friction instead of subtracting it gives too large a force."
  },
  {
    id: "dyn-q-14",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    stem: "The same resultant force of 12 N acts separately on a 2 kg block and a 6 kg block. Which statement is correct?",
    figure: null,
    options: [
      "The 2 kg block has the larger acceleration",
      "The 6 kg block has the larger acceleration",
      "Both have the same acceleration",
      "The 6 kg block accelerates three times as fast"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-nsl-2", 2: "dyn-nsl-2", 3: "dyn-nsl-2" },
    walkthrough: [
      "Acceleration equals the resultant force divided by the mass.",
      "For the two kilogram block, twelve over two is six metres per second squared.",
      "For the six kilogram block, twelve over six is two metres per second squared.",
      "The smaller mass has the larger acceleration."
    ],
    explain: "For a fixed force, acceleration and mass go opposite ways. The two kilogram block reaches six metres per second squared while the six kilogram block reaches only two, so the lighter block accelerates more. A larger mass always gives a smaller acceleration for the same force, not a larger one."
  },
  {
    id: "dyn-q-15",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    stem: "An object weighs 80 N near the Earth, where g = 10 N/kg. A resultant force of 40 N acts on it. What is its acceleration?",
    figure: null,
    options: ["5.0 m/s^2", "0.5 m/s^2", "2.0 m/s^2", "4.0 m/s^2"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-nsl-3", 2: "dyn-nsl-3", 3: "dyn-nsl-3" },
    walkthrough: [
      "The second law needs the mass in kilograms, so first find it from the weight.",
      "Mass is weight over gravitational field strength, eighty over ten, which is eight kilograms.",
      "Acceleration is resultant force over mass, forty over eight.",
      "That gives five metres per second squared."
    ],
    explain: "You must convert the weight to a mass before using the second law. Eighty newtons divided by ten newtons per kilogram gives eight kilograms, and forty newtons divided by eight kilograms gives five metres per second squared. Putting the eighty newton weight straight in as the mass, or using ten as the mass, gives the wrong answer."
  },
  {
    id: "dyn-q-16",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    stem: "A cart starts from rest, and a steady resultant force acts on it for a while. What does the size of that force decide?",
    figure: "fig-04-09-newton-second-law.svg",
    options: [
      "How quickly the cart speeds up",
      "The top speed the cart reaches",
      "The one fixed speed the cart holds",
      "That the cart moves at a steady speed"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-nsl-4", 2: "dyn-nsl-4", 3: "dyn-nsl-4" },
    walkthrough: [
      "A resultant force produces an acceleration, the rate at which the velocity changes.",
      "So the size of the force sets how quickly the cart speeds up.",
      "It does not fix a single speed.",
      "The actual speed keeps rising for as long as the force acts."
    ],
    explain: "A resultant force sets the acceleration, not the speed. It tells you how quickly the cart gains speed, and the speed itself keeps climbing while the force acts. So the force decides how fast the velocity changes, not a top or fixed speed."
  },
  {
    id: "dyn-q-17",
    topicKey: "t3-dynamics",
    subtopic: "newtons-third-law",
    stem: "A horse pulls a cart forward, and by Newton's third law the cart pulls back on the horse with an equal and opposite force. Why can the cart still accelerate forward?",
    figure: "fig-04-13-newton-third-floor.svg",
    options: [
      "The two forces act on different objects, so they do not cancel",
      "The horse's force is really a little larger",
      "The forces cancel, so the cart cannot accelerate",
      "Newton's third law does not apply once things are moving"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-ntl-2", 2: "dyn-ntl-1", 3: "dyn-ntl-1" },
    walkthrough: [
      "The pull of the horse on the cart acts on the cart.",
      "The pull of the cart on the horse acts on the horse.",
      "Because they act on different objects, they never cancel.",
      "To see whether the cart accelerates, look only at the forces on the cart."
    ],
    explain: "An action and its reaction act on two different objects, so they cannot cancel. Cancelling needs two forces on the same object. The cart accelerates because of the forces acting on the cart, while the equal partner acts on the horse instead. The two forces really are equal, so the horse's force is not the larger one."
  },
  {
    id: "dyn-q-18",
    topicKey: "t3-dynamics",
    subtopic: "newtons-third-law",
    stem: "A falling apple is pulled down by the Earth, and by Newton's third law the apple pulls up on the Earth. How do these two forces compare?",
    figure: "fig-04-14-newton-third-earth.svg",
    options: [
      "They are equal in size",
      "The Earth's pull is much larger",
      "The apple's pull is much larger",
      "The Earth's pull is larger because the Earth is bigger"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-ntl-2", 2: "dyn-ntl-2", 3: "dyn-ntl-2" },
    walkthrough: [
      "A Newton's third law pair is always equal in size.",
      "So the Earth pulls the apple and the apple pulls the Earth with the same force.",
      "The Earth barely moves only because its mass is enormous.",
      "The forces are equal, even though the responses are very different."
    ],
    explain: "The two forces in a third law pair are always equal, however different the objects. The Earth's pull on the apple and the apple's pull on the Earth match exactly. The Earth hardly accelerates only because its mass is so large, not because the force on it is smaller."
  },
  {
    id: "dyn-q-19",
    topicKey: "t3-dynamics",
    subtopic: "newtons-third-law",
    stem: "A book rests on a table. Its weight pulls it down and the table's normal force pushes it up, equal and opposite. What kind of pair is this?",
    figure: "fig-04-15-apple-book.svg",
    options: [
      "Balanced forces on one object, an example of the first law",
      "An action and reaction pair, an example of the third law",
      "A third law pair, because they are equal and opposite",
      "Two forces that act on two different objects"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-ntl-3", 2: "dyn-ntl-3", 3: "dyn-ntl-3" },
    walkthrough: [
      "Check what each force acts on.",
      "The weight and the normal force both act on the book.",
      "Two forces on the same object that balance are an example of the first law.",
      "A third law pair would act on two different objects, so this is not one."
    ],
    explain: "The weight and the normal force both act on the book, so they are balanced forces on a single object, an example of the first law. A genuine third law pair acts on two different objects, like the book pushing down on the table and the table pushing up on the book. Equal and opposite alone does not make a third law pair."
  },
  {
    id: "dyn-q-20",
    topicKey: "t3-dynamics",
    subtopic: "free-body-diagrams",
    stem: "A crate is pushed across a floor. Which force belongs on the free-body diagram of the crate?",
    figure: "fig-04-16-freebody-crate.svg",
    options: [
      "The friction from the floor on the crate",
      "The push of the crate on the floor",
      "The crate's pull on the Earth",
      "The force the crate exerts on the person's hand"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-fbd-1", 2: "dyn-fbd-1", 3: "dyn-fbd-1" },
    walkthrough: [
      "A free-body diagram shows only the forces acting on the crate itself.",
      "Friction from the floor acts on the crate, so it belongs.",
      "The crate's push on the floor and its pull on the Earth act on other objects.",
      "Those partner forces are left off the crate's diagram."
    ],
    explain: "A free-body diagram shows only forces acting on the chosen object. Friction from the floor acts on the crate, so it is included. The forces the crate exerts on the floor, the Earth or a hand all act on other objects, so they belong on those objects' diagrams, not the crate's."
  },
  {
    id: "dyn-q-21",
    topicKey: "t3-dynamics",
    subtopic: "friction",
    stem: "A box is sliding to the right across a rough floor. Which way does the friction on the box act?",
    figure: "fig-04-23-friction.svg",
    options: ["To the left", "To the right", "To the right, helping it move", "In the direction of the push"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-friction-1", 2: "dyn-friction-1", 3: "dyn-friction-1" },
    walkthrough: [
      "Friction always opposes the sliding motion.",
      "The box slides to the right.",
      "So the friction on it points the opposite way, to the left.",
      "Friction never points along the direction of travel."
    ],
    explain: "Friction opposes sliding, so for a box moving right the friction acts left. It never helps the motion along. That is why friction slows things down and why a steady push is needed to keep a box moving against it."
  },
  {
    id: "dyn-q-22",
    topicKey: "t3-dynamics",
    subtopic: "friction",
    stem: "A block is pulled along a floor at a constant velocity by a 40 N force. What is the size of the friction on the block?",
    figure: "fig-04-38-mcq-constant-velocity.svg",
    options: ["40 N", "More than 40 N", "Less than 40 N", "0 N"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-friction-2", 2: "dyn-friction-2", 3: "dyn-friction-2" },
    walkthrough: [
      "Constant velocity means the resultant force is zero.",
      "So the pulling force and the friction must be balanced.",
      "The pull is forty newtons.",
      "Therefore the friction is also forty newtons."
    ],
    explain: "At a constant velocity the resultant force is zero, so the friction exactly equals the forty newton pull. If the pull were larger, there would be a resultant force and the block would speed up instead of holding a steady velocity. So the two forces match at forty newtons."
  },
  {
    id: "dyn-q-23",
    topicKey: "t3-dynamics",
    subtopic: "terminal-velocity",
    stem: "A skydiver falls at a steady terminal velocity. Her weight is 700 N. What is the air resistance on her?",
    figure: "fig-04-25-terminal-velocity-graph.svg",
    options: ["700 N upward", "0 N, because the weight has gone", "Less than 700 N", "More than 700 N"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-terminal-1", 2: "dyn-terminal-2", 3: "dyn-terminal-2" },
    walkthrough: [
      "At terminal velocity the velocity is steady, so the resultant force is zero.",
      "A zero resultant means the air resistance balances the weight.",
      "The weight is seven hundred newtons, still acting in full.",
      "So the air resistance is seven hundred newtons upward."
    ],
    explain: "At terminal velocity the resultant force is zero because the air resistance has grown to equal the weight. The weight has not gone anywhere, it is still seven hundred newtons, so the air resistance matches it at seven hundred newtons upward. A smaller or larger air resistance would mean the velocity was still changing, which is not terminal velocity."
  },
  {
    id: "dyn-q-24",
    topicKey: "t3-dynamics",
    subtopic: "terminal-velocity",
    stem: "A raindrop reaches its terminal velocity as it falls. What is its acceleration at that stage?",
    figure: "fig-04-25-terminal-velocity-graph.svg",
    options: ["0 m/s^2", "10 m/s^2 downward", "Still increasing", "A small downward value that keeps growing"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-terminal-2", 2: "dyn-terminal-2", 3: "dyn-terminal-2" },
    walkthrough: [
      "Terminal velocity is a constant velocity.",
      "A constant velocity means the velocity is not changing.",
      "If the velocity does not change, the acceleration is zero.",
      "So the raindrop has zero acceleration at terminal velocity."
    ],
    explain: "Terminal velocity is a steady speed, so the acceleration is zero. The air resistance has grown to balance the weight, giving a zero resultant force, and by the first law the velocity then stays constant. The raindrop is no longer speeding up."
  },
  {
    id: "dyn-q-25",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    stem: "John pushes a 5 kg box at a constant velocity with a force of 18 N. He then increases his push so the box accelerates at 0.8 m/s^2. Friction is unchanged. What new force does he apply?",
    figure: null,
    options: ["22 N", "4 N", "18 N", "14 N"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-nsl-1", 2: "dyn-nsl-1", 3: "dyn-nsl-1" },
    walkthrough: [
      "At constant velocity the resultant is zero, so friction equals the eighteen newton push.",
      "To accelerate, find the new resultant force from the second law.",
      "Resultant equals mass times acceleration, five times zero point eight, which is four newtons.",
      "The new push must supply that four newton resultant on top of the eighteen newtons of friction, so twenty two newtons."
    ],
    explain: "First, constant velocity tells you friction is eighteen newtons. To accelerate at zero point eight metres per second squared, the resultant force needed is five times zero point eight, which is four newtons. The new push must overcome the eighteen newtons of friction and provide that four newton resultant, giving twenty two newtons. Using four alone, or eighteen alone, forgets that both the friction and the resultant are needed."
  },
  {
    id: "dyn-q-26",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    stem: "A 500 kg rocket has an upward thrust of 8000 N from its engine and a weight of 4500 N. What is its acceleration at takeoff?",
    figure: "fig-04-28-rocket-freebody.svg",
    options: ["7.0 m/s^2 upward", "16 m/s^2 upward", "25 m/s^2 upward", "9.0 m/s^2 upward"],
    correct: 0,
    distractorMisconceptions: { 1: "dyn-nsl-1", 2: "dyn-resultant-1", 3: "dyn-nsl-1" },
    walkthrough: [
      "Find the resultant force by combining the thrust and the weight.",
      "They act in opposite directions, so subtract: eight thousand take away four thousand five hundred is three thousand five hundred newtons upward.",
      "Acceleration is resultant force over mass, three thousand five hundred over five hundred.",
      "That gives seven metres per second squared upward."
    ],
    explain: "The thrust acts up and the weight acts down, so the resultant is eight thousand take away four thousand five hundred, which is three thousand five hundred newtons upward. Dividing by the five hundred kilogram mass gives seven metres per second squared. Using the thrust alone, or adding the weight instead of subtracting it, both give the wrong force."
  }
];
