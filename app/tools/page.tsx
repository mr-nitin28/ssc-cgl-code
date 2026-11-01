import { StrategyTools } from "@/components/StrategyTools";
import toolsData from "@/data/tools_data.json";

export const metadata = {
  title: "80/20 Coverage Curve & Time-Budget Planner · ApexSSC",
  description:
    "Empirical coverage curves, personalized high-ROI priority finder, and dynamic time-allocation planner for SSC CGL Tier-I.",
};

export default function ToolsPage() {
  return (
    <StrategyTools
      coverageProfiles={toolsData.coverageProfiles as unknown as Parameters<typeof StrategyTools>[0]["coverageProfiles"]}
      defaultPriorityRatings={toolsData.defaultPriorityRatings as unknown as Parameters<typeof StrategyTools>[0]["defaultPriorityRatings"]}
    />
  );
}
