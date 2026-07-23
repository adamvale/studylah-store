import type { Subconcept } from "@/lib/teaching/subconcepts";

// T16 Practical Electricity, section 5. Grounded in KB Chapter 18 (Practical Electricity) section 18.5.
// Conceptual: the dangers of electricity and how a shock happens. Colour key from the T16 brief:
// live wire = brown, neutral wire = blue, earth wire = green and yellow, metal casing/appliance = white/grey.

export const BOXES: Subconcept[] = [
  {
    id: "t16.5",
    code: "T16.5",
    title: "Dangers of electricity",
    blurb: "How faults become fires and shocks, and how a shock happens",
    steps: [
      {
        kind: "concept",
        heading: "Damaged insulation",
        body: "*Insulation* is the coloured plastic that keeps live wires apart and covered. When it is *damaged*, bare wires can touch each other and cause a *short circuit*, which can make a metal casing go live or start a fire.",
        say: "Every mains wire is wrapped in coloured plastic insulation to keep it apart from the others and away from your hands. If that plastic is cracked, worn, or melted, the bare metal underneath is exposed. 2 bare wires touching form a short circuit, a path with almost no resistance, and a huge current floods through. That can leave a metal casing live to the touch or set nearby material on fire.",
      },
      {
        kind: "concept",
        heading: "Overheated cables",
        body: "Passing *too much current* through a thin cable makes it *overheat*. The heat can *melt the insulation*, and once the bare wires meet you get a short circuit or a *fire*.",
        say: "A cable is only built to carry so much current safely. Plug too many appliances into 1 socket, or use a cable that is too thin, and the current heats the wire more than it can shed. The insulation softens and melts, the bare conductors touch, and you get either a short circuit or an outright fire. This is exactly the overload that a fuse or circuit breaker is there to stop.",
      },
      {
        kind: "concept",
        heading: "Damp conditions",
        body: "*Water* near electricity is dangerous because everyday water holds dissolved *salts*. These split into charged *ions* that let the water *conduct* a current, so wet hands make a shock far more likely.",
        say: "Pure water is actually a poor conductor, but the water on your hands, on a floor, or in a bathroom is never pure. It carries dissolved salts, and those salts break apart into charged particles called ions that can drift and carry a current. So damp skin and wet floors give electricity an easy route through you. That is why you keep electrical equipment well away from water and never touch a switch with wet hands.",
      },
      {
        kind: "concept",
        heading: "How a shock happens",
        body: "An *electric shock* happens when a person becomes part of a *complete circuit* between a live conductor and the *ground*. Keeping hands dry and using insulators such as *rubber gloves* breaks that path to earth.",
        say: "Current only flows around a complete loop. You get a shock when your body accidentally becomes part of that loop, touching something live while another part of you is connected to the ground. The current then passes through you on its way to earth. Break the loop and you are safe, so we keep hands dry, stand on dry insulating material, and use insulators like rubber gloves or rubber-soled shoes to cut off the path to earth.",
      },
      {
        kind: "classify",
        prompt: "Sort each situation by the danger it most directly causes.",
        bins: ["Short circuit", "Fire", "Shock"],
        items: [
          { text: "Bare live and neutral wires touch through cracked insulation", bin: 0 },
          { text: "2 exposed conductors meet so current bypasses the appliance", bin: 0 },
          { text: "A thin overloaded cable overheats until its insulation melts and ignites", bin: 1 },
          { text: "Too much current heats a cable until nearby material catches alight", bin: 1 },
          { text: "Touching a faulty live casing with wet hands", bin: 2 },
          { text: "Water on the floor links a live wire to a person's feet", bin: 2 },
        ],
        ask: "Ask what happens first in each case: do 2 bare wires meet, does heat build up, or does current pass through a person? Tap each situation and drop it in its bin.",
        hints: [
          "Bare conductors touching gives a short circuit; a cable overheating leads to a fire.",
          "Any case where current passes through a person on the way to the ground is a shock.",
        ],
        explain: "Bare wires touching cause a short circuit. An overloaded cable overheats and melts, so it causes a fire. Wet hands or a wet floor let current pass through a person, so those cause a shock.",
      },
      {
        kind: "choice",
        question: "Why is it far more dangerous to handle electrical equipment with wet hands than with dry hands?",
        options: [
          "The water cools the wires, which lowers their resistance",
          "Pure water is one of the best electrical conductors there is",
          "Everyday water carries dissolved salts whose ions let it conduct a current",
          "Wet skin stops a person from feeling any shock",
        ],
        correct: 2,
        ask: "Think about what is really dissolved in the water on your hands, and what those dissolved substances do when a voltage is applied.",
        hints: [
          "It is not the water itself but what is dissolved in it that matters.",
          "Dissolved salts split into charged ions, and moving ions carry a current.",
        ],
        explain: "Everyday water is impure: it carries dissolved salts that split into charged ions. Those ions let the water conduct, so wet hands give current an easy path and make a shock far more likely.",
      },
      {
        kind: "choice",
        question: "A person gets an electric shock only when...",
        figure: "fig-18-09-fuse-placement",
        options: [
          "they become part of a complete circuit between a live conductor and the ground",
          "they stand on a dry rubber mat while working",
          "they touch only the earth wire of a working appliance",
          "the current in the live wire has been switched off",
        ],
        correct: 0,
        ask: "Current needs a complete loop to flow. Ask which option describes a person completing that loop to the ground.",
        hints: [
          "A shock needs current to actually pass through the body.",
          "That happens when the body links a live conductor to the ground, closing the circuit.",
        ],
        explain: "A shock happens when a person becomes part of a complete circuit between a live conductor and the ground, so current passes through them. A dry rubber mat and a switched-off supply both prevent that, and the earth wire is normally at 0 volts.",
      },
      {
        kind: "match",
        prompt: "Match each danger to the consequence it most directly leads to.",
        pairs: [
          { left: "Damaged insulation", right: "Bare wires touch and cause a short circuit" },
          { left: "Overheated cable", right: "Insulation melts and a fire can start" },
          { left: "Damp conditions", right: "Water conducts and a shock becomes more likely" },
          { left: "A fault making the casing live", right: "A person completing the circuit is shocked" },
        ],
        ask: "For each danger, ask what it directly leads to: bare wires meeting, heat and melting, or current passing through a person.",
        hints: [
          "Damaged insulation exposes bare wires; an overheated cable melts and can ignite.",
          "Damp or a live casing both end in current reaching a person, which is a shock.",
        ],
        explain: "Damaged insulation lets bare wires touch, giving a short circuit. An overheated cable melts its insulation and can start a fire. Damp conditions let water conduct, and a live casing lets a person complete the circuit, so both lead to a shock.",
      },
      {
        kind: "open",
        prompt: "Describe 3 ways to use electricity safely in the home, and explain how each one reduces the danger.",
        modelAnswer: "Keep electrical equipment away from water and never touch switches or appliances with wet hands, because damp skin conducts and lets current pass through you. Replace any cable with cracked or worn insulation, because bare wires can short circuit, make a casing live, or start a fire. Do not overload a socket with too many appliances, because an overloaded cable overheats and can melt its insulation and catch fire. Make sure metal-cased appliances are earthed and fitted with a correctly rated fuse or protected by a circuit breaker, so a fault is disconnected before it can shock anyone.",
        marks: [
          "Keep equipment and hands dry away from water; damp conducts and allows a shock.",
          "Replace damaged insulation; bare wires can short circuit, go live, or start a fire.",
          "Do not overload sockets; an overheated cable can melt and catch fire.",
          "Use earthing and a correctly rated fuse or circuit breaker to disconnect a fault safely.",
        ],
        ask: "Think back to the 3 main dangers, damp, damaged insulation, and overheating, and give 1 safe habit for each, saying what danger it removes.",
      },
      {
        kind: "insight",
        body: "Nearly every mains hazard traces back to a *bare live conductor* meeting something it should not: another wire, a metal casing, or a person. *Good insulation*, sensible current, *dry hands*, and *earthing* keep that from happening.",
        say: "Here is the thread that ties it all together. Almost every danger comes down to a bare live conductor reaching somewhere it should not, another wire for a short circuit, a metal casing that goes live, or a person on their way to earth. Guard against that and you are safe: keep the insulation sound, keep the current within the cable's limit, keep hands and floors dry, and earth every metal casing so a fault is carried away instead of through you.",
      },
    ],
  },
];
