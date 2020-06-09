import React from "react";
import Label from "../Label";

const DateInput = (props) => {
  return (
    <>
      <Label htmlFor="dob">Date of birth</Label>
      <input type="date" id="dob" name="dob" onChange={props.onChange} />
    </>
  );
};

export default DateInput;
