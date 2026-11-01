import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SyllabusViewer } from "@/components/SyllabusViewer";
import syllabusData from "@/data/syllabus.json";
import { SubjectSyllabus } from "@/lib/types";

export async function generateStaticParams() {
  return [
    { subject: "maths" },
    { subject: "reasoning" },
    { subject: "english" },
    { subject: "gk" },
  ];
}

async function SyllabusContent({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;

  const validKey = subject as "maths" | "reasoning" | "english" | "gk";
  const data = (syllabusData as unknown as Record<string, SubjectSyllabus>)[validKey];

  if (!data) {
    notFound();
  }

  return <SyllabusViewer subjectKey={validKey} syllabus={data} />;
}

export default function SyllabusPage(props: {
  params: Promise<{ subject: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-8 space-y-4">
          <div className="w-10 h-10 border-3 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" />
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Loading Master Syllabus Blueprint...
          </div>
        </div>
      }
    >
      <SyllabusContent params={props.params} />
    </Suspense>
  );
}
