import { ActionType, LOGIN_USER_SUCCESS } from "./actions";

export type UserStateType = {
  userLogged: Boolean;
  user: {
    name: string;
    email: string;
    token: string;
  };
};

export const reducer = (state: UserStateType, action: ActionType) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userLogged: true,
      };
    default:
      return state;
  }
};

export const initialState: UserStateType = {
  userLogged: false,
  user: {
    name: "",
    email: "",
    token: "",
  },
};
