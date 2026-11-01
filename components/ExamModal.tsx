"use client";

import { useEffect } from "react";
import { XIcon, AlertCircleIcon } from "./icons";

interface ExamModalProps {
  isOpen: boolean;
  type: "pause" | "submit" | "exit" | "expire";
  title: string;
  description: string;
  stats?: {
    answered: number;
    marked: number;
    unanswered: number;
    total: number;
  };
  confirmLabel: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function ExamModal({
  isOpen,
  type,
  title,
  description,
  stats,
  confirmLabel,
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}: ExamModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onCancel) {
        onCancel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget && onCancel) {
          onCancel();
        }
      }}
    >
      <div className="relative w-full max-w-md rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-start gap-3.5">
          <div
            className={`p-2.5 rounded-2xl shrink-0 ${
              type === "submit"
                ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-850"
                : type === "expire"
                ? "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-850"
                : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-850"
            }`}
          >
            <AlertCircleIcon size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
              {title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-normal">
              {description}
            </p>
          </div>
          {onCancel && (
            <button
              onClick={onCancel}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <XIcon size={18} />
            </button>
          )}
        </div>

        {/* Optional Stats Overview (for Submit dialog) */}
        {stats && (
          <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center font-mono">
            <div>
              <div className="text-lg font-bold tabular-nums text-emerald-700 dark:text-emerald-400">
                {stats.answered}
              </div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Answered</div>
            </div>
            <div>
              <div className="text-lg font-bold tabular-nums text-purple-700 dark:text-purple-400">
                {stats.marked}
              </div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Marked</div>
            </div>
            <div>
              <div className="text-lg font-bold tabular-nums text-rose-700 dark:text-rose-400">
                {stats.unanswered}
              </div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Unanswered</div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-2.5 pt-2">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
            >
              {cancelLabel}
            </button>
          )}
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150 ${
              type === "submit"
                ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/25"
                : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/25"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
