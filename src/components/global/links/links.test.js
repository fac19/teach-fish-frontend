import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Link from "./Links";

test("Link component is styled", () => {
  const tree = renderer.create(<Link />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("color", "#026CB6");
});
