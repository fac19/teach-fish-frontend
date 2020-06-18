import React from "react";
import BackIcon from "../../components/global/icons/back/BackIcon";
import Heading from "../../components/global/heading/Heading";
import { TextButton } from "../../components/global/buttons/Buttons";
import { Text, AboutWrapper } from "./About.style";
import netlifyIdentity from "netlify-identity-widget";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  return (
    <>
      <BackIcon to={"/"} />
      <Heading>About the App</Heading>
      <AboutWrapper>
        <Text>Welcome to Enterprise Adventure.</Text>
        <Text>
          This brand new app will take you on a life-changing journey!
        </Text>
        <Text>
          Take part in exciting missions to score points, level up and collect
          badges.
        </Text>
        <Text>
          Along the way you’ll develop essential skills to succeed in school,
          work and life.
        </Text>
        <Text>Don’t delay – sign up now!</Text>
        <TextButton
          type={"button"}
          text={"Sign Up and Join the Movement!"}
          onClick={() => {
            netlifyIdentity.open();
            history.push(`/signup`);
          }}
        />
      </AboutWrapper>
    </>
  );
};

export default About;
