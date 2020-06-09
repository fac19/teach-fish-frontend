import React from "react";
import { render, screen } from "@testing-library/react";
import { DropdownCountries, DropdownGender } from "./Dropdown";

test("DropdownCountries component renders correctly", () => {
  render(<DropdownCountries />);
  screen.getByDisplayValue("Select option");
});

test("DropdownGender component renders correctly", () => {
  render(<DropdownGender />);
  screen.getByDisplayValue("Select option");
});
