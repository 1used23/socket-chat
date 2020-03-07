import React from "react";
import { Button as ButtonUI } from "antd";
import classNames from "classnames";

import "./Button.scss";

const Button = ({ text, className, size, type }) => {
  return (
    <ButtonUI
      type={type}
      size={size}
      className={classNames("button", className, {
        button__large: size === "large"
      })}
    >
      {text}
    </ButtonUI>
  );
};

export default Button;
