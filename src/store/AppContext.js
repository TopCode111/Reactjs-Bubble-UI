import React, { createContext, useReducer, useContext } from "react";

export const AppContext = createContext();

const initialState = {
    token: ""
};

export const TOKEN = "TOKEN";

export const appReducer = (state, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export const AppDataProvider = (props) => {
  const [appContextData, appDispatch] = useReducer(appReducer, initialState);
  const appData = { appContextData, appDispatch };
  return (
    <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
