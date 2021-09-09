import { GenericPayload } from "../genericPayload";

//state
export type UserStateType = {
  userLogged: Boolean;
  user: {
    email: string;
    password: string;
  };
};

//context
export type UserContextType = {
  state: UserStateType;
  dispatch: React.Dispatch<UserActionReducerType>;
};

//props
export type UserProps = {
  children: React.ReactNode;
};

//action reducer
export type UserActionReducerType = {
  type: UserActions;
  payload: GenericPayload;
};

//payloads
export type LoginUserSuccessPayload = Pick<UserStateType, "user">;

//actions
export enum UserActions {
  "LOGIN_USER_SUCCESS",
  "LOGOUT_USER",
}
