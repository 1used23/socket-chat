import React from "react";
import { Message, MessageInput } from "../../components";

import "./Dialog.scss";

const Dialog = () => {
  const myNick = "nagibator";
  const otherNick = "Васян";

  const messages = [
    { message: "Hi", time: 111, sender: myNick },
    { message: "Привет", time: 111, sender: otherNick },
    { message: "How are you", time: 111, sender: myNick },
    { message: "Как дела?", time: 111, sender: otherNick },
    { message: "Привет", time: 111, sender: otherNick },
    { message: "How are you", time: 111, sender: myNick },
    { message: "Как дела?", time: 111, sender: otherNick },
    { message: "Привет", time: 111, sender: otherNick },
    { message: "How are you", time: 111, sender: otherNick },
    { message: "How are you", time: 111, sender: myNick },
    { message: "Как дела?", time: 111, sender: otherNick },
    { message: "How are you", time: 111, sender: otherNick }
  ];
  return (
    <div className="dialog">
      <div className="dialog__name">
        <div className="dialog__name-text">{otherNick}</div>
      </div>
      <div className="dialog__messages">
        {messages &&
          messages.map(message => {
            return message.sender === myNick ? (
              <Message message={message} isMe />
            ) : (
              <Message message={message} />
            );
          })}
      </div>

      <MessageInput />
    </div>
  );
};

export default Dialog;
