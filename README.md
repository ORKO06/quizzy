# Quizzy

Quizzy is a dynamic quiz application built with Next.js 15.1.6 that features timed questions, multiple difficulty levels, and comprehensive result tracking.

## Features

Multiple difficulty levels (easy, medium, hard)
Timed questions with customizable duration
Real-time score tracking
Detailed performance analytics
Consent management system
Progress tracking and quiz state management

## Prerequisites

Node.js 18.17 or later
npm or yarn package manager
TypeScript 5.0 or later

## Installation

Clone the repository:

bashCopygit clone <repository-url>
cd quiz-app

Install dependencies:

bashCopynpm install

## or

yarn install

Run the development server:

bashCopynpm run dev

## or

yarn dev
The application will be available at http://localhost:3000
Project Structure
Copyquiz-app/
├── components/
├── interfaces/
│ ├── quizInterface.ts
│ └── quizAction.ts
├── reducers/
│ └── QuizReducer.ts
└── ...

## Quiz Logic and State Management

### State Management

The application uses React's Context API with reducers for state management. The main state interface (IQuizData) includes:

Quiz metadata and configuration
Question tracking and scoring
User response history
Time management
Progress tracking

## Quiz Flow

Initialization (INITIATE_QUIZ):

Loads questions
Sets time per question
Initializes quiz state

### Consent Management (GIVE_CONSENT):

Captures user consent
Sets difficulty level
Begins quiz timer

### Question Handling:

ANSWER_SUBMITTED: Processes user answers and updates scores
ANSWER_NOT_SUBMITTED: Handles timeouts and skipped questions
NEXT_QUESTION: Manages question progression

### Scoring System:

Tracks correct/incorrect answers
Calculates time spent per question
Maintains running total score

## Data Structures

Question Format
typescriptCopyinterface IQuestion {
id: string | number;
question: string;
answer: number;
options: IOption[];
selectedOption?: IOption;
timeSpent?: number;
submitted: boolean;
}
Quiz Metadata
typescriptCopyinterface IQuizMetadata {
title: string;
description: string;
difficulty: "easy" | "medium" | "hard";
category: string;
}

## Performance Tracking

The application tracks:

Total time spent
Time per question
Attempted vs. unattempted questions
Correct vs. incorrect answers
User answer history

## State Updates and Transitions

The application implements various state transitions:

Quiz Status Transitions:

not_started → in_progress → completed

Question Transitions:

Loading → Active → Answered/Timeout → Next

## Score Updates:

Real-time score calculation
Performance metrics updates

## Contributing

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments
