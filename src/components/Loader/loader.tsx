import React from "react";
import loaderStyles from "./loader.module.css";
const Lader = () => {
  return (
    <React.Fragment>
      <div className={loaderStyles.hexagonContainer}>
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
          width="80px"
          height="80px"
        >
          <title>Hexagon Logo</title>
          <g
            className={loaderStyles.hexagon}
            transform="translate(-8.000000, -2.000000)"
          >
            <g transform="translate(11.000000, 5.000000)">
              <polygon points="39 0 0 22 0 67 39 90 78 68 78 23" />
              <text className={loaderStyles.letterG} x="28%" y="50%">
                G
              </text>
              <text className={loaderStyles.letterD} x="50%" y="50%">
                D
              </text>
            </g>
          </g>
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Lader;
