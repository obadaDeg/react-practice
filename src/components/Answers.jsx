import React, { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const suffledAnswers = useRef();

  if (!suffledAnswers.current) {
    suffledAnswers.current = [...answers];
    for (let i = suffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [suffledAnswers[i], suffledAnswers[j]] = [
        suffledAnswers[j],
        suffledAnswers[i],
      ];
    }
  }

  return (
    <ul id="answers">
      {suffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;

        let cssClass = "";

        if (answerState === "undefind" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
