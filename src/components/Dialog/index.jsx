import React from "react";
import { Message } from "../../components";

import "./Dialog.scss";

const Dialog = () => {
  const myNick = "nagibator";
  const messages = [
    { message: "Hi", time: 111, sender: myNick },
    { message: "Привет", time: 111, sender: "Васян" },
    { message: "How are you", time: 111, sender: myNick },
    { message: "Как дела?", time: 111, sender: "Васян" }
  ];
  return (
    <div className="dialog">
      {messages &&
        messages.map(message => {
          return message.sender === myNick ? (
            <Message message={message} isMe />
          ) : (
            <Message message={message} />
          );
        })}
    </div>
  );
};

export default Dialog;
