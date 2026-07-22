import type { Misconception } from "@/lib/teaching/types";

// magnetism-misconceptions.ts
// Topic: O-Level Physics, Magnetism (topicKey "t17-magnetism")
// The tutor's diagnostic brain: the classic ways students go wrong in Magnetism,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 19 - Magnetism.md
// Spoken fields (reteach, tell, whyItHappens, check) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

export const MAGNETISM_MISCONCEPTIONS: Misconception[] = [
  {
    id: "mag-materials-1",
    topicKey: "t17-magnetism",
    subtopic: "magnetic-materials",
    label: "Every metal is treated as magnetic",
    belief: "All metals, and most solid materials, can be attracted by a magnet and made into magnets.",
    tell: "The student says a magnet will pick up copper or aluminium, or expects a plastic or wooden object to be magnetic.",
    whyItHappens: "Magnets are met mostly on fridges and steel objects, so magnetism gets tied to metal in general, and the fact that only a few metals respond is easy to miss.",
    reteach: "Only a short list of materials are magnetic. The main ones are iron, cobalt and nickel, and their alloys such as steel. These are the substances a magnet can attract and that can be turned into magnets. Most other things, including copper, aluminium, wood and plastic, are non magnetic, so a magnet does nothing to them at all. So before you decide a magnet will act on something, check whether it is iron, cobalt, nickel or steel.",
    microExample: "Copper and aluminium are metals, yet a magnet does not attract them. Iron, cobalt, nickel and steel are the magnetic ones.",
    figure: "fig-19-01-domains.svg",
    check: {
      question: "Name two everyday metals that a magnet does not attract.",
      answer: "Copper and aluminium. A magnet only acts on magnetic materials like iron, cobalt, nickel and steel."
    }
  },
  {
    id: "mag-attract-1",
    topicKey: "t17-magnetism",
    subtopic: "testing-for-a-magnet",
    label: "Anything attracted to a magnet is itself a magnet",
    belief: "If a piece of metal is pulled towards a magnet, then that piece must be a magnet too.",
    tell: "The student sees a nail jump to a magnet and concludes the nail is a magnet.",
    whyItHappens: "It feels fair that only a magnet would be pulled by a magnet, so attraction gets read as proof, and the idea of a plain magnetic material being pulled in is overlooked.",
    reteach: "Being attracted does not make something a magnet. Any magnetic material, like an ordinary iron nail, is pulled towards either pole of a magnet, even though the nail is not a magnet on its own. This happens because the nail becomes a temporary induced magnet while it is near. So attraction only tells you the object is a magnetic material. It does not tell you the object is a magnet.",
    microExample: "An unmagnetised iron nail is attracted to a magnet, but the nail is not a magnet, it is just a magnetic material.",
    figure: "fig-19-04-induced-magnetism.svg",
    check: {
      question: "A steel pin is pulled towards a magnet. Does that prove the pin is a magnet?",
      answer: "No. Any magnetic material is attracted to a magnet. Attraction only shows the pin is a magnetic material, not that it is a magnet."
    }
  },
  {
    id: "mag-attract-2",
    topicKey: "t17-magnetism",
    subtopic: "testing-for-a-magnet",
    label: "Attraction is taken as proof of magnetism",
    belief: "Seeing a bar attract another object is enough to prove the bar is a magnet.",
    tell: "The student picks attraction as the test that shows for certain that a metal bar is a magnet.",
    whyItHappens: "Attraction is the effect students see first and most often, so it becomes the go to test, and the fact that a plain magnetic material is attracted too gets forgotten.",
    reteach: "Attraction cannot prove something is a magnet, because an unmagnetised magnetic material is also attracted to either pole. The only reliable test is repulsion. Two objects only push each other apart when both are magnets with like poles facing. So if a metal bar clearly repels a known magnet, then the bar must be a magnet. If it only ever attracts, it might just be plain iron.",
    microExample: "Attracts a known magnet: could be iron or a magnet. Repels a known magnet: it is definitely a magnet.",
    figure: "fig-19-03-pole-law.svg",
    check: {
      question: "What is the one test that shows for certain that a metal bar is a magnet?",
      answer: "It has to repel a known magnet. Only a magnet can repel another magnet, while a plain magnetic material can only be attracted."
    }
  },
  {
    id: "mag-poles-1",
    topicKey: "t17-magnetism",
    subtopic: "properties-of-magnets",
    label: "A magnet pulls equally strongly all over",
    belief: "The magnetic effect of a bar magnet is the same at every point along it.",
    tell: "The student expects the middle of a bar magnet to hold as many nails as the ends.",
    whyItHappens: "A bar magnet looks the same all along its length, so students assume its pull is spread out evenly instead of concentrated.",
    reteach: "A magnet is strongest at its poles, the two ends, and weakest in the middle. On a field diagram you can see this, because the field lines are packed most closely at the ends and spread out along the sides. That is why a bar magnet picks up far more iron filings at its ends than at its centre. So the pull is not even, it is strongest at the two poles.",
    microExample: "Dip a bar magnet in iron filings: they cluster thickly at the two ends and hardly at all in the middle.",
    figure: "fig-19-10-bar-field-lines.svg",
    check: {
      question: "Where along a bar magnet is its magnetic effect strongest?",
      answer: "At the two poles, which are the ends. The middle of the magnet is where the effect is weakest."
    }
  },
  {
    id: "mag-poles-2",
    topicKey: "t17-magnetism",
    subtopic: "properties-of-magnets",
    label: "A suspended magnet settles in any direction",
    belief: "A freely hanging bar magnet settles pointing in a random direction, or straight up and down.",
    tell: "The student says a suspended magnet has no set resting direction, or expects it to hang vertically.",
    whyItHappens: "Students think of a hanging object as free to point anywhere, and miss that the Earth's own magnetism gently lines the magnet up.",
    reteach: "A bar magnet that can swing freely always settles pointing roughly north and south, because the Earth acts like a giant magnet and turns it. The end that swings round to face the Earth's geographic north is called the north seeking pole, and the other end is the south seeking pole. So it does not point randomly and it does not hang vertically. It lines up along the north to south direction every time.",
    microExample: "Hang a bar magnet by a thread: it turns until it lies along north to south, then stops.",
    figure: "fig-19-02-suspended-magnet.svg",
    check: {
      question: "Which way does a freely suspended bar magnet come to rest?",
      answer: "Roughly along north to south. The end that points to the Earth's north is the north seeking pole."
    }
  },
  {
    id: "mag-polelaw-1",
    topicKey: "t17-magnetism",
    subtopic: "law-of-poles",
    label: "The law of poles is reversed",
    belief: "Like poles attract each other and unlike poles repel each other.",
    tell: "The student says two north poles will pull together, or that a north and a south will push apart.",
    whyItHappens: "In everyday life we say opposites clash and like things get along, which is the opposite of how magnetic poles actually behave, so the rule gets flipped.",
    reteach: "The rule for magnets is like poles repel, and unlike poles attract. So two north poles push apart, and two south poles push apart, because they are alike. A north pole and a south pole pull together, because they are unlike. A short way to remember it is that opposites attract. So if you bring two of the same pole together, expect a push, not a pull.",
    microExample: "N and N push apart (repel). S and S push apart (repel). N and S pull together (attract).",
    figure: "fig-19-03-pole-law.svg",
    check: {
      question: "You bring the north pole of one magnet up to the north pole of another. Do they attract or repel?",
      answer: "They repel, because they are like poles. Only unlike poles, a north and a south, attract."
    }
  },
  {
    id: "mag-induced-1",
    topicKey: "t17-magnetism",
    subtopic: "induced-magnetism",
    label: "Induced magnetism is permanent",
    belief: "Once a piece of iron is magnetised by a nearby magnet, it stays a magnet after the magnet is removed.",
    tell: "The student says a chain of nails hanging from a magnet will stay stuck together once the magnet is taken away.",
    whyItHappens: "While the magnet is there the iron really does behave as a magnet, so students assume that new magnetism is kept, just like a permanent magnet.",
    reteach: "In soft iron, induced magnetism is only temporary. The iron acts as a magnet just while it is near or touching the permanent magnet. As soon as the magnet is taken away, the iron loses its induced magnetism almost at once, its domains fall back into disorder, and it stops being a magnet. That is why a hanging chain of iron nails drops apart the moment you remove the magnet at the top.",
    microExample: "Magnet held over nails: nails cling in a chain. Magnet removed: iron nails lose their magnetism and fall apart.",
    figure: "fig-19-05-nail-chain.svg",
    check: {
      question: "A magnet holds a chain of iron nails. What happens to the nails when the magnet is pulled away?",
      answer: "They fall apart, because iron loses its induced magnetism almost at once when the magnet is removed."
    }
  },
  {
    id: "mag-induced-2",
    topicKey: "t17-magnetism",
    subtopic: "induced-magnetism",
    label: "The induced near end becomes the same pole",
    belief: "When a magnet induces magnetism in iron, the near end of the iron becomes the same pole as the facing pole.",
    tell: "The student makes the near end of an induced bar the same pole as the magnet beside it, which would mean repulsion.",
    whyItHappens: "Students copy the label of the nearby pole straight onto the near end, without checking that the result has to explain the attraction they can see.",
    reteach: "When a magnet induces magnetism, the near end of the iron always becomes the opposite pole to the pole facing it. So if the iron is near the north pole of a magnet, the near end of the iron becomes a south pole, and the far end becomes north. Because unlike poles now face each other, the iron is attracted, which is exactly why a magnet picks up iron. If the near end became the same pole, the two would repel and nothing would be picked up.",
    microExample: "Iron placed near a magnet's N pole: near end becomes S, far end becomes N, so N faces S and they attract.",
    figure: "fig-19-04-induced-magnetism.svg",
    check: {
      question: "A soft iron bar is placed near the north pole of a magnet. What pole does the near end of the iron become?",
      answer: "A south pole. The near end always becomes the opposite pole, so the two unlike poles attract."
    }
  },
  {
    id: "mag-induced-3",
    topicKey: "t17-magnetism",
    subtopic: "induced-magnetism",
    label: "An attracted object is not magnetised at all",
    belief: "A nail held by a magnet stays completely unmagnetic, and only the big magnet has poles.",
    tell: "The student cannot explain how one nail holds up a second nail, because they think the first nail has no magnetism of its own.",
    whyItHappens: "The nail is not a permanent magnet, so students assume it has no magnetism at all, missing the temporary magnetism the magnet gives it.",
    reteach: "While a magnetic material is near or touching a magnet, it really does become a magnet itself, with its own north and south poles. This is called induced magnetism. It is temporary, but for now the nail can attract and hold other magnetic materials. That is how a magnet lifts a whole chain of nails, each nail becomes an induced magnet and induces magnetism in the next one down.",
    microExample: "Top nail on a magnet becomes an induced magnet, so its lower end can hold a second nail, which becomes a magnet too.",
    figure: "fig-19-05-nail-chain.svg",
    check: {
      question: "How can one iron nail hanging from a magnet hold up a second nail below it?",
      answer: "The first nail becomes an induced magnet while it hangs there, so it has poles of its own and can hold the next nail."
    }
  },
  {
    id: "mag-domains-1",
    topicKey: "t17-magnetism",
    subtopic: "domains",
    label: "Domains only exist once a material is magnetised",
    belief: "An unmagnetised iron bar has no domains, and domains are created when it is magnetised.",
    tell: "The student describes magnetising as making new domains appear, rather than lining up ones that were already there.",
    whyItHappens: "Domains are introduced together with magnets, so students link the very existence of domains to being magnetised, instead of to the material itself.",
    reteach: "The domains are always there in a magnetic material, whether it is magnetised or not. A domain is just a small group of atoms whose tiny atomic magnets point the same way. In an unmagnetised bar the domains point in all directions at random, so their fields cancel and there is no overall magnet. Magnetising does not create domains, it turns the ones that are already there so they all point the same way, and their fields add up.",
    microExample: "Unmagnetised: domains point every which way and cancel. Magnetised: the same domains now point one way and add up.",
    figure: "fig-19-01-domains.svg",
    check: {
      question: "In an unmagnetised iron bar, are there any domains?",
      answer: "Yes. The domains are already there, but they point in random directions so their fields cancel out."
    }
  },
  {
    id: "mag-soft-1",
    topicKey: "t17-magnetism",
    subtopic: "soft-and-hard-materials",
    label: "Soft magnetic means physically soft",
    belief: "Soft iron is called soft because it is bendy or physically soft to the touch.",
    tell: "The student explains soft iron by how the metal feels, not by how easily its magnetism changes.",
    whyItHappens: "The everyday meaning of soft is about texture, so students carry that over instead of using the special magnetic meaning.",
    reteach: "In magnetism, soft and hard are about how easily the magnetism is changed, not about texture. A soft magnetic material, like soft iron, is easily magnetised and just as easily loses its magnetism, so it makes a temporary magnet. A hard magnetic material, like steel, is difficult to magnetise but keeps its magnetism well, so it makes a permanent magnet. So soft iron is not squishy, its magnetism just comes and goes readily.",
    microExample: "Soft iron: magnetism gained and lost easily (temporary). Steel: hard to magnetise but keeps it (permanent).",
    figure: null,
    check: {
      question: "What does it mean to call soft iron a soft magnetic material?",
      answer: "It means its magnetism is easily changed. Soft iron magnetises and demagnetises readily, so it makes a temporary magnet."
    }
  },
  {
    id: "mag-soft-2",
    topicKey: "t17-magnetism",
    subtopic: "soft-and-hard-materials",
    label: "Steel is chosen for an electromagnet core",
    belief: "The core of an electromagnet should be steel, because steel is a strong magnetic material.",
    tell: "The student picks steel for an electromagnet core, or for a soft iron keeper.",
    whyItHappens: "Steel is famous for being strong and for making permanent magnets, so it seems like the obvious choice, but an electromagnet needs the opposite property.",
    reteach: "An electromagnet needs to switch its magnetism on and off, so its core must gain and lose magnetism easily. That is soft iron, not steel. Soft iron magnetises the instant the current flows and loses it the instant the current stops. Steel would hold on to its magnetism after the current was switched off, which is exactly what you do not want in an electromagnet. So use soft iron for an electromagnet core, and save steel for permanent magnets.",
    microExample: "Electromagnet core: soft iron, so it drops its load when the current is switched off.",
    figure: "fig-19-06-solenoid-dc.svg",
    check: {
      question: "Should the core of an electromagnet be soft iron or steel, and why?",
      answer: "Soft iron, because it magnetises and demagnetises easily, so the electromagnet can be switched on and off."
    }
  },
  {
    id: "mag-soft-3",
    topicKey: "t17-magnetism",
    subtopic: "soft-and-hard-materials",
    label: "Soft iron is chosen for a permanent magnet",
    belief: "A permanent bar magnet is best made from soft iron.",
    tell: "The student picks soft iron to make a lasting magnet, such as a compass needle or a bar magnet.",
    whyItHappens: "Soft iron is magnetised so easily that it looks ideal, but the same easiness means it loses its magnetism just as fast.",
    reteach: "A permanent magnet has to keep its magnetism, so it must be made from a hard magnetic material like steel. Steel is difficult to magnetise, but once magnetised it holds on well. Soft iron would lose its magnetism almost straight away, so it is no good for a lasting magnet. So permanent magnets, compass needles and horseshoe magnets are made from steel, while soft iron is kept for temporary jobs.",
    microExample: "Permanent bar magnet or compass needle: steel, because steel keeps its magnetism.",
    figure: null,
    check: {
      question: "Which material would you choose to make a permanent magnet, soft iron or steel?",
      answer: "Steel, because it keeps its magnetism well. Soft iron would lose its magnetism almost at once."
    }
  },
  {
    id: "mag-magnetise-1",
    topicKey: "t17-magnetism",
    subtopic: "magnetising",
    label: "Alternating current is used to magnetise",
    belief: "To magnetise a bar inside a solenoid you send an alternating current through the coil.",
    tell: "The student chooses alternating current to make a magnet, or thinks a coil only forms poles with alternating current.",
    whyItHappens: "The two current types get mixed up, since both are met in the same topic, one for making magnets and one for unmaking them.",
    reteach: "To magnetise a material in a solenoid you use a direct current, which flows steadily one way. That gives a steady field that pulls the domains into line and leaves the bar magnetised. An alternating current is the wrong choice for magnetising, because it keeps reversing, so it keeps flipping the domains. Alternating current is actually used for the opposite job, demagnetising. So remember, direct current to magnetise, alternating current to demagnetise.",
    microExample: "Magnetise: steady direct current in the solenoid. Demagnetise: alternating current in the solenoid.",
    figure: "fig-19-06-solenoid-dc.svg",
    check: {
      question: "Which type of current, direct or alternating, is used to magnetise a bar in a solenoid?",
      answer: "A direct current. It gives a steady field that lines up the domains. Alternating current is used to demagnetise instead."
    }
  },
  {
    id: "mag-demag-1",
    topicKey: "t17-magnetism",
    subtopic: "demagnetising",
    label: "Direct current is used to demagnetise",
    belief: "To demagnetise a magnet you place it in a solenoid carrying a direct current.",
    tell: "The student picks a direct current in a coil as the way to remove magnetism.",
    whyItHappens: "A solenoid is linked in the mind with magnets, so a coil and a current seems like the tool for any magnetic job, without noticing which current does which.",
    reteach: "A direct current does not demagnetise, it magnetises, because its steady field lines the domains up. To demagnetise, you use an alternating current, which keeps reversing. You place the magnet in the coil and either slowly withdraw it while the current still flows, or gradually reduce the current to zero. The field then dies away while still flipping back and forth, leaving the domains pointing in all directions, so the magnetism is gone.",
    microExample: "Demagnetise: alternating current, then slowly withdraw the magnet from the coil so its domains end up random.",
    figure: "fig-19-08-demagnetise-ac.svg",
    check: {
      question: "To demagnetise a steel magnet with a solenoid, which current do you use and what do you do?",
      answer: "An alternating current, then slowly withdraw the magnet from the coil, so the field dies away while still reversing."
    }
  },
  {
    id: "mag-demag-2",
    topicKey: "t17-magnetism",
    subtopic: "demagnetising",
    label: "Heating a magnet makes it stronger",
    belief: "Heating or hammering a magnet increases its magnetism.",
    tell: "The student says a magnet heated in a flame will come out a stronger magnet.",
    whyItHappens: "Heat is often linked with adding energy and making things more intense, so it seems it should boost the magnetism too.",
    reteach: "Heating and hammering actually destroy magnetism, they do not build it. Strong heating gives the domains extra energy, and hard hammering jolts them, and either way the domains get knocked out of their neat alignment and back into disorder. So a magnet that is heated strongly or hammered hard becomes weaker, and can lose its magnetism completely. Heating and hammering are in fact two ways to demagnetise a magnet.",
    microExample: "Heat or hammer a magnet: domains are shaken out of line, so the magnet gets weaker, not stronger.",
    figure: null,
    check: {
      question: "What happens to a magnet that is heated very strongly?",
      answer: "It loses its magnetism, because the heat shakes the domains out of alignment. Heating weakens a magnet, it does not strengthen it."
    }
  },
  {
    id: "mag-field-1",
    topicKey: "t17-magnetism",
    subtopic: "field-lines",
    label: "Field lines point into the north pole outside the magnet",
    belief: "Outside a magnet, the field lines point into the north pole and out of the south pole.",
    tell: "The student draws the outside arrows the wrong way, ending at the north pole.",
    whyItHappens: "Without a fixed rule to hold on to, students guess the arrow direction, and half the time they guess it reversed.",
    reteach: "There is a fixed rule for the direction of field lines outside a magnet. They point out of the north pole and into the south pole. So the arrows leave the north end, curve round through the space beside the magnet, and come back in at the south end. A plotting compass agrees, its north seeking tip points along the line away from the north pole and towards the south pole. So outside the magnet, out of north and into south, every time.",
    microExample: "Outside the magnet: arrows start at N, sweep round, and end at S.",
    figure: "fig-19-10-bar-field-lines.svg",
    check: {
      question: "Outside a bar magnet, which way do the field lines point?",
      answer: "Out of the north pole and into the south pole. The arrows leave the N end and return to the S end."
    }
  },
  {
    id: "mag-field-2",
    topicKey: "t17-magnetism",
    subtopic: "field-lines",
    label: "Field lines can cross",
    belief: "Magnetic field lines are allowed to cross over one another.",
    tell: "The student draws two field lines meeting or crossing, especially where two magnets sit near each other.",
    whyItHappens: "Field lines look like ordinary drawn lines, so students treat them like paths that can intersect, missing that each point has only one field direction.",
    reteach: "Magnetic field lines never cross one another. At any point the field points in just one direction, and a field line shows that one direction, so two lines cannot pass through the same point. Field lines are also continuous and form closed loops. If your drawing shows lines crossing, something has gone wrong. Where the fields of two magnets meet head on and cancel, the lines simply stop short at a neutral point rather than crossing.",
    microExample: "Two field lines crossing would mean two field directions at one point, which cannot happen, so lines never cross.",
    figure: "fig-19-11-uniform-nonuniform.svg",
    check: {
      question: "Can two magnetic field lines cross each other?",
      answer: "No. Field lines never cross, because the field can only point one way at each point."
    }
  },
  {
    id: "mag-field-3",
    topicKey: "t17-magnetism",
    subtopic: "field-lines",
    label: "Closely packed lines read as a weak field",
    belief: "Where field lines are close together the field is weak, and where they are spread out it is strong.",
    tell: "The student reads tightly bunched lines near the poles as a weak region.",
    whyItHappens: "Students know spacing means something but attach it the wrong way round, so crowded looks weak instead of strong.",
    reteach: "The spacing of field lines shows the strength of the field, and the rule is that close together means strong. Where the lines are crowded, the field is strong, and where they are spread out, the field is weak. That is why a bar magnet is strongest at its poles, because the lines are packed most closely there. So crowded lines mean a strong field, not a weak one.",
    microExample: "Lines crowded at the poles: strong field. Lines spread out at the sides: weaker field.",
    figure: "fig-19-11-uniform-nonuniform.svg",
    check: {
      question: "On a field diagram, is the field stronger where the lines are close together or far apart?",
      answer: "Where the lines are close together. Crowded field lines mean a strong field, which is why a magnet is strongest at its poles."
    }
  },
  {
    id: "mag-neutral-1",
    topicKey: "t17-magnetism",
    subtopic: "field-between-magnets",
    label: "A neutral point is where the field is strongest",
    belief: "The neutral point between two magnets is where the magnetic force is greatest.",
    tell: "The student marks the neutral point as a place of strong pull, or expects a compass to point firmly there.",
    whyItHappens: "The word neutral is not obviously linked to zero, and the point sits between two magnets, so students picture their pulls adding up there.",
    reteach: "A neutral point is where the fields of the two magnets are equal and opposite, so they cancel out. That means there is no net magnetic force there and no field line passes through it. So a neutral point is a place of zero field, not maximum field. A plotting compass placed there has no set direction to line up with, because there is nothing pulling it one way. Neutral point means the field cancels to nothing.",
    microExample: "Between two like poles, midway, the two equal fields cancel, so the neutral point has zero field.",
    figure: "fig-19-13-like-poles-field.svg",
    check: {
      question: "What is the strength of the magnetic field at a neutral point?",
      answer: "It is zero. The two magnets' fields are equal and opposite there, so they cancel out completely."
    }
  },
  {
    id: "mag-compass-1",
    topicKey: "t17-magnetism",
    subtopic: "plotting-compass",
    label: "The compass needle points to the magnet's north pole",
    belief: "The north seeking end of a plotting compass points towards the north pole of the magnet.",
    tell: "The student draws the compass arrow aimed at the magnet's north pole instead of along the field towards the south pole.",
    whyItHappens: "Students expect a north labelled tip to head for anything labelled north, missing that the compass follows the field, which runs out of north and into south.",
    reteach: "A plotting compass is just a tiny bar magnet that is free to turn, so it lines up with the field where it sits. Its north seeking end points along the field line, which outside the magnet runs away from the magnet's north pole and towards the magnet's south pole. So the compass tip does not aim at the magnet's north pole, it points along the field, ending up directed towards the south pole. Just beyond a north pole the tip points away from the magnet, and just beyond a south pole it points back towards the magnet.",
    microExample: "Compass beyond the magnet's N pole: north seeking tip points away from the magnet, following the field outwards.",
    figure: "fig-19-15-plotting-compass.svg",
    check: {
      question: "Which way does the north seeking end of a plotting compass point in a magnet's field?",
      answer: "Along the field line, which outside the magnet points towards the magnet's south pole, not towards its north pole."
    }
  },
  {
    id: "mag-filings-1",
    topicKey: "t17-magnetism",
    subtopic: "plotting-compass",
    label: "Iron filings show the direction of the field",
    belief: "Iron filings sprinkled around a magnet reveal which way the field points.",
    tell: "The student says iron filings are enough to give the field direction, with no need for a compass.",
    whyItHappens: "Iron filings make a striking pattern that looks like arrows, so students assume the pattern carries direction as well as shape.",
    reteach: "Iron filings show only the shape and spacing of a field, not its direction. Each filing becomes a tiny induced magnet and lines up along the field, but it has no way to show which end is which, so the pattern has no arrows. To find the direction you need a plotting compass, whose needle actually points along the field. That is why a compass is preferred, it gives both the shape and the direction, while filings give the shape alone.",
    microExample: "Iron filings: shape and spacing only. Plotting compass: shape and direction, because its needle points along the field.",
    figure: "fig-19-15-plotting-compass.svg",
    check: {
      question: "Do iron filings tell you the direction of a magnetic field?",
      answer: "No. They show only the shape and spacing. To get the direction you need a plotting compass."
    }
  },
  {
    id: "mag-solenoid-1",
    topicKey: "t17-magnetism",
    subtopic: "solenoid-polarity",
    label: "Clockwise end of a solenoid read as north",
    belief: "Looking end on at a solenoid, an end where the current flows clockwise is a north pole.",
    tell: "The student names the clockwise end north and the anticlockwise end south, the two swapped.",
    whyItHappens: "The clockwise and anticlockwise rule is easy to mix up, especially without a memory aid to pin down which way gives north.",
    reteach: "Look straight at one end of the solenoid and check which way the current goes round. If it flows anticlockwise, that end is a north pole. If it flows clockwise, that end is a south pole. A neat way to remember it is that a letter N can be traced anticlockwise and a letter S clockwise. So clockwise gives a south pole, not a north pole. The right hand grip rule gives the same answer, with your thumb pointing to the north pole.",
    microExample: "End on view: anticlockwise current gives N, clockwise current gives S.",
    figure: "fig-19-06-solenoid-dc.svg",
    check: {
      question: "You look end on at a solenoid and the current flows clockwise. Is that end a north or a south pole?",
      answer: "A south pole. Anticlockwise would be a north pole, so clockwise is a south pole."
    }
  }
];
