import type { Subconcept } from "@/lib/teaching/subconcepts";

// T20 Radioactivity, section 6. Grounded in KB Chapter 22 (sections 22.13, 22.14).

export const BOXES: Subconcept[] = [
  {
    id: "t20.6",
    code: "T20.6",
    title: "Uses, hazards and safety",
    blurb: "Matching each source to the job, and staying safe around radiation",
    steps: [
      {
        kind: "concept",
        heading: "The use matches the property",
        body: "Every use of radiation is chosen to *match a property* of the emission. Pick by *penetrating power*, by *half-life*, and by whether the radiation *ionises* strongly.",
        say: "The whole topic comes down to one idea: you pick the radiation to match the job. Sometimes you need something that penetrates far, sometimes something stopped easily, sometimes a source that lasts for years, sometimes one that fades fast. Get the property right and the use follows.",
      },
      {
        kind: "concept",
        heading: "Monitoring thickness",
        figure: "fig-22-09-thickness-monitoring",
        body: "A *beta* or *gamma* source under a moving sheet lets a detector *monitor thickness*. Beta suits thin paper, gamma suits thick metal; alpha is useless, stopped at once.",
        say: "In the picture a source sits below a moving sheet of foil and a detector reads the beam coming through from above. Beta passes through thin paper, so it monitors paper thickness, while gamma pushes through thick metal. Alpha is no good here, it is stopped at once by the air and the sheet, so nothing changes to measure.",
      },
      {
        kind: "insight",
        body: "Thinner material lets *more* radiation through, so the count goes *up*; thicker material lets *less* through, so the count drops.",
        say: "Watch the count rate. If the foil gets too thin, more radiation reaches the detector and the count rises. If it gets too thick, less gets through and the count falls. The reading is a live measure of the thickness.",
      },
      {
        kind: "concept",
        heading: "Gamma in medicine",
        body: "*Gamma* penetrates deeply, so it *sterilises* equipment, *images organs* using technetium 99, and *destroys tumours* using cobalt 60.",
        say: "Gamma is the deep penetrator, and that makes it the medical workhorse. It sterilises surgical equipment by killing bacteria, it traces and images organs when a patient is given technetium 99, and a strong cobalt 60 beam is aimed at a tumour to destroy the cancer cells.",
      },
      {
        kind: "concept",
        heading: "Choosing the half-life",
        body: "A *long half-life* source lasts and rarely needs replacing. A *short half-life* source, like iodine 131 for the *thyroid*, does its job then does not stay in the body.",
        say: "Half-life decides how long a source is useful and how long it lingers. A long half-life source, like the cobalt in a hospital, lasts for years and rarely needs replacing. A short half-life source is right when it goes inside a patient: iodine 131 targets the thyroid, then decays away quickly so it does not stay in the body.",
      },
      {
        kind: "concept",
        heading: "The smoke detector",
        body: "In a *smoke detector*, an *alpha* source (americium 241) *ionises* the air so a small current flows. Smoke absorbs the alpha, the current drops, and the alarm sounds.",
        say: "A smoke detector uses alpha, and this is exactly where alpha's strong ionising and short range help. The americium 241 source ionises the air, letting a tiny current flow across a gap. When smoke drifts in it absorbs the alpha, the current drops, and that fall sets off the alarm.",
      },
      {
        kind: "concept",
        heading: "Dating rocks",
        body: "*Uranium 238* slowly decays to *lead 206*. Comparing how much uranium is left with how much lead has formed *dates the rock*.",
        say: "Very old rocks can be dated because uranium 238 decays, step by step, into lead 206 over billions of years. By measuring how much uranium remains against how much lead has built up, geologists work out the age of the rock.",
      },
      {
        kind: "insight",
        body: "Ionising radiation *damages cells* and can cause *cancer*. Cut your dose 3 ways: *shielding* (a lead-lined box or gloves), distance (handle with tongs), and time (limit exposure).",
        say: "Radiation is not free of risk. Because it ionises, it can damage living cells and cause cancer, so you keep your dose down 3 ways. Shield yourself behind lead, in a lead-lined box or lead gloves. Keep your distance, holding sources with long tongs. And limit the time you are exposed. Shielding, distance, time.",
      },
      {
        kind: "match",
        prompt: "Match each source to the job it is chosen for.",
        pairs: [
          { left: "Alpha (americium 241)", right: "Smoke detector" },
          { left: "Beta source", right: "Monitoring paper thickness" },
          { left: "Gamma (cobalt 60)", right: "Destroying a tumour" },
          { left: "Iodine 131", right: "Treating the thyroid" },
        ],
        ask: "For each source think about its penetrating power and half-life, then match it to the job that needs exactly that property.",
        hints: [
          "Alpha is stopped easily and ionises strongly, so it belongs in the detector where smoke can block it.",
          "Beta suits thin paper; a penetrating gamma beam reaches a tumour inside the body.",
        ],
        explain: "Alpha ionises the air in a smoke detector, beta monitors thin paper, a gamma cobalt 60 beam destroys a tumour, and iodine 131 with its short half-life treats the thyroid.",
      },
      {
        kind: "choice",
        question: "Why is beta, not alpha, used to monitor the thickness of paper?",
        figure: "fig-22-09-thickness-monitoring",
        options: [
          "Alpha would pass straight through paper unchanged",
          "Beta cannot ionise the air",
          "Alpha is stopped completely by the paper, so the count would not change with thickness",
          "Beta has a much shorter half-life than alpha",
        ],
        correct: 2,
        ask: "Think about how far each emission travels. Which one is stopped by even a thin sheet, giving the detector nothing to measure?",
        hints: [
          "Alpha is stopped by a sheet of paper or a few centimetres of air.",
          "If the radiation is stopped completely, the count stays near zero whatever the thickness.",
        ],
        explain: "Alpha is stopped completely by the paper, so the detector reads almost nothing and the count does not change as the thickness changes. Beta partly passes through, so its count rises and falls with thickness.",
      },
      {
        kind: "choice",
        question: "A source is to be sealed inside a hospital machine used for many years. What half-life should it have?",
        options: [
          "A long half-life, so it lasts and rarely needs replacing",
          "A short half-life, so it decays away in minutes",
          "No half-life at all",
          "A half-life shorter than one day",
        ],
        correct: 0,
        ask: "The source stays in the machine for years. Should it fade quickly or keep its activity for a long time?",
        hints: [
          "A short half-life source would soon be too weak to use.",
          "For a fixed source that must last, you want its activity to fall slowly.",
        ],
        explain: "It should have a long half-life, so its activity falls slowly, it keeps working for years, and it rarely needs replacing. Short half-life sources are chosen only when the radiation must not linger, such as inside a patient.",
      },
      {
        kind: "choice",
        question: "Which set lists the 3 main ways to reduce your dose when handling a radioactive source?",
        options: [
          "Heating, cooling and stirring",
          "Charging, earthing and insulating",
          "Weighing, measuring and labelling",
          "Shielding, distance and time",
        ],
        correct: 3,
        ask: "Recall the 3 safety principles for ionising radiation, each one cutting the dose a different way.",
        hints: [
          "One uses lead, one uses tongs, one limits how long you are near the source.",
          "Radioactive decay is not affected by heating or cooling, so those are not safety measures.",
        ],
        explain: "The 3 principles are shielding (lead-lined box or gloves), distance (handle with tongs) and time (limit how long you are exposed). Heating and cooling do nothing, since decay is spontaneous.",
      },
      {
        kind: "open",
        prompt: "In a factory a beta source and a detector control the thickness of foil rolled between them. Explain how this arrangement keeps the foil at a uniform thickness.",
        modelAnswer: "The beta source sits on one side of the foil and the detector on the other. Some beta radiation passes through the foil to the detector. If the foil becomes too thin, more radiation gets through and the count rate rises; if it becomes too thick, less gets through and the count rate falls. The detector feeds this reading back to the rollers, which adjust the pressure to bring the count, and so the thickness, back to the set value. This keeps the foil uniform.",
        marks: [
          "Beta passes through the foil to the detector, and the amount getting through depends on the thickness.",
          "Thinner foil gives a higher count; thicker foil gives a lower count.",
          "The count is fed back to the rollers, which adjust to hold the thickness constant.",
        ],
        ask: "Describe what the detector reads as the foil thickness changes, and what is done with that reading to correct it.",
      },
    ],
  },
];
