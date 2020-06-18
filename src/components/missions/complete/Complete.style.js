import styled from "styled-components";
import { fontColour } from "../../global/colours";

const ImageWrapper = styled.div`
  display: flex;
  height: 40vh;
  margin: 2rem;
  padding: 0;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 80%;
  bottom: 20%;
  max-width: 300px;
  max-height: 200px;
`;

const Circle = styled.img`
  height: 100%;
`;

const Text = styled.h2`
  color: ${fontColour};
  text-align: center;
`;

export { ImageWrapper, Image, Circle, Text };
