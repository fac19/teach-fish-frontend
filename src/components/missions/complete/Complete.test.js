import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Complete from "./Complete";

test("Mission complete page rendering correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Complete />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
