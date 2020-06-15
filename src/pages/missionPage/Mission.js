import React from "react";
import GetSetReadyGo from "../../components/missions/getSetReadyGo/GetSetReadyGo.js";
import GetSet from "../../components/missions/getSet/GetSet";
import Heading from "../../components/global/heading/Heading";

const MissionForm = () => {
  // state goes here
  // const [activeStep, setActiveStep] = React.useState(0);
  const [currentMissionObject, setCurrentMissionObject] = React.useState({});
  const [missionState, setMissionState] = React.useState("get");

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
        <GetSetReadyGo missionState={missionState} />
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
      </>
    );
  }
};

export default MissionForm;
