import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";

const Page1 = () => {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h1>Page 1</h1>
      <p>User logged: {ctx.state.user.email}</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Page1;
