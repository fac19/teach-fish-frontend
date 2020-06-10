import styled from "styled-components";
import { fontColour } from "../colours.js";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${fontColour};
  display: flex;
  justify-content: space-around;
`;

export default Nav;
