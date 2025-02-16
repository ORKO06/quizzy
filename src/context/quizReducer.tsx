import { IQuizDataAction } from "./quizAction";
import { IQuizData } from "./quizInterface";
import { IQuizDataActionType } from "./quizAction";

export const QuizReducer = (state: IQuizData, action: IQuizDataAction): IQuizData => {
  console.log(action.type, action.payload, state);
  switch (action.type) {
    case IQuizDataActionType.INITIATE_QUIZ:
      return {
        ...state,
        initiated: true,
        questions: action.payload?.questions,
        timePerQuestion: action.payload?.timePerQuestion,
        count: action.payload?.questions.length,
        status: "not_started",
      };

    case IQuizDataActionType.GIVE_CONSENT:
      return {
        ...state,
        consent: true,
        status: "in_progress",
        timePerQuestion: action.payload?.timePerQuestion,
        difficulty: action.payload?.difficulty,
      };

    case IQuizDataActionType.ANSWER_SUBMITTED: {
      const correct = action.payload?.option.id === state.questions[state.currentQuestion].answer;
      const updatedQuestion = {
        ...state.questions[state.currentQuestion],
        selectedOption: action.payload?.option,
        timeSpent: action.payload?.timeSpent,
        submitted: true,
      };
      return {
        ...state,
        questions: state.questions.map((q) => (q.id === action.payload?.questionId ? { ...updatedQuestion } : q)),
        userAnswers: [...state.userAnswers, { questionId: action.payload?.questionId, selectedOptionId: action.payload?.option.id }],
        score: state.score + (correct ? 1 : 0),
        correct: correct ? [...state.correct, updatedQuestion] : [...state.correct],
        incorrect: correct ? [...state.incorrect] : [...state.incorrect, updatedQuestion],
        totalTimeSpent: state.totalTimeSpent + (action.payload?.timeSpent ? action.payload?.timeSpent : 0),
      };
    }

    case IQuizDataActionType.NEXT_QUESTION: {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    }

    case IQuizDataActionType.ANSWER_NOT_SUBMITTED:
      const updatedQuestion = { ...state.questions[state.currentQuestion], timeSpent: action.payload?.timeSpent, submitted: false };

      return {
        ...state,
        notAttempted: [...state.notAttempted, updatedQuestion],
        currentQuestion: state.currentQuestion + 1,
        totalTimeSpent: state.totalTimeSpent + (action.payload?.timeSpent ? action.payload?.timeSpent : 0),
      };

    case IQuizDataActionType.FINALIZE_QUIZ: {
      return {
        ...state,
        status: "completed",
      };
    }

    default:
      return state;
  }
};
