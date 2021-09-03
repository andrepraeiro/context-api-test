import React from "react";
import { ActionType } from "./actions";
import { initialState, reducer, UserStateType } from "./reducer";

export type UserContextType = {
  state: UserStateType;
  dispatch: React.Dispatch<ActionType>;
};

export type UserProps = {
  children: React.ReactNode;
};

export const UserContext = React.createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider = ({ children }: UserProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
