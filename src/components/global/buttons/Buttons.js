import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { primaryColour, fontColour, accentColour } from "../colours";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "4rem",
    minWidth: "10rem",
    fontFamily: "Josefin Sans, sans-serif",
    backgroundColor: primaryColour,
    marginTop: "1rem",
    marginBottom: "1rem",
    fontWeight: "bold",
    color: fontColour,
    "&:hover": {
      background: accentColour,
    },
  },
}));

const TextButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      type={props.type}
      className={classes.root}
      variant="contained"
      onClick={props.onClick}>
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
