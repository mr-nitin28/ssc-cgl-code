export interface Passage {
  text: string;
  badge: string;
  startQ: number;
  endQ: number;
}

export interface Question {
  id: number;
  localId: number;
  sectionIndex: number;
  sectionName: string;
  text: string;
  options: string[];
  correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  correctLetter: string; // 'A' | 'B' | 'C' | 'D'
  passage: Passage | null;
  explanation: string;
  tip: string;
}

export interface Section {
  index: number;
  name: string;
  shortName: string;
  durationMinutes: number;
  questionsCount: number;
  maxMarks: number;
  marksPerCorrect: number;
  negativePerWrong: number;
  questions: Question[];
}

export interface MockTest {
  id: number;
  slug: string;
  title: string;
  pattern: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  totalQuestions: number;
  maxScore: number;
  durationMinutes: number;
  sections: Section[];
}

export interface MockSummary {
  id: number;
  slug: string;
  title: string;
  pattern: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  totalQuestions: number;
  maxScore: number;
  durationMinutes: number;
  sections: {
    name: string;
    shortName: string;
    questionsCount: number;
    maxMarks: number;
  }[];
}

export type QuestionStatus =
  | "not_visited"
  | "not_answered"
  | "answered"
  | "marked_review"
  | "answered_marked_review";

export interface UserExamState {
  mockId: number;
  startedAt: number;
  completedAt?: number;
  isSubmitted: boolean;
  timeRemainingSeconds: number; // overall or sectional
  sectionTimes: number[]; // remaining seconds for each section
  activeSection: number;
  activeQuestion: number; // 0 to 99
  answers: Record<number, number>; // questionId (1-100) -> optionIndex (0-3)
  markedForReview: Record<number, boolean>;
  visited: Record<number, boolean>;
  quickChecked: Record<number, boolean>;
}

export interface SectionScore {
  sectionIndex: number;
  name: string;
  shortName: string;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  maxMarks: number;
  accuracy: number;
}

export interface ExamResult {
  mockId: number;
  title: string;
  completedAt: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  accuracy: number;
  totalAttempted: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnattempted: number;
  timeSpentSeconds: number;
  sectionalScores: SectionScore[];
}

export interface Chapter {
  id?: string;
  name: string;
  tag?: string;
  tier?: string;
  weightage?: string | number;
}

export interface SubjectSyllabus {
  title: string;
  subtitle: string;
  tier1Questions: number;
  tier2Questions: number;
  suggestedMinutesPerDay: number;
  topTopicsShare?: string;
  clozeShare?: string;
  blueprint: string[][];
  topicPriorities: [string, number][];
  classifications?: unknown;
  allocation?: unknown;
  priorities?: unknown;
  studyTimeSplit?: unknown;
  learningOrder?: unknown;
  engine?: unknown;
  themes?: unknown;
  modules?: unknown;
  families?: unknown;
  currentAffairsSystem?: unknown;
  weekPlan24: [number, string, string, string][];
  difficultyBreakdown: [string, string, string][];
  errorRates: [string, string, string][];
  goldenTips: [string, string, string][];
  chapters: (string | [string, string, string?])[];
}

export interface TopperPlaybook {
  scoreboard: [string, string][];
  smartWork: [string, string, string][];
  toolkit: [string, string, string][];
  doDont: [string, string][];
  examDay: [string, string, string][];
  weekly: [string, string, string][];
  checklist: string[];
}

export interface PatternItem {
  id: number;
  category: string;
  title: string;
  spotTrigger: string;
  formula: string;
  example: string;
  solution: string;
  shortcutTip: string;
}
