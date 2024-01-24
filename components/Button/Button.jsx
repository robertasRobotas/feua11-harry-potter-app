import React from "react";
import styles from "./styles.module.css";

const Button = ({ text, onButtonClick, type, className }) => {
  return (
    <button
      onClick={onButtonClick}
      className={`
    ${styles.button}
    ${type === "success" && styles.success}
    ${type === "warning" && styles.warning}
    ${type === "danger" && styles.danger}
    ${className && className}
    `}
    >
      {text}
    </button>
  );
};

export default Button;
