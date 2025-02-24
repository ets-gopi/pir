import React from "react";
type LinkProps = {
  children: React.ReactNode;
  url: string;
};
const Link = ({ children, url }: LinkProps) => {
  return (
    <React.Fragment>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        {children}
      </a>
    </React.Fragment>
  );
};

export default Link;
