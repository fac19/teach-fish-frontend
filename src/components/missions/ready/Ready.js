import React from "react";
import Subheading from "../../../components/global/subheading/Subheading";
import SectionTitle from "../../../components/global/sectionTitle/SectionTitle";
import Paragraph from "../../../components/global/paragraph/Paragraph";
import { TextButton } from "../../../components/global/buttons/Buttons";
import RadioButtons from "../../../components/global/forms/radioButtons/RadioButtons";
import { ReadyWrapper } from "./Ready.style";
import Links from "../../../components/global/links/Links";

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
      } else {
        props.setQuizAnswersCorrect(false);
      }
      props.setMissionState("quizComplete");
    }
  }, [props, currentQuestion, givenAnswers]);

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
      <ReadyWrapper>
        <Subheading>
          Mission {props.missionNumber}: <br /> {props.missionName}
        </Subheading>
        <Paragraph>Let's make sure you have understood the mission</Paragraph>
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
      </ReadyWrapper>
      <Links onClick={() => props.setMissionState("get")}>
        Restart mission
      </Links>
    </>
  );
};

export default Ready;
