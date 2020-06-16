import React from "react";
import { render, screen } from "@testing-library/react";
import QuizComplete from "./QuizComplete";

test("Quiz correct renders onto the page", () => {
  const quizAnswersCorrect = true;

  render(<QuizComplete quizAnswersCorrect={quizAnswersCorrect} />);
  screen.getByText("You are literally a STAR");
  screen.getByText("Go");
  //   screen.getByText("Correct Answer 1");
});
