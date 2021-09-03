import React from "react";
import "./style.scss";

type UserLogin = {
  name: string;
  password: string;
};

const Login = () => {
  const [user, setUser] = React.useState<UserLogin>({
    name: "",
    password: "",
  });

  const login = () => {
    console.log(JSON.stringify(user));
  };

  return (
    <div className="login-box">
      <div className="session">
        <div className="left"></div>
        <form action="" className="log-in" autoComplete="off">
          <h4>
            We are <span>NUVA</span>
          </h4>
          <p>Welcome back! Log in to your account to view today's clients:</p>
          <div className="floating-label">
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
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
            />
            <label htmlFor="password">Password:</label>
            <div className="icon"></div>
          </div>
          <button type="submit" onClick={() => login()}>
            Log in
          </button>
          <a href="#" className="discrete">
            Basic version
          </a>
        </form>
      </div>

      {/* <label>
        <p>Username</p>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, name: event.target.value });
          }}
        ></input>
      </label>
      <label>
        <p>Password</p>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        ></input>
      </label>
      <div>
        <button type="button" onClick={() => login()}>
          Login
        </button>
      </div> */}
    </div>
  );
};

export default Login;
