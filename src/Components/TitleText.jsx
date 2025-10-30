import React from "react";

const TitleText = ({ text, colorText, className = "" }) => {
  return (
    <h2
      className={` lg:px-0 text-3xl md:text-5xl text-center font-lexend font-medium leading-tight ${className}`}
    >
      <span className="text-primary">{colorText}</span> {text}
    </h2>
  );
};

export default TitleText;
