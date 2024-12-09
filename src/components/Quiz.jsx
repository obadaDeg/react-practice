import React, { useCallback, useReducer, useState } from "react";
import QUESTIONS from "../utils/questions";
import QuizCompleted from "./QuizCompleted";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  //   const [] = useReducer()
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answerState, setAnswreState] = useState("");
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

  const suffledAnswers = [...QUESTIONS[currentQuestionIndex].answers];
  for (let i = suffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [suffledAnswers[i], suffledAnswers[j]] = [
      suffledAnswers[j],
      suffledAnswers[i],
    ];
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={currentQuestionIndex}
          timeout={1e4}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
        <ul id="answers">
          {suffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
