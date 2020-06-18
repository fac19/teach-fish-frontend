import React from "react";
import { render, screen } from "@testing-library/react";
import QuizComplete from "./QuizComplete";

test("Quiz results render correctly onto the page", () => {
  let quizAnswersCorrect = true;

  render(<QuizComplete quizAnswersCorrect={quizAnswersCorrect} />);
  screen.getByText("You are literally a STAR");
  screen.getByText("Go");

  quizAnswersCorrect = false;
  render(<QuizComplete quizAnswersCorrect={quizAnswersCorrect} />);
  screen.getByText(
    "Unfortunately that isn't correct! Please restart the mission to Get Set",
  );
  screen.getByText("Back to start of mission");
});
