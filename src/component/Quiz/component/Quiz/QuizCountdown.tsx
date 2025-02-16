import React, { memo } from "react";
import Header3 from "../../../common/Typography/Header3";
import { HeaderElement } from "../QuizOption/styled";

interface IQuizCountdown {
  title: string;
  timeRemaining: number;
}

const QuizCountdown = ({ title, timeRemaining }: IQuizCountdown) => {
  return (
    <HeaderElement>
      <Header3>{title}</Header3>
      <Header3 style={{ color: "#f1f1f1" }}>Time Left: {timeRemaining}</Header3>
    </HeaderElement>
  );
};

export default memo(QuizCountdown);
