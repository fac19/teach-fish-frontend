import React from "react";
import GetSetReadyGo from "../../components/missions/getSetReadyGo/GetSetReadyGo.js";
import GetSet from "../../components/missions/getSet/GetSet";

const MissionForm = () => {
  // state goes here
  const [activeStep, setActiveStep] = React.useState(0);
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
        // console.log(data)
      });
    };

    func();
  }, [missionNumber]);

  const token = JSON.parse(localStorage.getItem("token"));

  const email = token ? token.email : "";

  const [form, setForm] = React.useState({
    Email: email,
    Task2a: "",
    Task2b: "",
    Task2c: "",
  });

  // function for the stepper
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

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
  };

  return (
    <>
      <GetSetReadyGo missionState={missionState} />
      {missionState === "get" && (
        <GetSet
          missionNumber={missionNumber}
          missionName={currentMissionObject["Mission Name"]}
          superpower={currentMissionObject.Superpower}
          getSet={currentMissionObject["Get Set"]}
          video={currentMissionObject.Video}
          setMissionState={setMissionState}
        />
      )}
    </>
  );
};

export default MissionForm;
