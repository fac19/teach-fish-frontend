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
// import fetchStudentRecords from "../../utils/fetch-data";

const SignUp = () => {
  const { loginInfo, setLoginInfo } = useContext(AppContext);
  const { isUserInfoComplete, setIsUserInfoComplete } = useContext(AppContext);

  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("token"));
  // const name = "";
  // const email = "";
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

  console.log(form);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "../../../.netlify/functions/post-student/post-student.js",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      },
    );
    const final = await response.json();
    console.log(final);
  };

  // Retreive data from airtable, then check if user is already registered with all neccessary information
  React.useEffect(() => {
    // get user email from state
    let userEmail = loginInfo.email;
    console.log("in useEffect userEmail is: ", userEmail);
    // pass on email as a param to the database query
    // let userDataAirtable = fetchStudentRecords(userEmail);
    console.log("userdata is: ", isUserInfoComplete);

    // fetch(`../../../.netlify/functions/fetch-student/fetch-student.js/`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email: userEmail }),
    // }).then((data) => console.log("we got back from the fetch: ", data));
    fetch(`../../../.netlify/functions/fetch-student/fetch-student.js?`)
      .json()
      .then((data) => console.log("we got back from the fetch: ", data));

    //   fetchStudentRecords(userEmail, setIsUserInfoComplete);
  }, [loginInfo]);

  React.useEffect(() => {
    console.log("isUserInfoComplete :", isUserInfoComplete);
    if (isUserInfoComplete) {
      return history.push("/my-missions");
    }
  }, [isUserInfoComplete]);

  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log(token.email, token.full_name);

    if (token) {
      setLoginInfo({
        email: token.email,
        name: token.full_name,
      });
    }
  }, [setLoginInfo]);

  console.log(loginInfo);

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

  // query the airtable to see if we have user's details in our database

  // if we do not
  // render the signup p2 form to collect the data
  // send and save the data on the airtable

  // if we do have the details
  // redirect to the mission page
};

export default SignUp;
