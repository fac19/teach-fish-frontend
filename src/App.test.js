import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import About from "./pages/aboutPage/About";
import SignUp from "./pages/signUpPage/SignUp";
import MyMissions from "./pages/myMissionsPage/MyMissions";
import { AppContextProvider } from "./utils/AppContext";

test("Renders landing page", () => {
  const { getByText } = render(
    <Router>
      <Landing />
    </Router>,
  );
  expect(getByText(/Enterprise Adventure/)).toBeTruthy();
});

test("Renders about page", () => {
  const { getByText } = render(
    <AppContextProvider>
      <Router>
        <About />
      </Router>
    </AppContextProvider>,
  );
  expect(getByText(/About/)).toBeTruthy();
});

test("Renders SignUp page", () => {
  const { getByText } = render(
    <AppContextProvider>
      <SignUp />
    </AppContextProvider>,
  );
  expect(getByText(/Before you begin/)).toBeTruthy();
});

test("Renders my missions page", () => {
  const { getByText } = render(
    <AppContextProvider>
      <Router>
        <MyMissions />
      </Router>
    </AppContextProvider>,
  );
  expect(getByText(/My Missions/)).toBeTruthy();
});
