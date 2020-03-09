import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined, TeamOutlined } from "@ant-design/icons";

import "./DialogsList.scss";

const DialogsList = ({ dialogsList, chooseDialog }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="dialogs-list">
      <div className="dialogs-list__title">
        <TeamOutlined />
        <div className="dialogs-list__title-text">Список диалогов</div>
      </div>
      <div className="dialogs-list__search">
        <Input
          size="middle"
          placeholder="Поиск среди контактов"
          onChange={e => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          prefix={<SearchOutlined />}
        />
      </div>
      {dialogsList && (
        <div className="dialogs-list__elements">
          {dialogsList.map((dialog, index) => {
            return (
              <div
                key={index}
                className="dialog-element"
                data-id={index}
                onClick={e => {
                  chooseDialog(e.currentTarget.dataset.id);
                  console.log(e.currentTarget.dataset.id);
                }}
              >
                <div className="dialog-element__avatar">
                  <div className="dialog-element__avatar-letter">
                    {dialog.sender.charAt(0)}
                  </div>
                </div>
                <div className="dialog-element__wrap">
                  <div className="dialog-element__name">{dialog.sender}</div>
                  <div className="dialog-element__message">
                    {dialog.messages[dialog.messages.length - 1].message}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DialogsList;
