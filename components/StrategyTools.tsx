"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChartIcon } from "./icons";

interface StrategyToolsProps {
  coverageProfiles: Record<
    string,
    {
      T: [string, number][];
      h: number; // minutes
      g: string[]; // fixes
    }
  >;
  defaultPriorityRatings: Record<string, Record<string, number>>;
}

const subjects = [
  { key: "m", name: "Mathematics", icon: "📐" },
  { key: "r", name: "Reasoning", icon: "🧩" },
  { key: "e", name: "English", icon: "📖" },
  { key: "k", name: "General Knowledge", icon: "🌍" },
];

export function StrategyTools({ coverageProfiles, defaultPriorityRatings }: StrategyToolsProps) {
  const [activeSubject, setActiveSubject] = useState<string>("m");
  const [ratings, setRatings] = useState<Record<string, Record<string, number>>>(defaultPriorityRatings);

  // Time budget planner state
  const [targetScore, setTargetScore] = useState<number>(150);
  const [currentAccuracy, setCurrentAccuracy] = useState<number>(75);
  const [dailyHours, setDailyHours] = useState<number>(5);

  const profile = coverageProfiles[activeSubject] || coverageProfiles["m"];
  const topics = profile ? profile.T : [];

  // Calculate cumulative rows immutably
  const rows = topics.reduce<
    { name: string; weight: number; cumulativeShare: number }[]
  >((acc, t) => {
    const prevCum = acc.length > 0 ? acc[acc.length - 1].cumulativeShare : 0;
    const nextCum = Math.round((prevCum + t[1]) * 10) / 10;
    acc.push({
      name: t[0],
      weight: t[1],
      cumulativeShare: nextCum,
    });
    return acc;
  }, []);

  const eightyIdx = rows.findIndex((r) => r.cumulativeShare >= 80);
  const topTopicsCount = eightyIdx !== -1 ? eightyIdx + 1 : rows.length;
  const eightyShare = eightyIdx !== -1 ? rows[eightyIdx].cumulativeShare : 100;
  const maxWeight = Math.max(...topics.map((x) => x[1]), 1);

  // Update rating
  const handleRatingChange = (topicName: string, newRate: number) => {
    setRatings((prev) => ({
      ...prev,
      [activeSubject]: {
        ...(prev[activeSubject] || {}),
        [topicName]: newRate,
      },
    }));
  };

  const subjectRatings = ratings[activeSubject] || {};

  // Compute calculated priority ranking
  const prioritizedTopics = rows.map((r) => {
    const userRating = subjectRatings[r.name] || 3;
    const priorityIndex = Math.round(r.weight * (6 - userRating) * 10) / 10;
    return {
      ...r,
      userRating,
      priorityIndex,
    };
  });
  prioritizedTopics.sort((a, b) => b.priorityIndex - a.priorityIndex);

  // Dynamic Time Split Calculator based on target score and daily hours
  const totalMinutes = dailyHours * 60;
  const mathRatio = targetScore >= 160 ? 0.38 : 0.34;
  const engRatio = 0.26;
  const reasRatio = 0.20;

  const mathMin = Math.round(totalMinutes * mathRatio);
  const engMin = Math.round(totalMinutes * engRatio);
  const reasMin = Math.round(totalMinutes * reasRatio);
  const gkMin = Math.max(0, totalMinutes - (mathMin + engMin + reasMin));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            ← Back to All Mock Tests
          </Link>
          <div className="text-xs text-slate-600 dark:text-slate-300 font-medium font-mono">
            SSC CGL 2026 Analytical Tools
          </div>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-10 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 uppercase tracking-wider">
            <BarChartIcon size={14} /> Empirical Strategy Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            80/20 Coverage Curve & Priority Finder
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
            Stop studying randomly. Shift distributions show that approximately 20% of topics contribute to over 80% of all questions. Use the interactive Priority Finder and Time-Budget Planner below to customize your revision.
          </p>

          {/* Subject Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-slate-150 dark:border-slate-800">
            {subjects.map((s) => {
              const isAct = s.key === activeSubject;
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveSubject(s.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    isAct
                      ? "bg-indigo-600 text-white shadow-xs font-bold"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-white"
                  }`}
                >
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="hover-lift p-5 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 text-center space-y-1 transition-all duration-200">
            <div className="text-3xl font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
              ≈ {topTopicsCount} Topics
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              Reach about {eightyShare}% of questions
            </div>
          </div>
          <div className="hover-lift p-5 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 text-center space-y-1 transition-all duration-200">
            <div className="text-3xl font-bold font-mono tabular-nums text-teal-600 dark:text-teal-400">
              {Math.round((profile.h / 60) * 10) / 10} Hours
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              Suggested daily allocation
            </div>
          </div>
          <div className="hover-lift p-5 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 text-center space-y-1 transition-all duration-200">
            <div className="text-3xl font-bold font-mono tabular-nums text-amber-500">
              {profile.g.length} Crucial Fixes
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              To standard coaching plans
            </div>
          </div>
        </div>

        {/* Tool 1: Coverage Curve Chart */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span>1 ·</span> Empirical Coverage Curve
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-normal">
                Purple bars indicate the high-yield core that yields 80% coverage.
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
              Past Tagged Shifts Data
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {rows.map((r, i) => {
              const isTop = i < topTopicsCount;
              const widthPct = (r.weight / maxWeight) * 100;

              return (
                <div key={r.name} className="flex items-center gap-3 text-xs sm:text-sm">
                  <span className="w-36 sm:w-44 font-medium text-slate-800 dark:text-slate-200 truncate shrink-0">
                    {r.name}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isTop
                          ? "bg-gradient-to-r from-indigo-500 to-indigo-600"
                          : "bg-slate-300 dark:bg-slate-700"
                      }`}
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                  <span className="w-14 text-right font-bold font-mono text-slate-700 dark:text-slate-300 shrink-0">
                    {r.cumulativeShare}%
                  </span>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-150 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Note: Figures are cumulative. No topic should be fully abandoned, but high-yield areas warrant 3x practice volume.
          </div>
        </div>

        {/* Tool 2: What Standard Coaching Plans Under-cover */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span>2 ·</span> What Standard Plans Under-Cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {profile.g.map((fix, idx) => (
              <div
                key={idx}
                className="hover-lift p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-300 font-medium leading-relaxed"
              >
                <b className="font-semibold">Fix {idx + 1}: </b> {fix}
              </div>
            ))}
          </div>
        </div>

        {/* Tool 3: Interactive Priority Finder */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span>3 ·</span> Personalized Priority Finder
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
              Rate your confidence on each topic (1 = Weak, 5 = Mastered). The algorithm ranks topics by high exam yield combined with your biggest improvement potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input list */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Rate Your Confidence (1 to 5)
              </h4>
              <div className="max-h-[420px] overflow-y-auto space-y-2 pr-1">
                {rows.map((r) => {
                  const currentRate = subjectRatings[r.name] || 3;
                  return (
                    <div
                      key={r.name}
                      className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-between text-xs transition-colors hover:bg-slate-100/60 dark:hover:bg-slate-800/70"
                    >
                      <span className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-[140px] sm:max-w-[180px]">
                        {r.name}
                      </span>
                      <div className="flex items-center gap-1 font-mono">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleRatingChange(r.name, star)}
                            className={`w-6 h-6 rounded-md font-bold text-xs transition-all duration-150 ${
                              star <= currentRate
                                ? "bg-amber-500 text-white shadow-2xs hover:bg-amber-400"
                                : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                            }`}
                          >
                            {star}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Generated Priority Order */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Your Highest ROI Study Priorities
              </h4>
              <div className="max-h-[420px] overflow-y-auto space-y-2 pr-1">
                {prioritizedTopics.slice(0, 8).map((top, rank) => (
                  <div
                    key={top.name}
                    className="p-3 rounded-xl border border-indigo-150 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/30 flex items-center justify-between text-xs hover-lift transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-indigo-600 text-white font-bold font-mono flex items-center justify-center text-[10px]">
                        {rank + 1}
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-100 truncate max-w-[180px]">
                        {top.name}
                      </span>
                    </div>
                    <span className="font-bold font-mono text-indigo-700 dark:text-indigo-300">
                      Score: {top.priorityIndex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tool 4: Time-Budget Planner */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span>4 ·</span> Dynamic Time-Budget Planner
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
              Adjust your goals and available time to compute the scientifically recommended daily study minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Slider 1: Target Score */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700 dark:text-slate-300">Target Score:</span>
                <span className="font-bold font-mono text-indigo-600 dark:text-indigo-400">{targetScore} / 200</span>
              </div>
              <input
                type="range"
                min="120"
                max="180"
                step="5"
                value={targetScore}
                onChange={(e) => setTargetScore(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            {/* Slider 2: Current Accuracy */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700 dark:text-slate-300">Current Mock Accuracy:</span>
                <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">{currentAccuracy}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                step="5"
                value={currentAccuracy}
                onChange={(e) => setCurrentAccuracy(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
            </div>

            {/* Slider 3: Daily Available Hours */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700 dark:text-slate-300">Available Daily Hours:</span>
                <span className="font-bold font-mono text-amber-500">{dailyHours} Hours</span>
              </div>
              <input
                type="range"
                min="2"
                max="10"
                step="0.5"
                value={dailyHours}
                onChange={(e) => setDailyHours(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          {/* Result Output Split Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-150 dark:border-slate-800 text-center">
            <div className="hover-lift p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 transition-all duration-200">
              <div className="text-2xl font-bold font-mono tabular-nums text-indigo-700 dark:text-indigo-300">
                {mathMin} Min
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">📐 Mathematics</div>
            </div>
            <div className="hover-lift p-4 rounded-2xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/70 dark:border-purple-900/60 transition-all duration-200">
              <div className="text-2xl font-bold font-mono tabular-nums text-purple-700 dark:text-purple-300">
                {reasMin} Min
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">🧩 Reasoning</div>
            </div>
            <div className="hover-lift p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200/70 dark:border-teal-900/60 transition-all duration-200">
              <div className="text-2xl font-bold font-mono tabular-nums text-teal-700 dark:text-teal-300">
                {engMin} Min
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">📖 English</div>
            </div>
            <div className="hover-lift p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-900/60 transition-all duration-200">
              <div className="text-2xl font-bold font-mono tabular-nums text-amber-700 dark:text-amber-300">
                {gkMin} Min
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">🌍 General Awareness</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
