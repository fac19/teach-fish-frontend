import React from "react";
import GetSetReadyGo from "../../components/missions/getSetReadyGo/GetSetReadyGo.js";
import GetSet from "../../components/missions/getSet/GetSet";
import Ready from "../../components/missions/ready/Ready";
import Go from "../../components/missions/go/Go";
import Heading from "../../components/global/heading/Heading";

const MissionPage = () => {
  // state goes here
  const [currentMissionObject, setCurrentMissionObject] = React.useState({});
  const [missionState, setMissionState] = React.useState("get");

  const missionNumber = window.location.pathname.replace("/mission/", "");

  React.useEffect(() => {
    const func = async () => {
      const post = await fetch(
        `../../../.netlify/functions/fetch-mission/fetch-mission.js?missionNumber=${missionNumber}`,
      );

      await post.json().then((data) => {
        setCurrentMissionObject(data);
      });
    };

    func();
  }, [missionNumber]);

  const isLoading = Object.keys(currentMissionObject).length === 0;

  if (isLoading) {
    return <Heading>Loading Mission...</Heading>;
  } else {
    return (
      <>
        <GetSetReadyGo missionState={missionState} />
        {missionState === "get" && (
          <GetSet
            missionNumber={missionNumber}
            missionName={currentMissionObject["Mission Name"]}
            superpower={currentMissionObject.Superpower}
            superpowerIcon={currentMissionObject["Superpower Icon"]}
            getSet={currentMissionObject["Get Set"]}
            video={currentMissionObject.Video}
            setMissionState={setMissionState}
          />
        )}
        {missionState === "ready" && (
          <Ready setMissionState={setMissionState} />
        )}
        {missionState === "go" && (
          <Go
            task1={currentMissionObject["Task 1 Instructions"]}
            task2={currentMissionObject["Task 2 Instructions"]}
            task2a={currentMissionObject["Task 2a Question"]}
            task2b={currentMissionObject["Task 2b Question"]}
            task2c={currentMissionObject["Task 2c Question"]}
            setMissionState={setMissionState}
          />
        )}
      </>
    );
  }
};

export default MissionPage;
