import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import { TbTruckDelivery } from "react-icons/tb";

const Data = [
  {
    id: 1,
    icon: <TbTruckDelivery />,
    title: "High-Quality Products",
    sub: "Durable valves, pumps, and motors built for precision.",
  },
  {
    id: 2,
    icon: <TbTruckDelivery />,
    title: "Industry Expertise",
    sub: "Decades of experience serving multiple industries.",
  },
  {
    id: 3,
    icon: <TbTruckDelivery />,
    title: "Custom Solutions",
    sub: "Tailored solutions to meet specific client needs.",
  },
  {
    id: 4,
    icon: <TbTruckDelivery />,
    title: "Reliable Support",
    sub: "Installation, maintenance, and technical assistance.",
  },
  {
    id: 5,
    icon: <TbTruckDelivery />,
    title: "Certified & Compliant",
    sub: "ISO certified products with strict quality standards.",
  },
  {
    id: 6,
    icon: <TbTruckDelivery />,
    title: "Fast Delivery",
    sub: "Tailored solutions to meet specific client needs.",
  },
];

const ProvenChoice = () => {
  return (
    <section className="py-12 md:py-20">
      <ShortTitle className="mx-auto">Proven Choice</ShortTitle>
      <TitleText colorText="Why" text="Choice Us" />

      <div className="container mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-start items-center space-y-4 bg-white hover:bg-primary group transition-all duration-300 py-10 pb-14 px-6 rounded-xl text-center"
            >
              <div className="flex items-center justify-center h-28 w-28 text-5xl rounded-full group-hover:bg-white bg-primary/10 text-primary  transition-colors duration-500">
                {item.icon}
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
