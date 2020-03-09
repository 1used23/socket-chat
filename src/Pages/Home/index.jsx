import React, { useState } from "react";
import { Dialog, DialogsList } from "../../components";

import "./Home.scss";

import dialogsListJson from "./dialogs.json";
console.log(dialogsListJson);

const Home = () => {
  const [activeDialog, setActiveDialog] = useState();
  const [dialogsList, setDialogsList] = useState(dialogsListJson);

  const newMessage = (dialogIndex, from, message) => {
    const newDialogsList = dialogsList;
    newDialogsList[dialogIndex].messages = [
      ...newDialogsList[dialogIndex].messages,
      { from: from, message: message }
    ];

    setDialogsList(newDialogsList);
  };

  console.log(dialogsList);

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
