import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("Navbar component is styled", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("position", "fixed");
});
