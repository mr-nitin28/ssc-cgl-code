"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AncientHistoryContent } from "./AncientHistoryContent";
import {
  BookOpenIcon,
  AwardIcon,
  DownloadIcon,
  TargetIcon,
  SparklesIcon,
  CheckIcon,
  ChevronRightIcon,
} from "./icons";

type SyllabusModuleKey =
  | "ancient-history"
  | "medieval-modern"
  | "polity"
  | "constitution"
  | "geography"
  | "science"
  | "environment";

interface ModuleConfig {
  id: SyllabusModuleKey;
  label: string;
  hindiLabel: string;
  icon: string;
  color: string;
  weightageTier1: string;
  weightageTier2: string;
  description: string;
  coreThemes: string[];
  keyChapters: string[];
}

const modulesList: ModuleConfig[] = [
  {
    id: "ancient-history",
    label: "Ancient Indian History",
    hindiLabel: "प्राचीन भारतीय इतिहास",
    icon: "🏛️",
    color: "indigo",
    weightageTier1: "3–4 Qs (6–8 Marks)",
    weightageTier2: "3–5 Qs (9–15 Marks)",
    description:
      "प्रागैतिहासिक काल, सिंधुघाटी सभ्यता, वैदिक काल, बौद्ध व जैन धर्म, 16 महाजनपद, मौर्य व गुप्त साम्राज्य, एवं संगम युग।",
    coreThemes: [
      "पाषाण काल एवं धातु युग के औजार व स्थल",
      "हड़प्पा सभ्यता की नगर योजना, बंदरगाह व खोजें",
      "वैदिक साहित्य, दस राजाओं का युद्ध व देवता",
      "बौद्ध व जैन दर्शन (प्रतीक, त्रिरत्न, संगीति)",
      "मगध साम्राज्य, मौर्य गुप्तचर व्यवस्था व शुंग-सातवाहन",
      "गुप्त स्वर्ण युग, वाकाटक विवाह व संगम तमिल साहित्य",
    ],
    keyChapters: [
      "पाषाण काल (पुरा, मध्य, नवपाषाण)",
      "सिंधुघाटी सभ्यता के प्रमुख स्थल व नदियाँ",
      "ऋग्वैदिक बनाम उत्तर वैदिक समाज",
      "गौतम बुद्ध एवं महावीर स्वामी के सिद्धांत",
      "16 महाजनपद एवं मगध का उत्कर्ष",
      "मौर्य प्रशासन, अर्थशास्त्र एवं गुप्तचर",
      "गुप्त साम्राज्य एवं वाकाटक कूटनीति",
      "संगम युग (चेर, चोल, पांड्य)",
    ],
  },
  {
    id: "medieval-modern",
    label: "Medieval & Modern History",
    hindiLabel: "मध्यकालीन एवं आधुनिक इतिहास",
    icon: "⚔️",
    color: "amber",
    weightageTier1: "4–6 Qs (8–12 Marks)",
    weightageTier2: "4–6 Qs (12–18 Marks)",
    description:
      "दिल्ली सल्तनत, मुगल स्थापत्य व मनसबदारी, मराठा साम्राज्य, 1857 की क्रांति, समाज सुधार आंदोलन, और गांधीवादी स्वतंत्रता संग्राम।",
    coreThemes: [
      "सल्तनत कालीन राजवंश (गुलाम, खिलजी, तुगलक, लोदी)",
      "मुगल शासन, अकबर के नवरत्न व भू-राजस्व प्रणाली (दहसाला)",
      "यूरोपीय कंपनियों का आगमन, प्लासी (1757) व बक्सर (1764)",
      "1857 का महासंग्राम, गवर्नर जनरल एवं प्रमुख वायसराय",
      "भारतीय राष्ट्रीय कांग्रेस (1885) एवं प्रमुख वार्षिक अधिवेशन",
      "गांधीवादी आंदोलन (असहयोग 1920, सविनय अवज्ञा 1930, भारत छोड़ो 1942)",
    ],
    keyChapters: [
      "दिल्ली सल्तनत के प्रशासनिक विभाग (दीवान-ए-आरिज, कोही)",
      "मुगल कालीन स्थापत्य, चित्रकला व मनसबदारी",
      "मराठा शक्ति एवं छत्रपति शिवाजी महाराज की अष्टप्रधान परिषद",
      "ब्रिटिश भू-राजस्व व्यवस्था (स्थायी, रैयतवाड़ी, महालवाड़ी)",
      "1857 विद्रोह के प्रमुख नायक एवं केंद्र",
      "सामाजिक-धार्मिक सुधार आंदोलन (ब्रह्म समाज, आर्य समाज)",
      "क्रिप्स मिशन, कैबिनेट मिशन व माउंटबेटन योजना 1947",
    ],
  },
  {
    id: "polity",
    label: "Indian Polity",
    hindiLabel: "भारतीय राजव्यवस्था",
    icon: "⚖️",
    color: "teal",
    weightageTier1: "4–5 Qs (8–10 Marks)",
    weightageTier2: "4–6 Qs (12–18 Marks)",
    description:
      "कार्यपालिका, विधायिका, न्यायपालिका, केंद्र-राज्य संबंध, आपातकालीन प्रावधान, पंचायती राज एवं संवैधानिक आयोग।",
    coreThemes: [
      "संसदीय शासन प्रणाली व राष्ट्रपति की शक्तियाँ (वीटो, अध्यादेश, क्षमादान)",
      "संसद (लोकसभा व राज्यसभा) की प्रक्रिया, विधायी विधेयक व बजट",
      "सर्वोच्च न्यायालय एवं उच्च न्यायालय के न्यायादेश (Writ Jurisdiction)",
      "राज्यपाल, मुख्यमंत्री एवं राज्य विधानमंडल का कार्यक्षेत्र",
      "स्थानीय स्वशासन (73वाँ व 74वाँ संविधान संशोधन अधिनियम)",
      "संवैधानिक व गैर-संवैधानिक संस्थाएँ (C&AG, UPSC, चुनाव आयोग, NITI आयोग)",
    ],
    keyChapters: [
      "राष्ट्रपति, उपराष्ट्रपति एवं प्रधानमंत्री की कार्यपरिषद",
      "संसद की समितियाँ (PAC, प्राक्कलन समिति, COPU)",
      "न्यायिक समीक्षा (Judicial Review) एवं जनहित याचिका (PIL)",
      "अनुच्छेद 352, 356 व 360 के तहत आपातकालीन तंत्र",
      "पंचायती राज त्रि-स्तरीय व्यवस्था (बलवंत राय मेहता रिपोर्ट)",
      "वित्त आयोग (अनुच्छेद 280) व चुनाव आयोग (अनुच्छेद 324)",
    ],
  },
  {
    id: "constitution",
    label: "Indian Constitution",
    hindiLabel: "भारतीय संविधान",
    icon: "📜",
    color: "indigo",
    weightageTier1: "3–4 Qs (6–8 Marks)",
    weightageTier2: "3–5 Qs (9–15 Marks)",
    description:
      "संविधान सभा का निर्माण, प्रस्तावना, मूल अधिकार (अनु. 12–35), नीति निदेशक तत्व (DPSP), मूल कर्तव्य, अनुसूचियाँ व ऐतिहासिक संशोधन।",
    coreThemes: [
      "संविधान के विदेशी स्रोत (ब्रिटेन, USA, आयरलैंड, ऑस्ट्रेलिया, USSR)",
      "प्रस्तावना के मुख्य आदर्श (संप्रभुता, समाजवादी, पंथनिरपेक्ष, लोकतांत्रिक, गणराज्य)",
      "भाग III: मूल अधिकार व अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार)",
      "भाग IV: राज्य के नीति निदेशक तत्व (अनुच्छेद 36–51)",
      "भाग IV-A: 11 मौलिक कर्तव्य (42वाँ व 86वाँ संविधान संशोधन)",
      "12 अनुसूचियाँ एवं प्रमुख संविधान संशोधन (42nd, 44th, 73rd, 86th, 101st GST)",
    ],
    keyChapters: [
      "संविधान सभा की समितियाँ व प्रारूपण (Drafting Committee)",
      "समान नागरिक संहिता (अनुच्छेद 44) व पर्यावरण संरक्षण (48-A)",
      "अनुच्छेद 19 की 6 स्वतंत्रताएँ एवं अनुच्छेद 21 का जीवन का अधिकार",
      "अनुच्छेद 32 के तहत 5 प्रकार की रिट (Habeas Corpus, Mandamus...)",
      "7वीं अनुसूची (संघ, राज्य व समवर्ती सूची के विषय)",
      "अनुच्छेद 368 के अंतर्गत संविधान संशोधन की विशेष प्रक्रिया",
    ],
  },
  {
    id: "geography",
    label: "Indian Geography",
    hindiLabel: "भारतीय भूगोल",
    icon: "🗺️",
    color: "emerald",
    weightageTier1: "3–4 Qs (6–8 Marks)",
    weightageTier2: "3–5 Qs (9–15 Marks)",
    description:
      "भू-आकृतिक प्रदेश, हिमालयी व प्रायद्वीपीय नदी तंत्र, मानसून जलवायु, मृदा प्रकार, कृषि फसलें, प्रमुख खनिज और राष्ट्रीय उद्यान।",
    coreThemes: [
      "भारत की स्थिति, विस्तार, तटरेखा व पड़ोसी देशों के साथ सीमा रेखाएँ",
      "हिमालय की श्रेणियाँ (महान, मध्य, शिवालिक) व प्रमुख दर्रे",
      "नदी प्रणालियाँ (सिंधु, गंगा, ब्रह्मपुत्र, गोदावरी, कृष्णा, कावेरी, नर्मदा)",
      "दक्षिण-पश्चिम व लौटता उत्तर-पूर्वी मानसून एवं एल नीनो का प्रभाव",
      "काली, जलोढ़, लाल और लैटेराइट मिट्टी का वितरण व फसल संबंध",
      "प्रमुख खनिज बेल्ट (छोटानागपुर) व ऊर्जा संसाधन (कोयला, पेट्रोलियम, सौर)",
    ],
    keyChapters: [
      "भारत के प्रमुख पर्वत शिखर एवं हिमालयी दर्रे (Passes)",
      "प्रमुख बाँध, बहुउद्देशीय नदी घाटी परियोजनाएँ व जलप्रपात",
      "रबी, खरीफ व जायद फसलें एवं हरित क्रांति के प्रभाव",
      "यूनेस्को बायोस्फीयर रिजर्व, राष्ट्रीय उद्यान व टाइगर रिजर्व",
      "जनगणना (2011) के महत्वपूर्ण जनसांख्यिकी सूचकांक",
      "राष्ट्रीय जलमार्ग, प्रमुख समुद्री बंदरगाह एवं औद्योगिक गलियारे",
    ],
  },
  {
    id: "science",
    label: "General Science",
    hindiLabel: "सामान्य विज्ञान (Bio, Chem, Phy)",
    icon: "🔬",
    color: "sky",
    weightageTier1: "5–7 Qs (10–14 Marks)",
    weightageTier2: "4–6 Qs (12–18 Marks)",
    description:
      "मानव शरीर विज्ञान, पोषण व विटामिन, प्रमुख रोग, रासायनिक यौगिक व सूत्र, प्रकाशिकी, यांत्रिकी, और आधुनिक वैज्ञानिक आविष्कार।",
    coreThemes: [
      "जीवविज्ञान: मानव परिसंचरण, पाचन, तंत्रिका तंत्र व अंतःस्रावी ग्रंथियाँ",
      "विटामिन, पोषक तत्व, उनकी कमी से होने वाले रोग व वाहक जीवाणु/विषाणु",
      "रसायन विज्ञान: अम्ल, क्षार, लवण, आवर्त सारणी व दैनिक जीवन के रसायन",
      "भौतिकी: गति के नियम, गुरुत्वाकर्षण, कार्य-ऊर्जा, ध्वनि व तरंगें",
      "प्रकाशिकी: अवतल-उत्तल दर्पण, लेंस, अपवर्तन, पूर्ण आंतरिक परावर्तन (TIR)",
      "मापक यंत्र, मात्रक (SI Units) और प्रमुख वैज्ञानिक उपकरण",
    ],
    keyChapters: [
      "रक्त समूह (Rh कारक) एवं हृदय की क्रियाविधि",
      "विटामिन A, B-Complex, C, D, E, K के रासायनिक नाम व स्रोत",
      "बेकिंग सोडा, ब्लीचिंग पाउडर, प्लास्टर ऑफ पेरिस के सूत्र व उपयोग",
      "pH मान पैमाना व रोजमर्रा के पदार्थों की अम्लीयता",
      "प्रकाश का प्रकीर्णन (आकाश का नीला रंग), अपवर्तन व मरीचिका",
      "ध्वनि की चाल विभिन्न माध्यमों में एवं प्रतिध्वनि (Echo)",
    ],
  },
  {
    id: "environment",
    label: "Environment & Ecology",
    hindiLabel: "पर्यावरण एवं पारिस्थितिकी",
    icon: "🌿",
    color: "emerald",
    weightageTier1: "2–3 Qs (4–6 Marks)",
    weightageTier2: "2–4 Qs (6–12 Marks)",
    description:
      "पारिस्थितिक तंत्र, खाद्य श्रृंखला, जैव विविधता हॉटस्पॉट, जलवायु परिवर्तन समझौते, रामसर आर्द्रभूमि और भारत के पर्यावरण कानून।",
    coreThemes: [
      "पारिस्थितिक तंत्र के घटक (जैविक, अजैविक), ऊर्जा का 10% नियम",
      "जैव विविधता के वैश्विक व भारतीय हॉटस्पॉट (पश्चिमी घाट, पूर्वी हिमालय)",
      "प्रदूषण प्रकार (PM 2.5, स्मॉग, अम्लीय वर्षा, बायोमैग्निफिकेशन)",
      "वन्यजीव संरक्षण अधिनियम 1972, प्रोजेक्ट टाइगर 1973 व प्रोजेक्ट हाथी",
      "रामसर कन्वेंशन एवं भारत के महत्वपूर्ण आर्द्रभूमि स्थल (Wetlands)",
      "क्योटो प्रोटोकॉल, पेरिस जलवायु समझौता एवं COP सम्मेलन",
    ],
    keyChapters: [
      "पारिस्थितिक पिरामिड (संख्या, जैवभार, ऊर्जा का सदैव सीधा पिरामिड)",
      "IUCN रेड डाटा बुक श्रेणियाँ (विलुप्त, संकटग्रस्त, सुभेद्य प्रजातियाँ)",
      "ओजोन परत क्षरण (मॉन्ट्रियल प्रोटोकॉल व CFC गैसें)",
      "ग्रीनहाउस गैसें व ग्लोबल वार्मिंग पोटेंशियल (GWP)",
      "भारत के प्रमुख बायोस्फीयर रिजर्व (नीलगिरि, मन्नार की खाड़ी, नंदा देवी)",
      "पर्यावरण संरक्षण अधिनियम 1986 व राष्ट्रीय हरित अधिकरण (NGT 2010)",
    ],
  },
];

