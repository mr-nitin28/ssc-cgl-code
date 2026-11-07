"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpenIcon,
  AwardIcon,
  DownloadIcon,
  ChevronRightIcon,
} from "./icons";

export interface GAModuleInfo {
  slug: string;
  href: string;
  title: string;
  hindiTitle: string;
  icon: string;
  badge: string;
  weightageTier1: string;
  weightageTier2: string;
  description: string;
  highlights: string[];
  isFullCurriculumLive?: boolean;
}

export const gaModulesData: GAModuleInfo[] = [
  {
    slug: "ancient-history",
    href: "/syllabus/ancient-history",
    title: "Ancient Indian History",
    hindiTitle: "प्राचीन भारतीय इतिहास",
    icon: "🏛️",
    badge: "Full 12 Chapters + 30 MCQs Live",
    weightageTier1: "3–4 Qs (6–8 Marks)",
    weightageTier2: "3–5 Qs (9–15 Marks)",
    description:
      "पाषाण काल, हड़प्पा सभ्यता, वैदिक साहित्य, बौद्ध-जैन धर्म, 16 महाजनपद, मौर्य-गुप्त साम्राज्य, संगम युग, शब्दावलियाँ व 30 प्रश्नों का लाइव सिमुलेटर।",
    highlights: [
      "12 विस्तृत अध्याय (पाषाण काल से संगम युग तक)",
      "ऋग्वैदिक बनाम उत्तर वैदिक समाज तुलना सारणी",
      "गौतम बुद्ध व महावीर स्वामी तुलना एवं 4 बौद्ध संगीतियाँ",
      "14 आवश्यक शब्दावलियाँ + 30 प्रश्नों का इंटरैक्टिव टेस्ट",
    ],
    isFullCurriculumLive: true,
  },
  {
    slug: "medieval-modern",
    href: "/syllabus/medieval-modern",
    title: "Medieval & Modern History",
    hindiTitle: "मध्यकालीन एवं आधुनिक इतिहास",
    icon: "⚔️",
    badge: "High-Yield Freedom Struggle",
    weightageTier1: "4–6 Qs (8–12 Marks)",
    weightageTier2: "4–6 Qs (12–18 Marks)",
    description:
      "दिल्ली सल्तनत, मुग़ल स्थापत्य व मनसबदारी, मराठा साम्राज्य, 1857 महासंग्राम, सामाजिक-धार्मिक सुधार आंदोलन एवं 1885–1947 स्वतंत्रता संग्राम।",
    highlights: [
      "सल्तनत व मुग़ल प्रशासनिक शब्दावली व भू-राजस्व (दहसाला)",
      "यूरोपीय कंपनियों का आगमन (प्लासी 1757, बक्सर 1764)",
      "गांधीवादी प्रमुख जन-आंदोलन (असहयोग, दांडी मार्च, भारत छोड़ो)",
      "प्रमुख गवर्नर जनरल व वायसराय के ऐतिहासिक निर्णय",
    ],
  },
  {
    slug: "polity",
    href: "/syllabus/polity",
    title: "Indian Polity",
    hindiTitle: "भारतीय राजव्यवस्था",
    icon: "⚖️",
    badge: "Executive, Legislature & Judiciary",
    weightageTier1: "4–5 Qs (8–10 Marks)",
    weightageTier2: "4–6 Qs (12–18 Marks)",
    description:
      "संसदीय शासन प्रणाली, राष्ट्रपति व राज्यपाल की शक्तियाँ, संसद व राज्य विधानमंडल प्रक्रिया, सुप्रीम कोर्ट-हाईकोर्ट रिट्स एवं पंचायती राज।",
    highlights: [
      "राष्ट्रपति अध्यादेश (अनु. 123) व वीटो शक्तियाँ",
      "संसदीय समितियाँ (PAC, प्राक्कलन समिति, COPU)",
      "अनुच्छेद 32 व 226 के तहत 5 प्रकार के परमादेश/रिट",
      "73वाँ व 74वाँ संविधान संशोधन एवं स्थानीय स्वशासन",
    ],
  },
  {
    slug: "constitution",
    href: "/syllabus/constitution",
    title: "Indian Constitution",
    hindiTitle: "भारतीय संविधान",
    icon: "📜",
    badge: "Articles, Parts & Amendments",
    weightageTier1: "3–4 Qs (6–8 Marks)",
    weightageTier2: "3–5 Qs (9–15 Marks)",
    description:
      "संविधान निर्माण प्रक्रिया, विदेशी स्रोत, प्रस्तावना के आदर्श, मूल अधिकार (भाग III), नीति निदेशक तत्व (DPSP), मूल कर्तव्य एवं 12 अनुसूचियाँ।",
    highlights: [
      "अनुच्छेद 14–35: मौलिक अधिकार व अपवाद",
      "समान नागरिक संहिता (अनु. 44) व DPSP अनुच्छेद 36–51",
      "42वाँ, 44वाँ, 86वाँ व 101वाँ (GST) ऐतिहासिक संशोधन",
      "7वीं अनुसूची (संघ, राज्य व समवर्ती सूची) के प्रमुख विषय",
    ],
  },
  {
    slug: "geography",
    href: "/syllabus/geography",
    title: "Indian Geography",
    hindiTitle: "भारतीय भूगोल",
    icon: "🗺️",
    badge: "Physiography, Drainage & Climate",
    weightageTier1: "3–4 Qs (6–8 Marks)",
    weightageTier2: "3–5 Qs (9–15 Marks)",
    description:
      "हिमालय की श्रेणियाँ व दर्रे, प्रायद्वीपीय व उत्तर भारत की नदियाँ, बहुउद्देशीय बाँध, दक्षिण-पश्चिम मानसून, मृदा वर्गीकरण, खनिज व राष्ट्रीय उद्यान।",
    highlights: [
      "सिंधु, गंगा, ब्रह्मपुत्र, गोदावरी व कावेरी नदी तंत्र",
      "प्रमुख हिमालयी दर्रे (Passes) व जलप्रपात",
      "काली, जलोढ़, लाल व लैटेराइट मिट्टी का वितरण व फसलें",
      "प्रमुख टाइगर रिजर्व, रामसर स्थल व 2011 जनगणना आँकड़े",
    ],
  },
  {
    slug: "science",
    href: "/syllabus/science",
    title: "General Science",
    hindiTitle: "सामान्य विज्ञान (Bio, Chem, Phy)",
    icon: "🔬",
    badge: "High-Frequency Daily Science",
    weightageTier1: "5–7 Qs (10–14 Marks)",
    weightageTier2: "4–6 Qs (12–18 Marks)",
    description:
      "मानव शरीर विज्ञान, रक्त समूह, विटामिन व रोग, रासायनिक सूत्र व दैनिक यौगिक, प्रकाशिकी (दर्पण/लेंस), ध्वनि की चाल एवं प्रमुख मापक यंत्र।",
    highlights: [
      "विटामिन A, B-Complex, C, D, E, K के रासायनिक नाम व कमी से रोग",
      "बेकिंग सोडा, ब्लीचिंग पाउडर, प्लास्टर ऑफ पेरिस के सूत्र",
      "pH मान पैमाना व रोजमर्रा के पदार्थों की अम्लीयता/क्षारीयता",
      "प्रकाश का अपवर्तन, परावर्तन, पूर्ण आंतरिक परावर्तन (TIR)",
    ],
  },
  {
    slug: "environment",
    href: "/syllabus/environment",
    title: "Environment & Ecology",
    hindiTitle: "पर्यावरण एवं पारिस्थितिकी",
    icon: "🌿",
    badge: "Ecosystems, Bio-Hotspots & COP",
    weightageTier1: "2–3 Qs (4–6 Marks)",
    weightageTier2: "2–4 Qs (6–12 Marks)",
    description:
      "पारिस्थितिक तंत्र घटक, खाद्य श्रृंखला, 10% ऊर्जा नियम, जैव विविधता हॉटस्पॉट, IUCN रेड लिस्ट, वन्यजीव संरक्षण कानून एवं अंतरराष्ट्रीय जलवायु सम्मेलन।",
    highlights: [
      "पारिस्थितिक पिरामिड (संख्या, जैवभार व ऊर्जा)",
      "IUCN रेड लिस्ट श्रेणियाँ (CR, EN, VU)",
      "प्रोजेक्ट टाइगर (1973), प्रोजेक्ट हाथी व वन्यजीव अधिनियम 1972",
      "क्योटो प्रोटोकॉल, पेरिस समझौता व ओजोन क्षरण (मॉन्ट्रियल)",
    ],
  },
];

