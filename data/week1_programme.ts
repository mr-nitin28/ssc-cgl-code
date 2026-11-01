export interface TimetableBlock {
  subject: string;
  time: string;
  minutes: number;
  activity: string;
  color: string;
}

export interface DayRoadmapItem {
  day: string;
  math: string;
  langReasoning: string;
  ga: string;
}

export interface ResourceLink {
  title: string;
  platform: string;
  url: string;
  description: string;
  isPrimary?: boolean;
}

export interface Week1Data {
  title: string;
  subtitle: string;
  level: string;
  overview: string;
  weeklyStructure: {
    totalMinutes: number;
    totalHours: number;
    daysCount: number;
    dailyMinutes: number;
    subjectSplits: {
      math: number;
      english: number;
      reasoning: number;
      ga: number;
    };
    timetable: TimetableBlock[];
  };
  fiveDayRoadmap: {
    rationale: string;
    schedule: DayRoadmapItem[];
  };
  days: {
    id: string;
    dayName: string;
    title: string;
    subtitle: string;
    subjects: {
      subject: "Mathematics" | "English" | "Reasoning" | "General Awareness";
      topic: string;
      time: string;
      objective: string;
      sections: {
        heading: string;
        content?: string;
        table?: {
          headers: string[];
          rows: string[][];
        };
        formulaBox?: string[];
        rules?: string[];
        examples?: string[];
        patternSpotter?: {
          clue: string;
          method: string;
        }[];
        drillOrPractice?: string;
      }[];
    }[];
    revisionItems?: string[];
  }[];
  resources: {
    primaryPlatform: {
      name: string;
      desc: string;
      url: string;
      note: string;
    };
    subjectResources: {
      subject: string;
      primary: { name: string; url: string };
      additional: { name: string; url: string };
    }[];
    officialBookmarks: {
      name: string;
      url: string;
      desc: string;
    }[];
  };
  homework: {
    day: string;
    math: string;
    langReasoning: string;
    ga: string;
  }[];
  masteryChecklist: {
    id: string;
    label: string;
    subject: "math" | "english" | "reasoning" | "ga";
  }[];
  performanceTargets: {
    subject: string;
    target: string;
  }[];
}

