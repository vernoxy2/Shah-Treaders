import React from "react";

const PrimaryBtn = ({ children, className = "", type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-white text-primary font-karla text-2xl font-bold rounded-full py-2 px-6 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
