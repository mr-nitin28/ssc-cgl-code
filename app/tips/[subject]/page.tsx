import { notFound } from "next/navigation";
import { Suspense } from "react";
import { TopperPlaybook } from "@/components/TopperPlaybook";
import tipsData from "@/data/topper_tips.json";

export async function generateStaticParams() {
  return [
    { subject: "m" },
    { subject: "r" },
    { subject: "e" },
    { subject: "k" },
  ];
}

async function TopperTipsContent({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;

  const validKey = subject as "m" | "r" | "e" | "k";
  const subjectName = (tipsData.subjectNames as Record<string, string>)[validKey];
  const tips = (tipsData.subjects as Record<string, unknown>)[validKey] as Parameters<typeof TopperPlaybook>[0]["tips"];

  if (!tips || !subjectName) {
    notFound();
  }

  return (
    <TopperPlaybook
      subjectKey={validKey}
      subjectName={subjectName}
      tips={tips}
      universalHabits={tipsData.universalHabits as [string, string][]}
    />
  );
}

export default function TopperTipsPage(props: {
  params: Promise<{ subject: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-8 space-y-4">
          <div className="w-10 h-10 border-3 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" />
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Loading Topper Playbook & Heuristics...
          </div>
        </div>
      }
    >
      <TopperTipsContent params={props.params} />
    </Suspense>
  );
}
