import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/global/heading/Heading";
import { useHistory } from "react-router-dom";
import { TextButton } from "../../components/global/buttons/Buttons";
import netlifyIdentity from "netlify-identity-widget";
import { makeStyles } from "@material-ui/core/styles";
import { LandingContainer, LandingWrapper, StyledImg } from "./Landing.style";
import ImgWrapper from "../../components/global/images/ImgWrapper";
import logo from "./logo.png";
import rocket from "./rocket.svg";
import { accentColour, linkColour } from "../../components/global/colours";

const useStyles = makeStyles({
  links: {
    fontFamily: "Josefin Sans, sans-serif",
    transition: "all 0.2s ease-in-out",
    color: linkColour,
    textDecoration: "underline",
    fontSize: "1.5rem",
    "&:hover": {
      fontSize: "1.8rem",
      color: accentColour,
    },
  },
});

const Landing = () => {
  const classes = useStyles();

  const history = useHistory();
  return (
    <LandingContainer>
      <Heading>Enterprise Adventure</Heading>
      <LandingWrapper>
        <StyledImg src={rocket} alt="rocket" />
        <Link to="/about" className={classes.links}>
          Learn More About the App
        </Link>
        <TextButton
          text={"Join the Movement!"}
          onClick={() => {
            netlifyIdentity.open();
            history.push(`/signup`);
          }}
        />
      </LandingWrapper>
      <ImgWrapper>
        <img src={logo} alt={"Teach a Man to Fish logo"} />
      </ImgWrapper>
    </LandingContainer>
  );
};

export default Landing;
