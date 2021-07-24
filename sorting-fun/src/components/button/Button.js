//Button.js

import React from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  onClick,
  btnColor = "teal",
  labelColor,
  disabled,
  type,
  style,
  ...props
}) => {
  return (
    <button className={styles} onClick={onClick}>
      {children || "label"}
    </button>
  );
};

export default Button;
