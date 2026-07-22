// radioactivity-misconceptions.ts
// Topic: O-Level Physics, Radioactivity (topicKey "t20-radioactivity")
// The tutor's diagnostic brain: the classic ways students go wrong in Radioactivity,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / 07-Physics-Materials / Physics-Study-Notes / Chapter 22 - Radioactivity.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript and nuclide notation.

import type { Misconception } from "@/lib/teaching/types";

export const RADIOACTIVITY_MISCONCEPTIONS: Misconception[] = [
  {
    id: "rad-atom-mass",
    topicKey: "t20-radioactivity",
    subtopic: "atomic-structure",
    label: "Mass of an atom spread through the whole atom",
    belief: "The mass of an atom is shared roughly equally between the protons, neutrons and electrons.",
    tell: "The student talks as if the electrons carry a large share of the mass, or pictures the mass spread evenly across the atom instead of packed in the centre.",
    whyItHappens: "Diagrams draw the electrons large and far out, so they look important, and it is easy to forget that an electron is about two thousand times lighter than a proton or neutron.",
    reteach: "Almost all of an atom's mass sits in the tiny central nucleus, where the protons and neutrons live. An electron is nearly two thousand times lighter than a proton or a neutron, so the orbiting electrons add almost nothing to the mass. Picture a marble in the middle of a sports hall. The marble is the nucleus with nearly all the mass, and the electrons are like a few specks of dust drifting round the edges.",
    microExample: "Proton mass and neutron mass are each about 1 unit; an electron is about 1/1840 of that, so the nucleus holds nearly all the mass.",
    figure: "fig-22-01-atom-structure.svg",
    check: {
      question: "Where is nearly all the mass of an atom found?",
      answer: "In the nucleus, because the protons and neutrons there are far heavier than the tiny electrons around them."
    }
  },
  {
    id: "rad-notation-az",
    topicKey: "t20-radioactivity",
    subtopic: "nuclide-notation",
    label: "Proton number and nucleon number read the wrong way round",
    belief: "The bottom number in the nuclide notation is the number of nucleons, and the top number is the number of protons.",
    tell: "The student swaps the two numbers, treating the small bottom number as the mass and the big top number as the proton count.",
    whyItHappens: "The two numbers sit close together in the same symbol, and without a firm memory hook it is easy to attach each label to the wrong position.",
    reteach: "In the nuclide notation the top left number is the nucleon number, the total of protons and neutrons, and the bottom left number is the proton number, just the protons. The top number is always the bigger one, because it counts protons and neutrons together. The bottom number counts protons only, and that is what tells you which element it is.",
    microExample: "In ^51_23 V, the 51 on top is the nucleon number and the 23 below is the proton number, so there are 23 protons.",
    figure: "fig-22-02-nuclide-notation.svg",
    check: {
      question: "In the nuclide notation, which number is the proton number, the top one or the bottom one?",
      answer: "The bottom one. The top number is the nucleon number, which counts protons and neutrons together."
    }
  },
  {
    id: "rad-notation-neutrons",
    topicKey: "t20-radioactivity",
    subtopic: "nuclide-notation",
    label: "Number of neutrons taken as the nucleon number",
    belief: "The number of neutrons in a nucleus is just the nucleon number.",
    tell: "The student reads the top number straight off as the neutron count and never subtracts the protons.",
    whyItHappens: "The nucleon number is the most obvious big number in the symbol, so it gets grabbed for the neutrons without remembering that it also includes the protons.",
    reteach: "The nucleon number counts protons and neutrons together, so to find the neutrons on their own you must take the protons away. The rule is number of neutrons equals nucleon number minus proton number. So for a nucleus you subtract the bottom number from the top number, and what is left is the neutrons.",
    microExample: "For ^51_23 V, neutrons = 51 - 23 = 28, not 51.",
    figure: "fig-22-02-nuclide-notation.svg",
    check: {
      question: "A nucleus has a nucleon number of forty and a proton number of eighteen. How many neutrons does it have?",
      answer: "Twenty two, because you take the proton number away from the nucleon number, forty take away eighteen."
    }
  },
  {
    id: "rad-isotope-protons",
    topicKey: "t20-radioactivity",
    subtopic: "isotopes",
    label: "Isotopes differ in their number of protons",
    belief: "Isotopes of an element have different numbers of protons.",
    tell: "The student explains isotopes by changing the proton number, or says two nuclides are isotopes because their proton numbers differ.",
    whyItHappens: "Students know isotopes are somehow different, and the proton number is the number they notice first, so they change that one instead of the neutrons.",
    reteach: "Isotopes of an element always have the same number of protons. That is what keeps them the same element. What differs between isotopes is the number of neutrons, and because the neutrons differ, the nucleon number differs too. So look for the same proton number but a different nucleon number, and you have found isotopes.",
    microExample: "Cl-35 is ^35_17 Cl and Cl-37 is ^37_17 Cl. Same 17 protons, but 18 and 20 neutrons.",
    figure: null,
    check: {
      question: "What stays the same and what changes between two isotopes of the same element?",
      answer: "The number of protons stays the same, and the number of neutrons changes, which also changes the nucleon number."
    }
  },
  {
    id: "rad-isotope-chem",
    topicKey: "t20-radioactivity",
    subtopic: "isotopes",
    label: "Isotopes behave as different elements",
    belief: "Isotopes of an element react differently and count as different elements.",
    tell: "The student says two isotopes take part in different chemical reactions, or names them as separate elements.",
    whyItHappens: "The word isotope sounds like a different substance, and the different nucleon numbers make them look like different materials.",
    reteach: "Isotopes of an element have the same number of protons, and therefore the same number of electrons, and it is the electrons that decide chemistry. So isotopes share the same chemical properties and are the same element. They differ only in the number of neutrons, which changes physical things like mass and density, not the way they react.",
    microExample: "Cl-35 and Cl-37 both have 17 electrons, so both are chlorine and both react the same chemically.",
    figure: null,
    check: {
      question: "Do two isotopes of chlorine take part in the same chemical reactions?",
      answer: "Yes. They have the same number of electrons, so they behave the same chemically. Only their mass differs."
    }
  },
  {
    id: "rad-decay-spontaneous",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-decay",
    label: "Decay can be sped up by heat or pressure",
    belief: "Heating, cooling or squeezing a radioactive source changes how fast it decays.",
    tell: "The student says warming a source or putting it under pressure would make it decay faster or slower.",
    whyItHappens: "Almost every other rate in physics and chemistry speeds up when you heat it, so students expect radioactive decay to follow the same pattern.",
    reteach: "Radioactive decay is spontaneous, which means it is not triggered or changed by outside conditions. Heating a source, cooling it, or squeezing it makes no difference at all to how it decays. The decay comes from deep inside the nucleus, and ordinary temperature and pressure cannot reach in and change it. So the rate stays the same whatever you do to the surroundings.",
    microExample: "Warm a source, cool it, or compress it: the count rate falls in exactly the same way, because decay is spontaneous.",
    figure: null,
    check: {
      question: "If you gently warmed a radioactive source, what would happen to how fast it decays?",
      answer: "Nothing would change. Decay is spontaneous, so temperature and pressure do not affect it."
    }
  },
  {
    id: "rad-decay-random",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-decay",
    label: "Each decay can be predicted exactly",
    belief: "You can predict the exact moment a particular nucleus will decay.",
    tell: "The student talks as if each nucleus decays on a fixed schedule, or expects the emissions to come out in a steady, predictable stream.",
    whyItHappens: "Half-life gives a reliable average, so students assume the underlying events must also be regular and clock-like.",
    reteach: "Radioactive decay is random. You cannot say when any one nucleus will decay, or which way its radiation will fly out. Half-life works because a sample holds an enormous number of nuclei, so the average behaviour is steady, even though each single decay is unpredictable. Think of popcorn. You know roughly how long the whole bag takes, but you cannot say which kernel pops next.",
    microExample: "Two identical nuclei can decay seconds apart or years apart; only the average over many nuclei is predictable.",
    figure: null,
    check: {
      question: "Can you predict the exact moment a single nucleus will decay?",
      answer: "No. Decay is random, so only the average over many nuclei is predictable, never one nucleus on its own."
    }
  },
  {
    id: "rad-nature-ionpen",
    topicKey: "t20-radioactivity",
    subtopic: "radiation-properties",
    label: "Most ionising means most penetrating",
    belief: "Because alpha is the most ionising, it must also be the most penetrating.",
    tell: "The student ranks alpha as the hardest to stop, or expects the most ionising radiation to travel furthest through matter.",
    whyItHappens: "Both ionising power and penetrating power sound like strength, so students assume the strongest at one must be the strongest at the other.",
    reteach: "Ionising power and penetrating power actually run opposite ways. Alpha is the most ionising but the least penetrating, because it dumps its energy quickly and is stopped by paper or skin. Gamma is the least ionising but the most penetrating, slipping through unless you use thick lead or concrete. Beta sits in the middle for both. So being strongly ionising makes something easier to stop, not harder.",
    microExample: "Alpha: very high ionising, very low penetrating. Gamma: very low ionising, very high penetrating.",
    figure: "fig-22-03-penetrating-power.svg",
    check: {
      question: "Which radiation is the most penetrating, and which is the most ionising?",
      answer: "Gamma is the most penetrating, while alpha is the most ionising. The two properties run opposite ways."
    }
  },
  {
    id: "rad-nature-identity",
    topicKey: "t20-radioactivity",
    subtopic: "radiation-properties",
    label: "Natures of alpha, beta and gamma mixed up",
    belief: "A beta particle is a helium nucleus, or an alpha particle is an electron, or gamma is a particle.",
    tell: "The student names the wrong thing for a radiation, such as calling beta a helium nucleus or alpha an electron.",
    whyItHappens: "The three names are learned as a set, and their identities are easy to shuffle because they are all just labels until you tie each one to what it really is.",
    reteach: "Let us fix each identity. An alpha particle is two protons and two neutrons, which is a helium nucleus, with charge plus two. A beta particle is a fast electron thrown out of the nucleus, with charge minus one. Gamma is not a particle at all, it is a high energy electromagnetic wave with no charge. So alpha is heavy and positive, beta is light and negative, and gamma is a wave.",
    microExample: "Alpha = ^4_2 He (charge +2), beta = ^0_-1 e (charge -1), gamma = an electromagnetic wave (charge 0).",
    figure: null,
    check: {
      question: "What is a beta particle?",
      answer: "A fast moving electron thrown out of the nucleus. It is not a helium nucleus, and it is not a wave."
    }
  },
  {
    id: "rad-gamma-charge",
    topicKey: "t20-radioactivity",
    subtopic: "deflection",
    label: "Gamma is charged and bends in a field",
    belief: "Gamma rays carry a charge and are deflected between charged plates.",
    tell: "The student draws the gamma ray bending towards a plate, or expects gamma to be pushed by an electric or magnetic field.",
    whyItHappens: "Alpha and beta both bend, so students expect the third radiation to bend as well, forgetting that gamma has no charge.",
    reteach: "Gamma has no charge, so a field cannot push or pull it, and it passes straight through undeflected. Only charged radiations are bent by a field. Alpha, being positive, bends one way, and beta, being negative, bends the other way, but gamma carries no charge and so goes straight on. If you see a beam that ignores the field completely, that is the gamma.",
    microExample: "Between charged plates: alpha (+2) bends to the negative plate, beta (-1) bends to the positive plate, gamma (0) goes straight.",
    figure: "fig-22-04-deflection-field.svg",
    check: {
      question: "What happens to a gamma ray as it passes between two charged plates?",
      answer: "It goes straight through, because gamma has no charge, so the field cannot deflect it."
    }
  },
  {
    id: "rad-penetration-order",
    topicKey: "t20-radioactivity",
    subtopic: "penetration",
    label: "Stopping materials matched to the wrong radiation",
    belief: "Paper can stop gamma, or thick lead is needed to stop alpha.",
    tell: "The student pairs the barriers with the radiations the wrong way round, such as using lead for alpha or paper for gamma.",
    whyItHappens: "There are three radiations and three barriers, and without a clear order it is easy to line them up incorrectly.",
    reteach: "Match each radiation to the barrier that just stops it. Alpha is stopped by a sheet of paper or your skin. Beta gets through paper but is stopped by a few millimetres of aluminium. Gamma is the hardest to stop, needing several centimetres of lead or thick concrete. So the order of stopping power goes paper, then aluminium, then lead, as the radiation gets more penetrating.",
    microExample: "Paper stops alpha; a few mm of aluminium stops beta; several cm of lead stops most gamma.",
    figure: "fig-22-03-penetrating-power.svg",
    check: {
      question: "What is the least material you need to stop a beam of alpha particles?",
      answer: "A sheet of paper or even skin is enough, because alpha is the least penetrating radiation."
    }
  },
  {
    id: "rad-deflection-samedir",
    topicKey: "t20-radioactivity",
    subtopic: "deflection",
    label: "Alpha and beta bend the same way",
    belief: "Alpha and beta particles are deflected towards the same plate.",
    tell: "The student draws alpha and beta curving the same way in a field, instead of towards opposite plates.",
    whyItHappens: "Both are charged and both bend, so students group them together and forget that their charges have opposite signs.",
    reteach: "Alpha and beta bend in opposite directions, because their charges are opposite. Alpha is positive, so it is pulled towards the negative plate. Beta is negative, so it is pulled the other way, towards the positive plate. Beta is also much lighter, so it bends more sharply. Opposite charges mean opposite directions, so the two beams split apart in the field.",
    microExample: "Alpha (+2) curves to the negative plate; beta (-1) curves to the positive plate, the opposite way, and further.",
    figure: "fig-22-04-deflection-field.svg",
    check: {
      question: "In an electric field, do alpha and beta particles bend the same way or opposite ways?",
      answer: "Opposite ways, because their charges are opposite. Alpha goes to the negative plate and beta to the positive plate."
    }
  },
  {
    id: "rad-beta-origin",
    topicKey: "t20-radioactivity",
    subtopic: "beta-emission",
    label: "Beta electron comes from the electron shells",
    belief: "The electron emitted in beta decay is one of the atom's orbiting electrons.",
    tell: "The student says the beta electron is knocked out of an electron shell, or that the nucleus stored some spare electrons.",
    whyItHappens: "The only electrons students have met so far are the ones orbiting the atom, so a beta electron seems to have to come from there.",
    reteach: "The beta electron does not come from the electron shells at all. It is made in the nucleus at the moment of decay. Inside the nucleus a neutron changes into a proton and an electron. The new proton stays behind, which is why the proton number rises by one, and the new electron is thrown out at high speed as the beta particle. So the beta electron is born in the nucleus, not borrowed from an orbit.",
    microExample: "In the nucleus: one neutron becomes one proton plus one electron; the electron leaves as the beta particle.",
    figure: "fig-22-06-beta-emission.svg",
    check: {
      question: "Where does the electron emitted in beta decay actually come from?",
      answer: "From the nucleus. A neutron changes into a proton and an electron, and that new electron is emitted."
    }
  },
  {
    id: "rad-eq-alpha-nucleon",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-equations",
    label: "Alpha decay lowers the nucleon number by two",
    belief: "In alpha decay both the proton number and the nucleon number fall by two.",
    tell: "The student takes two off the top number as well as the bottom, giving a nucleon number that only drops by two.",
    whyItHappens: "An alpha particle has two protons, so the number two is fresh in mind and gets subtracted from both numbers by mistake.",
    reteach: "An alpha particle is two protons and two neutrons, which is four nucleons in total. So in alpha decay the nucleon number falls by four, not two, while the proton number falls by two. Take four off the top and two off the bottom. The two on the bottom matches the two protons, but the top must drop by the full four nucleons that left.",
    microExample: "^238_92 U emits alpha to give ^234_90 Th: nucleon 238 - 4 = 234, proton 92 - 2 = 90.",
    figure: null,
    check: {
      question: "In alpha decay, by how much does the nucleon number fall?",
      answer: "By four, because an alpha particle carries away two protons and two neutrons, which is four nucleons."
    }
  },
  {
    id: "rad-eq-beta-proton",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-equations",
    label: "Beta decay lowers the proton number",
    belief: "In beta decay the proton number falls, the way it does in alpha decay.",
    tell: "The student decreases the proton number after beta decay, or leaves it unchanged, instead of raising it by one.",
    whyItHappens: "Alpha decay lowers the proton number, so students carry the same downward habit into beta decay, and the electron's minus sign seems to point that way too.",
    reteach: "In beta decay the proton number rises by one, it does not fall. That is because a neutron turns into a proton inside the nucleus, so the nucleus gains a proton. The nucleon number stays the same, since a neutron simply became a proton and the total count of nucleons is unchanged. So for beta decay, keep the top number the same and add one to the bottom number.",
    microExample: "^131_53 I emits beta to give ^131_54 Xe: nucleon stays 131, proton 53 rises to 54.",
    figure: "fig-22-06-beta-emission.svg",
    check: {
      question: "In beta decay, what happens to the proton number?",
      answer: "It rises by one, because a neutron changes into a proton. The nucleon number stays the same."
    }
  },
  {
    id: "rad-eq-gamma-change",
    topicKey: "t20-radioactivity",
    subtopic: "nuclear-equations",
    label: "Gamma emission changes the element",
    belief: "Emitting a gamma ray changes the proton number or the nucleon number of the nucleus.",
    tell: "The student changes the numbers after gamma emission, or says the nucleus becomes a different element.",
    whyItHappens: "Alpha and beta both change the nucleus into a new element, so students assume gamma must do the same.",
    reteach: "Gamma emission changes neither the proton number nor the nucleon number. The nucleus only sheds extra energy as an electromagnetic wave. No protons or neutrons leave, so the nucleus stays the very same element, just with less energy. In a gamma equation the symbol and both numbers are identical on each side, with only a gamma ray added.",
    microExample: "^60_27 Co emits gamma to give ^60_27 Co plus a gamma ray: the proton and nucleon numbers are unchanged.",
    figure: null,
    check: {
      question: "Does gamma emission change the proton number or nucleon number of a nucleus?",
      answer: "No. Gamma emission only removes energy, so the element and both numbers stay exactly the same."
    }
  },
  {
    id: "rad-halflife-amount",
    topicKey: "t20-radioactivity",
    subtopic: "half-life",
    label: "Half-life depends on the starting amount",
    belief: "A bigger sample of the same isotope has a longer half-life than a smaller one.",
    tell: "The student says the larger sample takes longer to halve, or that using more material stretches the half-life.",
    whyItHappens: "It feels like more material should take longer to decay away, so students link the half-life to the size of the sample.",
    reteach: "Half-life does not depend on how much you start with. It is a fixed property of the isotope itself. A large sample and a tiny sample of the same isotope halve in exactly the same time, because half-life is about the fraction that decays, not the amount. The bigger sample does have more decays each second, but it still takes the same time to drop to half of whatever it started with.",
    microExample: "80 g and 8 g of the same isotope both fall to half, 40 g and 4 g, in one half-life.",
    figure: "fig-22-05-half-life-curve.svg",
    check: {
      question: "Does a larger sample of an isotope have a longer half-life than a small sample of the same isotope?",
      answer: "No. The half-life is the same, because it depends only on the isotope, not on how much you have."
    }
  },
  {
    id: "rad-halflife-complete",
    topicKey: "t20-radioactivity",
    subtopic: "half-life",
    label: "Half-life is the time to decay completely",
    belief: "After one half-life the source has fully decayed, or after two half-lives nothing is left.",
    tell: "The student expects the source to reach zero after one or two half-lives, instead of halving each time.",
    whyItHappens: "The word half is read as though it means the source is used up in a couple of steps, and the idea of endless halving feels strange.",
    reteach: "One half-life is the time for the amount to fall to half, not to nothing. After the next half-life it halves again to a quarter, then to an eighth, and so on. The amount keeps halving and never quite reaches zero. So after two half-lives you still have a quarter left, not nothing. Each half-life removes half of what remains, not a fixed slice of the original.",
    microExample: "Start 800: after one half-life 400, after two 200, after three 100. It is not zero after two.",
    figure: "fig-22-05-half-life-curve.svg",
    check: {
      question: "How much of a source is left after two half-lives?",
      answer: "A quarter of the original. Each half-life leaves half of what was there, so it halves twice to one quarter."
    }
  },
  {
    id: "rad-halflife-linear",
    topicKey: "t20-radioactivity",
    subtopic: "half-life",
    label: "Decay treated as a straight-line fall",
    belief: "The count rate falls by the same fixed amount in each half-life until it reaches zero.",
    tell: "The student subtracts a constant number each interval, so the decay looks like a straight ramp down to zero.",
    whyItHappens: "Straight-line change is the most familiar pattern, so students apply steady subtraction instead of repeated halving.",
    reteach: "Radioactive decay is not a straight line. In each half-life the count rate falls to half of what it was, so the size of the drop keeps shrinking. From 800 you lose 400, then only 200, then only 100. Because each step halves the remainder, the curve is steep at first and then flattens, and it never truly reaches zero. So halve each time, do not subtract the same number each time.",
    microExample: "800 to 400 (drop 400), 400 to 200 (drop 200), 200 to 100 (drop 100): the drops shrink, not stay equal.",
    figure: "fig-22-05-half-life-curve.svg",
    check: {
      question: "Does a source lose the same amount of activity in every half-life?",
      answer: "No. It loses half of whatever remains, so each drop is smaller than the one before, giving a curve, not a straight line."
    }
  },
  {
    id: "rad-halflife-count",
    topicKey: "t20-radioactivity",
    subtopic: "half-life",
    label: "Number of half-lives counted wrongly",
    belief: "You can read off the number of half-lives without carefully counting how many times the amount has halved.",
    tell: "The student is off by one on the halvings, or uses the total time as the number of half-lives instead of dividing by the half-life.",
    whyItHappens: "It is easy to lose track when halving down a chain, and the difference between total time and number of half-lives is quick to blur.",
    reteach: "Take the counting slowly. First work out the number of half-lives by dividing the total time by the half-life. Then halve the starting value exactly that many times, counting each arrow as you go. It helps to write the chain out, so you do not stop one step too early or too late. Getting the count right is the part where careful students pull ahead.",
    microExample: "Half-life 5 s over 30 s: number of half-lives = 30 / 5 = 6, so halve six times, not five.",
    figure: null,
    check: {
      question: "A source has a half-life of five seconds. How many half-lives pass in thirty seconds?",
      answer: "Six, because you divide the total time by the half-life, thirty divided by five."
    }
  },
  {
    id: "rad-background-subtract",
    topicKey: "t20-radioactivity",
    subtopic: "activity-background",
    label: "Background count not subtracted",
    belief: "You can use the measured count rate directly in a half-life calculation.",
    tell: "The student puts the raw meter reading into the halving without first taking away the background count rate.",
    whyItHappens: "The meter reading is the number in front of them, so it feels ready to use, and the background contribution is easy to overlook.",
    reteach: "A detector always picks up some background radiation as well as the source, so the raw reading is a bit too high. Before you do a half-life calculation, find the corrected count rate by taking the background count rate away from the measured count rate. Working with the corrected values is what makes the numbers halve cleanly. So always subtract the background first, then start halving.",
    microExample: "Measured 825 counts/min with background 25: corrected = 825 - 25 = 800 counts/min before halving.",
    figure: null,
    check: {
      question: "Before finding a half-life from a detector reading, what should you do about the background count?",
      answer: "Subtract it from the measured count rate first, so you work with the corrected count rate that halves cleanly."
    }
  },
  {
    id: "rad-background-source",
    topicKey: "t20-radioactivity",
    subtopic: "activity-background",
    label: "Background radiation seen as all man-made",
    belief: "Background radiation comes entirely from human activity such as power stations and medical scans.",
    tell: "The student lists only artificial sources for background radiation and leaves out the natural ones.",
    whyItHappens: "Radiation gets talked about in the news alongside nuclear plants and medical scans, so students link it only to human sources.",
    reteach: "Most background radiation is actually natural. It comes from rocks and soil, from cosmic rays reaching us from space, from radon gas in the air, and even from the food and drink we take in, which carry a little radioactive potassium. Human sources like medical scans and power station waste add to it, but the natural share is the larger part. So background radiation is mostly around us naturally, not just from what people make.",
    microExample: "Natural: rocks, cosmic rays, radon, food. Artificial: medical X-rays, nuclear waste.",
    figure: null,
    check: {
      question: "Name one natural source of background radiation.",
      answer: "Any of rocks and soil, cosmic rays from space, radon gas in the air, or radioactive potassium in food and drink."
    }
  },
  {
    id: "rad-fusion-fission-swap",
    topicKey: "t20-radioactivity",
    subtopic: "fission-fusion",
    label: "Fission and fusion swapped",
    belief: "Fission is joining light nuclei together, and fusion is splitting a heavy nucleus apart.",
    tell: "The student describes fusion as a heavy nucleus breaking up, or fission as small nuclei combining.",
    whyItHappens: "The two words look and sound alike, and both release energy from the nucleus, so their meanings are easy to switch.",
    reteach: "Keep the two apart by the direction of change. Fission splits a heavy nucleus into two lighter ones, and it is started by firing a neutron. Fusion joins two light nuclei into a single heavier one, and it needs enormous heat and pressure. A memory hook is that fusion fuses things together, joining them, while fission splits them apart. Both release energy, but one breaks up and the other joins.",
    microExample: "Fission: a heavy U-235 nucleus splits. Fusion: light hydrogen nuclei join to form helium.",
    figure: "fig-22-08-nuclear-fusion.svg",
    check: {
      question: "Which process joins two light nuclei into a heavier one, fission or fusion?",
      answer: "Fusion joins light nuclei together. Fission is the opposite, splitting a heavy nucleus into lighter ones."
    }
  },
  {
    id: "rad-fission-neutron",
    topicKey: "t20-radioactivity",
    subtopic: "fission-fusion",
    label: "A charged particle used to start fission",
    belief: "Fission is best started by firing a proton or an alpha particle at the nucleus.",
    tell: "The student chooses a charged particle to trigger fission, expecting it to be pulled or pushed into the nucleus.",
    whyItHappens: "Students reach for a familiar charged particle and forget that the positive nucleus would repel it.",
    reteach: "Fission is started with a neutron, and the reason is its charge, or rather its lack of one. A neutron has no charge, so the positive nucleus does not repel it, and it can reach the nucleus easily. A proton or an alpha particle is positive, so the nucleus would push it away before it arrived. That is why a neutral neutron is the right choice to trigger fission.",
    microExample: "A neutron ^1_0 n has no charge, so it slips into ^235_92 U without being repelled.",
    figure: "fig-22-07-nuclear-fission.svg",
    check: {
      question: "Why is a neutron, rather than a proton, used to start nuclear fission?",
      answer: "A neutron has no charge, so it is not repelled by the positive nucleus and can reach it. A proton would be pushed away."
    }
  },
  {
    id: "rad-uses-source",
    topicKey: "t20-radioactivity",
    subtopic: "uses",
    label: "Wrong source chosen for the job",
    belief: "Any radiation source will do for a task like a thickness gauge, whatever its penetration.",
    tell: "The student picks alpha for monitoring sheet thickness, or ignores whether the radiation can pass through the material.",
    whyItHappens: "Students focus on the idea of using radiation and skip matching the penetrating power to the material being measured.",
    reteach: "The right source depends on how far the radiation must travel through the material. For a thickness gauge the radiation has to pass through the sheet and reach the detector, changing a little as the thickness changes. Alpha is stopped by even a thin sheet, so it is no use here. Beta suits thin materials like paper or foil, and gamma suits thicker materials like metal sheet. So match the penetration to the job.",
    microExample: "Thin foil: use a beta source. Thick metal: use gamma. Alpha is stopped completely, so it cannot gauge either.",
    figure: "fig-22-09-thickness-monitoring.svg",
    check: {
      question: "Why is an alpha source no good for measuring the thickness of a metal sheet?",
      answer: "Alpha is stopped by even a thin barrier, so none would pass through the metal to the detector. Gamma is used instead."
    }
  }
];
