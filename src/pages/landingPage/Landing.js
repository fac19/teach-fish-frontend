import React from "react";
import Links from "../../components/global/links/Links";
import Heading from "../../components/global/heading/Heading";
import { useHistory } from "react-router-dom";
import { TextButton } from "../../components/global/buttons/Buttons";
import netlifyIdentity from "netlify-identity-widget";
import { LandingContainer, LandingWrapper } from "./Landing.style";
import ImgWrapper from "../../components/global/images/ImgWrapper";
import logo from "./logo.png";

const Landing = () => {
  const history = useHistory();
  return (
    <LandingContainer>
      <Heading>Enterprise Adventure</Heading>
      <LandingWrapper>
        <Links href="/about">Learn More About the App</Links>
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
