import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import About from "./pages/aboutPage/About";
import Login from "./pages/loginPage/Login";
import SignUp from "./pages/signUpPage/SignUp";
import MyMissions from "./pages/myMissionsPage/MyMissions";
import MyProfile from "./pages/myProfilePage/MyProfile";
import Mission from "./pages/missionPage/Mission";
import { AppContextProvider } from "./utils/AppContext";

test("Renders landing page", () => {
  const { getByText } = render(
    <AppContextProvider>
      <Router>
        <Landing />
      </Router>
    </AppContextProvider>,
  );
  expect(getByText(/Enterprise Adventure/)).toBeTruthy();
});

test("Renders about page", () => {
  const { getByText } = render(
    <AppContextProvider>
      <About />
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

test("Renders login page", () => {
  const { getByText } = render(
    <AppContextProvider>
      <Login />
    </AppContextProvider>,
  );
  expect(getByText(/Login/)).toBeTruthy();
});

// test("Renders my missions page", () => {
//   const { getByText } = render(
//     <AppContextProvider>
//       <MyMissions />
//     </AppContextProvider>,
//   );
//   expect(getByText(/My missions/)).toBeTruthy();
// });

// test("Renders profile page", () => {
//   const { getByText } = render(
//     <AppContextProvider>
//       <MyProfile />
//     </AppContextProvider>,
//   );
//   expect(getByText(/Profile/)).toBeTruthy();
// });

// test("Renders mission page", () => {
//   const { getByText } = render(
//     <AppContextProvider>
//       <Mission />
//     </AppContextProvider>,
//   );
//   expect(getByText(/Mission/)).toBeTruthy();
// });
