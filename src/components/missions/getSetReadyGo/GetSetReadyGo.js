import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { accentColour, fontColour } from "../../global/colours";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginLeft: "0.4rem",
    marginRight: "0.4rem",
  },
  inactive: {
    color: fontColour,
  },
  active: {
    color: accentColour,
  },
}));

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

const StyledText = styled.p`
  font-size: 1.5rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const GetSetReadyGo = (props) => {
  const classes = useStyles();
  return (
    <StyledWrapper>
      <StyledText className={classes.active}>Get Set</StyledText>
      <ArrowForwardIosIcon
        className={
          props.missionState === "ready" || props.missionState === "go"
            ? classes.active
            : classes.inactive
        }
      />
      <StyledText
        className={
          props.missionState === "ready" || props.missionState === "go"
            ? classes.active
            : classes.inactive
        }>
        Ready
      </StyledText>
      <ArrowForwardIosIcon
        className={
          props.missionState === "go" ? classes.active : classes.inactive
        }
      />
      <StyledText
        className={
          props.missionState === "go" ? classes.active : classes.inactive
        }>
        Go
      </StyledText>
    </StyledWrapper>
  );
};

export default GetSetReadyGo;
