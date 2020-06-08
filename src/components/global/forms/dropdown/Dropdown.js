import React from "react";

const DropdownCountries = () => {
  return (
    <>
      <label htmlFor="countries">Country</label>
      <select name="country" id="country" defaultValue="select-option" required>
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

const DropdownGender = () => {
  return (
    <>
      <label htmlFor="gender">Gender</label>
      <select name="gender" id="gender" defaultValue="select-option" required>
        <option value="select-option" disabled>
          Select option
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
        <option value="undisclosed">Prefer not to say</option>
      </select>
    </>
  );
};

export { DropdownCountries, DropdownGender };
