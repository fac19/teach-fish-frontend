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
import { postStudent } from "../../utils/post-data";

const SignUp = () => {
  const { loginInfo, setLoginInfo } = useContext(AppContext);

  const history = useHistory();

  const [form, setForm] = React.useState({
    dob: "",
    gender: "",
    country: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postStudent(JSON.stringify(form))
      .then(() => history.push("/my-missions"))
      .catch(console.error);
  };

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

  // console.log(loginInfo);

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
