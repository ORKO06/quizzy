const QUIZ_STORAGE_KEY = "quizAttempts";

export interface QuizAttempt {
  id: string | number;
  timestamp: number;
  score: number;
  status: string;
  totalTimeSpent: number;
}

export const useLocalStorage = () => {
  const getQuizAttempts = (): QuizAttempt[] => {
    if (typeof window === "undefined") return []; // Ensu
    const attempts = localStorage.getItem(QUIZ_STORAGE_KEY);
    return attempts ? JSON.parse(attempts) : [];
  };

  const saveQuizAttempt = (attempt: QuizAttempt): void => {
    if (typeof window === "undefined") return;
    const existingAttempts = getQuizAttempts();
    existingAttempts.push(attempt);
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(existingAttempts));
  };

  return { getQuizAttempts, saveQuizAttempt };
};
