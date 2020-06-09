import React from "react";
import Label from "../Label";

const DateInput = () => {
  return (
    <>
      <Label htmlFor="dob">Date of birth</Label>
      <input type="date" id="dob" name="dob" />
    </>
  );
};

export default DateInput;
