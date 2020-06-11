import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Heading from "./Heading";

test("Heading component is styled", () => {
  const tree = renderer.create(<Heading />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("color", "#032049");
  expect(tree).toHaveStyleRule("font-size", "2rem");
  expect(tree).toHaveStyleRule("font-size", "4rem", {
    media: "(min-width:600px)",
  });
});
