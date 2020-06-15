import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Paragraph from "./Paragraph";

test("Paragraph component is styled", () => {
  const tree = renderer.create(<Paragraph />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("text-align", "center");
});
