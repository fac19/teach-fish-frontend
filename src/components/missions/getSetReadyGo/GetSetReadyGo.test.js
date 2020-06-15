import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import GetSetReadyGo from "./GetSetReadyGo";

test("GetSetReadyGo component is styled", () => {
  const tree = renderer.create(<GetSetReadyGo />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
});

test("GetSet is rendered", () => {
  render(<GetSetReadyGo missionState={"get"} />);
  screen.getByText("Get Set");
});
