import React from "react";
import { initialState, UserReducer } from "./reducer";
import {
  UserActionReducerType,
  UserContextType,
  UserProps,
  UserStateType,
} from "./types";

export const UserContext = React.createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider = ({ children }: UserProps) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<UserStateType, UserActionReducerType>
  >(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
