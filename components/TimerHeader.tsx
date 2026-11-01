"use client";

import { ClockIcon, PauseIcon, PlayIcon, GridIcon } from "./icons";

interface TimerHeaderProps {
  examTitle: string;
  sectionName: string;
  sectionIndex: number;
  totalSections: number;
  secondsRemaining: number;
  totalAnswered: number;
  totalQuestions: number;
  isPaused: boolean;
  onTogglePause: () => void;
  onSubmitClick: () => void;
  onBackClick: () => void;
  onTogglePalette: () => void;
}

export function TimerHeader({
  examTitle,
  sectionName,
  sectionIndex,
  totalSections,
  secondsRemaining,
  totalAnswered,
  totalQuestions,
  isPaused,
  onTogglePause,
  onSubmitClick,
  onBackClick,
  onTogglePalette,
}: TimerHeaderProps) {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const isLowTime = secondsRemaining <= 180; // 3 minutes or less
  const progressPercent = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Back + Exam Title & Section indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackClick}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
            >
              ← Exit
            </button>
            <div>
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate max-w-[160px] sm:max-w-xs md:max-w-md">
                {examTitle}
              </h2>
              <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Section {sectionIndex + 1}/{totalSections}: {sectionName}
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline font-mono tabular-nums">{totalAnswered}/{totalQuestions} Answered ({progressPercent}%)</span>
              </div>
            </div>
          </div>

          {/* Center / Right: Section Timer with visual pulse */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-sm font-mono tabular-nums font-bold transition-all duration-200 ${
                isLowTime
                  ? "bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-300 border-rose-300 dark:border-rose-800 animate-pulse shadow-xs"
                  : "bg-indigo-50/90 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200/90 dark:border-indigo-800/80 shadow-xs"
              }`}
            >
              <ClockIcon size={16} />
              <span>{formatTime(secondsRemaining)}</span>
            </div>

            {/* Pause / Resume Button */}
            <button
              onClick={onTogglePause}
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
              title={isPaused ? "Resume Exam" : "Pause Exam"}
            >
              {isPaused ? <PlayIcon size={14} className="text-emerald-500" /> : <PauseIcon size={14} />}
              <span className="hidden sm:inline">{isPaused ? "Resume" : "Pause"}</span>
            </button>

            {/* Palette Drawer Toggle (Mobile) */}
            <button
              onClick={onTogglePalette}
              className="lg:hidden flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-150"
              title="Toggle Question Palette"
            >
              <GridIcon size={16} />
            </button>

            {/* Submit Button */}
            <button
              onClick={onSubmitClick}
              className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-white shadow-xs shadow-emerald-600/20 hover:shadow-md hover:shadow-emerald-600/30 transition-all duration-150"
            >
              Submit Paper
            </button>
          </div>
        </div>
      </div>

      {/* Thin animated progress indicator */}
      <div className="w-full h-1 bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
}
