import React from "react";

// import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > * + *": {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

export default function requireAuthentication(
  Component,
  user,
  isLoggedIn,
  handleLogIn,
) {
  function AuthHOC(props) {
    // isLoggedIn????? HOW DO WE SET?

    // console.log("auth.js - component", Component);
    // console.log("auth.js - user", user);
    // console.log("auth.js - isLoggedIn", isLoggedIn);
    // const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return user ? (
      <Component user={user} {...props} />
    ) : (
      <Link href="/login" onClick={preventDefault}>
        Link
      </Link>
    );
  }
  return AuthHOC;
}
