import React from "react";
import buttonStyles from "./button.module.css";
type ButtonProps = {
  value: string;
};
const Button = ({ value }: ButtonProps) => {
  return (
    <React.Fragment>
      <button className={buttonStyles.btn}>{value}</button>
    </React.Fragment>
  );
};

export default Button;
