import React from "react";
import ShortLogo from "../assets/ShortLogo.svg";

const ShortTitle = ({ children, className = "" }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`inline-flex gap-3 items-center justify-center border-dashed border border-textcolor p-2 ${className}`}
      >
        <img src={ShortLogo} alt="Logo" className="pointer-events-none" />
        <h1 className="text-lg md:text-xl font-lexend text-textdark">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default ShortTitle;
