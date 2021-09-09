import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { UserActions } from "../../contexts/User/actions";
import { UserActionType } from "../../contexts/User/reducer";

const Home = () => {
  const ctx = React.useContext(UserContext);

  const logout = () => {
    const { dispatch } = ctx;
    const userActionLogout: UserActionType = {
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
