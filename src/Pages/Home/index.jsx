import React, { useState } from "react";
import { Dialog, DialogsList } from "../../components";

import "./Home.scss";

import dialogsListJson from "./dialogs.json";

const Home = () => {
  const [activeDialog, setActiveDialog] = useState();
  const [dialogsList, setDialogsList] = useState(dialogsListJson);

  const newMessage = (dialogIndex, from, message) => {
    const newDialogsList = dialogsList.slice();
    newDialogsList[dialogIndex].messages = [
      ...newDialogsList[dialogIndex].messages,
      { from: from, message: message }
    ];

    setDialogsList(newDialogsList);
  };

  return (
    <div className="home">
      <DialogsList dialogsList={dialogsList} chooseDialog={setActiveDialog} />
      <Dialog
        activeDialog={activeDialog}
        dialogsList={dialogsList[activeDialog]}
        newMessage={newMessage}
      />
    </div>
  );
};

export default Home;
