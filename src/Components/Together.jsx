import React from "react";
import SaidImg from "../assets/TogetherImg.webp";
import PrimaryBtn from "./PrimaryBtn";

const Together = () => {
  return (
    <section className="">
      <div className="container">
        <div className="rounded-xl bg-primary grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Text Column */}
          <div className="flex flex-col justify-center items-start px-8 py-12 lg:py-0 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-white font-lexend">
              Let's Build Future Together.
            </h1>
            <PrimaryBtn className="bg-white text-primary lg:hover:text-white hover:bg-black duration-300">Get Started Now</PrimaryBtn>
          </div>

          {/* Image Column */}
          <div className="relative lg:h-96 ">
            <img
              src={SaidImg}
              alt="Together"
              className="w-full lg:h-full object-fill pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Together;
