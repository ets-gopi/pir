import React from "react";
import buttonStyles from "./button.module.css";
const Button = () => {
  return (
    <React.Fragment>
      <button className={buttonStyles.btn}>Resume</button>
    </React.Fragment>
  );
};

export default Button;
