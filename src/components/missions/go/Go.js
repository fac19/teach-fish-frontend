import React from "react";
import { TextButton } from "../../global/buttons/Buttons";
import { FormContainer, FormInputWrapper } from "./Go.style";
import TextArea from "../../global/forms/textArea/TextArea";
import Steps from "../steps/Steps";
import UploadImage from "../uploadImage/UploadImage";
import Paragraph from "../../../components/global/paragraph/Paragraph";
import Subheading from "../../../components/global/subheading/Subheading";

const Go = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [file, setUploadedFile] = React.useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const email = token ? token.email : "";

  const [form, setForm] = React.useState({
    Email: email,
    Task1: "", // change to file from state
    Task2a: "",
    Task2b: "",
    Task2c: "",
  });

  const [buttonState, setButtonState] = React.useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    if (activeStep === 1) {
      if (form.Task2a !== "" || form.Task2b !== "" || form.Task2c !== "") {
        setButtonState(false);
      }
    }
  };

  const handleUpload = (event) => {
    UploadImage();
    // setUploadedFile state with cloudinary url
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

  // function for the stepper for Go Page

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      if (form.Task2a === "" || form.Task2b === "" || form.Task2c === "") {
        console.log("nah");
        // buttonState = "disabled"
        // buttonState=true;
      } else {
        console.log("yeh");
        // buttonState =  "enabled";
        // buttonState=false;
      }
    }
  };

  return (
    <>
      <Steps activeStep={activeStep} handleNext={handleNext} />
      <FormContainer onSubmit={handleSubmit}>
        {activeStep === 0 && (
          <>
            <Subheading>Task 1</Subheading>
            <Paragraph>{props.task1}</Paragraph>
            <input
              type="button"
              value="Upload your image"
              name={"Task1"}
              onClick={handleUpload}
            />
            <TextButton text={"Go To Next Task"} onClick={handleNext} />
          </>
        )}
        {activeStep === 1 && (
          <>
            <Subheading>Task 2</Subheading>
            <Paragraph>{props.task2}</Paragraph>
            <FormInputWrapper>
              <TextArea
                name={"Task2a"}
                label={props.task2a}
                onChange={handleChange}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <TextArea
                name={"Task2b"}
                label={props.task2b}
                onChange={handleChange}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <TextArea
                name={"Task2c"}
                label={props.task2c}
                onChange={handleChange}
              />
            </FormInputWrapper>
            <TextButton
              disabled={buttonState}
              text={"Go to mission review"}
              onClick={handleNext}
            />
          </>
        )}
        {activeStep === 2 && <TextButton type={"submit"} text={"Submit"} />}
      </FormContainer>
    </>
  );
};

export default Go;
