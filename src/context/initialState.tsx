import { IQuizData } from "./quizInterface";

export const initialState: IQuizData = {
    initiated: false,
    consentInfo:[],
    difficulty: "easy",
    consent: false,
    count: 0,
    score: 0,
    questions: [],
    timePerQuestion: 0,
    currentQuestion:0,
    totalTimeSpent: 0,
    correct: [],
    incorrect: [],
    notAttempted: [],
    userAnswers: [],
    status: "not_started",
    metadata: {
      title: "",
      description: "",
      difficulty: "easy",
      category: "",
    },
  };
