import React from "react";
import SaidImg from "../assets/TogetherImg.webp";
import PrimaryBtn from "./PrimaryBtn";

const Together = () => {
  return (
    <section className="absolute -top-72 mx-auto">
      <div className="container">
        <div className="rounded-xl bg-primary grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Text Column */}
          <div className="flex flex-col justify-center px-8 py-12 lg:py-0 space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Let's Build Future Together.
            </h1>
            <PrimaryBtn className="hover:bg-black duration-300">Contact Us</PrimaryBtn>
          </div>

          {/* Image Column */}
          <div className="relative h-96 lg:h-auto">
            <img
              src={SaidImg}
              alt="Together"
              className="w-full h-full object-fill"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Together;
