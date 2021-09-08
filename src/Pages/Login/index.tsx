import React from "react";
import { UserContext } from "../../contexts/User";
import { ActionType, LOGIN_USER_SUCCESS } from "../../contexts/User/actions";
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

  const submitLogin = (dispatch: React.Dispatch<ActionType>) => {
    const { email, password } = user;
    dispatch({ type: LOGIN_USER_SUCCESS, payload: { email, password } });
  };

  return (
    <UserContext.Consumer>
      {({ state, dispatch }) => (
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
                    setUser({ ...user, email: e.target.value });
                  }}
                />
                <label htmlFor="email">Email:</label>
                <div className="icon"></div>
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
                <div className="icon"></div>
              </div>
              <button type="submit" onClick={() => submitLogin(dispatch)}>
                Log in
              </button>
              <a href="www.google.com" className="discrete">
                Basic version
              </a>
            </div>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Login;
