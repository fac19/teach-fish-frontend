import React from "react";
import RadioButtonFieldset from "./RadioButtons.style";

const RadioButtons = (props) => {
  return (
    <RadioButtonFieldset>
      <legend>{props.question}</legend>
      <label>
        <input
          type="radio"
          name="answer"
          value={props.option1answer}
          required
          onChange={props.onChange}
        />
        {props.option1answer}
      </label>
      <label>
        <input
          type="radio"
          name="answer"
          value={props.option2answer}
          onChange={props.onChange}
        />
        {props.option2answer}
      </label>
    </RadioButtonFieldset>
  );
};

export default RadioButtons;
