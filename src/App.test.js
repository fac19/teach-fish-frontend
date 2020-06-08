import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Landing from "./pages/landingPage/Landing";
import About from "./pages/aboutPage/About";
import Login from "./pages/loginPage/Login";
import SignUp from "./pages/signUpPage/SignUp";
import MyMissions from "./pages/myMissionsPage/MyMissions";
import MyProfile from "./pages/myProfilePage/MyProfile";
import Mission from "./pages/missionPage/Mission";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Renders landing page", () => {
  const { getByText } = render(<Landing />);
  expect(getByText(/Landing/)).toBeTruthy();
});

test("Renders about page", () => {
  const { getByText } = render(<About />);
  expect(getByText(/About/)).toBeTruthy();
});

test("Renders SignUp page", () => {
  const { getByText } = render(<SignUp />);
  expect(getByText(/Sign up/)).toBeTruthy();
});

test("Renders login page", () => {
  const { getByText } = render(<Login />);
  expect(getByText(/Login/)).toBeTruthy();
});

test("Renders my missions page", () => {
  const { getByText } = render(<MyMissions />);
  expect(getByText(/My missions/)).toBeTruthy();
});

test("Renders profile page", () => {
  const { getByText } = render(<MyProfile />);
  expect(getByText(/Profile/)).toBeTruthy();
});

test("Renders mission page", () => {
  const { getByText } = render(<Mission />);
  expect(getByText(/Mission/)).toBeTruthy();
});
