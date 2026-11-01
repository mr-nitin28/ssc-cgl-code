"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { MockTest, Question, ExamResult } from "@/lib/types";
import { saveExamResult, getActiveExam, clearActiveExam, saveActiveExam } from "@/lib/storage";
import { calculateExamResult } from "@/lib/score-calculator";
import { TimerHeader } from "./TimerHeader";
import { QuestionPalette } from "./QuestionPalette";
import { ExamModal } from "./ExamModal";
import { Scorecard } from "./Scorecard";
import {
  ChevronRightIcon,
  EyeIcon,
  CheckIcon,
  XIcon,
  BookmarkIcon,
} from "./icons";
import Link from "next/link";

interface ExamSimulatorProps {
  mock: MockTest;
}

export function ExamSimulator({ mock }: ExamSimulatorProps) {
  const router = useRouter();
  const [hasStarted, setHasStarted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({});
  const [quickChecked, setQuickChecked] = useState<Record<number, boolean>>({});

  // 4 sections x 15 mins (900 seconds)
  const [sectionTimes, setSectionTimes] = useState<number[]>([900, 900, 900, 900]);
  const [isPaused, setIsPaused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<ExamResult | null>(null);
  const [showPaletteMobile, setShowPaletteMobile] = useState(false);

  // Modals
  const [modalType, setModalType] = useState<"pause" | "submit" | "exit" | "expire" | null>(null);

  // Timer reference
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  // Helper to determine exact section index from global question index
  const getSectionIndexForQuestion = useCallback(
    (globalIdx: number): number => {
      let count = 0;
      for (let s = 0; s < mock.sections.length; s++) {
        count += mock.sections[s].questions.length;
        if (globalIdx < count) return s;
      }
      return 0;
    },
    [mock.sections]
  );

  // Helpers to navigate questions
  const getQuestionByGlobalIndex = useCallback(
    (globalIdx: number): Question | null => {
      let count = 0;
      for (const sec of mock.sections) {
        if (globalIdx < count + sec.questions.length) {
          return sec.questions[globalIdx - count];
        }
        count += sec.questions.length;
      }
      return null;
    },
    [mock.sections]
  );

  // Reference to hold fresh state snapshots for timer and background callbacks
  const stateRef = useRef({
    sectionTimes,
    activeSection,
    activeQuestion,
    answers,
    markedForReview,
    visited,
    quickChecked,
    hasStarted,
    isSubmitted,
  });

  useEffect(() => {
    stateRef.current = {
      sectionTimes,
      activeSection,
      activeQuestion,
      answers,
      markedForReview,
      visited,
      quickChecked,
      hasStarted,
      isSubmitted,
    };
  });

  const handleFinalSubmit = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    const current = stateRef.current;
    if (current.isSubmitted) return;

    const timeSpent = 3600 - current.sectionTimes.reduce((a, b) => a + b, 0);

    const examState = {
      mockId: mock.id,
      startedAt: startTimeRef.current || Date.now() - Math.max(0, timeSpent) * 1000,
      completedAt: Date.now(),
      isSubmitted: true,
      timeRemainingSeconds: 0,
      sectionTimes: current.sectionTimes,
      activeSection: current.activeSection,
      activeQuestion: current.activeQuestion,
      answers: current.answers,
      markedForReview: current.markedForReview,
      visited: current.visited,
      quickChecked: current.quickChecked,
    };

    const result = calculateExamResult(mock, examState, Math.max(0, timeSpent));
    saveExamResult(result);
    clearActiveExam(mock.id);
    setSubmittedResult(result);
    setIsSubmitted(true);
    setModalType(null);
  }, [mock]);

  useEffect(() => {
    if (startTimeRef.current === 0) {
      startTimeRef.current = Date.now();
    }
  }, []);

  // Check if saved state exists in localStorage
  useEffect(() => {
    const saved = getActiveExam(mock.id);
    if (saved && !saved.isSubmitted) {
      const qIdx = saved.activeQuestion || 0;
      const sIdx = saved.activeSection !== undefined ? saved.activeSection : getSectionIndexForQuestion(qIdx);

      const id = requestAnimationFrame(() => {
        setAnswers(saved.answers || {});
        setMarkedForReview(saved.markedForReview || {});
        setVisited(saved.visited || {});
        setActiveSection(sIdx);
        setActiveQuestion(qIdx);
        setSectionTimes(saved.sectionTimes || [900, 900, 900, 900]);
        setQuickChecked(saved.quickChecked || {});
        setHasStarted(true);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [mock.id, getSectionIndexForQuestion]);

  // Autosave active exam progress to localStorage
  useEffect(() => {
    if (hasStarted && !isSubmitted) {
      const current = stateRef.current;
      saveActiveExam({
        mockId: mock.id,
        startedAt: startTimeRef.current || Date.now(),
        completedAt: 0,
        isSubmitted: false,
        timeRemainingSeconds: current.sectionTimes[current.activeSection] || 0,
        sectionTimes: current.sectionTimes,
        activeSection: current.activeSection,
        activeQuestion: current.activeQuestion,
        answers: current.answers,
        markedForReview: current.markedForReview,
        visited: current.visited,
        quickChecked: current.quickChecked,
      });
    }
  }, [
    mock.id,
    hasStarted,
    isSubmitted,
    answers,
    markedForReview,
    visited,
    quickChecked,
    activeSection,
    activeQuestion,
    sectionTimes,
  ]);

  // Countdown timer tick per active section
  useEffect(() => {
    if (!hasStarted || isPaused || isSubmitted) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setSectionTimes((prev) => {
        if (prev[activeSection] <= 0) return prev;
        const next = [...prev];
        next[activeSection] = Math.max(0, next[activeSection] - 1);
        return next;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [hasStarted, isPaused, isSubmitted, activeSection]);

  // Section expiry handler
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;
    if (sectionTimes[activeSection] === 0) {
      if (activeSection < mock.sections.length - 1) {
        const nextSec = activeSection + 1;
        const nextSecStart = mock.sections
          .slice(0, nextSec)
          .reduce((acc, s) => acc + s.questions.length, 0);
        const nextQ = getQuestionByGlobalIndex(nextSecStart);

        const id = requestAnimationFrame(() => {
          setActiveSection(nextSec);
          setActiveQuestion(nextSecStart);
          if (nextQ) {
            setVisited((prev) => ({ ...prev, [nextQ.id]: true }));
          }
        });
        return () => cancelAnimationFrame(id);
      } else {
        handleFinalSubmit();
      }
    }
  }, [sectionTimes, activeSection, hasStarted, isSubmitted, mock.sections, handleFinalSubmit, getQuestionByGlobalIndex]);

  const currentQuestion = getQuestionByGlobalIndex(activeQuestion);
  const currentSection = mock.sections[activeSection] || mock.sections[0];
  const currentSectionStartIdx = mock.sections
    .slice(0, activeSection)
    .reduce((acc, s) => acc + s.questions.length, 0);
  const localQuestionNum = Math.min(
    currentSection.questions.length,
    Math.max(1, activeQuestion - currentSectionStartIdx + 1)
  );

  const handleStartExam = () => {
    setHasStarted(true);
    startTimeRef.current = Date.now();
    const firstQ = mock.sections[0]?.questions[0];
    if (firstQ) {
      setVisited({ [firstQ.id]: true });
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQuestion || isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const handleClearResponse = () => {
    if (!currentQuestion || isSubmitted) return;
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
    setQuickChecked((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  const handleToggleMarkReview = () => {
    if (!currentQuestion || isSubmitted) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const handleNextQuestion = () => {
    if (activeQuestion < mock.totalQuestions - 1) {
      const nextIdx = activeQuestion + 1;
      const nextQ = getQuestionByGlobalIndex(nextIdx);
      setActiveQuestion(nextIdx);
      setActiveSection(getSectionIndexForQuestion(nextIdx));
      if (nextQ) {
        setVisited((prev) => ({ ...prev, [nextQ.id]: true }));
      }
    }
  };

  const handlePrevQuestion = () => {
    if (activeQuestion > 0) {
      const prevIdx = activeQuestion - 1;
      const prevQ = getQuestionByGlobalIndex(prevIdx);
      setActiveQuestion(prevIdx);
      setActiveSection(getSectionIndexForQuestion(prevIdx));
      if (prevQ) {
        setVisited((prev) => ({ ...prev, [prevQ.id]: true }));
      }
    }
  };

  const handleJumpToQuestion = (globalIdx: number) => {
    const clampedIdx = Math.max(0, Math.min(mock.totalQuestions - 1, globalIdx));
    const targetQ = getQuestionByGlobalIndex(clampedIdx);
    setActiveQuestion(clampedIdx);
    setActiveSection(getSectionIndexForQuestion(clampedIdx));
    if (targetQ) {
      setVisited((prev) => ({ ...prev, [targetQ.id]: true }));
    }
    setShowPaletteMobile(false);
  };

  const handleSelectSection = (sIdx: number) => {
    const clampedSection = Math.max(0, Math.min(mock.sections.length - 1, sIdx));
    setActiveSection(clampedSection);
    const startQ = mock.sections
      .slice(0, clampedSection)
      .reduce((acc, s) => acc + s.questions.length, 0);
    const targetQ = getQuestionByGlobalIndex(startQ);
    setActiveQuestion(startQ);
    if (targetQ) {
      setVisited((prev) => ({ ...prev, [targetQ.id]: true }));
    }
  };

  const handleToggleQuickCheck = () => {
    if (!currentQuestion) return;
    setQuickChecked((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  // If already submitted, display complete Scorecard & detailed Solution Review
  if (isSubmitted && submittedResult) {
    return (
      <Scorecard
        mock={mock}
        result={submittedResult}
        answers={answers}
        onRetake={() => {
          clearActiveExam(mock.id);
          setAnswers({});
          setMarkedForReview({});
          setVisited({});
          setQuickChecked({});
          setSectionTimes([900, 900, 900, 900]);
          setActiveSection(0);
          setActiveQuestion(0);
          startTimeRef.current = Date.now();
          setSubmittedResult(null);
          setIsSubmitted(false);
          setHasStarted(true);
        }}
      />
    );
  }

  // Pre-test Briefing Screen
  if (!hasStarted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            ← Back to All Mock Tests
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/90 dark:border-indigo-800/80 mb-3 uppercase tracking-wider">
              {mock.pattern}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              {mock.title}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
              Full-length timed practice examination matching the exact Staff Selection Commission Tier-I computer-based test (CBT) scheme.
            </p>
          </div>

          {/* Test Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-center">
              <div className="text-2xl font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                {mock.totalQuestions}
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                Questions
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-center">
              <div className="text-2xl font-bold font-mono tabular-nums text-amber-500">
                {mock.maxScore}
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                Max Marks
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-center">
              <div className="text-2xl font-bold font-mono tabular-nums text-teal-500">
                {mock.durationMinutes}
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                Minutes
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-center">
              <div className="text-2xl font-bold font-mono tabular-nums text-rose-500">
                −0.50
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                Penalty / Wrong
              </div>
            </div>
          </div>

          {/* Sectional Breakdown Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Exam Structure (4 Timed Sections)
            </h3>
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Section</th>
                    <th className="py-3 px-4">Questions</th>
                    <th className="py-3 px-4">Marks</th>
                    <th className="py-3 px-4">Target Pace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                  {mock.sections.map((sec) => (
                    <tr key={sec.index} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-100">
                        {sec.name}
                      </td>
                      <td className="py-3 px-4 font-mono">{sec.questions.length} Q</td>
                      <td className="py-3 px-4 font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                        {sec.maxMarks} Marks
                      </td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-400">15 Minutes</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Guidelines Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
              <span>⚡</span> Important Test Instructions
            </h4>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              <li>Each question carries 2 marks. There is a negative marking of 0.50 marks for every wrong answer.</li>
              <li>You can navigate questions via the Question Palette or Next/Previous buttons.</li>
              <li>Use the &quot;Mark for Review&quot; toggle if you want to revisit a question before final submission.</li>
              <li>In Practice Mode, use the Eye icon on any question to view instant explanations.</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <button
              onClick={handleStartExam}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-white shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-200"
            >
              Start Mock Examination Now
              <ChevronRightIcon size={18} />
            </button>
            <Link
              href={`/mock/${mock.id}/key`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
            >
              <EyeIcon size={16} />
              View Answer Key & Solutions
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Active Exam View
  const answeredCount = Object.keys(answers).length;
  const isMarked = currentQuestion ? !!markedForReview[currentQuestion.id] : false;
  const userSelected = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isQuickChecked = currentQuestion ? !!quickChecked[currentQuestion.id] : false;
  const isLastQuestion = activeQuestion === mock.totalQuestions - 1;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Timer Bar */}
      <TimerHeader
        examTitle={mock.title}
        sectionName={currentSection.name}
        sectionIndex={activeSection}
        totalSections={mock.sections.length}
        secondsRemaining={sectionTimes[activeSection]}
        totalAnswered={answeredCount}
        totalQuestions={mock.totalQuestions}
        isPaused={isPaused}
        onTogglePause={() => {
          setIsPaused(!isPaused);
          setModalType(!isPaused ? "pause" : null);
        }}
        onSubmitClick={() => setModalType("submit")}
        onBackClick={() => setModalType("exit")}
        onTogglePalette={() => setShowPaletteMobile(!showPaletteMobile)}
      />

      {/* Main Exam Interface Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question Viewer Column (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Section Switcher Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {mock.sections.map((sec, sIdx) => {
                const isActive = sIdx === activeSection;
                const secAnsCount = sec.questions.filter((q) => answers[q.id] !== undefined).length;
                return (
                  <button
                    key={sec.index}
                    onClick={() => handleSelectSection(sIdx)}
                    type="button"
                    className={`flex items-center justify-between gap-1.5 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-xs font-bold"
                        : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-300"
                    }`}
                  >
                    <span className="truncate">{sec.shortName}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold shrink-0 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {secAnsCount}/{sec.questions.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Question Card */}
            {currentQuestion ? (
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-5 sm:p-7 shadow-xs space-y-6">
                {/* Question Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
                      QUESTION {localQuestionNum} of {currentSection.questions.length}
                    </span>
                    <span className="text-xs font-medium font-mono text-slate-500 dark:text-slate-400">
                      · Marks: +2.00 / −0.50
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleToggleQuickCheck}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all duration-150 ${
                        isQuickChecked
                          ? "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800 font-semibold"
                          : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-100"
                      }`}
                      title="Quick Answer Check"
                    >
                      <EyeIcon size={14} />
                      <span className="hidden sm:inline">
                        {isQuickChecked ? "Hide Check" : "Check Answer"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Passage / Context if applicable */}
                {currentQuestion.passage && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-1.5">
                    <div className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                      <span>{currentQuestion.passage.badge}</span>
                      <span>Directions for Questions {currentQuestion.passage.startQ} - {currentQuestion.passage.endQ}:</span>
                    </div>
                    <p className="italic text-slate-600 dark:text-slate-300">
                      {currentQuestion.passage.text}
                    </p>
                  </div>
                )}

                {/* Question Stem */}
                <div className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                  {currentQuestion.text}
                </div>

                {/* 4 Options Grid */}
                <div className="space-y-3 pt-2">
                  {currentQuestion.options.map((opt, optIdx) => {
                    const isSelected = userSelected === optIdx;
                    const letter = "ABCD"[optIdx];

                    // Option styling
                    let optStyle =
                      "border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/90 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30 text-slate-800 dark:text-slate-200";

                    if (isQuickChecked) {
                      if (optIdx === currentQuestion.correctAnswer) {
                        optStyle = "border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/80 font-medium";
                      } else if (isSelected) {
                        optStyle = "border-rose-500 bg-rose-50/90 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/80 font-medium";
                      }
                    } else if (isSelected) {
                      optStyle =
                        "border-indigo-600 dark:border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-100 ring-2 ring-indigo-500/80 font-medium shadow-xs";
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`w-full flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border text-left text-sm sm:text-base font-medium transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.995] ${optStyle}`}
                      >
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold font-mono shrink-0 transition-colors ${
                            isSelected
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="flex-1 text-slate-800 dark:text-slate-100">{opt}</span>
                        {isQuickChecked && optIdx === currentQuestion.correctAnswer && (
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center gap-1 font-mono">
                            <CheckIcon size={16} /> Correct
                          </span>
                        )}
                        {isQuickChecked && isSelected && optIdx !== currentQuestion.correctAnswer && (
                          <span className="text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center gap-1 font-mono">
                            <XIcon size={16} /> Wrong
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Check Answer Box if toggled */}
                {isQuickChecked && (
                  <div className="mt-4 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 animate-in fade-in duration-150">
                    <div>
                      <b className="text-indigo-900 dark:text-indigo-300">Why: </b>
                      {currentQuestion.explanation}
                    </div>
                    {currentQuestion.tip && (
                      <div className="pt-1.5 border-t border-indigo-100 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium">
                        <b>💡 Top Tip: </b>
                        {currentQuestion.tip}
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons Toolbar */}
                <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleToggleMarkReview}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                        isMarked
                          ? "bg-purple-50 dark:bg-purple-950/70 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 shadow-xs"
                          : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <BookmarkIcon size={16} className={isMarked ? "fill-purple-600 text-purple-600" : ""} />
                      <span>{isMarked ? "Marked for Review" : "Mark for Review"}</span>
                    </button>

                    {userSelected !== undefined && (
                      <button
                        onClick={handleClearResponse}
                        className="px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                      >
                        Clear Response
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={activeQuestion === 0}
                      className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none transition-all duration-150"
                    >
                      Previous
                    </button>

                    {isLastQuestion ? (
                      <button
                        onClick={() => setModalType("submit")}
                        className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
                      >
                        Submit Examination 🏁
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
                      >
                        Save & Next →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Desktop Question Palette Column (Right 4 cols) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-20">
            <QuestionPalette
              sections={mock.sections}
              activeSection={activeSection}
              activeQuestion={activeQuestion}
              answers={answers}
              markedForReview={markedForReview}
              visited={visited}
              onSelectQuestion={handleJumpToQuestion}
              onSelectSection={handleSelectSection}
            />
          </div>
        </div>
      </main>

      {/* Mobile Question Palette Drawer */}
      {showPaletteMobile && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-5 max-h-[85vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Question Palette
              </h3>
              <button
                onClick={() => setShowPaletteMobile(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <XIcon size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <QuestionPalette
                sections={mock.sections}
                activeSection={activeSection}
                activeQuestion={activeQuestion}
                answers={answers}
                markedForReview={markedForReview}
                visited={visited}
                onSelectQuestion={handleJumpToQuestion}
                onSelectSection={handleSelectSection}
              />
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modals */}
      <ExamModal
        isOpen={modalType === "pause"}
        type="pause"
        title="Examination Paused"
        description="The timer is currently frozen. Question contents are concealed to protect test integrity. You can resume at any time."
        confirmLabel="Resume Test"
        onConfirm={() => {
          setIsPaused(false);
          setModalType(null);
        }}
      />

      <ExamModal
        isOpen={modalType === "submit"}
        type="submit"
        title="Submit Examination Paper?"
        description="Are you sure you want to finish and submit your mock examination? Once submitted, your answers will be evaluated and your detailed scorecard will be generated."
        stats={{
          answered: answeredCount,
          unanswered: mock.totalQuestions - answeredCount,
          marked: Object.keys(markedForReview).filter((k) => markedForReview[Number(k)]).length,
          total: mock.totalQuestions,
        }}
        confirmLabel="Confirm & Submit Exam"
        cancelLabel="Return to Exam"
        onConfirm={handleFinalSubmit}
        onCancel={() => setModalType(null)}
      />

      <ExamModal
        isOpen={modalType === "exit"}
        type="exit"
        title="Exit Examination?"
        description="Your progress has been autosaved. You can resume this session anytime from the dashboard."
        confirmLabel="Exit to Dashboard"
        cancelLabel="Continue Test"
        onConfirm={() => {
          router.push("/");
        }}
        onCancel={() => setModalType(null)}
      />
    </div>
  );
}
