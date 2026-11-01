import { PatternLabViewer } from "@/components/PatternLabViewer";
import patternLabData from "@/data/pattern_lab.json";
import { PatternItem } from "@/lib/types";

export const metadata = {
  title: "Speed Math & Reasoning Pattern Lab · ApexSSC",
  description:
    "36 speed-math heuristic flashcards with trigger callouts, shortcut formulas, example problems, and proofs for SSC CGL 2026.",
};

export default function PatternLabPage() {
  return (
    <PatternLabViewer
      categories={patternLabData.categories}
      patterns={patternLabData.patterns as PatternItem[]}
    />
  );
}
