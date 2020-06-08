import React from "react";
import {
  TextButton,
  SignUpButton,
  LogInButton,
} from "./components/global/buttons/Buttons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import About from "./pages/aboutPage/About";
import Login from "./pages/loginPage/Login";
import SignUp from "./pages/signUpPage/SignUp";
import MyMissions from "./pages/myMissionsPage/MyMissions";
import MyProfile from "./pages/myProfilePage/MyProfile";
import Mission from "./pages/missionPage/Mission";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <SignUpButton text={"Get Started!"} />
        <LogInButton text={"Log In"} />
        <TextButton />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Landing />} />
          <Route path="/about" component={() => <About />} />
          <Route path="/signup" component={() => <SignUp />} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/my-missions" component={() => <MyMissions />} />
          <Route path="/my-profile" component={() => <MyProfile />} />
          <Route path="/mission/:number" component={() => <Mission />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
