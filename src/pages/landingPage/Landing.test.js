import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Landing from "./Landing";

test("Landing page component is styled", () => {
  const tree = renderer.create(<Landing />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("height", "80vh");
  expect(tree).toHaveStyleRule("justify-content", "space-between");
});

test("Join the movement button renders correctly", () => {
  render(<Landing />);
  screen.getByRole("button");
  screen.getByText("Join the Movement!");
});

test("Learn More About the App link renders correctly", () => {
  render(<Landing />);

  screen.getByRole("link");
  screen.getByText("Learn More About the App");
});
