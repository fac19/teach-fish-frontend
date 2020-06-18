import React from "react";
import { TextButton, ImageUploadButton } from "../../global/buttons/Buttons";
import Links from "../../global/links/Links";
import {
  FormContainer,
  FormInputWrapper,
  ImageUploadNotification,
  StyledIcon,
  UploadedImageDisplay,
  SubmitStep,
} from "./Go.style";
import TextArea from "../../global/forms/textArea/TextArea";
import Steps from "../steps/Steps";
import Paragraph from "../../../components/global/paragraph/Paragraph";
import Subheading from "../../../components/global/subheading/Subheading";
import tick from "../../../img/tick.svg";
import crissCross from "../../../img/criss-cross.svg";

const Go = (props) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const email = token ? token.email : "";

  const [activeStep, setActiveStep] = React.useState(0);
  const [file, setUploadedFile] = React.useState("");
  const [form, setForm] = React.useState({
    Email: email,
    Task1: file,
    Task2a: "",
    Task2b: "",
    Task2c: "",
  });

  const startOver = () => {
    props.setMissionState("get");
    setUploadedFile("");
    setForm({
      Email: email,
      Task1: file,
      Task2a: "",
      Task2b: "",
      Task2c: "",
    });
  };

  const uploadImage = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "teach-a-man-to-fish",
        uploadPreset: "TAMTF2020",
        sources: ["local", "google_drive", "facebook"],
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#F5F5F5",
            sourceBg: "#FFFFFF",
            windowBorder: "#90a0b3",
            tabIcon: "#0094c7",
            inactiveTabIcon: "#69778A",
            menuIcons: "#0094C7",
            link: "#53ad9d",
            action: "#8F5DA5",
            inProgress: "#0194c7",
            complete: "#53ad9d",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
        },
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          const url = result.info.url;
          setForm({ ...form, Task1: url });
          setUploadedFile(url);
        }
      },
    );
  };
  const [buttonState, setButtonState] = React.useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    if (activeStep === 1) {
      if (form.Task2a !== "" && form.Task2b !== "" && form.Task2c !== "") {
        setButtonState(false);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.setMissionState("complete");

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
  };

  return (
    <>
      <Steps activeStep={activeStep} handleNext={handleNext} />
      <FormContainer onSubmit={handleSubmit}>
        {activeStep === 0 && (
          <>
            <Subheading>Task 1</Subheading>
            {props.splitStr(props.task1)}

            <ImageUploadButton
              text={"Upload your image"}
              onClick={uploadImage}
            />
            <ImageUploadNotification>
              Image uploaded:{" "}
              {file ? (
                <StyledIcon src={tick} />
              ) : (
                <StyledIcon src={crissCross} />
              )}
            </ImageUploadNotification>
            <TextButton
              text={"Go To Next Task"}
              onClick={handleNext}
              disabled={!file}
            />
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
        {activeStep === 2 && (
          <SubmitStep>
            <Subheading>Task 1</Subheading>
            <UploadedImageDisplay src={form.Task1} alt="" />
            <Subheading>Task 2</Subheading>
            <Paragraph>1. {form.Task2a}</Paragraph>
            <Paragraph>2. {form.Task2b}</Paragraph>
            <Paragraph>3. {form.Task2c}</Paragraph>
            <TextButton type={"submit"} text={"Submit"} />
            <br />
            <p>OR</p>
            <br />
          </SubmitStep>
        )}
      </FormContainer>
      <Links onClick={startOver}>Restart mission</Links>
    </>
  );
};

export default Go;
