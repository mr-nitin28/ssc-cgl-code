"use client";

import { useState } from "react";
import Link from "next/link";
import { PatternItem } from "@/lib/types";
import { ZapIcon, SearchIcon, CheckIcon, ChevronRightIcon } from "./icons";

interface PatternLabViewerProps {
  categories: string[];
  patterns: PatternItem[];
}

export function PatternLabViewer({ categories, patterns }: PatternLabViewerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPatterns = patterns.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchQuery =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.spotTrigger.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.formula.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

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
            {filteredPatterns.length} of {patterns.length} Patterns Available
          </div>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80 uppercase tracking-wider">
              <ZapIcon size={14} /> Interactive Heuristic Lab
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Speed Math & Reasoning Pattern Lab
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              Spot the exam trigger in 3 seconds, instantly recall the shortcut formula, and solve 25 Tier-I maths questions under 15 minutes. Tap any card to reveal formula proofs, example problems, and ⚡ shortcut heuristics.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 space-y-4 pt-6 border-t border-slate-200/80 dark:border-slate-800">
            {/* Search Input */}
            <div className="relative">
              <SearchIcon
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulas, trigonometry shortcuts, ladder fractions, geometry theorems..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat) => {
                const isAct = cat === selectedCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                      isAct
                        ? "bg-indigo-600 text-white shadow-xs font-bold"
                        : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pattern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPatterns.map((pat) => {
            const isExpanded = !!expandedCards[pat.id];

            return (
              <div
                key={pat.id}
                className={`hover-lift rounded-3xl border transition-all duration-200 ${
                  isExpanded
                    ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-slate-900 shadow-md ring-1 ring-indigo-400 dark:ring-indigo-600"
                    : "border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700"
                } p-5 sm:p-6 space-y-4`}
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(pat.id)}
                  aria-expanded={isExpanded}
                  className="w-full cursor-pointer flex items-start justify-between gap-3 text-left group"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                      {pat.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {pat.title}
                    </h3>
                  </div>

                  <span className="p-1 rounded-lg text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors shrink-0">
                    <ChevronRightIcon
                      size={18}
                      className={`transform transition-transform duration-200 ${isExpanded ? "rotate-90 text-indigo-600 dark:text-indigo-400" : ""}`}
                    />
                  </span>
                </button>

                {/* Spot it trigger callout */}
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <b className="text-slate-800 dark:text-slate-100 font-semibold">Spot it: </b>
                  {pat.spotTrigger}
                </div>

                {/* Formula Highlight */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-indigo-700 dark:text-indigo-300 font-semibold border border-slate-200/70 dark:border-slate-700/70">
                  {pat.formula}
                </div>

                {/* Expanded Details: Example problem, Solution, Shortcut */}
                {isExpanded && (
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-3 animate-in fade-in duration-150">
                    {/* Try it problem */}
                    <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                      <b className="font-semibold">Try it: </b> {pat.example}
                    </div>

                    {/* Solution */}
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 font-mono">
                      <CheckIcon size={14} />
                      <span>{pat.solution}</span>
                    </div>

                    {/* Shortcut Tip */}
                    <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/50 text-xs text-indigo-800 dark:text-indigo-300 font-medium leading-relaxed">
                      {pat.shortcutTip}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
