import styled from "styled-components";
import { fontColour } from "../colours";

const SectionTitle = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.1rem;
  color: ${fontColour};
  text-align: center;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

export default SectionTitle;
