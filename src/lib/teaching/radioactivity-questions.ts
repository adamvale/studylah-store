// radioactivity-questions.ts
// Teaching question bank for O-Level Physics, Radioactivity (topicKey "t20-radioactivity").
// Every wrong option maps to the misconception it reveals (see radioactivity-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / 07-Physics-Materials / Physics-Study-Notes / Chapter 22 - Radioactivity.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript and nuclide notation.

import type { TeachQuestion } from "@/lib/teaching/types";

export const RADIOACTIVITY_QUESTIONS: TeachQuestion[] = [
  {
    id: "rad-q-01",
    topicKey: "t20-radioactivity",
    subtopic: "atomic-structure",
    stem: "Where is nearly all of the mass of an atom found?",
    figure: "fig-22-01-atom-structure.svg",
    options: [
      "Almost entirely in the nucleus.",
      "Spread evenly through the whole atom.",
      "Mostly in the electron shells.",
      "Shared equally by the protons, neutrons and electrons."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-atom-mass", 2: "rad-atom-mass", 3: "rad-atom-mass" },
    walkthrough: [
      "The nucleus holds the protons and the neutrons.",
      "A proton and a neutron each have a mass of about one unit.",
      "An electron is nearly two thousand times lighter than either of those.",
      "So the electrons add almost nothing, and nearly all the mass sits in the nucleus."
    ],
    explain: "Almost all of an atom's mass is packed into the tiny central nucleus, because the protons and neutrons are far heavier than the electrons. An electron is about two thousand times lighter than a proton, so the orbiting electrons barely add to the mass, and the mass is certainly not spread evenly through the atom."
  },
  {
    id: "rad-q-02",
    topicKey: "t20-radioactivity",
    subtopic: "nuclide-notation",
    stem: "How many neutrons are there in the nucleus ^51_23 V?",
    figure: "fig-22-02-nuclide-notation.svg",
    options: ["28", "23", "51", "74"],
    correct: 0,
    distractorMisconceptions: { 1: "rad-notation-az", 2: "rad-notation-neutrons", 3: "rad-notation-neutrons" },
    walkthrough: [
      "The top number is the nucleon number, which is fifty one.",
      "The bottom number is the proton number, which is twenty three.",
      "The number of neutrons is the nucleon number take away the proton number.",
      "So fifty one take away twenty three gives twenty eight neutrons."
    ],
    explain: "The neutrons are the nucleon number minus the proton number, so fifty one minus twenty three is twenty eight. Twenty three is the proton number, not the neutrons, and fifty one is the total of protons and neutrons together, so neither of those is the neutron count on its own."
  },
  {
    id: "rad-q-03",
    topicKey: "t20-radioactivity",
    subtopic: "nuclide-notation",
    stem: "In the nuclide ^235_92 U, what does the number 92 tell you?",
    figure: "fig-22-02-nuclide-notation.svg",
    options: [
      "The number of protons in the nucleus.",
      "The number of neutrons in the nucleus.",
      "The total number of protons and neutrons.",
      "The mass of the atom in grams."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-notation-az", 2: "rad-notation-az", 3: "rad-atom-mass" },
    walkthrough: [
      "The number at the bottom left is the proton number.",
      "Here that number is ninety two, so there are ninety two protons.",
      "The total of protons and neutrons is the top number, which is two hundred and thirty five.",
      "So ninety two is the protons, and it is what tells you the element is uranium."
    ],
    explain: "The bottom number is the proton number, so ninety two is the number of protons. The total of protons and neutrons is the top number, two hundred and thirty five, and the neutrons would be the difference between them. The number is a count of particles, not a mass in grams."
  },
  {
    id: "rad-q-04",
    topicKey: "t20-radioactivity",
    subtopic: "isotopes",
    stem: "What are isotopes of an element?",
    figure: null,
    options: [
      "Atoms with the same number of protons but a different number of neutrons.",
      "Atoms with a different number of protons but the same number of neutrons.",
      "Atoms of different elements that happen to have the same mass.",
      "Atoms that always take part in different chemical reactions."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-isotope-protons", 2: "rad-isotope-protons", 3: "rad-isotope-chem" },
    walkthrough: [
      "Isotopes are atoms of the same element.",
      "The same element means they must have the same number of protons.",
      "What differs between them is the number of neutrons.",
      "The different neutron count gives them different nucleon numbers, but they are still the same element."
    ],
    explain: "Isotopes share the same number of protons, which keeps them the same element, and they differ only in the number of neutrons. Changing the proton number would make it a different element, and because isotopes have the same number of electrons, they behave the same way chemically."
  },
  {
    id: "rad-q-05",
    topicKey: "t20-radioactivity",
    subtopic: "isotopes",
    stem: "Chlorine has two isotopes, Cl-35 and Cl-37. Which statement about them is correct?",
    figure: null,
    options: [
      "They have the same chemical properties.",
      "They are two different elements.",
      "Cl-37 has more protons than Cl-35.",
      "They take part in different chemical reactions."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-isotope-protons", 2: "rad-isotope-protons", 3: "rad-isotope-chem" },
    walkthrough: [
      "Both isotopes are chlorine, so both have seventeen protons and seventeen electrons.",
      "Chemistry is decided by the electrons, and these two have the same number.",
      "So they react in exactly the same way.",
      "They differ only in neutrons, which changes their mass, not their chemistry."
    ],
    explain: "Cl-35 and Cl-37 are both chlorine with seventeen protons and seventeen electrons, so they share the same chemical properties and react the same way. They are the same element, not two different ones, and they have the same number of protons. The only difference is the number of neutrons, which affects mass, not chemistry."
  },
  {
    id: "rad-q-06",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-decay",
    stem: "A radioactive source is gently warmed. What happens to how fast it decays?",
    figure: null,
    options: [
      "It makes no difference to the decay.",
      "The source decays faster.",
      "The source decays more slowly.",
      "The decay stops completely."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-decay-spontaneous", 2: "rad-decay-spontaneous", 3: "rad-decay-spontaneous" },
    walkthrough: [
      "Radioactive decay is a spontaneous process.",
      "Spontaneous means it is not triggered or changed by outside conditions.",
      "Heating, cooling or squeezing the source cannot reach into the nucleus.",
      "So warming the source makes no difference at all to how it decays."
    ],
    explain: "Decay is spontaneous, so it is not affected by temperature or pressure. Warming, cooling or compressing a source changes nothing about how it decays, because the process comes from deep inside the nucleus where the surroundings cannot reach. Most other rates speed up with heat, but radioactive decay does not."
  },
  {
    id: "rad-q-07",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-decay",
    stem: "Which statement about radioactive decay is correct?",
    figure: null,
    options: [
      "It is impossible to predict exactly when a given nucleus will decay.",
      "You can predict the exact moment that each nucleus decays.",
      "Raising the temperature speeds the decay up.",
      "The direction the radiation flies out can be predicted in advance."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-decay-random", 2: "rad-decay-spontaneous", 3: "rad-decay-random" },
    walkthrough: [
      "Radioactive decay is both random and spontaneous.",
      "Random means you cannot say when any single nucleus will decay.",
      "You also cannot say which way the radiation will be emitted.",
      "The half-life is steady only because a sample holds a huge number of nuclei."
    ],
    explain: "Decay is random, so the exact moment a given nucleus decays cannot be predicted, and neither can the direction of the emission. It is also spontaneous, so temperature does not speed it up. The half-life is reliable only as an average over the enormous number of nuclei in a sample."
  },
  {
    id: "rad-q-08",
    topicKey: "t20-radioactivity",
    subtopic: "radiation-properties",
    stem: "Which type of nuclear radiation is the most penetrating?",
    figure: "fig-22-03-penetrating-power.svg",
    options: [
      "Gamma.",
      "Alpha.",
      "Beta.",
      "Alpha, because it is the most ionising."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-nature-ionpen", 2: "rad-nature-ionpen", 3: "rad-nature-ionpen" },
    walkthrough: [
      "Penetrating power is how far the radiation gets through matter.",
      "Alpha is stopped by paper or skin, so it is the least penetrating.",
      "Beta gets a little further, stopped by a few millimetres of aluminium.",
      "Gamma needs several centimetres of lead to reduce it, so gamma is the most penetrating."
    ],
    explain: "Gamma is the most penetrating radiation, passing through unless you use thick lead or concrete. Alpha is actually the least penetrating, stopped by paper or skin, even though it is the most ionising. Ionising power and penetrating power run opposite ways, so being strongly ionising makes alpha easier to stop, not harder."
  },
  {
    id: "rad-q-09",
    topicKey: "t20-radioactivity",
    subtopic: "radiation-properties",
    stem: "What is a beta particle?",
    figure: null,
    options: [
      "A fast electron thrown out of the nucleus.",
      "A helium nucleus of two protons and two neutrons.",
      "A high-energy electromagnetic wave.",
      "One of the atom's orbiting electrons that escapes."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-nature-identity", 2: "rad-nature-identity", 3: "rad-beta-origin" },
    walkthrough: [
      "A beta particle is an electron, with a charge of minus one.",
      "It is made inside the nucleus when a neutron changes into a proton and an electron.",
      "That new electron is thrown out at high speed as the beta particle.",
      "A helium nucleus is an alpha particle, and a wave is gamma, so those are different things."
    ],
    explain: "A beta particle is a fast moving electron ejected from the nucleus. It is created there when a neutron becomes a proton and an electron, so it does not come from the orbiting shells. A helium nucleus of two protons and two neutrons is an alpha particle, and a high energy electromagnetic wave is gamma."
  },
  {
    id: "rad-q-10",
    topicKey: "t20-radioactivity",
    subtopic: "radiation-properties",
    stem: "What is an alpha particle?",
    figure: null,
    options: [
      "Two protons and two neutrons, the same as a helium nucleus.",
      "A fast-moving electron.",
      "A high-energy electromagnetic wave.",
      "A single proton on its own."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-nature-identity", 2: "rad-nature-identity", 3: "rad-nature-identity" },
    walkthrough: [
      "An alpha particle is made of two protons and two neutrons.",
      "That is exactly the make-up of a helium nucleus.",
      "Its charge is plus two, because of the two protons.",
      "An electron is a beta particle and a wave is gamma, so neither of those is alpha."
    ],
    explain: "An alpha particle is two protons and two neutrons joined together, which is a helium nucleus, and it carries a charge of plus two. A fast electron is a beta particle and a high energy wave is gamma, so those are the other two radiations, not alpha."
  },
  {
    id: "rad-q-11",
    topicKey: "t20-radioactivity",
    subtopic: "deflection",
    stem: "Three emissions cross an electric field between charged plates. One bends towards the negative plate, one bends the opposite way towards the positive plate, and one passes straight through. In that order, the emissions are:",
    figure: "fig-22-04-deflection-field.svg",
    options: [
      "alpha, beta, gamma",
      "gamma, beta, alpha",
      "beta, alpha, gamma",
      "alpha, gamma, beta"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-gamma-charge", 2: "rad-deflection-samedir", 3: "rad-gamma-charge" },
    walkthrough: [
      "Alpha is positive, so it is pulled towards the negative plate.",
      "Beta is negative, so it is pulled the opposite way, towards the positive plate.",
      "Gamma has no charge, so the field cannot bend it and it goes straight through.",
      "So the order is alpha, then beta, then gamma."
    ],
    explain: "The one bending to the negative plate is positive, which is alpha. The one bending the opposite way to the positive plate is negative, which is beta. The one going straight through has no charge, which is gamma. So the order is alpha, beta, gamma. Gamma cannot be one of the bending beams, because it carries no charge."
  },
  {
    id: "rad-q-12",
    topicKey: "t20-radioactivity",
    subtopic: "penetration",
    stem: "Which barrier is needed to reduce a beam of gamma rays?",
    figure: "fig-22-03-penetrating-power.svg",
    options: [
      "Several centimetres of lead.",
      "A single sheet of paper.",
      "A few millimetres of aluminium.",
      "A layer of human skin."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-penetration-order", 2: "rad-penetration-order", 3: "rad-penetration-order" },
    walkthrough: [
      "Gamma is the most penetrating radiation.",
      "Paper stops alpha, and a few millimetres of aluminium stops beta.",
      "Gamma passes straight through both of those.",
      "It takes several centimetres of lead, or thick concrete, to reduce gamma."
    ],
    explain: "Gamma is the hardest radiation to stop, so it needs several centimetres of lead or thick concrete. Paper stops alpha and a few millimetres of aluminium stops beta, but gamma sails through both of those. The barriers go paper, then aluminium, then lead as the radiation becomes more penetrating."
  },
  {
    id: "rad-q-13",
    topicKey: "t20-radioactivity",
    subtopic: "penetration",
    stem: "What is the least material needed to stop a beam of alpha particles?",
    figure: "fig-22-03-penetrating-power.svg",
    options: [
      "A sheet of paper or skin.",
      "A thick block of lead.",
      "A few millimetres of aluminium.",
      "Nothing can stop alpha particles."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-penetration-order", 2: "rad-penetration-order", 3: "rad-nature-ionpen" },
    walkthrough: [
      "Alpha is the least penetrating of the three radiations.",
      "It dumps its energy very quickly as it travels.",
      "That means even a sheet of paper or your skin stops it.",
      "Lead and aluminium would certainly stop it, but far less is needed."
    ],
    explain: "Alpha is the least penetrating radiation, so a sheet of paper or even skin is enough to stop it. Lead and aluminium would stop it too, but that is far more than is needed. The idea that nothing stops alpha mixes it up with gamma, the most penetrating radiation, whereas alpha is actually the easiest to stop."
  },
  {
    id: "rad-q-14",
    topicKey: "t20-radioactivity",
    subtopic: "deflection",
    stem: "Alpha and beta particles pass through the same electric field. How do they behave?",
    figure: "fig-22-04-deflection-field.svg",
    options: [
      "They bend towards opposite plates, because their charges are opposite.",
      "They bend towards the same plate.",
      "Alpha bends but beta passes straight through.",
      "Gamma bends the most of the three."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-deflection-samedir", 2: "rad-nature-identity", 3: "rad-gamma-charge" },
    walkthrough: [
      "Alpha is positive and beta is negative.",
      "Opposite charges are pulled in opposite directions by the field.",
      "So alpha goes to the negative plate and beta goes to the positive plate.",
      "Beta is far lighter than alpha, so it bends more sharply."
    ],
    explain: "Alpha and beta carry opposite charges, so they bend towards opposite plates. Alpha, being positive, goes to the negative plate, and beta, being negative, goes the other way. Beta also bends more because it is much lighter. Both are charged, so both bend, and gamma, having no charge, is the one that would not bend at all."
  },
  {
    id: "rad-q-15",
    topicKey: "t20-radioactivity",
    subtopic: "beta-emission",
    stem: "During beta decay, where does the emitted electron come from?",
    figure: "fig-22-06-beta-emission.svg",
    options: [
      "A neutron in the nucleus changes into a proton and an electron, and the electron is emitted.",
      "One of the electrons orbiting the nucleus is thrown out.",
      "The nucleus already contains spare electrons that escape.",
      "A proton in the nucleus splits into two electrons."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-beta-origin", 2: "rad-beta-origin", 3: "rad-beta-origin" },
    walkthrough: [
      "The nucleus has no ready-made electrons stored inside it.",
      "At the moment of decay a neutron changes into a proton and an electron.",
      "The new proton stays in the nucleus, which is why the proton number rises by one.",
      "The new electron is thrown out at high speed as the beta particle."
    ],
    explain: "The beta electron is created in the nucleus, not borrowed from an orbit. A neutron turns into a proton and an electron, the proton stays behind and raises the proton number by one, and the electron is emitted as the beta particle. The orbiting electrons are not involved, and the nucleus does not store spare electrons."
  },
  {
    id: "rad-q-16",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-equations",
    stem: "The nucleus ^238_92 U decays by emitting an alpha particle. What is the nuclide left behind?",
    figure: null,
    options: ["^234_90 Th", "^236_90 Th", "^234_92 U", "^242_94 Pu"],
    correct: 0,
    distractorMisconceptions: { 1: "rad-eq-alpha-nucleon", 2: "rad-eq-gamma-change", 3: "rad-eq-alpha-nucleon" },
    walkthrough: [
      "An alpha particle carries away two protons and two neutrons, which is four nucleons.",
      "So the nucleon number falls by four, from two hundred and thirty eight to two hundred and thirty four.",
      "The proton number falls by two, from ninety two to ninety.",
      "A proton number of ninety is thorium, so the nuclide is thorium two hundred and thirty four."
    ],
    explain: "Alpha decay removes four nucleons and two protons, so two hundred and thirty eight minus four is two hundred and thirty four, and ninety two minus two is ninety, giving thorium two hundred and thirty four. Taking only two off the top wrongly gives a nucleon number of two hundred and thirty six, and leaving the proton number unchanged wrongly keeps it as uranium."
  },
  {
    id: "rad-q-17",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-equations",
    stem: "The nucleus ^131_53 I decays by emitting a beta particle. What is the nuclide left behind?",
    figure: "fig-22-06-beta-emission.svg",
    options: ["^131_54 Xe", "^131_52 Te", "^131_53 I", "^127_51 Sb"],
    correct: 0,
    distractorMisconceptions: { 1: "rad-eq-beta-proton", 2: "rad-eq-gamma-change", 3: "rad-eq-alpha-nucleon" },
    walkthrough: [
      "In beta decay a neutron changes into a proton, so the proton number rises by one.",
      "Fifty three rises to fifty four.",
      "The nucleon number stays the same, because a neutron simply became a proton.",
      "So the nucleon number stays at one hundred and thirty one, giving xenon one hundred and thirty one."
    ],
    explain: "Beta decay raises the proton number by one and leaves the nucleon number unchanged, so fifty three becomes fifty four and the nucleon number stays at one hundred and thirty one, giving xenon. Lowering the proton number treats it like alpha decay, leaving the numbers unchanged treats it like gamma, and taking four off the top wrongly borrows the alpha rule."
  },
  {
    id: "rad-q-18",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-equations",
    stem: "The nuclide ^90_38 Sr decays to ^90_39 Y. By what process does this happen?",
    figure: null,
    options: [
      "Beta emission.",
      "Alpha emission.",
      "Gamma emission.",
      "By gaining a neutron."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-eq-alpha-nucleon", 2: "rad-eq-gamma-change", 3: "rad-beta-origin" },
    walkthrough: [
      "Compare the two nuclides. The nucleon number stays at ninety.",
      "The proton number rises by one, from thirty eight to thirty nine.",
      "A proton number that rises by one with an unchanged nucleon number is the mark of beta decay.",
      "That happens when a neutron in the nucleus changes into a proton."
    ],
    explain: "The proton number rises by one while the nucleon number stays the same, which is exactly what beta emission does. Alpha would lower both numbers, gamma would change neither, and the nucleus does not simply gain a neutron here. A neutron turning into a proton inside the nucleus is what raises the proton number by one."
  },
  {
    id: "rad-q-19",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-equations",
    stem: "What happens to a nucleus when it emits a gamma ray?",
    figure: null,
    options: [
      "Neither its proton number nor its nucleon number changes.",
      "It becomes a different element.",
      "Its nucleon number falls by four.",
      "Its proton number rises by one."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-eq-gamma-change", 2: "rad-eq-alpha-nucleon", 3: "rad-eq-beta-proton" },
    walkthrough: [
      "In gamma emission the nucleus only loses extra energy.",
      "No protons or neutrons leave the nucleus.",
      "So the proton number and the nucleon number both stay the same.",
      "The nucleus is still the same element, just with less energy."
    ],
    explain: "Gamma emission removes only energy, so neither the proton number nor the nucleon number changes and the element stays the same. A nucleon number falling by four belongs to alpha decay, and a proton number rising by one belongs to beta decay, so those describe the other two processes, not gamma."
  },
  {
    id: "rad-q-20",
    topicKey: "t20-radioactivity",
    subtopic: "half-life",
    stem: "A large sample and a small sample are taken from the same radioactive isotope. How do their half-lives compare?",
    figure: "fig-22-05-half-life-curve.svg",
    options: [
      "They have the same half-life.",
      "The larger sample has the longer half-life.",
      "The smaller sample has the longer half-life.",
      "You cannot compare them without measuring the masses."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-halflife-amount", 2: "rad-halflife-amount", 3: "rad-halflife-amount" },
    walkthrough: [
      "Half-life is a fixed property of the isotope itself.",
      "It does not depend on how much material you start with.",
      "Both samples take the same time to fall to half of what they started with.",
      "So the large and small samples have exactly the same half-life."
    ],
    explain: "Half-life depends only on the isotope, not on the amount, so a large and a small sample of the same isotope have the same half-life. The bigger sample gives more decays each second, but it still takes the same time to fall to half of its own starting value, so the size makes no difference to the half-life."
  },
  {
    id: "rad-q-21",
    topicKey: "t20-radioactivity",
    subtopic: "half-life",
    stem: "A source has a count rate of 24000 counts/s and a half-life of 5 s. What is the count rate after 30 s?",
    figure: "fig-22-05-half-life-curve.svg",
    options: ["375 counts/s", "750 counts/s", "4000 counts/s", "0 counts/s"],
    correct: 0,
    distractorMisconceptions: { 1: "rad-halflife-count", 2: "rad-halflife-linear", 3: "rad-halflife-complete" },
    walkthrough: [
      "First find the number of half-lives. Thirty seconds divided by five seconds is six.",
      "So the count rate halves six times.",
      "Halving from twenty four thousand goes twelve thousand, six thousand, three thousand, one thousand five hundred, seven hundred and fifty, three hundred and seventy five.",
      "After six halvings the count rate is three hundred and seventy five counts per second."
    ],
    explain: "Thirty seconds is six half-lives, so you halve twenty four thousand six times to reach three hundred and seventy five counts per second. Stopping after five halvings gives seven hundred and fifty, which is one halving short. Dividing by six treats the fall as a straight line, and reaching zero forgets that each half-life only removes half of what remains."
  },
  {
    id: "rad-q-22",
    topicKey: "t20-radioactivity",
    subtopic: "half-life",
    stem: "The count rate of a source falls from 480 counts/s to 60 counts/s in 18 h. What is the half-life?",
    figure: "fig-22-05-half-life-curve.svg",
    options: ["6 h", "9 h", "4.5 h", "18 h"],
    correct: 0,
    distractorMisconceptions: { 1: "rad-halflife-count", 2: "rad-halflife-count", 3: "rad-halflife-count" },
    walkthrough: [
      "Count how many times the count rate halves from four hundred and eighty down to sixty.",
      "Four hundred and eighty goes to two hundred and forty, then one hundred and twenty, then sixty.",
      "That is three halvings, so three half-lives fit into eighteen hours.",
      "The half-life is eighteen hours divided by three, which is six hours."
    ],
    explain: "Halving from four hundred and eighty to sixty takes three steps, so eighteen hours holds three half-lives and each one is six hours. Nine hours comes from counting only two halvings, four point five hours from counting four, and eighteen hours from not dividing at all, so the careful part is counting the halvings correctly."
  },
  {
    id: "rad-q-23",
    topicKey: "t20-radioactivity",
    subtopic: "half-life",
    stem: "A laboratory receives 240 g of a radioactive material with a half-life of 6 years. How much is still radioactive after 18 years?",
    figure: null,
    options: ["30 g", "60 g", "120 g", "80 g"],
    correct: 0,
    distractorMisconceptions: { 1: "rad-halflife-count", 2: "rad-halflife-count", 3: "rad-halflife-linear" },
    walkthrough: [
      "Find the number of half-lives. Eighteen years divided by six years is three.",
      "So the mass halves three times.",
      "Two hundred and forty grams halves to one hundred and twenty, then sixty, then thirty.",
      "After three half-lives, thirty grams is still radioactive."
    ],
    explain: "Eighteen years is three half-lives, so two hundred and forty grams halves three times to thirty grams. Sixty grams is only two halvings and one hundred and twenty is only one, both stopping too early. Eighty grams comes from dividing by three as if the decay were a straight line, but the mass halves each time instead."
  },
  {
    id: "rad-q-24",
    topicKey: "t20-radioactivity",
    subtopic: "activity-background",
    stem: "A Geiger-Muller tube reads 825 counts/min near a source, and the background is 25 counts/min. Before finding the half-life, what should you do with the readings?",
    figure: null,
    options: [
      "Subtract the background count rate to get the corrected count rate.",
      "Add the background count rate to the measured value.",
      "Use the measured count rate just as it is.",
      "Double the background count rate first."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-background-subtract", 2: "rad-background-subtract", 3: "rad-background-subtract" },
    walkthrough: [
      "The detector always picks up background radiation as well as the source.",
      "That makes the raw reading a little too high.",
      "To find the reading due to the source alone, take the background away.",
      "So eight hundred and twenty five take away twenty five gives a corrected rate of eight hundred counts per minute."
    ],
    explain: "You subtract the background count rate to get the corrected count rate, so eight hundred and twenty five minus twenty five is eight hundred counts per minute. Working with the corrected value is what lets the numbers halve cleanly. Adding the background, using the raw reading, or doubling the background would all leave the source figure wrong."
  },
  {
    id: "rad-q-25",
    topicKey: "t20-radioactivity",
    subtopic: "activity-background",
    stem: "Which of these is a natural source of background radiation?",
    figure: null,
    options: [
      "Cosmic rays reaching us from space.",
      "Medical X-ray machines.",
      "Waste from nuclear power stations.",
      "CT scanners in hospitals."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-background-source", 2: "rad-background-source", 3: "rad-background-source" },
    walkthrough: [
      "Background radiation comes from natural and artificial sources.",
      "Natural sources include rocks and soil, radon gas, food and drink, and cosmic rays from space.",
      "Artificial sources come from human activity, like medical scans and nuclear waste.",
      "Cosmic rays are natural, while the other three all come from human activity."
    ],
    explain: "Cosmic rays from space are a natural source of background radiation, along with rocks, radon gas, and radioactive potassium in food. Medical X-rays, nuclear power waste, and CT scanners are all artificial, made by human activity. Most background radiation is actually natural, not man-made."
  },
  {
    id: "rad-q-26",
    topicKey: "t20-radioactivity",
    subtopic: "fission-fusion",
    stem: "Which of these describes nuclear fusion?",
    figure: "fig-22-08-nuclear-fusion.svg",
    options: [
      "Two light nuclei join to form a single heavier nucleus.",
      "A heavy nucleus splits into two lighter nuclei.",
      "A nucleus emits an alpha particle to become more stable.",
      "A neutron is absorbed and the nucleus splits apart."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-fusion-fission-swap", 2: "rad-fusion-fission-swap", 3: "rad-fusion-fission-swap" },
    walkthrough: [
      "Fusion means joining nuclei together.",
      "Two light nuclei combine to make one heavier nucleus, releasing energy.",
      "Splitting a heavy nucleus into lighter ones is the opposite process, fission.",
      "So fusion is the one where nuclei join, not split."
    ],
    explain: "Nuclear fusion joins two light nuclei into a single heavier one, releasing energy, as when hydrogen nuclei form helium in the Sun. Splitting a heavy nucleus into two lighter ones is fission, the opposite process. Emitting an alpha particle is ordinary radioactive decay, not fusion. A useful hook is that fusion fuses things together."
  },
  {
    id: "rad-q-27",
    topicKey: "t20-radioactivity",
    subtopic: "fission-fusion",
    stem: "Why is a neutron, rather than a proton, used to start nuclear fission?",
    figure: "fig-22-07-nuclear-fission.svg",
    options: [
      "It has no charge, so it is not repelled by the nucleus.",
      "It is the heaviest of all the particles.",
      "It is positive, so it is attracted to the nucleus.",
      "A proton would work just as well."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-fission-neutron", 2: "rad-fission-neutron", 3: "rad-fission-neutron" },
    walkthrough: [
      "The nucleus has a positive charge, because of its protons.",
      "A neutron has no charge at all.",
      "So the positive nucleus does not repel the neutron, and it can reach it.",
      "A proton is positive, so the nucleus would push it away before it arrived."
    ],
    explain: "A neutron is used because it has no charge, so the positive nucleus does not repel it and it can reach the nucleus to trigger fission. A positive proton would be pushed away by the nucleus, so it would not work as well. The neutron is not chosen for its mass, and it is not attracted in, it simply is not repelled."
  },
  {
    id: "rad-q-28",
    topicKey: "t20-radioactivity",
    subtopic: "fission-fusion",
    stem: "Why is nuclear fusion much harder to achieve than nuclear fission?",
    figure: "fig-22-08-nuclear-fusion.svg",
    options: [
      "The nuclei are positively charged and repel, so very high temperature and pressure are needed.",
      "Fusion needs a neutron fired at the nucleus to begin.",
      "Fusion happens easily at ordinary room temperature.",
      "The nuclei are far too heavy to be moved."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-fission-neutron", 2: "rad-fusion-fission-swap", 3: "rad-fusion-fission-swap" },
    walkthrough: [
      "In fusion two nuclei must come very close together to join.",
      "Both nuclei are positively charged, so they strongly repel each other.",
      "To overcome that repulsion, the nuclei need a great deal of kinetic energy.",
      "That means very high temperatures and pressures, like those found in the Sun."
    ],
    explain: "Fusion is hard because the two positive nuclei repel each other strongly as they approach, so very high temperature and pressure are needed to give them enough energy to join. Firing a neutron is how fission begins, not fusion, and fusion certainly does not happen at room temperature. These extreme conditions exist in the Sun, but are difficult to hold on Earth."
  },
  {
    id: "rad-q-29",
    topicKey: "t20-radioactivity",
    subtopic: "uses",
    stem: "A gauge monitors the thickness of thin aluminium foil as it is made, with a source on one side and a detector on the other. Which source is most suitable?",
    figure: "fig-22-09-thickness-monitoring.svg",
    options: [
      "A beta source.",
      "An alpha source.",
      "A gamma source.",
      "An alpha source, because it is the most ionising."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "rad-uses-source", 2: "rad-uses-source", 3: "rad-uses-source" },
    walkthrough: [
      "The radiation must pass through the foil and reach the detector.",
      "The reading should change a little when the thickness changes.",
      "Alpha is stopped by even a thin sheet, so none would get through.",
      "Gamma would pass through almost unchanged, so beta, suited to thin material, is the right choice."
    ],
    explain: "Beta is the right source for thin foil, because it passes through but the amount getting through changes noticeably with thickness. Alpha is stopped by even a thin sheet, so nothing would reach the detector, and gamma is so penetrating that thin foil barely changes it, giving no useful reading. Matching the penetration to the material is the key."
  },
  {
    id: "rad-q-30",
    topicKey: "t20-radioactivity",
    subtopic: "uses",
    stem: "From which material should a container for storing a gamma source be made?",
    figure: null,
    options: ["Lead", "Paper", "Aluminium", "Copper"],
    correct: 0,
    distractorMisconceptions: { 1: "rad-penetration-order", 2: "rad-penetration-order", 3: "rad-penetration-order" },
    walkthrough: [
      "Gamma is the most penetrating radiation.",
      "Paper and aluminium are far too thin to hold it back.",
      "Lead is very dense, and several centimetres of it reduces gamma strongly.",
      "So a lead-lined container is used to store a gamma source safely."
    ],
    explain: "A gamma source is stored in lead, because lead is dense enough to absorb the highly penetrating gamma rays. Paper stops only alpha and thin aluminium stops only beta, so both would let gamma straight through. Copper is far less effective than the same thickness of lead, so lead is the standard shielding for gamma."
  }
];
