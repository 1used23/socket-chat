import React from "react";
import classNames from "classnames";

import "./Message.scss";

const Message = ({ message, isMe }) => {
  return isMe ? (
    <div className="message-from-me">
      <div className={classNames("message message-from-me__content")}>
        <div className="message-from-me__text">{message.message}</div>
      </div>
    </div>
  ) : (
    <div className="message-to-me">
      <div className={classNames("message message-to-me__content")}>
        <div className="message-to-me__text">{message.message}</div>
      </div>
    </div>
  );
};

export default Message;
