import React from "react";
import { render, screen } from "@testing-library/react";
import Stepper from "./Steppers";

test("Stepper renders on page", () => {
  const activeStep = 0;
  render(
    <Stepper
      activeStep={activeStep}
      //   setActiveStep={setActiveStep}
      // handleNext={handleNext}
    />,
  );
  screen.getByText("Task 1");
  screen.getByText("Task 2");
  screen.getByText("Submit");
});
