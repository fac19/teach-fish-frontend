import React from "react";
import BackIcon from "../../components/global/icons/back/BackIcon";
import Heading from "../../components/global/heading/Heading";
import { TextButton } from "../../components/global/buttons/Buttons";
import { Text, AboutWrapper } from "./About.style";

const About = () => {
  return (
    <>
      <BackIcon to={"/"} />
      <Heading>About the App</Heading>
      <AboutWrapper>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
          pretium condimentum donec elementum eget. Pulvinar pretium{" "}
        </Text>
        <TextButton type={"button"} text={"Sign Up and Joing the Movement!"} />
      </AboutWrapper>
    </>
  );
};

export default About;
