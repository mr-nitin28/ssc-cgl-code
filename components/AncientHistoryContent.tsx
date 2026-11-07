"use client";

import React from "react";
import { AncientHistoryQuiz } from "./AncientHistoryQuiz";

const chaptersNav = [
  { id: "c0", label: "परिचय", short: "Overview" },
  { id: "c1", label: "1. पाषाण काल", short: "Stone Age" },
  { id: "c2", label: "2. ताम्रपाषाण", short: "Chalcolithic" },
  { id: "c3", label: "3. सिंधुघाटी", short: "Harappa" },
  { id: "c4", label: "4. वैदिक", short: "Vedic" },
  { id: "c5", label: "5. बौद्ध-जैन", short: "Buddhism-Jainism" },
  { id: "c6", label: "6. महाजनपद", short: "16 Mahajanapadas" },
  { id: "c7", label: "7. मौर्य व बाद", short: "Mauryan" },
  { id: "c8", label: "8. गुप्त-संगम", short: "Gupta & Sangam" },
  { id: "c9", label: "9. अंतिम रिवीजन", short: "Rapid Revision" },
  { id: "c10", label: "10. शब्दावली", short: "Glossary" },
  { id: "c11", label: "11. 10m प्लान", short: "10m Plan" },
  { id: "c12", label: "12. 30 अभ्यास MCQ", short: "30 MCQs" },
];

