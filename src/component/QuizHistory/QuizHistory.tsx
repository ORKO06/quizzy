"use client";

import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Body from "../common/Typography/Body";
import { HistoryContainer, CardGrid, AttemptCard, DateText } from "./styled";
import { useRouter } from "next/navigation";
import Header2 from "../common/Typography/Header2";
import Loader from "../common/Loader/Loader";

const QuizHistory = () => {
  const { getQuizAttempts } = useLocalStorage();
  const attempts = getQuizAttempts();
  const router = useRouter();

  useEffect(() => {
    if (attempts.length < 1) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  });

  if (attempts.length < 1) {
    return <Loader />;
  }

  return (
    <HistoryContainer>
      <Header2>Past Quiz Attempts</Header2>
      {attempts.length === 0 ? (
        <Body>No quiz attempts found.</Body>
      ) : (
        <CardGrid>
          {attempts.map((attempt) => (
            <AttemptCard key={attempt.id}>
              <DateText>
                <strong>Date:</strong> {new Date(attempt.timestamp).toLocaleString()}
              </DateText>
              <Body>
                <strong>Score:</strong> {attempt.score}
              </Body>
              <Body>
                <strong>Status:</strong> {attempt.status}
              </Body>
              <Body>
                <strong>Total Time Spent:</strong> {formatTime(attempt.totalTimeSpent)}
              </Body>
            </AttemptCard>
          ))}
        </CardGrid>
      )}
    </HistoryContainer>
  );
};

const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds}s`;
};

export default QuizHistory;
