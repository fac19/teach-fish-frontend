import styled from "styled-components";
import { accentColour, linkColour } from "../colours";

const Links = styled.a`
  font-family: "Josefin Sans", sans-serif;
  transition: all 0.2s ease-in-out;
  color: ${linkColour};
  text-decoration: underline;
  display: block;
  text-align: center;
  &:hover {
    font-size: 1.2rem;
    color: ${accentColour};
  }
`;

export default Links;
