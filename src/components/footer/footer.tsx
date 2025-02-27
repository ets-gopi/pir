import React from "react";
import footerPageStyles from "./footer.module.css";
const Footer = () => {
  return (
    <React.Fragment>
      <footer id={footerPageStyles.footer}>
        Designed & Built by Gopi Muppuri <br />
        &copy; 2025.All rights reserved.
      </footer>
    </React.Fragment>
  );
};

export default Footer;
