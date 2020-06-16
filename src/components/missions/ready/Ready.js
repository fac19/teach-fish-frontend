import React from "react";
import Subheading from "../../../components/global/subheading/Subheading";
import SectionTitle from "../../../components/global/sectionTitle/SectionTitle";
import Paragraph from "../../../components/global/paragraph/Paragraph";

const Ready = (props) => {
  return (
    <>
      <Subheading>
        Mission {props.missionNumber}: <br /> {props.missionName}
      </Subheading>
      <Paragraph>Let's see what you've learnt so far</Paragraph>
    </>
  );
  // take questions from object
  // form rendering correct + incorrect answers
  // check all given answers are correct
  // if correct move to next page
  // if incorrect take back to start of mission
};

export default Ready;
