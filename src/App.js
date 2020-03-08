import React from "react";
import { Auth, Register, Home } from "./pages";
import { Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login"]} component={Auth} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/im" component={Home} />
    </div>
  );
}

export default App;
