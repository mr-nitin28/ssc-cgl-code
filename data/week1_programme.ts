export interface DayModule {
  id: string;
  moduleCode: string;
  dayName: string;
  title: string;
  timeMinutes: number;
  learningObjective: string;
  completionTarget: string;
  topics: {
    title: string;
    description?: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
    formulas?: string[];
    rules?: string[];
    workedExamples?: {
      label?: string;
      problem: string;
      solution: string;
    }[];
    properties?: {
      name: string;
      formula: string;
    }[];
    patternSpotter?: {
      clue: string;
      method: string;
    }[];
    proTips?: string[];
    practiceItems?: string[];
  }[];
  timetable: {
    activity: string;
    time: string;
  }[];
}

export interface Week1MathData {
  title: string;
  category: string;
  level: string;
  mainObjective: string;
  note: string;
  metrics: {
    totalWeeklyHours: number;
    studyDays: number;
    dailyMinutes: number;
    questionsPerDay: number;
    totalUniqueQuestions: number;
  };
  dependencySequence: {
    daySummary: {
      day: string;
      title: string;
      description: string;
    }[];
    rationale: string[];
  };
  days: DayModule[];
  assessmentStructure: {
    title: string;
    description: string;
    difficultyBreakdown: {
      easy: number;
      medium: number;
      hard: number;
    };
    schedule: {
      day: string;
      topic: string;
      questions: number;
    }[];
    scoringFormula: {
      formula: string;
      details: string[];
      maxDailyScore: number;
      masteryTarget: string;
    };
  };
  formulaMemoryWork: {
    schedule: {
      day: string;
      memorise: string;
    }[];
    routine: string[];
  };
  masteryTracker: {
    id: string;
    text: string;
  }[];
  nextWeekPreview: {
    modules: {
      code: string;
      topic: string;
    }[];
    guidance: string;
    firstWeekRule: string;
  };
}

