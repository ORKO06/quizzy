import React, { memo } from "react";
import { QuizOptionContainer } from "./styled";
import Header3 from "../../../common/Typography/Header3";
import { OPTION_COLORS } from "./constant";
import { IOption } from "../../../../context/quizInterface";

export enum OPTION_TYPE {
  DEFAULT = "DEFAULT",
  SELECTED = "SELECTED",
  CORRECT = "CORRECT",
  INCORRECT = "INCORRECT",
}

const getOptionType = (isSelected: boolean, isCorrect: boolean, isIncorrect: boolean): OPTION_TYPE => {
  if (isCorrect) {
    return OPTION_TYPE.CORRECT;
  } else if (isIncorrect) {
    return OPTION_TYPE.INCORRECT;
  } else if (isSelected) {
    return OPTION_TYPE.SELECTED;
  } else {
    return OPTION_TYPE.DEFAULT;
  }
};

export interface IQuizOption {
  option: IOption;
  isSelected: boolean | null;
  isCorrect: boolean | null;
  isIncorrect: boolean | null;
  submitted?: boolean;
  handleSelect?: (option: IOption) => void;
}

const QuizOption = (props: IQuizOption) => {
  const { option, isCorrect, isIncorrect, isSelected, handleSelect } = props;
  const { text } = option;

  const optionType = getOptionType(isSelected || false, isCorrect || false, isIncorrect || false);

  const onClick = () => {
    if (handleSelect) {
      handleSelect?.(option);
    }
  };

  return (
    <QuizOptionContainer submitted={props.submitted} selected={isSelected || false} onClick={onClick} bgcolor={OPTION_COLORS[optionType].background}>
      <Header3 color={OPTION_COLORS[optionType].textColor}>{text}</Header3>
    </QuizOptionContainer>
  );
};

export default memo(QuizOption);
