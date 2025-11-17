import React from "react";
import Bg from "../assets/FooterBg.webp";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import BottomLine from "./BottomLine";
import Together from "./Together";

// ✅ Background styling
const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

// ✅ Quick Links
const QuickLink = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/aboutus", text: "About Us" },
  { id: 3, url: "/product", text: "Product" },
  { id: 4, url: "/contact", text: "Contact Us" },
];

// ✅ Products
const Products = [
  { id: 1, url: "/product", text: "Gasket" },
  { id: 2, url: "/product", text: "Motor" },
  { id: 3, url: "/product", text: "Pump" },
  { id: 4, url: "/product", text: "Valve" },
];

// ✅ Social Links — with full URLs + open in new tab
const SocialLink = [
  {
    id: 1,
    url: "https://wa.me/919879614936",
    icon: <FaWhatsapp />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    id: 4,
    url: "https://twitter.com/",
    icon: <FaXTwitter />,
  },
];

// ✅ Reach Us
const ReachOut = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Our Location",
    sub: "06, Platinum Commercial Centre, Opp. VIA Ground, G.I.D.C, Vapi - 396195, Gujarat, INDIA",
    link: "https://maps.app.goo.gl/scxhr776F3qAU4CH9",
  },
  {
    id: 2,
    icon: <MdCall />,
    title: "Call Us",
    sub: (
      <>
        +91 260 2425407 | 2435407 <br /> +91 98796 14936
      </>
    ),
    link: "tel:+919879614936",
  },
  {
    id: 3,
    icon: <MdEmail />,
    title: "Email Us",
    sub: "info@shahtraders.biz",
    link: "mailto:info@shahtraders.biz",
  },
];

const Footer = ({children}) => {
  return (
    <section data-aos="fade" style={style} className="pt-10 pb-6">

      {children}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10">
        {/* ✅ Logo */}
        <div className="col-span-2 space-y-5">
          <img
            src="/LOGO.svg"
            alt="Logo"
            className="lg:w-1/2 pointer-events-none"
          />
          <p className="text-textcolor">
            <span className="text-primary font-bold uppercase   ">Shah Traders</span>{" "}
            delivers reliable gaskets, pumps, motors, and valves, serving
            industries with quality, innovation, efficiency, and trusted ethical
            solutions.
          </p>
          <BottomLine />
        </div>

        {/* ✅ Quick Links */}
        <div className="space-y-2">
          <p className="text-primary text-xl md:text-2xl ">
            Quick links
          </p>
          <ul className="flex flex-col gap-1">
            {QuickLink.map((link) => (
              <NavLink
                to={link.url}
                key={link.id}
                className={({ isActive }) =>
                  `text-textdark text-xl md:text-2xl font-medium hover:text-primary transition-colors duration-200 ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* ✅ Products */}
        <div className="space-y-2">
          <p className="text-primary text-xl md:text-2xl">
            Products
          </p>
          <ul className="flex flex-col gap-1">
            {Products.map((product) => (
              <NavLink
                to={product.url}
                key={product.id}
                className={({ isActive }) =>
                  `text-textdark text-xl md:text-2xl font-medium hover:text-primary transition-colors duration-200 ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                {product.text}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* ✅ Reach Us */}
        <div className="col-span-2 space-y-2 md:w-[70%] lg:w-full">
          <p className="text-primary text-xl md:text-2xl font-medium">
            Reach Us
          </p>
          <ul className="flex flex-col justify-center gap-4">
            {ReachOut.map((reach) => (
              <div key={reach.id} className="flex gap-3">
                <div className="text-4xl text-primary">{reach.icon}</div>
                <div>
                  <p className="text-textdark font-bold text-xl md:text-2xl">
                    {reach.title}
                  </p>
                  <a
                    href={reach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textcolor text-lg md:text-xl hover:text-primary transition-colors duration-200"
                  >
                    {reach.sub}
                  </a>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* ✅ Social Links */}
      <div className="space-y-3 mt-6">
        <ul className="flex justify-center gap-4">
          {SocialLink.map((link) => (
            <a
              href={link.url}
              key={link.id}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-primary rounded-full text-lg p-2 hover:bg-primary/80 transition-colors duration-200"
            >
              {link.icon}
            </a>
          ))}
        </ul>
        <div className="border-t border-dashed border-primary/40 mt-4"></div>
      </div>
    </section>
  );
};

export default Footer;
