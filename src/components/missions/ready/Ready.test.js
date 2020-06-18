import React from "react";
import { render, screen } from "@testing-library/react";
import Ready from "./Ready";

test("Ready renders onto the page", () => {
  const question1 = "question 1";
  const question2 = "question 2";
  const Question1AnswerChoice = ["Correct Answer 1", "Incorrect Answer 1"];
  const Question1CorrectAnswer = "Correct Answer 1";
  const Question2AnswerChoice = ["Correct Answer 2", "Incorrect Answer 2"];
  const Question2CorrectAnswer = "Correct Answer 2";
  render(
    <Ready
      question1={question1}
      question2={question2}
      Question1AnswerChoice={Question1AnswerChoice}
      Question1CorrectAnswer={Question1CorrectAnswer}
      Question2AnswerChoice={Question2AnswerChoice}
      Question2CorrectAnswer={Question2CorrectAnswer}
    />,
  );
  screen.getByText("Let's make sure you have understood the mission");
  screen.getByText("question 1");
  screen.getByText("Correct Answer 1");
});
