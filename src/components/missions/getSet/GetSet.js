import React from "react";
import Heading from "../../../components/global/heading/Heading";
import Subheading from "../../../components/global/subheading/Subheading";
import Paragraph from "../../../components/global/paragraph/Paragraph";
import {
  SuperPowerBox,
  SuperPowerIconContainer,
  SuperPowerTitle,
  SuperPowerVideoContainer,
} from "./GetSet.style";
import { TextButton } from "../../../components/global/buttons/Buttons";

export default function GetSet(props) {
  return (
    <>
      <Heading>
        Mission {props.missionNumber}: {props.missionName}
      </Heading>
      <SuperPowerBox>
        <SuperPowerIconContainer></SuperPowerIconContainer>
        <SuperPowerTitle>Superpower: {props.superpower}</SuperPowerTitle>
      </SuperPowerBox>
      <Paragraph>{props.getSet}</Paragraph>
      <Subheading>Introduction Video</Subheading>
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
        text={"Click to start"}
        onClick={() => props.setMissionState("ready")}
      />
    </>
  );
}
