import React, { useReducer, useState } from "react";
import QUESTIONS from "../utils/questions";

export default function Quiz() {
  //   const [] = useReducer()
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const currentQuestion = answeredQuestions.length;

  function handleSelectAnswer(selectedAnswer) {
    setAnsweredQuestions((prevAns) => {
      return [...prevAns, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[currentQuestion].text}</h2>
        <ul id="answers">
          {QUESTIONS[currentQuestion].answers.map((answer) => (
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
