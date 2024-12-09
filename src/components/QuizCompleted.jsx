import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function QuizCompleted() {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Completed" />
      <h2>Quiz Completed</h2>
    </div>
  );
}
