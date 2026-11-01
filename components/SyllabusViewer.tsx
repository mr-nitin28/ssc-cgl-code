"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SubjectSyllabus } from "@/lib/types";
import { getCompletedChapters, toggleChapterCompleted } from "@/lib/storage";
import {
  DownloadIcon,
  CheckIcon,
  AwardIcon,
} from "./icons";

interface SyllabusViewerProps {
  subjectKey: "maths" | "reasoning" | "english" | "gk";
  syllabus: SubjectSyllabus;
}

const subjectsList = [
  { key: "maths", name: "Mathematics", icon: "📐", href: "/syllabus/maths", pdf: "SSC_CGL_2026_Mathematics_Master_Syllabus.pdf" },
  { key: "reasoning", name: "Reasoning", icon: "🧩", href: "/syllabus/reasoning", pdf: "SSC_CGL_2026_Reasoning_Master_Syllabus.pdf" },
  { key: "english", name: "English", icon: "📖", href: "/syllabus/english", pdf: "SSC_CGL_2026_English_Master_Syllabus.pdf" },
  { key: "gk", name: "GK & Current Affairs", icon: "🌍", href: "/syllabus/gk", pdf: "SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf" },
];

export function SyllabusViewer({ subjectKey, syllabus }: SyllabusViewerProps) {
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"blueprint" | "priorities" | "roadmap" | "tracker" | "tips">("blueprint");

  const currentSubjectObj = subjectsList.find((s) => s.key === subjectKey) || subjectsList[0];

  useEffect(() => {
    const chapters = getCompletedChapters(subjectKey);
    const id = requestAnimationFrame(() => {
      setCompletedChapters(chapters);
    });
    return () => cancelAnimationFrame(id);
  }, [subjectKey]);

  const handleToggleChapter = (chapterId: string) => {
    const updated = toggleChapterCompleted(subjectKey, chapterId);
    setCompletedChapters([...updated]);
  };

  // Compute progress
  const totalChapters = syllabus.chapters.length;
  const completedCount = completedChapters.length;
  const progressPercent = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navigation Breadcrumbs & Subject Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            ← Back to All Mock Tests
          </Link>

          {/* Subject Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800/90">
            {subjectsList.map((sub) => {
              const isAct = sub.key === subjectKey;
              return (
                <Link
                  key={sub.key}
                  href={sub.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
                    isAct
                      ? "bg-indigo-600 text-white shadow-xs font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{sub.icon}</span>
                  <span>{sub.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hero Banner Card */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl p-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-900">
                  {currentSubjectObj.icon}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 uppercase tracking-wider">
                  CGL 2026 Master Syllabus
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                {syllabus.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
                {syllabus.subtitle}
              </p>
            </div>

            {/* Quick Actions: Download PDF & Topper Tips */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              <a
                href={`/pdfs/${currentSubjectObj.pdf}`}
                download={currentSubjectObj.pdf}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-white shadow-sm shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-150"
              >
                <DownloadIcon size={16} /> Download Official PDF
              </a>
              <Link
                href={`/tips/${subjectKey === "maths" ? "m" : subjectKey === "reasoning" ? "r" : subjectKey === "english" ? "e" : "k"}`}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
              >
                <AwardIcon size={16} className="text-amber-500" />
                Rank Tips & Playbook
              </Link>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800 text-center">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="text-xl font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                {syllabus.tier1Questions} Q
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Tier-I Share</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="text-xl font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                {syllabus.tier2Questions} Q
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Tier-II Share</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="text-xl font-bold font-mono tabular-nums text-teal-600 dark:text-teal-400">
                {syllabus.suggestedMinutesPerDay} Min
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Daily Target</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="text-xl font-bold font-mono tabular-nums text-amber-500">
                24
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Weeks Plan</div>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200/90 dark:border-slate-800/90">
          <button
            onClick={() => setActiveTab("blueprint")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
              activeTab === "blueprint"
                ? "bg-indigo-600 text-white shadow-xs font-bold"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white"
            }`}
          >
            📋 Exam Blueprint
          </button>
          <button
            onClick={() => setActiveTab("priorities")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
              activeTab === "priorities"
                ? "bg-indigo-600 text-white shadow-xs font-bold"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white"
            }`}
          >
            📊 Shift Weightages
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
              activeTab === "roadmap"
                ? "bg-indigo-600 text-white shadow-xs font-bold"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white"
            }`}
          >
            🗓 24-Week Roadmap
          </button>
          <button
            onClick={() => setActiveTab("tracker")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
              activeTab === "tracker"
                ? "bg-indigo-600 text-white shadow-xs font-bold"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white"
            }`}
          >
            ✅ Chapter Tracker ({progressPercent}%)
          </button>
          <button
            onClick={() => setActiveTab("tips")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
              activeTab === "tips"
                ? "bg-indigo-600 text-white shadow-xs font-bold"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white"
            }`}
          >
            💡 Traps & Heuristics
          </button>
        </div>

        {/* Tab 1: Exam Blueprint */}
        {activeTab === "blueprint" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Exam Blueprint: Tier-I vs Tier-II Alignment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
                Both tiers build on a single unified core, but differ drastically in time pacing, question depth, and penalty penalties.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Parameter</th>
                    <th className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">
                      Tier-I Exam
                    </th>
                    <th className="py-3 px-4 font-bold text-teal-600 dark:text-teal-400">
                      Tier-II Paper-I
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                  {syllabus.blueprint.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-100">
                        {row[0]}
                      </td>
                      <td className="py-3 px-4 font-semibold font-mono">{row[1]}</td>
                      <td className="py-3 px-4 font-semibold font-mono">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              💡 <b className="font-semibold text-slate-800 dark:text-slate-100">Strategic Recommendation:</b> Prepare Tier-I and Tier-II together from day one. Do not postpone advanced concepts or statistical extensions until after Tier-I results are declared.
            </div>
          </div>
        )}

        {/* Tab 2: Topic Priorities & Weightage Bars */}
        {activeTab === "priorities" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Authentic Shift-by-Shift Topic Weightage
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
                Data extracted from verified SSC CGL recent shifts. High-yield topics account for the majority of marks.
              </p>
            </div>

            <div className="space-y-4">
              {syllabus.topicPriorities &&
                syllabus.topicPriorities.map((item, idx) => {
                  const topicName = item[0];
                  const share = item[1];
                  const maxShare = Math.max(...syllabus.topicPriorities.map((x) => x[1]));
                  const widthPercent = (share / maxShare) * 100;

                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {idx + 1}. {topicName}
                        </span>
                        <span className="font-bold font-mono text-indigo-700 dark:text-indigo-300">
                          {share}% share
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-indigo-600 transition-all duration-500"
                          style={{ width: `${widthPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Tab 3: 24-Week Strategic Study Roadmap */}
        {activeTab === "roadmap" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                24-Week Comprehensive Master Study Roadmap
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
                Structured into 4 progressive phases: Foundation building, Core speed conditioning, Tier-II syllabus extensions, and Final full-length mock marathons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {syllabus.weekPlan24 &&
                syllabus.weekPlan24.map((week, idx) => (
                  <div
                    key={idx}
                    className="hover-lift p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2 hover:border-indigo-400/80 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-indigo-100/80 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        WEEK {week[0]}
                      </span>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 font-mono">
                        {week[3]}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {week[1]}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {week[2]}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Tab 4: Interactive Chapter Tracker */}
        {activeTab === "tracker" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Interactive Chapter Mastery Tracker
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
                  Mark chapters as complete when you finish theory, 100+ PYQs, and topic quizzes. Saved directly to your device.
                </p>
              </div>

              <div className="text-right sm:min-w-[140px]">
                <div className="text-2xl font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                  {completedCount} / {totalChapters}
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Chapters Mastered ({progressPercent}%)
                </div>
              </div>
            </div>

            {/* Progress Meter Bar */}
            <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-indigo-500 to-emerald-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Checklist of Chapters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {syllabus.chapters.map((chap, idx) => {
                const chapName = Array.isArray(chap) ? chap[0] : typeof chap === "string" ? chap : "Chapter";
                const chapTag = Array.isArray(chap) && chap[1] ? chap[1] : "Core";
                const isChecked = completedChapters.includes(chapName);

                return (
                  <button
                    key={idx}
                    onClick={() => handleToggleChapter(chapName)}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] ${
                      isChecked
                        ? "border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-indigo-700"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                        isChecked
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                          : "border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
                      }`}
                    >
                      {isChecked && <CheckIcon size={14} />}
                    </span>
                    <span className="flex-1 font-medium">{chapName}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                      {chapTag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 5: Traps & Heuristics */}
        {activeTab === "tips" && (
          <div className="space-y-6">
            {/* Golden Tips */}
            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span>🌟</span> Golden Rules & Shortcuts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {syllabus.goldenTips &&
                  syllabus.goldenTips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="hover-lift p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/60 space-y-1.5 transition-all duration-200"
                    >
                      <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-400">
                        {tip[0]}
                      </div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                        {tip[1]}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {tip[2]}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Error Rates & Traps */}
            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span>⚠️</span> High-Frequency Exam Traps & Error Rates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {syllabus.errorRates &&
                  syllabus.errorRates.map((err, idx) => (
                    <div
                      key={idx}
                      className="hover-lift p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 space-y-1.5 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-rose-700 dark:text-rose-300">{err[0]}</span>
                        <span className="text-rose-600 dark:text-rose-400 font-mono font-bold">{err[1]} Error Rate</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        {err[2]}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
