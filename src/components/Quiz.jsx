import React, { useCallback, useReducer, useRef, useState } from "react";
import QuizCompleted from "./QuizCompleted";
import QUESTIONS from '../utils/questions.js'
import QuestionTimer from "./QuestionTimer";
import Question from "./Question";

export default function Quiz() {
  //   const [] = useReducer()
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const currentQuestionIndex = answeredQuestions.length;
  const quizIsOver = QUESTIONS.length === currentQuestionIndex;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setAnsweredQuestions((prevAns) => {
      return [...prevAns, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsOver) {
    return <QuizCompleted />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSelectAnswer}
      />
    </div>
  );
}