export function GeneralAwarenessModulesSection() {
  return (
    <section
      id="ga-modules"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20"
    >
      {/* Section Header Card */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/90 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              SPECIALIZED SYLLABUS DIRECTORY · GENERAL AWARENESS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              General Awareness & History Subject Syllabuses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              अलग-अलग विषयवार संपूर्ण पाठ्यक्रम, तुलना सारणियाँ, परीक्षा ब्लूप्रिंट और लाइव अभ्यास। किसी भी विकल्प पर क्लिक करके उसका समर्पित फुल पेज व्यू (Full Page View) देखें:
            </p>
          </div>

          {/* Dedicated Quick Action Buttons (Tips & PDF Download) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <Link
              href="/tips/k"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-xs sm:text-sm font-bold hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all shadow-xs"
              title="General Awareness Topper Playbook & Memorization Tips"
            >
              <AwardIcon size={16} className="text-amber-500" />
              <span>Tips (रणनीति)</span>
            </Link>

            <a
              href="/pdfs/SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
              download="SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
            >
              <DownloadIcon size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Quick Jump Horizontal Pill Bar */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-mono uppercase text-[11px] tracking-wider text-slate-500 dark:text-slate-400">
              <BookOpenIcon size={13} className="text-indigo-600 dark:text-indigo-400" />
              Quick Full-Page Links:
            </span>
            <span className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400">
              Click any subject to open its full page view
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {gaModulesData.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 shadow-xs"
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
                <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">
                  ({item.hindiTitle})
                </span>
                <ChevronRightIcon size={12} className="text-slate-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Seven Detailed Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gaModulesData.map((mod) => (
          <div
            key={mod.slug}
            className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-200 ${
              mod.isFullCurriculumLive
                ? "border-indigo-300/90 dark:border-indigo-800 bg-linear-to-b from-indigo-50/40 via-white to-white dark:from-indigo-950/20 dark:via-slate-900 dark:to-slate-900 shadow-md shadow-indigo-600/5 hover:border-indigo-400 dark:hover:border-indigo-700"
                : "border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
            }`}
          >
            <div className="space-y-4">
              {/* Header Badges & Icon */}
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shrink-0">
                  {mod.icon}
                </span>

                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider text-right ${
                    mod.isFullCurriculumLive
                      ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {mod.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-2">
                  <span>{mod.title}</span>
                </h3>
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  {mod.hindiTitle}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1 line-clamp-3">
                  {mod.description}
                </p>
              </div>

              {/* Weightage Metrics */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">
                    Tier-I Weightage:
                  </span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {mod.weightageTier1}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">
                    Tier-II Weightage:
                  </span>
                  <span className="font-mono font-bold text-teal-600 dark:text-teal-400">
                    {mod.weightageTier2}
                  </span>
                </div>
              </div>

              {/* High-Yield Highlights List */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  मुख्य विषय व सारणियाँ:
                </span>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {mod.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-indigo-500 shrink-0 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button: Open Full Page View */}
            <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
              <Link
                href={mod.href}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-150 ${
                  mod.isFullCurriculumLive
                    ? "bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white shadow-xs shadow-indigo-600/30 hover:shadow-indigo-600/40"
                    : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600"
                }`}
              >
                <BookOpenIcon size={14} />
                <span>Open Full Page Syllabus</span>
                <ChevronRightIcon size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
