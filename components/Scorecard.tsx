"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MockTest, ExamResult } from "@/lib/types";
import {
  AwardIcon,
  CheckIcon,
  XIcon,
  RotateCcwIcon,
  EyeIcon,
} from "./icons";

interface ScorecardProps {
  mock: MockTest;
  result: ExamResult;
  answers: Record<number, number>;
  onRetake: () => void;
}

export function Scorecard({ mock, result, answers, onRetake }: ScorecardProps) {
  const [filter, setFilter] = useState<"all" | "wrong" | "unattempted" | "correct">("all");
  const [reviewSection, setReviewSection] = useState<number>(0);
  const [completedTime, setCompletedTime] = useState<string>("");

  useEffect(() => {
    if (result.completedAt) {
      const timeStr = new Date(result.completedAt).toLocaleTimeString();
      const id = requestAnimationFrame(() => setCompletedTime(timeStr));
      return () => cancelAnimationFrame(id);
    }
  }, [result.completedAt]);

  // Filter questions for the active section
  const currentSection = mock.sections[reviewSection];
  const allSectionQuestions = currentSection ? currentSection.questions : [];

  const filteredQuestions = allSectionQuestions.filter((q) => {
    const userChoice = answers[q.id];
    const isAttempted = userChoice !== undefined && userChoice >= 0;
    const isCorrect = isAttempted && userChoice === q.correctAnswer;
    const isWrong = isAttempted && userChoice !== q.correctAnswer;

    if (filter === "wrong") return isWrong;
    if (filter === "unattempted") return !isAttempted;
    if (filter === "correct") return isCorrect;
    return true;
  });

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            ← Back to All Mock Tests
          </Link>
          <div className="text-xs font-medium text-slate-600 dark:text-slate-300 font-mono">
            {completedTime ? `Evaluation generated at ${completedTime}` : "Evaluation complete"}
          </div>
        </div>

        {/* Hero Score Box */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
                <AwardIcon size={14} /> OFFICIAL TIER-I SCORECARD
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                {mock.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal">
                100 Questions · 200 Max Marks · Completed in {formatTime(result.timeSpentSeconds)}
              </p>
            </div>

            {/* Big Score Card */}
            <div className="text-center p-6 rounded-3xl bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white shadow-xl shadow-indigo-600/25 min-w-[200px]">
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1">
                Your Total Score
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono tabular-nums">
                {result.totalScore}
              </div>
              <div className="text-xs font-medium text-indigo-150 mt-1">
                out of 200.0 Marks
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-slate-150 dark:border-slate-800 text-center">
            <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-900/60">
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-emerald-700 dark:text-emerald-300">
                {result.totalCorrect}
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                Correct (✓)
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/50 border border-rose-200/80 dark:border-rose-900/60">
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-rose-700 dark:text-rose-300">
                {result.totalIncorrect}
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                Incorrect (✗)
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-800 dark:text-slate-200">
                {result.totalUnattempted}
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                Unattempted
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-900/60">
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-indigo-700 dark:text-indigo-300">
                {result.accuracy}%
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                Accuracy
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-slate-150 dark:border-slate-800">
            <button
              onClick={onRetake}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-white shadow-sm shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-150"
            >
              <RotateCcwIcon size={16} /> Retake Test
            </button>
            <Link
              href={`/mock/${mock.id}/key`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
            >
              <EyeIcon size={16} /> Open Answer Key
            </Link>
            <Link
              href="/"
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* Sectional Performance Cards */}
        <div className="space-y-4">
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100">
            Section-by-Section Score Breakdown
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {result.sectionalScores.map((sec) => (
              <div
                key={sec.sectionIndex}
                className="hover-lift rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-5 shadow-xs space-y-3 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                    {sec.shortName}
                  </span>
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
                    {sec.score}/50
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {sec.name}
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-150 dark:border-slate-800">
                  <div className="flex justify-between font-mono">
                    <span>Correct (✓):</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{sec.correct}</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Incorrect (✗):</span>
                    <span className="font-semibold text-rose-600 dark:text-rose-400">{sec.incorrect}</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Accuracy:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{sec.accuracy}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In-depth Review Mode */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/90 dark:border-slate-800/90">
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Detailed Question-by-Question Review
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Inspect your attempted choices, learn from mistakes, and read topper tips for every question.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold border border-slate-200/60 dark:border-slate-700/60">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 ${
                  filter === "all" ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-300 font-bold shadow-xs" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("wrong")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 ${
                  filter === "wrong" ? "bg-rose-500 text-white font-bold shadow-xs" : "text-slate-600 dark:text-slate-300 hover:text-rose-500"
                }`}
              >
                Wrong (✗)
              </button>
              <button
                onClick={() => setFilter("unattempted")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 ${
                  filter === "unattempted" ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-300 font-bold shadow-xs" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Unattempted
              </button>
              <button
                onClick={() => setFilter("correct")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 ${
                  filter === "correct" ? "bg-emerald-500 text-white font-bold shadow-xs" : "text-slate-600 dark:text-slate-300 hover:text-emerald-500"
                }`}
              >
                Correct (✓)
              </button>
            </div>
          </div>

          {/* Section Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {mock.sections.map((sec, sIdx) => {
              const isAct = sIdx === reviewSection;
              return (
                <button
                  key={sec.index}
                  onClick={() => setReviewSection(sIdx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                    isAct
                      ? "bg-indigo-600 text-white shadow-xs font-bold"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {sec.shortName} (25 Q)
                </button>
              );
            })}
          </div>

          {/* Questions Review List */}
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-sm text-slate-600 dark:text-slate-300 font-medium">
              🎉 No questions match the &quot;{filter}&quot; filter in this section!
            </div>
          ) : (
            <div className="space-y-6">
              {filteredQuestions.map((q) => {
                const userChoice = answers[q.id];
                const isAttempted = userChoice !== undefined && userChoice >= 0;
                const isCorrect = isAttempted && userChoice === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/60 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400">
                        QUESTION {q.id}
                      </span>
                      {isCorrect ? (
                        <span className="text-xs font-semibold font-mono px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                          <CheckIcon size={12} /> Correct (+2.0)
                        </span>
                      ) : isAttempted ? (
                        <span className="text-xs font-semibold font-mono px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-center gap-1">
                          <XIcon size={12} /> Incorrect (−0.50)
                        </span>
                      ) : (
                        <span className="text-xs font-medium font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          Not Attempted (0.0)
                        </span>
                      )}
                    </div>

                    {q.passage && (
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs italic text-slate-700 dark:text-slate-300">
                        <b>{q.passage.badge} Passage:</b> {q.passage.text}
                      </div>
                    )}

                    <div className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100">
                      {q.text}
                    </div>

                    {/* Options list */}
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isCorrectOption = optIdx === q.correctAnswer;
                        const isUserChoice = userChoice === optIdx;

                        let style = "border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300";
                        if (isCorrectOption) {
                          style = "border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500";
                        } else if (isUserChoice) {
                          style = "border-rose-500 bg-rose-50/90 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 font-semibold ring-1 ring-rose-500";
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm ${style}`}
                          >
                            <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold font-mono flex items-center justify-center text-xs shrink-0">
                              {"ABCD"[optIdx]}
                            </span>
                            <span className="flex-1">{opt}</span>
                            {isCorrectOption && (
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center gap-1 font-mono">
                                <CheckIcon size={14} /> Correct Answer
                              </span>
                            )}
                            {isUserChoice && !isCorrectOption && (
                              <span className="text-rose-600 dark:text-rose-400 font-semibold text-xs flex items-center gap-1 font-mono">
                                <XIcon size={14} /> Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation & Topper Tip */}
                    <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/50 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-1.5 leading-relaxed">
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
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
