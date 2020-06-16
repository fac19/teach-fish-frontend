import React from "react";
import { render, screen } from "@testing-library/react";
import Steps from "./Steps";

test("Steps component renders on page", () => {
  const activeStep = 0;
  render(<Steps activeStep={activeStep} />);
  screen.getByText("Task 1");
  screen.getByText("Task 2");
  screen.getByText("Submit");
});
