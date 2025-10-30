import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const PrimaryBtn = ({
  children,
  className = "",
  type = "button",
  onClick,
  iconclass = "",
}) => {
  return (
    <div
      className={`ps-4 p-1 rounded-full flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 group ${className}`}
    >
      <button
        type={type}
        onClick={onClick}
        className="font-karla text-2xl font-bold"
      >
        {children}
      </button>
      <div
        className={`bg-[#414141] p-1 rounded-full text-3xl text-white transform transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] ${iconclass}`}
      >
        <BsArrowRightShort />
      </div>
    </div>
  );
};

export default PrimaryBtn;
