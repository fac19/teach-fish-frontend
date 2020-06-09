import React, { useContext } from "react";
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
  const { loginInfo, setLoginInfo } = useContext(AppContext);

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
      <FormContainer>
        <FormInputWrapper>
          <DateInput />
        </FormInputWrapper>
        <FormInputWrapper>
          <DropdownCountries />
        </FormInputWrapper>
        <FormInputWrapper>
          <DropdownGender />
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
