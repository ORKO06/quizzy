"use client";

import { useContext, useEffect } from "react";
import quizContext from "../../context/quizContext";
import { useRouter } from "next/navigation";
import Header2 from "../../component/common/Typography/Header2";
import { MainContainer } from "../../component/global";
import Header3 from "../../component/common/Typography/Header3";
import Button from "../../component/common/Typography/Button";
import ButtonText from "../../component/common/Typography/ButtonText";
import Loader from "../../component/common/Loader/Loader";
import { ButtonContainer } from "../../component/Home/styled";

export default function Result() {
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

  const resultMessage = () => {
    const score = state.score / state.questions.length;

    if (score > 0.85) {
      return "Well Done!";
    } else if (score > 0.65) {
      return "Good Job!";
    } else if (score > 0.4) {
      return "Keep Trying!";
    } else {
      return "Better Luck Next Time!";
    }
  };

  const redirectToAnalysis = () => {
    router.push("/analysis");
  };

  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <>
      <MainContainer>
        <Header3>{resultMessage()}</Header3>
        <Header2>
          You scored {state.score} out of {state.questions.length}
        </Header2>
        <Header3>Duration: {state.totalTimeSpent}</Header3>
        <ButtonContainer>
          <Button background='linear-gradient(90deg, #D070E8 0%, #0A79DF 100%)'>
            <ButtonText onClick={redirectToAnalysis}> Analyze </ButtonText>
          </Button>
          <Button background='linear-gradient(90deg, #D070E8 0%, #0A79DF 100%)'>
            <ButtonText onClick={redirectToHome}> Home </ButtonText>
          </Button>
        </ButtonContainer>
      </MainContainer>
    </>
  );
}
