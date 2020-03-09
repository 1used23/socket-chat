import React, { useState, useRef, useEffect } from "react";
import { Input, Button } from "antd";
import { SendOutlined, AudioOutlined, SmileOutlined } from "@ant-design/icons";
import { Picker } from "emoji-mart";

import "emoji-mart/css/emoji-mart.css";
import "./MessageInput.scss";

const MessageInput = ({ newMessage, activeDialog, myNick }) => {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const sendMessage = () => {
    if (input) {
      newMessage(activeDialog, myNick, input);
      setInput("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="dialog__message-input">
      {emojiPicker && (
        <Picker
          set="apple"
          showSkinTones={false}
          showPreview={false}
          onSelect={emoji => {
            setInput(input + emoji.native);
          }}
        />
      )}

      <Input
        ref={inputRef}
        size="large"
        placeholder="Введите текст сообщения…"
        onChange={e => {
          setInput(e.target.value);
        }}
        onPressEnter={() => sendMessage()}
        value={input}
        prefix={
          <Button
            shape="circle"
            icon={<SmileOutlined />}
            className="input-button"
            onClick={() => setEmojiPicker(!emojiPicker)}
          />
        }
        suffix={
          <div className="input__buttons">
            <Button
              shape="circle"
              icon={<AudioOutlined />}
              className="input-button"
            />
            <Button
              shape="circle"
              icon={<SendOutlined />}
              className="input-button"
              onClick={() => sendMessage()}
            />
          </div>
        }
      ></Input>
    </div>
  );
};

export default MessageInput;
