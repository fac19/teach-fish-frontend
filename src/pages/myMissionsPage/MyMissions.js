import React from "react";
import Heading from "../../components/global/heading/Heading";
import Subheading from "../../components/global/subheading/Subheading";
import Navbar from "../../components/global/navbar/Navbar";
import { Page, Avatar, Mission, MissionIcon } from "./MyMissions.style";
import avatarImg from "./avatar.svg";
import missionImg from "./mission-one-icon.svg";
import padlockImg from "./padlock.svg";
import { TextButton } from "../../components/global/buttons/Buttons";
import { useHistory } from "react-router-dom";

const MyMissions = () => {
  const history = useHistory();
  const [userEntry, setUserEntry] = React.useState();
  const token = JSON.parse(localStorage.getItem("token"));
  const email = token.email;

  console.log(email);

  React.useEffect(() => {
    const func = async () => {
      const fetchResult = await fetch(
        `../../../.netlify/functions/fetch-entries/fetch-entries.js?email=${email}`,
      );

      await fetchResult.json().then((data) => {
        setUserEntry(data);
        console.log(data);
      });
    };
    func();
  }, [email]);

  console.log(userEntry);

  return (
    <Page>
      <Navbar />
      <Heading>My Missions</Heading>
      <Avatar src={avatarImg} alt="Profile image" />
      <Mission>
        <MissionIcon src={missionImg} />
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
