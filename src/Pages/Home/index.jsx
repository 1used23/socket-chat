import React from "react";
import { Dialog, DialogsList } from "../../components";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <DialogsList />
      <Dialog />
    </div>
  );
};

export default Home;
