import styled from "styled-components";
import { fontColour } from "../../global/colours";

const SuperPowerBox = styled.div``;

const SuperPowerIconContainer = styled.div`
  width: 100%;
  background-color: whitesmoke;
  padding: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SuperPowerIcon = styled.img`
  height: 4rem;
  margin-right: 2rem;
`;

const SuperPowerTitle = styled.h3`
  font-size: 1.2rem;
  color: ${fontColour};
  @media (min-width: 600px) {
    font-size: 1.8rem;
  }
`;

const SuperPowerVideoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${fontColour};
  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const GetSetContainer = styled.div`
  text-align: center;
`;

export {
  SuperPowerBox,
  SuperPowerIconContainer,
  SuperPowerTitle,
  SuperPowerVideoContainer,
  GetSetContainer,
  VideoTitle,
  SuperPowerIcon,
};
