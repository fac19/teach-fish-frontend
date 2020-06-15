import React from "react";
import { render, screen } from "@testing-library/react";
import GetSet from "./GetSet";

test("GetSet renders onto the page", () => {
  render(<GetSet />);
  screen.getByText("Introduction Video");
});