export const week1MathProgramme: Week1MathData = {
  title: "SSC CGL Mathematics — Week 1 Complete Study Schedule",
  category: "Foundation Week",
  level: "Absolute Beginner",
  mainObjective:
    "Build your mathematical foundation from zero so you can confidently start SSC CGL arithmetic and advanced mathematics.",
  note: "This is a dedicated Mathematics programme, not the four-subject timetable.",
  metrics: {
    totalWeeklyHours: 7.5,
    studyDays: 5,
    dailyMinutes: 90,
    questionsPerDay: 20,
    totalUniqueQuestions: 100,
  },
  dependencySequence: {
    daySummary: [
      {
        day: "Day 1",
        title: "Mathematical Foundation",
        description: "Number types, basic operations, positive/negative numbers, BODMAS and calculation tricks.",
      },
      {
        day: "Day 2",
        title: "Number System",
        description: "Divisibility, prime numbers, factors, multiples, prime factorisation, HCF and LCM.",
      },
      {
        day: "Day 3",
        title: "Fractions and Decimals",
        description: "Fraction types, equivalent fractions, four operations, decimal calculations and conversions.",
      },
      {
        day: "Day 4",
        title: "Ratio and Proportion",
        description: "Ratio simplification, sharing quantities, compound ratios, direct and inverse proportion.",
      },
      {
        day: "Day 5",
        title: "Percentage & Mixed Foundation",
        description: "Percentage conversions, percentage of a number, increase, decrease, reverse percentage and successive changes.",
      },
    ],
    rationale: [
      "Number knowledge supports calculations.",
      "HCF and LCM help with factors and fraction operations.",
      "Fractions make percentage calculations easier.",
      "Ratio and proportion support averages, partnership and mixtures.",
      "Percentage supports profit and loss, discount, interest and data interpretation.",
    ],
  },
  days: [
    {
      id: "day-1",
      moduleCode: "Module M0",
      dayName: "Day 1 (Monday)",
      title: "Mathematical Foundation and Calculation Skills",
      timeMinutes: 90,
      learningObjective:
        "Understand basic numbers and operations, and develop the calculation skills needed for every future Mathematics chapter.",
      completionTarget:
        "You should be able to classify numbers, calculate using all four operations, handle negative numbers and correctly solve BODMAS expressions.",
      topics: [
        {
          title: "Topic 1: Number Types",
          description: "First, understand the different types of numbers and their mathematical definitions.",
          table: {
            headers: ["Number Type", "Easy Explanation", "Examples"],
            rows: [
              ["Natural numbers", "Counting numbers", "1, 2, 3, 4, ..."],
              ["Whole numbers", "Natural numbers including zero", "0, 1, 2, 3, ..."],
              ["Integers", "Negative numbers, zero and positive numbers", "−3, −2, 0, 1"],
              ["Rational numbers", "Numbers expressible as p/q, where q ≠ 0", "1/2, 3/4, 5"],
              ["Irrational numbers", "Cannot be written as a ratio of integers", "√2, √3, π"],
              ["Real numbers", "Rational and irrational numbers together", "−5, 0, 2.5, √2"],
            ],
          },
          formulas: [
            "Important concept: All integers are rational numbers because they can be written as fractions.",
            "For example: 5 = 5/1 (rational).",
          ],
        },
        {
          title: "Topic 2: Basic Mathematical Operations & Properties",
          description: "Understand how the four fundamental arithmetic operations work alongside core algebraic laws.",
          table: {
            headers: ["Operation", "Meaning", "Example"],
            rows: [
              ["Addition", "Combining quantities", "25 + 15 = 40"],
              ["Subtraction", "Finding the difference", "50 − 20 = 30"],
              ["Multiplication", "Repeated addition", "5 × 4 = 20"],
              ["Division", "Distributing equally", "40 ÷ 5 = 8"],
            ],
          },
          properties: [
            { name: "Commutative Property", formula: "a + b = b + a   and   a × b = b × a" },
            { name: "Associative Property", formula: "(a + b) + c = a + (b + c)" },
            { name: "Distributive Property", formula: "a(b + c) = ab + ac" },
          ],
          workedExamples: [
            {
              label: "Distributive Calculation Shortcut",
              problem: "19 × 25",
              solution: "(20 − 1) × 25 = 500 − 25 = 475",
            },
          ],
        },
        {
          title: "Topic 3: Positive and Negative Numbers",
          description: "Master arithmetic sign rules. Multiplication and division signs follow identical logic.",
          table: {
            headers: ["Operation", "Rule", "Example"],
            rows: [
              ["Positive + Positive", "Add magnitudes, positive answer", "5 + 3 = 8"],
              ["Negative + Negative", "Add magnitudes and keep negative sign", "−5 − 3 = −8"],
              ["Positive + Negative", "Subtract magnitudes, sign of larger magnitude", "9 − 12 = −3"],
              ["Negative × Negative", "Multiplying two negatives yields positive", "−5 × −3 = 15"],
              ["Positive × Negative", "Multiplying opposite signs yields negative", "5 × −3 = −15"],
            ],
          },
          workedExamples: [
            {
              problem: "−18 + 25",
              solution: "25 − 18 = 7",
            },
          ],
        },
        {
          title: "Topic 4: BODMAS and Simplification",
          description:
            "BODMAS gives the correct order for solving mathematical expressions. Division and multiplication hold equal priority (work left-to-right). The same applies to addition and subtraction.",
          table: {
            headers: ["Letter", "Meaning"],
            rows: [
              ["B", "Brackets: solve innermost ( ), then { }, then [ ]"],
              ["O", "Orders: powers, square roots, and 'of' expressions"],
              ["D", "Division (equal priority with multiplication)"],
              ["M", "Multiplication (equal priority with division)"],
              ["A", "Addition (equal priority with subtraction)"],
              ["S", "Subtraction (equal priority with addition)"],
            ],
          },
          workedExamples: [
            {
              label: "Easy Example",
              problem: "10 + 5 × 2",
              solution: "= 10 + 10 = 20",
            },
            {
              label: "Medium Example",
              problem: "48 ÷ 6 × 4 + 5",
              solution: "= 8 × 4 + 5 = 32 + 5 = 37",
            },
          ],
        },
        {
          title: "Topic 5: Mental Calculation Shortcuts",
          table: {
            headers: ["Calculation Pattern", "Mental Shortcut", "Formulaic Logic"],
            rows: [
              ["99 × n", "100n − n", "Subtract the number from its 100x product"],
              ["101 × n", "100n + n", "Add the number to its 100x product"],
              ["25 × n", "100n ÷ 4", "Multiply by 100, then divide by 4"],
              ["50 × n", "100n ÷ 2", "Multiply by 100, then divide by 2"],
              ["125 × n", "1000n ÷ 8", "Multiply by 1000, then divide by 8"],
              ["999 + n", "1000 + n − 1", "Add 1000, then subtract 1"],
            ],
          },
          workedExamples: [
            {
              problem: "998 + 457",
              solution: "1000 + 457 − 2 = 1455",
            },
            {
              problem: "125 × 48",
              solution: "(1000 × 48) ÷ 8 = 48000 ÷ 8 = 6000",
            },
          ],
          patternSpotter: [
            { clue: "Multiple operations in an expression", method: "Apply strict BODMAS left-to-right priority" },
            { clue: "Negative numbers in additions or subtractions", method: "Apply sign rules" },
            { clue: "Numbers close to 100 or 1,000", method: "Use compensation arithmetic" },
            { clue: "Multiplication by 25", method: "Multiply by 100 and divide by 4" },
            { clue: "Multiplication by 125", method: "Multiply by 1,000 and divide by 8" },
          ],
        },
      ],
      timetable: [
        { activity: "Tables, squares and calculation warm-up", time: "10 min" },
        { activity: "Number types and properties", time: "15 min" },
        { activity: "Four operations and sign rules", time: "15 min" },
        { activity: "BODMAS and simplification", time: "15 min" },
        { activity: "Shortcuts and worked examples", time: "10 min" },
        { activity: "Daily test — 20 questions", time: "20 min" },
        { activity: "Answer analysis and error log", time: "5 min" },
      ],
    },
    {
      id: "day-2",
      moduleCode: "Module M1",
      dayName: "Day 2 (Tuesday)",
      title: "Number System, Divisibility, HCF and LCM",
      timeMinutes: 90,
      learningObjective:
        "Understand number relationships, identify factors and multiples, and solve HCF and LCM questions.",
      completionTarget:
        "You should be able to apply divisibility rules, find prime factors and identify whether a word problem requires HCF or LCM.",
      topics: [
        {
          title: "Topic 1: Divisibility Rules",
          description:
            "A divisibility rule helps you determine whether a number can be divided by another number without performing long division.",
          table: {
            headers: ["Divisor", "Divisibility Rule", "Verification Example"],
            rows: [
              ["2", "Last digit is even (0, 2, 4, 6, 8)", "348 (last digit 8)"],
              ["3", "Sum of digits is divisible by 3", "123 (1+2+3 = 6)"],
              ["4", "Last two digits form a number divisible by 4", "1,216 (16 ÷ 4 = 4)"],
              ["5", "Last digit is 0 or 5", "125"],
              ["6", "Divisible by both 2 and 3", "126 (even, 1+2+6 = 9)"],
              ["8", "Last three digits form a number divisible by 8", "1,024 (024 ÷ 8 = 3)"],
              ["9", "Sum of digits is divisible by 9", "729 (7+2+9 = 18)"],
              ["10", "Last digit is 0", "450"],
              ["11", "Difference of alternating digit sums is 0 or multiple of 11", "2,728: (2+2) − (7+8) = 4 − 15 = −11"],
            ],
          },
          workedExamples: [
            {
              problem: "Check whether 4,572 is divisible by 3",
              solution: "4 + 5 + 7 + 2 = 18. Since 18 is divisible by 3, 4,572 is divisible by 3.",
            },
          ],
        },
        {
          title: "Topic 2: Factors and Multiples",
          description:
            "Factor: A number that divides another number exactly. Multiple: A number obtained by multiplying a given number by an integer.",
          formulas: [
            "Factors of 12: 1, 2, 3, 4, 6, 12",
            "Multiples of 12: 12, 24, 36, 48, 60, ...",
          ],
        },
        {
          title: "Topic 3: Prime and Composite Numbers",
          description:
            "A prime number has exactly two positive factors: 1 and itself. A composite number has more than two positive factors.",
          formulas: [
            "Prime numbers: 2, 3, 5, 7, 11, ...",
            "Composite numbers: 4, 6, 8, 9, 10, ...",
            "CRUCIAL MEMORY NOTE: 1 is neither prime nor composite. The number 2 is the ONLY even prime number.",
          ],
        },
        {
          title: "Topic 4: Prime Factorisation",
          description: "Prime factorisation means expressing a number as the product of prime numbers.",
          workedExamples: [
            {
              problem: "Prime factorisation of 60",
              solution: "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5",
            },
          ],
          practiceItems: ["Practice factorising: 24", "Practice factorising: 36", "Practice factorising: 48", "Practice factorising: 72", "Practice factorising: 90"],
        },
        {
          title: "Topic 5: HCF — Highest Common Factor",
          description: "HCF is the greatest number that divides all the given numbers exactly.",
          workedExamples: [
            {
              problem: "Find HCF of 18 and 24",
              solution: "Factors of 18: 1, 2, 3, 6, 9, 18\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24\nGreatest common factor: HCF = 6",
            },
          ],
        },
        {
          title: "Topic 6: LCM — Lowest Common Multiple",
          description: "LCM is the smallest positive number that is a multiple of all the given numbers.",
          workedExamples: [
            {
              problem: "Find LCM of 6 and 8",
              solution: "Multiples of 6: 6, 12, 18, 24, 30...\nMultiples of 8: 8, 16, 24, 32...\nLowest common multiple: LCM = 24",
            },
          ],
        },
        {
          title: "Topic 7: HCF and LCM Using Prime Factorisation",
          workedExamples: [
            {
              problem: "Find HCF and LCM of 36 and 60",
              solution:
                "36 = 2² × 3²\n60 = 2² × 3¹ × 5¹\n• For HCF, take common factors with the smallest powers: 2² × 3¹ = 12\n• For LCM, take all factors with the largest powers: 2² × 3² × 5¹ = 4 × 9 × 5 = 180",
            },
          ],
          formulas: [
            "Fundamental Theorem for Two Positive Integers:",
            "HCF × LCM = Product of the two numbers",
            "Verification: 12 × 180 = 2160; 36 × 60 = 2160 ✓",
          ],
          patternSpotter: [
            { clue: "Greatest number that divides quantities", method: "Calculate HCF" },
            { clue: "Longest equal pieces to cut", method: "Calculate HCF" },
            { clue: "Largest equal groups to form", method: "Calculate HCF" },
            { clue: "Smallest number divisible by all given numbers", method: "Calculate LCM" },
            { clue: "Bells ringing together again after intervals", method: "Calculate LCM" },
            { clue: "Events repeating at different circular intervals", method: "Calculate LCM" },
          ],
          proTips: [
            "Learn divisibility rules rather than doing long division every time.",
            "Use prime factorisation when numbers are large.",
            "In HCF, use common factors with smaller powers.",
            "In LCM, use all prime factors with larger powers.",
            "Do not confuse 'greatest number that divides' with 'smallest number divisible by'.",
          ],
        },
      ],
      timetable: [
        { activity: "Day 1 formula and calculation revision", time: "10 min" },
        { activity: "Divisibility rules", time: "15 min" },
        { activity: "Prime and composite numbers", time: "10 min" },
        { activity: "Factors, multiples and prime factorisation", time: "15 min" },
        { activity: "HCF and LCM concepts and applications", time: "15 min" },
        { activity: "Daily test — 20 questions", time: "20 min" },
        { activity: "Error log", time: "5 min" },
      ],
    },
    {
      id: "day-3",
      moduleCode: "Module M2",
      dayName: "Day 3 (Wednesday)",
      title: "Fractions and Decimals",
      timeMinutes: 90,
      learningObjective: "Understand fractions and decimals and learn to perform calculations accurately.",
      completionTarget:
        "You should be able to simplify fractions, perform all four operations, compare fractions and convert common fractions into decimals.",
      topics: [
        {
          title: "Topic 1: Fraction Structure & Types",
          description: "A fraction represents a part of a whole: 3/5 → Numerator = 3 (selected parts), Denominator = 5 (total equal parts).",
          table: {
            headers: ["Type of Fraction", "Example", "Explanation"],
            rows: [
              ["Proper fraction", "3/5", "Numerator smaller than denominator"],
              ["Improper fraction", "7/4", "Numerator greater than denominator"],
              ["Mixed fraction", "1 ¾", "Whole number combined with a fraction"],
              ["Equivalent fractions", "1/2 = 2/4", "Different forms of the identical value"],
            ],
          },
        },
        {
          title: "Topic 2: Simplification of Fractions",
          description: "Simplification means reducing a fraction to its smallest coprime form.",
          workedExamples: [
            {
              problem: "Simplify 24/36",
              solution: "Divide numerator and denominator by 12: 24/36 = 2/3",
            },
          ],
        },
        {
          title: "Topic 3: Addition & Subtraction of Fractions",
          description: "When denominators are different, first find their LCM to equalize denominators.",
          workedExamples: [
            {
              label: "Addition",
              problem: "1/2 + 1/4",
              solution: "LCM of 2 and 4 = 4 → 2/4 + 1/4 = 3/4",
            },
            {
              label: "Subtraction",
              problem: "7/8 − 3/8",
              solution: "(7 − 3)/8 = 4/8 = 1/2",
            },
          ],
        },
        {
          title: "Topic 4: Multiplication and Division of Fractions",
          description: "Multiply across numerators and denominators. To divide by a fraction, multiply by its reciprocal.",
          workedExamples: [
            {
              label: "Multiplication",
              problem: "2/3 × 3/4",
              solution: "6/12 = 1/2. (Shortcut: Cross-cancel common factor 3 before multiplying!)",
            },
            {
              label: "Division",
              problem: "2/3 ÷ 4/5",
              solution: "Reverse second fraction: 2/3 × 5/4 = 10/12 = 5/6",
            },
          ],
        },
        {
          title: "Topic 5: Decimals & Essential Conversions to Memorise",
          description: "Decimals are base-10 fractional expressions (e.g. 2.5 = 25/10 = 5/2).",
          table: {
            headers: ["Fraction", "Decimal Equivalent", "Percentage Value"],
            rows: [
              ["1/2", "0.5", "50%"],
              ["1/3", "0.333…", "33 ⅓%"],
              ["1/4", "0.25", "25%"],
              ["1/5", "0.2", "20%"],
              ["1/6", "0.1666…", "16 ⅔%"],
              ["1/8", "0.125", "12.5%"],
              ["1/10", "0.1", "10%"],
              ["1/12", "0.0833…", "8 ⅓%"],
            ],
          },
        },
        {
          title: "Topic 6: Recurring Decimals Introduction",
          description: "A recurring decimal repeats the same digit or group of digits infinitely.",
          workedExamples: [
            {
              problem: "Single-digit repeating: 0.3333...",
              solution: "= 1/3",
            },
            {
              problem: "Two-digit repeating: 0.272727...",
              solution: "= 27/99 = 3/11",
            },
          ],
          patternSpotter: [
            { clue: "Different denominators in addition or subtraction", method: "Find LCM and normalize denominators" },
            { clue: "Multiplication of fractions", method: "Cross-cancel common factors first" },
            { clue: "Division by a fraction", method: "Multiply by the reciprocal (flip 2nd fraction)" },
            { clue: "Compare positive fractions", method: "Cross-multiplication shortcut" },
            { clue: "Decimal to fraction", method: "Use place value powers of 10" },
            { clue: "Repeating decimal", method: "Algebraic conversion using 9s in denominator" },
          ],
          proTips: [
            "Never add numerators and denominators directly.",
            "Always simplify the final fraction to lowest terms.",
            "Keep decimal points aligned during addition and subtraction.",
            "Cross-cancel before multiplying.",
            "For division, reverse only the second fraction.",
          ],
        },
      ],
      timetable: [
        { activity: "Day 1–2 revision", time: "10 min" },
        { activity: "Fraction types and structure", time: "15 min" },
        { activity: "Simplification and comparison", time: "10 min" },
        { activity: "Four operations on fractions", time: "20 min" },
        { activity: "Decimal calculations and conversions", time: "10 min" },
        { activity: "Daily test — 20 questions", time: "20 min" },
        { activity: "Error log", time: "5 min" },
      ],
    },
    {
      id: "day-4",
      moduleCode: "Module M3",
      dayName: "Day 4 (Thursday)",
      title: "Ratio, Proportion and Unitary Method",
      timeMinutes: 90,
      learningObjective:
        "Learn to compare quantities and solve problems involving relationships between two or more values.",
      completionTarget:
        "You should be able to simplify ratios, divide quantities, combine ratios and recognise direct or inverse proportion.",
      topics: [
        {
          title: "Topic 1: Understanding Ratio & Equivalent Ratios",
          description: "Ratio compares two quantities. Divide both numbers by their common factor to simplify.",
          workedExamples: [
            {
              problem: "10 boys and 15 girls",
              solution: "Boys : Girls = 10 : 15. Divide by 5 → 2 : 3",
            },
          ],
          formulas: [
            "Equivalent ratios represent the same proportion: 2:3 = 4:6 = 6:9 = 8:12",
          ],
        },
        {
          title: "Topic 2: Dividing a Quantity in a Ratio",
          formulas: [
            "Master Ratio Sharing Formula:",
            "If total amount is T and ratio is a : b:",
            "First share = [a / (a + b)] × T",
            "Second share = [b / (a + b)] × T",
          ],
          workedExamples: [
            {
              problem: "Divide ₹840 in the ratio 3 : 4",
              solution:
                "Total parts: 3 + 4 = 7 parts\nValue of one part: 840 ÷ 7 = ₹120\nFirst share: 3 × 120 = ₹360\nSecond share: 4 × 120 = ₹480\nCheck: 360 + 480 = 840 ✓",
            },
          ],
        },
        {
          title: "Topic 3: Compound Ratio",
          description: "When two ratios are connected through a common quantity, align the common term.",
          workedExamples: [
            {
              problem: "Given A : B = 2 : 3 and B : C = 4 : 5. Find A : B : C.",
              solution:
                "Make B equal in both ratios (LCM of 3 and 4 is 12):\nA : B = 8 : 12\nB : C = 12 : 15\nTherefore: A : B : C = 8 : 12 : 15",
            },
          ],
        },
        {
          title: "Topic 4: Proportion & Cross-Multiplication",
          description: "Proportion means two ratios are equal: a/b = c/d gives ad = bc.",
          workedExamples: [
            {
              problem: "Solve: 2/3 = 8/x",
              solution: "2x = 3 × 8 = 24 → x = 12",
            },
          ],
        },
        {
          title: "Topic 5: Direct vs Inverse Proportion & Unitary Method",
          workedExamples: [
            {
              label: "Direct Proportion",
              problem: "If 5 notebooks cost ₹100, how much will 10 notebooks cost?",
              solution: "One notebook = 100 ÷ 5 = ₹20. Ten notebooks = 10 × 20 = ₹200.",
            },
            {
              label: "Inverse Proportion",
              problem: "12 workers finish a job in 10 days. How many days will 20 workers need at the same rate?",
              solution: "12 × 10 = 20 × d → 120 = 20d → d = 120 / 20 = 6 days",
            },
            {
              label: "Unitary Method",
              problem: "If 8 pens cost ₹120, find the cost of 12 pens.",
              solution: "One pen = 120 ÷ 8 = ₹15. 12 pens = 12 × 15 = ₹180.",
            },
          ],
          patternSpotter: [
            { clue: "Divide money in a given ratio", method: "Calculate total parts then share = (parts/total) × amount" },
            { clue: "Find missing proportional value", method: "Apply cross-multiplication: ad = bc" },
            { clue: "A:B and B:C given", method: "Compound ratio: equate the bridging term B" },
            { clue: "More items, more cost", method: "Direct proportion" },
            { clue: "More workers, fewer days", method: "Inverse proportion: product remains constant" },
            { clue: "Find the cost of one item first", method: "Unitary method" },
          ],
          proTips: [
            "Simplify the ratio before calculating shares.",
            "Add the ratio parts to find the total number of parts.",
            "Make common terms equal before combining ratios.",
            "Identify direct versus inverse proportion before writing an equation.",
            "Do not assume every pair of quantities is proportional; check the conditions given.",
          ],
        },
      ],
      timetable: [
        { activity: "Day 1–3 revision", time: "10 min" },
        { activity: "Ratio concepts and simplification", time: "15 min" },
        { activity: "Equivalent ratios and sharing quantities", time: "15 min" },
        { activity: "Compound ratios and proportion", time: "15 min" },
        { activity: "Direct, inverse and unitary examples", time: "10 min" },
        { activity: "Daily test — 20 questions", time: "20 min" },
        { activity: "Error log", time: "5 min" },
      ],
    },
    {
      id: "day-5",
      moduleCode: "Module M4",
      dayName: "Day 5 (Friday)",
      title: "Percentage and Complete Foundation Revision",
      timeMinutes: 90,
      learningObjective:
        "Understand the meaning of percentage and solve basic percentage calculations, increases and decreases.",
      completionTarget:
        "You should be able to calculate a percentage, find percentage change, reverse a percentage change and solve basic successive-change problems.",
      topics: [
        {
          title: "Topic 1: Meaning of Percentage & Conversions",
          description: "Percentage means a quantity out of 100: 25% = 25/100 = 1/4.",
          formulas: [
            "Fraction to percentage: multiply by 100 → (3/5) × 100 = 60%",
            "Percentage to fraction: divide by 100 → 40% = 40/100 = 2/5",
          ],
        },
        {
          title: "Topic 2: Percentage of a Number & Comparisons",
          formulas: [
            "Formula 1: x% of N = (x × N) / 100",
            "Example: 20% of 350 = (20 × 350) / 100 = 70",
            "",
            "Formula 2: Finding what percentage one number is of another",
            "Percentage = (Part / Whole) × 100",
            "Example: 45 is what percentage of 180? (45 / 180) × 100 = 25%",
          ],
        },
        {
          title: "Topic 3: Percentage Increase & Decrease",
          formulas: [
            "Percentage Increase = [(New Value − Original Value) / Original Value] × 100",
            "Example: Price rises from ₹400 to ₹460 → [(460 − 400) / 400] × 100 = 15%",
            "",
            "Percentage Decrease = [(Original Value − New Value) / Original Value] × 100",
            "Example: Price drops from ₹500 to ₹400 → [(500 − 400) / 500] × 100 = 20%",
          ],
        },
        {
          title: "Topic 4: Reverse Percentage",
          description: "Finding the original value when the final value and percentage shift are known.",
          workedExamples: [
            {
              problem: "After a 20% discount, the price is ₹800. Find the original price.",
              solution:
                "After a 20% discount, 80% remains.\n80% of original = 800\nOriginal = (800 × 100) / 80 = ₹1000",
            },
          ],
        },
        {
          title: "Topic 5: Successive Percentage Changes",
          description: "Used when a value changes more than once consecutively. Use a negative value for decrease.",
          formulas: [
            "Net Change Formula = a + b + (ab / 100)",
          ],
          workedExamples: [
            {
              problem: "A price increases by 20% and then decreases by 10%.",
              solution:
                "Net change = 20 + (−10) + [20 × (−10)] / 100\n= 20 − 10 − 2\n= 8% net increase",
            },
          ],
        },
        {
          title: "Topic 6: Quick Percentage Shortcuts & Common Traps",
          table: {
            headers: ["Percentage", "Mental Shortcut Method"],
            rows: [
              ["1%", "Divide by 100"],
              ["5%", "Half of 10%"],
              ["10%", "Divide by 10"],
              ["12.5%", "Divide by 8"],
              ["20%", "Divide by 5"],
              ["25%", "Divide by 4"],
              ["50%", "Divide by 2"],
              ["75%", "Three-fourths (half + quarter)"],
            ],
          },
          patternSpotter: [
            { clue: "Find 20% of 500", method: "Divide by 5 or multiply 500 by 20/100" },
            { clue: "40 is what percentage of 200?", method: "Part ÷ Whole × 100" },
            { clue: "Value increased from 400 to 500", method: "Difference ÷ Original × 100" },
            { clue: "Reduced by 20%", method: "Remaining value is 80%" },
            { clue: "Original price after discount given", method: "Reverse percentage: Final ÷ (remaining multiplier)" },
            { clue: "Two consecutive changes", method: "Successive percentage formula: a + b + ab/100" },
          ],
          proTips: [
            "Always use the original value as the denominator for percentage change.",
            "A 20% increase followed by a 20% decrease does NOT cancel out.",
            "When reversing a discount, divide by the remaining percentage multiplier.",
            "Distinguish percentage change from percentage points.",
            "Do not add two successive percentages without considering the compounding effect of the first change.",
          ],
        },
      ],
      timetable: [
        { activity: "Revision of Days 1–4", time: "10 min" },
        { activity: "Percentage fundamentals and conversions", time: "15 min" },
        { activity: "Percentage of a number and comparisons", time: "15 min" },
        { activity: "Increase and decrease", time: "15 min" },
        { activity: "Reverse and successive percentage", time: "10 min" },
        { activity: "Daily test — 20 questions", time: "20 min" },
        { activity: "Error log and formula revision", time: "5 min" },
      ],
    },
  ],
  assessmentStructure: {
    title: "Daily Assessment Structure — 100 Unique Questions",
    description: "Practise 20 questions after every study day covering the concepts taught that day.",
    difficultyBreakdown: {
      easy: 8,
      medium: 8,
      hard: 4,
    },
    schedule: [
      { day: "Day 1", topic: "Number foundation", questions: 20 },
      { day: "Day 2", topic: "Number system, HCF and LCM", questions: 20 },
      { day: "Day 3", topic: "Fractions and decimals", questions: 20 },
      { day: "Day 4", topic: "Ratio and proportion", questions: 20 },
      { day: "Day 5", topic: "Percentage", questions: 20 },
    ],
    scoringFormula: {
      formula: "Score = 2C − 0.5W",
      details: [
        "C = Correct answers (+2.00 marks each)",
        "W = Wrong answers (−0.50 marks penalty)",
        "Unattempted questions = 0 marks",
      ],
      maxDailyScore: 40,
      masteryTarget: "At least 16/20 correct (32+ marks) in each daily test with concepts properly understood.",
    },
  },
  formulaMemoryWork: {
    schedule: [
      { day: "Day 1", memorise: "Tables 1–15, squares 1–20, BODMAS, sign rules" },
      { day: "Day 2", memorise: "Divisibility rules (2–11), prime numbers, HCF/LCM rules" },
      { day: "Day 3", memorise: "Common fraction-decimal-percentage conversions (1/2 to 1/12)" },
      { day: "Day 4", memorise: "Ratio-sharing formulas, direct and inverse proportion" },
      { day: "Day 5", memorise: "Percentage formulas and quick percentage table" },
    ],
    routine: [
      "5 minutes of formula recall.",
      "5 minutes of solving older incorrect questions from your error log.",
      "Revisiting completed topics after approximately 7 and 21 days (Spaced Repetition).",
    ],
  },
  masteryTracker: [
    { id: "m-1", text: "Identify natural, whole, integer, rational and irrational numbers." },
    { id: "m-2", text: "Perform addition, subtraction, multiplication and division accurately." },
    { id: "m-3", text: "Apply positive and negative sign rules." },
    { id: "m-4", text: "Solve expressions using BODMAS correctly." },
    { id: "m-5", text: "Use mental calculation shortcuts for 25, 50, 99, 101 and 125." },
    { id: "m-6", text: "Apply divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10 and 11." },
    { id: "m-7", text: "Distinguish prime numbers from composite numbers." },
    { id: "m-8", text: "Perform prime factorisation." },
    { id: "m-9", text: "Find HCF and LCM using prime factors." },
    { id: "m-10", text: "Recognise HCF and LCM in word problems." },
    { id: "m-11", text: "Identify numerator and denominator." },
    { id: "m-12", text: "Convert and simplify fractions." },
    { id: "m-13", text: "Perform all four operations on fractions." },
    { id: "m-14", text: "Compare positive fractions." },
    { id: "m-15", text: "Convert common fractions to decimals." },
    { id: "m-16", text: "Simplify a ratio and divide an amount in a ratio." },
    { id: "m-17", text: "Solve compound-ratio and proportion problems." },
    { id: "m-18", text: "Identify direct and inverse proportion." },
    { id: "m-19", text: "Calculate a percentage of a number." },
    { id: "m-20", text: "Calculate percentage increase, decrease and reverse percentage." },
  ],
  nextWeekPreview: {
    modules: [
      { code: "M4", topic: "Ratio and proportion — advanced applications" },
      { code: "M5", topic: "Average and ages" },
      { code: "M6", topic: "Introduction to profit, loss and discount" },
    ],
    guidance:
      "The exact pace will depend on your daily assessment results. We should not move to advanced arithmetic while your fraction, ratio and percentage foundations are still weak.",
    firstWeekRule:
      "Your first-week rule: Learn the concept, understand the formula, identify the question pattern, practise different methods, and then attempt the daily 20-question test. Do not memorise shortcuts before understanding why they work.",
  },
};
