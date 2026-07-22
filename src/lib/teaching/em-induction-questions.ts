// em-induction-questions.ts
// Teaching question bank for O-Level Physics, Electromagnetic Induction
// (topicKey "t19-electromagnetic-induction"). Every wrong option maps to the
// misconception it reveals (see em-induction-misconceptions.ts), so the tutor can
// respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 21 - Electromagnetic Induction.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const EM_INDUCTION_QUESTIONS: TeachQuestion[] = [
  {
    id: "emi-q-01",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "electromagnetic-induction",
    stem: "A bar magnet is pushed into a coil joined to a galvanometer and then held completely still inside it. What does the galvanometer show while the magnet rests there?",
    figure: "fig-21-01-magnet-solenoid.svg",
    options: [
      "The pointer stays at zero.",
      "A steady current keeps flowing while the magnet is inside.",
      "A large steady deflection, because the field inside is strong.",
      "A large deflection, because the flux through the coil is large."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-changing-flux-1", 2: "emi-changing-flux-2", 3: "emi-flux-vs-rate-1" },
    walkthrough: [
      "Induction needs the magnetic field through the coil to be changing.",
      "While the magnet was moving in, the flux was changing, so a current flowed.",
      "Once the magnet is held still, the flux is large but no longer changing.",
      "A zero rate of change means no induced e.m.f., so the pointer sits at zero."
    ],
    explain: "A resting magnet induces nothing, however close or strong it is. What drives the current is the change in flux as the magnet moves, so the deflection happens only while the magnet is moving in or out. Held still, the field through the coil is steady, the rate of change is zero, and the pointer falls back to zero."
  },
  {
    id: "emi-q-02",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "electromagnetic-induction",
    stem: "Which of these is needed for an e.m.f. to be induced in a coil?",
    figure: "fig-21-02-flux-change.svg",
    options: [
      "A strong but steady magnetic field through the coil.",
      "A changing magnetic flux through the coil.",
      "A large but steady flux linking the coil.",
      "A steady direct current in a nearby coil."
    ],
    correct: 1,
    distractorMisconceptions: { 0: "emi-changing-flux-2", 2: "emi-flux-vs-rate-1", 3: "emi-changing-flux-1" },
    walkthrough: [
      "Faraday found that it is the changing field, not the field itself, that induces an e.m.f.",
      "A strong but steady field is not changing, so it induces nothing.",
      "A large but steady flux is not changing either, so it also induces nothing.",
      "The only option that involves a change of flux is the correct one."
    ],
    explain: "An e.m.f. is induced only when the flux linking the coil is changing. A strong steady field and a large steady flux both fail, because nothing about them is changing. A steady direct current in a nearby coil gives an unchanging field too. It has to be a change of flux, such as a moving magnet or an alternating current, to induce an e.m.f."
  },
  {
    id: "emi-q-03",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "faradays-law",
    stem: "A pupil pushes a magnet into a coil and the pointer deflects. Which change would make the deflection larger?",
    figure: "fig-21-01-magnet-solenoid.svg",
    options: [
      "Push the magnet in faster.",
      "Push the magnet in more slowly.",
      "Hold the magnet still inside the coil.",
      "Use a coil with fewer turns."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-factors-speed-1", 2: "emi-changing-flux-1", 3: "emi-factors-turns-1" },
    walkthrough: [
      "The induced e.m.f. depends on how fast the flux is changing.",
      "Pushing the magnet in faster changes the flux in a shorter time.",
      "That gives a larger rate of change and a bigger deflection.",
      "Slowing down, stopping, or using fewer turns would all make it smaller, not larger."
    ],
    explain: "Faster motion gives a larger induced e.m.f., because the flux changes more quickly. Pushing the magnet in more slowly spreads the same change over more time, which reduces it. Holding it still gives no change at all. Using fewer turns links less changing flux, so that also lowers the deflection."
  },
  {
    id: "emi-q-04",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "faradays-law",
    stem: "A magnet is moved into a coil in the same way as before, but the coil is swapped for one with more turns. What happens to the deflection?",
    figure: null,
    options: [
      "It gets larger.",
      "It stays the same, because the number of turns does not change the induced e.m.f.",
      "It gets smaller, because more turns add more wire.",
      "It stays the same, unless the magnet is also moved faster."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-factors-turns-1", 2: "emi-factors-turns-1", 3: "emi-factors-turns-1" },
    walkthrough: [
      "The number of turns is one of the factors that set the induced e.m.f.",
      "Each turn links the changing flux from the magnet.",
      "More turns means more flux linkage changing at once.",
      "So a coil with more turns gives a larger deflection for the same magnet moved the same way."
    ],
    explain: "More turns gives a larger induced e.m.f., because each extra turn adds to the flux linkage that is changing. The motion has not changed, but the coil now links the change many more times over, so the deflection grows. The number of turns is a real factor here, not something that can be ignored."
  },
  {
    id: "emi-q-05",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "faradays-law",
    stem: "The same magnet is moved into the same coil, but more slowly than before. What happens to the induced e.m.f.?",
    figure: "fig-21-09-wire-between-magnets.svg",
    options: [
      "It gets smaller.",
      "It stays the same, because speed does not affect the induced e.m.f.",
      "It gets larger.",
      "It drops to zero as soon as the magnet slows down."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-factors-speed-1", 2: "emi-factors-speed-1", 3: "emi-factors-speed-1" },
    walkthrough: [
      "The induced e.m.f. depends on how fast the flux is changing.",
      "Moving the magnet more slowly spreads the same change over a longer time.",
      "A slower change means a smaller rate of change of flux.",
      "So the induced e.m.f. gets smaller, though it is not zero as long as the magnet is still moving."
    ],
    explain: "Slower motion gives a smaller induced e.m.f., because the flux changes more gradually. The magnet and coil are the same, so the only thing that changed is the speed, and speed matters. It does not fall to zero while the magnet keeps moving, it just shrinks. Only stopping the magnet would give a zero e.m.f."
  },
  {
    id: "emi-q-06",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "lenz-law",
    stem: "The N-pole of a magnet is pushed towards a coil. Which pole is induced at the end of the coil nearest the magnet?",
    figure: "fig-21-03-lenz-law.svg",
    options: [
      "An N-pole, which repels the approaching magnet.",
      "An S-pole, which attracts the magnet and helps it in.",
      "An S-pole, so the coil gives out electrical energy for free.",
      "Whatever pole that end always shows, however the magnet moves."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-lenz-oppose-1", 2: "emi-lenz-energy-1", 3: "emi-lenz-poles-1" },
    walkthrough: [
      "Lenz's law says the induced current opposes the change that makes it.",
      "A north pole is approaching, so the coil must try to push it back.",
      "To push back, the near end has to become an induced north pole.",
      "Two like poles repel, which is how the coil opposes the approach."
    ],
    explain: "The near end becomes an induced north pole, so it repels the incoming magnet and opposes its motion. It never attracts and helps the magnet in, because that would hand out energy for free, which is not allowed. The induced pole is not a fixed label either, it appears as a north pole here because the magnet is coming closer."
  },
  {
    id: "emi-q-07",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "lenz-law",
    stem: "That same N-pole is now pulled away from the coil. Which pole is induced at the near end?",
    figure: "fig-21-03-lenz-law.svg",
    options: [
      "An S-pole, which attracts the magnet and opposes it leaving.",
      "An N-pole, which pushes the magnet away and speeds it up.",
      "An N-pole, the same as when the magnet approached.",
      "An N-pole, which lets the magnet leave with no resistance."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-lenz-oppose-1", 2: "emi-lenz-poles-1", 3: "emi-lenz-oppose-1" },
    walkthrough: [
      "The magnet is now leaving, so the change is the flux falling.",
      "Lenz's law says the coil opposes this, so it tries to hold the magnet back.",
      "To pull the retreating magnet back, the near end becomes an induced south pole.",
      "Unlike poles attract, which is how the coil opposes the magnet leaving."
    ],
    explain: "When the magnet leaves, the near end becomes an induced south pole, so it attracts the magnet and opposes it going. The induced pole reversed from when the magnet approached, which is why the galvanometer deflects the other way. It never speeds the magnet up or lets it leave freely, because the coil always opposes the change."
  },
  {
    id: "emi-q-08",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "lenz-law",
    stem: "Why does the induced current always oppose the change that produces it?",
    figure: null,
    options: [
      "Because energy must be conserved, so work is done against the opposition.",
      "Because the induced current gives free electrical energy with no work done.",
      "Because the coil always attracts a magnet, whichever way it moves.",
      "Because the induced effect speeds the magnet up on its own."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-lenz-energy-1", 2: "emi-lenz-oppose-1", 3: "emi-lenz-energy-1" },
    walkthrough: [
      "Lenz's law is really conservation of energy in action.",
      "Because the coil opposes the motion, you must do work to keep the magnet moving.",
      "That work is drawn from the moving magnet and becomes the electrical energy of the current.",
      "If the coil helped the motion instead, energy would appear from nothing, which nature forbids."
    ],
    explain: "The induced effect opposes the change so that energy is conserved. You have to do work to push the magnet against the coil's opposition, and that work becomes the electrical energy of the induced current. If the coil helped the magnet along, it would speed up by itself and give out free energy, so the opposition is what keeps the books balanced."
  },
  {
    id: "emi-q-09",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "fleming-right-hand-rule",
    stem: "Which rule gives the direction of the current induced in a wire that is moved through a magnetic field?",
    figure: "fig-21-05-fleming-rhr.svg",
    options: [
      "Fleming's right-hand rule.",
      "Fleming's left-hand rule.",
      "The left-hand rule, the same one used for the motor effect.",
      "Fleming's left hand, with the thumb showing the current."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-fleming-hand-1", 2: "emi-fleming-hand-1", 3: "emi-fleming-hand-1" },
    walkthrough: [
      "There are two Fleming's rules, one for each effect.",
      "The left hand is for the motor effect, where a current in a field feels a force.",
      "The right hand is for the generator effect, where motion induces a current.",
      "This is induction, motion making a current, so you use the right hand."
    ],
    explain: "Induction uses Fleming's right-hand rule, because here the motion of the wire is what produces the current. The left-hand rule is for the motor effect, where a current already flowing feels a force. A quick way to keep them apart is left for the motor that pushes, right for the generator that induces."
  },
  {
    id: "emi-q-10",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "fleming-right-hand-rule",
    stem: "Using Fleming's right-hand rule, what does the first finger point along?",
    figure: "fig-21-05-fleming-rhr.svg",
    options: [
      "The direction of the magnetic field, from N to S.",
      "The direction in which the wire moves.",
      "The direction of the induced current.",
      "The direction of the force on the magnet."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-fleming-fingers-1", 2: "emi-fleming-fingers-1", 3: "emi-fleming-fingers-1" },
    walkthrough: [
      "Hold the thumb and first two fingers of the right hand at right angles.",
      "The thumb stands for the motion of the wire.",
      "The first finger stands for the field, pointing from north to south.",
      "The second finger stands for the induced current."
    ],
    explain: "The first finger points along the field, from north to south. A neat memory hook is thumb for motion, First finger for Field, and seCond finger for Current. The motion goes on the thumb and the current on the second finger, so mixing those onto the first finger is the usual slip."
  },
  {
    id: "emi-q-11",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    stem: "In a simple a.c. generator, the induced e.m.f. is zero at the instant the coil is which of these?",
    figure: "fig-21-06-generator-output.svg",
    options: [
      "Vertical, with its sides moving along the field lines.",
      "Horizontal, with its sides cutting across the field lines fastest.",
      "Horizontal, where its sides sweep straight across the field.",
      "At the position where its sides cut the most field lines."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-generator-maxpos-1", 2: "emi-generator-maxpos-1", 3: "emi-generator-maxpos-1" },
    walkthrough: [
      "The e.m.f. depends on how fast the sides cut through the field lines.",
      "When the coil is vertical, its sides move along the field lines and cut almost none.",
      "Cutting no lines means the rate of change of flux is zero.",
      "So the induced e.m.f. is zero at that instant."
    ],
    explain: "The e.m.f. is zero when the coil is vertical, because its sides slide along the field lines and cut hardly any of them. The three horizontal or fastest-cutting positions are where the e.m.f. is at its maximum, not zero, so they are the swapped answers. Always check whether the sides are cutting lines or sliding along them."
  },
  {
    id: "emi-q-12",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    stem: "In a simple a.c. generator, the induced e.m.f. is greatest at the instant the coil is which of these?",
    figure: "fig-21-06-generator-output.svg",
    options: [
      "Horizontal, with its sides cutting across the field lines fastest.",
      "Vertical, with its sides moving along the field lines.",
      "Vertical, so its sides slide along the field.",
      "At the position where its sides cut the fewest field lines."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-generator-maxpos-1", 2: "emi-generator-maxpos-1", 3: "emi-generator-maxpos-1" },
    walkthrough: [
      "The e.m.f. is largest when the sides cut field lines fastest.",
      "When the coil is horizontal, its sides sweep straight across the field lines.",
      "That gives the greatest rate of change of flux.",
      "So the induced e.m.f. is at its maximum there."
    ],
    explain: "The e.m.f. is greatest when the coil is horizontal, because its sides cut across the field lines fastest and the flux changes quickest. The vertical positions, where the sides slide along the lines and cut the fewest, are where the e.m.f. is zero, so those are the swapped answers."
  },
  {
    id: "emi-q-13",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    stem: "What is the job of the slip rings in a simple a.c. generator?",
    figure: "fig-21-04-ac-generator.svg",
    options: [
      "To keep a continuous sliding contact so the leads do not twist as the coil turns.",
      "To reverse the current in the coil every half turn.",
      "To act as a split-ring commutator that flips the output.",
      "To generate the e.m.f. as the coil spins."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-generator-sliprings-1", 2: "emi-generator-commutator-1", 3: "emi-generator-sliprings-1" },
    walkthrough: [
      "The e.m.f. is induced in the spinning coil as it cuts field lines.",
      "The slip rings keep a sliding contact with the carbon brushes.",
      "This lets the current flow out to the external circuit as the coil turns.",
      "They also stop the coil's leads from twisting up."
    ],
    explain: "The slip rings simply keep a continuous sliding contact and stop the leads twisting. They do not reverse the current, and they do not generate the e.m.f., which is induced in the coil itself. A split-ring commutator that flips the output belongs to a d.c. motor, not an a.c. generator."
  },
  {
    id: "emi-q-14",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    stem: "How does the ring arrangement of a simple a.c. generator differ from that of a d.c. motor?",
    figure: "fig-21-04-ac-generator.svg",
    options: [
      "It uses two complete slip rings instead of a split-ring commutator.",
      "It uses a single split-ring commutator to reverse the connections.",
      "It uses a split ring so the output never reverses.",
      "It uses no rings, because an a.c. generator does not need any."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-generator-commutator-1", 2: "emi-generator-commutator-1", 3: "emi-generator-commutator-1" },
    walkthrough: [
      "A d.c. motor uses a split-ring commutator that flips the connections every half turn.",
      "An a.c. generator needs its output to keep alternating.",
      "So it must not flip the connections.",
      "It uses two complete slip rings, one for each end of the coil, that stay connected throughout."
    ],
    explain: "A simple a.c. generator uses two complete slip rings, not a split-ring commutator. The split ring is what a d.c. motor uses to flip the connections and keep the current one way. A generator wants an alternating output, so it keeps two whole rings that never flip the connections."
  },
  {
    id: "emi-q-15",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    stem: "A generator coil is rewound with twice as many turns and spun at the same speed. What happens to the output?",
    figure: "fig-21-06-generator-output.svg",
    options: [
      "The peak voltage rises, but the frequency stays the same.",
      "Both the peak voltage and the frequency rise.",
      "The frequency rises, but the peak voltage stays the same.",
      "The frequency doubles, because there are twice as many turns."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-generator-freq-1", 2: "emi-generator-freq-1", 3: "emi-generator-freq-1" },
    walkthrough: [
      "The frequency of the output is set only by how fast the coil spins.",
      "The coil is spun at the same speed, so the frequency does not change.",
      "More turns link more changing flux, which raises the peak voltage.",
      "So the peak voltage rises while the frequency stays the same."
    ],
    explain: "Adding turns raises the peak voltage but leaves the frequency unchanged, because frequency depends only on the spinning speed, which was kept the same. Each turn of the coil still gives one cycle of output, so more turns cannot change how many cycles happen each second. Only spinning faster would raise the frequency."
  },
  {
    id: "emi-q-16",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    stem: "The coil of an a.c. generator is now spun faster. What happens to the output?",
    figure: "fig-21-06-generator-output.svg",
    options: [
      "Both the peak voltage and the frequency rise.",
      "The peak voltage rises, but the frequency stays the same.",
      "The frequency rises, but the peak voltage stays the same.",
      "Neither changes, since only the magnet sets them."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-generator-freq-1", 2: "emi-generator-freq-1", 3: "emi-generator-freq-1" },
    walkthrough: [
      "Spinning faster is the one change that does two things at once.",
      "The coil cuts the field lines more quickly, so the peak voltage rises.",
      "The coil also completes more turns each second, so the frequency rises.",
      "Both the peak voltage and the frequency go up together."
    ],
    explain: "Spinning faster raises both the peak voltage and the frequency. The sides cut field lines more quickly, which lifts the peak voltage, and the coil makes more turns each second, which raises the frequency. Speed is the factor that sets the frequency, so it is the only change that moves both at once."
  },
  {
    id: "emi-q-17",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    stem: "A transformer is connected to a steady 12 V direct-current battery. What is the output at the secondary?",
    figure: "fig-21-07-transformer.svg",
    options: [
      "There is no output, because a steady current gives no changing flux.",
      "A steady direct-current output at a changed voltage.",
      "The same 12 V as the input, unchanged.",
      "A larger direct voltage, since it can step the voltage up."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transformer-dc-1", 2: "emi-transformer-dc-1", 3: "emi-transformer-dc-1" },
    walkthrough: [
      "A transformer works by a changing magnetic field in the core.",
      "A steady direct current gives a steady field that does not change.",
      "With no changing flux, no e.m.f. is induced in the secondary coil.",
      "So there is no output at all from a direct-current supply."
    ],
    explain: "There is no output, because a transformer needs an alternating supply. A steady direct current makes a steady field, and induction only happens when the field is changing. Connect a transformer to a battery and the secondary stays dead, whichever way the turns are wound."
  },
  {
    id: "emi-q-18",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    stem: "A 240 V a.c. supply is connected to the primary of a transformer with 1200 turns on the primary and 60 turns on the secondary. What is the output voltage?",
    figure: "fig-21-07-transformer.svg",
    options: ["12 V", "4800 V", "0.05 V", "15 V"],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transformer-ratio-1", 2: "emi-transformer-ratio-1", 3: "emi-transformer-ratio-1" },
    walkthrough: [
      "The secondary voltage over the primary voltage equals the secondary turns over the primary turns.",
      "The secondary has 60 turns and the primary has 1200 turns, a ratio of one to twenty.",
      "So the secondary voltage is the primary voltage divided by twenty.",
      "That is 240 divided by 20, which is 12 volts."
    ],
    explain: "The voltage follows the turns on the same side, so with 60 secondary turns against 1200 primary turns the voltage is stepped down by a factor of twenty, from 240 volts to 12 volts. The value 4800 comes from flipping the ratio the wrong way up, and the other answers come from using the turns without the voltage correctly."
  },
  {
    id: "emi-q-19",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    stem: "An ideal step-up transformer doubles the voltage from the primary to the secondary. What happens to the power?",
    figure: "fig-21-10-transformer-circuit.svg",
    options: [
      "It stays the same, because a transformer cannot create power.",
      "It doubles, because the voltage doubled.",
      "It rises, giving extra energy for free.",
      "It rises, because higher voltage always means more power."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transformer-power-1", 2: "emi-transformer-power-1", 3: "emi-transformer-power-1" },
    walkthrough: [
      "A transformer changes voltage and current, but it cannot change the power.",
      "For an ideal transformer the power out equals the power in.",
      "So doubling the voltage must be matched by halving the current.",
      "The power stays the same across the transformer."
    ],
    explain: "The power stays the same, because energy is conserved and a transformer cannot make power. When a step-up transformer doubles the voltage, the current is halved to match, so their product, the power, is unchanged. You never get more power out than you put in, and no free energy appears along the way."
  },
  {
    id: "emi-q-20",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    stem: "In an ideal step-up transformer, how does the secondary current compare with the primary current?",
    figure: "fig-21-10-transformer-circuit.svg",
    options: [
      "It is smaller, because the power stays the same.",
      "It is larger, because a step-up raises everything together.",
      "It is the same as the primary current.",
      "It is larger, because more voltage means more current."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transformer-vi-1", 2: "emi-transformer-vi-1", 3: "emi-transformer-vi-1" },
    walkthrough: [
      "In an ideal transformer the power on both sides is equal.",
      "A step-up transformer raises the voltage.",
      "To keep the power the same, the current must come down.",
      "So the secondary current is smaller than the primary current."
    ],
    explain: "The secondary current is smaller, because voltage and current move in opposite directions when the power is fixed. A step-up transformer raises the voltage, so it lowers the current by the same factor. They do not both rise together, because that would need the power to grow, which a transformer cannot do."
  },
  {
    id: "emi-q-21",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    stem: "A step-down transformer takes 230 V a.c. and gives 46 V. The primary current is 1.2 A and the transformer is ideal. What is the secondary current?",
    figure: "fig-21-10-transformer-circuit.svg",
    options: ["6.0 A", "0.24 A", "1.2 A", "5.0 A"],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transformer-vi-1", 2: "emi-transformer-vi-1", 3: "emi-transformer-power-1" },
    walkthrough: [
      "For an ideal transformer, the primary voltage times the primary current equals the secondary voltage times the secondary current.",
      "So the secondary current is the primary power divided by the secondary voltage.",
      "The primary power is 230 volts times 1.2 amps, which is 276 watts.",
      "Dividing 276 watts by 46 volts gives 6.0 amps."
    ],
    explain: "This is a step-down transformer, so the voltage falls and the current rises to keep the power the same. The primary power is 230 times 1.2, which is 276 watts, and dividing by the 46 volt output gives a secondary current of 6.0 amps. Answers below the primary current miss that a step-down raises the current, and 5.0 comes from using the voltage ratio while forgetting the primary current."
  },
  {
    id: "emi-q-22",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    stem: "Why is the soft-iron core of a transformer built from thin laminated sheets?",
    figure: "fig-21-07-transformer.svg",
    options: [
      "To reduce the eddy currents that waste energy heating the core.",
      "To make the core stronger and heavier.",
      "To let the core carry the current from one coil to the other.",
      "To increase the resistance of the coils."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transformer-core-1", 2: "emi-transformer-core-1", 3: "emi-transformer-core-1" },
    walkthrough: [
      "The changing field induces small swirling currents inside the iron, called eddy currents.",
      "These eddy currents waste energy by heating the core.",
      "Building the core from thin insulated sheets breaks up the paths they can take.",
      "That keeps the eddy currents small and cuts the heating loss."
    ],
    explain: "The core is laminated to keep eddy currents small, so less energy is wasted heating it. It is not for strength or weight, and the core does not carry current between the coils, because the two coils are linked magnetically, not by a wire. Laminating simply breaks up the loops the wasteful eddy currents would flow in."
  },
  {
    id: "emi-q-23",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "power-transmission",
    stem: "Why is electrical power transmitted across the grid at high voltage?",
    figure: "fig-21-08-power-transmission.svg",
    options: [
      "To lower the current, cutting the energy wasted as heat in the cables.",
      "To push a larger current along and deliver more power.",
      "To make the electricity travel faster along the cables.",
      "To make the electricity safer to touch."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transmission-current-1", 2: "emi-transmission-why-1", 3: "emi-transmission-why-1" },
    walkthrough: [
      "The power lost as heat in a cable is the current squared times the resistance.",
      "For a fixed power, sending it at a higher voltage lets the current be smaller.",
      "A smaller current wastes far less energy as heat.",
      "So power is sent at high voltage and low current to save energy."
    ],
    explain: "High voltage lets the same power travel at a lower current, and since the heat loss depends on the current squared, a smaller current wastes much less energy. It is not about speed, and high voltage is actually more dangerous, which is why it is stepped down again before reaching homes. The single aim is to cut the energy lost in the cables."
  },
  {
    id: "emi-q-24",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "power-transmission",
    stem: "A cable of total resistance 0.5 ohm carries 8 kW of power. When the power is sent at 4000 V, how much power is lost as heat in the cable?",
    figure: "fig-21-08-power-transmission.svg",
    options: ["2 W", "200 W", "1 W", "4 W"],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transmission-current-1", 2: "emi-transmission-square-1", 3: "emi-transmission-square-1" },
    walkthrough: [
      "First find the current from the power and the voltage.",
      "The current is 8000 watts divided by 4000 volts, which is 2 amps.",
      "The power lost is the current squared times the resistance.",
      "That is 2 squared times 0.5, which is 4 times 0.5, giving 2 watts."
    ],
    explain: "At 4000 volts the current is only 2 amps, so the loss is 2 squared times 0.5, which is 2 watts. The value 200 comes from using the much larger current you would get at a low voltage, and the values 1 and 4 come from forgetting to square the current or from dropping the resistance. The loss depends on the current squared times the resistance."
  },
  {
    id: "emi-q-25",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "power-transmission",
    stem: "Raising the transmission voltage halves the current in a cable. What happens to the power lost as heat?",
    figure: "fig-21-08-power-transmission.svg",
    options: [
      "It falls to a quarter, because the loss depends on the current squared.",
      "It falls to a half, in step with the current.",
      "It stays the same, because the power delivered is unchanged.",
      "It doubles, because the higher voltage makes more heat."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-transmission-square-1", 2: "emi-transmission-square-1", 3: "emi-transmission-why-1" },
    walkthrough: [
      "The power lost is the current squared times the resistance.",
      "So the loss depends on the square of the current, not the current itself.",
      "Halving the current gives a half times a half in the loss.",
      "A half times a half is a quarter, so the loss falls to a quarter."
    ],
    explain: "The loss falls to a quarter, because it depends on the current squared. Halving the current squares to one quarter, not one half, which is why raising the voltage to lower the current saves so much energy. The loss does not stay the same or rise, because it is tied to the current in the cable, not to the transmission voltage directly."
  },
  {
    id: "emi-q-26",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    stem: "As the coil of an a.c. generator spins, why is an e.m.f. induced in it?",
    figure: "fig-21-04-ac-generator.svg",
    options: [
      "Because it cuts field lines, so the flux linking it keeps changing.",
      "Because it sits in a strong magnetic field.",
      "Because the flux through it stays large and steady.",
      "Because the slip rings generate the e.m.f. themselves."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "emi-changing-flux-2", 2: "emi-flux-vs-rate-1", 3: "emi-generator-sliprings-1" },
    walkthrough: [
      "As the coil turns, its sides sweep across the magnetic field lines.",
      "Cutting field lines changes the flux linking the coil.",
      "A changing flux induces an e.m.f. by Faraday's law.",
      "So the turning motion is what produces the e.m.f., not the rings."
    ],
    explain: "The e.m.f. is induced because the spinning coil cuts field lines, so the flux linking it keeps changing. Simply sitting in a strong field is not enough, and a large steady flux induces nothing, because neither is changing. The slip rings only carry the current out, they do not generate the e.m.f."
  }
];
