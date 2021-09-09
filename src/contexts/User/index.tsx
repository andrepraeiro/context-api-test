import React from "react";
import { initialState, UserActionType, UserReducer } from "./reducer";
import { UserStateType } from "./state";

export type UserContextType = {
  state: UserStateType;
  dispatch: React.Dispatch<UserActionType>;
};

export type UserProps = {
  children: React.ReactNode;
};

export const UserContext = React.createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider = ({ children }: UserProps) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<UserStateType, UserActionType>
  >(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
