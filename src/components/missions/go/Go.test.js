import React from "react";
import { render, screen } from "@testing-library/react";
import Go from "./Go";

test("GetSet renders onto the page", () => {
  const splitStr = () => {};
  render(<Go splitStr={splitStr} />);
  screen.getAllByText("Task 1");
});
