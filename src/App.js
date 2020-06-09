import React from "react";
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
    <div className="App">
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
    </div>
  );
};

// const netlifyAuth = {
//   isAuthenticated: false,
//   user: null,
//   authenticate(callback) {
//     this.isAuthenticated = true;
//     netlifyIdentity.open();
//     netlifyIdentity.on("login", (user) => {
//       this.user = user;
//       callback(user);
//     });
//   },
//   signout(callback) {
//     this.isAuthenticated = false;
//     netlifyIdentity.logout();
//     netlifyIdentity.on("logout", () => {
//       this.user = null;
//       callback();
//     });
//   },
// };

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         netlifyAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

export default App;
