import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined, TeamOutlined } from "@ant-design/icons";

import "./DialogsList.scss";

const DialogsList = () => {
  const dialogsList = [
    { name: "Jack the Ripper", message: "Я ща стрепсилс тебе куплю, п…" },
    { name: "Ян Борисович Кум", message: "Го в WhatsApp, я создал" },
    { name: "Фёдор Достоевский", message: "Мы все свидетельствуем" },
    { name: "Гай Юлий Цезарь", message: "Кек! Ты то меня никогда не пре…" },
    { name: "Алан Тьюринг", message: "Есть дока на Энигму?" },
    { name: "Александр Блок", message: "Привет! Я ща в аптеку заско…" }
  ];
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

      {dialogsList.map(dialog => {
        return (
          <div className="dialog-element">
            <div className="dialog-element__avatar">
              <div className="dialog-element__avatar-letter">
                {dialog.name.charAt(0)}
              </div>
            </div>
            <div className="dialog-element__wrap">
              <div className="dialog-element__name">{dialog.name}</div>
              <div className="dialog-element__message">{dialog.message}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DialogsList;
