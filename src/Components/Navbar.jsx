import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/about", text: "About" },
  { id: 3, url: "/services", text: "Services" },
  { id: 4, url: "/product", text: "Products" },
  { id: 5, url: "/contact", text: "Contact Us" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="font-karla md:absolute top-5 left-0 w-full z-50 bg-[#EBF1F3] md:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start h-16 gap-10">
          {/* Logo */}
          <div className="flex items-center space-x-3 w-2/12">
            <img
              src="/LOGO.svg"
              alt="Shah_Traders_Logo"
              className="h-full object-contain"
            />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-10 bg-white py-2 px-5 w-[75%] ml-auto rounded-[3px]">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  end
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-gray-700 hover:text-primary"
                    }`
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={`${isMobileOpen ? "block" : "hidden"} md:hidden bg-[#EBF1F3] border-t`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.url}
                end
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `block transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-gray-700 hover:text-primary"
                  }`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
