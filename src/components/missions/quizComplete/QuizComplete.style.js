import styled from "styled-components";
import { fontColour } from "../../../components/global/colours";

const QuizWrapper = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  padding: 1rem;
  width: 6rem;
  align-self: center;

  @media (min-width: 768px) {
    width: 8rem;
`;

const Text = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
  color: ${fontColour};
  text-align: center;

  @media (min-width: 600px) {
    font-size: 2.2rem;
  }
`;

export { StyledImg, Text, QuizWrapper };
