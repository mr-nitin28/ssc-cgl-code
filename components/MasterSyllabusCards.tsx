"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpenIcon,
  AwardIcon,
  DownloadIcon,
  XIcon,
  CheckIcon,
  TargetIcon,
  ClockIcon,
  SparklesIcon,
} from "./icons";

interface SyllabusBlueprintRow {
  parameter: string;
  tier1: string;
  tier2: string;
}

interface SyllabusTopic {
  name: string;
  weightage: string;
  share: number;
}

interface MasterSyllabusSubject {
  key: string;
  title: string;
  category: string;
  icon: string;
  gradient: string;
  borderHover: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  description: string;
  tierStats: string;
  timingTarget: string;
  highlightTag: string;
  pdfFileName: string;
  tipsHref: string;
  blueprint: SyllabusBlueprintRow[];
  topics: SyllabusTopic[];
  coreChapters: { name: string; tag: string }[];
}

const masterSyllabusData: MasterSyllabusSubject[] = [
  {
    key: "maths",
    title: "Mathematics",
    category: "Quantitative Aptitude",
    icon: "📐",
    gradient: "from-indigo-500/10 via-indigo-500/5 to-transparent",
    borderHover: "hover:border-indigo-500/60 dark:hover:border-indigo-400/60",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/70",
    badgeText: "text-indigo-700 dark:text-indigo-300",
    badgeBorder: "border-indigo-200/80 dark:border-indigo-800/80",
    description:
      "Core arithmetic, high-weightage geometry, algebra, trigonometry, and advanced data interpretation models.",
    tierStats: "25 Qs Tier-I · 30 Qs Tier-II",
    timingTarget: "15 min (T-I) · 30 min (T-II)",
    highlightTag: "50 + 90 Marks",
    pdfFileName: "SSC_CGL_2026_Mathematics_Master_Syllabus.pdf",
    tipsHref: "/tips/m",
    blueprint: [
      { parameter: "Total Questions", tier1: "25 Questions", tier2: "30 Questions" },
      { parameter: "Maximum Marks", tier1: "50 Marks", tier2: "90 Marks" },
      { parameter: "Section Timer", tier1: "15 Minutes", tier2: "30 Minutes" },
      { parameter: "Marks / Correct", tier1: "+2.0", tier2: "+3.0" },
      { parameter: "Negative Marking", tier1: "−0.50", tier2: "−1.00" },
    ],
    topics: [
      { name: "Geometry & Mensuration 2D/3D", weightage: "21.5%", share: 22 },
      { name: "Trigonometry & Heights", weightage: "10.7%", share: 11 },
      { name: "Data Interpretation (DI)", weightage: "10.2%", share: 10 },
      { name: "Algebra & Polynomials", weightage: "9.5%", share: 10 },
      { name: "Profit, Loss & Discount", weightage: "8.5%", share: 9 },
      { name: "Percentage & Ratios", weightage: "8.0%", share: 8 },
      { name: "Time, Speed & Distance", weightage: "7.0%", share: 7 },
      { name: "Number System & LCM/HCF", weightage: "6.5%", share: 7 },
    ],
    coreChapters: [
      { name: "Percentages & Successive Change", tag: "Arithmetic" },
      { name: "Profit, Loss & Marked Price", tag: "Arithmetic" },
      { name: "Ratio, Proportion & Mixture", tag: "Arithmetic" },
      { name: "Time, Work & Pipes", tag: "Arithmetic" },
      { name: "Speed, Time, Distance & Trains", tag: "Arithmetic" },
      { name: "Lines, Angles & Triangle Theorems", tag: "Advanced" },
      { name: "Circle Theorems & Chords", tag: "Advanced" },
      { name: "Algebraic Identities & Factoring", tag: "Advanced" },
      { name: "Trigonometric Ratios & Angles", tag: "Advanced" },
      { name: "Heights & Distances", tag: "Advanced" },
      { name: "Mensuration 2D & 3D Formulas", tag: "Advanced" },
      { name: "Bar, Pie & Tabular DI", tag: "Data Analysis" },
    ],
  },
  {
    key: "reasoning",
    title: "Reasoning",
    category: "General Intelligence",
    icon: "🧩",
    gradient: "from-teal-500/10 via-teal-500/5 to-transparent",
    borderHover: "hover:border-teal-500/60 dark:hover:border-teal-400/60",
    badgeBg: "bg-teal-50 dark:bg-teal-950/70",
    badgeText: "text-teal-700 dark:text-teal-300",
    badgeBorder: "border-teal-200/80 dark:border-teal-800/80",
    description:
      "Visual problem-solving, pattern spotting, syllogisms, analogies, coding systems, and analytical puzzles.",
    tierStats: "25 Qs Tier-I · 30 Qs Tier-II",
    timingTarget: "12–15 min (T-I) · 30 min (T-II)",
    highlightTag: "50 + 90 Marks",
    pdfFileName: "SSC_CGL_2026_Reasoning_Master_Syllabus.pdf",
    tipsHref: "/tips/r",
    blueprint: [
      { parameter: "Total Questions", tier1: "25 Questions", tier2: "30 Questions" },
      { parameter: "Maximum Marks", tier1: "50 Marks", tier2: "90 Marks" },
      { parameter: "Section Timer", tier1: "15 Minutes", tier2: "30 Minutes" },
      { parameter: "Marks / Correct", tier1: "+2.0", tier2: "+3.0" },
      { parameter: "Negative Marking", tier1: "−0.50", tier2: "−1.00" },
    ],
    topics: [
      { name: "Analogies & Similarities", weightage: "16.0%", share: 16 },
      { name: "Coding-Decoding & Operations", weightage: "14.5%", share: 15 },
      { name: "Series (Number, Letter & Figural)", weightage: "14.0%", share: 14 },
      { name: "Non-Verbal (Paper Cut, Mirror, Embedded)", weightage: "13.0%", share: 13 },
      { name: "Syllogisms & Venn Diagrams", weightage: "10.0%", share: 10 },
      { name: "Blood Relations & Coded Trees", weightage: "8.5%", share: 9 },
      { name: "Direction, Order & Ranking", weightage: "8.0%", share: 8 },
      { name: "Critical & Statement Assumptions", weightage: "7.0%", share: 7 },
    ],
    coreChapters: [
      { name: "Semantic & Number Analogies", tag: "Verbal" },
      { name: "Letter & Shift Coding-Decoding", tag: "Verbal" },
      { name: "Missing Number & Alpha Series", tag: "Verbal" },
      { name: "Syllogisms (Venn & 100-50 Rule)", tag: "Verbal" },
      { name: "Coded Blood Relations", tag: "Verbal" },
      { name: "Direction Sense & Cardinal Compass", tag: "Verbal" },
      { name: "Mathematical Operation Balancing", tag: "Verbal" },
      { name: "Paper Folding & Punched Holes", tag: "Non-Verbal" },
      { name: "Mirror & Water Inversions", tag: "Non-Verbal" },
      { name: "Embedded Figures & Pattern Completion", tag: "Non-Verbal" },
      { name: "Dices, Cubes & Net Folding", tag: "Non-Verbal" },
      { name: "Statement & Inferences (Tier-II)", tag: "Critical" },
    ],
  },
  {
    key: "english",
    title: "English",
    category: "Language & Comprehension",
    icon: "📖",
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    borderHover: "hover:border-amber-500/60 dark:hover:border-amber-400/60",
    badgeBg: "bg-amber-50 dark:bg-amber-950/70",
    badgeText: "text-amber-700 dark:text-amber-300",
    badgeBorder: "border-amber-200/80 dark:border-amber-800/80",
    description:
      "Precision grammar engines, high-yield vocabulary, cloze test techniques, reading comprehension, and active voice.",
    tierStats: "25 Qs Tier-I · 45 Qs Tier-II",
    timingTarget: "10–12 min (T-I) · 45 min (T-II)",
    highlightTag: "50 + 135 Marks",
    pdfFileName: "SSC_CGL_2026_English_Master_Syllabus.pdf",
    tipsHref: "/tips/e",
    blueprint: [
      { parameter: "Total Questions", tier1: "25 Questions", tier2: "45 Questions" },
      { parameter: "Maximum Marks", tier1: "50 Marks", tier2: "135 Marks" },
      { parameter: "Section Timer", tier1: "15 Minutes", tier2: "45 Minutes" },
      { parameter: "Marks / Correct", tier1: "+2.0", tier2: "+3.0" },
      { parameter: "Negative Marking", tier1: "−0.50", tier2: "−1.00" },
    ],
    topics: [
      { name: "Reading Comprehension & Passages", weightage: "22.0%", share: 22 },
      { name: "Cloze Test & Fillers", weightage: "18.0%", share: 18 },
      { name: "Spotting Errors & Sentence Correction", weightage: "16.0%", share: 16 },
      { name: "Synonyms, Antonyms & One-Word Subs", weightage: "16.0%", share: 16 },
      { name: "Idioms & Phrasal Verbs", weightage: "10.0%", share: 10 },
      { name: "Active / Passive Voice Shifts", weightage: "8.0%", share: 8 },
      { name: "Direct / Indirect Speech (Narration)", weightage: "6.0%", share: 6 },
      { name: "Para Jumbles & Sentence Ordering", weightage: "4.0%", share: 4 },
    ],
    coreChapters: [
      { name: "Subject-Verb Agreement Rules", tag: "Grammar" },
      { name: "Tenses & Conditional Clauses", tag: "Grammar" },
      { name: "Prepositions & Fixed Phrasal Collocations", tag: "Grammar" },
      { name: "Active & Passive Voice Transformation", tag: "Grammar" },
      { name: "Direct & Indirect Speech Narration", tag: "Grammar" },
      { name: "High-Frequency Root Words & Prefixes", tag: "Vocabulary" },
      { name: "Previous 10 Years One-Word Substitutions", tag: "Vocabulary" },
      { name: "Standard Exam Idioms & Expressions", tag: "Vocabulary" },
      { name: "Cloze Test Context & Conjunction Triggers", tag: "Comprehension" },
      { name: "Skimming, Scanning & Central Theme Passages", tag: "Comprehension" },
      { name: "Mandatory Pronoun Pair Para Jumbles", tag: "Comprehension" },
      { name: "Spelling Errors & Homophones", tag: "Vocabulary" },
    ],
  },
  {
    key: "gk",
    title: "General Awareness",
    category: "GK & Current Affairs",
    icon: "🌍",
    gradient: "from-sky-500/10 via-sky-500/5 to-transparent",
    borderHover: "hover:border-sky-500/60 dark:hover:border-sky-400/60",
    badgeBg: "bg-sky-50 dark:bg-sky-950/70",
    badgeText: "text-sky-700 dark:text-sky-300",
    badgeBorder: "border-sky-200/80 dark:border-sky-800/80",
    description:
      "Indian Polity & Constitution, Modern History, Physical Geography, General Science, Static Culture, and Current Affairs.",
    tierStats: "25 Qs Tier-I · 25 Qs Tier-II",
    timingTarget: "8–10 min (T-I) · 25 min (T-II)",
    highlightTag: "50 + 75 Marks",
    pdfFileName: "SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf",
    tipsHref: "/tips/k",
    blueprint: [
      { parameter: "Total Questions", tier1: "25 Questions", tier2: "25 Questions" },
      { parameter: "Maximum Marks", tier1: "50 Marks", tier2: "75 Marks" },
      { parameter: "Section Timer", tier1: "15 Minutes", tier2: "25 Minutes" },
      { parameter: "Marks / Correct", tier1: "+2.0", tier2: "+3.0" },
      { parameter: "Negative Marking", tier1: "−0.50", tier2: "−1.00" },
    ],
    topics: [
      { name: "Indian Polity & Constitutional Articles", weightage: "18.0%", share: 18 },
      { name: "Modern History & Freedom Struggle", weightage: "16.0%", share: 16 },
      { name: "12-Month Rolling Current Affairs", weightage: "15.0%", share: 15 },
      { name: "Static GK (Art, Culture, Festivals, Dances)", weightage: "14.0%", share: 14 },
      { name: "General Science (Biology, Chem, Physics)", weightage: "14.0%", share: 14 },
      { name: "Indian & World Geography", weightage: "11.0%", share: 11 },
      { name: "Economy, Budget & 5-Year Plans", weightage: "8.0%", share: 8 },
      { name: "Government Schemes & Summits", weightage: "4.0%", share: 4 },
    ],
    coreChapters: [
      { name: "Preamble, Fundamental Rights & Duties", tag: "Polity" },
      { name: "President, Parliament & Supreme Court", tag: "Polity" },
      { name: "Key Constitutional Amendments & Schedules", tag: "Polity" },
      { name: "Revolt of 1857 & Gandhian Movements", tag: "History" },
      { name: "Governor-Generals, Viceroys & Treaties", tag: "History" },
      { name: "Rivers, Tributaries, Dams & Mountain Passes", tag: "Geography" },
      { name: "Classical Dances, Folk Forms & Musical Instruments", tag: "Static GK" },
      { name: "UNESCO World Heritage Sites & National Parks", tag: "Static GK" },
      { name: "Human Anatomy, Diseases, Vitamins & Nutrition", tag: "Science" },
      { name: "Chemical Compounds, Everyday Physics & Optics", tag: "Science" },
      { name: "National Income, Inflation & RBI Monetary Tools", tag: "Economy" },
      { name: "Summits, Defense Exercises & Sports Awards", tag: "Current Affairs" },
    ],
  },
];

