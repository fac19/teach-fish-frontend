import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import About from "./About";

test("Landing page component is styled", () => {
  const tree = renderer
    .create(<About type={"button"} text={"Sign Up and Joing the Movement!"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Sign up button renders correctly", () => {
  render(<About type={"button"} text={"Sign Up and Joing the Movement!"} />);
  screen.getByRole("heading");
  screen.getByText("About the App");
});
