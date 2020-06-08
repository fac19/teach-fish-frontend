import styled from "styled-components";
import {
  bgColour,
  fontColour,
  primaryColour,
  secondaryColour,
  accentColour,
  linkColour,
} from "../colours";

const Heading = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-size: 2rem;
  color: ${fontColour};

  @media (min-width: 600px) {
    font-size: 4rem;
  
`;

export { Heading };
