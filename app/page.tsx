"use client";

import { useState } from "react";
import Link from "next/link";
import mocksSummaryData from "@/data/mocks_summary.json";
import { MockSummary } from "@/lib/types";
import { MockCard } from "@/components/MockCard";
import {
  TargetIcon,
  BookOpenIcon,
  AwardIcon,
  ZapIcon,
  BarChartIcon,
  DownloadIcon,
  ChevronRightIcon,
} from "@/components/icons";

export default function HomePage() {
  const [levelFilter, setLevelFilter] = useState<string>("All");

  const filteredMocks = mocksSummaryData.filter((m) => {
    if (levelFilter === "All") return true;
    return m.level === levelFilter;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-linear-to-b from-white via-indigo-50/25 to-slate-50 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[360px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50/90 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/90 dark:border-indigo-800/80 tracking-wide uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
            CGL 2026 PATTERN · TIER-I & TIER-II SUITE
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-[1.14]">
            Master the SSC CGL Exam with Precision Practice & Analytics
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Exam-identical 100-question timed mocks with instant checks, 24-week strategic syllabuses, 36 speed-math mental triggers, and top-ranker heuristics designed for speed and accuracy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Link
              href="/mock/1"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-200"
            >
              Start Free Mock 01
              <ChevronRightIcon size={18} />
            </Link>
            <Link
              href="/syllabus/maths"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-xs"
            >
              <BookOpenIcon size={18} />
              Explore 24-Week Blueprints
            </Link>
            <Link
              href="/pattern-lab"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-xs"
            >
              <ZapIcon size={18} className="text-amber-500" />
              Pattern Lab
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 mt-8 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono tabular-nums">
                900 Q
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                9 Full Mocks (100 Q each)
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400 font-mono tabular-nums">
                96
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                Master Chapters Tracked
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-500 font-mono tabular-nums">
                36
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                Speed Math Patterns
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400 font-mono tabular-nums">
                4 PDFs
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                Downloadable Syllabuses
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Tests Directory Section */}
      <section id="mocks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
              <TargetIcon size={14} /> Full Examination Papers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              SSC CGL Tier-I Mock Test Series
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">
              Authentic computer-based test simulator with 4 timed sections, instant practice checks, full question palette, and granular scorecards.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl text-xs font-semibold self-start md:self-auto border border-slate-200/60 dark:border-slate-700/60">
            {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => {
              const isAct = lvl === levelFilter;
              return (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all duration-150 ${
                    isAct
                      ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-300 shadow-xs font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mock Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMocks.map((mock) => (
            <MockCard key={mock.id} mock={mock as unknown as MockSummary} />
          ))}

          {/* Mocks 10-12 Upcoming Release Teaser Card */}
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-6 flex flex-col justify-between items-center text-center space-y-4">
            <div className="space-y-2 mt-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mx-auto">
                <TargetIcon size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Mocks 10 – 12 Coming Soon
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed font-normal">
                Ultra-advanced level papers targeting high-difficulty Tier-I shifts with extended DI and critical reasoning.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
              ⚡ Practice Mocks 01–09 across all tiers
            </span>
          </div>
        </div>
      </section>

      {/* Master Syllabus Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
            <BookOpenIcon size={14} /> Comprehensive Curriculum
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            24-Week Master Syllabuses
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">
            Detailed learning orders, shift weightage analyses, interactive chapter trackers, and official printable PDF downloads for each subject.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Maths Card */}
          <div className="hover-lift rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-indigo-400/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600">
                  📐
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                  25Q Tier-I · 30Q Tier-II
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Mathematics Master Syllabus
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed font-normal">
                  Topic priorities, learning order, chapter tracker, 24-week plan, and 100 min/day budget.
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <Link
                href="/syllabus/maths"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white shadow-xs transition-all duration-150"
              >
                Open Syllabus →
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="/pdfs/SSC_CGL_2026_Mathematics_Master_Syllabus.pdf"
                  download="SSC_CGL_2026_Mathematics_Master_Syllabus.pdf"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <DownloadIcon size={12} /> PDF
                </a>
                <Link
                  href="/tips/m"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <AwardIcon size={12} className="text-amber-500" /> Tips
                </Link>
              </div>
            </div>
          </div>

          {/* Reasoning Card */}
          <div className="hover-lift rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-teal-400/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2.5 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600">
                  🧩
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
                  25Q Tier-I · 30Q Tier-II
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Reasoning Master Syllabus
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed font-normal">
                  Priority map, visual-solving method, 24-week roadmap, family tracker, and 40 min/day target.
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <Link
                href="/syllabus/reasoning"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-teal-600 hover:bg-teal-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white shadow-xs transition-all duration-150"
              >
                Open Syllabus →
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="/pdfs/SSC_CGL_2026_Reasoning_Master_Syllabus.pdf"
                  download="SSC_CGL_2026_Reasoning_Master_Syllabus.pdf"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <DownloadIcon size={12} /> PDF
                </a>
                <Link
                  href="/tips/r"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <AwardIcon size={12} className="text-amber-500" /> Tips
                </Link>
              </div>
            </div>
          </div>

          {/* English Card */}
          <div className="hover-lift rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-amber-400/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600">
                  📖
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
                  25Q Tier-I · 45Q Tier-II
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  English Master Syllabus
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed font-normal">
                  Grammar engine, vocabulary system, reading strategy, cloze mastery, and 45 min/day plan.
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <Link
                href="/syllabus/english"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white shadow-xs transition-all duration-150"
              >
                Open Syllabus →
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="/pdfs/SSC_CGL_2026_English_Master_Syllabus.pdf"
                  download="SSC_CGL_2026_English_Master_Syllabus.pdf"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <DownloadIcon size={12} /> PDF
                </a>
                <Link
                  href="/tips/e"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <AwardIcon size={12} className="text-amber-500" /> Tips
                </Link>
              </div>
            </div>
          </div>

          {/* GK Card */}
          <div className="hover-lift rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-sky-400/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2.5 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600">
                  🌍
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60">
                  25Q Tier-I · 25Q Tier-II
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  GK + Current Affairs
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed font-normal">
                  Static subjects, rolling current-affairs system, 24-week roadmap, and 45 min/day routine.
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <Link
                href="/syllabus/gk"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white shadow-xs transition-all duration-150"
              >
                Open Syllabus →
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="/pdfs/SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
                  download="SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <DownloadIcon size={12} /> PDF
                </a>
                <Link
                  href="/tips/k"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <AwardIcon size={12} className="text-amber-500" /> Tips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Math Pattern Lab Feature Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hover-lift rounded-3xl border border-amber-200/90 dark:border-amber-900/60 bg-linear-to-r from-amber-50/80 via-white to-amber-50/50 dark:from-slate-900 dark:via-amber-950/20 dark:to-slate-900 p-8 sm:p-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-300">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/90 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80 uppercase tracking-wider">
              <ZapIcon size={14} /> Flash Heuristics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              36 Speed Math & Reasoning Patterns
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Trained candidates don&apos;t write long algebraic proofs in Tier-I. Learn the exact triggers for successive percentages, ladder fractions, tangent-secant powers, and circular arrangements.
            </p>
          </div>
          <Link
            href="/pattern-lab"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 shrink-0"
          >
            Explore Pattern Lab
            <ChevronRightIcon size={18} />
          </Link>
        </div>
      </section>

      {/* Empirical Strategy Tools Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hover-lift rounded-3xl border border-indigo-200/90 dark:border-indigo-900/60 bg-linear-to-r from-indigo-50/80 via-white to-indigo-50/50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 p-8 sm:p-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-300">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100/90 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 uppercase tracking-wider">
              <BarChartIcon size={14} /> Empirical Optimization
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              80/20 Coverage Curve & Time-Budget Planner
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Use data-backed cumulative distribution curves to isolate high-yield chapters, and calculate your personalized daily time budget to maximize your target score.
            </p>
          </div>
          <Link
            href="/tools"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 shrink-0"
          >
            Open Strategy Tools
            <ChevronRightIcon size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
