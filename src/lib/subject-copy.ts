import type { Level, ProductKey } from "./catalogue";

// Per-subject marketing copy, taken verbatim from the subject's Marketing Hooks
// & Product Copy pack. Subjects without a pack fall back to the generic product
// blurbs in catalogue.ts.

export interface ProductCopy {
  /** 40-60 word blurb — paste whole. */
  blurb: string;
  bullets: string[];
  whoFor: string;
  crossSell: string;
}

export interface HeadlineCall {
  title: string;
  body: string;
}

export interface SubjectCopy {
  /** e.g. "6091" */
  syllabusCode: string;
  /** Full exam name to use on the site. */
  examName: string;
  /** Stops buyers landing on the wrong syllabus. */
  syllabusChecker: string;
  /**
   * A single quantified hook to lead the page with. One per page: a single
   * quantified claim reads as analysis; five stacked claims read as advertising.
   */
  heroHook: string;
  /** The model's headline calls for the year — analysis, not advertising. */
  headlineCalls: HeadlineCall[];
  /** Copy for the Master tier / complete pack. */
  completePack: string;
  products: Partial<Record<ProductKey, ProductCopy>>;
}

const PHYSICS_PURE_6091: SubjectCopy = {
  syllabusCode: "6091",
  examName: "O-Level Physics (Pure) 6091",
  syllabusChecker:
    "Not sure which syllabus your child takes? Physics as a single pure subject is 6091 (this pack); Physics inside combined Science is 5086 / 5087.",
  heroHook:
    "Radioactivity was invisible for eight years. Then it anchored the data-based question two papers running.",
  headlineCalls: [
    {
      title: "Radioactivity anchors the paper again.",
      body: "Near-invisible for eight years, it took the 10–11 mark data-based question in both 2024 and 2025 and opened a four-question Paper 1 block in 2025. Its new weight is structural.",
    },
    {
      title: "Dynamics returns to full weight after a light 2025.",
      body: "The core mechanics topic scored 8–9 marks in 2023–2024, then only 4 in 2025 — the dip that has preceded every rebound of the decade. A full F = ma question is the strongest single structured-question call.",
    },
    {
      title: "Light stays the decade's banker.",
      body: "The highest Paper 2 total of any topic (87 marks) and 10 marks in 2025. Ray diagrams, n = sin i / sin r and total-internal-reflection conditions fund more marks than any other single skill set.",
    },
    {
      title: "EM Induction holds its Section B transformer franchise.",
      body: "Marks climbed 7 then 11 across 2024–2025 with transformer content in Section B two years running. Prepare the Faraday / Lenz wording and the ratio arithmetic.",
    },
    {
      title: "Magnetism rebounds from a double blank.",
      body: "Zero Paper 2 marks in both 2024 and 2025 — the sharpest new-era blank of any recurring core, which historically precedes a rebound. Induced magnetism and field patterns are loaded for 2026.",
    },
    {
      title: "Paper 3 keeps its Q1(10) / Q2(10) / Q3(20) shape.",
      body: "A timing / oscillation experiment is likely (eight of nine years); specific-heat-capacity calorimetry (last 2021) and a lens / refraction study (last 2023) are the overdue Section-B major candidates.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full dress rehearsal, with the Paper 3 companion covering the practical's 40 marks. Every product is built from the same question-level study of the 2016–2025 papers, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "Ten years of O-Level Pure Physics papers — 2016 to 2025 — classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 exam. All 20 syllabus topics get a deep dive: mark history, evidence, question angles and what changed at the 2024 format reset — so revision starts where the marks are likeliest.",
      bullets: [
        "Ranked prediction table for all 20 topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "20 topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "Forecasts for the Paper 2 data-based question and the choose-one Section B pairing",
        "Syllabus-change briefing: the new-in-2026 emphases plus the deletions, so no one revises removed content",
        "Niche watchlist of rarely-tested, cheap-to-earn marks most students never spot",
      ],
      whoFor:
        "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "Paper 3 is 20% of the grade in 1 h 50, sat first — and the most predictable paper on the timetable. This companion maps ten years of experiment rotation, ranks the 2026 slots, and drills the marking grammar through three original experiment briefs with model full-credit graph exhibits.",
      bullets: [
        "All five 2026 slot families ranked with last-set years: oscillation, thermal, optics, electrical, moments",
        "The strongest call: an oscillation / timing experiment — eight of the last nine papers (tier VERY HIGH)",
        "Three original briefs with full-credit exhibits: T²-vs-m spring; a specific-heat-capacity temperature–time graph; a sin i vs sin r refraction graph",
        "The mark-scheme-style playbook: time-twenty-and-divide, best-fit lines, gradient triangles, s.f. discipline, circled anomalies",
        "The 5-move planning template, with a model find-g-from-a-pendulum plan",
      ],
      whoFor:
        "Any candidate whose school under-rehearses the practical — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and practical calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original exam-style questions weighted to the Forecast's tiers, so practice time lands on the likeliest 2026 marks first — radioactivity, light, dynamics, EM induction and the electricity block carry the heaviest coverage. Every question ships the full answer key: point-by-point answer, mark-scheme breakdown table, why it is correct, answering technique, and the common mistake that loses the marks.",
      bullets: [
        "Original questions in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics carry the heaviest coverage, plus niche-watchlist items",
        "Five-part answer key on every question, with a machine-checked mark-scheme breakdown table",
        "Every calculation independently computed before print; stores-and-pathways energy language throughout",
        "Strictly the 2026 syllabus — nothing from the deleted-content list",
      ],
      whoFor:
        "Students who know the physics but lose marks on definitions, working and units.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format, weighted to the forecast so the rehearsal doubles as targeted revision. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — 40 original MCQs, 1 h, with a balanced answer key and full explanations",
        "Paper 2 — 80 marks in 1 h 45: Section A's 70 compulsory marks with the data-based question, then the Section B choice of two 10-markers",
        "Mark Scheme — the five-part answer-key standard on every question, with breakdown tables, technique notes, common-mistake flags and indicative grade bands",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const CHEMISTRY_PURE_6092: SubjectCopy = {
  syllabusCode: "6092",
  examName: "O-Level Chemistry (Pure) 6092",
  syllabusChecker:
    "Not sure which syllabus your child takes? Chemistry as a single pure subject is 6092 (this pack); Science (Chemistry) inside combined Science is 5086 / 5088.",
  heroHook:
    "Qualitative analysis scored zero Paper 2 marks — two years running. It didn't vanish. It moved.",
  headlineCalls: [
    {
      title: "Chemical Calculations is the spine of the paper.",
      body: "Roughly 20 offered Paper 2 marks in both new-format years, threaded through organic, acids, redox and both data-based questions. The mole chain is the single highest-paying skill in the subject.",
    },
    {
      title: "Organic Chemistry is the largest block — and still growing.",
      body: "20 offered marks in 2025 plus 5–7 MCQs every year. The pure syllabus keeps esters, condensation polymers and isomerism, and the new sustainability outcomes were examined within a year of arriving.",
    },
    {
      title: "The 12-mark data-based question is an institution.",
      body: "Same slot (A7), same recipe, both new-format years: industrial-environmental passage, one tonne-scale calculation, one unfamiliar equation to construct. The 2026 theme forecast: hydrogen economy, plastics-to-feedstock recycling, or metals recovery.",
    },
    {
      title: "All four Section B options of the new era are acid-anchored.",
      body: "Titration processing, salt preparation and the acid characteristic reactions form one revision bundle — prepare it once and both 2026 doors are open.",
    },
    {
      title: "The Periodic Table is the most overdue core (+3.1 index).",
      body: "In all ten Paper 2s, yet below its decade average in both new-format years — and predict-from-position questions (SbH3 in 2025, SnCl4 in 2024) are the era's pet skill. A rebound is due.",
    },
    {
      title: "The practical's quantitative slot points at a redox titration.",
      body: "Dormant four years while acid–base just paid out in 2024 — and 2025 recycled 2019's thermometric design, which caps a repeat. Dark horse: an electrochemistry bench task, never set in ten years.",
    },
    {
      title: "Zero marks sat on deleted content — two years running.",
      body: "Iron-smelting set-pieces, crop-nutrient recall, the old industrial route to sulfuric acid, lead(II) qualitative tests and numerical bond-energy sums are officially dead. Every hour spent there is an hour donated to nostalgia.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full dress rehearsal, with the Paper 3 companion covering the practical's 40 marks. Every product is built from the same question-level study of the 2016–2025 papers, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "Ten years of O-Level Pure Chemistry papers — 2016 to 2025 — classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 exam. All 12 syllabus topics get a deep dive: mark history, evidence, question angles and what changed at the 2024 reset — so revision starts where the marks are likeliest.",
      bullets: [
        "Ranked prediction table for all 12 topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "12 topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "Forecasts for the 12-mark A7 data-based question (theme shortlist) and the acid-anchored Section B pairing",
        "Syllabus-change briefing: the new-in-2026 items plus the deletions, so no one revises removed content",
        "Niche watchlist of rarely-tested, cheap-to-prepare marks most students never spot",
      ],
      whoFor:
        "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "Paper 3 is 20% of the grade in 1 h 50 — and the most convention-bound paper on the timetable. This companion maps ten years of experiment rotation, ranks the 2026 slots, and drills the marking grammar through three original experiment briefs with model full-credit exhibits — every number machine-verified before print.",
      bullets: [
        "All five 2026 slot families ranked with last-set years: the QA anchor, redox titration, rates, gravimetric, thermometric",
        "The headline quantitative call: a redox / iodometric titration — dormant since 2021 (tier HIGH)",
        "Three original briefs with full-credit exhibits: titre table + mole chain; Notes-language QA grid + loss-in-mass %; rates table + graph",
        "The mark-scheme playbook: 0.05 cm³ burette discipline, 'no observable change', 3 s.f. columns, circled anomalies",
        "The 5-mark planning scaffold, with a model salt-preparation plan",
      ],
      whoFor:
        "Any candidate whose school under-rehearses the practical — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and practical calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original exam-style questions weighted to the Forecast's tiers, so practice time lands on the likeliest 2026 marks first — calculations, organic, bonding, redox and the acid bundle carry the heaviest coverage. Every question ships the full answer key: point-by-point answer, mark-scheme breakdown table, why it is correct, answering technique, and the common mistake that loses the marks.",
      bullets: [
        "Original questions in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics carry the heaviest coverage, plus niche-watchlist items",
        "Five-part answer key on every question, with a machine-checked mark-scheme breakdown table",
        "QA answers in exact printed-Notes language; every equation balanced with state symbols; every mole chain independently computed before print",
        "Strictly the 2026 syllabus — nothing from the deleted-content list",
      ],
      whoFor:
        "Students who know the chemistry but leak marks on observations, equations and units.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format, weighted to the forecast so the rehearsal doubles as targeted revision. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — 40 original MCQs, 1 h, with a balanced answer key (exactly ten each A/B/C/D) and Periodic Table conventions",
        "Paper 2 — 80 marks in 1 h 45: Section A's 70 compulsory marks with the 12-mark data-based question and 8-mark closer, then the Section B choice of two 10-markers",
        "Mark Scheme — the five-part answer-key standard on every question, with breakdown tables, technique notes, common-mistake flags and indicative grade bands",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const CHEMISTRY_SCIENCE_5086: SubjectCopy = {
  syllabusCode: "5086 / 5088",
  examName: "O-Level Science (Chemistry) 5086/5088",
  syllabusChecker:
    "Not sure which syllabus your child takes? Check the school's subject posting or the exam entry form — Science (Chemistry) as part of combined Science is 5086 / 5088 (this pack); Chemistry as a single pure subject is 6092.",
  heroHook:
    "Ten years of practicals. Not one acid-base titration.",
  headlineCalls: [
    {
      title: "Organic chemistry is the crown.",
      body: "The single biggest block of marks on the paper: 15 Paper 3 marks in 2024 and 14 in 2025, plus 3 MCQs a year across the decade. Alkenes/polymers and the ethanol family are the forecast 2026 angles.",
    },
    {
      title: "Chemical calculations are the most overdue core.",
      body: "Mole arithmetic has appeared in all ten years of both papers, yet the new era held it below its decade norm — a +3.4 overdue index, the table's largest. Mole chains with 24 dm³ gas volumes glue every big question together.",
    },
    {
      title: "The QA flowchart is a fixture, not a maybe.",
      body: "Worth 7–10 Paper 3 marks nearly every year, it owns the 2025 ten-marker and anchors the practical all ten years. The tables are printed in the exam — the marks are for navigating them fast.",
    },
    {
      title: "Five topics are forecast to carry roughly two-thirds of Paper 3.",
      body: "Organic Chemistry, Chemical Calculations, Chemical Bonding & Structure, Patterns in the Periodic Table and Qualitative Analysis. Revision order matters more than revision volume.",
    },
    {
      title: "Sustainability is surging.",
      body: "Maintaining Air Quality jumped to 8 marks in 2025 as the new 'Chemistry in a Sustainable World' section flexed. Biofuels, recycling methods and greenhouse cause-and-effect chains are first-outing material.",
    },
    {
      title: "The 10-mark data question is experiment-anchored — and it floats.",
      body: "A rates experiment in 2024 (the Section A closer), a QA deduction chain in 2025 (placed mid-paper at Q5). The 2026 call is a rates-or-titration dataset with a mole chain — revise the shape, not the position.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full dress rehearsal, with the Paper 5 companion covering the 15 practical marks. Every product is built from the same question-level study of the 2016–2025 papers, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "Ten years of O-Level Science (Chemistry) papers, classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 exam. All 12 syllabus topics get a deep dive — mark history, evidence, question angles and what changed for 2026 — plus forecasts for the 10-mark data question and the Section B choice.",
      bullets: [
        "Ranked prediction table for all 12 topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "12 topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "Forecasts for the floating 10-mark data-based question and the Section B organic-vs-inorganic pairing",
        "Syllabus change briefing: seven new-in-2026 items plus the twelve deletions, so no one revises electrolysis again",
        "12-item niche watchlist of rarely-tested, cheap-to-prepare marks most students never spot",
      ],
      whoFor:
        "Every 2026 candidate — this is the map the other three products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "Chemistry is one question of Paper 5: 15 marks in about 45 minutes, with a near-fixed anatomy — observations table, calculation chain, QA grid, deduction, modification. This companion ranks the 2026 experiment families, drills that anatomy block by block, and shows the exact wording the practical mark scheme rewards.",
      bullets: [
        "All five 2026 slot families ranked with last-tested years — QA backbone, titration, energetics, rates, gravimetric",
        "The QA backbone: anchor of the practical every year 2016–2025, drilled with the printed Practical Notes and 'no observable change' wording",
        "The headline quantitative call: acid-base titration — never set in ten years; the only burette (2022) was a redox version (tier HIGH)",
        "The dark horse: energetics / temperature change, the decade's only never-examined family (tier MODERATE)",
        "The modification/extension element — a fixture every year since 2023 — with model responses",
      ],
      whoFor:
        "Any candidate whose school under-rehearses the practical — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and practical calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original exam-style questions weighted to the Forecast's tiers, so practice time lands on the likeliest 2026 marks first — organic, calculations, bonding, the Periodic Table and QA carry the heaviest coverage. Every question ships the full answer key: point-by-point answer, mark-scheme breakdown table, why it is correct, answering technique, and the common mistake that loses the marks.",
      bullets: [
        "Original questions in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics carry the heaviest coverage, plus niche-watchlist items most students first meet in the exam hall",
        "Five-part answer key on every question, with a mark-scheme breakdown table showing how each mark is earned",
        "QA answers in exact Data-Sheet language; every equation balanced with state symbols; every mole chain independently computed before print",
        "Strictly 2026 syllabus: nothing from the deleted electrolysis / salt-preparation / catalysts list",
      ],
      whoFor:
        "Students who know the chemistry but leak marks on observations, equations and units.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Exam Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format: Paper 1 (the chemistry half, 20 MCQs) plus a full 65-mark Paper 3 — Section A's 55 compulsory marks closing on the 10-mark data-based question, then the Section B either/or choice. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 (chemistry half): 20 MCQs matched to the decade's question-frequency distribution",
        "Paper 3: 1 h 15 min, 65 marks, with the 10-mark data-based question and the Section B either/or choice",
        "Authentic instructions, answer spaces, timings and Data Sheet / Periodic Table conventions for realistic self-testing",
        "Mark Scheme — breakdown tables, technique notes and common-mistake flags for every question, plus indicative grade bands",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const BIOLOGY_PURE_6093: SubjectCopy = {
  syllabusCode: "6093",
  examName: "O-Level Biology (Pure) 6093",
  syllabusChecker:
    "Not sure which syllabus your child takes? Biology as a single pure subject is 6093 (this pack); Science (Biology) inside combined Science is 5088.",
  heroHook:
    "One skill — the genetic diagram — decides a sixth of Paper 1. Master it first.",
  headlineCalls: [
    {
      title: "Inheritance is the single biggest scoring block.",
      body: "The largest Paper 1 topic every year (6–7 questions) and a Paper 2 mainstay that hit 36 marks in 2020. The genetic diagram is the highest-yield skill in the subject.",
    },
    {
      title: "The data question wears an ecology jacket again.",
      body: "Peat-swamp carbon (2023), the CO₂ trend (2024), microplastics (2025) — three straight years, seven of ten. Expect an ecology / human-impact graph with a calculation.",
    },
    {
      title: "Homeostasis anchors the physiology marks.",
      body: "10+ Paper 2 marks every current-era year, spiking to 22 in 2025. Blood-glucose feedback and the reflex arc are the bankers.",
    },
    {
      title: "Excretion and reproduction rebound after quiet years.",
      body: "Both dipped in 2024–2025; neither stays quiet two full years. The nephron and the menstrual-cycle questions are loaded for 2026.",
    },
    {
      title: "Infectious diseases keeps climbing.",
      body: "Near-absent for most of the decade, then 10-mark outings in 2020 and 2024. Vaccines and antibiotic resistance are the contemporary vehicle — and old TYS barely covers it.",
    },
    {
      title: "A biological drawing with magnification appears every year.",
      body: "The one Paper 3 skill that never misses across the decade — and the one most students never rehearse.",
    },
  ],
  completePack:
    "One decade of data, one ranked forecast, 54 targeted questions and a full dress rehearsal — with the Paper 3 companion covering the practical. Everything a 2026 Pure Biology candidate needs to revise in the right order, built from a question-by-question study of every paper since 2016, and written fresh so every practice mark is earned on original material.",
  products: {
    forecast: {
      blurb:
        "Ten years of past papers — 763 classified questions — turned into a ranked, confidence-tiered forecast for all 14 syllabus topics across Papers 1 and 2. Includes the syllabus change briefing, the niche watchlist most students never spot, the mark-scheme language bank, a key-facts sheet, and a 14-week plan with spaced repetition built in.",
      bullets: [
        "Full ranked prediction table with VERY HIGH / HIGH / MODERATE tiers",
        "14 topic deep dives: ten-year mark history, evidence, revision list, question angles, common errors",
        "12+ analytical charts — heatmaps, trends, overdue index, data-question timeline",
        "Printable checklist, spaced-repetition planner and final-48-hours protocol",
      ],
      whoFor:
        "Every 2026 candidate — this is the map the other products are built on.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The practical is 20% of the grade, sat first, and runs on a readable rhythm. This companion maps ten years of activities, predicts both 2026 slots with confidence tiers, and teaches the conventions the mark scheme rewards — a full-credit enzyme results table, a model magnification calculation, and the five-element planning scaffold.",
      bullets: [
        "Slot-by-slot 2026 predictions with reasoning and confidence tiers",
        "Full-credit model exhibits to copy",
        "Technique readiness checklist",
        "'Double-pay' map linking each practical skill to predicted theory marks",
      ],
      whoFor:
        "Students whose schools under-rehearse practical papers — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and practical calls cross-check each other.",
    },
    vault: {
      blurb:
        "Fifty-four brand-new questions in the authentic 2026 style, weighted to the Forecast. Every question carries the full answer key: the mark-scheme-style answer, a mark breakdown table showing exactly how each mark is earned, why the answer is correct, the answering technique, and the common mistake that loses the marks.",
      bullets: [
        "235 marks of practice across all 14 topics, easiest-to-hardest within each",
        "Eight questions target rare 'niche watchlist' skills most students meet for the first time in the exam hall",
        "Five-part answer keys with mark-scheme breakdown tables on every question",
        "Every calculation and genetic cross independently verified",
        "Score tracker that routes weak topics back to the Forecast's deep dives",
      ],
      whoFor:
        "Students who know the biology but leak marks on mechanism, terminology and phrasing.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original Paper 1 (40 MCQs, 1 hour) and Paper 2 (80 marks, 1 h 45 min) replicating the 2026 format exactly — Section A's structured questions including the data-based question, then the Section B either/or choice. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Authentic format, timing, instructions pages and answer spaces",
        "Balanced answer key (10 of each letter on Paper 1 — no pattern-guessing)",
        "Exam-style biology diagrams (cells, heart, nephron, leaf) and data tables",
        "Mark breakdown tables, technique notes and common-mistake lists per question, plus an indicative grade-boundary guide",
      ],
      whoFor:
        "Every candidate, ideally twice: once as a diagnostic, once in week 12 under full timing.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const BIOLOGY_SCIENCE_5088: SubjectCopy = {
  syllabusCode: "5088",
  examName: "O-Level Science (Biology) 5088",
  syllabusChecker:
    "Not sure which syllabus your child takes? Science (Biology) as part of combined Science is 5088 (this pack); Biology as a single pure subject is 6093.",
  heroHook:
    "In Combined Science Biology, the marks live in plants and ecosystems. Revise there first.",
  headlineCalls: [
    {
      title: "Plants are the single biggest topic — bigger than in Pure Biology.",
      body: "Nutrition and transport in flowering plants scored 10+ Paper 2 marks in nine of ten years, peaking at 20–21 in 2023–2024, plus 2–3 Biology MCQs every year.",
    },
    {
      title: "Ecology owns the data question.",
      body: "Ecological pyramids, overfishing, the carbon cycle, tuna stocks — expect an ecology / human-impact table or graph with a calculation and an evaluation.",
    },
    {
      title: "Infectious diseases is the clear rising story.",
      body: "Zero Paper 2 marks in most early years, then 10–12 marks in every current-era year (HIV, antibody graphs). Old TYS barely covers it.",
    },
    {
      title: "Homeostasis & co-ordination anchors Section B.",
      body: "A Section B fixture — 16 marks in 2016, 2020 and 2022, and the 2025 PCOS hormone-graph question. Menstrual cycle and thermoregulation are the vehicles.",
    },
    {
      title: "Section B is now 'answer 1 of 2'.",
      body: "The choice tightened from three options to two, so each 10-mark question carries more weight. Prepare both predicted clusters.",
    },
    {
      title: "Your Biology is questions 21–40.",
      body: "In the combined MCQ paper, Chemistry is 1–20 and Biology is 21–40. Twenty Biology MCQs decide your Biology grade — don't let Chemistry eat your time.",
    },
  ],
  completePack:
    "One decade of data, one ranked forecast, 45 targeted questions and a full dress rehearsal — with the practical companion alongside. Everything a 2026 Science (Biology) candidate needs to revise in the right order, built from a question-by-question study of every paper since 2016, and written fresh so every practice mark is earned on original material.",
  products: {
    forecast: {
      blurb:
        "Ten years of past papers — 499 classified questions — turned into a ranked, confidence-tiered forecast for all 13 syllabus topics across Papers 1 and 2. Includes the syllabus change briefing, the niche watchlist most students never spot, the mark-scheme language bank, a key-facts sheet, and a 14-week plan with spaced repetition built in.",
      bullets: [
        "Full ranked prediction table with VERY HIGH / HIGH / MODERATE tiers",
        "13 topic deep dives: ten-year mark history, evidence, revision list, question angles, common errors",
        "12+ analytical charts — heatmaps, trends, overdue index, data-question timeline",
        "Printable checklist, spaced-repetition planner and final-48-hours protocol",
      ],
      whoFor:
        "Every 2026 candidate — this is the map the other products are built on.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The practical is sat first and runs on a readable rhythm. This companion maps ten years of activities, predicts the 2026 slots with confidence tiers, and teaches the conventions the mark scheme rewards — a full-credit enzyme results table, a model magnification calculation, and the five-element planning scaffold.",
      bullets: [
        "Slot-by-slot 2026 predictions with reasoning and confidence tiers",
        "Full-credit model exhibits to copy",
        "Technique readiness checklist",
        "'Double-pay' map linking each practical skill to predicted theory marks",
      ],
      whoFor:
        "Students whose schools under-rehearse practical papers — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and practical calls cross-check each other.",
    },
    vault: {
      blurb:
        "Forty-five brand-new questions in the authentic 2026 style, weighted to the Forecast. Every question carries the full answer key: the mark-scheme-style answer, a mark breakdown table showing exactly how each mark is earned, why the answer is correct, the answering technique, and the common mistake that loses the marks.",
      bullets: [
        "181 marks of practice across all 13 topics, easiest-to-hardest within each",
        "Six questions target rare 'niche watchlist' skills most students meet for the first time in the exam hall",
        "Five-part answer keys with mark-scheme breakdown tables on every question",
        "Every calculation and genetic cross independently verified",
        "Score tracker that routes weak topics back to the Forecast's deep dives",
      ],
      whoFor:
        "Students who know the biology but leak marks on mechanism, terminology and phrasing.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock replicating the 2026 format exactly — the 20 Biology MCQs (numbered 21–40) and a full written paper: Section A's structured questions including the data-based question, then the Section B 1-of-2 choice. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Authentic format, timing, instructions pages and answer spaces",
        "Balanced answer key — no pattern-guessing",
        "Exam-style biology diagrams (cells, heart, nephron, leaf) and data tables",
        "Mark breakdown tables, technique notes and common-mistake lists per question, plus an indicative grade-boundary guide",
      ],
      whoFor:
        "Every candidate, ideally twice: once as a diagnostic, once in week 12 under full timing.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const GEOGRAPHY_PURE_2279: SubjectCopy = {
  syllabusCode: "2279",
  examName: "O-Level Geography (Pure) 2279",
  syllabusChecker:
    "Not sure which syllabus your child takes? Geography as a full subject is 2279 (this pack); Geography as the Combined Humanities elective is 2260.",
  heroHook:
    "One topic is worth 40% of Paper 1 — and it has never been worth less than 20 marks in ten years.",
  headlineCalls: [
    {
      title: "Fieldwork is the biggest banker on either paper.",
      body: "Topic 1.3 is a fixed 20-mark compulsory Paper 1 Question 1 — 40% of the paper — and it has never been worth less than 20 marks in ten years. Drill the read-describe-calculate-present-evaluate ladder until it is automatic.",
    },
    {
      title: "The Singapore cluster is the new must-revise.",
      body: "Absent for eight straight years, it entered the 2279 syllabus and immediately anchored the 20-mark Paper 2 Question 3 (5 marks in 2024, 12 in 2025). The monsoon temperature-rainfall table is the reliable entry point.",
    },
    {
      title: "There is no choice any more — every cluster is compulsory.",
      body: "All six cluster slots are compulsory and fixed in marks, so you cannot drop a topic the way 2016–2023 candidates could. Every cluster must get a revision pass.",
    },
    {
      title: "Expect exactly two 9-mark AO3 questions — one per paper.",
      body: "Paper 1's has used Tourism (2024) then Climate (2025); Paper 2's has stayed in the Singapore Question 3 both years. Rehearse an L3 both-sides-plus-verdict answer for each.",
    },
    {
      title: "Tourism impacts carry the highest overdue index on the board.",
      body: "After 24–29 marks a year in the old papers they shrank to 7 in the new slot (+12 overdue index) and are due a fuller Paper 1 Question 2 outing — revise economic, social and environmental impacts properly.",
    },
    {
      title: "Ignore the old coasts, food and health themes entirely.",
      body: "They were 60–90 marks a year of the 2016–2023 papers and are completely gone from 2279. Revising them is the single biggest way to waste your time.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the SBQ & Skills Prediction, the Sure Questions Vault and both Final Rehearsal papers with their Mark Scheme. Analysis, practice and a full timed rehearsal in one place, all traced to the same question-level study of ten years of papers.",
  products: {
    forecast: {
      blurb:
        "The complete topic-by-topic forecast for the 2026 Geography (Pure) papers, built from a question-level study of every paper from 2016 to 2025 — so revision starts where the marks are likeliest.",
      bullets: [
        "Fifteen ranked sub-topic slots with confidence tiers and the evidence behind each call",
        "The fixed-slot map, the new-content briefing and the deprecated-content warning in one place",
        "A 14-week revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The dedicated forecast for the fieldwork and data-response strand — Topic 1.3, the 20-mark Paper 1 Question 1, and the data skills that thread every question on both papers.",
      bullets: [
        "The 2026 Q1 slot forecast: predicted context, method, processing skill and evaluation angle, each tiered",
        "Three original practice fieldwork briefs and a full model L3 evaluation answer",
        "The read-describe-calculate-present-evaluate ladder, made automatic",
      ],
      whoFor:
        "Any candidate who wants the single largest block on either paper banked before the exam.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the topic and skills calls cross-check each other.",
    },
    vault: {
      blurb:
        "Forty-five-plus original questions across all fifteen sub-topics, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers so practice lands on the likeliest 2026 marks first.",
      bullets: [
        "Every question is original and written in the 2279 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely slots first",
        "The full answer-key standard: full answer, breakdown table, technique and mistake notes",
      ],
      whoFor:
        "Students who know the geography but leak marks on data description and evaluation.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its sub-topic — the Forecast's deep dive on that slot is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original 2279 mock in the exact 2026 format — Paper 1's three compulsory structured questions with fieldwork Q1, and Paper 2's Everyday-Life, Tectonics and 20-mark Singapore cluster. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — 1 h 45 min, 50 marks: fieldwork Q1, tourism, climate and one 9-mark AO3, with figures on an insert",
        "Paper 2 — the three compulsory clusters in the correct marks and order, including the new Singapore and Everyday-Life content most old resources miss",
        "Mark Scheme — point-marked answers with breakdown tables, L1/L2/L3 shapes for the AO3 questions, and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak clusters back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const GEOGRAPHY_ELECTIVE_2260: SubjectCopy = {
  syllabusCode: "2260",
  examName: "O-Level Geography (Elective) 2260",
  syllabusChecker:
    "Not sure which syllabus your child takes? Geography as the Combined Humanities elective is 2260 (this pack); Geography as a full subject is 2279.",
  heroHook:
    "One 9-mark essay decides 18% of the paper. Rehearse it until the shape is automatic.",
  headlineCalls: [
    {
      title: "Tourism is the biggest banker you can build from the new syllabus.",
      body: "Cluster 2 is a compulsory 18-mark Section A question every year and often hosts the 9-mark AO3 — yet it was barely tested under the old 2272 papers, so build it fresh from the 2260 content, not from past papers.",
    },
    {
      title: "Section B is the only real choice: Climate versus Tectonics.",
      body: "Climate (Q3) against Tectonics (Q4), 18 marks each — so you must prepare both and pick the stronger 9-marker on the day. You can no longer drop a whole physical theme.",
    },
    {
      title: "Disaster Risk Management is the Tectonics essay magnet.",
      body: "Both current-era Tectonics options closed on a DRM judgement (recovery in 2024, magma composition in 2025). The risk = hazard × vulnerability × exposure framework is where the 9 marks live if you choose Tectonics.",
    },
    {
      title: "In the Climate option, the judgement marks cluster on carbon sinks.",
      body: "Mitigation-strategy comparison (carbon sinks, flood management) and the enhanced greenhouse effect carry the AO3 — hold a carbon-sink argument bank ready.",
    },
    {
      title: "Cluster 1 is dominated by brand-new syllabus content.",
      body: "Sense of place, media, spatial patterns, ecosystem services and urban hazards cannot be revised from old papers and are a common blind spot. Cluster 1 is heavily data-anchored — maps, posters, statistics.",
    },
    {
      title: "Half of every paper is data — the AO2 skills win the paper.",
      body: "AO2 skills are 20 of 50 marks and thread through every question: a graph completion, a trend description quoting figures, a photo interpretation and a map read.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the SBQ & Skills Prediction, the Sure Questions Vault and the Final Rehearsal paper with its Mark Scheme. Analysis, practice and a full timed dry run of the one Geography paper, all from the same question-level dataset.",
  products: {
    forecast: {
      blurb:
        "The complete cluster-by-cluster forecast for the 2026 Paper 2 Geography, built from a question-level study of the current-format 2024 and 2025 papers against the full 2260 syllabus.",
      bullets: [
        "Ranked sub-topic slots with confidence tiers and the evidence behind each call",
        "The fixed-slot map, the new-content briefing and the deprecated-content warning in one place",
        "A revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The dedicated forecast for the data-response and structured-question skills that thread every question on Paper 2 — the question-type rotation, the read-to-evaluate ladder and the 9-mark AO3.",
      bullets: [
        "The 2026 skills-demand forecast: which resource types, whether a calculation lands, where the AO3 sits — each tiered",
        "A fully-worked original data-response case study and a full model L3 essay",
        "The read-describe-calculate-present-explain-evaluate ladder, made automatic",
      ],
      whoFor:
        "Any candidate who wants the 20 AO2 marks — and the 9-mark judgement — banked before the exam.",
      crossSell:
        "Built on the same dataset as the Exam Forecast, so the cluster and skills calls cross-check each other.",
    },
    vault: {
      blurb:
        "Forty-five-plus original questions across all four clusters and the data skills, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers.",
      bullets: [
        "Every question is original and written in the 2260 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely slots first",
        "The full answer-key standard: full answer, breakdown table, technique and mistake notes",
      ],
      whoFor:
        "Students who know the geography but leak marks on data description and evaluation.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its cluster — the Forecast's deep dive on that slot is the fix.",
    },
    rehearsal: {
      blurb:
        "One complete original 2260 mock in the exact 2026 format: compulsory Section A (Everyday Life 14 marks, Tourism 18) plus a Section B choice of Climate or Tectonics, with one 9-mark AO3 and figures on an insert. Sold as one set of two PDFs, with a download for each.",
      bullets: [
        "Sits and marks exactly like the real paper — 1 h 45 min, 50 marks, answered on the paper",
        "Original data exhibits so you practise the skills — never a real past-paper item to memorise",
        "Mark Scheme — point-marked answers with breakdown tables, L1/L2/L3 shapes for the AO3, and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak clusters back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const HISTORY_PURE_2174: SubjectCopy = {
  syllabusCode: "2174",
  examName: "O-Level History (Pure) 2174",
  syllabusChecker:
    "Not sure which syllabus your child takes? History as a full subject is 2174 (this pack); History as the Combined Humanities elective is 2261.",
  heroHook:
    "British Malaya is compulsory in both papers — the most-examined Paper 1 essay theme in nine of ten years.",
  headlineCalls: [
    {
      title: "The 2024 revision quietly retired two heavyweights.",
      body: "Stalin and the USSR left Paper 1 Section A; the Cuban Missile Crisis left Paper 2 entirely. If your notes still lead with Cuba, you are revising the old exam — re-point that time at Korea, Vietnam and the origins of the Cold War in Europe.",
    },
    {
      title: "Nazi Germany is the overdue Paper 1 source case study.",
      body: "Of the three prescribed topics, British Malaya was the 2025 source-based case study and Outbreak-of-WWII-Europe was 2024 — leaving a Weimar / Hitler source set as the standout 2026 candidate.",
    },
    {
      title: "Origins of the Cold War in Europe has never been the live case study.",
      body: "In the old exam its Section A slots were taken by the now-deprecated Cuban Missile Crisis, so it has never yet been live. Malaya decolonisation and Korea are the reliable alternates.",
    },
    {
      title: "British Malaya is the two-way banker.",
      body: "Compulsory in both papers: the most-examined Paper 1 essay theme (nine of ten years) and the most-examined Paper 2 case study (five of ten). Master Perak, the FMS, the Malayan Union and Merdeka and you bank marks in both sittings.",
    },
    {
      title: "Part (e) is always the assertion — the most predictable question.",
      body: "'How far do these sources support this view?' — 8 marks, demanding all the sources plus your own knowledge. Rehearse the grouping-then-evaluating shape until it is automatic.",
    },
    {
      title: "Section B never repeats that year's source topic.",
      body: "Use the source-case-study prediction to read the essays: if Nazi Germany is the Paper 1 case study, a Nazi essay is off the table — expect Malaya, the League and Militarist Japan instead.",
    },
    {
      title: "SBQ marks are won by provenance, not content.",
      body: "For every usefulness, reliability, purpose, surprise and cross-reference question, judge who wrote the source, when, why, to whom, and whether other sources corroborate it. Content-only answers stall at the middle level.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the SBQ Skills Prediction, the Sure Questions Vault and both Final Rehearsal papers with their Mark Scheme. Every claim traces to a question-level study of every Paper 1 and Paper 2 from 2016 to 2025, and every source is original.",
  products: {
    forecast: {
      blurb:
        "The complete topic-by-topic forecast for the 2026 History (Pure) papers, built from a question-level study of every Paper 1 and Paper 2 from 2016 to 2025.",
      bullets: [
        "Fourteen ranked topics with confidence tiers and the evidence behind every source-case-study and essay call",
        "The overdue source-case-study map, the deprecated-content briefing (Stalin, Cuba) and the exact 2174 format in one place",
        "A revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The dedicated forecast for the Source-Based Case Study — the 30-mark Section A that opens every paper, and the provenance skills that win each sub-question.",
      bullets: [
        "The 2026 slot forecast: predicted (a)–(e) question types, each tiered, ending with the always-there part (e)",
        "The provenance engine — who wrote it, when, why, to whom — with original practice sources and a model part-(e) answer",
        "The comparison, usefulness, reliability, cross-reference and surprise drills, made automatic",
      ],
      whoFor:
        "Any candidate who loses marks describing sources rather than judging them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the source and essay calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original questions across every ranked topic, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers, so practice lands on Malaya, Nazi Germany and the Cold War first.",
      bullets: [
        "Every question is original and written in the 2174 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely topics first",
        "The full answer-key standard: full answer, breakdown table, technique and mistake notes",
      ],
      whoFor:
        "Students who know the history but leak marks on structure, provenance and judgement.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original 2174 mock in the exact 2026 format: each paper opens with a 30-mark Source-Based Case Study, then three essays from which you answer two. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — 1 h 50 min, 50 marks: a source-based case study on the South-East Asia / European-control era, plus three essays",
        "Paper 2 — a source-based case study on the post-WWII Cold War / decolonisation era, with current-syllabus content (Korea, Cold-War origins, Malaya decolonisation) — not the retired Cuba material",
        "Mark Scheme — point-marked answers with breakdown tables, L1/L2/L3 shapes and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const HISTORY_ELECTIVE_2261: SubjectCopy = {
  syllabusCode: "2261",
  examName: "O-Level History (Elective) 2261",
  syllabusChecker:
    "Not sure which syllabus your child takes? History as the Combined Humanities elective is 2261 (this pack); History as a full subject is 2174.",
  heroHook:
    "Origins of the Cold War in Europe is prescribed — and has never yet been the live case study.",
  headlineCalls: [
    {
      title: "The 2024 revision quietly retired two heavyweights.",
      body: "The revision narrowed the source case study to four prescribed topics and retired the Cuban Missile Crisis and the Stalin / USSR case studies. If your notes still lead with Cuba or Stalin's purges, you are revising the old exam.",
    },
    {
      title: "Origins of the Cold War in Europe is the overdue source case study.",
      body: "A prescribed topic whose old Section A slots were taken by the now-retired Cuban Missile Crisis — so it has never been the live case study in the narrowed pool. The standout 2026 Section A candidate.",
    },
    {
      title: "The Korean War is the second overdue source topic.",
      body: "Also never yet live in the current pool. Rehearse a full 30-mark Korea source set alongside Cold-War origins.",
    },
    {
      title: "Nazi Germany is the anchor source topic.",
      body: "The live source case study in 2016, 2018, 2020, 2022 and 2024, before Outbreak-of-WWII-Europe took 2025. Even overdue rivals cannot push Weimar / Hitler sources off your revision.",
    },
    {
      title: "Part (e) is always the assertion — the most predictable question.",
      body: "'How far do these sources support this view?' — 8 marks, demanding all the sources plus your own knowledge. Rehearse the group-then-evaluate shape until it is automatic.",
    },
    {
      title: "Section B never repeats that year's source topic.",
      body: "If the source case study is a Cold-War topic, expect the essays to reach into the authoritarian-regime and outbreak-of-war units — so prepare Nazi Germany, Militarist Japan and both outbreak-of-WWII essays.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the SBQ Skills Prediction, the Sure Questions Vault and the Final Rehearsal paper with its Mark Scheme. Every claim traces to a question-level study of every History paper from 2016 to 2025, and every source is original.",
  products: {
    forecast: {
      blurb:
        "The complete topic-by-topic forecast for the 2026 History (Elective) paper, built from a question-level study of every History paper from 2016 to 2025.",
      bullets: [
        "Ten ranked topics with confidence tiers and the evidence behind every source-case-study and essay call",
        "The overdue source-case-study map, the deprecated-content briefing (Stalin, Cuba) and the exact 2261 format in one place",
        "A revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The dedicated forecast for the Source-Based Case Study — the 30-mark Section A that opens the paper, and the provenance skills that win each sub-question.",
      bullets: [
        "The 2026 slot forecast: predicted (a)–(e) question types, each tiered, ending with the always-there part (e)",
        "The provenance engine — who wrote it, when, why, to whom — with original practice sources and a model part-(e) answer",
        "The cross-reference, surprise, purpose, message and usefulness drills, made automatic",
      ],
      whoFor:
        "Any candidate who loses marks describing sources rather than judging them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the source and essay calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original questions across every ranked topic, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers, so practice lands on the Cold War, Nazi Germany and the outbreak of war first.",
      bullets: [
        "Every question is original and written in the 2261 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely topics first",
        "The full answer-key standard: full answer, breakdown table, technique and mistake notes",
      ],
      whoFor:
        "Students who know the history but leak marks on structure, provenance and judgement.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original 2261 mock in the exact 2026 format: a 30-mark Source-Based Case Study, then three essays from which you answer two. Sold as one set of two PDFs, with a download for each.",
      bullets: [
        "Sits and marks exactly like the real paper, with original invented sources clearly framed as practice material",
        "Current-syllabus content throughout — Cold-War origins, Korea, Nazi Germany — not the retired Cuba or Stalin material",
        "Mark Scheme — point-marked answers with breakdown tables, L1/L2/L3 shapes and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const PHYSICS_SCIENCE_5086: SubjectCopy = {
  syllabusCode: "5086 / 5087",
  examName: "O-Level Science (Physics) 5086/5087",
  syllabusChecker:
    "Not sure which syllabus your child takes? Check the school's subject posting or the exam entry form — Science (Physics) as part of combined Science is 5086 / 5087 (this pack); Physics as a single pure subject is 6091.",
  heroHook:
    "Absent for eight straight years. Then 8–9 marks — two years running.",
  headlineCalls: [
    {
      title: "Radioactivity was made a heavyweight the moment it arrived.",
      body: "It entered the combined-science syllabus in 2024 and took 8 marks immediately (nuclide notation, decay equations, half-life), then 9 in 2025 including a Tc-99m medical-tracer Section B. Older revision material gives 5086/5087 students almost nothing on it.",
    },
    {
      title: "The 10-mark data question alternates — and motion is due back.",
      body: "A cyclist speed–time graph in 2024, a lauric-acid cooling curve in 2025. The model forecasts the 2026 closer rotating back to the motion–energy family at HIGH confidence, with a thermal backup call published alongside it.",
    },
    {
      title: "Force & Pressure is the most overdue every-year core.",
      body: "Mass, weight, density and pressure have appeared in all ten Paper 2s, yet the new era holds the topic to 4 marks a year against a decade average near 7 — a +3.4 overdue index, the largest among the every-year cores.",
    },
    {
      title: "The practical's likeliest 2026 experiment was last set in 2018.",
      body: "Density has been untested for eight years and was foreshadowed in both 2023 and 2025 — the standout Paper 5 call (tier VERY HIGH).",
    },
    {
      title: "Six topics are forecast to carry roughly half of Paper 2.",
      body: "Revision order matters more than revision volume — the Forecast ranks all 16 topics so the heaviest ground comes first.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full dress rehearsal, with the Paper 5 companion covering the 15 practical marks. Every product is built from the same question-level study of the 2016–2025 papers, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "An analysis of ten years of O-Level Science (Physics) papers, classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 exam, backed by 12+ charts. All 16 syllabus topics get a deep dive — mark history, evidence, question angles, and what changed in the new syllabus.",
      bullets: [
        "Ranked prediction table for all 16 topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "16 topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "Forecasts for the 10-mark data-based question and the Section B either/or pairing",
        "Syllabus change briefing: the eight new-in-2026 items plus the deprecated list, so no one revises removed content",
        "12-item niche watchlist of rarely-tested, cheap-to-prepare marks most students never spot",
      ],
      whoFor: "Every 2026 candidate — this is the map the other three products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "Physics is Question 1 of Paper 5: 15 marks in about 45 minutes, built to a near-fixed template. This companion ranks the candidate experiment families for 2026, then drills the template through three full experiment briefs — each with model full-credit exhibits: six-reading table, best-fit graph, gradient, and the constant to 2 s.f.",
      bullets: [
        "All five 2026 slot candidates ranked, with last-tested years and the reasoning shown",
        "The headline call: density — untested for eight years and foreshadowed in 2023 and 2025 (tier VERY HIGH)",
        "Three full experiment briefs drilling the 15-mark template, with model full-credit exhibits",
        "The modification/extension block — 3 marks in every paper since 2023 — with model responses",
        "Dark-horse watchlist: thermal and light practicals, never set in a decade yet syllabus-listed",
      ],
      whoFor:
        "Any candidate who has only met the Paper 5 template once or twice — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and practical calls cross-check each other.",
    },
    vault: {
      blurb:
        "48 original exam-style questions worth 211 marks, weighted to the Forecast's tiers so practice time lands on the likeliest 2026 marks first. Every question carries the full answer key: the complete point-by-point answer, a mark-scheme breakdown table, why the answer is correct, the answering technique, and the common mistake that loses the marks.",
      bullets: [
        "48 original questions (211 marks) in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics get the heaviest coverage, plus 11 niche-watchlist questions",
        "Five-part answer key on every question, with a mark-scheme breakdown table showing how each mark is earned",
        "Every numeric answer independently computed and checked before print; every allocation sums",
        "Strictly 2026 syllabus: nothing from the deprecated 5076/5077/5078-era content list",
      ],
      whoFor: "Students who know the physics but leak marks on method, units and phrasing.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Exam Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format: Paper 1 (the physics half, 20 MCQs) plus a full 65-mark Paper 2 — Section A's 55 compulsory marks ending in the 10-mark data-based question, then the Section B either/or choice. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 (physics half): 20 MCQs matched to the decade's question-frequency distribution",
        "Paper 2: 1 h 15 min, 65 marks, with the data-based closer and the Section B choice",
        "Authentic instructions, answer spaces and timings for realistic self-testing",
        "Mark Scheme — breakdown tables, technique notes and common-mistake flags for every question, plus indicative grade bands",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const SOCIAL_STUDIES_2260: SubjectCopy = {
  syllabusCode: "2260 / 2261",
  examName: "O-Level Social Studies 2260/2261",
  syllabusChecker:
    "Social Studies is the compulsory half of Combined Humanities — 2260 when paired with the Geography elective, 2261 with the History elective. This pack covers the Social Studies paper for both.",
  heroHook:
    "The 10-mark assertion has appeared every single year since 2017. Rehearse its shape until it is automatic.",
  headlineCalls: [
    {
      title: "The Section A case study is most likely Being Part of a Globalised World.",
      body: "The overdue Issue: last seen in Section A in 2023, while Issues 1 and 2 took the two current-era papers. It is the strongest 35-mark call for 2026.",
    },
    {
      title: "Q5 has appeared in every paper since 2017.",
      body: "The 10-mark 'how far do you agree' assertion, using all the sources plus your own knowledge. Rehearse its group-then-evaluate shape until automatic — it is the single most predictable question we track.",
    },
    {
      title: "The SBQ slot pattern is stable.",
      body: "Q1 inference/message, Q2 comparison, Q3 usefulness, Q4 surprise-or-reliability, Q5 assertion. Prepare a fixed answer shape for each slot.",
    },
    {
      title: "Section B is on a different Issue — most likely Living in a Diverse Society.",
      body: "Two compulsory questions on an Issue other than Section A's: Q6 (7 marks) two developed reasons in the Singapore context; Q7 (8 marks) two factors or perspectives plus a supported judgement.",
    },
    {
      title: "Expect at least one cartoon and one data source in Section A.",
      body: "The cartoon is almost always the target of the message or purpose question.",
    },
    {
      title: "Provenance wins the judgement marks.",
      body: "Who wrote it, when, why — and do the other sources agree? Content-only answers stall at the middle level.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the SBQ Skills Prediction, the Sure Questions Vault and the Final Rehearsal paper with its Mark Scheme. Every claim traces to a question-level study of every Social Studies paper from 2016 to 2025, and every source is original.",
  products: {
    forecast: {
      blurb:
        "The complete Issue-by-Issue forecast for the 2026 Social Studies paper, built from a question-level study of every Social Studies paper from 2016 to 2025.",
      bullets: [
        "The three Issues ranked with confidence tiers and the evidence behind every case-study and structured-question call",
        "The Section A and Section B Issue-rotation maps, the deprecated-content briefing and the exact 2260/2261 format in one place",
        "A revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The dedicated forecast for the Source-Based Case Study — the 35-mark Section A that carries most of the paper, and the provenance skills that win each question.",
      bullets: [
        "The 2026 slot forecast: predicted Q1–Q5 question types, each tiered, ending with the always-there Q5 assertion",
        "The provenance and cross-reference engine — who wrote it, when, why, do the others agree — with original practice sources and a model Q5 answer",
        "The message, comparison, usefulness and surprise drills, made automatic",
      ],
      whoFor: "Any candidate who describes sources rather than judging them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the Issue and source-skill calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original questions across all three Issues, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers, so practice lands on Governance, Diversity and the overdue Globalisation first.",
      bullets: [
        "Every question is original and written in the 2260/2261 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely Issues first",
        "The full answer-key standard: full answer, breakdown table, technique and mistake notes",
      ],
      whoFor:
        "Students who know the content but leak marks on structure, provenance and judgement.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its Issue — the Forecast's deep dive on that Issue is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format: a 35-mark Source-Based Case Study, then two compulsory Section B questions on a different Issue. Sold as one set of two PDFs, with a download for each.",
      bullets: [
        "Sits and marks exactly like the real paper, with original invented sources clearly framed as practice material",
        "Includes a cartoon and a data source in Section A, matching the decade's pattern",
        "Mark Scheme — point-marked answers with breakdown tables, the Q5 evaluation shape, and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak Issues back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const POA_7087: SubjectCopy = {
  syllabusCode: "7087",
  examName: "O-Level Principles of Accounts 7087",
  syllabusChecker:
    "This pack covers O-Level Principles of Accounts 7087 — the current syllabus, examined as Paper 1 (40 marks) and Paper 2 (60 marks).",
  heroHook:
    "Ratios have carried 17–21 marks a year, across both papers, for five straight years.",
  headlineCalls: [
    {
      title: "The 20-mark statement build opens Paper 2.",
      body: "The statement-of-financial-performance and statement-of-financial-position build is the strongest single call on the paper, and the entity is forecast to swing back to a limited company this year.",
    },
    {
      title: "Ratios are the spine of the exam.",
      body: "A calculate-then-comment block appears in both papers, worth 17–21 marks a year for five straight years. If you master one skill, make it this one — and learn the sentence that scores the comment mark.",
    },
    {
      title: "Adjustments are woven through everything.",
      body: "Depreciation, accruals and prepayments, disposal and impairment allowance thread the big statement and are worth 8–14 marks in Paper 2.",
    },
    {
      title: "The Paper 2 closer is a recommend-and-justify decision.",
      body: "A 7–11 mark decision on business form or a business choice, weighing accounting and non-accounting information.",
    },
    {
      title: "Bank reconciliation, control accounts and incomplete records are overdue.",
      body: "Near-silent since 2021. A full question on one of them is the highest-value niche bet — and the line no generic guidebook offers.",
    },
    {
      title: "The own-figure rule pays throughout.",
      body: "A correct method on a wrong earlier figure still scores. Showing your workings line by line is worth real marks in every statement and ratio question.",
    },
  ],
  completePack:
    "The data tells you what to revise; the Playbook shows you how to present it; the Vault drills it; the Rehearsal times it. One pack, the whole preparation path from forecast to final paper — every claim traced to the same question-level study, weighted to the current 7087 era.",
  products: {
    forecast: {
      blurb:
        "The full data picture: every 7087 topic ranked by a decade of papers, weighted to the current era, with tier calls, per-year mark trends and the niche watchlist. Start here — it tells you what to revise first, and why.",
      bullets: [
        "Every topic ranked with confidence tiers and the evidence behind each call",
        "Per-year mark trends and the overdue index, including the near-silent niches",
        "A revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "Every statement, ledger and reconciliation the paper can ask for — ruled, totalled and worked with one consistent set of original figures. Copy the layout under pressure and bank the presentation marks before you compute a single figure.",
      bullets: [
        "The ruled skeleton for each statement, so the format marks are yours first",
        "Every ledger and reconciliation worked with one consistent set of original figures",
        "The own-figure rule, workings discipline, and the presentation habits that stop marks leaking",
      ],
      whoFor:
        "Any candidate who can do the accounting but loses marks on layout, sub-totals and workings.",
      crossSell:
        "Built on the same dataset as the Exam Forecast, so you drill the formats the forecast says are likeliest.",
    },
    vault: {
      blurb:
        "Forty-five-plus original questions built on the highest-probability topics, each with a full point-by-point answer, a mark-scheme breakdown and the common mistake that loses marks. Practise on the ground the data says matters most.",
      bullets: [
        "Every question is original and written in the 7087 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely topics first",
        "The full answer-key standard: full answer, breakdown table, technique and mistake notes",
      ],
      whoFor:
        "Students who know the accounting but leak marks on adjustments, ratios and comment sentences.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the current 7087 style, matched to the forecast so your last rehearsal targets the likeliest ground. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — 40 marks in one hour: theory plus short workings, exam-timed",
        "Paper 2 — 60 marks in two hours, with the Insert and the 20-mark statement question",
        "Mark Scheme — every mark located, own-figure follow-through shown, and the technique note that turns a near-miss into a full mark",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Playbook's formats.",
    },
  },
};

const E_MATH_4052: SubjectCopy = {
  syllabusCode: "4052",
  examName: "O-Level Elementary Mathematics 4052",
  syllabusChecker:
    "Not sure which syllabus your child takes? Elementary Mathematics is 4052 (this pack); Additional Mathematics is 4049, a separate exam with its own pack.",
  heroHook:
    "Number & Algebra is forecast to carry about 97 of the 180 marks — 54% of the whole subject.",
  headlineCalls: [
    {
      title: "Number & Algebra is the backbone — about half of all 180 marks.",
      body: "Roughly 97 of the 180 marks. Expect an algebraic-fraction simplification and a factorise/expand item, plus a quadratic-equation solve and a simultaneous-equations item, as the heaviest bankers (tier VERY HIGH).",
    },
    {
      title: "A full statistics question is forecast, worth around 16 marks.",
      body: "A cumulative-frequency curve (median, quartiles, IQR) or two box-and-whisker plots compared, plus a mean-and-standard-deviation calculation from a frequency table using the printed formula — across both papers.",
    },
    {
      title: "Paper 2 ends with an extended real-world application.",
      body: "Anchored in rate/speed or finance, integrating statistics, percentage and ratio — budget 9–13 marks, with an open 'justify with calculations' part (2023 solar, 2024 candles, 2025 electric car).",
    },
    {
      title: "Trigonometry & bearings is forecast for about 16 marks.",
      body: "A bearings problem solved with the sine/cosine rule, area = ½ab sin C, and Pythagoras. Watch the obtuse-angle sine-rule case and three-figure bearings.",
    },
    {
      title: "Vectors and coordinate geometry are due for fuller treatment.",
      body: "Vectors carry a +4.1 overdue index after light current-era showings. Rehearse expressing AB in terms of a and b, magnitude, and the equation of a line from two points.",
    },
    {
      title: "Reverse percentage, map area scale and volume ratio are the trap items.",
      body: "Map area scale (n²) and volume ratio of similar solids (k³) are the recurring traps. Drill the square-or-cube-the-scale-factor reflex.",
    },
    {
      title: "Format discipline is worth several marks a paper.",
      body: "Omitting essential working loses method marks; non-exact answers must be 3 s.f. (1 d.p. for angles); bearings must be three figures.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the Formula & Method Playbook, the Sure Questions Vault and both Final Rehearsal papers with their Mark Scheme. Elementary Mathematics is examined as two 90-mark papers, and the rehearsal mirrors both.",
  products: {
    forecast: {
      blurb:
        "The complete topic-by-topic forecast for the 2026 Elementary Mathematics papers, built from a question-level study of ten years of Paper 1 and Paper 2 (2016–2025) against the full 4052 syllabus.",
      bullets: [
        "Ranked topics with confidence tiers and the ten-year evidence behind each call",
        "The exact 2026 format, the AO weightings and a niche watchlist of under-rehearsed angles",
        "A revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The formulae-and-method companion: what the 4052 formulae page gives you versus what you must memorise, then the standard-method recipe for the ten question families that decide the paper.",
      bullets: [
        "Two clear lists, so no revision minute is wasted on formulae that are already printed",
        "A numbered method plus a worked example for algebraic fractions, quadratics, bearings, circles, mensuration and more",
        "The M/A/B marking conventions, calculator discipline and the error taxonomy that stops marks leaking",
      ],
      whoFor:
        "Any candidate who knows the maths but loses method marks on presentation and accuracy.",
      crossSell:
        "Every worked example is recomputed by a symbolic-algebra script before print — and mapped to the Forecast's tiers.",
    },
    vault: {
      blurb:
        "Forty-five-plus original questions across all the top topics, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers so practice lands on the heaviest ground first.",
      bullets: [
        "Every question is original and written in the 4052 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely topics first",
        "Every number is machine-verified, so the answer key is one you can trust",
      ],
      whoFor: "Students who can do the maths but leak marks on working and accuracy.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "Two complete original 4052 mocks in the exact 2026 format — Paper 1 and Paper 2, each 2 h 15 min and 90 marks, with a printed formulae page. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — about 26 short-answer questions, sat and marked exactly like the real paper",
        "Paper 2 — the extended real-world application closer, matched to the forecast",
        "Mark Scheme — every mark located, method-mark conventions shown, and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Playbook's methods.",
    },
  },
};

const A_MATH_4049: SubjectCopy = {
  syllabusCode: "4049",
  examName: "O-Level Additional Mathematics 4049",
  syllabusChecker:
    "Not sure which syllabus your child takes? Additional Mathematics is 4049 (this pack); Elementary Mathematics is 4052, a separate exam with its own pack.",
  heroHook:
    "Calculus is forecast to carry 55–65 marks across the two papers — about a third of every mark.",
  headlineCalls: [
    {
      title: "Calculus is the spine of both papers.",
      body: "Roughly 55–65 marks across the two papers. A stationary-points / second-derivative question and an area-under-a-curve integration question on each paper are the heaviest calls (tier VERY HIGH).",
    },
    {
      title: "A kinematics question is forecast to land in Paper 2.",
      body: "Displacement, velocity and acceleration of a particle in a straight line — worth around 6–9 marks.",
    },
    {
      title: "Prove-an-identity then solve-in-interval is a near-annual fixture.",
      body: "Prove a trig identity, then solve in a given interval. Rehearse it for both papers.",
    },
    {
      title: "The R-formula is the Paper 2 trigonometry workhorse.",
      body: "a cos θ + b sin θ = R cos(θ ± α), predicted for a maximum/minimum and an equation.",
    },
    {
      title: "An exponential or logarithmic growth-decay model is forecast.",
      body: "Solved with natural logs, most likely in Paper 2.",
    },
    {
      title: "A full circle question is the most reliable Paper 2 geometry item.",
      body: "Find the equation; tangent or normal at a point. It is due to return in full.",
    },
    {
      title: "The discriminant / 'set of values of k' question is overdue.",
      body: "Light in 2024–2025, and forecast to reappear.",
    },
    {
      title: "The term independent of x is a compact Paper 1 banker.",
      body: "Binomial expansion — a specific term, the term independent of x, or a coefficient — is a high-probability, compact item.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the Formula & Method Playbook, the Sure Questions Vault and both Final Rehearsal papers with their Mark Scheme. Every claim traces to the same classified-question dataset, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "The complete topic-by-topic forecast for the 2026 Additional Mathematics papers, built from a question-level study of ten years of Paper 1 and Paper 2 against the full 4049 syllabus.",
      bullets: [
        "Ranked topics with confidence tiers and the ten-year evidence behind each call",
        "The exact 2026 format, the AO weightings and a niche watchlist of under-rehearsed angles",
        "A revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The formulae-and-method companion: what the 4049 formulae page gives you versus what you must memorise, then the standard-method recipe for the ten question families that decide the paper.",
      bullets: [
        "Two clear lists, so no revision minute is wasted on formulae that are already printed",
        "A numbered method plus a worked example for the R-formula, stationary points, area, binomial, circles and more",
        "The M1/A1 marking conventions, calculator discipline and the error taxonomy that stops marks leaking",
      ],
      whoFor:
        "Any candidate who knows the maths but loses method marks on presentation and accuracy.",
      crossSell:
        "Every worked example is recomputed by a symbolic-algebra script before print — and mapped to the Forecast's tiers.",
    },
    vault: {
      blurb:
        "Forty-five-plus original questions across all ten topics, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers so practice lands on the heaviest ground first.",
      bullets: [
        "Every question is original and written in the 4049 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely topics first",
        "Every number is machine-verified, so the answer key is one you can trust",
      ],
      whoFor: "Students who can do the maths but leak marks on working and accuracy.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "Two complete original 4049 mocks in the exact 2026 format — Paper 1 and Paper 2, each 2 h 15 min and 90 marks, with a printed formulae page. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — 12–14 answer-all questions, sat and marked exactly like the real paper",
        "Paper 2 — the full syllabus range, matched to the forecast",
        "Mark Scheme — every mark located, M1/A1 conventions shown, and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Playbook's methods.",
    },
  },
};

// ---------------------------------------------------------------------------
// N(A)-Level (G2). None of these subjects sits a separate practical paper, so
// the companion forecasts the skills strand hidden inside the written papers.
// ---------------------------------------------------------------------------

const NA_PHYSICS_5105: SubjectCopy = {
  syllabusCode: "5105 / 5106",
  examName: "N(A)-Level Science (Physics) 5105/5106",
  syllabusChecker:
    "Not sure which syllabus your child takes? N(A)-Level Science (Physics) is 5105 / 5106 (this pack). The O-Level papers — Science (Physics) 5086/5087 and Pure Physics 6091 — are different exams with their own packs.",
  heroHook:
    "Practical Electricity was worth about 34 Paper 2 marks — then scored zero in both new-era papers.",
  headlineCalls: [
    {
      title: "Radioactivity is the reform's new pillar, not a novelty.",
      body: "Absent for eight straight years, it printed 4 then 3 Paper 2 marks the instant it entered the 2024 syllabus, plus about two Paper 1 MCQs a year. When this syllabus adds a topic, it examines it at once.",
    },
    {
      title: "Practical Electricity is the overdue giant.",
      body: "A 2016–2023 fixture worth about 34 Paper 2 marks, it then scored zero in both new-era papers. Fuse-rating logic, kWh costing and the earthing chain are primed to rebound — the largest overdue signal among the core topics.",
    },
    {
      title: "D.C. Circuits is the single most reliable structured block.",
      body: "The decade's heaviest circuit family (about 34 offered Paper 2 marks), it rebounded to a full 8-mark Section A closer in 2025 on a variable-resistor circuit. Series/parallel reasoning plus R = V/I powers both papers.",
    },
    {
      title: "The 8-mark Section A closer is now a data question.",
      body: "Both reformed papers ended Section A with a graph or experiment builder — a density mass-volume graph in 2024, a variable-resistor circuit table in 2025. The forecast turns that into a fixed attack shape: read, then calculate, then explain.",
    },
    {
      title: "Experimental skills are about 10% of every paper — and hidden.",
      body: "There is no separate practical exam, so graphs, tables, gradients and mark-scheme prose are examined inside Papers 1 and 2. The Skills & Data-Response Prediction forecasts exactly where they land.",
    },
    {
      title: "Whole families of old questions are gone.",
      body: "Moments, magnetism, refraction and lenses, and sound calculations printed 6–13 marks a year up to 2023, then zero in 2024–2025. The Forecast lists every deletion so no one revises them again.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full dress rehearsal, with the skills companion covering the ~10% of marks that hide inside the written papers. Every product is built from the same question-level study of the 2016–2025 papers, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "Ten years of N(A)-Level Science (Physics) papers, classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 exam. All thirteen syllabus topics get a deep dive — mark history, evidence, question angles and what changed for 2026 — plus a Section B forecast.",
      bullets: [
        "Ranked prediction table for all thirteen topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "Thirteen topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "A Section B forecast for the electricity-vs-matter/waves 8-mark choice",
        "Syllabus change briefing: the new-in-2026 items (Radioactivity, energy stores) plus every deletion, so no one revises moments again",
        "Niche watchlist of rarely-tested, cheap-to-prepare marks most students never spot",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call here has original practice questions there.",
    },
    companion: {
      blurb:
        "N(A) Science (Physics) has no separate practical exam — so its experimental-skill marks (about 10%) hide inside Papers 1 and 2. This companion forecasts which skills are likeliest in 2026, drills them with original worked briefs, and shows the exact wording the mark scheme rewards, from the gradient-is-density trick to the earthing chain.",
      bullets: [
        "The six skill families ranked for 2026 — graphs, tables, unit-audited calculations, mark-scheme prose, error work, modifications",
        "A ten-year skills rotation grid showing which family surfaced each year",
        "Three original worked skill briefs, each with a full model answer and mark-scheme breakdown",
        "The data-response attack protocol for the 8-mark closer, plus a mark-scheme language bank",
        "A technique checklist and a 'double-pay' map of skills that also earn content marks",
      ],
      whoFor: "Any candidate whose school under-rehearses the skills strand — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and skills calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original exam-style questions weighted to the Forecast's tiers, so practice time lands on the likeliest 2026 marks first — Force & Pressure, D.C. Circuits, Kinematics and Energy carry the heaviest coverage. Every question ships the full answer key.",
      bullets: [
        "Original questions in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics carry the heaviest coverage, plus niche-watchlist items",
        "Five-part answer key on every question, with a mark-scheme breakdown table",
        "Every calculation computed independently before print, with g = 10 m/s² and a full unit audit",
        "Strictly 2026 syllabus: nothing from the deleted moments / magnetism / lenses / sound-calculation list",
      ],
      whoFor:
        "Students who know the physics but leak marks on graphs, units and mark-scheme prose.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format: Paper 1's 20 compulsory MCQs, then Paper 2's structured questions with the 8-mark data-response closer and the Section B choice. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 (MCQ) — 20 compulsory questions matched to the decade's question-frequency distribution",
        "Paper 2 (Structured) — Section A's compulsory marks ending in the 8-mark data closer, then the Section B choice",
        "Mark Scheme — breakdown tables, technique notes and common-mistake flags for every question, plus indicative grade bands",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const NA_CHEMISTRY_5105: SubjectCopy = {
  syllabusCode: "5105 / 5107",
  examName: "N(A)-Level Science (Chemistry) 5105/5107",
  syllabusChecker:
    "Not sure which syllabus your child takes? N(A)-Level Science (Chemistry) is 5105 / 5107 (this pack). The O-Level papers — Science (Chemistry) 5086/5088 and Pure Chemistry 6092 — are different exams with their own packs.",
  heroHook:
    "Electrolysis, salt preparation and reacting-mass stoichiometry have left the syllabus entirely. Your TYS hasn't noticed.",
  headlineCalls: [
    {
      title: "Organic chemistry is the crown of the paper.",
      body: "The single biggest block of marks: about 102 offered marks across the decade and 3 Paper 3 MCQs every year. The alkane-vs-alkene bromine test and addition reactions, plus the polymers / recycling / biofuel sustainability story, are the forecast 2026 angles.",
    },
    {
      title: "The Periodic Table is the co-favourite — and the most overdue.",
      body: "Patterns in the Periodic Table is the other giant (about 104 offered marks), yet it slipped roughly 2.4 marks below its decade average across 2024–25. A reactivity-series or group-trend Section A anchor is forecast to rebound.",
    },
    {
      title: "Chemical calculations own the MCQ paper.",
      body: "The densest Paper 3 topic at 3 MCQs a year, fed hard in 2024–25. Drill equation-writing with state symbols and the n = m / M mole-mass calculation — not reacting masses, which are out of syllabus.",
    },
    {
      title: "The 2024 reform favours the prepared candidate.",
      body: "Paper 4 Section A grew to 22 marks with an 8-mark closer, and Section B shrank to answering one of two. More compulsory content, less choice — the forecast rewards breadth over gambles.",
    },
    {
      title: "Qualitative analysis is now tiny — gases only.",
      body: "N(A) QA is CO₂, H₂ and O₂ only. Learn the three gas tests cold for a cheap mark; the O-Level ion tables are not in this syllabus.",
    },
    {
      title: "Experimental skills are about 10% of every paper — and hidden.",
      body: "There is no separate practical exam, so apparatus, separation, chromatography and data-reading are examined inside Papers 3 and 4. The Skills & Data-Response Prediction forecasts exactly where they land.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full dress rehearsal, with the skills companion covering the ~10% of marks that hide inside the written papers. Every product is built from the same question-level study of the 2016–2025 papers, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "Ten years of N(A)-Level Science (Chemistry) papers, classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 exam. All nine syllabus topics get a deep dive — mark history, evidence, question angles and what changed for 2026 — plus a Section B forecast.",
      bullets: [
        "Ranked prediction table for all nine topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "Nine topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "A Section B forecast for the organic-vs-periodic-table 8-mark choice",
        "Syllabus change briefing: the new-in-2026 items plus every deletion, so no one revises electrolysis again",
        "Niche watchlist of rarely-tested, cheap-to-prepare marks most students never spot",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call here has original practice questions there.",
    },
    companion: {
      blurb:
        "N(A) Science (Chemistry) has no separate practical exam — so its experimental-skill marks (about 10%) hide inside Papers 3 and 4. This companion forecasts which skills are likeliest in 2026, drills them with original worked briefs, and shows the exact wording the mark scheme rewards, from 'no observable change' to the three gas tests.",
      bullets: [
        "The seven skill families ranked for 2026 — apparatus, separation, chromatography, purity data, tables, gas tests, observations",
        "A ten-year skills rotation grid showing which family surfaced each year",
        "Three original worked skill briefs, each with a full model answer and mark-scheme breakdown",
        "A mark-scheme language bank: start-and-end colours, 'suggest apparatus' phrasing, conclusion wording",
        "A technique checklist and a 'double-pay' map of skills that also earn content marks",
      ],
      whoFor: "Any candidate whose school under-rehearses the skills strand — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and skills calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original exam-style questions weighted to the Forecast's tiers, so practice time lands on the likeliest 2026 marks first — organic chemistry, the Periodic Table and chemical calculations carry the heaviest coverage. Every question ships the full answer key.",
      bullets: [
        "Original questions in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics carry the heaviest coverage, plus niche-watchlist items",
        "Five-part answer key on every question, with a mark-scheme breakdown table",
        "Every equation balanced with state symbols; every mole-mass calculation computed before print",
        "Strictly 2026 syllabus: nothing from the deleted electrolysis / salt-preparation / redox list",
      ],
      whoFor:
        "Students who know the chemistry but leak marks on observations, equations and units.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format: Paper 3's compulsory MCQs, then Paper 4's Section A with its 8-mark closer and the one-of-two Section B choice. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 3 (MCQ) — compulsory questions matched to the decade's question-frequency distribution",
        "Paper 4 (Structured) — Section A's 22 marks ending in the 8-mark closer, then the Section B choice",
        "Mark Scheme — breakdown tables, technique notes and common-mistake flags for every question, plus indicative grade bands",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const NA_BIOLOGY_5106: SubjectCopy = {
  syllabusCode: "5106 / 5107",
  examName: "N(A)-Level Science (Biology) 5106/5107",
  syllabusChecker:
    "Not sure which syllabus your child takes? N(A)-Level Science (Biology) is 5106 / 5107 (this pack). The O-Level papers — Science (Biology) 5088 and Pure Biology 6093 — are different exams with their own packs.",
  heroHook:
    "The 2024 reform deleted the entire reproduction and genetics strand — about 60 marks a 2026 candidate will never see.",
  headlineCalls: [
    {
      title: "Flowering-plant biology is the crown of the paper.",
      body: "The single biggest block of marks: about 139 offered marks across the decade and a slot in every Paper 6. Photosynthesis-rate and transpiration are the forecast Section B and data-response angles, and it is mildly overdue after two lighter reformed papers.",
    },
    {
      title: "Respiration is running hot — its highest marks ever.",
      body: "The second-heaviest topic (about 82 marks) and rising: 8 marks in 2024 and 12 in 2025. The alveolus adaptation and both respiration word equations are the strongest Section A anchors.",
    },
    {
      title: "Nutrition in Humans is the reformed-syllabus growth story.",
      body: "Blood-glucose regulation, type-2 diabetes and the liver's roles jumped to 8 then 11 marks in 2024–25, its heaviest ever. These are new named outcomes the reformed papers are mining.",
    },
    {
      title: "Transport in Humans is the most overdue big topic.",
      body: "It fell to just 3 marks in 2024, well below its 7-mark decade average, so a heart, blood-vessel or blood-components rebound is forecast. It is also the biggest MCQ contributor.",
    },
    {
      title: "Infectious Diseases is the new topic — thinly mined.",
      body: "Influenza, pneumococcal disease, vaccines and antibiotic resistance entered with the reform and gave a full 8-mark Section B builder in 2024. Absent before 2021, it is a rare, high-value area to bank fresh marks.",
    },
    {
      title: "Biology is descriptive — only about six sums in a decade.",
      body: "Just six numerical parts appeared in ten years: magnification, percentage change in mass in osmosis, rate and averaging. Marks are won in prose, not arithmetic.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full dress rehearsal, with the skills companion covering the ~10% of marks that hide inside the written papers. Every product is built from the same question-level study of the 2016–2025 papers, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "Ten years of N(A)-Level Science (Biology) papers, classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 exam. All eight syllabus topics get a deep dive — mark history, evidence, question angles and what changed for 2026 — plus a Section B forecast.",
      bullets: [
        "Ranked prediction table for all eight topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "Eight topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "A Section B forecast for the plants-vs-human-body 8-mark choice",
        "Syllabus change briefing: the new-in-2026 items plus every deletion, so no one revises reproduction again",
        "Niche watchlist of rarely-tested, cheap-to-prepare marks most students never spot",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call here has original practice questions there.",
    },
    companion: {
      blurb:
        "N(A) Science (Biology) has no separate practical exam — so its experimental-skill marks (about 10%) hide inside Papers 5 and 6. This companion forecasts which skills are likeliest in 2026 — reading tables and graphs, biological drawing, magnification, osmosis and enzyme data — and drills them with original worked briefs.",
      bullets: [
        "The skill families ranked for 2026, with a ten-year rotation grid showing which surfaced each year",
        "Original worked skill briefs, each with a full model answer and mark-scheme breakdown",
        "The data-response attack protocol, plus a mark-scheme language bank",
        "A technique checklist and a 'double-pay' map of skills that also earn content marks",
      ],
      whoFor: "Any candidate whose school under-rehearses the skills strand — most of them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the theory and skills calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original exam-style questions weighted to the Forecast's tiers, so practice time lands on the likeliest 2026 marks first — flowering plants, respiration, nutrition and transport carry the heaviest coverage. Every question ships the full answer key.",
      bullets: [
        "Original questions in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics carry the heaviest coverage, plus niche-watchlist items",
        "Five-part answer key on every question, with a mark-scheme breakdown table",
        "Every calculation and data reading independently verified before print",
        "Strictly 2026 syllabus: nothing from the deleted reproduction and genetics strand",
      ],
      whoFor:
        "Students who know the biology but leak marks on mechanism, terminology and phrasing.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format: Paper 5's compulsory MCQs, then Paper 6's structured questions with the Section B choice. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 5 (MCQ) — compulsory questions matched to the decade's question-frequency distribution",
        "Paper 6 (Structured) — Section A's compulsory marks, then the plants-vs-human-body Section B choice",
        "Mark Scheme — breakdown tables, technique notes and common-mistake flags for every question, plus indicative grade bands",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const NA_FOOD_6073: SubjectCopy = {
  syllabusCode: "6073",
  examName: "N(A)-Level Nutrition and Food Science 6073",
  syllabusChecker:
    "This pack covers N(A)-Level Nutrition and Food Science 6073 — the written paper, in its reformed 16 / 40 / 24-mark format.",
  heroHook:
    "Section B has opened with a data-response question in every reformed paper — 12–14 marks of fixed real estate.",
  headlineCalls: [
    {
      title: "Diet & meal planning is the number-one topic — and the likeliest essay.",
      body: "The most era-weighted topic in the paper, appearing in all four reformed years. It is the forecast home of a Section C plan-and-justify-a-meal essay — so prepare a balanced meal for a named life-stage group, dish by dish.",
    },
    {
      title: "Functional properties is the most-tested area of the decade.",
      body: "Gelatinisation, caramelisation, Maillard browning, coagulation and denaturation. It appears every reformed year across both Section B and Section C, so lock a food example to each named reaction.",
    },
    {
      title: "Section B opens with a data-response question.",
      body: "Off a recipe, nutrient table or food label — about 12–14 marks of fixed, structural real estate. Practise reading, comparing and lightly calculating from labels, because those method marks recur every year.",
    },
    {
      title: "Preparation & cooking of food is the most overdue heavy topic.",
      body: "+4.6 marks above its decade average after two lighter reformed papers. A rebound is forecast — revise the reasons for cooking, and the choice and effects for a named commodity.",
    },
    {
      title: "Section C is 24 all-compulsory level-marked marks.",
      body: "The reform abolished the old essay choice. Expect one 6+6 question and one 12-mark essay, marked in L1/L2/L3 bands — so prepare three 12-markers rather than gamble on one.",
    },
    {
      title: "Diet & health problems recurs every reformed year.",
      body: "A signature 'describe the condition, explain one prevention' structured question. Obesity, hypertension, diabetes, coronary heart disease, osteoporosis, anaemia and constipation are the set to drill.",
    },
  ],
  completePack:
    "One model, four products, one revision order — from ranked forecast to targeted practice to a full timed rehearsal, with the skills companion covering the 40-mark Section B and the 24-mark Section C essays. Every claim traces to the same question-level study, and every practice question is original.",
  products: {
    forecast: {
      blurb:
        "Ten years of N(A)-Level Nutrition and Food Science papers, classified question by question and turned into a ranked, confidence-tiered forecast of the 2026 written exam. All sixteen syllabus topics get mark history, evidence, question angles and what changed for 2026 — plus a Section B and Section C forecast.",
      bullets: [
        "Ranked prediction table for all sixteen topics, tiered VERY HIGH / HIGH / MODERATE / WATCH",
        "Topic deep dives: ten-year mark history, evidence, question angles and the overdue index",
        "A Section B data-response forecast and a Section C essay forecast",
        "Syllabus change briefing: the reformed 16/40/24 format plus every item the 2022 reform deprecated",
        "Niche watchlist of rarely-tested, cheap-to-prepare marks most students never spot",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call here has original practice questions there.",
    },
    companion: {
      blurb:
        "Almost half of the paper rewards method, not recall — the 40-mark Section B data-response and the 24-mark Section C essays. This companion forecasts which data-response skills and essay types are likeliest in 2026, drills them with an original worked exhibit, and shows the exact wording the mark scheme rewards.",
      bullets: [
        "The five data-response skill families ranked for 2026 — reading, portion scaling, comparison, modifying and energy-value calculations",
        "A ten-year data-response rotation grid showing which family surfaced each year",
        "An original worked data-response exhibit — a nutrition label with a full model answer and mark-scheme breakdown",
        "The Section C level shapes (L1/L2/L3), the essay rotation and three L3 scaffolds with model openings",
      ],
      whoFor: "Any candidate who knows the content but loses the method and essay marks.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the topic and skills calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original exam-style questions weighted to the Forecast's tiers, so practice time lands on the likeliest 2026 marks first — diet and meal planning, functional properties, and preparation and cooking carry the heaviest coverage. Every question ships the full answer key.",
      bullets: [
        "Original questions in the authentic 2026 style — zero recycled past-paper content",
        "Weighted to the forecast: VERY HIGH topics carry the heaviest coverage, plus niche-watchlist items",
        "Five-part answer key on every question, with a mark-scheme breakdown table",
        "Level-marked model answers for the Section C essay questions",
        "Strictly the reformed 6073 syllabus — nothing the 2022 reform deprecated",
      ],
      whoFor:
        "Students who know the food science but leak marks on justification and essay structure.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the exact 2026 format — Section A's objective marks, Section B's 40-mark data-response block, and Section C's 24 compulsory level-marked marks. Sold as one set of two PDFs, with a download for each.",
      bullets: [
        "Sits and marks exactly like the real paper, with original recipes, tables and food labels",
        "Section C's 6+6 question and 12-mark essay, marked in L1/L2/L3 bands",
        "Mark Scheme — every mark located, level shapes shown, and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const NA_HISTORY_2126: SubjectCopy = {
  syllabusCode: "2126",
  examName: "N(A)-Level History (Elective) 2126",
  syllabusChecker:
    "This pack covers N(A)-Level History (Elective) 2126. The O-Level papers — History (Elective) 2261 and History (Pure) 2174 — are different exams with their own packs.",
  heroHook:
    "Nazi Germany was the decade's workhorse — and has not been the case study since the 2024 reform.",
  headlineCalls: [
    {
      title: "The 2024 revision reset the paper.",
      body: "The period extended to 1991, Section B became two of three 'explain why' essays, and the Stalin / USSR case studies and the Korean War were retired. If your notes still lead with Stalin's purges or Korea, you are revising the old exam.",
    },
    {
      title: "Nazi Germany is the overdue Source-Based Case Study for 2026.",
      body: "The decade's workhorse — live in 2018, 2020, 2021 and 2023 — but not the case study since the reform, because Cold-War origins took 2024 and Outbreak-Europe took 2025. The standout Section A call.",
    },
    {
      title: "Origins of the Cold War in Europe is the strong second source topic.",
      body: "A prescribed topic that anchors the back half of the syllabus. Rehearse a full 30-mark Cold-War-origins source set alongside Nazi Germany.",
    },
    {
      title: "Part (e) is always the assertion — the most predictable question.",
      body: "'How far do these sources support this view?' — 8 marks, demanding all the sources plus your own knowledge. Rehearse the group-then-evaluate shape until it is automatic.",
    },
    {
      title: "Section B never repeats that year's source topic.",
      body: "If the source case study is Nazi Germany, the essays are likely to reach into the Cold-War, outbreak-of-war and end-of-WWII units. Prepare four-plus themes so two comfortable choices are always there.",
    },
    {
      title: "Provenance wins the judgement marks, not content.",
      body: "Who wrote the source, when, why, to whom — and whether the others corroborate it. Content-only answers stall at the middle level.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the SBQ Skills Prediction, the Sure Questions Vault and the Final Rehearsal paper with its Mark Scheme. Every claim traces to a question-level study of every History paper from 2016 to 2025, and every source is original.",
  products: {
    forecast: {
      blurb:
        "The complete topic-by-topic forecast for the 2026 History (Elective) paper, built from a question-level study of every History paper from 2016 to 2025.",
      bullets: [
        "Nine ranked units with confidence tiers and the evidence behind every source-case-study and essay call",
        "The overdue source-case-study map, the deprecated-content briefing (Stalin, Korea) and the exact 2126 format in one place",
        "A revision plan and printable checklist — analysis you can actually act on",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The dedicated forecast for the Source-Based Case Study — the 30-mark Section A that opens the paper, and the provenance skills that win each sub-question.",
      bullets: [
        "The 2026 slot forecast: predicted (a)–(e) question types, each tiered, ending with the always-there part (e)",
        "The provenance engine — who wrote it, when, why, to whom — with original practice sources and a model part-(e) answer",
        "The message, surprise, cross-reference, purpose and usefulness drills, made automatic",
      ],
      whoFor: "Any candidate who describes sources rather than judging them.",
      crossSell:
        "Built on the same ten-year model as the Exam Forecast, so the source and essay calls cross-check each other.",
    },
    vault: {
      blurb:
        "Original questions across every ranked unit, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers, so practice lands on Nazi Germany and the Cold War first.",
      bullets: [
        "Every question is original and written in the 2126 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely units first",
        "The full answer-key standard: full answer, breakdown table, technique and mistake notes",
      ],
      whoFor:
        "Students who know the history but leak marks on structure, provenance and judgement.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its unit — the Forecast's deep dive on that unit is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original 2126 mock in the exact 2026 format: a 30-mark Source-Based Case Study, then two 'explain why' essays chosen from three. Sold as one set of two PDFs, with a download for each.",
      bullets: [
        "Sits and marks exactly like the real paper, with original invented sources clearly framed as practice material",
        "Current-syllabus content throughout — Cold-War origins, Nazi Germany, the decline of the USSR — not the retired Stalin or Korea material",
        "Mark Scheme — point-marked answers with breakdown tables, L1/L2/L3 shapes and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak units back to the Forecast deep dives and the Vault drills.",
    },
  },
};

const NA_POA_7086: SubjectCopy = {
  syllabusCode: "7086",
  examName: "N(A)-Level Principles of Accounts 7086",
  syllabusChecker:
    "Not sure which syllabus your child takes? N(A)-Level Principles of Accounts is 7086 (this pack). Ratios, limited companies, partnerships and incomplete records are not in 7086 — they belong to the O-Level 7087 paper.",
  heroHook:
    "Paper 2 has opened with the 20-mark financial-statements question in every one of the last five papers.",
  headlineCalls: [
    {
      title: "The 20-mark build is Paper 2.",
      body: "Paper 2 has opened with the 20-mark financial-statements question in every one of the last five papers. Learn the Statement of Financial Performance, then the Statement of Financial Position, and you have banked the biggest block of marks in the exam.",
    },
    {
      title: "Trade receivables are overdue.",
      body: "After light 2024–2025 coverage, the overdue index flags trade receivables and the allowance for impairment (+4.1) as a strong bounce-back candidate. The full ledger and adjustment sequence is ready when it lands.",
    },
    {
      title: "Format marks come before any figure.",
      body: "A large slice of every statement question is awarded for layout — the ruled sub-total, the figure in the balance column, the double-underlined total. Drill the N(A) skeleton and those marks are yours before you compute anything.",
    },
    {
      title: "Stop revising what is not on the paper.",
      body: "Ratios, limited companies, partnerships and incomplete records are not in 7086 — the single biggest difference from the O-Level paper. Every hour saved there is an hour on the sole-proprietorship statements that actually score.",
    },
    {
      title: "The own-figure rule pays throughout.",
      body: "A correct method on a wrong earlier figure still scores. Showing your workings line by line is worth real marks in every statement question.",
    },
  ],
  completePack:
    "The data tells you what to revise; the Playbook shows you how to present it; the Vault drills it; the Rehearsal times it. One pack, the whole preparation path from forecast to final paper — all in the current 7086 N(A) format.",
  products: {
    forecast: {
      blurb:
        "The full data picture: every 7086 topic ranked by a decade of papers, weighted to the current era, with tier calls, per-year mark trends and the niche watchlist. Start here — it tells you what to revise first, and what is out of syllabus entirely.",
      bullets: [
        "Every topic ranked with confidence tiers and the evidence behind each call",
        "Per-year mark trends and the overdue index, including trade receivables and impairment",
        "The out-of-syllabus briefing: ratios, companies, partnerships and incomplete records are not on this paper",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "Every statement, ledger and reconciliation the N(A) paper can ask for — ruled, totalled and worked with one consistent set of original figures. The running-balance ledger, the FIFO layers, the two-step bank reconciliation. Copy the layout under pressure and bank the presentation marks.",
      bullets: [
        "The ruled N(A) skeleton for each statement, so the format marks are yours first",
        "Running-balance ledgers, FIFO layers and the two-step bank reconciliation, worked end to end",
        "The own-figure rule, workings discipline, and the presentation habits that stop marks leaking",
      ],
      whoFor:
        "Any candidate who can do the accounting but loses marks on layout, sub-totals and workings.",
      crossSell:
        "Built on the same dataset as the Exam Forecast, so you drill the formats the forecast says are likeliest.",
    },
    vault: {
      blurb:
        "Original questions built on the highest-probability 7086 topics, each with a full point-by-point answer, a mark-scheme breakdown and the common mistake that loses marks. Practise on the ground the data says matters most — sole-proprietorship statements, FIFO, impairment.",
      bullets: [
        "Every question is original and written in the 7086 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely topics first",
        "The full answer-key standard: full answer, breakdown table, technique and mistake notes",
      ],
      whoFor:
        "Students who know the accounting but leak marks on adjustments, ledgers and layout.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "A complete original mock in the current 7086 N(A) style, matched to the forecast so your last rehearsal targets the likeliest ground. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — 40 marks in one hour: theory, double entry, ledgers and short workings",
        "Paper 2 — the 20-mark financial-statements build plus the supporting questions",
        "Mark Scheme — every mark located, own-figure follow-through shown, and the technique note that turns a near-miss into a full mark",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Playbook's formats.",
    },
  },
};

const NA_E_MATH_4045: SubjectCopy = {
  syllabusCode: "4045",
  examName: "N(A)-Level Mathematics (Syllabus A) 4045",
  syllabusChecker:
    "Not sure which syllabus your child takes? N(A)-Level Mathematics is 4045 (this pack). It is narrower than O-Level Elementary Mathematics 4052 — no set notation, matrices, vectors or calculus.",
  heroHook:
    "4045 candidates do not sit calculus, matrices, vectors or set notation. Generic E-Math books make them revise all four.",
  headlineCalls: [
    {
      title: "4045 is narrower than O-Level 4052 — and that is the point.",
      body: "N(A) candidates do not sit set notation and Venn diagrams, matrices, vectors, any calculus (the gradient of a curve is found by drawing a tangent), loci, scatter diagrams, formal surds, or trigonometric identities and graphs. Every page here is aimed at the paper they actually take.",
    },
    {
      title: "Number & Algebra carries about half the paper.",
      body: "Roughly half of the 140 marks. Equation-solving — linear, simultaneous, quadratic, fractional — plus inequalities is the number-one topic and appears on every paper. Bank it first.",
    },
    {
      title: "The Paper 2 real-world closer is an every-year fixture.",
      body: "The final question of Paper 2 Section A blends percentage, rate/speed and reading data from a table or graph, in a personal-finance or travel context.",
    },
    {
      title: "Statistics is the fastest-rising strand.",
      body: "From 11.3 to 17.3 marks a year. A standard-deviation comparison of two data sets and a cumulative-frequency or box-plot reading are forecast, most likely as the Section B statistics option.",
    },
    {
      title: "Trigonometry has surged and now dominates Paper 2 geometry.",
      body: "From 10.1 to 14.7 marks a year. Sine rule, cosine rule, bearings and area = ½ab sin C are the heaviest calls, echoing the 2025 real-world ladder problem.",
    },
    {
      title: "Section B is one Geometry option against one Statistics option.",
      body: "Prepare both sides — circle angles or trigonometry/mensuration, against standard deviation or cumulative frequency plus probability — so the choice is insurance, not a gamble.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the Formula & Method Playbook, the Sure Questions Vault and both Final Rehearsal papers with their Mark Scheme. Every page is scoped to 4045, so no revision minute is spent on topics this paper does not set.",
  products: {
    forecast: {
      blurb:
        "The complete topic-by-topic forecast for the 2026 N(A)-Level Mathematics papers, built from a question-level study of ten years of Paper 1 and Paper 2 against the full 4045 syllabus.",
      bullets: [
        "Ranked topics with confidence tiers and the ten-year evidence behind each call",
        "The exact 2026 format, the AO weightings and a niche watchlist of under-rehearsed angles",
        "The out-of-syllabus briefing: no calculus, matrices, vectors, set notation or loci",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The formulae-and-method companion: what the 4045 formulae page gives you versus what you must memorise, then the standard-method recipe for the question families that decide the paper.",
      bullets: [
        "Two clear lists, so no revision minute is wasted on formulae that are already printed",
        "A numbered method plus a worked example for equation-solving, bearings, mensuration, statistics and more",
        "The marking conventions, calculator discipline and the error taxonomy that stops marks leaking",
      ],
      whoFor:
        "Any candidate who knows the maths but loses method marks on presentation and accuracy.",
      crossSell:
        "Every worked example is recomputed before print — and mapped to the Forecast's tiers.",
    },
    vault: {
      blurb:
        "Original questions across all the top 4045 topics, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers so practice lands on the heaviest ground first.",
      bullets: [
        "Every question is original and written in the 4045 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely topics first",
        "Every number is machine-verified, so the answer key is one you can trust",
      ],
      whoFor: "Students who can do the maths but leak marks on working and accuracy.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "Two complete original 4045 mocks in the exact 2026 format — Paper 1 and Paper 2, with a printed formulae page. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — short-answer questions, sat and marked exactly like the real paper",
        "Paper 2 — the every-year real-world closer, plus the Geometry-versus-Statistics Section B choice",
        "Mark Scheme — every mark located, method-mark conventions shown, and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Playbook's methods.",
    },
  },
};

const NA_A_MATH_4051: SubjectCopy = {
  syllabusCode: "4051",
  examName: "N(A)-Level Additional Mathematics 4051",
  syllabusChecker:
    "Not sure which syllabus your child takes? N(A)-Level Additional Mathematics is 4051 (this pack). It is narrower than O-Level 4049 — no binomial theorem, no exponential or logarithm functions, and calculus of power functions only.",
  heroHook:
    "4051 calculus is power functions only — no trig, exponential or log calculus, and no kinematics.",
  headlineCalls: [
    {
      title: "4051 is narrower than O-Level 4049 — and that is the point.",
      body: "N(A) candidates do not sit the binomial theorem, exponential and logarithm functions, plane-geometry proofs, the linear law, or any calculus of sin/cos/e-functions. Their calculus is power functions only. Every page here is aimed at the paper they actually take.",
    },
    {
      title: "Calculus is the spine of both papers.",
      body: "Roughly 45–55 marks across the two papers. A stationary-points / second-derivative question and an area-under-a-curve integration question on each paper are the heaviest calls (tier VERY HIGH).",
    },
    {
      title: "Prove-an-identity then solve-in-interval is a near-annual fixture.",
      body: "Prove a trig identity, then solve in a given interval. Rehearse it on both papers.",
    },
    {
      title: "The R-formula is the trigonometry workhorse.",
      body: "a cos x + b sin x = R cos(x ± α), forecast for a maximum/minimum and an equation — increasingly inside a real model, such as tides or a rotating wheel.",
    },
    {
      title: "A trigonometric or quadratic model in a real context is forecast.",
      body: "Tide depth, a theme-park wheel, a filling tank — reflecting the 40% AO2 weighting.",
    },
    {
      title: "Polynomials & partial fractions is rising.",
      body: "From 11.4 to 16.6 marks a year. Expect a factor-theorem cubic, an a³ ± b³ 'one real root' item, and partial fractions in one of the three allowed forms.",
    },
    {
      title: "A full circle question is the most reliable Paper 2 geometry item.",
      body: "Find the equation, the centre and radius, and where a line meets it.",
    },
  ],
  completePack:
    "One model, four products, one revision order — the Exam Forecast, the Formula & Method Playbook, the Sure Questions Vault and both Final Rehearsal papers with their Mark Scheme. Every page is scoped to 4051, so no revision minute is spent on topics this paper does not set.",
  products: {
    forecast: {
      blurb:
        "The complete topic-by-topic forecast for the 2026 N(A)-Level Additional Mathematics papers, built from a question-level study of ten years of Paper 1 and Paper 2 against the full 4051 syllabus.",
      bullets: [
        "Ranked topics with confidence tiers and the ten-year evidence behind each call",
        "The exact 2026 format, the AO weightings and a niche watchlist of under-rehearsed angles",
        "The out-of-syllabus briefing: no binomial theorem, no exp/log functions, power-function calculus only",
      ],
      whoFor: "Every 2026 candidate — this is the map the other products navigate by.",
      crossSell:
        "Pairs with the Sure Questions Vault: every VERY HIGH call in here has original practice questions in there.",
    },
    companion: {
      blurb:
        "The formulae-and-method companion: what the 4051 formulae page gives you versus what you must memorise, then the standard-method recipe for the question families that decide the paper.",
      bullets: [
        "Two clear lists, so no revision minute is wasted on formulae that are already printed",
        "A numbered method plus a worked example for the R-formula, stationary points, area, partial fractions, circles and more",
        "The M1/A1 marking conventions, calculator discipline and the error taxonomy that stops marks leaking",
      ],
      whoFor:
        "Any candidate who knows the maths but loses method marks on presentation and accuracy.",
      crossSell:
        "Every worked example is recomputed before print — and mapped to the Forecast's tiers.",
    },
    vault: {
      blurb:
        "Original questions across all the 4051 topics, each with a full worked answer, a mark-scheme-style breakdown and a common-mistake note — weighted to the Forecast's tiers so practice lands on the heaviest ground first.",
      bullets: [
        "Every question is original and written in the 4051 style — never a real past-paper item",
        "Built to the forecast's tiers, so you practise the heaviest, most likely topics first",
        "Every number is machine-verified, so the answer key is one you can trust",
      ],
      whoFor: "Students who can do the maths but leak marks on working and accuracy.",
      crossSell:
        "Miss a question? Every Vault question is tagged to its topic — the Forecast's deep dive on that topic is the fix.",
    },
    rehearsal: {
      blurb:
        "Two complete original 4051 mocks in the exact 2026 format — Paper 1 and Paper 2, with a printed formulae page. Sold as one set of three PDFs, with a download for each.",
      bullets: [
        "Paper 1 — answer-all questions, sat and marked exactly like the real paper",
        "Paper 2 — the full 4051 range, matched to the forecast",
        "Mark Scheme — every mark located, M1/A1 conventions shown, and grade-band guidance",
      ],
      whoFor:
        "Every candidate, ideally twice — once as a diagnostic, once under full timing in the final weeks.",
      crossSell:
        "Score it, then route weak topics back to the Forecast deep dives and the Playbook's methods.",
    },
  },
};

const SUBJECT_COPY: Record<string, SubjectCopy> = {
  "o-level::physics-pure": PHYSICS_PURE_6091,
  "o-level::physics-science": PHYSICS_SCIENCE_5086,
  "o-level::chemistry-pure": CHEMISTRY_PURE_6092,
  "o-level::chemistry-science": CHEMISTRY_SCIENCE_5086,
  "o-level::biology-pure": BIOLOGY_PURE_6093,
  "o-level::biology-science": BIOLOGY_SCIENCE_5088,
  "o-level::geography-pure": GEOGRAPHY_PURE_2279,
  "o-level::geography-elective": GEOGRAPHY_ELECTIVE_2260,
  "o-level::history-pure": HISTORY_PURE_2174,
  "o-level::history-elective": HISTORY_ELECTIVE_2261,
  "o-level::social-studies": SOCIAL_STUDIES_2260,
  "o-level::principles-of-accounts": POA_7087,
  "o-level::e-math": E_MATH_4052,
  "o-level::a-math": A_MATH_4049,

  "na-level::physics": NA_PHYSICS_5105,
  "na-level::chemistry": NA_CHEMISTRY_5105,
  "na-level::biology": NA_BIOLOGY_5106,
  "na-level::food-and-nutrition": NA_FOOD_6073,
  "na-level::history": NA_HISTORY_2126,
  "na-level::principles-of-accounts": NA_POA_7086,
  "na-level::e-math": NA_E_MATH_4045,
  "na-level::a-math": NA_A_MATH_4051,
};

export function subjectCopy(level: Level, slug: string): SubjectCopy | null {
  return SUBJECT_COPY[`${level}::${slug}`] ?? null;
}

/** True when a subject has its real marketing pack loaded (vs placeholders). */
export function hasRealCopy(level: Level, slug: string): boolean {
  return subjectCopy(level, slug) !== null;
}
