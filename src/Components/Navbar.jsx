import React from "react";

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/product",
    text: "product",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-center">
          <h3>Shah Treaders</h3>
          <ul className="nav-links">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
