import React from "react";
import { render, screen } from "@testing-library/react";
import Go from "./Go";

test("Go renders onto the page", () => {
  render(<Go />);
  screen.getByText("Mission Progress");
});
