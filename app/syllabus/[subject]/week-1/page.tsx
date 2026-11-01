import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { WeekCurriculumModule } from "@/components/WeekCurriculumModule";

export async function generateStaticParams() {
  return [
    { subject: "maths" },
    { subject: "reasoning" },
    { subject: "english" },
    { subject: "gk" },
  ];
}

const subjectsMetadata: Record<string, { name: string; icon: string }> = {
  maths: { name: "Mathematics", icon: "📐" },
  reasoning: { name: "Reasoning", icon: "🧩" },
  english: { name: "English", icon: "📖" },
  gk: { name: "GK & Current Affairs", icon: "🌍" },
};

async function Week1StudyContent({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const meta = subjectsMetadata[subject];

  if (!meta) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={`/syllabus/${subject}`} className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              {meta.icon} {meta.name} Syllabus
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">Week 1 Integrated Programme</span>
          </div>

          <Link
            href={`/syllabus/${subject}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 self-start sm:self-auto"
          >
            ← Back to Full Syllabus Overview
          </Link>
        </div>

        {/* Embedded Week Curriculum Module */}
        <WeekCurriculumModule currentSubjectKey={subject} />
      </div>
    </div>
  );
}

export default function Week1StudyPage(props: {
  params: Promise<{ subject: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-8 space-y-4">
          <div className="w-10 h-10 border-3 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" />
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Loading Week 1 Study Programme...
          </div>
        </div>
      }
    >
      <Week1StudyContent params={props.params} />
    </Suspense>
  );
}
