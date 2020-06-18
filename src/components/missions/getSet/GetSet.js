import React from "react";
import Subheading from "../../../components/global/subheading/Subheading";
import {
  SuperPowerBox,
  SuperPowerIconContainer,
  SuperPowerTitle,
  SuperPowerVideoContainer,
  GetSetContainer,
  VideoTitle,
  SuperPowerIcon,
} from "./GetSet.style";
import { TextButton } from "../../../components/global/buttons/Buttons";

const GetSet = (props) => {
  return (
    <GetSetContainer>
      <Subheading>
        Mission {props.missionNumber}: <br /> {props.missionName}
      </Subheading>
      <SuperPowerBox>
        <SuperPowerIconContainer>
          <SuperPowerIcon src={props.superpowerIcon} />
          <SuperPowerTitle>
            Superpower: <br /> {props.superpower}
          </SuperPowerTitle>
        </SuperPowerIconContainer>
      </SuperPowerBox>
      {props.splitStr(props.getSet)}
      <VideoTitle>Introduction Video</VideoTitle>
      <SuperPowerVideoContainer>
        <iframe
          width="560"
          title="Instructional video"
          height="315"
          src={props.video}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </SuperPowerVideoContainer>
      <TextButton
        text={"Start!"}
        onClick={() => props.setMissionState("ready")}
      />
    </GetSetContainer>
  );
};

export default GetSet;
