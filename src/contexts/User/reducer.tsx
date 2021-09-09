import { GenericPayload } from "../genericPayload";
import { UserActions } from "./actions";
import { LoginUserSuccessPayload } from "./payloads";
import { UserStateType } from "./state";

export type UserActionType = {
  type: UserActions;
  payload: GenericPayload;
};

export const UserReducer = (
  prevState: UserStateType,
  action: UserActionType
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

export const initialState: UserStateType = {
  userLogged: false,
  user: {
    email: "",
    password: "",
  },
};
