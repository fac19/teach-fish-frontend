import React from "react";
import { render, screen } from "@testing-library/react";
import { TextButton } from "./components/global/buttons/Buttons";
import App from "./App";

test("button renders onto the page", () => {
  render(<TextButton text={"hello"} />);
  screen.getByRole("button");
  screen.getByText("hello");
});
