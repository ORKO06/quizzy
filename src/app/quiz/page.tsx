"use client";

import { useContext, useEffect } from "react";
import QuizComponent from "../../component/Quiz/QuizComponent";
import { dummyQuizData } from "../../component/Quiz/mock";
import quizContext from "../../context/quizContext";
import { useRouter } from "next/navigation";
import { IQuizDataActionType } from "../../context/quizAction";
import { IOption } from "../../context/quizInterface";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Loader from "../../component/common/Loader/Loader";

export default function Quiz() {
  const { state, dispatch } = useContext(quizContext);
  const router = useRouter();
  const { saveQuizAttempt } = useLocalStorage();

  useEffect(() => {
    if (state && !state.consent) {
      router.push("/");
    }
  });

  const redirectToResult = () => {
    router.push("/result");
  };

  const handleAnswerSubmit = (questionId: string | number, option: IOption | null, timeSpent?: number) => {
    dispatch({
      type: IQuizDataActionType.ANSWER_SUBMITTED,
      payload: {
        questionId,
        option,
        timeSpent: timeSpent,
      },
    });
  };

  const handleSkip = (questionId: string | number, timeSpent: number) => {
    if (state.currentQuestion + 1 === state.questions.length) {
      dispatch({
        type: IQuizDataActionType.ANSWER_NOT_SUBMITTED,
        payload: {
          questionId,
          timeSpent: timeSpent || 0,
        },
      });
      saveQuizAttempt({
        id: `id-${Date.now()}`,
        score: state.score,
        status: "completed",
        timestamp: Date.now(),
        totalTimeSpent: state.totalTimeSpent,
      });
      dispatch({
        type: IQuizDataActionType.FINALIZE_QUIZ,
      });
      redirectToResult();
      return;
    }
    dispatch({
      type: IQuizDataActionType.ANSWER_NOT_SUBMITTED,
      payload: {
        questionId,
        timeSpent,
      },
    });
  };

  const handleNextQuestion = () => {
    if (state.currentQuestion + 1 === state.questions.length) {
      saveQuizAttempt({
        id: `id-${Date.now()}`,
        score: state.score,
        status: "completed",
        timestamp: Date.now(),
        totalTimeSpent: state.totalTimeSpent,
      });
      dispatch({
        type: IQuizDataActionType.FINALIZE_QUIZ,
      });
      redirectToResult();
      return;
    }
    dispatch({
      type: IQuizDataActionType.NEXT_QUESTION,
    });
  };

  if ((state && !state.consent) || state.currentQuestion >= state.questions.length) {
    return <Loader />;
  }

  return (
    <>
      <QuizComponent
        progress={` Progress: ${state.currentQuestion + 1}/${dummyQuizData.length}`}
        handleNextQuestion={handleNextQuestion}
        handleSubmit={handleAnswerSubmit}
        handleSkip={handleSkip}
      />
    </>
  );
}
