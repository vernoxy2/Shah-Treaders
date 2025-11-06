import React from "react";
import SaidImg from "../assets/TogetherImg.webp";
import PrimaryBtn from "./PrimaryBtn";

const Together = () => {
  return (
    <section className="-mt-96 lg:-mt-72 ">
      <div className="container">
        <div className="rounded-xl bg-primary grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Text Column */}
          <div className="flex flex-col justify-center items-start px-8 py-12 lg:py-0 space-y-6">
            <h1 className="text-3 xl sm:text-5xl lg:text-5xl  text-white font-lexend">
              Driving Innovation Through Consistency <br className="hidden md:block" /> & Performance
            </h1>
            <PrimaryBtn
              className="bg-white text-primary lg:hover:text-white hover:bg-[#414141] duration-300"
              iconclass="group-hover:bg-white group-hover:text-black"
            >
              Get Started Now
            </PrimaryBtn>
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
