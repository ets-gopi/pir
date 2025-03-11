import React, { useRef } from "react";
import buttonStyles from "./button.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
type ButtonProps = {
  value: string;
  href: string;
};
gsap.registerPlugin(useGSAP, ScrollToPlugin);
const Button = ({ value, href }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { contextSafe } = useGSAP({ scope: buttonRef });
  const scrollToSection = contextSafe((hrefValue: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: hrefValue, offsetY: 80 },
    });
  });

  const handleATag = (type: string, url: string): React.JSX.Element | null => {
    switch (type) {
      case "Resume":
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            download="Resume.pdf"
          >
            {type}
          </a>
        );
      case "Explore":
        return (
          <a
            href={url}
            rel="noopener noreferrer"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              window.history.pushState(null, "", url);
              scrollToSection(url);
            }}
          >
            {type}
          </a>
        );
      default:
        return (
          <a href={url} rel="noopener noreferrer" target="_blank">
            {type}
          </a>
        );
    }
  };
  return (
    <React.Fragment>
      <button className={buttonStyles.btn} ref={buttonRef}>
        {handleATag(value, href)}
      </button>
    </React.Fragment>
  );
};

export default Button;
