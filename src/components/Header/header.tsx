import React, { useEffect, useRef, useState } from "react";
import { logo, defaultLogo } from "../../assets";
import headerStyles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Buttons/button";
import Lader from "../Loader/loader";

const Header = () => {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Close navbar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <React.Fragment>
      <header id={headerStyles.mainHeader} className={headerStyles.mainHeader}>
        <div id={headerStyles.mainHeaderItem1}>
          <figure>
            <img src={logo} alt="gd_logo" />
          </figure>
        </div>
        <div
          ref={navBarRef}
          id={headerStyles.mainHeaderItem2}
          className={isMenuOpen ? headerStyles.active : ""}
        >
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#exp">Experience</a>
              </li>
              <li>
                <a href="#projects">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <Button value="Resume" />
            </ul>
          </nav>
        </div>
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          onClick={toggleIsMenuOpen}
          id={isMenuOpen ? headerStyles.closeIcon : headerStyles.menuIcon}
        />
      </header>
    </React.Fragment>
  );
};

export default Header;
