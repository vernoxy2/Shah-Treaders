import React from "react";

const TitleText = ({ text, colorText, className = "" }) => {
  return (
    <h2
      className={`text-3xl md:text-5xl text-center font-lexend font-semibold leading-tight ${className}`}
    >
      <span className="text-primary">{colorText}</span> {text}
    </h2>
  );
};

export default TitleText;
