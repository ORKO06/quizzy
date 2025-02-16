import { IQuestion } from "../../context/quizInterface";

export const dummyQuizData: IQuestion[] = [
  {
    submitted: false,
    question: "Who is the Father of the Nation?", // The actual question text
    options: [
      { text: "Mahatma Gandhi", id: 4 },
      { text: "Jawaharlal Nehru", id: 1 },
      { text: "Subhas Chandra Bose", id: 2 },
      { text: "Sardar Vallabhbhai Patel", id: 3 },
    ],
    answer: 4,
    id: 30,
  },
  {
    submitted: false,
    question: "What is the capital of France?",
    options: [
      { text: "Paris", id: 4 },
      { text: "London", id: 1 },
      { text: "Rome", id: 2 },
      { text: "Berlin", id: 3 },
    ],
    answer: 4,
    id: 25,
  },
  {
    submitted: false,
    question: "Which is the largest planet in our solar system?",
    options: [
      { text: "Jupiter", id: 4 },
      { text: "Mars", id: 1 },
      { text: "Venus", id: 2 },
      { text: "Saturn", id: 3 },
    ],
    answer: 4,
    id: 40,
  },
  {
    submitted: false,
    question: "Who formulated the laws of motion?",
    options: [
      { text: "Albert Einstein", id: 4 },
      { text: "Isaac Newton", id: 1 },
      { text: "Galileo Galilei", id: 2 },
      { text: "Stephen Hawking", id: 3 },
    ],
    answer: 1,
    id: 35,
  },
  {
    submitted: false,
    question: "Who wrote Hamlet?",
    options: [
      { text: "William Shakespeare", id: 4 },
      { text: "Jane Austen", id: 1 },
      { text: "Charles Dickens", id: 2 },
      { text: "Emily Brontë", id: 3 },
    ],
    answer: 4,
    id: 34,
  },
  {
    submitted: false,
    question: "Who is the current President of India?",
    options: [
      { text: "Narendra Modi", id: 4 },
      { text: "Ram Nath Kovind", id: 1 },
      { text: "Droupadi Murmu", id: 2 },
      { text: "Pratibha Patil", id: 3 },
    ],
    answer: 2,
    id: 36,
  },
  {
    submitted: false,
    question: "Which is the most popular sport in India?",
    options: [
      { text: "Cricket", id: 4 },
      { text: "Football", id: 1 },
      { text: "Badminton", id: 2 },
      { text: "Tennis", id: 3 },
    ],
    answer: 4,
    id: 309,
  },
];
