import React from "react";
import Heading from "../../components/global/heading/Heading";
import {
  DropdownCountries,
  DropdownGender,
} from "../../components/global/forms/dropdown/Dropdown";
import DateInput from "../../components/global/forms/dateInput/DateInput";
import { TextButton } from "../../components/global/buttons/Buttons";
import { FormContainer, FormInputWrapper } from "./SignUp.style";

const SignUp = () => {
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
