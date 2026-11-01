"use client";

import { Section, QuestionStatus } from "@/lib/types";
import { BrainIcon, CompassIcon, BarChartIcon, BookOpenIcon } from "./icons";

interface QuestionPaletteProps {
  sections: Section[];
  activeSection: number;
  activeQuestion: number;
  answers: Record<number, number>;
  markedForReview: Record<number, boolean>;
  visited: Record<number, boolean>;
  onSelectQuestion: (questionIndex: number) => void;
  onSelectSection?: (sectionIndex: number) => void;
}

function getSubjectMeta(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("reason") || lower.includes("intell")) {
    return {
      title: "Reasoning & Intelligence",
      icon: BrainIcon,
    };
  }
  if (lower.includes("general") || lower.includes("aware") || lower.includes("gk")) {
    return {
      title: "General Awareness",
      icon: CompassIcon,
    };
  }
  if (lower.includes("math") || lower.includes("quant") || lower.includes("aptitude")) {
    return {
      title: "Quantitative Aptitude",
      icon: BarChartIcon,
    };
  }
  if (lower.includes("english") || lower.includes("comprehen")) {
    return {
      title: "English Comprehension",
      icon: BookOpenIcon,
    };
  }
  return {
    title: name,
    icon: BrainIcon,
  };
}

