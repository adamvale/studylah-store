// dynamics-misconceptions.ts
// Topic: O-Level Physics, Dynamics (topicKey "t3-dynamics")
// The tutor's diagnostic brain: the classic ways students go wrong in Dynamics
// (mass, weight, forces, Newton's laws, friction, free-body), with the exact
// re-explanation for each. Grounded in the StudyLah Physics study notes,
// Chapter 03 - Mass and Weight and Chapter 04 - Forces.
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in
// plain words for reading aloud. On-screen fields (label, belief, microExample)
// may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const DYNAMICS_MISCONCEPTIONS: Misconception[] = [
  {
    id: "dyn-massweight-1",
    topicKey: "t3-dynamics",
    subtopic: "mass-vs-weight",
    label: "Mass changes from planet to planet",
    belief: "An object has less mass on the Moon than it has on the Earth.",
    tell: "The student says the mass of an object drops when it is taken to the Moon, or changes the mass value along with the weight.",
    whyItHappens: "On the Moon things feel lighter and are easier to lift, so students assume there is less matter in them, mixing up the lighter feeling of weight with the amount of mass.",
    reteach: "Mass is just the amount of matter inside an object, and that amount does not change when you carry it somewhere new. A bag of sugar holds the same matter on the Earth, on the Moon, or out in space, so its mass is the same in all three places. What changes on the Moon is the weight, the gravitational pull on it, because the Moon has a weaker field. So the object feels lighter, but its mass stays exactly the same.",
    microExample: "A 6 kg bag has m = 6 kg on the Earth and m = 6 kg on the Moon. Only its weight changes, from 60 N to about 9.6 N.",
    figure: null,
    check: {
      question: "You take a two kilogram book from the Earth to the Moon. What is its mass on the Moon?",
      answer: "Still two kilograms. Mass is the amount of matter, and that does not change with location, even though the book weighs less on the Moon."
    }
  },
  {
    id: "dyn-massweight-2",
    topicKey: "t3-dynamics",
    subtopic: "mass-vs-weight",
    label: "Weight is the same everywhere",
    belief: "The weight of an object is a fixed property that stays the same on every planet.",
    tell: "The student keeps the weight unchanged when the object is moved to a planet with a different gravitational field strength.",
    whyItHappens: "In everyday life we rarely leave the Earth, so weight feels like a fixed label on an object, and the way it depends on the local gravity is easy to miss.",
    reteach: "Weight is the gravitational force on an object, and it depends on the local gravitational field strength. Since that field strength changes from place to place, the weight changes with it, even though the mass stays fixed. On a planet with a weaker field the same object weighs less, and on one with a stronger field it weighs more. So always use the gravitational field strength of the place you are actually asked about.",
    microExample: "A 60 kg mass weighs W = 60 x 10 = 600 N on the Earth, but W = 60 x 1.6 = 96 N on the Moon.",
    figure: null,
    check: {
      question: "The gravitational field strength on Mars is smaller than on the Earth. Does an object weigh more, less, or the same on Mars?",
      answer: "Less. Weight depends on the local gravitational field strength, so a weaker field on Mars gives a smaller weight, even though the mass is unchanged."
    }
  },
  {
    id: "dyn-massweight-3",
    topicKey: "t3-dynamics",
    subtopic: "mass-vs-weight",
    label: "Units of mass and weight swapped",
    belief: "Mass is measured in newtons and weight is measured in kilograms.",
    tell: "The student gives a mass in newtons or a weight in kilograms, swapping the two units.",
    whyItHappens: "Mass and weight are talked about together so often that their units get switched, especially since bathroom scales are marked in kilograms even though they respond to weight.",
    reteach: "Keep the two units apart. Mass is measured in kilograms, because it is an amount of matter. Weight is a force, so it is measured in newtons, like every other force. A quick check is the formula: weight equals mass times gravitational field strength, so kilograms times newtons per kilogram gives newtons. If a mass has ended up in newtons, something has gone wrong.",
    microExample: "m = 5 kg (kilograms); W = mg = 5 x 10 = 50 N (newtons). Never 5 N of mass or 50 kg of weight.",
    figure: null,
    check: {
      question: "What is the correct unit for mass, and what is the correct unit for weight?",
      answer: "Mass is in kilograms, and weight is in newtons, because weight is a force. Swapping them is a common slip."
    }
  },
  {
    id: "dyn-massweight-4",
    topicKey: "t3-dynamics",
    subtopic: "mass-vs-weight",
    label: "Weight taken as equal to the mass value",
    belief: "The weight of an object is just the same number as its mass.",
    tell: "The student writes the weight as the mass value, without multiplying by the gravitational field strength.",
    whyItHappens: "Scales report a mass in kilograms when we casually ask what something weighs, so the two numbers get treated as one and the step of multiplying by g is skipped.",
    reteach: "Weight is not the same number as mass. To get the weight you multiply the mass by the gravitational field strength, using the relationship weight equals mass times gravitational field strength. Near the Earth that field strength is about ten newtons per kilogram, so a mass of one kilogram weighs about ten newtons, not one. Always carry out that multiplication rather than copying the mass value across.",
    microExample: "m = 8 kg near the Earth: W = mg = 8 x 10 = 80 N, not 8 N.",
    figure: null,
    check: {
      question: "A box has a mass of four kilograms near the Earth. What is its weight?",
      answer: "Forty newtons, because weight is mass times gravitational field strength, four times ten. It is not simply four."
    }
  },
  {
    id: "dyn-gravfield-1",
    topicKey: "t3-dynamics",
    subtopic: "gravitational-field",
    label: "Gravitational force treated as a contact force",
    belief: "Gravity is a contact force, because you feel the ground pushing on you.",
    tell: "The student sorts the gravitational force, or weight, in with friction and tension as a contact force.",
    whyItHappens: "We always feel the ground under our feet, so students link the sensation of contact with the pull of gravity, when the ground push is really the normal force.",
    reteach: "Gravity acts across a gap, with no touching needed, so it is a non contact force. The Earth pulls on you even though its centre is far below you, and it would pull on a falling stone that touches nothing at all. The push you feel underfoot is the normal force from the ground, which is a separate contact force. So sort weight with the magnetic and electrostatic forces, not with friction and tension.",
    microExample: "Contact: friction, tension, normal force. Non contact: gravitational, magnetic, electrostatic. Weight is non contact.",
    figure: "fig-03-03-two-masses-attract.svg",
    check: {
      question: "Is the gravitational force a contact force or a non contact force, and why?",
      answer: "A non contact force, because it acts across a gap without the two objects needing to touch. The Earth pulls on an object even before it lands."
    }
  },
  {
    id: "dyn-gravfield-2",
    topicKey: "t3-dynamics",
    subtopic: "gravitational-field",
    label: "Bigger planet always has a stronger field",
    belief: "A planet with a larger diameter always has a larger gravitational field strength.",
    tell: "The student ranks planets by size to decide the field strength, and picks the widest one as the strongest.",
    whyItHappens: "Bigger usually means more, so students expect a wider planet to pull harder, without noticing that the field strength depends on more than diameter alone.",
    reteach: "A larger diameter does not by itself mean a stronger field. In the planet table, Saturn is far wider than the Earth, yet its gravitational field strength is only about eleven newtons per kilogram, close to the Earth's ten. Uranus is wider than the Earth too, but its field strength is smaller. So you cannot rank the field strength by size. You have to read the actual value given for each planet.",
    microExample: "Saturn: diameter about 9 times the Earth's, but g = 11 N/kg, only just above the Earth's 10 N/kg.",
    figure: null,
    check: {
      question: "One planet has a bigger diameter than another. Does it definitely have a bigger gravitational field strength?",
      answer: "No. Field strength does not follow diameter alone. You look at the given value for each planet rather than assume the wider one is stronger."
    }
  },
  {
    id: "dyn-gravfield-3",
    topicKey: "t3-dynamics",
    subtopic: "gravitational-field",
    label: "Field strength and free fall acceleration seen as unrelated",
    belief: "The gravitational field strength and the acceleration of free fall are different quantities with different values.",
    tell: "The student treats ten newtons per kilogram and ten metres per second squared as unconnected, and looks for two separate numbers.",
    whyItHappens: "The two quantities have different names and different looking units, so it is not obvious that they are really the same thing seen from two angles.",
    reteach: "The gravitational field strength and the acceleration of free fall are the same quantity with the same value. Newton's second law shows why: one newton per kilogram works out to be exactly one metre per second squared. So near the Earth the field strength is ten newtons per kilogram and the acceleration of free fall is ten metres per second squared, and those are two ways of saying the same ten. You do not need two separate numbers.",
    microExample: "1 N/kg = 1 m/s^2, so g = 10 N/kg and g = 10 m/s^2 are the same value.",
    figure: null,
    check: {
      question: "Near the Earth the gravitational field strength is ten newtons per kilogram. What is the acceleration of free fall there?",
      answer: "Ten metres per second squared. The two quantities are equal, because one newton per kilogram is the same as one metre per second squared."
    }
  },
  {
    id: "dyn-inertia-1",
    topicKey: "t3-dynamics",
    subtopic: "inertia",
    label: "Inertia not linked to mass",
    belief: "All objects are equally hard to start or stop, whatever their mass.",
    tell: "The student says a heavy trolley and a light trolley are equally easy to push off or bring to rest.",
    whyItHappens: "Inertia is an abstract idea, and without tying it to mass students treat the reluctance to change motion as the same for everything.",
    reteach: "Inertia is the reluctance of an object to change its motion, and it depends on mass. The greater the mass, the greater the inertia, so a heavier object is harder to start moving, harder to stop, and harder to turn. That is why a loaded trolley is much harder to push off and to bring to rest than an empty one. More mass means more inertia.",
    microExample: "A 10 kg block has more inertia than a 2 kg block, so it needs a larger force to start it moving from rest.",
    figure: "fig-04-07-mass-inertia.svg",
    check: {
      question: "Which is harder to stop once it is moving, a loaded trolley or an empty one, and why?",
      answer: "The loaded trolley, because it has more mass and therefore more inertia, so it resists a change in its motion more strongly."
    }
  },
  {
    id: "dyn-freefall-1",
    topicKey: "t3-dynamics",
    subtopic: "free-fall",
    label: "Heavier objects fall faster",
    belief: "With no air resistance, a heavier object falls faster than a lighter one.",
    tell: "The student says the heavier of two dropped objects lands first when air resistance is ignored.",
    whyItHappens: "A heavier object has a larger weight pulling it down, so students expect a larger weight to win, forgetting that the larger mass is also harder to accelerate.",
    reteach: "With no air resistance, every object falls with the same acceleration, whatever its mass. The reason comes from the second law: a heavier object does feel a larger weight, but it also has more mass to move, and the two effects cancel exactly. Writing weight equals mass times acceleration, the mass cancels from both sides and leaves the same acceleration of about ten metres per second squared. So a heavy ball and a light ball dropped together land together.",
    microExample: "mg = ma, so a = g for every mass: a 1 kg ball and a 5 kg ball both fall at 10 m/s^2 and land together.",
    figure: "fig-04-26-free-fall-graph.svg",
    check: {
      question: "With no air resistance, a heavy ball and a light ball are dropped together from the same height. Which lands first?",
      answer: "They land together. With no air resistance every object has the same downward acceleration, because the extra weight is matched by the extra mass."
    }
  },
  {
    id: "dyn-nfl-1",
    topicKey: "t3-dynamics",
    subtopic: "newtons-first-law",
    label: "Balanced forces mean the object is at rest",
    belief: "If the forces on an object are balanced, the object must be standing still.",
    tell: "The student says a zero resultant force can only mean the object is at rest, and rules out steady motion.",
    whyItHappens: "The first picture of balanced forces is usually a resting object, like a book on a table, so students tie a zero resultant only to being at rest.",
    reteach: "A zero resultant force means the velocity does not change, and that covers two cases, not one. An object at rest stays at rest, and an object already moving keeps the same speed and direction, moving at a constant velocity. So balanced forces are just as happy with steady motion as with rest. A car cruising at a constant velocity has balanced forces on it, exactly like a book sitting still.",
    microExample: "Driving force 300 N forward and friction 300 N back: the resultant is zero, so the car keeps a constant velocity, it need not be at rest.",
    figure: "fig-04-05-ball-constant-velocity.svg",
    check: {
      question: "The forces on a moving van are balanced. Does the van have to stop?",
      answer: "No. Balanced forces mean the velocity does not change, so the van can keep moving at a constant velocity. It stays at rest only if it was already at rest."
    }
  },
  {
    id: "dyn-nfl-2",
    topicKey: "t3-dynamics",
    subtopic: "newtons-first-law",
    label: "A moving object needs a force to keep moving",
    belief: "A constant driving force is needed just to keep an object moving at a steady speed.",
    tell: "The student assumes that because something keeps moving, there must be a net forward force on it.",
    whyItHappens: "On real surfaces friction always acts, so keeping something moving does take a push, and students credit the motion to the push rather than to overcoming friction.",
    reteach: "By Newton's first law, a moving object keeps moving at a constant velocity on its own, with no resultant force needed. On the Earth you push a box only to cancel the friction that would otherwise slow it, not to keep it going. If the forward push and the friction are equal, the resultant is zero and the box glides at a steady speed. Take the friction away, as in deep space, and no force at all is needed to keep it moving.",
    microExample: "A probe drifting in space keeps a constant velocity with zero force on it, because there is no friction to overcome.",
    figure: "fig-04-05-ball-constant-velocity.svg",
    check: {
      question: "In deep space, with no friction, does a probe need its engine running to keep moving at a steady velocity?",
      answer: "No. With no resultant force it keeps a constant velocity on its own. A force is only needed to change its motion, not to maintain it."
    }
  },
  {
    id: "dyn-resultant-1",
    topicKey: "t3-dynamics",
    subtopic: "balanced-unbalanced-forces",
    label: "Opposite forces added instead of subtracted",
    belief: "To combine two forces you always add their sizes, whichever way they point.",
    tell: "The student adds the magnitudes of two opposing forces instead of taking the difference, or loses track of the direction.",
    whyItHappens: "Combining forces is learned as adding, and the sign that marks direction gets dropped, so opposite forces are added rather than subtracted.",
    reteach: "Force is a vector, so direction matters when you combine forces. Give one direction a positive sign and the opposite a negative sign, then add with the signs. Forces pointing the same way add up, but forces in opposite directions partly cancel, so you take the difference. For twelve newtons right and eight newtons left, the resultant is four newtons to the right, not twenty.",
    microExample: "12 N right and 8 N left: resultant = 12 + (-8) = 4 N right, not 12 + 8 = 20 N.",
    figure: "fig-04-03-unbalanced-forces.svg",
    check: {
      question: "A box has ten newtons pulling right and six newtons pulling left. What is the resultant force?",
      answer: "Four newtons to the right, because opposite forces subtract. You take the difference, ten take away six, not the sum."
    }
  },
  {
    id: "dyn-nsl-1",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    label: "Full applied force used in place of the resultant",
    belief: "In the second law you use the driving force, without taking away friction.",
    tell: "The student divides the applied force by the mass and forgets to subtract friction to get the resultant first.",
    whyItHappens: "The applied force is the number the question hands you, so it feels like the force to use, and the friction acting against it is easy to overlook.",
    reteach: "The second law uses the resultant force, not just the driving force. First combine all the forces along the line, subtracting any friction or drag, to get the resultant. Only then divide by the mass to get the acceleration. If a box is pushed with twenty five newtons against thirteen newtons of friction, the resultant is twelve newtons, and it is that twelve, not the twenty five, that you put into the second law.",
    microExample: "Push 25 N, friction 13 N, mass 4 kg: resultant = 25 - 13 = 12 N, so a = 12 / 4 = 3 m/s^2.",
    figure: "fig-04-11-we-box-push.svg",
    check: {
      question: "A box is pushed with twenty five newtons while friction is thirteen newtons. Which force do you divide by the mass to find the acceleration?",
      answer: "The resultant force, twelve newtons, which is twenty five take away thirteen. You do not use the full twenty five on its own."
    }
  },
  {
    id: "dyn-nsl-2",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    label: "Acceleration grows with mass",
    belief: "For the same resultant force, a heavier object accelerates more.",
    tell: "The student picks the largest mass as the one with the greatest acceleration when the force is the same.",
    whyItHappens: "Bigger usually means more, so students expect more mass to give more of everything, missing that mass sits on the bottom of the second law.",
    reteach: "For a fixed resultant force, acceleration and mass go opposite ways. Acceleration equals the resultant force divided by the mass, so a larger mass gives a smaller acceleration. The heavier object is harder to get moving, so it accelerates less, not more. If the same force acts on several objects, the smallest mass speeds up the most and the largest mass the least.",
    microExample: "The same 12 N on 2 kg gives 6 m/s^2, but on 6 kg gives only 2 m/s^2: more mass, less acceleration.",
    figure: null,
    check: {
      question: "The same resultant force acts on a light object and a heavy one. Which one accelerates more?",
      answer: "The lighter one. Acceleration is force divided by mass, so a smaller mass gives a bigger acceleration for the same force."
    }
  },
  {
    id: "dyn-nsl-3",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    label: "Weight put into the second law as the mass",
    belief: "You can put an object's weight in newtons straight in as the mass in the second law.",
    tell: "The student uses the weight in newtons where the mass in kilograms belongs in the resultant force equals mass times acceleration.",
    whyItHappens: "Mass and weight both describe how heavy something is, so the weight value gets substituted for the mass without converting.",
    reteach: "The second law needs the mass in kilograms, not the weight in newtons. If you are given a weight, first divide it by the gravitational field strength to get the mass, using weight equals mass times gravitational field strength. Then put that mass into the resultant force equals mass times acceleration. For a weight of eighty newtons near the Earth, the mass is eight kilograms, and it is the eight that goes into the second law.",
    microExample: "Weight 80 N near the Earth: m = 80 / 10 = 8 kg. Use m = 8 kg in F = ma, not 80.",
    figure: null,
    check: {
      question: "An object weighs eighty newtons near the Earth. What mass should you use in the resultant force equals mass times acceleration?",
      answer: "Eight kilograms, found by dividing the eighty newton weight by ten. You do not put the eighty straight in as the mass."
    }
  },
  {
    id: "dyn-nsl-4",
    topicKey: "t3-dynamics",
    subtopic: "newtons-second-law",
    label: "Bigger force taken to mean bigger speed",
    belief: "A bigger resultant force makes an object move at a bigger speed.",
    tell: "The student links the size of the resultant force to how fast the object goes, rather than to how quickly it speeds up.",
    whyItHappens: "It feels natural that a harder push means a faster object, so force gets tied to speed instead of to the change in speed.",
    reteach: "A resultant force sets the acceleration, which is how quickly the velocity changes, not the velocity itself. A small steady force acting for a long time can build up a large speed, while a big force acting briefly may add little. So the force tells you the rate of speeding up, and the actual speed depends on how long that force has been acting. Force goes with acceleration, not directly with speed.",
    microExample: "A 4 N resultant on 2 kg gives a = 2 m/s^2: the speed keeps rising while the force acts, it is not fixed at one value.",
    figure: "fig-04-09-newton-second-law.svg",
    check: {
      question: "Does a bigger resultant force mean a bigger speed, or a bigger acceleration?",
      answer: "A bigger acceleration. The force sets how quickly the velocity changes. The actual speed also depends on how long the force acts."
    }
  },
  {
    id: "dyn-ntl-1",
    topicKey: "t3-dynamics",
    subtopic: "newtons-third-law",
    label: "Action and reaction cancel out",
    belief: "The action and reaction forces cancel each other, so nothing can ever move.",
    tell: "The student says a Newton's third law pair adds to zero and leaves no resultant to move anything.",
    whyItHappens: "The pair is equal and opposite, which sounds exactly like balanced forces, so students expect them to cancel.",
    reteach: "An action and its reaction are equal and opposite, but they act on two different objects, so they never cancel. Cancelling only happens when two forces act on the same object. To see whether one object moves, look only at the forces on that object. A horse pulls a cart and the cart pulls the horse with an equal force, but those act on different bodies, so the cart can still accelerate.",
    microExample: "Ball pushes floor down, floor pushes ball up: equal and opposite, but on different objects, so they do not cancel.",
    figure: "fig-04-13-newton-third-floor.svg",
    check: {
      question: "An action and reaction are equal and opposite. Why do they not cancel out?",
      answer: "Because they act on two different objects. Forces only cancel when they act on the same object, so a third law pair never cancels."
    }
  },
  {
    id: "dyn-ntl-2",
    topicKey: "t3-dynamics",
    subtopic: "newtons-third-law",
    label: "The larger object exerts the larger force",
    belief: "A heavier object pulls or pushes harder than the lighter object it interacts with.",
    tell: "The student says the Earth pulls a ball more strongly than the ball pulls the Earth.",
    whyItHappens: "The huge object clearly wins the motion, so students assume it must be exerting the larger force, missing that only its response is different.",
    reteach: "In a Newton's third law pair the two forces are always equal in size, no matter how different the objects are. The Earth pulls a falling ball down, and the ball pulls the Earth up with an exactly equal force. The Earth barely moves only because its mass is enormous, so the same force gives it almost no acceleration. Equal forces, very unequal responses, because of the difference in mass.",
    microExample: "Earth pulls ball with W; ball pulls Earth with the same W. The Earth just has too much mass to accelerate noticeably.",
    figure: "fig-04-14-newton-third-earth.svg",
    check: {
      question: "A ball falls towards the Earth. Which is larger, the pull of the Earth on the ball, or the pull of the ball on the Earth?",
      answer: "They are equal. A third law pair is always equal in size. The Earth hardly moves only because its mass is so large."
    }
  },
  {
    id: "dyn-ntl-3",
    topicKey: "t3-dynamics",
    subtopic: "newtons-third-law",
    label: "Balanced forces on one object read as an action-reaction pair",
    belief: "The weight of a resting object and the upward push on it are a Newton's third law pair.",
    tell: "The student names the weight and the normal force on a resting book as action and reaction.",
    whyItHappens: "Both pairs are equal and opposite, so the balanced forces on one object get confused with a genuine third law pair on two objects.",
    reteach: "The weight of a book and the normal force on it both act on the same object, the book, so they are balanced forces, an example of the first law, not a third law pair. A true third law pair acts on two different objects: the book pushes down on the table, and the table pushes up on the book. So check what each force acts on. Same object means balanced forces, two objects means action and reaction.",
    microExample: "Book on table: weight and normal force both act on the book (first law). Book on table and table on book are the third law pair.",
    figure: "fig-04-15-apple-book.svg",
    check: {
      question: "The weight of a resting book and the table's push on it are equal and opposite. Are they a Newton's third law pair?",
      answer: "No. They both act on the book, so they are balanced forces, the first law. A third law pair acts on two different objects."
    }
  },
  {
    id: "dyn-fbd-1",
    topicKey: "t3-dynamics",
    subtopic: "free-body-diagrams",
    label: "Reaction partner drawn on the free-body diagram",
    belief: "A free-body diagram should include the forces the object exerts on other things.",
    tell: "The student adds the push of the object on the ground, or its pull on a rope, to its own free-body diagram.",
    whyItHappens: "Third law pairs are learned together, so students draw both members of a pair, forgetting that one of them acts on a different object.",
    reteach: "A free-body diagram shows only the forces acting on the one chosen object. The forces that object exerts on other things belong on those other objects, not here. So include the weight, the normal force, any applied force, friction and tension that act on your object, but leave out its own push on the ground or its pull on a rope. One object, and only the forces landing on it.",
    microExample: "For a crate: draw weight, normal force, applied force, friction. Do not draw the crate's push on the floor.",
    figure: "fig-04-16-freebody-crate.svg",
    check: {
      question: "Should a free-body diagram of a crate include the force the crate exerts on the floor?",
      answer: "No. A free-body diagram shows only forces acting on the crate. The crate's push on the floor acts on the floor, so it goes on the floor's diagram."
    }
  },
  {
    id: "dyn-friction-1",
    topicKey: "t3-dynamics",
    subtopic: "friction",
    label: "Friction acts in the direction of motion",
    belief: "Friction pushes an object along in the direction it is moving.",
    tell: "The student draws the friction arrow pointing the same way as the motion, helping the object along.",
    whyItHappens: "Some forces do drive motion, so students picture friction as another helper, rather than as a force that resists sliding.",
    reteach: "Friction always opposes the sliding motion, so it points the opposite way to the object's movement. If a box slides to the right, the friction on it points to the left. That is why friction slows things down and why a constant push is needed to keep a box moving against it. On a free-body diagram, draw the friction arrow against the direction of travel, never along it.",
    microExample: "Box sliding right: friction acts left. It always points opposite to the motion.",
    figure: "fig-04-23-friction.svg",
    check: {
      question: "A box slides to the right across a floor. Which way does the friction on it act?",
      answer: "To the left, opposite to the motion. Friction always opposes the sliding, so it never points the way the object is moving."
    }
  },
  {
    id: "dyn-friction-2",
    topicKey: "t3-dynamics",
    subtopic: "friction",
    label: "Driving force taken as larger than friction at constant velocity",
    belief: "An object moving at a constant speed must be pushed harder than friction pushes back.",
    tell: "The student says the applied force is greater than the friction whenever the object keeps moving.",
    whyItHappens: "It feels like moving forward means winning against friction, so students expect the push to beat the friction even at a steady speed.",
    reteach: "At a constant velocity the resultant force is zero, so the driving force and the friction are exactly equal, not one larger than the other. If the push were bigger than the friction, there would be a resultant force and the object would speed up, not hold a steady speed. So steady motion means a balance: the applied force matches the friction perfectly.",
    microExample: "Block moving at a steady speed pulled by 40 N: friction is also 40 N, so the resultant is zero.",
    figure: "fig-04-38-mcq-constant-velocity.svg",
    check: {
      question: "A block moves at a constant velocity while being pushed. How does the pushing force compare with the friction?",
      answer: "They are equal. Constant velocity means a zero resultant force, so the push exactly matches the friction, neither one is larger."
    }
  },
  {
    id: "dyn-terminal-1",
    topicKey: "t3-dynamics",
    subtopic: "terminal-velocity",
    label: "Weight vanishes at terminal velocity",
    belief: "When a falling object reaches terminal velocity, its weight has become zero.",
    tell: "The student says there is no weight, or no force at all, on an object falling at terminal velocity.",
    whyItHappens: "At terminal velocity nothing seems to be changing, so students assume the forces have gone, when really they have become balanced.",
    reteach: "At terminal velocity the weight has not vanished. What happens is that the air resistance has grown until it exactly balances the weight, so the resultant force is zero. The weight is still pulling down at its full value, and the air resistance pushes up with an equal value. A zero resultant force is not the same as zero force. It just means the two forces now match.",
    microExample: "Falling at terminal velocity: weight 30 N down and air resistance 30 N up, so the resultant is zero, but the weight is still 30 N.",
    figure: "fig-04-25-terminal-velocity-graph.svg",
    check: {
      question: "At terminal velocity, what has happened to the weight of the falling object?",
      answer: "Nothing. The weight is unchanged. The air resistance has grown to equal the weight, so the resultant force is zero, but the weight still acts in full."
    }
  },
  {
    id: "dyn-terminal-2",
    topicKey: "t3-dynamics",
    subtopic: "terminal-velocity",
    label: "Still accelerating at terminal velocity",
    belief: "An object at terminal velocity is still speeding up as it falls.",
    tell: "The student says the object keeps accelerating after it reaches terminal velocity.",
    whyItHappens: "Falling is linked with speeding up, so students expect the speed to keep rising even once terminal velocity is reached.",
    reteach: "Terminal velocity is a constant velocity, so the object is not accelerating at all. On the way down the object speeds up while its weight is larger than the air resistance. Once the air resistance grows to equal the weight, the resultant force becomes zero, and by the first law the velocity stays steady. From that point the object falls at the same speed, neither speeding up nor slowing down.",
    microExample: "At terminal velocity the velocity-time graph is flat: the speed is constant, so the acceleration is 0 m/s^2.",
    figure: "fig-04-25-terminal-velocity-graph.svg",
    check: {
      question: "Is an object falling at its terminal velocity still accelerating?",
      answer: "No. Terminal velocity is a steady speed, so the acceleration is zero. The weight and the air resistance are balanced, giving a zero resultant force."
    }
  }
];
