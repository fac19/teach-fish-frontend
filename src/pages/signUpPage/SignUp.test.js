import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import SignUp from "./SignUp";

test("SignUp page renders correctly", () => {
  render(<SignUp type={"submit"} text={"Get started!"}></SignUp>);
  screen.getByText("Get started!");
});

test("SignUp page is styled", () => {
  const tree = renderer.create(<SignUp />).toJSON();
  expect(tree).toMatchSnapshot();
});
