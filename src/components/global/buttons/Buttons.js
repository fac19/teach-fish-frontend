import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { primaryColour } from "../colours";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "4rem",
    minWidth: "10rem",
    fontFamily: "Josefin Sans, sans-serif",
    backgroundColor: primaryColour,
  },
}));

const TextButton = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained">
      {props.text}
    </Button>
  );
};

const SignUpButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.root}
      startIcon={<PersonAddIcon />}>
      {props.text}
    </Button>
  );
};

const LogInButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.root}
      startIcon={<AccountCircleIcon />}>
      {props.text}
    </Button>
  );
};

export { TextButton, SignUpButton, LogInButton };
