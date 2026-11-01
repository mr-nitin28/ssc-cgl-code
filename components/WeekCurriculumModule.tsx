"use client";

import React, { useState, useEffect } from "react";
import { week1ProgrammeData, DayRoadmapItem } from "@/data/week1_programme";
import {
  CheckIcon,
  ClockIcon,
  BookOpenIcon,
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

const dayTabs = ["day-1", "day-2", "day-3", "day-4", "day-5"] as const;
type DayTab = typeof dayTabs[number];
type TabType = "overview" | DayTab | "homework" | "resources" | "checklist";

export function WeekCurriculumModule({
  currentSubjectKey = "maths",
}: WeekCurriculumModuleProps) {
  const [activeTab, setActiveTab] = useState<TabType>("day-1");

  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [checklistFilter, setChecklistFilter] = useState<"all" | "math" | "english" | "reasoning" | "ga">("all");
  const [completedDrills, setCompletedDrills] = useState<string[]>([]);

  // Local storage synchronization for checklist
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ssc_week1_mastery_checklist");
      const savedDrills = localStorage.getItem("ssc_week1_homework_drills");
      const id = requestAnimationFrame(() => {
        if (saved) {
          setCheckedItems(JSON.parse(saved));
        }
        if (savedDrills) {
          setCompletedDrills(JSON.parse(savedDrills));
        }
      });
      return () => cancelAnimationFrame(id);
    } catch {
      // Ignore storage errors in private browsing
    }
  }, []);

  const toggleChecklistItem = (id: string) => {
    const updated = checkedItems.includes(id)
      ? checkedItems.filter((item) => item !== id)
      : [...checkedItems, id];

    setCheckedItems(updated);
    try {
      localStorage.setItem("ssc_week1_mastery_checklist", JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const resetChecklist = () => {
    if (window.confirm("Reset all Week 1 checklist progress?")) {
      setCheckedItems([]);
      try {
        localStorage.removeItem("ssc_week1_mastery_checklist");
      } catch {
        // Ignore
      }
    }
  };

  const toggleDrill = (id: string) => {
    const updated = completedDrills.includes(id)
      ? completedDrills.filter((item) => item !== id)
      : [...completedDrills, id];

    setCompletedDrills(updated);
    try {
      localStorage.setItem("ssc_week1_homework_drills", JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const totalChecklist = week1ProgrammeData.masteryChecklist.length;
  const completedChecklistCount = checkedItems.length;
  const checklistPercent = Math.round((completedChecklistCount / totalChecklist) * 100);

  const filteredChecklist = week1ProgrammeData.masteryChecklist.filter((item) => {
    if (checklistFilter === "all") return true;
    return item.subject === checklistFilter;
  });

  const getSubjectColorStyles = (subject: string) => {
    switch (subject) {
      case "Mathematics":
        return {
          badge: "bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/80",
          cardBorder: "border-indigo-200/90 dark:border-indigo-900/60",
          accentText: "text-indigo-600 dark:text-indigo-400",
          icon: "📐",
        };
      case "English":
        return {
          badge: "bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/80",
          cardBorder: "border-teal-200/90 dark:border-teal-900/60",
          accentText: "text-teal-600 dark:text-teal-400",
          icon: "📖",
        };
      case "Reasoning":
        return {
          badge: "bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/80",
          cardBorder: "border-purple-200/90 dark:border-purple-900/60",
          accentText: "text-purple-600 dark:text-purple-400",
          icon: "🧩",
        };
      case "General Awareness":
      default:
        return {
          badge: "bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/80",
          cardBorder: "border-amber-200/90 dark:border-amber-900/60",
          accentText: "text-amber-700 dark:text-amber-400",
          icon: "🌍",
        };
    }
  };

  const navTabs = [
    { id: "overview" as const, label: "🗓 Schedule & Splits", short: "Overview" },
    { id: "day-1" as const, label: "Mon: Number Sense", short: "Day 1 (Mon)" },
    { id: "day-2" as const, label: "Tue: Divisibility", short: "Day 2 (Tue)" },
    { id: "day-3" as const, label: "Wed: HCF & LCM", short: "Day 3 (Wed)" },
    { id: "day-4" as const, label: "Thu: Fractions", short: "Day 4 (Thu)" },
    { id: "day-5" as const, label: "Fri: Percentage", short: "Day 5 (Fri)" },
    { id: "homework" as const, label: "📋 Daily Homework", short: "Homework" },
    { id: "resources" as const, label: "🌐 Free Resources", short: "Resources" },
    {
      id: "checklist" as const,
      label: `✅ Mastery (${completedChecklistCount}/${totalChecklist})`,
      short: `Checklist (${checklistPercent}%)`,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Module Hero Banner */}
      <div className="rounded-3xl border border-indigo-200/90 dark:border-indigo-900/70 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-xs uppercase tracking-wider">
                <SparklesIcon size={13} /> {week1ProgrammeData.level}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 font-mono uppercase">
                WEEK 1 OF 24 · {currentSubjectKey} FOUNDATION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {week1ProgrammeData.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed font-normal">
              {week1ProgrammeData.overview}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-indigo-200/80 dark:border-indigo-900/60 shadow-xs space-y-1">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Weekly Study Time</div>
              <div className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                {week1ProgrammeData.weeklyStructure.totalMinutes} Min · {week1ProgrammeData.weeklyStructure.totalHours} Hours
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                {week1ProgrammeData.weeklyStructure.dailyMinutes} mins/day · 5 Days/week
              </div>
            </div>

            <button
              onClick={() => setActiveTab("checklist")}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-xs transition-all duration-150 cursor-pointer"
            >
              <CheckIcon size={16} /> Open Mastery Tracker ({checklistPercent}%)
            </button>
          </div>
        </div>

        {/* 4-Subject Proportionate Time Distribution */}
        <div className="mt-6 pt-5 border-t border-indigo-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Weekly Subject Time Distribution (450 Minutes Total)
            </span>
            <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold">
              Math: 225m (50%) · GA: 100m · English: 75m · Reasoning: 50m
            </span>
          </div>

          <div className="w-full h-3 rounded-full bg-slate-200/70 dark:bg-slate-800 overflow-hidden flex">
            <div
              className="h-full bg-indigo-600 transition-all duration-500"
              style={{ width: "50%" }}
              title="Mathematics: 225 min (50%)"
            />
            <div
              className="h-full bg-teal-500 transition-all duration-500"
              style={{ width: "16.7%" }}
              title="English: 75 min (16.7%)"
            />
            <div
              className="h-full bg-purple-500 transition-all duration-500"
              style={{ width: "11.1%" }}
              title="Reasoning: 50 min (11.1%)"
            />
            <div
              className="h-full bg-amber-500 transition-all duration-500"
              style={{ width: "22.2%" }}
              title="General Awareness: 100 min (22.2%)"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
              📐 Math: 225m (45m/day)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" />
              📖 English: 75m (Mon/Wed/Fri)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
              🧩 Reasoning: 50m (Tue/Thu)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              🌍 General Awareness: 100m (20m/day)
            </span>
          </div>
        </div>
      </div>

      {/* Week Curriculum Sub-Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-b border-slate-200/80 dark:border-slate-800">
        {navTabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isSelected
                  ? "bg-indigo-600 text-white shadow-xs font-bold"
                  : "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* View 1: 5-Day Schedule & Matrix Overview */}
      {activeTab === "overview" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Daily 90-Min Timetable */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <ClockIcon size={18} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
                  Daily 90-Minute Precision Timetable
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-2.5 py-1 rounded-xl">
                90 Min / Session
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Study Block</th>
                    <th className="py-3 px-4 font-mono">Time Allocated</th>
                    <th className="py-3 px-4">Daily Activity Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                  {week1ProgrammeData.weeklyStructure.timetable.map((block, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full bg-${block.color}-600 inline-block`} />
                        {block.subject}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {block.time}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{block.activity}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50/80 dark:bg-slate-800/50 font-bold">
                    <td className="py-3 px-4 text-slate-900 dark:text-white">Daily Total</td>
                    <td className="py-3 px-4 font-mono text-emerald-600 dark:text-emerald-400">90 min / day</td>
                    <td className="py-3 px-4 text-slate-700 dark:text-slate-300">Complete four-subject coverage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5-Day Weekly Subject Matrix */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
                Five-Day Subject Curriculum Matrix
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                {week1ProgrammeData.fiveDayRoadmap.rationale}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Day</th>
                    <th className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">📐 Mathematics (45m)</th>
                    <th className="py-3 px-4 font-bold text-teal-600 dark:text-teal-400">📖 English / 🧩 Reasoning (25m)</th>
                    <th className="py-3 px-4 font-bold text-amber-600 dark:text-amber-400">🌍 General Awareness (20m)</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                  {week1ProgrammeData.fiveDayRoadmap.schedule.map((item: DayRoadmapItem, idx: number) => {
                    const dayId = dayTabs[idx] || "day-1";
                    return (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                          {item.day}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-slate-800 dark:text-slate-200">{item.math}</td>
                        <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">{item.langReasoning}</td>
                        <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">{item.ga}</td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setActiveTab(dayId)}
                            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition-colors cursor-pointer"
                          >
                            Open <ChevronRightIcon size={12} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* View 2–6: Specific Days (Day 1 through Day 5) */}
      {activeTab.startsWith("day-") && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {(() => {
            const currentDay = week1ProgrammeData.days.find((d) => d.id === activeTab);
            if (!currentDay) return null;

            return (
              <div className="space-y-6">
                {/* Day Header Card */}
                <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-indigo-100/90 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
                        {currentDay.dayName}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">90 Minutes Total</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                      {currentDay.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{currentDay.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const currentIdx = dayTabs.indexOf(activeTab as DayTab);
                        if (currentIdx > 0) {
                          setActiveTab(dayTabs[currentIdx - 1]);
                        }
                      }}
                      disabled={activeTab === "day-1"}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      ← Previous Day
                    </button>
                    <button
                      onClick={() => {
                        const currentIdx = dayTabs.indexOf(activeTab as DayTab);
                        if (currentIdx < dayTabs.length - 1) {
                          setActiveTab(dayTabs[currentIdx + 1]);
                        } else {
                          setActiveTab("checklist");
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
                    >
                      {activeTab === "day-5" ? "Mastery Checklist →" : "Next Day →"}
                    </button>
                  </div>
                </div>

                {/* Subject Cards for this day */}
                <div className="space-y-6">
                  {currentDay.subjects.map((sub, sIdx) => {
                    const colorStyles = getSubjectColorStyles(sub.subject);

                    return (
                      <div
                        key={sIdx}
                        className={`rounded-3xl border ${colorStyles.cardBorder} bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6`}
                      >
                        {/* Subject Top Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800 gap-3">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700">
                              {colorStyles.icon}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${colorStyles.badge}`}>
                                  {sub.subject}
                                </span>
                                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                                  ⏱️ {sub.time}
                                </span>
                              </div>
                              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                                {sub.topic}
                              </h4>
                            </div>
                          </div>

                          <div className="text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 max-w-sm">
                            <b className="font-semibold text-slate-800 dark:text-slate-200">Objective: </b>
                            {sub.objective}
                          </div>
                        </div>

                        {/* Subject Content Sections */}
                        <div className="space-y-6">
                          {sub.sections.map((sec, secIdx) => (
                            <div key={secIdx} className="space-y-3.5">
                              <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <span className="w-1.5 h-4 rounded-full bg-indigo-600 inline-block" />
                                {sec.heading}
                              </h5>

                              {sec.content && (
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {sec.content}
                                </p>
                              )}

                              {/* Data Table if present */}
                              {sec.table && (
                                <div className="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800">
                                  <table className="w-full text-left text-xs sm:text-sm">
                                    <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                                      <tr>
                                        {sec.table.headers.map((h, hIdx) => (
                                          <th key={hIdx} className="py-2.5 px-3.5">
                                            {h}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                                      {sec.table.rows.map((row, rIdx) => (
                                        <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                          {row.map((cell, cIdx) => (
                                            <td key={cIdx} className="py-2.5 px-3.5">
                                              {cell}
                                            </td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              )}

                              {/* Formula Box / Worked Example */}
                              {sec.formulaBox && sec.formulaBox.length > 0 && (
                                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 font-mono text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-1.5 shadow-2xs">
                                  {sec.formulaBox.map((line, fIdx) => (
                                    <div key={fIdx} className={line === "" ? "h-1" : ""}>
                                      {line}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Rules list if present */}
                              {sec.rules && (
                                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                                  {sec.rules.map((rule, ruIdx) => (
                                    <li key={ruIdx}>{rule}</li>
                                  ))}
                                </ul>
                              )}

                              {/* Pattern Spotter Callout */}
                              {sec.patternSpotter && (
                                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-2.5">
                                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                                    <ZapIcon size={14} className="text-amber-600" />
                                    Pattern Spotter & Pro Shortcuts
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                    {sec.patternSpotter.map((pat, pIdx) => (
                                      <div
                                        key={pIdx}
                                        className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-800/40 space-y-0.5"
                                      >
                                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                                          Trigger: {pat.clue}
                                        </div>
                                        <div className="text-amber-800 dark:text-amber-300 font-mono text-[11px]">
                                          → {pat.method}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Drill or practice activity */}
                              {sec.drillOrPractice && (
                                <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 flex items-start gap-2.5">
                                  <CheckIcon size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{sec.drillOrPractice}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Day Revision Box */}
                {currentDay.revisionItems && (
                  <div className="rounded-3xl border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/40 p-5 sm:p-6 shadow-xs space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-indigo-900 dark:text-indigo-200">
                      <TargetIcon size={18} className="text-indigo-600 dark:text-indigo-400" />
                      Day 1 Rapid Revision: 5 Non-Negotiable Essentials
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {currentDay.revisionItems.map((rev, revIdx) => (
                        <li key={revIdx} className="flex items-center gap-2 p-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-indigo-100 dark:border-indigo-900/40">
                          <span className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                            {revIdx + 1}
                          </span>
                          <span>{rev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* View 7: Daily Homework & Practice Targets */}
      {activeTab === "homework" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800 gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
                  Daily Homework & Practice Targets (Monday to Friday)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Complete these minimum non-negotiable target exercises after every daily study block.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/80 dark:border-emerald-800/80 px-3 py-1 rounded-xl shrink-0">
                {completedDrills.length} / {week1ProgrammeData.homework.length * 3} Drills Logged
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Day</th>
                    <th className="py-3 px-4 text-indigo-600 dark:text-indigo-400 font-bold">📐 Mathematics</th>
                    <th className="py-3 px-4 text-teal-600 dark:text-teal-400 font-bold">📖 English / 🧩 Reasoning</th>
                    <th className="py-3 px-4 text-amber-600 dark:text-amber-400 font-bold">🌍 General Awareness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                  {week1ProgrammeData.homework.map((hw, idx) => {
                    const mId = `hw-${hw.day}-m`;
                    const lId = `hw-${hw.day}-l`;
                    const gId = `hw-${hw.day}-g`;

                    return (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                          {hw.day}
                        </td>
                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => toggleDrill(mId)}
                            className="flex items-start gap-2 text-left cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                                completedDrills.includes(mId)
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-slate-300 dark:border-slate-700"
                              }`}
                            >
                              {completedDrills.includes(mId) && <CheckIcon size={12} />}
                            </span>
                            <span className={completedDrills.includes(mId) ? "line-through text-slate-400" : ""}>
                              {hw.math}
                            </span>
                          </button>
                        </td>
                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => toggleDrill(lId)}
                            className="flex items-start gap-2 text-left cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                                completedDrills.includes(lId)
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-slate-300 dark:border-slate-700"
                              }`}
                            >
                              {completedDrills.includes(lId) && <CheckIcon size={12} />}
                            </span>
                            <span className={completedDrills.includes(lId) ? "line-through text-slate-400" : ""}>
                              {hw.langReasoning}
                            </span>
                          </button>
                        </td>
                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => toggleDrill(gId)}
                            className="flex items-start gap-2 text-left cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                                completedDrills.includes(gId)
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-slate-300 dark:border-slate-700"
                              }`}
                            >
                              {completedDrills.includes(gId) && <CheckIcon size={12} />}
                            </span>
                            <span className={completedDrills.includes(gId) ? "line-through text-slate-400" : ""}>
                              {hw.ga}
                            </span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* View 8: Curated Free Learning Resources */}
      {activeTab === "resources" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Primary Platform Spotlight */}
          <div className="rounded-3xl border border-indigo-200/90 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/40 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                  ★ PRIMARY NATIONAL RESOURCE RECOMMENDATION
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {week1ProgrammeData.resources.primaryPlatform.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  {week1ProgrammeData.resources.primaryPlatform.desc}
                </p>
                <div className="text-[11px] text-indigo-800 dark:text-indigo-300 font-medium">
                  💡 {week1ProgrammeData.resources.primaryPlatform.note}
                </div>
              </div>

              <a
                href={week1ProgrammeData.resources.primaryPlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/25 transition-all duration-150 shrink-0"
              >
                Launch SATHEE SSC Portal
                <ExternalLinkIcon size={15} />
              </a>
            </div>
          </div>

          {/* Subject-Wise Free Resources Table */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
              Verified Primary & Secondary Study Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Stick to one primary explanation source and one question practice source. Avoid watching multiple teachers explain the same concept.
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Primary Free Source</th>
                    <th className="py-3 px-4">Recommended YouTube / Extension</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                  {week1ProgrammeData.resources.subjectResources.map((res, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-800 dark:text-slate-100">{res.subject}</td>
                      <td className="py-3.5 px-4">
                        <a
                          href={res.primary.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          <span>{res.primary.name}</span>
                          <ExternalLinkIcon size={13} />
                        </a>
                      </td>
                      <td className="py-3.5 px-4">
                        <a
                          href={res.additional.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 hover:underline"
                        >
                          <span>{res.additional.name}</span>
                          <ExternalLinkIcon size={13} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Official Bookmarks */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <BookOpenIcon size={18} className="text-indigo-600 dark:text-indigo-400" />
              Official Government & SSC Portals to Bookmark
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {week1ProgrammeData.resources.officialBookmarks.map((bm, idx) => (
                <a
                  key={idx}
                  href={bm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-indigo-400/80 transition-all duration-200 space-y-1.5 block group"
                >
                  <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between text-xs sm:text-sm">
                    <span className="group-hover:text-indigo-600 transition-colors">{bm.name}</span>
                    <ExternalLinkIcon size={14} className="text-slate-400 group-hover:text-indigo-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {bm.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* View 9: End-of-Week Mastery Checklist */}
      {activeTab === "checklist" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800 gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                  Week 1 End-of-Week Mastery Checklist
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  15 concrete competencies verifying your beginner foundation across all 4 subjects. Saved automatically.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
                    {completedChecklistCount} / {totalChecklist}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Competencies Mastered ({checklistPercent}%)</div>
                </div>

                <button
                  onClick={resetChecklist}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Reset checklist"
                >
                  <RotateCcwIcon size={16} />
                </button>
              </div>
            </div>

            {/* Progress Meter Bar */}
            <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-indigo-500 via-teal-500 to-emerald-500 transition-all duration-300"
                style={{ width: `${checklistPercent}%` }}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              {(["all", "math", "english", "reasoning", "ga"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setChecklistFilter(filter)}
                  className={`px-3 py-1.5 rounded-xl font-semibold capitalize transition-all cursor-pointer ${
                    checklistFilter === filter
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {filter === "all" ? `All (${totalChecklist})` : filter}
                </button>
              ))}
            </div>

            {/* Checklist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {filteredChecklist.map((item) => {
                const isChecked = checkedItems.includes(item.id);

                return (
                  <button
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] cursor-pointer ${
                      isChecked
                        ? "border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-indigo-700"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 border mt-0.5 transition-colors ${
                        isChecked
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                          : "border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
                      }`}
                    >
                      {isChecked && <CheckIcon size={13} />}
                    </span>
                    <span className={`flex-1 font-medium leading-relaxed ${isChecked ? "line-through opacity-80" : ""}`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Weekly Target Benchmarks */}
            <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <AwardIcon size={16} className="text-amber-500" />
                Target Accuracy & Retention Benchmarks
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {week1ProgrammeData.performanceTargets.map((target, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700 space-y-1"
                  >
                    <div className="font-bold text-indigo-600 dark:text-indigo-400">{target.subject}</div>
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {target.target}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/50 text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed">
                💡 <b>Strategic Mindset:</b> Do not judge your first week by exam speed. Judge it strictly by how well you comprehend the core mechanics and whether you can solve similar problems independently without looking at solution keys.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
