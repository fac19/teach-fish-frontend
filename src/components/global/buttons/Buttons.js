import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const TextButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">{props.text}</Button>
    </div>
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
