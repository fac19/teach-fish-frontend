import React from "react";
import { render, screen } from "@testing-library/react";
import DateInput from "./DateInput";

test("Date input component renders correctly", () => {
  render(<DateInput />);
  screen.getByText("Date of birth");
});
