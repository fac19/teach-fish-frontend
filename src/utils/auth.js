import React from "react";
import Landing from "../pages/landingPage/Landing";

import Link from "@material-ui/core/Link";

export default function requireAuthentication(
  Component,
  user,
  isLoggedIn,
  handleLogIn,
) {
  function AuthHOC(props) {
    const preventDefault = (event) => event.preventDefault();
    return user ? <Component user={user} {...props} /> : <Landing />;
  }
  return AuthHOC;
}
