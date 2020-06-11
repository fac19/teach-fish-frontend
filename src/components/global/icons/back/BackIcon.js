import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import styled from "styled-components";
import { linkColour } from "../../colours";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    color: "white",
  },
}));

const BackButton = styled.button`
  border-radius: 100%;
  border: none;
  background-color: ${linkColour};
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const BackIcon = (props) => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <BackButton
      aria-label="Go back to previous page"
      onClick={() => history.push(props.to)}>
      <ArrowBackIcon className={classes.root} />
    </BackButton>
  );
};

export default BackIcon;
