"use client";

import React from "react";
import { AncientHistoryQuiz } from "./AncientHistoryQuiz";

const chaptersNav = [
  { id: "c0", label: "इस नोटबुक में", short: "Overview" },
  { id: "c1", label: "1. पाषाण काल", short: "Stone Age" },
  { id: "c2", label: "2. ताम्रपाषाण", short: "Chalcolithic" },
  { id: "c3", label: "3. सिंधुघाटी", short: "Harappa" },
  { id: "c4", label: "4. वैदिक काल", short: "Vedic" },
  { id: "c5", label: "5. बौद्ध-जैन", short: "Buddhism-Jainism" },
  { id: "c6", label: "6. महाजनपद", short: "16 Mahajanapadas" },
  { id: "c7", label: "7. मौर्य व बाद", short: "Mauryan" },
  { id: "c8", label: "8. गुप्त-संगम", short: "Gupta & Sangam" },
  { id: "c9", label: "9. अंतिम रिवीजन", short: "Rapid Revision" },
  { id: "c10", label: "10. शब्दावली", short: "Glossary" },
  { id: "c11", label: "11. रिवीजन प्लान", short: "10m Plan" },
  { id: "c12", label: "12. अभ्यास MCQ", short: "30 MCQs" },
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
      <nav className="sticky top-16 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-y border-slate-200/90 dark:border-slate-800/90 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 no-scrollbar scroll-smooth">
          {chaptersNav.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 transition-colors cursor-pointer"
            >
              {ch.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Section c0: Overview & Table of Contents */}
      <section
        id="c0"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-5"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            इस नोटबुक में क्या मिलेगा?
          </h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>प्रागैतिहासिक काल से गुप्त काल और संगम युग तक 9 अध्याय।</li>
            <li>आसान भाषा में मुख्य बातें, तुलना वाली सारणियाँ और परीक्षा के महत्वपूर्ण तथ्य।</li>
            <li>महत्वपूर्ण स्थल, नदियाँ, शासक, लेखक, धार्मिक प्रतीक और याद रखने के सूत्र।</li>
            <li>अंत में पूरी समय-रेखा और तेज़ रिवीजन के लिए एक पन्ने का सार।</li>
          </ul>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-medium">
          💡 <b>पढ़ने का तरीका:</b> पहले हर अध्याय की &ldquo;आसान समझ&rdquo; पढ़ें। फिर सारणी देखें। अंत में उस अध्याय के याद रखने वाले बिंदु दोहराएँ।
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            विषय-सूची
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-4 list-disc">
            <li>1. प्रागैतिहासिक भारत और पाषाण काल</li>
            <li>2. ताम्रपाषाण काल और शुरुआती धातु का उपयोग</li>
            <li>3. सिंधुघाटी सभ्यता / हड़प्पा सभ्यता</li>
            <li>4. लौह युग और वैदिक सभ्यता</li>
            <li>5. बौद्ध धर्म और जैन धर्म</li>
            <li>6. 16 महाजनपद और मगध का उदय</li>
            <li>7. मौर्य और मौर्योत्तर राजवंश</li>
            <li>8. गुप्त साम्राज्य, वाकाटक संबंध और संगम युग</li>
            <li>9. SSC CGL के लिए अंतिम रिवीजन</li>
          </ul>
        </div>
      </section>

      {/* Section c1: Stone Age */}
      <section
        id="c1"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 1. प्रागैतिहासिक भारत और पाषाण काल
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            प्रागैतिहासिक काल वह समय है जिसके बारे में जानकारी मुख्य रूप से पुराने औजारों, बस्तियों और पुरातात्विक अवशेषों से मिलती है। इस काल को औजारों और जीवन-शैली के आधार पर समझें।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            1.1 पाषाण काल के तीन मुख्य चरण
          </h3>
          <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
            💡 याद रखें: पहले बड़े पत्थर के औजार, फिर छोटे नुकीले औजार, और अंत में खेती तथा स्थायी जीवन।
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">काल</th>
                  <th className="p-3 font-mono">समय</th>
                  <th className="p-3">औजार</th>
                  <th className="p-3">जीवन</th>
                  <th className="p-3">मुख्य स्थल</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">पुरापाषाण</td>
                  <td className="p-3 font-mono">500,000 – 10,000 ई.पू.</td>
                  <td className="p-3">बड़े पत्थर, हाथ-कुल्हाड़ी</td>
                  <td className="p-3">बर्फ़ीला समय; शिकार और भोजन जुटाना; स्थायी निवास नहीं</td>
                  <td className="p-3">सोन घाटी, बेलन घाटी (उ.प्र.), डीडवाना (राजस्थान), भीमबेटका (म.प्र.)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-600 dark:text-purple-400">उत्तर पुरापाषाण</td>
                  <td className="p-3">हिमयुग के अंत का संक्रमण काल</td>
                  <td className="p-3">ब्लेड जैसे नुकीले औजार</td>
                  <td className="p-3">मौसम गर्म होने लगा; औजार बेहतर बने</td>
                  <td className="p-3">नागार्जुनकोंडा (आं.प्र.), नेवासा व धवलपुरी (महाराष्ट्र), बेलन घाटी</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-teal-600 dark:text-teal-400">मध्यपाषाण</td>
                  <td className="p-3 font-mono">9000 – 4000 ई.पू.</td>
                  <td className="p-3">माइक्रोलिथ; धनुष-बाण</td>
                  <td className="p-3">समूह में शिकार; पशुपालन के शुरुआती प्रमाण</td>
                  <td className="p-3">बागोर (राजस्थान), आदमगढ़ (म.प्र.), सराय नाहर राय (उ.प्र.)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-600 dark:text-amber-400">नवपाषाण</td>
                  <td className="p-3 font-mono">7000 – 1000 ई.पू.</td>
                  <td className="p-3">घिसकर चमकाए तेज़ औजार</td>
                  <td className="p-3">खेती, स्थायी बस्तियाँ, अनाज, मिट्टी के बर्तन</td>
                  <td className="p-3">मेहरगढ़ (बलूचिस्तान), बेलन घाटी, कश्मीर घाटी</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            1.2 हर काल को बहुत आसान तरीके से समझें
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <b className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block">
                पुरापाषाण – शिकार और भोजन जुटाने का समय
              </b>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                हिमयुग का कठिन समय। लोग शिकार करते और जंगल से फल, कंद-मूल इकट्ठा करते थे; एक जगह स्थायी नहीं रहते थे। औजार: बड़े साधारण पत्थर, हाथ-कुल्हाड़ी। याद: पुराने/बड़े औजार + घूमता जीवन।
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <b className="text-xs font-bold text-teal-600 dark:text-teal-400 block">
                मध्यपाषाण – छोटे औजारों का समय
              </b>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                माइक्रोलिथ यानी बहुत छोटे नुकीले पत्थर के औजार। धनुष-बाण और समूह में शिकार। पशुपालन के शुरुआती प्रमाण: बागोर (राजस्थान), आदमगढ़ (म.प्र.)।
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <b className="text-xs font-bold text-amber-600 dark:text-amber-400 block">
                नवपाषाण – खेती और स्थायी जीवन
              </b>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                पत्थर घिसकर चिकने, चमकदार, तेज़ बनाए जाते थे। गेहूँ, जौ, चावल, बाजरा की खेती। लोग स्थायी रूप से बसे; अनाज रखने के लिए मिट्टी के बर्तन बढ़े।
              </p>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5 pt-2">
            <li><b>पुरापाषाण:</b> नोट के अनुसार हिमयुग (Ice Age) का कठिन समय। लोग शिकार करते थे और जंगल से फल, कंद-मूल आदि इकट्ठा करके खाते थे। याद रखें: पुरापाषाण = पुराने/बड़े पत्थर के औजार + घूमता हुआ जीवन।</li>
            <li><b>मध्यपाषाण:</b> धनुष-बाण का उपयोग और समूह में शिकार का उल्लेख। पशुओं को पालने के शुरुआती प्रमाण बागोर (राजस्थान) और आदमगढ़ (म.प्र.) से जुड़े हैं।</li>
            <li><b>नवपाषाण:</b> पत्थरों को घिसकर चिकना, चमकदार और तेज़ बनाया जाता था। लोग स्थायी रूप से बसने लगे और अनाज रखने के लिए मिट्टी के बर्तनों का इस्तेमाल बढ़ा।</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            मध्यपाषाण और नवपाषाण विशेष
          </h3>
          <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>मध्यपाषाण सामग्री भारत में सबसे पहले <b>John Evans</b> ने खोजी।</li>
            <li>नवपाषाण फसलें: गेहूँ, जौ, चावल, बाजरा।</li>
            <li>मेहरगढ़ में लगभग 9,000 साल पहले दाँतों का उपचार ड्रिल से होता था (<b>Dental Drilling</b>)।</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            1.3 मिट्टी के बर्तनों के तीन प्रकार
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            Grey Ware (धूसर), Black Burnished Ware (काले चमकदार), Matte Impressed Ware (छाप/डिज़ाइन वाले)।
          </p>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
          💡 झटपट: पुरापाषाण = शिकार; मध्यपाषाण = छोटे औजार; नवपाषाण = खेती।
        </div>
      </section>

      {/* Section c2: Chalcolithic */}
      <section
        id="c2"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 2. ताम्रपाषाण काल और शुरुआती धातु का उपयोग
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            पत्थर के साथ ताँबे का उपयोग – इसलिए &ldquo;ताँबा + पत्थर&rdquo; काल। समय: 3500 – 1000 ई.पू. ग्रामीण घर मिट्टी/कच्ची ईंटों के; लकड़ी के हल का उल्लेख; काले-लाल बर्तन (Black and Red Ware) प्रमुख।
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            2.1 मुख्य पहचान
          </h3>
          <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>समय: 3500 – 1000 ई.पू. (मूल नोट के अनुसार)। धातु: ताँबा।</li>
            <li>औजार: ताँबे और पत्थर, दोनों के औजार साथ-साथ इस्तेमाल होते थे।</li>
            <li>गाँव: अधिकतर घर मिट्टी/कच्ची ईंटों से बनते थे। लकड़ी के हल का भी उल्लेख है।</li>
            <li>बर्तनों में काले और लाल रंग के बर्तन (Black and Red Ware) प्रमुख बताए गए हैं।</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            2.2 क्षेत्रीय संस्कृतियाँ और उनके खास तथ्य
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">संस्कृति</th>
                  <th className="p-3">क्षेत्र</th>
                  <th className="p-3">मुख्य स्थल</th>
                  <th className="p-3">याद रखें</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">आहड़</td>
                  <td className="p-3">राजस्थान</td>
                  <td className="p-3">गिलूंड</td>
                  <td className="p-3">कच्ची ईंटों के साथ पकी ईंटों का उपयोग</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">कायथा</td>
                  <td className="p-3">मध्य प्रदेश</td>
                  <td className="p-3">कायथा</td>
                  <td className="p-3">घोड़े के अवशेष का उल्लेख</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">मालवा</td>
                  <td className="p-3">मध्य प्रदेश</td>
                  <td className="p-3">नवदाटोली, नर्मदा तट</td>
                  <td className="p-3">कृषि गाँव और चित्रित बर्तन</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">जोरवे</td>
                  <td className="p-3">महाराष्ट्र</td>
                  <td className="p-3">जोरवे</td>
                  <td className="p-3">घरों के आकार में अंतर = सामाजिक असमानता का संकेत</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">OCP</td>
                  <td className="p-3">उत्तर-मध्य भारत</td>
                  <td className="p-3">Ochre Coloured Pottery</td>
                  <td className="p-3">गेरुए बर्तन, ताँबे के भंडार (Copper Hoards)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
          💡 ट्रिक: आहड़–गिलूंड–पकी ईंट; मालवा–नवदाटोली–नर्मदा; OCP–गेरुए बर्तन और ताँबे के भंडार।
        </div>
      </section>

      {/* Section c3: Indus Valley */}
      <section
        id="c3"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 3. सिंधुघाटी / हड़प्पा सभ्यता
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            दक्षिण एशिया की शुरुआती नगरीय सभ्यता: योजनाबद्ध शहर, पकी ईंटें, नालियाँ, व्यापार। समय: 3300 – 1300 ई.पू. (मूल नोट के अनुसार)।
          </p>
        </div>

        {/* 4 Directions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <b className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block uppercase">उत्तर</b>
            <span className="text-xs sm:text-sm font-semibold">मांडा (जम्मू-कश्मीर)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <b className="text-xs font-bold text-teal-600 dark:text-teal-400 block uppercase">दक्षिण</b>
            <span className="text-xs sm:text-sm font-semibold">दैमाबाद (महाराष्ट्र)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <b className="text-xs font-bold text-amber-600 dark:text-amber-400 block uppercase">पूर्व</b>
            <span className="text-xs sm:text-sm font-semibold">आलमगीरपुर (उ.प्र.)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <b className="text-xs font-bold text-rose-600 dark:text-rose-400 block uppercase">पश्चिम</b>
            <span className="text-xs sm:text-sm font-semibold">सुत्कागेन-दोर, मेहरगढ़ (पाकिस्तान / मकरान तट)</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            शहरों की बनावट
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>पकी मानकीकृत ईंटें: घर और इमारतें भट्ठे में पकाई गई ईंटों से बनती थीं; ग्रिड योजना: सड़कें एक-दूसरे को लगभग 90° पर काटती थीं, यानी शहर योजना बनाकर बसाए गए थे।</li>
            <li>ऊँचा दुर्ग/गढ़ (Citadel) और निचला नगर।</li>
            <li>धार्मिक संकेत: पेड़ की मुहरें, मातृदेवी, पशुपति मुहर, प्रकृति-पूजा।</li>
            <li>राजमहल या मंदिर के स्पष्ट अवशेष नहीं; शासन में व्यापारी वर्ग/लोकतांत्रिक व्यवस्था की संभावना – यह नोट का दावा है, पक्का निष्कर्ष नहीं।</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            महत्वपूर्ण स्थल
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">स्थल</th>
                  <th className="p-3">स्थान / नदी</th>
                  <th className="p-3">खास खोज</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">हड़प्पा</td>
                  <td className="p-3">रावी; 1921</td>
                  <td className="p-3">लाल पत्थर का पुरुष धड़, बड़े अन्नागार, उर्वरता के पत्थर प्रतीक</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">मोहनजोदड़ो</td>
                  <td className="p-3">सिंधु; 1922; R. D. Banerji</td>
                  <td className="p-3">महान स्नानागार, काँस्य नृत्य करती लड़की, दाढ़ी वाले व्यक्ति की मूर्ति; UNESCO (1980)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">लोथल</td>
                  <td className="p-3">गुजरात; भोगावा</td>
                  <td className="p-3">गोदी (Dockyard), कपास व्यापार केंद्र; &ldquo;हड़प्पा का मैनचेस्टर&rdquo;</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">धोलावीरा</td>
                  <td className="p-3">गुजरात</td>
                  <td className="p-3">उन्नत जल-संग्रह प्रणाली, पत्थर की संरचनाएँ; भारत का पहला हड़प्पाई UNESCO स्थल</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">राखीगढ़ी</td>
                  <td className="p-3">हरियाणा</td>
                  <td className="p-3">कुत्ता पालने के प्रमाण; सोने-ताँबे के आभूषण</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">भिरड़ाना</td>
                  <td className="p-3">हरियाणा</td>
                  <td className="p-3">2015 में सबसे पुराने हड़प्पाई स्थल के रूप में पहचान</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">बनावली</td>
                  <td className="p-3">हरियाणा</td>
                  <td className="p-3">उपमहाद्वीप में लहसुन के शुरुआती प्रमाण</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">चन्हूदड़ो</td>
                  <td className="p-3">सिंध, पाकिस्तान</td>
                  <td className="p-3">मनके, कपड़ा, लिपस्टिक/सौंदर्य सामग्री का औद्योगिक केंद्र</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">कालीबंगा</td>
                  <td className="p-3">राजस्थान; घग्घर</td>
                  <td className="p-3">अग्निकुंड और जुते हुए खेत</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">रोपड़</td>
                  <td className="p-3">पंजाब</td>
                  <td className="p-3">एक कब्र में मनुष्य और कुत्ते का संयुक्त दफन</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">सुरकोटड़ा, सिनौली</td>
                  <td className="p-3">गुजरात, उ.प्र.</td>
                  <td className="p-3">घोड़े की हड्डियाँ और रथों के अवशेष</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            साइट देखकर क्या याद करें?
          </h3>
          <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>महान स्नानागार और काँस्य नृत्य करती लड़की – मोहनजोदड़ो</li>
            <li>गोदी / Dockyard – लोथल</li>
            <li>जल-संग्रह प्रणाली – धोलावीरा</li>
            <li>जुता हुआ खेत और अग्निकुंड – कालीबंगा</li>
            <li>बड़े अन्नागार – हड़प्पा</li>
            <li>मनके और शिल्प-उद्योग – चन्हूदड़ो</li>
          </ul>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
          💡 मोहनजोदड़ो = स्नानागार; लोथल = गोदी; धोलावीरा = पानी; कालीबंगा = खेत/अग्निकुंड; हड़प्पा = अन्नागार; चन्हूदड़ो = मनके।
        </div>
      </section>

      {/* Section c4: Vedic */}
      <section
        id="c4"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 4. लौह युग और वैदिक सभ्यता
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            हड़प्पा सभ्यता के बाद वैदिक संस्कृति का विकास हुआ। इस अध्याय में दो बातें सबसे महत्वपूर्ण हैं: लोहे के उपयोग का प्रभाव और प्रारंभिक/उत्तर वैदिक काल का अंतर।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <b className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block">मैक्स मूलर</b>
            <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">आर्य मध्य एशिया से आए।</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <b className="text-xs font-bold text-teal-600 dark:text-teal-400 block">बाल गंगाधर तिलक</b>
            <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">मूल स्थान आर्कटिक / साइबेरियाई क्षेत्र।</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            लोहे से क्या बदला?
          </h3>
          <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>गंगा-यमुना मैदानों में घने जंगल काटना आसान हुआ।</li>
            <li>गहरी जुताई, उत्पादन में वृद्धि, अतिरिक्त उत्पादन (Agrarian Surplus)।</li>
            <li>इसी से बड़े राज्यों और महाजनपदों का विकास।</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            प्रारंभिक बनाम उत्तर वैदिक
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">आधार</th>
                  <th className="p-3 font-semibold text-indigo-600 dark:text-indigo-400">प्रारंभिक (1500–1000 ई.पू.)</th>
                  <th className="p-3 font-semibold text-teal-600 dark:text-teal-400">उत्तर (1000–600 ई.पू.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">ग्रंथ</td>
                  <td className="p-3">ऋग्वेद</td>
                  <td className="p-3">सामवेद, यजुर्वेद, अथर्ववेद (नोट में रामायण-महाभारत का भी उल्लेख)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">राजनीति</td>
                  <td className="p-3">कबीलाई व्यवस्था, पशुपालन से जुड़ी सत्ता</td>
                  <td className="p-3">क्षेत्रीय राज्य; जंगल साफ करने में लोहे की भूमिका</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">समाज</td>
                  <td className="p-3">वर्णव्यवस्था अपेक्षाकृत लचीली</td>
                  <td className="p-3">जन्म आधारित कठोर जाति व्यवस्था; महिलाओं की स्थिति में गिरावट</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">धर्म</td>
                  <td className="p-3">प्रकृति पूजा; 33 प्रमुख देवता</td>
                  <td className="p-3">प्रजापति, रुद्र, विष्णु; महँगे यज्ञ और पशु बलि</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">अर्थव्यवस्था</td>
                  <td className="p-3">पशुधन प्रमुख; वस्तु-विनिमय</td>
                  <td className="p-3">खेती और लोहे का हल; वस्तु-विनिमय जारी</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          दस राजाओं का युद्ध (ऋग्वेद) रावी नदी क्षेत्र से जुड़ा – प्रारंभिक वैदिक काल की महत्वपूर्ण राजनीतिक घटना।
        </p>

        <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
          💡 भ्रम से बचें: Trayastrimsati Koti = 33 सर्वोच्च/प्रमुख देवता, 33 करोड़ नहीं।
        </div>
      </section>

      {/* Section c5: Buddhism & Jainism */}
      <section
        id="c5"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 5. बौद्ध धर्म और जैन धर्म
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            उत्तर वैदिक काल में बड़े यज्ञों और पशुबलि के विरोध की पृष्ठभूमि में बौद्ध और जैन परंपराओं का विकास हुआ। इस अध्याय में जीवन-घटनाएँ, प्रतीक, सिद्धांत और सभाएँ याद करें।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            गौतम बुद्ध
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            शाक्य कुल में जन्म (नोट में कोसल राज्य से संबंध)। अंतिम भोजन पावा (मल्ल गणराज्य) में; महापरिनिर्वाण कुशीनगर में।
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">घटना</th>
                  <th className="p-3">प्रतीक</th>
                  <th className="p-3">स्थान / अर्थ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">जन्म</td>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">कमल</td>
                  <td className="p-3">शाक्य कुल</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">महाभिनिष्क्रमण</td>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">घोड़ा</td>
                  <td className="p-3">राजसी जीवन छोड़कर सत्य की खोज</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">ज्ञान प्राप्ति</td>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">बोधि वृक्ष</td>
                  <td className="p-3">गया</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">पहला उपदेश</td>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">धर्मचक्र</td>
                  <td className="p-3">सारनाथ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">महापरिनिर्वाण</td>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">अंतिम मुक्ति</td>
                  <td className="p-3">कुशीनगर</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 mt-3">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">शाखा</th>
                  <th className="p-3">भाषा / मान्यता</th>
                  <th className="p-3">पहचान</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">हीनयान</td>
                  <td className="p-3">पाली; बुद्ध मानव गुरु</td>
                  <td className="p-3">मूर्ति पूजा नहीं</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">महायान</td>
                  <td className="p-3">संस्कृत; बुद्ध दिव्य रूप</td>
                  <td className="p-3">बोधिसत्त्व की अवधारणा</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">वज्रयान</td>
                  <td className="p-3">तांत्रिक साधना</td>
                  <td className="p-3">तिब्बत, भूटान, मंगोलिया; लगभग 5.7% अनुयायी</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            जैन धर्म
          </h3>
          <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>पहले तीर्थंकर: ऋषभनाथ। 24वें: महावीर (540–467 ई.पू.), जन्म कुंडग्राम, वैशाली।</li>
            <li>कैवल्य ज्ञान ऋजुपालिका नदी के किनारे; निर्वाण पावापुरी।</li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <b className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block">त्रिरत्न</b>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                सम्यक दर्शन (सही विश्वास), सम्यक ज्ञान, सम्यक चरित्र (सही आचरण)
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <b className="text-xs font-bold text-teal-600 dark:text-teal-400 block">पाँच महाव्रत</b>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                अहिंसा – किसी जीव को नुकसान न पहुँचाना; सत्य – सच बोलना; अस्तेय – चोरी न करना; अपरिग्रह – जरूरत से ज्यादा चीजों का संग्रह न करना; ब्रह्मचर्य – इंद्रियों पर संयम (पाँचवाँ सिद्धांत महावीर ने जोड़ा)
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <b className="text-xs font-bold text-purple-600 dark:text-purple-400 block">अनेकांतवाद</b>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                सत्य के कई पहलू; एक ही दृष्टिकोण से पूरी बात नहीं समझी जा सकती
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <b className="text-xs font-bold text-amber-600 dark:text-amber-400 block">स्याद्वाद</b>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                शर्त/परिस्थिति के आधार पर सत्य, सापेक्ष
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">समूह</th>
                  <th className="p-3">पहचान</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">दिगंबर</td>
                  <td className="p-3">भद्रबाहु दक्षिण गए; नग्न साधु; कठोर तपस्या; मोक्ष के लिए स्त्री का पुरुष रूप में पुनर्जन्म आवश्यक माना</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-teal-600 dark:text-teal-400">श्वेतांबर</td>
                  <td className="p-3">स्थूलभद्र उत्तर में रहे; सफेद वस्त्र; महिलाएँ भी मोक्ष पा सकती हैं</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 mt-2">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">जैन सभा</th>
                  <th className="p-3">स्थान, समय</th>
                  <th className="p-3">विशेष</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">पहली</td>
                  <td className="p-3">पाटलिपुत्र; 330 ई.पू.</td>
                  <td className="p-3">स्थूलभद्र के नेतृत्व में</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">दूसरी</td>
                  <td className="p-3">वल्लभी; 512 ई.</td>
                  <td className="p-3">दिगंबरों ने भाग नहीं लिया</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium space-y-1">
          <div>💡 <b>बुद्ध के प्रतीक:</b> जन्म–कमल; घर छोड़ना–घोड़ा; ज्ञान–बोधि वृक्ष; पहला उपदेश–चक्र; महापरिनिर्वाण–कुशीनगर।</div>
          <div>💡 <b>जैन दर्शन:</b> अनेकांतवाद = सत्य के कई पहलू (एक दृष्टि से पूरी बात नहीं समझी जा सकती); स्याद्वाद = शर्त के साथ कही गई बात।</div>
        </div>
      </section>

      {/* Section c6: 16 Mahajanapadas */}
      <section
        id="c6"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 6. 16 महाजनपद और मगध का उदय
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            लगभग छठी शताब्दी ई.पू. में लोहे के औजारों और खेती के अतिरिक्त उत्पादन से बड़े-बड़े राज्यों का विकास हुआ। इन्हें महाजनपद कहा गया।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            6.1 शासन व्यवस्था के दो रूप
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <b>राजतंत्र:</b> मगध, कोसल, काशी, अंग, अवंति, वत्स। <b>गणतंत्र:</b> वज्जि, मल्ल।
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">शासन का प्रकार</th>
                  <th className="p-3">आसान अर्थ</th>
                  <th className="p-3">उदाहरण</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold text-indigo-600 dark:text-indigo-400">राजतंत्र (Monarchy)</td>
                  <td className="p-3">राजा का पद आमतौर पर परिवार/वंश में आगे बढ़ता था</td>
                  <td className="p-3">मगध, कोसल, काशी, अंग, अवंति, वत्स</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">गणतंत्र / गण-संघ (Republic)</td>
                  <td className="p-3">एक व्यक्ति के बजाय सभा या समूह के माध्यम से शासन; नेतृत्व का चुनाव/चयन</td>
                  <td className="p-3">वज्जि और मल्ल</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            6.2 प्रमुख महाजनपद, राजधानी और खास तथ्य
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">महाजनपद</th>
                  <th className="p-3">राजधानी</th>
                  <th className="p-3">शासन</th>
                  <th className="p-3">तथ्य</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">मगध</td>
                  <td className="p-3">राजगृह / पाटलिपुत्र</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">गंगा, सोन, चंपा से घिरा</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">अंग</td>
                  <td className="p-3">चंपा</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">मगध के पूर्व का व्यापारिक केंद्र</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">वज्जि</td>
                  <td className="p-3">वैशाली</td>
                  <td className="p-3 font-semibold text-teal-600">गणतंत्र</td>
                  <td className="p-3">लिच्छवि संघ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">मल्ल</td>
                  <td className="p-3">कुशीनगर, पावा</td>
                  <td className="p-3 font-semibold text-teal-600">गणतंत्र</td>
                  <td className="p-3">बुद्ध का अंतिम भोजन पावा; महापरिनिर्वाण कुशीनगर</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">काशी</td>
                  <td className="p-3">वाराणसी</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">वरुणा और असी नदियाँ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">कोसल</td>
                  <td className="p-3">श्रावस्ती / कुशावती</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">शाक्य क्षेत्र; प्रसेनजित और बिंबिसार का वैवाहिक संबंध</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">अवंति</td>
                  <td className="p-3">महिष्मती, उज्जयिनी</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">मालवा; दो राजधानियाँ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">कंबोज</td>
                  <td className="p-3">पूंछ</td>
                  <td className="p-3">दोनों प्रकार</td>
                  <td className="p-3">अच्छे घोड़े</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">गांधार</td>
                  <td className="p-3">तक्षशिला</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">उत्तर-पश्चिम का व्यापारिक केंद्र</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">चेदि</td>
                  <td className="p-3">शुक्तिमती (सुक्तिमती)</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">बुंदेलखंड क्षेत्र</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">वत्स</td>
                  <td className="p-3">कौशांबी</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">प्रयागराज (इलाहाबाद) के पास; प्रसिद्ध शासक उदयन</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">कुरु</td>
                  <td className="p-3">इंद्रप्रस्थ (हस्तिनापुर का भी उल्लेख)</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">दिल्ली–मेरठ क्षेत्र</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">पांचाल</td>
                  <td className="p-3">अहिच्छत्र (उत्तर), कांपिल्य (दक्षिण)</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">रोहिलखंड / पश्चिमी उ.प्र.; दो हिस्सों में बंटा</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">मत्स्य</td>
                  <td className="p-3">विराटनगर</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">जयपुर (राजस्थान) क्षेत्र</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">शूरसेन / सूरसेन</td>
                  <td className="p-3">मथुरा</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">यमुना तट; मूल नोट की नदी सारणी में भी उल्लेख</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">अश्मक (अस्सक)</td>
                  <td className="p-3">पोतली / पोतन (प्रतिष्ठान/पैठण के नाम से भी)</td>
                  <td className="p-3">राजतंत्र</td>
                  <td className="p-3">गोदावरी तट (महाराष्ट्र/तेलंगाना); दक्षिण भारत का महाजनपद</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
            💡 16 महाजनपद: अंग, मगध, काशी, कोसल, वज्जि, मल्ल, चेदि, वत्स, कुरु, पांचाल, मत्स्य, शूरसेन, अश्मक, अवंति, गांधार, कंबोज।
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            नोट: मूल नोट में 16 महाजनपदों का शीर्षक था, पर विस्तार सिर्फ़ पहले 9 का। पहली 9 पंक्तियाँ नोट के अनुसार हैं। बाकी 7 (चेदि, वत्स, कुरु, पांचाल, मत्स्य, शूरसेन, अश्मक) अंगुत्तर निकाय की सामान्य मानक सूची के अनुसार हैं।
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            मगध क्यों शक्तिशाली?
          </h3>
          <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>गंगा, सोन, चंपा से सुरक्षा और व्यापार मार्ग।</li>
            <li>झारखंड क्षेत्र से लौह अयस्क – हथियार और औजार।</li>
            <li>जंगलों से युद्ध के हाथी।</li>
          </ul>
          <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
            💡 सूत्र: नदियाँ + लोहा + युद्ध के हाथी = मगध की शक्ति।
          </div>
        </div>
      </section>

      {/* Section c7: Mauryan & Post-Mauryan */}
      <section
        id="c7"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 7. मौर्य और मौर्योत्तर राजवंश
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            इस भाग में मौर्य प्रशासन और गुप्तचर व्यवस्था के बाद शुंग, कण्व और सातवाहन राजवंशों के प्रमुख तथ्य दिए गए हैं।
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            मौर्य प्रशासन
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>अमात्य और महामात्र जैसे अधिकारी; महामात्र उच्च अधिकारी।</li>
            <li><b>महामात्य पसर्प:</b> गुप्तचर विभाग प्रमुख। <b>गूढ़ पुरुष:</b> एक जगह रहकर सूचना जुटाने वाले। <b>संचार:</b> घूमकर खबर लाने वाले।</li>
            <li>महिलाएँ राजमहल की अंगरक्षक और गुप्तचर; तलाक और पुनर्विवाह के कानूनी अधिकार का उल्लेख।</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            मौर्योत्तर
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">वंश</th>
                  <th className="p-3">मुख्य तथ्य</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">शुंग</td>
                  <td className="p-3 leading-relaxed">संस्थापक पुष्यमित्र शुंग; ब्राह्मण परंपरा का पुनरुत्थान; दो अश्वमेध यज्ञ, पतंजलि ने संचालन किया; अग्निमित्र कालिदास के &ldquo;मालविकाग्निमित्रम्&rdquo; का नायक; अंतिम शासक देवभूति की 73 ई.पू. में मंत्री वासुदेव ने हत्या की।</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-600 dark:text-purple-400">कण्व</td>
                  <td className="p-3 leading-relaxed">73 ई.पू. में वासुदेव ने स्थापना की।</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-teal-600 dark:text-teal-400">सातवाहन</td>
                  <td className="p-3 leading-relaxed">संस्थापक सिमुक (लगभग 100 ई.पू.); राजधानी प्रतिष्ठान (औरंगाबाद के पास); राजा हाल – प्राकृत &ldquo;गाथा सप्तशती&rdquo;; गौतमीपुत्र सातकर्णि ने ब्राह्मणों को कर-मुक्त भूमि दान की परंपरा शुरू की।</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
            💡 शुंग = पुष्यमित्र; कण्व = वासुदेव; सातवाहन = सिमुक; गाथा सप्तशती = राजा हाल।
          </div>
        </div>
      </section>

      {/* Section c8: Gupta & Sangam */}
      <section
        id="c8"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 8. गुप्त साम्राज्य, वाकाटक संबंध और संगम युग
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            इस अध्याय में गुप्त काल, चंद्रगुप्त द्वितीय की राजनीतिक रणनीति और दक्षिण भारत के संगम युग का संक्षिप्त परिचय है।
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li>गुप्त काल = भारतीय संस्कृति का स्वर्णयुग; रामायण-महाभारत की ताड़पत्र पांडुलिपियों का उल्लेख।</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            वाकाटक संबंध
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li>चंद्रगुप्त द्वितीय (विक्रमादित्य) ने पश्चिमी शकों को हराने के उद्देश्य से बेटी <b>प्रभावती गुप्त</b> का विवाह वाकाटक राजा <b>रुद्रसेन द्वितीय</b> से कराया।</li>
            <li>रुद्रसेन की मृत्यु के बाद प्रभावती गुप्त ने लगभग 20 वर्ष बेटे की ओर से शासन किया (<b>Regency</b>)।</li>
            <li>बाद में पुत्र <b>प्रवरसेन द्वितीय</b> ने गद्दी संभाली।</li>
          </ol>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2">
            <b>गुप्तोत्तर शक्तियाँ:</b> मौखरी (उ.प्र.-बिहार), गौड़ (बंगाल), चेदि।
          </p>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <b>संगम युग:</b> दक्षिण भारत के तमिल क्षेत्र से जुड़ा; तीन राजवंश – <b>चेर, चोल, पांड्य</b>। मूल नोट में इनके प्रशासनिक संस्थानों और तमिल तटीय राज्यों का उल्लेख है।
          </p>

          <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium">
            💡 मुख्य संबंध: चंद्रगुप्त द्वितीय → प्रभावती गुप्त का विवाह → वाकाटक राजा रुद्रसेन द्वितीय।
          </div>
        </div>
      </section>

      {/* Section c9: Rapid Revision */}
      <section
        id="c9"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            अध्याय 9. SSC CGL के लिए अंतिम रिवीजन
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            अब पूरे सप्ताह के सबसे महत्वपूर्ण तथ्यों को छोटे समूहों में दोहराएँ। इस भाग को परीक्षा से पहले जल्दी-जल्दी पढ़ने के लिए बनाया गया है।
          </p>
        </div>

        {/* Firsts Table */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            प्राचीन इतिहास के &ldquo;पहले&rdquo; और सबसे पुराने तथ्य
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">तथ्य</th>
                  <th className="p-3">उत्तर</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-medium">मध्यपाषाण सामग्री सबसे पहले किसने खोजी?</td>
                  <td className="p-3 font-semibold text-indigo-600 dark:text-indigo-400">John Evans</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">सबसे पुराना हड़प्पाई स्थल</td>
                  <td className="p-3 font-semibold">भिरड़ाना, हरियाणा</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">पहला हड़प्पाई UNESCO स्थल</td>
                  <td className="p-3 font-semibold">धोलावीरा</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">लहसुन के प्रमाण</td>
                  <td className="p-3 font-semibold">बनावली</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">दाँतों की ड्रिलिंग</td>
                  <td className="p-3 font-semibold">मेहरगढ़, ~9,000 साल पहले</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">कर-मुक्त भूमि दान</td>
                  <td className="p-3 font-semibold text-teal-600 dark:text-teal-400">सातवाहन; गौतमीपुत्र सातकर्णि</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* River - Site - Event Table */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            नदी – स्थल – घटना
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">नदी</th>
                  <th className="p-3">स्थल / घटना</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold text-indigo-600 dark:text-indigo-400">रावी</td>
                  <td className="p-3">हड़प्पा; दस राजाओं का युद्ध</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">नर्मदा</td>
                  <td className="p-3">नवदाटोली</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">ऋजुपालिका</td>
                  <td className="p-3">महावीर का कैवल्य ज्ञान</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">वरुणा, असी</td>
                  <td className="p-3">वाराणसी</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">गंगा, सोन, चंपा</td>
                  <td className="p-3">मगध</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">यमुना</td>
                  <td className="p-3">मथुरा (सूरसेन)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ruler - Scholar - Composition Table */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            शासक – लेखक / विद्वान – रचना
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">शासक / व्यक्ति</th>
                  <th className="p-3">लेखक / रचना</th>
                  <th className="p-3">याद रखें</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold">पुष्यमित्र शुंग</td>
                  <td className="p-3">पतंजलि</td>
                  <td className="p-3">दो अश्वमेध यज्ञों का संचालन</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">अग्निमित्र</td>
                  <td className="p-3">कालिदास – मालविकाग्निमित्रम्</td>
                  <td className="p-3">नाटक का मुख्य पात्र</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">राजा हाल</td>
                  <td className="p-3">गाथा सप्तशती</td>
                  <td className="p-3">प्राकृत भाषा की रचना</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">राजा उदयन (वत्स)</td>
                  <td className="p-3">7वीं–8वीं शताब्दी के संस्कृत नाटकों का पात्र (मूल नोट)</td>
                  <td className="p-3">संस्कृत नाटकों से जुड़ा नाम</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Full Timeline */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            पूरी प्राचीन इतिहास की समय-रेखा
          </h3>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li><b>पुरापाषाण:</b> बड़े पत्थर के औजार, शिकार और भोजन जुटाना</li>
            <li><b>मध्यपाषाण:</b> छोटे औजार (Microliths), समूह में शिकार</li>
            <li><b>नवपाषाण:</b> खेती, स्थायी बस्तियाँ और मिट्टी के बर्तन</li>
            <li><b>ताम्रपाषाण:</b> ताँबा और पत्थर के औजार साथ-साथ</li>
            <li><b>सिंधुघाटी सभ्यता:</b> पकी ईंटें, योजनाबद्ध शहर, नालियाँ और व्यापार</li>
            <li><b>वैदिक काल:</b> लोहे का उपयोग, खेती का विस्तार और क्षेत्रीय राज्य</li>
            <li><b>महाजनपद काल:</b> 16 महाजनपद और मगध का उदय</li>
            <li><b>मौर्य और बाद के राजवंश:</b> केंद्रीय शासन, गुप्तचर और अलग-अलग राजवंश</li>
            <li><b>गुप्त और संगम युग:</b> गुप्त सांस्कृतिक उत्कर्ष; चेर, चोल और पांड्य</li>
          </ol>
        </div>

        {/* 4 Traps to Avoid */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            परीक्षा में गलती से बचने वाले चार बिंदु
          </h3>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li><b>Trayastrimsati Koti:</b> मूल नोट के अनुसार इसका अर्थ 33 प्रमुख/सर्वोच्च देवता है, 33 करोड़ नहीं।</li>
            <li><b>मौर्य गुप्तचर:</b> गूढ़ पुरुष = एक जगह रहकर काम करने वाले; संचार = घूमकर जानकारी लाने वाले।</li>
            <li><b>जैन दर्शन:</b> अनेकांतवाद = सत्य के कई पहलू; स्याद्वाद = शर्त के आधार पर सत्य।</li>
            <li><b>इतिहास का क्रम:</b> पत्थर के औजार → खेती → ताँबा → हड़प्पाई नगर → लोहा → महाजनपद और साम्राज्य।</li>
          </ol>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/70 text-xs text-amber-900 dark:text-amber-200 font-medium space-y-1">
          <div>💡 <b>गलती से बचें:</b> 33 प्रमुख देवता (करोड़ नहीं) • गूढ़ पुरुष = स्थिर, संचार = घुमंतू • अनेकांतवाद = कई पहलू, स्याद्वाद = शर्त सहित सत्य • क्रम: पत्थर → खेती → ताँबा → हड़प्पा → लोहा → महाजनपद।</div>
          <div>💡 <b>अंतिम सूत्र:</b> पहले औजार बदले, फिर जीवन-शैली; खेती से गाँव बने, धातुओं से शक्ति बढ़ी, फिर बड़े राज्य और साम्राज्य बने।</div>
        </div>
      </section>

      {/* Section c10: Glossary (All 14 Terms) */}
      <section
        id="c10"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-5"
      >
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            10. बहुत आसान शब्दावली (14 आवश्यक शब्द)
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 w-1/3">शब्द</th>
                <th className="p-3">आसान अर्थ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">प्रागैतिहासिक</td>
                <td className="p-3">लिखित इतिहास से पहले का समय; जानकारी औजारों/अवशेषों से</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">Nomadic / घुमंतू</td>
                <td className="p-3">एक जगह स्थायी न रहकर जगह-जगह घूमना</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">Microlith</td>
                <td className="p-3">छोटा और नुकीला पत्थर का औजार</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">स्थायी खेती</td>
                <td className="p-3">एक जगह बसकर खेती करना</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">ताम्रपाषाण</td>
                <td className="p-3">ताँबे और पत्थर के औजारों का साथ में उपयोग</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">अन्नागार (Granary)</td>
                <td className="p-3">अनाज जमा करने की जगह</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">गोदी (Dockyard)</td>
                <td className="p-3">जहाँ नाव/जहाज रुकते और माल चढ़ाया-उतारा जाता है</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">दुर्ग / Citadel</td>
                <td className="p-3">शहर का ऊँचा और सुरक्षित हिस्सा</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">नगर योजना / Grid Pattern</td>
                <td className="p-3">सड़कों और इमारतों को योजना के अनुसार व्यवस्थित करना</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">अतिरिक्त कृषि उत्पादन</td>
                <td className="p-3">जरूरत से ज्यादा पैदा हुआ अनाज</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">गणतंत्र / गण-संघ</td>
                <td className="p-3">जहाँ शासन किसी सभा या समूह के माध्यम से चलता है</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">महापरिनिर्वाण</td>
                <td className="p-3">बौद्ध परंपरा में बुद्ध का अंतिम निर्वाण/देह त्याग</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">कैवल्य ज्ञान</td>
                <td className="p-3">जैन परंपरा में पूर्ण ज्ञान की अवस्था</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">Regent / संरक्षक शासक</td>
                <td className="p-3">उत्तराधिकारी के छोटे/अनुपस्थित होने पर कोई दूसरा उसकी ओर से शासन चलाए</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section c11: 10m Revision Plan */}
      <section
        id="c11"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-5"
      >
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            11. 10 मिनट का रिवीजन प्लान
          </h2>
        </div>

        <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <li><b>पहले 2 मिनट:</b> पाषाण काल के तीन चरण और उनकी पहचान बोलकर दोहराएँ।</li>
          <li><b>अगले 2 मिनट:</b> ताम्रपाषाण संस्कृतियाँ और हड़प्पा स्थलों की खास खोजें देखें।</li>
          <li><b>अगले 2 मिनट:</b> प्रारंभिक और उत्तर वैदिक काल का अंतर दोहराएँ।</li>
          <li><b>अगले 2 मिनट:</b> बुद्ध के प्रतीक, जैन त्रिरत्न और पाँच व्रत दोहराएँ।</li>
          <li><b>अगले 1 मिनट:</b> महाजनपद और मगध के शक्तिशाली बनने के तीन कारण बोलें।</li>
          <li><b>अंतिम 1 मिनट:</b> राजवंश, लेखक-रचना और नदी-स्थल की सारणियाँ देखें।</li>
        </ol>
      </section>

      {/* Section c12: Practice 30 MCQs */}
      <section
        id="c12"
        className="scroll-mt-36 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xs space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            12. SSC CGL शैली अभ्यास: 30 महत्वपूर्ण MCQ
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            प्रश्न इन नोट्स के 9 अध्यायों पर आधारित हैं। प्रत्येक प्रश्न में चार विकल्प हैं और केवल एक सही। विकल्प चुनते ही सही उत्तर और व्याख्या दिखेगी। लक्ष्य समय 25–30 मिनट।
          </p>
        </div>

        {/* Live Interactive MCQ Quiz Component */}
        <AncientHistoryQuiz />
      </section>
    </div>
  );
}
