import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "./contexts/User";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Page1 from "./Pages/Page1";

const Router = () => {
  const ctx = React.useContext(UserContext);

  if (!ctx.state.userLogged) return <Login />;

  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Page1} exact path="/Page1" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
