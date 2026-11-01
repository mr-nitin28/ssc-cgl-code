import { ExamResult, UserExamState } from "./types";

const EXAM_RESULTS_KEY = "apex_ssc_exam_results";
const ACTIVE_EXAM_KEY = "apex_ssc_active_exam_";
const CHAPTER_PROGRESS_KEY = "apex_ssc_chapter_progress_";
const PRIORITY_RATINGS_KEY = "apex_ssc_priority_ratings_";

export function saveExamResult(result: ExamResult): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getExamResults();
    const filtered = existing.filter((r) => r.mockId !== result.mockId);
    filtered.unshift(result);
    localStorage.setItem(EXAM_RESULTS_KEY, JSON.stringify(filtered));
  } catch (e) {
    console.error("Failed to save exam result:", e);
  }
}

export function getExamResults(): ExamResult[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(EXAM_RESULTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getLatestResultForMock(mockId: number): ExamResult | null {
  const results = getExamResults();
  return results.find((r) => r.mockId === mockId) || null;
}

export function saveActiveExam(state: UserExamState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ACTIVE_EXAM_KEY + state.mockId, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save active exam:", e);
  }
}

export function getActiveExam(mockId: number): UserExamState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(ACTIVE_EXAM_KEY + mockId);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearActiveExam(mockId: number): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ACTIVE_EXAM_KEY + mockId);
}

export function getCompletedChapters(subject: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CHAPTER_PROGRESS_KEY + subject);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleChapterCompleted(subject: string, chapterId: string): string[] {
  if (typeof window === "undefined") return [];
  const current = getCompletedChapters(subject);
  const exists = current.includes(chapterId);
  const updated = exists ? current.filter((id) => id !== chapterId) : [...current, chapterId];
  try {
    localStorage.setItem(CHAPTER_PROGRESS_KEY + subject, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save chapter progress:", e);
  }
  return updated;
}

export function getPriorityRatings(subject: string): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(PRIORITY_RATINGS_KEY + subject);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function savePriorityRating(subject: string, topic: string, rating: number): Record<string, number> {
  if (typeof window === "undefined") return {};
  const current = getPriorityRatings(subject);
  current[topic] = rating;
  try {
    localStorage.setItem(PRIORITY_RATINGS_KEY + subject, JSON.stringify(current));
  } catch (e) {
    console.error("Failed to save priority rating:", e);
  }
  return current;
}
