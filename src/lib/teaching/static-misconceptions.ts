// static-misconceptions.ts
// Topic: O-Level Physics, Static Electricity (topicKey "t13-static-electricity")
// The tutor's diagnostic brain: the classic ways students go wrong in Static
// Electricity, with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 15 - Static Electricity.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in
// plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for
// superscript, but no other symbols or unit abbreviations spoken aloud.

import type { Misconception, TeachQuestion } from "@/lib/teaching/types";

export const STATIC_MISCONCEPTIONS: Misconception[] = [
  {
    id: "stat-atom-1",
    topicKey: "t13-static-electricity",
    subtopic: "electric-charge",
    label: "Charging moves or adds protons",
    belief: "An object is charged by moving protons onto or off it.",
    tell: "The student explains a positive charge by saying protons were added, or has charge flowing as protons through wires and rods.",
    whyItHappens: "Protons carry the positive charge, so it feels natural to think that making something positive must mean adding protons, when in fact protons are locked in the nucleus.",
    reteach: "Here is the one rule that saves you again and again in this whole topic. Only electrons ever move. Protons sit locked inside the nucleus and never travel from object to object. So when something becomes positive, it did not gain protons, it lost some electrons, which left its protons unbalanced. And when something becomes negative, it gained extra electrons. Charging is always about electrons moving, never protons.",
    microExample: "Rod becomes positive: it did not gain protons, it lost electrons, so its fixed protons are now unbalanced.",
    figure: "fig-15-01-atom-structure.svg",
    check: {
      question: "When a rod is charged, which particles actually move, the protons or the electrons?",
      answer: "Only the electrons move. The protons stay locked in the nucleus and never travel from one object to another."
    }
  },
  {
    id: "stat-atom-2",
    topicKey: "t13-static-electricity",
    subtopic: "electric-charge",
    label: "Positive charge means the object gained something",
    belief: "A positively charged object must have gained charge, so it gained electrons or protons.",
    tell: "For a positive object the student picks gained electrons, reasoning that positive means more of something has been added.",
    whyItHappens: "The word positive sounds like adding, so students expect a positive object to have gained particles, when a positive charge actually comes from losing electrons.",
    reteach: "Watch the direction carefully. Gaining electrons makes something more negative, not more positive, because electrons carry negative charge. So a positive object is one that has lost electrons, leaving its protons outnumbering its electrons. Negative means extra electrons, positive means missing electrons. Positive is a shortage, not a gain.",
    microExample: "Object is positive means electrons_lost, so protons outnumber electrons. Gaining electrons would make it negative instead.",
    figure: null,
    check: {
      question: "Does an object become positive by gaining electrons or by losing them?",
      answer: "By losing electrons. Gaining electrons would make it negative, because electrons carry negative charge."
    }
  },
  {
    id: "stat-atom-3",
    topicKey: "t13-static-electricity",
    subtopic: "electric-charge",
    label: "A neutral object has no charges in it",
    belief: "A neutral object contains no protons and no electrons.",
    tell: "The student describes a neutral object as empty of charge, or says its charges were destroyed.",
    whyItHappens: "Neutral sounds like nothing there, so students picture an empty object, missing that neutral really means the charges are balanced.",
    reteach: "Neutral does not mean empty. A neutral object is packed with protons and electrons, but in equal numbers, so their charges cancel and there is no charge left over. Think of it as a balanced tug of war rather than an empty field. To make it charged you do not add charge from nowhere, you just tip the balance by moving some electrons in or out.",
    microExample: "Neutral atom: protons = electrons, so the charges cancel. The particles are all still there.",
    figure: "fig-15-01-atom-structure.svg",
    check: {
      question: "Does a neutral object have no charged particles in it?",
      answer: "No. It is full of protons and electrons, but in equal numbers, so their charges balance and cancel out."
    }
  },
  {
    id: "stat-friction-1",
    topicKey: "t13-static-electricity",
    subtopic: "charging-by-friction",
    label: "Rubbing creates brand new charge",
    belief: "Rubbing two objects together makes charge out of nothing, and it can vanish just as easily.",
    tell: "The student says charge was created on one object only, or that discharging destroys the charge entirely.",
    whyItHappens: "Rubbing a balloon seems to conjure charge from nowhere, so students think friction manufactures charge rather than shifting it from one object to the other.",
    reteach: "Rubbing does not make charge, it only moves electrons that were already there from one material to the other. So charge is never created or destroyed, it is shared out. If one object ends up negative, the other must be equally positive, because the electrons one gained are exactly the ones the other lost. Discharging is the same idea in reverse, the electrons simply move back or leak away, they are not destroyed.",
    microExample: "Rub cloth on balloon: electrons move cloth to balloon. Total charge before = total charge after.",
    figure: "fig-15-09-friction-charging.svg",
    check: {
      question: "When you rub two objects together, is new charge created, or is it just moved?",
      answer: "It is just moved. Electrons shift from one object to the other. No charge is created or destroyed."
    }
  },
  {
    id: "stat-friction-2",
    topicKey: "t13-static-electricity",
    subtopic: "charging-by-friction",
    label: "Both rubbed objects get the same charge",
    belief: "When two objects are rubbed together, they both end up with the same sign of charge.",
    tell: "The student says a negatively charged balloon leaves the cloth negative too, instead of positive.",
    whyItHappens: "Both objects were involved in the same rubbing, so it feels like they should share the same outcome, missing that electrons leaving one must arrive on the other.",
    reteach: "The two objects always end up with opposite charges, never the same. The electrons that one material loses are exactly the electrons the other material gains. So the one that gains electrons turns negative, and the one that loses them turns positive, equal in size and opposite in sign. If you are told one is negative, the other must be positive.",
    microExample: "Balloon gains electrons and is negative, so the cloth lost those electrons and is positive by the same amount.",
    figure: "fig-15-09-friction-charging.svg",
    check: {
      question: "If a rubbed balloon comes away negative, what is the charge on the cloth that rubbed it?",
      answer: "It is positive, and equal in size. The electrons the balloon gained are the ones the cloth lost."
    }
  },
  {
    id: "stat-friction-3",
    topicKey: "t13-static-electricity",
    subtopic: "charging-by-friction",
    label: "The material that grips electrons tightly loses them",
    belief: "In a rubbing pair, the material that holds its electrons more tightly is the one that gives them up.",
    tell: "Using the electrostatic series, the student sends electrons the wrong way and gets the signs reversed.",
    whyItHappens: "The series can be read in either direction, so students match the wrong end of it to gaining and losing electrons.",
    reteach: "Read the grip the sensible way. The material that holds its electrons more tightly is the one that pulls electrons off the other, so it gains electrons and becomes negative. The material with the looser grip loses electrons and becomes positive. So tight grip means it wins electrons and goes negative, loose grip means it gives them up and goes positive.",
    microExample: "Polythene grips tighter than the cloth, so polythene gains electrons and is negative, the cloth is positive.",
    figure: "fig-15-09-friction-charging.svg",
    check: {
      question: "In a rubbing pair, does the material that grips its electrons more tightly gain electrons or lose them?",
      answer: "It gains electrons, so it becomes negative. It pulls electrons off the other material, which is left positive."
    }
  },
  {
    id: "stat-law-1",
    topicKey: "t13-static-electricity",
    subtopic: "law-of-charges",
    label: "Like charges attract",
    belief: "Two charges of the same sign pull towards each other, and opposite signs push apart.",
    tell: "The student swaps the rule, saying two negatives attract, or a positive and a negative repel.",
    whyItHappens: "The rule is short and easy to flip, and everyday talk of opposites and matches does not line up with the physics.",
    reteach: "Keep the law the right way round. Like charges repel, unlike charges attract. Two of the same sign, two positives or two negatives, push apart. A positive and a negative, which are unlike, pull together. So same signs push away, different signs pull in. Say it a few times so the order sticks.",
    microExample: "Two negatives: repel. Positive and negative: attract. Same sign pushes, opposite sign pulls.",
    figure: "fig-15-02-charge-interaction.svg",
    check: {
      question: "Two objects both carry a negative charge. Do they attract or repel?",
      answer: "They repel, because like charges repel. Only unlike charges, one positive and one negative, would attract."
    }
  },
  {
    id: "stat-law-2",
    topicKey: "t13-static-electricity",
    subtopic: "law-of-charges",
    label: "A charged object cannot attract a neutral one",
    belief: "A charged object only pulls on other charged objects, so a neutral object feels no force.",
    tell: "The student says a charged rod cannot pick up neutral paper scraps because the paper has no charge.",
    whyItHappens: "Students learn the law of charges with two charged objects, so they assume a neutral object, having no overall charge, is simply left out.",
    reteach: "A charged object can still attract a neutral one, and this is why a charged rod picks up small scraps of paper. The rod pushes the neutral object's own charges around, pulling unlike charge to the near side and pushing like charge to the far side. The unlike charge is now closer, so its attraction beats the weaker repulsion from further away, and there is a net pull. So neutral does not mean immune, it means ready to be tugged into place.",
    microExample: "Charged rod near neutral paper: unlike charge shifts to the near side, closer means stronger, so net attraction.",
    figure: "fig-15-10-induction-neutral.svg",
    check: {
      question: "Can a charged rod attract a small piece of paper that carries no overall charge?",
      answer: "Yes. It pulls the paper's unlike charge to the near side, and because that charge is closer, there is a net attraction."
    }
  },
  {
    id: "stat-field-1",
    topicKey: "t13-static-electricity",
    subtopic: "electric-field",
    label: "Only positive charges have a field",
    belief: "An electric field exists only around positive charges, or only when two charges meet.",
    tell: "The student says a lone negative charge has no field, or that a field appears only once a second charge arrives.",
    whyItHappens: "Field lines are often first drawn leaving a positive charge, so students tie the whole idea of a field to positive charges alone.",
    reteach: "Every charge has an electric field around it, positive or negative, all on its own. The field is just the region where another charge would feel a force, and it is already there before any second charge shows up. A lone negative charge has a field pointing inward, and a lone positive charge has a field pointing outward. You do not need a pair for a field to exist.",
    microExample: "One isolated charge, positive or negative, already has a field around it. No partner charge is needed.",
    figure: "fig-15-03-electric-field-region.svg",
    check: {
      question: "Does a single negative charge, sitting on its own, have an electric field around it?",
      answer: "Yes. Every charge has its own field, whether positive or negative, even with no other charge nearby."
    }
  },
  {
    id: "stat-field-2",
    topicKey: "t13-static-electricity",
    subtopic: "electric-field",
    label: "The field is the same strength everywhere",
    belief: "The electric field around a point charge has the same strength at every distance.",
    tell: "The student treats the force on a test charge as unchanged whether it is close to or far from the charge.",
    whyItHappens: "Drawing the field as a tidy region makes it look uniform, so students forget that it fades with distance.",
    reteach: "The field around a point charge is not the same everywhere. It is strongest close to the charge, where a test charge feels the biggest force, and it grows weaker the further out you go. On a diagram you can see this because the lines are packed tightly near the charge and spread apart further away. Close in means strong, far out means weak.",
    microExample: "Point charge: field strongest right next to it, weaker further away. Lines crowd near it and spread out far off.",
    figure: "fig-15-03-electric-field-region.svg",
    check: {
      question: "Is the electric field around a point charge strongest close to it or far from it?",
      answer: "Strongest close to the charge. It gets weaker the further away you move."
    }
  },
  {
    id: "stat-fieldlines-1",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    label: "Field lines point towards positive charges",
    belief: "Electric field lines point towards a positive charge and away from a negative charge.",
    tell: "The student draws arrows into a positive charge and out of a negative charge, the reverse of the rule.",
    whyItHappens: "Without the positive test charge in mind, students guess the direction and often flip it.",
    reteach: "Fix the direction using a positive test charge. A positive test charge is pushed away from a positive charge, so field lines point away from positive, outward. A positive test charge is pulled towards a negative charge, so field lines point towards negative, inward. Out of positive, into negative. That is the order every time.",
    microExample: "Field lines: away from a positive charge, towards a negative charge. Out of positive, into negative.",
    figure: "fig-15-05-field-lines-isolated.svg",
    check: {
      question: "Do the field lines around an isolated negative charge point inward or outward?",
      answer: "Inward, towards the charge, because a positive test charge would be pulled in towards it."
    }
  },
  {
    id: "stat-fieldlines-2",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    label: "Field lines can cross",
    belief: "Electric field lines can cross one another where two fields meet.",
    tell: "The student draws lines cutting across each other, especially between two charges.",
    whyItHappens: "When patterns from two charges are sketched together, it looks natural to let the lines overlap and cross.",
    reteach: "Field lines never cross. At any point the field pushes a test charge in one single direction, and a line can only show one direction there, so two lines crossing would mean two directions at once, which cannot happen. Instead the lines bend and curve around each other, but they never actually cut across. If your sketch has a crossing, something has gone wrong.",
    microExample: "Two lines crossing would mean two field directions at one point. Impossible, so lines never cross.",
    figure: "fig-15-07-field-like.svg",
    check: {
      question: "Can two electric field lines cross each other?",
      answer: "No. That would mean two field directions at one point. The lines bend around each other but never cross."
    }
  },
  {
    id: "stat-fieldlines-3",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    label: "Lines spread apart mean a stronger field",
    belief: "The field is stronger where the field lines are further apart.",
    tell: "The student reads widely spaced lines as a strong field and closely packed lines as weak.",
    whyItHappens: "The link between spacing and strength is easy to remember backwards, since more space can feel like more of something.",
    reteach: "Read the spacing the right way. The field is strongest where the lines are closest together, and weakest where they are spread out. Crowded lines mean a strong field and a big force, gaps between lines mean a weak field. So look for where the lines bunch up, that is where the field is strongest.",
    microExample: "Lines crowded together: strong field. Lines spread apart: weak field. Close means strong.",
    figure: "fig-15-05-field-lines-isolated.svg",
    check: {
      question: "Where is the electric field stronger, where the lines are close together or far apart?",
      answer: "Where they are close together. Crowded lines mean a strong field, spread out lines mean a weak one."
    }
  },
  {
    id: "stat-fieldlines-4",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    label: "A negative test charge sets the field direction",
    belief: "We use a negative test charge to decide which way an electric field points.",
    tell: "The student justifies field directions by imagining where a negative charge would go, and ends up with everything reversed.",
    whyItHappens: "Any charge feels a force in a field, so students do not realise the convention fixes on a positive test charge in particular.",
    reteach: "The direction of a field is defined using a positive test charge, always. We imagine a tiny positive charge at a point and ask which way it is pushed, and that push is the field direction. A negative test charge would be pushed the opposite way, so using it would flip every arrow. So stick to the positive test charge and the directions come out right.",
    microExample: "Field direction = the way a positive test charge is pushed. A negative one would give the opposite, wrong, arrows.",
    figure: "fig-15-04-positive-test-charge.svg",
    check: {
      question: "Which test charge do we use to define the direction of an electric field?",
      answer: "A positive test charge. The field points the way a positive test charge would be pushed."
    }
  },
  {
    id: "stat-fieldlines-5",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    label: "Field lines between like charges join up",
    belief: "The field lines between two like charges link up and run from one charge into the other.",
    tell: "The student draws lines connecting two positive charges as if they attracted, joining them across the gap.",
    whyItHappens: "The linking pattern of unlike charges is memorable, so students apply it to like charges too, missing that like charges repel.",
    reteach: "Only unlike charges link up. Between a positive and a negative charge the lines really do run across from the positive to the negative, because they attract. But two like charges repel, so their lines never join. Instead the lines bend away from each other, and midway between them is a point where the fields cancel. Linking lines mean attraction, lines that push apart mean repulsion.",
    microExample: "Two positives: lines bend apart and never join. Only a positive and a negative link across the gap.",
    figure: "fig-15-07-field-like.svg",
    check: {
      question: "Do the field lines between two positive charges join up across the gap?",
      answer: "No. Like charges repel, so their lines bend away and never join. Only unlike charges link up."
    }
  },
  {
    id: "stat-fieldlines-6",
    topicKey: "t13-static-electricity",
    subtopic: "field-lines",
    label: "The field between parallel plates is uneven",
    belief: "The field between two parallel charged plates is strongest in the middle, or changes across the gap.",
    tell: "The student marks the centre between the plates as the strong point, rather than treating the field as uniform.",
    whyItHappens: "Students expect a peak somewhere, as with a point charge, and pick the middle as the natural place for it.",
    reteach: "Between parallel plates the field is uniform, which means it has the same strength everywhere in the gap. You can see this because the lines run straight across from the positive plate to the negative plate and are evenly spaced, with the same gap between them all the way. The lines only curve, or fringe, right at the edges. So there is no strong middle, the field is the same throughout.",
    microExample: "Parallel plates: straight, evenly spaced lines mean a uniform field, the same strength everywhere between them.",
    figure: "fig-15-08-parallel-plates.svg",
    check: {
      question: "Is the field between two parallel charged plates strongest in the middle?",
      answer: "No. It is uniform, the same strength everywhere between them, shown by straight, evenly spaced lines."
    }
  },
  {
    id: "stat-conductor-1",
    topicKey: "t13-static-electricity",
    subtopic: "conductors-insulators",
    label: "Insulators have no electrons",
    belief: "An insulator contains no electrons, which is why charge cannot flow through it.",
    tell: "The student explains an insulator by saying it has no electrons, rather than that its electrons cannot move freely.",
    whyItHappens: "Insulators do not carry current, so students jump to thinking they have no electrons at all, instead of trapped ones.",
    reteach: "Insulators are full of electrons, just like everything else. The difference is that in an insulator the electrons are held in place and are not free to move through the material. In a conductor, like a metal, some electrons are free to roam, so charge can flow. So it is not about how many electrons there are, it is about whether they can move. In an insulator they are stuck, which is why static charge stays put on it.",
    microExample: "Insulator: electrons present but locked in place. Conductor: some electrons free to move, so charge flows.",
    figure: null,
    check: {
      question: "Is an insulator a material with no electrons, or one whose electrons cannot move freely?",
      answer: "One whose electrons cannot move freely. It has plenty of electrons, they are just locked in place."
    }
  },
  {
    id: "stat-induction-1",
    topicKey: "t13-static-electricity",
    subtopic: "induction",
    label: "Charging by induction needs the rod to touch",
    belief: "To charge an object by induction, the charging rod has to touch it.",
    tell: "The student says the rod must be rubbed on or pressed against the object, or that electrons jump across from the rod.",
    whyItHappens: "Charging by friction and by contact both involve touching, so students assume induction does too.",
    reteach: "Charging by induction is the no touching method, and that is the whole point of it. The charged rod is brought near but never touches. From a distance it pushes or pulls the object's own free electrons around, and with the help of an earth wire we let some electrons flow in or out. The rod's own charge stays on the rod the entire time. So no contact is needed, the rod works purely from nearby.",
    microExample: "Induction: rod held near, never touching. The object's own electrons shift, guided by the rod at a distance.",
    figure: "fig-15-12-induction-conductor.svg",
    check: {
      question: "In charging by induction, does the charging rod touch the object?",
      answer: "No. The rod is held near but never touches. It moves the object's own electrons from a distance."
    }
  },
  {
    id: "stat-induction-2",
    topicKey: "t13-static-electricity",
    subtopic: "induction",
    label: "Induction leaves the same sign as the rod",
    belief: "An object charged by induction ends up with the same sign of charge as the charging rod.",
    tell: "For a negative rod the student says the object finishes negative, matching the rod.",
    whyItHappens: "Students expect the object to copy the rod, and do not track that earthing removes the charge repelled to the far side.",
    reteach: "Charging by induction leaves the object with the opposite sign to the rod, not the same. A negative rod repels the object's electrons to the far side, and those electrons are the ones we let escape down the earth wire. Once the rod is removed, the object is left short of electrons, so it is positive, the opposite of the negative rod. So induction always gives the opposite sign, which is a handy way to check your answer.",
    microExample: "Negative rod plus earthing gives a positive object. The final charge is opposite to the rod.",
    figure: "fig-15-12-induction-conductor.svg",
    check: {
      question: "Using a negative rod to charge a sphere by induction, what sign is the sphere left with?",
      answer: "Positive, the opposite of the rod. The electrons pushed to the far side escape to earth, leaving it short."
    }
  },
  {
    id: "stat-induction-3",
    topicKey: "t13-static-electricity",
    subtopic: "induction",
    label: "Bringing a rod near a conductor charges it overall",
    belief: "Simply holding a charged rod near a metal object gives the object an overall charge.",
    tell: "The student says a neutral sphere becomes charged just by having a rod nearby, with no earthing step.",
    whyItHappens: "The near side clearly gains a charge, so students conclude the whole object is now charged, missing that the far side is equally opposite.",
    reteach: "Just holding a rod nearby does not give a metal object any overall charge. It only separates the charge that is already there, pulling one sign to the near side and pushing the other to the far side. Add the two together and they still cancel, so the object is neutral overall. To end up with a real net charge you have to earth it while the rod is there, letting some electrons escape or arrive. Without that earthing step, the object stays neutral once the rod leaves.",
    microExample: "Rod near an unearthed sphere: near side and far side are opposite and equal, so the total is still zero.",
    figure: "fig-15-10-induction-neutral.svg",
    check: {
      question: "A charged rod is held near a neutral metal sphere but the sphere is not earthed. What is its overall charge?",
      answer: "Still zero. The charge has only separated to the two sides. Without earthing, the totals cancel."
    }
  },
  {
    id: "stat-discharge-1",
    topicKey: "t13-static-electricity",
    subtopic: "discharging",
    label: "Static builds up more in humid air",
    belief: "Static charge builds up and gives shocks more easily in warm, damp weather.",
    tell: "The student expects more static in humid conditions and less in cold, dry conditions.",
    whyItHappens: "Students do not connect moisture in the air with carrying charge away, so they guess the wrong weather.",
    reteach: "It is dry air that lets static build up, not humid air. In damp air, water molecules settle on charged surfaces and carry the extra charge away, so it leaks off before it can build. In cold, dry air there is little moisture to do this, so the charge stays and grows, and you get more shocks. That is why static shocks are common on cold, dry days and rare in warm, humid weather.",
    microExample: "Dry air: charge lingers and builds, so shocks. Humid air: water carries charge away, so little static.",
    figure: null,
    check: {
      question: "Are static shocks more common in cold, dry weather or in warm, humid weather?",
      answer: "In cold, dry weather. Humid air lets the charge leak away through moisture, so less static builds up."
    }
  },
  {
    id: "stat-discharge-2",
    topicKey: "t13-static-electricity",
    subtopic: "discharging",
    label: "Earthing moves electrons the same way for any charge",
    belief: "Earthing a charged conductor always sends electrons to the ground, whatever its charge.",
    tell: "The student has electrons always flowing to earth, even when discharging a positive object.",
    whyItHappens: "The picture of charge draining down to the ground is strong, so students apply it without checking the sign of the charge.",
    reteach: "Which way electrons flow when earthing depends on the sign of the charge. A negative conductor has too many electrons, so its extra electrons flow away to the ground. A positive conductor is short of electrons, so electrons flow up from the ground onto it to fill the shortage. Either way the object ends up neutral, but the electrons move towards whichever side needs balancing. So check the sign first, then decide the direction.",
    microExample: "Negative object earthed: electrons flow out to ground. Positive object earthed: electrons flow in from ground.",
    figure: "fig-15-14-earthing-discharge.svg",
    check: {
      question: "When a positively charged sphere is earthed, do electrons flow to the ground or from it?",
      answer: "From the ground onto the sphere. A positive object is short of electrons, so electrons flow in to fill the gap."
    }
  },
  {
    id: "stat-hazard-1",
    topicKey: "t13-static-electricity",
    subtopic: "hazards-and-uses",
    label: "The earthing chain is not there to drain charge",
    belief: "An earthing chain on a fuel tanker is there to build up or store charge, not to remove it.",
    tell: "The student explains the chain as helping the fuel flow, storing charge, or making a safe spark.",
    whyItHappens: "Students know the chain matters but have not linked it to draining charge, so they invent another job for it.",
    reteach: "The whole danger is a build up of static charge that can spark and set fire to flammable fuel or vapour. The metal chain, or strip, is there to drain that charge safely away by connecting the tanker to the ground, so electrons leak off and no dangerous charge collects. It does not store charge or help the fuel flow, it earths the equipment so no spark can build. Remember, earthing removes charge, it does not gather it.",
    microExample: "Earthing chain: connects tanker to ground so charge leaks away, so no spark, so no explosion.",
    figure: "fig-15-15-fuelling-hazard.svg",
    check: {
      question: "What is the job of the metal chain connecting a fuel tanker to the ground?",
      answer: "To drain the static charge safely away to the ground, so no dangerous charge builds up and sparks."
    }
  },
  {
    id: "stat-uses-1",
    topicKey: "t13-static-electricity",
    subtopic: "hazards-and-uses",
    label: "Spray droplets are given opposite charges to spread",
    belief: "In electrostatic spray painting the droplets get opposite charges so they push apart into a mist.",
    tell: "The student says the droplets repel because they carry opposite charges.",
    whyItHappens: "Students know the droplets spread apart and reach for repulsion, but pair it with opposite charges instead of like charges.",
    reteach: "The droplets are all given the same charge, not opposite ones. Because they share the same sign, they repel each other, and that is what spreads them into a fine, even mist instead of clumping. Opposite charges would attract and pull the droplets together, which is the last thing you want. The object being painted is earthed, so it attracts the charged droplets onto every part of its surface. Same charge on the droplets to spread them, earthed object to pull them in.",
    microExample: "Spray droplets: all the same charge, so they repel and spread. Opposite charges would clump them together.",
    figure: "fig-15-16-spray-painting.svg",
    check: {
      question: "In spray painting, are the paint droplets given the same charge or opposite charges?",
      answer: "The same charge. Sharing one sign makes them repel and spread into an even mist."
    }
  },
  {
    id: "stat-uses-2",
    topicKey: "t13-static-electricity",
    subtopic: "hazards-and-uses",
    label: "Precipitator dust and plates share the same charge",
    belief: "In a precipitator the dust particles and the collecting plates carry the same charge.",
    tell: "The student says the dust is collected because like charges pull it onto the plates.",
    whyItHappens: "Students remember charge is involved but misapply the law, using like charges for what is really an attraction.",
    reteach: "The collecting plates carry the opposite charge to the dust, so they attract it. In the chimney the dust particles are charged up, say negative, as they pass a charged grid. The large collecting plates are then made positive, and since unlike charges attract, the negative dust is pulled onto the positive plates and sticks there. If the plates had the same charge as the dust, they would push it away and collect nothing. Opposite charges are what make the dust cling.",
    microExample: "Dust charged negative, plates made positive, so unlike charges attract and the dust sticks to the plates.",
    figure: "fig-15-17-precipitator.svg",
    check: {
      question: "In a precipitator, do the collecting plates carry the same charge as the dust or the opposite charge?",
      answer: "The opposite charge. Unlike charges attract, so the charged dust is pulled onto the plates and sticks."
    }
  }
];

// Note: TeachQuestion is imported so the two pack files share one import line.
// The question bank lives in static-questions.ts.
void (null as unknown as TeachQuestion);