export const week1ProgrammeData: Week1Data = {
  title: "SSC CGL — Week 1 Complete Study Programme",
  subtitle: "Four Subjects Integrated Study Architecture",
  level: "Beginner Level Foundation",
  overview:
    "Your first week will cover Mathematics, English, Reasoning, and General Awareness together. The objective is to build a rock-solid foundation across all four tiers without overwhelming you with too many chapters at once. Built on the 90-minute daily integrated blueprint.",
  weeklyStructure: {
    totalMinutes: 450,
    totalHours: 7.5,
    daysCount: 5,
    dailyMinutes: 90,
    subjectSplits: {
      math: 225,
      english: 75,
      reasoning: 50,
      ga: 100,
    },
    timetable: [
      {
        subject: "Mathematics",
        time: "45 min",
        minutes: 45,
        activity: "Concept breakdown, worked examples & calculation drills",
        color: "indigo",
      },
      {
        subject: "English or Reasoning",
        time: "25 min",
        minutes: 25,
        activity: "Alternate by day (Mon/Wed/Fri: English · Tue/Thu: Reasoning)",
        color: "teal",
      },
      {
        subject: "General Awareness",
        time: "20 min",
        minutes: 20,
        activity: "Learn high-yield facts, maintain short notes & active recall",
        color: "amber",
      },
    ],
  },
  fiveDayRoadmap: {
    rationale:
      "Mathematics begins with calculation and number sense. English begins with sentence construction. Reasoning begins with spatial & letter patterns. General Awareness starts with four major high-yield knowledge domains that can be mastered independently.",
    schedule: [
      {
        day: "Monday",
        math: "Calculation foundation and number types",
        langReasoning: "Sentence structure & 8 parts of speech (English)",
        ga: "Indian Constitution basics & Preamble",
      },
      {
        day: "Tuesday",
        math: "Divisibility rules & prime factorisation",
        langReasoning: "Alphabet positions & letter/number series (Reasoning)",
        ga: "Ancient Indian History (IVC, Vedic, Maurya)",
      },
      {
        day: "Wednesday",
        math: "Prime factorisation, HCF and LCM heuristics",
        langReasoning: "Nouns, pronouns, articles & agreement (English)",
        ga: "Indian Geography (Divisions & River systems)",
      },
      {
        day: "Thursday",
        math: "Fractions, decimals & fraction operations",
        langReasoning: "Analogy, classification & odd-one-out (Reasoning)",
        ga: "Biology fundamentals (Cell structure & vitamins)",
      },
      {
        day: "Friday",
        math: "Percentage foundation & mixed calculation drills",
        langReasoning: "Verbs, basic tenses & vocabulary habit (English)",
        ga: "Economy basics (GDP, RBI, Repo) & weekly revision",
      },
    ],
  },
  days: [
    {
      id: "day-1",
      dayName: "Monday",
      title: "Day 1: Build Your Foundations",
      subtitle: "Calculation & Number System · Sentence Structure · Constitution Basics",
      subjects: [
        {
          subject: "Mathematics",
          topic: "Calculation and Number System",
          time: "45 minutes",
          objective: "Understand the basic types of numbers and build high-confidence operational fluency.",
          sections: [
            {
              heading: "Topic 1: Understanding Numbers",
              content:
                "Numbers form the core taxonomy of quantitative aptitude. Recognizing whether a number is rational, an integer, or irrational immediately guides your algebraic simplification.",
              table: {
                headers: ["Number Type", "Simple Explanation", "Examples"],
                rows: [
                  ["Natural numbers", "Counting numbers starting from 1", "1, 2, 3, 4, ..."],
                  ["Whole numbers", "Natural numbers including zero", "0, 1, 2, 3, ..."],
                  ["Integers", "Negative whole numbers, zero, and positive numbers", "−3, −2, −1, 0, 1, 2"],
                  ["Rational numbers", "Numbers expressible as a fraction p/q where q ≠ 0", "1/2, 3/4, −5, 0.75"],
                  ["Irrational numbers", "Numbers not expressible as a ratio of integers", "√2, √3, π (3.14159...)"],
                  ["Real numbers", "The entire continuum of rational and irrational numbers", "−5, 0, 2.5, √2, π"],
                ],
              },
              formulaBox: [
                "Important Distinction: Every integer is rational, but not every rational number is an integer.",
                "For example: 5 = 5/1 (rational).",
                "Whereas √2 = 1.4142135... cannot be expressed as a ratio of two integers (irrational).",
              ],
            },
            {
              heading: "Topic 2: Four Basic Operations",
              content:
                "Addition combines quantities, subtraction finds absolute differences, multiplication is repeated addition, and division distributes into equal groups.",
              formulaBox: [
                "125 + 75 = 200",
                "500 − 175 = 325",
                "25 × 12 = 300",
                "360 ÷ 12 = 30",
              ],
            },
            {
              heading: "Topic 3: Positive and Negative Numbers",
              table: {
                headers: ["Operation", "Rule", "Example"],
                rows: [
                  ["Positive + Positive", "Add magnitudes, positive answer", "12 + 15 = 27"],
                  ["Negative + Negative", "Add magnitudes, negative answer", "(−8) + (−14) = −22"],
                  ["Positive + Negative", "Subtract smaller from larger, take sign of larger", "−15 + 23 = 23 − 15 = 8"],
                  ["Negative × Negative", "Multiplying two negatives yields positive", "(−6) × (−4) = +24"],
                  ["Positive × Negative", "Multiplying opposite signs yields negative", "7 × (−5) = −35"],
                  ["Negative ÷ Negative", "Dividing two negatives yields positive", "(−36) ÷ (−9) = +4"],
                ],
              },
            },
            {
              heading: "Topic 4: BODMAS Execution Order",
              content:
                "BODMAS defines strict evaluation hierarchy. Division and multiplication hold equal priority (evaluate strictly left-to-right). Addition and subtraction also hold equal priority.",
              rules: [
                "B — Brackets: First evaluate expressions inside ( ), then { }, then [ ]",
                "O — Orders: Powers, indices, square roots, and 'of' operations",
                "D — Division & M — Multiplication: Equal rank, solved left-to-right",
                "A — Addition & S — Subtraction: Equal rank, solved left-to-right",
              ],
              formulaBox: [
                "Solved Example: 24 + 36 ÷ 6 × 2",
                "Step 1 (Divide 36 ÷ 6): = 24 + 6 × 2",
                "Step 2 (Multiply 6 × 2): = 24 + 12",
                "Step 3 (Add 24 + 12): = 36",
              ],
              patternSpotter: [
                { clue: "Multiple arithmetic operations", method: "Apply strict BODMAS sequence" },
                { clue: "Negative values in series", method: "Follow explicit sign multiplication rules" },
                { clue: "Numbers near 100 or 1,000", method: "Use compensation: 998 + 345 = 1000 + 345 − 2 = 1343" },
                { clue: "Multiplication by 25", method: "Multiply by 100, then divide by 4" },
                { clue: "Multiplication by 125", method: "Multiply by 1,000, then divide by 8" },
              ],
              drillOrPractice:
                "Daily Calculation Drill: Recite tables 1–15, memorize squares 1–20, and solve 10 mental arithmetic operations.",
            },
          ],
        },
        {
          subject: "English",
          topic: "Sentence Structure and Parts of Speech",
          time: "25 minutes",
          objective: "Understand English sentence mechanics and identify the 8 foundational parts of speech.",
          sections: [
            {
              heading: "Topic 1: Basic Sentence Structure",
              content:
                "A complete sentence requires a subject, a verb, and often an object or complement to convey clear meaning.",
              table: {
                headers: ["Word in Sentence", "Syntactic Function"],
                rows: [
                  ["Rahul", "Subject (who performs the action)"],
                  ["reads", "Verb (action or state)"],
                  ["a", "Article / Determiner"],
                  ["book", "Object / Noun (receives the action)"],
                ],
              },
            },
            {
              heading: "Topic 2: Eight Parts of Speech",
              table: {
                headers: ["Part of Speech", "Meaning & Function", "Examples"],
                rows: [
                  ["Noun", "Name of person, place, thing, or abstract idea", "Student, Delhi, honesty, iron"],
                  ["Pronoun", "Replaces a noun to avoid awkward repetition", "He, she, they, it, we"],
                  ["Verb", "Expresses an action, occurrence, or state of being", "Run, study, is, was, have"],
                  ["Adjective", "Modifies or describes a noun or pronoun", "Intelligent, difficult, rapid"],
                  ["Adverb", "Modifies a verb, adjective, or another adverb", "Quickly, very, silently"],
                  ["Preposition", "Shows spatial, temporal, or logical relationship", "In, on, at, between, under"],
                  ["Conjunction", "Connects clauses, words, or sentences", "And, but, although, because"],
                  ["Interjection", "Expresses spontaneous emotion or exclamation", "Wow!, Alas!, Hurrah!"],
                ],
              },
              formulaBox: [
                "Solved Breakdown: 'The intelligent student quickly solved the difficult question.'",
                "• The: Definite Article",
                "• Intelligent: Adjective (modifies student)",
                "• Student: Subject Noun",
                "• Quickly: Adverb of manner (modifies solved)",
                "• Solved: Transitive Verb",
                "• Difficult: Adjective (modifies question)",
                "• Question: Direct Object Noun",
              ],
              drillOrPractice:
                "Exam Pattern Recognition: In Error Spotting questions, immediately locate the main subject and its finite verb to test agreement before reading further.",
            },
          ],
        },
        {
          subject: "General Awareness",
          topic: "Indian Constitution Basics & Preamble",
          time: "20 minutes",
          objective: "Understand the constitutional framework, milestone dates, and key preamble tenets.",
          sections: [
            {
              heading: "Topic 1: Constitutional Framework & Milestone Dates",
              content:
                "The Constitution is the supreme law of India, framing governmental organs, citizens' fundamental entitlements, and directive state duties.",
              table: {
                headers: ["Historic Event", "Official Date"],
                rows: [
                  ["Constitution Adopted by Constituent Assembly", "26 November 1949 (National Constitution Day)"],
                  ["Constitution Came into Legal Effect", "26 January 1950 (Commemorated as Republic Day)"],
                ],
              },
            },
            {
              heading: "Topic 2: Preamble Key Philosophy",
              content:
                "The Preamble serves as the preface and identity card of the Constitution. Remember its 9 core pillars: Sovereign, Socialist, Secular, Democratic, Republic, Justice, Liberty, Equality, Fraternity.",
            },
            {
              heading: "Topic 3: Fundamental Rights vs Fundamental Duties",
              table: {
                headers: ["Parameter", "Fundamental Rights (Part III)", "Fundamental Duties (Part IVA)"],
                rows: [
                  ["Nature", "Protect individual liberties against state excess", "Prescribe moral and civic responsibilities"],
                  ["Enforceability", "Justiciable (direct remedy via Article 32 & 226)", "Non-justiciable (moral civic code)"],
                  ["Origin", "Original Constitution (1950)", "Added by 42nd Amendment Act (1976)"],
                ],
              },
              formulaBox: [
                "Memory Tip: Rights are protections you enjoy; duties are responsibilities you owe to the nation.",
              ],
            },
          ],
        },
      ],
      revisionItems: [
        "Difference between natural numbers, whole numbers, and integers",
        "Sign rules for positive/negative arithmetic operations",
        "BODMAS priority hierarchy and left-to-right evaluation",
        "The 8 parts of speech and sentence anatomy",
        "Preamble keywords and constitutional adoption vs effect dates",
      ],
    },
    {
      id: "day-2",
      dayName: "Tuesday",
      title: "Day 2: Number Patterns & Logical Thinking",
      subtitle: "Divisibility Rules · Letter & Number Series · Ancient Indian History",
      subjects: [
        {
          subject: "Mathematics",
          topic: "Divisibility, Factors and Prime Numbers",
          time: "45 minutes",
          objective: "Master divisibility shortcuts up to 11 and express numbers in prime factorization.",
          sections: [
            {
              heading: "Topic 1: Complete Divisibility Heuristics",
              table: {
                headers: ["Divisor", "Divisibility Rule", "Verification Example"],
                rows: [
                  ["2", "Last digit is even (0, 2, 4, 6, 8)", "348 (last digit 8) → Divisible"],
                  ["3", "Sum of digits is divisible by 3", "123 (1+2+3 = 6) → Divisible"],
                  ["4", "Last two digits form a number divisible by 4", "1,216 (16 ÷ 4 = 4) → Divisible"],
                  ["5", "Last digit is 0 or 5", "125 (ends in 5) → Divisible"],
                  ["6", "Simultaneously divisible by both 2 and 3", "126 (even, sum = 9) → Divisible"],
                  ["8", "Last three digits form a number divisible by 8", "1,024 (024 ÷ 8 = 3) → Divisible"],
                  ["9", "Sum of all digits is divisible by 9", "729 (7+2+9 = 18 ÷ 9 = 2) → Divisible"],
                  ["10", "Last digit is exactly 0", "450 (ends in 0) → Divisible"],
                  ["11", "Difference between sum of odd-place & even-place digits is 0 or multiple of 11", "2,728: (2+2) − (7+8) = 4 − 15 = −11 (multiple) → Divisible"],
                ],
              },
              formulaBox: [
                "Solved Check: Is 5,724 divisible by 3?",
                "Digit sum: 5 + 7 + 2 + 4 = 18.",
                "Since 18 is divisible by 3, 5,724 is divisible by 3.",
              ],
            },
            {
              heading: "Topic 2: Factors, Multiples & Prime Numbers",
              content:
                "A factor divides a number with zero remainder. A multiple is obtained by multiplying by integers. A prime number has exactly two positive divisors: 1 and itself. 1 is neither prime nor composite.",
              table: {
                headers: ["Concept", "Definition", "Examples"],
                rows: [
                  ["Factors of 12", "All integers dividing 12 evenly", "1, 2, 3, 4, 6, 12"],
                  ["Multiples of 12", "Generated by multiplying 12 by 1, 2, 3...", "12, 24, 36, 48, 60..."],
                  ["Prime numbers", "Exactly two factors (1 and itself)", "2 (only even prime), 3, 5, 7, 11, 13..."],
                  ["Composite numbers", "More than two positive factors", "4, 6, 8, 9, 10, 12..."],
                ],
              },
              formulaBox: [
                "Prime Factorisation of 60:",
                "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5",
              ],
              drillOrPractice:
                "Practice Drill: Check divisibility of 3,456 by 2, 3, 4, 6, 8, and 9 using mental shortcuts.",
            },
          ],
        },
        {
          subject: "Reasoning",
          topic: "Alphabet Positions, Reverse Codes and Series",
          time: "25 minutes",
          objective: "Internalize 1–26 letter positions, reverse compliments, and sequence triggers.",
          sections: [
            {
              heading: "Topic 1: Alphabet Position Table & Reverse Rule",
              content:
                "Speed in SSC reasoning depends on instantaneously knowing forward positions and reverse complements (sum equals 27).",
              table: {
                headers: ["Letter", "Pos", "Rev (27−Pos)", "Letter", "Pos", "Rev (27−Pos)"],
                rows: [
                  ["A", "1", "26 (Z)", "N", "14", "13 (M)"],
                  ["B", "2", "25 (Y)", "O", "15", "12 (L)"],
                  ["C", "3", "24 (X)", "P", "16", "11 (K)"],
                  ["D", "4", "23 (W)", "Q", "17", "10 (J)"],
                  ["E", "5", "22 (V)", "R", "18", "9 (I)"],
                  ["F", "6", "21 (U)", "S", "19", "8 (H)"],
                  ["G", "7", "20 (T)", "T", "20", "7 (G)"],
                  ["H", "8", "19 (S)", "U", "21", "6 (F)"],
                  ["I", "9", "18 (R)", "V", "22", "5 (E)"],
                  ["J", "10", "17 (Q)", "W", "23", "4 (D)"],
                  ["K", "11", "16 (P)", "X", "24", "3 (C)"],
                  ["L", "12", "15 (O)", "Y", "25", "2 (B)"],
                  ["M", "13", "14 (N)", "Z", "26", "1 (A)"],
                ],
              },
              formulaBox: [
                "Opposite Compliment Pairs: A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N",
                "Reverse Position Formula: Reverse = 27 − Forward Position",
                "Example for C: 27 − 3 = 24th letter = X",
              ],
            },
            {
              heading: "Topic 2: Number & Letter Series Patterns",
              formulaBox: [
                "Number Series: 2, 4, 8, 16, 32, ?",
                "Rule: Each term is multiplied by 2. Next = 32 × 2 = 64.",
                "",
                "Letter Series: B, D, G, K, ?",
                "Numerical values: 2, 4, 7, 11",
                "Differences: +2, +3, +4 → Next difference is +5",
                "11 + 5 = 16th letter = P",
              ],
              rules: [
                "Check 1: Constant or progressive differences between adjacent terms",
                "Check 2: Multiplicative ratios or division progression",
                "Check 3: Perfect squares (n² ± k) or cubes (n³ ± k)",
                "Check 4: Alternating or interleaved sequences",
              ],
            },
          ],
        },
        {
          subject: "General Awareness",
          topic: "Ancient Indian History Essentials",
          time: "20 minutes",
          objective: "Trace ancient timeline from Harappa to the Mauryan Empire.",
          sections: [
            {
              heading: "Topic 1: Indus Valley Civilisation (Bronze Age)",
              rules: [
                "Urban Planning: Grid layout, baked brick masonry, covered underground drainage",
                "Major Sites: Harappa (Ravi), Mohenjo-daro (Great Bath, Indus), Lothal (Tidal dockyard), Dholavira (Water harvesting reservoir)",
              ],
            },
            {
              heading: "Topic 2: Vedic Corpus & Sacred Literature",
              table: {
                headers: ["Veda", "Core Content & Significance"],
                rows: [
                  ["Rigveda", "Oldest text; 1,028 hymns dedicated to natural deities (Indra, Agni)"],
                  ["Samaveda", "Musical chanting and melodic hymns (origin of Indian classical music)"],
                  ["Yajurveda", "Ritual sacrificial formulas and ceremonial mantras"],
                  ["Atharvaveda", "Everyday life, spells, healing traditions, and medicine"],
                ],
              },
            },
            {
              heading: "Topic 3: Buddhism, Jainism & The Mauryas",
              table: {
                headers: ["Tradition / Empire", "Founder / Key Figures", "Crucial Concepts"],
                rows: [
                  ["Buddhism", "Gautama Buddha", "Four Noble Truths, Eightfold Path (Ashtangika Marga), Middle Path"],
                  ["Jainism", "Rishabhanatha (1st), Mahavira (24th)", "Ahimsa (non-violence), Tri-ratna (Right faith, knowledge, conduct)"],
                  ["Mauryan Empire", "Chandragupta Maurya & Chanakya", "Arthashastra; Emperor Ashoka (Kalinga War 261 BCE, Dhamma edicts)"],
                ],
              },
              formulaBox: [
                "Chronological Memory Chain: Indus Valley → Vedic Age → Mahajanapadas & Shramana (Buddhism/Jainism) → Mauryan Empire → Gupta Golden Age",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "day-3",
      dayName: "Wednesday",
      title: "Day 3: HCF/LCM, Grammar & Geography",
      subtitle: "Highest Common Factor & Lowest Common Multiple · Nouns & Agreement · Rivers",
      subjects: [
        {
          subject: "Mathematics",
          topic: "Prime Factorisation, HCF and LCM",
          time: "45 minutes",
          objective: "Find HCF and LCM rapidly using prime powers and recognize practical word problem triggers.",
          sections: [
            {
              heading: "Topic 1: HCF and LCM Definitions",
              content:
                "HCF (Highest Common Factor) is the largest integer dividing all numbers without remainder. LCM (Lowest Common Multiple) is the smallest positive integer divisible by all numbers.",
              formulaBox: [
                "Factors of 18: 1, 2, 3, 6, 9, 18",
                "Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24",
                "Common factors: 1, 2, 3, 6 → HCF = 6",
                "",
                "Multiples of 6: 6, 12, 18, 24, 30, 36...",
                "Multiples of 8: 8, 16, 24, 32, 40...",
                "Common multiple → LCM = 24",
              ],
            },
            {
              heading: "Topic 2: Prime Power Method & Master Formula",
              formulaBox: [
                "HCF & LCM of 36 and 60:",
                "36 = 2² × 3²",
                "60 = 2² × 3¹ × 5¹",
                "HCF (take common primes with smallest powers): 2² × 3¹ = 4 × 3 = 12",
                "LCM (take all prime bases with highest powers): 2² × 3² × 5¹ = 4 × 9 × 5 = 180",
                "",
                "Fundamental Product Formula for Two Numbers:",
                "HCF(a, b) × LCM(a, b) = a × b",
                "Verification: 12 × 180 = 2160; 36 × 60 = 2160 ✓",
              ],
              patternSpotter: [
                { clue: "Greatest number that divides quantities evenly", method: "Calculate HCF" },
                { clue: "Cutting rods into longest equal lengths", method: "Calculate HCF" },
                { clue: "Smallest number divisible by given values", method: "Calculate LCM" },
                { clue: "Bells ringing together again after intervals", method: "Calculate LCM" },
                { clue: "Traffic lights or circular runners meeting at start", method: "Calculate LCM" },
              ],
            },
          ],
        },
        {
          subject: "English",
          topic: "Nouns, Pronouns, Articles & Subject-Verb Agreement",
          time: "25 minutes",
          objective: "Eliminate noun/pronoun errors, master article phonetics, and enforce subject-verb concord.",
          sections: [
            {
              heading: "Topic 1: Types of Nouns & Pronoun Categories",
              table: {
                headers: ["Noun Classification", "Examples", "Pronoun Category", "Examples"],
                rows: [
                  ["Proper Noun", "India, Nitin, Himalayas", "Personal", "I, we, you, he, she, they"],
                  ["Common Noun", "City, book, teacher", "Possessive", "Mine, ours, yours, theirs"],
                  ["Collective Noun", "Team, jury, committee", "Reflexive", "Myself, herself, themselves"],
                  ["Abstract Noun", "Honesty, courage, truth", "Relative", "Who, whom, which, that"],
                  ["Material Noun", "Gold, water, iron, wood", "Demonstrative", "This, that, these, those"],
                ],
              },
            },
            {
              heading: "Topic 2: The Phonetic Article Rule & Subject-Verb Concord",
              formulaBox: [
                "Articles Rule: Usage of 'A' vs 'An' depends strictly on the initial sound, not the alphabet letter!",
                "• 'An honest man' ('h' is silent; begins with vowel sound /ɒ/)",
                "• 'A university' ('u' produces consonant glide sound /j/)",
                "• 'An MBA graduate' (letter 'M' produces vowel sound /ɛm/)",
              ],
              table: {
                headers: ["Subject Type", "Verb Rule", "Incorrect Usage", "Correct Usage"],
                rows: [
                  ["Singular Subject (He/She/It)", "Takes verb with -s/-es", "He go to library.", "He goes to library."],
                  ["Plural Subject (They/We)", "Takes base plural verb", "They is practicing.", "They are practicing."],
                  ["Distributive (Each / Every)", "Takes strictly singular verb", "Each student have a book.", "Each student has a book."],
                ],
              },
            },
          ],
        },
        {
          subject: "General Awareness",
          topic: "Indian Geography: Physiography & River Systems",
          time: "20 minutes",
          objective: "Map India's 6 physical divisions and distinguish Himalayan from Peninsular river basins.",
          sections: [
            {
              heading: "Topic 1: Six Major Physiographic Divisions",
              rules: [
                "1. Northern & North-Eastern Himalayan Mountains",
                "2. Indo-Gangetic Northern Fertile Plains",
                "3. Peninsular Plateau (Deccan & Central Highlands)",
                "4. Great Indian Desert (Thar)",
                "5. Coastal Plains (Western & Eastern Littorals)",
                "6. Islands (Andaman & Nicobar, Lakshadweep)",
              ],
            },
            {
              heading: "Topic 2: Himalayan vs Peninsular Rivers",
              table: {
                headers: ["Feature", "Himalayan Rivers (Ganga, Indus, Brahmaputra)", "Peninsular Rivers (Godavari, Krishna, Narmada)"],
                rows: [
                  ["Nature of Flow", "Perennial (fed by glaciers and monsoon precipitation)", "Seasonal / Non-perennial (chiefly rain-dependent)"],
                  ["Valley Stage", "Youthful, forming V-shaped gorges & meanders", "Matured, shallow graded valleys"],
                  ["Drainage Destination", "Discharge into Arabian Sea (Indus) & Bay of Bengal (Ganga, Brahmaputra)", "East-flowing to Bay of Bengal, West-flowing (Narmada, Tapi) to Arabian Sea"],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "day-4",
      dayName: "Thursday",
      title: "Day 4: Fractions, Reasoning & Biology",
      subtitle: "Fraction Operations · Analogy & Classification · Cell Organelles & Vitamins",
      subjects: [
        {
          subject: "Mathematics",
          topic: "Fractions, Decimals and Comparison Heuristics",
          time: "45 minutes",
          objective: "Calculate fraction operations and compare fractions using rapid cross-multiplication.",
          sections: [
            {
              heading: "Topic 1: Fraction Classifications & Operations",
              table: {
                headers: ["Fraction Type", "Definition", "Example"],
                rows: [
                  ["Proper fraction", "Numerator < Denominator", "3/5, 7/9"],
                  ["Improper fraction", "Numerator ≥ Denominator", "7/4, 9/5"],
                  ["Mixed fraction", "Whole integer plus proper fraction", "1 ¾, 2 ⅖"],
                  ["Equivalent fractions", "Equal value under simplification", "1/2 = 2/4 = 4/8"],
                ],
              },
              formulaBox: [
                "Addition: 1/2 + 1/4 = 2/4 + 1/4 = 3/4",
                "Subtraction: 3/4 − 1/4 = 2/4 = 1/2",
                "Multiplication: 2/3 × 3/4 = 6/12 = 1/2",
                "Division (flip and multiply): 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6",
              ],
            },
            {
              heading: "Topic 2: Decimal Benchmarks & Cross-Multiplication",
              table: {
                headers: ["Fraction", "Decimal", "Fraction", "Decimal"],
                rows: [
                  ["1/2", "0.50", "1/5", "0.20"],
                  ["1/4", "0.25", "1/8", "0.125"],
                  ["3/4", "0.75", "1/10", "0.10"],
                ],
              },
              formulaBox: [
                "Comparing Fractions Shortcut: Compare 5/8 and 3/4",
                "Cross-multiply denominators across numerators:",
                "Left: 5 × 4 = 20",
                "Right: 3 × 8 = 24",
                "Since 24 > 20, 3/4 > 5/8.",
              ],
            },
          ],
        },
        {
          subject: "Reasoning",
          topic: "Analogy, Classification & Odd-One-Out",
          time: "25 minutes",
          objective: "Identify relational analogies and isolate anomalies in verbal and numerical domains.",
          sections: [
            {
              heading: "Topic 1: Semantic & Numerical Analogies",
              content:
                "Analogy evaluates whether the relationship governing Pair 1 exactly maps onto Pair 2.",
              formulaBox: [
                "Verbal Analogy: Bird : Nest :: Bee : ?",
                "Relation: Animal to its constructed dwelling habitat.",
                "Answer: Hive",
                "",
                "Number Analogy: 3 : 9 :: 4 : ?",
                "Relation: First term squared: 3² = 9. Second term: 4² = 16.",
                "Answer: 16",
              ],
            },
            {
              heading: "Topic 2: Classification (Odd-One-Out)",
              formulaBox: [
                "Verbal Odd-One-Out: Apple, Mango, Banana, Potato",
                "Reason: Apple, Mango, and Banana are botanical fruits. Potato is a tuber vegetable.",
                "Answer: Potato",
                "",
                "Numerical Odd-One-Out: 2, 3, 5, 9, 11",
                "Reason: 2, 3, 5, and 11 are prime numbers. 9 is composite (3 × 3).",
                "Answer: 9",
              ],
            },
          ],
        },
        {
          subject: "General Awareness",
          topic: "Biology Fundamentals: Cell Biology & Human Nutrition",
          time: "20 minutes",
          objective: "Identify essential cell organelles, contrast plant/animal cells, and learn vitamin deficiencies.",
          sections: [
            {
              heading: "Topic 1: Cell Organelles and Their Functions",
              table: {
                headers: ["Cell Component", "Primary Biological Function"],
                rows: [
                  ["Cell membrane", "Selectively permeable barrier regulating influx and efflux"],
                  ["Cytoplasm", "Gel-like matrix housing enzymatic metabolic reactions"],
                  ["Nucleus", "Stores genomic DNA; orchestrates cellular reproduction"],
                  ["Mitochondria", "Powerhouse of the cell; produces ATP via cellular respiration"],
                  ["Ribosomes", "Translates mRNA to synthesize proteins"],
                  ["Chloroplast", "Contains chlorophyll; carries out photosynthesis in plant cells"],
                  ["Cell wall", "Rigid cellulose outer wall providing structural turgor in plants"],
                ],
              },
            },
            {
              heading: "Topic 2: Vitamin Deficiencies in SSC CGL",
              table: {
                headers: ["Vitamin", "Physiological Role", "Clinical Deficiency Disease"],
                rows: [
                  ["Vitamin A (Retinol)", "Rhodopsin formation & vision", "Night Blindness (Nyctalopia)"],
                  ["Vitamin B1 (Thiamine)", "Carbohydrate & nerve metabolism", "Beriberi"],
                  ["Vitamin C (Ascorbic Acid)", "Collagen synthesis & wound healing", "Scurvy (bleeding gums)"],
                  ["Vitamin D (Calciferol)", "Calcium & phosphate absorption", "Rickets (children), Osteomalacia (adults)"],
                  ["Vitamin K (Phylloquinone)", "Prothrombin synthesis for blood clotting", "Excessive uncontrolled hemorrhage"],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "day-5",
      dayName: "Friday",
      title: "Day 5: Percentage, Tenses & Macroeconomics",
      subtitle: "Percentage Ladder · Verb Tenses · Economy Metrics & Weekly GK Consolidation",
      subjects: [
        {
          subject: "Mathematics",
          topic: "Percentage Foundation and Mental Calculation Heuristics",
          time: "45 minutes",
          objective: "Calculate percentage values, convert fractions to percentages, and compute percentage shifts.",
          sections: [
            {
              heading: "Topic 1: The Percentage Foundation & Fraction Ladder",
              table: {
                headers: ["Fraction", "Percentage", "Fraction", "Percentage"],
                rows: [
                  ["1/2", "50%", "1/5", "20%"],
                  ["1/3", "33 ⅓% (33.33%)", "1/6", "16 ⅔% (16.66%)"],
                  ["1/4", "25%", "1/8", "12.5%"],
                  ["3/4", "75%", "1/10", "10%"],
                ],
              },
              formulaBox: [
                "Percentage Formula 1: x% of N = (x × N) / 100",
                "Example: Find 20% of 350 → (20/100) × 350 = 350 / 5 = 70",
                "",
                "Percentage Formula 2: What percentage is A of B?",
                "Percentage = (Part / Whole) × 100",
                "Example: 45 is what percentage of 180? (45 / 180) × 100 = (1/4) × 100 = 25%",
                "",
                "Percentage Change Formula:",
                "% Shift = [(New Value − Original Value) / Original Value] × 100",
                "Example: Price rises from ₹400 to ₹460.",
                "[(460 − 400) / 400] × 100 = (60 / 400) × 100 = 15% increase",
              ],
              patternSpotter: [
                { clue: "Calculate 10%", method: "Shift decimal point one place to the left" },
                { clue: "Calculate 5%", method: "Calculate 10%, then divide by 2" },
                { clue: "Calculate 20%", method: "Divide directly by 5" },
                { clue: "Calculate 25%", method: "Divide directly by 4" },
                { clue: "Calculate 12.5%", method: "Divide directly by 8" },
              ],
            },
          ],
        },
        {
          subject: "English",
          topic: "Verbs, Basic Tense Mechanics & High-Yield Vocabulary",
          time: "25 minutes",
          objective: "Differentiate simple and continuous tenses and master 5 recurring SSC vocabulary words.",
          sections: [
            {
              heading: "Topic 1: Core Tense Paradigms",
              table: {
                headers: ["Tense Paradigm", "Formula / Structure", "Usage Example"],
                rows: [
                  ["Simple Present", "Subject + V1 (s/es)", "I study daily. / He studies diligently."],
                  ["Present Continuous", "Subject + is/am/are + V-ing", "I am studying right now."],
                  ["Simple Past", "Subject + V2", "I studied arithmetic yesterday."],
                  ["Simple Future", "Subject + will/shall + V1", "I will study geometry tomorrow."],
                ],
              },
              formulaBox: [
                "Crucial Exam Trap: In simple present tense with singular third-person subjects (He, She, It), you MUST add -s/-es. 'He go' is incorrect; 'He goes' is correct.",
              ],
            },
            {
              heading: "Topic 2: Weekly Active Vocabulary Habit",
              table: {
                headers: ["Word", "Part of Speech", "Precise Meaning", "Exemplar Usage"],
                rows: [
                  ["Accurate", "Adjective", "Correct, precise, and exact", "His mental calculation was accurate."],
                  ["Abundant", "Adjective", "Existing in large plentiful quantities", "Rainfall was abundant in the Western Ghats."],
                  ["Reluctant", "Adjective", "Hesitant, unwilling, or disinclined", "He was reluctant to skip the mock analysis."],
                  ["Diligent", "Adjective", "Showing persistent, hardworking effort", "The diligent aspirant solved 50 PYQs daily."],
                  ["Concise", "Adjective", "Giving comprehensive info briefly and clearly", "Her revision notes were exceptionally concise."],
                ],
              },
            },
          ],
        },
        {
          subject: "General Awareness",
          topic: "Macroeconomics Fundamentals & Weekly Consolidation",
          time: "20 minutes",
          objective: "Define fundamental macroeconomic indicators and synthesize all Week 1 GA concepts.",
          sections: [
            {
              heading: "Topic 1: Core Macroeconomic Concepts",
              table: {
                headers: ["Economic Term", "Core Definition & SSC Relevance"],
                rows: [
                  ["GDP (Gross Domestic Product)", "Total monetary value of all finished goods & services produced within a country's boundaries in a year."],
                  ["Inflation", "A sustained quantitative increase in the general price level, eroding currency purchasing power."],
                  ["RBI (Reserve Bank of India)", "India's central banking institution founded in 1935; manages monetary policy, currency issuance & foreign reserves."],
                  ["Repo Rate", "The interest rate at which the RBI lends short-term liquidity to commercial banks against government securities."],
                  ["Union Budget", "Annual financial statement (Article 112) presenting estimated governmental receipts and expenditures for the fiscal year."],
                ],
              },
            },
            {
              heading: "Topic 2: Comprehensive Weekly GA Revision Grid",
              table: {
                headers: ["Sub-discipline", "Core Week 1 Focus Areas to Retain"],
                rows: [
                  ["Indian Polity", "Preamble philosophy, Constitution adoption dates, Fundamental Rights vs Duties"],
                  ["Ancient History", "Indus Valley sites & drainage, Vedic canonical literature, Buddhism/Jainism & Ashoka"],
                  ["Indian Geography", "6 physiographic regions, Himalayan vs Peninsular river classifications"],
                  ["General Science", "Cell organelles (mitochondria, ribosomes) and vitamins (A, B1, C, D, K)"],
                  ["Economy", "GDP, inflation, RBI functions, Repo rate dynamics, Union budget"],
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  resources: {
    primaryPlatform: {
      name: "SATHEE SSC (Ministry of Education & IIT Kanpur)",
      desc: "Free comprehensive national learning platform providing quantitative aptitude, reasoning, grammar, and NCERT assessments.",
      url: "https://sathee.iitk.ac.in/sathee-ssc/",
      note: "Developed by IIT Kanpur in collaboration with the Ministry of Education for free, verified SSC preparation.",
    },
    subjectResources: [
      {
        subject: "Mathematics",
        primary: { name: "NCERT Mathematics (Classes 6–8)", url: "https://ncert.nic.in/textbook.php" },
        additional: { name: "Aditya Ranjan Maths Channel", url: "https://www.youtube.com/@AdityaRanjanMaths" },
      },
      {
        subject: "English",
        primary: { name: "British Council LearnEnglish", url: "https://learnenglish.britishcouncil.org/" },
        additional: { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
      },
      {
        subject: "Reasoning",
        primary: { name: "SATHEE SSC Reasoning Modules", url: "https://sathee.iitk.ac.in/sathee-ssc/" },
        additional: { name: "Kamal Chhabra Sir — e1 Coaching", url: "https://www.youtube.com/@e1CoachingCenter" },
      },
      {
        subject: "General Awareness",
        primary: { name: "NCERT History, Geography & Science", url: "https://ncert.nic.in/textbook.php" },
        additional: { name: "Parmar SSC General Awareness", url: "https://www.youtube.com/@ParmarSSC" },
      },
    ],
    officialBookmarks: [
      {
        name: "Staff Selection Commission Official Portal",
        url: "https://ssc.gov.in/",
        desc: "Official examination notifications, corrigenda, answer keys, and syllabus blueprints.",
      },
      {
        name: "Official SSC CGL 2026 Notification PDF",
        url: "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf",
        desc: "Governing scheme specifying 4 separate 15-minute sections in Tier-I with +2/−0.50 marking.",
      },
      {
        name: "Press Information Bureau (PIB)",
        url: "https://pib.gov.in/",
        desc: "Official government press releases, policy decisions, and verified current affairs updates.",
      },
    ],
  },
  homework: [
    {
      day: "Monday",
      math: "10 calculation drills & 5 BODMAS multi-operation expressions",
      langReasoning: "Identify parts of speech in 5 custom daily routine sentences",
      ga: "Memorize 9 Preamble keywords and 2 historic constitutional dates",
    },
    {
      day: "Tuesday",
      math: "10 divisibility checks (2 to 11) & 5 prime factorisations",
      langReasoning: "5 alphabet forward/reverse positions & 5 series questions",
      ga: "Draw an Ancient India timeline with 5 epochs and 2 features each",
    },
    {
      day: "Wednesday",
      math: "5 HCF and 5 LCM word problems using prime power method",
      langReasoning: "Correct 5 noun/pronoun agreement error sentences",
      ga: "Locate and label 5 physiographic divisions & 5 rivers on India map",
    },
    {
      day: "Thursday",
      math: "10 fraction operations & 5 decimal comparisons",
      langReasoning: "5 word analogies & 5 classification / odd-one-out questions",
      ga: "Draw a simple cell diagram with 5 organelles & memorize 5 vitamins",
    },
    {
      day: "Friday",
      math: "10 percentage calculations, fraction conversions & % change",
      langReasoning: "Correct 5 verb/tense sentences & learn 5 vocabulary words",
      ga: "Consolidate and actively recall all weekly GK notes across 5 topics",
    },
  ],
  masteryChecklist: [
    { id: "chk-1", label: "I can identify natural, whole, integer, rational and irrational numbers.", subject: "math" },
    { id: "chk-2", label: "I can solve basic calculations using BODMAS and sign rules without error.", subject: "math" },
    { id: "chk-3", label: "I can apply divisibility rules (2–11) and find prime factorizations.", subject: "math" },
    { id: "chk-4", label: "I can identify HCF and LCM question patterns and use HCF × LCM = a × b.", subject: "math" },
    { id: "chk-5", label: "I can add, subtract, multiply, divide, and compare fractions rapidly.", subject: "math" },
    { id: "chk-6", label: "I can calculate percentages of numbers and compute percentage increase/decrease.", subject: "math" },
    { id: "chk-7", label: "I can identify nouns, pronouns, verbs, adjectives, adverbs, and prepositions.", subject: "english" },
    { id: "chk-8", label: "I understand basic subject–verb agreement and present/past/future tense shifts.", subject: "english" },
    { id: "chk-9", label: "I can solve basic alphabet series, number series, and numerical analogies.", subject: "reasoning" },
    { id: "chk-10", label: "I can distinguish analogy from classification (odd-one-out) accurately.", subject: "reasoning" },
    { id: "chk-11", label: "I can recall the Preamble keywords and both Constitution adoption & effect dates.", subject: "ga" },
    { id: "chk-12", label: "I can name the main ancient Indian historical periods and Harappan sites.", subject: "ga" },
    { id: "chk-13", label: "I can identify India's 6 major physiographic divisions and key river systems.", subject: "ga" },
    { id: "chk-14", label: "I can identify basic cell organelles and vitamin-deficiency pairings.", subject: "ga" },
    { id: "chk-15", label: "I understand GDP, inflation, RBI key functions, repo rate, and the Union budget.", subject: "ga" },
  ],
  performanceTargets: [
    { subject: "Mathematics", target: "80% accuracy in foundation calculation & arithmetic drills" },
    { subject: "English", target: "At least 80% correct in basic grammar & parts of speech identification" },
    { subject: "Reasoning", target: "Be able to verbally explain the exact rule behind every series answer" },
    { subject: "General Awareness", target: "Recall at least 80% of short notes without looking at study sheets" },
  ],
};

