import React, { memo } from "react";
import Header3 from "../../../common/Typography/Header3";
import { HeaderElement } from "../QuizOption/styled";
import { useRouter } from "next/navigation";

interface IQuizCountdown {
  title: string;
  timeRemaining: number;
}

const QuizCountdown = ({ title, timeRemaining }: IQuizCountdown) => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push("/");
  };

  return (
    <HeaderElement>
      <Header3 onClick={handleTitleClick}>{title}</Header3>
      <Header3 style={{ color: "#f1f1f1" }}>Time Left: {timeRemaining}</Header3>
    </HeaderElement>
  );
};

export default memo(QuizCountdown);
