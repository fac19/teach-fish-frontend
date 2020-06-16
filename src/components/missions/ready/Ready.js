import React from "react";
import Subheading from "../../../components/global/subheading/Subheading";
import SectionTitle from "../../../components/global/sectionTitle/SectionTitle";
import Paragraph from "../../../components/global/paragraph/Paragraph";
import { TextButton } from "../../../components/global/buttons/Buttons";
import RadioButtons from "../../../components/global/forms/radioButtons/RadioButtons";

const Ready = (props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState("1");
  const givenAnswers = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <Subheading>
        Mission {props.missionNumber}: <br /> {props.missionName}
      </Subheading>
      <Paragraph>Let's see what you have learnt so far</Paragraph>
      <SectionTitle>Question {currentQuestion}</SectionTitle>
      <form onSubmit={handleSubmit}>
        {currentQuestion === "1" && (
          <RadioButtons
            question={props.question1}
            option1answer={props.Question1Answer1[0]}
            option2answer={props.Question1Answer1[1]}
          />
        )}
        {currentQuestion === "2" && (
          <RadioButtons
            question={props.question2}
            option1answer={props.Question2Answer1[0]}
            option2answer={props.Question2Answer1[1]}
          />
        )}
        <TextButton type={"submit"} text={"Next"} />
      </form>
    </>
  );
  // take questions from object
  // form rendering correct + incorrect answers
  // check all given answers are correct
  // if correct move to next page
  // if incorrect take back to start of mission
};

export default Ready;
