import React from "react";
import { TextButton } from "../../global/buttons/Buttons";

const Ready = (props) => {
  return (
    <>
      <h1>Ready</h1>
      <TextButton
        text={"Click to go"}
        onClick={() => props.setMissionState("go")}
      />
    </>
  );
};

export default Ready;
