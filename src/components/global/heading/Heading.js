import styled from "styled-components";
import { fontColour } from "../colours";

const Heading = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-size: 2rem;
  color: ${fontColour};
  text-align: center;

  @media (min-width: 600px) {
    font-size: 4rem;
  }
`;

export default Heading;
