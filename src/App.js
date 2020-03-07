import React from "react";
import { Auth, Register } from "./Pages";
import { Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login"]} component={Auth} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
