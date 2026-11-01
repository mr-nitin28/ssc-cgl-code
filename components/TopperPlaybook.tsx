"use client";

import { useState } from "react";
import Link from "next/link";
import { AwardIcon, CheckIcon, XIcon, ZapIcon } from "./icons";

interface TopperPlaybookProps {
  subjectKey: "m" | "r" | "e" | "k";
  subjectName: string;
  tips: {
    t: [string, string][];
    s: [string, string, string][];
    k: [string, string, string][];
    d: [string, string][];
    e: [string, string, string][];
    w: [string, string, string][];
    c: string[];
  };
  universalHabits: [string, string][];
}

const subjects = [
  { key: "m", name: "Mathematics", icon: "📐", href: "/tips/m" },
  { key: "r", name: "Reasoning", icon: "🧩", href: "/tips/r" },
  { key: "e", name: "English", icon: "📖", href: "/tips/e" },
  { key: "k", name: "General Knowledge", icon: "🌍", href: "/tips/k" },
];

type PlaybookTab = "scoreboard" | "playbook" | "toolkit" | "dodont" | "examday" | "weekly" | "checklist" | "universal";

const playbookTabs: { id: PlaybookTab; label: string }[] = [
  { id: "scoreboard", label: "🎯 Score Targets" },
  { id: "playbook", label: "🧠 Smart-Work Rules" },
  { id: "toolkit", label: "⚡ Speed Toolkit" },
  { id: "dodont", label: "⚖️ Do's & Don'ts" },
  { id: "examday", label: "⏱ Exam Day Strategy" },
  { id: "weekly", label: "📅 Weekly Rhythm" },
  { id: "checklist", label: "📋 Master Checklist" },
  { id: "universal", label: "🏆 Universal Habits" },
];

export function TopperPlaybook({
  subjectKey,
  subjectName,
  tips,
  universalHabits,
}: TopperPlaybookProps) {
  const [activeSection, setActiveSection] = useState<PlaybookTab>("scoreboard");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Breadcrumb & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            ← Back to All Mock Tests
          </Link>

          {/* Subject Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800/90">
            {subjects.map((s) => {
              const isAct = s.key === subjectKey;
              return (
                <Link
                  key={s.key}
                  href={s.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
                    isAct
                      ? "bg-indigo-600 text-white shadow-xs font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hero Card */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80 uppercase tracking-wider">
                <AwardIcon size={14} /> Top-10 Ranker Playbook
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                {subjectName} · Rank Tips & Heuristics
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
                Empirically validated habits, speed shortcuts, and time-allocation systems distilled from high percentilers in recent SSC CGL cycles.
              </p>
            </div>

            {subjectKey === "m" && (
              <Link
                href="/pattern-lab"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-slate-950 shadow-sm hover:shadow-md transition-all duration-150 shrink-0"
              >
                <ZapIcon size={16} /> Open Speed Math Pattern Lab
              </Link>
            )}
          </div>
        </div>

        {/* Playbook Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200/90 dark:border-slate-800/90">
          {playbookTabs.map((tab) => {
            const isAct = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                  isAct
                    ? "bg-indigo-600 text-white shadow-xs font-bold"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Section 1: Scoreboard Targets */}
        {activeSection === "scoreboard" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Rank Scoreboard Targets
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
                Concrete benchmark scores that place you in the top 1 percentile of SSC CGL aspirants.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {tips.t &&
                tips.t.map((score, idx) => (
                  <div
                    key={idx}
                    className="hover-lift p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-center space-y-1 transition-all duration-200"
                  >
                    <div className="text-3xl font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                      {score[0]}
                    </div>
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {score[1]}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Section 2: Smart-Work Playbook */}
        {activeSection === "playbook" && (
          <div className="space-y-4">
            {tips.s &&
              tips.s.map((item, idx) => (
                <div
                  key={idx}
                  className="hover-lift rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 shadow-xs space-y-2 hover:border-indigo-400/80 transition-all duration-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold font-mono text-xs flex items-center justify-center border border-indigo-200/60 dark:border-indigo-800/60">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                      {item[0]}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 pl-8">
                    {item[1]}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 pl-8 leading-relaxed font-normal">
                    {item[2]}
                  </p>
                </div>
              ))}
          </div>
        )}

        {/* Section 3: Speed Toolkit */}
        {activeSection === "toolkit" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.k &&
              tips.k.map((tool, idx) => (
                <div
                  key={idx}
                  className="hover-lift p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-2 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                      Tool {idx + 1}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                      {tool[1]}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    {tool[0]}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {tool[2]}
                  </p>
                </div>
              ))}
          </div>
        )}

        {/* Section 4: Do's & Don'ts */}
        {activeSection === "dodont" && (
          <div className="space-y-4">
            {tips.d &&
              tips.d.map((pair, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 shadow-xs"
                >
                  <div className="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/40 text-xs text-emerald-950 dark:text-emerald-200 space-y-1.5 leading-relaxed">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                      <CheckIcon size={14} /> DO
                    </div>
                    <div>{pair[0]}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/40 text-xs text-rose-950 dark:text-rose-200 space-y-1.5 leading-relaxed">
                    <div className="font-bold flex items-center gap-1.5 text-rose-700 dark:text-rose-400">
                      <XIcon size={14} /> DON&apos;T
                    </div>
                    <div>{pair[1]}</div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Section 5: Exam Day Time Pacing */}
        {activeSection === "examday" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Real Exam Day Time-Budget & Pacing Strategy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
                How toppers partition their 60 minutes in Tier-I to maximize attempts without rushing errors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tips.e &&
                tips.e.map((phase, idx) => (
                  <div
                    key={idx}
                    className="hover-lift p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400">
                        {phase[0]}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                        {phase[1]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {phase[2]}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Section 6: Weekly Study Rhythm */}
        {activeSection === "weekly" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              Structured Weekly Study Cadence
            </h3>
            <div className="space-y-3">
              {tips.w &&
                tips.w.map((item, idx) => (
                  <div
                    key={idx}
                    className="hover-lift p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all duration-150"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400">
                        {item[0]}
                      </span>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {item[1]}
                      </div>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-medium sm:text-right">
                      {item[2]}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Section 7: Master Checklist */}
        {activeSection === "checklist" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              Pre-Exam Mastery Checklist
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tips.c &&
                tips.c.map((item, idx) => (
                  <div
                    key={idx}
                    className="hover-lift flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 transition-all duration-150"
                  >
                    <span className="w-5 h-5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60 dark:border-emerald-800/60">
                      <CheckIcon size={14} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Section 8: Universal Habits */}
        {activeSection === "universal" && (
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Universal Top-10 Ranker Habits
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
                Foundational execution principles common across all 4 subjects for AIR 1 to 100 qualifiers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {universalHabits.map((habit, idx) => (
                <div
                  key={idx}
                  className="hover-lift p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2 transition-all duration-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-200/60 dark:border-amber-800/60">
                      ★
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                      {habit[0]}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 pl-8 leading-relaxed font-normal">
                    {habit[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
