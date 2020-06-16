import React from "react";
import Subheading from "../../../components/global/subheading/Subheading";
import SectionTitle from "../../../components/global/sectionTitle/SectionTitle";
import Paragraph from "../../../components/global/paragraph/Paragraph";
import { TextButton } from "../../../components/global/buttons/Buttons";
import RadioButtons from "../../../components/global/forms/radioButtons/RadioButtons";

const Ready = (props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState("1");
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [givenAnswers, setGivenAnswers] = React.useState([]);

  React.useEffect(() => {
    if (currentQuestion === "2" && givenAnswers.length === 2) {
      let correctAnswer1 = props.Question1CorrectAnswer;
      let correctAnswer2 = props.Question2CorrectAnswer;
      if (
        givenAnswers[0] === correctAnswer1 &&
        givenAnswers[1] === correctAnswer2
      ) {
        props.setQuizAnswersCorrect(true);
        console.log("Right");
      } else {
        props.setQuizAnswersCorrect(false);
        console.log("Wrong :(");
      }
      props.setMissionState("quizComplete");
    }
  }, [givenAnswers]);

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    let copyOfGivenAnswers = [...givenAnswers];
    copyOfGivenAnswers.push(selectedAnswer);

    setGivenAnswers(copyOfGivenAnswers);

    if (currentQuestion === "1") {
      setCurrentQuestion("2");
    }
  };

  return (
    <>
      <Subheading>
        Mission {props.missionNumber}: <br /> {props.missionName}
      </Subheading>
      <Paragraph>Let's see what you have learnt so far</Paragraph>
      <SectionTitle>Question {currentQuestion}</SectionTitle>
      {currentQuestion === "1" && (
        <RadioButtons
          onChange={handleChange}
          question={props.question1}
          option1answer={props.Question1AnswerChoice[0]}
          option2answer={props.Question1AnswerChoice[1]}
        />
      )}
      {currentQuestion === "2" && (
        <RadioButtons
          onChange={handleChange}
          question={props.question2}
          option1answer={props.Question2AnswerChoice[0]}
          option2answer={props.Question2AnswerChoice[1]}
        />
      )}
      <TextButton onClick={handleSubmit} text={"Next"} />
    </>
  );
  // take questions from object
  // form rendering correct + incorrect answers
  // check all given answers are correct
  // if correct move to next page
  // if incorrect take back to start of mission
};

export default Ready;
