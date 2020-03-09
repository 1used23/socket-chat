import React, { useState } from "react";
import { Input, Button } from "antd";
import { SendOutlined, AudioOutlined, SmileOutlined } from "@ant-design/icons";
import { Picker } from "emoji-mart";

import "emoji-mart/css/emoji-mart.css";
import "./MessageInput.scss";

const MessageInput = ({ newMessage }) => {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [input, setInput] = useState("");

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
        size="large"
        placeholder="Введите текст сообщения…"
        onChange={e => {
          setInput(e.target.value);
        }}
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
              onClick={() => {
                newMessage(input);
                setInput("");
              }}
            />
          </div>
        }
      ></Input>
    </div>
  );
};

export default MessageInput;
