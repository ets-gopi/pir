import React from "react";
import loaderStyles from "./loader.module.css";
type LaderProps = {
  animation?: boolean;
  style?: React.CSSProperties;
};

const Lader = ({ animation = false, style = {} }: LaderProps) => {
  return (
    <React.Fragment>
      {animation ? (
        <div
          className={`${loaderStyles.hexagonContainer} ${
            animation && loaderStyles.bg_color
          }`}
          style={style}
        >
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 84 96"
            className={`${
              Object.keys(style).length > 0
                ? loaderStyles.addSvgCustomCSS
                : loaderStyles.defaultSvgCSS
            }`}
          >
            <title>Hexagon Logo</title>
            <g
              className={loaderStyles.hexagon}
              transform="translate(-8.000000, -2.000000)"
            >
              <g transform="translate(11.000000, 5.000000)">
                <polygon
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                  className={`${
                    animation && loaderStyles.addDrawBorderAnimation
                  }`}
                />
                <text
                  className={`${animation && loaderStyles.letterG}`}
                  x="28%"
                  y="50%"
                >
                  G
                </text>
                <text
                  className={`${animation && loaderStyles.letterD}`}
                  x="50%"
                  y="50%"
                >
                  D
                </text>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <a href="/">
          <div
            className={`${loaderStyles.hexagonContainer} ${
              animation && loaderStyles.bg_color
            }`}
            style={style}
          >
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 84 96"
              className={`${
                Object.keys(style).length > 0
                  ? loaderStyles.addSvgCustomCSS
                  : loaderStyles.defaultSvgCSS
              }`}
            >
              <title>Hexagon Logo</title>
              <g
                className={loaderStyles.hexagon}
                transform="translate(-8.000000, -2.000000)"
              >
                <g transform="translate(11.000000, 5.000000)">
                  <polygon
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                    className={`${
                      animation && loaderStyles.addDrawBorderAnimation
                    }`}
                  />
                  <text
                    className={`${animation && loaderStyles.letterG}`}
                    x="28%"
                    y="50%"
                  >
                    G
                  </text>
                  <text
                    className={`${animation && loaderStyles.letterD}`}
                    x="50%"
                    y="50%"
                  >
                    D
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </a>
      )}
    </React.Fragment>
  );
};

export default Lader;
