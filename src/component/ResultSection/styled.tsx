import styled from "styled-components";
import Header3 from "../common/Typography/Header3";
import Header2 from "../common/Typography/Header2";

export const SectionWrapper = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled(Header2)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const NoQuestions = styled.p`
  color: #666;
`;

export const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const QuestionItem = styled.li`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: rgb(15, 14, 14);
`;

export const QuestionText = styled(Header3)`
  font-weight: 600;
  margin-bottom: 12px;
`;

export const AnswerText = styled(Header3)`
  margin-bottom: 4px;
  font-weight: 400;
  strong {
    font-weight: 600;
  }
`;
