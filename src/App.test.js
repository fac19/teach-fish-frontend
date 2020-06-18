import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import About from "./pages/aboutPage/About";
import SignUp from "./pages/signUpPage/SignUp";
import MyMissions from "./pages/myMissionsPage/MyMissions";
// import MyProfile from "./pages/myProfilePage/MyProfile";
// import Mission from "./pages/missionPage/Mission";
import { AppContextProvider } from "./utils/AppContext";
// import {dispatch, action } from "jest-localstorage-mock";

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

// test("Renders profile page", () => {
//   const { getByText } = render(
//     <AppContextProvider>
//       <Router>
//       <MyProfile />
//       </Router>
//     </AppContextProvider>,
//   );
//   expect(getByText(/My Profile/)).toBeTruthy();
// });

// token :{"provider":"email","created_at":"2020-06-11T15:12:49Z","confirmed_at":"2020-06-11T15:12:49Z","email":"tom@tom.tom","id":"9c37cdd1-6ed4-4430-a7b8-8a213975f197","full_name":"tom"}

// test("Renders mission page", () => {

//   const { getByText } = render(
//     <AppContextProvider>
//       <Mission />
//     </AppContextProvider>,
//   );
//   expect(getByText(/Mission/)).toBeTruthy();
// });

// beforeEach(() => {
//   // values stored in tests will also be available in other tests unless you run
//   localStorage.clear();
//   // or individually reset a mock used
//   localStorage.setItem.mockClear();
// });

// test.only('should not impact the next test', () => {
//   const KEY = 'token',
//     VALUE = {"email":"tom@tom.tom"};
//   dispatch(action.update(KEY, VALUE));
//   expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
//   expect(localStorage.__STORE__[KEY]).toBe(VALUE);
//   expect(Object.keys(localStorage.__STORE__).length).toBe(1);
// });
