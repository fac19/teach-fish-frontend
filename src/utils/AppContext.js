import React, { useState, createContext } from "react";

const AppContext = createContext();

function AppContextProvider(props) {
  const [userInfo, setUserInfo] = useState();
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
  });
  const [isUserInfoComplete, setIsUserInfoComplete] = useState(false);
  const [missionState, setMissionState] = useState("get");

  const providerValue = {
    userInfo,
    setUserInfo,
    loginInfo,
    setLoginInfo,
    isUserInfoComplete,
    setIsUserInfoComplete,
    missionState,
    setMissionState,
  };

  return (
    <AppContext.Provider value={providerValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
