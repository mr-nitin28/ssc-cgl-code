import { Metadata } from "next";
import { AncientHistoryFullPageView } from "@/components/AncientHistoryFullPageView";

export const metadata: Metadata = {
  title: "प्राचीन भारतीय इतिहास (Ancient Indian History) मास्टर पाठ्यक्रम · SSC CGL 2026",
  description:
    "SSC CGL 2026 Tier-I & Tier-II प्राचीन भारतीय इतिहास संपूर्ण 12 अध्याय पाठ्यक्रम, पाषाण काल, हड़प्पा सभ्यता, वैदिक काल, तुलनात्मक सारणियाँ, 14 शब्दावलियाँ और 30 अभ्यास प्रश्नों का लाइव परीक्षा सिमुलेटर।",
};

export default function AncientHistoryPage() {
  return <AncientHistoryFullPageView />;
}
