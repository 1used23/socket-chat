import React, { useRef, useEffect } from "react";
import { Message, MessageInput } from "../../components";

import "./Dialog.scss";

const Dialog = ({ activeDialog, dialogsList, newMessage }) => {
  const myNick = "nagibator";

  const messagesRef = useRef(null);
  if (dialogsList) {
    console.log(dialogsList);
  }
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  });

  return (
    <div className="dialog">
      {activeDialog ? (
        <>
          <div className="dialog__name">
            <div className="dialog__name-text">
              {dialogsList.sender && dialogsList.sender}
            </div>
          </div>
          <div className="dialog__messages" ref={messagesRef}>
            {dialogsList &&
              dialogsList.messages.map((message, index) => {
                return message.from === myNick ? (
                  <Message key={index} message={message} isMe />
                ) : (
                  <Message key={index} message={message} />
                );
              })}
          </div>

          <MessageInput
            newMessage={newMessage}
            activeDialog={activeDialog}
            myNick={myNick}
          />
        </>
      ) : (
        "Выберите диалог"
      )}
    </div>
  );
};

export default Dialog;
