import React from "react";
import { TextButton } from "../../components/global/buttons/Buttons";
import { FormContainer, FormInputWrapper } from "./MissionForm.style";
import TextArea from "../../components/global/forms/textArea/TextArea";
import GetSetReadyGo from "../../components/missions/getSetReadyGo/GetSetReadyGo.js";
import Steppers from "../../components/missions/steps/Steppers";
import GetSet from "../../components/missions/getSet/GetSet";

const MissionForm = () => {
  // state goes here
  const [activeStep, setActiveStep] = React.useState(0);

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

  let missionState = "get";

  return (
    <>
      <GetSetReadyGo missionState={missionState} />
      <GetSet />
    </>
  );
};

export default MissionForm;
