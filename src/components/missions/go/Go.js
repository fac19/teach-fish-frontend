import React from "react";
import { TextButton } from "../../global/buttons/Buttons";
import { FormContainer, FormInputWrapper } from "./Go.style";
import TextArea from "../../global/forms/textArea/TextArea";
import Steps from "../steps/Steps";
import Paragraph from "../../../components/global/paragraph/Paragraph";
import Subheading from "../../../components/global/subheading/Subheading";

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

  React.useEffect(() => {
    setForm(file);
    console.log(form);
    console.log("useEffect");
  }, [file]);

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
          //  setForm({ ...form, Task1: url});
          setUploadedFile(url);
          // console.log(url)
          // // let formCopy = {...form};
          // // formCopy.Task1 = file;
          // setForm({ ...form, Task1: url});

          // console.log('form is :', form)
        }
      },
    );
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
            <Paragraph>{props.task1}</Paragraph>
            <TextButton text={"Upload your image"} onClick={uploadImage} />
            <p>File path: {form.Task1}</p>
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
            <TextButton text={"Go to mission review"} onClick={handleNext} />
          </>
        )}
        {activeStep === 2 && <TextButton type={"submit"} text={"Submit"} />}
      </FormContainer>
    </>
  );
};

export default Go;
