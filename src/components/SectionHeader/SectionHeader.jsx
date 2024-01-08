import React from "react";
import "./SectionHeader.scss";

export const SectionHeader = ({ header, headline }) => {
  return (
    <div className="header-box">
      <h2 className="header-box__header">{header}</h2>
      <h3 className="header-box__headline">{headline}</h3>
    </div>
  );
};
export default SectionHeader;
