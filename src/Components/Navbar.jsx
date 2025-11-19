import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/aboutus", text: "About Us" },
  // { id: 3, url: "/services", text: "Services" },
  { id: 4, url: "/product", text: "Products" },
  { id: 5, url: "/contact", text: "Contact Us" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log("Searching for:", searchQuery);
  //   // Add your search handling logic here
  // };

  return (
    <nav className="font-karla md:absolute top-6 left-0 w-full z-50 bg-[#EBF1F3] md:bg-transparent">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start h-16 ">
          {/* Logo */}
          <div className="flex items-center space-x-3 lg:w-3/12">
            <img
              src="/LOGO.svg"
              alt="Shah_Traders_Logo"
              className="h-10 md:h-16 object-contain mx-auto"
            />
          </div>

          {/* Desktop Links + Search */}
          <div className="hidden md:flex gap-1 items-center bg-white py-2 px-4 w-[75%] ml-auto rounded-[3px] justify-between">
            {/* Links */}
            <ul className="flex lg:space-x-10 space-x-3   ">
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

            {/* Search Box */}
            <form
              className="relative lg:ml-4 flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
                const trimmedQuery = searchQuery.trim();
                if (!trimmedQuery) return;

                if (location.pathname === "/product") {
                  // Already on Products page → update query params without navigating
                  const params = new URLSearchParams(location.search);
                  params.set("search", trimmedQuery);
                  navigate(`${location.pathname}?${params.toString()}`, {
                    replace: true,
                  });
                } else {
                  // On another page → redirect to Products page with search
                  navigate(
                    `/product?search=${encodeURIComponent(trimmedQuery)}`
                  );
                }
              }}
            >
              {/* 🔍 Search Icon inside input */}
              <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-5 h-5 pointer-events-none" />

              {/* 🔤 Input Field */}
              <input
                type="text"
                value={searchQuery} // controlled input
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-[#EBF1F3] py-1 pl-10 pr-3 text-sm  focus:ring-[1px] focus:ring-primary focus:outline-none border-none rounded-none"
              />

              <button
                type="submit"
                className="ml-2 px-3 py-1 bg-primary text-white rounded hover:bg-primary/80"
              >
                go
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
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
        className={`${
          isMobileOpen ? "block" : "hidden"
        } md:hidden bg-[#EBF1F3] border-t`}
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
