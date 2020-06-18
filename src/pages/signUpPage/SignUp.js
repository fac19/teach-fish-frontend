import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../components/global/heading/Heading";
import {
  DropdownCountries,
  DropdownGender,
} from "../../components/global/forms/dropdown/Dropdown";
import DateInput from "../../components/global/forms/dateInput/DateInput";
import { TextButton } from "../../components/global/buttons/Buttons";
import { FormContainer, FormInputWrapper } from "./SignUp.style";
import { AppContext } from "../../utils/AppContext";

const SignUp = () => {
  const { isUserInfoComplete, setIsUserInfoComplete } = useContext(AppContext);
  const { loginInfo, setLoginInfo } = useContext(AppContext);

  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("token"));

  const name = token ? token.full_name : "";
  const email = token ? token.email : "";

  const [form, setForm] = React.useState({
    Name: name,
    Email: email,
    dob: "",
    gender: "",
    country: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("../../../.netlify/functions/post-student/post-student.js", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    history.push("/my-missions");
  };

  // Retreive data from airtable, then check if user is already registered with all neccessary information
  React.useEffect(() => {
    // get user email from state
    let userEmail = loginInfo.email;

    const func = async () => {
      const post = await fetch(
        `../../../.netlify/functions/fetch-student/fetch-student.js?email=${userEmail}`,
      );

      const finalFetch = await post.json();
      setIsUserInfoComplete(finalFetch);
    };

    func();
  }, [loginInfo, setIsUserInfoComplete]);

  React.useEffect(() => {
    if (isUserInfoComplete) {
      return history.push("/my-missions");
    }
  }, [isUserInfoComplete, history]);

  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setLoginInfo({
        email: token.email,
        name: token.full_name,
      });
    }
  }, [setLoginInfo]);

  return (
    <>
      <Heading>Before you begin...</Heading>
      <FormContainer onSubmit={handleSubmit}>
        <FormInputWrapper>
          <DateInput onChange={handleChange} />
        </FormInputWrapper>
        <FormInputWrapper>
          <DropdownCountries onChange={handleChange} />
        </FormInputWrapper>
        <FormInputWrapper>
          <DropdownGender onChange={handleChange} />
        </FormInputWrapper>
        <TextButton type={"submit"} text={"Get started!"} />
      </FormContainer>
    </>
  );
};

export default SignUp;
