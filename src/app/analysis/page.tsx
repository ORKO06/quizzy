"use client";

import { useContext, useEffect } from "react";
import quizContext from "../../context/quizContext";
import { useRouter } from "next/navigation";
import Header2 from "../../component/common/Typography/Header2";
import { MainContainer } from "../../component/global";
import ResultSection from "../../component/ResultSection/ResultSection";
import Loader from "../../component/common/Loader/Loader";

export default function Analysis() {
  const { state } = useContext(quizContext);
  const router = useRouter();

  useEffect(() => {
    if (state && state.status !== "completed") {
      router.push("/");
    }
  });

  if (state && state.status !== "completed") {
    return <Loader />;
  }

  return (
    <>
      <MainContainer>
        <Header2>Quiz Analysis</Header2>
        <div>
          <ResultSection questions={state.correct} title='Correct' />
          <ResultSection questions={state.incorrect} title='In Correct' />
          <ResultSection questions={state.notAttempted} title='Not Attempted' />
        </div>
      </MainContainer>
    </>
  );
}
