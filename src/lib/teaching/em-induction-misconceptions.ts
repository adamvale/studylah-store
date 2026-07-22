// em-induction-misconceptions.ts
// Topic: O-Level Physics, Electromagnetic Induction (topicKey "t19-electromagnetic-induction")
// The tutor's diagnostic brain: the classic ways students go wrong in Electromagnetic
// Induction, with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 21 - Electromagnetic Induction.md
// Spoken fields (reteach, tell, check.question, check.answer) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const EM_INDUCTION_MISCONCEPTIONS: Misconception[] = [
  {
    id: "emi-changing-flux-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "electromagnetic-induction",
    label: "A stationary magnet keeps driving a current",
    belief: "A magnet resting inside a coil goes on inducing a steady current.",
    tell: "The student says the galvanometer holds a steady deflection while the magnet sits still inside the coil.",
    whyItHappens: "It feels like a magnet that is close to the coil must keep doing something, so students picture the strong field itself as the cause instead of the movement.",
    reteach: "Induction needs a changing magnetic field, not just a magnet nearby. While the magnet is moving in or out, the number of field lines through the coil is changing, and that change is what induces an e.m.f. The moment the magnet stops, the field through the coil is large but no longer changing, so the rate of change is zero and the pointer falls back to zero. A resting magnet induces nothing.",
    microExample: "Magnet still inside coil: flux is large but constant, so rate of change of flux = 0, and induced e.m.f. = 0.",
    figure: "fig-21-01-magnet-solenoid.svg",
    check: {
      question: "A magnet is pushed into a coil and then held completely still inside it. What does the galvanometer read while the magnet rests there?",
      answer: "It reads zero. A resting magnet gives no change of flux, so no e.m.f. is induced, even though the magnet is right inside the coil."
    }
  },
  {
    id: "emi-changing-flux-2",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "electromagnetic-induction",
    label: "A strong steady field induces a large e.m.f.",
    belief: "A stronger magnet always induces an e.m.f., even when nothing is moving.",
    tell: "The student credits the size of the field for the induced e.m.f. and forgets that the field has to be changing.",
    whyItHappens: "Field strength really does matter once something is moving, so students latch onto strength alone and drop the requirement that the field must change.",
    reteach: "A strong magnet only helps if the field it makes is changing. What induces an e.m.f. is the rate of change of the flux, so a powerful magnet held still gives you nothing at all. Strength raises the induced e.m.f. only when you also move the magnet, because then a stronger field means a bigger change each second. So think of it as two things working together: there must be a change, and a stronger magnet makes that change larger.",
    microExample: "Strong magnet held still: field is strong but not changing, so induced e.m.f. = 0. Move it and the strength then raises the e.m.f.",
    figure: "fig-21-02-flux-change.svg",
    check: {
      question: "Does a very strong magnet held motionless next to a coil induce an e.m.f.?",
      answer: "No. However strong the magnet is, if it is not moving the field is not changing, so no e.m.f. is induced. Strength only helps once the magnet is moving."
    }
  },
  {
    id: "emi-flux-vs-rate-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "faradays-law",
    label: "Big flux mistaken for big induced e.m.f.",
    belief: "The larger the flux linking the coil, the larger the induced e.m.f.",
    tell: "The student picks the moment of greatest flux as the moment of greatest induced e.m.f.",
    whyItHappens: "Faraday's law is about the rate of change of flux, but the words flux and rate of change of flux look alike, so the change part gets dropped.",
    reteach: "Faraday's law says the induced e.m.f. depends on how fast the flux is changing, not on how big the flux is. The e.m.f. is largest when the flux is changing quickest, and it can be zero at the very moment the flux is at its maximum, because right at a peak the flux is momentarily not changing. So always look for where the flux changes fastest, not where it is biggest.",
    microExample: "e.m.f. is largest when the flux is changing fastest, and can be zero at the instant the flux is at its maximum.",
    figure: "fig-21-02-flux-change.svg",
    check: {
      question: "Faraday's law links the induced e.m.f. to what feature of the flux?",
      answer: "To how quickly the flux is changing, the rate of change of flux. The size of the flux on its own does not set the induced e.m.f."
    }
  },
  {
    id: "emi-factors-speed-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "faradays-law",
    label: "Speed of the motion ignored",
    belief: "Moving the magnet faster or slower makes no difference to the induced e.m.f.",
    tell: "The student says a slow push and a fast push through the same coil give the same deflection.",
    whyItHappens: "Students focus on how far the magnet moves rather than how quickly, so the speed of the motion slips out of the picture.",
    reteach: "Speed matters a great deal, because the induced e.m.f. depends on how fast the flux is changing. Push the magnet in quickly and the flux changes in a short time, so the rate of change is large and the deflection is big. Push it in slowly and the same change is spread over a longer time, so the rate of change is smaller and the deflection is small. Faster motion always means a larger induced e.m.f.",
    microExample: "Same magnet, same coil: fast push gives a large deflection, slow push gives a small deflection.",
    figure: "fig-21-09-wire-between-magnets.svg",
    check: {
      question: "You move a magnet into a coil more slowly than before. What happens to the size of the induced e.m.f.?",
      answer: "It gets smaller, because the flux is now changing more gradually. Faster motion is what gives a larger induced e.m.f."
    }
  },
  {
    id: "emi-factors-turns-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "faradays-law",
    label: "Number of turns thought not to matter",
    belief: "The number of turns on the coil does not change the induced e.m.f.",
    tell: "The student says swapping to a coil with more turns leaves the deflection the same.",
    whyItHappens: "Students think of the magnet as the only active part, so the coil is treated as a passive wire whose turns do not count.",
    reteach: "The number of turns is one of the main factors that set the induced e.m.f. Each turn links the changing flux, so more turns means more flux linkage changing at once, and a larger total induced e.m.f. That is why a coil with many turns gives a bigger deflection than a single loop for the very same magnet moved the very same way. More turns, larger induced e.m.f.",
    microExample: "Same magnet moved the same way: a 200 turn coil gives a larger e.m.f. than a 50 turn coil.",
    figure: "fig-21-01-magnet-solenoid.svg",
    check: {
      question: "You replace a coil with one that has more turns and move the magnet in exactly the same way. What happens to the deflection?",
      answer: "It gets larger, because more turns link more changing flux, giving a larger induced e.m.f."
    }
  },
  {
    id: "emi-lenz-oppose-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "lenz-law",
    label: "Induced effect thought to help the motion",
    belief: "The induced current sets up a field that helps the magnet along instead of opposing it.",
    tell: "The student says the coil attracts an approaching magnet or pushes a leaving one away, aiding the motion.",
    whyItHappens: "It feels natural that the coil would cooperate with the magnet, and students have not yet connected the direction of the induced effect to energy.",
    reteach: "Lenz's law says the induced current always opposes the change that makes it. When a north pole comes towards the coil, the near end becomes an induced north pole that pushes back, resisting the approach. When the magnet leaves, the near end becomes an induced south pole that pulls back, resisting the departure. The coil never helps the motion, it always fights it, which is exactly why you must do work to keep the magnet moving.",
    microExample: "N-pole approaching: near end becomes induced N-pole and repels it. N-pole leaving: near end becomes induced S-pole and attracts it.",
    figure: "fig-21-03-lenz-law.svg",
    check: {
      question: "A north pole is pushed towards a coil. Does the coil help the magnet in or push back against it?",
      answer: "It pushes back. The near end becomes an induced north pole that repels the approaching magnet, opposing the motion."
    }
  },
  {
    id: "emi-lenz-poles-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "lenz-law",
    label: "Induced pole thought to be fixed",
    belief: "The near end of the coil shows the same pole whether the magnet approaches or leaves.",
    tell: "The student gives the same induced polarity for a magnet coming in and for the same magnet going out.",
    whyItHappens: "Students learn the approaching case first and treat that induced pole as a permanent label for that end of the coil.",
    reteach: "The induced polarity is not fixed, it flips depending on which way the flux is changing. For an approaching north pole the near end becomes a north pole to repel it, but for the same north pole leaving, the near end becomes a south pole to attract it back. Both choices obey the same rule, oppose the change, so the pole that appears simply switches when the motion reverses. That is also why the galvanometer deflects the opposite way when the magnet is pulled out.",
    microExample: "N-pole in: near end is N (repel). N-pole out: near end is S (attract). The induced pole reverses with the motion.",
    figure: "fig-21-03-lenz-law.svg",
    check: {
      question: "A north pole approaching a coil makes the near end a north pole. What does the near end become when that magnet is pulled away?",
      answer: "It becomes a south pole, so it attracts the retreating magnet and opposes it leaving. The induced pole reverses when the motion reverses."
    }
  },
  {
    id: "emi-lenz-energy-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "lenz-law",
    label: "Induced current seen as free energy",
    belief: "The induced current gives out electrical energy without any work being done.",
    tell: "The student thinks the coil could keep a magnet moving on its own and deliver electricity for nothing.",
    whyItHappens: "The energy source is hidden, so students do not notice that the work of pushing the magnet is what becomes the electrical energy.",
    reteach: "Lenz's law is really conservation of energy in action. Because the coil always opposes the motion, you have to keep doing work to push or pull the magnet, rather like working against friction. That work is drawn from the kinetic store of the moving magnet and turns into the electrical energy of the induced current. If the coil helped the motion instead, the magnet would speed up by itself and hand out energy for free, which nature does not allow. There is no free energy here.",
    microExample: "Work done pushing the magnet in = electrical energy of the induced current. Nothing is created from nothing.",
    figure: "fig-21-03-lenz-law.svg",
    check: {
      question: "Where does the electrical energy of the induced current come from when you push a magnet into a coil?",
      answer: "From the work you do pushing the magnet against the coil's opposition. That work transfers from the magnet's kinetic store into electrical energy, so no energy is free."
    }
  },
  {
    id: "emi-fleming-hand-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "fleming-right-hand-rule",
    label: "Left hand used for induction",
    belief: "Fleming's left-hand rule gives the direction of the induced current.",
    tell: "The student reaches for the left hand when finding the direction of an induced current in a moving wire.",
    whyItHappens: "The left-hand rule is met first for the motor effect, so students apply that one hand to every field, motion and current problem.",
    reteach: "There are two Fleming's rules and it is worth keeping them apart. The left hand is for the motor effect, where a current in a field feels a force. The right hand is for the generator effect, where a moving wire has a current induced in it. So for electromagnetic induction, where motion produces a current, you always use the right hand. Left for the motor that pushes, right for the generator that induces.",
    microExample: "Motor effect (force from a current): left hand. Generator effect (current from motion): right hand.",
    figure: "fig-21-05-fleming-rhr.svg",
    check: {
      question: "Which hand do you use to find the direction of the current induced in a wire that is moving through a magnetic field?",
      answer: "The right hand. Fleming's right-hand rule is for induction, while the left-hand rule is for the motor effect."
    }
  },
  {
    id: "emi-fleming-fingers-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "fleming-right-hand-rule",
    label: "Fleming's fingers assigned wrongly",
    belief: "In Fleming's right-hand rule the fingers can stand for any of field, motion and current.",
    tell: "The student swaps the roles, for example letting the first finger show the motion instead of the field.",
    whyItHappens: "Three fingers stand for three different things, and without a memory hook the labels are easy to muddle.",
    reteach: "Fix the three fingers with a steady rule on the right hand. The thumb is for motion, the way the wire moves. The first finger is for the field, pointing from north to south. The second finger is for the current, the induced current. A neat way to remember is thumb for motion, First finger for Field, and seCond finger for Current. Keep them at right angles and read each one off in turn.",
    microExample: "Right hand: thumb = motion, First finger = Field (N to S), seCond finger = Current.",
    figure: "fig-21-05-fleming-rhr.svg",
    check: {
      question: "In Fleming's right-hand rule, what does the first finger stand for?",
      answer: "The magnetic field, pointing from north to south. The thumb stands for the motion and the second finger for the induced current."
    }
  },
  {
    id: "emi-generator-maxpos-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    label: "Generator e.m.f. peak put at the wrong coil position",
    belief: "The generator's e.m.f. is greatest when the coil is vertical, its sides moving along the field lines.",
    tell: "The student marks the peak e.m.f. at the vertical position and a zero at the horizontal position, the two swapped.",
    whyItHappens: "Students do not track whether the sides are cutting field lines or sliding along them, so they guess the peak position instead of working it out.",
    reteach: "The induced e.m.f. follows how fast the coil's sides cut through the field lines. When the coil is vertical, its sides move along the field lines and cut almost none of them, so the rate of change of flux is zero and the e.m.f. is zero. When the coil is horizontal, its sides sweep straight across the field lines and cut them fastest, so the flux changes quickest and the e.m.f. is at its maximum. So the key is whether the sides are cutting lines or sliding along them.",
    microExample: "Coil vertical: sides move along the field lines, cut almost none, so e.m.f. = 0. Coil horizontal: sides cut across fastest, so e.m.f. is maximum.",
    figure: "fig-21-06-generator-output.svg",
    check: {
      question: "In a simple a.c. generator, is the induced e.m.f. zero or greatest at the instant the coil is vertical, with its sides moving along the field lines?",
      answer: "It is zero, because the sides are moving along the field lines and cutting almost none of them. The e.m.f. is greatest when the coil is horizontal and its sides cut across the field lines fastest."
    }
  },
  {
    id: "emi-generator-commutator-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    label: "a.c. generator given a split-ring commutator",
    belief: "A simple a.c. generator uses a split-ring commutator like a d.c. motor.",
    tell: "The student describes a single split ring on the generator instead of two complete slip rings.",
    whyItHappens: "The generator and the d.c. motor look alike, so the split-ring commutator from the motor gets carried across to the generator.",
    reteach: "A simple a.c. generator uses two complete slip rings, one for each end of the coil, not a split-ring commutator. A split ring is what a d.c. motor uses to flip the connections every half turn and keep the current one way. A generator wants its output to alternate, so it must not flip the connections, and that is why it keeps two full rings that stay connected to the same ends throughout. Two whole rings for alternating output, a split ring only for direct current.",
    microExample: "a.c. generator: two complete slip rings (output alternates). d.c. motor: one split-ring commutator (flips every half turn).",
    figure: "fig-21-04-ac-generator.svg",
    check: {
      question: "Does a simple a.c. generator use a split-ring commutator or two complete slip rings?",
      answer: "Two complete slip rings. A split-ring commutator belongs to a d.c. motor, where it flips the connections, but a generator needs its output to keep alternating."
    }
  },
  {
    id: "emi-generator-sliprings-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    label: "Slip rings thought to make the e.m.f.",
    belief: "The slip rings reverse the current or generate the e.m.f. themselves.",
    tell: "The student says the slip rings flip the current every half turn or that they are the source of the output.",
    whyItHappens: "The rings are the moving part you notice at the axle, so students give them the active job of making or switching the current.",
    reteach: "The e.m.f. is induced in the spinning coil as it cuts field lines, not by the rings. The slip rings have a quieter job: they keep a continuous sliding contact with the carbon brushes so the current can flow out to the outside circuit, and they stop the coil's leads from twisting up as it turns. They do not reverse anything and they do not create the e.m.f. The alternating output comes from the coil itself as its sides swap over between the poles.",
    microExample: "Slip rings: keep sliding contact and stop the leads twisting. The e.m.f. is induced in the rotating coil, not by the rings.",
    figure: "fig-21-04-ac-generator.svg",
    check: {
      question: "What is the real job of the slip rings in an a.c. generator?",
      answer: "To keep a continuous sliding contact with the brushes and stop the leads twisting. The e.m.f. is induced in the coil, and the rings do not reverse or create the current."
    }
  },
  {
    id: "emi-generator-freq-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "ac-generator",
    label: "Frequency tied to the wrong factor",
    belief: "The output frequency depends on the turns or the magnet, and spinning faster need not change it.",
    tell: "The student says adding turns raises the frequency, or that turning the coil faster leaves the frequency the same.",
    whyItHappens: "Several changes raise the peak voltage, so students assume they all act on the frequency in the same way and lose track of what sets it.",
    reteach: "The frequency of a generator is set only by how fast the coil spins, because one turn of the coil gives one cycle of output. Adding more turns or using a stronger magnet raises the peak voltage, but it does not change the frequency at all. Spinning the coil faster is the one change that does two things at once: it raises the peak voltage and it raises the frequency, since the coil now completes more turns each second. So speed sets the frequency, everything else sets only the height.",
    microExample: "More turns or stronger magnet: peak voltage up, frequency unchanged. Faster spin: peak voltage up and frequency up.",
    figure: "fig-21-06-generator-output.svg",
    check: {
      question: "You wind more turns onto a generator coil but spin it at the same speed. What happens to the frequency of the output?",
      answer: "It stays the same. Only the spinning speed sets the frequency. More turns raise the peak voltage but leave the frequency unchanged."
    }
  },
  {
    id: "emi-transformer-dc-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    label: "Transformer thought to work on d.c.",
    belief: "A transformer can step a steady direct-current voltage up or down.",
    tell: "The student expects an output when a transformer is joined to a battery or other steady d.c. supply.",
    whyItHappens: "A transformer looks like it should change any voltage put across it, so the need for an alternating supply is easy to miss.",
    reteach: "A transformer only works on an alternating supply. It relies on a changing magnetic field in the core to induce an e.m.f. in the secondary coil. An alternating current keeps reversing, so its field is always changing and induction can happen. A steady direct current gives a steady field that does not change, so no e.m.f. is induced in the secondary and there is no output. Connect a transformer to a battery and the secondary stays dead. Alternating supply only.",
    microExample: "a.c. supply: field keeps changing, so the secondary has an induced e.m.f. Steady d.c. supply: field constant, so secondary output = 0.",
    figure: "fig-21-07-transformer.svg",
    check: {
      question: "What happens if you connect a transformer to a steady direct-current supply such as a battery?",
      answer: "There is no output. A steady direct current gives an unchanging field, so nothing is induced in the secondary. A transformer needs an alternating supply."
    }
  },
  {
    id: "emi-transformer-ratio-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    label: "Turns ratio used upside down",
    belief: "More turns on the secondary give a lower secondary voltage.",
    tell: "The student pairs the larger voltage with the smaller coil, flipping the turns ratio in the calculation.",
    whyItHappens: "The two ratios in the transformer equation can be written either way up, so students match voltage to turns in the wrong order.",
    reteach: "Keep the two sides matched: the coil with more turns is the coil with the higher voltage. The rule is that the secondary voltage over the primary voltage equals the secondary turns over the primary turns. So if the secondary has more turns than the primary, its voltage is higher, and that is a step-up transformer. Line up secondary with secondary and primary with primary, and the voltage always follows the turns on the same side.",
    microExample: "V_s / V_p = N_s / N_p. So N_s = 2 N_p gives V_s = 2 V_p (more turns, higher voltage).",
    figure: "fig-21-07-transformer.svg",
    check: {
      question: "If the secondary coil has more turns than the primary, is its voltage higher or lower than the primary voltage?",
      answer: "Higher. The voltage follows the turns on the same side, so more secondary turns give a higher secondary voltage. That is a step-up transformer."
    }
  },
  {
    id: "emi-transformer-power-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    label: "Step-up thought to increase power",
    belief: "A step-up transformer raises the power because it raises the voltage.",
    tell: "The student expects more power out of the secondary than goes into the primary whenever the voltage is stepped up.",
    whyItHappens: "Higher voltage sounds like more energy, so students read a step-up in voltage as a step-up in power.",
    reteach: "A transformer changes voltage and current but it cannot change the power. For an ideal transformer the power taken from the secondary equals the power delivered to the primary, because energy is conserved. So when a step-up transformer raises the voltage, it must lower the current by the same factor to keep the power the same. You never get more power out than you put in, and there is no extra energy created along the way.",
    microExample: "Ideal transformer: V_p I_p = V_s I_s. If V_s is doubled, I_s is halved, so the power is unchanged.",
    figure: "fig-21-10-transformer-circuit.svg",
    check: {
      question: "An ideal step-up transformer doubles the voltage. What happens to the power delivered?",
      answer: "It stays the same. A transformer cannot create power, so doubling the voltage means the current is halved and the power is unchanged."
    }
  },
  {
    id: "emi-transformer-vi-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    label: "Voltage and current thought to rise together",
    belief: "A step-up transformer raises the voltage and the current at the same time.",
    tell: "The student says a bigger secondary voltage comes with a bigger secondary current too.",
    whyItHappens: "In simple circuits more voltage often means more current, so students carry that habit into transformers where the power is fixed.",
    reteach: "In an ideal transformer the voltage and the current move in opposite directions, because their product, the power, stays fixed. A step-up transformer raises the voltage, so it must lower the current in the same proportion. A step-down transformer does the reverse: it lowers the voltage and so raises the current. Whenever one goes up, the other comes down, which is how the power on both sides stays equal.",
    microExample: "Step-up: V_s > V_p, so I_s < I_p. Step-down: V_s < V_p, so I_s > I_p. Their product stays the same.",
    figure: "fig-21-10-transformer-circuit.svg",
    check: {
      question: "In an ideal step-up transformer, how does the secondary current compare with the primary current?",
      answer: "It is smaller. Raising the voltage means lowering the current by the same factor, so that the power stays the same on both sides."
    }
  },
  {
    id: "emi-transformer-core-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "transformer",
    label: "Reason for laminating the core misread",
    belief: "The soft-iron core is laminated to make it stronger or to carry the current between the coils.",
    tell: "The student explains the layered core as adding strength or as a wire path, not as a way to cut energy loss.",
    whyItHappens: "Lamination looks like a build quality choice, and students do not connect the thin sheets to the eddy currents they are meant to limit.",
    reteach: "The core is laminated to reduce energy loss, not to strengthen it. The changing field also induces little swirling currents inside the iron itself, called eddy currents, and these waste energy by heating the core. Building the core from thin sheets coated with insulation breaks up the paths those currents can take, keeping them small and cutting the heating loss. Soft iron is chosen as well because it magnetises and demagnetises easily as the field reverses. Also note there is no direct electrical connection through the core, the link between the coils is magnetic.",
    microExample: "Solid core: large eddy currents heat the iron and waste energy. Laminated core: thin insulated sheets keep eddy currents small.",
    figure: "fig-21-07-transformer.svg",
    check: {
      question: "Why is the soft-iron core of a transformer built from thin laminated sheets?",
      answer: "To keep the eddy currents small, so less energy is wasted heating the core. It is not for strength, and the core does not carry current between the coils."
    }
  },
  {
    id: "emi-transmission-current-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "power-transmission",
    label: "Power sent at high current",
    belief: "Electrical power is carried along the grid at a high current to deliver more energy.",
    tell: "The student says the cables run at high current, and treats high current as the way to move a lot of power.",
    whyItHappens: "More current sounds like more delivery, and students overlook that the heat wasted in the cables grows with the current.",
    reteach: "Power is transmitted at high voltage and low current, which is the opposite of what many expect. The power lost as heat in a cable is the current squared times the resistance, so a large current wastes a great deal of energy on the way. For a fixed amount of power, sending it at a high voltage lets the current be small, and a small current keeps the heating loss down. A step-up transformer at the power station raises the voltage and lowers the current for the long journey.",
    microExample: "Same power P = I V: raising V lets I drop. Loss = I^2 R, so the smaller current wastes far less heat.",
    figure: "fig-21-08-power-transmission.svg",
    check: {
      question: "Is grid electricity carried along the cables at high current or low current?",
      answer: "At low current, together with high voltage. A high current would waste a lot of energy heating the cables, so the current is kept small."
    }
  },
  {
    id: "emi-transmission-why-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "power-transmission",
    label: "High voltage misread as speed or safety",
    belief: "Power is sent at high voltage to make the electricity travel faster or to make it safer.",
    tell: "The student explains high-voltage transmission by speed or safety rather than by cutting the heat lost in the cables.",
    whyItHappens: "High voltage sounds dramatic, so students reach for speed or safety instead of the real aim of reducing wasted energy.",
    reteach: "The reason for high-voltage transmission is to cut the energy wasted as heat in the cables. High voltage lets the same power travel at a lower current, and since the loss is the current squared times the resistance, a smaller current means much less heat wasted. It is not about speed, and high voltage is in fact more dangerous, which is why a step-down transformer lowers it again to a safe level before it reaches homes. The single aim is to save energy in transmission.",
    microExample: "Loss = I^2 R. High V gives low I, so the wasted heat drops. Speed and safety are not the reason.",
    figure: "fig-21-08-power-transmission.svg",
    check: {
      question: "Why is electrical power transmitted at high voltage across the grid?",
      answer: "To lower the current so that less energy is wasted as heat in the cables. It is not to make the electricity travel faster or to make it safer."
    }
  },
  {
    id: "emi-transmission-square-1",
    topicKey: "t19-electromagnetic-induction",
    subtopic: "power-transmission",
    label: "Loss thought to fall in step with the current",
    belief: "Halving the current in a cable halves the power lost as heat.",
    tell: "The student scales the heating loss straight in line with the current, missing the squared relationship.",
    whyItHappens: "Many formulas are linear, so students expect the loss to track the current one for one and forget it depends on the current squared.",
    reteach: "The power lost as heat is the current squared times the resistance, so it depends on the square of the current, not the current itself. That squared term is powerful: halve the current and the loss falls to a quarter, not to a half. Cut the current to a tenth and the loss falls to a hundredth. This is exactly why raising the voltage to lower the current saves so much energy, because each drop in current is multiplied by itself in the loss.",
    microExample: "Loss = I^2 R. Half the current: loss = (1/2)^2 = 1/4. One tenth the current: loss = (1/10)^2 = 1/100.",
    figure: "fig-21-08-power-transmission.svg",
    check: {
      question: "If the current in a transmission cable is halved, what happens to the power lost as heat?",
      answer: "It falls to a quarter, not to a half, because the loss depends on the current squared. Halving the current squares to one quarter of the loss."
    }
  }
];
