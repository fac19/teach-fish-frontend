import React from "react";
import Heading from "../../components/global/heading/Heading";
import { TextButton } from "../../components/global/buttons/Buttons";
import { FormContainer, FormInputWrapper } from "./MissionForm.style";
import TextArea from "../../components/global/forms/textArea/TextArea";

const MissionForm = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const email = token ? token.email : "";

  const [form, setForm] = React.useState({
    Email: email,
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

  return (
    <>
      <Heading>Mission page</Heading>
      <FormContainer onSubmit={handleSubmit}>
        <FormInputWrapper>
          <TextArea
            name={"Task2a"}
            label={"My Actions"}
            onChange={handleChange}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <TextArea
            name={"Task2b"}
            label={"My Results"}
            onChange={handleChange}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <TextArea
            name={"Task2c"}
            label={"My Learning"}
            onChange={handleChange}
          />
        </FormInputWrapper>
        <TextButton type={"submit"} text={"Get started!"} />
      </FormContainer>
    </>
  );
};

export default MissionForm;
