import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import bg from "../../../assets/FooterBg.webp";
import img from "../../../assets/About/Img.webp";
import { GoGoal } from "react-icons/go";
import BottomLine from "../../../Components/BottomLine";
import { GiBinoculars } from "react-icons/gi";

const style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Values = [
  {
    id: 1,
    icon: <GoGoal />,
    colorText: "Our",
    text: "Mission",
    sub: "To be the first choice for industrial products by delivering high-quality, cost-effective solutions that empower industries and ensure reliable performance",
  },
  {
    id: 2,
    icon: <GiBinoculars />,
    colorText: "Our",
    text: "Vision",
    sub: "To expand our brand beyond borders, uphold our core values, and establish the company as a global benchmark and trusted name in the industrial products sector",
  },
];

const Core_Values = () => {
  return (
    <section style={style}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div data-aos="fade-right" className=" lg:h-auto w-full  rounded-lg overflow-hidden">
          <img src={img} alt="" className="h-full mx-auto object-contain" />
        </div>

        <div className="flex h-full flex-col justify-start items-start space-y-6 ">
          <ShortTitle>Get to Know Us</ShortTitle>
          <TitleText
            colorText={"Our Mission, Vision and"}
            text={"Core Values"}
            className="text-start "
            brclass="hidden"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8  h-full">
            {Values.map((item) => {
              return (
                <div
                data-aos="flip-right"
                  key={item.id}
                  className="flex flex-col justify-between items-start space-y-2 bg-white py-8 px-4 hover:bg-primary duration-500 hover:text-white group rounded-lg"
                >
                  <div>

                  <div className="flex text-5xl items-center gap-4 group text-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-500">
                    {item.icon}
                    <h2 className="text-xl md:text-2xl font-lexend font-semibold leading-tight">
                      <span className=" group-hover:text-white transition-colors duration-500">
                        {item.colorText}
                      </span>{" "}
                      <span className="group-hover:text-white text-black transition-colors duration-500">
                        {item.text}
                      </span>
                    </h2>
                  </div>

                  <p className="group-hover:text-white">{item.sub}</p>
                  </div>
                  <BottomLine />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Core_Values;