export function AncientHistoryContent() {
  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-10">
      {/* Quick Chapter Navigation Bar */}
      <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-y border-slate-200/90 dark:border-slate-800/90 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 no-scrollbar scroll-smooth">
          {chaptersNav.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-slate-100/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors cursor-pointer"
            >
              {ch.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chapter 0: Overview */}
      <section
        id="c0"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-4"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-900">
            CHAPTER 0
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            इस संपूर्ण प्राचीन इतिहास मॉड्यूल में क्या मिलेगा?
          </h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
          <li>प्रागैतिहासिक काल से गुप्त काल और संगम युग तक संपूर्ण 9 प्रमुख अध्याय।</li>
          <li>सरल हिंदी में मुख्य बातें, तुलना वाली प्रामाणिक सारणियाँ और परीक्षा-उपयोगी तथ्य।</li>
          <li>महत्वपूर्ण स्थल, नदियाँ, शासक, लेखक, धार्मिक प्रतीक और याद रखने के सिद्ध सूत्र।</li>
          <li>अंत में संपूर्ण समय-रेखा, 14 प्रमुख शब्दावलियाँ और 30 अभ्यास MCQ परीक्षा सिमुलेटर।</li>
        </ul>
        <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
          💡 <b>पढ़ने का सही तरीका:</b> पहले हर अध्याय की &ldquo;आसान समझ&rdquo; पढ़ें। फिर सारणी का विश्लेषण करें। अंत में उस अध्याय के याद रखने वाले मुख्य बिंदु दोहराएँ और नीचे अभ्यास MCQ हल करें।
        </div>
      </section>

      {/* Chapter 1: Stone Age */}
      <section
        id="c1"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-900">
            अध्याय 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            प्रागैतिहासिक भारत और पाषाण काल (Stone Age)
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          प्रागैतिहासिक काल वह समय है जिसके बारे में जानकारी मुख्य रूप से पुराने पत्थरों के औजारों, गुफा चित्रों और पुरातात्विक अवशेषों से मिलती है।
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">काल</th>
                <th className="p-3">समय सीमा</th>
                <th className="p-3">औजार</th>
                <th className="p-3">जीवन-शैली</th>
                <th className="p-3">मुख्य स्थल</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold text-indigo-600 dark:text-indigo-400">पुरापाषाण</td>
                <td className="p-3 font-mono">500,000 – 10,000 ई.पू.</td>
                <td className="p-3">बड़े पत्थर, हाथ-कुल्हाड़ी (Handaxe)</td>
                <td className="p-3">हिमयुग; शिकार व भोजन संग्रहण; कोई स्थायी घर नहीं</td>
                <td className="p-3">सोन घाटी, बेलन घाटी (उ.प्र.), भीमबेटका (म.प्र.)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">मध्यपाषाण</td>
                <td className="p-3 font-mono">9000 – 4000 ई.पू.</td>
                <td className="p-3">माइक्रोलिथ (अति सूक्ष्म औजार); धनुष-बाण</td>
                <td className="p-3">समूह शिकार; पशुपालन के शुरुआती प्रमाण</td>
                <td className="p-3">बागोर (राजस्थान), आदमगढ़ (म.प्र.), सराय नाहर राय (उ.प्र.)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-amber-600 dark:text-amber-400">नवपाषाण</td>
                <td className="p-3 font-mono">7000 – 1000 ई.पू.</td>
                <td className="p-3">घिसकर चमकाए गए पॉलिशदार धारदार औजार</td>
                <td className="p-3">खेती, स्थायी बस्तियाँ, अनाज भंडारण मिट्टी बर्तन</td>
                <td className="p-3">मेहरगढ़ (बलूचिस्तान), बुर्जहोम (कश्मीर), चिरांद (बिहार)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">John Evans खोज</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              भारत में मध्यपाषाण काल की सामग्री सर्वप्रथम John Evans द्वारा खोजी गई थी।
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400">मेहरगढ़ डेंटल ड्रिलिंग</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              मेहरगढ़ में लगभग 9,000 वर्ष पूर्व दाँतों का उपचार ड्रिल तकनीक (Dental Drilling) से किया जाता था।
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400">मिट्टी के बर्तन प्रकार</span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Grey Ware (धूसर), Black Burnished Ware (काले चमकदार), Matte Impressed Ware।
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2: Chalcolithic */}
      <section
        id="c2"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
            अध्याय 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            ताम्रपाषाण काल और शुरुआती धातु का उपयोग (Chalcolithic Age)
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          पत्थर के साथ ताँबे का साथ-साथ उपयोग – इसलिए &ldquo;ताँबा + पत्थर&rdquo; काल। समय सीमा: 3500 – 1000 ई.पू.। काले और लाल मृद्भांड (Black and Red Ware) इस काल की पहचान थे।
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">संस्कृति</th>
                <th className="p-3">क्षेत्र / विस्तार</th>
                <th className="p-3">मुख्य स्थल</th>
                <th className="p-3">परीक्षा-उपयोगी मुख्य तथ्य</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold">आहड़ संस्कृति</td>
                <td className="p-3">राजस्थान</td>
                <td className="p-3">गिलूंड</td>
                <td className="p-3">कच्ची ईंटों के साथ पकी ईंटों के उपयोग का विशिष्ट प्रमाण</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">कायथा संस्कृति</td>
                <td className="p-3">मध्य प्रदेश</td>
                <td className="p-3">कायथा</td>
                <td className="p-3">घोड़े के अवशेष और समृद्ध कुल्हाड़ियों के प्रमाण</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">मालवा संस्कृति</td>
                <td className="p-3">मध्य प्रदेश</td>
                <td className="p-3">नवदाटोली (नर्मदा तट)</td>
                <td className="p-3">कृषि प्रधान बस्तियाँ और उत्कृष्ट चित्रित मृद्भांड</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">जोरवे संस्कृति</td>
                <td className="p-3">महाराष्ट्र</td>
                <td className="p-3">इनामगांव, जोरवे</td>
                <td className="p-3">घरों के आकार में अंतर = सामाजिक स्तरीकरण का संकेत</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">OCP संस्कृति</td>
                <td className="p-3">गंगा घाटी / उत्तर भारत</td>
                <td className="p-3">अतरंजीखेड़ा, सैपई</td>
                <td className="p-3">गेरुए रंग के बर्तन (Ochre Coloured) व ताँबे के विशाल भंडार</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Chapter 3: Indus Valley */}
      <section
        id="c3"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-900">
            अध्याय 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            सिंधुघाटी सभ्यता / हड़प्पा सभ्यता (Indus Valley Civilization)
          </h2>
        </div>

        {/* 4 Boundaries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 block uppercase">उत्तरी सीमा</span>
            <span className="text-xs sm:text-sm font-semibold">मांडा (चिनाब, जम्मू)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 block uppercase">दक्षिणी सीमा</span>
            <span className="text-xs sm:text-sm font-semibold">दैमाबाद (प्रवरा, महाराष्ट्र)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 block uppercase">पूर्वी सीमा</span>
            <span className="text-xs sm:text-sm font-semibold">आलमगीरपुर (हिंडन, उ.प्र.)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 block uppercase">पश्चिमी सीमा</span>
            <span className="text-xs sm:text-sm font-semibold">सुत्कागेन-दोर (दाश्त, बलूचिस्तान)</span>
          </div>
        </div>

        {/* Important Sites Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">स्थल</th>
                <th className="p-3">नदी / खोजकर्ता / वर्ष</th>
                <th className="p-3">सर्वाधिक महत्वपूर्ण खोजें</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold">हड़प्पा</td>
                <td className="p-3">रावी नदी; दयाराम साहनी (1921)</td>
                <td className="p-3">लाल पत्थर का पुरुष धड़, 12 विशाल अन्नागार, उर्वरता की देवी</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">मोहनजोदड़ो</td>
                <td className="p-3">सिंधु नदी; राखालदास बनर्जी (1922)</td>
                <td className="p-3">विशाल स्नानागार, काँस्य नर्तकी, दाढ़ी वाले पुजारी की मूर्ति (UNESCO 1980)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">लोथल</td>
                <td className="p-3">भोगावा नदी (गुजरात); S.R. Rao</td>
                <td className="p-3">विश्व का पहला ज्वारीय गोदी (Dockyard), कपास व्यापार, फारस की मुहर</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">धोलावीरा</td>
                <td className="p-3">कच्छ (गुजरात); R.S. Bisht</td>
                <td className="p-3">त्रि-स्तरीय नगर योजना, उन्नत जल संचयन प्रणाली, साइनबोर्ड लिपि</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">कालीबंगा</td>
                <td className="p-3">घग्घर नदी (राजस्थान); A. Ghosh</td>
                <td className="p-3">जुते हुए खेत के साक्ष्य, हवन कुंड/अग्निकुंड, ऊँट की हड्डियाँ</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">चन्हूदड़ो</td>
                <td className="p-3">सिंधु नदी (पाकिस्तान); N.G. Majumdar</td>
                <td className="p-3">मनके बनाने का कारखाना, लिपस्टिक व सौंदर्य प्रसाधन (एकमात्र बिना दुर्ग का नगर)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">राखीगढ़ी / भिरड़ाना</td>
                <td className="p-3">हरियाणा</td>
                <td className="p-3">उपमहाद्वीप का विशालतम हड़प्पाई स्थल; भिरड़ाना सबसे प्राचीन बस्ती</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">बनावली</td>
                <td className="p-3">हरियाणा</td>
                <td className="p-3">मिट्टी का हल खिलौना, उपमहाद्वीप में लहसुन के प्राचीनतम साक्ष्य</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Chapter 4: Vedic */}
      <section
        id="c4"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900">
            अध्याय 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            लौह युग और वैदिक सभ्यता (Vedic Civilization)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">मैक्स मूलर का सिद्धांत</span>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              आर्यों का मूल निवास मध्य एशिया था। यह सर्वाधिक स्वीकृत ऐतिहासिक मत है।
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400">बाल गंगाधर तिलक का सिद्धांत</span>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              &lsquo;द आर्कटिक होम इन द वेदाज&rsquo; के अनुसार आर्यों का मूल निवास उत्तरी ध्रुव / आर्कटिक क्षेत्र था।
            </p>
          </div>
        </div>

        {/* Early vs Later Vedic Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">तुलना का आधार</th>
                <th className="p-3 text-indigo-600 dark:text-indigo-400">ऋग्वैदिक काल (1500–1000 ई.पू.)</th>
                <th className="p-3 text-teal-600 dark:text-teal-400">उत्तर वैदिक काल (1000–600 ई.पू.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold">प्रमुख ग्रंथ</td>
                <td className="p-3">ऋग्वेद (10 मंडल, 1028 सूक्त)</td>
                <td className="p-3">सामवेद, यजुर्वेद, अथर्ववेद, उपनिषद</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">राजनीतिक ढाँचा</td>
                <td className="p-3">कबीलाई (सभा, समिति, विदथ सक्रिय)</td>
                <td className="p-3">क्षेत्रीय राज्य (जन से जनपद; राजा की शक्ति बढ़ी)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">सामाजिक व्यवस्था</td>
                <td className="p-3">कर्म आधारित लचीली वर्णव्यवस्था</td>
                <td className="p-3">जन्म आधारित कठोर जातिप्रथा; गोत्र व्यवस्था का उदय</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">महिलाओं की स्थिति</td>
                <td className="p-3">यज्ञ व सभा में सहभागिता, उपनयन संस्कार</td>
                <td className="p-3">पर्दा प्रथा, बाल विवाह की शुरुआत, स्थिति में गिरावट</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">लोहे की भूमिका</td>
                <td className="p-3">ताँबा/काँसा (अयस) का उपयोग</td>
                <td className="p-3">श्याम अयस (लोहा); जंगलों की सफाई व कृषि विस्तार</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
          💡 <b>त्रयस्त्रिंशति कोटि (Trayastrimsati Koti) स्पष्टीकरण:</b> मूल वैदिक ग्रंथों के अनुसार इसका सही अर्थ 33 सर्वोच्च/प्रमुख प्रकार के देवता है, 33 करोड़ नहीं (12 आदित्य + 11 रुद्र + 8 वसु + 2 अश्विनी कुमार = 33)।
        </div>
      </section>

      {/* Chapter 5: Buddhism & Jainism */}
      <section
        id="c5"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900">
            अध्याय 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            बौद्ध धर्म एवं जैन धर्म (Buddhism & Jainism)
          </h2>
        </div>

        {/* Buddha Symbols */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">
            बुद्ध के जीवन से जुड़े 5 प्रमुख प्रतीक
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-xl">🪷</span>
              <span className="text-xs font-bold block mt-1">जन्म</span>
              <span className="text-[11px] text-slate-500">कमल व साँड़</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-xl">🐎</span>
              <span className="text-xs font-bold block mt-1">महाभिनिष्क्रमण</span>
              <span className="text-[11px] text-slate-500">घोड़ा (कंठक)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-xl">🌳</span>
              <span className="text-xs font-bold block mt-1">निर्वाण / ज्ञान</span>
              <span className="text-[11px] text-slate-500">बोधि वृक्ष (बोधगया)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-xl">☸️</span>
              <span className="text-xs font-bold block mt-1">प्रथम उपदेश</span>
              <span className="text-[11px] text-slate-500">धर्मचक्र (सारनाथ)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-xl">🏛️</span>
              <span className="text-xs font-bold block mt-1">महापरिनिर्वाण</span>
              <span className="text-[11px] text-slate-500">स्तूप (कुशीनगर)</span>
            </div>
          </div>
        </div>

        {/* Jain Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
              जैन त्रिरत्न एवं 5 महाव्रत
            </h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
              <li><b>त्रिरत्न:</b> सम्यक दर्शन (श्रद्धा), सम्यक ज्ञान, सम्यक चरित्र (आचरण)।</li>
              <li><b>पाँच महाव्रत:</b> अहिंसा, सत्य, अस्तेय (चोरी न करना), अपरिग्रह (संग्रह न करना)।</li>
              <li><b>पाँचवाँ महाव्रत:</b> ब्रह्मचर्य – 24वें तीर्थंकर महावीर स्वामी द्वारा जोड़ा गया।</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase">
              अनेकांतवाद एवं स्याद्वाद
            </h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
              <li><b>अनेकांतवाद:</b> सत्य के अनेक पहलू होते हैं; किसी एक दृष्टि से संपूर्ण सत्य नहीं जाना जा सकता।</li>
              <li><b>स्याद्वाद:</b> सापेक्षता का सिद्धांत; प्रत्येक निर्णय किसी निश्चित परिस्थिति में ही सत्य होता है।</li>
              <li><b>विभाजन:</b> दिगंबर (भद्रबाहु, नग्न, दक्षिण) व श्वेतांबर (स्थूलभद्र, श्वेत वस्त्र, उत्तर)।</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 6: 16 Mahajanapadas */}
      <section
        id="c6"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-900">
            अध्याय 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            16 महाजनपद और मगध साम्राज्य का उदय (16 Mahajanapadas)
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">महाजनपद</th>
                <th className="p-3">राजधानी</th>
                <th className="p-3">शासन प्रणाली</th>
                <th className="p-3">विशेष तथ्य</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-semibold text-indigo-600 dark:text-indigo-400">मगध</td>
                <td className="p-3">राजगृह / पाटलिपुत्र</td>
                <td className="p-3">राजतंत्र</td>
                <td className="p-3">गंगा, सोन व चंपा से घिरा; भारत का शक्तिशाली साम्राज्य</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">वज्जि</td>
                <td className="p-3">वैशाली</td>
                <td className="p-3 font-bold text-teal-600">गणराज्य (संघ)</td>
                <td className="p-3">8 कुलों का प्रसिद्ध संघ (लिच्छवि प्रमुख)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">मल्ल</td>
                <td className="p-3">कुशीनगर / पावा</td>
                <td className="p-3 font-bold text-teal-600">गणराज्य</td>
                <td className="p-3">महावीर का निर्वाण पावा में; बुद्ध का महापरिनिर्वाण कुशीनगर में</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">काशी</td>
                <td className="p-3">वाराणसी</td>
                <td className="p-3">राजतंत्र</td>
                <td className="p-3">वरुणा और असी नदियों के संगम पर स्थित</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">कोसल</td>
                <td className="p-3">श्रावस्ती / अयोध्या</td>
                <td className="p-3">राजतंत्र</td>
                <td className="p-3">प्रसेनजित प्रसिद्ध शासक; शाक्य गणराज्य इसी के अधीन था</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">अवंति</td>
                <td className="p-3">उज्जयिनी / महिष्मती</td>
                <td className="p-3">राजतंत्र</td>
                <td className="p-3">मालवा क्षेत्र; चंडप्रद्योत शक्तिशाली राजा</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">गांधार</td>
                <td className="p-3">तक्षशिला</td>
                <td className="p-3">राजतंत्र</td>
                <td className="p-3">उत्तर-पश्चिम का विश्वप्रसिद्ध शिक्षा व व्यापार केंद्र</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">अश्मक (अस्सक)</td>
                <td className="p-3">पोतली / पैठण</td>
                <td className="p-3">राजतंत्र</td>
                <td className="p-3 font-semibold text-amber-600">दक्षिण भारत (गोदावरी तट) में एकमात्र महाजनपद</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">शूरसेन</td>
                <td className="p-3">मथुरा</td>
                <td className="p-3">राजतंत्र</td>
                <td className="p-3">यमुना तट पर स्थित; अवंतिपुत्र प्रमुख शासक</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">वत्स</td>
                <td className="p-3">कौशांबी</td>
                <td className="p-3">राजतंत्र</td>
                <td className="p-3">प्रयागराज के समीप; उदयन प्रसिद्ध शासक</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
          ⚡ <b>मगध के उत्कर्ष के तीन अचूक स्तंभ:</b> (1) तीन ओर से प्राकृतिक नदियों (गंगा, सोन, गंडक) द्वारा जल-दुर्ग सुरक्षा और व्यापारिक जलमार्ग। (2) छोटानागपुर/झारखंड से प्रचुर लौह अयस्क (हथियार और कृषि हल)। (3) जंगलों से युद्ध के हाथियों का सेना में प्रथम बार संगठित उपयोग।
        </div>
      </section>

      {/* Chapter 7: Mauryan & Post-Mauryan */}
      <section
        id="c7"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
            अध्याय 7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            मौर्य और मौर्योत्तर राजवंश (Mauryan & Post-Mauryan)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
              मौर्य गुप्तचर व प्रशासन व्यवस्था
            </h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
              <li><b>महामात्य पसर्प:</b> कौटिल्य के अर्थशास्त्र के अनुसार गुप्तचर विभाग का सर्वोच्च अध्यक्ष।</li>
              <li><b>गूढ़ पुरुष / संस्था:</b> एक ही स्थान पर रहकर गुप्त सूचना जुटाने वाले गुप्तचर।</li>
              <li><b>संचार:</b> घूम-घूमकर राज्य भर से सूचना एकत्र करने वाले भ्रमणशील गुप्तचर।</li>
              <li>महिलाएँ सम्राट की प्रमुख व्यक्तिगत अंगरक्षक के रूप में तैनात होती थीं।</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase">
              मौर्योत्तर राजवंशों का क्रम
            </h4>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
              <li><b>शुंग वंश (185 ई.पू.):</b> पुष्यमित्र शुंग ने अंतिम मौर्य वृहद्रथ का वध कर स्थापना की। पतंजलि ने 2 अश्वमेध यज्ञ करवाए। कालिदास के मालविकाग्निमित्रम् का नायक अग्निमित्र था।</li>
              <li><b>कण्व वंश (73 ई.पू.):</b> वासुदेव ने अंतिम शुंग शासक देवभूति की हत्या कर स्थापना की।</li>
              <li><b>सातवाहन वंश:</b> सिमुक द्वारा स्थापित; राजधानी प्रतिष्ठान (पैठण)। राजा हाल ने प्राकृत &lsquo;गाथा सप्तशती&rsquo; लिखी। गौतमीपुत्र सातकर्णि ने कर-मुक्त भूमि अनुदान शुरू किया।</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 8: Gupta Empire & Sangam Era */}
      <section
        id="c8"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-900">
            अध्याय 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            गुप्त साम्राज्य, वाकाटक कूटनीति और संगम युग (Gupta & Sangam)
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
              चंद्रगुप्त द्वितीय (विक्रमादित्य) व वाकाटक वैवाहिक गठबंधन
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              पश्चिमी भारत के शकों (Sakas) का उन्मूलन करने के लिए चंद्रगुप्त द्वितीय ने अपनी पुत्री <b>प्रभावती गुप्त</b> का विवाह दक्कन के शक्तिशाली वाकाटक राजा <b>रुद्रसेन द्वितीय</b> से कराया। रुद्रसेन की असामयिक मृत्यु के उपरांत प्रभावती गुप्त ने लगभग 20 वर्षों तक अपने अल्पवयस्क पुत्रों की ओर से संरक्षिका (Regent) के रूप में शासन किया, जिससे गुप्तों का नियंत्रण दक्कन तक स्थापित हो गया।
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase">
              संगम युग: दक्षिण भारत के तीन राज्य
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <b>चेर (Cheras):</b> केरल तट; प्रतीक: धनुष-बाण; प्रसिद्ध शासक: शेनगुट्टुवन (लाल चेर)।
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <b>चोल (Cholas):</b> कावेरी डेल्टा; प्रतीक: बाघ; प्रसिद्ध शासक: करिकाल (कावेरी पर कल्लानाई बाँध)।
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <b>पांड्य (Pandyas):</b> मदुरै; प्रतीक: मछली; मोतियों के लिए प्रसिद्ध; तीनों संगमों का संरक्षण किया।
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 9: Rapid Revision */}
      <section
        id="c9"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
            अध्याय 9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            SSC CGL परीक्षा के लिए अंतिम रैपिड रिवीजन
          </h2>
        </div>

        {/* Firsts in Ancient History */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">तथ्य</th>
                <th className="p-3 text-indigo-600 dark:text-indigo-400">उत्तर / संबंधित स्थल</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-medium">मध्यपाषाण सामग्री सबसे पहले किसने खोजी?</td>
                <td className="p-3 font-semibold">John Evans</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">सबसे पुराना हड़प्पाई स्थल (2015 खोज)</td>
                <td className="p-3 font-semibold">भिरड़ाना (हरियाणा)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">भारत का पहला हड़प्पाई UNESCO विश्व धरोहर स्थल</td>
                <td className="p-3 font-semibold">धोलावीरा (गुजरात)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">उपमहाद्वीप में लहसुन के प्राचीनतम प्रमाण</td>
                <td className="p-3 font-semibold">बनावली (हरियाणा)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">दाँतों की ड्रिलिंग (Dental Drilling) के प्रमाण</td>
                <td className="p-3 font-semibold">मेहरगढ़ (~9,000 वर्ष पूर्व)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">ब्राह्मणों को कर-मुक्त भूमि दान देने की परंपरा</td>
                <td className="p-3 font-semibold">सातवाहन वंश (गौतमीपुत्र सातकर्णि)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4 Traps to Avoid */}
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/60 space-y-2">
          <h4 className="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase">
            ⚠️ परीक्षा में गलती से बचने वाले 4 बिंदु
          </h4>
          <ol className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-decimal pl-4">
            <li><b>Trayastrimsati Koti:</b> इसका अर्थ 33 प्रमुख/सर्वोच्च देवता है, 33 करोड़ नहीं।</li>
            <li><b>मौर्य गुप्तचर:</b> गूढ़ पुरुष = स्थिर रहकर काम करने वाले; संचार = घूम-घूमकर सूचना लाने वाले।</li>
            <li><b>जैन दर्शन:</b> अनेकांतवाद = सत्य के अनेक पहलू; स्याद्वाद = परिस्थिति आधारित सापेक्ष सत्य।</li>
            <li><b>इतिहास का कालक्रम:</b> पत्थर के औजार → खेती → ताँबा → हड़प्पाई नगर → लोहा → महाजनपद और साम्राज्य।</li>
          </ol>
        </div>
      </section>

      {/* Chapter 10: Glossary */}
      <section
        id="c10"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900">
            अध्याय 10
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            10. सरल शब्दावली एवं संकल्पनाएँ (Glossary)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <b>प्रागैतिहासिक (Prehistoric):</b> लिखित इतिहास से पहले का समय; केवल औजारों और अवशेषों से ज्ञात।
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <b>माइक्रोलिथ (Microlith):</b> मध्यपाषाण काल के छोटे, नुकीले व परिष्कृत पत्थर के औजार।
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <b>दुर्ग (Citadel):</b> हड़प्पाई नगर का पश्चिमी, ऊँचा और प्राचीर से सुरक्षित विशिष्ट टीला।
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <b>गोदी (Dockyard):</b> बंदरगाह का वह भाग जहाँ नौकाएँ ठहरती हैं और माल उतारा-चढ़ाया जाता है।
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <b>ग्रिड पैटर्न (Grid Pattern):</b> सड़कें जो समकोण पर 90° पर काटती हैं और नगर सुनियोजित बनता है।
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <b>गण-संघ (Republics):</b> जहाँ एक राजा नहीं बल्कि कबीलाई सभा या प्रतिनिधियों की परिषद शासन चलाती थी।
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <b>महापरिनिर्वाण:</b> बौद्ध परंपरा में भगवान बुद्ध का अंतिम देह त्याग और निर्वाण।
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <b>कैवल्य ज्ञान:</b> जैन दर्शन में सर्वोच्च व पूर्ण आध्यात्मिक ज्ञान की अवस्था।
          </div>
        </div>
      </section>

      {/* Chapter 11: 10m Revision Plan */}
      <section
        id="c11"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-900">
            अध्याय 11
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            11. परीक्षा से पहले 10 मिनट का त्वरित रिवीजन प्लान
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">00–02 min</span>
            <span>पाषाण काल के तीन चरण (पुरापाषाण = शिकार, मध्य = माइक्रोलिथ, नव = खेती) बोलकर दोहराएँ।</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">02–04 min</span>
            <span>हड़प्पा सभ्यता के 4 छोर और मुख्य स्थल (लोथल गोदी, धोलावीरा जल, मोहनजोदड़ो स्नानागार) देखें।</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">04–06 min</span>
            <span>ऋग्वैदिक व उत्तर वैदिक काल में लोहे का प्रभाव और वर्णव्यवस्था के अंतर को दोहराएँ।</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">06–08 min</span>
            <span>बुद्ध के 5 प्रतीक, जैन धर्म के त्रिरत्न, 5 महाव्रत और महाजनपदों की राजधानियाँ रिवाइज करें।</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">08–10 min</span>
            <span>मौर्य गुप्तचर (गूढ़ पुरुष/संचार) और शुंग-सातवाहन-गुप्त-संगम वंशों के प्रमुख राजा दोहराएँ।</span>
          </div>
        </div>
      </section>

      {/* Chapter 12: Practice 30 MCQs */}
      <section
        id="c12"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
              अध्याय 12
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              SSC CGL शैली अभ्यास: 30 महत्वपूर्ण MCQ परीक्षा सिमुलेटर
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          प्रत्येक प्रश्न में चार विकल्प हैं और केवल एक सही उत्तर है। विकल्प चुनते ही तुरंत सही/गलत का परिणाम और विस्तृत ऐतिहासिक व्याख्या दिखेगी। लक्षित समय: 20–25 मिनट।
        </p>

        {/* Live Interactive MCQ Quiz Component */}
        <AncientHistoryQuiz />
      </section>
    </div>
  );
}
