import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Landing from "./Landing";

test("Landing page component is styled", () => {
  const tree = renderer
    .create(
      <Router>
        <Landing />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("height", "80vh");
  expect(tree).toHaveStyleRule("justify-content", "space-between");
});

test("Join the movement button renders correctly", () => {
  render(
    <Router>
      <Landing />
    </Router>,
  );
  screen.getByRole("button");
  screen.getByText("Join the Movement!");
});

test("Learn More About the App link renders correctly", () => {
  render(
    <Router>
      <Landing />
    </Router>,
  );
  screen.getByRole("link");
  screen.getByText("Learn More About the App");
});

test("TAMTF logo renders correctly", () => {
  render(
    <Router>
      <Landing />
    </Router>,
  );
  screen.getByAltText("Teach a Man to Fish logo");
});
