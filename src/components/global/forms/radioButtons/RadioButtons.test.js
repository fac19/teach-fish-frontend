import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import RadioButtons from "./RadioButtons";

test("RadioButtons component renders correctly", () => {
  render(
    <RadioButtons
      question={"What is a tomato?"}
      option1label={"a fruit"}
      option2label={"a dog"}
      option3label={"a pig"}
      option1answer={"a fruit"}
      option2answer={"a dog"}
      option3answer={"a pig"}></RadioButtons>,
  );
  screen.getByText("What is a tomato?");
});

test("RadioButtons component is styled", () => {
  const tree = renderer.create(<RadioButtons />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
});
