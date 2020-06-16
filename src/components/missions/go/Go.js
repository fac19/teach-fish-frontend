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

  const token = JSON.parse(localStorage.getItem("token"));
  const email = token ? token.email : "";

  const [form, setForm] = React.useState({
    Email: email,
    Task1: "",
    Task2a: "",
    Task2b: "",
    Task2c: "",
  });

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

  // function for the stepper for Go Page
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
      <Steps activeStep={activeStep} handleNext={handleNext} />
      <FormContainer onSubmit={handleSubmit}>
        <Subheading>Task 1</Subheading>
        <Paragraph>{props.task1}</Paragraph>
        <input
          type="button"
          value="Upload your image"
          name={"Task1"}
          onClick={() => UploadImage()}
          onChange={handleChange}
        />
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
        <TextButton type={"submit"} text={"Submit"} />
      </FormContainer>
    </>
  );
};

export default Go;
