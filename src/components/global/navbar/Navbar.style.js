import styled from "styled-components";
import { secondaryColour } from "../colours.js";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${secondaryColour};
  display: flex;
  justify-content: space-around;
  z-index: 1000;
`;

export default Nav;
