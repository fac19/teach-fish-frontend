import React from "react";
import { render, screen } from "@testing-library/react";
import GetSet from "./GetSet";

test("GetSet renders onto the page", () => {
  const splitStr = jest.fn();
  render(<GetSet splitStr={splitStr} />);
  screen.getByText("Introduction Video");
});