export function GeneralAwarenessSyllabusViewer() {
  const [activeModule, setActiveModule] = useState<SyllabusModuleKey>("ancient-history");

  const currentModule =
    modulesList.find((m) => m.id === activeModule) || modulesList[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            ← Back to Home / Mock Tests
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Staff Selection Commission · CGL 2026 Tier-I & Tier-II</span>
          </div>
        </div>

        {/* Hero Banner Card */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-2xl p-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-900">
                  🌍
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 uppercase tracking-wider">
                  SSC CGL 2026 · General Awareness Master Blueprint
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                General Awareness & History Master Syllabus
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                विस्तृत पाठ्यक्रम, उच्च-अंक वाले विषय, तुलना सारणियाँ, 14 प्रमुख शब्दावलियाँ और 30 अभ्यास प्रश्नों का लाइव परीक्षा सिमुलेटर।
              </p>
            </div>

            {/* Quick Action Buttons (Tips & PDF Download) */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              <a
                href="/pdfs/SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
                download="SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-white shadow-sm shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-150"
              >
                <DownloadIcon size={16} /> Download Official PDF
              </a>
              <Link
                href="/tips/k"
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150"
              >
                <AwardIcon size={16} className="text-amber-500" />
                GK Topper Playbook
              </Link>
            </div>
          </div>
        </div>

        {/* Small Navigation Section with All Topic Selector Buttons & Action Links */}
        <div className="p-4 sm:p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpenIcon size={14} className="text-indigo-600 dark:text-indigo-400" />
                पाठ्यक्रम व संसाधन / Modules & Resources:
              </span>
            </div>

            {/* Direct Quick Action Buttons (Tips & Download) in the small section */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/tips/k"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-xs font-bold transition-all shadow-xs"
              >
                <AwardIcon size={13} className="text-amber-500" />
                <span>Tips (रणनीति)</span>
              </Link>
              <a
                href="/pdfs/SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
                download="SSC_CGL_2026_GK_Current_Affairs_Master_Syllabus.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-xs transition-all"
              >
                <DownloadIcon size={13} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Module Selector Buttons Stream */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {modulesList.map((m) => {
              const isSelected = activeModule === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30 scale-[1.02]"
                      : "border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-white dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="text-base">{m.icon}</span>
                  <div className="text-left flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
                    <span>{m.label}</span>
                    <span className={`text-[10px] font-normal ${isSelected ? "text-indigo-100" : "text-slate-500 dark:text-slate-400"}`}>
                      ({m.hindiLabel})
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area based on Selection */}
        {activeModule === "ancient-history" ? (
          /* Complete 12-Chapter Ancient Indian History Content */
          <AncientHistoryContent />
        ) : (
          /* Dynamic Structured Overview for other selected General Awareness Modules */
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Module Overview Card */}
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200/80 dark:border-indigo-900">
                    {currentModule.icon}
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {currentModule.label}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                      {currentModule.hindiLabel}
                    </h2>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end text-xs font-mono">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    Tier-I: {currentModule.weightageTier1}
                  </span>
                  <span className="text-teal-600 dark:text-teal-400">
                    Tier-II: {currentModule.weightageTier2}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {currentModule.description}
              </p>

              {/* Weightage Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                    🎯 Tier-I परीक्षा महत्व
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {currentModule.weightageTier1} — त्वरित 15-सेकंड उत्तर वाले डायरेक्ट वन-लाइनर प्रश्न।
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 block mb-1">
                    ⚡ Tier-II चयन निर्धारण
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {currentModule.weightageTier2} — कथन-कारण (Assertion-Reason) एवं मिलान वाले विश्लेषणात्मक प्रश्न।
                  </p>
                </div>
              </div>

              {/* High-Yield Core Themes */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <SparklesIcon size={16} className="text-amber-500" />
                  <span>सर्वाधिक पूछे जाने वाले उच्च-प्रतिफल विषय (High-Yield Focus Areas)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentModule.coreThemes.map((theme, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-xs"
                    >
                      <span className="w-4 h-4 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {theme}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Chapters Checklist */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <TargetIcon size={16} className="text-teal-500" />
                  <span>महत्वपूर्ण अध्याय चेकलिस्ट (Syllabus Checklist)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentModule.keyChapters.map((chap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-xs"
                    >
                      <span className="w-4 h-4 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckIcon size={12} />
                      </span>
                      <span className="text-slate-800 dark:text-slate-200 font-medium">
                        {chap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout to Practice or Switch back to Ancient History */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModule("ancient-history")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs transition-colors cursor-pointer"
                >
                  <span>🏛️ प्राचीन भारतीय इतिहास के 12 अध्याय व 30 MCQ देखें</span>
                  <ChevronRightIcon size={14} />
                </button>
                <Link
                  href="/mock/1"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <TargetIcon size={14} className="text-indigo-500" /> Full Mock Test 01 हल करें
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
