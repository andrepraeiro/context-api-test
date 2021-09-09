import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { UserActionReducerType, UserActions } from "../../contexts/User/types";

const Home = () => {
  const ctx = React.useContext(UserContext);

  const logout = () => {
    const { dispatch } = ctx;
    const userActionLogout: UserActionReducerType = {
      type: UserActions.LOGOUT_USER,
      payload: {},
    };
    dispatch(userActionLogout);
  };
  return (
    <div>
      <h1>Home</h1>
      <p>User logged: {ctx.state.user.email}</p>
      <Link to={"Page1"}>Page 1</Link>
      <p>
        <button type="button" onClick={() => logout()}>
          Logout
        </button>
      </p>
    </div>
  );
};

export default Home;
