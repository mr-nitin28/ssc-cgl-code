import { Metadata } from "next";
import { Suspense } from "react";
import { GeneralAwarenessSyllabusViewer } from "@/components/GeneralAwarenessSyllabusViewer";

export const metadata: Metadata = {
  title: "प्राचीन भारतीय इतिहास (Ancient Indian History) & General Awareness Syllabus · SSC CGL 2026",
  description:
    "SSC CGL 2026 Tier-I & Tier-II प्राचीन भारतीय इतिहास संपूर्ण पाठ्यक्रम, तुलना सारणियाँ, 14 शब्दावलियाँ और 30 अभ्यास प्रश्नों का लाइव परीक्षा सिमुलेटर।",
};

export default function GeneralAwarenessSyllabusPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-8 space-y-4">
          <div className="w-10 h-10 border-3 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" />
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            प्राचीन भारतीय इतिहास पाठ्यक्रम लोड हो रहा है...
          </div>
        </div>
      }
    >
      <GeneralAwarenessSyllabusViewer />
    </Suspense>
  );
}
