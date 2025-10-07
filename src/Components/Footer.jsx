import React from "react";
import Bg from "../assets/FooterBg.webp";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import Together from "./Together";
import BottomLine from "./BottomLine";

const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

// Quick Links Array
const QuickLink = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About Us",
  },
  {
    id: 3,
    url: "/product",
    text: "Product",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact Us",
  },
];

// Products Array
const Products = [
  {
    id: 1,
    url: "/product",
    text: "Gasket",
  },
  {
    id: 2,
    url: "/product",
    text: "Motor",
  },
  {
    id: 3,
    url: "/product",
    text: "Pump",
  },
  {
    id: 4,
    url: "/product",
    text: "Valve",
  },
];

const SoicalLink = [
  {
    id: 1,
    url: "www.whatsapp.com",
    icon: <FaWhatsapp />,
  },
  {
    id: 2,
    url: "www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: "www.facebook.com",
    icon: <FaFacebookF />,
  },
  {
    id: 4,
    url: "www.twitter.com",
    icon: <FaXTwitter />,
  },
];

const ReachOut = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Our Location",
    sub: "06, Platinum Commercial Centre, Opp. VIA Ground, G.I.D.C, Vapi - 396 195, Gujarat. INDIA",
  },
  {
    id: 2,
    icon: <MdCall />,
    title: "Call Us",
    sub: "06, Platinum Commercial Centre, Opp. VIA Ground, G.I.D.C, Vapi - 396 195, Gujarat. INDIA",
  },
  {
    id: 3,
    icon: <MdEmail />,
    title: "Email Us",
    sub: "info@shahtraders.biz",
  },
];

const Footer = () => {
  return (
    <section style={style} className=" -pt-52">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 gap-y-10">
        {/* Logo */}
        <div className="col-span-2  space-y-5">
          <img src="/LOGO.svg" alt="Logo" className="lg:w-1/2 pointer-events-none" />
          <p className="text-textcolor">
            <span className="text-primary font-bold">Shah Traders</span>{" "}
            delivers reliable gaskets, pumps, motors, and valves, serving
            industries with quality, innovation, efficiency, and trusted ethical
            solutions.
          </p>
          <BottomLine />
        </div>
        {/* Quick Links */}
        <div className="space-y-2">
          <p className="text-primary text-xl md:text-2xl font-medium">
            Quick Links
          </p>
          <ul>
            {QuickLink.map((link) => {
              return (
                <Link to={link.url} key={link.id}>
                  <p className="text-textdark font-medium">{link.text}</p>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* Products */}
        <div className="space-y-2">
          <p className="text-primary text-xl md:text-2xl font-medium">
            Products{" "}
          </p>
          <ul className="">
            {Products.map((product) => {
              return (
                <Link to={product.url} key={product.id}>
                  <p className="text-textdark font-medium">{product.text}</p>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* Reach Us */}
        <div className="col-span-2 space-y-2 md:w-[70%] lg:w-full">
          <p className="text-primary text-xl md:text-2xl font-medium">
            Reach Us
          </p>
          <ul className="flex flex-col justify-center gap-4">
            {ReachOut.map((reach) => {
              return (
                <div className="flex gap-3">
                  <div className="text-4xl text-primary">{reach.icon}</div>
                  <div>
                    <p className="text-textdark font-bold text-xl md:text-2xl">{reach.title}</p>{" "}
                    <p className="text-textcolor">{reach.sub}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Social Links */}
      <div className="-space-y-10">
        <ul className="flex justify-center gap-4">
          {SoicalLink.map((link) => {
            return (
              <a
                href={link.url}
                key={link.id}
                className="text-white bg-primary rounded-full text-lg p-2"
              >
                {link.icon}
              </a>
            );
          })}
        </ul>
      </div>

      <div className="border border-dashed"></div>
    </section>
  );
};

export default Footer;
