import React from "react";
import {
  // Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Navbar from "./components/global/navbar/Navbar";
import Landing from "./pages/landingPage/Landing";
import About from "./pages/aboutPage/About";
import Login from "./pages/loginPage/Login";
import SignUp from "./pages/signUpPage/SignUp";
import MyMissions from "./pages/myMissionsPage/MyMissions";
import MyProfile from "./pages/myProfilePage/MyProfile";
import Mission from "./pages/missionPage/Mission";
import AppContainer from "./App.style";
import netlifyIdentity from "netlify-identity-widget";
import auth from "../src/utils/auth";
import { loginUser, logoutUser } from "../src/utils/identityActions";
import "./App.css";
import { AppContextProvider } from "./utils/AppContext";

const App = () => {
  const [userInfo, setUserInfo] = React.useState({});
  React.useEffect(() => {
    const user = netlifyIdentity.currentUser();
    if (user) {
      setUserInfo({ user: user });
    } else {
      loginUser();
    }
    netlifyIdentity.on("login", (user) => setUserInfo({ user }, loginUser()));
    netlifyIdentity.on("logout", (user) =>
      setUserInfo({ user: null }, logoutUser()),
    );
  }, []);
  return (
    <AppContextProvider>
      <AppContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Landing />} />
            <Route path="/about" component={() => <About />} />
            <Route path="/signup" component={() => <SignUp />} />
            <Route path="/login" component={() => <Login />} />
            <Route path="/logout" />
            <Route path="/my-profile" component={auth(MyProfile, userInfo)} />
            <Route
              path="/my-profile"
              component={auth(MyProfile, netlifyIdentity.currentUser())}
            />
            {/* <Route
              path="/my-missions"
              component={auth(MyMissions, netlifyIdentity.currentUser())}
            /> */}
            <Route path="/my-missions" component={() => <MyMissions />} />
            <Route path="/mission/:number" component={() => <Mission />} />
          </Switch>
        </Router>
      </AppContainer>
    </AppContextProvider>
  );
};
export default App;
