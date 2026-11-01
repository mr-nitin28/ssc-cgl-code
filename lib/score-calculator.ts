import { ExamResult, MockTest, SectionScore, UserExamState } from "./types";

export function calculateExamResult(
  mock: MockTest,
  examState: UserExamState,
  timeSpentSeconds: number
): ExamResult {
  const sectionalScores: SectionScore[] = [];
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalAttempted = 0;
  let totalScore = 0;

  mock.sections.forEach((section) => {
    let sCorrect = 0;
    let sIncorrect = 0;
    let sAttempted = 0;

    section.questions.forEach((q) => {
      const userChoice = examState.answers[q.id];
      if (userChoice !== undefined && userChoice >= 0) {
        sAttempted++;
        if (userChoice === q.correctAnswer) {
          sCorrect++;
        } else {
          sIncorrect++;
        }
      }
    });

    const sScore = Math.max(0, sCorrect * section.marksPerCorrect - sIncorrect * section.negativePerWrong);
    const sAccuracy = sAttempted > 0 ? Math.round((sCorrect / sAttempted) * 100) : 0;

    totalCorrect += sCorrect;
    totalIncorrect += sIncorrect;
    totalAttempted += sAttempted;
    totalScore += sCorrect * section.marksPerCorrect - sIncorrect * section.negativePerWrong;

    sectionalScores.push({
      sectionIndex: section.index,
      name: section.name,
      shortName: section.shortName,
      attempted: sAttempted,
      correct: sCorrect,
      incorrect: sIncorrect,
      unattempted: section.questionsCount - sAttempted,
      score: Math.round(sScore * 10) / 10,
      maxMarks: section.maxMarks,
      accuracy: sAccuracy,
    });
  });

  const finalScore = Math.max(0, Math.round(totalScore * 100) / 100);
  const totalQuestions = mock.totalQuestions;
  const totalUnattempted = totalQuestions - totalAttempted;
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const percentage = Math.round((finalScore / mock.maxScore) * 1000) / 10;

  return {
    mockId: mock.id,
    title: mock.title,
    completedAt: new Date().toISOString(),
    totalScore: finalScore,
    maxScore: mock.maxScore,
    percentage: percentage,
    accuracy: overallAccuracy,
    totalAttempted: totalAttempted,
    totalCorrect: totalCorrect,
    totalIncorrect: totalIncorrect,
    totalUnattempted: totalUnattempted,
    timeSpentSeconds: timeSpentSeconds,
    sectionalScores: sectionalScores,
  };
}
