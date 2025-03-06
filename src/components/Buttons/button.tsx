import React from "react";
import buttonStyles from "./button.module.css";
type ButtonProps = {
  value: string;
  href: string;
};
const Button = ({ value, href }: ButtonProps) => {
  return (
    <React.Fragment>
      <button className={buttonStyles.btn}>
        <a
          href={href}
          rel="noopener noreferrer"
          {...(value === "Resume" && { download: "Resume.pdf" })}
        >
          {value}
        </a>
      </button>
    </React.Fragment>
  );
};

export default Button;
