import React from "react";
import { render, screen } from "@testing-library/react";
import { SignUpButton, LogInButton, TextButton } from "./Buttons";

test("TextButton renders onto the page", () => {
  render(<TextButton text={"hello"} />);
  screen.getByRole("button");
  screen.getByText("hello");
});

test("SignUpButton renders onto the page", () => {
  render(<SignUpButton text={"Get Started!"} />);
  screen.getByRole("button");
  screen.getByText("Get Started!");
});

test("LogInButton renders onto the page", () => {
  render(<LogInButton text={"Log In"} />);
  screen.getByRole("button");
  screen.getByText("Log In");
});
