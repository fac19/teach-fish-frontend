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
        />
        {props.option1answer}
      </label>
      <label>
        <input type="radio" name="answer" value={props.option2answer} />
        {props.option2answer}
      </label>
      {/* <label>
        <input type="radio" name="answer" value={props.option3answer} />
        {props.option3label}
      </label> */}
    </RadioButtonFieldset>
  );
};

export default RadioButtons;
