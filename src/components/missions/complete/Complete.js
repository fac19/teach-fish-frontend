import React from "react";
import { Link } from "react-router-dom";
import badge from "./badge.svg";
import circle from "./circle.svg";
import { ImageWrapper, Image, Circle, Text } from "./Complete.style";
import Confetti from "../../global/confetti/Confetti";
import { accentColour, linkColour } from "../../global/colours";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  links: {
    fontFamily: "Josefin Sans, sans-serif",
    transition: "all 0.2s ease-in-out",
    color: linkColour,
    textDecoration: "underline",
    fontSize: "1.2rem",
    "&:hover": {
      fontSize: "1.8rem",
      color: accentColour,
    },
    display: "block",
    textAlign: "center",
  },
});

const Complete = (props) => {
  const classes = useStyles();

  return (
    <>
      <Confetti />
      <Text>MISSION COMPLETE!!</Text>
      <ImageWrapper>
        <Circle src={circle} />
        <Image src={badge} />
      </ImageWrapper>
      <Link to="/my-missions" className={classes.links}>
        NEXT MISSION UNLOCKED
      </Link>
    </>
  );
};

export default Complete;
