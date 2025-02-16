import React, { memo } from "react";
import { QuizContainer, QuizOptionContainer } from "../../styled";
import Header2 from "../../../common/Typography/Header2";
import Header3 from "../../../common/Typography/Header3";
import Button from "../../../common/Typography/Button";
import ButtonText from "../../../common/Typography/ButtonText";
import QuizOption from "../QuizOption/QuizOption";
import { BottomContainer, ButtonContainer } from "../QuizOption/styled";
import { IQuestion, IOption } from "../../../../context/quizInterface";

export interface IQuizProps {
  question: IQuestion;
  selectedOption: IOption | null;
  submitted: boolean;
  onSelectOption: (option: IOption) => void;
  onSubmit: () => void;
  onSkip: () => void;
  onNext: () => void;
  progress: string;
}

const Quiz = (props: IQuizProps) => {
  const { question, selectedOption, submitted, onSelectOption, onSubmit, onSkip, onNext, progress } = props;

  return (
    <QuizContainer>
      <Header2>{question.question}</Header2>
      <QuizOptionContainer>
        {question.options.map((opt: IOption) => (
          <QuizOption
            key={opt.id}
            isSelected={selectedOption && selectedOption.id === opt.id}
            option={opt}
            handleSelect={() => onSelectOption(opt)}
            isCorrect={submitted && opt.id === question.answer}
            isIncorrect={submitted && selectedOption && selectedOption.id === opt.id && selectedOption.id !== question.answer}
            submitted={submitted}
          />
        ))}
      </QuizOptionContainer>
      <BottomContainer>
        <ButtonContainer>
          <Button
            disabled={submitted}
            background='linear-gradient(90deg, #D070E8 0%, #0A79DF 100%)'
            hoverbackground={!submitted ? "linear-gradient(90deg, #B050C8 0%, #0648AD 100%)" : ""}
            onClick={onSkip}
          >
            <ButtonText color='white'>Skip</ButtonText>
          </Button>
          <Button
            disabled={!selectedOption && !submitted}
            background='linear-gradient(90deg, #D070E8 0%, #0A79DF 100%)'
            hoverbackground={selectedOption ? "linear-gradient(90deg, #B050C8 0%, #0648AD 100%)" : ""}
            onClick={submitted ? onNext : onSubmit}
          >
            <ButtonText color={!selectedOption && !submitted ? "#757575" : "white"}>{submitted ? "Next" : "Submit"}</ButtonText>
          </Button>
        </ButtonContainer>
        <Header3 color='#f1f1f1'>{progress}</Header3>
      </BottomContainer>
    </QuizContainer>
  );
};

export default memo(Quiz);
