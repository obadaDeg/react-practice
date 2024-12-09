import React, { useState } from "react";
import Answers from "./Answers";
import QUESTIONS from "../utils/questions";
import QuestionTimer from "./QuestionTimer";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answerState, setAnswerState] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });


  let ansState = '';

  function handleSelectAnswer(answer) {
    setAnswerState({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
        setAnswerState({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer
      })

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  if (answerState.selectedAnswer && answerState.isCorrect !== null) {
    ansState = answerState.isCorrect ? 'correct' : 'wrong';
  } else if (answerState.selectedAnswer) {
    ansState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer timeout={1e4} onTimeOut={onSelectAnswer} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answerState.selectedAnswer}
        answerState={ansState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
