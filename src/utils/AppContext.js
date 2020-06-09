import React, { useState, createContext } from "react";

const AppContext = createContext();

function AppContextProvider(props) {
  const [userInfo, setUserInfo] = useState();

  const providerValue = { userInfo, setUserInfo };

  return (
    <AppContext.Provider value={providerValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
