import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const PrimaryBtn = ({
  children,
  className = "",
  type = "button",
  onClick,
  to, // <— new prop for route navigation
  iconclass = "",
}) => {
  const commonClasses =
    "ps-4 p-1 rounded-full flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 group " +
    className;

  const iconClasses =
    `bg-textdark p-1 rounded-full text-3xl text-white transform transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] ${iconclass}`;

  // if 'to' is provided → use <Link>
  if (to) {
    return (
      <Link to={to} className={commonClasses}>
        <span className="font-karla lg:text-2xl font-bold">{children}</span>
        <div className={iconClasses}>
          <BsArrowRightShort className="text-xl lg:text-4xl"/>
        </div>
      </Link>
    );
  }

  // else → use <button>
  return (
    <div className={commonClasses}>
      <button
        type={type}
        onClick={onClick}
        className="font-karla md:text-2xl font-bold"
      >
        {children}
      </button>
      <div className={iconClasses}>
        <BsArrowRightShort />
      </div>
    </div>
  );
};

export default PrimaryBtn;
