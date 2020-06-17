import React from "react";
import GetSetReadyGo from "../../components/missions/getSetReadyGo/GetSetReadyGo.js";
import GetSet from "../../components/missions/getSet/GetSet";
import Ready from "../../components/missions/ready/Ready";
import QuizComplete from "../../components/missions/quizComplete/QuizComplete";
import Go from "../../components/missions/go/Go";
import Complete from "../../components/missions/complete/Complete";
import Heading from "../../components/global/heading/Heading";
import Navbar from "../../components/global/navbar/Navbar";

const MissionPage = () => {
  // state goes here
  const [currentMissionObject, setCurrentMissionObject] = React.useState({});
  const [quizAnswersCorrect, setQuizAnswersCorrect] = React.useState("false");
  const [missionState, setMissionState] = React.useState("get");

  const missionNumber = window.location.pathname.replace("/mission/", "");

  React.useEffect(() => {
    const func = async () => {
      const post = await fetch(
        `../../../.netlify/functions/fetch-mission/fetch-mission.js?missionNumber=${missionNumber}`,
      );

      await post.json().then((data) => {
        setCurrentMissionObject(data);
      });
    };

    func();
  }, [missionNumber]);

  const isLoading = Object.keys(currentMissionObject).length === 0;

  if (isLoading) {
    return <Heading>Loading Mission...</Heading>;
  } else {
    return (
      <>
        <Navbar />

        {missionState !== "quizComplete" && missionState !== "complete" && (
          <GetSetReadyGo missionState={missionState} />
        )}
        {missionState === "get" && (
          <GetSet
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
            missionNumber={missionNumber}
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
          <QuizComplete
            setMissionState={setMissionState}
            quizAnswersCorrect={quizAnswersCorrect}
          />
        )}
        {missionState === "go" && (
          <Go
            missionNumber={missionNumber}
            task1={currentMissionObject["Task 1 Instructions"]}
            task2={currentMissionObject["Task 2 Instructions"]}
            task2a={currentMissionObject["Task 2a Question"]}
            task2b={currentMissionObject["Task 2b Question"]}
            task2c={currentMissionObject["Task 2c Question"]}
            setMissionState={setMissionState}
          />
        )}
        {missionState === "complete" && <Complete />}
      </>
    );
  }
};

export default MissionPage;
