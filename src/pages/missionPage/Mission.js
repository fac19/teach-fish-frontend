import React from "react";
import GetSetReadyGo from "../../components/missions/getSetReadyGo/GetSetReadyGo.js";
import GetSet from "../../components/missions/getSet/GetSet";
import Ready from "../../components/missions/ready/Ready";
import Go from "../../components/missions/go/Go";
import QuizComplete from "../../components/missions/quizComplete/QuizComplete";
import Heading from "../../components/global/heading/Heading";

const MissionForm = () => {
  // state goes here
  // const [activeStep, setActiveStep] = React.useState(0);
  const [currentMissionObject, setCurrentMissionObject] = React.useState({});
  // const [missionState, setMissionState] = React.useState("get");
  const [missionState, setMissionState] = React.useState("ready");

  const [quizAnswersCorrect, setQuizAnswersCorrect] = React.useState("false");

  const missionNumber = window.location.pathname.replace("/mission/", "");

  React.useEffect(() => {
    const func = async () => {
      const post = await fetch(
        `../../../.netlify/functions/fetch-mission/fetch-mission.js?missionNumber=${missionNumber}`,
      );

      await post.json().then((data) => {
        setCurrentMissionObject(data);
        console.log(data);
      });
    };

    func();
  }, [missionNumber]);

  // function for the stepper for Go Page
  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  /* This function should be moved into Go Page
  const token = JSON.parse(localStorage.getItem("token"));

  const email = token ? token.email : "";

  const [form, setForm] = React.useState({
    Email: email,
    Task1: "",
    Task2a: "",
    Task2b: "",
    Task2c: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "../../../.netlify/functions/post-entries/post-entries.js",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      },
    );

    await response.json();
  }; */

  const isLoading = Object.keys(currentMissionObject).length === 0;

  if (isLoading) {
    return <Heading>Loading Mission...</Heading>;
  } else {
    return (
      <>
        {missionState !== "quizComplete" && (
          <GetSetReadyGo missionState={missionState} />
        )}
        {missionState === "get" && (
          <GetSet
            missionNumber={missionNumber}
            missionName={currentMissionObject["Mission Name"]}
            superpower={currentMissionObject.Superpower}
            superpowerIcon={currentMissionObject["Superpower Icon"]}
            getSet={currentMissionObject["Get Set"]}
            video={currentMissionObject.Video}
            setMissionState={setMissionState}
          />
        )}
        {missionState === "ready" && (
          <Ready
            question1={currentMissionObject["Question 1"]}
            question2={currentMissionObject["Question 2"]}
            Question1AnswerChoice={currentMissionObject["Answer 1"]}
            Question1CorrectAnswer={currentMissionObject["Correct Answer 1"]}
            Question2AnswerChoice={currentMissionObject["Answer 2"]}
            Question2CorrectAnswer={currentMissionObject["Correct Answer 2"]}
            setQuizAnswersCorrect={setQuizAnswersCorrect}
            setMissionState={setMissionState}
          />
        )}
        {missionState === "quizComplete" && (
          <QuizComplete quizAnswersCorrect={quizAnswersCorrect} />
        )}
        {missionState === "go" && <Go />}
      </>
    );
  }
};

export default MissionForm;
