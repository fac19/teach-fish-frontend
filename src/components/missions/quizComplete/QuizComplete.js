import React from "react";
import { TextButton } from "../../../components/global/buttons/Buttons";
import star from "../../../img/star.svg";

import { Text, StyledImg, QuizWrapper } from "./QuizComplete.style";

const QuizComplete = (props) => {
  if (props.quizAnswersCorrect) {
    return (
      <QuizWrapper>
        <Text>You are literally a STAR</Text>
        <StyledImg src={star} />
        <Text>You can now start your mission</Text>
        <TextButton
          text={"Go"}
          onClick={() => {
            props.setMissionState("go");
          }}
        />
      </QuizWrapper>
    );
  }
  if (!props.quizAnswersCorrect) {
    return (
      <QuizWrapper>
        <Text>
          Unfortunately that isn't correct! Please restart the mission to Get
          Set
        </Text>
        <TextButton
          text={"Back to start of mission"}
          onClick={() => {
            props.setMissionState("get");
          }}
        />
      </QuizWrapper>
    );
  }
};

export default QuizComplete;
