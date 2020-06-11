import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppContextProvider } from "../../utils/AppContext";
import SignUp from "./SignUp";

test("SignUp page renders correctly", () => {
  render(
    <AppContextProvider>
      <SignUp type={"submit"} text={"Get started!"}></SignUp>
    </AppContextProvider>,
  );
  screen.getByText("Get started!");
});

test("SignUp page is styled", () => {
  const tree = renderer
    .create(
      <AppContextProvider>
        <SignUp />
      </AppContextProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
