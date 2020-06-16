import React from "react";
import { TextAreaLabel, TextAreaBox } from "./TextArea.style";

const TextArea = (props) => {
  return (
    <TextAreaLabel>
      {props.label}
      <TextAreaBox
        name={props.name}
        placeholder="Please type your answer here..."
        onChange={props.onChange}
        required
      />
    </TextAreaLabel>
  );
};

export default TextArea;
