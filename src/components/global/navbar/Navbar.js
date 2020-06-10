import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Nav from "./Navbar.style.js";
import { secondaryColour, primaryColour } from "../colours.js";
import netlifyIdentity from "netlify-identity-widget";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "3rem",
    width: "3rem",
    color: "white",
    marginLeft: "1rem",
    marginRight: "1rem",
    padding: "0.5rem",
    "&:hover": {
      color: `${secondaryColour}import netlifyIdentity from "netlify-identity-widget";`,
    },
    "&:visited": {
      color: `${primaryColour}`,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Nav>
      <Link to="/my-missions" aria-label="My missions">
        <HomeIcon className={classes.root} />
      </Link>
      <Link to="/my-profile" id="nav-icon-myProfile" aria-label="My profile">
        <PersonIcon className={classes.root} />
      </Link>
      <Link to="/" aria-label="Logout" onClick={() => netlifyIdentity.open()}>
        <ExitToAppIcon className={classes.root} />
      </Link>
    </Nav>
  );
};

export default Navbar;
