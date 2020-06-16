import React from "react";

const QuizComplete = (props) => {
  if (props.quizAnswersCorrect) {
    return <h1>Good</h1>;
  }
  if (!props.quizAnswersCorrect) {
    return <h1>Bad!</h1>;
  }
};

export default QuizComplete;
