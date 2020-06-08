import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landingPage/Landing";
// import About from "./pages/landingPage/";
// import SignUp from "./pages/signUpPage/";
// import Login from "./pages/loginPage/";
// import MyMissions from "./pages/myMissionsPage/";
// import MyProfile from "./pages/myProfilePage/";
// import Mission from "./components/missions/getSetReadyGo";
// import Evidence from "./components/missions/getSetReadyGo";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Landing />} />
        {/* <Route path="/about" component={() => <About />} />
        <Route path="/signup" component={() => <SignUp />} />
        <Route path="/login" component={() => <Login />} />
        <Route path="/my-missions" component={() => <MyMissions />} />
        <Route path="/my-profile" component={() => <MyProfile />} />
        <Route path="/mission/:number" component={() => <Mission />} />
        <Route path="/evidence/:number" component={() => <Evidence />} /> */}
      </Switch>
    </Router>
  );
};

export default App;
