import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import TextArea from "./TextArea";

test("TextArea component renders correctly", () => {
  render(<TextArea label={"Task Two"} />);
  screen.getByText("Task Two");
});

test("TextArea component is styled", () => {
  const tree = renderer.create(<TextArea />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
});
