import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import Head from "../assets/Home/Head/Head.webp";

// const style = {
//   backgroundImage: `url(${Head})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   width: "100%",
//   // height: "100vh",
// };

const Primary = ({ headingText, subText, img, className = "" }) => {
  return (
    <section
      style={{ backgroundImage: `url(${Head})` }}
      className="relative bg-cover bg-center bg-no-repeat m-2 md:m-3 rounded-lg"
    >
      {/* Overlay for better responsiveness */}
      <div className="absolute inset-0 "></div>

      <div className=" relative flex items-center justify-center">

        {/* Container */}
        <div className="container mt-5 md:pr-0 border-black grid grid-cols-1 md:grid-cols-2 gap-y-5 ">
          {/* Left Content */}
          <div className="space-y-3 lg:space-y-6 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <h1 className="text-3xl md:text-3xl lg:text-5xl 2xl:text-6xl lg:w-[105%] font-lexend text-[#14A8D5] uppercase tracking-tight md:w-[95%]">
              {headingText}
            </h1>

            <h2 className="text-base md:text-lg lg:text-3xl leading-5 font-karla text-textdark w-[80%]">
              {subText}
            </h2>

            <PrimaryBtn
              to={"/product"}
              className="w-fit bg-white hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Explore Products
            </PrimaryBtn>
          </div>

          {/* Right Image */}
          <div
            className={`w-full h-[200px] md:h-[400px] flex justify-center ${className}`}
          >
            <img
              src={img}
              alt="Primary Section"
              className="w-full max-w-sm sm:max-w-md md:max-w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>


      </div>
    </section>
  );
};

export default Primary;
