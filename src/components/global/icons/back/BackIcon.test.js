import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import BackIcon from "./BackIcon";

test("BackIcon component is styled", () => {
  const tree = renderer.create(<BackIcon />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("height", "2.5rem");
});
