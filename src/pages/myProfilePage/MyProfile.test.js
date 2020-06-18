import React from "react";
import { render, screen, BrowserRouter } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import MyProfile from "./MyProfile";
import { BrowserRouter as Router } from "react-router-dom";

test("Landing page component is styled", () => {
  const tree = renderer
    .create(
      <Router>
        <MyProfile />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Profile text renders correctly", () => {
  render(
    <Router>
      <MyProfile />
    </Router>,
  );
  screen.getByText("My Profile");
  screen.getByText("Coming soon...");
});