export function QuestionPalette({
  sections,
  activeSection,
  activeQuestion,
  answers,
  markedForReview,
  visited,
  onSelectQuestion,
}: QuestionPaletteProps) {
  // Current active section only
  const currentSection = sections[activeSection] || sections[0];
  const sectionQuestions = currentSection ? currentSection.questions : [];
  const sectionStartIdx = sections
    .slice(0, activeSection)
    .reduce((acc, s) => acc + s.questions.length, 0);

  const totalSecQuestions = sectionQuestions.length || 25;
  const subjectMeta = getSubjectMeta(currentSection ? currentSection.name : "Section");
  const SubjectIcon = subjectMeta.icon;

  // Compute status counts exclusively for the active subject
  let answeredCount = 0;
  let notAnsweredCount = 0;
  let notVisitedCount = 0;
  let markedCount = 0;
  let answeredAndMarkedCount = 0;

  const sectionStatuses: {
    localIdx: number;
    globalIdx: number;
    qId: number;
    status: QuestionStatus;
  }[] = [];

  sectionQuestions.forEach((q, idx) => {
    const globalIdx = sectionStartIdx + idx;
    const qId = q.id;
    const isAns = answers[qId] !== undefined && answers[qId] >= 0;
    const isMarked = !!markedForReview[qId];
    const isVis = !!visited[qId];

    let status: QuestionStatus = "not_visited";
    if (isAns && isMarked) {
      status = "answered_marked_review";
      answeredAndMarkedCount++;
    } else if (isMarked) {
      status = "marked_review";
      markedCount++;
    } else if (isAns) {
      status = "answered";
      answeredCount++;
    } else if (isVis) {
      status = "not_answered";
      notAnsweredCount++;
    } else {
      status = "not_visited";
      notVisitedCount++;
    }

    sectionStatuses.push({
      localIdx: idx,
      globalIdx,
      qId,
      status,
    });
  });

  const totalAttempted = answeredCount + answeredAndMarkedCount;
  const completionPercentage = Math.round((totalAttempted / totalSecQuestions) * 100);

  // Styling helper: uses ring-inset and border styling strictly inside the button box model
  // to completely eliminate border overlap with headers or outer frame dividers
  const getStatusColor = (status: QuestionStatus, isCurrent: boolean) => {
    let base =
      "relative h-10 sm:h-11 w-full rounded-xl font-bold font-mono text-xs sm:text-sm transition-all duration-150 flex items-center justify-center select-none cursor-pointer focus:outline-none ";

    if (isCurrent) {
      base += "ring-2 ring-inset ring-indigo-600 dark:ring-indigo-400 font-extrabold shadow-sm ";
    } else {
      base += "hover:brightness-95 dark:hover:brightness-110 active:scale-95 ";
    }

    switch (status) {
      case "answered":
        return (
          base +
          (isCurrent
            ? "bg-emerald-600 text-white border border-emerald-700 ring-2 ring-inset ring-white"
            : "bg-emerald-500 text-white border border-emerald-600 shadow-xs")
        );
      case "not_answered":
        return (
          base +
          (isCurrent
            ? "bg-rose-600 text-white border border-rose-700 ring-2 ring-inset ring-white"
            : "bg-rose-500 text-white border border-rose-600 shadow-xs")
        );
      case "marked_review":
        return (
          base +
          (isCurrent
            ? "bg-purple-700 text-white border border-purple-800 ring-2 ring-inset ring-white"
            : "bg-purple-600 text-white border border-purple-700 shadow-xs")
        );
      case "answered_marked_review":
        return (
          base +
          "bg-purple-600 text-white border border-purple-700 shadow-xs after:content-[''] after:absolute after:top-1.5 after:right-1.5 after:w-2 after:h-2 after:bg-emerald-400 after:rounded-full after:ring-1 after:ring-white " +
          (isCurrent ? "ring-2 ring-inset ring-white" : "")
        );
      case "not_visited":
      default:
        return (
          base +
          (isCurrent
            ? "bg-indigo-50/90 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-2 border-indigo-600 dark:border-indigo-400"
            : "bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80")
        );
    }
  };

  return (
    <div className="flex flex-col bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
      {/* Subject Header & Scoped Completion Card */}
      <div className="border-b border-slate-150 dark:border-slate-800 pb-4 space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 shrink-0">
              <SubjectIcon size={18} />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 truncate">
                {subjectMeta.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate">
                Active Subject Palette
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/60 dark:border-indigo-800/60 px-2.5 py-1 rounded-xl shrink-0">
            {totalSecQuestions} Questions
          </span>
        </div>

        {/* Dynamic Completion Chart for Current Subject */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Subject Progress
            </span>
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
              {totalAttempted} / {totalSecQuestions} ({completionPercentage}%)
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-500 dark:to-violet-500 transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* 2x2 Clean Chip Legend (Strictly for this active subject) */}
        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 pt-0.5">
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
            <span className="w-4 h-4 rounded-md bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold shrink-0">
              ✓
            </span>
            <span className="truncate text-[11px]">Answered ({answeredCount})</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
            <span className="w-4 h-4 rounded-md bg-rose-500 text-white flex items-center justify-center text-[9px] font-bold shrink-0">
              •
            </span>
            <span className="truncate text-[11px]">Unanswered ({notAnsweredCount})</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
            <span className="w-4 h-4 rounded-md bg-purple-600 text-white flex items-center justify-center text-[9px] font-bold shrink-0">
              ★
            </span>
            <span className="truncate text-[11px]">Marked ({markedCount + answeredAndMarkedCount})</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
            <span className="w-4 h-4 rounded-md bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center text-[9px] font-bold shrink-0">
              0
            </span>
            <span className="truncate text-[11px]">Not Visited ({notVisitedCount})</span>
          </div>
        </div>
      </div>

      {/* Number System Subheader with safe margin and zero border overlap */}
      <div className="flex items-center justify-between pt-0.5 px-0.5">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-100">
          <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          <span>Questions (1 – {totalSecQuestions})</span>
        </div>
        <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
          Select question
        </span>
      </div>

      {/* Question Number 5x5 Grid with Perfect Margin, Gap & Inset Ring */}
      <div className="pt-1">
        <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
          {sectionStatuses.map((item) => {
            const isCurrent = item.globalIdx === activeQuestion;
            const localNum = item.localIdx + 1;

            return (
              <button
                key={item.qId}
                onClick={() => onSelectQuestion(item.globalIdx)}
                type="button"
                className={getStatusColor(item.status, isCurrent)}
                title={`Question ${localNum} (${currentSection ? currentSection.name : "Section"})`}
              >
                {localNum}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Summary Footer for Current Subject */}
      <div className="pt-3.5 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-medium px-0.5">
        <span>Section Status</span>
        <span className="font-semibold text-slate-800 dark:text-slate-100 font-mono">
          <b className="text-indigo-600 dark:text-indigo-400">{totalAttempted}</b> / {totalSecQuestions} Attempted
        </span>
      </div>
    </div>
  );
}
