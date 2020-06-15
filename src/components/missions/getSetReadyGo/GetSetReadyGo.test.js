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

test("GetSet is accent color when missionState is get", () => {
  render(<GetSetReadyGo missionState={"get"} />);
  const getSet = screen.getByText("Get Set");
  expect(getSet.className).toBe("sc-AxirZ gsOjJj makeStyles-active-3");
});
