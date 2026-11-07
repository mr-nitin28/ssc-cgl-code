"use client";

import React from "react";
import Link from "next/link";
import { AncientHistoryContent } from "./AncientHistoryContent";
import {
  BookOpenIcon,
  AwardIcon,
  DownloadIcon,
} from "./icons";

export function AncientHistoryFullPageView() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navigation Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link
              href="/#ga-modules"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 shadow-xs"
            >
              ← Back to Syllabus Modules
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Staff Selection Commission · CGL 2026 Tier-I & Tier-II</span>
          </div>
        </div>

        {/* Dedicated Ancient History Hero Header */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-2xl p-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-900">
                  🏛️
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 uppercase tracking-wider">
                  SSC CGL 2026 · ANCIENT INDIAN HISTORY FULL MASTER SYLLABUS
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                SSC CGL · प्राचीन भारतीय इतिहास
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                सरल हिंदी में समझें • याद करें • रिवीजन करें
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                प्रागैतिहासिक काल से गुप्त काल और संगम युग तक 9 अध्याय: मुख्य बातें, तुलना सारणियाँ, महत्वपूर्ण तथ्य, 14 आवश्यक शब्दावलियाँ, 10-मिनट त्वरित रिवीजन योजना और 30 अभ्यास प्रश्नों का लाइव परीक्षा सिमुलेटर।
              </p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 italic">
                स्रोत नोट: यह आपके Week One नोट्स का सरल रूप है। ऐतिहासिक दावों और तिथियों की अलग तथ्य-जाँच नहीं की गई है।
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
              <a
                href="/pdfs/SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
                download="SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-white shadow-sm shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-150"
              >
                <DownloadIcon size={16} /> Download Official PDF
              </a>

              <Link
                href="/tips/k"
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-amber-200 dark:border-amber-900/60 bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
              >
                <AwardIcon size={16} className="text-amber-500" />
                GK Topper Playbook
              </Link>

              <Link
                href="/#ga-modules"
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-150"
              >
                <BookOpenIcon size={14} className="text-indigo-600 dark:text-indigo-400" />
                All Subject Syllabuses
              </Link>
            </div>
          </div>
        </div>

        {/* Pure 12-Chapter Full Page View (Without embedded module switcher) */}
        <AncientHistoryContent />
      </div>
    </div>
  );
}
