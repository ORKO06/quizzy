"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

// components
import HomeComponent from "../component/Home/HomeComponent";

// styled components
import { MainContainer } from "../component/global";

// context
import { QuizContext } from "../context";
import { IQuizDataActionType } from "../context/quizAction";

// mock
import { dummyQuizData } from "../component/Quiz/mock";

export default function Home() {
  const { dispatch } = useContext(QuizContext);

  const router = useRouter();

  const handleStartQuiz = () => {
    dispatch({
      type: IQuizDataActionType.INITIATE_QUIZ,
      payload: {
        questions: dummyQuizData,
        timePerQuestion: 20,
      },
    });
    router.push("/consent");
  };

  const redirectToPastResult = () => {
    router.push("/past-results");
  };

  return (
    <MainContainer>
      <HomeComponent onPrimaryCtaClick={handleStartQuiz} onSecondaryCtaClick={redirectToPastResult} />
    </MainContainer>
  );
}
