import {
  LoginUserSuccessPayload,
  UserActionReducerType,
  UserActions,
  UserStateType,
} from "./types";

export const initialState: UserStateType = {
  userLogged: false,
  user: {
    email: "",
    password: "",
  },
};

export const UserReducer = (
  prevState: UserStateType,
  action: UserActionReducerType
) => {
  console.log({ prevState, action });
  switch (action.type) {
    case UserActions.LOGIN_USER_SUCCESS: {
      const { user } = action.payload as LoginUserSuccessPayload;
      return {
        ...prevState,
        user,
        userLogged: true,
      };
    }
    case UserActions.LOGOUT_USER: {
      return {
        ...initialState,
      };
    }
    default:
      return prevState;
  }
};
