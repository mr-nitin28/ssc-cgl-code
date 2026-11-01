"use client";

import { useState } from "react";
import Link from "next/link";
import { MockTest } from "@/lib/types";
import { CheckIcon } from "./icons";

interface AnswerKeyViewerProps {
  mock: MockTest;
}

export function AnswerKeyViewer({ mock }: AnswerKeyViewerProps) {
  const [activeSection, setActiveSection] = useState(0);

  const currentSection = mock.sections[activeSection];
  const questions = currentSection ? currentSection.questions : [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            ← Back to All Mock Tests
          </Link>
          <Link
            href={`/mock/${mock.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-white shadow-xs shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-150"
          >
            Take Test Under Exam Timer →
          </Link>
        </div>

        {/* Header Card */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xs space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 uppercase tracking-wider">
            Official Key & Solution Guide
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            Answer Key — {mock.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Correct answer, a simple step-by-step explanation, and a quick learning tip for every single question. Attempt each question yourself before reading the explanation.
          </p>

          {/* Section Tabs */}
          <div className="pt-4 flex items-center gap-2 overflow-x-auto">
            {mock.sections.map((sec, sIdx) => {
              const isAct = sIdx === activeSection;
              return (
                <button
                  key={sec.index}
                  onClick={() => setActiveSection(sIdx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    isAct
                      ? "bg-indigo-600 text-white shadow-xs font-bold"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-white"
                  }`}
                >
                  {sec.shortName} (25 Q)
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((q) => (
            <div
              key={q.id}
              className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400">
                  QUESTION {q.id} · {currentSection.shortName}
                </span>
                <span className="text-xs font-semibold font-mono px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Correct Option: {q.correctLetter}
                </span>
              </div>

              {q.passage && (
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs italic text-slate-700 dark:text-slate-300">
                  <b>{q.passage.badge} Passage:</b> {q.passage.text}
                </div>
              )}

              <div className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100">
                {q.text}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt, optIdx) => {
                  const isCorrect = optIdx === q.correctAnswer;
                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-2.5 transition-colors ${
                        isCorrect
                          ? "bg-emerald-50/90 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500"
                          : "bg-slate-50/50 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md text-[11px] font-bold font-mono flex items-center justify-center shrink-0 ${
                          isCorrect
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {"ABCD"[optIdx]}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {isCorrect && (
                        <CheckIcon size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Solution box */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/50 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-1.5 leading-relaxed">
                <div>
                  <b className="text-indigo-900 dark:text-indigo-300 font-semibold">Why: </b>
                  {q.explanation}
                </div>
                {q.tip && (
                  <div className="pt-1.5 border-t border-indigo-100 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium">
                    <b>💡 Top Tip: </b>
                    {q.tip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
