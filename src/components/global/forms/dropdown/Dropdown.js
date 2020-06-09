import React from "react";
import Label from "../Label";

const DropdownCountries = (props) => {
  return (
    <>
      <Label htmlFor="countries">Country</Label>
      <select
        name="country"
        onChange={props.onChange}
        id="country"
        defaultValue="select-option"
        required>
        <option value="select-option" disabled>
          Select option
        </option>
        <option value="Nepal">Nepal</option>
        <option value="India">India</option>
        <option value="Rwanda">Rwanda</option>
      </select>
    </>
  );
};

const DropdownGender = (props) => {
  return (
    <>
      <Label htmlFor="gender">Gender</Label>
      <select
        name="gender"
        onChange={props.onChange}
        id="gender"
        defaultValue="select-option"
        required>
        <option value="select-option" disabled>
          Select option
        </option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
        <option value="Prefer Not To Say">Prefer not to say</option>
      </select>
    </>
  );
};

export { DropdownCountries, DropdownGender };
