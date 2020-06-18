import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import MyMissionPage from "./MyMissions";

test("My missions page component is styled", () => {
  const tree = renderer
    .create(
      <Router>
        <MyMissionPage />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
});

test("Mission One button renders correctly", () => {
  render(
    <Router>
      <MyMissionPage />
    </Router>,
  );
  screen.getByText("Mission One");
});
