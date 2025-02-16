"use client";
// styled components
import { MainContainer } from "../../component/global";

// components
import QuizHistory from "../../component/QuizHistory/QuizHistory";

export default function Home() {
  return (
    <MainContainer>
      <QuizHistory />
    </MainContainer>
  );
}
