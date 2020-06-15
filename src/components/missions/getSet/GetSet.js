import React from "react";
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
      <Subheading>Mission 1</Subheading>
      <Paragraph></Paragraph>
      <SuperPowerBox>
        <SuperPowerIconContainer></SuperPowerIconContainer>
        <SuperPowerTitle>Superpower</SuperPowerTitle>
      </SuperPowerBox>
      <Subheading>Introduction Video</Subheading>
      <SuperPowerVideoContainer></SuperPowerVideoContainer>
      <TextButton text={"Click to start"} />
    </>
  );
}
