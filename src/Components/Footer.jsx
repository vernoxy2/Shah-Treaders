import React from "react";
import Bg from "../assets/FooterBg.webp";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import Together from "./Together";

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
    id:1,
    icon:<FaMapMarkerAlt/>,
    title:"Our Location",
    sub:"06, Platinum Commercial Centre, Opp. VIA Ground, G.I.D.C, Vapi - 396 195, Gujarat. INDIA"
  },
  {
    id:2,
    icon:<MdCall/>,
    title:"Call Us",
    sub:"06, Platinum Commercial Centre, Opp. VIA Ground, G.I.D.C, Vapi - 396 195, Gujarat. INDIA"
  },
  {
    id:3,
    icon:<MdEmail/>,
    title:"Email Us",
    sub:"info@shahtraders.biz"
  }
]

const Footer = () => {
  return (
    <section style={style} className="relative pt-52">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-1">
      <Together/>
        {/* Logo */}
        <div className="col-span-2 w-80">
          <img src="/LOGO.svg" alt="Logo" />
          <p className="text-textcolor">
            <span className="text-primary font-bold">Shah Traders</span>{" "}
            delivers reliable gaskets, pumps, motors, and valves, serving
            industries with quality, innovation, efficiency, and trusted ethical
            solutions.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <p className="text-primary">Quick Links</p>
          <ul>
            {QuickLink.map((link) => {
              return (
                <Link to={link.url} key={link.id}>
                  <p className="text-textdark">{link.text}</p>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* Products */}
        <div>
          <p className="text-primary">Products </p>
          <ul>
            {Products.map((product) => {
              return (
                <Link to={product.url} key={product.id}>
                  <p className="text-textdark">{product.text}</p>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* Reach Us */}
        <div className="col-span-2">
          <p className="text-primary">Reach Us</p>
          <ul>
            {ReachOut.map((reach) => {
              return (
                <div className="flex">
                  <div>{reach.icon}</div>
                  <div> <h1>{reach.title}</h1> <h1>{reach.sub}</h1></div>
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
