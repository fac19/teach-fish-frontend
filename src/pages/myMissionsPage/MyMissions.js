import React from "react";
import Heading from "../../components/global/heading/Heading";
import Subheading from "../../components/global/subheading/Subheading";
import Navbar from "../../components/global/navbar/Navbar";
import { Page, Avatar, Mission, MissionIcon } from "./MyMissions.style";
import avatarImg from "./avatar.svg";
import padlockImg from "./padlock.svg";
import { TextButton } from "../../components/global/buttons/Buttons";
import { useHistory } from "react-router-dom";

const MyMissions = () => {
  const [allMissionsData, setAllMissionData] = React.useState({});

  const history = useHistory();

  React.useEffect(() => {
    const func = async () => {
      const post = await fetch(
        `../../../.netlify/functions/fetch-all-missions/fetch-all-missions.js`,
      );

      await post.json().then((data) => {
        setAllMissionData(data);
      });
    };

    func();
  }, []);

  return (
    <Page>
      <Navbar />
      <Heading>My Missions</Heading>
      <Avatar src={avatarImg} alt="Profile image" />
      <Mission>
        <MissionIcon src={allMissionsData[0]} />
        <TextButton
          text={"Mission One"}
          onClick={() => history.push("/mission/1")}
        />
      </Mission>
      <Mission>
        <MissionIcon src={padlockImg} />
        <TextButton text={"Mission Two"} disabled={true} />
      </Mission>
      <Mission>
        <MissionIcon src={padlockImg} />
        <TextButton text={"Mission Three"} disabled={true} />
      </Mission>
      <Subheading>More coming soon...</Subheading>
    </Page>
  );
};

export default MyMissions;
