"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MockSummary } from "@/lib/types";
import { getLatestResultForMock } from "@/lib/storage";
import { ClockIcon, AwardIcon, ChevronRightIcon, EyeIcon } from "./icons";

interface MockCardProps {
  mock: MockSummary;
}

export function MockCard({ mock }: MockCardProps) {
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  useEffect(() => {
    const result = getLatestResultForMock(mock.id);
    if (result) {
      const id = requestAnimationFrame(() => {
        setLastScore(result.totalScore);
        setAccuracy(result.accuracy);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [mock.id]);

  const levelColor =
    mock.level === "Beginner"
      ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/80"
      : mock.level === "Intermediate"
      ? "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/80"
      : "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/80";

  return (
    <div className="hover-lift relative group rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-400/80 dark:hover:border-indigo-500/80 transition-all duration-300 flex flex-col justify-between">
      {/* Top Tag & Level */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            MOCK {String(mock.id).padStart(2, "0")} · TIER-I
          </span>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${levelColor}`}>
            {mock.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {mock.title}
        </h3>

        {/* Summary Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-normal">
          Full 100-question timed exam across Reasoning, General Awareness, Maths, and English with instant question checks and a detailed scorecard.
        </p>

        {/* Section Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-5 text-[11px] font-medium text-slate-700 dark:text-slate-200">
          <div className="px-2 py-1.5 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-center">
            🧩 Reas: 25Q
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-center">
            🌍 GA: 25Q
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-center">
            📐 Maths: 25Q
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-center">
            📖 Eng: 25Q
          </div>
        </div>

        {/* Test Spec Highlights */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-200/80 dark:border-slate-800">
          <span className="flex items-center gap-1.5">
            <ClockIcon size={14} className="text-indigo-600 dark:text-indigo-400" />
            60 Mins
          </span>
          <span className="flex items-center gap-1.5">
            <AwardIcon size={14} className="text-amber-500" />
            200 Marks
          </span>
          <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
            +2.0 / −0.50
          </span>
        </div>

        {/* Previous Attempt if available */}
        {lastScore !== null && (
          <div className="mt-3 py-1.5 px-3 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-900/60 flex items-center justify-between text-xs">
            <span className="font-medium text-slate-700 dark:text-slate-300">Last Score:</span>
            <span className="font-bold text-indigo-700 dark:text-indigo-300 font-mono">
              {lastScore} / 200 ({accuracy}% Acc)
            </span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center gap-2 pt-2">
        <Link
          href={`/mock/${mock.id}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-sm shadow-indigo-600/20 hover:shadow-md hover:shadow-indigo-600/30 transition-all duration-200"
        >
          {lastScore !== null ? "Retake Test" : "Start Test"}
          <ChevronRightIcon size={16} />
        </Link>
        <Link
          href={`/mock/${mock.id}/key`}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-150"
          title="View Answer Key & Detailed Solutions"
        >
          <EyeIcon size={14} />
          Key
        </Link>
      </div>
    </div>
  );
}
