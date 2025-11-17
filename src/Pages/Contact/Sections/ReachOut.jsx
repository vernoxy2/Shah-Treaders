import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import TitleText from "../../../Components/TitleText";
import ShortTitle from "../../../Components/ShortTitle";

const ReachOutData = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Our Location",
    sub: "06, Platinum Commercial Centre, Opp. VIA Ground, G.I.D.C, Vapi - 396 195, Gujarat. INDIA",
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
  {
    id: 4,
    icon: <BiWorld />,
    title: "Our Website",
    sub: "www.shahtraders.biz",
    link: "https://shah-treaders.vercel.app/",
  },
];

const ReachOut = () => {
  return (
    <section id="ReachOut">
      <div className="container space-y-10">
        <ShortTitle className="mx-auto">Contact info</ShortTitle>
        <TitleText colorText={"Reach"} text={"Out to Us"} brclass="hidden " />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {ReachOutData.map((item) => (
            <a
            data-aos="zoom-out-up"
              key={item.id}
              target="_blank"
              href={item.link}
              rel="noopener noreferrer"
              className="flex flex-col justify-start items-center space-y-4 bg-white py-9 px-6 rounded-xl text-center group active:scale-95 duration-200 transition-all"
            >
              <div className="text-4xl md:text-5xl h-20 md:h-28 w-20 md:w-28 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white duration-500">
                {item.icon}
              </div>
              <p className="text-textdark text-2xl font-black">
                {item.title}
              </p>
              <p>{item.sub}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
