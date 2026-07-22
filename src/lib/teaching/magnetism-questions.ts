import type { TeachQuestion } from "@/lib/teaching/types";

// magnetism-questions.ts
// Teaching question bank for O-Level Physics, Magnetism (topicKey "t17-magnetism").
// Every wrong option maps to the misconception it reveals (see magnetism-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 19 - Magnetism.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

export const MAGNETISM_QUESTIONS: TeachQuestion[] = [
  {
    id: "mag-q-01",
    topicKey: "t17-magnetism",
    subtopic: "magnetic-materials",
    stem: "Which of these materials can be made into a magnet?",
    figure: "fig-19-01-domains.svg",
    options: ["Iron", "Copper", "Aluminium", "Wood"],
    correct: 0,
    distractorMisconceptions: { 1: "mag-materials-1", 2: "mag-materials-1", 3: "mag-materials-1" },
    walkthrough: [
      "Only a few materials are magnetic and can be made into magnets.",
      "The main ones are iron, cobalt, nickel and their alloys such as steel.",
      "Copper, aluminium and wood are all non magnetic, so a magnet does nothing to them.",
      "So the only one on the list that can become a magnet is iron."
    ],
    explain: "Iron is one of the few magnetic materials, along with cobalt, nickel and steel, so it can be magnetised. Copper and aluminium are metals, but they are non magnetic, and wood is not a metal at all. Being a metal does not make something magnetic."
  },
  {
    id: "mag-q-02",
    topicKey: "t17-magnetism",
    subtopic: "testing-for-a-magnet",
    stem: "Which single observation proves for certain that a metal bar is a magnet?",
    figure: "fig-19-03-pole-law.svg",
    options: [
      "It repels one end of a known magnet.",
      "It attracts an iron nail.",
      "It is attracted to a known magnet.",
      "It hangs vertically when it is suspended."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-attract-2", 2: "mag-attract-1", 3: "mag-poles-2" },
    walkthrough: [
      "A plain magnetic material, like iron, is attracted to a magnet even though it is not a magnet.",
      "So attracting things cannot prove the bar is a magnet.",
      "Only a magnet can push another magnet away.",
      "So repelling a known magnet is the one test that proves the bar is a magnet."
    ],
    explain: "Attraction proves nothing, because an unmagnetised magnetic material is attracted to a magnet too. Repulsion is the only reliable test, because only a magnet can repel another magnet. A freely suspended magnet settles along north to south, not vertically, so hanging vertically is not a magnet test either."
  },
  {
    id: "mag-q-03",
    topicKey: "t17-magnetism",
    subtopic: "induced-magnetism",
    stem: "An iron nail hangs from the N pole of a magnet. Which statement about the nail is correct?",
    figure: "fig-19-04-induced-magnetism.svg",
    options: [
      "Its top end becomes an S pole, and its magnetism is temporary.",
      "Its top end becomes an N pole, so it is held by like poles.",
      "It becomes a permanent magnet and stays magnetised after the magnet is removed.",
      "It is not magnetised at all; the magnet simply grips it."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-induced-2", 2: "mag-induced-1", 3: "mag-induced-3" },
    walkthrough: [
      "The nail is near the magnet's north pole, so it becomes an induced magnet.",
      "The near end always becomes the opposite pole, so the top of the nail becomes a south pole.",
      "Now a north pole faces a south pole, so the nail is attracted and held.",
      "This induced magnetism is only temporary, so it goes when the magnet is taken away."
    ],
    explain: "While the nail hangs there it becomes an induced magnet. Its top end, next to the north pole, becomes a south pole, so unlike poles face each other and pull together. If the top became a north pole they would repel. The nail really is magnetised, but only temporarily, so it is not a permanent magnet."
  },
  {
    id: "mag-q-04",
    topicKey: "t17-magnetism",
    subtopic: "induced-magnetism",
    stem: "A short chain of iron nails hangs from the pole of a magnet. What process lets one nail hold up the next?",
    figure: "fig-19-05-nail-chain.svg",
    options: [
      "Induced magnetism, so each nail becomes a magnet and magnetises the next.",
      "The nails were already permanent magnets before they were hung.",
      "Like poles on the nails attract each other.",
      "Each nail keeps its magnetism forever once it is hung."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-attract-1", 2: "mag-polelaw-1", 3: "mag-induced-1" },
    walkthrough: [
      "Each nail sits in the field of the magnet or the nail above it.",
      "So each nail becomes an induced magnet with its own poles.",
      "That induced magnet then induces magnetism in the next nail down.",
      "This chain of induced magnetism is what holds the nails together."
    ],
    explain: "The process is induced magnetism. Each nail becomes a temporary magnet and induces magnetism in the one below, so the chain hangs together. The nails were not magnets to begin with, and they are held by unlike poles attracting, not like poles. The magnetism is temporary, so the nails do not keep it forever."
  },
  {
    id: "mag-q-05",
    topicKey: "t17-magnetism",
    subtopic: "law-of-poles",
    stem: "The S poles of two magnets are brought close together. What happens?",
    figure: "fig-19-03-pole-law.svg",
    options: [
      "They attract each other.",
      "They repel each other.",
      "They pull together into one bigger magnet.",
      "They attract, because a south pole always attracts a south pole."
    ],
    correct: 1,
    distractorMisconceptions: { 0: "mag-polelaw-1", 2: "mag-polelaw-1", 3: "mag-polelaw-1" },
    walkthrough: [
      "Two south poles are like poles, because they are the same kind.",
      "The rule for magnets is that like poles repel.",
      "So the two south poles push away from each other.",
      "They would only attract if they were unlike poles, a north and a south."
    ],
    explain: "Two south poles are like poles, and like poles repel, so they push apart. Only unlike poles, a north and a south, attract. There is no rule that same poles pull together, that is the law of poles turned the wrong way round."
  },
  {
    id: "mag-q-06",
    topicKey: "t17-magnetism",
    subtopic: "properties-of-magnets",
    stem: "Where along a bar magnet is its magnetic effect strongest?",
    figure: "fig-19-10-bar-field-lines.svg",
    options: [
      "At the two poles, which are the ends.",
      "In the middle of the magnet.",
      "The same everywhere along the magnet.",
      "Only at the north pole, never the south."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-poles-1", 2: "mag-poles-1", 3: "mag-poles-1" },
    walkthrough: [
      "On a field diagram, the field lines are packed most closely at the two ends.",
      "Close lines mean a strong field.",
      "So the magnet is strongest at its two poles and weakest in the middle.",
      "Both poles are strong, the north and the south alike."
    ],
    explain: "A bar magnet is strongest at its two poles, because the field lines crowd together there. The middle is the weakest part, not the strongest, and the pull is not spread out evenly. Both poles are strong, so it is not just the north end."
  },
  {
    id: "mag-q-07",
    topicKey: "t17-magnetism",
    subtopic: "properties-of-magnets",
    stem: "A bar magnet is hung by a thread so that it can swing freely. How does it come to rest?",
    figure: "fig-19-02-suspended-magnet.svg",
    options: [
      "Pointing roughly north to south.",
      "Pointing roughly east to west.",
      "In a different random direction each time.",
      "Hanging straight up and down."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-poles-2", 2: "mag-poles-2", 3: "mag-poles-2" },
    walkthrough: [
      "The Earth behaves like a giant magnet.",
      "So it turns a freely hanging magnet until it lines up with the Earth's field.",
      "The magnet settles pointing roughly north to south.",
      "The end that faces the Earth's north is called the north seeking pole."
    ],
    explain: "A freely suspended magnet always settles roughly along north to south, because the Earth's own magnetism turns it. It does not point east to west, it does not choose a random direction, and it does not hang vertically. The end that swings to face the Earth's north is the north seeking pole."
  },
  {
    id: "mag-q-08",
    topicKey: "t17-magnetism",
    subtopic: "domains",
    stem: "In an unmagnetised iron bar, what are the domains doing?",
    figure: "fig-19-01-domains.svg",
    options: [
      "Pointing in random directions, so their fields cancel out.",
      "There are no domains until the bar is magnetised.",
      "All pointing the same way, but too weak to notice.",
      "Lined up only at the two ends of the bar."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-domains-1", 2: "mag-domains-1", 3: "mag-domains-1" },
    walkthrough: [
      "A domain is a small group of atoms whose tiny atomic magnets point the same way.",
      "The domains are always there in the iron, magnetised or not.",
      "In an unmagnetised bar they point in all directions at random.",
      "Their fields cancel out, so the bar has no overall magnetism."
    ],
    explain: "The domains are already there in the unmagnetised bar, but they point in random directions, so their fields cancel and there is no overall magnet. Magnetising does not create domains, it lines up the ones that are already present so their fields add together."
  },
  {
    id: "mag-q-09",
    topicKey: "t17-magnetism",
    subtopic: "induced-magnetism",
    stem: "A soft iron bar is placed a short distance beyond the N pole of a magnet. What are the poles of the iron bar?",
    figure: "fig-19-18-soft-iron-field.svg",
    options: [
      "Near end S, far end N.",
      "Near end N, far end S.",
      "The iron bar stays unmagnetised, with no poles.",
      "Near end becomes a permanent N pole that lasts after the magnet leaves."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-induced-2", 2: "mag-induced-3", 3: "mag-induced-1" },
    walkthrough: [
      "The iron becomes an induced magnet in the magnet's field.",
      "The near end always becomes the opposite pole to the pole facing it.",
      "The magnet's north pole faces the bar, so the near end becomes a south pole.",
      "That leaves the far end as a north pole."
    ],
    explain: "The soft iron becomes an induced magnet. Its near end becomes a south pole, opposite to the magnet's north pole, so the two attract, and the far end becomes a north pole. If the near end became north the two would repel. The iron really is magnetised while it is there, but only temporarily, so it is not permanent."
  },
  {
    id: "mag-q-10",
    topicKey: "t17-magnetism",
    subtopic: "induced-magnetism",
    stem: "A magnet holds a hanging chain of iron nails. The magnet is then pulled away. What happens?",
    figure: "fig-19-05-nail-chain.svg",
    options: [
      "The nails fall apart, because iron loses its induced magnetism almost at once.",
      "The nails stay stuck together as permanent magnets.",
      "The nails stay magnetised for hours, then slowly drop one by one.",
      "Nothing changes, because the nails were never magnetised in the first place."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-induced-1", 2: "mag-induced-1", 3: "mag-induced-3" },
    walkthrough: [
      "The nails were held together by induced magnetism from the magnet.",
      "Iron is a soft magnetic material, so it loses its magnetism almost at once.",
      "When the magnet leaves, the field that lined up the domains is gone.",
      "The domains fall back into disorder, so the nails lose their magnetism and drop apart."
    ],
    explain: "Once the magnet is removed, the iron nails lose their induced magnetism almost immediately, their domains fall back into disorder, and the chain drops apart. The nails do not keep the magnetism, so they do not stay stuck or hold on for hours. And they truly were magnetised while hanging, which is how they held together at all."
  },
  {
    id: "mag-q-11",
    topicKey: "t17-magnetism",
    subtopic: "soft-and-hard-materials",
    stem: "In magnetism, what does it mean to call soft iron a soft magnetic material?",
    figure: null,
    options: [
      "Its magnetism is easily changed; it magnetises and demagnetises readily.",
      "It is physically soft and bends easily.",
      "It is a weak magnet that can never become strong.",
      "It cannot be magnetised at all."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-soft-1", 2: "mag-soft-1", 3: "mag-soft-1" },
    walkthrough: [
      "Soft and hard here are about magnetism, not about texture.",
      "A soft magnetic material gains magnetism easily and loses it just as easily.",
      "So soft iron makes a temporary magnet.",
      "It has nothing to do with how the metal feels to the touch."
    ],
    explain: "Calling iron soft means its magnetism is easily changed, so it magnetises and demagnetises readily and makes a temporary magnet. It is not about the metal being bendy or squishy. Soft iron can be strongly magnetised, it just does not hold on to the magnetism."
  },
  {
    id: "mag-q-12",
    topicKey: "t17-magnetism",
    subtopic: "soft-and-hard-materials",
    stem: "Which material is best for the core of an electromagnet?",
    figure: "fig-19-06-solenoid-dc.svg",
    options: ["Soft iron", "Steel", "Copper", "Aluminium"],
    correct: 0,
    distractorMisconceptions: { 1: "mag-soft-2", 2: "mag-materials-1", 3: "mag-materials-1" },
    walkthrough: [
      "An electromagnet has to switch its magnetism on and off with the current.",
      "So its core must gain and lose magnetism easily.",
      "Soft iron does exactly that, so it is the right choice.",
      "Copper and aluminium are non magnetic, so they would not work as a core at all."
    ],
    explain: "Soft iron is best for an electromagnet core, because it magnetises the instant the current flows and loses it the instant the current stops. Steel would keep its magnetism after the current is off, which is not what you want. Copper and aluminium are non magnetic, so they cannot be a magnetic core."
  },
  {
    id: "mag-q-13",
    topicKey: "t17-magnetism",
    subtopic: "soft-and-hard-materials",
    stem: "Which material is best suited to be made into a permanent magnet?",
    figure: null,
    options: ["Soft iron", "Steel", "Copper", "Aluminium"],
    correct: 1,
    distractorMisconceptions: { 0: "mag-soft-3", 2: "mag-materials-1", 3: "mag-materials-1" },
    walkthrough: [
      "A permanent magnet has to keep its magnetism.",
      "Steel is a hard magnetic material, so it holds on to its magnetism well.",
      "Soft iron would lose its magnetism almost at once, so it is no good for this.",
      "Copper and aluminium are non magnetic, so they cannot be magnets at all."
    ],
    explain: "Steel is best for a permanent magnet, because it keeps its magnetism well once magnetised. Soft iron magnetises easily but loses it just as fast, so it makes only a temporary magnet. Copper and aluminium are non magnetic, so they cannot become magnets."
  },
  {
    id: "mag-q-14",
    topicKey: "t17-magnetism",
    subtopic: "magnetising",
    stem: "How would you magnetise a steel bar using a solenoid?",
    figure: "fig-19-06-solenoid-dc.svg",
    options: [
      "Place the bar inside the coil and pass a steady direct current through it.",
      "Place the bar inside the coil and pass an alternating current through it.",
      "Slowly pull the bar out of the coil while an alternating current flows.",
      "Heat the bar strongly while it sits inside the coil."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-magnetise-1", 2: "mag-magnetise-1", 3: "mag-demag-2" },
    walkthrough: [
      "To magnetise, you need a steady field to line the domains up.",
      "A direct current flows one way, so it gives that steady field.",
      "The domains line up and the bar comes out magnetised.",
      "An alternating current would keep reversing and flipping the domains, so it would not magnetise."
    ],
    explain: "To magnetise a bar in a solenoid you use a steady direct current, which lines up the domains. An alternating current keeps reversing, so it is used to demagnetise, not to magnetise, and slowly withdrawing a bar from an alternating current is a demagnetising method. Heating the bar would only shake the domains out of line."
  },
  {
    id: "mag-q-15",
    topicKey: "t17-magnetism",
    subtopic: "demagnetising",
    stem: "What is the neatest way to demagnetise a steel magnet using a solenoid?",
    figure: "fig-19-08-demagnetise-ac.svg",
    options: [
      "Use an alternating current, then slowly withdraw the magnet from the coil.",
      "Use a steady direct current, then slowly withdraw the magnet from the coil.",
      "Use a steady direct current and hold the magnet still inside the coil.",
      "Heat the magnet, since heating only makes it stronger, then cool it."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-demag-1", 2: "mag-demag-1", 3: "mag-demag-2" },
    walkthrough: [
      "To demagnetise, you want to leave the domains pointing in random directions.",
      "An alternating current keeps reversing, so its field keeps flipping the domains.",
      "As you slowly withdraw the magnet, that flipping field dies away.",
      "The domains are left in disorder, so the magnetism is gone."
    ],
    explain: "The neatest way is to use an alternating current and slowly withdraw the magnet, so the reversing field fades while the domains end up random. A direct current would magnetise, not demagnetise. And heating does not strengthen a magnet, it weakens it, because the heat shakes the domains out of line."
  },
  {
    id: "mag-q-16",
    topicKey: "t17-magnetism",
    subtopic: "demagnetising",
    stem: "What happens to a steel magnet if it is heated very strongly?",
    figure: null,
    options: [
      "It loses its magnetism, as the domains are shaken out of line.",
      "It becomes a stronger magnet.",
      "Its north and south poles swap over.",
      "Nothing happens to its magnetism at all."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-demag-2", 2: "mag-demag-2", 3: "mag-demag-2" },
    walkthrough: [
      "Strong heating gives the domains extra energy.",
      "That energy jostles the domains out of their neat alignment.",
      "Once the domains point randomly again, the fields cancel.",
      "So the magnet loses its magnetism."
    ],
    explain: "Heating a magnet strongly makes it lose its magnetism, because the heat shakes the domains out of alignment and back into disorder. It does not make the magnet stronger, it does not swap the poles, and it certainly does something, so heating is actually one way to demagnetise a magnet."
  },
  {
    id: "mag-q-17",
    topicKey: "t17-magnetism",
    subtopic: "solenoid-polarity",
    stem: "You look end on at a solenoid and the current there flows clockwise. What is the polarity of that end?",
    figure: "fig-19-06-solenoid-dc.svg",
    options: [
      "A south pole.",
      "A north pole.",
      "A north pole, because the current end is always north.",
      "No pole at all, since a solenoid only has poles with an alternating current."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-solenoid-1", 2: "mag-solenoid-1", 3: "mag-magnetise-1" },
    walkthrough: [
      "Look straight at the end and see which way the current goes round.",
      "A clockwise current makes that end a south pole.",
      "A handy check is that the letter S can be traced clockwise.",
      "Anticlockwise would give a north pole instead."
    ],
    explain: "An end where the current flows clockwise is a south pole, and an anticlockwise end is a north pole. You can trace a letter S clockwise and a letter N anticlockwise to remember it. A solenoid carrying a direct current does have clear poles, so it is not true that it needs an alternating current to form poles."
  },
  {
    id: "mag-q-18",
    topicKey: "t17-magnetism",
    subtopic: "field-lines",
    stem: "Outside a bar magnet, which way do the magnetic field lines point?",
    figure: "fig-19-10-bar-field-lines.svg",
    options: [
      "Out of the north pole and into the south pole.",
      "Into the north pole and out of the south pole.",
      "Outward from both ends, away from the magnet.",
      "They have no direction; field lines are only shapes."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-field-1", 2: "mag-field-1", 3: "mag-field-1" },
    walkthrough: [
      "There is a fixed rule for field line direction outside a magnet.",
      "The lines leave the north pole and enter the south pole.",
      "So the arrows sweep from the north end round to the south end.",
      "A plotting compass agrees, its needle points along the line towards the south pole."
    ],
    explain: "Outside a magnet, field lines point out of the north pole and into the south pole. They do not run into the north pole, and they do not point outward from both ends, because they form continuous loops. Field lines carry a direction, which is why we draw arrows on them."
  },
  {
    id: "mag-q-19",
    topicKey: "t17-magnetism",
    subtopic: "field-lines",
    stem: "Which statement about magnetic field lines is correct?",
    figure: "fig-19-11-uniform-nonuniform.svg",
    options: [
      "Where the lines are closer together, the field is stronger.",
      "Field lines can cross one another.",
      "Where the lines are closer together, the field is weaker.",
      "Field lines cross wherever the field is strong."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-field-2", 2: "mag-field-3", 3: "mag-field-2" },
    walkthrough: [
      "The spacing of field lines shows the strength of the field.",
      "Close lines mean a strong field, spread out lines mean a weak field.",
      "Field lines never cross, because the field points only one way at each point.",
      "So the correct statement is that closer lines mean a stronger field."
    ],
    explain: "Closely packed field lines mean a strong field, which is why a magnet is strongest at its poles. Field lines never cross, since the field can only point one way at each point, so crossing is never allowed, strong field or not. Closer lines mean stronger, not weaker."
  },
  {
    id: "mag-q-20",
    topicKey: "t17-magnetism",
    subtopic: "field-between-magnets",
    stem: "Two like poles face each other, with a neutral point midway between them. What is true at the neutral point?",
    figure: "fig-19-13-like-poles-field.svg",
    options: [
      "The two fields are equal and opposite and cancel, so there is no net field.",
      "The field is at its strongest there.",
      "Both magnets pull hardest there.",
      "A brand new pole forms there."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-neutral-1", 2: "mag-neutral-1", 3: "mag-neutral-1" },
    walkthrough: [
      "At the neutral point the fields of the two magnets meet head on.",
      "They are equal in size and opposite in direction.",
      "So they cancel each other out completely.",
      "That leaves no net field and no field line at that point."
    ],
    explain: "A neutral point is where the two magnets' fields are equal and opposite, so they cancel to zero. It is a place of no field, not the strongest field, so there is no extra pull and no new pole. A compass placed there has nothing to line up with."
  },
  {
    id: "mag-q-21",
    topicKey: "t17-magnetism",
    subtopic: "plotting-compass",
    stem: "A plotting compass is placed in the field of a bar magnet. Which way does its north seeking end point?",
    figure: "fig-19-15-plotting-compass.svg",
    options: [
      "Along the field line, towards the magnet's south pole.",
      "Straight at the magnet's north pole.",
      "Always at the Earth's north, ignoring the bar magnet.",
      "At right angles to the field line."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-compass-1", 2: "mag-compass-1", 3: "mag-compass-1" },
    walkthrough: [
      "A plotting compass is a tiny bar magnet free to turn.",
      "It lines up with the field where it sits.",
      "Outside the magnet, the field runs away from the north pole and towards the south pole.",
      "So the compass north seeking tip points along the line, towards the magnet's south pole."
    ],
    explain: "The compass needle lines up along the field line, which outside the magnet points towards the magnet's south pole. It does not aim at the magnet's north pole, it is not stuck on the Earth's north when a strong bar magnet is beside it, and it lies along the field line, not across it."
  },
  {
    id: "mag-q-22",
    topicKey: "t17-magnetism",
    subtopic: "plotting-compass",
    stem: "A plotting compass sits just beyond the S pole of a bar magnet. Which way does its north seeking end point?",
    figure: "fig-19-23-mcq-compass.svg",
    options: [
      "Towards the magnet, in towards the S pole.",
      "Away from the magnet.",
      "Straight up.",
      "It spins with no fixed direction."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-compass-1", 2: "mag-poles-2", 3: "mag-poles-2" },
    walkthrough: [
      "Outside the magnet, field lines point into the south pole.",
      "The compass north seeking tip lines up along the field line.",
      "Just beyond the south pole, the field points back towards the magnet.",
      "So the compass tip points towards the magnet, into the south pole."
    ],
    explain: "Just beyond the south pole the field lines are heading in towards that pole, so the compass north seeking tip points towards the magnet. It does not point away, because that would be following the field backwards. It does not point up or spin freely, because the magnet's field sets its direction."
  },
  {
    id: "mag-q-23",
    topicKey: "t17-magnetism",
    subtopic: "plotting-compass",
    stem: "Why is a plotting compass often preferred over iron filings for studying a magnetic field?",
    figure: "fig-19-15-plotting-compass.svg",
    options: [
      "It shows the direction of the field, not just its shape.",
      "Iron filings show the direction but not the shape.",
      "Iron filings cannot show the field at all.",
      "Iron filings point from south to north, giving the direction."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-filings-1", 2: "mag-filings-1", 3: "mag-filings-1" },
    walkthrough: [
      "Iron filings line up with the field and show its shape and spacing.",
      "But a filing has no way to show which end is which, so there are no arrows.",
      "A plotting compass needle actually points along the field.",
      "So the compass gives the direction as well as the shape."
    ],
    explain: "A plotting compass is preferred because it shows the direction of the field as well as its shape. Iron filings show only the shape and spacing, since each filing has no arrow to say which way the field points. So filings do reveal the pattern, but not the direction."
  },
  {
    id: "mag-q-24",
    topicKey: "t17-magnetism",
    subtopic: "field-between-magnets",
    stem: "Which arrangement produces a uniform magnetic field?",
    figure: "fig-19-14-uniform-flat-magnets.svg",
    options: [
      "Two flat opposite poles placed parallel and close together.",
      "A single bar magnet on its own.",
      "Two like poles facing each other.",
      "The space right next to one pole of a bar magnet."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-field-3", 2: "mag-neutral-1", 3: "mag-poles-1" },
    walkthrough: [
      "A uniform field has parallel, equally spaced field lines.",
      "Two flat opposite poles held parallel and close give exactly that between them.",
      "A single bar magnet has a field that spreads out, so it is non uniform.",
      "So the flat opposite poles are the uniform case."
    ],
    explain: "Two flat opposite poles placed parallel and close give a uniform field, with parallel evenly spaced lines between them. A single bar magnet gives a non uniform field, because the lines spread out. Two like poles give a neutral point, not a uniform field, and right next to a single pole the field is strong and uneven."
  },
  {
    id: "mag-q-25",
    topicKey: "t17-magnetism",
    subtopic: "storing-magnets",
    stem: "Why are bar magnets stored in pairs with soft iron keepers laid across their ends?",
    figure: "fig-19-09-soft-iron-keepers.svg",
    options: [
      "The keepers become induced magnets, forming a closed loop that keeps the domains aligned.",
      "The keepers are made of steel, chosen because steel is magnetised most easily.",
      "Each keeper becomes a permanent magnet and stays magnetised forever.",
      "The keepers are physically soft, so they cushion the magnetism and stop it leaking."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "mag-soft-2", 2: "mag-induced-1", 3: "mag-soft-1" },
    walkthrough: [
      "The two magnets are set with opposite poles at each end.",
      "A soft iron keeper across each pair of ends becomes an induced magnet.",
      "So north and south poles join up all the way round in a closed loop.",
      "With no free poles left exposed, the domains stay aligned and the magnets keep their strength."
    ],
    explain: "The soft iron keepers become induced magnets and close the loop of poles, so no free poles are left to disturb the domains, and the magnets keep their strength. The keepers are soft iron, not steel, and they are induced magnets, not permanent ones. Soft here means the magnetism is easily changed, not that the iron is a cushion."
  }
];
