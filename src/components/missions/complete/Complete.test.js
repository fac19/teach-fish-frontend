import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Complete from "./Complete";

// test("", () => {
//   render(<Complete />);
//   screen.getByText("NEXT MISSION UNLOCKED");
// });

test("", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Complete />
      </BrowserRouter>,
    )
    .toJSON();
  //   expect(tree).toMatchSnapshot();
  expect(tree).toMatchSnapshot();
});
