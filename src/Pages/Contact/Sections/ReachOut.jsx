import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import TitleText from "../../../Components/TitleText";
import ShortTitle from "../../../Components/ShortTitle";
import { BiWorld } from "react-icons/bi";

const ReachOutData = [
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
    sub: "+91 260 2425407 |2435407 +91 98796 14936",
  },
  {
    id: 3,
    icon: <MdEmail />,
    title: "Email Us",
    sub: "info@shahtraders.biz",
  },
  {
    id: 4,
    icon: <BiWorld />,
    title: "Our Website",
    sub: "www.shahtraders.biz",
  },
];

const ReachOut = () => {
  return (
    <section>
      <div className="container space-y-10">
        <ShortTitle className="mx-auto">Contact info</ShortTitle>
        <TitleText colorText={"Reach"} text={"Out to Us"} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {ReachOutData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col justify-start items-center space-y-4 bg-white py-9 px-6 rounded-xl text-center group"
              >
                <div className="text-4xl md:text-5xl h-20 md:h-28 w-20 md:w-28 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white duration-500">
                  {item.icon}
                </div>
                <p className=" text-textdark text-2xl font-black">
                  {item.title}
                </p>
                <p>{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
