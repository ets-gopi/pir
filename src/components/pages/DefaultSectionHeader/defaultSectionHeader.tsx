import React from "react";
type DefaultSectionHeaderProps = {
  value: string;
};
const DefaultSectionHeader = (props: DefaultSectionHeaderProps) => {
  return (
    <React.Fragment>
      <header>
        <h2>{props.value}</h2>
        <div>
          <div></div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default DefaultSectionHeader;
