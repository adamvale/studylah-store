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

const SUBJECT_COPY: Record<string, SubjectCopy> = {
  "o-level::physics-pure": PHYSICS_PURE_6091,
  "o-level::chemistry-pure": CHEMISTRY_PURE_6092,
  "o-level::chemistry-science": CHEMISTRY_SCIENCE_5086,
  "o-level::biology-pure": BIOLOGY_PURE_6093,
  "o-level::biology-science": BIOLOGY_SCIENCE_5088,
  "o-level::geography-pure": GEOGRAPHY_PURE_2279,
  "o-level::geography-elective": GEOGRAPHY_ELECTIVE_2260,
  "o-level::history-pure": HISTORY_PURE_2174,
  "o-level::history-elective": HISTORY_ELECTIVE_2261,
};

export function subjectCopy(level: Level, slug: string): SubjectCopy | null {
  return SUBJECT_COPY[`${level}::${slug}`] ?? null;
}

/** True when a subject has its real marketing pack loaded (vs placeholders). */
export function hasRealCopy(level: Level, slug: string): boolean {
  return subjectCopy(level, slug) !== null;
}
