"use client";

import React, { useState } from "react";
import { ancientHistoryMCQs } from "@/data/ancient_history_mcqs";
import { CheckIcon, XIcon, RotateCcwIcon, AwardIcon } from "./icons";

export function AncientHistoryQuiz() {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showFullKey, setShowFullKey] = useState<boolean>(false);

  const totalQuestions = ancientHistoryMCQs.length;
  const answeredCount = Object.keys(userAnswers).length;

  const score = Object.entries(userAnswers).reduce((acc, [qId, selectedIdx]) => {
    const q = ancientHistoryMCQs.find((item) => item.id === Number(qId));
    if (q && q.answerIndex === selectedIdx) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (userAnswers[questionId] !== undefined) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowFullKey(false);
  };

  const getPerformanceFeedback = (finalScore: number) => {
    if (finalScore >= 27) {
      return {
        level: "बहुत अच्छा (Excellent)",
        color: "text-emerald-600 dark:text-emerald-400",
        advice: "शानदार तैयारी! गलतियों के कारण समझें और 3–7 दिन बाद फिर टेस्ट देकर रिवीजन करें।",
      };
    }
    if (finalScore >= 23) {
      return {
        level: "अच्छा (Good)",
        color: "text-teal-600 dark:text-teal-400",
        advice: "सराहनीय स्कोर। जिन 5–7 प्रश्नों में चूक हुई, उनके संबंधित अध्यायों की तुलना सारणियाँ दोबारा पढ़ें।",
      };
    }
    if (finalScore >= 18) {
      return {
        level: "सुधार की जरूरत (Needs Improvement)",
        color: "text-amber-600 dark:text-amber-400",
        advice: "मध्यम स्तर। प्रमुख स्थल, नदियों और दर्शन (स्याद्वाद, बौद्ध प्रतीक) के सूत्र दोबारा दोहराएँ।",
      };
    }
    if (finalScore >= 13) {
      return {
        level: "अभी आधार मजबूत करें (Build Foundation)",
        color: "text-orange-600 dark:text-orange-400",
        advice: "पहले हर अध्याय की 'आसान समझ' और मुख्य तालिकाएँ पढ़ें, फिर दोबारा अभ्यास करें।",
      };
    }
    return {
      level: "शुरुआत से अभ्यास करें (Start Fresh)",
      color: "text-rose-600 dark:text-rose-400",
      advice: "एक बार में एक अध्याय पढ़ें और छोटे समूहों में याद करें। बुनियादी कालक्रम स्पष्ट करें।",
    };
  };

  const feedback = getPerformanceFeedback(score);

  return (
    <div className="space-y-6">
      {/* Sticky Live Score Widget */}
      <div className="sticky top-20 z-30 flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-amber-50/95 dark:bg-amber-950/80 border border-amber-200/90 dark:border-amber-900/80 shadow-md backdrop-blur-md">
        <div className="flex items-center gap-2">
          <AwardIcon size={18} className="text-amber-600 dark:text-amber-400" />
          <span className="text-xs sm:text-sm font-bold font-mono text-amber-900 dark:text-amber-200">
            स्कोर: {score} / {totalQuestions}
          </span>
          <span className="text-xs text-amber-800 dark:text-amber-300 font-medium">
            (हल किए: {answeredCount}/{totalQuestions})
          </span>
        </div>

        {answeredCount > 0 && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border border-amber-300 dark:border-amber-800 bg-white/80 dark:bg-slate-900 text-amber-900 dark:text-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
          >
            <RotateCcwIcon size={12} />
            <span>रीसेट करें</span>
          </button>
        )}
      </div>

      {/* Final Diagnostic Banner */}
      {answeredCount === totalQuestions && (
        <div className="p-6 rounded-3xl bg-linear-to-r from-indigo-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800/80 dark:to-slate-900 border border-indigo-200/80 dark:border-indigo-900 shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100">
              अंतिम परिणाम: <span className={feedback.color}>{score} / 30 — {feedback.level}</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {feedback.advice}
          </p>
        </div>
      )}

      {/* 30 Questions Stream */}
      <div className="space-y-4">
        {ancientHistoryMCQs.map((item, idx) => {
          const selectedOption = userAnswers[item.id];
          const isAnswered = selectedOption !== undefined;
          const isCorrect = isAnswered && selectedOption === item.answerIndex;

          return (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-150 ${
                isAnswered
                  ? isCorrect
                    ? "border-emerald-200/90 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20"
                    : "border-rose-200/90 dark:border-rose-900/60 bg-rose-50/30 dark:bg-rose-950/20"
                  : "border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900"
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold mr-1">
                    प्रश्न {idx + 1}.
                  </span>
                  {item.question}
                </p>
                {isAnswered && (
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono shrink-0 uppercase ${
                      isCorrect
                        ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300"
                        : "bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300"
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckIcon size={12} /> सही (+2)
                      </>
                    ) : (
                      <>
                        <XIcon size={12} /> गलत (−0.5)
                      </>
                    )}
                  </span>
                )}
              </div>

              {/* 4 Options Grid / Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.map((opt, optIdx) => {
                  const isThisSelected = selectedOption === optIdx;
                  const isThisTheCorrectAnswer = optIdx === item.answerIndex;

                  let btnStyle =
                    "border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 hover:border-indigo-400/80 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30";

                  if (isAnswered) {
                    if (isThisTheCorrectAnswer) {
                      btnStyle =
                        "border-emerald-500 bg-emerald-600 text-white font-bold shadow-xs";
                    } else if (isThisSelected) {
                      btnStyle =
                        "border-rose-500 bg-rose-600 text-white font-bold shadow-xs";
                    } else {
                      btnStyle =
                        "border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/30 text-slate-400 dark:text-slate-500 opacity-70";
                    }
                  }

                  const letter = ["A", "B", "C", "D"][optIdx];

                  return (
                    <button
                      key={optIdx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(item.id, optIdx)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-xs sm:text-sm text-left transition-all duration-150 ${btnStyle} ${
                        !isAnswered ? "cursor-pointer active:scale-[0.99]" : "cursor-default"
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 border border-current opacity-85">
                        {letter}
                      </span>
                      <span className="flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation Box */}
              {isAnswered && (
                <div className="mt-3 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 leading-relaxed animate-in fade-in duration-150">
                  <span className="font-bold text-slate-800 dark:text-slate-100">
                    💡 सही उत्तर: {["A", "B", "C", "D"][item.answerIndex]}. {item.options[item.answerIndex]}
                  </span>
                  <p className="mt-0.5 text-slate-600 dark:text-slate-300">
                    {item.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Full Answer Key Accordion */}
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        <button
          onClick={() => setShowFullKey(!showFullKey)}
          className="w-full flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-slate-50/80 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <span>📖 उत्तर-कुंजी और आसान व्याख्या (पूरी 30 प्रश्नों की सूची)</span>
          <span className="text-xs font-mono font-normal text-slate-500">
            {showFullKey ? "बंद करें ▲" : "खोलें ▼"}
          </span>
        </button>

        {showFullKey && (
          <div className="p-4 sm:p-6 space-y-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 divide-y divide-slate-100 dark:divide-slate-800">
            {ancientHistoryMCQs.map((q) => (
              <div key={q.id} className="pt-2.5 first:pt-0">
                <span className="font-bold font-mono text-indigo-600 dark:text-indigo-400">
                  {q.id}. {["A", "B", "C", "D"][q.answerIndex]}. {q.options[q.answerIndex]}
                </span>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5 font-normal">
                  {q.explanation}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

