import React, { useCallback, useContext, useEffect, useState } from "react";

// typograpgy
import quizContext from "../../context/quizContext";
import Quiz from "./component/Quiz/Quiz";
import QuizCountdown from "./component/Quiz/QuizCountdown";
import { IOption } from "../../context/quizInterface";
import Loader from "../common/Loader/Loader";

export interface IQuizComponentProps {
  progress: string;
  handleSubmit: (questionId: string | number, option: IOption | null, timeSpent?: number) => void;
  handleSkip: (questionId: string | number, timeSpent: number) => void;
  handleNextQuestion: VoidFunction;
}

const QuizComponent = (props: IQuizComponentProps) => {
  const { progress, handleSkip, handleNextQuestion, handleSubmit } = props;
  const { state } = useContext(quizContext);
  const question = state.questions[state.currentQuestion];
  const [timeLeft, setTimeLeft] = useState(state.timePerQuestion);

  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setTimeLeft(state.timePerQuestion);
    setSelectedOption(null);
    setSubmitted(false);
  }, [question.id, state.timePerQuestion]);

  const onSubmit = useCallback(() => {
    handleSubmit(question.id, selectedOption, state.timePerQuestion - timeLeft);
    setSubmitted(true);
  }, [handleSubmit, question.id, selectedOption, state.timePerQuestion, timeLeft]);

  const onNext = () => {
    handleNextQuestion();
    setSubmitted(false);
    setSelectedOption(null);
    setTimeLeft(state.timePerQuestion);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    if (!submitted) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      if (timeLeft <= 0) {
        handleSkip(question.id, 20);
        clearInterval(timer);
        setSubmitted(false);
        return;
      }
    }

    return () => clearInterval(timer);
  }, [handleNextQuestion, handleSkip, onSubmit, question.id, submitted, timeLeft]);

  const onSelectOption = (option: IOption) => {
    if (!submitted) {
      setSelectedOption(option);
    }
  };

  const onSkip = useCallback(() => {
    handleSkip(question.id, state.timePerQuestion - timeLeft);
  }, [handleSkip, question.id, state.timePerQuestion, timeLeft]);

  if (state && !state.questions) {
    return <Loader />;
  }

  return (
    <>
      <QuizCountdown timeRemaining={timeLeft} title='Quizzy' />
      <Quiz
        question={question}
        selectedOption={selectedOption}
        submitted={submitted}
        onSelectOption={onSelectOption}
        onSubmit={onSubmit}
        onSkip={onSkip}
        onNext={onNext}
        progress={progress}
      />
    </>
  );
};

export default QuizComponent;
