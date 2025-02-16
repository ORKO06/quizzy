export interface IQuizData {
  consentInfo: string[];
  difficulty: "easy" | "medium" | "hard";
  initiated: boolean;
  consent: boolean;
  count: number;
  score: number;
  questions: IQuestion[];
  timePerQuestion: number;
  totalTimeSpent: number;
  correct: IQuestion[];
  incorrect: IQuestion[];
  notAttempted: IQuestion[];
  userAnswers: IUserAnswer[];
  status: "not_started" | "in_progress" | "completed";
  metadata: IQuizMetadata;
  currentQuestion: number;
}

export interface IQuestion {
  id: string | number;
  question: string;
  answer: number;
  options: IOption[];
  selectedOption?: IOption;
  timeSpent?: number;
  submitted: boolean;
}

export interface IOption {
  id: string | number;
  text: string;
}

export interface IResult {
  questionId: string | number;
  timeSpent: number;
}

export interface INotAttempted {
  questionId: string | number;
}

export interface IUserAnswer {
  questionId: string | number;
  selectedOptionId: string | number;
}

export interface IQuizMetadata {
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
}
