import React from "react";

const BottomLine = ({ width = "w-[140px]", className = "" }) => {
  return (
    <div
      className={`${width} h-1 bg-primary rounded-lg ${className}`}
    ></div>
  );
};

export default BottomLine;
