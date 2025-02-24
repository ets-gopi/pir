import React from "react";
import footerPageStyles from "./footer.module.css";
const Footer = () => {
  return (
    <React.Fragment>
      <footer id={footerPageStyles.footer}>
        <p>Designed & Built by Gopi Muppuri</p>
        <p>&copy; 2025.All rights reserved.</p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
