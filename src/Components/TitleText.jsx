import React from "react";

const TitleText = ({ text, colorText, className = "", brclass = "" }) => {
  const isHidden = brclass.includes("hidden");

  return (
    <h2
      className={`lg:px-0 text-3xl md:text-5xl text-center font-lexend leading-tight ${className}`}
    >
      <span className="text-primary">{colorText}</span>
      {isHidden ? " " : <br className={brclass} />}
      {text}
    </h2>
  );
};

export default TitleText;
