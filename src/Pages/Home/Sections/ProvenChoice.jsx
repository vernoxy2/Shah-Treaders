import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import { TbTruckDelivery } from "react-icons/tb";
import SVG1 from "../../../assets/Home/Choose/Svg1.svg";
import SVG2 from "../../../assets/Home/Choose/Svg2.svg";
import SVG3 from "../../../assets/Home/Choose/Svg3.svg";
import SVG4 from "../../../assets/Home/Choose/Svg4.svg";
import SVG5 from "../../../assets/Home/Choose/Svg5.svg";
import SVG6 from "../../../assets/Home/Choose/Svg6.svg";

const Data = [
  {
    id: 1,
    img: SVG1,
    title: "High-Quality Products",
    sub: "Durable valves, pumps, and motors built for precision.",
  },
  {
    id: 2,
    img: SVG2,
    title: "Industry Expertise",
    sub: "Decades of experience serving multiple industries.",
  },
  {
    id: 3,
    img: SVG3,
    title: "Custom Solutions",
    sub: "Tailored solutions to meet specific client needs.",
  },
  {
    id: 4,
    img: SVG4,
    title: "Reliable Support",
    sub: "Installation, maintenance, and technical assistance.",
  },
  {
    id: 5,
    img: SVG5,
    title: "Certified & Compliant",
    sub: "ISO certified products with strict quality standards.",
  },
  {
    id: 6,
    img: SVG6,
    title: "Fast Delivery",
    sub: "Tailored solutions to meet specific client needs.",
  },
];

const ProvenChoice = () => {
  return (
    <section className="py-12 md:py-20">
      <ShortTitle className="mx-auto">Proven Choice</ShortTitle>
      <TitleText colorText="Why" text="Choice Us" brclass="hidden" />

      <div className="container mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-start items-center space-y-4 bg-white hover:scale-105 hover:bg-primary group transition-all duration-300 py-10 pb-14 px-6 rounded-xl text-center"
            >
              <div className=" p-2 flex items-center justify-center h-28 w-28 text-5xl rounded-full group-hover:bg-white bg-primary/10 text-primary  transition-colors duration-500">
                <img src={item.img} alt="" className="p-2" />
              </div>
              <p className="text-textdark group-hover:text-white text-2xl font-bold transition-colors duration-500">
                {item.title}
              </p>
              <p className="group-hover:text-white transition-colors duration-500  w-[70%]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenChoice;
