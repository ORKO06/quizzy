"use client";
import React from "react";
import { MainContainer } from "../../component/global";
import PreQuizInfo from "../../component/PreQuizInfo/PreQuizInfo";
import Back from "../../component/common/Back";

const quizInfo = {
  title: "Information",
  description: [
    "Each question has an individual timer of 90 seconds. If the time runs out, the question will be automatically skipped.",
    "Correct answers are awarded 1 mark, while incorrect or skipped answers receive 0 marks.",
    "There is no negative marking for incorrect answers.",
    "Once a question is skipped, you cannot return to it later.",
    "Ensure you answer each question within the given time.",
  ],
  consentText: "I have read all the info",
  btnText: "Proceed",
};

export default function Consent() {
  return (
    <>
      <Back text={"←"} />
      <MainContainer>
        <PreQuizInfo {...quizInfo} />
      </MainContainer>
    </>
  );
}
