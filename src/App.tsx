import React from "react";
import "./App.css";
import { UserProvider } from "./contexts/User";
import Router from "./Router";

const App = () => (
  <div>
    <UserProvider>
      <Router />
    </UserProvider>
  </div>
);

export default App;
