import React from "react";
import { IQuestion } from "../../context/quizInterface";
import { SectionWrapper, Title, NoQuestions, QuestionList, QuestionItem, QuestionText, AnswerText } from "./styled";

interface SectionProps {
  questions: IQuestion[];
  title: string;
}

const ResultSection: React.FC<SectionProps> = ({ questions, title }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {questions.length === 0 ? (
        <NoQuestions>No questions in this category.</NoQuestions>
      ) : (
        <QuestionList>
          {questions.map((q) => (
            <QuestionItem key={q.id}>
              <QuestionText>Q: {q.question}</QuestionText>
              <AnswerText>
                <strong>Selected Answer:</strong> {q.selectedOption ? q.selectedOption.text : "Not Answered"}
              </AnswerText>
              <AnswerText>
                <strong>Correct Answer:</strong> {q.options.find((opt) => opt.id === q.answer)?.text}
              </AnswerText>
              <AnswerText>
                <strong>TimeSpent:</strong> {q.timeSpent}s
              </AnswerText>
            </QuestionItem>
          ))}
        </QuestionList>
      )}
    </SectionWrapper>
  );
};

export default ResultSection;
