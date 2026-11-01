import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AnswerKeyViewer } from "@/components/AnswerKeyViewer";
import { MockTest } from "@/lib/types";

// Static mock data
import mock1 from "@/data/mock_1.json";
import mock2 from "@/data/mock_2.json";
import mock3 from "@/data/mock_3.json";
import mock4 from "@/data/mock_4.json";
import mock5 from "@/data/mock_5.json";
import mock6 from "@/data/mock_6.json";
import mock7 from "@/data/mock_7.json";
import mock8 from "@/data/mock_8.json";
import mock9 from "@/data/mock_9.json";

const mocksMap: Record<string, MockTest> = {
  "1": mock1 as unknown as MockTest,
  "2": mock2 as unknown as MockTest,
  "3": mock3 as unknown as MockTest,
  "4": mock4 as unknown as MockTest,
  "5": mock5 as unknown as MockTest,
  "6": mock6 as unknown as MockTest,
  "7": mock7 as unknown as MockTest,
  "8": mock8 as unknown as MockTest,
  "9": mock9 as unknown as MockTest,
};

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
  ];
}

async function AnswerKeyContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mock = mocksMap[id];

  if (!mock) {
    notFound();
  }

  return <AnswerKeyViewer mock={mock} />;
}

export default function AnswerKeyPage(props: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-8 space-y-4">
          <div className="w-10 h-10 border-3 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" />
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Loading Solutions & Explanations...
          </div>
        </div>
      }
    >
      <AnswerKeyContent params={props.params} />
    </Suspense>
  );
}