export function MasterSyllabusCards() {
  const [selectedSubject, setSelectedSubject] = useState<MasterSyllabusSubject | null>(null);
  const [modalTab, setModalTab] = useState<"blueprint" | "topics" | "chapters">("blueprint");

  return (
    <section id="syllabus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
            <BookOpenIcon size={14} /> Official Examination Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Master Syllabus Blueprints
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Standardized Tier-I and Tier-II subject blueprints with quick syllabus inspection, top-ranker heuristics, and official downloadable PDFs.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SSC CGL 2026 Tier-I & Tier-II Aligned</span>
        </div>
      </div>

      {/* 4 Professional Master Syllabus Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {masterSyllabusData.map((sub) => (
          <div
            key={sub.key}
            className={`group rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 shadow-xs flex flex-col justify-between space-y-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-950/60 ${sub.borderHover} relative overflow-hidden`}
          >
            {/* Ambient Corner Linear Highlight */}
            <div
              className={`absolute -top-12 -right-12 w-28 h-28 rounded-full bg-linear-to-br ${sub.gradient} blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-300`}
            />

            {/* Top Header & Badges */}
            <div className="space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-xs">
                  {sub.icon}
                </span>
                <span
                  className={`text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-full border tracking-wide uppercase ${sub.badgeBg} ${sub.badgeText} ${sub.badgeBorder}`}
                >
                  {sub.highlightTag}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  {sub.category}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {sub.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal line-clamp-3">
                  {sub.description}
                </p>
              </div>

              {/* Subject Metadata Pills */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <TargetIcon size={13} className="text-indigo-500 shrink-0" />
                  <span className="font-mono">{sub.tierStats}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ClockIcon size={13} className="text-teal-500 shrink-0" />
                  <span className="font-mono">{sub.timingTarget}</span>
                </div>
              </div>
            </div>

            {/* Three Dedicated Professional Action Buttons */}
            <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 relative">
              {/* Button 1: Syllabus Modal Quick View / Dedicated Section for GK */}
              {sub.key === "gk" ? (
                <a
                  href="#ga-modules"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white shadow-xs shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-150"
                >
                  <BookOpenIcon size={14} />
                  <span>Choose Syllabus Module</span>
                </a>
              ) : (
                <button
                  onClick={() => {
                    setSelectedSubject(sub);
                    setModalTab("blueprint");
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white shadow-xs shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-150 cursor-pointer"
                >
                  <BookOpenIcon size={14} />
                  <span>View Syllabus</span>
                </button>
              )}

              {/* Buttons 2 & 3: Tips & Download in 2-column layout */}
              <div className="grid grid-cols-2 gap-2">
                {/* Button 2: Tips Link */}
                <Link
                  href={sub.tipsHref}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-semibold hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150"
                  title={`${sub.title} Topper Playbook & Heuristics`}
                >
                  <AwardIcon size={13} className="text-amber-500 shrink-0" />
                  <span>Tips</span>
                </Link>

                {/* Button 3: Official PDF Download */}
                <a
                  href={`/pdfs/${sub.pdfFileName}`}
                  download={sub.pdfFileName}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-semibold hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150"
                  title={`Download Official ${sub.title} Master Syllabus PDF`}
                >
                  <DownloadIcon size={13} className="text-teal-500 shrink-0" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Quick-View Syllabus Modal */}
      {selectedSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Top Header */}
            <div className="p-6 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs">
                  {selectedSubject.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {selectedSubject.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full ${selectedSubject.badgeBg} ${selectedSubject.badgeText}`}
                    >
                      {selectedSubject.highlightTag}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {selectedSubject.title} Master Syllabus
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedSubject(null)}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close modal"
              >
                <XIcon size={16} />
              </button>
            </div>

            {/* Modal Internal Navigation Tabs */}
            <div className="px-6 pt-4 pb-2 border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setModalTab("blueprint")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  modalTab === "blueprint"
                    ? "bg-indigo-600 text-white shadow-xs font-bold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700"
                }`}
              >
                📋 Exam Scheme (T-I vs T-II)
              </button>
              <button
                onClick={() => setModalTab("topics")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  modalTab === "topics"
                    ? "bg-indigo-600 text-white shadow-xs font-bold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700"
                }`}
              >
                📊 High-Yield Shift Weightages
              </button>
              <button
                onClick={() => setModalTab("chapters")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  modalTab === "chapters"
                    ? "bg-indigo-600 text-white shadow-xs font-bold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700"
                }`}
              >
                ✅ Essential Chapters Checklist
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
              {/* TAB 1: Blueprint */}
              {modalTab === "blueprint" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal flex items-start gap-2">
                    <SparklesIcon size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span>
                      <b>Integrated Architecture:</b> Prepare Tier-I and Tier-II together from day one. In Tier-I, speed is vital; Tier-II adds depth and carries high selection weightage.
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                        <tr>
                          <th className="py-3 px-4">Parameter</th>
                          <th className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">Tier-I</th>
                          <th className="py-3 px-4 font-bold text-teal-600 dark:text-teal-400">Tier-II</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                        {selectedSubject.blueprint.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                            <td className="py-2.5 px-4 font-medium text-slate-800 dark:text-slate-100">
                              {row.parameter}
                            </td>
                            <td className="py-2.5 px-4 font-semibold font-mono">{row.tier1}</td>
                            <td className="py-2.5 px-4 font-semibold font-mono">{row.tier2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 2: Topics & Weightage */}
              {modalTab === "topics" && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Shift distribution extracted from verified previous SSC CGL question cycles:
                  </p>
                  <div className="space-y-3">
                    {selectedSubject.topics.map((topic, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {idx + 1}. {topic.name}
                          </span>
                          <span className="font-bold font-mono text-indigo-600 dark:text-indigo-400">
                            {topic.weightage}
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-linear-to-r from-indigo-500 to-indigo-600 transition-all duration-300"
                            style={{ width: `${Math.min(100, topic.share * 4.5)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Essential Chapters */}
              {modalTab === "chapters" && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    High-yield chapter syllabus checklist for {selectedSubject.title}:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedSubject.coreChapters.map((chap, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-xs"
                      >
                        <span className="w-4 h-4 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <CheckIcon size={11} />
                        </span>
                        <span className="flex-1 font-medium text-slate-800 dark:text-slate-200">
                          {chap.name}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                          {chap.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`/pdfs/${selectedSubject.pdfFileName}`}
                  download={selectedSubject.pdfFileName}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs transition-colors"
                >
                  <DownloadIcon size={14} /> Download PDF
                </a>
                <Link
                  href={selectedSubject.tipsHref}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <AwardIcon size={14} className="text-amber-500" /> Ranker Tips
                </Link>
              </div>

              <button
                onClick={() => setSelectedSubject(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

