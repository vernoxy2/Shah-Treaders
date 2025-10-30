import React from "react";
import TitleText from "../../../Components/TitleText";
import TailoredSolutionsImg from "../../../assets/Home/TailoredSolutionsImg.webp";
import BottomLine from "../../../Components/BottomLine";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const TailoredSolutions = () => {
  return (
    <section className="py-12 md:py-20">
      <TitleText colorText="Tailored Solutions" text="for Every Industry" />

      <div className="container mt-8 relative">
        {/* Image Wrapper */}
        <div className="relative w-full">
          <img
            src={TailoredSolutionsImg}
            alt="Tailored Solutions"
            className="w-full rounded-xl object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-primary/60 to-transparent rounded-l-xl w-5/12"></div>

          {/* Optional content on overlay */}
          <div className="absolute top-0 left-0 h-full w-5/12 flex flex-col items-start gap-y-9 justify-center z-20 py-5 px-7">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white">
              Consult Customize Deliver
            </h2>
            <BottomLine className="bg-white" />
            <p className="text-white w-[90%]">We understand your needs, consult closely, and provide tailored solutions from our complete range of valves, pumps, and motors—ensuring efficiency, reliability, and performance.</p>
            <PrimaryBtn className="bg-white text-primary hover:bg-[#414141] hover:text-white duration-300 transition-colors " iconclass="group-hover:bg-white group-hover:text-black">Get Your Solution</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredSolutions;
