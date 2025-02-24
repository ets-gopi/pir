import React from "react";
import sideBarStyles from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <React.Fragment>
      <div id={sideBarStyles.verticalBar}></div>
    </React.Fragment>
  );
};

export default Sidebar;
