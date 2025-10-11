import React from "react";
import PrimaryBtn from "./PrimaryBtn";

const Primary = ({ headingText, subText, img, className = "" }) => {
  return (
    <section className="p-3">
      <div className="p-14 md:p-20 lg:py-28 bg-[#E0E3E4] bg-gradient-to-b from-[#E0E3E4] to-[#747778]/10 rounded-2xl">
        <div className="container px-0 grid grid-cols-1 lg:grid-cols-2 gap-y-10">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl lg:w-[105%] font-lexend text-white uppercase tracking-tight md:w-[95%]">
              {headingText}
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-karla text-textdark w-[80%]">
              {subText}
            </h2>

            <PrimaryBtn>Explore Products</PrimaryBtn>
          </div>

          {/* Right Image */}
          <div className={`  ${className}`}>
            <img src={img} alt="Primary Section" className="w-full object-cover -mb-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Primary;
    