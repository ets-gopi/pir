import React, { useEffect } from "react";
import { logo, defaultLogo } from "../../assets";
import headerStyles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  useEffect(() => {
    const windowSize = () => {
      console.log(window.innerWidth);
    };
    window.addEventListener("resize",windowSize);
  }, []);
  return (
    <React.Fragment>
      <header id={headerStyles.mainHeader} className={headerStyles.mainHeader}>
        <div id={headerStyles.mainHeaderItem1}>
          <figure>
            <img
              className={headerStyles.logo}
              src={defaultLogo}
              alt="gd_logo"
            />
          </figure>
        </div>
        <div id={headerStyles.mainHeaderItem2}>
          <nav>
            <ul>
              <li>
                <a href="#home">h1</a>
              </li>
              <li>
                <a href="#about">h2</a>
              </li>
              <li>
                <a href="#work">h3</a>
              </li>
              <li>
                <a href="#projects">h4</a>
              </li>
            </ul>
          </nav>
          {/* <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faXmark} /> */}
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
