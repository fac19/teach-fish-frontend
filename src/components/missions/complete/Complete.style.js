import styled from "styled-components";
import { fontColour } from "../../global/colours";

const ImageWrapper = styled.section`
  display: flex;
  height: 50vh;
  margin: 0;
  padding: 0;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  left: 10%;
  top: 25%;
  width: 80%;
`;

const Circle = styled.img`
  // margin: 25% 0;
  //   position: absolute;
  width: 100%;
`;

const Text = styled.h2`
  color: ${fontColour};
  text-align: center;
`;

export { ImageWrapper, Image, Circle, Text };
