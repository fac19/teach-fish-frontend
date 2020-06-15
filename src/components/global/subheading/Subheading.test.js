import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Subheading from "./Subheading";

test("Heading component is styled", () => {
  const tree = renderer.create(<Subheading />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("color", "#032049");
  expect(tree).toHaveStyleRule("font-size", "1.5rem");
  expect(tree).toHaveStyleRule("font-size", "2.2rem", {
    media: "(min-width:600px)",
  });
});
