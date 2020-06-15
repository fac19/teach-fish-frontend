import styled from "styled-components";
import { fontColour } from "../colours";

const Subheading = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  color: ${fontColour};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

export default Subheading;
