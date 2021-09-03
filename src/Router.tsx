import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./contexts/User";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const Router = () => {
  const ctx = React.useContext(UserContext);

  if (!ctx.state.userLogged) return <Login />;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
