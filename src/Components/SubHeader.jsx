import React from "react";
import Head from "../assets/Contact/HeadImg.webp";

const SubHeader = ({ Head, text }) => {
  return (
    <section className="relative p-2 md:p-3">
      <img
        src={Head}
        alt="Header background"
        className=" object-cover h-auto w-full mx-auto "
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl uppercase font-lexend text-center text-white    ">
          {text}
        </h1>
      </div>
    </section>
  );
};

export default SubHeader;
