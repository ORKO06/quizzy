"use client";
import React, { useContext, useEffect, useState } from "react";
import { PreQuizConsentContainer, PreQuizConsentTermsText, PreQuizContainer, PreQuizDescriptionContainer } from "./styled";
import Header2 from "../common/Typography/Header2";
import Header3 from "../common/Typography/Header3";
import ButtonText from "../common/Typography/ButtonText";
import Button from "../common/Typography/Button";
import { useRouter } from "next/navigation";
import { QuizContext } from "../../context";
import { IQuizDataActionType } from "../../context/quizAction";
import Back from "../common/Back";

export interface IPreQuizInfo {
  title: string;
  description: string[];
  consentText: string;
  btnText: string;
}

const PreQuizInfo = (props: IPreQuizInfo) => {
  const [consentApproved, setConsentApproved] = useState(false);
  const { state, dispatch } = useContext(QuizContext);
  const router = useRouter();

  const handleConsent = () => {
    setConsentApproved((prev) => !prev);
  };

  useEffect(() => {
    if (state && !state.initiated) {
      router.push("/");
    }
  }, [router, state]);

  const handleClick = () => {
    dispatch({
      type: IQuizDataActionType.GIVE_CONSENT,
      payload: {
        difficulty: "easy",
        timePerQuestion: 20,
      },
    });
    if (router) {
      router.push("/quiz");
    }
  };

  if (!state || !state.initiated) {
    return <>Loader</>;
  }

  return (
    <>
      <PreQuizContainer>
        <Header2>{props.title}</Header2>
        <PreQuizDescriptionContainer>
          {props.description.map((desc, ind) => (
            <Header3 color='#a6aab2' key={`${desc}-${ind}`}>
              {`${ind + 1}. ${desc}`}
            </Header3>
          ))}
        </PreQuizDescriptionContainer>
        <PreQuizConsentContainer onClick={handleConsent}>
          <input size={32} checked={consentApproved} type='checkbox' onChange={() => {}} />
          <PreQuizConsentTermsText> {props.consentText} </PreQuizConsentTermsText>
        </PreQuizConsentContainer>
      </PreQuizContainer>
      <Button onClick={handleClick} disabled={!consentApproved} background={"linear-gradient(90deg, #F09FFD 0%, #1494F1 100%)"}>
        <ButtonText color={!consentApproved ? "#757575" : "white"} fontWeight='bold'>
          {props.btnText}
        </ButtonText>
      </Button>
    </>
  );
};

export default PreQuizInfo;
