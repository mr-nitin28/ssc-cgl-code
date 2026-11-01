"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  week1MathProgramme,
  DayModule,
} from "@/data/week1_programme";
import {
  ClockIcon,
  AwardIcon,
  ZapIcon,
  RotateCcwIcon,
  ExternalLinkIcon,
  TargetIcon,
  SparklesIcon,
  ChevronRightIcon,
} from "./icons";

interface WeekCurriculumModuleProps {
  currentSubjectKey?: string;
}

const dayTabIds = ["day-1", "day-2", "day-3", "day-4", "day-5"] as const;
type DayTabId = typeof dayTabIds[number];
type TabKey =
  | "sequence"
  | DayTabId
  | "assessment"
  | "formulas"
  | "tracker"
  | "next-week";

export function WeekCurriculumModule({
  currentSubjectKey = "maths",
}: WeekCurriculumModuleProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("sequence");
  const [masteredCompetencies, setMasteredCompetencies] = useState<string[]>([]);

  // Local storage synchronization for 20-item Mastery Tracker
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ssc_math_week1_mastery");
      const id = requestAnimationFrame(() => {
        if (saved) {
          setMasteredCompetencies(JSON.parse(saved));
        }
      });
      return () => cancelAnimationFrame(id);
    } catch {
      // Ignore in restricted environments
    }
  }, []);

  const toggleCompetency = (id: string) => {
    const updated = masteredCompetencies.includes(id)
      ? masteredCompetencies.filter((item) => item !== id)
      : [...masteredCompetencies, id];

    setMasteredCompetencies(updated);
    try {
      localStorage.setItem("ssc_math_week1_mastery", JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const resetCompetencies = () => {
    if (window.confirm("Reset all Week 1 Mathematics mastery progress?")) {
      setMasteredCompetencies([]);
      try {
        localStorage.removeItem("ssc_math_week1_mastery");
      } catch {
        // Ignore
      }
    }
  };

  const totalTrackerCount = week1MathProgramme.masteryTracker.length;
  const masteredCount = masteredCompetencies.length;
  const trackerPercentage =
    totalTrackerCount > 0 ? Math.round((masteredCount / totalTrackerCount) * 100) : 0;

  // Active day lookup helper
  const getDayModuleByIndex = (dayIndex: number): DayModule => {
    return week1MathProgramme.days[dayIndex];
  };

  const tabs: { key: TabKey; label: string; badge?: string; icon: string }[] = [
    { key: "sequence", label: "Dependency Sequence", icon: "🎯" },
    { key: "day-1", label: "Day 1 (M0: Foundation)", icon: "1️⃣" },
    { key: "day-2", label: "Day 2 (M1: Number System)", icon: "2️⃣" },
    { key: "day-3", label: "Day 3 (M2: Fractions)", icon: "3️⃣" },
    { key: "day-4", label: "Day 4 (M3: Ratio & Prop)", icon: "4️⃣" },
    { key: "day-5", label: "Day 5 (M4: Percentage)", icon: "5️⃣" },
    { key: "assessment", label: "100-Question Assessment", icon: "📝" },
    { key: "formulas", label: "Formula Book & Recall", icon: "📖" },
    {
      key: "tracker",
      label: "Mastery Tracker",
      badge: `${masteredCount}/${totalTrackerCount}`,
      icon: "🏆",
    },
    { key: "next-week", label: "Week 2 Roadmap", icon: "🚀" },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Header Card with 5 Highlight Metrics */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-200/90 dark:border-indigo-900/60 bg-linear-to-br from-indigo-50/90 via-white to-violet-50/70 dark:from-slate-900/95 dark:via-indigo-950/20 dark:to-slate-900/95 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-indigo-600 text-white shadow-xs">
                <SparklesIcon size={13} />
                {week1MathProgramme.category.toUpperCase()}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800">
                {week1MathProgramme.level}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800">
                Tier-I & Tier-II Ready
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {week1MathProgramme.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {week1MathProgramme.mainObjective}
              </p>
              <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 text-xs font-medium border border-amber-200/70 dark:border-amber-800/60">
                <span className="font-bold">⚠️ Note:</span> {week1MathProgramme.note}
              </div>
            </div>
          </div>

          {/* Quick link button to dedicated page */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
            <Link
              href={`/syllabus/${currentSubjectKey}/week-1`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
            >
              <span>Dedicated Study View</span>
              <ExternalLinkIcon size={14} />
            </Link>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Interactive 5-Day Curriculum
            </div>
          </div>
        </div>

        {/* 5 Distinct Mathematical Study Metrics */}
        <div className="mt-6 pt-6 border-t border-indigo-100/90 dark:border-indigo-900/40 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-indigo-100 dark:border-slate-800 shadow-2xs">
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Weekly Study
            </div>
            <div className="mt-1 text-2xl font-black font-mono text-indigo-600 dark:text-indigo-400">
              {week1MathProgramme.metrics.totalWeeklyHours} hrs
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">450 min total</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-indigo-100 dark:border-slate-800 shadow-2xs">
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Study Days
            </div>
            <div className="mt-1 text-2xl font-black font-mono text-violet-600 dark:text-violet-400">
              {week1MathProgramme.metrics.studyDays} Days
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Mon to Fri cadence</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-indigo-100 dark:border-slate-800 shadow-2xs">
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Daily Time
            </div>
            <div className="mt-1 text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">
              {week1MathProgramme.metrics.dailyMinutes} min
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">1.5 hr pure focus</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-indigo-100 dark:border-slate-800 shadow-2xs">
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Questions / Day
            </div>
            <div className="mt-1 text-2xl font-black font-mono text-amber-600 dark:text-amber-400">
              {week1MathProgramme.metrics.questionsPerDay} Qs
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">8 Easy / 8 Med / 4 Hard</div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-indigo-100 dark:border-slate-800 shadow-2xs">
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Total Questions
            </div>
            <div className="mt-1 text-2xl font-black font-mono text-rose-600 dark:text-rose-400">
              {week1MathProgramme.metrics.totalUniqueQuestions} Qs
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">100% unique practice</div>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs (Horizontally scrollable with smooth pill styling) */}
      <div className="overflow-x-auto pb-1 no-scrollbar">
        <div className="flex items-center gap-1.5 min-w-max p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200/90 dark:border-slate-700"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isActive
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                        : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Tab Content Panels */}

      {/* TAB 1: CONCEPT DEPENDENCY SEQUENCE */}
      {activeTab === "sequence" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Concept Dependency Architecture
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  1. What you will complete this week
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                5-Day Linear Ladder
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              We follow a strict concept dependency sequence. Each day&apos;s learning directly prepares you for the next day&apos;s topics, ensuring zero cognitive friction when transitioning to arithmetic and advanced math.
            </p>

            {/* 5 Days Roadmap Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {week1MathProgramme.dependencySequence.daySummary.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850/60 space-y-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black font-mono px-2 py-0.5 rounded-md bg-indigo-600 text-white">
                      {item.day}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">90 min</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                    {item.description}
                  </p>
                  <button
                    onClick={() => setActiveTab(`day-${idx + 1}` as TabKey)}
                    className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Day {idx + 1}</span>
                    <ChevronRightIcon size={12} />
                  </button>
                </div>
              ))}
            </div>

            {/* Why This Order Section */}
            <div className="rounded-2xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/30 p-5 space-y-3">
              <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                <TargetIcon size={16} />
                Why this order? (Pedagogical Rationale)
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                {week1MathProgramme.dependencySequence.rationale.map((rat, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0">✓</span>
                    <span>{rat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TABS 2 to 6: DAY 1 to DAY 5 MODULES */}
      {dayTabIds.includes(activeTab as DayTabId) && (
        (() => {
          const dayIndex = dayTabIds.indexOf(activeTab as DayTabId);
          const dayData = getDayModuleByIndex(dayIndex);
          if (!dayData) return null;

          return (
            <div className="space-y-6">
              {/* Day Header Banner */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-indigo-600 text-white">
                        {dayData.moduleCode}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {dayData.dayName}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                        <ClockIcon size={13} /> {dayData.timeMinutes} minutes
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {dayData.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {dayIndex > 0 && (
                      <button
                        onClick={() => setActiveTab(`day-${dayIndex}` as TabKey)}
                        className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                      >
                        ← Day {dayIndex}
                      </button>
                    )}
                    {dayIndex < 4 && (
                      <button
                        onClick={() => setActiveTab(`day-${dayIndex + 2}` as TabKey)}
                        className="px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/60 text-xs font-semibold text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/70 cursor-pointer"
                      >
                        Day {dayIndex + 2} →
                      </button>
                    )}
                  </div>
                </div>

                {/* Learning Objective & Target */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                      🎯 Learning Objective
                    </div>
                    <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {dayData.learningObjective}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      ✅ Completion Target
                    </div>
                    <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {dayData.completionTarget}
                    </p>
                  </div>
                </div>
              </div>

              {/* Day Topics */}
              <div className="space-y-6">
                {dayData.topics.map((topic, tIdx) => (
                  <div
                    key={tIdx}
                    className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-xs space-y-4"
                  >
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold font-mono">
                        {tIdx + 1}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {topic.title}
                      </h4>
                    </div>

                    {topic.description && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {topic.description}
                      </p>
                    )}

                    {/* Table if present */}
                    {topic.table && (
                      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 font-bold uppercase tracking-wider text-[11px]">
                            <tr>
                              {topic.table.headers.map((hdr, hIdx) => (
                                <th key={hIdx} className="px-4 py-2.5">
                                  {hdr}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                            {topic.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className={
                                  rIdx % 2 === 0
                                    ? "bg-white dark:bg-slate-900"
                                    : "bg-slate-50/50 dark:bg-slate-850/40"
                                }
                              >
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-2.5 font-mono">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Formulas if present */}
                    {topic.formulas && topic.formulas.length > 0 && (
                      <div className="space-y-1.5 p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
                        <div className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                          Key Mathematical Formulations
                        </div>
                        <div className="space-y-1 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                          {topic.formulas.map((form, fIdx) => (
                            <div key={fIdx} className="p-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-indigo-100/60 dark:border-indigo-900/30">
                              {form}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Properties if present */}
                    {topic.properties && topic.properties.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {topic.properties.map((prop, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850/60 space-y-1"
                          >
                            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                              {prop.name}
                            </div>
                            <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                              {prop.formula}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Rules if present */}
                    {topic.rules && topic.rules.length > 0 && (
                      <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800">
                        <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                          Essential Rules & Steps
                        </div>
                        <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                          {topic.rules.map((rule, ruIdx) => (
                            <li key={ruIdx} className="flex items-start gap-2">
                              <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0">▪</span>
                              <span className="font-mono">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Worked Examples */}
                    {topic.workedExamples && topic.workedExamples.length > 0 && (
                      <div className="space-y-2.5 pt-2">
                        <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                          Worked SSC CGL Examples
                        </div>
                        <div className="grid grid-cols-1 gap-2.5">
                          {topic.workedExamples.map((ex, exIdx) => (
                            <div
                              key={exIdx}
                              className="p-3.5 rounded-2xl border border-indigo-100 dark:border-indigo-900/40 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-1.5"
                            >
                              {ex.label && (
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono">
                                  {ex.label}
                                </span>
                              )}
                              <div className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                                {ex.problem}
                              </div>
                              <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold pl-2 border-l-2 border-emerald-500">
                                {ex.solution}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pattern Spotter */}
                    {topic.patternSpotter && topic.patternSpotter.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <ZapIcon size={13} /> Pattern Spotter (SSC Question Clues)
                        </div>
                        <div className="overflow-x-auto rounded-xl border border-amber-200/80 dark:border-amber-900/50">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 font-bold">
                              <tr>
                                <th className="px-3 py-2">Question Clue</th>
                                <th className="px-3 py-2">Exam Method</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-amber-100 dark:divide-amber-900/30 text-slate-700 dark:text-slate-300">
                              {topic.patternSpotter.map((pat, pIdx) => (
                                <tr key={pIdx}>
                                  <td className="px-3 py-2 font-semibold text-slate-900 dark:text-white">
                                    {pat.clue}
                                  </td>
                                  <td className="px-3 py-2 font-mono text-indigo-600 dark:text-indigo-400">
                                    {pat.method}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Pro Tips */}
                    {topic.proTips && topic.proTips.length > 0 && (
                      <div className="p-3.5 rounded-2xl border border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/30 space-y-1.5">
                        <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                          <AwardIcon size={14} /> Exam Pro Tips & Traps
                        </div>
                        <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                          {topic.proTips.map((tip, tipIdx) => (
                            <li key={tipIdx} className="flex items-start gap-2">
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">✓</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Practice items if present */}
                    {topic.practiceItems && topic.practiceItems.length > 0 && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-1">
                        <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                          Practice Drill Questions
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs font-mono text-slate-800 dark:text-slate-200">
                          {topic.practiceItems.map((pr, prIdx) => (
                            <div key={prIdx}>• {pr}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* 90-Minute Daily Timetable */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <ClockIcon size={18} className="text-indigo-600 dark:text-indigo-400" />
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {dayData.dayName} — 90-Minute Daily Execution Plan
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    4 Blocks · 90 min
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {dayData.timetable.map((tt, ttIdx) => (
                    <div
                      key={ttIdx}
                      className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-850/60 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
                          Block {ttIdx + 1}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                          {tt.time}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {tt.activity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()
      )}

      {/* TAB 7: 100-QUESTION DAILY ASSESSMENT & SCORING */}
      {activeTab === "assessment" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Tier-I Calibrated Daily Practice
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {week1MathProgramme.assessmentStructure.title}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                20 Q/day · 100 Q total
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {week1MathProgramme.assessmentStructure.description}
            </p>

            {/* 3 Difficulty Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50 space-y-1">
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                  Easy (40%)
                </div>
                <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                  {week1MathProgramme.assessmentStructure.difficultyBreakdown.easy} Questions
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">
                  Direct formula application, single-step arithmetic
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 space-y-1">
                <div className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                  Medium (40%)
                </div>
                <div className="text-2xl font-black font-mono text-amber-600 dark:text-amber-400">
                  {week1MathProgramme.assessmentStructure.difficultyBreakdown.medium} Questions
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">
                  Two-step problems, combining two foundation concepts
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/50 space-y-1">
                <div className="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider">
                  Hard (20%)
                </div>
                <div className="text-2xl font-black font-mono text-rose-600 dark:text-rose-400">
                  {week1MathProgramme.assessmentStructure.difficultyBreakdown.hard} Questions
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">
                  Multi-step, non-standard phrasing, exam-speed pressure
                </div>
              </div>
            </div>

            {/* Daily Schedule Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-4 py-3">Study Day</th>
                    <th className="px-4 py-3">Topic Assessed</th>
                    <th className="px-4 py-3 text-right">Questions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {week1MathProgramme.assessmentStructure.schedule.map((item, sIdx) => (
                    <tr key={sIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/40">
                      <td className="px-4 py-3 font-bold font-mono text-slate-900 dark:text-white">
                        {item.day}
                      </td>
                      <td className="px-4 py-3">{item.topic}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {item.questions} Qs
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tier-I Official Scoring System Callout */}
            <div className="rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-linear-to-br from-indigo-50/70 to-violet-50/50 dark:from-indigo-950/30 dark:to-slate-900/80 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                  <AwardIcon size={16} />
                  Tier-I Negative Marking Scoring Protocol
                </h4>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-indigo-600 text-white">
                  Max: {week1MathProgramme.assessmentStructure.scoringFormula.maxDailyScore} Marks / Day
                </span>
              </div>

              <div className="text-sm font-mono font-bold text-indigo-700 dark:text-indigo-300 p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-indigo-100 dark:border-indigo-900/40">
                {week1MathProgramme.assessmentStructure.scoringFormula.formula}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {week1MathProgramme.assessmentStructure.scoringFormula.details.map((det, dIdx) => (
                  <div key={dIdx} className="p-2 rounded-lg bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 font-medium">
                    • {det}
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900/30 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                🎯 Target Mastery Benchmark: {week1MathProgramme.assessmentStructure.scoringFormula.masteryTarget}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 8: FORMULA BOOK & MEMORY WORK */}
      {activeTab === "formulas" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Daily Rapid Recall Routine
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Formula & Memory Work Schedule
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300">
                Daily 25 Min Memory Work
              </span>
            </div>

            {/* Daily Memorisation Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-4 py-3">Day</th>
                    <th className="px-4 py-3">What to Memorise Strictly</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {week1MathProgramme.formulaMemoryWork.schedule.map((item, fIdx) => (
                    <tr key={fIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/40">
                      <td className="px-4 py-3 font-bold font-mono text-slate-900 dark:text-white">
                        {item.day}
                      </td>
                      <td className="px-4 py-3 font-mono font-medium">{item.memorise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3-Part Daily Revision Protocol */}
            <div className="rounded-2xl border border-violet-200/80 dark:border-violet-900/60 bg-violet-50/50 dark:bg-violet-950/20 p-5 space-y-3">
              <h4 className="text-sm font-bold text-violet-950 dark:text-violet-200 flex items-center gap-2">
                <RotateCcwIcon size={16} />
                Daily Revision Routine & Spaced Repetition Protocol
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {week1MathProgramme.formulaMemoryWork.routine.map((rout, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-violet-100 dark:border-violet-900/30">
                    <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {rIdx + 1}
                    </span>
                    <span className="leading-relaxed">{rout}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 9: 20-ITEM MASTERY TRACKER */}
      {activeTab === "tracker" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Interactive Competency Checklist
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  End-of-Week Mastery Tracker
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={resetCompetencies}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer"
                >
                  Reset Progress
                </button>
              </div>
            </div>

            {/* Progress Bar & Status */}
            <div className="space-y-2 p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                <span>Week 1 Mathematical Competencies</span>
                <span className="font-mono text-indigo-600 dark:text-indigo-400">
                  {masteredCount} / {totalTrackerCount} Completed ({trackerPercentage}%)
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-indigo-600 to-violet-600 dark:from-indigo-500 dark:to-violet-500 transition-all duration-300"
                  style={{ width: `${trackerPercentage}%` }}
                />
              </div>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {week1MathProgramme.masteryTracker.map((item, idx) => {
                const isChecked = masteredCompetencies.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleCompetency(item.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all duration-150 cursor-pointer ${
                      isChecked
                        ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300/80 dark:border-emerald-800 text-slate-900 dark:text-slate-100"
                        : "bg-slate-50/50 dark:bg-slate-850/40 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 transition-colors ${
                        isChecked
                          ? "bg-emerald-600 text-white"
                          : "border-2 border-slate-300 dark:border-slate-600 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
                        ITEM #{idx + 1}
                      </div>
                      <div
                        className={`text-xs font-medium leading-snug ${
                          isChecked ? "line-through text-slate-500 dark:text-slate-400" : ""
                        }`}
                      >
                        {item.text}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 10: WHAT COMES AFTER WEEK 1 (WEEK 2 ROADMAP) */}
      {activeTab === "next-week" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Post-Foundation Trajectory
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  What comes after Week 1?
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300">
                Week 2 Blueprint
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {week1MathProgramme.nextWeekPreview.guidance}
            </p>

            {/* Next Week Modules */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {week1MathProgramme.nextWeekPreview.modules.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850/60 space-y-2"
                >
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-indigo-600 text-white">
                    {mod.code}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium pt-1">
                    {mod.topic}
                  </p>
                </div>
              ))}
            </div>

            {/* The First-Week Golden Rule */}
            <div className="rounded-2xl border-2 border-amber-300/80 dark:border-amber-800/80 bg-amber-50/60 dark:bg-amber-950/30 p-5 space-y-2">
              <h4 className="text-sm font-extrabold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <span>⭐</span> The First-Week Golden Rule for SSC CGL Aspirants
              </h4>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 font-semibold leading-relaxed">
                &ldquo;{week1MathProgramme.nextWeekPreview.firstWeekRule}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
