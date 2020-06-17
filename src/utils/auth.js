import React from "react";
import Landing from "../pages/landingPage/Landing";

export default function requireAuthentication(Component, user) {
  function AuthHOC(props) {
    return user ? <Component user={user} {...props} /> : <Landing />;
  }
  return AuthHOC;
}
