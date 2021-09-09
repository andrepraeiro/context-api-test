import React, { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { UserActions } from "../../contexts/User/actions";
import { LoginUserSuccessPayload } from "../../contexts/User/payloads";
import { UserActionType } from "../../contexts/User/reducer";
import "./style.scss";

type UserLogin = {
  email: string;
  password: string;
};

const Login = () => {
  const [user, setUser] = React.useState<UserLogin>({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(UserContext);

  const submitLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    const { email, password } = user;
    const payload: LoginUserSuccessPayload = {
      user: {
        email,
        password,
      },
    };
    dispatch({
      type: UserActions.LOGIN_USER_SUCCESS,
      payload,
    });
  };

  return (
    <div className="login-box">
      <div className="session">
        <div className="left"></div>
        <div className="form">
          <h4>
            We are <span>Acme Corporation</span>
          </h4>
          <p>Welcome back! Log in to your account:</p>
          <div className="floating-label">
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={(e) => {
                console.log({ user });
                setUser({ ...user, email: e.target.value });
              }}
            />
            <label htmlFor="email">Email:</label>
            <div className="icon">
              <div className="material-icons">email</div>
            </div>
          </div>
          <div className="floating-label">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <label htmlFor="password">Password:</label>
            <div className="icon">
              <div className="material-icons">lock</div>
            </div>
          </div>
          <button type="button" onClick={(e) => submitLogin(e)}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
