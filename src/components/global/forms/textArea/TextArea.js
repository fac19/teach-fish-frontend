import React from "react";
import { TextAreaLabel, TextAreaBox } from "./TextArea.style";

const TextArea = (props) => {
  return (
    <TextAreaLabel>
      {props.label}
      <TextAreaBox
        name="textarea"
        placeholder="Please type your answer here..."></TextAreaBox>
    </TextAreaLabel>
  );
};

export default TextArea;
