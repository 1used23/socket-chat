import React, { useRef, useEffect, useState } from "react";
import { Message, MessageInput } from "../../components";

import "./Dialog.scss";

const Dialog = () => {
  const myNick = "nagibator";
  const otherNick = "Васян";

  const [messages, setMessages] = useState([
    {
      message: "Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻",
      time: 111,
      sender: otherNick
    },
    {
      message:
        "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝",
      time: 111,
      sender: otherNick
    },
    { message: "Салам, брат Цезарь!", time: 111, sender: myNick },
    {
      message:
        "Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥",
      time: 111,
      sender: myNick
    },
    { message: "Да нзч! Ок, держи в курсе.", time: 111, sender: otherNick },
    {
      message: "Ave Caesar! Morituri te salutant! ☝️",
      time: 111,
      sender: myNick
    },
    { message: "How are you", time: 111, sender: myNick },
    {
      message: "Кек. Ты то меня никогда не предашь 😌",
      time: 111,
      sender: otherNick
    },
    {
      message: "Ave Caesar! Morituri te salutant! ☝️",
      time: 111,
      sender: myNick
    },
    { message: "How are you", time: 111, sender: myNick },
    {
      message: "Кек. Ты то меня никогда не предашь 😌",
      time: 111,
      sender: otherNick
    },
    {
      message: "Ave Caesar! Morituri te salutant! ☝️",
      time: 111,
      sender: myNick
    },
    { message: "How are you", time: 111, sender: myNick },
    {
      message: "Кек. Ты то меня никогда не предашь 😌",
      time: 111,
      sender: otherNick
    }
  ]);

  const newMessage = newMessage => {
    setMessages([
      ...messages,
      {
        message: newMessage,
        time: 111,
        sender: myNick
      }
    ]);
  };

  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  });

  return (
    <div className="dialog">
      <div className="dialog__name">
        <div className="dialog__name-text">{otherNick}</div>
      </div>
      <div className="dialog__messages" ref={messagesRef}>
        {messages &&
          messages.map(message => {
            return message.sender === myNick ? (
              <Message message={message} isMe />
            ) : (
              <Message message={message} />
            );
          })}
      </div>

      <MessageInput newMessage={newMessage} />
    </div>
  );
};

export default Dialog;
