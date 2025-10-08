import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import { IoDiamondOutline } from "react-icons/io5";
import BottomLine from "../../../Components/BottomLine";

const Values = [
  {
    id: 1,
    icon: <IoDiamondOutline className="mx-auto text-5xl" />,
    title: "Quality First",
    sub: "Delivering reliable and high-performance products.",
  },
  {
    id: 2,
    icon: <IoDiamondOutline className="mx-auto text-5xl" />,
    title: "Customer Focus",
    sub: "Understanding and meeting every client's unique needs.",
  },
  {
    id: 3,
    icon: <IoDiamondOutline className="mx-auto text-5xl" />,
    title: "Integrity",
    sub: "Conducting business with honesty and transparency.",
  },
  {
    id: 4,
    icon: <IoDiamondOutline className="mx-auto text-5xl" />,
    title: "Commitment",
    sub: "Dedicated to long-term relationships and satisfaction,",
  },
];

const Guiding_Values = () => {
  return (
    <section>
      <ShortTitle className="mx-auto">Guiding Values</ShortTitle>
      <TitleText colorText={"Our"} text={"Core Values"} />
      <IoDiamondOutline className="mx-auto text-5xl text-primary" />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {Values.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between items-start space-y-4 bg-white py-9 px-4 hover:bg-primary duration-500 hover:text-white group"
            >
              <div className="flex gap-6 items-center justify-between group-hover:text-white text-primary duration-500">
                {item.icon}
                <p className=" text-primary font-lexend text-3xl group-hover:text-white duration-500">
                  {item.title}
                </p>
              </div>
              <p className="group-hover:text-white">{item.sub}</p>
              <BottomLine />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Guiding_Values;
